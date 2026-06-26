import { Link } from "react-router-dom";
import { Timer, FileText, ArrowRight } from "lucide-react";
import { MOCKS } from "@/data/mocks";
import { useProgress } from "@/store/progress";

export function MockList() {
  const { mockResults } = useProgress();

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-extrabold tracking-tight">Mock Exams</h1>
        <p className="mt-2 max-w-3xl text-slate-600 dark:text-slate-300">
          Sit timed papers in real exam conditions. IMC mocks use authentic
          scoring — <strong>5 marks</strong> for early questions, <strong>6</strong>{" "}
          later with a <strong>−1 / −2 penalty</strong> for wrong answers, so think
          before you guess. Hamilton sets ask for full written solutions.
        </p>
      </header>

      <div className="grid gap-5 md:grid-cols-2">
        {MOCKS.map((m) => {
          const best = mockResults
            .filter((r) => r.examId === m.id)
            .reduce<number | null>(
              (acc, r) => (acc === null ? r.score : Math.max(acc, r.score)),
              null
            );
          return (
            <Link
              key={m.id}
              to={`/mock/${m.id}`}
              className="card group flex flex-col p-6 transition-transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-2">
                <span
                  className={
                    "chip " +
                    (m.exam === "IMC"
                      ? "bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300"
                      : "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300")
                  }
                >
                  {m.exam}
                </span>
                <span className="chip bg-slate-100 text-slate-500 dark:bg-slate-800">
                  <Timer size={12} /> {m.minutes} min
                </span>
                <span className="chip bg-slate-100 text-slate-500 dark:bg-slate-800">
                  <FileText size={12} /> {m.problemIds.length} Q
                </span>
              </div>
              <h3 className="mt-3 text-lg font-bold group-hover:text-brand-600">
                {m.title}
              </h3>
              <p className="mt-1 flex-1 text-sm text-slate-600 dark:text-slate-300">
                {m.description}
              </p>
              <div className="mt-4 flex items-center justify-between">
                {best !== null ? (
                  <span className="text-sm font-medium text-brand-600">
                    Best: {best} marks
                  </span>
                ) : (
                  <span className="text-sm text-slate-400">Not attempted</span>
                )}
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600">
                  Start <ArrowRight size={15} />
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
