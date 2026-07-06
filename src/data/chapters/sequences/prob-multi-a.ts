import type { Problem } from "@/lib/types";

/**
 * Original multiple-correct practice problems (#1-#12) authored in the app's own
 * voice for the "Sequences & Series" chapter, patterned on the Cengage exercise
 * bank. Statements are reworded; the mathematics is preserved exactly. Because
 * the app has no multi-select UI, each is stored as format "text": all four
 * choices sit inside the statement, and `answer` lists the correct option
 * numbers as a comma list.
 */

const TAG = "cengage-seq";

export const seqMultiA: Problem[] = [
  {
    id: "seq-mc-001",
    statement:
      "For a strictly increasing arithmetic progression $a_1, a_2, \\ldots, a_n$ it is known that $a_1 + a_3 + a_5 = -12$ and $a_1 a_3 a_5 = 80$. Select every statement that must be true.\n\n(1) $a_1 = -10$\n(2) $a_2 = -1$\n(3) $a_3 = -4$\n(4) $a_5 = 2$",
    format: "text",
    answer: "1, 3, 4",
    acceptedAnswers: ["1,3,4", "(1),(3),(4)", "1 3 4"],
    topic: "sequences",
    subtopic: "Arithmetic Progression",
    concepts: ["symmetric terms of an AP", "sum and product conditions"],
    difficulty: "medium",
    source: "original",
    skills: ["setting up an AP with a middle term", "solving for common difference"],
    estMinutes: 4,
    tags: [TAG, "multiple-correct"],
    hints: [
      "The three terms $a_1, a_3, a_5$ are symmetric about $a_3$, so their sum gives $a_3$ directly.",
      "Use the product together with an increasing progression ($d > 0$) to pin down $d$.",
    ],
    solution:
      "Write $a_3 = a_1 + 2d$ and $a_5 = a_1 + 4d$. From $a_1 + a_3 + a_5 = 3(a_1 + 2d) = -12$ we get $a_1 + 2d = -4$, i.e. $a_3 = -4$. The product is $a_1 a_3 a_5 = (a_3 - 2d)\\,a_3\\,(a_3 + 2d) = a_3(a_3^2 - 4d^2) = -4(16 - 4d^2) = 80$, giving $16 - 4d^2 = -20$, so $d^2 = 9$ and $d = \\pm 3$. Since the progression increases, $d = 3$. Then $a_1 = a_3 - 2d = -4 - 6 = -10$, $a_2 = -7$, and $a_5 = a_3 + 2d = -4 + 6 = 2$. Hence (1), (3), (4) hold while (2) is false.",
    solutionSteps: [
      "From the sum, $3a_3 = -12$ so $a_3 = -4$.",
      "From the product, $a_3(a_3^2 - 4d^2) = 80 \\Rightarrow d^2 = 9$.",
      "Increasing AP forces $d = 3$, giving $a_1 = -10$, $a_2 = -7$, $a_5 = 2$.",
    ],
  },
  {
    id: "seq-mc-002",
    statement:
      "The sum of the first $n$ terms of an arithmetic progression is $S_n = a + bn + cn^2$, where $a, b, c$ do not depend on $n$. Select every correct conclusion.\n\n(1) $a = 0$\n(2) the common difference must equal $2b$\n(3) the common difference must equal $2c$\n(4) the first term equals $b + c$",
    format: "text",
    answer: "1, 3, 4",
    acceptedAnswers: ["1,3,4", "(1),(3),(4)", "1 3 4"],
    topic: "sequences",
    subtopic: "Arithmetic Progression",
    concepts: ["sum of an AP as a quadratic in n", "comparing coefficients"],
    difficulty: "medium",
    source: "original",
    skills: ["matching the AP sum formula to a polynomial", "recovering d and the first term"],
    estMinutes: 4,
    tags: [TAG, "multiple-correct"],
    hints: [
      "Expand $S_n = \\dfrac{n}{2}\\bigl[2a_1 + (n-1)d\\bigr]$ and collect powers of $n$.",
      "Match the constant, linear and quadratic coefficients against $a + bn + cn^2$.",
    ],
    solution:
      "Expanding, $S_n = \\dfrac{n}{2}\\bigl[2a_1 + (n-1)d\\bigr] = \\left(a_1 - \\dfrac{d}{2}\\right)n + \\dfrac{d}{2}\\,n^2$. Comparing with $a + bn + cn^2$: the constant term gives $a = 0$, the $n^2$ coefficient gives $c = \\dfrac{d}{2}$ so $d = 2c$, and the $n$ coefficient gives $b = a_1 - \\dfrac{d}{2} = a_1 - c$, hence the first term $a_1 = b + c$. Therefore (1), (3), (4) are correct; (2) is false since $d = 2c$, not $2b$.",
    solutionSteps: [
      "Write $S_n = (a_1 - d/2)n + (d/2)n^2$ and set it equal to $a + bn + cn^2$.",
      "Constant term: $a = 0$. Quadratic term: $c = d/2 \\Rightarrow d = 2c$.",
      "Linear term: $b = a_1 - c \\Rightarrow a_1 = b + c$.",
    ],
  },
  {
    id: "seq-mc-003",
    statement:
      "Let $a, b, c, d$ be four distinct positive numbers in arithmetic progression. Select every statement that must hold.\n\n(1) $\\dfrac{1}{a} + \\dfrac{1}{d} > \\dfrac{1}{b} + \\dfrac{1}{c}$\n(2) $\\dfrac{1}{a} + \\dfrac{1}{d} < \\dfrac{1}{b} + \\dfrac{1}{c}$\n(3) $\\dfrac{1}{b} + \\dfrac{1}{c} > \\dfrac{4}{a+d}$\n(4) $\\dfrac{1}{a} + \\dfrac{1}{d} = \\dfrac{1}{b} + \\dfrac{1}{c}$",
    format: "text",
    answer: "1, 3",
    acceptedAnswers: ["1,3", "(1),(3)", "1 3"],
    topic: "sequences",
    subtopic: "Means & Inequalities",
    concepts: ["AP terms", "comparing reciprocal sums", "AM-HM style inequalities"],
    difficulty: "hard",
    source: "original",
    skills: ["parametrising an AP", "comparing rational expressions"],
    estMinutes: 5,
    tags: [TAG, "multiple-correct"],
    hints: [
      "Put $b = a + p$, $c = a + 2p$, $d = a + 3p$ with $p > 0$.",
      "Form the ratio of the two reciprocal sums and simplify to compare with $1$; separately compare $\\left(\\tfrac1b + \\tfrac1c\\right)$ against $\\tfrac{4}{a+d}$.",
    ],
    solution:
      "Write $b = a + p$, $c = a + 2p$, $d = a + 3p$ with $p > 0$. Then\n$$\\dfrac{\\frac1a + \\frac1d}{\\frac1b + \\frac1c} = \\dfrac{(a+p)(a+2p)}{a(a+3p)} = \\dfrac{a^2 + 3ap + 2p^2}{a^2 + 3ap} > 1,$$\nso $\\dfrac{1}{a} + \\dfrac{1}{d} > \\dfrac{1}{b} + \\dfrac{1}{c}$, confirming (1) and ruling out (2) and (4). For (3), since $a + d = b + c = 2a + 3p$,\n$$\\left(\\dfrac{1}{b} + \\dfrac{1}{c}\\right)(a+d) = \\dfrac{(2a+3p)^2}{a^2 + 3ap + 2p^2} = 4 + \\dfrac{p^2}{a^2 + 3ap + 2p^2} > 4,$$\nhence $\\dfrac{1}{b} + \\dfrac{1}{c} > \\dfrac{4}{a+d}$. Thus (1) and (3) are correct.",
    solutionSteps: [
      "Set $b = a+p$, $c = a+2p$, $d = a+3p$ with $p > 0$.",
      "The ratio $\\frac{1/a + 1/d}{1/b + 1/c} = \\frac{a^2+3ap+2p^2}{a^2+3ap} > 1$, so (1) holds.",
      "$(1/b + 1/c)(a+d) = 4 + \\frac{p^2}{a^2+3ap+2p^2} > 4$, so (3) holds.",
    ],
  },
  {
    id: "seq-mc-004",
    statement:
      "For which of the following triples can all three numbers occur as terms (not necessarily consecutive) of some arithmetic progression? Select all that apply.\n\n(1) $1, 6, 19$\n(2) $\\sqrt{2}, \\sqrt{50}, \\sqrt{98}$\n(3) $\\log 2, \\log 16, \\log 128$\n(4) $\\sqrt{2}, \\sqrt{3}, \\sqrt{7}$",
    format: "text",
    answer: "1, 2, 3",
    acceptedAnswers: ["1,2,3", "(1),(2),(3)", "1 2 3"],
    topic: "sequences",
    subtopic: "Arithmetic Progression",
    concepts: ["terms of an AP", "rationality of index ratios"],
    difficulty: "hard",
    source: "original",
    skills: ["testing membership in an AP", "recognising rational ratios of differences"],
    estMinutes: 5,
    tags: [TAG, "multiple-correct"],
    hints: [
      "If three numbers are the $p$th, $q$th, $r$th terms of an AP, then $\\dfrac{r-q}{q-p} = \\dfrac{c-b}{b-a}$.",
      "That ratio must be rational, since $r - q$ and $q - p$ are integers.",
    ],
    solution:
      "If $a, b, c$ are the $p$th, $q$th, $r$th terms of an AP with common difference $D$, then $b - a = (q-p)D$ and $c - b = (r-q)D$, so $\\dfrac{c-b}{b-a} = \\dfrac{r-q}{q-p}$ must be rational. Testing each triple:\n(1) $\\dfrac{19-6}{6-1} = \\dfrac{13}{5}$ is rational.\n(2) $\\sqrt{50} = 5\\sqrt2$, $\\sqrt{98} = 7\\sqrt2$, so $\\dfrac{7\\sqrt2 - 5\\sqrt2}{5\\sqrt2 - \\sqrt2} = \\dfrac{2}{4} = \\dfrac{1}{2}$, rational.\n(3) $\\log 16 = 4\\log 2$, $\\log 128 = 7\\log 2$, so $\\dfrac{7\\log2 - 4\\log2}{4\\log2 - \\log2} = \\dfrac{3}{3} = 1$, rational.\n(4) $\\dfrac{\\sqrt7 - \\sqrt3}{\\sqrt3 - \\sqrt2}$ is irrational.\nHence (1), (2), (3) are possible.",
    solutionSteps: [
      "Membership in an AP requires $\\frac{c-b}{b-a}$ to be rational.",
      "(1) gives $13/5$, (2) gives $1/2$, (3) gives $1$ — all rational.",
      "(4) gives an irrational ratio, so it fails.",
    ],
  },
  {
    id: "seq-mc-005",
    statement:
      "An arithmetic progression has first term $\\alpha$ and common difference $\\beta$, with $\\alpha, \\beta \\neq 0$. The ratio $r$ of the sum of its first $n$ terms to the sum of the next $n$ terms is independent of $n$. Select every correct statement.\n\n(1) $\\alpha : \\beta = 2 : 1$\n(2) if $\\alpha, \\beta$ are the roots of $ax^2 + bx + c = 0$, then $2b^2 = 9ac$\n(3) the sum $1 + r + r^2 + \\cdots$ equals $\\dfrac{3}{2}$\n(4) if $\\alpha = 1$, the sum of the first $10$ terms of the AP is $100$",
    format: "text",
    answer: "2, 3, 4",
    acceptedAnswers: ["2,3,4", "(2),(3),(4)", "2 3 4"],
    topic: "sequences",
    subtopic: "Arithmetic Progression",
    concepts: ["ratio of block sums", "independence of n", "infinite GP", "Vieta relations"],
    difficulty: "hard",
    source: "original",
    skills: ["forcing a ratio to be constant in n", "chaining AP/GP results"],
    estMinutes: 6,
    tags: [TAG, "multiple-correct"],
    hints: [
      "Write $r = \\dfrac{S_n}{S_{2n} - S_n}$; independence of $n$ is equivalent to $\\dfrac{S_{2n}}{S_n}$ being independent of $n$.",
      "Force the $n$-dependence to cancel to find the relation between $\\alpha$ and $\\beta$.",
    ],
    solution:
      "The sum of the terms after the first $n$ is $S_{2n} - S_n$, so $r = \\dfrac{S_n}{S_{2n} - S_n} = \\dfrac{1}{\\frac{S_{2n}}{S_n} - 1}$; thus $r$ is constant iff $\\dfrac{S_{2n}}{S_n}$ is. Now\n$$\\dfrac{S_{2n}}{S_n} = \\dfrac{2\\bigl(2\\alpha - \\beta + 2n\\beta\\bigr)}{2\\alpha - \\beta + n\\beta}.$$\nThis is independent of $n$ only when $2\\alpha - \\beta = 0$, i.e. $\\alpha : \\beta = 1 : 2$ (so (1) is false). Then $\\dfrac{S_{2n}}{S_n} = 4$ and $r = \\dfrac{1}{4 - 1} = \\dfrac{1}{3}$.\nFor (2): the roots are $\\alpha$ and $\\beta = 2\\alpha$, so $\\alpha + 2\\alpha = -\\dfrac{b}{a}$ and $\\alpha\\cdot 2\\alpha = \\dfrac{c}{a}$; from $\\alpha = -\\dfrac{b}{3a}$, $2\\alpha^2 = \\dfrac{c}{a}$ gives $2b^2 = 9ac$ — true.\nFor (3): $1 + r + r^2 + \\cdots = \\dfrac{1}{1 - \\frac13} = \\dfrac{3}{2}$ — true.\nFor (4): with $\\alpha = 1$, $\\beta = 2$, the sum of $10$ terms is $\\dfrac{10}{2}\\bigl(2\\cdot 1 + 9\\cdot 2\\bigr) = 5\\cdot 20 = 100$ — true.\nHence (2), (3), (4) hold.",
    solutionSteps: [
      "$r$ constant $\\iff S_{2n}/S_n$ constant; this forces $2\\alpha - \\beta = 0$, so $\\alpha:\\beta = 1:2$ and $r = 1/3$.",
      "With roots $\\alpha, 2\\alpha$: Vieta gives $2b^2 = 9ac$.",
      "$\\sum r^k = \\frac{1}{1-1/3} = 3/2$, and for $\\alpha=1,\\beta=2$ the 10-term sum is $100$.",
    ],
  },
  {
    id: "seq-mc-006",
    statement:
      "If $a^2 + 2bc,\\; b^2 + 2ca,\\; c^2 + 2ab$ are in arithmetic progression, select every consequence that must follow.\n\n(1) $(a-b)(c-a),\\; (a-b)(b-c),\\; (b-c)(c-a)$ are in A.P.\n(2) $b - c,\\; c - a,\\; a - b$ are in H.P.\n(3) $a + b,\\; b + c,\\; c + a$ are in A.P.\n(4) $a^2, b^2, c^2$ are in H.P.",
    format: "text",
    answer: "1, 2",
    acceptedAnswers: ["1,2", "(1),(2)", "1 2"],
    topic: "sequences",
    subtopic: "Means & Inequalities",
    concepts: ["AP condition", "algebraic factoring", "AP to HP conversion"],
    difficulty: "hard",
    source: "original",
    skills: ["subtracting a common quantity to reshape an AP", "factoring symmetric expressions"],
    estMinutes: 6,
    tags: [TAG, "multiple-correct"],
    hints: [
      "Subtracting the same quantity $ab + bc + ca$ from each term keeps them in A.P.",
      "The resulting terms factor into products like $(c-a)(a-b)$; dividing by their common product turns an A.P. into an H.P.",
    ],
    solution:
      "Subtract $ab + bc + ca$ from each term (this preserves the A.P.): the terms become $ab + bc + ca - a^2 - 2bc$, etc. These factor as\n$$(c-a)(a-b),\\quad (a-b)(b-c),\\quad (b-c)(c-a),$$\nwhich are therefore in A.P. — statement (1) holds. Dividing each of these by the common product $(a-b)(b-c)(c-a)$ (still an A.P., since we divide by a constant) yields\n$$\\dfrac{1}{b-c},\\quad \\dfrac{1}{c-a},\\quad \\dfrac{1}{a-b}$$\nin A.P., which is exactly the statement that $b-c,\\; c-a,\\; a-b$ are in H.P. — statement (2) holds. Statements (3) and (4) do not follow in general. Hence (1) and (2).",
    solutionSteps: [
      "Subtract $ab+bc+ca$ from each term; the terms factor to $(c-a)(a-b),(a-b)(b-c),(b-c)(c-a)$, giving (1).",
      "Divide each by $(a-b)(b-c)(c-a)$ to get $\\frac{1}{b-c},\\frac{1}{c-a},\\frac{1}{a-b}$ in A.P.",
      "That is precisely $b-c, c-a, a-b$ in H.P., giving (2).",
    ],
  },
  {
    id: "seq-mc-007",
    statement:
      "The infinite geometric series $p,\\; 1,\\; \\dfrac{1}{p},\\; \\dfrac{1}{p^2},\\; \\ldots$ has sum $\\dfrac{9}{2}$. Select every possible value of $p$.\n\n(1) $2$\n(2) $\\dfrac{3}{2}$\n(3) $3$\n(4) $\\dfrac{9}{2}$",
    format: "text",
    answer: "2, 3",
    acceptedAnswers: ["2,3", "(2),(3)", "2 3"],
    topic: "sequences",
    subtopic: "Geometric Progression",
    concepts: ["infinite GP sum", "solving a quadratic"],
    difficulty: "medium",
    source: "original",
    skills: ["identifying first term and ratio", "applying the infinite GP formula"],
    estMinutes: 3,
    tags: [TAG, "multiple-correct"],
    hints: [
      "The first term is $p$ and the common ratio is $\\dfrac{1}{p}$.",
      "Set $\\dfrac{p}{1 - 1/p} = \\dfrac{9}{2}$ and clear denominators.",
    ],
    solution:
      "The series has first term $p$ and ratio $\\dfrac{1}{p}$, so its sum is $\\dfrac{p}{1 - \\frac{1}{p}} = \\dfrac{p^2}{p - 1} = \\dfrac{9}{2}$. This gives $2p^2 = 9(p-1)$, i.e. $2p^2 - 9p + 9 = 0$. Factoring, $(2p - 3)(p - 3) = 0$, so $p = \\dfrac{3}{2}$ or $p = 3$. Both exceed $1$ in modulus, so the series converges in each case. Hence (2) and (3).",
    solutionSteps: [
      "Sum $= \\frac{p}{1 - 1/p} = \\frac{p^2}{p-1} = \\frac{9}{2}$.",
      "$2p^2 - 9p + 9 = 0 \\Rightarrow (2p-3)(p-3) = 0$.",
      "$p = 3/2$ or $p = 3$, giving (2) and (3).",
    ],
  },
  {
    id: "seq-mc-008",
    statement:
      "An infinitely decreasing geometric progression with positive terms has common ratio $r$, first term $4$, and the difference between its third and fifth terms equal to $\\dfrac{32}{81}$. Select every correct statement.\n\n(1) $r = \\dfrac{1}{3}$\n(2) $r = \\dfrac{2\\sqrt{2}}{3}$\n(3) the sum of all its terms is $6$\n(4) none of these",
    format: "text",
    answer: "1, 2, 3",
    acceptedAnswers: ["1,2,3", "(1),(2),(3)", "1 2 3"],
    topic: "sequences",
    subtopic: "Geometric Progression",
    concepts: ["GP term difference", "biquadratic equation", "infinite GP sum"],
    difficulty: "hard",
    source: "original",
    skills: ["forming an equation in $r^2$", "factoring a quadratic in $r^2$"],
    estMinutes: 5,
    tags: [TAG, "multiple-correct"],
    hints: [
      "The third term is $ar^2$ and the fifth is $ar^4$; use $a = 4$.",
      "The equation is a quadratic in $r^2$; factor it.",
    ],
    solution:
      "With $a = 4$, the third and fifth terms are $4r^2$ and $4r^4$, so $4(r^2 - r^4) = \\dfrac{32}{81}$, giving $r^4 - r^2 + \\dfrac{8}{81} = 0$, i.e. $81r^4 - 81r^2 + 8 = 0$. Factoring, $(9r^2 - 8)(9r^2 - 1) = 0$, so $r^2 = \\dfrac{8}{9}$ or $r^2 = \\dfrac{1}{9}$. Since all terms are positive, $r = \\dfrac{2\\sqrt2}{3}$ or $r = \\dfrac{1}{3}$, confirming (1) and (2). For $r = \\dfrac{1}{3}$, $S_\\infty = \\dfrac{4}{1 - \\frac13} = 6$, confirming (3). Hence (1), (2), (3).",
    solutionSteps: [
      "$4r^2 - 4r^4 = 32/81 \\Rightarrow 81r^4 - 81r^2 + 8 = 0$.",
      "$(9r^2 - 8)(9r^2 - 1) = 0 \\Rightarrow r = \\frac{2\\sqrt2}{3}$ or $r = \\frac13$.",
      "For $r = 1/3$, $S_\\infty = 4/(1-1/3) = 6$.",
    ],
  },
  {
    id: "seq-mc-009",
    statement:
      "Let $a_1, a_2, a_3, \\ldots$ be a geometric progression with $3a_1 + 7a_2 + 3a_3 - 4a_5 = 0$. Select every possible value of the common ratio.\n\n(1) $2$\n(2) $\\dfrac{3}{2}$\n(3) $\\dfrac{5}{2}$\n(4) $-\\dfrac{1}{2}$",
    format: "text",
    answer: "2, 4",
    acceptedAnswers: ["2,4", "(2),(4)", "2 4"],
    topic: "sequences",
    subtopic: "Geometric Progression",
    concepts: ["GP terms in terms of ratio", "reducing to a quadratic in r"],
    difficulty: "medium",
    source: "original",
    skills: ["expressing GP terms via the ratio", "solving a quadratic"],
    estMinutes: 4,
    tags: [TAG, "multiple-correct"],
    hints: [
      "Write each $a_k = a_1 r^{k-1}$ and divide through by $a_1$.",
      "Group the equation so it becomes a perfect square in $r$.",
    ],
    solution:
      "Substituting $a_k = a_1 r^{k-1}$ and dividing by $a_1 \\neq 0$: $3 + 7r + 3r^2 - 4r^4 = 0$. Regrouping the original as $7(a_1 + a_2 + a_3) = 4(a_1 + a_3 + a_5)$ gives $7(1 + r + r^2) = 4(1 + r^2 + r^4)$. This simplifies to $7 = 4(r^2 - r + 1)$, so $4r^2 - 4r + 1 = 4$, i.e. $(2r - 1)^2 = 4$. Thus $2r - 1 = \\pm 2$, giving $r = \\dfrac{3}{2}$ or $r = -\\dfrac{1}{2}$. Hence (2) and (4).",
    solutionSteps: [
      "Rewrite as $7(a_1 + a_2 + a_3) = 4(a_1 + a_3 + a_5)$.",
      "In terms of $r$: $7(1 + r + r^2) = 4(1 + r^2 + r^4) \\Rightarrow (2r-1)^2 = 4$.",
      "$r = 3/2$ or $r = -1/2$.",
    ],
  },
  {
    id: "seq-mc-010",
    statement:
      "Suppose $p(x) = \\dfrac{1 + x^2 + x^4 + \\cdots + x^{2n-2}}{1 + x + x^2 + \\cdots + x^{n-1}}$ is a polynomial in $x$. Select every possible value of $n$.\n\n(1) $5$\n(2) $10$\n(3) $20$\n(4) $17$",
    format: "text",
    answer: "1, 4",
    acceptedAnswers: ["1,4", "(1),(4)", "1 4"],
    topic: "sequences",
    subtopic: "Geometric Progression",
    concepts: ["geometric series as a ratio", "polynomial divisibility", "parity"],
    difficulty: "hard",
    source: "original",
    skills: ["summing finite geometric series", "reducing a rational function to lowest terms"],
    estMinutes: 5,
    tags: [TAG, "multiple-correct"],
    hints: [
      "Sum numerator and denominator as finite geometric series in $x^2$ and $x$.",
      "After simplifying, $p(x) = \\dfrac{1 + x^n}{1 + x}$; ask when $1 + x$ divides $1 + x^n$.",
    ],
    solution:
      "Summing the geometric series, the numerator is $\\dfrac{1 - x^{2n}}{1 - x^2}$ and the denominator is $\\dfrac{1 - x^n}{1 - x}$, so\n$$p(x) = \\dfrac{1 - x^{2n}}{1 - x^2}\\cdot\\dfrac{1 - x}{1 - x^n} = \\dfrac{(1 - x^n)(1 + x^n)}{(1 - x)(1 + x)}\\cdot\\dfrac{1 - x}{1 - x^n} = \\dfrac{1 + x^n}{1 + x}.$$\nThis is a polynomial exactly when $1 + x$ divides $1 + x^n$, i.e. when $x = -1$ is a root of $1 + x^n$: $1 + (-1)^n = 0$, which requires $n$ odd. Among the options, $5$ and $17$ are odd, so (1) and (4).",
    solutionSteps: [
      "Simplify $p(x) = \\frac{1 + x^n}{1 + x}$.",
      "It is a polynomial iff $x = -1$ makes $1 + x^n = 0$, i.e. $n$ is odd.",
      "Only $5$ and $17$ are odd, giving (1) and (4).",
    ],
  },
  {
    id: "seq-mc-011",
    statement:
      "Let $n > 1$ and $a = 1 + n + n^2 + \\cdots + n^{63}$. Select every positive integer $m$ for which $n^m + 1$ divides $a$.\n\n(1) $8$\n(2) $16$\n(3) $32$\n(4) $64$",
    format: "text",
    answer: "1, 2, 3",
    acceptedAnswers: ["1,2,3", "(1),(2),(3)", "1 2 3"],
    topic: "sequences",
    subtopic: "Geometric Progression",
    concepts: ["geometric sum", "difference-of-squares factoring", "divisibility"],
    difficulty: "olympiad",
    source: "original",
    skills: ["summing a geometric series", "repeated factoring of $n^{64} - 1$"],
    estMinutes: 6,
    tags: [TAG, "multiple-correct"],
    hints: [
      "Sum the series: $a = \\dfrac{n^{64} - 1}{n - 1}$.",
      "Repeatedly apply the difference-of-squares factoring to $n^{64} - 1$.",
    ],
    solution:
      "As a geometric sum, $a = \\dfrac{n^{64} - 1}{n - 1}$. Factoring $n^{64} - 1$ by repeated difference of squares,\n$$n^{64} - 1 = (n - 1)(n + 1)(n^2 + 1)(n^4 + 1)(n^8 + 1)(n^{16} + 1)(n^{32} + 1),$$\nso $a = (n + 1)(n^2 + 1)(n^4 + 1)(n^8 + 1)(n^{16} + 1)(n^{32} + 1)$. The factors of the form $n^m + 1$ appearing here have $m \\in \\{1, 2, 4, 8, 16, 32\\}$. Among the options, $m = 8, 16, 32$ each appear as a factor, so $n^m + 1 \\mid a$ for those; $m = 64$ does not appear (and $n^{64} + 1 > a$). Hence (1), (2), (3).",
    solutionSteps: [
      "$a = \\frac{n^{64} - 1}{n - 1} = (n+1)(n^2+1)(n^4+1)(n^8+1)(n^{16}+1)(n^{32}+1)$.",
      "The factors $n^m + 1$ present are $m \\in \\{1,2,4,8,16,32\\}$.",
      "So $m = 8, 16, 32$ work; $m = 64$ does not.",
    ],
  },
  {
    id: "seq-mc-012",
    statement:
      "The numbers $x,\\; x^2 + 2,\\; x^3 + 10$ are three consecutive terms of a geometric progression. Select every possible value of the term that follows them.\n\n(1) $\\dfrac{729}{16}$\n(2) $6$\n(3) $0$\n(4) $54$",
    format: "text",
    answer: "1, 4",
    acceptedAnswers: ["1,4", "(1),(4)", "1 4"],
    topic: "sequences",
    subtopic: "Geometric Progression",
    concepts: ["GP means condition", "solving for x", "next term of a GP"],
    difficulty: "hard",
    source: "original",
    skills: ["using $b^2 = ac$", "computing the common ratio and next term"],
    estMinutes: 5,
    tags: [TAG, "multiple-correct"],
    hints: [
      "For a GP, the square of the middle term equals the product of its neighbours: $(x^2 + 2)^2 = x(x^3 + 10)$.",
      "Solve the resulting quadratic for $x$, then compute the fourth term $(x^3 + 10)\\cdot r$ with $r = \\dfrac{x^2 + 2}{x}$.",
    ],
    solution:
      "The GP condition gives $(x^2 + 2)^2 = x(x^3 + 10)$, i.e. $x^4 + 4x^2 + 4 = x^4 + 10x$, so $4x^2 - 10x + 4 = 0$, i.e. $2x^2 - 5x + 2 = 0$. Thus $(2x - 1)(x - 2) = 0$, giving $x = 2$ or $x = \\dfrac{1}{2}$. The common ratio is $r = \\dfrac{x^2 + 2}{x}$, and the next (fourth) term is $(x^3 + 10)\\,r$. For $x = 2$: $r = \\dfrac{6}{2} = 3$ and the fourth term is $18 \\cdot 3 = 54$. For $x = \\dfrac{1}{2}$: $r = \\dfrac{9/4}{1/2} = \\dfrac{9}{2}$ and $x^3 + 10 = \\dfrac{81}{8}$, so the fourth term is $\\dfrac{81}{8}\\cdot\\dfrac{9}{2} = \\dfrac{729}{16}$. Hence (1) and (4).",
    solutionSteps: [
      "$(x^2+2)^2 = x(x^3+10) \\Rightarrow 2x^2 - 5x + 2 = 0 \\Rightarrow x = 2$ or $x = 1/2$.",
      "For $x = 2$: $r = 3$, fourth term $= 18\\cdot 3 = 54$.",
      "For $x = 1/2$: $r = 9/2$, fourth term $= \\frac{81}{8}\\cdot\\frac{9}{2} = \\frac{729}{16}$.",
    ],
  },
];
