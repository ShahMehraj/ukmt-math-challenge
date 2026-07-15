import type { Chapter, SubChapter } from "@/lib/types";

// ═══════════════════════════════════════════════════════════════════════════════
// SUB-CHAPTERS
// ═══════════════════════════════════════════════════════════════════════════════

const sub1: SubChapter = {
  id: "counting-principles",
  title: "Fundamental principles of counting",
  lesson: [
    { kind: "prose", heading: "1 · Fundamental Principles of Counting", content: "Every counting problem ultimately reduces to two principles:\n\n**Multiplication Principle (AND):** If a procedure consists of sequential stages where stage 1 can be done in $m$ ways AND stage 2 in $n$ ways (independently), the total number of ways is $m \\times n$.\n\n**Addition Principle (OR):** If a task can be done by method A in $m$ ways OR by method B in $n$ ways (mutually exclusive), the total is $m + n$.\n\nThe key distinction: multiply for sequential independent choices, add for mutually exclusive alternatives.\n\n**Extension:** For $k$ stages with $n_1, n_2, \\ldots, n_k$ options respectively, total ways $= n_1 \\times n_2 \\times \\cdots \\times n_k$.\n\n**Proof of multiplication rule:** If operation 1 has $m$ ways and for each, operation 2 has $n$ ways, then total = $n + n + \\cdots$ ($m$ terms) $= m \\times n$." },
    { kind: "diagram", diagram: { alt: "Route diagram: P to Q (2 routes) and Q to R (3 routes), giving 2×3 = 6 total", svg: `<svg width="300" height="100" viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg">
  <g stroke="#16a34a" stroke-width="1.5" fill="none" opacity="0.7">
    <path d="M 45 40 Q 90 15 135 40"/>
    <path d="M 45 60 Q 90 85 135 60"/>
    <path d="M 165 30 Q 218 5 255 30"/>
    <path d="M 165 50 Q 218 50 255 50"/>
    <path d="M 165 70 Q 218 95 255 70"/>
  </g>
  <g fill="#15803d">
    <circle cx="30" cy="50" r="12"/><circle cx="150" cy="50" r="12"/><circle cx="270" cy="50" r="12"/>
  </g>
  <g fill="white" font-size="12" font-family="Georgia, serif" text-anchor="middle" font-weight="bold">
    <text x="30" y="55">P</text><text x="150" y="55">Q</text><text x="270" y="55">R</text>
  </g>
  <g fill="#15803d" font-size="10" text-anchor="middle">
    <text x="90" y="20">1</text><text x="90" y="88">2</text>
    <text x="218" y="12">a</text><text x="218" y="48">b</text><text x="218" y="92">c</text>
  </g>
</svg>`, caption: "2 routes P→Q and 3 routes Q→R give $2 \\times 3 = 6$ total routes P→R" } },
    { kind: "callout", variant: "tip", title: "AND means multiply, OR means add", content: "Look for keywords: 'then', 'followed by', 'and' suggest multiplication. 'Either...or', 'alternatively', 'choose one of' suggest addition. A tree diagram makes this visible — each branch point multiplies, each separate tree adds." },
    { kind: "callout", variant: "definition", title: "The complementary counting principle", content: "Sometimes it's easier to count what you DON'T want:\n\n$$\\text{Desired count} = \\text{Total} - \\text{Undesired count}$$\n\nThis is especially useful for 'at least one' problems. For example: outcomes where $6$ appears at least once when rolling a die $n$ times $= 6^n - 5^n$." },
    { kind: "check", id: "comb-c1", prompt: "A PIN code has $4$ digits, each from $0$ to $9$. How many possible PINs are there?", format: "numeric", answer: "10000", hint: "Each digit has $10$ choices, and choices are independent — multiply.", explanation: "$10 \\times 10 \\times 10 \\times 10 = 10^4 = 10000$." },
    { kind: "check", id: "comb-c2", prompt: "From city A to city B there are $3$ roads, and from B to C there are $4$ roads. To travel from A to C via B, how many routes are there? If you can also go directly from A to C by $2$ different flights, how many total ways are there from A to C?", format: "numeric", answer: "14", hint: "Via B: multiply. Direct flights are an alternative (add).", explanation: "Via B: $3 \\times 4 = 12$. Direct: $2$. Total: $12 + 2 = 14$." },
    { kind: "check", id: "comb-c3", prompt: "A student must choose one main course from $5$ options, one dessert from $3$, and one drink from $4$. How many meal combinations?", format: "numeric", answer: "60", hint: "Three sequential independent choices — multiply.", explanation: "$5 \\times 3 \\times 4 = 60$." },
    { kind: "check", id: "comb-c4", prompt: "How many $3$-digit numbers can be formed using digits $1, 2, 3, 4, 5$ if no digit is repeated?", format: "numeric", answer: "60", hint: "First digit: $5$ choices, second: $4$, third: $3$.", explanation: "$5 \\times 4 \\times 3 = 60$." },
    { kind: "check", id: "comb-c36", prompt: "Dolly's TV has $4$ channels. She watches channel 1 and switches every minute. In how many ways can she return to channel 1 for the first time after exactly $4$ minutes?", format: "numeric", answer: "12", hint: "Min 1: 3 choices. Min 2: 2 (can't return yet). Min 3: 2. Min 4: must return (1 way).", explanation: "$3 \\times 2 \\times 2 \\times 1 = 12$." },
    { kind: "check", id: "comb-c53", prompt: "A die is rolled $n$ times. In how many outcomes does $6$ appear at least once?", format: "text", answer: "6^n - 5^n", hint: "Use complementary counting: total outcomes minus outcomes with no 6.", explanation: "Total: $6^n$. No 6 ever: $5^n$ (each roll has 5 options). At least one 6: $6^n - 5^n$." },
    { kind: "check", id: "comb-c54", prompt: "Five different flags are available. How many different signals can be generated by arranging at least $2$ flags in order on a vertical staff?", format: "numeric", answer: "320", hint: "Sum: 2-flag signals + 3-flag + 4-flag + 5-flag. Each is a permutation.", explanation: "$^5P_2 + {}^5P_3 + {}^5P_4 + {}^5P_5 = 20 + 60 + 120 + 120 = 320$." },
    { kind: "check", id: "comb-c55", prompt: "In how many ways can $10$ different balls be put in $2$ different boxes?", format: "numeric", answer: "1024", hint: "Each ball independently goes to box 1 or box 2: $2^{10}$.", explanation: "Each ball has $2$ choices. Total: $2^{10} = 1024$." },
    { kind: "check", id: "comb-c56", prompt: "Find the number of distinct rational numbers $p/q$ with $0 < p/q < 1$ where $p, q \\in \\{1, 2, 3, 4, 5, 6\\}$.", format: "numeric", answer: "11", hint: "List pairs with $p < q$: $5+4+3+2+1 = 15$. Subtract duplicates like $2/4 = 1/2$.", explanation: "Pairs with $p < q$: $15$. Duplicates: $2/4, 2/6, 3/6, 4/6$ (equal to $1/2, 1/3, 1/2, 2/3$). That's $4$ duplicates. Answer: $15 - 4 = 11$." },
  ],
  workedExamples: [
    { kind: "example", title: "Two-stage counting with restriction", statement: "If $x < 4 < y$ and $x, y \\in \\{1, 2, 3, \\ldots, 10\\}$, find the number of ordered pairs $(x, y)$.", approach: "Identify independent stages: choosing $x$ (must be $< 4$) and choosing $y$ (must be $> 4$).", solution: "$x$ can be $1, 2, 3$ — that's $3$ options. $y$ can be $5, 6, 7, 8, 9, 10$ — that's $6$ options. By multiplication principle: $3 \\times 6 = 18$ ordered pairs." },
    { kind: "example", title: "Locks and keys — maximum trials", statement: "There are $n$ locks and $n$ matching keys. Each lock is opened by exactly one key. What is the maximum number of trials needed to open all locks?", approach: "For the first key, worst case try all $n$ locks. For the second, at most $n-1$, etc.", solution: "Maximum trials: $n + (n-1) + (n-2) + \\cdots + 1 = \\dfrac{n(n+1)}{2}$." },
  ],
  practiceProblemIds: [],
};

