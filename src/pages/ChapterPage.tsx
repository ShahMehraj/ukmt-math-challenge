import { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Clock,
  Target,
  AlertTriangle,
  Lightbulb,
  ListChecks,
  Trophy,
  ScrollText,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { CHAPTER_BY_ID } from "@/data/chapters";
import { ensureSubChapters } from "@/data/chapters/split-sub-chapters";
import { PROBLEM_BY_ID } from "@/data/problems";
import { TOPIC_BY_ID } from "@/data/topics";
import { LessonRenderer } from "@/components/lesson/LessonRenderer";
import { WorkedExample } from "@/components/lesson/Blocks";
import { ProblemCard } from "@/components/ProblemCard";
import { DifficultyBadge, FocusBadge } from "@/components/ui/Badges";
import { MathText } from "@/components/Math";
import { useProgress } from "@/store/progress";
import { cn } from "@/lib/cn";
import { NotFound } from "./NotFound";
import type { SubChapter } from "@/lib/types";

export function ChapterPage() {
  const { id } = useParams();
  const rawChapter = id ? CHAPTER_BY_ID[id] : undefined;
  const chapter = useMemo(
    () => (rawChapter ? ensureSubChapters(rawChapter) : undefined),
    [rawChapter]
  );
  const { chapters, passCheck, visitChapter, markChapterComplete } =
    useProgress();

  // Current sub-chapter index (0 = intro, 1..n = sub-chapters, last = summary)
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    if (chapter) visitChapter(chapter.id);
  }, [chapter?.id]);

  // Reset to first sub-chapter when navigating to a different chapter
  useEffect(() => {
    setCurrentIdx(0);
  }, [chapter?.id]);

  const totalChecks = useMemo(
    () => chapter?.lesson.filter((b) => b.kind === "check").length ?? 0,
    [chapter?.id]
  );

  if (!chapter) return <NotFound />;
  const topic = TOPIC_BY_ID[chapter.topic];
  const prog = chapters[chapter.id];
  const subChapters = chapter.subChapters ?? [];
  const practice = chapter.practiceProblemIds
    .map((pid) => PROBLEM_BY_ID[pid])
    .filter(Boolean);
  const challenges = chapter.challengeProblemIds
    .map((pid) => PROBLEM_BY_ID[pid])
    .filter(Boolean);

  // Pages: [intro, ...subChapters, summary]
  const INTRO_PAGE = 0;
  const SUMMARY_PAGE = subChapters.length + 1;
  const totalPages = subChapters.length + 2; // intro + subs + summary

  function goNext() {
    setCurrentIdx((i) => Math.min(i + 1, totalPages - 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function goPrev() {
    setCurrentIdx((i) => Math.max(i - 1, 0));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Determine which sub-chapter we're on (or intro/summary)
  const isIntro = currentIdx === INTRO_PAGE;
  const isSummary = currentIdx === SUMMARY_PAGE;
  const subIdx = currentIdx - 1; // 0-based index into subChapters
  const currentSub: SubChapter | undefined = subChapters[subIdx];

  return (
    <div className="flex gap-8">
      {/* Left panel — TOC navigation (lg+ screens) */}
      <aside className="hidden w-52 shrink-0 lg:block">
        <nav className="sticky top-24 space-y-0.5">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-widest text-slate-400">
            Contents
          </p>
          <TocItem
            label="Introduction"
            active={isIntro}
            onClick={() => { setCurrentIdx(INTRO_PAGE); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          />
          {subChapters.map((sub, i) => (
            <TocItem
              key={sub.id}
              label={sub.title}
              active={currentIdx === i + 1}
              onClick={() => { setCurrentIdx(i + 1); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            />
          ))}
          <TocItem
            label="Summary"
            active={isSummary}
            onClick={() => { setCurrentIdx(SUMMARY_PAGE); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          />
        </nav>
      </aside>

      {/* Main content */}
      <article className="min-w-0 flex-1 space-y-8">
        {/* Header (always visible) */}
        <header>
          <Link
            to="/curriculum"
            className="text-sm font-medium text-brand-600 hover:underline"
          >
            ← Curriculum
          </Link>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight">
            {chapter.title}
          </h1>
          <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
            <span className="chip bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
              {topic?.name}
            </span>
            <DifficultyBadge difficulty={chapter.difficulty} />
            <FocusBadge focus={chapter.examFocus} />
            <span className="chip bg-slate-100 text-slate-500 dark:bg-slate-800">
              <Clock size={11} /> {chapter.estMinutes} min
            </span>
          </div>
          {/* Progress bar */}
          <div className="mt-4">
            <div className="mb-1 flex justify-between text-xs text-slate-500">
              <span>
                {isIntro
                  ? "Introduction"
                  : isSummary
                  ? "Summary"
                  : `${subIdx + 1} / ${subChapters.length} — ${currentSub?.title}`}
              </span>
              <span>{prog?.percent ?? 0}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
              <div
                className="h-full rounded-full bg-brand-500 transition-all"
                style={{
                  width: `${Math.round((currentIdx / (totalPages - 1)) * 100)}%`,
                }}
              />
            </div>
          </div>
        </header>

        {/* ─── INTRO PAGE ─── */}
        {isIntro && (
          <section className="card space-y-4 p-6">
            <h2 className="flex items-center gap-2 text-xl font-bold">
              <Target size={20} className="text-brand-600" /> Introduction
            </h2>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wide text-slate-500">
                Why this matters
              </h3>
              <p className="mt-1 text-sm">
                <MathText>{chapter.intro.whyItMatters}</MathText>
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wide text-slate-500">
                Where it appears
              </h3>
              <p className="mt-1 text-sm">
                <MathText>{chapter.intro.whereItAppears}</MathText>
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <h3 className="flex items-center gap-1 text-sm font-bold text-brand-700 dark:text-brand-400">
                  <Lightbulb size={14} /> Typical patterns
                </h3>
                <ul className="mt-1 list-inside list-disc space-y-1 text-sm text-slate-600 dark:text-slate-300">
                  {chapter.intro.typicalPatterns.map((p, i) => (
                    <li key={i}>
                      <MathText>{p}</MathText>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="flex items-center gap-1 text-sm font-bold text-red-600 dark:text-red-400">
                  <AlertTriangle size={14} /> Common mistakes
                </h3>
                <ul className="mt-1 list-inside list-disc space-y-1 text-sm text-slate-600 dark:text-slate-300">
                  {chapter.intro.commonMistakes.map((p, i) => (
                    <li key={i}>
                      <MathText>{p}</MathText>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* ─── SUB-CHAPTER PAGE ─── */}
        {currentSub && !isIntro && !isSummary && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold">{currentSub.title}</h2>
            <LessonRenderer
              blocks={currentSub.lesson}
              onPass={(checkId) =>
                passCheck(chapter.id, checkId, totalChecks)
              }
            />
            {/* Worked examples for this sub-chapter */}
            {currentSub.workedExamples &&
              currentSub.workedExamples.length > 0 && (
                <div>
                  <h3 className="mb-2 flex items-center gap-2 text-lg font-bold">
                    <ListChecks size={18} className="text-brand-600" /> Worked
                    examples
                  </h3>
                  {currentSub.workedExamples.map((ex, i) => (
                    <WorkedExample key={i} block={ex} />
                  ))}
                </div>
              )}
            {/* Practice for this sub-chapter */}
            {currentSub.practiceProblemIds &&
              currentSub.practiceProblemIds.length > 0 && (
                <div>
                  <h3 className="mb-2 text-lg font-bold">
                    Practice problems
                  </h3>
                  <div className="space-y-4">
                    {currentSub.practiceProblemIds
                      .map((pid) => PROBLEM_BY_ID[pid])
                      .filter(Boolean)
                      .map((p) => (
                        <ProblemCard key={p.id} problem={p} />
                      ))}
                  </div>
                </div>
              )}
          </div>
        )}

        {/* ─── SUMMARY PAGE ─── */}
        {isSummary && (
          <div className="space-y-8">
            <section className="card space-y-5 p-6">
              <h2 className="flex items-center gap-2 text-xl font-bold">
                <ScrollText size={20} className="text-brand-600" /> Chapter
                summary
              </h2>
              <SummaryList
                title="Key formulas"
                items={chapter.summary.keyFormulas}
                mono
              />
              <SummaryList
                title="Big ideas"
                items={chapter.summary.bigIdeas}
              />
              <SummaryList
                title="Pattern-recognition tips"
                items={chapter.summary.patternTips}
              />
              <SummaryList
                title="Common traps"
                items={chapter.summary.traps}
              />
              <SummaryList
                title="Revision notes"
                items={chapter.summary.revisionNotes}
              />
            </section>

            {/* Chapter-level worked examples */}
            {chapter.workedExamples.length > 0 && (
              <section>
                <h2 className="mb-2 flex items-center gap-2 text-xl font-bold">
                  <ListChecks size={20} className="text-brand-600" /> Worked
                  examples
                </h2>
                {chapter.workedExamples.map((ex, i) => (
                  <WorkedExample key={i} block={ex} />
                ))}
              </section>
            )}

            {/* Challenge problems */}
            {challenges.length > 0 && (
              <section>
                <h2 className="mb-3 flex items-center gap-2 text-xl font-bold">
                  <Trophy size={20} className="text-amber-500" /> Challenge
                  problems
                </h2>
                <div className="space-y-4">
                  {challenges.map((p) => (
                    <ProblemCard key={p.id} problem={p} />
                  ))}
                </div>
              </section>
            )}

            {/* Mark complete */}
            <div className="flex justify-center pb-8">
              <button
                onClick={() => markChapterComplete(chapter.id)}
                className="btn-primary px-6 py-3 text-base"
                disabled={prog?.completed}
              >
                <CheckCircle2 size={18} />
                {prog?.completed
                  ? "Chapter completed"
                  : "Mark chapter complete"}
              </button>
            </div>
          </div>
        )}

        {/* ─── PREV / NEXT NAVIGATION ─── */}
        <div className="flex items-center justify-between border-t border-slate-200 pt-6 dark:border-slate-800">
          <button
            onClick={goPrev}
            disabled={currentIdx === 0}
            className={cn(
              "flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors",
              currentIdx === 0
                ? "cursor-not-allowed text-slate-300 dark:text-slate-700"
                : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
            )}
          >
            <ChevronLeft size={16} /> Previous
          </button>
          <span className="text-xs text-slate-400">
            {currentIdx + 1} / {totalPages}
          </span>
          <button
            onClick={goNext}
            disabled={currentIdx === totalPages - 1}
            className={cn(
              "flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors",
              currentIdx === totalPages - 1
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

// ─── TOC item ─────────────────────────────────────────────────────────────────

function TocItem({
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

// ─── Summary helper ───────────────────────────────────────────────────────────

function SummaryList({
  title,
  items,
  mono,
}: {
  title: string;
  items: string[];
  mono?: boolean;
}) {
  if (!items.length) return null;

  if (mono) {
    return (
      <div>
        <h3 className="text-sm font-bold uppercase tracking-wide text-slate-500">
          {title}
        </h3>
        <div className="mt-2 grid gap-2 sm:grid-cols-2">
          {items.map((it, i) => {
            const start = it.indexOf("$$");
            const lead = start === -1 ? it : it.slice(0, start).trim();
            const formula = start === -1 ? "" : it.slice(start);
            return (
              <div
                key={i}
                className="rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 dark:border-slate-700 dark:bg-slate-900/50"
              >
                {lead && (
                  <div className="text-xs font-medium text-slate-500">
                    <MathText>{lead}</MathText>
                  </div>
                )}
                {formula && (
                  <div className="mt-1 text-[0.95rem]">
                    <MathText>{formula}</MathText>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div>
      <h3 className="text-sm font-bold uppercase tracking-wide text-slate-500">
        {title}
      </h3>
      <ul className="mt-1 space-y-1 text-sm">
        {items.map((it, i) => (
          <li key={i} className="flex gap-2">
            <span className="text-brand-500">•</span>
            <span>
              <MathText>{it}</MathText>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
