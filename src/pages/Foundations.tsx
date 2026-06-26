import { useState } from "react";
import { Link } from "react-router-dom";
import { GraduationCap, ArrowRight, RefreshCw } from "lucide-react";
import { MathText } from "@/components/Math";
import { checkAnswer } from "@/lib/answer";
import { cn } from "@/lib/cn";

/**
 * Phase 2: the Brush-Up / Foundations diagnostic. A short adaptive readiness
 * check that flags weak prerequisite areas and recommends a starting point.
 */
interface DiagQ {
  id: string;
  area: string;
  prompt: string;
  answer: string;
  accepted?: string[];
  recommend: string; // what to brush up if wrong
}

const QUESTIONS: DiagQ[] = [
  {
    id: "d1",
    area: "Order of operations",
    prompt: "Evaluate $6 + 12 \\div 3 \\times 2$.",
    answer: "14",
    recommend: "BIDMAS / order of operations",
  },
  {
    id: "d2",
    area: "Fractions",
    prompt: "Work out $\\frac{3}{4} - \\frac{1}{6}$ (give a fraction).",
    answer: "7/12",
    recommend: "adding & subtracting fractions",
  },
  {
    id: "d3",
    area: "Percentages",
    prompt: "What is $35\\%$ of $80$?",
    answer: "28",
    recommend: "percentage-of calculations",
  },
  {
    id: "d4",
    area: "Linear equations",
    prompt: "Solve $4x - 3 = 17$.",
    answer: "5",
    recommend: "solving linear equations",
  },
  {
    id: "d5",
    area: "Negative numbers",
    prompt: "Evaluate $-6 - (-9)$.",
    answer: "3",
    recommend: "negative-number arithmetic",
  },
  {
    id: "d6",
    area: "Basic geometry",
    prompt:
      "Two angles of a triangle are $50^\\circ$ and $60^\\circ$. What is the third (in degrees)?",
    answer: "70",
    recommend: "angle facts (triangle sum)",
  },
];

export function Foundations() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const results = QUESTIONS.map((q) => ({
    q,
    given: answers[q.id] ?? "",
    correct: checkAnswer(answers[q.id] ?? "", q.answer, q.accepted),
  }));
  const score = results.filter((r) => r.correct).length;
  const weak = results.filter((r) => !r.correct);

  return (
    <div className="mx-auto max-w-2xl space-y-8">
      <header>
        <span className="chip bg-brand-100 text-brand-700 dark:bg-brand-900/40 dark:text-brand-300">
          <GraduationCap size={13} /> Phase 2 · Readiness check
        </span>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight">
          Foundations Brush-Up
        </h1>
        <p className="mt-2 text-slate-600 dark:text-slate-300">
          A quick {QUESTIONS.length}-question diagnostic of the arithmetic and
          algebra the main course assumes. Answer what you can — we'll flag any
          weak spots and recommend where to start.
        </p>
      </header>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
        }}
        className="space-y-4"
      >
        {QUESTIONS.map((q, i) => {
          const r = results[i];
          return (
            <div key={q.id} className="card p-5">
              <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-400">
                {q.area}
              </div>
              <div className="font-medium">
                <span className="mr-1 text-slate-400">{i + 1}.</span>
                <MathText>{q.prompt}</MathText>
              </div>
              <input
                value={answers[q.id] ?? ""}
                onChange={(e) =>
                  setAnswers((a) => ({ ...a, [q.id]: e.target.value }))
                }
                disabled={submitted}
                placeholder="Your answer"
                className={cn(
                  "mt-3 w-full rounded-xl border px-3 py-2 text-sm focus:outline-none disabled:opacity-70 dark:bg-slate-900",
                  submitted
                    ? r.correct
                      ? "border-brand-400 bg-brand-50 dark:bg-brand-950/30"
                      : "border-red-400 bg-red-50 dark:bg-red-950/30"
                    : "border-slate-300 focus:border-brand-500 dark:border-slate-700"
                )}
              />
              {submitted && !r.correct && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                  Correct answer: <MathText>{q.answer}</MathText>
                </p>
              )}
            </div>
          );
        })}

        {!submitted ? (
          <button type="submit" className="btn-primary w-full py-3 text-base">
            Check my readiness
          </button>
        ) : null}
      </form>

      {submitted && (
        <div className="card space-y-4 p-6">
          <h2 className="text-xl font-bold">
            You scored {score} / {QUESTIONS.length}
          </h2>
          {weak.length === 0 ? (
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Excellent — your foundations are solid. You're ready to dive
              straight into the main curriculum.
            </p>
          ) : (
            <div>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Recommended brush-up before the main course — these areas tripped
                you up:
              </p>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm">
                {weak.map((w) => (
                  <li key={w.q.id}>
                    <span className="font-semibold">{w.q.area}</span> —{" "}
                    {w.q.recommend}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="flex flex-wrap gap-3">
            <Link to="/chapter/ch-found-1" className="btn-primary">
              {weak.length ? "Open Foundations chapter" : "Review Foundations"}{" "}
              <ArrowRight size={16} />
            </Link>
            <Link to="/curriculum" className="btn-ghost">
              {weak.length ? "Skip to curriculum" : "Start the curriculum"}
            </Link>
            <button
              onClick={() => {
                setSubmitted(false);
                setAnswers({});
              }}
              className="btn-ghost"
            >
              <RefreshCw size={15} /> Retake
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
