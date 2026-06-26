import { useEffect, useMemo, useState } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import { Timer, ExternalLink, CheckCircle2, XCircle } from "lucide-react";
import { PAPER_BY_ID, imcQuestionMarks, imcMaxScore } from "@/data/papers";
import { useProgress } from "@/store/progress";
import { MathText } from "@/components/Math";
import { PaperInstructions } from "@/components/PaperInstructions";
import { Figure } from "@/components/lesson/Blocks";
import { enterFullscreen } from "@/lib/fullscreen";
import { cn } from "@/lib/cn";
import { NotFound } from "./NotFound";

const OPTIONS = ["A", "B", "C", "D", "E"];

export function PaperRunner() {
  const { id } = useParams();
  const location = useLocation();
  const autostart = (location.state as { autostart?: boolean } | null)
    ?.autostart;
  const paper = id ? PAPER_BY_ID[id] : undefined;
  const {
    recordPaper,
    paperSessions,
    startPaperSession,
    choosePaperAnswer,
    submitPaperSession,
  } = useProgress();

  const inApp = !!paper?.questions?.length;
  const n = paper?.questionCount ?? 25;
  const totalSeconds = (paper?.minutes ?? 60) * 60;

  // The persisted session is the source of truth, so a reload resumes the
  // same timer (derived from an absolute `startedAt`) and the same answers.
  const session = id ? paperSessions[id] : undefined;
  const started = !!session;
  const given = useMemo(
    () => session?.given ?? Array<string>(n).fill(""),
    [session?.given, n]
  );
  const submitted = !!session?.submitted;

  // Countdown derived from wall-clock so it survives reloads / backgrounding.
  const computeRemaining = () =>
    session
      ? Math.max(0, totalSeconds - Math.floor((Date.now() - session.startedAt) / 1000))
      : totalSeconds;
  const [remaining, setRemaining] = useState(computeRemaining);

  // Launching from the instructions popup ("Start now") always begins a fresh
  // attempt. Keyed on location.key so it re-fires on each such navigation, even
  // back to the same paper. A plain reload drops location.state (autostart is
  // undefined), so the persisted session is resumed instead of reset.
  useEffect(() => {
    if (autostart && paper) startPaperSession(paper.id, n);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.key]);

  useEffect(() => {
    if (!started || submitted || !paper) return;
    // Sync immediately (covers the post-reload first paint) then tick.
    setRemaining(computeRemaining());
    const t = setInterval(() => {
      const r = computeRemaining();
      setRemaining(r);
      if (r <= 0) {
        clearInterval(t);
        finish();
      }
    }, 1000);
    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started, submitted, paper?.id, session?.startedAt]);

  const scoring = useMemo(() => {
    if (!paper) return null;
    if (!paper.verified) return null;
    let score = 0;
    let correctCount = 0;
    given.forEach((g, i) => {
      const key = paper.answers[i];
      if (!g) return;
      const { points, penalty } = imcQuestionMarks(i);
      if (g === key) {
        score += points;
        correctCount += 1;
      } else {
        score -= penalty;
      }
    });
    return {
      score: Math.max(0, score),
      correctCount,
      max: imcMaxScore(paper.questionCount),
    };
  }, [given, paper, submitted]);

  if (!paper) return <NotFound />;

  function start() {
    enterFullscreen();
    startPaperSession(paper!.id, n);
  }

  function finish() {
    if (submitted) return;
    submitPaperSession(paper!.id);
    if (paper!.verified && scoring) {
      recordPaper({
        paperId: paper!.id,
        at: Date.now(),
        given,
        score: scoring.score,
        maxScore: scoring.max,
        correctCount: scoring.correctCount,
        secondsTaken: session
          ? Math.round((Date.now() - session.startedAt) / 1000)
          : 0,
      });
    }
  }

  function choose(i: number, opt: string) {
    if (submitted) return;
    choosePaperAnswer(paper!.id, i, opt);
  }

  const mm = String(Math.floor(remaining / 60)).padStart(2, "0");
  const ss = String(remaining % 60).padStart(2, "0");
  const answered = given.filter((g) => g).length;

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <Link
        to="/papers"
        className="text-sm font-medium text-brand-600 hover:underline"
      >
        ← Past papers
      </Link>

      {/* Status bar */}
      <div className="sticky top-16 z-30 flex items-center justify-between rounded-xl border border-slate-200 bg-white/90 px-4 py-3 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
        <div>
          <h1 className="font-bold">
            {paper.exam} {paper.year}
          </h1>
          <p className="text-xs text-slate-500">
            {answered}/{paper.questionCount} answered
          </p>
        </div>
        {started && (
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
        )}
      </div>

      {/* Instructions / start (direct-navigation fallback; the list opens a
          popup that auto-starts, so this only shows on a direct page load). */}
      {!started && (
        <div className="card space-y-4 p-6">
          <PaperInstructions paper={paper} />
          <button onClick={start} className="btn-primary px-6 py-3 text-base">
            <Timer size={18} /> Start test
          </button>
        </div>
      )}

      {/* Result */}
      {submitted && scoring && (
        <div className="card p-6 text-center">
          <h2 className="text-sm font-semibold text-slate-500">Your score</h2>
          <div className="mt-1 text-4xl font-extrabold text-brand-600">
            {scoring.score}{" "}
            <span className="text-2xl text-slate-400">/ {scoring.max}</span>
          </div>
          <p className="mt-2 text-sm text-slate-500">
            {scoring.correctCount} correct · scored with the authentic IMC
            scheme (5 marks early; 6 with −1/−2 penalties later).
          </p>
        </div>
      )}

      {/* In-app paper: full questions on-page */}
      {started && inApp && (
        <div className="space-y-4">
          {paper.questions!.map((q, i) => {
            const key = paper.answers[i];
            const g = given[i];
            const marks = imcQuestionMarks(i);
            const correct = submitted && paper.verified && g && g === key;
            const wrong = submitted && paper.verified && g && g !== key;
            return (
              <div key={q.number} className="card p-5">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-slate-500">
                      Q{q.number}
                    </span>
                    {submitted && paper.verified && (
                      <>
                        {correct ? (
                          <CheckCircle2 size={16} className="text-brand-600" />
                        ) : wrong ? (
                          <XCircle size={16} className="text-red-500" />
                        ) : null}
                      </>
                    )}
                  </div>
                  <span className="text-xs text-slate-400">
                    {marks.points} marks
                    {marks.penalty ? `, −${marks.penalty}` : ""}
                  </span>
                </div>

                <div className="mt-2 leading-relaxed">
                  <MathText>{q.statement}</MathText>
                </div>

                {q.diagram && <Figure diagram={q.diagram} />}

                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {q.options.map((opt) => {
                    const chosen = g === opt.label;
                    const isKey =
                      submitted && paper.verified && key === opt.label;
                    return (
                      <button
                        key={opt.label}
                        disabled={submitted}
                        onClick={() => choose(i, opt.label)}
                        className={cn(
                          "flex items-center gap-2 rounded-lg border px-3 py-2 text-left text-sm transition-colors",
                          isKey
                            ? "border-brand-500 bg-brand-100 text-brand-800 dark:bg-brand-900/50 dark:text-brand-200"
                            : chosen && wrong
                            ? "border-red-400 bg-red-50 text-red-600 dark:bg-red-950/30"
                            : chosen
                            ? "border-brand-500 bg-brand-50 text-brand-700 dark:bg-brand-950/40 dark:text-brand-300"
                            : "border-slate-200 hover:border-brand-400 dark:border-slate-700"
                        )}
                      >
                        <span className="font-bold">{opt.label}</span>
                        <span>
                          <MathText>{opt.text}</MathText>
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}

          <SubmitBar
            submitted={submitted}
            verified={paper.verified}
            solutionsUrl={paper.solutionsUrl}
            onSubmit={finish}
          />
        </div>
      )}

      {/* Self-mark paper: compact answer grid */}
      {started && !inApp && (
        <div className="card p-5">
          <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-slate-500">
            Answer grid
          </h2>
          <div className="space-y-2">
            {Array.from({ length: paper.questionCount }).map((_, i) => {
              const key = paper.answers[i];
              const g = given[i];
              const marks = imcQuestionMarks(i);
              const correct = submitted && paper.verified && g && g === key;
              const wrong = submitted && paper.verified && g && g !== key;
              return (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-lg border border-slate-100 px-2 py-1.5 dark:border-slate-800"
                >
                  <span className="w-12 shrink-0 text-sm font-semibold text-slate-500">
                    Q{i + 1}
                  </span>
                  <div className="flex gap-1.5">
                    {OPTIONS.map((opt) => {
                      const chosen = g === opt;
                      const isKey =
                        submitted && paper.verified && key === opt;
                      return (
                        <button
                          key={opt}
                          disabled={submitted}
                          onClick={() => choose(i, opt)}
                          className={cn(
                            "h-8 w-8 rounded-md border text-sm font-semibold transition-colors",
                            isKey
                              ? "border-brand-500 bg-brand-100 text-brand-800 dark:bg-brand-900/50 dark:text-brand-200"
                              : chosen && wrong
                              ? "border-red-400 bg-red-50 text-red-600 dark:bg-red-950/30"
                              : chosen
                              ? "border-brand-500 bg-brand-50 text-brand-700 dark:bg-brand-950/40 dark:text-brand-300"
                              : "border-slate-200 text-slate-500 hover:border-brand-400 dark:border-slate-700"
                          )}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                  <span className="ml-auto text-xs text-slate-400">
                    {marks.points} marks
                    {marks.penalty ? `, −${marks.penalty}` : ""}
                  </span>
                  {submitted && paper.verified && (
                    <span className="w-5 shrink-0">
                      {correct ? (
                        <CheckCircle2 size={16} className="text-brand-600" />
                      ) : wrong ? (
                        <XCircle size={16} className="text-red-500" />
                      ) : null}
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          <SubmitBar
            submitted={submitted}
            verified={paper.verified}
            solutionsUrl={paper.solutionsUrl}
            onSubmit={finish}
            className="mt-4"
          />
        </div>
      )}
    </div>
  );
}

function SubmitBar({
  submitted,
  verified,
  solutionsUrl,
  onSubmit,
  className,
}: {
  submitted: boolean;
  verified: boolean;
  solutionsUrl?: string;
  onSubmit: () => void;
  className?: string;
}) {
  if (!submitted) {
    return (
      <button
        onClick={onSubmit}
        className={cn("btn-primary w-full py-3 text-base", className)}
      >
        Submit & {verified ? "score" : "finish"}
      </button>
    );
  }
  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      {solutionsUrl && (
        <a
          href={solutionsUrl}
          target="_blank"
          rel="noreferrer"
          className="btn-ghost"
        >
          <ExternalLink size={15} /> Review official solutions
        </a>
      )}
      <Link to="/papers" className="btn-ghost">
        Back to papers
      </Link>
    </div>
  );
}