const sub2: SubChapter = {
  id: "factorials",
  title: "Factorial notation and trailing zeros",
  lesson: [
    { kind: "prose", heading: "2 · Factorials and their properties", content: "The factorial of a non-negative integer $n$ is: $$n! = 1 \\times 2 \\times 3 \\times \\cdots \\times n$$ By convention, $0! = 1$ (the empty product). The recursive relation is $n! = n \\times (n-1)!$.\n\nFactorials grow extremely fast: $10! = 3{,}628{,}800$ and $20! > 2.4 \\times 10^{18}$.\n\n**Key properties:**\n- $n! = n \\times (n-1) \\times (n-2)!$ — peel off factors from the top\n- $\\frac{n!}{(n-r)!} = n(n-1)(n-2)\\cdots(n-r+1)$ — product of $r$ descending integers\n- $(m+n)! \\neq m! + n!$ and $(mn)! \\neq m! \\times n!$\n- $\\frac{n!}{r!} = (r+1)(r+2)\\cdots n$ for $r < n$" },
    { kind: "callout", variant: "definition", title: "Legendre's formula (highest power of prime in n!)", content: "The exponent of prime $p$ in $n!$ is: $$e_p(n!) = \\left\\lfloor \\frac{n}{p} \\right\\rfloor + \\left\\lfloor \\frac{n}{p^2} \\right\\rfloor + \\left\\lfloor \\frac{n}{p^3} \\right\\rfloor + \\cdots$$ For trailing zeros (factors of $10 = 2 \\times 5$), count factors of $5$ since factors of $2$ are always more abundant.\n\n**Example:** $e_3(100!) = \\lfloor 100/3 \\rfloor + \\lfloor 100/9 \\rfloor + \\lfloor 100/27 \\rfloor + \\lfloor 100/81 \\rfloor = 33 + 11 + 3 + 1 = 48$." },
    { kind: "callout", variant: "warning", title: "Legendre's formula only works for primes!", content: "To find the largest power of a **composite** number (e.g. $6 = 2 \\times 3$) dividing $n!$, factorise it into primes first. Find the exponent of each prime separately, then the answer is the minimum.\n\nExample: Largest power of $12 = 2^2 \\times 3$ dividing $10!$: $e_2(10!) = 8$, so $e_{4}(10!) = \\lfloor 8/2 \\rfloor = 4$. Also $e_3(10!) = 4$. Largest power of $12$: $\\min(4, 4) = 4$." },
    { kind: "check", id: "comb-c5", prompt: "How many trailing zeros does $100!$ have?", format: "numeric", answer: "24", hint: "Apply Legendre's formula with $p=5$.", explanation: "$\\lfloor 100/5 \\rfloor + \\lfloor 100/25 \\rfloor + \\lfloor 100/125 \\rfloor = 20 + 4 + 0 = 24$." },
    { kind: "check", id: "comb-c6", prompt: "Simplify: $\\dfrac{12!}{10! \\times 2!}$", format: "numeric", answer: "66", hint: "Cancel $10!$ from numerator and denominator.", explanation: "$\\frac{12!}{10! \\times 2!} = \\frac{12 \\times 11}{2} = 66$." },
    { kind: "check", id: "comb-c7", prompt: "How many trailing zeros does $250!$ have?", format: "numeric", answer: "62", hint: "$\\lfloor 250/5 \\rfloor + \\lfloor 250/25 \\rfloor + \\lfloor 250/125 \\rfloor + \\lfloor 250/625 \\rfloor$", explanation: "$50 + 10 + 2 + 0 = 62$." },
    { kind: "check", id: "comb-c37", prompt: "Find the highest power of $3$ that divides $30!$.", format: "numeric", answer: "14", hint: "$\\lfloor 30/3 \\rfloor + \\lfloor 30/9 \\rfloor + \\lfloor 30/27 \\rfloor$", explanation: "$10 + 3 + 1 = 14$." },
    { kind: "check", id: "comb-c38", prompt: "Find $n$ if $(n+1)! = 12 \\times (n-1)!$", format: "numeric", answer: "3", hint: "Cancel $(n-1)!$: $n(n+1) = 12$.", explanation: "$n(n+1) = 12 \\Rightarrow n^2 + n - 12 = 0 \\Rightarrow (n-3)(n+4) = 0$. Since $n > 0$: $n = 3$." },
    { kind: "check", id: "comb-c39", prompt: "Find the sum $\\sum_{r=1}^{n} r \\cdot r!$ in closed form.", format: "text", answer: "(n+1)! - 1", hint: "Write $r \\cdot r! = (r+1)! - r!$ and telescope.", explanation: "$\\sum_{r=1}^n [(r+1)! - r!] = (n+1)! - 1$." },
    { kind: "check", id: "comb-c57", prompt: "What is the largest power of $6$ that divides $32!$?", format: "numeric", answer: "14", hint: "$6 = 2 \\times 3$. Find $e_2(32!)$ and $e_3(32!)$ separately. Answer is the minimum.", explanation: "$e_2(32!) = 16+8+4+2+1 = 31$. $e_3(32!) = 10+3+1 = 14$. Power of $6 = 2 \\times 3$: $\\min(31, 14) = 14$." },
    { kind: "check", id: "comb-c58", prompt: "Find the number of trailing zeros in $130!$.", format: "numeric", answer: "32", hint: "Count factors of $5$: $\\lfloor 130/5 \\rfloor + \\lfloor 130/25 \\rfloor + \\lfloor 130/125 \\rfloor$.", explanation: "$26 + 5 + 1 = 32$." },
  ],
  workedExamples: [
    { kind: "example", title: "Finding smallest n for given trailing zeros", statement: "Find the smallest $n$ such that $n!$ has at least $10$ trailing zeros.", approach: "Need $\\lfloor n/5 \\rfloor + \\lfloor n/25 \\rfloor + \\cdots \\geq 10$.", solution: "Try $n = 40$: $8 + 1 = 9$ (not enough). Try $n = 45$: $9 + 1 = 10$ ✓. So smallest $n = 45$." },
    { kind: "example", title: "Highest power of composite in factorial", statement: "Find the highest power of $12$ dividing $50!$.", approach: "$12 = 2^2 \\times 3$. Need $\\lfloor e_2/2 \\rfloor$ and $e_3$, take minimum.", solution: "$e_2(50!) = 25+12+6+3+1 = 47$. Power of $4 = 2^2$: $\\lfloor 47/2 \\rfloor = 23$.\n\n$e_3(50!) = 16+5+1 = 22$.\n\n$12 = 4 \\times 3$: $\\min(23, 22) = 22$. So $12^{22}$ divides $50!$." },
  ],
  practiceProblemIds: [],
};

