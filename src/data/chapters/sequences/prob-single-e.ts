import type { Problem } from "@/lib/types";

/**
 * Sequences & Series — single-correct practice bank, chunk E (source #62-#76).
 *
 * ORIGINAL problems written in the app's own voice for the IMC/Hamilton study
 * app, modelled on a Cengage "Sequences & Series" exercise set. The English of
 * every statement is reworded; the mathematics (values, expressions, structure)
 * is preserved exactly. Solutions are clean final derivations.
 */

const TAG = "cengage-seq";

export const seqSingleE: Problem[] = [
  {
    id: "seq-sc-062",
    statement:
      "Suppose $a$, $b$, $c$ form an arithmetic progression. In what kind of progression, if any, do the three numbers $\\dfrac{a}{bc}$, $\\dfrac{1}{c}$, $\\dfrac{2}{b}$ appear?",
    format: "mcq",
    options: [
      { label: "A", text: "A.P." },
      { label: "B", text: "G.P." },
      { label: "C", text: "H.P." },
      { label: "D", text: "None of these" },
    ],
    answer: "D",
    topic: "sequences",
    subtopic: "Means & Inequalities",
    concepts: ["arithmetic progression", "geometric progression", "harmonic progression"],
    difficulty: "medium",
    source: "original",
    skills: ["testing AP/GP/HP conditions"],
    estMinutes: 4,
    tags: [TAG, "progression-type"],
    hints: [
      "Use $2b = a + c$.",
      "Check the A.P. condition (twice the middle equals the sum of the outer terms), the H.P. condition on reciprocals, and the G.P. condition (square of the middle equals the product).",
    ],
    solution:
      "Since $a$, $b$, $c$ are in A.P., $2b = a + c$.\\n\\nA.P. test: $\\dfrac{a}{bc} + \\dfrac{2}{b} = \\dfrac{a + 2c}{bc}$, which is not equal to $2 \\cdot \\dfrac{1}{c} = \\dfrac{2}{c}$, so the numbers are not in A.P.\\n\\nH.P. test: the reciprocals are $\\dfrac{bc}{a}$, $c$, $\\dfrac{b}{2}$; here $\\dfrac{bc}{a} + \\dfrac{b}{2} = \\dfrac{2bc + ab}{2a} \\neq 2c$, so not in H.P.\\n\\nG.P. test: $\\dfrac{a}{bc} \\cdot \\dfrac{2}{b} = \\dfrac{2a}{b^2 c} \\neq \\dfrac{1}{c^2} = \\left(\\dfrac{1}{c}\\right)^2$, so not in G.P.\\n\\nHence the three numbers are in none of these progressions.",
    solutionSteps: [
      "From A.P.: $2b = a + c$.",
      "A.P. fails: $\\dfrac{a}{bc} + \\dfrac{2}{b} \\neq \\dfrac{2}{c}$.",
      "H.P. fails: reciprocals do not satisfy the A.P. condition.",
      "G.P. fails: $\\dfrac{a}{bc} \\cdot \\dfrac{2}{b} \\neq \\dfrac{1}{c^2}$.",
      "Answer: none of these.",
    ],
  },
  {
    id: "seq-sc-063",
    statement:
      "Let $a$, $b$, $c$ be in A.P., let $p$, $q$, $r$ be in H.P., and suppose $ap$, $bq$, $cr$ are in G.P. Find the value of $\\dfrac{p}{r} + \\dfrac{r}{p}$.",
    format: "mcq",
    options: [
      { label: "A", text: "$\\dfrac{a}{c} - \\dfrac{c}{a}$" },
      { label: "B", text: "$\\dfrac{a}{c} + \\dfrac{c}{a}$" },
      { label: "C", text: "$\\dfrac{b}{q} + \\dfrac{q}{b}$" },
      { label: "D", text: "$\\dfrac{b}{q} - \\dfrac{q}{b}$" },
    ],
    answer: "B",
    topic: "sequences",
    subtopic: "Means & Inequalities",
    concepts: ["arithmetic progression", "harmonic progression", "geometric progression"],
    difficulty: "hard",
    source: "original",
    skills: ["combining AP/GP/HP relations"],
    estMinutes: 6,
    tags: [TAG, "mixed-means"],
    hints: [
      "Since $p, q, r$ are in H.P., $q = \\dfrac{2pr}{p + r}$.",
      "Since $ap, bq, cr$ are in G.P., $(bq)^2 = (ap)(cr)$; also $2b = a + c$.",
    ],
    solution:
      "Write $\\dfrac{p}{r} + \\dfrac{r}{p} = \\dfrac{p^2 + r^2}{pr} = \\dfrac{(p + r)^2 - 2pr}{pr}$.\\n\\nBecause $p, q, r$ are in H.P., $q = \\dfrac{2pr}{p + r}$, so $(p + r)^2 = \\dfrac{4p^2 r^2}{q^2}$. Hence\\n$$\\dfrac{p}{r} + \\dfrac{r}{p} = \\dfrac{\\dfrac{4p^2 r^2}{q^2} - 2pr}{pr} = \\dfrac{4pr}{q^2} - 2.$$\\n\\nBecause $ap, bq, cr$ are in G.P., $b^2 q^2 = ac\\,pr$, giving $\\dfrac{pr}{q^2} = \\dfrac{b^2}{ac}$. Thus the expression equals $\\dfrac{4b^2}{ac} - 2$.\\n\\nFinally $a, b, c$ are in A.P., so $2b = a + c$ and $4b^2 = (a + c)^2$. Therefore\\n$$\\dfrac{4b^2}{ac} - 2 = \\dfrac{(a + c)^2}{ac} - 2 = \\dfrac{a^2 + c^2}{ac} = \\dfrac{a}{c} + \\dfrac{c}{a}.$$",
    solutionSteps: [
      "$\\dfrac{p}{r} + \\dfrac{r}{p} = \\dfrac{(p+r)^2 - 2pr}{pr}$.",
      "H.P.: $q = \\dfrac{2pr}{p+r} \\Rightarrow (p+r)^2 = \\dfrac{4p^2r^2}{q^2}$, so expression $= \\dfrac{4pr}{q^2} - 2$.",
      "G.P.: $b^2 q^2 = ac\\,pr \\Rightarrow \\dfrac{pr}{q^2} = \\dfrac{b^2}{ac}$, so expression $= \\dfrac{4b^2}{ac} - 2$.",
      "A.P.: $2b = a + c$, so $= \\dfrac{(a+c)^2}{ac} - 2 = \\dfrac{a}{c} + \\dfrac{c}{a}$.",
    ],
  },
  {
    id: "seq-sc-064",
    statement:
      "Let $a, b, c, d \\in \\mathbb{R}^{+}$ with $a$, $b$, $c$ in A.P. and $b$, $c$, $d$ in H.P. Which relation must hold?",
    format: "mcq",
    options: [
      { label: "A", text: "$ab = cd$" },
      { label: "B", text: "$ac = bd$" },
      { label: "C", text: "$bc = ad$" },
      { label: "D", text: "None of these" },
    ],
    answer: "C",
    topic: "sequences",
    subtopic: "Means & Inequalities",
    concepts: ["arithmetic progression", "harmonic progression"],
    difficulty: "medium",
    source: "original",
    skills: ["combining AP and HP conditions"],
    estMinutes: 4,
    tags: [TAG, "mixed-means"],
    hints: [
      "A.P. gives $2b = a + c$.",
      "H.P. gives $c = \\dfrac{2bd}{b + d}$.",
    ],
    solution:
      "From the A.P., $2b = a + c$. From the H.P. on $b, c, d$, $c = \\dfrac{2bd}{b + d}$, i.e. $c(b + d) = 2bd$.\\n\\nReplace $2b$ by $a + c$ in the right-hand side: $c(b + d) = (a + c)d = ad + cd$. Expanding the left side gives $bc + cd = ad + cd$, so $bc = ad$.",
    solutionSteps: [
      "A.P.: $2b = a + c$.",
      "H.P.: $c = \\dfrac{2bd}{b+d} \\Rightarrow c(b+d) = 2bd$.",
      "Substitute $2b = a+c$: $c(b+d) = (a+c)d$.",
      "Expand: $bc + cd = ad + cd \\Rightarrow bc = ad$.",
    ],
  },
  {
    id: "seq-sc-065",
    statement:
      "In a sequence $a_1, a_2, a_3, \\ldots$ the difference $(a_r - a_{r+1})$ is always a fixed multiple of the product $a_r\\,a_{r+1}$. The terms of the sequence are therefore in",
    format: "mcq",
    options: [
      { label: "A", text: "A.P." },
      { label: "B", text: "G.P." },
      { label: "C", text: "H.P." },
      { label: "D", text: "None of these" },
    ],
    answer: "C",
    topic: "sequences",
    subtopic: "Harmonic Progression",
    concepts: ["harmonic progression", "reciprocal sequence"],
    difficulty: "medium",
    source: "original",
    skills: ["recognising HP from reciprocals"],
    estMinutes: 3,
    tags: [TAG, "progression-type"],
    hints: [
      "Write the given condition as $\\dfrac{a_r - a_{r+1}}{a_r\\,a_{r+1}} = k$.",
      "Split the fraction into reciprocals.",
    ],
    solution:
      "The hypothesis states $\\dfrac{a_r - a_{r+1}}{a_r\\,a_{r+1}} = k$ for a constant $k$. Splitting the fraction,\\n$$\\dfrac{1}{a_{r+1}} - \\dfrac{1}{a_r} = k.$$\\nSo consecutive reciprocals differ by the constant $k$, meaning $\\dfrac{1}{a_1}, \\dfrac{1}{a_2}, \\dfrac{1}{a_3}, \\ldots$ form an A.P. By definition the original terms $a_1, a_2, a_3, \\ldots$ are then in H.P.",
    solutionSteps: [
      "$\\dfrac{a_r - a_{r+1}}{a_r a_{r+1}} = k$.",
      "$\\dfrac{1}{a_{r+1}} - \\dfrac{1}{a_r} = k$ (constant).",
      "Reciprocals are in A.P., so the terms are in H.P.",
    ],
  },
  {
    id: "seq-sc-066",
    statement:
      "If $a$, $b$, $c$ are in geometric progression, then the three quantities $a + b$, $2b$, $b + c$ are in",
    format: "mcq",
    options: [
      { label: "A", text: "A.P." },
      { label: "B", text: "G.P." },
      { label: "C", text: "H.P." },
      { label: "D", text: "None of these" },
    ],
    answer: "C",
    topic: "sequences",
    subtopic: "Means & Inequalities",
    concepts: ["geometric progression", "harmonic progression"],
    difficulty: "medium",
    source: "original",
    skills: ["testing progression type"],
    estMinutes: 3,
    tags: [TAG, "progression-type"],
    hints: [
      "A convenient special case such as $a = 1$, $b = 2$, $c = 4$ makes the pattern clear.",
      "Check whether the reciprocals of $a+b$, $2b$, $b+c$ are equally spaced.",
    ],
    solution:
      "Take a G.P. sample $a = 1$, $b = 2$, $c = 4$. Then $a + b = 3$, $2b = 4$, $b + c = 6$.\\n\\nCheck the reciprocals $\\dfrac{1}{3}, \\dfrac{1}{4}, \\dfrac{1}{6}$: the successive differences are $\\dfrac{1}{4} - \\dfrac{1}{3} = -\\dfrac{1}{12}$ and $\\dfrac{1}{6} - \\dfrac{1}{4} = -\\dfrac{1}{12}$, which are equal.\\n\\nSince the reciprocals form an A.P., the numbers $a + b$, $2b$, $b + c$ are in H.P.",
    solutionSteps: [
      "Sample G.P.: $a=1, b=2, c=4$ gives $a+b=3,\\ 2b=4,\\ b+c=6$.",
      "Reciprocals $\\tfrac13, \\tfrac14, \\tfrac16$ have equal gaps $-\\tfrac{1}{12}$.",
      "Reciprocals in A.P. $\\Rightarrow$ terms in H.P.",
    ],
  },
  {
    id: "seq-sc-067",
    statement:
      "Let $a > 0$ and $b > 0$. Suppose $a, x, b$ are in A.P., $a, y, b$ are in G.P., and $a, z, b$ are in H.P., with the added condition $x = 9z$. Which statement is correct?",
    format: "mcq",
    options: [
      { label: "A", text: "$|y| = 3z$" },
      { label: "B", text: "$x = 3|y|$" },
      { label: "C", text: "$2y = x + z$" },
      { label: "D", text: "None of these" },
    ],
    answer: "B",
    topic: "sequences",
    subtopic: "Means & Inequalities",
    concepts: ["arithmetic mean", "geometric mean", "harmonic mean"],
    difficulty: "medium",
    source: "original",
    skills: ["relating the three means"],
    estMinutes: 4,
    tags: [TAG, "mixed-means"],
    hints: [
      "$x$, $y$, $z$ are the A.M., G.M. and H.M. of $a$ and $b$.",
      "Recall $y^2 = xz$, and use $x = 9z$.",
    ],
    solution:
      "Here $x$ is the arithmetic mean, $y$ the geometric mean and $z$ the harmonic mean of $a$ and $b$. These satisfy the standard relation $y^2 = xz$.\\n\\nGiven $x = 9z$, substitute $z = \\dfrac{y^2}{x}$: $x = 9 \\cdot \\dfrac{y^2}{x}$, so $x^2 = 9y^2$ and therefore $x = 3|y|$ (taking $x > 0$).",
    solutionSteps: [
      "$x = $ A.M., $y = $ G.M., $z = $ H.M. of $a, b$, so $y^2 = xz$.",
      "From $x = 9z$: $z = \\dfrac{y^2}{x}$ gives $x = \\dfrac{9y^2}{x}$.",
      "$x^2 = 9y^2 \\Rightarrow x = 3|y|$.",
    ],
  },
  {
    id: "seq-sc-068",
    statement:
      "Fix $n \\in \\mathbb{N}$ with $n > 25$, and let $A$, $G$, $H$ be the arithmetic, geometric and harmonic means of $25$ and $n$. What is the smallest $n$ for which all of $A$, $G$, $H$ lie in the set $\\{25, 26, \\ldots, n\\}$?",
    format: "mcq",
    options: [
      { label: "A", text: "$49$" },
      { label: "B", text: "$81$" },
      { label: "C", text: "$169$" },
      { label: "D", text: "$225$" },
    ],
    answer: "D",
    topic: "sequences",
    subtopic: "Means & Inequalities",
    concepts: ["arithmetic mean", "geometric mean", "harmonic mean", "integer conditions"],
    difficulty: "hard",
    source: "original",
    skills: ["imposing integrality on the three means"],
    estMinutes: 6,
    tags: [TAG, "mixed-means"],
    hints: [
      "$A = \\dfrac{25 + n}{2}$, $G = 5\\sqrt{n}$, $H = \\dfrac{50n}{25 + n}$.",
      "$G$ integer forces $n$ a perfect square; $A$ integer forces $n$ odd; then test $H$.",
    ],
    solution:
      "The three means are $A = \\dfrac{25 + n}{2}$, $G = \\sqrt{25n} = 5\\sqrt{n}$, and $H = \\dfrac{2 \\cdot 25 \\cdot n}{25 + n} = \\dfrac{50n}{25 + n}$.\\n\\nFor $G$ to be an integer, $n$ must be a perfect square. For $A$ to be an integer, $25 + n$ must be even, so $n$ must be odd. Thus $n$ must be an odd perfect square: $49, 81, 121, 169, 225, \\ldots$\\n\\nTesting these in order for $H = \\dfrac{50n}{25 + n}$ to be an integer, the first that succeeds is $n = 225$: then $H = \\dfrac{50 \\cdot 225}{250} = 45$, which is a whole number lying in $\\{25, \\ldots, 225\\}$. Hence the least value is $n = 225$.",
    solutionSteps: [
      "$A = \\dfrac{25+n}{2},\\ G = 5\\sqrt{n},\\ H = \\dfrac{50n}{25+n}$.",
      "$G$ integer $\\Rightarrow n$ perfect square; $A$ integer $\\Rightarrow n$ odd.",
      "$n$ is an odd perfect square; test $H$ for integrality.",
      "First success is $n = 225$ ($H = 45$).",
    ],
  },
  {
    id: "seq-sc-069",
    statement:
      "Consider the run of integers $100, 101, 102, \\ldots, n-1, n$ with $100 < n \\le 500$. If the A.M., G.M. and H.M. of the first and last terms ($100$ and $n$) are themselves members of this list, find $n$.",
    format: "mcq",
    options: [
      { label: "A", text: "$200$" },
      { label: "B", text: "$300$" },
      { label: "C", text: "$400$" },
      { label: "D", text: "$500$" },
    ],
    answer: "C",
    topic: "sequences",
    subtopic: "Means & Inequalities",
    concepts: ["arithmetic mean", "geometric mean", "harmonic mean", "integer conditions"],
    difficulty: "hard",
    source: "original",
    skills: ["imposing integrality on the three means"],
    estMinutes: 6,
    tags: [TAG, "mixed-means"],
    hints: [
      "$\\text{A.M.} = \\dfrac{100 + n}{2}$, $\\text{G.M.} = 10\\sqrt{n}$, $\\text{H.M.} = \\dfrac{200n}{100 + n}$.",
      "Write $n = 4k^2$ (even and a perfect square), then make the H.M. an integer.",
    ],
    solution:
      "The means of $100$ and $n$ are $\\text{A.M.} = \\dfrac{100 + n}{2}$, $\\text{G.M.} = \\sqrt{100n} = 10\\sqrt{n}$, $\\text{H.M.} = \\dfrac{2 \\cdot 100 \\cdot n}{100 + n} = \\dfrac{200n}{100 + n}$.\\n\\nA.M. integer $\\Rightarrow n$ even; G.M. integer $\\Rightarrow n$ a perfect square. Both hold iff $n = 4k^2$. Then\\n$$\\text{H.M.} = \\dfrac{200 \\cdot 4k^2}{100 + 4k^2} = \\dfrac{200k^2}{25 + k^2}.$$\\nFor this to be an integer we need $25 + k^2$ to divide $200k^2$; equivalently $25 + k^2 \\mid 25 \\cdot 200 = 5000$, which forces $k^2$ to be a multiple of $25$. With $100 < n = 4k^2 \\le 500$, i.e. $25 < k^2 \\le 125$, the only multiple of $25$ in range is $k^2 = 100$, giving $n = 400$. Then $\\text{H.M.} = \\dfrac{200 \\cdot 100}{125} = 160$, an integer. Hence $n = 400$.",
    solutionSteps: [
      "$\\text{A.M.} = \\dfrac{100+n}{2},\\ \\text{G.M.} = 10\\sqrt{n},\\ \\text{H.M.} = \\dfrac{200n}{100+n}$.",
      "A.M. integer $\\Rightarrow n$ even; G.M. integer $\\Rightarrow n$ perfect square: $n = 4k^2$.",
      "$\\text{H.M.} = \\dfrac{200k^2}{25 + k^2}$ integer requires $25 \\mid k^2$.",
      "With $100 < 4k^2 \\le 500$, only $k^2 = 100$ works: $n = 400$.",
    ],
  },
  {
    id: "seq-sc-070",
    statement:
      "Insert $20$ harmonic means $H_1, H_2, \\ldots, H_{20}$ between $2$ and $3$. Evaluate $\\dfrac{H_1 + 2}{H_1 - 2} + \\dfrac{H_{20} + 3}{H_{20} - 3}$.",
    format: "mcq",
    options: [
      { label: "A", text: "$20$" },
      { label: "B", text: "$21$" },
      { label: "C", text: "$40$" },
      { label: "D", text: "$38$" },
    ],
    answer: "C",
    topic: "sequences",
    subtopic: "Harmonic Progression",
    concepts: ["harmonic means", "reciprocal A.P."],
    difficulty: "hard",
    source: "original",
    skills: ["working with harmonic means via reciprocals"],
    estMinutes: 6,
    tags: [TAG, "harmonic-means"],
    hints: [
      "The reciprocals $\\dfrac{1}{2}, \\dfrac{1}{H_1}, \\ldots, \\dfrac{1}{H_{20}}, \\dfrac{1}{3}$ form an A.P. with common difference $d$.",
      "Divide numerator and denominator of each fraction by the relevant term to bring in reciprocals.",
    ],
    solution:
      "Since $2, H_1, \\ldots, H_{20}, 3$ are in H.P., their reciprocals form an A.P.:\\n$$\\dfrac{1}{2}, \\dfrac{1}{H_1}, \\ldots, \\dfrac{1}{H_{20}}, \\dfrac{1}{3}$$\\nwith $22$ terms and common difference $d$, so $\\dfrac{1}{3} = \\dfrac{1}{2} + 21d$.\\n\\nRewrite each fraction by dividing top and bottom by the appropriate constant:\\n$$\\dfrac{H_1 + 2}{H_1 - 2} = \\dfrac{\\tfrac{1}{2} + \\tfrac{1}{H_1}}{\\tfrac{1}{2} - \\tfrac{1}{H_1}}, \\qquad \\dfrac{H_{20} + 3}{H_{20} - 3} = \\dfrac{\\tfrac{1}{3} + \\tfrac{1}{H_{20}}}{\\tfrac{1}{3} - \\tfrac{1}{H_{20}}}.$$\\nWith $\\dfrac{1}{H_1} = \\dfrac{1}{2} + d$ and $\\dfrac{1}{H_{20}} = \\dfrac{1}{3} - d$, these become\\n$$\\dfrac{1 + d}{-d} + \\dfrac{\\tfrac{2}{3} - d}{d} = \\dfrac{-(1 + d) + \\tfrac{2}{3} - d}{d} = \\dfrac{-\\tfrac{1}{3} - 2d}{d} = \\dfrac{-\\tfrac{1}{3}}{d} - 2.$$\\nFrom $\\dfrac{1}{3} - \\dfrac{1}{2} = 21d$ we get $-\\dfrac{1}{6} = 21d$, so $\\dfrac{-\\tfrac{1}{3}}{d} = \\dfrac{-\\tfrac{1}{3}}{-\\tfrac{1}{126}} = 42$. Hence the value is $42 - 2 = 40$.",
    solutionSteps: [
      "Reciprocals form a $22$-term A.P.: $\\dfrac{1}{2}, \\dfrac{1}{H_1}, \\ldots, \\dfrac{1}{3}$, so $\\dfrac{1}{3} = \\dfrac{1}{2} + 21d$.",
      "Rewrite each fraction using reciprocals; $\\dfrac{1}{H_1} = \\dfrac{1}{2} + d$, $\\dfrac{1}{H_{20}} = \\dfrac{1}{3} - d$.",
      "Sum simplifies to $\\dfrac{-1/3}{d} - 2$.",
      "$21d = -\\dfrac{1}{6}$ gives $\\dfrac{-1/3}{d} = 42$, so the total is $40$.",
    ],
  },
  {
    id: "seq-sc-071",
    statement:
      "An arithmetic progression has the sum of its first $n$ terms equal to $cn(n-1)$, where $c \\neq 0$. What is the sum of the squares of these $n$ terms?",
    format: "mcq",
    options: [
      { label: "A", text: "$c^2 n (n+1)^2$" },
      { label: "B", text: "$\\dfrac{2}{3} c^2 n (n-1)(2n-1)$" },
      { label: "C", text: "$\\dfrac{2c^2}{3} n (n+1)(2n+1)$" },
      { label: "D", text: "None of these" },
    ],
    answer: "B",
    topic: "sequences",
    subtopic: "Sigma & Telescoping",
    concepts: ["arithmetic progression", "sum of squares", "term from partial sums"],
    difficulty: "hard",
    source: "original",
    skills: ["recovering terms from S_n", "sum of squares formula"],
    estMinutes: 6,
    tags: [TAG, "sum-of-squares"],
    hints: [
      "Recover the general term via $t_r = S_r - S_{r-1}$.",
      "Then use $\\sum_{k=0}^{n-1} k^2 = \\dfrac{(n-1)n(2n-1)}{6}$.",
    ],
    solution:
      "With $S_r = cr(r-1)$, the $r$th term is\\n$$t_r = S_r - S_{r-1} = cr(r-1) - c(r-1)(r-2) = c(r-1)\\big[r - (r-2)\\big] = 2c(r-1).$$\\nThus the terms are $0, 2c, 4c, \\ldots, 2c(n-1)$, and\\n$$\\sum_{r=1}^{n} t_r^2 = 4c^2 \\sum_{r=1}^{n} (r-1)^2 = 4c^2 \\big(0^2 + 1^2 + \\cdots + (n-1)^2\\big) = 4c^2 \\cdot \\dfrac{(n-1)n(2n-1)}{6}.$$\\nSimplifying gives $\\dfrac{2}{3} c^2 n (n-1)(2n-1)$.",
    solutionSteps: [
      "$t_r = S_r - S_{r-1} = 2c(r-1)$.",
      "$\\sum t_r^2 = 4c^2 \\sum_{r=1}^{n}(r-1)^2 = 4c^2 \\cdot \\dfrac{(n-1)n(2n-1)}{6}$.",
      "Simplify to $\\dfrac{2}{3} c^2 n (n-1)(2n-1)$.",
    ],
  },
  {
    id: "seq-sc-072",
    statement:
      "Let $b_i = 1 - a_i$ for each $i$, and define $a$ and $b$ by $na = \\displaystyle\\sum_{i=1}^{n} a_i$ and $nb = \\displaystyle\\sum_{i=1}^{n} b_i$. Evaluate $\\displaystyle\\sum_{i=1}^{n} a_i b_i + \\displaystyle\\sum_{i=1}^{n} (a_i - a)^2$.",
    format: "mcq",
    options: [
      { label: "A", text: "$ab$" },
      { label: "B", text: "$-nab$" },
      { label: "C", text: "$(n+1)ab$" },
      { label: "D", text: "$nab$" },
    ],
    answer: "D",
    topic: "sequences",
    subtopic: "Sigma & Telescoping",
    concepts: ["summation algebra", "mean and variance identities"],
    difficulty: "hard",
    source: "original",
    skills: ["manipulating sigma notation"],
    estMinutes: 6,
    tags: [TAG, "sigma-algebra"],
    hints: [
      "Note $\\sum b_i = n - \\sum a_i$ gives $b = 1 - a$, i.e. $a + b = 1$.",
      "Expand $\\sum (a_i - a)^2$ and combine with $\\sum a_i b_i = na - \\sum a_i^2$.",
    ],
    solution:
      "Since $b_i = 1 - a_i$, summing gives $nb = n - na$, so $a + b = 1$, i.e. $b = 1 - a$.\\n\\nFirst, $\\sum a_i b_i = \\sum a_i(1 - a_i) = na - \\sum a_i^2$.\\n\\nExpand the second sum: $\\sum (a_i - a)^2 = \\sum a_i^2 - 2a\\sum a_i + n a^2 = \\sum a_i^2 - 2a(na) + na^2 = \\sum a_i^2 - na^2$.\\n\\nAdding the two,\\n$$\\sum a_i b_i + \\sum (a_i - a)^2 = \\big(na - \\sum a_i^2\\big) + \\big(\\sum a_i^2 - na^2\\big) = na - na^2 = na(1 - a) = nab.$$",
    solutionSteps: [
      "$b_i = 1 - a_i \\Rightarrow nb = n - na \\Rightarrow a + b = 1$.",
      "$\\sum a_i b_i = na - \\sum a_i^2$.",
      "$\\sum (a_i - a)^2 = \\sum a_i^2 - na^2$.",
      "Sum $= na - na^2 = na(1-a) = nab$.",
    ],
  },
  {
    id: "seq-sc-073",
    statement:
      "Find the sum of the first $100$ terms of the series $1 + 3 + 7 + 15 + 31 + \\cdots$",
    format: "mcq",
    options: [
      { label: "A", text: "$2^{100} - 102$" },
      { label: "B", text: "$2^{99} - 101$" },
      { label: "C", text: "$2^{101} - 102$" },
      { label: "D", text: "None of these" },
    ],
    answer: "C",
    topic: "sequences",
    subtopic: "Sigma & Telescoping",
    concepts: ["difference series", "geometric series"],
    difficulty: "medium",
    source: "original",
    skills: ["identifying a term formula", "summing a geometric series"],
    estMinutes: 5,
    tags: [TAG, "special-series"],
    hints: [
      "The successive differences $2, 4, 8, 16, \\ldots$ are a G.P.; each term has the form $2^k - 1$.",
      "Split the sum into a geometric series and a constant.",
    ],
    solution:
      "The terms are $2^1 - 1, 2^2 - 1, 2^3 - 1, \\ldots$, so the $k$th term is $2^k - 1$. Then\\n$$S = \\sum_{k=1}^{100} (2^k - 1) = \\left(2 + 2^2 + \\cdots + 2^{100}\\right) - 100.$$\\nThe geometric part sums to $2\\cdot\\dfrac{2^{100} - 1}{2 - 1} = 2^{101} - 2$, so\\n$$S = (2^{101} - 2) - 100 = 2^{101} - 102.$$",
    solutionSteps: [
      "$k$th term $= 2^k - 1$.",
      "$S = (2 + 2^2 + \\cdots + 2^{100}) - 100$.",
      "Geometric sum $= 2^{101} - 2$, so $S = 2^{101} - 102$.",
    ],
  },
  {
    id: "seq-sc-074",
    statement:
      "In the sequence $1, 2, 2, 4, 4, 4, 4, 8, 8, 8, 8, 8, 8, 8, 8, \\ldots$ (the value $2^{k}$ is repeated $2^{k}$ times), what is the $1025^{\\text{th}}$ term?",
    format: "mcq",
    options: [
      { label: "A", text: "$2^{9}$" },
      { label: "B", text: "$2^{11}$" },
      { label: "C", text: "$2^{10}$" },
      { label: "D", text: "$2^{12}$" },
    ],
    answer: "C",
    topic: "sequences",
    subtopic: "Sigma & Telescoping",
    concepts: ["grouped sequence", "geometric sum of counts"],
    difficulty: "medium",
    source: "original",
    skills: ["locating a term within grouped blocks"],
    estMinutes: 4,
    tags: [TAG, "grouped-sequence"],
    hints: [
      "The block with value $2^k$ ends at position $1 + 2 + 4 + \\cdots + 2^k = 2^{k+1} - 1$.",
      "Find the block containing position $1025$.",
    ],
    solution:
      "The block whose common value is $2^n$ occupies positions up to $1 + 2 + 4 + \\cdots + 2^n = 2^{n+1} - 1$. Position $1025$ lies in block $n$ when\\n$$2^n - 1 < 1025 \\le 2^{n+1} - 1, \\quad\\text{i.e.}\\quad 2^n < 1026 \\le 2^{n+1}.$$\\nSince $2^{10} = 1024 < 1026 \\le 2048 = 2^{11}$, we get $n = 10$. Hence the $1025^{\\text{th}}$ term is $2^{10}$.",
    solutionSteps: [
      "Block of $2^n$ ends at position $2^{n+1} - 1$.",
      "Need $2^n < 1026 \\le 2^{n+1}$.",
      "$2^{10} = 1024 < 1026 \\le 2048 \\Rightarrow n = 10$; term is $2^{10}$.",
    ],
  },
  {
    id: "seq-sc-075",
    statement:
      "If $\\displaystyle\\sum_{i=1}^{n} \\sum_{j=1}^{i} \\sum_{k=1}^{j} 1 = 220$, find the value of $n$.",
    format: "mcq",
    options: [
      { label: "A", text: "$11$" },
      { label: "B", text: "$12$" },
      { label: "C", text: "$10$" },
      { label: "D", text: "$9$" },
    ],
    answer: "C",
    topic: "sequences",
    subtopic: "Sigma & Telescoping",
    concepts: ["multiple summation", "tetrahedral numbers"],
    difficulty: "medium",
    source: "original",
    skills: ["evaluating nested sums"],
    estMinutes: 4,
    tags: [TAG, "nested-sum"],
    hints: [
      "The innermost sum is $j$; sum over $j$ to get $\\dfrac{i(i+1)}{2}$.",
      "The triple sum equals $\\dfrac{n(n+1)(n+2)}{6}$.",
    ],
    solution:
      "Evaluating from the inside out, $\\sum_{k=1}^{j} 1 = j$, then $\\sum_{j=1}^{i} j = \\dfrac{i(i+1)}{2}$, and finally\\n$$\\sum_{i=1}^{n} \\dfrac{i(i+1)}{2} = \\dfrac{n(n+1)(n+2)}{6}.$$\\nSet this equal to $220$: $\\dfrac{n(n+1)(n+2)}{6} = 220 \\Rightarrow n(n+1)(n+2) = 1320 = 10 \\cdot 11 \\cdot 12$. Hence $n = 10$.",
    solutionSteps: [
      "$\\sum_k 1 = j$, $\\sum_j j = \\dfrac{i(i+1)}{2}$.",
      "Triple sum $= \\dfrac{n(n+1)(n+2)}{6}$.",
      "$\\dfrac{n(n+1)(n+2)}{6} = 220 \\Rightarrow n(n+1)(n+2) = 1320 = 10\\cdot11\\cdot12$, so $n = 10$.",
    ],
  },
  {
    id: "seq-sc-076",
    statement:
      "Given that $1^2 + 2^2 + 3^2 + \\cdots + 2003^2 = (2003)(4007)(334)$, and that $(1)(2003) + (2)(2002) + (3)(2001) + \\cdots + (2003)(1) = (2003)(334)(x)$, find $x$.",
    format: "mcq",
    options: [
      { label: "A", text: "$2005$" },
      { label: "B", text: "$2004$" },
      { label: "C", text: "$2003$" },
      { label: "D", text: "$2001$" },
    ],
    answer: "A",
    topic: "sequences",
    subtopic: "Sigma & Telescoping",
    concepts: ["summation", "sum of squares"],
    difficulty: "hard",
    source: "original",
    skills: ["expressing a product-sum via standard sums"],
    estMinutes: 6,
    tags: [TAG, "sigma-algebra"],
    hints: [
      "The $r$th term is $r \\cdot (2004 - r)$.",
      "Split into $2004\\sum r - \\sum r^2$ and use the given value of $\\sum r^2$.",
    ],
    solution:
      "The second sum has $r$th term $r\\big(2003 - (r-1)\\big) = r(2004 - r)$, so\\n$$S = \\sum_{r=1}^{2003} r(2004 - r) = 2004 \\sum_{r=1}^{2003} r - \\sum_{r=1}^{2003} r^2.$$\\nUsing $\\sum_{r=1}^{2003} r = \\dfrac{2003 \\cdot 2004}{2}$ and the given $\\sum_{r=1}^{2003} r^2 = 2003 \\cdot 4007 \\cdot 334$,\\n$$S = 2004 \\cdot \\dfrac{2003 \\cdot 2004}{2} - 2003 \\cdot 4007 \\cdot 334 = \\dfrac{2004^2 \\cdot 2003}{2} - 2003 \\cdot 4007 \\cdot 334.$$\\nSince $\\dfrac{2004^2}{2} = 2003 \\cdot \\ldots$ is unwieldy, factor $2003 \\cdot 334$: note $\\dfrac{2004^2 \\cdot 2003}{2} = 2003 \\cdot 334 \\cdot 6012$ (because $\\dfrac{2004^2}{2} = 334 \\cdot 6012$). Hence\\n$$S = 2003 \\cdot 334 \\cdot (6012 - 4007) = 2003 \\cdot 334 \\cdot 2005.$$\\nComparing with $S = (2003)(334)(x)$ gives $x = 2005$.",
    solutionSteps: [
      "$r$th term $= r(2004 - r)$, so $S = 2004\\sum r - \\sum r^2$.",
      "$\\sum r = \\dfrac{2003\\cdot 2004}{2}$, $\\sum r^2 = 2003\\cdot 4007\\cdot 334$.",
      "$S = 2003\\cdot 334\\cdot 6012 - 2003\\cdot 4007\\cdot 334 = 2003\\cdot 334\\cdot(6012 - 4007)$.",
      "$S = 2003\\cdot 334\\cdot 2005 \\Rightarrow x = 2005$.",
    ],
  },
];
