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
  // Pre-process: apply **bold** and *italic* at the full-string level, but only
  // to characters OUTSIDE of $...$ / $$...$$ LaTeX regions.  We do this by
  // splitting the string into LaTeX-tokens and text-tokens, applying markdown
  // only to the text tokens, then reassembling and rendering LaTeX.
  const processed = applyMarkdownOutsideLatex(input);

  let out = "";
  let i = 0;
  while (i < processed.length) {
    if (processed.startsWith("$$", i)) {
      const end = processed.indexOf("$$", i + 2);
      if (end === -1) {
        out += escapeHtml(processed.slice(i));
        break;
      }
      out += renderTex(processed.slice(i + 2, end), true);
      i = end + 2;
    } else if (processed[i] === "$") {
      const end = processed.indexOf("$", i + 1);
      if (end === -1) {
        out += escapeHtml(processed.slice(i));
        break;
      }
      out += renderTex(processed.slice(i + 1, end), false);
      i = end + 1;
    } else {
      // Plain-text run (markdown already converted to HTML tags).
      // Only escape &, and convert newlines — don't escape < > since those
      // are our injected <strong>/<em>/<code> tags.
      let next = processed.indexOf("$", i);
      if (next === -1) next = processed.length;
      out += processed.slice(i, next).replace(/&/g, "&amp;").replace(/\n/g, "<br/>");
      i = next;
    }
  }
  return out;
}

/**
 * Apply **bold**, *italic*, and `code` markdown to text outside LaTeX
 * delimiters. Returns the string with markdown replaced by HTML tags, with
 * LaTeX regions untouched.
 */
function applyMarkdownOutsideLatex(input: string): string {
  // Split into tokens: LaTeX regions (untouched) and text regions (markdown-able)
  const tokens: { text: string; isLatex: boolean }[] = [];
  let i = 0;
  while (i < input.length) {
    if (input.startsWith("$$", i)) {
      const end = input.indexOf("$$", i + 2);
      if (end === -1) { tokens.push({ text: input.slice(i), isLatex: true }); break; }
      tokens.push({ text: input.slice(i, end + 2), isLatex: true });
      i = end + 2;
    } else if (input[i] === "$") {
      const end = input.indexOf("$", i + 1);
      if (end === -1) { tokens.push({ text: input.slice(i), isLatex: true }); break; }
      tokens.push({ text: input.slice(i, end + 1), isLatex: true });
      i = end + 1;
    } else {
      let next = input.indexOf("$", i);
      if (next === -1) next = input.length;
      tokens.push({ text: input.slice(i, next), isLatex: false });
      i = next;
    }
  }

  // Join all text tokens (using a placeholder for LaTeX) to apply markdown
  // across them, then split back.
  // Simpler approach: just apply markdown to concatenated text tokens and
  // rebuild. But bold markers might span multiple text tokens with LaTeX in
  // between — which is the whole point.
  //
  // Strategy: join all tokens into one string with LaTeX replaced by unique
  // markers, apply bold/italic regex, then restore LaTeX.
  const MARKER = "\x00";
  const latexParts: string[] = [];
  let joined = "";
  for (const tok of tokens) {
    if (tok.isLatex) {
      joined += MARKER + String(latexParts.length) + MARKER;
      latexParts.push(tok.text);
    } else {
      joined += tok.text;
    }
  }

  // Apply markdown to the joined string (LaTeX is safe behind markers)
  joined = joined.replace(/`([^`]+)`/g, '<code class="rounded bg-slate-100 px-1 py-0.5 text-[0.9em] dark:bg-slate-800">$1</code>');
  joined = joined.replace(/\*\*([^*]+(?:\*(?!\*)[^*]*)*)\*\*/g, "<strong>$1</strong>");
  joined = joined.replace(
    /(^|[\s(])\*(\S(?:[^*\n]*\S)?)\*(?=[\s).,;:!?]|$)/g,
    "$1<em>$2</em>"
  );

  // Restore LaTeX markers
  joined = joined.replace(new RegExp(MARKER + "(\\d+)" + MARKER, "g"), (_, idx) => latexParts[+idx]);

  return joined;
}

/** Escape HTML, then apply inline markdown to a plain-text run. */
function renderInline(s: string): string {
  let t = escapeHtml(s);
  // `code` first so its contents aren't re-processed.
  t = t.replace(/`([^`]+)`/g, '<code class="rounded bg-slate-100 px-1 py-0.5 text-[0.9em] dark:bg-slate-800">$1</code>');
  // **bold** before *italic* so the double markers win.
  t = t.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  // *italic* only at word boundaries — so multiplication asterisks like
  // "2^2*3*7" (a * flanked by characters) are left untouched.
  t = t.replace(
    /(^|[\s(])\*(\S(?:[^*\n]*\S)?)\*(?=[\s).,;:!?]|$)/g,
    "$1<em>$2</em>"
  );
  return t;
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