const sub3: SubChapter = {
  id: "permutations-basic",
  title: "Permutations",
  lesson: [
    { kind: "prose", heading: "3 · Permutations", content: "A **permutation** is an arrangement of objects where **order matters**.\n\nThe number of ways to arrange $r$ objects chosen from $n$ distinct objects is: $${}^nP_r = \\frac{n!}{(n-r)!} = n(n-1)(n-2)\\cdots(n-r+1)$$ This is $r$ descending factors starting from $n$.\n\nWhen $r = n$: $^nP_n = n!$ (arrange all objects).\n\n**Derivation via slot-filling:** Think of $r$ empty slots. Slot 1 has $n$ choices, slot 2 has $n-1$, ..., slot $r$ has $n-r+1$. Total: $n \\times (n-1) \\times \\cdots \\times (n-r+1) = \\frac{n!}{(n-r)!}$." },
    { kind: "diagram", diagram: { alt: "Slot-filling: r boxes with decreasing choices below each", svg: `<svg width="340" height="70" viewBox="0 0 340 70" xmlns="http://www.w3.org/2000/svg">
  <g fill="none" stroke="#16a34a" stroke-width="1.8" opacity="0.8">
    <rect x="10" y="8" width="55" height="32" rx="4"/>
    <rect x="80" y="8" width="55" height="32" rx="4"/>
    <rect x="150" y="8" width="55" height="32" rx="4"/>
    <rect x="270" y="8" width="55" height="32" rx="4"/>
  </g>
  <g fill="#15803d" font-size="11" font-family="Georgia, serif" text-anchor="middle">
    <text x="37" y="29">Slot 1</text><text x="107" y="29">Slot 2</text><text x="177" y="29">Slot 3</text>
    <text x="230" y="29" font-size="16">⋯</text><text x="297" y="29">Slot r</text>
  </g>
  <g fill="#15803d" font-size="12" font-family="Georgia, serif" text-anchor="middle" font-style="italic">
    <text x="37" y="58">n</text><text x="107" y="58">n−1</text><text x="177" y="58">n−2</text><text x="297" y="58">n−r+1</text>
  </g>
</svg>`, caption: "Each slot has one fewer choice than the previous" } },
    { kind: "prose", content: "**Permutations with repetition:** If repetition is allowed, each of $r$ positions has $n$ choices independently: $$\\text{Total} = n^r$$\n\n**Permutations of objects not all distinct (multinomial):** When $n$ objects have groups of identical items (sizes $p_1, p_2, \\ldots, p_k$ with $\\sum p_i = n$): $$\\text{Arrangements} = \\frac{n!}{p_1! \\, p_2! \\cdots p_k!}$$ We divide by the factorials of the repeated groups because swapping identical items doesn't create a new arrangement." },
    { kind: "check", id: "comb-c8", prompt: "How many $4$-letter arrangements can be made from A, B, C, D, E, F (no repetition)?", format: "numeric", answer: "360", hint: "$^6P_4 = 6 \\times 5 \\times 4 \\times 3$", explanation: "$^6P_4 = \\frac{6!}{2!} = 360$." },
    { kind: "check", id: "comb-c9", prompt: "How many distinct arrangements of the letters in MISSISSIPPI?", format: "numeric", answer: "34650", hint: "M(1), I(4), S(4), P(2). Total $11$ letters.", explanation: "$\\frac{11!}{4! \\cdot 4! \\cdot 2!} = 34650$." },
    { kind: "check", id: "comb-c10", prompt: "How many $3$-digit numbers from $\\{1, 2, 3, 4\\}$ if repetition IS allowed?", format: "numeric", answer: "64", hint: "$n^r = 4^3$.", explanation: "$4^3 = 64$." },
    { kind: "check", id: "comb-c40", prompt: "How many arrangements of SALOON have the two O's NOT together?", format: "numeric", answer: "240", hint: "Total $-$ OO together.", explanation: "Total: $\\frac{6!}{2!} = 360$. OO together (bundle): $5! = 120$. Answer: $360 - 120 = 240$." },
    { kind: "check", id: "comb-c59", prompt: "If $^{10}P_r = 5040$, find $r$.", format: "numeric", answer: "4", hint: "$5040 = 10 \\times 9 \\times 8 \\times 7 = {}^{10}P_4$.", explanation: "$10 \\times 9 \\times 8 \\times 7 = 5040 = {}^{10}P_4$, so $r = 4$." },
    { kind: "check", id: "comb-c60", prompt: "If $^{2n+1}P_{n-1} : {}^{2n-1}P_n = 3:5$, find $n$.", format: "numeric", answer: "4", hint: "Write out using factorial formula and simplify the ratio.", explanation: "$\\frac{(2n+1)!/(n+2)!}{(2n-1)!/(n-1)!} = 3/5$. Simplify: $\\frac{(2n+1)(2n)}{(n+2)(n+1)n} = 3/5$. Cross-multiply: $10(2n+1) = 3n(n+1)(n+2)/(n)$... Actually: $\\frac{(2n+1) \\cdot 2n}{(n+2)(n+1) \\cdot n} = 3/5$ gives $3n^2 - 11n - 4 = 0$, so $(n-4)(3n+1) = 0$, thus $n = 4$." },
    { kind: "check", id: "comb-c61", prompt: "How many $4$-digit numbers greater than $5000$ can be formed from $\\{0, 1, 3, 5, 7\\}$ (no repetition)?", format: "numeric", answer: "48", hint: "First digit must be $5$ or $7$ (only digits $\\geq 5$ from the set). Then arrange remaining 3 digits from 4 remaining.", explanation: "First digit: $5$ or $7$ — $2$ choices. Remaining $3$ digits from $4$ left: $^4P_3 = 24$. Total: $2 \\times 24 = 48$." },
  ],
  workedExamples: [
    { kind: "example", title: "Arrangements of SALOON (OO not together)", statement: "Find the number of arrangements of SALOON where the two O's do not occur together.", approach: "Complementary counting: total minus OO together.", solution: "Total: $\\frac{6!}{2!} = 360$.\n\nOO together: bundle as one unit → $5$ units: $5! = 120$.\n\nRequired: $360 - 120 = 240$." },
    { kind: "example", title: "Multidigit numbers with constraints", statement: "How many $5$-digit even numbers can be formed using $1, 2, 3, 4, 5$ (no repetition)?", approach: "Last digit must be even ($2$ or $4$). Fix that, arrange the rest.", solution: "Last digit: $2$ choices (2 or 4). Remaining $4$ positions from $4$ digits: $4! = 24$. Total: $2 \\times 24 = 48$." },
  ],
  practiceProblemIds: [],
};

const sub4: SubChapter = {
  id: "permutations-restricted",
  title: "Permutations with restrictions",
  lesson: [
    { kind: "prose", heading: "4 · Permutations with restrictions", content: "Many problems impose constraints on arrangements. The two fundamental techniques:\n\n**Always together (Bundle method):** Treat the group that must stay together as a single 'super-object', arrange the resulting units, then arrange internally within the group.\n\n**Never together (Gap method):** Arrange the unrestricted objects first. This creates gaps (before, between, and after them). Place the restricted objects into these gaps so they're never adjacent.\n\n**Specific positions:** Fix certain objects in given positions and arrange the rest freely.\n\n**Relative order:** If certain objects must maintain a relative order (e.g., A always before B), divide total arrangements by the number of possible orderings of that subset ($k!$ for $k$ ordered objects).\n\n**Complementary approach:** Total arrangements minus arrangements where the condition is violated." },
    { kind: "diagram", diagram: { alt: "Gap method: 5 girls create 6 gaps where boys can be placed", svg: `<svg width="320" height="60" viewBox="0 0 320 60" xmlns="http://www.w3.org/2000/svg">
  <g fill="#15803d">
    <circle cx="60" cy="22" r="12"/><circle cx="120" cy="22" r="12"/><circle cx="180" cy="22" r="12"/><circle cx="240" cy="22" r="12"/><circle cx="300" cy="22" r="12"/>
  </g>
  <g fill="white" font-size="11" font-family="Georgia, serif" text-anchor="middle" font-weight="bold">
    <text x="60" y="26">G₁</text><text x="120" y="26">G₂</text><text x="180" y="26">G₃</text><text x="240" y="26">G₄</text><text x="300" y="26">G₅</text>
  </g>
  <g fill="#dc2626" font-size="14" font-family="Georgia, serif" text-anchor="middle" opacity="0.7">
    <text x="15" y="26">×</text><text x="90" y="26">×</text><text x="150" y="26">×</text><text x="210" y="26">×</text><text x="270" y="26">×</text><text x="315" y="26">×</text>
  </g>
  <text x="160" y="52" text-anchor="middle" fill="#6b7280" font-size="10" font-family="sans-serif">6 gaps (×) for boys — no two boys adjacent</text>
</svg>`, caption: "Arrange girls first, then place boys in gaps" } },
    { kind: "callout", variant: "tip", title: "The gap method for 'no two adjacent'", content: "To arrange $n$ objects where $r$ specific ones must NOT be adjacent:\n1. Arrange the other $(n-r)$ objects: $(n-r)!$ ways (or $\\frac{(n-r)!}{\\text{repeats}}$ if identical)\n2. This creates $(n-r+1)$ gaps\n3. Place $r$ objects in these gaps: $^{(n-r+1)}P_r$ ways\n4. Total: $(n-r)! \\times {}^{(n-r+1)}P_r$" },
    { kind: "check", id: "comb-c13", prompt: "In how many ways can $7$ people stand in a row if two specific people (A and B) must stand next to each other?", format: "numeric", answer: "1440", hint: "Bundle AB as one unit: arrange $6$ units ($6!$), times $2!$ internal.", explanation: "$6! \\times 2! = 720 \\times 2 = 1440$." },
    { kind: "check", id: "comb-c14", prompt: "In how many ways can $7$ people stand in a row if A and B must NOT be next to each other?", format: "numeric", answer: "3600", hint: "Total minus 'together': $7! - 1440$.", explanation: "$7! - 1440 = 5040 - 1440 = 3600$." },
    { kind: "check", id: "comb-c15", prompt: "How many arrangements of ORANGE have vowels (O, A, E) in the odd positions (1st, 3rd, 5th)?", format: "numeric", answer: "36", hint: "Vowels in $3$ odd spots: $3!$. Consonants in $3$ even spots: $3!$.", explanation: "$3! \\times 3! = 6 \\times 6 = 36$." },
    { kind: "check", id: "comb-c16", prompt: "In how many ways can $5$ boys and $3$ girls stand in a row so that no two girls are adjacent?", format: "numeric", answer: "14400", hint: "Arrange boys ($5!$), then place girls in $6$ gaps: $^6P_3$.", explanation: "$5! \\times {}^6P_3 = 120 \\times 120 = 14400$." },
    { kind: "check", id: "comb-c41", prompt: "$5$ boys and $5$ girls sit in a row so that boys and girls alternate. How many arrangements?", format: "numeric", answer: "28800", hint: "Two starting patterns: BGBG... or GBGB... Each gives $5! \\times 5!$.", explanation: "$2 \\times 5! \\times 5! = 2 \\times 14400 = 28800$." },
    { kind: "check", id: "comb-c62", prompt: "How many arrangements of ARRANGE have the two R's never together?", format: "numeric", answer: "900", hint: "Total $-$ (RR together). Total: $\\frac{7!}{2! \\cdot 2!}$. RR together: $\\frac{6!}{2!}$.", explanation: "Total: $\\frac{7!}{2! \\cdot 2!} = 1260$. RR together (bundle): $\\frac{6!}{2!} = 360$. Answer: $1260 - 360 = 900$." },
    { kind: "check", id: "comb-c63", prompt: "In the word ARRANGE, how many arrangements have both A's together but not both R's together?", format: "numeric", answer: "240", hint: "Both A's together: $\\frac{6!}{2!} = 360$. Both A's AND both R's together: $5! = 120$. Subtract.", explanation: "AA together: treat (AA) as unit with R,R,N,G,E → $\\frac{6!}{2!} = 360$. Both AA and RR together: $5! = 120$. AA together but RR apart: $360 - 120 = 240$." },
    { kind: "check", id: "comb-c64", prompt: "In ARRANGE, how many arrangements have neither the two A's nor the two R's together?", format: "numeric", answer: "660", hint: "From the 900 arrangements with RR apart, subtract those where AA are together.", explanation: "RR never together: $900$. Of these, AA together (and RR apart): $240$. Neither together: $900 - 240 = 660$." },
  ],
  workedExamples: [
    { kind: "example", title: "5 boys + 5 girls: no two boys together", statement: "Find the number of ways $5$ boys and $5$ girls can sit in a row such that no two boys are together.", approach: "Gap method: arrange girls first, then place boys in gaps.", solution: "Arrange $5$ girls: $5! = 120$ ways. This creates $6$ gaps: _ G _ G _ G _ G _ G _.\n\nPlace $5$ boys in $6$ gaps: $^6P_5 = 720$.\n\nTotal: $5! \\times {}^6P_5 = 120 \\times 720 = 86400$." },
    { kind: "example", title: "All girls together vs never together", statement: "In how many ways can 5 boys and 5 girls arrange in a row if all girls are never together?", approach: "Complementary: Total minus (all 5 girls bundled together).", solution: "Total: $10! = 3628800$.\n\nAll girls together: bundle 5 girls as one unit → $6$ units to arrange: $6!$. Internal: $5!$. Together: $6! \\times 5! = 720 \\times 120 = 86400$.\n\nNever all together: $3628800 - 86400 = 3542400$." },
  ],
  practiceProblemIds: [],
};

