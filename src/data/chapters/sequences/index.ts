import type { Chapter, Problem } from "@/lib/types";

// ─── Sub-chapter lessons (one file each, authored from the Cengage chapter) ───
import { subIntro } from "./sub-01-intro";
import { subAP } from "./sub-02-ap";
import { subAPSum } from "./sub-03-ap-sum";
import { subGP } from "./sub-04-gp";
import { subGPSum } from "./sub-05-gp-sum";
import { subMeans } from "./sub-06-means";
import { subHP } from "./sub-07-hp";
import { subAGP } from "./sub-08-agp";
import { subSigma } from "./sub-09-sigma";
import { subTelescoping } from "./sub-10-telescoping";

// ─── Practice problem bank (original questions in the Cengage exercise style) ──
import { seqSingleA } from "./prob-single-a";
import { seqSingleB } from "./prob-single-b";
import { seqSingleC } from "./prob-single-c";
import { seqSingleD } from "./prob-single-d";
import { seqSingleE } from "./prob-single-e";
import { seqSingleF } from "./prob-single-f";
import { seqMultiA } from "./prob-multi-a";
import { seqMultiB } from "./prob-multi-b";
import { seqMultiC } from "./prob-multi-c";
import { seqLinkedA } from "./prob-linked-a";
import { seqLinkedB } from "./prob-linked-b";
import { seqNumericA } from "./prob-numeric-a";
import { seqNumericB } from "./prob-numeric-b";
import { seqMatrix } from "./prob-matrix";
import { seqArchives } from "./prob-archives";

/**
 * Every original practice problem authored for this chapter, in the style of
 * the Cengage "Progression and Series" exercises. Merged into the central
 * problem bank (see data/problems.ts) so they are filterable alongside every
 * other question, and referenced by the chapter for practice/challenge.
 */
export const sequencesProblems: Problem[] = [
  ...seqSingleA,
  ...seqSingleB,
  ...seqSingleC,
  ...seqSingleD,
  ...seqSingleE,
  ...seqSingleF,
  ...seqMultiA,
  ...seqMultiB,
  ...seqMultiC,
  ...seqLinkedA,
  ...seqLinkedB,
  ...seqNumericA,
  ...seqNumericB,
  ...seqMatrix,
  ...seqArchives,
];

// ─── Wire practice problems to sub-chapters by subtopic ───────────────────────
// Each problem carries a `subtopic` tag; we route the relevant ones under the
// sub-chapter that teaches them, capped so each list stays focused. The full
// bank remains browsable on the Problem Bank page.
const bySubtopic = (subtopic: string, limit = 12): string[] =>
  sequencesProblems
    .filter((p) => p.subtopic === subtopic)
    .map((p) => p.id)
    .slice(0, limit);

// Split the two-sub-chapter buckets so both halves get practice.
const apIds = sequencesProblems.filter((p) => p.subtopic === "Arithmetic Progression").map((p) => p.id);
const gpIds = sequencesProblems.filter((p) => p.subtopic === "Geometric Progression").map((p) => p.id);
const sigIds = sequencesProblems.filter((p) => p.subtopic === "Sigma & Telescoping").map((p) => p.id);

subAP.practiceProblemIds = apIds.slice(0, Math.ceil(apIds.length / 2));
subAPSum.practiceProblemIds = apIds.slice(Math.ceil(apIds.length / 2));
subGP.practiceProblemIds = gpIds.slice(0, Math.ceil(gpIds.length / 2));
subGPSum.practiceProblemIds = gpIds.slice(Math.ceil(gpIds.length / 2));
subMeans.practiceProblemIds = bySubtopic("Means & Inequalities", 40);
subHP.practiceProblemIds = bySubtopic("Harmonic Progression", 40);
subAGP.practiceProblemIds = bySubtopic("AGP", 40);
subSigma.practiceProblemIds = sigIds.slice(0, Math.ceil(sigIds.length / 2));
subTelescoping.practiceProblemIds = sigIds.slice(Math.ceil(sigIds.length / 2));

// Chapter-level lists: all non-trivial problems for practice, the hardest for
// the challenge section.
const practiceProblemIds = sequencesProblems
  .filter((p) => p.difficulty === "easy" || p.difficulty === "medium" || p.difficulty === "hard")
  .map((p) => p.id);
const challengeProblemIds = sequencesProblems
  .filter((p) => p.difficulty === "olympiad")
  .map((p) => p.id);

// ═══════════════════════════════════════════════════════════════════════════════
// CHAPTER EXPORT
// ═══════════════════════════════════════════════════════════════════════════════

