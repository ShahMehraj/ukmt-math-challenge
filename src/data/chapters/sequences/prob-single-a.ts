import type { Problem } from "@/lib/types";

/**
 * Sequences & Series — Single Correct Answer practice (chunk A, source #1-#16).
 *
 * ORIGINAL problems reworded in the app's own voice from a Cengage
 * "Sequences & Series" exercise bank; the mathematics (numbers, expressions,
 * structure) is preserved exactly. Each solution is an independent clean
 * derivation. Tagged `cengage-seq` for Problem Bank filtering.
 */

export const seqSingleA: Problem[] = [
  {
    id: "seq-sc-001",
    statement:
      "Suppose $a$, $b$, $c$ are in arithmetic progression. What is the value of $a^3 + c^3 - 8b^3$?",
    format: "mcq",
    options: [
      { label: "A", text: "$2abc$" },
      { label: "B", text: "$3abc$" },
      { label: "C", text: "$4abc$" },
      { label: "D", text: "$-6abc$" },
    ],
    answer: "D",
    topic: "sequences",
    subtopic: "Arithmetic Progression",
    concepts: ["AP condition", "algebraic identities"],
    difficulty: "medium",
    source: "original",
    skills: ["using the AP relation", "cube expansion"],
    estMinutes: 3,
    tags: ["cengage-seq", "ap-identity"],
    hints: [
      "Being in A.P. means $2b = a + c$, so $8b^3 = (a+c)^3$.",
      "Expand $(a+c)^3$ and substitute $a + c = 2b$ inside the cross term.",
    ],
    solution:
      "Since $a$, $b$, $c$ are in A.P., $2b = a + c$. Cubing gives $8b^3 = (a + c)^3 = a^3 + c^3 + 3ac(a + c)$. Replacing $a + c$ with $2b$ in the last term, $8b^3 = a^3 + c^3 + 6abc$, so $a^3 + c^3 - 8b^3 = -6abc$.",
    solutionSteps: [
      "Write the A.P. condition $2b = a + c$ and cube both sides.",
      "$8b^3 = a^3 + c^3 + 3ac(a + c)$.",
      "Substitute $a + c = 2b$: $8b^3 = a^3 + c^3 + 6abc$.",
      "Rearrange to $a^3 + c^3 - 8b^3 = -6abc$.",
    ],
  },
  {
    id: "seq-sc-002",
    statement:
      "Three positive real numbers $a$, $b$, $c$ are in arithmetic progression and satisfy $abc = 4$. What is the least possible value of $b$?",
    format: "mcq",
    options: [
      { label: "A", text: "$2^{1/3}$" },
      { label: "B", text: "$2^{2/3}$" },
      { label: "C", text: "$2^{1/2}$" },
      { label: "D", text: "$2^{3/2}$" },
    ],
    answer: "B",
    topic: "sequences",
    subtopic: "Means & Inequalities",
    concepts: ["AP terms about the mean", "bounding a product"],
    difficulty: "medium",
    source: "original",
    skills: ["parametrizing an A.P.", "inequality bounding"],
    estMinutes: 4,
    tags: ["cengage-seq", "ap-inequality"],
    hints: [
      "Write the three terms as $b - d$, $b$, $b + d$.",
      "Then $abc = b(b^2 - d^2) \\le b^3$; combine with $abc = 4$.",
    ],
    solution:
      "With common difference $d$, the terms are $a = b - d$, $b$, $c = b + d$. Then $abc = (b - d)\\,b\\,(b + d) = b(b^2 - d^2)$. Since $b > 0$ and $b^2 - d^2 \\le b^2$, we have $b(b^2 - d^2) \\le b^3$, so $4 \\le b^3$, giving $b \\ge 2^{2/3}$. The minimum value of $b$ is $2^{2/3}$.",
    solutionSteps: [
      "Let the A.P. be $b - d$, $b$, $b + d$.",
      "$abc = b(b^2 - d^2) = 4$.",
      "Because $b(b^2 - d^2) \\le b^3$, deduce $4 \\le b^3$.",
      "Hence $b \\ge 2^{2/3}$, so the minimum is $2^{2/3}$.",
    ],
  },
  {
    id: "seq-sc-003",
    statement:
      "If $\\log_2(5 \\cdot 2^x + 1)$, $\\log_4(2^{1-x} + 1)$ and $1$ form an arithmetic progression (in that order), find $x$.",
    format: "mcq",
    options: [
      { label: "A", text: "$\\log_2 5$" },
      { label: "B", text: "$1 - \\log_5 2$" },
      { label: "C", text: "$\\log_5 2$" },
      { label: "D", text: "$1 - \\log_2 5$" },
    ],
    answer: "D",
    topic: "sequences",
    subtopic: "Arithmetic Progression",
    concepts: ["AP mean condition", "logarithm rules"],
    difficulty: "hard",
    source: "original",
    skills: ["applying the middle-term condition", "solving log equations"],
    estMinutes: 6,
    tags: ["cengage-seq", "ap-logarithm"],
    hints: [
      "The middle term is the average: $2\\log_4(2^{1-x} + 1) = \\log_2(5 \\cdot 2^x + 1) + 1$.",
      "Convert base-4 to base-2 and substitute $y = 2^x$.",
    ],
    solution:
      "The A.P. condition gives $2\\log_4(2^{1-x} + 1) = \\log_2(5 \\cdot 2^x + 1) + 1$. Since $\\log_4 = \\tfrac{1}{2}\\log_2$, the left side is $\\log_2(2^{1-x} + 1)$, and the right side is $\\log_2\\big(2(5 \\cdot 2^x + 1)\\big)$. Thus $2^{1-x} + 1 = 10 \\cdot 2^x + 2$. Let $y = 2^x$; then $\\tfrac{2}{y} + 1 = 10y + 2$, i.e. $10y^2 + y - 2 = 0$, which factors as $(5y - 2)(2y + 1) = 0$. Since $y = 2^x > 0$, take $y = \\tfrac{2}{5}$, so $2^x = \\tfrac{2}{5}$ and $x = \\log_2 2 - \\log_2 5 = 1 - \\log_2 5$.",
    solutionSteps: [
      "Middle-term rule: $2\\log_4(2^{1-x}+1) = \\log_2(5\\cdot 2^x + 1) + 1$.",
      "Rewrite each side in base 2: $2^{1-x} + 1 = 10\\cdot 2^x + 2$.",
      "Put $y = 2^x$ to get $10y^2 + y - 2 = 0$, i.e. $(5y - 2)(2y + 1) = 0$.",
      "Take the positive root $y = 2/5$, so $x = 1 - \\log_2 5$.",
    ],
  },
  {
    id: "seq-sc-004",
    statement:
      "Consider the first 100 terms of $1, 11, 21, 31, \\ldots$ and the first 100 terms of $31, 36, 41, 46, \\ldots$. What is the largest number appearing in both lists?",
    format: "mcq",
    options: [
      { label: "A", text: "$381$" },
      { label: "B", text: "$471$" },
      { label: "C", text: "$281$" },
      { label: "D", text: "$521$" },
    ],
    answer: "D",
    topic: "sequences",
    subtopic: "Arithmetic Progression",
    concepts: ["common terms of two APs", "nth term formula"],
    difficulty: "medium",
    source: "original",
    skills: ["finding term ranges", "matching APs"],
    estMinutes: 5,
    tags: ["cengage-seq", "ap-common-terms"],
    hints: [
      "Find the last term of each list first.",
      "A common term must not exceed the smaller of the two last terms; work backwards from $526$.",
    ],
    solution:
      "The 100th term of $1, 11, 21, \\ldots$ is $1 + 99 \\cdot 10 = 991$; the 100th term of $31, 36, 41, \\ldots$ is $31 + 99 \\cdot 5 = 526$. So a common term is at most $526$. A common term lies in the first list, i.e. has the form $31 + (n - 1)\\cdot 10$. Setting $31 + (n-1)10 = 526$ gives $n = 50.5$, so the largest integer works at $n = 50$: $31 + 49 \\cdot 10 = 521$. Hence the largest common term is $521$.",
    solutionSteps: [
      "Last terms: $991$ and $526$; common terms cannot exceed $526$.",
      "Common terms have the form $31 + (n-1)10$ (they lie in the first list too).",
      "Solve $31 + (n-1)10 = 526$: $n = 50.5$, so use $n = 50$.",
      "Largest common term $= 31 + 49\\cdot 10 = 521$.",
    ],
  },
  {
    id: "seq-sc-005",
    statement:
      "In an arithmetic progression the sum of the first six terms is five times the sum of the next six terms. Which term of the progression equals zero?",
    format: "mcq",
    options: [
      { label: "A", text: "$10^{\\text{th}}$" },
      { label: "B", text: "$11^{\\text{th}}$" },
      { label: "C", text: "$12^{\\text{th}}$" },
      { label: "D", text: "$13^{\\text{th}}$" },
    ],
    answer: "B",
    topic: "sequences",
    subtopic: "Arithmetic Progression",
    concepts: ["sum of terms", "term formula"],
    difficulty: "medium",
    source: "original",
    skills: ["setting up sum equations", "solving for the zero term"],
    estMinutes: 4,
    tags: ["cengage-seq", "ap-sum"],
    hints: [
      "Sum of first six $= \\tfrac{6}{2}(t_1 + t_6)$; sum of next six $= \\tfrac{6}{2}(t_7 + t_{12})$.",
      "Simplify to find a relation between $t_1$ and $d$.",
    ],
    solution:
      "Let the first term be $t_1$ and common difference $d$. The condition is $\\tfrac{6}{2}(t_1 + t_6) = 5 \\cdot \\tfrac{6}{2}(t_7 + t_{12})$, i.e. $t_1 + (t_1 + 5d) = 5\\big((t_1 + 6d) + (t_1 + 11d)\\big)$. This gives $2t_1 + 5d = 10t_1 + 85d$, so $8t_1 + 80d = 0$, i.e. $t_1 + 10d = 0$. Thus $t_{11} = t_1 + 10d = 0$, so the 11th term is zero.",
    solutionSteps: [
      "Write $\\tfrac{6}{2}(t_1 + t_6) = 5\\cdot\\tfrac{6}{2}(t_7 + t_{12})$.",
      "Expand: $2t_1 + 5d = 10t_1 + 85d$.",
      "Simplify to $t_1 + 10d = 0$.",
      "So $t_{11} = 0$: the 11th term vanishes.",
    ],
  },
  {
    id: "seq-sc-006",
    statement:
      "The side lengths of a right-angled triangle are in arithmetic progression. What are the sines of its two acute angles?",
    format: "mcq",
    options: [
      { label: "A", text: "$\\dfrac{3}{5}, \\dfrac{4}{5}$" },
      { label: "B", text: "$\\dfrac{1}{\\sqrt{3}}, \\sqrt{\\dfrac{2}{3}}$" },
      { label: "C", text: "$\\dfrac{1}{2}, \\dfrac{\\sqrt{3}}{2}$" },
      { label: "D", text: "none of these" },
    ],
    answer: "A",
    topic: "sequences",
    subtopic: "Arithmetic Progression",
    concepts: ["AP sides", "Pythagoras theorem", "trigonometric ratios"],
    difficulty: "medium",
    source: "original",
    skills: ["parametrizing sides in A.P.", "applying Pythagoras"],
    estMinutes: 4,
    tags: ["cengage-seq", "ap-geometry"],
    hints: [
      "Write the sides as $a - d$, $a$, $a + d$ with $a + d$ the hypotenuse.",
      "Apply $(a+d)^2 = (a-d)^2 + a^2$ to relate $a$ and $d$.",
    ],
    solution:
      "Let the sides be $a - d$, $a$, $a + d$, with $a + d$ the hypotenuse. Pythagoras gives $(a + d)^2 = (a - d)^2 + a^2$, which simplifies to $4ad - a^2 = 0$, so $a = 4d$. The sides are therefore $3d$, $4d$, $5d$ — a $3$-$4$-$5$ triangle. The sines of the two acute angles are the ratios of the legs to the hypotenuse: $\\dfrac{3d}{5d} = \\dfrac{3}{5}$ and $\\dfrac{4d}{5d} = \\dfrac{4}{5}$.",
    solutionSteps: [
      "Sides in A.P.: $a - d$, $a$, $a + d$ (hypotenuse $a + d$).",
      "Pythagoras: $(a+d)^2 = (a-d)^2 + a^2 \\Rightarrow 4ad = a^2 \\Rightarrow a = 4d$.",
      "Sides become $3d, 4d, 5d$.",
      "Sines of acute angles: $3/5$ and $4/5$.",
    ],
  },
  {
    id: "seq-sc-007",
    statement:
      "Suppose $a$, $\\dfrac{1}{b}$, $c$ form one arithmetic progression and $\\dfrac{1}{p}$, $q$, $\\dfrac{1}{r}$ form another, both with the same common difference. Then $a$, $q$, $c$ are in arithmetic progression exactly when:",
    format: "mcq",
    options: [
      { label: "A", text: "$p$, $b$, $r$ are in A.P." },
      { label: "B", text: "$\\dfrac{1}{p}, \\dfrac{1}{b}, \\dfrac{1}{r}$ are in A.P." },
      { label: "C", text: "$p$, $b$, $r$ are in G.P." },
      { label: "D", text: "none of these" },
    ],
    answer: "B",
    topic: "sequences",
    subtopic: "Arithmetic Progression",
    concepts: ["equal common differences", "AP condition"],
    difficulty: "hard",
    source: "original",
    skills: ["combining two APs", "translating the mean condition"],
    estMinutes: 5,
    tags: ["cengage-seq", "ap-condition"],
    hints: [
      "$a, q, c$ in A.P. means $2q = a + c$.",
      "Use the two progressions with equal common difference to express $a + c$ and $2q$.",
    ],
    solution:
      "If $a$, $q$, $c$ are in A.P., then $2q = a + c$. Because $a$, $\\tfrac{1}{b}$, $c$ share the same common difference as $\\tfrac{1}{p}$, $q$, $\\tfrac{1}{r}$, subtracting the two middle-term averages gives $a + c = \\tfrac{1}{p} + \\tfrac{1}{r}$ and $2q = \\tfrac{2}{b}$. Hence $2q = a + c$ becomes $\\dfrac{1}{p} + \\dfrac{1}{r} = \\dfrac{2}{b}$, which is precisely the statement that $\\dfrac{1}{p}, \\dfrac{1}{b}, \\dfrac{1}{r}$ are in A.P.",
    solutionSteps: [
      "$a, q, c$ in A.P. $\\Leftrightarrow 2q = a + c$.",
      "Equal common differences give $a + c = \\tfrac1p + \\tfrac1r$ and $2q = \\tfrac2b$.",
      "So the condition becomes $\\tfrac1p + \\tfrac1r = \\tfrac2b$.",
      "That is exactly $\\tfrac1p, \\tfrac1b, \\tfrac1r$ in A.P.",
    ],
  },
  {
    id: "seq-sc-008",
    statement:
      "A sequence satisfies $F(n + 1) = \\dfrac{2F(n) + 1}{2}$ for $n = 1, 2, 3, \\ldots$ with $F(1) = 2$. What is $F(101)$?",
    format: "mcq",
    options: [
      { label: "A", text: "$50$" },
      { label: "B", text: "$52$" },
      { label: "C", text: "$54$" },
      { label: "D", text: "none of these" },
    ],
    answer: "B",
    topic: "sequences",
    subtopic: "Arithmetic Progression",
    concepts: ["recurrence to A.P.", "nth term"],
    difficulty: "medium",
    source: "original",
    skills: ["recognizing constant difference", "applying term formula"],
    estMinutes: 3,
    tags: ["cengage-seq", "ap-recurrence"],
    hints: [
      "Simplify the recurrence to $F(n+1) - F(n) = \\tfrac{1}{2}$.",
      "That means the terms form an A.P.; use the term formula.",
    ],
    solution:
      "Rewriting, $F(n + 1) = F(n) + \\tfrac{1}{2}$, so $F(n + 1) - F(n) = \\tfrac{1}{2}$. The terms form an A.P. with first term $2$ and common difference $\\tfrac{1}{2}$. Therefore $F(101) = 2 + (101 - 1)\\cdot \\tfrac{1}{2} = 2 + 50 = 52$.",
    solutionSteps: [
      "$F(n+1) = F(n) + \\tfrac12$, a constant difference.",
      "So the sequence is an A.P. with $F(1) = 2$, $d = \\tfrac12$.",
      "$F(101) = 2 + 100\\cdot\\tfrac12 = 52$.",
    ],
  },
  {
    id: "seq-sc-009",
    statement:
      "In an arithmetic progression $a_1, a_2, a_3, \\ldots$ we have $a_3 + a_5 + a_8 = 11$ and $a_4 + a_2 = -2$. Find $a_1 + a_6 + a_7$.",
    format: "mcq",
    options: [
      { label: "A", text: "$-8$" },
      { label: "B", text: "$5$" },
      { label: "C", text: "$7$" },
      { label: "D", text: "$9$" },
    ],
    answer: "C",
    topic: "sequences",
    subtopic: "Arithmetic Progression",
    concepts: ["term formula", "solving simultaneous equations"],
    difficulty: "medium",
    source: "original",
    skills: ["expressing terms via $a$ and $d$", "solving for a target sum"],
    estMinutes: 4,
    tags: ["cengage-seq", "ap-system"],
    hints: [
      "Write every term as $a + kd$.",
      "Form two equations and solve for $a$ and $d$.",
    ],
    solution:
      "Write $a_n = a + (n-1)d$. From $a_3 + a_5 + a_8 = 11$: $(a + 2d) + (a + 4d) + (a + 7d) = 3a + 13d = 11$. From $a_4 + a_2 = -2$: $(a + 3d) + (a + d) = 2a + 4d = -2$, so $a = -1 - 2d$. Substituting, $3(-1 - 2d) + 13d = 11$ gives $7d = 14$, so $d = 2$ and $a = -5$. Then $a_1 + a_6 + a_7 = (a) + (a + 5d) + (a + 6d) = 3a + 11d = 3(-5) + 22 = 7$.",
    solutionSteps: [
      "$3a + 13d = 11$ and $2a + 4d = -2 \\Rightarrow a = -1 - 2d$.",
      "Substitute: $7d = 14$, so $d = 2$, $a = -5$.",
      "$a_1 + a_6 + a_7 = 3a + 11d = -15 + 22 = 7$.",
    ],
  },
  {
    id: "seq-sc-010",
    statement:
      "Let $a_1, a_2, a_3, \\ldots$ be an arithmetic progression. The terms $a_p, a_q, a_r$ are themselves in arithmetic progression provided $p$, $q$, $r$ are in:",
    format: "mcq",
    options: [
      { label: "A", text: "A.P." },
      { label: "B", text: "G.P." },
      { label: "C", text: "H.P." },
      { label: "D", text: "none of these" },
    ],
    answer: "A",
    topic: "sequences",
    subtopic: "Arithmetic Progression",
    concepts: ["indices in progression", "linear term formula"],
    difficulty: "medium",
    source: "original",
    skills: ["reasoning about subsequences", "general principle"],
    estMinutes: 3,
    tags: ["cengage-seq", "ap-indices"],
    hints: [
      "The term $a_n = a + (n-1)d$ is a linear function of $n$.",
      "A linear function preserves an A.P. of inputs.",
    ],
    solution:
      "Because $a_n = a + (n - 1)d$ is a linear (affine) function of the index $n$, feeding indices that are themselves in A.P. produces outputs in A.P. In general, for an A.P., G.P., or H.P. $a_1, a_2, a_3, \\ldots$, choosing indices $p, q, r$ in A.P. yields $a_p, a_q, a_r$ in A.P., G.P., or H.P. respectively. Hence $p, q, r$ must be in A.P.",
    solutionSteps: [
      "$a_n = a + (n-1)d$ is linear in $n$.",
      "Linear maps send an A.P. of indices to an A.P. of values.",
      "So $p, q, r$ in A.P. gives $a_p, a_q, a_r$ in A.P.",
    ],
  },
  {
    id: "seq-sc-011",
    statement:
      "Let $\\alpha, \\beta \\in \\mathbb{R}$. Suppose $\\alpha$ and $\\beta^2$ are the roots of $x^2 - px + 1 = 0$, while $\\alpha^2$ and $\\beta$ are the roots of $x^2 - qx + 8 = 0$. If $\\dfrac{r}{8}$ is the arithmetic mean of $p$ and $q$, find $r$.",
    format: "mcq",
    options: [
      { label: "A", text: "$\\dfrac{83}{2}$" },
      { label: "B", text: "$83$" },
      { label: "C", text: "$\\dfrac{83}{8}$" },
      { label: "D", text: "$\\dfrac{83}{4}$" },
    ],
    answer: "B",
    topic: "sequences",
    subtopic: "Means & Inequalities",
    concepts: ["Vieta's formulas", "arithmetic mean"],
    difficulty: "hard",
    source: "original",
    skills: ["using product/sum of roots", "computing an arithmetic mean"],
    estMinutes: 6,
    tags: ["cengage-seq", "arithmetic-mean"],
    hints: [
      "Products of roots: $\\alpha\\beta^2 = 1$ and $\\alpha^2\\beta = 8$.",
      "Multiply them to find $\\alpha\\beta$, then recover $\\alpha$ and $\\beta$.",
    ],
    solution:
      "By Vieta, $\\alpha\\beta^2 = 1$ (product for the first equation) and $\\alpha^2\\beta = 8$ (product for the second). Multiplying, $(\\alpha\\beta^2)(\\alpha^2\\beta) = \\alpha^3\\beta^3 = 8$, so $\\alpha\\beta = 2$. From $\\alpha\\beta^2 = 1$ we get $\\beta = \\tfrac{1}{2}$, and from $\\alpha^2\\beta = 8$ we get $\\alpha = 4$. The sums of roots give $p = \\alpha + \\beta^2 = 4 + \\tfrac{1}{4} = \\tfrac{17}{4}$ and $q = \\alpha^2 + \\beta = 16 + \\tfrac{1}{2} = \\tfrac{33}{2}$. Since $\\tfrac{r}{8}$ is the arithmetic mean of $p$ and $q$, $\\tfrac{r}{8} = \\tfrac{p + q}{2}$, so $r = 4(p + q) = 4\\left(\\tfrac{17}{4} + \\tfrac{33}{2}\\right) = 17 + 66 = 83$.",
    solutionSteps: [
      "$\\alpha\\beta^2 = 1$, $\\alpha^2\\beta = 8 \\Rightarrow \\alpha^3\\beta^3 = 8 \\Rightarrow \\alpha\\beta = 2$.",
      "Solve $\\beta = \\tfrac12$, $\\alpha = 4$.",
      "$p = \\alpha + \\beta^2 = \\tfrac{17}{4}$, $q = \\alpha^2 + \\beta = \\tfrac{33}{2}$.",
      "$\\tfrac{r}{8} = \\tfrac{p+q}{2} \\Rightarrow r = 4(p+q) = 83$.",
    ],
  },
  {
    id: "seq-sc-012",
    statement:
      "For an arithmetic progression, the sum of the first $m$ terms equals the sum of the first $n$ terms (with $m \\neq n$). What is the sum of the first $(m + n)$ terms?",
    format: "mcq",
    options: [
      { label: "A", text: "$mn$" },
      { label: "B", text: "$-mn$" },
      { label: "C", text: "$\\dfrac{1}{mn}$" },
      { label: "D", text: "$0$" },
    ],
    answer: "D",
    topic: "sequences",
    subtopic: "Arithmetic Progression",
    concepts: ["sum formula", "factoring"],
    difficulty: "medium",
    source: "original",
    skills: ["equating two partial sums", "deriving a bracket condition"],
    estMinutes: 4,
    tags: ["cengage-seq", "ap-sum"],
    hints: [
      "Set $S_m = S_n$ using $S_k = \\tfrac{k}{2}[2a + (k-1)d]$.",
      "Factor out $(m - n)$ to isolate the bracket.",
    ],
    solution:
      "Using $S_k = \\tfrac{k}{2}[2a + (k - 1)d]$, the equality $S_m = S_n$ gives $2a(m - n) + \\{m(m-1) - n(n-1)\\}d = 0$. Since $m(m-1) - n(n-1) = (m^2 - n^2) - (m - n) = (m - n)(m + n - 1)$, this factors as $(m - n)[2a + (m + n - 1)d] = 0$. As $m \\neq n$, we get $2a + (m + n - 1)d = 0$. Then $S_{m+n} = \\tfrac{m+n}{2}[2a + (m + n - 1)d] = \\tfrac{m+n}{2}\\cdot 0 = 0$.",
    solutionSteps: [
      "$S_m = S_n \\Rightarrow 2a(m-n) + (m-n)(m+n-1)d = 0$.",
      "Divide by $m - n \\neq 0$: $2a + (m+n-1)d = 0$.",
      "$S_{m+n} = \\tfrac{m+n}{2}[2a + (m+n-1)d] = 0$.",
    ],
  },
  {
    id: "seq-sc-013",
    statement:
      "Let $S_n$ be the sum of the first $n$ terms of an arithmetic progression. Evaluate $S_{n+3} - 3S_{n+2} + 3S_{n+1} - S_n$.",
    format: "mcq",
    options: [
      { label: "A", text: "$2S_n$" },
      { label: "B", text: "$S_{n+1}$" },
      { label: "C", text: "$3S_n$" },
      { label: "D", text: "$0$" },
    ],
    answer: "D",
    topic: "sequences",
    subtopic: "Sigma & Telescoping",
    concepts: ["difference of partial sums", "constant common difference"],
    difficulty: "medium",
    source: "original",
    skills: ["telescoping sums into terms", "second differences"],
    estMinutes: 4,
    tags: ["cengage-seq", "ap-sum-difference"],
    hints: [
      "$S_{k+1} - S_k = T_{k+1}$, the $(k+1)$-th term.",
      "Group the four sums into differences to reach second differences of terms.",
    ],
    solution:
      "Group the expression as $(S_{n+3} - S_{n+2}) - 2(S_{n+2} - S_{n+1}) + (S_{n+1} - S_n) = T_{n+3} - 2T_{n+2} + T_{n+1}$, where $T_k$ is the $k$-th term. This equals $(T_{n+3} - T_{n+2}) - (T_{n+2} - T_{n+1}) = d - d = 0$, since consecutive terms of an A.P. differ by the constant $d$. Hence the value is $0$.",
    solutionSteps: [
      "Rewrite as $T_{n+3} - 2T_{n+2} + T_{n+1}$ using $S_{k+1} - S_k = T_{k+1}$.",
      "This is the second difference of the terms.",
      "For an A.P., first differences equal $d$, so the second difference is $d - d = 0$.",
    ],
  },
  {
    id: "seq-sc-014",
    statement:
      "In an arithmetic progression with first term $a$, the sum of the first $p$ terms is zero. What is the sum of the next $q$ terms?",
    format: "mcq",
    options: [
      { label: "A", text: "$-\\dfrac{a(p+q)p}{q+1}$" },
      { label: "B", text: "$\\dfrac{a(p+q)p}{p+1}$" },
      { label: "C", text: "$-\\dfrac{a(p+q)q}{p-1}$" },
      { label: "D", text: "none of these" },
    ],
    answer: "C",
    topic: "sequences",
    subtopic: "Arithmetic Progression",
    concepts: ["sum formula", "sum of a shifted block"],
    difficulty: "hard",
    source: "original",
    skills: ["deriving $d$ from a zero sum", "summing a later block"],
    estMinutes: 6,
    tags: ["cengage-seq", "ap-block-sum"],
    hints: [
      "$S_p = 0$ gives $d = \\dfrac{-2a}{p - 1}$.",
      "The next $q$ terms form an A.P. starting at $T_{p+1} = a + pd$.",
    ],
    solution:
      "From $S_p = \\tfrac{p}{2}[2a + (p - 1)d] = 0$ (with $p \\neq 0$) we get $2a + (p - 1)d = 0$, so $d = \\dfrac{-2a}{p - 1}$. The next $q$ terms start at $T_{p+1} = a + pd$, so their sum is $S = \\tfrac{q}{2}[2(a + pd) + (q - 1)d] = \\tfrac{q}{2}[2a + (p - 1)d + (p + q)d]$. Since $2a + (p - 1)d = 0$, this is $\\tfrac{q}{2}(p + q)d = \\tfrac{q}{2}(p + q)\\cdot\\dfrac{-2a}{p - 1} = -\\dfrac{a(p + q)q}{p - 1}$.",
    solutionSteps: [
      "$S_p = 0 \\Rightarrow 2a + (p-1)d = 0 \\Rightarrow d = \\dfrac{-2a}{p-1}$.",
      "Next $q$ terms start at $T_{p+1} = a + pd$.",
      "Their sum $= \\tfrac{q}{2}[2a + (p-1)d + (p+q)d] = \\tfrac{q}{2}(p+q)d$.",
      "Substitute $d$: sum $= -\\dfrac{a(p+q)q}{p-1}$.",
    ],
  },
  {
    id: "seq-sc-015",
    statement:
      "Let $S_n$ denote the sum of the first $n$ terms of an arithmetic progression. If $\\dfrac{S_{3n} - S_{n-1}}{S_{2n} - S_{2n-1}} = 31$, find $n$.",
    format: "mcq",
    options: [
      { label: "A", text: "$21$" },
      { label: "B", text: "$15$" },
      { label: "C", text: "$16$" },
      { label: "D", text: "$19$" },
    ],
    answer: "B",
    topic: "sequences",
    subtopic: "Sigma & Telescoping",
    concepts: ["sum formula", "difference of sums as a term"],
    difficulty: "hard",
    source: "original",
    skills: ["simplifying sum differences", "solving for n"],
    estMinutes: 6,
    tags: ["cengage-seq", "ap-sum-ratio"],
    hints: [
      "The denominator $S_{2n} - S_{2n-1}$ is just the term $T_{2n}$.",
      "Simplify the numerator to a multiple of $T_{2n}$.",
    ],
    solution:
      "With $S_k = \\tfrac{k}{2}[2a + (k - 1)d]$, compute $S_{3n} - S_{n-1}$. Combining the two sums gives $S_{3n} - S_{n-1} = a(2n + 1) + d(4n^2 - 1) = (2n + 1)[a + (2n - 1)d]$. The denominator is $S_{2n} - S_{2n-1} = T_{2n} = a + (2n - 1)d$. Therefore the ratio simplifies to $2n + 1$. Setting $2n + 1 = 31$ gives $n = 15$.",
    solutionSteps: [
      "$S_{3n} - S_{n-1} = (2n+1)[a + (2n-1)d]$.",
      "$S_{2n} - S_{2n-1} = T_{2n} = a + (2n-1)d$.",
      "Ratio $= 2n + 1 = 31 \\Rightarrow n = 15$.",
    ],
  },
  {
    id: "seq-sc-016",
    statement:
      "An arithmetic progression has an even number of terms. The sum of the odd-position terms is $24$ and the sum of the even-position terms is $30$, and the last term exceeds the first by $\\dfrac{21}{2}$. How many terms does the progression have?",
    format: "mcq",
    options: [
      { label: "A", text: "$8$" },
      { label: "B", text: "$4$" },
      { label: "C", text: "$6$" },
      { label: "D", text: "$10$" },
    ],
    answer: "A",
    topic: "sequences",
    subtopic: "Arithmetic Progression",
    concepts: ["odd/even position sums", "sum formula"],
    difficulty: "hard",
    source: "original",
    skills: ["splitting an A.P. into two sub-APs", "solving for the count"],
    estMinutes: 7,
    tags: ["cengage-seq", "ap-odd-even"],
    hints: [
      "Let there be $2n$ terms $a, a+d, \\ldots, a + (2n-1)d$.",
      "Subtract the odd-sum equation from the even-sum equation to find $nd$.",
    ],
    solution:
      "Let the progression have $2n$ terms $a, a + d, \\ldots, a + (2n-1)d$. The $n$ odd-position terms sum to $\\tfrac{n}{2}[2a + (n-1)2d] = n[a + (n-1)d] = 24$, and the $n$ even-position terms sum to $\\tfrac{n}{2}[2(a+d) + (n-1)2d] = n[(a + d) + (n-1)d] = 30$. Subtracting gives $nd = 6$. The last term exceeds the first by $(2n - 1)d = \\tfrac{21}{2}$. Dividing, $\\dfrac{(2n-1)d}{nd} = \\dfrac{21/2}{6} = \\dfrac{21}{12}$, so $\\dfrac{2n - 1}{n} = \\dfrac{21}{12}$, giving $12(2n - 1) = 21n$, i.e. $24n - 12 = 21n$, so $n = 4$. The number of terms is $2n = 8$.",
    solutionSteps: [
      "Take $2n$ terms; odd-position sum $= n[a + (n-1)d] = 24$, even-position sum $= n[(a+d) + (n-1)d] = 30$.",
      "Subtract: $nd = 6$.",
      "Last minus first: $(2n-1)d = \\tfrac{21}{2}$.",
      "Divide: $\\tfrac{2n-1}{n} = \\tfrac{21}{12} \\Rightarrow n = 4$, so $2n = 8$ terms.",
    ],
  },
];