const sub5: SubChapter = {
  id: "combinations-basic",
  title: "Combinations — selection",
  lesson: [
    { kind: "prose", heading: "5 · Combinations", content: "A **combination** is a selection of objects where **order does not matter**.\n\nThe number of ways to choose $r$ objects from $n$ distinct objects is: $${}^nC_r = \\binom{n}{r} = \\frac{n!}{r!(n-r)!}$$ This equals $\\frac{^nP_r}{r!}$ — we divide out the $r!$ internal arrangements that are all the 'same' selection.\n\n**Key identity:** $^nC_r = ^nC_{n-r}$ (choosing who's IN is equivalent to choosing who's OUT).\n\n**Sum of all combinations:** $^nC_0 + ^nC_1 + ^nC_2 + \\cdots + ^nC_n = 2^n$ (every element is either in or out of a subset)." },
    { kind: "callout", variant: "trap", title: "Permutation or combination?", content: "Ask: 'Does the order of selection matter?' Choosing $3$ people for a committee — order doesn't matter (combination). Choosing a president, VP, and secretary from $3$ people — order matters (permutation). The word 'arrange' signals permutation; 'choose', 'select', 'committee' signal combination." },
    { kind: "check", id: "comb-c17", prompt: "A committee of $4$ is to be formed from $10$ people. In how many ways can this be done?", format: "numeric", answer: "210", hint: "$^{10}C_4 = \\frac{10!}{4! \\times 6!}$", explanation: "$^{10}C_4 = \\frac{10 \\times 9 \\times 8 \\times 7}{4 \\times 3 \\times 2 \\times 1} = \\frac{5040}{24} = 210$." },
    { kind: "check", id: "comb-c18", prompt: "At a party, every two people shake hands once. If there are $12$ people, how many handshakes occur?", format: "numeric", answer: "66", hint: "Each handshake is a pair (order doesn't matter): $^{12}C_2$.", explanation: "$^{12}C_2 = \\frac{12 \\times 11}{2} = 66$." },
    { kind: "check", id: "comb-c19", prompt: "A polygon has $10$ vertices. How many diagonals does it have?", format: "numeric", answer: "35", hint: "Total line segments: $^{10}C_2$. Subtract the $10$ sides.", explanation: "Total segments joining vertices: $^{10}C_2 = 45$. Sides of the polygon: $10$. Diagonals: $45 - 10 = 35$." },
    { kind: "check", id: "comb-c20", prompt: "A team of $5$ is to be chosen from $6$ men and $4$ women such that at least $2$ women are included. How many ways?", format: "numeric", answer: "186", hint: "Cases: exactly $2$ women + exactly $3$ women + exactly $4$ women.", explanation: "Exactly $2$W, $3$M: $^4C_2 \\times ^6C_3 = 6 \\times 20 = 120$. Exactly $3$W, $2$M: $^4C_3 \\times ^6C_2 = 4 \\times 15 = 60$. Exactly $4$W, $1$M: $^4C_4 \\times ^6C_1 = 1 \\times 6 = 6$. Total: $120 + 60 + 6 = 186$." },
    { kind: "check", id: "comb-c21", prompt: "What is the total number of subsets of a set with $8$ elements?", format: "numeric", answer: "256", hint: "Each element is either in or out: $2^8$.", explanation: "$2^8 = 256$. This equals $^8C_0 + ^8C_1 + \\cdots + ^8C_8 = 256$." },
  ],
  workedExamples: [
    { kind: "example", title: "Committee with constraints", statement: "A committee of $5$ is to be formed from $7$ men and $4$ women. How many committees contain at least $2$ women?", approach: "Split into cases by the number of women: exactly $2$, exactly $3$, or exactly $4$.", solution: "**Case 1:** $^4C_2 \\times ^7C_3 = 6 \\times 35 = 210$.\n**Case 2:** $^4C_3 \\times ^7C_2 = 4 \\times 21 = 84$.\n**Case 3:** $^4C_4 \\times ^7C_1 = 1 \\times 7 = 7$.\n**Total:** $210 + 84 + 7 = 301$.", alternative: "Complementary: Total $= {}^{11}C_5 = 462$. With $0$ women: $21$. With $1$ woman: $140$. At least $2$: $462 - 161 = 301$." },
  ],
  practiceProblemIds: [],
};

const sub6: SubChapter = {
  id: "combination-properties",
  title: "Properties of combinations and Pascal's triangle",
  lesson: [
    { kind: "prose", heading: "6 · Properties of combinations", content: "Several identities make combination calculations faster:\n\n**Pascal's Identity:** $${}^nC_r = {}^{n-1}C_{r-1} + {}^{n-1}C_r$$ Interpretation: the $r$-subsets of $\\{1,\\ldots,n\\}$ either contain element $n$ (then choose remaining $r-1$ from $n-1$) or don't (choose all $r$ from $n-1$).\n\n**Column-sum identity:** $^nC_r + ^nC_{r+1} = {}^{n+1}C_{r+1}$\n\n**Equality rule:** If $^nC_p = ^nC_q$ then either $p = q$ or $p + q = n$.\n\n**Vandermonde's Identity:** $${}^{m+n}C_r = \\sum_{k=0}^{r} {}^mC_k \\cdot {}^nC_{r-k}$$\n\n**Alternating sum:** ${}^nC_0 - {}^nC_1 + {}^nC_2 - \\cdots + (-1)^n \\cdot {}^nC_n = 0$" },
    { kind: "check", id: "comb-c22", prompt: "Using Pascal's identity, express $^{10}C_4$ in terms of $^9C_3$ and $^9C_4$. Then verify: $^9C_3 + ^9C_4 = ?$", format: "numeric", answer: "210", hint: "$^9C_3 = 84$ and $^9C_4 = 126$.", explanation: "By Pascal's identity: $^{10}C_4 = ^9C_3 + ^9C_4 = 84 + 126 = 210$." },
    { kind: "check", id: "comb-c23", prompt: "If $^nC_4 = ^nC_6$, find $n$.", format: "numeric", answer: "10", hint: "If $^nC_p = ^nC_q$ with $p \\neq q$, then $p + q = n$.", explanation: "Since $4 \\neq 6$, we use $p + q = n$: $4 + 6 = 10$. So $n = 10$." },
    { kind: "check", id: "comb-c24", prompt: "Find the value of $^{10}C_0 + {}^{10}C_1 + {}^{10}C_2 + \\cdots + {}^{10}C_{10}$.", format: "numeric", answer: "1024", hint: "Sum of all binomial coefficients for row $n$ is $2^n$.", explanation: "$2^{10} = 1024$." },
    { kind: "check", id: "comb-c25", prompt: "Evaluate $^7C_3 + ^7C_4$ using the column-sum identity.", format: "numeric", answer: "70", hint: "$^7C_3 + ^7C_4 = ^8C_4$.", explanation: "By the identity $^nC_r + ^nC_{r+1} = {}^{n+1}C_{r+1}$: $^7C_3 + ^7C_4 = ^8C_4 = \\frac{8!}{4!4!} = 70$." },
  ],
  practiceProblemIds: [],
};

