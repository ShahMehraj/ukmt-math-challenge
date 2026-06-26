import { Link } from "react-router-dom";
import { Lock, ArrowRight } from "lucide-react";
import { CURRICULUM_SORTED } from "@/data/chapters";
import { cn } from "@/lib/cn";

export function Curriculum() {
  const totalHours = Math.round(
    CURRICULUM_SORTED.reduce((s, c) => s + c.estMinutes, 0) / 60
  );

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-extrabold tracking-tight">Curriculum</h1>
        <p className="mt-2 max-w-3xl text-slate-600 dark:text-slate-300">
          A complete pathway from foundations to olympiad level — {" "}
          {CURRICULUM_SORTED.length} chapters, roughly {totalHours} hours of study,
          covering every concept tested in the IMC and Hamilton. Chapters marked{" "}
          <span className="font-semibold text-brand-600">Available</span> are
          fully interactive now; the rest show the planned roadmap.
        </p>
      </header>

      <ol className="space-y-3">
        {CURRICULUM_SORTED.map((c, idx) => {
          const available = c.status === "available";

          const inner = (
            <div
              className={cn(
                "card flex items-center gap-4 p-4",
                available
                  ? "transition-all hover:border-brand-300 hover:shadow-md"
                  : "opacity-75"
              )}
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-sm font-bold text-brand-700 dark:bg-brand-900/40 dark:text-brand-300">
                {idx + 1}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-bold">{c.title}</h3>
                  {!available && <Lock size={13} className="shrink-0 text-slate-400" />}
                </div>
                <div className="mt-1.5 flex flex-wrap gap-1.5">
                  {c.subtopics.map((s) => (
                    <span
                      key={s}
                      className="chip bg-brand-50/60 text-brand-700 dark:bg-brand-900/20 dark:text-brand-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              {available && (
                <ArrowRight size={18} className="shrink-0 text-brand-600" />
              )}
            </div>
          );

          return (
            <li key={c.id}>
              {available ? <Link to={`/chapter/${c.id}`}>{inner}</Link> : inner}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
