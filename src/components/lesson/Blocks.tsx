import { useState } from "react";
import {
  Lightbulb,
  AlertTriangle,
  BookOpen,
  Sparkles,
  Zap,
  ChevronDown,
} from "lucide-react";
import type {
  CalloutBlock,
  DiagramBlock,
  ExampleBlock,
  Diagram,
} from "@/lib/types";
import { MathText, Prose } from "@/components/Math";
import { cn } from "@/lib/cn";

const calloutStyles: Record<
  CalloutBlock["variant"],
  { icon: typeof Lightbulb; ring: string; label: string }
> = {
  intuition: { icon: Sparkles, ring: "border-violet-300 bg-violet-50 dark:border-violet-800 dark:bg-violet-950/30", label: "Intuition" },
  tip: { icon: Zap, ring: "border-brand-300 bg-brand-50 dark:border-brand-800 dark:bg-brand-950/30", label: "Tip" },
  warning: { icon: AlertTriangle, ring: "border-amber-300 bg-amber-50 dark:border-amber-800 dark:bg-amber-950/30", label: "Watch out" },
  definition: { icon: BookOpen, ring: "border-sky-300 bg-sky-50 dark:border-sky-800 dark:bg-sky-950/30", label: "Definition" },
  trap: { icon: AlertTriangle, ring: "border-red-300 bg-red-50 dark:border-red-800 dark:bg-red-950/30", label: "Common trap" },
};

export function Callout({ block }: { block: CalloutBlock }) {
  const s = calloutStyles[block.variant];
  const Icon = s.icon;
  return (
    <div className={cn("my-4 rounded-xl border-l-4 p-4", s.ring)}>
      <div className="mb-1 flex items-center gap-2 text-sm font-bold">
        <Icon size={16} />
        <MathText>{block.title ?? s.label}</MathText>
      </div>
      <Prose text={block.content} className="prose-math text-sm" />
    </div>
  );
}

export function Figure({ diagram }: { diagram: Diagram }) {
  return (
    <figure className="my-5 flex flex-col items-center">
      <div
        className="max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-700 dark:bg-slate-900 [&>svg]:w-full [&>svg]:h-auto [&>svg]:max-w-md"
        role="img"
        aria-label={diagram.alt}
        dangerouslySetInnerHTML={{ __html: diagram.svg }}
      />
      {diagram.caption && (
        <figcaption className="mt-2 text-center text-xs text-slate-500">
          <MathText>{diagram.caption}</MathText>
        </figcaption>
      )}
    </figure>
  );
}

export function DiagramView({ block }: { block: DiagramBlock }) {
  return <Figure diagram={block.diagram} />;
}

export function WorkedExample({ block }: { block: ExampleBlock }) {
  const [showSolution, setShowSolution] = useState(false);
  const [showAlt, setShowAlt] = useState(false);
  return (
    <div className="my-5 rounded-2xl border border-slate-200 bg-slate-50/70 p-4 dark:border-slate-700 dark:bg-slate-900/50">
      <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
        Worked example{block.title ? <> · <MathText>{block.title}</MathText></> : ""}
      </div>
      <Prose text={block.statement} className="prose-math font-medium" />
      {block.diagram && <Figure diagram={block.diagram} />}

      {block.approach && (
        <div className="mt-2 rounded-lg bg-white px-3 py-2 text-sm dark:bg-slate-800/60">
          <span className="font-semibold text-brand-700 dark:text-brand-400">
            Approach.{" "}
          </span>
          <MathText>{block.approach}</MathText>
        </div>
      )}

      {!showSolution ? (
        <button
          onClick={() => setShowSolution(true)}
          className="btn-ghost mt-3"
        >
          <ChevronDown size={16} /> Show solution
        </button>
      ) : (
        <div className="mt-3 border-t border-slate-200 pt-3 dark:border-slate-700">
          <Prose text={block.solution} className="prose-math text-sm" />
          {block.alternative &&
            (showAlt ? (
              <div className="mt-3 rounded-lg bg-brand-50 px-3 py-2 text-sm dark:bg-brand-950/30">
                <span className="font-semibold text-brand-700 dark:text-brand-400">
                  Faster way.{" "}
                </span>
                <MathText>{block.alternative}</MathText>
              </div>
            ) : (
              <button
                onClick={() => setShowAlt(true)}
                className="mt-2 text-sm font-medium text-brand-700 hover:underline dark:text-brand-400"
              >
                Show a faster method →
              </button>
            ))}
        </div>
      )}
    </div>
  );
}
