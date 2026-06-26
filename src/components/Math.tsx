import { useMemo } from "react";
import katex from "katex";

/**
 * Renders a string that mixes plain text with LaTeX delimited by:
 *   - $$ … $$  → display math
 *   - $ … $    → inline math
 * Everything else is treated as plain text (newlines preserved by callers).
 */
export function MathText({ children }: { children: string }) {
  const html = useMemo(() => renderMixed(children), [children]);
  return <span dangerouslySetInnerHTML={{ __html: html }} />;
}

/** Multi-paragraph prose: splits on blank lines, renders math inline. */
export function Prose({ text, className }: { text: string; className?: string }) {
  const paragraphs = text.split(/\n{2,}/);
  return (
    <div className={className}>
      {paragraphs.map((p, i) => (
        <p key={i} className="my-3 leading-relaxed">
          <MathText>{p}</MathText>
        </p>
      ))}
    </div>
  );
}

function renderMixed(input: string): string {
  let out = "";
  let i = 0;
  while (i < input.length) {
    if (input.startsWith("$$", i)) {
      const end = input.indexOf("$$", i + 2);
      if (end === -1) {
        out += escapeHtml(input.slice(i));
        break;
      }
      out += renderTex(input.slice(i + 2, end), true);
      i = end + 2;
    } else if (input[i] === "$") {
      const end = input.indexOf("$", i + 1);
      if (end === -1) {
        out += escapeHtml(input.slice(i));
        break;
      }
      out += renderTex(input.slice(i + 1, end), false);
      i = end + 1;
    } else {
      // Accumulate a plain-text run until the next delimiter.
      let next = input.indexOf("$", i);
      if (next === -1) next = input.length;
      out += escapeHtml(input.slice(i, next));
      i = next;
    }
  }
  return out;
}

function renderTex(tex: string, display: boolean): string {
  try {
    return katex.renderToString(tex, {
      displayMode: display,
      throwOnError: false,
      output: "html",
    });
  } catch {
    return escapeHtml(tex);
  }
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    // preserve simple newlines as <br/> within a paragraph
    .replace(/\n/g, "<br/>");
}
