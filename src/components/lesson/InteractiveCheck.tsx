import { useState } from "react";
import { CheckCircle2, XCircle, Lightbulb, Eye } from "lucide-react";
import type { CheckBlock } from "@/lib/types";
import { checkAnswer } from "@/lib/answer";
import { MathText, Prose } from "@/components/Math";
import { cn } from "@/lib/cn";

/**
 * An inline interactive check. The student must answer (or reveal) before the
 * explanation appears; on correct answers we notify the parent so progress can
 * be recorded. This is the heart of the "never passively read" requirement.
 */
export function InteractiveCheck({
  block,
  onPass,
}: {
  block: CheckBlock;
  onPass?: (checkId: string) => void;
}) {
  const [value, setValue] = useState("");
  const [selected, setSelected] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "correct" | "incorrect">("idle");
  const [showHint, setShowHint] = useState(false);
  const [revealed, setRevealed] = useState(false);

  const solved = status === "correct" || revealed;

  function submit(answerStr: string) {
    const ok = checkAnswer(answerStr, block.answer, block.acceptedAnswers);
    setStatus(ok ? "correct" : "incorrect");
    if (ok) onPass?.(block.id);
  }

  function reveal() {
    setRevealed(true);
    onPass?.(block.id); // credit engagement even when revealed
  }

  return (
    <div
      className={cn(
        "my-5 rounded-2xl border-2 p-4 transition-colors",
        solved
          ? "border-brand-300 bg-brand-50/60 dark:border-brand-700 dark:bg-brand-900/20"
          : "border-dashed border-brand-300 bg-brand-50/30 dark:border-brand-800 dark:bg-brand-900/10"
      )}
    >
      <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-brand-700 dark:text-brand-400">
        <Lightbulb size={14} /> Your turn
      </div>
      <div className="font-medium">
        <MathText>{block.prompt}</MathText>
      </div>

      {/* MCQ */}
      {block.format === "mcq" && block.options && (
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {block.options.map((o) => {
            const isChosen = selected === o.label;
            const isAnswer = o.label === block.answer;
            const showState = solved || (status === "incorrect" && isChosen);
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
                  showState && isAnswer
                    ? "border-brand-500 bg-brand-100 dark:bg-brand-900/40"
                    : showState && isChosen && !isAnswer
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
      )}

      {/* Numeric / text input */}
      {block.format !== "mcq" && (
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
            placeholder="Type your answer…"
            className="flex-1 rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm focus:border-brand-500 focus:outline-none disabled:opacity-60 dark:border-slate-700 dark:bg-slate-900"
          />
          {!solved && (
            <button type="submit" className="btn-primary">
              Check
            </button>
          )}
        </form>
      )}

      {/* Feedback */}
      {status === "incorrect" && !revealed && (
        <div className="mt-3 flex items-center gap-2 text-sm font-medium text-red-600 dark:text-red-400">
          <XCircle size={16} /> Not quite — try again.
        </div>
      )}
      {solved && (
        <div className="mt-3 flex items-center gap-2 text-sm font-semibold text-brand-700 dark:text-brand-400">
          <CheckCircle2 size={16} />
          {status === "correct" ? "Correct!" : "Here's the idea:"}
        </div>
      )}

      {/* Actions */}
      {!solved && (
        <div className="mt-3 flex gap-3 text-sm">
          {block.hint && (
            <button
              onClick={() => setShowHint(true)}
              className="inline-flex items-center gap-1 font-medium text-amber-600 hover:underline dark:text-amber-400"
            >
              <Lightbulb size={14} /> Hint
            </button>
          )}
          <button
            onClick={reveal}
            className="inline-flex items-center gap-1 font-medium text-slate-500 hover:underline"
          >
            <Eye size={14} /> Reveal answer
          </button>
        </div>
      )}

      {showHint && !solved && block.hint && (
        <div className="mt-2 rounded-lg bg-amber-50 px-3 py-2 text-sm text-amber-800 dark:bg-amber-950/30 dark:text-amber-200">
          <MathText>{block.hint}</MathText>
        </div>
      )}

      {solved && (
        <div className="mt-2 border-t border-brand-200 pt-2 text-sm dark:border-brand-800">
          <Prose text={block.explanation} className="prose-math" />
        </div>
      )}
    </div>
  );
}
