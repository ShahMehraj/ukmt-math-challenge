import type { Chapter } from "@/lib/types";

/**
 * Flagship chapter: Systematic Counting & Probability.
 * Deep-dive through the counting toolkit (multiplication principle,
 * arrangements, combinations & Pascal, complementary counting, restrictions),
 * probability (single & multi-stage, expectation), and pigeonhole — with an
 * inline SVG diagram and Hamilton-style proofs.
 */
export const countingChapter: Chapter = {
  id: "ch-cp-1",
  title: "Systematic Counting & Probability",
  topic: "counting-probability",
  order: 60,
  examFocus: "both",
  difficulty: "medium",
  estMinutes: 150,
  prerequisites: ["ch-found-1"],
  blurb:
    "How to count possibilities without missing or double-counting any — the multiplication principle, arrangements, combinations and Pascal's triangle, complementary and restricted counting, single- and multi-stage probability, expected frequency, and the pigeonhole principle.",

  intro: {
    whyItMatters:
      "Counting questions reward organisation over cleverness. A clear method — multiply independent choices, then correct for overcounting (or count the complement) — turns intimidating problems into a few lines of arithmetic. The same discipline underpins every probability question.",
    whereItAppears:
      "IMC reliably includes counting and probability questions, often as recognisable archetypes (handshakes, routes on a grid, arrangements of letters, 'at least one'). Hamilton asks you to count *and justify* with no gaps, and favours pigeonhole and bijection arguments.",
    typicalPatterns: [
      "Count arrangements/orderings (the multiplication principle and factorials).",
      "Count selections where order doesn't matter (combinations / the handshake idea).",
      "'At least one' problems solved by counting the complement.",
      "Probability as favourable ÷ equally likely outcomes, including multi-stage draws.",
      "Hamilton: pigeonhole ('must be true') and bijection ('count = count') proofs.",
    ],
    commonMistakes: [
      "Adding when you should multiply (or vice versa).",
      "Forgetting to divide out arrangements that are really the same selection.",
      "Counting an outcome twice, or missing the boundary cases.",
      "Using unequal outcomes as if they were equally likely in a probability.",
      "On 'at least one', trying to add cases instead of subtracting the complement.",
    ],
  },

  lesson: [
    // ─────────── Multiplication principle ───────────
    {
      kind: "prose",
      heading: "1 · The multiplication principle",
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

    // ─────────── Arrangements ───────────
    {
      kind: "prose",
      heading: "2 · Arrangements (order matters)",
      content:
        "To arrange $n$ distinct objects in a row, there are $n$ choices for the first position, $n-1$ for the next, and so on: $$n \\times (n-1) \\times \\cdots \\times 2 \\times 1 = n! \\quad (\\text{'}n\\text{ factorial'}).$$ Arranging $4$ different books gives $4! = 24$ orders. If you only fill $r$ of the positions, you stop early: $n \\times (n-1) \\times \\cdots$ for $r$ factors.",
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
      kind: "callout",
      variant: "warning",
      title: "Repeated objects: divide out the duplicates",
      content:
        "If some objects are identical, the plain $n!$ overcounts. Divide by the factorial of each repeat count. The arrangements of the letters of $\\text{LEVEL}$ (two L's, two E's) number $\\dfrac{5!}{2!\\,2!} = 30$, not $120$.",
    },
    {
      kind: "check",
      id: "cp-c3",
      prompt:
        "How many distinct arrangements are there of the letters in the word $\\text{MAMMAL}$?",
      format: "numeric",
      answer: "60",
      hint: "$6$ letters with M repeated $3$ times and A repeated $2$ times: $\\frac{6!}{3!\\,2!}$.",
      explanation:
        "M appears $3$ times and A twice, so the count is $\\frac{6!}{3!\\,2!} = \\frac{720}{6\\times2} = \\frac{720}{12} = 60$.",
    },

    // ─────────── Combinations ───────────
    {
      kind: "prose",
      heading: "3 · Selections (order doesn't matter): the handshake idea",
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
      kind: "prose",
      heading: "Choosing r from n: the binomial coefficient",
      content:
        "The handshake count is the special case $r = 2$ of a general idea. The number of ways to choose $r$ objects from $n$ when order doesn't matter is written $\\binom{n}{r}$ ('$n$ choose $r$'): $$\\binom{n}{r} = \\frac{n!}{r!\\,(n-r)!} = \\frac{n\\times(n-1)\\times\\cdots\\times(n-r+1)}{r!}.$$ So handshakes are $\\binom{n}{2} = \\frac{n(n-1)}{2}$, and choosing $3$ pizza toppings from $7$ is $\\binom{7}{3} = \\frac{7\\cdot6\\cdot5}{3!} = 35$.",
    },
    {
      kind: "callout",
      variant: "definition",
      title: "Pascal's triangle",
      content:
        "The $\\binom{n}{r}$ values are exactly the entries of **Pascal's triangle**, where each number is the sum of the two above it. Two facts pay off constantly: $\\binom{n}{r} = \\binom{n}{n-r}$ (choosing what to leave out), and the entries of row $n$ add to $2^n$.",
    },
    {
      kind: "check",
      id: "cp-c4",
      prompt:
        "A team of $3$ is chosen from $6$ students. How many different teams are possible?",
      format: "numeric",
      answer: "20",
      hint: "Order within the team doesn't matter: $\\binom{6}{3}$.",
      explanation:
        "$\\binom{6}{3} = \\frac{6\\times5\\times4}{3\\times2\\times1} = \\frac{120}{6} = 20$.",
    },
    {
      kind: "check",
      id: "cp-c5",
      prompt:
        "There are $6$ teams in a league and each team plays every other team exactly once. How many games are played?",
      format: "numeric",
      answer: "15",
      hint: "This is $\\binom{6}{2}$ — the handshake count.",
      explanation:
        "$\\binom{6}{2} = \\frac{6\\times5}{2} = 15$ games — each pair of teams meets once.",
    },
    {
      kind: "callout",
      variant: "warning",
      title: "Order matters? Then don't divide",
      content:
        "If A-beats-B is different from B-beats-A (e.g. counting *ordered* results, or home/away fixtures, or president-then-secretary), you keep $n(n-1)$ and do **not** halve. Always ask: does swapping the two give a genuinely different outcome?",
    },

    // ─────────── Complementary counting ───────────
    {
      kind: "prose",
      heading: "4 · Complementary counting ('at least one')",
      content:
        "When a question asks for 'at least one', counting directly often means juggling many overlapping cases. It is usually far easier to count the **complement** — the outcomes you *don't* want — and subtract from the total: $$\\#(\\text{at least one}) = \\#(\\text{total}) - \\#(\\text{none}).$$",
    },
    {
      kind: "example",
      title: "At least one — via the complement",
      statement:
        "How many three-digit numbers contain at least one digit $5$?",
      approach:
        "Counting 'at least one $5$' directly is messy. Count the total, subtract those with *no* $5$.",
      solution:
        "There are $900$ three-digit numbers ($100$–$999$). Those with no $5$: hundreds digit has $8$ choices ($1$–$9$ except $5$), tens and units $9$ each ($0$–$9$ except $5$): $8\\times9\\times9 = 648$. So at least one $5$: $900 - 648 = 252$.",
    },
    {
      kind: "check",
      id: "cp-c6",
      prompt:
        "Two dice are rolled. What is the probability of getting at least one six? Give a fraction in lowest terms.",
      format: "text",
      answer: "11/36",
      hint: "Complement: P(no six) $= \\frac{5}{6}\\times\\frac{5}{6}$.",
      explanation:
        "P(no six) $= \\frac{25}{36}$, so P(at least one six) $= 1 - \\frac{25}{36} = \\frac{11}{36}$.",
    },

    // ─────────── Restricted arrangements ───────────
    {
      kind: "prose",
      heading: "5 · Arrangements with restrictions",
      content:
        "Two reliable tricks. **The block (glue) method**: if certain items must be *together*, glue them into one block, arrange the blocks, then arrange within the block. **Place the restricted items first**: if an item must avoid a position (e.g. can't be first), handle that constraint before filling the rest.",
    },
    {
      kind: "check",
      id: "cp-c7",
      prompt:
        "In how many ways can $4$ people sit in a row if two of them, X and Y, must sit together?",
      format: "numeric",
      answer: "12",
      hint: "Glue X and Y into a block (arrange $3$ items), then order the block $2$ ways.",
      explanation:
        "Block method: $3! = 6$ arrangements of the block plus the other two, times $2$ internal orders of XY: $6 \\times 2 = 12$.",
    },

    // ─────────── Probability ───────────
    {
      kind: "prose",
      heading: "6 · From counting to probability",
      content:
        "When every outcome is equally likely, $$P(\\text{event}) = \\frac{\\text{number of favourable outcomes}}{\\text{number of equally-likely outcomes}}.$$ The whole job is careful counting of the top and bottom. For two dice there are $6\\times6 = 36$ equally likely ordered outcomes — that '$36$' is the denominator for any two-dice probability.",
    },
    {
      kind: "check",
      id: "cp-c8",
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
    {
      kind: "prose",
      heading: "Multi-stage probability",
      content:
        "For a sequence of steps, **multiply** the probability of each step along a path (the AND rule), and **add** across separate paths that give the event (the OR rule). When drawing *without replacement*, the numbers change at each step — there is one fewer item to choose from.",
    },
    {
      kind: "check",
      id: "cp-c9",
      prompt:
        "A bag has $4$ red and $2$ green balls. Two are drawn without replacement. What is the probability both are red? Fraction in lowest terms.",
      format: "text",
      answer: "2/5",
      acceptedAnswers: ["12/30", "6/15"],
      hint: "P(first red) $= 4/6$; then $3$ red of $5$ remain.",
      explanation:
        "$\\frac{4}{6}\\times\\frac{3}{5} = \\frac{12}{30} = \\frac{2}{5}$.",
    },
    {
      kind: "prose",
      heading: "Expected frequency",
      content:
        "If an event has probability $p$ and you repeat the trial $N$ times, the **expected** number of occurrences is $p \\times N$. It need not be a whole number — it's an average over many repeats, useful for 'how many times would you expect…' questions.",
    },
    {
      kind: "check",
      id: "cp-c10",
      prompt:
        "A fair die is rolled $90$ times. How many times would you expect to roll a number greater than $4$?",
      format: "numeric",
      answer: "30",
      hint: "Numbers greater than $4$ are $5,6$, so $p = 2/6 = 1/3$.",
      explanation:
        "$P(>4) = \\frac{2}{6} = \\frac{1}{3}$, so expected count $= \\frac{1}{3}\\times 90 = 30$.",
    },

    // ─────────── Pigeonhole ───────────
    {
      kind: "prose",
      heading: "7 · The pigeonhole principle",
      content:
        "A deceptively simple idea that powers many Hamilton problems: **if more than $n$ objects are placed into $n$ boxes, some box holds at least two.** More generally, with $N$ objects in $n$ boxes, some box holds at least $\\lceil N/n \\rceil$. The art is choosing what the 'objects' and 'boxes' should be.",
    },
    {
      kind: "callout",
      variant: "tip",
      title: "How to use it",
      content:
        "Pigeonhole answers 'must there always be…?' questions. Identify the boxes (colours, remainders, regions), note how many there are, then show you have more objects than boxes — forcing a repeat. To find the *guaranteed* number, reason about the worst case.",
    },
    {
      kind: "check",
      id: "cp-c11",
      prompt:
        "A drawer has socks of $3$ colours jumbled together. What is the smallest number you must grab to be sure of a matching pair?",
      format: "numeric",
      answer: "4",
      hint: "Worst case: the first few are all different colours.",
      explanation:
        "Worst case you draw one of each colour first ($3$ socks, no pair). The $4$th must repeat a colour (pigeonhole: $4$ socks, $3$ colour-boxes). So $4$ guarantees a pair.",
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
        "Sanity check by choosing positions: choose $2$ of $5$ spots for the L's ($\\binom{5}{2}=10$ ways), $2$ of the remaining $3$ for the E's ($\\binom{3}{2}=3$ ways), and the V fills the last spot: $10\\times3 = 30$. ✓",
    },
    {
      kind: "example",
      title: "Counting committees with a constraint (harder)",
      statement:
        "A committee of $4$ is chosen from $5$ men and $4$ women. How many committees contain at least one woman?",
      approach:
        "'At least one woman' → total committees minus all-men committees (the complement).",
      solution:
        "Total committees: $\\binom{9}{4} = 126$. All-men committees: $\\binom{5}{4} = 5$. So at least one woman: $126 - 5 = 121$.",
      alternative:
        "Direct (slower) check: sum committees with exactly $1,2,3,4$ women: $\\binom41\\binom53+\\binom42\\binom52+\\binom43\\binom51+\\binom44\\binom50 = 40+60+20+1 = 121$. ✓",
    },
    {
      kind: "example",
      title: "Hamilton-style: lattice routes",
      statement:
        "How many shortest routes are there from the bottom-left to the top-right corner of a $3\\times3$ grid of streets, moving only right or up? Justify your count.",
      approach:
        "Every shortest route is a sequence of $3$ 'right' moves and $3$ 'up' moves — so it's about *which positions* are the right-moves.",
      solution:
        "A shortest path consists of exactly $3$ R's and $3$ U's in some order, $6$ moves total. Choosing which $3$ of the $6$ moves are R's determines the path: $\\binom{6}{3} = \\frac{6\\times5\\times4}{3\\times2\\times1} = 20$ routes. Equivalently, label each junction with the number of ways to reach it (Pascal's-triangle addition); the top-right corner gets $20$.",
    },
    {
      kind: "example",
      title: "Hamilton-style: a pigeonhole proof (hard)",
      statement:
        "Show that among any $5$ whole numbers, there are two whose difference is a multiple of $4$.",
      approach:
        "The 'boxes' should be the possible remainders on division by $4$. Count them, then apply pigeonhole.",
      solution:
        "Every integer leaves one of the $4$ remainders $0,1,2,3$ when divided by $4$. With $5$ numbers and only $4$ remainder-classes, two of them share a remainder (pigeonhole). If $a$ and $b$ share a remainder mod $4$, then $a - b$ is a multiple of $4$. Hence such a pair always exists. $\\;\\blacksquare$",
      alternative:
        "The key choice is the boxes: 'remainder mod $4$'. Recognising what to make the pigeonholes is the whole skill.",
    },
  ],

  practiceProblemIds: [
    "cp-002",
    "cp-001",
    "cp-008",
    "cp-004",
    "cp-011",
    "cp-009",
    "cp-006",
    "cp-003",
  ],
  challengeProblemIds: [
    "cp-005",
    "cp-007",
    "lg-002",
    "cp-010",
    "cp-012",
  ],

  summary: {
    keyFormulas: [
      "Arrangements of $n$ distinct objects $$n! = n \\times (n-1) \\times \\cdots \\times 2 \\times 1$$",
      "Arrangements with repeats $$\\frac{n!}{r_1!\\,r_2!\\cdots}$$",
      "Choosing $r$ from $n$ (order irrelevant) $$\\binom{n}{r} = \\frac{n!}{r!\\,(n-r)!}$$",
      "Handshakes / pairs $$\\binom{n}{2} = \\frac{n(n-1)}{2}$$",
      "Probability $$P = \\frac{\\text{favourable outcomes}}{\\text{equally-likely outcomes}}$$",
      "At least one $$\\#(\\text{total}) - \\#(\\text{none})$$",
    ],
    bigIdeas: [
      "Count by stages, then correct for any overcounting.",
      "Order matters → arrangements; order doesn't → combinations (divide out the repeats).",
      "'At least one' is almost always easier via the complement.",
      "Pigeonhole turns 'must there be…?' into a counting of boxes vs objects.",
    ],
    patternTips: [
      "'Everyone meets everyone' / 'how many lines/games/diagonals' → $\\binom{n}{2}$.",
      "'How many ways to arrange/order' → factorials; identical items → divide by their factorials.",
      "'Must be together' → block method; 'at least one' → total minus none.",
      "Grid routes → choose which moves go right, or add numbers at each junction (Pascal).",
      "'Guaranteed to have…' / 'be certain of…' → pigeonhole, reasoning about the worst case.",
    ],
    traps: [
      "Adding when you should multiply.",
      "Forgetting to divide by repeats (identical letters, unordered pairs).",
      "Treating non-equally-likely values as equally likely in probability.",
      "Forgetting the count changes at each step when drawing without replacement.",
    ],
    revisionNotes: [
      "Memorise small factorials up to $6! = 720$ and the first few rows of Pascal's triangle.",
      "Recognise the handshake/combination archetype instantly.",
      "Default to the complement for 'at least one' problems.",
      "For probability, always pin down the equally-likely sample space first.",
      "Practise spotting the right 'boxes' for pigeonhole arguments.",
    ],
  },
};
