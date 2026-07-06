import type { Problem } from "@/lib/types";

/**
 * Original numeric-value practice problems (#1-#14) for the "Sequences & Series"
 * chapter, reworded in the app's own voice from the Cengage exercise bank. The
 * mathematics (numbers, expressions, structure) is preserved exactly; every
 * statement and solution is rewritten and independently verified.
 */

const TAG = "cengage-seq";

export const seqNumericA: Problem[] = [
  {
    id: "seq-nv-001",
    statement:
      "Let $a, b, c, d$ be four distinct real numbers forming an arithmetic progression. Find the smallest positive value of $k$ for which the equation $2(a - b) + k(b - c)^2 + (c - a)^3 = 2(a - d) + (b - d)^2 + (c - d)^3$ can hold.",
    format: "numeric",
    answer: "16",
    topic: "sequences",
    subtopic: "Arithmetic Progression",
    concepts: ["arithmetic progression", "common difference", "discriminant condition"],
    difficulty: "hard",
    source: "original",
    skills: ["parametrising an A.P. by its common difference", "using the discriminant for real roots"],
    estMinutes: 6,
    tags: [TAG, "ap"],
    hints: [
      "Write every difference in terms of the common difference $D$: $c - a = 2D$, $a - d = -3D$, $b - d = -2D$, $c - d = -D$.",
      "The condition on $D$ becomes a quadratic; require its discriminant to be non-negative.",
    ],
    solution:
      "Let the common difference be $D$, so $c - a = 2D$, $a - b = -D$, $a - d = -3D$, $b - d = -2D$ and $c - d = -D$. Substituting turns the equation into $-2D + kD^2 + 8D^3 = -6D + 4D^2 - D^3$, which simplifies to $9D^2 + (k - 4)D + 4 = 0$. Since $D$ is real, $(k - 4)^2 - 4(9)(4) \\ge 0$, i.e. $k^2 - 8k - 128 \\ge 0$, or $(k - 16)(k + 8) \\ge 0$. Thus $k \\le -8$ or $k \\ge 16$, and the smallest positive value is $k = 16$.",
    solutionSteps: [
      "Set common difference $D$ and rewrite each difference in terms of $D$.",
      "Substitute to get $9D^2 + (k-4)D + 4 = 0$.",
      "Impose discriminant $\\ge 0$: $(k-16)(k+8) \\ge 0$.",
      "Smallest positive solution is $k = 16$.",
    ],
  },
  {
    id: "seq-nv-002",
    statement:
      "An arithmetic progression has $4^{\\text{th}}$ term equal to $6$ and $m^{\\text{th}}$ term equal to $18$. If every term of the A.P. is an integer, how many such progressions are possible?",
    format: "numeric",
    answer: "9",
    topic: "sequences",
    subtopic: "Arithmetic Progression",
    concepts: ["arithmetic progression", "integer terms", "divisor counting"],
    difficulty: "medium",
    source: "original",
    skills: ["setting up A.P. term equations", "counting integer factorisations"],
    estMinutes: 4,
    tags: [TAG, "ap"],
    hints: [
      "From $T_4 = a + 3d = 6$ and $T_m = a + (m-1)d = 18$, subtract to relate $m$ and $d$.",
      "You get $(m - 4)d = 12$; count the valid positions $m > 0$ with $m \\ne 4$.",
    ],
    solution:
      "With $T_4 = a + 3d = 6$ and $T_m = a + (m - 1)d = 18$, subtraction gives $(m - 4)d = 12$. For integer terms, $d$ must be an integer dividing $12$, and $m - 4$ the matching cofactor. The factor $m - 4$ can be $\\pm 1, \\pm 2, \\pm 3, \\pm 4, \\pm 6, \\pm 12$, but $m$ must be a positive term index, which rules out $m - 4 = -4, -6, -12$ (these give $m \\le 0$). The admissible values are $m - 4 = \\pm 1, \\pm 2, \\pm 3, 4, 6, 12$, giving nine progressions.",
    solutionSteps: [
      "Form $a + 3d = 6$ and $a + (m-1)d = 18$.",
      "Subtract to get $(m-4)d = 12$.",
      "List integer factor pairs of $12$.",
      "Discard those with $m \\le 0$; nine remain.",
    ],
  },
  {
    id: "seq-nv-003",
    statement:
      "In a geometric sequence of real numbers, the $5^{\\text{th}}$ term is $7!$ and the $8^{\\text{th}}$ term is $8!$. If the sum of the first $n$ terms equals $2205$, find $n$.",
    format: "numeric",
    answer: "3",
    topic: "sequences",
    subtopic: "Geometric Progression",
    concepts: ["geometric progression", "common ratio", "partial sums"],
    difficulty: "medium",
    source: "original",
    skills: ["finding ratio from two terms", "summing a G.P."],
    estMinutes: 4,
    tags: [TAG, "gp"],
    hints: [
      "Divide the $8^{\\text{th}}$ term by the $5^{\\text{th}}$ term to get $r^3$.",
      "Recover the first term, then add successive terms until you reach $2205$.",
    ],
    solution:
      "Write the terms as $a, ar, ar^2, \\ldots$ Then $ar^4 = 7! = 5040$ and $ar^7 = 8! = 40320$. Dividing gives $r^3 = 8$, so $r = 2$. Hence $a = 5040 / 2^4 = 315$, and the sequence is $315, 630, 1260, \\ldots$ The sum of the first three terms is $315 + 630 + 1260 = 2205$, so $n = 3$.",
    solutionSteps: [
      "$ar^4 = 5040$, $ar^7 = 40320 \\Rightarrow r^3 = 8 \\Rightarrow r = 2$.",
      "$a = 5040/16 = 315$.",
      "$315 + 630 + 1260 = 2205$, so $n = 3$.",
    ],
  },
  {
    id: "seq-nv-004",
    statement:
      "The numbers $a_1, a_2, \\ldots, a_{101}$ are in geometric progression with $a_{101} = 25$ and $\\sum_{i=1}^{201} a_i = 625$. Evaluate $\\sum_{i=1}^{201} \\dfrac{1}{a_i}$.",
    format: "numeric",
    answer: "1",
    topic: "sequences",
    subtopic: "Geometric Progression",
    concepts: ["geometric progression", "reciprocal G.P.", "symmetry of sums"],
    difficulty: "hard",
    source: "original",
    skills: ["summing a reciprocal G.P.", "recognising the middle-term identity"],
    estMinutes: 6,
    tags: [TAG, "gp"],
    hints: [
      "The reciprocals of a G.P. also form a G.P.; write its sum in closed form.",
      "The sum of reciprocals equals $625 / (a r^{100})^2$, and $a r^{100}$ is the $101^{\\text{st}}$ term.",
    ],
    solution:
      "Let the first term be $a$ and ratio $r$, so $\\dfrac{a(1 - r^{201})}{1 - r} = 625$. The reciprocals $\\dfrac{1}{a}, \\dfrac{1}{ar}, \\ldots, \\dfrac{1}{ar^{200}}$ form a G.P. with first term $\\dfrac{1}{a}$ and ratio $\\dfrac{1}{r}$, so their sum is $\\dfrac{1}{a}\\left(\\dfrac{1 - r^{201}}{1 - r}\\right)\\dfrac{1}{r^{200}} = \\dfrac{625}{a^2 r^{200}} = \\dfrac{625}{(ar^{100})^2}$. Since $ar^{100} = a_{101} = 25$, this equals $\\dfrac{625}{25^2} = \\dfrac{625}{625} = 1$.",
    solutionSteps: [
      "Given $\\dfrac{a(1 - r^{201})}{1 - r} = 625$.",
      "Reciprocal G.P. sum $= \\dfrac{625}{(a r^{100})^2}$.",
      "$a r^{100} = a_{101} = 25$.",
      "$625 / 625 = 1$.",
    ],
  },
  {
    id: "seq-nv-005",
    statement:
      "Suppose $a, b > 0$. The numbers $5a - b$, $2a + b$, $a + 2b$ are in arithmetic progression, and $(b + 1)^2$, $ab + 1$, $(a - 1)^2$ are in geometric progression. Find the value of $a^{-1} + b^{-1}$.",
    format: "numeric",
    answer: "6",
    topic: "sequences",
    subtopic: "Means & Inequalities",
    concepts: ["arithmetic mean condition", "geometric mean condition", "systems of equations"],
    difficulty: "hard",
    source: "original",
    skills: ["applying the middle-term A.P. condition", "applying the G.P. mean condition"],
    estMinutes: 6,
    tags: [TAG, "means"],
    hints: [
      "The A.P. condition gives $2(2a + b) = (5a - b) + (a + 2b)$, which simplifies to $b = 2a$.",
      "The G.P. condition is $(ab + 1)^2 = (b + 1)^2 (a - 1)^2$; substitute $b = 2a$ and keep the positive root.",
    ],
    solution:
      "The A.P. condition $2(2a + b) = (5a - b) + (a + 2b)$ reduces to $b = 2a$. The G.P. condition is $(ab + 1)^2 = (b + 1)^2 (a - 1)^2$. Substituting $b = 2a$ yields solutions $a = 0, -2, \\tfrac14$. Since $a > 0$, we take $a = \\tfrac14$ and $b = 2a = \\tfrac12$. Therefore $a^{-1} + b^{-1} = 4 + 2 = 6$.",
    solutionSteps: [
      "A.P. condition $\\Rightarrow b = 2a$.",
      "G.P. condition $(ab+1)^2 = (b+1)^2(a-1)^2$.",
      "Substitute $b = 2a$; positive root $a = \\tfrac14$, $b = \\tfrac12$.",
      "$a^{-1} + b^{-1} = 4 + 2 = 6$.",
    ],
  },
  {
    id: "seq-nv-006",
    statement:
      "Two infinite series of positive numbers, $a + ar_1 + ar_1^2 + \\cdots$ and $a + ar_2 + ar_2^2 + \\cdots$, share the same first term $a$. The first series sums to $r_1$ and the second sums to $r_2$. Find $r_1 + r_2$.",
    format: "numeric",
    answer: "1",
    topic: "sequences",
    subtopic: "Geometric Progression",
    concepts: ["infinite geometric series", "sum to infinity", "sum of roots"],
    difficulty: "medium",
    source: "original",
    skills: ["using the infinite G.P. sum", "recognising a shared quadratic"],
    estMinutes: 4,
    tags: [TAG, "gp"],
    hints: [
      "The infinite sum $\\dfrac{a}{1 - r}$ equals the ratio itself for each series.",
      "Both $r_1$ and $r_2$ satisfy the same equation $\\dfrac{a}{1 - r} = r$.",
    ],
    solution:
      "For each series the sum to infinity equals its own ratio: $\\dfrac{a}{1 - r_1} = r_1$ and $\\dfrac{a}{1 - r_2} = r_2$. Thus $r_1$ and $r_2$ are the two roots of $\\dfrac{a}{1 - r} = r$, i.e. $r^2 - r + a = 0$. By Vieta's formula the sum of the roots is $r_1 + r_2 = 1$.",
    solutionSteps: [
      "Each series: $\\dfrac{a}{1 - r} = r$.",
      "This gives $r^2 - r + a = 0$.",
      "Sum of roots $r_1 + r_2 = 1$.",
    ],
  },
  {
    id: "seq-nv-007",
    statement:
      "The equation $x^3 + ax^2 + bx + 216 = 0$ has three real roots that are in geometric progression. Determine the value of $b/a$.",
    format: "numeric",
    answer: "6",
    topic: "sequences",
    subtopic: "Geometric Progression",
    concepts: ["roots in G.P.", "Vieta's formulas", "symmetric functions"],
    difficulty: "hard",
    source: "original",
    skills: ["parametrising G.P. roots", "using Vieta's relations"],
    estMinutes: 6,
    tags: [TAG, "gp"],
    hints: [
      "Write the roots as $\\dfrac{\\alpha}{r}, \\alpha, \\alpha r$ so their product is $\\alpha^3$.",
      "Form the sum and pairwise-sum from Vieta, then divide to isolate $\\alpha = -b/a$.",
    ],
    solution:
      "Let the roots be $\\dfrac{\\alpha}{r}, \\alpha, \\alpha r$. Their product is $\\alpha^3 = -216$. The sum of pairwise products is $\\alpha^2\\left(1 + r + \\dfrac{1}{r}\\right) = b$, and the sum of roots is $\\alpha\\left(1 + r + \\dfrac{1}{r}\\right) = -a$. Dividing these gives $\\alpha = -\\dfrac{b}{a}$, so $\\alpha^3 = -\\dfrac{b^3}{a^3}$. Combined with $\\alpha^3 = -216$, we get $\\left(\\dfrac{b}{a}\\right)^3 = 216$, hence $\\dfrac{b}{a} = 6$.",
    solutionSteps: [
      "Roots $\\dfrac{\\alpha}{r}, \\alpha, \\alpha r$; product $\\alpha^3 = -216$.",
      "$b = \\alpha^2(1 + r + 1/r)$, $-a = \\alpha(1 + r + 1/r)$.",
      "Divide: $\\alpha = -b/a$, so $(b/a)^3 = 216$.",
      "$b/a = 6$.",
    ],
  },
  {
    id: "seq-nv-008",
    statement:
      "Consider the geometric sequence $16, 4, 1, \\ldots$ Let $P_n$ denote the product of its first $n$ terms. Evaluate $\\sum_{n=1}^{\\infty} \\sqrt[n]{P_n}$.",
    format: "numeric",
    answer: "32",
    topic: "sequences",
    subtopic: "Sigma & Telescoping",
    concepts: ["product of G.P. terms", "geometric series summation", "nth root simplification"],
    difficulty: "hard",
    source: "original",
    skills: ["computing a G.P. product", "summing an infinite geometric series"],
    estMinutes: 6,
    tags: [TAG, "gp"],
    hints: [
      "For a G.P., $P_n = a^n r^{n(n-1)/2}$, so $\\sqrt[n]{P_n} = a\\, r^{(n-1)/2}$.",
      "The resulting series is geometric with ratio $\\sqrt{r}$; here $a = 16$, $r = \\tfrac14$.",
    ],
    solution:
      "For the G.P. $a, ar, ar^2, \\ldots$ the product of the first $n$ terms is $P_n = a^n r^{n(n-1)/2}$, so $\\sqrt[n]{P_n} = a\\, r^{(n-1)/2}$. Therefore $\\sum_{n=1}^{\\infty} \\sqrt[n]{P_n} = a\\left(1 + \\sqrt{r} + r + r\\sqrt{r} + \\cdots\\right) = \\dfrac{a}{1 - \\sqrt{r}}$. With $a = 16$ and $r = \\tfrac14$, this is $\\dfrac{16}{1 - \\tfrac12} = 32$.",
    solutionSteps: [
      "$P_n = a^n r^{n(n-1)/2}$, so $\\sqrt[n]{P_n} = a r^{(n-1)/2}$.",
      "Sum $= \\dfrac{a}{1 - \\sqrt{r}}$.",
      "With $a = 16$, $r = 1/4$: $\\dfrac{16}{1 - 1/2} = 32$.",
    ],
  },
  {
    id: "seq-nv-009",
    statement:
      "Three numbers $a_1, a_2, a_3$ are in arithmetic progression and add up to $18$. The numbers $a_1 + 1$, $a_2$, $a_3 + 2$ (in this order) are in geometric progression. Find the sum of all possible values of the common difference of the A.P.",
    format: "numeric",
    answer: "-1",
    topic: "sequences",
    subtopic: "Arithmetic Progression",
    concepts: ["arithmetic progression", "geometric mean condition", "sum of roots"],
    difficulty: "hard",
    source: "original",
    skills: ["parametrising an A.P. symmetrically", "solving a quadratic in the common difference"],
    estMinutes: 5,
    tags: [TAG, "ap"],
    hints: [
      "Write the A.P. as $6 - d, 6, 6 + d$ using the fact that its sum is $18$.",
      "Apply the G.P. condition $6^2 = (7 - d)(8 + d)$ and use Vieta on the resulting quadratic in $d$.",
    ],
    solution:
      "Let the A.P. be $6 - d, 6, 6 + d$, since the three terms sum to $18$ and the middle term is the average. The transformed numbers are $7 - d, 6, 8 + d$, and being in G.P. they satisfy $6^2 = (7 - d)(8 + d)$. Expanding, $36 = 56 - d - d^2$, i.e. $d^2 + d - 20 = 0$. By Vieta the sum of its roots is $-1$, so the sum of all possible common differences is $-1$.",
    solutionSteps: [
      "A.P. sum $18 \\Rightarrow$ terms $6 - d, 6, 6 + d$.",
      "G.P. condition: $36 = (7 - d)(8 + d)$.",
      "$d^2 + d - 20 = 0$; sum of roots $= -1$.",
    ],
  },
  {
    id: "seq-nv-010",
    statement:
      "A geometric progression with real terms has its first three terms summing to $\\dfrac{13}{12}$ and their product equal to $-1$. If $S$ is the absolute value of the sum of the infinite progression, find $7S$.",
    format: "numeric",
    answer: "4",
    topic: "sequences",
    subtopic: "Geometric Progression",
    concepts: ["geometric progression", "infinite sum", "convergence condition"],
    difficulty: "hard",
    source: "original",
    skills: ["parametrising three G.P. terms", "selecting the convergent ratio"],
    estMinutes: 6,
    tags: [TAG, "gp"],
    hints: [
      "Write the three terms as $\\dfrac{a}{r}, a, ar$; the product gives $a^3 = -1$.",
      "Only the ratio with $|r| < 1$ yields a convergent infinite sum.",
    ],
    solution:
      "Take the three terms as $\\dfrac{a}{r}, a, ar$. Their product is $a^3 = -1$, so $a = -1$. The sum condition $\\dfrac{a}{r} + a + ar = \\dfrac{13}{12}$ becomes $\\dfrac{-1}{r} - 1 - r = \\dfrac{13}{12}$, giving $12r^2 + 25r + 12 = 0$, i.e. $(3r + 4)(4r + 3) = 0$, so $r = -\\dfrac43$ or $r = -\\dfrac34$. For a convergent infinite sum we need $|r| < 1$, so $r = -\\dfrac34$. Then $S = \\left|\\dfrac{a}{1 - r}\\right| = \\left|\\dfrac{-1}{1 + \\tfrac34}\\right| = \\dfrac{4}{7}$, and $7S = 4$.",
    solutionSteps: [
      "Terms $\\dfrac{a}{r}, a, ar$; product $a^3 = -1 \\Rightarrow a = -1$.",
      "Sum $\\Rightarrow 12r^2 + 25r + 12 = 0 \\Rightarrow r = -\\tfrac43, -\\tfrac34$.",
      "Convergence needs $|r| < 1$: $r = -\\tfrac34$.",
      "$S = \\dfrac{4}{7}$, so $7S = 4$.",
    ],
  },
  {
    id: "seq-nv-011",
    statement:
      "An arithmetic progression has first term $1$ and the sum of its first nine terms is $369$. A geometric progression shares its first and ninth terms with this A.P. Find the seventh term of the geometric progression.",
    format: "numeric",
    answer: "27",
    topic: "sequences",
    subtopic: "Geometric Progression",
    concepts: ["arithmetic sum formula", "matching endpoints", "geometric term"],
    difficulty: "hard",
    source: "original",
    skills: ["using the A.P. sum formula", "finding a G.P. ratio from its ninth term"],
    estMinutes: 5,
    tags: [TAG, "gp"],
    hints: [
      "Use $S_9 = \\dfrac{9}{2}[2 + 8d] = 369$ to find $d$, then get the ninth A.P. term.",
      "For the G.P., $r^8$ equals the ninth term (first term is $1$); the seventh term is $r^6$.",
    ],
    solution:
      "The A.P. sum gives $369 = \\dfrac{9}{2}[2 + 8d]$, so $82 = 2 + 8d$ and $d = 10$. Its ninth term is $1 + 8(10) = 81$. The G.P. has first term $1$, so $r^8 = 81$, giving $r = \\sqrt{3}$. The seventh term of the G.P. is $r^6 = (\\sqrt{3})^6 = 27$.",
    solutionSteps: [
      "$369 = \\dfrac{9}{2}(2 + 8d) \\Rightarrow d = 10$.",
      "Ninth A.P. term $= 81$, so $r^8 = 81 \\Rightarrow r = \\sqrt{3}$.",
      "Seventh G.P. term $= r^6 = 27$.",
    ],
  },
  {
    id: "seq-nv-012",
    statement:
      "A ball is dropped from the top of an $80$ m building, and after each bounce it rebounds to $x\\%$ of its previous height. If the total distance travelled by the ball is $320$ m, find $x$.",
    format: "numeric",
    answer: "60",
    topic: "sequences",
    subtopic: "Geometric Progression",
    concepts: ["infinite geometric series", "bouncing-ball model", "total path length"],
    difficulty: "hard",
    source: "original",
    skills: ["modelling total distance as a series", "summing an infinite G.P."],
    estMinutes: 6,
    tags: [TAG, "gp"],
    hints: [
      "Total distance $= 80 + 2\\left(\\dfrac{80x}{100} + \\dfrac{80x^2}{100^2} + \\cdots\\right)$ (each rebound is travelled up and down).",
      "Sum the geometric series and solve for $x$.",
    ],
    solution:
      "The initial drop contributes $80$ m. Each rebound to $x\\%$ of the previous height is travelled twice (up then down), so the total distance is $320 = 80 + 2\\left(\\dfrac{80x}{100} + \\dfrac{80x^2}{100^2} + \\cdots\\right)$. Dividing by $80$: $4 = 1 + 2\\left(\\dfrac{x/100}{1 - x/100}\\right)$, so $3 = \\dfrac{2x}{100 - x}$. Then $3(100 - x) = 2x$, giving $300 = 5x$ and $x = 60$.",
    solutionSteps: [
      "$320 = 80 + 2\\left(\\dfrac{80x}{100} + \\dfrac{80x^2}{100^2} + \\cdots\\right)$.",
      "Simplify to $3 = \\dfrac{2x}{100 - x}$.",
      "Solve: $x = 60$.",
    ],
  },
  {
    id: "seq-nv-013",
    statement:
      "Find the units digit of the integer $\\dfrac{10^{2013} - 1}{10^{33} - 1}$.",
    format: "numeric",
    answer: "1",
    topic: "sequences",
    subtopic: "Sigma & Telescoping",
    concepts: ["geometric series factorisation", "repunit-type expansion", "units digit"],
    difficulty: "hard",
    source: "original",
    skills: ["recognising a finite geometric sum", "reading off the units digit"],
    estMinutes: 4,
    tags: [TAG, "gp"],
    hints: [
      "Note that $2013 = 33 \\times 61$, so the expression is $\\dfrac{(10^{33})^{61} - 1}{10^{33} - 1}$.",
      "That quotient is a geometric sum; find which term controls the units digit.",
    ],
    solution:
      "Since $2013 = 33 \\times 61$, we have $\\dfrac{10^{2013} - 1}{10^{33} - 1} = \\dfrac{(10^{33})^{61} - 1}{10^{33} - 1} = (10^{33})^{60} + (10^{33})^{59} + \\cdots + 10^{33} + 1$. Every term except the final $1$ ends in a string of zeros, so the units digit of the whole sum is $1$.",
    solutionSteps: [
      "Write as $\\dfrac{(10^{33})^{61} - 1}{10^{33} - 1}$.",
      "Expand as $\\sum_{k=0}^{60} (10^{33})^k$.",
      "Only the constant term $1$ affects the units digit: answer $1$.",
    ],
  },
  {
    id: "seq-nv-014",
    statement:
      "How many ordered pairs of positive integers $(a, b)$ are there such that $6, a, b$ are in harmonic progression?",
    format: "numeric",
    answer: "7",
    topic: "sequences",
    subtopic: "Harmonic Progression",
    concepts: ["harmonic progression", "reciprocal A.P.", "integer solutions"],
    difficulty: "hard",
    source: "original",
    skills: ["converting H.P. to A.P. of reciprocals", "enumerating positive-integer solutions"],
    estMinutes: 6,
    tags: [TAG, "hp"],
    hints: [
      "If $6, a, b$ are in H.P., then $\\dfrac16, \\dfrac1a, \\dfrac1b$ are in A.P.",
      "Solve for $b = \\dfrac{6a}{12 - a}$ and test which positive integers $a$ give a positive integer $b$.",
    ],
    solution:
      "Since $6, a, b$ are in H.P., the reciprocals $\\dfrac16, \\dfrac1a, \\dfrac1b$ are in A.P., so $\\dfrac{2}{a} = \\dfrac16 + \\dfrac1b$. Solving, $\\dfrac1b = \\dfrac{2}{a} - \\dfrac16 = \\dfrac{12 - a}{6a}$, hence $b = \\dfrac{6a}{12 - a}$. We need $b$ a positive integer, which requires $0 < a < 12$ and $12 - a$ to divide $6a$. Checking, the valid values are $a \\in \\{3, 4, 6, 8, 9, 10, 11\\}$, giving seven ordered pairs.",
    solutionSteps: [
      "H.P. $\\Rightarrow \\dfrac16, \\dfrac1a, \\dfrac1b$ in A.P.",
      "Solve for $b = \\dfrac{6a}{12 - a}$.",
      "Positive-integer $b$ occurs for $a \\in \\{3,4,6,8,9,10,11\\}$: seven pairs.",
    ],
  },
];