const sub7: SubChapter = {
  id: "circular-permutations",
  title: "Circular permutations",
  lesson: [
    { kind: "prose", heading: "7 · Circular permutations", content: "In a circle, rotations of the same arrangement are identical (we only care about relative order, not absolute position).\n\n**$n$ distinct objects in a circle:** $(n-1)!$\n\nWhy? Fix one person's seat to remove rotational symmetry. The remaining $(n-1)$ people arrange in $(n-1)!$ ways.\n\n**Necklace/bracelet (reflections also identical):** $\\frac{(n-1)!}{2}$\n\nThis applies when the circular object can be flipped (like a necklace viewed from either side).\n\n**Circular with restrictions:**\n- Specific people together: bundle them, circular-arrange $(n-k+1)$ units as $(n-k)!$, then arrange $k$ internally\n- Alternate seating: fix one group circularly, fill gaps with the other\n- Never together: total circular $-$ together circular" },
    { kind: "diagram", diagram: { alt: "4 people ABCD around a circle — rotations are identical", svg: `<svg width="160" height="180" viewBox="0 0 160 180" xmlns="http://www.w3.org/2000/svg">
  <circle cx="80" cy="80" r="50" fill="none" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="5 4" opacity="0.6"/>
  <g fill="#15803d">
    <circle cx="80" cy="30" r="10"/><circle cx="130" cy="80" r="10"/><circle cx="80" cy="130" r="10"/><circle cx="30" cy="80" r="10"/>
  </g>
  <g fill="white" font-size="12" font-family="Georgia, serif" text-anchor="middle" font-weight="bold">
    <text x="80" y="34">A</text><text x="130" y="84">B</text><text x="80" y="134">C</text><text x="30" y="84">D</text>
  </g>
  <text x="80" y="170" text-anchor="middle" fill="#6b7280" font-size="9" font-family="sans-serif">Rotations ABCD, BCDA, CDAB, DABC are all the SAME</text>
</svg>`, caption: "Fix A's position, arrange the rest → $(n-1)!$" } },
    { kind: "check", id: "comb-c11", prompt: "In how many ways can $6$ people sit around a circular table?", format: "numeric", answer: "120", hint: "Circular permutations: $(n-1)!$", explanation: "$(6-1)! = 5! = 120$." },
    { kind: "check", id: "comb-c12", prompt: "How many distinct necklaces can be made from $5$ different coloured beads?", format: "numeric", answer: "12", hint: "Necklace: $\\frac{(n-1)!}{2}$", explanation: "$\\frac{(5-1)!}{2} = \\frac{24}{2} = 12$." },
    { kind: "check", id: "comb-c42", prompt: "A round-table conference has $20$ delegates. In how many ways can they sit if two specific delegates must sit together?", format: "numeric", answer: "2 × 18!", hint: "Bundle the two as one unit: $(19-1)! = 18!$ circular arrangements, times $2!$ internal.", explanation: "Bundle gives $19$ units in a circle: $18!$ ways. Internal arrangement: $2!$. Total: $2 \\times 18!$." },
    { kind: "check", id: "comb-c43", prompt: "5 boys and 5 girls sit alternately around a round table. How many arrangements?", format: "numeric", answer: "2880", hint: "Fix boys in circle: $4!$. Girls fill 5 gaps: $5!$.", explanation: "Boys in circle: $(5-1)! = 24$. Girls in the $5$ alternating seats: $5! = 120$. Total: $24 \\times 120 = 2880$." },
  ],
  practiceProblemIds: [],
};

const sub8: SubChapter = {
  id: "distribution-division",
  title: "Division and distribution",
  lesson: [
    { kind: "prose", heading: "8 · Division & distribution", content: "**Identical objects into distinct boxes (Stars and Bars):**\nThe number of ways to distribute $n$ identical objects into $r$ distinct boxes (allowing empty boxes) is: $$\\binom{n+r-1}{r-1}$$ If each box must have at least one object: $$\\binom{n-1}{r-1}$$\n\n**Visual model:** Think of $n$ stars (objects) and $r-1$ bars (dividers). Any arrangement of stars and bars gives a valid distribution. For $n=5, r=3$: ★★|★★★| means $(2,3,0)$." },
    { kind: "diagram", diagram: { alt: "Stars and bars: 5 objects into 3 boxes shown as ★★|★★★|", svg: `<svg width="260" height="60" viewBox="0 0 260 60" xmlns="http://www.w3.org/2000/svg">
  <g fill="#15803d" font-size="18" font-family="serif" text-anchor="middle">
    <text x="25" y="25">★</text><text x="50" y="25">★</text>
    <text x="100" y="25">★</text><text x="125" y="25">★</text><text x="150" y="25">★</text>
  </g>
  <g stroke="#6b7280" stroke-width="2.5" stroke-linecap="round">
    <line x1="75" y1="8" x2="75" y2="32"/>
    <line x1="175" y1="8" x2="175" y2="32"/>
  </g>
  <g fill="#6b7280" font-size="10" font-family="sans-serif" text-anchor="middle">
    <text x="37" y="50">Box 1: 2</text><text x="125" y="50">Box 2: 3</text><text x="210" y="50">Box 3: 0</text>
  </g>
</svg>`, caption: "$5$ stars + $2$ bars = $\\binom{7}{2} = 21$ arrangements" } },
    { kind: "prose", content: "**Distinct objects into distinct boxes:** Each of $n$ objects independently goes into one of $r$ boxes: $r^n$.\n\n**Distinct objects into distinct boxes:** Each of $n$ objects independently goes into one of $r$ boxes: $r^n$.\n\n**Division into groups of specified sizes:**\nDividing $n$ objects into groups of sizes $n_1, n_2, \\ldots, n_k$ ($\\sum n_i = n$): $$\\frac{n!}{n_1! \\, n_2! \\cdots n_k!}$$ If some groups have equal size and are **unlabelled**, divide by $m!$ for each set of $m$ equal-size groups.\n\n**Distribution into distinct groups (labelled):** Don't divide.\n**Distribution into identical groups (unlabelled):** Divide by $k!$ for $k$ same-size groups." },
    { kind: "callout", variant: "warning", title: "Labelled vs unlabelled groups", content: "Dividing $12$ players into $3$ teams of $4$:\n- Labelled (Team A, B, C): $\\frac{12!}{4!\\,4!\\,4!} = 34650$\n- Unlabelled (just '3 groups'): $\\frac{12!}{4!\\,4!\\,4! \\times 3!} = 5775$\nAlways check whether groups are distinguishable!" },
    { kind: "check", id: "comb-c26", prompt: "How many ways can $10$ identical chocolates be distributed among $3$ children?", format: "numeric", answer: "66", hint: "Stars and bars: $\\binom{10+3-1}{3-1} = \\binom{12}{2}$.", explanation: "$\\binom{12}{2} = \\frac{12 \\times 11}{2} = 66$." },
    { kind: "check", id: "comb-c27", prompt: "How many ways can $10$ identical chocolates be distributed among $3$ children so that each child gets at least one?", format: "numeric", answer: "36", hint: "Give $1$ to each first, then distribute $7$ among $3$: $\\binom{9}{2}$.", explanation: "$\\binom{9}{2} = \\frac{9 \\times 8}{2} = 36$." },
    { kind: "check", id: "comb-c28", prompt: "In how many ways can $4$ distinct letters be placed into $3$ distinct mailboxes?", format: "numeric", answer: "81", hint: "Each letter has $3$ choices: $3^4$.", explanation: "$3^4 = 81$." },
    { kind: "check", id: "comb-c29", prompt: "In how many ways can $9$ people be divided into $3$ groups of $3$ (groups are unlabelled)?", format: "numeric", answer: "280", hint: "$\\frac{9!}{(3!)^3 \\times 3!}$", explanation: "$\\frac{9!}{3!\\,3!\\,3! \\times 3!} = \\frac{362880}{1296} = 280$." },
    { kind: "check", id: "comb-c44", prompt: "Find the number of non-negative integer solutions to $x + y + z = 10$ with $x \\leq 5$.", format: "numeric", answer: "45", hint: "Total without bound: $\\binom{12}{2} = 66$. Subtract cases with $x \\geq 6$: set $x' = x - 6$, then $x' + y + z = 4$.", explanation: "Total: $\\binom{12}{2} = 66$. With $x \\geq 6$: let $x' = x-6$, solve $x'+y+z=4$: $\\binom{6}{2} = 15$. Subtract: $66 - 15 = 51$... Hmm, let me recompute. Actually $x \\leq 5$ means exclude $x = 6,7,8,9,10$. For $x=k$: $y+z=10-k$ has $(10-k+1)$ solutions. So total $= \\sum_{k=0}^{5}(11-k) = 11+10+9+8+7+6 = 51$." },
  ],
  workedExamples: [
    { kind: "example", title: "Stars and bars application", statement: "Find the number of non-negative integer solutions to $x_1 + x_2 + x_3 + x_4 = 15$.", approach: "This is distributing $15$ identical objects into $4$ distinct boxes.", solution: "$$\\binom{15 + 4 - 1}{4 - 1} = \\binom{18}{3} = \\frac{18 \\times 17 \\times 16}{6} = 816$$" },
  ],
  practiceProblemIds: [],
};

