import type { Chapter } from "@/lib/types";

/**
 * Fully-authored flagship chapter: Divisibility, Primes & Factors.
 * Deep-dive teaching of the number-theory toolkit that underpins a large share
 * of IMC and Hamilton problems. Sets the standard for the rest of the course.
 */
export const numberTheoryFoundations: Chapter = {
  id: "ch-nt-1",
  title: "Divisibility, Primes & Factors",
  topic: "number-theory",
  order: 20,
  examFocus: "both",
  difficulty: "medium",
  estMinutes: 150,
  prerequisites: ["ch-found-1"],
  blurb:
    "The building blocks of number theory: divisibility rules, why primes are special, the divisor-counting and HCF/LCM machinery, parity & coprimality, remainder cycles, and the proof techniques that crack a huge fraction of IMC and Hamilton problems.",

  intro: {
    whyItMatters:
      "Almost every number puzzle — from 'how many factors' to remainders, trailing zeros and digit problems — rests on prime factorisation. Master the fingerprint idea once and a whole family of questions becomes routine, while Hamilton 'find all' and divisibility proofs reward the same structural thinking.",
    whereItAppears:
      "Typically several IMC questions each year involve factors, multiples, HCF/LCM, divisibility rules or primes (often Q11–20, with a sting in the tail at Q21–25). Hamilton frequently opens with a number-theory problem that rewards a clean factorisation or parity argument, and 'find all $n$ such that…' is a recurring archetype.",
    typicalPatterns: [
      "Count the divisors of a number, or find the smallest number with exactly $k$ divisors.",
      "Find/use HCF & LCM, including word problems (bells, cogs, stacking) and the product identity.",
      "Apply a divisibility rule (3, 9, 11) to pin down an unknown digit.",
      "Remainder/last-digit questions on a large power via a repeating cycle.",
      "Hamilton: prove a divisibility fact, or find all integers satisfying a divisibility condition.",
    ],
    commonMistakes: [
      "Treating $1$ as prime (it is not) — and forgetting $2$ is the only even prime.",
      "Multiplying exponents instead of adding $1$ to each when counting divisors.",
      "Confusing HCF (shared, take lowest powers) with LCM (combined, take highest powers).",
      "Checking divisibility past $\\sqrt{n}$ unnecessarily when testing for primality.",
      "In a 'find all' proof, finding solutions but never proving the list is complete.",
    ],
  },

  lesson: [
    // ─────────── Divisibility ───────────
    {
      kind: "prose",
      heading: "1 · What 'divides' really means",
      content:
        "We say $a$ **divides** $b$ (written $a \\mid b$) when $b$ is a whole number of copies of $a$ — that is, $b = a \\times k$ for some integer $k$, with no remainder. So $3 \\mid 12$ because $12 = 3 \\times 4$, but $3 \\nmid 13$. The numbers that divide $b$ are its **factors** (or divisors); the numbers $b$ divides are its **multiples**.",
    },
    {
      kind: "callout",
      variant: "intuition",
      title: "Think in rectangles",
      content:
        "$a \\mid b$ means you can arrange $b$ dots into a perfect rectangle with one side of length $a$. Primes are the numbers whose only rectangle is a single straight line ($1 \\times p$). Factors come in pairs — $a$ and $b/a$ — which is why you only need to test up to $\\sqrt{b}$.",
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
      heading: "Divisibility rules worth knowing cold",
      content:
        "These let you test divisibility without long division — invaluable when calculators are banned:",
    },
    {
      kind: "callout",
      variant: "definition",
      title: "Quick divisibility tests",
      content:
        "**2**: last digit even. **3**: digit sum divisible by $3$. **4**: last two digits form a multiple of $4$. **5**: ends in $0$ or $5$. **6**: divisible by both $2$ and $3$. **8**: last three digits form a multiple of $8$. **9**: digit sum divisible by $9$. **11**: alternating digit sum (e.g. $a-b+c-\\dots$) divisible by $11$.",
    },
    {
      kind: "check",
      id: "nt-c2",
      prompt:
        "The four-digit number $\\overline{52A8}$ is divisible by $9$. What digit is $A$?",
      format: "numeric",
      answer: "3",
      hint: "Divisible by $9$ ⇔ digit sum divisible by $9$. Sum is $5+2+A+8 = 15 + A$.",
      explanation:
        "$15 + A$ must be a multiple of $9$. The only digit that works is $A = 3$ (giving $18$).",
    },
    {
      kind: "example",
      title: "The divisibility-by-11 test in action",
      statement: "Is $90\\,728$ divisible by $11$?",
      approach:
        "Take the alternating sum of the digits (from the right or left, consistently) and check whether it is a multiple of $11$.",
      solution:
        "Alternating sum: $9 - 0 + 7 - 2 + 8 = 22$. Since $22 = 11 \\times 2$ is a multiple of $11$, yes — $90\\,728$ is divisible by $11$ (indeed $90728 = 11 \\times 8248$).",
    },

    // ─────────── Primes & factorisation ───────────
    {
      kind: "prose",
      heading: "2 · Primes and the Fundamental Theorem of Arithmetic",
      content:
        "A **prime** is a whole number greater than $1$ whose only divisors are $1$ and itself: $2, 3, 5, 7, 11, 13, \\dots$ Every other whole number bigger than $1$ is **composite**. Note $2$ is the only *even* prime, and $1$ is neither prime nor composite.\n\nThe key fact — the *Fundamental Theorem of Arithmetic* — is that **every** integer greater than $1$ can be written as a product of primes in exactly one way (up to order). For example $360 = 2^3 \\times 3^2 \\times 5$. This unique 'fingerprint' is the single most useful idea in the whole topic.",
    },
    {
      kind: "callout",
      variant: "definition",
      content:
        "Writing $n = p_1^{a_1} p_2^{a_2} \\cdots p_k^{a_k}$ with distinct primes $p_i$ is the **prime factorisation** of $n$. A factor tree is the quickest way to find it by hand — keep splitting until every branch ends in a prime.",
    },
    {
      kind: "callout",
      variant: "tip",
      title: "Testing whether a number is prime",
      content:
        "To check if $n$ is prime, only trial-divide by primes up to $\\sqrt{n}$. If none divides $n$, it is prime. For $n = 187$: test $2,3,5,7,11,13$ (since $13^2 = 169 < 187 < 196 = 14^2$). $11 \\mid 187$ ($= 11\\times 17$), so it is *not* prime.",
    },
    {
      kind: "check",
      id: "nt-c3",
      prompt: "How many of $51, 57, 59, 91$ are prime?",
      format: "numeric",
      answer: "1",
      hint: "Test small factors. $51 = 3\\times17$, $57 = 3\\times19$, $91 = 7\\times13$.",
      explanation:
        "$51 = 3\\times17$, $57 = 3\\times19$ and $91 = 7\\times13$ are composite; only $59$ is prime (no prime up to $7$ divides it). So exactly $1$.",
    },
    {
      kind: "check",
      id: "nt-c4",
      prompt: "Write the prime factorisation of $84$. (Type it as e.g. 2^2*3*7)",
      format: "text",
      answer: "2^2*3*7",
      acceptedAnswers: ["2*2*3*7", "2^2 * 3 * 7", "2^2·3·7"],
      hint: "Start by pulling out factors of $2$: $84 = 2\\times42 = 2\\times2\\times21$.",
      explanation:
        "$84 = 2 \\times 42 = 2 \\times 2 \\times 21 = 2^2 \\times 3 \\times 7$. Every branch ends in a prime.",
    },

    // ─────────── Counting divisors ───────────
    {
      kind: "prose",
      heading: "3 · Counting divisors without listing them",
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
      id: "nt-c5",
      prompt: "How many positive divisors does $48$ have?",
      format: "numeric",
      answer: "10",
      hint: "$48 = 2^4 \\times 3$. Now apply $(a+1)(b+1)$.",
      explanation:
        "$48 = 2^4 \\times 3^1$, so the divisor count is $(4+1)(1+1) = 5 \\times 2 = 10$.",
    },
    {
      kind: "callout",
      variant: "tip",
      title: "Perfect squares have an odd number of divisors",
      content:
        "Divisors usually pair up ($d$ with $n/d$), giving an even count. The exception is a **perfect square**, where $\\sqrt{n}$ pairs with itself — so a number has an odd number of divisors *exactly when* it is a perfect square. That fact alone solves the classic 'locker problem'.",
    },
    {
      kind: "check",
      id: "nt-c6",
      prompt:
        "How many integers from $1$ to $50$ have an odd number of divisors?",
      format: "numeric",
      answer: "7",
      hint: "Odd number of divisors ⇔ perfect square. Count the squares up to $50$.",
      explanation:
        "The perfect squares up to $50$ are $1,4,9,16,25,36,49$ — that's $7$ of them.",
    },
    {
      kind: "prose",
      heading: "Sum of the divisors",
      content:
        "The same fingerprint gives the *sum* of all divisors. For each prime power $p^a$, the divisors contribute $1 + p + p^2 + \\cdots + p^a$, and the totals multiply across primes. For $12 = 2^2\\cdot3$: $(1+2+4)(1+3) = 7\\times4 = 28$.",
    },
    {
      kind: "check",
      id: "nt-c7",
      prompt: "What is the sum of all positive divisors of $18$?",
      format: "numeric",
      answer: "39",
      hint: "$18 = 2\\times3^2$. Sum $= (1+2)(1+3+9)$.",
      explanation:
        "$(1+2)(1+3+9) = 3 \\times 13 = 39$. (Check: $1+2+3+6+9+18 = 39$.)",
    },

    // ─────────── HCF & LCM ───────────
    {
      kind: "prose",
      heading: "4 · HCF and LCM from the fingerprint",
      content:
        "Once two numbers are in prime-factor form, the **highest common factor (HCF)** takes the *lowest* power of each shared prime, and the **lowest common multiple (LCM)** takes the *highest* power of every prime that appears.\n\nFor $12 = 2^2\\times3$ and $18 = 2\\times3^2$: the HCF is $2^1\\times3^1 = 6$ and the LCM is $2^2\\times3^2 = 36$.",
    },
    {
      kind: "callout",
      variant: "tip",
      title: "The product shortcut",
      content:
        "For any two numbers, $$\\text{HCF}(a,b) \\times \\text{LCM}(a,b) = a \\times b.$$ If you know three of these four quantities, you can find the fourth instantly.",
    },
    {
      kind: "check",
      id: "nt-c8",
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
        "Under pressure it's easy to swap them. Anchor it: the **H**CF is the **biggest number that fits into both** (so it's *smaller*); the **L**CM is the **smallest number both fit into** (so it's *larger*). Word-problem cue: things 'happening together again' → LCM; sharing/cutting 'into equal groups' → HCF.",
    },
    {
      kind: "check",
      id: "nt-c9",
      prompt:
        "Two cogs with $24$ and $36$ teeth mesh, starting with a marked tooth of each touching. After how many tooth-meshings do the marks touch again?",
      format: "numeric",
      answer: "72",
      hint: "The marks realign after a common multiple of $24$ and $36$ — the lowest one.",
      explanation:
        "LCM$(24,36)$: $24 = 2^3\\cdot3$, $36 = 2^2\\cdot3^2$, so LCM $= 2^3\\cdot3^2 = 72$.",
    },

    // ─────────── Coprimality & parity ───────────
    {
      kind: "prose",
      heading: "5 · Coprimality and parity",
      content:
        "Two numbers are **coprime** (relatively prime) when their HCF is $1$ — they share no prime factor. **Parity** simply means whether a number is even or odd, and tracking it is a surprisingly powerful tool: even ± even = even, odd ± odd = even, even ± odd = odd. Many competition problems are cracked by noticing that a quantity must be even (or odd).",
    },
    {
      kind: "check",
      id: "nt-c10",
      prompt:
        "How many integers from $1$ to $12$ are coprime to $12$?",
      format: "numeric",
      answer: "4",
      hint: "$12 = 2^2\\times3$; remove every multiple of $2$ or $3$.",
      explanation:
        "The numbers sharing no factor with $12$ are $1, 5, 7, 11$ — exactly $4$. (This count is Euler's totient $\\varphi(12) = 4$.)",
    },
    {
      kind: "callout",
      variant: "tip",
      title: "A parity argument in one line",
      content:
        "Can $1 + 2 + 3 + \\cdots + 100$ be odd? Pair the $50$ odd numbers among $1\\ldots100$: an even count of odd numbers sums to an even total, and adding the even numbers keeps it even. So the sum is even — without computing $5050$.",
    },

    // ─────────── Remainders & cycles ───────────
    {
      kind: "prose",
      heading: "6 · Remainders and repeating cycles",
      content:
        "Last-digit and remainder questions look scary because the numbers are huge, but powers repeat in short cycles. The last digits of $2^1, 2^2, 2^3, \\dots$ go $2, 4, 8, 6, 2, 4, 8, 6, \\dots$ — a cycle of length $4$. To find the last digit of $2^{50}$, you only need $50 \\bmod 4 = 2$, pointing to the $2$nd entry, which is $4$.",
    },
    {
      kind: "callout",
      variant: "definition",
      title: "Modular notation",
      content:
        "We write $a \\equiv b \\pmod m$ ('$a$ is congruent to $b$ mod $m$') to mean $a$ and $b$ leave the same remainder on division by $m$ — equivalently $m \\mid (a - b)$. You can add, subtract and multiply congruences just like equations, which is what makes remainder cycles work.",
    },
    {
      kind: "check",
      id: "nt-c11",
      prompt: "What is the last digit of $7^{2024}$?",
      format: "numeric",
      answer: "1",
      hint: "Last digits of powers of $7$ cycle: $7, 9, 3, 1, \\dots$ (length $4$). Find $2024 \\bmod 4$.",
      explanation:
        "The cycle $7,9,3,1$ has length $4$. Since $2024$ is a multiple of $4$, we land on the last entry of the cycle, $1$.",
    },
    {
      kind: "check",
      id: "nt-c12",
      prompt:
        "What is the remainder when $3^{100}$ is divided by $4$?",
      format: "numeric",
      answer: "1",
      hint: "$3 \\equiv -1 \\pmod 4$, so $3^{100} \\equiv (-1)^{100}$.",
      explanation:
        "$3 \\equiv -1 \\pmod 4$, so $3^{100} \\equiv (-1)^{100} = 1 \\pmod 4$. The remainder is $1$.",
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
      title: "Trailing zeros of a factorial (harder)",
      statement:
        "How many zeros does $50!$ end in?",
      approach:
        "A trailing zero is a factor of $10 = 2\\times5$. There are far more $2$s than $5$s in a factorial, so the number of zeros equals the number of factors of $5$. Count multiples of $5$, then *additional* factors from multiples of $25$.",
      solution:
        "Multiples of $5$ up to $50$: $\\lfloor 50/5\\rfloor = 10$. Multiples of $25$ contribute one extra each: $\\lfloor 50/25\\rfloor = 2$. Total factors of $5$ is $10 + 2 = 12$, so $50!$ ends in $\\boxed{12}$ zeros.",
      alternative:
        "This is Legendre's formula: the exponent of a prime $p$ in $n!$ is $\\lfloor n/p\\rfloor + \\lfloor n/p^2\\rfloor + \\cdots$.",
    },
    {
      kind: "example",
      title: "Hamilton-style: bells (LCM with full reasoning)",
      statement:
        "Three bells ring at intervals of $12$, $15$ and $20$ minutes. They ring together at noon. When do they next all ring together? Give full reasoning.",
      approach:
        "'Ring together again' means a common multiple of all three intervals — the *lowest* such, the LCM.",
      solution:
        "Factorise: $12 = 2^2\\cdot3$, $15 = 3\\cdot5$, $20 = 2^2\\cdot5$. The LCM takes the highest power of each prime: $2^2 \\cdot 3 \\cdot 5 = 60$. So they next ring together $60$ minutes after noon, i.e. at **1:00 pm**. A complete solution states *why* the LCM is the answer: any common ringing time is a common multiple of $12,15,20$, and the first one after noon is the least common multiple.",
    },
    {
      kind: "example",
      title: "Hamilton-style: a 'find all' divisibility proof (hard)",
      statement:
        "Find all positive integers $n$ for which $n + 2$ divides $n^2 + 4$. Prove your list is complete.",
      approach:
        "Rewrite $n^2 + 4$ to expose a multiple of $(n+2)$ plus a constant remainder; then $(n+2)$ must divide that remainder.",
      solution:
        "Since $n^2 - 4 = (n+2)(n-2)$, we have $n^2 + 4 = (n+2)(n-2) + 8$. Therefore $n+2 \\mid n^2+4$ if and only if $n+2 \\mid 8$. The divisors of $8$ are $1,2,4,8$; with $n$ positive, $n+2 \\ge 3$, leaving $n+2 \\in \\{4, 8\\}$, i.e. $n = 2$ or $n = 6$. Both check out ($n+2=4\\mid 8$; $n+2=8\\mid 40$). The argument is exhaustive because we reduced the condition to dividing the fixed number $8$. $\\;\\blacksquare$",
      alternative:
        "The recurring move: to test '$f(n)$ divides $g(n)$', subtract a suitable multiple of $f(n)$ from $g(n)$ to leave a constant — the divisor must then divide that constant.",
    },
  ],

  practiceProblemIds: [
    "nt-001",
    "nt-010",
    "nt-003",
    "nt-002",
    "nt-006",
    "nt-015",
    "nt-007",
    "nt-005",
  ],
  challengeProblemIds: [
    "nt-008",
    "nt-011",
    "nt-009",
    "nt-004",
    "nt-012",
    "nt-013",
    "nt-014",
  ],

  summary: {
    keyFormulas: [
      "Divisor count of $n = p_1^{a_1}\\cdots p_k^{a_k}$ $$(a_1+1)(a_2+1)\\cdots(a_k+1)$$",
      "Sum of divisors $$\\textstyle\\prod_i \\left(1 + p_i + p_i^2 + \\cdots + p_i^{a_i}\\right)$$",
      "Product of HCF and LCM $$\\text{HCF}(a,b)\\times\\text{LCM}(a,b) = a\\times b$$",
      "Factors of prime $p$ in $n!$ (Legendre) $$\\left\\lfloor \\tfrac{n}{p}\\right\\rfloor + \\left\\lfloor \\tfrac{n}{p^2}\\right\\rfloor + \\cdots$$",
      "HCF: lowest powers of shared primes; LCM: highest powers of all primes.",
    ],
    bigIdeas: [
      "Prime factorisation is a number's unique fingerprint — almost everything follows from it.",
      "An odd number of divisors signals a perfect square.",
      "Large powers repeat in short cycles, so remainders are about $\\bmod$ the cycle length.",
      "To prove '$f(n) \\mid g(n)$', reduce $g$ modulo $f$ to a constant the divisor must divide.",
    ],
    patternTips: [
      "See 'how many factors' → factorise and use the $(a+1)$ rule.",
      "See 'happen together again' → LCM. See 'largest that divides/cuts both' → HCF.",
      "Unknown digit + 'divisible by 3/9/11' → use the digit-sum / alternating-sum rule.",
      "See a huge power's last digit/remainder → find the cycle length, then reduce the exponent mod it.",
      "'Trailing zeros of $n!$' → count factors of $5$ (with the $25, 125, \\dots$ extras).",
    ],
    traps: [
      "$1$ is not prime; $2$ is the only even prime.",
      "Don't multiply exponents; add $1$ to each then multiply.",
      "Keep HCF (smaller) and LCM (larger) straight.",
      "In a 'find all', always prove the list is complete — don't just list examples.",
    ],
    revisionNotes: [
      "Be able to factorise any number up to ~1000 quickly with a factor tree.",
      "Memorise the divisibility tests for 2,3,4,5,6,8,9,11.",
      "Memorise last-digit cycles for $2,3,7,8$ (length $4$) and $4,9$ (length $2$).",
      "Practise turning word problems into HCF/LCM in one reading.",
      "Drill the 'reduce mod $f$' technique for divisibility proofs.",
    ],
  },
};
