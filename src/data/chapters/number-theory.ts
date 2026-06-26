import type { Chapter } from "@/lib/types";

/**
 * Fully-authored flagship chapter: Divisibility, Primes & Factors.
 * Demonstrates the complete learning flow the rest of the curriculum follows.
 */
export const numberTheoryFoundations: Chapter = {
  id: "ch-nt-1",
  title: "Divisibility, Primes & Factors",
  topic: "number-theory",
  order: 20,
  examFocus: "both",
  difficulty: "medium",
  estMinutes: 75,
  prerequisites: ["ch-found-1"],
  blurb:
    "The building blocks of number theory: how numbers factor, why primes are special, and the divisor-counting and HCF/LCM tools that crack a huge fraction of IMC and Hamilton problems.",

  intro: {
    whyItMatters:
      "Almost every number puzzle — from 'how many factors' to remainders and digit problems — rests on prime factorisation. Master it once and a whole family of questions becomes routine.",
    whereItAppears:
      "Typically several IMC questions each year involve factors, multiples, HCF/LCM or primes (often in the middle, Q11–18). Hamilton frequently opens with a number-theory problem that rewards a clean factorisation argument.",
    typicalPatterns: [
      "Count the divisors of a number, or find numbers with exactly $k$ divisors.",
      "Find the HCF/LCM of two numbers, or use them in a word problem (e.g. bells ringing together).",
      "Remainder questions: what is the last digit / remainder of a large power.",
      "Digit problems built on place value, e.g. 'a two-digit number is 7× its digit sum'.",
    ],
    commonMistakes: [
      "Treating $1$ as prime (it is not).",
      "Multiplying exponents instead of adding $1$ to each when counting divisors.",
      "Confusing HCF (shared, take lowest powers) with LCM (combined, take highest powers).",
      "Checking divisibility past $\\sqrt{n}$ unnecessarily when testing for primality.",
    ],
  },

  lesson: [
    {
      kind: "prose",
      heading: "What 'divides' really means",
      content:
        "We say $a$ **divides** $b$ (written $a \\mid b$) when $b$ is a whole number of copies of $a$ — that is, $b = a \\times k$ for some integer $k$, with no remainder. So $3 \\mid 12$ because $12 = 3 \\times 4$, but $3 \\nmid 13$.",
    },
    {
      kind: "callout",
      variant: "intuition",
      title: "Think in rectangles",
      content:
        "$a \\mid b$ means you can arrange $b$ dots into a perfect rectangle with one side of length $a$. Primes are the numbers whose only rectangles are a single straight line ($1 \\times p$).",
    },
    {
      kind: "check",
      id: "nt-c1",
      prompt: "Which of these does **not** divide $36$?",
      format: "mcq",
      options: [
        { label: "A", text: "$4$" },
        { label: "B", text: "$6$" },
        { label: "C", text: "$8$" },
        { label: "D", text: "$9$" },
      ],
      answer: "C",
      hint: "Try to write $36$ as that number times a whole number.",
      explanation:
        "$36 = 4\\times9 = 6\\times6 = 9\\times4$, but $36 \\div 8 = 4.5$ is not whole, so $8 \\nmid 36$.",
    },
    {
      kind: "prose",
      heading: "Primes and the Fundamental Theorem of Arithmetic",
      content:
        "A **prime** is a whole number greater than $1$ whose only divisors are $1$ and itself: $2, 3, 5, 7, 11, 13, \\dots$ Every other whole number bigger than $1$ is **composite**.\n\nThe key fact — the *Fundamental Theorem of Arithmetic* — is that **every** integer greater than $1$ can be written as a product of primes in exactly one way (up to order). For example $360 = 2^3 \\times 3^2 \\times 5$. This unique 'fingerprint' is the single most useful idea in the whole topic.",
    },
    {
      kind: "callout",
      variant: "definition",
      content:
        "Writing $n = p_1^{a_1} p_2^{a_2} \\cdots p_k^{a_k}$ with distinct primes $p_i$ is the **prime factorisation** of $n$. A factor tree is the quickest way to find it by hand.",
    },
    {
      kind: "check",
      id: "nt-c2",
      prompt: "Write the prime factorisation of $84$. (Type it as e.g. 2^2*3*7)",
      format: "text",
      answer: "2^2*3*7",
      acceptedAnswers: ["2*2*3*7", "2^2 * 3 * 7", "2^2·3·7"],
      hint: "Start by pulling out factors of $2$: $84 = 2\\times42 = 2\\times2\\times21$.",
      explanation:
        "$84 = 2 \\times 42 = 2 \\times 2 \\times 21 = 2^2 \\times 3 \\times 7$. Every branch ends in a prime.",
    },
    {
      kind: "prose",
      heading: "Counting divisors without listing them",
      content:
        "Here is the payoff. If $n = p_1^{a_1} p_2^{a_2}\\cdots p_k^{a_k}$, then the number of positive divisors of $n$ is $$(a_1+1)(a_2+1)\\cdots(a_k+1).$$ The reason: to build a divisor you independently choose how many copies of each prime to include — anywhere from $0$ up to $a_i$, giving $a_i + 1$ options for that prime.",
    },
    {
      kind: "example",
      title: "Counting divisors",
      statement: "How many positive divisors does $360$ have?",
      approach:
        "Factorise, then add one to each exponent and multiply — never list all the divisors by hand.",
      solution:
        "$360 = 2^3 \\times 3^2 \\times 5^1$. The divisor count is $(3+1)(2+1)(1+1) = 4 \\times 3 \\times 2 = 24$.",
      alternative:
        "Spot that $360 = 36 \\times 10 = (2^2 3^2)(2\\cdot5) = 2^3 3^2 5$ — combining known factorisations is often quicker than a full tree.",
    },
    {
      kind: "check",
      id: "nt-c3",
      prompt: "How many positive divisors does $48$ have?",
      format: "numeric",
      answer: "10",
      hint: "$48 = 2^4 \\times 3$. Now apply $(a+1)(b+1)$.",
      explanation:
        "$48 = 2^4 \\times 3^1$, so the divisor count is $(4+1)(1+1) = 5 \\times 2 = 10$.",
    },
    {
      kind: "prose",
      heading: "HCF and LCM from the fingerprint",
      content:
        "Once two numbers are in prime-factor form, the **highest common factor (HCF)** takes the *lowest* power of each shared prime, and the **lowest common multiple (LCM)** takes the *highest* power of every prime that appears.\n\nFor $12 = 2^2\\times3$ and $18 = 2\\times3^2$: the HCF is $2^1\\times3^1 = 6$ and the LCM is $2^2\\times3^2 = 36$.",
    },
    {
      kind: "callout",
      variant: "tip",
      title: "The product shortcut",
      content:
        "For any two numbers, $\\text{HCF}(a,b) \\times \\text{LCM}(a,b) = a \\times b$. If you know three of these four quantities, you can find the fourth instantly.",
    },
    {
      kind: "check",
      id: "nt-c4",
      prompt:
        "Two numbers have HCF $6$ and LCM $90$. If one number is $18$, what is the other?",
      format: "numeric",
      answer: "30",
      hint: "Use $\\text{HCF} \\times \\text{LCM} = a \\times b$.",
      explanation:
        "$6 \\times 90 = 18 \\times b$, so $540 = 18b$ and $b = 30$. (Check: HCF$(18,30)=6$, LCM$=90$. ✓)",
    },
    {
      kind: "callout",
      variant: "trap",
      title: "HCF vs LCM mix-up",
      content:
        "Under pressure it's easy to swap them. Anchor it: the **H**CF is the **biggest number that fits into both** (so it's *smaller*); the **L**CM is the **smallest number both fit into** (so it's *larger*).",
    },
    {
      kind: "prose",
      heading: "Remainders and repeating cycles",
      content:
        "Last-digit and remainder questions look scary because the numbers are huge, but powers repeat in short cycles. The last digits of $2^1, 2^2, 2^3, \\dots$ go $2, 4, 8, 6, 2, 4, 8, 6, \\dots$ — a cycle of length $4$. To find the last digit of $2^{50}$, you only need $50 \\bmod 4 = 2$, pointing to the $2$nd entry, which is $4$.",
    },
    {
      kind: "check",
      id: "nt-c5",
      prompt: "What is the last digit of $7^{2024}$?",
      format: "numeric",
      answer: "1",
      hint: "Last digits of powers of $7$ cycle: $7, 9, 3, 1, \\dots$ (length $4$). Find $2024 \\bmod 4$.",
      explanation:
        "The cycle $7,9,3,1$ has length $4$. Since $2024$ is a multiple of $4$, we land on the last entry of the cycle, $1$.",
    },
  ],

  workedExamples: [
    {
      kind: "example",
      title: "Smallest number with many factors",
      statement:
        "What is the smallest positive integer with exactly $12$ divisors?",
      approach:
        "We need exponents whose '+1's multiply to $12$. To keep the number small, attach the largest exponents to the smallest primes.",
      solution:
        "We want $(a_1+1)(a_2+1)\\cdots = 12$. Options for the exponent pattern: $12 = 12$ → $2^{11}=2048$; $=6\\times2$ → $2^5\\cdot3 = 96$; $=4\\times3$ → $2^3\\cdot3^2 = 72$; $=3\\times2\\times2$ → $2^2\\cdot3\\cdot5 = 60$. The smallest is $\\boxed{60}$.",
      alternative:
        "A useful rule of thumb: spread the factorisation across as many small primes as possible, with exponents decreasing as the primes increase.",
    },
    {
      kind: "example",
      title: "Hamilton-style: bells",
      statement:
        "Three bells ring at intervals of $12$, $15$ and $20$ minutes. They ring together at noon. When do they next all ring together? Give full reasoning.",
      approach:
        "'Ring together again' means a common multiple of all three intervals — the *lowest* such, the LCM.",
      solution:
        "Factorise: $12 = 2^2\\cdot3$, $15 = 3\\cdot5$, $20 = 2^2\\cdot5$. The LCM takes the highest power of each prime: $2^2 \\cdot 3 \\cdot 5 = 60$. So they next ring together $60$ minutes after noon, i.e. at **1:00 pm**. A complete solution states *why* the LCM is the answer: any common ringing time is a common multiple of $12,15,20$, and the first one after noon is the least common multiple.",
    },
  ],

  practiceProblemIds: ["nt-001", "nt-003", "nt-002", "nt-005"],
  challengeProblemIds: ["nt-004"],

  summary: {
    keyFormulas: [
      "Divisor count of $n = p_1^{a_1}\\cdots p_k^{a_k}$ is $(a_1+1)\\cdots(a_k+1)$.",
      "$\\text{HCF}(a,b)\\times\\text{LCM}(a,b) = a\\times b$.",
      "HCF: lowest powers of shared primes; LCM: highest powers of all primes.",
    ],
    bigIdeas: [
      "Prime factorisation is a number's unique fingerprint — almost everything follows from it.",
      "Large powers repeat in short cycles, so remainders are about $\\bmod$ the cycle length.",
    ],
    patternTips: [
      "See 'how many factors' → factorise and use the $(a+1)$ rule.",
      "See 'happen together again' → LCM. See 'largest that divides both' → HCF.",
      "See a huge power's last digit → find the cycle length, then reduce the exponent mod it.",
    ],
    traps: [
      "$1$ is not prime.",
      "Don't multiply exponents; add $1$ to each then multiply.",
      "Keep HCF (smaller) and LCM (larger) straight.",
    ],
    revisionNotes: [
      "Be able to factorise any number up to ~1000 quickly with a factor tree.",
      "Memorise last-digit cycles for $2,3,7,8$ (length $4$) and $4,9$ (length $2$).",
      "Practise turning word problems into HCF/LCM in one reading.",
    ],
  },
};
