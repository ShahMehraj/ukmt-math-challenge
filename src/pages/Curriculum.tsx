import { Link } from "react-router-dom";
import { Clock, Lock, ArrowRight, BookOpen } from "lucide-react";
import { CURRICULUM_SORTED, CHAPTER_BY_ID } from "@/data/chapters";
import { TOPIC_BY_ID } from "@/data/topics";
import { DifficultyBadge, FocusBadge } from "@/components/ui/Badges";
import { useProgress } from "@/store/progress";
import { cn } from "@/lib/cn";

export function Curriculum() {
  const { chapters } = useProgress();
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

      <ol className="space-y-4">
        {CURRICULUM_SORTED.map((c, idx) => {
          const topic = TOPIC_BY_ID[c.topic];
          const available = c.status === "available";
          const prog = chapters[c.id];
          const prereqTitles = c.prerequisites
            .map((p) => CHAPTER_BY_ID[p]?.title ?? CURRICULUM_SORTED.find((x) => x.id === p)?.title)
            .filter(Boolean);

          const inner = (
            <div
              className={cn(
                "card flex flex-col gap-3 p-5 sm:flex-row sm:items-center",
                available && "hover:border-brand-300 hover:shadow-md transition-all"
              )}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-100 font-bold text-brand-700 dark:bg-brand-900/40 dark:text-brand-300">
                {idx + 1}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg font-bold">{c.title}</h3>
                  {available ? (
                    <span className="chip bg-brand-100 text-brand-700 dark:bg-brand-900/40 dark:text-brand-300">
                      Available
                    </span>
                  ) : (
                    <span className="chip bg-slate-100 text-slate-500 dark:bg-slate-800">
                      <Lock size={11} /> Planned
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                  {c.blurb}
                </p>
                <div className="mt-2 flex flex-wrap items-center gap-2 text-xs">
                  <span className="chip bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                    {topic?.name}
                  </span>
                  <DifficultyBadge difficulty={c.difficulty} />
                  <FocusBadge focus={c.examFocus} />
                  <span className="chip bg-slate-100 text-slate-500 dark:bg-slate-800">
                    <Clock size={11} /> {c.estMinutes} min
                  </span>
                </div>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {c.subtopics.map((s) => (
                    <span
                      key={s}
                      className="chip bg-brand-50/60 text-brand-700 dark:bg-brand-900/20 dark:text-brand-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                {prereqTitles.length > 0 && (
                  <p className="mt-2 text-xs text-slate-400">
                    Prerequisite: {prereqTitles.join(", ")}
                  </p>
                )}
              </div>
              <div className="flex shrink-0 items-center gap-3 sm:flex-col sm:items-end">
                {available && prog && (
                  <div className="text-right">
                    <div className="text-xs text-slate-400">{prog.percent}%</div>
                    <div className="h-1.5 w-24 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                      <div
                        className="h-full rounded-full bg-brand-500"
                        style={{ width: `${prog.percent}%` }}
                      />
                    </div>
                  </div>
                )}
                {available ? (
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600">
                    Study <ArrowRight size={15} />
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 text-sm text-slate-400">
                    <BookOpen size={15} /> Soon
                  </span>
                )}
              </div>
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
