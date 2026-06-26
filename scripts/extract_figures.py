#!/usr/bin/env python3
"""
Extract figures from the official UKMT PDFs as tight vector SVGs.

Pipeline per figure: set the PDF CropBox to the figure's bounding box, write a
one-page cropped PDF, then convert it to a tight SVG with pdftocairo (true
vector — exact to the original geometry).

Boxes are given in "from the top-left of the page", in PDF points (1pt = 1/72in;
A4 is 595.28 x 841.89). Use --preview to render PNGs with a coordinate grid so
boxes can be tuned, then drop --preview to emit the SVGs.

Usage:
  python3 scripts/extract_figures.py --paper imc-2024 [--only q3,q9] [--preview]
"""
import argparse, json, subprocess, sys
from pathlib import Path
from PyPDF2 import PdfReader, PdfWriter

ROOT = Path(__file__).resolve().parent.parent
PAGE_H = 841.89

# Source PDFs per paper id.
SOURCES = {
    "imc-2024": ROOT / "docs/IMC/IMC_2024-Paper.pdf",
    "imc-2023": ROOT / "docs/IMC/IMC_2023_Paper-1.pdf",
    "imc-2022": ROOT / "docs/IMC/IMC-2022-Paper-1.pdf",
}

# Figure boxes: paper -> { qkey: (page, x0, y_top, x1, y_bottom) } in points,
# y measured from the TOP of the page. Filled in via the preview workflow.
BOXES = json.loads((Path(__file__).parent / "figure_boxes.json").read_text()) \
    if (Path(__file__).parent / "figure_boxes.json").exists() else {}


def crop_pdf(src: Path, page_idx: int, box, out: Path):
    x0, ytop, x1, ybot = box
    y0, y1 = PAGE_H - ybot, PAGE_H - ytop  # to PDF origin (bottom-left)
    r = PdfReader(str(src))
    pg = r.pages[page_idx]
    for b in (pg.mediabox, pg.cropbox):
        b.lower_left = (x0, y0)
        b.upper_right = (x1, y1)
    w = PdfWriter(); w.add_page(pg)
    with open(out, "wb") as f:
        w.write(f)


def to_svg(pdf: Path, svg: Path):
    subprocess.run(["pdftocairo", "-svg", str(pdf), str(svg)], check=True)


def to_png(pdf: Path, png_stem: Path, dpi=300):
    subprocess.run(["pdftoppm", "-png", "-r", str(dpi), str(pdf), str(png_stem)],
                   check=True)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--paper", required=True)
    ap.add_argument("--only", default="")
    ap.add_argument("--preview", action="store_true")
    args = ap.parse_args()

    src = SOURCES[args.paper]
    boxes = BOXES.get(args.paper, {})
    only = set(args.only.split(",")) if args.only else None

    out_dir = ROOT / "public/papers" / args.paper
    out_dir.mkdir(parents=True, exist_ok=True)
    tmp = ROOT / "scripts/.tmp"; tmp.mkdir(exist_ok=True)

    for qkey, spec in boxes.items():
        if only and qkey not in only:
            continue
        page, *box = spec
        crop = tmp / f"{qkey}.pdf"
        crop_pdf(src, page - 1, box, crop)
        if args.preview:
            to_png(crop, tmp / f"{qkey}", dpi=300)
            print(f"preview {qkey} -> scripts/.tmp/{qkey}-1.png")
        else:
            svg = out_dir / f"{qkey}.svg"
            to_svg(crop, svg)
            print(f"svg {qkey} -> {svg.relative_to(ROOT)} ({svg.stat().st_size}b)")


if __name__ == "__main__":
    main()
