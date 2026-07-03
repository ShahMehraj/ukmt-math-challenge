import type { LessonBlock } from "@/lib/types";
import { MathText, Prose } from "@/components/Math";
import { Callout, DiagramView, WorkedExample } from "./Blocks";
import { InteractiveCheck } from "./InteractiveCheck";

/**
 * Renders an ordered list of lesson blocks, wiring interactive checks back to
 * the progress store via `onPass`.
 */
export function LessonRenderer({
  blocks,
  onPass,
}: {
  blocks: LessonBlock[];
  onPass?: (checkId: string) => void;
}) {
  return (
    <div className="prose-math">
      {blocks.map((block, i) => {
        switch (block.kind) {
          case "prose":
            return (
              <div key={i}>
                {block.heading && (
                  <h3 className="mt-6 mb-1 text-lg font-bold text-slate-900 dark:text-slate-100">
                    <MathText>{block.heading}</MathText>
                  </h3>
                )}
                <Prose text={block.content} />
              </div>
            );
          case "callout":
            return <Callout key={i} block={block} />;
          case "diagram":
            return <DiagramView key={i} block={block} />;
          case "example":
            return <WorkedExample key={i} block={block} />;
          case "check":
            return <InteractiveCheck key={block.id} block={block} onPass={onPass} />;
          default:
            return null;
        }
      })}
    </div>
  );
}
