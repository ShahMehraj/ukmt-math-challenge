import { useState } from "react";
import {
  Lightbulb,
  ListChecks,
  Bookmark,
  Clock,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import type { Problem } from "@/lib/types";
import { MathText, Prose } from "@/components/Math";
import { Figure } from "@/components/lesson/Blocks";
import { checkAnswer } from "@/lib/answer";
import { cn } from "@/lib/cn";
import { useProgress } from "@/store/progress";
import { DifficultyBadge } from "@/components/ui/Badges";

export function ProblemCard({ problem }: { problem: Problem }) {
  const [value, setValue] = useState("");
  const [selected, setSelected] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "correct" | "incorrect">("idle");
  const [hintsShown, setHintsShown] = useState(0);
  const [showSolution, setShowSolution] = useState(false);
  const [stepsShown, setStepsShown] = useState(0);

  const { bookmarks, toggleBookmark, recordAttempt } = useProgress();
  const bookmarked = bookmarks.includes(problem.id);

  function submit(ans: string) {
    const ok = checkAnswer(ans, problem.answer, problem.acceptedAnswers);
    setStatus(ok ? "correct" : "incorrect");
    recordAttempt({
      problemId: problem.id,
      correct: ok,
      at: Date.now(),
      hintsUsed: hintsShown,
    });
  }

  const solved = status === "correct";

  return (
    <div className="card p-5">
      {/* Meta row */}
      <div className="mb-3 flex flex-wrap items-center gap-2 text-xs">
        <DifficultyBadge difficulty={problem.difficulty} />
        <span className="chip bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
          {problem.subtopic}
        </span>
        <span className="chip bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
          {problem.source}
          {problem.year ? ` ${problem.year}` : ""}
        </span>
        <span className="chip bg-slate-100 text-slate-500 dark:bg-slate-800">
          <Clock size={11} /> {problem.estMinutes} min
        </span>
        <button
          onClick={() => toggleBookmark(problem.id)}
          className="ml-auto text-slate-400 hover:text-brand-600"
          aria-label="Bookmark"
        >
          <Bookmark
            size={18}
            className={cn(bookmarked && "fill-brand-500 text-brand-500")}
          />
        </button>
      </div>

      <Prose text={problem.statement} className="prose-math font-medium" />
      {problem.diagram && <Figure diagram={problem.diagram} />}

      {/* Answer area */}
      {problem.format === "mcq" && problem.options ? (
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {problem.options.map((o) => {
            const isChosen = selected === o.label;
            const isAnswer = o.label === problem.answer;
            const reveal = solved || (status === "incorrect" && isChosen);
            return (
              <button
                key={o.label}
                disabled={solved}
                onClick={() => {
                  setSelected(o.label);
                  submit(o.label);
                }}
                className={cn(
                  "flex items-center gap-2 rounded-xl border px-3 py-2 text-left text-sm transition-colors",
                  reveal && isAnswer
                    ? "border-brand-500 bg-brand-100 dark:bg-brand-900/40"
                    : reveal && isChosen && !isAnswer
                    ? "border-red-400 bg-red-50 dark:bg-red-950/30"
                    : "border-slate-200 hover:border-brand-400 dark:border-slate-700"
                )}
              >
                <span className="font-bold">{o.label}.</span>
                <MathText>{o.text}</MathText>
              </button>
            );
          })}
        </div>
      ) : (
        <form
          className="mt-3 flex flex-wrap gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            if (!solved) submit(value);
          }}
        >
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            disabled={solved}
            placeholder={
              problem.format === "written"
                ? "Final answer (then check the model solution)…"
                : "Type your answer…"
            }
            className="flex-1 rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm focus:border-brand-500 focus:outline-none disabled:opacity-60 dark:border-slate-700 dark:bg-slate-900"
          />
          {!solved && (
            <button type="submit" className="btn-primary">
              Check
            </button>
          )}
        </form>
      )}

      {/* Status */}
      {status === "incorrect" && (
        <div className="mt-3 flex items-center gap-2 text-sm font-medium text-red-600 dark:text-red-400">
          <XCircle size={16} /> Not correct — use a hint or review the solution.
        </div>
      )}
      {solved && (
        <div className="mt-3 flex items-center gap-2 text-sm font-semibold text-brand-700 dark:text-brand-400">
          <CheckCircle2 size={16} /> Correct!
        </div>
      )}

      {/* Tools */}
      <div className="mt-4 flex flex-wrap gap-3 text-sm">
        {problem.hints.length > 0 && hintsShown < problem.hints.length && (
          <button
            onClick={() => setHintsShown((n) => n + 1)}
            className="inline-flex items-center gap-1 font-medium text-amber-600 hover:underline dark:text-amber-400"
          >
            <Lightbulb size={14} />
            {hintsShown === 0 ? "Hint" : "Next hint"} ({hintsShown}/
            {problem.hints.length})
          </button>
        )}
        {problem.solutionSteps?.length ? (
          <button
            onClick={() => setStepsShown((n) => Math.min(n + 1, problem.solutionSteps!.length))}
            className="inline-flex items-center gap-1 font-medium text-brand-700 hover:underline dark:text-brand-400"
          >
            <ListChecks size={14} /> Step-by-step
          </button>
        ) : null}
        <button
          onClick={() => setShowSolution((s) => !s)}
          className="inline-flex items-center gap-1 font-medium text-slate-500 hover:underline"
        >
          {showSolution ? "Hide" : "Full"} solution
        </button>
      </div>

      {/* Hints */}
      {hintsShown > 0 && (
        <div className="mt-3 space-y-2">
          {problem.hints.slice(0, hintsShown).map((h, i) => (
            <div
              key={i}
              className="rounded-lg bg-amber-50 px-3 py-2 text-sm text-amber-800 dark:bg-amber-950/30 dark:text-amber-200"
            >
              <span className="font-semibold">Hint {i + 1}: </span>
              <MathText>{h}</MathText>
            </div>
          ))}
        </div>
      )}

      {/* Step-by-step reveal */}
      {stepsShown > 0 && problem.solutionSteps && (
        <ol className="mt-3 space-y-2">
          {problem.solutionSteps.slice(0, stepsShown).map((s, i) => (
            <li
              key={i}
              className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-900"
            >
              <span className="font-semibold text-brand-700 dark:text-brand-400">
                Step {i + 1}.{" "}
              </span>
              <MathText>{s}</MathText>
            </li>
          ))}
        </ol>
      )}

      {/* Full solution */}
      {showSolution && (
        <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-900/60">
          <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
            Solution · answer: <MathText>{problem.answer}</MathText>
          </div>
          <Prose text={problem.solution} className="prose-math text-sm" />
        </div>
      )}

      {/* Tags */}
      {problem.tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {problem.tags.map((t) => (
            <span
              key={t}
              className="chip bg-brand-50 text-brand-700 dark:bg-brand-900/30 dark:text-brand-300"
            >
              #{t}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