const sub9: SubChapter = {
  id: "derangements",
  title: "Derangements",
  lesson: [
    { kind: "prose", heading: "9 · Derangements", content: "A **derangement** is a permutation where NO element appears in its original position. The number of derangements of $n$ objects is: $$D_n = n!\\left(1 - \\frac{1}{1!} + \\frac{1}{2!} - \\frac{1}{3!} + \\cdots + \\frac{(-1)^n}{n!}\\right)$$\n\n**Recursive formula:** $D_n = (n-1)(D_{n-1} + D_{n-2})$ with $D_1 = 0$, $D_2 = 1$.\n\nSmall values: $D_1 = 0,\\; D_2 = 1,\\; D_3 = 2,\\; D_4 = 9,\\; D_5 = 44,\\; D_6 = 265$.\n\nAs $n \\to \\infty$, the probability of a random permutation being a derangement approaches $1/e \\approx 0.368$." },
    { kind: "check", id: "comb-c30", prompt: "Four letters are placed randomly into four addressed envelopes. In how many ways can ALL letters go into wrong envelopes?", format: "numeric", answer: "9", hint: "$D_4 = 4!(1 - 1 + 1/2 - 1/6 + 1/24)$.", explanation: "$D_4 = 24(1 - 1 + 1/2 - 1/6 + 1/24) = 24 \\times 9/24 = 9$." },
    { kind: "check", id: "comb-c31", prompt: "Calculate $D_5$ using the recursive formula $D_n = (n-1)(D_{n-1} + D_{n-2})$.", format: "numeric", answer: "44", hint: "$D_5 = 4(D_4 + D_3) = 4(9 + 2)$.", explanation: "$D_5 = 4(D_4 + D_3) = 4(9 + 2) = 4 \\times 11 = 44$." },
    { kind: "check", id: "comb-c32", prompt: "Five friends each bring a gift to a party. The gifts are redistributed randomly so that nobody receives their own gift. How many distributions are possible?", format: "numeric", answer: "44", hint: "This is exactly $D_5$.", explanation: "This is the derangement of $5$ objects: $D_5 = 44$." },
    { kind: "check", id: "comb-c45", prompt: "A hat-check returns $6$ hats randomly. What is the probability that exactly $2$ people get their own hat?", format: "text", answer: "3/16", hint: "Choose which $2$ get correct ($^6C_2$), derange the rest ($D_4$). Divide by $6!$.", explanation: "$\\frac{^6C_2 \\times D_4}{6!} = \\frac{15 \\times 9}{720} = \\frac{135}{720} = \\frac{3}{16}$." },
  ],
  practiceProblemIds: [],
};

const sub10: SubChapter = {
  id: "inclusion-exclusion",
  title: "Inclusion-exclusion principle",
  lesson: [
    { kind: "prose", heading: "10 · Principle of Inclusion and Exclusion (PIE)", content: "When counting elements in a union of sets, we must correct for overlaps:\n\n**Two sets:** $|A \\cup B| = |A| + |B| - |A \\cap B|$\n\n**Three sets:** $$|A \\cup B \\cup C| = |A| + |B| + |C| - |A\\cap B| - |B\\cap C| - |A\\cap C| + |A\\cap B\\cap C|$$\n\n**General formula:** $$\\left|\\bigcup_{i=1}^n A_i\\right| = \\sum|A_i| - \\sum|A_i \\cap A_j| + \\sum|A_i \\cap A_j \\cap A_k| - \\cdots$$\n\nPIE is the tool behind derangements and surjection counting.\n\n**Number of surjective functions from $n$-set to $k$-set:** $$k! \\cdot S(n,k) = \\sum_{i=0}^{k}(-1)^i \\binom{k}{i}(k-i)^n$$" },
    { kind: "diagram", diagram: { alt: "Venn diagram: two overlapping circles A and B inside universal set U", svg: `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg">
  <rect x="5" y="5" width="230" height="140" rx="6" fill="none" stroke="#16a34a" stroke-width="1.2" opacity="0.5"/>
  <circle cx="90" cy="75" r="45" fill="#16a34a" fill-opacity="0.1" stroke="#16a34a" stroke-width="1.5"/>
  <circle cx="150" cy="75" r="45" fill="#16a34a" fill-opacity="0.1" stroke="#16a34a" stroke-width="1.5"/>
  <g fill="#15803d" font-size="11" font-family="Georgia, serif" text-anchor="middle">
    <text x="70" y="78">A only</text><text x="120" y="78" font-weight="bold">A∩B</text><text x="170" y="78">B only</text>
    <text x="90" y="25" font-style="italic" font-size="13">A</text><text x="150" y="25" font-style="italic" font-size="13">B</text>
    <text x="222" y="18" font-size="12">U</text>
  </g>
</svg>`, caption: "$|A \\cup B| = |A| + |B| - |A \\cap B|$" } },
    { kind: "check", id: "comb-c46", prompt: "In a class of $40$: $25$ play cricket, $20$ play football, $10$ play both. How many play neither?", format: "numeric", answer: "5", hint: "PIE: $|C \\cup F| = 25 + 20 - 10 = 35$. Neither: $40 - 35$.", explanation: "$|C \\cup F| = 25 + 20 - 10 = 35$. Neither: $40 - 35 = 5$." },
    { kind: "check", id: "comb-c47", prompt: "How many integers from $1$ to $100$ are divisible by $2$ or $3$?", format: "numeric", answer: "67", hint: "Multiples of $2$: $50$. Of $3$: $33$. Of both ($6$): $16$. PIE.", explanation: "$|A_2 \\cup A_3| = 50 + 33 - 16 = 67$." },
    { kind: "check", id: "comb-c48", prompt: "How many integers from $1$ to $1000$ are divisible by none of $2, 3, 5$?", format: "numeric", answer: "266", hint: "PIE: subtract multiples of 2,3,5; add back pairs; subtract triple. Then complement.", explanation: "$|A_2| = 500, |A_3| = 333, |A_5| = 200, |A_2 \\cap A_3| = 166, |A_2 \\cap A_5| = 100, |A_3 \\cap A_5| = 66, |A_2 \\cap A_3 \\cap A_5| = 33$. Union $= 734$. Neither: $1000 - 734 = 266$." },
    { kind: "check", id: "comb-c65", prompt: "How many onto functions exist from a $4$-element set to a $3$-element set?", format: "numeric", answer: "36", hint: "Total $3^4 = 81$. Subtract non-surjective using PIE: $\\binom{3}{1}2^4 - \\binom{3}{2}1^4 = 48 - 3 = 45$. Onto: $81 - 45 = 36$.", explanation: "By PIE: $3^4 - \\binom{3}{1}2^4 + \\binom{3}{2}1^4 = 81 - 48 + 3 = 36$." },
  ],
  workedExamples: [
    { kind: "example", title: "Surjective functions via PIE", statement: "How many onto (surjective) functions exist from a set of $5$ elements to a set of $3$ elements?", approach: "Total functions minus those missing at least one element in the range. Use PIE.", solution: "Total: $3^5 = 243$. Missing element $i$: $2^5 = 32$ (each, 3 choices for which is missing). Missing two: $1^5 = 1$ (3 pairs). PIE: $3^5 - \\binom{3}{1}2^5 + \\binom{3}{2}1^5 = 243 - 96 + 3 = 150$." },
  ],
  practiceProblemIds: [],
};