export const sequencesChapter: Chapter = {
  id: "ch-seq-1",
  title: "Sequences & Series",
  topic: "sequences",
  order: 35,
  examFocus: "both",
  difficulty: "medium",
  estMinutes: 180,
  prerequisites: ["ch-algebra-1"],
  blurb:
    "Master arithmetic, geometric and harmonic progressions; the AM–GM–HM inequality; arithmetico-geometric series; sigma-notation and standard power sums; and the telescoping (method-of-differences) technique — the full toolkit of pattern and summation problems that pervade competition mathematics.",

  intro: {
    whyItMatters:
      "Sequences and series turn a visible pattern into an exact formula. AP and GP appear directly on the IMC, while telescoping, the AM–GM inequality and the arithmetico-geometric trick are staple tools for full-solution Hamilton problems and beyond.",
    whereItAppears:
      "IMC: pattern-spotting, nth-term and sum questions (Q8–20). Hamilton and olympiad: proving series identities, AM–GM optimisation, telescoping sums, and mixed AP/GP/HP relations.",
    typicalPatterns: [
      "Find the nth term or sum of an AP/GP from given conditions.",
      "Choose terms symmetrically (a−d, a, a+d) to exploit sum/product conditions.",
      "Use AM ≥ GM ≥ HM to find a minimum or maximum, stating the equality case.",
      "Sum a series by partial fractions or rationalisation so it telescopes.",
      "Recognise and sum an arithmetico-geometric series with multiply-by-r-and-subtract.",
      "Convert a harmonic-progression problem to an arithmetic one by taking reciprocals.",
      "Reduce a Σ to the standard power sums Σk, Σk², Σk³.",
    ],
    commonMistakes: [
      "Using the GP sum formula when r = 1 (it gives 0/0 — the sum is na).",
      "Forgetting that an infinite GP converges only when |r| < 1.",
      "Applying AM–GM when the terms are not all positive.",
      "Confusing the nth term aₙ with the partial sum Sₙ.",
      "Hunting for a direct nth-term formula in an HP instead of switching to the AP of reciprocals.",
      "In a 4-term symmetric AP, forgetting the common difference is 2d, not d.",
    ],
  },

  subChapters: [
    subIntro,
    subAP,
    subAPSum,
    subGP,
    subGPSum,
    subMeans,
    subHP,
    subAGP,
    subSigma,
    subTelescoping,
  ],

  lesson: [],

  workedExamples: [],
  practiceProblemIds,
  challengeProblemIds,

  summary: {
    keyFormulas: [
      "AP nth term: $a_n = a + (n-1)d$",
      "AP sum: $S_n = \\frac{n}{2}(2a + (n-1)d) = \\frac{n}{2}(a + l)$",
      "$a_n = S_n - S_{n-1}$ for $n \\geq 2$",
      "GP nth term: $a_n = ar^{n-1}$",
      "GP sum: $S_n = a\\,\\frac{r^n - 1}{r-1}\\;(r \\neq 1)$",
      "Infinite GP: $S_\\infty = \\frac{a}{1-r}$ for $|r| < 1$",
      "AM $= \\frac{a+b}{2}$, GM $= \\sqrt{ab}$, HM $= \\frac{2ab}{a+b}$",
      "AM $\\geq$ GM $\\geq$ HM (equality iff $a = b$); AM $\\times$ HM $=$ GM$^2$",
      "AGP infinite sum: $\\frac{a}{1-r} + \\frac{dr}{(1-r)^2}\\;(|r|<1)$",
      "$\\sum k = \\frac{n(n+1)}{2}$, $\\sum k^2 = \\frac{n(n+1)(2n+1)}{6}$, $\\sum k^3 = \\left[\\frac{n(n+1)}{2}\\right]^2$",
      "Telescoping: $\\frac{1}{k(k+1)} = \\frac{1}{k} - \\frac{1}{k+1}$",
    ],
    bigIdeas: [
      "AP = additive pattern (constant difference); GP = multiplicative pattern (constant ratio); HP = reciprocals in AP.",
      "Symmetric selection of terms turns sum/product conditions into easy equations.",
      "AM–GM converts a product constraint into a sum bound — the key optimisation tool.",
      "Telescoping turns a hard sum into a single difference by writing each term as f(k) − f(k−1).",
      "AGP yields to the 'multiply by r and subtract' trick, collapsing to a GP.",
      "Most Σ problems reduce to the three standard power sums.",
    ],
    patternTips: [
      "'Sum and product' of 3 numbers? Use symmetric AP/GP selection.",
      "A fraction like $\\frac{1}{k(k+d)}$? Partial fractions → telescope.",
      "(linear)×(exponential)? That's an AGP — multiply by r and subtract.",
      "Need a min/max of a symmetric expression? AM–GM, and state the equality case.",
      "See $\\sqrt{k+1}-\\sqrt{k}$? Rationalise → telescope.",
      "Sₙ quadratic in n with no constant term? It's an AP with d = 2·(coefficient of n²).",
    ],
    traps: [
      "GP formula is undefined at r = 1 — handle it separately as Sₙ = na.",
      "An infinite GP converges only for |r| < 1; r = ±1 does not converge.",
      "AM–GM needs ALL terms positive.",
      "In a 4-term symmetric AP the common difference is 2d.",
      "'Sum of n arithmetic means' is the middle terms only, not the whole AP.",
    ],
    revisionNotes: [
      "Memorise Σk, Σk², Σk³ — they recur constantly.",
      "Know 1+2+⋯+n = n(n+1)/2 and the first n odds sum to n².",
      "AGP: the multiply–subtract method is mechanical once you see it.",
      "Always state WHEN equality holds in an AM–GM argument.",
      "Telescoping usually starts with partial fractions or a rationalisation.",
    ],
  },
};
