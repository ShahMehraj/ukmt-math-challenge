import type { Chapter } from "@/lib/types";

/**
 * The Brush-Up / Foundations chapter (Phase 2). Short, interactive, and used
 * by the diagnostic to confirm a student is ready for the main course.
 */
export const foundationsChapter: Chapter = {
  id: "ch-found-1",
  title: "Foundations Brush-Up",
  topic: "foundations",
  order: 1,
  examFocus: "both",
  difficulty: "foundation",
  estMinutes: 45,
  prerequisites: [],
  blurb:
    "A quick, confidence-building refresher of the arithmetic and algebra you'll lean on constantly: fractions, percentages, negative numbers, BIDMAS and basic equation solving.",

  intro: {
    whyItMatters:
      "Competition questions almost never test these skills directly — they assume them. Fluency here frees up your thinking time for the actual puzzle.",
    whereItAppears:
      "Every single IMC and Hamilton question relies on confident arithmetic and algebra under time pressure.",
    typicalPatterns: [
      "Order of operations (BIDMAS) on a multi-step expression.",
      "Adding/comparing fractions with different denominators.",
      "Percentage increase/decrease and 'percentage of' calculations.",
      "Rearranging and solving a simple linear equation.",
    ],
    commonMistakes: [
      "Working left-to-right instead of following BIDMAS.",
      "Adding fractions by adding numerators and denominators separately.",
      "Sign slips with negative numbers.",
    ],
  },

  lesson: [
    {
      kind: "prose",
      heading: "Order of operations (BIDMAS)",
      content:
        "Evaluate in this order: **B**rackets, **I**ndices (powers), **D**ivision & **M**ultiplication (left to right), then **A**ddition & **S**ubtraction (left to right). So $2 + 3 \\times 4 = 2 + 12 = 14$, *not* $20$.",
    },
    {
      kind: "check",
      id: "f-c1",
      prompt: "Evaluate $5 + 2 \\times (8 - 3)^2$.",
      format: "numeric",
      answer: "55",
      hint: "Brackets first, then the power, then multiply, then add.",
      explanation:
        "$(8-3)^2 = 5^2 = 25$; then $2\\times25 = 50$; then $5 + 50 = 55$.",
    },
    {
      kind: "prose",
      heading: "Fractions",
      content:
        "To add or subtract fractions, rewrite them over a **common denominator**. To multiply, multiply tops and bottoms. To divide, multiply by the reciprocal (flip the second fraction).",
    },
    {
      kind: "check",
      id: "f-c2",
      prompt: "Work out $\\frac{2}{3} + \\frac{1}{4}$. Give your answer as a fraction.",
      format: "text",
      answer: "11/12",
      hint: "Use a common denominator of $12$.",
      explanation:
        "$\\frac{2}{3} = \\frac{8}{12}$ and $\\frac{1}{4} = \\frac{3}{12}$, so the sum is $\\frac{11}{12}$.",
    },
    {
      kind: "prose",
      heading: "Percentages",
      content:
        "A percentage is just a fraction out of $100$. To find $15\\%$ of $80$, compute $\\frac{15}{100}\\times80 = 12$. For a percentage *increase*, multiply by $(1 + \\frac{r}{100})$; for a decrease, by $(1 - \\frac{r}{100})$.",
    },
    {
      kind: "check",
      id: "f-c3",
      prompt: "A £$40$ jacket is reduced by $25\\%$. What is the sale price in £?",
      format: "numeric",
      answer: "30",
      hint: "Multiply by $(1 - 0.25) = 0.75$.",
      explanation: "$40 \\times 0.75 = 30$, so the sale price is £$30$.",
    },
    {
      kind: "prose",
      heading: "Solving linear equations",
      content:
        "Do the same thing to both sides to isolate the unknown. Expand brackets first if needed, gather the unknowns on one side and numbers on the other, then divide.",
    },
    {
      kind: "check",
      id: "f-c4",
      prompt: "Solve $2x + 7 = 5x - 2$ for $x$.",
      format: "numeric",
      answer: "3",
      hint: "Get all the $x$ terms on one side.",
      explanation:
        "$7 + 2 = 5x - 2x \\Rightarrow 9 = 3x \\Rightarrow x = 3$.",
    },
  ],

  workedExamples: [
    {
      kind: "example",
      title: "Mixed brush-up",
      statement: "Evaluate $\\frac{3}{4} \\times \\left(2 + \\frac{2}{3}\\right)$.",
      approach: "Resolve the bracket as a single fraction first, then multiply.",
      solution:
        "$2 + \\frac{2}{3} = \\frac{8}{3}$. Then $\\frac{3}{4}\\times\\frac{8}{3} = \\frac{24}{12} = 2$.",
    },
  ],

  practiceProblemIds: ["al-001", "rp-001"],
  challengeProblemIds: [],

  summary: {
    keyFormulas: [
      "BIDMAS order: Brackets, Indices, ÷×, +−.",
      "Add fractions over a common denominator.",
      "$r\\%$ increase → ×$(1+\\frac{r}{100})$; decrease → ×$(1-\\frac{r}{100})$.",
    ],
    bigIdeas: [
      "Speed and accuracy here buy you thinking time everywhere else.",
    ],
    patternTips: [
      "Convert mixed numbers to improper fractions before operating.",
      "Percentage change = multiply by a single factor.",
    ],
    traps: ["Left-to-right instead of BIDMAS; adding fraction denominators; sign slips."],
    revisionNotes: [
      "Drill mental arithmetic and times tables to automaticity.",
      "Practise fraction ↔ decimal ↔ percentage conversions.",
    ],
  },
};
