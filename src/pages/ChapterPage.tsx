import { useEffect, useMemo } from "react";
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
} from "lucide-react";
import { CHAPTER_BY_ID } from "@/data/chapters";
import { PROBLEM_BY_ID } from "@/data/problems";
import { TOPIC_BY_ID } from "@/data/topics";
import { LessonRenderer } from "@/components/lesson/LessonRenderer";
import { WorkedExample } from "@/components/lesson/Blocks";
import { ProblemCard } from "@/components/ProblemCard";
import { DifficultyBadge, FocusBadge } from "@/components/ui/Badges";
import { MathText } from "@/components/Math";
import { useProgress } from "@/store/progress";
import { NotFound } from "./NotFound";

export function ChapterPage() {
  const { id } = useParams();
  const chapter = id ? CHAPTER_BY_ID[id] : undefined;
  const { chapters, passCheck, visitChapter, markChapterComplete } = useProgress();

  useEffect(() => {
    if (chapter) visitChapter(chapter.id);
  }, [chapter?.id]);

  const totalChecks = useMemo(
    () => chapter?.lesson.filter((b) => b.kind === "check").length ?? 0,
    [chapter?.id]
  );

  if (!chapter) return <NotFound />;
  const topic = TOPIC_BY_ID[chapter.topic];
  const prog = chapters[chapter.id];
  const practice = chapter.practiceProblemIds
    .map((pid) => PROBLEM_BY_ID[pid])
    .filter(Boolean);
  const challenges = chapter.challengeProblemIds
    .map((pid) => PROBLEM_BY_ID[pid])
    .filter(Boolean);

  return (
    <article className="space-y-10">
      {/* Header */}
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
        {prog && totalChecks > 0 && (
          <div className="mt-4">
            <div className="mb-1 flex justify-between text-xs text-slate-500">
              <span>Lesson progress</span>
              <span>{prog.percent}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
              <div
                className="h-full rounded-full bg-brand-500 transition-all"
                style={{ width: `${prog.percent}%` }}
              />
            </div>
          </div>
        )}
      </header>

      {/* Introduction */}
      <section id="intro" className="card scroll-mt-24 space-y-4 p-6">
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

      {/* Lesson */}
      <section id="lesson" className="scroll-mt-24">
        <h2 className="mb-2 text-xl font-bold">Theory & interactive learning</h2>
        <LessonRenderer
          blocks={chapter.lesson}
          onPass={(checkId) => passCheck(chapter.id, checkId, totalChecks)}
        />
      </section>

      {/* Worked examples */}
      {chapter.workedExamples.length > 0 && (
        <section id="examples" className="scroll-mt-24">
          <h2 className="mb-2 flex items-center gap-2 text-xl font-bold">
            <ListChecks size={20} className="text-brand-600" /> Worked examples
          </h2>
          {chapter.workedExamples.map((ex, i) => (
            <WorkedExample key={i} block={ex} />
          ))}
        </section>
      )}

      {/* Practice */}
      {practice.length > 0 && (
        <section id="practice" className="scroll-mt-24">
          <h2 className="mb-3 text-xl font-bold">Practice problems</h2>
          <div className="space-y-4">
            {practice.map((p) => (
              <ProblemCard key={p.id} problem={p} />
            ))}
          </div>
        </section>
      )}

      {/* Challenges */}
      {challenges.length > 0 && (
        <section id="challenges" className="scroll-mt-24">
          <h2 className="mb-3 flex items-center gap-2 text-xl font-bold">
            <Trophy size={20} className="text-amber-500" /> Challenge problems
          </h2>
          <div className="space-y-4">
            {challenges.map((p) => (
              <ProblemCard key={p.id} problem={p} />
            ))}
          </div>
        </section>
      )}

      {/* Summary */}
      <section id="summary" className="card scroll-mt-24 space-y-5 p-6">
        <h2 className="flex items-center gap-2 text-xl font-bold">
          <ScrollText size={20} className="text-brand-600" /> Chapter summary
        </h2>
        <SummaryList title="Key formulas" items={chapter.summary.keyFormulas} mono />
        <SummaryList title="Big ideas" items={chapter.summary.bigIdeas} />
        <SummaryList title="Pattern-recognition tips" items={chapter.summary.patternTips} />
        <SummaryList title="Common traps" items={chapter.summary.traps} />
        <SummaryList title="Revision notes" items={chapter.summary.revisionNotes} />
      </section>

      {/* Complete */}
      <div className="flex justify-center pb-8">
        <button
          onClick={() => markChapterComplete(chapter.id)}
          className="btn-primary px-6 py-3 text-base"
          disabled={prog?.completed}
        >
          <CheckCircle2 size={18} />
          {prog?.completed ? "Chapter completed" : "Mark chapter complete"}
        </button>
      </div>
    </article>
  );
}

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

  // "Key formulas" (mono): each item is "lead text $$display formula$$".
  // Render the lead text as a label with the formula in a centered block tile.
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
