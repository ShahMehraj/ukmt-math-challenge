import { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, BookOpen } from "lucide-react";
import { BOOK_BY_ID } from "@/data/books";
import { PROBLEM_BY_ID } from "@/data/problems";
import { LessonRenderer } from "@/components/lesson/LessonRenderer";
import { ProblemCard } from "@/components/ProblemCard";
import { cn } from "@/lib/cn";
import { NotFound } from "./NotFound";

export function BookReader() {
  const { bookId, chapterId } = useParams();
  const book = bookId ? BOOK_BY_ID[bookId] : undefined;

  // When no chapter is selected, show the book's chapter list.
  if (!book) return <NotFound />;
  if (!chapterId) return <ChapterList bookId={book.id} />;

  const chapter = book.chapters.find((c) => c.id === chapterId);
  if (!chapter) return <NotFound />;

  return <ChapterReader bookId={book.id} chapterId={chapter.id} />;
}

// ─── Book landing: list of chapters ─────────────────────────────────────────

function ChapterList({ bookId }: { bookId: string }) {
  const book = BOOK_BY_ID[bookId]!;
  return (
    <div className="space-y-8">
      <header>
        <Link
          to="/books"
          className="text-sm font-medium text-brand-600 hover:underline"
        >
          ← Books
        </Link>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight">
          {book.title}
        </h1>
        {book.author && (
          <p className="mt-1 text-slate-500 dark:text-slate-400">{book.author}</p>
        )}
        <p className="mt-3 max-w-3xl text-slate-600 dark:text-slate-300">
          {book.description}
        </p>
      </header>

      <div className="space-y-3">
        {book.chapters.map((c) => (
          <Link
            key={c.id}
            to={`/books/${book.id}/${c.id}`}
            className="card group flex items-start gap-4 p-5 transition-all hover:border-brand-400 hover:shadow-lg dark:hover:border-brand-500"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-lg font-bold text-brand-600 dark:bg-brand-900/40 dark:text-brand-300">
              {c.number}
            </span>
            <div className="min-w-0 flex-1">
              <h3 className="text-lg font-bold leading-tight">{c.title}</h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                {c.blurb}
              </p>
              <p className="mt-2 text-xs text-slate-500">
                {c.sections.length} concept sections ·{" "}
                {c.practiceProblemIds.length} practice problems
              </p>
            </div>
            <ChevronRight
              size={20}
              className="mt-1 shrink-0 text-slate-300 transition-colors group-hover:text-brand-500"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

// ─── Chapter reader: one concept section at a time ──────────────────────────

function ChapterReader({
  bookId,
  chapterId,
}: {
  bookId: string;
  chapterId: string;
}) {
  const book = BOOK_BY_ID[bookId]!;
  const chapter = book.chapters.find((c) => c.id === chapterId)!;

  // Pages: [...sections, practice] (practice only if there are problems)
  const practice = useMemo(
    () =>
      chapter.practiceProblemIds
        .map((pid) => PROBLEM_BY_ID[pid])
        .filter(Boolean),
    [chapter.id]
  );
  const hasPractice = practice.length > 0;
  const totalPages = chapter.sections.length + (hasPractice ? 1 : 0);

  const [idx, setIdx] = useState(0);
  useEffect(() => setIdx(0), [chapter.id]);

  const isPractice = hasPractice && idx === chapter.sections.length;
  const section = chapter.sections[idx];

  function go(next: number) {
    setIdx(Math.max(0, Math.min(next, totalPages - 1)));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="flex gap-8">
      {/* Left panel — section navigation */}
      <aside className="hidden w-56 shrink-0 lg:block">
        <nav className="sticky top-24 space-y-0.5">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-widest text-slate-400">
            Contents
          </p>
          {chapter.sections.map((s, i) => (
            <NavItem
              key={s.id}
              label={`${i + 1}. ${s.title}`}
              active={!isPractice && idx === i}
              onClick={() => go(i)}
            />
          ))}
          {hasPractice && (
            <NavItem
              label="Practice problems"
              active={isPractice}
              onClick={() => go(chapter.sections.length)}
            />
          )}
        </nav>
      </aside>

      {/* Main content */}
      <article className="min-w-0 flex-1 space-y-6">
        <header>
          <Link
            to={`/books/${book.id}`}
            className="text-sm font-medium text-brand-600 hover:underline"
          >
            ← {book.title}
          </Link>
          <div className="mt-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
            <BookOpen size={13} /> Chapter {chapter.number}
          </div>
          <h1 className="mt-1 text-3xl font-extrabold tracking-tight">
            {chapter.title}
          </h1>

          {/* Progress bar */}
          <div className="mt-4">
            <div className="mb-1 flex justify-between text-xs text-slate-500">
              <span>
                {isPractice
                  ? "Practice problems"
                  : `${idx + 1} / ${chapter.sections.length} — ${section?.title}`}
              </span>
              <span>
                {Math.round(((idx + 1) / totalPages) * 100)}%
              </span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
              <div
                className="h-full rounded-full bg-brand-500 transition-all"
                style={{ width: `${((idx + 1) / totalPages) * 100}%` }}
              />
            </div>
          </div>
        </header>

        {/* Section body */}
        {!isPractice && section && (
          <div className="space-y-2">
            <h2 className="text-xl font-bold">{section.title}</h2>
            <LessonRenderer blocks={section.blocks} />
          </div>
        )}

        {/* Practice page */}
        {isPractice && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Practice problems</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Original questions in the style of this chapter's exercises. They
              are also available, fully filterable, in the Problem Bank.
            </p>
            {practice.map((p) => (
              <ProblemCard key={p.id} problem={p} />
            ))}
          </div>
        )}

        {/* Prev / next navigation */}
        <div className="flex items-center justify-between border-t border-slate-200 pt-6 dark:border-slate-800">
          <button
            onClick={() => go(idx - 1)}
            disabled={idx === 0}
            className={cn(
              "flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors",
              idx === 0
                ? "cursor-not-allowed text-slate-300 dark:text-slate-700"
                : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
            )}
          >
            <ChevronLeft size={16} /> Previous
          </button>
          <span className="text-xs text-slate-400">
            {idx + 1} / {totalPages}
          </span>
          <button
            onClick={() => go(idx + 1)}
            disabled={idx === totalPages - 1}
            className={cn(
              "flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors",
              idx === totalPages - 1
                ? "cursor-not-allowed text-slate-300 dark:text-slate-700"
                : "bg-brand-600 text-white hover:bg-brand-700"
            )}
          >
            Next <ChevronRight size={16} />
          </button>
        </div>
      </article>
    </div>
  );
}

function NavItem({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "block w-full rounded-lg px-3 py-1.5 text-left text-sm transition-colors",
        active
          ? "bg-brand-50 font-semibold text-brand-700 dark:bg-brand-950/40 dark:text-brand-300"
          : "text-slate-500 hover:bg-slate-100 hover:text-slate-700 dark:text-slate-400 dark:hover:bg-slate-800"
      )}
    >
      {label}
    </button>
  );
}
