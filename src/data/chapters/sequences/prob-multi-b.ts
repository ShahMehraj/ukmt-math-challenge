import type { Problem } from "@/lib/types";

/**
 * Original multiple-answer practice problems for the "Sequences & Series"
 * chapter (Cengage companion), chunk B: source problems #13-#24.
 *
 * Every statement is reworded in the app's own voice; the mathematics is
 * unchanged. Multiple-correct items use format "text" (no multi-select UI):
 * the four choices live inside the statement as (1)...(4) and `answer` lists
 * the correct option numbers. Answers follow the official key.
 */

const T = "cengage-seq";

export const seqMultiB: Problem[] = [
  {
    id: "seq-mc-013",
    statement:
      "Suppose the infinite series $1 + 2x + 3x^2 + 4x^3 + \\cdots$ converges to a value that is at least $4$. Decide which of the following are correct.\n\n(1) the least admissible value of $x$ is $\\dfrac{1}{2}$\n(2) the greatest admissible value of $x$ is $\\dfrac{4}{3}$\n(3) the least admissible value of $x$ is $\\dfrac{2}{3}$\n(4) no greatest admissible value of $x$ exists",
    format: "text",
    answer: "1, 4",
    acceptedAnswers: ["1,4", "(1),(4)", "(1), (4)"],
    topic: "sequences",
    subtopic: "AGP",
    concepts: ["arithmetico-geometric series", "sum to infinity", "inequality on ratio"],
    difficulty: "hard",
    source: "original",
    skills: ["summing an AGP", "solving a quadratic inequality", "convergence range"],
    estMinutes: 5,
    tags: [T, "agp", "multiple-correct"],
    hints: [
      "Multiply the series by $x$ and subtract to collapse it to a geometric sum.",
      "The closed form is $\\dfrac{1}{(1-x)^2}$; combine the inequality with $|x|<1$.",
    ],
    solution:
      "Let $S = 1 + 2x + 3x^2 + \\cdots$. Then $xS = x + 2x^2 + 3x^3 + \\cdots$, so $(1-x)S = 1 + x + x^2 + \\cdots = \\dfrac{1}{1-x}$, giving $S = \\dfrac{1}{(1-x)^2}$. The condition $S \\ge 4$ becomes $(1-x)^2 \\le \\dfrac{1}{4}$, i.e. $-\\dfrac{1}{2} \\le x-1 \\le \\dfrac{1}{2}$, so $\\dfrac{1}{2} \\le x \\le \\dfrac{3}{2}$. Convergence requires $|x|<1$, hence $\\dfrac{1}{2} \\le x < 1$. The least value of $x$ is $\\dfrac{1}{2}$, and since $x$ only approaches $1$ without attaining it, no greatest value exists. Correct options: (1) and (4).",
    solutionSteps: [
      "Collapse the AGP: $S = \\dfrac{1}{(1-x)^2}$.",
      "Apply $S \\ge 4 \\Rightarrow (1-x)^2 \\le \\dfrac{1}{4} \\Rightarrow \\dfrac{1}{2} \\le x \\le \\dfrac{3}{2}$.",
      "Intersect with convergence $|x|<1$: $\\dfrac{1}{2} \\le x < 1$.",
      "Least value $=\\dfrac{1}{2}$; no greatest value. Answer (1),(4).",
    ],
  },
  {
    id: "seq-mc-014",
    statement:
      "Squares $S_1, S_2, \\ldots$ are built so that for every $n \\ge 1$ the side of $S_n$ equals the diagonal of $S_{n+1}$. If $S_1$ has side length $10$ cm, for which of the listed values of $n$ is the area of $S_n$ less than $1$ sq. cm?\n\n(1) $n = 7$\n(2) $n = 8$\n(3) $n = 9$\n(4) $n = 10$",
    format: "text",
    answer: "2, 3, 4",
    acceptedAnswers: ["2,3,4", "(2),(3),(4)", "(2), (3), (4)"],
    topic: "sequences",
    subtopic: "Geometric Progression",
    concepts: ["geometric progression", "ratio of side to diagonal", "area scaling"],
    difficulty: "medium",
    source: "original",
    skills: ["forming a GP from a geometric condition", "solving an exponential inequality"],
    estMinutes: 4,
    tags: [T, "gp", "multiple-correct"],
    hints: [
      "A square with side $s$ has diagonal $s\\sqrt{2}$, so each side is $\\dfrac{1}{\\sqrt{2}}$ times the previous.",
      "Areas form a GP with ratio $\\dfrac{1}{2}$; solve $\\dfrac{100}{2^{n-1}} < 1$.",
    ],
    solution:
      "Since the side of $S_n$ equals the diagonal of $S_{n+1}$, side of $S_n = \\sqrt{2}\\,(\\text{side of }S_{n+1})$, so the sides form a GP with ratio $\\dfrac{1}{\\sqrt{2}}$ and first term $10$. Thus side of $S_n = \\dfrac{10}{2^{(n-1)/2}}$ and area of $S_n = \\dfrac{100}{2^{n-1}}$. Requiring area $< 1$ gives $2^{n-1} > 100$, i.e. $n-1 \\ge 7$, so $n \\ge 8$. For $n = 8$, $2^{7} = 128 > 100$; for $n = 7$, $2^{6} = 64 < 100$ (area exceeds $1$). Hence $n = 8, 9, 10$ satisfy the condition while $n = 7$ does not. Correct options: (2), (3), (4).",
    solutionSteps: [
      "Sides form a GP: side of $S_n = 10\\left(\\dfrac{1}{\\sqrt{2}}\\right)^{n-1}$.",
      "Area of $S_n = \\dfrac{100}{2^{n-1}}$.",
      "Area $<1 \\Rightarrow 2^{n-1} > 100 \\Rightarrow n \\ge 8$.",
      "So $n = 8, 9, 10$ qualify, $n=7$ does not. Answer (2),(3),(4).",
    ],
  },
  {
    id: "seq-mc-015",
    statement:
      "Let $a$, $b$, $c$ be in G.P., and let $x$ be the arithmetic mean of $a$ and $b$, and $y$ the arithmetic mean of $b$ and $c$. Which of the following hold?\n\n(1) $\\dfrac{a}{x} + \\dfrac{c}{y} = 2$\n(2) $\\dfrac{a}{x} + \\dfrac{c}{y} = \\dfrac{c}{a}$\n(3) $\\dfrac{1}{x} + \\dfrac{1}{y} = \\dfrac{2}{b}$\n(4) $\\dfrac{1}{x} + \\dfrac{1}{y} = \\dfrac{2}{ac}$",
    format: "text",
    answer: "1, 3",
    acceptedAnswers: ["1,3", "(1),(3)", "(1), (3)"],
    topic: "sequences",
    subtopic: "Means & Inequalities",
    concepts: ["geometric progression", "arithmetic mean", "algebraic identities"],
    difficulty: "medium",
    source: "original",
    skills: ["using $b^2=ac$", "simplifying mean expressions"],
    estMinutes: 4,
    tags: [T, "means", "multiple-correct"],
    hints: [
      "Write $2x = a+b$ and $2y = b+c$, and use $b^2 = ac$.",
      "For the second identity, factor $a + c + 2b$ out of the numerator.",
    ],
    solution:
      "Because $a,b,c$ are in G.P., $b^2 = ac$. With $2x = a+b$ and $2y = b+c$: $\\dfrac{a}{x} + \\dfrac{c}{y} = \\dfrac{2a}{a+b} + \\dfrac{2c}{b+c} = 2\\cdot\\dfrac{a(b+c) + c(a+b)}{(a+b)(b+c)} = 2\\cdot\\dfrac{ab + ac + ac + bc}{ab + ac + b^2 + bc}$. Using $b^2 = ac$ the numerator and denominator coincide, so the value is $2$, confirming (1). Also $\\dfrac{1}{x} + \\dfrac{1}{y} = \\dfrac{2}{a+b} + \\dfrac{2}{b+c} = \\dfrac{2(a + c + 2b)}{ab + ac + b^2 + bc} = \\dfrac{2(a+c+2b)}{ab + 2b^2 + bc} = \\dfrac{2(a+c+2b)}{b(a+c+2b)} = \\dfrac{2}{b}$, confirming (3). Correct options: (1) and (3).",
    solutionSteps: [
      "Use $b^2 = ac$, $2x = a+b$, $2y = b+c$.",
      "$\\dfrac{a}{x} + \\dfrac{c}{y} = 2$ after applying $b^2=ac$.",
      "$\\dfrac{1}{x} + \\dfrac{1}{y} = \\dfrac{2}{b}$ by factoring $a+c+2b$.",
      "Answer (1),(3).",
    ],
  },
  {
    id: "seq-mc-016",
    statement:
      "A sequence $\\{a_n\\}$ has $a_1 = 2$ and satisfies $a_n = \\dfrac{a_{n-1}^2}{a_{n-2}}$ for all $n \\ge 3$, with all terms distinct. If $a_2$ and $a_5$ are positive integers and $a_5 \\le 162$, which value(s) can $a_5$ take?\n\n(1) $162$\n(2) $64$\n(3) $32$\n(4) $2$",
    format: "text",
    answer: "1, 3",
    acceptedAnswers: ["1,3", "(1),(3)", "(1), (3)"],
    topic: "sequences",
    subtopic: "Geometric Progression",
    concepts: ["recurrence to GP", "integer constraints", "distinct terms"],
    difficulty: "hard",
    source: "original",
    skills: ["recognizing a GP from a recurrence", "integer divisibility reasoning"],
    estMinutes: 6,
    tags: [T, "gp", "multiple-correct"],
    hints: [
      "The recurrence says consecutive ratios are equal, so $\\{a_n\\}$ is a G.P.",
      "With $a_2 = x$, the ratio is $\\dfrac{x}{2}$ and $a_5 = \\dfrac{x^4}{8}$; require it integral and $\\le 162$.",
    ],
    solution:
      "The relation $\\dfrac{a_n}{a_{n-1}} = \\dfrac{a_{n-1}}{a_{n-2}}$ makes $\\{a_n\\}$ a G.P. Let $a_2 = x$; then the common ratio is $r = \\dfrac{x}{2}$ and the terms are $2,\\ x,\\ \\dfrac{x^2}{2},\\ \\dfrac{x^3}{4},\\ \\dfrac{x^4}{8},\\ldots$, so $a_5 = \\dfrac{x^4}{8}$. The bound $a_5 \\le 162$ gives $x^4 \\le 1296$, i.e. $x \\le 6$. For $x$ and $\\dfrac{x^4}{8}$ to both be integers, $x$ must be even; and $x \\ne 2$ since the terms are distinct. This leaves $x = 4$ or $x = 6$, giving $a_5 = \\dfrac{4^4}{8} = 32$ or $a_5 = \\dfrac{6^4}{8} = 162$. Correct options: (1) and (3).",
    solutionSteps: [
      "Recurrence $\\Rightarrow$ G.P.; set $a_2 = x$, ratio $\\dfrac{x}{2}$.",
      "$a_5 = \\dfrac{x^4}{8}$; bound $\\le 162$ gives $x \\le 6$.",
      "Integrality and distinctness force $x = 4$ or $x = 6$.",
      "$a_5 = 32$ or $162$. Answer (1),(3).",
    ],
  },
  {
    id: "seq-mc-017",
    statement:
      "The three numbers $1$, $4$, $16$ can appear as three terms (not necessarily consecutive) of which kinds of progressions?\n\n(1) no A.P.\n(2) exactly one G.P.\n(3) infinitely many A.P.'s\n(4) infinitely many G.P.'s",
    format: "text",
    answer: "3, 4",
    acceptedAnswers: ["3,4", "(3),(4)", "(3), (4)"],
    topic: "sequences",
    subtopic: "Means & Inequalities",
    concepts: ["terms of an A.P.", "terms of a G.P.", "counting progressions"],
    difficulty: "hard",
    source: "original",
    skills: ["term-index equations", "existence of infinitely many progressions"],
    estMinutes: 5,
    tags: [T, "ap-gp", "multiple-correct"],
    hints: [
      "For an A.P. with common difference $d$: $4 = 1 + (n-1)d$ and $16 = 1 + (m-1)d$.",
      "For a G.P. with ratio $r$: $4 = r^{n-1}$ and $16 = r^{m-1}$; relate the exponents.",
    ],
    solution:
      "A.P. case: if $1,4,16$ occupy positions with common difference $d$, then $4 = 1 + (n-1)d$ and $16 = 1 + (m-1)d$, so $\\dfrac{m-1}{n-1} = \\dfrac{15}{3} = 5$. Writing $n-1 = p$, $m-1 = 5p$ for any positive integer $p$ gives a valid A.P. (e.g. $d = \\tfrac{3}{p}$), so infinitely many A.P.'s exist — (3) holds and (1) is false. G.P. case: $4 = r^{n-1}$ and $16 = r^{m-1}$ give $r^{2(n-1)} = r^{m-1}$, so $m - 1 = 2(n-1)$; each positive integer choice of $n-1$ yields a valid ratio, so infinitely many G.P.'s exist — (4) holds and (2) is false. Correct options: (3) and (4).",
    solutionSteps: [
      "A.P.: $\\dfrac{m-1}{n-1} = 5$ has infinitely many integer solutions.",
      "So infinitely many A.P.'s contain $1,4,16$ — option (3).",
      "G.P.: $m-1 = 2(n-1)$ has infinitely many solutions — option (4).",
      "Answer (3),(4).",
    ],
  },
  {
    id: "seq-mc-018",
    statement:
      "An infinite geometric series sums to $162$, and its first $n$ terms sum to $160$. If the reciprocal of its common ratio is an integer, which of the following are possible first terms?\n\n(1) $108$\n(2) $120$\n(3) $144$\n(4) $160$",
    format: "text",
    answer: "1, 3, 4",
    acceptedAnswers: ["1,3,4", "(1),(3),(4)", "(1), (3), (4)"],
    topic: "sequences",
    subtopic: "Geometric Progression",
    concepts: ["sum to infinity", "partial sum", "integer reciprocal ratio"],
    difficulty: "hard",
    source: "original",
    skills: ["dividing infinite and partial sums", "integer solutions of $r^{-n}=81$"],
    estMinutes: 6,
    tags: [T, "gp", "multiple-correct"],
    hints: [
      "Use $\\dfrac{a}{1-r} = 162$ and $\\dfrac{a(1-r^n)}{1-r} = 160$; divide to isolate $r^n$.",
      "You get $r^n = \\dfrac{1}{81}$; if $\\tfrac{1}{r}$ is an integer, list its possible values.",
    ],
    solution:
      "From $S_\\infty = \\dfrac{a}{1-r} = 162$ and $S_n = \\dfrac{a(1-r^n)}{1-r} = 160$, dividing gives $1 - r^n = \\dfrac{160}{162} = \\dfrac{80}{81}$, so $r^n = \\dfrac{1}{81}$, i.e. $\\left(\\dfrac{1}{r}\\right)^n = 81$. Since $\\dfrac{1}{r}$ and $n$ are integers, $\\dfrac{1}{r} \\in \\{3, 9, 81\\}$ with $n = 4, 2, 1$ respectively. Then $a = 162(1-r)$ gives: $a = 162\\left(1 - \\tfrac{1}{3}\\right) = 108$, $a = 162\\left(1 - \\tfrac{1}{9}\\right) = 144$, and $a = 162\\left(1 - \\tfrac{1}{81}\\right) = 160$. Correct options: (1), (3), (4).",
    solutionSteps: [
      "Divide the two sums: $r^n = \\dfrac{1}{81}$.",
      "$\\tfrac{1}{r}$ integer $\\Rightarrow \\tfrac{1}{r} = 3, 9,$ or $81$.",
      "$a = 162(1-r)$ gives $108, 144, 160$.",
      "Answer (1),(3),(4).",
    ],
  },
  {
    id: "seq-mc-019",
    statement:
      "Let $\\dfrac{1}{a}, \\dfrac{1}{b}, \\dfrac{1}{c}$ be in A.P. and $a, b, -2c$ be in G.P., with $a$, $b$, $c$ all non-zero. Which of the following are true?\n\n(1) $a^3 + b^3 + c^3 = 3abc$\n(2) $-2a, b, -2c$ are in A.P.\n(3) $a^2, b^2, 4c^2$ are in G.P.\n(4) the roots of $ax^2 + bx + c = 0$ are real",
    format: "text",
    answer: "1, 2, 3, 4",
    acceptedAnswers: ["1,2,3,4", "(1),(2),(3),(4)", "(1), (2), (3), (4)"],
    topic: "sequences",
    subtopic: "Harmonic Progression",
    concepts: ["harmonic progression", "geometric progression", "sum of cubes identity"],
    difficulty: "olympiad",
    source: "original",
    skills: ["combining H.P. and G.P. conditions", "using $a+b+c=0$"],
    estMinutes: 7,
    tags: [T, "hp", "multiple-correct"],
    hints: [
      "H.P. of $a,b,c$ means $b = \\dfrac{2ac}{a+c}$; the G.P. gives $b^2 = a(-2c) = -2ac$.",
      "Combine to show $a + b + c = 0$, then read off each consequence.",
    ],
    solution:
      "Since $\\tfrac1a,\\tfrac1b,\\tfrac1c$ are in A.P., $a,b,c$ are in H.P., so $b = \\dfrac{2ac}{a+c}$. The G.P. condition $a,b,-2c$ gives $b^2 = -2ac$, hence $b = \\dfrac{-b^2}{a+c}$, which yields $a + b + c = 0$. From $a+b+c=0$: (1) the identity $a^3+b^3+c^3 = 3abc$ holds; (2) $2b = -2a - 2c$ means $-2a, b, -2c$ are in A.P.; (3) since $b^2 = -2ac$ we get $b^4 = 4a^2c^2$, so $(b^2)^2 = a^2 \\cdot 4c^2$, i.e. $a^2, b^2, 4c^2$ are in G.P.; (4) $a+b+c = 0$ makes $x = 1$ a root of $ax^2+bx+c=0$, so the roots are real. Correct options: (1), (2), (3), (4).",
    solutionSteps: [
      "H.P.: $b = \\dfrac{2ac}{a+c}$; G.P.: $b^2 = -2ac$.",
      "Combine to get $a + b + c = 0$.",
      "This yields $a^3+b^3+c^3=3abc$, the A.P., the G.P., and $x=1$ a root.",
      "Answer (1),(2),(3),(4).",
    ],
  },
  {
    id: "seq-mc-020",
    statement:
      "An infinite G.P. has sum $2$, and the sum of its first two terms is $1$. Given that the second term is negative, which of the following are true?\n\n(1) a possible first term is $2 - \\sqrt{2}$\n(2) a possible first term is $2 + \\sqrt{2}$\n(3) a possible common ratio is $\\sqrt{2} - 1$\n(4) a possible common ratio is $\\dfrac{1}{\\sqrt{2}}$",
    format: "text",
    answer: "2",
    acceptedAnswers: ["2", "(2)"],
    topic: "sequences",
    subtopic: "Geometric Progression",
    concepts: ["sum to infinity", "sum of first two terms", "sign of second term"],
    difficulty: "hard",
    source: "original",
    skills: ["setting up simultaneous G.P. equations", "applying the sign condition on the second term"],
    estMinutes: 5,
    tags: [T, "gp", "multiple-correct"],
    hints: [
      "Write $a + ar = 1$ and $\\dfrac{a}{1-r} = 2$.",
      "Eliminate $a$ to find $r^2 = \\dfrac{1}{2}$, then keep only the sign of $r$ that makes the second term $ar$ negative.",
    ],
    solution:
      "Let the first term be $a$ and ratio $r$. Then $a + ar = 1$ and $\\dfrac{a}{1-r} = 2$. Substituting $a = 2(1-r)$ into the first: $2(1-r)(1+r) = 1$, so $1 - r^2 = \\dfrac{1}{2}$ and $r^2 = \\dfrac{1}{2}$, giving $r = \\pm\\dfrac{1}{\\sqrt{2}}$. For $r = \\dfrac{1}{\\sqrt{2}}$: $a = 2 - \\sqrt{2}$ and the second term $ar = \\sqrt{2} - 1 > 0$, which violates the requirement. For $r = -\\dfrac{1}{\\sqrt{2}}$: $a = 2 + \\sqrt{2}$ and $ar = -(\\sqrt{2}+1) < 0$, as required. So the only admissible configuration has first term $2 + \\sqrt{2}$ (and ratio $-\\tfrac{1}{\\sqrt{2}}$). Only option (2) is correct.",
    solutionSteps: [
      "$a + ar = 1$, $\\dfrac{a}{1-r} = 2$.",
      "Eliminate $a$: $1 - r^2 = \\dfrac{1}{2} \\Rightarrow r = \\pm\\dfrac{1}{\\sqrt{2}}$.",
      "$r=+\\tfrac{1}{\\sqrt2}$ gives $ar>0$ (rejected); $r=-\\tfrac{1}{\\sqrt2}$ gives $a=2+\\sqrt2$ with $ar<0$.",
      "Only option (2) holds.",
    ],
  },
  {
    id: "seq-mc-021",
    statement:
      "For $0 < \\phi < \\dfrac{\\pi}{2}$, let $x = \\displaystyle\\sum_{n=0}^{\\infty} \\cos^{2n}\\phi$, $y = \\displaystyle\\sum_{n=0}^{\\infty} \\sin^{2n}\\phi$, and $z = \\displaystyle\\sum_{n=0}^{\\infty} \\cos^{2n}\\phi\\,\\sin^{2n}\\phi$. Which of the following hold?\n\n(1) $xyz = xz + y$\n(2) $xyz = xy + z$\n(3) $xyz = x + y + z$\n(4) $xyz = yz + x$",
    format: "text",
    answer: "2, 3",
    acceptedAnswers: ["2,3", "(2),(3)", "(2), (3)"],
    topic: "sequences",
    subtopic: "Geometric Progression",
    concepts: ["infinite geometric sums", "trigonometric identities", "algebraic elimination"],
    difficulty: "olympiad",
    source: "original",
    skills: ["summing geometric series", "eliminating trig variables"],
    estMinutes: 7,
    tags: [T, "gp", "multiple-correct"],
    hints: [
      "Each series is geometric: $x = \\dfrac{1}{\\sin^2\\phi}$, $y = \\dfrac{1}{\\cos^2\\phi}$, $z = \\dfrac{1}{1-\\cos^2\\phi\\sin^2\\phi}$.",
      "Substitute $\\dfrac{1}{x} = \\sin^2\\phi$ and $\\dfrac{1}{y} = \\cos^2\\phi$ into $z$.",
    ],
    solution:
      "Summing each geometric series: $x = \\dfrac{1}{1-\\cos^2\\phi} = \\dfrac{1}{\\sin^2\\phi}$, $y = \\dfrac{1}{1-\\sin^2\\phi} = \\dfrac{1}{\\cos^2\\phi}$, and $z = \\dfrac{1}{1-\\cos^2\\phi\\sin^2\\phi}$. Since $\\dfrac{1}{x} = \\sin^2\\phi$ and $\\dfrac{1}{y} = \\cos^2\\phi$, we get $z = \\dfrac{1}{1 - \\tfrac{1}{x}\\cdot\\tfrac{1}{y}} = \\dfrac{xy}{xy - 1}$, so $xyz - z = xy$, i.e. $xyz = xy + z$, confirming (2). For (3), computing $x + y + z$ over the common denominator $\\cos^2\\phi\\sin^2\\phi(1-\\cos^2\\phi\\sin^2\\phi)$ and using $\\sin^2\\phi + \\cos^2\\phi = 1$ simplifies the numerator to $1$, giving $x+y+z = \\dfrac{1}{\\cos^2\\phi\\sin^2\\phi(1-\\cos^2\\phi\\sin^2\\phi)} = xyz$. Correct options: (2) and (3).",
    solutionSteps: [
      "Sum the series: $x = \\csc^2\\phi$, $y = \\sec^2\\phi$, $z = \\dfrac{1}{1-\\cos^2\\phi\\sin^2\\phi}$.",
      "Substitute into $z$: $z = \\dfrac{xy}{xy-1} \\Rightarrow xyz = xy + z$.",
      "Combine $x+y+z$ and simplify with $\\sin^2\\phi+\\cos^2\\phi=1$ to get $xyz$.",
      "Answer (2),(3).",
    ],
  },
  {
    id: "seq-mc-022",
    statement:
      "Consider the series $S = 1 + \\dfrac{1}{1+3}(1+2)^2 + \\dfrac{1}{1+3+5}(1+2+3)^2 + \\dfrac{1}{1+3+5+7}(1+2+3+4)^2 + \\cdots$. Which of the following are true?\n\n(1) the $7^{\\text{th}}$ term equals $16$\n(2) the $7^{\\text{th}}$ term equals $18$\n(3) the sum of the first $10$ terms is $\\dfrac{505}{4}$\n(4) the sum of the first $10$ terms is $\\dfrac{405}{4}$",
    format: "text",
    answer: "1, 3",
    acceptedAnswers: ["1,3", "(1),(3)", "(1), (3)"],
    topic: "sequences",
    subtopic: "Sigma & Telescoping",
    concepts: ["general term of a series", "sum of odd numbers", "sum of first n integers", "sigma formulas"],
    difficulty: "hard",
    source: "original",
    skills: ["finding the r-th term", "applying $\\sum r^2$ and $\\sum r$"],
    estMinutes: 6,
    tags: [T, "sigma", "multiple-correct"],
    hints: [
      "The $r$-th denominator is $1+3+\\cdots+(2r-1) = r^2$, and the squared factor is $\\left(\\tfrac{r(r+1)}{2}\\right)^2$.",
      "Simplify to $T_r = \\dfrac{(r+1)^2}{4}$, then sum with the standard formulas.",
    ],
    solution:
      "The $r$-th term is $T_r = \\dfrac{1}{r^2}\\,(1+2+\\cdots+r)^2 = \\dfrac{1}{r^2}\\left(\\dfrac{r(r+1)}{2}\\right)^2 = \\dfrac{(r+1)^2}{4} = \\dfrac{r^2 + 2r + 1}{4}$. Hence $T_7 = \\dfrac{64}{4} = 16$, confirming (1). Summing: $S_{10} = \\dfrac{1}{4}\\sum_{r=1}^{10}(r^2 + 2r + 1) = \\dfrac{1}{4}\\left(\\dfrac{10\\cdot 11\\cdot 21}{6} + 10\\cdot 11 + 10\\right) = \\dfrac{1}{4}(385 + 110 + 10) = \\dfrac{505}{4}$, confirming (3). Correct options: (1) and (3).",
    solutionSteps: [
      "Denominator $= r^2$; term $T_r = \\dfrac{(r+1)^2}{4}$.",
      "$T_7 = \\dfrac{64}{4} = 16$.",
      "$S_{10} = \\dfrac{1}{4}(385 + 110 + 10) = \\dfrac{505}{4}$.",
      "Answer (1),(3).",
    ],
  },
  {
    id: "seq-mc-023",
    statement:
      "Suppose $\\displaystyle\\sum_{r=1}^{n} r(r+1)(2r+3) = an^4 + bn^3 + cn^2 + dn + e$. Which of the following are correct?\n\n(1) $a - b = d - c$\n(2) $e = 0$\n(3) $a,\\ b - \\dfrac{2}{3},\\ c - 1$ are in A.P.\n(4) $\\dfrac{b + d}{a}$ is an integer",
    format: "text",
    answer: "1, 2, 3, 4",
    acceptedAnswers: ["1,2,3,4", "(1),(2),(3),(4)", "(1), (2), (3), (4)"],
    topic: "sequences",
    subtopic: "Sigma & Telescoping",
    concepts: ["sum of a polynomial series", "factorial-like telescoping products", "coefficient comparison"],
    difficulty: "olympiad",
    source: "original",
    skills: ["decomposing into $r(r+1)(r+2)$", "matching polynomial coefficients"],
    estMinutes: 8,
    tags: [T, "sigma", "multiple-correct"],
    hints: [
      "Write $r(r+1)(2r+3) = 2\\,r(r+1)(r+2) - r(r+1)$ so each piece telescopes via the product formulas.",
      "Expand to identify $a, b, c, d, e$, then test each statement.",
    ],
    solution:
      "Write $r(r+1)(2r+3) = 2\\,r(r+1)(r+2) - r(r+1)$. Then $\\sum_{r=1}^{n} r(r+1)(2r+3) = \\dfrac{2}{4}n(n+1)(n+2)(n+3) - \\dfrac{1}{3}n(n+1)(n+2) = \\dfrac{1}{6}\\left(3n^4 + 16n^3 + 27n^2 + 14n\\right)$. Thus $a = \\dfrac{1}{2}$, $b = \\dfrac{8}{3}$, $c = \\dfrac{9}{2}$, $d = \\dfrac{7}{3}$, $e = 0$. Checking: (1) $a - b = \\dfrac12 - \\dfrac83 = -\\dfrac{13}{6}$ and $d - c = \\dfrac73 - \\dfrac92 = -\\dfrac{13}{6}$, equal. (2) $e = 0$. (3) $a = \\dfrac12$, $b - \\dfrac23 = 2$, $c - 1 = \\dfrac72$; these differ by $\\dfrac32$ each, so they are in A.P. (4) $\\dfrac{b+d}{a} = \\dfrac{8/3 + 7/3}{1/2} = \\dfrac{5}{1/2} = 10$, an integer. Correct options: (1), (2), (3), (4).",
    solutionSteps: [
      "Decompose $r(r+1)(2r+3) = 2r(r+1)(r+2) - r(r+1)$.",
      "Sum $= \\dfrac{1}{6}(3n^4 + 16n^3 + 27n^2 + 14n)$; read off $a,b,c,d,e$.",
      "Verify $a-b = d-c$, $e=0$, the A.P., and $\\dfrac{b+d}{a}=10$.",
      "Answer (1),(2),(3),(4).",
    ],
  },
  {
    id: "seq-mc-024",
    statement:
      "Define $S_n = 1^2 - 2^2 + 3^2 - 4^2 + 5^2 - 6^2 + \\cdots$ (up to $n$ terms). Which of the following are true?\n\n(1) $S_{40} = -820$\n(2) $S_{2n} > S_{2n+2}$\n(3) $S_{51} = 1326$\n(4) $S_{2n+1} > S_{2n-1}$",
    format: "text",
    answer: "1, 2, 3, 4",
    acceptedAnswers: ["1,2,3,4", "(1),(2),(3),(4)", "(1), (2), (3), (4)"],
    topic: "sequences",
    subtopic: "Sigma & Telescoping",
    concepts: ["alternating series", "difference of squares", "sum of first n integers"],
    difficulty: "hard",
    source: "original",
    skills: ["pairing terms via $a^2-b^2$", "case analysis on parity"],
    estMinutes: 6,
    tags: [T, "sigma", "multiple-correct"],
    hints: [
      "Pair consecutive terms: $(2k-1)^2 - (2k)^2 = -(4k-1)$, i.e. use $a^2 - b^2 = (a-b)(a+b)$.",
      "Handle even and odd $n$ separately.",
    ],
    solution:
      "For even $n$: $S_n = (1^2-2^2) + (3^2-4^2) + \\cdots + ((n-1)^2 - n^2)$. Each pair $(k^2 - (k+1)^2) = -(2k+1)$, and summing gives $S_n = -(1 + 2 + \\cdots + n) = -\\dfrac{n(n+1)}{2}$. For odd $n$: pair the first $n-1$ terms and add $n^2$, giving $S_n = -\\dfrac{(n-1)n}{2} + n^2 = \\dfrac{n(n+1)}{2}$. Therefore $S_{40} = -\\dfrac{40\\cdot 41}{2} = -820$ (1); $S_{51} = \\dfrac{51\\cdot 52}{2} = 1326$ (3). For even indices $S_{2n} = -n(2n+1)$ decreases as $n$ grows, so $S_{2n} > S_{2n+2}$ (2); for odd indices $S_{2n+1} = \\dfrac{(2n+1)(2n+2)}{2}$ increases with $n$, so $S_{2n+1} > S_{2n-1}$ (4). Correct options: (1), (2), (3), (4).",
    solutionSteps: [
      "Even $n$: $S_n = -\\dfrac{n(n+1)}{2}$.",
      "Odd $n$: $S_n = \\dfrac{n(n+1)}{2}$.",
      "$S_{40} = -820$, $S_{51} = 1326$; monotonicity gives the two inequalities.",
      "Answer (1),(2),(3),(4).",
    ],
  },
];
