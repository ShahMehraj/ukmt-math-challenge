import type { Problem } from "@/lib/types";

/**
 * Matrix-match style practice problems for the "Sequences & Series" chapter of
 * the Cengage companion (IMC/Hamilton study app).
 *
 * These are ORIGINAL questions written in the app's own voice — reworded, but
 * mathematically identical to the source exercise bank. Each pairs List I items
 * (a, b, c, d) with List II labels. Since the app has no multi-select UI, these
 * use format "text": both lists live in the statement and the answer records
 * the matching. Every answer was solved and checked against the source key.
 */

export const seqMatrix: Problem[] = [
  {
    id: "seq-mm-001",
    statement:
      "Let $\\alpha$ and $\\beta$ be the roots of $x^2 - 8x + 4 = 0$, so $\\alpha + \\beta = 8$ and $\\alpha\\beta = 4$. Match each item in List I with the number in List II that always divides it.\n\n**List I**\n(a) If $\\alpha, a_1, a_2, a_3, a_4, a_5, \\beta$ are in A.P., then $\\displaystyle\\sum_{i=1}^{5} a_i$ is divisible by\n(b) If $\\alpha, a_1, a_2, a_3, a_4, a_5, \\beta$ are in G.P., then $\\displaystyle\\sum_{i=1}^{5} \\log_2 a_i$ is divisible by\n(c) If $\\alpha^2, a_1^2, a_2^2, a_3^2, a_4^2, a_5^2, \\beta^2$ are in A.P., then $\\displaystyle\\sum_{i=1}^{5} a_i^2$ is divisible by\n(d) If $\\alpha, a_1, a_2, a_3, a_4, a_5, \\beta$ are in H.P., then $\\left(\\displaystyle\\sum_{i=1}^{5} \\dfrac{1}{a_i} + 1\\right)$ is divisible by\n\n**List II**\n(p) 3\n(q) 4\n(r) 5\n(s) 7\n\nGive the correct matching.",
    format: "text",
    answer: "a-q, b-r, c-s, d-p",
    acceptedAnswers: [
      "a-q,b-r,c-s,d-p",
      "a->q, b->r, c->s, d->p",
      "a->q,b->r,c->s,d->p",
    ],
    topic: "sequences",
    subtopic: "Means & Inequalities",
    concepts: [
      "arithmetic progression",
      "geometric progression",
      "harmonic progression",
      "roots and symmetric functions",
      "logarithms",
    ],
    difficulty: "hard",
    source: "original",
    skills: [
      "summing terms of a progression using endpoint means",
      "relating A.P./G.P./H.P. sums to the arithmetic/geometric/harmonic means of the endpoints",
    ],
    estMinutes: 7,
    tags: ["cengage-seq", "matrix-match"],
    hints: [
      "For five equally-spaced interior terms between $\\alpha$ and $\\beta$, the middle term is $\\tfrac{\\alpha+\\beta}{2}$; the five terms are symmetric about it.",
      "Convert the G.P. log-sum to $\\log_2$ of a product, and the H.P. reciprocal-sum to an A.P. of reciprocals.",
    ],
    solution:
      "From the quadratic, $\\alpha+\\beta = 8$ and $\\alpha\\beta = 4$.\n\n**(a)** In an A.P. the five interior terms are symmetric about the mean of the endpoints, so $\\displaystyle\\sum_{i=1}^{5} a_i = 5\\cdot\\dfrac{\\alpha+\\beta}{2} = 5\\cdot\\dfrac{8}{2} = 20$, which is divisible by $4$ $\\Rightarrow$ (q).\n\n**(b)** In a G.P. the interior terms are symmetric in a multiplicative sense, so $a_1 a_2 a_3 a_4 a_5 = (\\sqrt{\\alpha\\beta})^5$. Then $\\displaystyle\\sum_{i=1}^{5} \\log_2 a_i = \\log_2(a_1 a_2 a_3 a_4 a_5) = 5\\log_2\\sqrt{4} = 5$, divisible by $5$ $\\Rightarrow$ (r).\n\n**(c)** With the squares in A.P., $\\displaystyle\\sum_{i=1}^{5} a_i^2 = 5\\cdot\\dfrac{\\alpha^2+\\beta^2}{2} = 5\\cdot\\dfrac{(\\alpha+\\beta)^2 - 2\\alpha\\beta}{2} = 5\\cdot\\dfrac{64 - 8}{2} = 140$, divisible by $7$ $\\Rightarrow$ (s).\n\n**(d)** In an H.P. the reciprocals $\\tfrac{1}{\\alpha}, \\tfrac{1}{a_1}, \\dots, \\tfrac{1}{a_5}, \\tfrac{1}{\\beta}$ form an A.P., and the five interior reciprocals are symmetric about the mean of the endpoint reciprocals, so $\\displaystyle\\sum_{i=1}^{5} \\dfrac{1}{a_i} = 5\\cdot\\dfrac{1}{2}\\left(\\dfrac{1}{\\alpha}+\\dfrac{1}{\\beta}\\right) = \\dfrac{5(\\alpha+\\beta)}{2\\,\\alpha\\beta} = \\dfrac{5\\cdot 8}{2\\cdot 4} = 5$. Hence $\\displaystyle\\sum_{i=1}^{5} \\dfrac{1}{a_i} + 1 = 5 + 1 = 6$, divisible by $3$ $\\Rightarrow$ (p).\n\n**Matching:** a $\\to$ q, b $\\to$ r, c $\\to$ s, d $\\to$ p.",
    solutionSteps: [
      "Use $\\alpha+\\beta=8$, $\\alpha\\beta=4$.",
      "(a) A.P. sum $= 5\\cdot\\tfrac{\\alpha+\\beta}{2} = 20$, divisible by $4$ (q).",
      "(b) G.P.: $\\sum\\log_2 a_i = \\log_2(\\sqrt{\\alpha\\beta})^5 = 5$, divisible by $5$ (r).",
      "(c) Squares in A.P.: $5\\cdot\\tfrac{\\alpha^2+\\beta^2}{2} = 140$, divisible by $7$ (s).",
      "(d) H.P.: reciprocals in A.P. give $\\sum \\tfrac{1}{a_i} = 5$, so $\\sum\\tfrac{1}{a_i}+1 = 6$, divisible by $3$ (p).",
    ],
  },
  {
    id: "seq-mm-002",
    statement:
      "Match each coefficient in List I with its value in List II.\n\n**List I**\n(a) The coefficient of $x^9$ in the product $(x+1)(x+3)(x+5)\\cdots(x+19)$ is\n(b) The coefficient of $x^8$ in the product $(x+1)(x+3)(x+5)\\cdots(x+19)$ is\n(c) The coefficient of $x^9$ in the product $(x+1)(x+2)(x+2^2)\\cdots(x+2^9)$ is\n(d) If the coefficient of $x^8$ in the product $(x+1)(x+2)(x+2^2)\\cdots(x+2^9)$ equals $\\dfrac{m\\cdot 2^{10}+2}{3}$, then $m$ is\n\n**List II**\n(p) 1023\n(q) 100\n(r) 1021\n(s) 4335\n\nGive the correct matching.",
    format: "text",
    answer: "a-q, b-s, c-p, d-r",
    acceptedAnswers: [
      "a-q,b-s,c-p,d-r",
      "a->q, b->s, c->p, d->r",
      "a->q,b->s,c->p,d->r",
    ],
    topic: "sequences",
    subtopic: "Sigma & Telescoping",
    concepts: [
      "Vieta's formulas",
      "elementary symmetric functions",
      "arithmetic series",
      "geometric series",
      "sum of squares",
    ],
    difficulty: "hard",
    source: "original",
    skills: [
      "reading coefficients as elementary symmetric sums of the constants",
      "using $(\\sum a)^2 = \\sum a^2 + 2\\sum_{i<j} a_i a_j$ to get the two-at-a-time sum",
    ],
    estMinutes: 8,
    tags: ["cengage-seq", "matrix-match"],
    hints: [
      "There are $10$ linear factors, so the coefficient of $x^9$ is the sum of the constants, and the coefficient of $x^8$ is the sum of their products taken two at a time.",
      "Get the two-at-a-time sum from $S = \\dfrac{(\\sum a)^2 - \\sum a^2}{2}$.",
    ],
    solution:
      "Each product has $10$ linear factors, so the coefficient of $x^9$ is the sum of the constants and the coefficient of $x^8$ is the sum of products of the constants taken two at a time.\n\n**(a)** Constants $1,3,5,\\dots,19$ (10 odd numbers). Coefficient of $x^9 = 1+3+\\cdots+19 = \\dfrac{10}{2}(1+19) = 100$ $\\Rightarrow$ (q).\n\n**(b)** Let $S$ be the two-at-a-time sum. Then $(1+3+\\cdots+19)^2 = \\sum(2r-1)^2 + 2S$, so $S = \\dfrac{100^2 - \\sum_{r=1}^{10}(2r-1)^2}{2} = \\dfrac{10000 - 1330}{2} = 4335$ $\\Rightarrow$ (s).\n\n**(c)** Constants $1,2,2^2,\\dots,2^9$. Coefficient of $x^9 = 1+2+\\cdots+2^9 = 2^{10}-1 = 1023$ $\\Rightarrow$ (p).\n\n**(d)** Let $S$ be the two-at-a-time sum. Then $(2^{10}-1)^2 = \\dfrac{(2^2)^{10}-1}{2^2-1} + 2S$, giving $S = \\dfrac{(2^{10}-1)^2 - \\tfrac{2^{20}-1}{3}}{2} = \\dfrac{2^{20} - 3\\cdot 2^{10} + 2}{3} = \\dfrac{1021\\cdot 2^{10} + 2}{3}$. Comparing with $\\dfrac{m\\cdot 2^{10}+2}{3}$ gives $m = 1021$ $\\Rightarrow$ (r).\n\n**Matching:** a $\\to$ q, b $\\to$ s, c $\\to$ p, d $\\to$ r.",
    solutionSteps: [
      "10 factors $\\Rightarrow$ coeff of $x^9$ = sum of constants; coeff of $x^8$ = sum of pairwise products.",
      "(a) $1+3+\\cdots+19 = 100$ (q).",
      "(b) $S = \\tfrac{100^2 - 1330}{2} = 4335$ (s).",
      "(c) $1+2+\\cdots+2^9 = 2^{10}-1 = 1023$ (p).",
      "(d) $S = \\tfrac{2^{20}-3\\cdot 2^{10}+2}{3} = \\tfrac{1021\\cdot 2^{10}+2}{3}$, so $m = 1021$ (r).",
    ],
  },
  {
    id: "seq-mm-003",
    statement:
      "For each condition in List I, determine the progression the given numbers form (List II), then choose the correct code.\n\n**List I**\n(a) If $x, y, z$ are real and $4x^2 + 9y^2 + 16z^2 - 6xy - 12yz - 8zx = 0$, then $x, y, z$ are\n(b) If $21(x^2 + y^2 + z^2) = (x + 2y + 4z)^2$, then $x, y, z$ are\n(c) If $x, y, z > 0$ and $216x^3 + 64y^3 + 27z^3 = 216xyz$, then $x, y, z$ are\n(d) If $ax^2 + 2px + b = 0$ has root $-1$, $ax^2 + 2qx + b = 0$ has equal roots, and the line $\\dfrac{x}{a} + \\dfrac{y}{b} = \\dfrac{2}{r}$ passes through $(1, 1)$, then $p, q, r$ are\n\n**List II**\n(p) in A.P.\n(q) in G.P.\n(r) in H.P.\n(s) not in A.P., G.P. or H.P.\n\n**Codes**\n(1) a$\\to$r, b$\\to$p, c$\\to$q, d$\\to$s\n(2) a$\\to$q, b$\\to$s, c$\\to$p, d$\\to$r\n(3) a$\\to$r, b$\\to$q, c$\\to$p, d$\\to$q\n(4) a$\\to$s, b$\\to$p, c$\\to$q, d$\\to$r\n\nWhich code is correct?",
    format: "mcq",
    options: [
      { label: "A", text: "a$\\to$r, b$\\to$p, c$\\to$q, d$\\to$s" },
      { label: "B", text: "a$\\to$q, b$\\to$s, c$\\to$p, d$\\to$r" },
      { label: "C", text: "a$\\to$r, b$\\to$q, c$\\to$p, d$\\to$q" },
      { label: "D", text: "a$\\to$s, b$\\to$p, c$\\to$q, d$\\to$r" },
    ],
    answer: "C",
    topic: "sequences",
    subtopic: "Means & Inequalities",
    concepts: [
      "sum of squares equal to zero",
      "arithmetic progression",
      "geometric progression",
      "harmonic progression",
      "Cauchy-Schwarz equality case",
    ],
    difficulty: "hard",
    source: "original",
    skills: [
      "rewriting a quadratic form as a sum of squares to force linear relations",
      "identifying A.P./G.P./H.P. from ratios of variables",
    ],
    estMinutes: 8,
    tags: ["cengage-seq", "matrix-match"],
    hints: [
      "Double each expression and try to write it as a sum of squares; a sum of squares is zero only when each square is zero.",
      "$21 = 1^2 + 2^2 + 4^2$, which signals the Cauchy-Schwarz equality case.",
    ],
    solution:
      "**(a)** Doubling gives $(2x - 3y)^2 + (3y - 4z)^2 + (4z - 2x)^2 = 0$, so $2x = 3y = 4z$. Then $\\dfrac{1}{x} : \\dfrac{1}{y} : \\dfrac{1}{z}$ are equally spaced, i.e. $\\tfrac{1}{x}, \\tfrac{1}{y}, \\tfrac{1}{z}$ are in A.P., so $x, y, z$ are in **H.P.** $\\Rightarrow$ (r).\n\n**(b)** Since $21 = 1^2 + 2^2 + 4^2$, the equality case of Cauchy-Schwarz forces $\\dfrac{y}{x} = \\dfrac{z}{y} = 2$, hence $y^2 = zx$ and $x, y, z$ are in **G.P.** $\\Rightarrow$ (q).\n\n**(c)** Factoring, $(6x + 4y + 3z)(36x^2 + 16y^2 + 9z^2 - 24xy - 12yz - 18xz) = 0$. With $x, y, z > 0$ the first factor is positive, so the second vanishes: doubling it gives $(6x - 4y)^2 + (4y - 3z)^2 + (3z - 6x)^2 = 0$, hence $6x = 4y = 3z$. Writing $x = \\tfrac{\\lambda}{6}, y = \\tfrac{\\lambda}{4}, z = \\tfrac{\\lambda}{3}$ gives $x + z = \\tfrac{\\lambda}{2} = 2y$, so $x, y, z$ are in **A.P.** $\\Rightarrow$ (p).\n\n**(d)** Root $-1$ gives $a - 2p + b = 0$, i.e. $a + b = 2p$, so $a, p, b$ are in A.P. Equal roots give $q^2 = ab$, so $a, q, b$ are in G.P. The line through $(1,1)$ gives $\\tfrac{1}{a} + \\tfrac{1}{b} = \\tfrac{2}{r}$, so $a, r, b$ are in H.P. Thus $p = \\tfrac{a+b}{2}$ (A.M.), $q = \\sqrt{ab}$ (G.M.), $r = \\tfrac{2ab}{a+b}$ (H.M.); the A.M., G.M., H.M. of two numbers are in **G.P.** (since $q^2 = pr$) $\\Rightarrow$ (q).\n\nSo a$\\to$r, b$\\to$q, c$\\to$p, d$\\to$q, which is code **(3)**.",
    solutionSteps: [
      "(a) $(2x-3y)^2+(3y-4z)^2+(4z-2x)^2=0 \\Rightarrow 2x=3y=4z \\Rightarrow$ H.P. (r).",
      "(b) $21=1^2+2^2+4^2$; equality case gives $y^2=zx \\Rightarrow$ G.P. (q).",
      "(c) Positive factor drops out; $(6x-4y)^2+(4y-3z)^2+(3z-6x)^2=0 \\Rightarrow$ A.P. (p).",
      "(d) $p, q, r$ are the A.M., G.M., H.M. of $a, b$, with $q^2 = pr \\Rightarrow$ G.P. (q).",
      "Matching a$\\to$r, b$\\to$q, c$\\to$p, d$\\to$q is code (3).",
    ],
  },
];
