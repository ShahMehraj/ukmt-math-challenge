import type { Problem } from "@/lib/types";

/**
 * Linked-comprehension practice problems (chunk A, source #1-#15) for the
 * "Sequences & Series" chapter of the Cengage companion.
 *
 * These are ORIGINAL questions reworded in the app's own voice; the underlying
 * mathematics (numbers, expressions, structure) is preserved exactly from the
 * source exercise bank. Each problem folds the relevant shared-passage setup
 * into its own statement so it stands alone in the problem bank.
 */

const TAG = "cengage-seq";

export const seqLinkedA: Problem[] = [
  // ═══════════════ Passage: sum of consecutive odd integers = 57² − 13² (#1–#3) ═══════════════
  {
    id: "seq-lc-001",
    statement:
      "A run of consecutive odd positive integers has total $57^2 - 13^2$. How many integers are in the run?",
    format: "mcq",
    options: [
      { label: "A", text: "$40$" },
      { label: "B", text: "$37$" },
      { label: "C", text: "$44$" },
      { label: "D", text: "$51$" },
    ],
    answer: "C",
    topic: "sequences",
    subtopic: "Arithmetic Progression",
    concepts: ["sum of an A.P.", "consecutive odd integers", "difference of squares"],
    difficulty: "medium",
    source: "original",
    skills: ["setting up an A.P. sum", "factoring a difference of squares"],
    estMinutes: 4,
    tags: [TAG, "ap-sum"],
    hints: [
      "Write the odd integers as $2m+1, 2m+3, \\ldots$ with $n$ of them and use the A.P. sum formula.",
      "The sum simplifies to $(n+m)^2 - m^2$; match it against $57^2 - 13^2$.",
    ],
    solution:
      "Let the $n$ odd integers start at $2m+1$. Their sum is $\\dfrac{n}{2}\\big[2(2m+1) + (n-1)\\cdot 2\\big] = n(2m+n) = (n+m)^2 - m^2$. Setting this equal to $57^2 - 13^2$ gives $m = 13$ and $n + m = 57$, so $n = 57 - 13 = 44$.",
    solutionSteps: [
      "Sum of $n$ odd integers from $2m+1$: $n(2m+n) = (n+m)^2 - m^2$.",
      "Match with $57^2 - 13^2$: $m = 13$, $n + m = 57$.",
      "So $n = 44$.",
    ],
  },
  {
    id: "seq-lc-002",
    statement:
      "A run of consecutive odd positive integers has total $57^2 - 13^2$. What is the smallest integer in the run?",
    format: "mcq",
    options: [
      { label: "A", text: "$22$" },
      { label: "B", text: "$27$" },
      { label: "C", text: "$31$" },
      { label: "D", text: "$43$" },
    ],
    answer: "B",
    topic: "sequences",
    subtopic: "Arithmetic Progression",
    concepts: ["sum of an A.P.", "consecutive odd integers"],
    difficulty: "medium",
    source: "original",
    skills: ["recovering the first term of an A.P."],
    estMinutes: 3,
    tags: [TAG, "ap-sum"],
    hints: [
      "First find how many integers there are and the parameter $m$.",
      "The smallest integer is $2m+1$.",
    ],
    solution:
      "Writing the sum as $(n+m)^2 - m^2 = 57^2 - 13^2$ gives $m = 13$ and $n = 44$. The first (least) odd integer is $2m + 1 = 2(13) + 1 = 27$.",
    solutionSteps: [
      "From the sum, $m = 13$ and $n = 44$.",
      "Least integer $= 2m + 1 = 27$.",
    ],
  },
  {
    id: "seq-lc-003",
    statement:
      "A run of consecutive odd positive integers has total $57^2 - 13^2$. The greatest integer in the run is:",
    format: "mcq",
    options: [
      { label: "A", text: "divisible by $7$" },
      { label: "B", text: "divisible by $11$" },
      { label: "C", text: "divisible by $9$" },
      { label: "D", text: "none of these" },
    ],
    answer: "D",
    topic: "sequences",
    subtopic: "Arithmetic Progression",
    concepts: ["sum of an A.P.", "last term of an A.P.", "divisibility"],
    difficulty: "medium",
    source: "original",
    skills: ["finding the last term of an A.P.", "checking divisibility"],
    estMinutes: 3,
    tags: [TAG, "ap-sum"],
    hints: [
      "The integers run $27, 29, 31, \\ldots$ with $44$ of them.",
      "The last term is $27 + (44-1)\\cdot 2 = 113$; test its divisibility.",
    ],
    solution:
      "With $m = 13$, $n = 44$, the integers are $27, 29, 31, \\ldots, 113$. The greatest is $113$. Since $113$ is prime, it is not divisible by $7$, $11$, or $9$, so the answer is none of these.",
    solutionSteps: [
      "First term $27$, count $44$, so last term $= 27 + 86 = 113$.",
      "$113$ is prime, hence divisible by none of $7, 9, 11$.",
    ],
  },

  // ═══════════════ Passage: distinct reals a,b,c in G.P., a²+b²+c²=t², a+b+c=αt (#4–#6) ═══════════════
  {
    id: "seq-lc-004",
    statement:
      "Three distinct real numbers $a, b, c$ form a geometric progression with $a^2 + b^2 + c^2 = t^2$ and $a + b + c = \\alpha t$. Let $S$ denote the sum of the common ratio and its reciprocal. The complete set of possible values of $\\alpha^2$ is:",
    format: "mcq",
    options: [
      { label: "A", text: "$\\left(\\dfrac{1}{3}, 3\\right)$" },
      { label: "B", text: "$\\left[\\dfrac{1}{3}, 3\\right]$" },
      { label: "C", text: "$\\left(\\dfrac{1}{3}, 3\\right) - \\{1\\}$" },
      { label: "D", text: "$\\left(-\\infty, \\dfrac{1}{3}\\right) \\cup (3, \\infty)$" },
    ],
    answer: "C",
    topic: "sequences",
    subtopic: "Geometric Progression",
    concepts: ["geometric progression", "range of a rational function", "discriminant condition"],
    difficulty: "hard",
    source: "original",
    skills: ["parametrizing a G.P.", "range via discriminant"],
    estMinutes: 6,
    tags: [TAG, "gp", "range"],
    hints: [
      "Write $a, ar, ar^2$ and form $\\dfrac{1}{\\alpha^2} = \\dfrac{a^2 + a^2r^2 + a^2r^4}{(a + ar + ar^2)^2}$.",
      "This gives $\\alpha^2 = \\dfrac{r^2 + r + 1}{r^2 - r + 1}$; require real $r \\neq 0, \\pm 1$.",
    ],
    solution:
      "Take $a, ar, ar^2$. Then $\\dfrac{1}{\\alpha^2} = \\dfrac{a^2(1 + r^2 + r^4)}{a^2(1 + r + r^2)^2}$, giving $\\alpha^2 = \\dfrac{r^2 + r + 1}{r^2 - r + 1}$. Put $y = \\alpha^2$: $(y-1)r^2 - r(y+1) + (y-1) = 0$. For real $r$, $(y+1)^2 - 4(y-1)^2 \\ge 0$, which yields $\\dfrac{1}{3} \\le y \\le 3$. Since $a, b, c$ are distinct, $r \\neq 0, \\pm 1$, excluding $y = \\tfrac13, 1, 3$. Hence $\\alpha^2 \\in \\left(\\dfrac{1}{3}, 3\\right) - \\{1\\}$.",
    solutionSteps: [
      "$\\alpha^2 = \\dfrac{r^2 + r + 1}{r^2 - r + 1}$.",
      "Real-$r$ discriminant condition gives $\\tfrac13 \\le \\alpha^2 \\le 3$.",
      "Distinctness ($r \\neq 0, \\pm1$) removes endpoints and $1$.",
    ],
  },
  {
    id: "seq-lc-005",
    statement:
      "Three distinct real numbers $a, b, c$ form a geometric progression with common ratio $r$. Let $S = r + \\dfrac{1}{r}$. The complete set of possible values of $S$ is:",
    format: "mcq",
    options: [
      { label: "A", text: "$(-2, 2)$" },
      { label: "B", text: "$(-\\infty, -2) \\cup (2, \\infty)$" },
      { label: "C", text: "$(-1, 1)$" },
      { label: "D", text: "$(-\\infty, -1) \\cup (1, \\infty)$" },
    ],
    answer: "B",
    topic: "sequences",
    subtopic: "Means & Inequalities",
    concepts: ["AM-GM", "range of $r + 1/r$"],
    difficulty: "medium",
    source: "original",
    skills: ["bounding $x + 1/x$"],
    estMinutes: 3,
    tags: [TAG, "gp", "am-gm"],
    hints: [
      "For real nonzero $r$, what values can $r + \\dfrac{1}{r}$ take?",
      "$|r + 1/r| \\ge 2$, with equality only at $r = \\pm 1$, which is excluded.",
    ],
    solution:
      "For real $r \\neq 0$, $r + \\dfrac{1}{r} \\ge 2$ when $r > 0$ and $r + \\dfrac{1}{r} \\le -2$ when $r < 0$, with equality only at $r = \\pm 1$. Distinctness forces $r \\neq \\pm 1$, so the values $\\pm 2$ are not attained. Hence $S \\in (-\\infty, -2) \\cup (2, \\infty)$.",
    solutionSteps: [
      "$|r + 1/r| \\ge 2$ for real $r \\neq 0$.",
      "Equality at $r = \\pm 1$ is excluded by distinctness.",
      "So $S \\in (-\\infty, -2) \\cup (2, \\infty)$.",
    ],
  },
  {
    id: "seq-lc-006",
    statement:
      "Three distinct real numbers $a, b, c$ form a geometric progression with $a^2 + b^2 + c^2 = t^2$ and $a + b + c = \\alpha t$. If $a, b, c$ can also serve as the three sides of a triangle, the complete set of possible values of $\\alpha^2$ is:",
    format: "mcq",
    options: [
      { label: "A", text: "$\\left(\\dfrac{1}{3}, 3\\right)$" },
      { label: "B", text: "$(2, 3)$" },
      { label: "C", text: "$\\left[\\dfrac{1}{3}, 2\\right]$" },
      { label: "D", text: "$\\left(\\dfrac{\\sqrt{5}+3}{2}, 3\\right)$" },
    ],
    answer: "D",
    topic: "sequences",
    subtopic: "Geometric Progression",
    concepts: ["geometric progression", "triangle inequality", "range of a function"],
    difficulty: "olympiad",
    source: "original",
    skills: ["applying the triangle inequality to a G.P.", "range analysis"],
    estMinutes: 7,
    tags: [TAG, "gp", "triangle-inequality"],
    hints: [
      "Set $b = ar$, $c = ar^2$ with $r > 0$; the triangle inequalities restrict $r$.",
      "The triangle condition gives $r \\in \\left(\\dfrac{\\sqrt5 - 1}{2}, \\dfrac{\\sqrt5 + 1}{2}\\right) - \\{1\\}$; substitute into $\\alpha^2 = 1 + \\dfrac{2}{r + 1/r - 1}$.",
    ],
    solution:
      "With $b = ar$, $c = ar^2$, $r > 0$, the triangle inequalities give $r \\in \\left(\\dfrac{\\sqrt{5}-1}{2}, \\dfrac{\\sqrt{5}+1}{2}\\right) - \\{1\\}$, so $r + \\dfrac{1}{r} - 1 \\in (1, \\sqrt{5} - 1)$. Since $\\alpha^2 = \\dfrac{r^2 + r + 1}{r^2 - r + 1} = 1 + \\dfrac{2}{r + \\tfrac1r - 1}$, this maps to $\\alpha^2 \\in \\left(\\dfrac{\\sqrt{5}+3}{2}, 3\\right)$.",
    solutionSteps: [
      "Triangle inequalities restrict $r \\in \\left(\\dfrac{\\sqrt5 - 1}{2}, \\dfrac{\\sqrt5 + 1}{2}\\right) - \\{1\\}$.",
      "Then $r + \\tfrac1r - 1 \\in (1, \\sqrt5 - 1)$.",
      "$\\alpha^2 = 1 + \\dfrac{2}{r + 1/r - 1} \\in \\left(\\dfrac{\\sqrt5 + 3}{2}, 3\\right)$.",
    ],
  },

  // ═══════════════ Passage: G.P. with a₁+aₙ=66, a₂·aₙ₋₁=128, Sₙ=126 (#7–#9) ═══════════════
  {
    id: "seq-lc-007",
    statement:
      "In a geometric progression the sum of the first and last terms is $66$, the product of the second and second-to-last terms is $128$, and the sum of all the terms is $126$. If the progression is increasing, how many terms does it have?",
    format: "mcq",
    options: [
      { label: "A", text: "$9$" },
      { label: "B", text: "$8$" },
      { label: "C", text: "$12$" },
      { label: "D", text: "$6$" },
    ],
    answer: "D",
    topic: "sequences",
    subtopic: "Geometric Progression",
    concepts: ["geometric progression", "sum of a G.P.", "product of equidistant terms"],
    difficulty: "hard",
    source: "original",
    skills: ["using $a_2 a_{n-1} = a_1 a_n$", "solving for a G.P."],
    estMinutes: 6,
    tags: [TAG, "gp", "gp-sum"],
    hints: [
      "Note $a_2 \\cdot a_{n-1} = a_1 \\cdot a_n = 128$; combine with $a_1 + a_n = 66$.",
      "Solve for $a$ and $r$, then use $S_n = 126$ to find $n$.",
    ],
    solution:
      "Let the first term be $a$, ratio $r$, count $n$. Then $a + ar^{n-1} = 66$ and $a^2 r^{n-1} = 128$, i.e. $a(ar^{n-1}) = 128$, so $ar^{n-1} = 128/a$. Substituting, $a + 128/a = 66$, giving $a^2 - 66a + 128 = 0$, so $a = 2$ or $a = 64$. For an increasing G.P. ($r > 1$) take $a = 2$, giving $r^{n-1} = 32$. From $S_n = \\dfrac{a(r^n - 1)}{r - 1} = 126$: $\\dfrac{32r - 1}{r - 1} = 63$, so $r = 2$. Then $2^{n-1} = 32 = 2^5$, giving $n = 6$.",
    solutionSteps: [
      "$a + a r^{n-1} = 66$ and $a^2 r^{n-1} = 128 \\Rightarrow a^2 - 66a + 128 = 0$, so $a = 2$ or $64$.",
      "Increasing: $a = 2$, $r^{n-1} = 32$.",
      "$S_n = 126 \\Rightarrow r = 2 \\Rightarrow 2^{n-1} = 32 \\Rightarrow n = 6$.",
    ],
  },
  {
    id: "seq-lc-008",
    statement:
      "In a geometric progression the sum of the first and last terms is $66$, the product of the second and second-to-last terms is $128$, and the sum of all the terms is $126$. If instead the progression is decreasing, the sum of the infinitely many terms of the corresponding infinite G.P. (same first term and ratio) is:",
    format: "mcq",
    options: [
      { label: "A", text: "$64$" },
      { label: "B", text: "$128$" },
      { label: "C", text: "$256$" },
      { label: "D", text: "$729$" },
    ],
    answer: "B",
    topic: "sequences",
    subtopic: "Geometric Progression",
    concepts: ["geometric progression", "sum to infinity"],
    difficulty: "hard",
    source: "original",
    skills: ["identifying the decreasing case", "infinite G.P. sum"],
    estMinutes: 5,
    tags: [TAG, "gp", "infinite-gp"],
    hints: [
      "The two solutions for the first term are $2$ and $64$; the decreasing case uses $a = 64$.",
      "For the decreasing G.P., $r = 1/2$; use $S_\\infty = \\dfrac{a}{1 - r}$.",
    ],
    solution:
      "Solving $a^2 - 66a + 128 = 0$ gives $a = 2$ or $a = 64$. The decreasing G.P. corresponds to $a = 64$ with $r = \\dfrac{1}{2}$. Its sum to infinity is $\\dfrac{64}{1 - \\tfrac12} = 128$.",
    solutionSteps: [
      "Decreasing case: $a = 64$, $r = \\tfrac12$.",
      "$S_\\infty = \\dfrac{64}{1 - 1/2} = 128$.",
    ],
  },
  {
    id: "seq-lc-009",
    statement:
      "In a geometric progression the sum of the first and last terms is $66$, the product of the second and second-to-last terms is $128$, and the sum of all the terms is $126$. In either the increasing or decreasing case, the difference between the greatest and least terms is:",
    format: "mcq",
    options: [
      { label: "A", text: "$78$" },
      { label: "B", text: "$126$" },
      { label: "C", text: "$126$" },
      { label: "D", text: "none of these" },
    ],
    answer: "D",
    topic: "sequences",
    subtopic: "Geometric Progression",
    concepts: ["geometric progression", "range of terms"],
    difficulty: "medium",
    source: "original",
    skills: ["listing G.P. terms", "computing extreme-term difference"],
    estMinutes: 4,
    tags: [TAG, "gp"],
    hints: [
      "List the six terms in either case.",
      "The greatest term is $64$ and the least is $2$.",
    ],
    solution:
      "In both cases the terms are $2, 4, 8, 16, 32, 64$ (in one order for the increasing case, the reverse for the decreasing case). The greatest term is $64$ and the least is $2$, so their difference is $64 - 2 = 62$, which matches none of the listed options.",
    solutionSteps: [
      "Terms are $2, 4, 8, 16, 32, 64$.",
      "Greatest $-$ least $= 64 - 2 = 62$.",
      "$62$ is none of the listed values.",
    ],
  },

  // ═══════════════ Passage: four increasing-A.P. integers, one = sum of squares of other three (#10–#12) ═══════════════
  {
    id: "seq-lc-010",
    statement:
      "Four distinct integers form an increasing arithmetic progression, and one of them equals the sum of the squares of the other three. The product of all four numbers is:",
    format: "mcq",
    options: [
      { label: "A", text: "$-2$" },
      { label: "B", text: "$1$" },
      { label: "C", text: "$0$" },
      { label: "D", text: "$2$" },
    ],
    answer: "C",
    topic: "sequences",
    subtopic: "Arithmetic Progression",
    concepts: ["arithmetic progression", "integer solutions", "quadratic in the mean"],
    difficulty: "hard",
    source: "original",
    skills: ["parametrizing an A.P.", "bounding integer solutions"],
    estMinutes: 6,
    tags: [TAG, "ap", "integers"],
    hints: [
      "Write the four terms as $a - d, a, a + d, a + 2d$ with $d > 0$ and set the largest equal to the sum of the squares of the other three.",
      "Requiring integer $d$ forces $a = 0$, giving the numbers $-1, 0, 1, 2$.",
    ],
    solution:
      "Let the terms be $a - d, a, a + d, a + 2d$ with integers $a, d$ and $d > 0$. Setting $a + 2d = (a - d)^2 + a^2 + (a + d)^2$ gives $2d^2 - 2d + 3a^2 - a = 0$, so $d = \\tfrac12\\big[1 \\pm \\sqrt{1 + 2a - 6a^2}\\big]$. For $d$ real, $6a^2 - 2a - 1 < 0$, forcing the integer $a = 0$, whence $d = 1$. The numbers are $-1, 0, 1, 2$, and their product is $0$.",
    solutionSteps: [
      "Terms $a - d, a, a + d, a + 2d$; largest $=$ sum of squares of other three.",
      "$2d^2 - 2d + 3a^2 - a = 0$; integer condition forces $a = 0$, $d = 1$.",
      "Numbers $-1, 0, 1, 2$; product $= 0$.",
    ],
  },
  {
    id: "seq-lc-011",
    statement:
      "Four distinct integers form an increasing arithmetic progression, and one of them equals the sum of the squares of the other three. The sum of all four numbers is:",
    format: "mcq",
    options: [
      { label: "A", text: "$3$" },
      { label: "B", text: "$0$" },
      { label: "C", text: "$4$" },
      { label: "D", text: "$2$" },
    ],
    answer: "D",
    topic: "sequences",
    subtopic: "Arithmetic Progression",
    concepts: ["arithmetic progression", "integer solutions"],
    difficulty: "hard",
    source: "original",
    skills: ["summing A.P. terms"],
    estMinutes: 4,
    tags: [TAG, "ap", "integers"],
    hints: [
      "The four numbers are $-1, 0, 1, 2$.",
      "Add them.",
    ],
    solution:
      "As derived, the four numbers are $-1, 0, 1, 2$. Their sum is $-1 + 0 + 1 + 2 = 2$.",
    solutionSteps: [
      "Numbers $-1, 0, 1, 2$.",
      "Sum $= 2$.",
    ],
  },
  {
    id: "seq-lc-012",
    statement:
      "Four distinct integers form an increasing arithmetic progression, and one of them equals the sum of the squares of the other three. The common difference of the progression is:",
    format: "mcq",
    options: [
      { label: "A", text: "$1$" },
      { label: "B", text: "$3$" },
      { label: "C", text: "$2$" },
      { label: "D", text: "$-2$" },
    ],
    answer: "A",
    topic: "sequences",
    subtopic: "Arithmetic Progression",
    concepts: ["arithmetic progression", "common difference", "integer solutions"],
    difficulty: "hard",
    source: "original",
    skills: ["identifying the common difference"],
    estMinutes: 3,
    tags: [TAG, "ap", "integers"],
    hints: [
      "The four numbers are $-1, 0, 1, 2$.",
      "The common difference is the gap between consecutive terms.",
    ],
    solution:
      "The four numbers are $-1, 0, 1, 2$, which increase in steps of $1$. Hence the common difference is $1$.",
    solutionSteps: [
      "Numbers $-1, 0, 1, 2$.",
      "Common difference $= 1$.",
    ],
  },

  // ═══════════════ Passage: grouped sequence (1),(2,2),(3,3,3),... (#13–#15) ═══════════════
  {
    id: "seq-lc-013",
    statement:
      "A sequence is built in groups $(1), (2, 2), (3, 3, 3), (4, 4, 4, 4), (5, 5, 5, 5, 5), \\ldots$, where the $k$th group consists of $k$ copies of $k$. The $2000^{\\text{th}}$ term of this sequence is NOT divisible by:",
    format: "mcq",
    options: [
      { label: "A", text: "$3$" },
      { label: "B", text: "$9$" },
      { label: "C", text: "$7$" },
      { label: "D", text: "none of these" },
    ],
    answer: "D",
    topic: "sequences",
    subtopic: "Sigma & Telescoping",
    concepts: ["triangular numbers", "grouped sequence", "divisibility"],
    difficulty: "hard",
    source: "original",
    skills: ["locating a term via triangular-number bounds", "checking divisibility"],
    estMinutes: 5,
    tags: [TAG, "grouped-sequence", "triangular-numbers"],
    hints: [
      "The $2000^{\\text{th}}$ term lies in group $n$ where $\\dfrac{(n-1)n}{2} < 2000 \\le \\dfrac{n(n+1)}{2}$.",
      "Solving gives $n = 63$, so the term equals $63$; test its divisibility by $3, 9, 7$.",
    ],
    solution:
      "The $2000^{\\text{th}}$ term lies in the $n$th group where $\\dfrac{(n-1)n}{2} < 2000 \\le \\dfrac{n(n+1)}{2}$, i.e. $n(n-1) < 4000 \\le n(n+1)$. This gives $n = 63$, so the term is $63$. Now $63 = 9 \\times 7 = 3^2 \\cdot 7$, which is divisible by $3$, by $9$, and by $7$. Hence it is not divisible by none of them — the answer is none of these.",
    solutionSteps: [
      "$\\dfrac{(n-1)n}{2} < 2000 \\le \\dfrac{n(n+1)}{2} \\Rightarrow n = 63$.",
      "The $2000^{\\text{th}}$ term is $63 = 3^2 \\cdot 7$.",
      "It is divisible by $3, 9$ and $7$, so 'none of these' is correct.",
    ],
  },
  {
    id: "seq-lc-014",
    statement:
      "A sequence is built in groups $(1), (2, 2), (3, 3, 3), (4, 4, 4, 4), \\ldots$, where the $k$th group consists of $k$ copies of $k$. The sum of the first $2000$ terms is:",
    format: "mcq",
    options: [
      { label: "A", text: "$84336$" },
      { label: "B", text: "$96324$" },
      { label: "C", text: "$78466$" },
      { label: "D", text: "none of these" },
    ],
    answer: "A",
    topic: "sequences",
    subtopic: "Sigma & Telescoping",
    concepts: ["triangular numbers", "sum of squares", "grouped sequence"],
    difficulty: "hard",
    source: "original",
    skills: ["summing complete groups", "handling a partial final group"],
    estMinutes: 6,
    tags: [TAG, "grouped-sequence", "sum-of-squares"],
    hints: [
      "The $k$th group contributes $k \\cdot k = k^2$ to the total.",
      "Groups $1$ through $62$ are complete; the $2000^{\\text{th}}$ term is the $47^{\\text{th}}$ entry of group $63$.",
    ],
    solution:
      "Each complete $k$th group contributes $k^2$. The number of terms through group $62$ is $\\dfrac{62 \\cdot 63}{2} = 1953$, so the first $2000$ terms consist of groups $1$–$62$ complete plus $2000 - 1953 = 47$ copies of $63$. Thus the sum is $\\displaystyle\\sum_{k=1}^{62} k^2 + 63 \\cdot 47 = \\dfrac{62 \\cdot 63 \\cdot 125}{6} + 2961 = 81375 + 2961 = 84336$.",
    solutionSteps: [
      "Group $k$ contributes $k^2$; through group $62$ there are $1953$ terms.",
      "Remaining $47$ terms are all $63$.",
      "Sum $= \\sum_{k=1}^{62} k^2 + 63 \\cdot 47 = 81375 + 2961 = 84336$.",
    ],
  },
  {
    id: "seq-lc-015",
    statement:
      "A sequence is built in groups $(1), (2, 2), (3, 3, 3), (4, 4, 4, 4), \\ldots$, where the $k$th group consists of $k$ copies of $k$. The $2000^{\\text{th}}$ term lies inside one particular group. The sum of the terms of that group that come after the $2000^{\\text{th}}$ term is:",
    format: "mcq",
    options: [
      { label: "A", text: "$1088$" },
      { label: "B", text: "$1008$" },
      { label: "C", text: "$1040$" },
      { label: "D", text: "none of these" },
    ],
    answer: "B",
    topic: "sequences",
    subtopic: "Sigma & Telescoping",
    concepts: ["triangular numbers", "grouped sequence", "partial group sum"],
    difficulty: "hard",
    source: "original",
    skills: ["counting remaining entries in a group"],
    estMinutes: 4,
    tags: [TAG, "grouped-sequence"],
    hints: [
      "The $2000^{\\text{th}}$ term is the $47^{\\text{th}}$ entry of group $63$, which has $63$ entries.",
      "The remaining entries are $63 - 47 = 16$ copies of $63$.",
    ],
    solution:
      "The $2000^{\\text{th}}$ term is the $47^{\\text{th}}$ of the $63$ entries in group $63$. The entries following it are $63 - 47 = 16$ more copies of $63$, whose sum is $63 \\times 16 = 1008$.",
    solutionSteps: [
      "Group $63$ has $63$ entries; the $2000^{\\text{th}}$ is the $47^{\\text{th}}$.",
      "Remaining entries: $63 - 47 = 16$ copies of $63$.",
      "Sum $= 63 \\times 16 = 1008$.",
    ],
  },
];