const sub11: SubChapter = {
  id: "number-of-divisors",
  title: "Number of divisors and selection from identical objects",
  lesson: [
    { kind: "prose", heading: "11 · Number of divisors and selection from identical objects", content: "If $n = p_1^{a_1} \\cdot p_2^{a_2} \\cdots p_k^{a_k}$, then:\n\n**Number of divisors:** $(a_1+1)(a_2+1)\\cdots(a_k+1)$\n\nWhy? Each divisor is formed by choosing a power of each prime from $0$ to $a_i$.\n\n**Sum of divisors:** $\\frac{p_1^{a_1+1}-1}{p_1-1} \\cdot \\frac{p_2^{a_2+1}-1}{p_2-1} \\cdots$\n\n**Selection from identical objects:**\nIf we have $n_1$ identical objects of type 1, $n_2$ of type 2, ..., $n_k$ of type $k$, the number of ways to select **at least one** object is: $$(n_1+1)(n_2+1)\\cdots(n_k+1) - 1$$\n(subtract $1$ for the 'select nothing' case)" },
    { kind: "check", id: "comb-c49", prompt: "How many divisors does $360 = 2^3 \\cdot 3^2 \\cdot 5^1$ have?", format: "numeric", answer: "24", hint: "$(3+1)(2+1)(1+1)$", explanation: "$(3+1)(2+1)(1+1) = 4 \\times 3 \\times 2 = 24$." },
    { kind: "check", id: "comb-c50", prompt: "How many ways can you select one or more items from $4$ identical pens, $3$ identical pencils, and $2$ identical erasers?", format: "numeric", answer: "59", hint: "$(4+1)(3+1)(2+1) - 1$ (subtract 'select none').", explanation: "$(4+1)(3+1)(2+1) - 1 = 5 \\times 4 \\times 3 - 1 = 60 - 1 = 59$." },
    { kind: "check", id: "comb-c51", prompt: "How many even divisors does $360 = 2^3 \\cdot 3^2 \\cdot 5$ have?", format: "numeric", answer: "18", hint: "Even divisor must include at least $2^1$. Power of $2$: choose from $1,2,3$ (3 options).", explanation: "Power of $2$: $3$ choices (1,2,3). Power of $3$: $3$ choices (0,1,2). Power of $5$: $2$ choices (0,1). Total: $3 \\times 3 \\times 2 = 18$." },
    { kind: "check", id: "comb-c66", prompt: "Find the number of divisors of $720$ that are perfect squares.", format: "numeric", answer: "4", hint: "$720 = 2^4 \\cdot 3^2 \\cdot 5$. For a square divisor, all exponents must be even.", explanation: "Exponent of $2$: even values in $[0,4]$ → $0,2,4$ (3 choices). Exponent of $3$: even in $[0,2]$ → $0,2$ (2 choices). Exponent of $5$: even in $[0,1]$ → $0$ only (1 choice). Total: $3 \\times 2 \\times 1 = 6$... Actually let me recheck: $720 = 2^4 \\cdot 3^2 \\cdot 5^1$. Square divisor: $2^a \\cdot 3^b \\cdot 5^c$ with $a$ even $\\leq 4$, $b$ even $\\leq 2$, $c$ even $\\leq 1$. $a \\in \\{0,2,4\\}$ (3), $b \\in \\{0,2\\}$ (2), $c \\in \\{0\\}$ (1). Total: $3 \\times 2 \\times 1 = 6$." },
    { kind: "check", id: "comb-c67", prompt: "How many ways can you select one or more items from $3$ identical red balls, $2$ identical blue balls, and $4$ identical green balls?", format: "numeric", answer: "59", hint: "$(3+1)(2+1)(4+1) - 1$.", explanation: "Choices for red: $0,1,2,3$ (4 options). Blue: $0,1,2$ (3). Green: $0,1,2,3,4$ (5). Total selections including 'none': $4 \\times 3 \\times 5 = 60$. At least one: $60 - 1 = 59$." },
  ],
  practiceProblemIds: [],
};

const sub12: SubChapter = {
  id: "competition-techniques",
  title: "Competition techniques and mixed problems",
  lesson: [
    { kind: "prose", heading: "12 · Competition techniques & mixed problems", content: "**Complementary counting:** Instead of counting what you want directly, count everything and subtract what you DON'T want. Ideal for 'at least one' problems.\n\n**Bijection principle:** Map your hard counting problem to an equivalent simpler one. Classic: lattice paths from $(0,0)$ to $(m,n)$ correspond to sequences of R's and U's.\n\n**Lattice path counting:** Shortest paths from $(0,0)$ to $(m,n)$ (only right or up): $$\\binom{m+n}{m}$$\n\n**Pigeonhole principle:** If $n$ objects go into $k$ boxes and $n > k$, at least one box has $\\geq 2$ objects.\n\n**Double counting:** Count the same quantity two different ways to get an identity or bound." },
    { kind: "check", id: "comb-c33", prompt: "How many $4$-digit numbers (from $1000$ to $9999$) have at least one digit equal to $5$?", format: "numeric", answer: "3168", hint: "Total $4$-digit numbers minus those with NO digit equal to $5$.", explanation: "Total: $9000$. No $5$: first digit $8$ choices, others $9$ each: $8 \\times 9^3 = 5832$. At least one $5$: $9000 - 5832 = 3168$." },
    { kind: "check", id: "comb-c34", prompt: "How many shortest lattice paths are there from $(0,0)$ to $(5,3)$ on a grid?", format: "numeric", answer: "56", hint: "Total steps: $5$ right + $3$ up = $8$. Choose which $3$ are 'up': $\\binom{8}{3}$.", explanation: "$\\binom{8}{3} = \\frac{8 \\times 7 \\times 6}{6} = 56$." },
    { kind: "check", id: "comb-c35", prompt: "In a class of $13$ students, prove that at least $2$ students have birthdays in the same month. How many students are needed to guarantee at least $3$ share a birth month?", format: "numeric", answer: "25", hint: "Pigeonhole: $12$ months. For 'at least $3$': worst case $2$ per month, so need $24+1$.", explanation: "With $13 > 12$, pigeonhole gives $\\geq 2$ in one month. For $\\geq 3$: worst case is $2$ per month = $24$, so $25$ guarantees it." },
    { kind: "check", id: "comb-c52", prompt: "How many lattice paths from $(0,0)$ to $(4,4)$ pass through $(2,2)$?", format: "numeric", answer: "36", hint: "Paths $(0,0)\\to(2,2)$ times paths $(2,2)\\to(4,4)$.", explanation: "$\\binom{4}{2} \\times \\binom{4}{2} = 6 \\times 6 = 36$." },
    { kind: "check", id: "comb-c68", prompt: "How many $5$-letter strings from $\\{A,B,C\\}$ contain at least one A, at least one B, and at least one C?", format: "numeric", answer: "150", hint: "Total $3^5 = 243$. Subtract strings missing at least one letter (PIE on the missing-letter sets).", explanation: "Missing A: $2^5 = 32$. Missing B: $32$. Missing C: $32$. Missing A and B: $1$. etc. PIE: $3(32) - 3(1) + 0 = 96 - 3 = 93$. Answer: $243 - 93 = 150$." },
    { kind: "check", id: "comb-c69", prompt: "In how many ways can $8$ identical rooks be placed on an $8 \\times 8$ chessboard such that no two are in the same row or column?", format: "numeric", answer: "40320", hint: "One rook per row: for row 1 choose a column (8 choices), row 2 (7 choices), ... This is $8!$.", explanation: "Each row gets exactly one rook. Column for row 1: $8$, row 2: $7$, ..., row 8: $1$. Total: $8! = 40320$." },
  ],
  workedExamples: [
    { kind: "example", title: "Derangement probability", statement: "A hat-check attendant returns $6$ hats randomly. What is the probability that exactly $2$ people get their own hat back?", approach: "Choose which $2$ get correct, derange the rest.", solution: "Choose $2$ correct: $^6C_2 = 15$. Remaining $4$ deranged: $D_4 = 9$. Favourable: $15 \\times 9 = 135$. Total: $6! = 720$. Probability: $135/720 = 3/16$." },
  ],
  practiceProblemIds: [],
};

