#!/usr/bin/env python3

import re
from pathlib import Path
from urllib.parse import urljoin
import requests
from bs4 import BeautifulSoup
from tqdm import tqdm

URL = "https://ukmt.org.uk/competition-papers/jsf/jet-engine:free-past-papers/tax/challenge-type:74/"

HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
        "AppleWebKit/537.36 (KHTML, like Gecko) "
        "Chrome/137.0 Safari/537.36"
    )
}

OUT_DIR = Path(__file__).resolve().parent.parent / "docs" / "Hamilton"
OUT_DIR.mkdir(parents=True, exist_ok=True)


def clean(name: str) -> str:
    for c in '<>:"/\\|?*':
        name = name.replace(c, "_")
    return name.strip()


def year_from_url(pdf_url: str) -> str | None:
    """Extract the competition year from the PDF file name (not the /uploads/YYYY/ path)."""
    slug = pdf_url.split("/")[-1]
    m = re.search(r"(20\d{2})", slug)
    return m.group(1) if m else None


def build_filename(title: str, pdf_url: str, fallback_year: str | None) -> str:
    """Build a unique, year-tagged filename.

    The page uses generic link text ("Questions", "Solutions",
    "Markers Report") for every year, so we derive the year from the
    PDF file name in the URL. Some files (e.g. markers reports) lack a
    year in the URL, so we fall back to the last-seen year for that block.
    """
    slug = pdf_url.split("/")[-1]
    year = year_from_url(pdf_url) or fallback_year

    title_norm = clean(title).lower()
    if "question" in title_norm or "paper" in title_norm:
        kind = "Questions"
    elif "solution" in title_norm:
        kind = "Solutions"
    elif "marker" in title_norm:
        kind = "Markers-Report"
    elif "answer sheet" in title_norm:
        kind = "Answer-Sheet"
    else:
        kind = clean(title)

    if year:
        return f"Hamilton_{year}_{kind}.pdf"
    # No year at all (e.g. the shared sample answer sheet) -> use the URL slug.
    return slug if slug.lower().endswith(".pdf") else clean(title) + ".pdf"


session = requests.Session()
session.headers.update(HEADERS)

print("Fetching page...")
r = session.get(URL, timeout=30)
r.raise_for_status()

soup = BeautifulSoup(r.text, "lxml")

pdfs = []

for a in soup.find_all("a", href=True):
    href = a["href"]

    if ".pdf" not in href.lower():
        continue

    pdf_url = urljoin(URL, href)

    title = a.get_text(" ", strip=True)
    if not title:
        title = pdf_url.split("/")[-1]

    pdfs.append((title, pdf_url))

print(f"Found {len(pdfs)} PDF(s).")

if not pdfs:
    print("\nNo PDFs found.")
    print("Saving HTML for debugging...")
    with open(OUT_DIR / "hamilton_debug.html", "w", encoding="utf-8") as f:
        f.write(r.text)
    print("Saved as hamilton_debug.html")
    raise SystemExit

fallback_year = None

for title, pdf_url in pdfs:

    # Track the most recent year seen so year-less files (markers reports)
    # inherit the year from the Questions/Solutions above them.
    y = year_from_url(pdf_url)
    if y:
        fallback_year = y

    filename = build_filename(title, pdf_url, fallback_year)

    path = OUT_DIR / filename

    if path.exists():
        print(f"Skipping {filename}")
        continue

    print(f"Downloading {filename}")

    resp = session.get(pdf_url, stream=True, timeout=60)
    resp.raise_for_status()

    total = int(resp.headers.get("content-length", 0))

    with open(path, "wb") as f:
        with tqdm(total=total, unit="B", unit_scale=True, leave=False) as bar:
            for chunk in resp.iter_content(8192):
                if chunk:
                    f.write(chunk)
                    bar.update(len(chunk))

print("\nDone.")
