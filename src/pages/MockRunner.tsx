import { useEffect, useMemo, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Timer, Flag, CheckCircle2, XCircle, Eye } from "lucide-react";
import { MOCK_BY_ID } from "@/data/mocks";
import { PROBLEM_BY_ID } from "@/data/problems";
import { checkAnswer } from "@/lib/answer";
import { MathText, Prose } from "@/components/Math";
import { Figure } from "@/components/lesson/Blocks";
import { useProgress } from "@/store/progress";
import { cn } from "@/lib/cn";
import { NotFound } from "./NotFound";

/**
 * IMC marking (authentic): Q1–15 → 5 marks, no penalty. Q16–20 → 6 marks,
 * −1 for a wrong answer. Q21–25 → 6 marks, −2 for a wrong answer. Blank → 0.
 * For shorter sampler papers we apply the same tiering proportionally by index.
 */
function imcMarks(index: number, total: number) {
  // Map the question's position onto the 25-question tiers.
  const scaled = Math.floor((index / total) * 25);
  if (scaled < 15) return { points: 5, penalty: 0 };
  if (scaled < 20) return { points: 6, penalty: 1 };
  return { points: 6, penalty: 2 };
}

export function MockRunner() {
  const { id } = useParams();
  const mock = id ? MOCK_BY_ID[id] : undefined;
  const { recordMock } = useProgress();

  const problems = useMemo(
    () => (mock ? mock.problemIds.map((pid) => PROBLEM_BY_ID[pid]).filter(Boolean) : []),
    [mock?.id]
  );

  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [flagged, setFlagged] = useState<Set<string>>(new Set());
  const [submitted, setSubmitted] = useState(false);
  const [remaining, setRemaining] = useState((mock?.minutes ?? 0) * 60);
  const startRef = useRef(Date.now());

  const isWritten = mock?.exam === "HMC";

  useEffect(() => {
    if (submitted || !mock) return;
    const t = setInterval(() => {
      setRemaining((r) => {
        if (r <= 1) {
          clearInterval(t);
          setSubmitted(true);
          return 0;
        }
        return r - 1;
      });
    }, 1000);
    return () => clearInterval(t);
  }, [submitted, mock?.id]);

  if (!mock) return <NotFound />;

  const mm = String(Math.floor(remaining / 60)).padStart(2, "0");
  const ss = String(remaining % 60).padStart(2, "0");
  const answeredCount = Object.values(answers).filter((v) => v?.trim()).length;

  // Scoring (IMC). For HMC we just report correct-final-answer count.
  let score = 0;
  let maxScore = 0;
  const perProblem: Record<string, { given: string; correct: boolean }> = {};
  problems.forEach((p, i) => {
    const given = answers[p.id] ?? "";
    const correct = checkAnswer(given, p.answer, p.acceptedAnswers);
    perProblem[p.id] = { given, correct };
    if (isWritten) {
      maxScore += 10;
      if (correct) score += 10; // self-marked final answer; full credit shown as guidance
    } else {
      const { points, penalty } = imcMarks(i, problems.length);
      maxScore += points;
      if (given.trim()) score += correct ? points : -penalty;
    }
  });
  score = Math.max(0, score);

  function submit() {
    setSubmitted(true);
    recordMock({
      examId: mock!.id,
      at: Date.now(),
      score,
      maxScore,
      answers: perProblem,
      secondsTaken: Math.round((Date.now() - startRef.current) / 1000),
    });
  }

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      {/* Sticky status bar */}
      <div className="sticky top-16 z-30 flex items-center justify-between rounded-xl border border-slate-200 bg-white/90 px-4 py-3 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
        <div>
          <h1 className="font-bold">{mock.title}</h1>
          <p className="text-xs text-slate-500">
            {answeredCount}/{problems.length} answered
          </p>
        </div>
        <div
          className={cn(
            "flex items-center gap-2 rounded-lg px-3 py-1.5 font-mono text-lg font-bold",
            remaining < 60 && !submitted
              ? "bg-red-100 text-red-600 dark:bg-red-950/40"
              : "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200"
          )}
        >
          <Timer size={18} />
          {submitted ? "Done" : `${mm}:${ss}`}
        </div>
      </div>

      {submitted && (
        <div className="card p-6 text-center">
          <h2 className="text-lg font-semibold text-slate-500">Your result</h2>
          <div className="mt-1 text-4xl font-extrabold text-brand-600">
            {score} <span className="text-2xl text-slate-400">/ {maxScore}</span>
          </div>
          <p className="mt-2 text-sm text-slate-500">
            {isWritten
              ? "Final-answer self-check shown below. Remember: Hamilton awards marks for full justification — compare your written reasoning to each model solution."
              : "Scored with the authentic IMC scheme (5 marks early; 6 with −1/−2 penalties later)."}
          </p>
          <Link to="/mock" className="btn-ghost mt-4">
            Back to mock exams
          </Link>
        </div>
      )}

      {/* Questions */}
      <div className="space-y-5">
        {problems.map((p, i) => {
          const given = answers[p.id] ?? "";
          const res = perProblem[p.id];
          return (
            <div key={p.id} className="card p-5">
              <div className="mb-2 flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-700 dark:bg-brand-900/40 dark:text-brand-300">
                  {i + 1}
                </span>
                {!isWritten && (
                  <span className="text-xs text-slate-400">
                    {(() => {
                      const m = imcMarks(i, problems.length);
                      return `${m.points} marks${m.penalty ? `, −${m.penalty} if wrong` : ""}`;
                    })()}
                  </span>
                )}
                <button
                  onClick={() =>
                    setFlagged((f) => {
                      const n = new Set(f);
                      n.has(p.id) ? n.delete(p.id) : n.add(p.id);
                      return n;
                    })
                  }
                  disabled={submitted}
                  className={cn(
                    "ml-auto",
                    flagged.has(p.id) ? "text-amber-500" : "text-slate-300 hover:text-amber-400"
                  )}
                  aria-label="Flag for review"
                >
                  <Flag size={16} className={flagged.has(p.id) ? "fill-amber-500" : ""} />
                </button>
              </div>

              <Prose text={p.statement} className="prose-math font-medium" />
              {p.diagram && <Figure diagram={p.diagram} />}

              {/* Answer entry */}
              {p.format === "mcq" && p.options ? (
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {p.options.map((o) => {
                    const chosen = given === o.label;
                    const isAns = o.label === p.answer;
                    return (
                      <button
                        key={o.label}
                        disabled={submitted}
                        onClick={() =>
                          setAnswers((a) => ({ ...a, [p.id]: o.label }))
                        }
                        className={cn(
                          "flex items-center gap-2 rounded-xl border px-3 py-2 text-left text-sm transition-colors",
                          submitted && isAns
                            ? "border-brand-500 bg-brand-100 dark:bg-brand-900/40"
                            : submitted && chosen && !isAns
                            ? "border-red-400 bg-red-50 dark:bg-red-950/30"
                            : chosen
                            ? "border-brand-500 bg-brand-50 dark:bg-brand-950/30"
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
                <textarea
                  value={given}
                  onChange={(e) =>
                    setAnswers((a) => ({ ...a, [p.id]: e.target.value }))
                  }
                  disabled={submitted}
                  rows={isWritten ? 4 : 1}
                  placeholder={
                    isWritten ? "Write your full solution…" : "Your answer"
                  }
                  className="mt-3 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm focus:border-brand-500 focus:outline-none disabled:opacity-70 dark:border-slate-700 dark:bg-slate-900"
                />
              )}

              {/* Post-submit feedback */}
              {submitted && (
                <div className="mt-3 space-y-2 border-t border-slate-200 pt-3 dark:border-slate-700">
                  <div
                    className={cn(
                      "flex items-center gap-2 text-sm font-semibold",
                      res.correct
                        ? "text-brand-600"
                        : given.trim()
                        ? "text-red-600"
                        : "text-slate-400"
                    )}
                  >
                    {res.correct ? (
                      <>
                        <CheckCircle2 size={16} /> Correct
                      </>
                    ) : given.trim() ? (
                      <>
                        <XCircle size={16} /> Incorrect
                      </>
                    ) : (
                      <>
                        <Eye size={16} /> Left blank
                      </>
                    )}
                    <span className="ml-1 font-normal text-slate-500">
                      · answer: <MathText>{p.answer}</MathText>
                    </span>
                  </div>
                  <Prose text={p.solution} className="prose-math text-sm" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {!submitted && (
        <button onClick={submit} className="btn-primary w-full py-3 text-base">
          Submit paper
        </button>
      )}
    </div>
  );
}
