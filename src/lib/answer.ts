// Loose answer-checking shared by interactive checks, practice, and mocks.

/** Normalize a free-text / numeric answer for forgiving comparison. */
export function normalize(raw: string): string {
  return raw
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/^\$+|\$+$/g, "") // strip stray $ from pasted LaTeX
    .replace(/[,]/g, "");
}

/** Try to read a value as a number, supporting simple fractions like "3/4". */
export function asNumber(raw: string): number | null {
  const s = normalize(raw);
  if (/^-?\d+(\.\d+)?$/.test(s)) return parseFloat(s);
  const frac = s.match(/^(-?\d+)\/(\d+)$/);
  if (frac) {
    const denom = parseInt(frac[2], 10);
    if (denom !== 0) return parseInt(frac[1], 10) / denom;
  }
  return null;
}

/**
 * Check a student's answer against a canonical answer plus accepted variants.
 * Numeric answers compare by value (so "0.5" === "1/2"); otherwise normalized
 * string equality.
 */
export function checkAnswer(
  given: string,
  answer: string,
  accepted: string[] = []
): boolean {
  if (!given.trim()) return false;
  const candidates = [answer, ...accepted];

  // Exact normalized match first.
  const g = normalize(given);
  if (candidates.some((c) => normalize(c) === g)) return true;

  // Numeric tolerance match.
  const gn = asNumber(given);
  if (gn !== null) {
    return candidates.some((c) => {
      const cn = asNumber(c);
      return cn !== null && Math.abs(cn - gn) < 1e-9;
    });
  }
  return false;
}
