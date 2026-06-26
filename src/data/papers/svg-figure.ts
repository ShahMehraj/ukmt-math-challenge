/**
 * Helpers for embedding the IMC figures derived from the official PDFs
 * (under `./imc-2024/`).
 *
 * The raw `pdf2svg` traces are unreliable to render as-is: they lean on
 * clip-paths, opaque-white masking fills, and arcs drawn at huge coordinates
 * through a flipped matrix transform — which composite inconsistently in the
 * browser. They are pre-processed (transforms baked into plain display
 * coordinates, clip-paths dropped, glyph-outline labels replaced with real
 * `<text>`) into self-contained SVGs that use `currentColor` ink and a
 * theme-neutral grey for shaded regions.
 *
 * `paperFigure` renders them on a light rounded card so the white masking fills
 * (the carved-out "bites" in e.g. Q9/Q21) read correctly in both themes; the
 * card pins a dark `currentColor` so the ink stays visible on that white.
 */

/**
 * Wrap a prepared figure SVG for inline rendering: drop the XML prolog and give
 * it a light rounded backdrop sized a touch larger for legibility. The pinned
 * `text-slate-800` keeps `currentColor` ink dark on the white card in dark mode.
 *
 * `width` is a Tailwind width utility (default `w-48`); pass a wider one (e.g.
 * `w-72`) for multi-panel figures whose labels would otherwise read too small.
 */
export function paperFigure(raw: string, width = "w-48"): string {
  const svg = raw
    .replace(/<\?xml[^>]*\?>\s*/, "")
    .replace(/<svg\b/, '<svg width="100%" height="auto"')
    .trim();
  return `<span class="inline-flex ${width} max-w-full items-center justify-center rounded-lg bg-white p-3 text-slate-800">${svg}</span>`;
}

/**
 * Shared stroke style for hand-authored figures: `currentColor` ink so simple
 * line diagrams (grids, tables, axes) adapt to light and dark themes without a
 * forced backdrop. Use this only for figures with no shading or masking fills —
 * for those, trace + `paperFigure` instead.
 */
export const INK = 'stroke="currentColor" fill="none" stroke-width="1.6"';
