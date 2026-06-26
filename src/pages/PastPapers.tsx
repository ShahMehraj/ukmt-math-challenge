import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import { EXAM_GROUPS, papersByExam, imcMaxScore } from "@/data/papers";
import type { PastPaper, PaperExam, PaperResult } from "@/lib/types";
import { useProgress } from "@/store/progress";
import { PaperInstructions } from "@/components/PaperInstructions";
import { enterFullscreen } from "@/lib/fullscreen";
import { cn } from "@/lib/cn";

export function PastPapers() {
  const { paperResults } = useProgress();
  const [active, setActive] = useState<PaperExam>("IMC");
  const [chosen, setChosen] = useState<PastPaper | null>(null);

  const group = EXAM_GROUPS.find((g) => g.exam === active)!;
  const papers = papersByExam(active);

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-extrabold tracking-tight">Past Papers</h1>
        <p className="mt-2 max-w-3xl text-slate-600 dark:text-slate-300">
          Sit real UKMT challenge papers under exam conditions, scored instantly
          with the <strong>authentic marking scheme</strong>.
        </p>
      </header>

      {/* Sub-group tabs: IMC / HMC */}
      <div className="flex flex-wrap gap-2">
        {EXAM_GROUPS.map((g) => (
          <button
            key={g.exam}
            onClick={() => setActive(g.exam)}
            className={cn(
              "rounded-xl px-4 py-2 text-sm font-semibold transition-colors",
              active === g.exam
                ? "bg-brand-600 text-white"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
            )}
          >
            {g.exam}
          </button>
        ))}
      </div>

      <p className="max-w-3xl text-sm text-slate-500 dark:text-slate-400">
        {group.blurb}
      </p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {papers.map((p) => (
          <PaperCard
            key={p.id}
            paper={p}
            best={bestScore(paperResults, p.id)}
            onStart={() => setChosen(p)}
          />
        ))}
      </div>

      {chosen && (
        <InstructionsModal
          paper={chosen}
          onClose={() => setChosen(null)}
        />
      )}
    </div>
  );
}

function bestScore(results: PaperResult[], id: string): number | null {
  const mine = results.filter((r) => r.paperId === id);
  return mine.length ? Math.max(...mine.map((r) => r.score)) : null;
}

function PaperCard({
  paper: p,
  best,
  onStart,
}: {
  paper: PastPaper;
  best: number | null;
  onStart: () => void;
}) {
  return (
    <div className="card flex flex-col p-5">
      <h3 className="text-lg font-bold">
        {p.exam} {p.year}
      </h3>
      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
        {p.minutes} min · {p.questionCount} questions
      </p>

      <div className="mt-4 flex flex-1 items-end justify-between gap-3 border-t border-slate-100 pt-3 dark:border-slate-800">
        {best !== null ? (
          <span className="text-sm font-medium text-brand-600">
            Best: {best} / {imcMaxScore(p.questionCount)}
          </span>
        ) : (
          <span className="text-sm text-slate-400">Not attempted</span>
        )}
        <button
          onClick={onStart}
          className="btn-primary px-4 py-2 text-sm"
        >
          Start the test
        </button>
      </div>
    </div>
  );
}

function InstructionsModal({
  paper,
  onClose,
}: {
  paper: PastPaper;
  onClose: () => void;
}) {
  const navigate = useNavigate();
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="card w-full max-w-lg space-y-4 p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-3">
          <h2 className="text-xl font-extrabold">
            {paper.exam} {paper.year}
          </h2>
          <button
            onClick={onClose}
            className="btn-ghost h-8 w-8 !px-0"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        <PaperInstructions paper={paper} />

        <button
          onClick={() => {
            enterFullscreen();
            navigate(`/papers/${paper.id}`, { state: { autostart: true } });
          }}
          className="btn-primary w-full py-3 text-base"
        >
          Start now
        </button>
      </div>
    </div>
  );
}
