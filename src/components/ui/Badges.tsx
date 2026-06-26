import type { Difficulty, ExamFocus } from "@/lib/types";
import { cn } from "@/lib/cn";

const diffStyles: Record<Difficulty, string> = {
  foundation: "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300",
  easy: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
  medium: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
  hard: "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
  olympiad: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
};

const diffLabel: Record<Difficulty, string> = {
  foundation: "Foundation",
  easy: "Easy",
  medium: "Medium",
  hard: "Hard",
  olympiad: "Olympiad",
};

export function DifficultyBadge({ difficulty }: { difficulty: Difficulty }) {
  return (
    <span className={cn("chip font-semibold", diffStyles[difficulty])}>
      {diffLabel[difficulty]}
    </span>
  );
}

const focusStyles: Record<ExamFocus, string> = {
  IMC: "bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300",
  HMC: "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300",
  both: "bg-brand-100 text-brand-700 dark:bg-brand-900/40 dark:text-brand-300",
};

export function FocusBadge({ focus }: { focus: ExamFocus }) {
  const label = focus === "both" ? "IMC + HMC" : focus;
  return <span className={cn("chip font-semibold", focusStyles[focus])}>{label}</span>;
}
