import type { PastPaper } from "@/lib/types";

/**
 * The "Before you start" instructions shared by the pre-test popup (on the
 * Past Papers list) and the runner's direct-navigation fallback. Content adapts
 * to whether the paper is attemptable in-app or self-marked, and warns when no
 * answer key is loaded.
 */
export function PaperInstructions({ paper }: { paper: PastPaper }) {
  const inApp = !!paper.questions?.length;
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">Before you start</h2>
      <ol className="list-inside list-decimal space-y-2 text-sm text-slate-600 dark:text-slate-300">
        {inApp ? (
          <>
            <li>
              Every question appears on the page — work on rough paper, no
              calculator.
            </li>
            <li>
              The {paper.minutes}-minute timer starts immediately and
              auto-submits when time runs out.
            </li>
            <li>
              Tap an option (A–E) for each question, then submit to be scored
              with the authentic scheme.
            </li>
          </>
        ) : (
          <>
            <li>
              Open the official UKMT paper in a new tab — that's where the
              questions live.
            </li>
            <li>
              The {paper.minutes}-minute timer starts immediately; work the
              paper on rough paper, no calculator.
            </li>
            <li>
              Record each answer (A–E) on the grid, then submit to be scored.
            </li>
          </>
        )}
      </ol>
      {!paper.verified && (
        <p className="rounded-lg bg-amber-50 px-3 py-2 text-sm text-amber-800 dark:bg-amber-950/30 dark:text-amber-200">
          The answer key for this paper isn't loaded yet, so you'll get a timed
          run and can self-check against the official solutions — but no
          automatic score.
        </p>
      )}
    </div>
  );
}
