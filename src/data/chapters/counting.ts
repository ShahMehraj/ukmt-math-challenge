import type { Chapter } from "@/lib/types";

/**
 * Second flagship chapter: Systematic Counting & Probability.
 * Heavy on interactive checks and includes an inline SVG diagram.
 */
export const countingChapter: Chapter = {
  id: "ch-cp-1",
  title: "Systematic Counting & Probability",
  topic: "counting-probability",
  order: 60,
  examFocus: "both",
  difficulty: "medium",
  estMinutes: 70,
  prerequisites: ["ch-found-1"],
  blurb:
    "How to count possibilities without missing or double-counting any — the multiplication principle, choosing pairs and groups, and turning counts into probabilities.",

  intro: {
    whyItMatters:
      "Counting questions reward organisation over cleverness. A clear method — multiply independent choices, then correct for overcounting — turns intimidating problems into a few lines of arithmetic.",
    whereItAppears:
      "IMC reliably includes counting and probability questions, often as recognisable archetypes (handshakes, routes on a grid, arrangements of letters). Hamilton asks you to count *and justify* with no gaps.",
    typicalPatterns: [
      "Count arrangements/orderings (the multiplication principle).",
      "Count selections where order doesn't matter (the handshake / choosing-pairs idea).",
      "Probability as favourable outcomes ÷ equally likely total outcomes.",
      "Routes through a grid by adding numbers at each junction.",
    ],
    commonMistakes: [
      "Adding when you should multiply (or vice versa).",
      "Forgetting to divide out arrangements that are really the same selection.",
      "Counting an outcome twice, or missing the boundary cases.",
      "Using unequal outcomes as if they were equally likely in a probability.",
    ],
  },

  lesson: [
    {
      kind: "prose",
      heading: "The multiplication principle",
      content:
        "If a task is a sequence of independent stages, the total number of ways is the **product** of the number of choices at each stage. Choosing an outfit from $3$ shirts and $4$ trousers gives $3 \\times 4 = 12$ outfits — not $3 + 4$.",
    },
    {
      kind: "callout",
      variant: "tip",
      title: "Add vs multiply",
      content:
        "**Multiply** when you do one stage *and then* another (independent choices). **Add** when an outcome comes from one case *or* a separate case (mutually exclusive options).",
    },
    {
      kind: "check",
      id: "cp-c1",
      prompt:
        "A café offers $3$ sandwiches, $2$ drinks and $4$ cakes. How many different 'sandwich + drink + cake' meals are possible?",
      format: "numeric",
      answer: "24",
      hint: "Multiply the choices at each stage.",
      explanation:
        "$3 \\times 2 \\times 4 = 24$. Each independent choice multiplies the possibilities.",
    },
    {
      kind: "prose",
      heading: "Arrangements (order matters)",
      content:
        "To arrange $n$ distinct objects in a row, there are $n$ choices for the first position, $n-1$ for the next, and so on: $n \\times (n-1) \\times \\cdots \\times 1 = n!$ ('$n$ factorial'). Arranging $4$ different books gives $4! = 24$ orders.",
    },
    {
      kind: "check",
      id: "cp-c2",
      prompt: "In how many orders can $5$ runners finish a race (no ties)?",
      format: "numeric",
      answer: "120",
      hint: "That's $5!$.",
      explanation: "$5! = 5\\times4\\times3\\times2\\times1 = 120$.",
    },
    {
      kind: "prose",
      heading: "Selections (order doesn't matter): the handshake idea",
      content:
        "When the *order* of a selection is irrelevant, we overcount and must divide. The classic case: how many handshakes if everyone in a group shakes everyone else's hand once?\n\nEach of $n$ people shakes $n-1$ others' hands, giving $n(n-1)$ — but that counts the A–B handshake and the B–A handshake separately, so divide by $2$. The number of pairs is $$\\frac{n(n-1)}{2}.$$",
    },
    {
      kind: "diagram",
      diagram: {
        alt: "Five points arranged in a pentagon with all ten connecting lines drawn, showing the handshakes between 5 people.",
        caption: "Five people → $\\frac{5\\times4}{2}=10$ handshakes (one line per pair).",
        svg: `<svg width="220" height="200" viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg">
  <g stroke="#16a34a" stroke-width="1.5" opacity="0.7">
    <line x1="110" y1="30" x2="180" y2="80"/>
    <line x1="110" y1="30" x2="155" y2="160"/>
    <line x1="110" y1="30" x2="65" y2="160"/>
    <line x1="110" y1="30" x2="40" y2="80"/>
    <line x1="180" y1="80" x2="155" y2="160"/>
    <line x1="180" y1="80" x2="65" y2="160"/>
    <line x1="180" y1="80" x2="40" y2="80"/>
    <line x1="155" y1="160" x2="65" y2="160"/>
    <line x1="155" y1="160" x2="40" y2="80"/>
    <line x1="65" y1="160" x2="40" y2="80"/>
  </g>
  <g fill="#15803d">
    <circle cx="110" cy="30" r="7"/>
    <circle cx="180" cy="80" r="7"/>
    <circle cx="155" cy="160" r="7"/>
    <circle cx="65" cy="160" r="7"/>
    <circle cx="40" cy="80" r="7"/>
  </g>
</svg>`,
      },
    },
    {
      kind: "check",
      id: "cp-c3",
      prompt:
        "There are $6$ teams in a league and each team plays every other team exactly once. How many games are played?",
      format: "numeric",
      answer: "15",
      hint: "This is the handshake count for $n = 6$.",
      explanation:
        "$\\frac{6\\times5}{2} = 15$ games — each pair of teams meets once.",
    },
    {
      kind: "callout",
      variant: "warning",
      title: "Order matters? Then don't divide",
      content:
        "If A-beats-B is different from B-beats-A (e.g. counting *ordered* results, or home/away fixtures), you keep $n(n-1)$ and do **not** halve. Always ask: does swapping the two give a genuinely different outcome?",
    },
    {
      kind: "prose",
      heading: "From counting to probability",
      content:
        "When every outcome is equally likely, $$P(\\text{event}) = \\frac{\\text{number of favourable outcomes}}{\\text{total number of outcomes}}.$$ The whole job is careful counting of the top and bottom. For two dice there are $6\\times6 = 36$ equally likely ordered outcomes — that '$36$' is the denominator for any two-dice probability.",
    },
    {
      kind: "check",
      id: "cp-c4",
      prompt:
        "Two fair dice are rolled. What is the probability of rolling a double (both dice show the same number)? Type as a fraction in lowest terms, e.g. 1/6.",
      format: "text",
      answer: "1/6",
      acceptedAnswers: ["6/36"],
      hint: "How many of the $36$ outcomes are doubles?",
      explanation:
        "Doubles are $(1,1),(2,2),\\dots,(6,6)$ — $6$ outcomes out of $36$, so $6/36 = 1/6$.",
    },
    {
      kind: "callout",
      variant: "trap",
      title: "Equally likely?",
      content:
        "The sum of two dice ranges from $2$ to $12$, but these are **not** equally likely (a $7$ has six ways, a $2$ only one). Always count the underlying equally-likely outcomes, not the headline values.",
    },
  ],

  workedExamples: [
    {
      kind: "example",
      title: "Arrangements with a repeat",
      statement:
        "How many different arrangements are there of the letters in the word $\\text{LEVEL}$?",
      approach:
        "Treat the letters as distinct first, then divide by the arrangements of identical letters (the two L's and two E's) that don't actually change the word.",
      solution:
        "$\\text{LEVEL}$ has $5$ letters with L repeated twice and E repeated twice. The count is $\\dfrac{5!}{2!\\,2!} = \\dfrac{120}{4} = 30$.",
      alternative:
        "Sanity check by choosing positions: choose $2$ of $5$ spots for the L's ($\\frac{5\\cdot4}{2}=10$ ways), $2$ of the remaining $3$ for the E's ($3$ ways), and the V fills the last spot: $10\\times3 = 30$. ✓",
    },
    {
      kind: "example",
      title: "Hamilton-style: lattice routes",
      statement:
        "How many shortest routes are there from the bottom-left to the top-right corner of a $3\\times3$ grid of streets, moving only right or up? Justify your count.",
      approach:
        "Every shortest route is a sequence of $3$ 'right' moves and $3$ 'up' moves — so it's about *which positions* are the right-moves.",
      solution:
        "A shortest path consists of exactly $3$ R's and $3$ U's in some order, $6$ moves total. Choosing which $3$ of the $6$ moves are R's determines the path: $\\frac{6\\times5\\times4}{3\\times2\\times1} = 20$ routes. Equivalently, label each junction with the number of ways to reach it (Pascal's-triangle addition); the top-right corner gets $20$.",
    },
  ],

  practiceProblemIds: ["cp-002", "cp-001", "rp-002", "cp-003"],
  challengeProblemIds: ["lg-002"],

  summary: {
    keyFormulas: [
      "Multiplication principle: multiply independent choices.",
      "Arrangements of $n$ distinct objects: $n!$.",
      "Choosing a pair from $n$ (handshakes): $\\frac{n(n-1)}{2}$.",
      "Probability $=\\frac{\\text{favourable}}{\\text{total equally-likely}}$.",
    ],
    bigIdeas: [
      "Count by stages, then correct for any overcounting.",
      "Order matters → arrangements; order doesn't → divide out the repeats.",
    ],
    patternTips: [
      "'Everyone meets everyone' / 'how many lines/games' → $\\frac{n(n-1)}{2}$.",
      "'How many ways to arrange/order' → factorials.",
      "Grid routes → add numbers at each junction (Pascal).",
    ],
    traps: [
      "Adding when you should multiply.",
      "Forgetting to divide by repeats (identical letters, unordered pairs).",
      "Treating non-equally-likely values as equally likely in probability.",
    ],
    revisionNotes: [
      "Memorise small factorials up to $6! = 720$.",
      "Recognise the handshake archetype instantly.",
      "For probability, always pin down the equally-likely sample space first.",
    ],
  },
};