/**
 * Combinatorics — Permutations & Combinations
 * Comprehensive chapter covering fundamental counting, factorials,
 * permutations, combinations, distribution, derangements, and
 * competition techniques. Based on Cengage Algebra Chapter 7.
 */
export const combinatoricsChapter: Chapter = {
  id: "ch-comb-1",
  title: "Combinatorics",
  topic: "combinatorics",
  order: 59,
  examFocus: "both",
  difficulty: "medium",
  estMinutes: 120,
  prerequisites: ["ch-found-1"],
  blurb:
    "A deep dive into the art of counting: from first principles (multiplication and addition rules) through permutations, combinations, distribution problems, derangements, and the powerful techniques that appear repeatedly in competitions.",

  intro: {
    whyItMatters:
      "Combinatorics is the backbone of discrete mathematics and appears in every competitive maths exam. Mastering permutations and combinations lets you count complex arrangements without listing, and these ideas underpin probability, graph theory, and number theory problems.",
    whereItAppears:
      "IMC typically has 2-3 questions requiring careful counting (arrangements, selections, distribution). Hamilton papers demand rigorous combinatorial reasoning with full justification — particularly stars-and-bars, derangements, and complementary counting arguments.",
    typicalPatterns: [
      "Counting arrangements with restrictions (always/never together).",
      "Committee selection with constraints (must include, must exclude).",
      "Distribution of objects into boxes (stars and bars).",
      "Derangement and inclusion-exclusion problems.",
      "Lattice path counting and bijection arguments.",
    ],
    commonMistakes: [
      "Confusing permutations (order matters) with combinations (order doesn't).",
      "Forgetting to divide by repeated elements in word arrangements.",
      "Applying stars-and-bars without adjusting for 'at least one' constraints.",
      "Mixing up circular permutations with linear ones.",
      "Double-counting when cases overlap — failing to use inclusion-exclusion.",
    ],
  },

  subChapters: [sub1, sub2, sub3, sub4, sub5, sub6, sub7, sub8, sub9, sub10, sub11, sub12],

  lesson: [],


  workedExamples: [
    {
      kind: "example",
      title: "Committee with constraints",
      statement:
        "A committee of $5$ is to be formed from $7$ men and $4$ women. How many committees contain at least $2$ women?",
      approach:
        "We split into cases by the number of women: exactly $2$, exactly $3$, or exactly $4$. For each case, choose the women then choose the men to fill remaining spots.",
      solution:
        "**Case 1 — exactly $2$ women:** $^4C_2 \\times ^7C_3 = 6 \\times 35 = 210$.\n\n**Case 2 — exactly $3$ women:** $^4C_3 \\times ^7C_2 = 4 \\times 21 = 84$.\n\n**Case 3 — exactly $4$ women:** $^4C_4 \\times ^7C_1 = 1 \\times 7 = 7$.\n\n**Total:** $210 + 84 + 7 = 301$.",
      alternative:
        "Complementary approach: Total committees $= {}^{11}C_5 = 462$. Committees with $0$ women: $^7C_5 = 21$. Committees with $1$ woman: $^4C_1 \\times ^7C_4 = 4 \\times 35 = 140$. At least $2$ women: $462 - 21 - 140 = 301$.",
    },
    {
      kind: "example",
      title: "MISSISSIPPI arrangements",
      statement:
        "How many distinct arrangements of the letters of MISSISSIPPI have no two S's adjacent?",
      approach:
        "First arrange the non-S letters, then place S's in the gaps. MISSISSIPPI has letters: M(1), I(4), S(4), P(2) — total $11$. Non-S letters: M, I, I, I, I, P, P — $7$ letters.",
      solution:
        "**Step 1:** Arrange the $7$ non-S letters (M, I, I, I, I, P, P): $\\frac{7!}{4! \\times 2!} = \\frac{5040}{48} = 105$ ways.\n\n**Step 2:** This creates $8$ gaps (_ L _ L _ L _ L _ L _ L _ L _) where we can place S's. Choose $4$ of these $8$ gaps: $^8C_4 = 70$.\n\n**Total:** $105 \\times 70 = 7350$.",
    },
    {
      kind: "example",
      title: "Stars and bars application",
      statement:
        "Find the number of non-negative integer solutions to $x_1 + x_2 + x_3 + x_4 = 15$.",
      approach:
        "This is equivalent to distributing $15$ identical objects into $4$ distinct boxes — a direct application of stars and bars.",
      solution:
        "Using stars and bars with $n = 15$ identical objects and $r = 4$ boxes: $$\\binom{15 + 4 - 1}{4 - 1} = \\binom{18}{3} = \\frac{18 \\times 17 \\times 16}{3 \\times 2 \\times 1} = 816$$",
      alternative:
        "If the constraint were $x_i \\geq 1$ for all $i$, substitute $y_i = x_i - 1$ to get $y_1 + y_2 + y_3 + y_4 = 11$ with $y_i \\geq 0$: $\\binom{14}{3} = 364$.",
    },
    {
      kind: "example",
      title: "Derangement application",
      statement:
        "A hat-check attendant returns $6$ hats randomly. What is the probability that exactly $2$ people get their own hat back?",
      approach:
        "Choose which $2$ people get their own hat ($^6C_2$ ways), then the remaining $4$ hats must ALL go to wrong owners (derangement $D_4$). Divide by total permutations $6!$.",
      solution:
        "**Ways for exactly $2$ correct:** $^6C_2 \\times D_4 = 15 \\times 9 = 135$.\n\n**Total arrangements:** $6! = 720$.\n\n**Probability:** $\\frac{135}{720} = \\frac{3}{16}$.",
    },
  ],

  practiceProblemIds: [],
  challengeProblemIds: [],

  summary: {
    keyFormulas: [
      "$^nP_r = \\frac{n!}{(n-r)!}$ — permutations (order matters)",
      "$^nC_r = \\frac{n!}{r!(n-r)!}$ — combinations (order doesn't matter)",
      "Repeated letters: $\\frac{n!}{p!\\,q!\\,r!\\cdots}$",
      "Circular permutations: $(n-1)!$; necklace: $\\frac{(n-1)!}{2}$",
      "Permutations with repetition: $n^r$",
      "Stars and bars: $\\binom{n+r-1}{r-1}$ (identical into distinct, may be empty)",
      "Stars and bars (at least 1 each): $\\binom{n-1}{r-1}$",
      "Distinct into distinct boxes: $r^n$",
      "Derangements: $D_n = n!\\sum_{k=0}^{n}\\frac{(-1)^k}{k!}$",
      "Lattice paths from $(0,0)$ to $(m,n)$: $\\binom{m+n}{m}$",
      "Trailing zeros in $n!$: $\\sum_{k=1}^{\\infty}\\lfloor n/5^k \\rfloor$",
      "Pascal's identity: $^nC_r = {}^{n-1}C_{r-1} + {}^{n-1}C_r$",
    ],
    bigIdeas: [
      "Multiply for sequential independent choices (AND), add for mutually exclusive alternatives (OR).",
      "Permutations care about order; combinations do not — always ask which applies.",
      "Stars and bars converts equations in non-negative integers to a counting problem.",
      "Derangements count permutations with no fixed points — the subfactorial.",
      "Many hard problems become easy via complementary counting or bijections.",
    ],
    patternTips: [
      "See 'no two adjacent'? Arrange the rest first, then slot restricted items into gaps.",
      "See 'at least one'? Use total minus 'none' (complementary counting).",
      "See 'always together'? Bundle as one unit, then multiply by internal arrangements.",
      "See an equation with non-negative integer solutions? Stars and bars immediately.",
      "See 'nobody in their original position'? That's a derangement.",
    ],
    traps: [
      "Forgetting to divide by $k!$ when groups of equal size are indistinguishable.",
      "Using $^nP_r$ when order doesn't matter (answer $r!$ times too large).",
      "In circular permutations, using $n!$ instead of $(n-1)!$ — rotations are identical.",
      "Applying stars-and-bars formula without adjusting for 'at least 1' constraints.",
      "Counting arrangements of a word without dividing by repeated-letter factorials.",
    ],
    revisionNotes: [
      "Build Pascal's triangle for small $n$ to quickly read off $^nC_r$ values.",
      "Memorise first few derangements: $D_1=0, D_2=1, D_3=2, D_4=9, D_5=44$.",
      "Always verify: does my answer change if I reorder the selection? If no, use combination.",
      "In competition, state clearly whether you are choosing or arranging in each step.",
      "Practice converting word problems into one of the standard models (selection, arrangement, distribution, derangement).",
    ],
  },
};
