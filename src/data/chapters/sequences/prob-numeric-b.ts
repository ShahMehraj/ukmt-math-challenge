import type { Problem } from "@/lib/types";

/**
 * Sequences & Series — numeric integer-answer problems, chunk B (source #15-#28).
 *
 * ORIGINAL practice problems reworded in the app's own voice from a Cengage
 * "Sequences & Series" exercise bank. The mathematics (numbers, expressions,
 * structure) is preserved exactly; the English is rewritten. Every solution is
 * a clean, independently verified derivation.
 *
 * Tagged `cengage-seq` so the Problem Bank can filter to this chapter's set.
 */

export const seqNumericB: Problem[] = [
  {
    id: "seq-nv-015",
    statement:
      "The three roots of $10x^3 - nx^2 - 54x - 27 = 0$ form a harmonic progression. Find the value of $n$.",
    format: "numeric",
    answer: "9",
    acceptedAnswers: ["9"],
    topic: "sequences",
    subtopic: "Harmonic Progression",
    concepts: [
      "harmonic progression",
      "reciprocal substitution",
      "Vieta's formulas",
      "roots in A.P.",
    ],
    difficulty: "hard",
    source: "original",
    skills: ["converting H.P. roots to A.P.", "applying symmetric functions of roots"],
    estMinutes: 6,
    tags: ["cengage-seq", "hp"],
    hints: [
      "Roots in H.P. become roots in A.P. under the substitution $x = 1/t$.",
      "Write the A.P. roots as $a-d,\\; a,\\; a+d$ and use the sum and product of roots.",
    ],
    solution:
      "Substituting $x = 1/t$ into $10x^3 - nx^2 - 54x - 27 = 0$ and clearing denominators gives $27t^3 + 54t^2 + nt - 10 = 0$, whose roots are the reciprocals of the original roots and hence in A.P.\n\nLet those roots be $a-d,\\; a,\\; a+d$. The sum of roots is $3a = -\\dfrac{54}{27} = -2$, so $a = -\\dfrac{2}{3}$.\n\nThe product of roots is $(a-d)\\,a\\,(a+d) = \\dfrac{10}{27}$, i.e. $-\\dfrac{2}{3}\\left(\\dfrac{4}{9} - d^2\\right) = \\dfrac{10}{27}$, giving $\\dfrac{4}{9} - d^2 = -\\dfrac{5}{9}$, so $d^2 = 1$ and $d = \\pm 1$.\n\nThe roots are therefore $\\dfrac{1}{3},\\; -\\dfrac{2}{3},\\; -\\dfrac{5}{3}$. Using the sum of pairwise products, $\\dfrac{n}{27} = \\dfrac{10}{9} - \\dfrac{5}{9} - \\dfrac{2}{9} = \\dfrac{3}{9}$, so $n = 9$.",
    solutionSteps: [
      "Put $x = 1/t$ to get $27t^3 + 54t^2 + nt - 10 = 0$ with roots in A.P.",
      "Sum of roots $3a = -2 \\Rightarrow a = -2/3$.",
      "Product of roots gives $d^2 = 1$, so the roots are $1/3, -2/3, -5/3$.",
      "Sum of pairwise products: $n/27 = 3/9 \\Rightarrow n = 9$.",
    ],
  },
  {
    id: "seq-nv-016",
    statement:
      "Suppose $a,\\, b,\\, c$ are in A.P., $b,\\, c,\\, d$ are in G.P., and $c,\\, d,\\, e$ are in H.P. If $a = 2$ and $e = 18$, find the sum of all possible values of $c$.",
    format: "numeric",
    answer: "0",
    acceptedAnswers: ["0"],
    topic: "sequences",
    subtopic: "Means & Inequalities",
    concepts: [
      "arithmetic progression",
      "geometric progression",
      "harmonic progression",
      "mean relations",
    ],
    difficulty: "hard",
    source: "original",
    skills: ["combining A.P./G.P./H.P. mean conditions", "eliminating variables"],
    estMinutes: 5,
    tags: ["cengage-seq", "means"],
    hints: [
      "Write $b = \\dfrac{a+c}{2}$, $c^2 = bd$, and $d = \\dfrac{2ce}{c+e}$.",
      "Eliminate $b$ and $d$ to relate $c$ directly to $a$ and $e$.",
    ],
    solution:
      "From the A.P. condition, $b = \\dfrac{a+c}{2}$. From the G.P. condition, $c^2 = bd$. From the H.P. condition, $d = \\dfrac{2ce}{c+e}$.\n\nSubstituting $b$ and $d$ into $c^2 = bd$:\n$$c^2 = \\left(\\dfrac{a+c}{2}\\right)\\left(\\dfrac{2ce}{c+e}\\right).$$\nMultiplying out, $c^2(c+e) = (a+c)ce$, i.e. $c^3 + c^2 e = ace + c^2 e$, which simplifies to $c^2 = ae$.\n\nWith $a = 2$ and $e = 18$, $c^2 = 36$, so $c = 6$ or $c = -6$. The sum of all possible values of $c$ is $6 + (-6) = 0$.",
    solutionSteps: [
      "Mean relations: $b = (a+c)/2$, $c^2 = bd$, $d = 2ce/(c+e)$.",
      "Substitute to obtain $c^2 = ae$.",
      "With $a=2$, $e=18$: $c^2 = 36 \\Rightarrow c = \\pm 6$.",
      "Sum of possible values $= 6 + (-6) = 0$.",
    ],
  },
  {
    id: "seq-nv-017",
    statement:
      "For each positive integer $k$, let $S_k$ be the sum of the infinite G.P. with first term $k$ and common ratio $\\dfrac{1}{k+1}$. Evaluate $\\displaystyle\\sum_{k=1}^{10} S_k$.",
    format: "numeric",
    answer: "65",
    acceptedAnswers: ["65"],
    topic: "sequences",
    subtopic: "Geometric Progression",
    concepts: ["infinite geometric series", "sum of a G.P.", "arithmetic series sum"],
    difficulty: "medium",
    source: "original",
    skills: ["summing an infinite G.P.", "collapsing to an arithmetic sum"],
    estMinutes: 3,
    tags: ["cengage-seq", "gp"],
    hints: [
      "Use $S_k = \\dfrac{\\text{first term}}{1 - \\text{ratio}}$.",
      "Simplify $S_k$ before summing over $k$.",
    ],
    solution:
      "The infinite G.P. sum is\n$$S_k = \\dfrac{k}{1 - \\dfrac{1}{k+1}} = \\dfrac{k}{\\dfrac{k}{k+1}} = k + 1.$$\nTherefore\n$$\\sum_{k=1}^{10} S_k = \\sum_{k=1}^{10} (k + 1) = \\dfrac{10 \\times 11}{2} + 10 = 55 + 10 = 65.$$",
    solutionSteps: [
      "$S_k = \\dfrac{k}{1 - 1/(k+1)} = k + 1$.",
      "$\\sum_{k=1}^{10}(k+1) = 55 + 10 = 65$.",
    ],
  },
  {
    id: "seq-nv-018",
    statement:
      "Compute $\\displaystyle\\sum_{i=1}^{20} i\\left(\\dfrac{1}{i} + \\dfrac{1}{i+1} + \\dfrac{1}{i+2} + \\ldots + \\dfrac{1}{20}\\right)$.",
    format: "numeric",
    answer: "115",
    acceptedAnswers: ["115"],
    topic: "sequences",
    subtopic: "Sigma & Telescoping",
    concepts: ["double summation", "swapping order of summation", "arithmetic series"],
    difficulty: "hard",
    source: "original",
    skills: ["reindexing a double sum", "collecting coefficients of $1/r$"],
    estMinutes: 6,
    tags: ["cengage-seq", "sigma"],
    hints: [
      "Group the whole expression by the fraction $\\dfrac{1}{r}$ instead of by $i$.",
      "The coefficient of $\\dfrac{1}{r}$ is $1 + 2 + \\cdots + r = \\dfrac{r(r+1)}{2}$.",
    ],
    solution:
      "Regrouping the terms so that each $\\dfrac{1}{r}$ is collected together, the coefficient of $\\dfrac{1}{r}$ is $1 + 2 + \\cdots + r = \\dfrac{r(r+1)}{2}$. Hence\n$$\\sum_{i=1}^{20} i\\left(\\dfrac{1}{i} + \\cdots + \\dfrac{1}{20}\\right) = \\sum_{r=1}^{20} \\dfrac{1}{r} \\cdot \\dfrac{r(r+1)}{2} = \\sum_{r=1}^{20} \\dfrac{r+1}{2}.$$\nThis equals\n$$\\dfrac{1}{2}\\sum_{r=1}^{20} r + \\dfrac{1}{2}\\sum_{r=1}^{20} 1 = \\dfrac{1}{2}\\cdot\\dfrac{20 \\times 21}{2} + \\dfrac{20}{2} = 105 + 10 = 115.$$",
    solutionSteps: [
      "Collect by $1/r$: coefficient of $1/r$ is $\\dfrac{r(r+1)}{2}$.",
      "Sum becomes $\\sum_{r=1}^{20} \\dfrac{r+1}{2}$.",
      "$= 105 + 10 = 115$.",
    ],
  },
  {
    id: "seq-nv-019",
    statement:
      "The sum of the first $k$ terms of $1^3 + 2^3 + 3^3 + \\ldots$ minus the sum of the first $k$ terms of $1 + 2 + 3 + \\ldots$ equals $1980$. Find $k$.",
    format: "numeric",
    answer: "9",
    acceptedAnswers: ["9"],
    topic: "sequences",
    subtopic: "Sigma & Telescoping",
    concepts: ["sum of cubes", "sum of naturals", "factoring into consecutive integers"],
    difficulty: "hard",
    source: "original",
    skills: ["applying standard power-sum formulas", "recognising a product of consecutive integers"],
    estMinutes: 5,
    tags: ["cengage-seq", "sigma"],
    hints: [
      "Use $\\sum k^3 = \\left(\\dfrac{k(k+1)}{2}\\right)^2$ and $\\sum k = \\dfrac{k(k+1)}{2}$.",
      "Factor the result into a product of four consecutive integers.",
    ],
    solution:
      "Using the standard formulas,\n$$\\left(\\dfrac{k(k+1)}{2}\\right)^2 - \\dfrac{k(k+1)}{2} = 1980.$$\nFactoring,\n$$\\dfrac{k(k+1)}{2}\\left(\\dfrac{k(k+1)}{2} - 1\\right) = 1980,$$\nso $k(k+1)(k^2 + k - 2) = 4 \\times 1980 = 7920$. Since $k^2 + k - 2 = (k-1)(k+2)$,\n$$(k-1)\\,k\\,(k+1)\\,(k+2) = 7920 = 8 \\times 9 \\times 10 \\times 11.$$\nMatching the four consecutive integers gives $k - 1 = 8$, so $k = 9$.",
    solutionSteps: [
      "$\\left(\\tfrac{k(k+1)}{2}\\right)^2 - \\tfrac{k(k+1)}{2} = 1980$.",
      "Factor to $(k-1)k(k+1)(k+2) = 7920$.",
      "$7920 = 8\\cdot 9\\cdot 10\\cdot 11 \\Rightarrow k = 9$.",
    ],
  },
  {
    id: "seq-nv-020",
    statement:
      "Find the value of $\\displaystyle\\sum_{n=0}^{\\infty} \\dfrac{2n+3}{3^n}$.",
    format: "numeric",
    answer: "6",
    acceptedAnswers: ["6"],
    topic: "sequences",
    subtopic: "AGP",
    concepts: ["arithmetico-geometric series", "infinite G.P.", "sum by shifting and subtracting"],
    difficulty: "hard",
    source: "original",
    skills: ["splitting into a constant, a G.P., and an A.G.P.", "summing $\\sum n/3^n$"],
    estMinutes: 5,
    tags: ["cengage-seq", "agp"],
    hints: [
      "Separate the $n=0$ term, then split $\\dfrac{2n+3}{3^n}$ into $\\dfrac{2n}{3^n}$ and $\\dfrac{3}{3^n}$.",
      "Evaluate $\\sum_{n\\ge1} \\dfrac{2n}{3^n}$ by the shift-and-subtract technique.",
    ],
    solution:
      "Take out the $n=0$ term (which is $3$) and split the rest:\n$$S = 3 + \\sum_{n=1}^{\\infty}\\dfrac{2n+3}{3^n} = 3 + \\underbrace{\\sum_{n=1}^{\\infty}\\dfrac{3}{3^n}}_{S_1} + \\underbrace{\\sum_{n=1}^{\\infty}\\dfrac{2n}{3^n}}_{S_2}.$$\nHere $S_1 = 3\\left(\\dfrac{1/3}{1 - 1/3}\\right) = 3 \\cdot \\dfrac{1}{2} = \\dfrac{3}{2}$.\n\nFor $S_2 = \\dfrac{2}{3} + \\dfrac{4}{3^2} + \\dfrac{6}{3^3} + \\cdots$, multiply by $\\dfrac{1}{3}$ and subtract:\n$$S_2 - \\dfrac{S_2}{3} = \\dfrac{2}{3} + \\dfrac{2}{3^2} + \\dfrac{2}{3^3} + \\cdots = \\dfrac{2/3}{1 - 1/3} = 1,$$\nso $\\dfrac{2S_2}{3} = 1$ and $S_2 = \\dfrac{3}{2}$.\n\nHence $S = 3 + \\dfrac{3}{2} + \\dfrac{3}{2} = 6.$",
    solutionSteps: [
      "Separate $n=0$ term ($=3$).",
      "$S_1 = \\sum_{n\\ge1} 3/3^n = 3/2$.",
      "$S_2 = \\sum_{n\\ge1} 2n/3^n = 3/2$ by shift-and-subtract.",
      "$S = 3 + 3/2 + 3/2 = 6$.",
    ],
  },
  {
    id: "seq-nv-021",
    statement:
      "The infinite arithmetico-geometric progression begins $3,\\; 4,\\; 4,\\; \\ldots$ Find its sum to infinity.",
    format: "numeric",
    answer: "27",
    acceptedAnswers: ["27"],
    topic: "sequences",
    subtopic: "AGP",
    concepts: ["arithmetico-geometric progression", "sum to infinity of an A.G.P.", "solving for r"],
    difficulty: "hard",
    source: "original",
    skills: ["matching an A.G.P. template to given terms", "using the A.G.P. sum formula"],
    estMinutes: 6,
    tags: ["cengage-seq", "agp"],
    hints: [
      "Write the terms as $a,\\;(a+d)r,\\;(a+2d)r^2,\\ldots$ and match to $3, 4, 4$.",
      "For convergence choose $|r| < 1$, then use $S_\\infty = \\dfrac{a}{1-r} + \\dfrac{dr}{(1-r)^2}$.",
    ],
    solution:
      "Model the A.G.P. as $a,\\;(a+d)r,\\;(a+2d)r^2,\\ldots$. Matching the given terms:\n$$a = 3,\\quad (3+d)r = 4,\\quad (3+2d)r^2 = 4.$$\nFrom the second equation $d = \\dfrac{4}{r} - 3$, and from the third $d = \\dfrac{1}{2}\\left(\\dfrac{4}{r^2} - 3\\right)$. Equating and simplifying gives\n$$3r^2 - 8r + 4 = 0 \\Rightarrow (3r - 2)(r - 2) = 0.$$\nFor an infinite (convergent) A.G.P. we need $|r| < 1$, so $r = \\dfrac{2}{3}$. Then $(3+d)\\dfrac{2}{3} = 4$ gives $d = 3$.\n\nThe sum to infinity is\n$$S_\\infty = \\dfrac{a}{1-r} + \\dfrac{dr}{(1-r)^2} = \\dfrac{3}{1 - 2/3} + \\dfrac{3 \\cdot 2/3}{(1 - 2/3)^2} = 9 + 18 = 27.$$",
    solutionSteps: [
      "Match $a=3$, $(3+d)r=4$, $(3+2d)r^2=4$.",
      "Solve $3r^2 - 8r + 4 = 0 \\Rightarrow r = 2/3$ (convergent).",
      "$d = 3$.",
      "$S_\\infty = 9 + 18 = 27$.",
    ],
  },
  {
    id: "seq-nv-022",
    statement:
      "Evaluate $\\displaystyle\\sum_{r=1}^{50} \\dfrac{r^2}{r^2 + (51-r)^2}$.",
    format: "numeric",
    answer: "25",
    acceptedAnswers: ["25"],
    topic: "sequences",
    subtopic: "Sigma & Telescoping",
    concepts: ["reversal symmetry", "pairing terms", "reverse-and-add"],
    difficulty: "hard",
    source: "original",
    skills: ["exploiting the reflection $r \\mapsto 51 - r$", "reverse-and-add summation"],
    estMinutes: 4,
    tags: ["cengage-seq", "sigma"],
    hints: [
      "Write the sum a second time replacing $r$ by $51 - r$: this permutes the indices $1,\\ldots,50$ among themselves.",
      "Add the two forms; each pair of numerators sums to the common denominator.",
    ],
    solution:
      "Let $I = \\displaystyle\\sum_{r=1}^{50} \\dfrac{r^2}{r^2 + (51-r)^2}$. The substitution $r \\mapsto 51 - r$ maps the index set $\\{1,2,\\ldots,50\\}$ onto itself, so it gives the equal-valued sum\n$$I = \\sum_{r=1}^{50} \\dfrac{(51-r)^2}{(51-r)^2 + r^2}.$$\nAdding the two expressions, each term pairs to $\\dfrac{r^2 + (51-r)^2}{r^2 + (51-r)^2} = 1$, so\n$$2I = \\sum_{r=1}^{50} 1 = 50 \\Rightarrow I = 25.$$",
    solutionSteps: [
      "Rewrite $I$ with $r \\to 51 - r$ (a permutation of $\\{1,\\ldots,50\\}$).",
      "Add both forms: each term becomes $1$.",
      "$2I = 50 \\Rightarrow I = 25$.",
    ],
  },
  {
    id: "seq-nv-023",
    statement:
      "If $\\displaystyle\\sum_{r=0}^{100} \\dfrac{1}{2^r + 2^{50}} = \\dfrac{n}{2^{51}}$, find $n$.",
    format: "numeric",
    answer: "101",
    acceptedAnswers: ["101"],
    topic: "sequences",
    subtopic: "Sigma & Telescoping",
    concepts: ["reverse-and-add", "pairing terms", "symmetric summation"],
    difficulty: "hard",
    source: "original",
    skills: ["pairing $r$ with $100 - r$", "algebraic simplification of paired fractions"],
    estMinutes: 5,
    tags: ["cengage-seq", "sigma"],
    hints: [
      "Write the sum forwards and backwards (index $r$ vs $100 - r$).",
      "Add corresponding terms and simplify $\\dfrac{1}{2^r + 2^{50}} + \\dfrac{1}{2^{100-r} + 2^{50}}$.",
    ],
    solution:
      "Let $S = \\displaystyle\\sum_{r=0}^{100} \\dfrac{1}{2^r + 2^{50}}$. There are $101$ terms ($r = 0$ to $100$). Writing the same sum in reverse (replace $r$ by $100 - r$, a permutation of $\\{0,\\ldots,100\\}$):\n$$S = \\sum_{r=0}^{100} \\dfrac{1}{2^{100-r} + 2^{50}}.$$\nAdd the two forms. For each $r$,\n$$\\dfrac{1}{2^r + 2^{50}} + \\dfrac{1}{2^{100-r} + 2^{50}} = \\dfrac{2^r + 2^{100-r} + 2\\cdot2^{50}}{(2^r + 2^{50})(2^{100-r} + 2^{50})}.$$\nThe denominator is $2^{100} + 2^{50}(2^r + 2^{100-r}) + 2^{100} = 2^{50}\\big(2^r + 2^{100-r} + 2\\cdot 2^{50}\\big)$, exactly $2^{50}$ times the numerator, so each paired term equals $\\dfrac{1}{2^{50}}$. Summing over all $101$ indices, $2S = \\dfrac{101}{2^{50}}$, hence $S = \\dfrac{101}{2^{51}}$ and $n = 101$.",
    solutionSteps: [
      "Write $S$ forwards and backwards over $r = 0 \\ldots 100$ ($101$ terms).",
      "Each paired term simplifies to $\\dfrac{1}{2^{50}}$.",
      "$2S = \\dfrac{101}{2^{50}} \\Rightarrow S = \\dfrac{101}{2^{51}}$, so $n = 101$.",
    ],
  },
  {
    id: "seq-nv-024",
    statement:
      "Let $\\langle a_n \\rangle$ be an arithmetic sequence of $99$ terms whose odd-numbered terms sum to $1000$. Evaluate $\\displaystyle\\sum_{r=1}^{50} (-1)^{\\frac{r(r+1)}{2}} \\, a_{2r-1}$.",
    format: "numeric",
    answer: "-40",
    acceptedAnswers: ["-40", "−40"],
    topic: "sequences",
    subtopic: "Arithmetic Progression",
    concepts: ["arithmetic progression", "sign pattern of $(-1)^{r(r+1)/2}$", "pairing terms"],
    difficulty: "olympiad",
    source: "original",
    skills: ["summing odd-indexed A.P. terms", "tracking a period-4 sign pattern"],
    estMinutes: 7,
    tags: ["cengage-seq", "ap"],
    hints: [
      "There are $50$ odd-numbered terms $a_1, a_3, \\ldots, a_{99}$; their sum fixes $a_1 + a_{99}$.",
      "The sign $(-1)^{r(r+1)/2}$ repeats in the pattern $-,-,+,+$; count how many $+$ and $-$ terms occur.",
    ],
    solution:
      "The odd-numbered terms are $a_1, a_3, \\ldots, a_{99}$ — exactly $50$ terms in A.P. Their sum is $\\dfrac{50}{2}(a_1 + a_{99}) = 25(a_1 + a_{99}) = 1000$, so $a_1 + a_{99} = 40$.\n\nThe factor $(-1)^{r(r+1)/2}$ cycles with period $4$ as $-,-,+,+$ for $r = 1,2,3,4,\\ldots$, so\n$$S = -a_1 - a_3 + a_5 + a_7 - a_9 - a_{11} + \\cdots + a_{93} + a_{95} - a_{97} - a_{99}.$$\nAcross $r = 1$ to $50$ this gives $26$ negative and $24$ positive terms. Because the terms are in A.P., the positive and negative contributions cancel in matched pairs, leaving only the two unmatched extreme terms $-a_1$ and $-a_{99}$. Hence\n$$S = -a_1 - a_{99} = -(a_1 + a_{99}) = -40.$$",
    solutionSteps: [
      "$25(a_1 + a_{99}) = 1000 \\Rightarrow a_1 + a_{99} = 40$.",
      "Sign pattern $-,-,+,+$: 26 negative, 24 positive terms.",
      "Interior terms cancel; leftover is $-a_1 - a_{99}$.",
      "$S = -(a_1 + a_{99}) = -40$.",
    ],
  },
  {
    id: "seq-nv-025",
    statement:
      "The sum of $n$ terms of $\\dfrac{2n+1}{2n-1} + 3\\left(\\dfrac{2n+1}{2n-1}\\right)^2 + 5\\left(\\dfrac{2n+1}{2n-1}\\right)^3 + \\ldots$ (the $k$-th term is $(2k-1)r^k$ with $r = \\dfrac{2n+1}{2n-1}$) equals $820$. Find $n$.",
    format: "numeric",
    answer: "20",
    acceptedAnswers: ["20"],
    topic: "sequences",
    subtopic: "AGP",
    concepts: ["arithmetico-geometric series", "finite A.G.P. sum", "self-referential ratio"],
    difficulty: "olympiad",
    source: "original",
    skills: ["multiply-shift-subtract for a finite A.G.P.", "back-substituting $r = \\frac{2n+1}{2n-1}$"],
    estMinutes: 8,
    tags: ["cengage-seq", "agp"],
    hints: [
      "Set $r = \\dfrac{2n+1}{2n-1}$ so the sum is $S = r + 3r^2 + 5r^3 + \\cdots + (2n-1)r^n$.",
      "Form $rS$, subtract, sum the resulting G.P., then substitute $r = \\dfrac{2n+1}{2n-1}$.",
    ],
    solution:
      "Let $r = \\dfrac{2n+1}{2n-1}$, so\n$$S = r + 3r^2 + 5r^3 + \\cdots + (2n-1)r^n = 820.$$\nMultiplying by $r$ and subtracting,\n$$(1-r)S = r + 2r^2 + 2r^3 + \\cdots + 2r^n - (2n-1)r^{n+1}.$$\nSumming the interior G.P. and simplifying leads, after multiplying by $(1-r)$ again, to\n$$820(1-r)^2 = r + r^2 - (2n+1)r^{n+1} + (2n-1)r^{n+2}.$$\nBecause $(2n-1)r = 2n+1$, the two $r^{n+1}$-order terms cancel, leaving\n$$820(1-r)^2 = r(1+r).$$\nNow $1 - r = 1 - \\dfrac{2n+1}{2n-1} = \\dfrac{-2}{2n-1}$ and $1 + r = \\dfrac{4n}{2n-1}$, so\n$$820\\left(\\dfrac{-2}{2n-1}\\right)^2 = \\dfrac{2n+1}{2n-1}\\cdot\\dfrac{4n}{2n-1}.$$\nThis reduces to $820 \\cdot 4 = 4n(2n+1)$, i.e. $820 = n(2n+1)$. Solving, $2n^2 + n - 820 = 0$ gives $n = 20$.",
    solutionSteps: [
      "Set $r = \\dfrac{2n+1}{2n-1}$; $S = \\sum (2k-1)r^k = 820$.",
      "Multiply-shift-subtract and simplify to $820(1-r)^2 = r(1+r)$.",
      "Substitute $1-r = \\dfrac{-2}{2n-1}$, $1+r = \\dfrac{4n}{2n-1}$.",
      "Obtain $820 = n(2n+1) \\Rightarrow n = 20$.",
    ],
  },
  {
    id: "seq-nv-026",
    statement:
      "Let $S = \\displaystyle\\sum_{n=1}^{9999} \\dfrac{1}{\\left(\\sqrt{n} + \\sqrt{n+1}\\right)\\left(\\sqrt[4]{n} + \\sqrt[4]{n+1}\\right)}$. Find $S$.",
    format: "numeric",
    answer: "9",
    acceptedAnswers: ["9"],
    topic: "sequences",
    subtopic: "Sigma & Telescoping",
    concepts: ["rationalising surds", "telescoping series", "fourth roots"],
    difficulty: "hard",
    source: "original",
    skills: ["rationalising nested radical denominators", "collapsing a telescoping sum"],
    estMinutes: 6,
    tags: ["cengage-seq", "sigma"],
    hints: [
      "Multiply numerator and denominator by $\\sqrt[4]{n+1} - \\sqrt[4]{n}$.",
      "Each term collapses to $(n+1)^{1/4} - n^{1/4}$, which telescopes.",
    ],
    solution:
      "Rationalise each term by multiplying by $\\dfrac{\\sqrt[4]{n+1} - \\sqrt[4]{n}}{\\sqrt[4]{n+1} - \\sqrt[4]{n}}$. The denominator becomes\n$$\\left(\\sqrt{n} + \\sqrt{n+1}\\right)\\left(\\sqrt[4]{n+1} - \\sqrt[4]{n}\\right)\\left(\\sqrt[4]{n} + \\sqrt[4]{n+1}\\right).$$\nSince $\\left(\\sqrt[4]{n+1} - \\sqrt[4]{n}\\right)\\left(\\sqrt[4]{n+1} + \\sqrt[4]{n}\\right) = \\sqrt{n+1} - \\sqrt{n}$, and then $\\left(\\sqrt{n+1} - \\sqrt{n}\\right)\\left(\\sqrt{n+1} + \\sqrt{n}\\right) = 1$, the whole term simplifies to\n$$(n+1)^{1/4} - n^{1/4}.$$\nThus\n$$S = \\sum_{n=1}^{9999}\\left((n+1)^{1/4} - n^{1/4}\\right) = 10000^{1/4} - 1^{1/4} = (10^4)^{1/4} - 1 = 10 - 1 = 9.$$",
    solutionSteps: [
      "Rationalise with $\\sqrt[4]{n+1} - \\sqrt[4]{n}$.",
      "Each term collapses to $(n+1)^{1/4} - n^{1/4}$.",
      "Telescoping: $S = 10000^{1/4} - 1 = 10 - 1 = 9$.",
    ],
  },
  {
    id: "seq-nv-027",
    statement:
      "Let $S = \\dfrac{3}{2^3} + \\dfrac{4}{2^4 \\cdot 3} + \\dfrac{5}{2^6 \\cdot 3} + \\dfrac{6}{2^7 \\cdot 5} + \\cdots$ to infinity, where the $r$-th term is $\\dfrac{r+2}{2^{r+1}\\, r\\,(r+1)}$. Find the value of $S^{-1}$.",
    format: "numeric",
    answer: "2",
    acceptedAnswers: ["2"],
    topic: "sequences",
    subtopic: "Sigma & Telescoping",
    concepts: ["partial fractions", "telescoping infinite series", "geometric decay"],
    difficulty: "olympiad",
    source: "original",
    skills: ["splitting into telescoping partial fractions", "taking the limit of a tail term"],
    estMinutes: 7,
    tags: ["cengage-seq", "sigma"],
    hints: [
      "Write the general term as $\\dfrac{r+2}{2^{r+1} r (r+1)}$ and split $r+2 = 2(r+1) - r$.",
      "This gives a telescoping form $\\dfrac{1}{2^r r} - \\dfrac{1}{2^{r+1}(r+1)}$.",
    ],
    solution:
      "The general term is $\\dfrac{r+2}{2^{r+1}\\, r\\,(r+1)}$. Write $r+2 = 2(r+1) - r$:\n$$\\dfrac{2(r+1) - r}{2^{r+1}\\, r\\,(r+1)} = \\dfrac{1}{2^{r+1}}\\left(\\dfrac{2}{r} - \\dfrac{1}{r+1}\\right) = \\dfrac{1}{2^r\\, r} - \\dfrac{1}{2^{r+1}(r+1)}.$$\nThis telescopes: writing $u_r = \\dfrac{1}{2^r\\, r}$, each term is $u_r - u_{r+1}$. Therefore\n$$S = \\sum_{r=1}^{\\infty}(u_r - u_{r+1}) = u_1 - \\lim_{r\\to\\infty} u_{r+1} = \\dfrac{1}{2\\cdot 1} - 0 = \\dfrac{1}{2}.$$\nHence $S^{-1} = 2.$",
    solutionSteps: [
      "General term $= \\dfrac{r+2}{2^{r+1} r(r+1)}$; split $r+2 = 2(r+1) - r$.",
      "Term $= \\dfrac{1}{2^r r} - \\dfrac{1}{2^{r+1}(r+1)}$ (telescoping).",
      "$S = \\dfrac{1}{2}$, so $S^{-1} = 2$.",
    ],
  },
  {
    id: "seq-nv-028",
    statement:
      "Let $S = \\dfrac{7}{2^2 \\times 5^2} + \\dfrac{13}{5^2 \\times 8^2} + \\dfrac{19}{8^2 \\times 11^2} + \\ldots$ ($10$ terms), where the $r$-th term is $\\dfrac{6r+1}{(3r-1)^2 (3r+2)^2}$. Find $1024\\,S$.",
    format: "numeric",
    answer: "85",
    acceptedAnswers: ["85"],
    topic: "sequences",
    subtopic: "Sigma & Telescoping",
    concepts: ["difference-of-squares numerator", "telescoping series", "partial fractions"],
    difficulty: "olympiad",
    source: "original",
    skills: ["expressing the numerator as a difference of squares", "collapsing a telescoping finite sum"],
    estMinutes: 7,
    tags: ["cengage-seq", "sigma"],
    hints: [
      "Note $6r + 1 = \\dfrac{1}{3}\\big[(3r+2)^2 - (3r-1)^2\\big]$.",
      "This turns each term into $\\dfrac{1}{3}\\left(\\dfrac{1}{(3r-1)^2} - \\dfrac{1}{(3r+2)^2}\\right)$, which telescopes.",
    ],
    solution:
      "The $r$-th term is $\\dfrac{6r+1}{(3r-1)^2 (3r+2)^2}$. Since $(3r+2)^2 - (3r-1)^2 = (6r+1)(3) = 3(6r+1)$, we have $6r+1 = \\dfrac{1}{3}\\big[(3r+2)^2 - (3r-1)^2\\big]$, so\n$$\\dfrac{6r+1}{(3r-1)^2(3r+2)^2} = \\dfrac{1}{3}\\left(\\dfrac{1}{(3r-1)^2} - \\dfrac{1}{(3r+2)^2}\\right).$$\nSumming $r = 1$ to $10$ telescopes, leaving the first and last terms:\n$$S = \\dfrac{1}{3}\\left(\\dfrac{1}{2^2} - \\dfrac{1}{32^2}\\right) = \\dfrac{1}{3}\\left(\\dfrac{1}{4} - \\dfrac{1}{1024}\\right) = \\dfrac{1}{3}\\cdot\\dfrac{256 - 1}{1024} = \\dfrac{255}{3072} = \\dfrac{85}{1024}.$$\nTherefore $1024\\,S = 85.$",
    solutionSteps: [
      "$6r+1 = \\dfrac{1}{3}\\big[(3r+2)^2 - (3r-1)^2\\big]$.",
      "Term $= \\dfrac{1}{3}\\left(\\dfrac{1}{(3r-1)^2} - \\dfrac{1}{(3r+2)^2}\\right)$.",
      "Telescope $r=1\\ldots10$: $S = \\dfrac{1}{3}\\left(\\dfrac{1}{4} - \\dfrac{1}{1024}\\right) = \\dfrac{85}{1024}$.",
      "$1024\\,S = 85$.",
    ],
  },
];
