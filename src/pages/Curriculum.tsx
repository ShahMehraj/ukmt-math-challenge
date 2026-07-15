import { Link } from "react-router-dom";
import { Lock } from "lucide-react";
import { CURRICULUM_SORTED } from "@/data/chapters";
import { useProgress } from "@/store/progress";
import { cn } from "@/lib/cn";

/** Inline SVG icons for each chapter — meaningful to the topic, clean line style. */
const CHAPTER_ICONS: Record<string, JSX.Element> = {
  /* Foundations: building blocks / stacking bricks */
  "ch-found-1": (
    <svg viewBox="0 0 48 48" className="h-full w-full" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="8" y="32" width="32" height="8" rx="1.5" fill="currentColor" opacity="0.12" />
      <rect x="12" y="22" width="24" height="8" rx="1.5" fill="currentColor" opacity="0.08" />
      <rect x="16" y="12" width="16" height="8" rx="1.5" />
      <rect x="8" y="32" width="32" height="8" rx="1.5" />
      <rect x="12" y="22" width="24" height="8" rx="1.5" />
    </svg>
  ),
  /* Number theory: prime sieve dots */
  "ch-nt-1": (
    <svg viewBox="0 0 48 48" className="h-full w-full" fill="none" stroke="currentColor" strokeWidth="1.8">
      <g fill="currentColor" opacity="0.15"><circle cx="10" cy="10" r="4"/><circle cx="24" cy="10" r="4"/><circle cx="38" cy="10" r="4"/><circle cx="10" cy="24" r="4"/><circle cx="24" cy="24" r="4"/><circle cx="38" cy="24" r="4"/><circle cx="10" cy="38" r="4"/><circle cx="24" cy="38" r="4"/><circle cx="38" cy="38" r="4"/></g>
      <g fill="currentColor"><circle cx="10" cy="10" r="3"/><circle cx="24" cy="10" r="3"/><circle cx="38" cy="24" r="3"/><circle cx="10" cy="38" r="3"/></g>
      <line x1="10" y1="10" x2="24" y2="10" strokeWidth="1" opacity="0.3"/>
      <line x1="10" y1="10" x2="10" y2="38" strokeWidth="1" opacity="0.3"/>
    </svg>
  ),
  /* Sets & Real Numbers: Venn diagram */
  "ch-sets-reals": (
    <svg viewBox="0 0 48 48" className="h-full w-full" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <circle cx="18" cy="24" r="13" fill="currentColor" opacity="0.08"/>
      <circle cx="30" cy="24" r="13" fill="currentColor" opacity="0.08"/>
      <circle cx="18" cy="24" r="13"/>
      <circle cx="30" cy="24" r="13"/>
      <rect x="3" y="6" width="42" height="36" rx="2" strokeWidth="1.2" opacity="0.4"/>
    </svg>
  ),
  /* Combinatorics: branching tree */
  "ch-comb-1": (
    <svg viewBox="0 0 48 48" className="h-full w-full" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <circle cx="10" cy="24" r="3" fill="currentColor" opacity="0.3"/>
      <line x1="13" y1="24" x2="25" y2="12"/><line x1="13" y1="24" x2="25" y2="24"/><line x1="13" y1="24" x2="25" y2="36"/>
      <circle cx="28" cy="12" r="2.5" fill="currentColor"/><circle cx="28" cy="24" r="2.5" fill="currentColor"/><circle cx="28" cy="36" r="2.5" fill="currentColor"/>
      <line x1="30.5" y1="12" x2="39" y2="8"/><line x1="30.5" y1="12" x2="39" y2="16"/>
      <line x1="30.5" y1="24" x2="39" y2="20"/><line x1="30.5" y1="24" x2="39" y2="28"/>
      <line x1="30.5" y1="36" x2="39" y2="32"/><line x1="30.5" y1="36" x2="39" y2="40"/>
      <g fill="currentColor" opacity="0.5"><circle cx="41" cy="8" r="1.5"/><circle cx="41" cy="16" r="1.5"/><circle cx="41" cy="20" r="1.5"/><circle cx="41" cy="28" r="1.5"/><circle cx="41" cy="32" r="1.5"/><circle cx="41" cy="40" r="1.5"/></g>
    </svg>
  ),
  /* Probability: dice */
  "ch-count-1": (
    <svg viewBox="0 0 48 48" className="h-full w-full" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
      <rect x="8" y="8" width="32" height="32" rx="5" fill="currentColor" opacity="0.08"/>
      <rect x="8" y="8" width="32" height="32" rx="5"/>
      <g fill="currentColor"><circle cx="16" cy="16" r="2.5"/><circle cx="32" cy="16" r="2.5"/><circle cx="24" cy="24" r="2.5"/><circle cx="16" cy="32" r="2.5"/><circle cx="32" cy="32" r="2.5"/></g>
    </svg>
  ),
  /* Counting & probability (legacy fallback): dice + branching */
  "ch-cp-1": (
    <svg viewBox="0 0 48 48" className="h-full w-full" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
      <rect x="10" y="10" width="18" height="18" rx="3" fill="currentColor" opacity="0.1" />
      <rect x="10" y="10" width="18" height="18" rx="3" />
      <circle cx="15" cy="15" r="1.5" fill="currentColor"/><circle cx="23" cy="15" r="1.5" fill="currentColor"/>
      <circle cx="15" cy="23" r="1.5" fill="currentColor"/><circle cx="23" cy="23" r="1.5" fill="currentColor"/>
      <circle cx="19" cy="19" r="1.5" fill="currentColor"/>
      <path d="M32 20 L40 12 M32 20 L40 20 M32 20 L40 28" strokeWidth="1.5"/>
      <circle cx="40" cy="12" r="2" fill="currentColor" opacity="0.5"/><circle cx="40" cy="20" r="2" fill="currentColor" opacity="0.5"/><circle cx="40" cy="28" r="2" fill="currentColor" opacity="0.5"/>
    </svg>
  ),
  /* Number Sense: lightning bolt + mental calculation */
  "ch-num-1": (
    <svg viewBox="0 0 48 48" className="h-full w-full" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M26 4 L18 22 L26 22 L20 44 L36 20 L28 20 L34 4 Z" fill="currentColor" opacity="0.12"/>
      <path d="M26 4 L18 22 L26 22 L20 44 L36 20 L28 20 L34 4 Z"/>
      <g fontFamily="Georgia, serif" fill="currentColor" fontSize="9" fontWeight="bold" opacity="0.7">
        <text x="2" y="14">47</text>
        <text x="1" y="24">×53</text>
      </g>
      <line x1="1" y1="27" x2="16" y2="27" strokeWidth="1" opacity="0.5"/>
      <g fontFamily="Georgia, serif" fill="currentColor" fontSize="8" fontWeight="bold" opacity="0.6">
        <text x="1" y="36">2491</text>
      </g>
    </svg>
  ),
  /* Algebra: parabola with roots */
  "ch-algebra-1": (
    <svg viewBox="0 0 48 48" className="h-full w-full" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <path d="M6 38 C6 38 14 6 24 6 C34 6 42 38 42 38" fill="currentColor" opacity="0.08"/>
      <path d="M6 38 C6 38 14 6 24 6 C34 6 42 38 42 38"/>
      <line x1="4" y1="38" x2="44" y2="38" strokeWidth="1" opacity="0.4"/>
      <circle cx="12" cy="38" r="2.5" fill="currentColor"/><circle cx="36" cy="38" r="2.5" fill="currentColor"/>
      <line x1="24" y1="6" x2="24" y2="38" strokeWidth="1" strokeDasharray="2 2" opacity="0.3"/>
    </svg>
  ),
  /* Sequences: ascending staircase of dots */
  "ch-seq-1": (
    <svg viewBox="0 0 48 48" className="h-full w-full" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <path d="M6 40 L12 34 L18 34 L24 28 L30 28 L36 22 L42 22" opacity="0.3"/>
      <circle cx="6" cy="40" r="2.5" fill="currentColor"/><circle cx="12" cy="34" r="2.5" fill="currentColor"/>
      <circle cx="24" cy="28" r="2.5" fill="currentColor"/><circle cx="36" cy="22" r="2.5" fill="currentColor"/>
      <circle cx="42" cy="16" r="2" fill="currentColor" opacity="0.4"/>
      <circle cx="46" cy="11" r="1.5" fill="currentColor" opacity="0.2"/>
    </svg>
  ),
  /* Ratio & proportion: balance scale */
  "ch-ratio-1": (
    <svg viewBox="0 0 48 48" className="h-full w-full" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="24" y1="8" x2="24" y2="40" opacity="0.3"/>
      <polygon points="22,40 26,40 24,44" fill="currentColor" opacity="0.5"/>
      <line x1="8" y1="18" x2="40" y2="18"/>
      <circle cx="24" cy="18" r="2" fill="currentColor"/>
      <path d="M8 18 L6 28 L14 28 Z" fill="currentColor" opacity="0.15" stroke="currentColor"/>
      <path d="M40 18 L38 28 L46 28 Z" fill="currentColor" opacity="0.15" stroke="currentColor"/>
      <circle cx="10" cy="24" r="3" fill="currentColor" opacity="0.3"/>
      <circle cx="42" cy="24" r="3" fill="currentColor" opacity="0.3"/>
    </svg>
  ),
  /* Angles & polygons: protractor arc with angle */
  "ch-angles-1": (
    <svg viewBox="0 0 48 48" className="h-full w-full" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="8" y1="38" x2="40" y2="38"/>
      <line x1="8" y1="38" x2="28" y2="10"/>
      <path d="M18 38 A12 12 0 0 1 16 28" strokeWidth="1.5"/>
      <path d="M8 38 A30 30 0 0 1 40 38" strokeWidth="1" opacity="0.2" strokeDasharray="2 2"/>
      <text x="18" y="34" fontSize="9" fill="currentColor" fontFamily="Georgia, serif" opacity="0.7">θ</text>
    </svg>
  ),
  /* Area & perimeter: triangle with shaded area */
  "ch-area-1": (
    <svg viewBox="0 0 48 48" className="h-full w-full" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="8,40 40,40 24,10" fill="currentColor" opacity="0.1"/>
      <polygon points="8,40 40,40 24,10"/>
      <line x1="24" y1="10" x2="24" y2="40" strokeDasharray="2 2" strokeWidth="1" opacity="0.4"/>
      <text x="26" y="28" fontSize="8" fill="currentColor" fontFamily="Georgia, serif" fontStyle="italic" opacity="0.6">h</text>
      <text x="20" y="44" fontSize="8" fill="currentColor" fontFamily="Georgia, serif" fontStyle="italic" opacity="0.6">b</text>
    </svg>
  ),
  /* Circles: circle with inscribed angle + chord */
  "ch-circles-1": (
    <svg viewBox="0 0 48 48" className="h-full w-full" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <circle cx="24" cy="24" r="18"/>
      <circle cx="24" cy="24" r="1.5" fill="currentColor"/>
      <line x1="24" y1="24" x2="40" y2="18" strokeWidth="1.2" opacity="0.5"/>
      <path d="M10 32 L38 14" strokeWidth="1.5"/>
      <path d="M10 32 L24 6" strokeWidth="1.2" opacity="0.4"/>
      <path d="M38 14 L24 6" strokeWidth="1.2" opacity="0.4"/>
      <path d="M24 6 A18 18 0 0 1 38 14" fill="currentColor" opacity="0.1"/>
    </svg>
  ),
  /* Coordinate geometry: axes + line + point */
  "ch-coord-1": (
    <svg viewBox="0 0 48 48" className="h-full w-full" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <line x1="6" y1="42" x2="44" y2="42" strokeWidth="1.2"/>
      <line x1="6" y1="42" x2="6" y2="4" strokeWidth="1.2"/>
      <path d="M6 36 L38 8" strokeWidth="1.8"/>
      <circle cx="22" cy="22" r="3" fill="currentColor" opacity="0.5"/>
      <line x1="22" y1="22" x2="22" y2="42" strokeDasharray="2 2" strokeWidth="1" opacity="0.3"/>
      <line x1="22" y1="22" x2="6" y2="22" strokeDasharray="2 2" strokeWidth="1" opacity="0.3"/>
    </svg>
  ),
  /* 3D / solids: wireframe cube */
  "ch-3d-1": (
    <svg viewBox="0 0 48 48" className="h-full w-full" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
      <path d="M12 34 L12 16 L30 16 L30 34 Z"/>
      <path d="M12 16 L22 8 L40 8 L30 16"/>
      <path d="M30 34 L40 26 L40 8"/>
      <path d="M12 34 L22 26 L40 26" opacity="0.3" strokeDasharray="2 2"/>
      <path d="M22 26 L22 8" opacity="0.3" strokeDasharray="2 2"/>
      <path d="M12 16 L30 16 L40 8" fill="currentColor" opacity="0.06"/>
    </svg>
  ),
  /* Logic & proof: turnstile / inference symbol */
  "ch-logic-1": (
    <svg viewBox="0 0 48 48" className="h-full w-full" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <line x1="10" y1="10" x2="10" y2="38"/>
      <line x1="10" y1="24" x2="38" y2="24"/>
      <line x1="10" y1="16" x2="28" y2="16" opacity="0.4"/>
      <line x1="10" y1="32" x2="28" y2="32" opacity="0.4"/>
      <path d="M32 20 L38 24 L32 28" fill="none"/>
    </svg>
  ),
};

function DefaultIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-full w-full">
      <rect x="10" y="10" width="28" height="28" rx="4" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="1.5" />
      <text x="18" y="30" fontSize="14" fill="currentColor">Σ</text>
    </svg>
  );
}

type ChapterStatus = "not-started" | "in-progress" | "completed";

function getStatus(
  chapterId: string,
  chapters: Record<string, { percent: number; completed: boolean }>
): ChapterStatus {
  const p = chapters[chapterId];
  if (!p || p.percent === 0) return "not-started";
  if (p.completed || p.percent >= 100) return "completed";
  return "in-progress";
}

const STATUS_LABELS: Record<ChapterStatus, { text: string; className: string }> = {
  "not-started": {
    text: "Not started",
    className: "bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400",
  },
  "in-progress": {
    text: "In progress",
    className: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
  },
  completed: {
    text: "Completed",
    className: "bg-brand-100 text-brand-700 dark:bg-brand-900/30 dark:text-brand-300",
  },
};

export function Curriculum() {
  const { chapters } = useProgress();

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-extrabold tracking-tight">Curriculum</h1>
        <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-300">
          A structured pathway covering every concept tested in the IMC and
          Hamilton — from foundations to olympiad level.
        </p>
      </header>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {CURRICULUM_SORTED.map((c) => {
          const available = c.status === "available";
          const status = available ? getStatus(c.id, chapters) : "not-started";
          const badge = STATUS_LABELS[status];

          const card = (
            <div
              className={cn(
                "group relative flex aspect-square flex-col items-center justify-between rounded-2xl border p-4 transition-all",
                available
                  ? "cursor-pointer border-slate-200 bg-white hover:border-brand-400 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900 dark:hover:border-brand-500"
                  : "border-slate-100 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/50"
              )}
            >
              {/* Icon */}
              <div
                className={cn(
                  "flex h-16 w-16 items-center justify-center rounded-xl",
                  available
                    ? "text-brand-600 dark:text-brand-400"
                    : "text-slate-400 dark:text-slate-600"
                )}
              >
                {CHAPTER_ICONS[c.id] ?? <DefaultIcon />}
              </div>

              {/* Title */}
              <h3
                className={cn(
                  "mt-2 text-center text-sm font-semibold leading-tight",
                  available
                    ? "text-slate-800 dark:text-slate-100"
                    : "text-slate-400 dark:text-slate-600"
                )}
              >
                {c.title}
              </h3>

              {/* Status badge */}
              <span
                className={cn(
                  "mt-2 rounded-full px-2.5 py-0.5 text-[11px] font-medium",
                  available ? badge.className : "bg-slate-100 text-slate-400 dark:bg-slate-800 dark:text-slate-600"
                )}
              >
                {available ? badge.text : "Locked"}
              </span>

              {/* Lock overlay for planned */}
              {!available && (
                <Lock
                  size={14}
                  className="absolute right-3 top-3 text-slate-300 dark:text-slate-700"
                />
              )}
            </div>
          );

          return available ? (
            <Link key={c.id} to={`/chapter/${c.id}`}>
              {card}
            </Link>
          ) : (
            <div key={c.id}>{card}</div>
          );
        })}
      </div>
    </div>
  );
}
