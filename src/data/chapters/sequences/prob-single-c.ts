import type { Problem } from "@/lib/types";

/**
 * Original single-answer practice problems (chunk C, source #32-#46) for the
 * Cengage "Sequences & Series" chapter. Statements are reworded in the app's
 * own voice; the mathematics is preserved exactly. Solutions are clean
 * rewrites of the source derivations.
 */
export const seqSingleC: Problem[] = [
  {
    id: "seq-sc-032",
    statement:
      "The $p$th, $q$th, $r$th and $s$th terms of an arithmetic progression happen to form a geometric progression (in that order). What kind of sequence do the differences $p-q,\\; q-r,\\; r-s$ form?",
    format: "mcq",
    options: [
      { label: "A", text: "an A.P." },
      { label: "B", text: "a G.P." },
      { label: "C", text: "an H.P." },
      { label: "D", text: "none of these" },
    ],
    answer: "B",
    topic: "sequences",
    subtopic: "Arithmetic Progression",
    concepts: ["A.P. terms", "G.P. of terms", "common difference"],
    difficulty: "hard",
    source: "original",
    skills: ["mixing A.P. and G.P.", "detecting a G.P. among differences"],
    estMinutes: 5,
    tags: ["cengage-seq", "ap-gp"],
    hints: [
      "Write the four terms of the A.P. as $A,\\;AR,\\;AR^2,\\;AR^3$ (a G.P. with ratio $R$).",
      "Express each gap in position (like $p-q$) in terms of $d$, then compare consecutive gaps.",
    ],
    solution:
      "Let the four A.P. terms be a G.P.: $a+(p-1)d = A$, $a+(q-1)d = AR$, $a+(r-1)d = AR^2$, $a+(s-1)d = AR^3$, where $R$ is the common ratio. Subtracting consecutive equations,\n$$p-q = \\dfrac{A-AR}{d}, \\quad q-r = R\\left(\\dfrac{A-AR}{d}\\right), \\quad r-s = R^2\\left(\\dfrac{A-AR}{d}\\right).$$\nEach difference is $R$ times the previous one, so $p-q,\\; q-r,\\; r-s$ form a G.P.",
    solutionSteps: [
      "Set $a+(p-1)d=A,\\ a+(q-1)d=AR,\\ a+(r-1)d=AR^2,\\ a+(s-1)d=AR^3$.",
      "Subtract adjacent equations to get $p-q=\\tfrac{A-AR}{d}$, $q-r=R\\tfrac{A-AR}{d}$, $r-s=R^2\\tfrac{A-AR}{d}$.",
      "Consecutive differences are in ratio $R$, hence a G.P.",
    ],
  },
  {
    id: "seq-sc-033",
    statement:
      "Suppose $a,\\,b,\\,c$ are in geometric progression, and $x$ is the arithmetic mean of $a$ and $b$, while $y$ is the arithmetic mean of $b$ and $c$. What is the value of $\\dfrac{a}{x} + \\dfrac{c}{y}$?",
    format: "mcq",
    options: [
      { label: "A", text: "$1$" },
      { label: "B", text: "$2$" },
      { label: "C", text: "$\\dfrac{1}{2}$" },
      { label: "D", text: "none of these" },
    ],
    answer: "B",
    topic: "sequences",
    subtopic: "Means & Inequalities",
    concepts: ["G.P. condition", "arithmetic mean", "algebraic simplification"],
    difficulty: "medium",
    source: "original",
    skills: ["using $b^2=ac$", "combining fractions"],
    estMinutes: 4,
    tags: ["cengage-seq", "means"],
    hints: [
      "Since $a,b,c$ are in G.P., $b^2 = ac$.",
      "Write $x=\\dfrac{a+b}{2}$ and $y=\\dfrac{b+c}{2}$, then combine over a common denominator.",
    ],
    solution:
      "Because $a,b,c$ are in G.P., $b^2 = ac$. With $x=\\dfrac{a+b}{2}$ and $y=\\dfrac{b+c}{2}$,\n$$\\dfrac{a}{x}+\\dfrac{c}{y} = \\dfrac{2a}{a+b} + \\dfrac{2c}{b+c} = \\dfrac{2a(b+c) + 2c(a+b)}{(a+b)(b+c)} = 2\\cdot\\dfrac{2ac + ab + bc}{ab + ac + b^2 + bc}.$$\nUsing $b^2 = ac$, the denominator becomes $ab + ac + ac + bc = 2ac + ab + bc$, equal to the numerator's bracket, so the value is $2$.",
    solutionSteps: [
      "Use $b^2=ac$ from the G.P. condition.",
      "Substitute $x=\\tfrac{a+b}{2},\\ y=\\tfrac{b+c}{2}$ and combine fractions.",
      "Replace $b^2$ by $ac$ in the denominator; numerator and denominator match, giving $2$.",
    ],
  },
  {
    id: "seq-sc-034",
    statement:
      "Let $a,\\,b,\\,c$ be in arithmetic progression. Let $p$ and $p'$ be the arithmetic mean and geometric mean of $a$ and $b$, and let $q$ and $q'$ be the arithmetic mean and geometric mean of $b$ and $c$. Which relation always holds?",
    format: "mcq",
    options: [
      { label: "A", text: "$p^2 + q^2 = p'^2 + q'^2$" },
      { label: "B", text: "$pq = p'q'$" },
      { label: "C", text: "$p^2 - q^2 = p'^2 - q'^2$" },
      { label: "D", text: "none of these" },
    ],
    answer: "C",
    topic: "sequences",
    subtopic: "Means & Inequalities",
    concepts: ["arithmetic mean", "geometric mean", "A.P. condition"],
    difficulty: "hard",
    source: "original",
    skills: ["computing A.M. and G.M.", "factoring differences of squares"],
    estMinutes: 5,
    tags: ["cengage-seq", "means"],
    hints: [
      "Write $p=\\dfrac{a+b}{2},\\ q=\\dfrac{b+c}{2},\\ p'=\\sqrt{ab},\\ q'=\\sqrt{bc}$.",
      "Since $a,b,c$ are in A.P., $2b=a+c$; use it after expanding $p^2-q^2$.",
    ],
    solution:
      "Here $p=\\dfrac{a+b}{2},\\ q=\\dfrac{b+c}{2},\\ p'=\\sqrt{ab},\\ q'=\\sqrt{bc}$. Then\n$$p^2 - q^2 = \\dfrac{(a+b)^2-(b+c)^2}{4} = \\dfrac{(a-c)(a+c+2b)}{4}.$$\nSince $a,b,c$ are in A.P., $a+c = 2b$, so $a+c+2b = 4b$ and\n$$p^2 - q^2 = \\dfrac{(a-c)\\cdot 4b}{4} = (a-c)b = ab - bc = p'^2 - q'^2.$$\nHence $p^2 - q^2 = p'^2 - q'^2$.",
    solutionSteps: [
      "Set $p=\\tfrac{a+b}{2},\\ q=\\tfrac{b+c}{2},\\ p'=\\sqrt{ab},\\ q'=\\sqrt{bc}$.",
      "Factor $p^2-q^2=\\tfrac{(a-c)(a+c+2b)}{4}$.",
      "Apply $a+c=2b$ to get $(a-c)b=ab-bc=p'^2-q'^2$.",
    ],
  },
  {
    id: "seq-sc-035",
    statement:
      "The product $(1+x)(1+x^2)(1+x^4)\\cdots(1+x^{128})$ can be written as $\\sum\\limits_{r=0}^{n} x^r$. Find $n$.",
    format: "mcq",
    options: [
      { label: "A", text: "$256$" },
      { label: "B", text: "$255$" },
      { label: "C", text: "$254$" },
      { label: "D", text: "none of these" },
    ],
    answer: "B",
    topic: "sequences",
    subtopic: "Geometric Progression",
    concepts: ["highest-degree term", "geometric sum of exponents"],
    difficulty: "medium",
    source: "original",
    skills: ["tracking the top power", "summing a geometric series"],
    estMinutes: 3,
    tags: ["cengage-seq", "gp"],
    hints: [
      "The product telescopes to $\\dfrac{1-x^{256}}{1-x}$; equivalently, add up the exponents of the leading term.",
      "The degree is $1+2+4+\\cdots+128$, a geometric sum.",
    ],
    solution:
      "The highest power of $x$ in the product is obtained by multiplying the top term of each factor, giving exponent\n$$1 + 2 + 4 + \\cdots + 128 = 1 + 2 + 2^2 + \\cdots + 2^7 = \\dfrac{2^8 - 1}{2 - 1} = 255.$$\nSince the product equals $1 + x + x^2 + \\cdots + x^{255} = \\sum_{r=0}^{255} x^r$, we have $n = 255$.",
    solutionSteps: [
      "Multiply the leading $x$-powers: exponent $=1+2+4+\\cdots+128$.",
      "Sum the geometric series: $\\tfrac{2^8-1}{2-1}=255$.",
      "The product is $\\sum_{r=0}^{255}x^r$, so $n=255$.",
    ],
  },
  {
    id: "seq-sc-036",
    statement:
      "Given $(1-p)(1 + 3x + 9x^2 + 27x^3 + 81x^4 + 243x^5) = 1 - p^6$ with $p \\neq 1$, find $\\dfrac{p}{x}$.",
    format: "mcq",
    options: [
      { label: "A", text: "$\\dfrac{1}{3}$" },
      { label: "B", text: "$3$" },
      { label: "C", text: "$\\dfrac{1}{2}$" },
      { label: "D", text: "$2$" },
    ],
    answer: "B",
    topic: "sequences",
    subtopic: "Geometric Progression",
    concepts: ["finite geometric sum", "matching coefficients"],
    difficulty: "medium",
    source: "original",
    skills: ["recognizing a geometric series", "comparing powers"],
    estMinutes: 3,
    tags: ["cengage-seq", "gp"],
    hints: [
      "Divide both sides by $1-p$ to isolate the bracket.",
      "The right side becomes $1 + p + p^2 + \\cdots + p^5$; match it term by term with $1 + 3x + (3x)^2 + \\cdots$.",
    ],
    solution:
      "Dividing by $1-p$,\n$$1 + 3x + 9x^2 + 27x^3 + 81x^4 + 243x^5 = \\dfrac{1 - p^6}{1 - p} = 1 + p + p^2 + p^3 + p^4 + p^5.$$\nThe left side is $1 + (3x) + (3x)^2 + \\cdots + (3x)^5$. Comparing corresponding powers gives $p = 3x$, so $\\dfrac{p}{x} = 3$.",
    solutionSteps: [
      "Divide by $1-p$ to get $\\tfrac{1-p^6}{1-p}=1+p+\\cdots+p^5$.",
      "Recognize the left side as $1+(3x)+(3x)^2+\\cdots+(3x)^5$.",
      "Match to get $p=3x$, hence $p/x=3$.",
    ],
  },
  {
    id: "seq-sc-037",
    statement:
      "Consider the ten numbers $ar,\\, ar^2,\\, ar^3,\\, \\ldots,\\, ar^{10}$. Their sum is $18$ and the sum of their reciprocals is $6$. What is the product of the ten numbers?",
    format: "mcq",
    options: [
      { label: "A", text: "$81$" },
      { label: "B", text: "$243$" },
      { label: "C", text: "$343$" },
      { label: "D", text: "$324$" },
    ],
    answer: "B",
    topic: "sequences",
    subtopic: "Geometric Progression",
    concepts: ["G.P. sum", "sum of reciprocals", "product of G.P. terms"],
    difficulty: "hard",
    source: "original",
    skills: ["relating sum and reciprocal-sum", "product as a power"],
    estMinutes: 6,
    tags: ["cengage-seq", "gp"],
    hints: [
      "The reciprocals also form a G.P.; write both sums and divide them.",
      "The product of $ar, ar^2, \\ldots, ar^{10}$ is $a^{10} r^{55} = (a^2 r^{11})^5$.",
    ],
    solution:
      "The sum is $\\dfrac{ar(r^{10}-1)}{r-1} = 18$. The reciprocals $\\dfrac{1}{ar}, \\ldots, \\dfrac{1}{ar^{10}}$ form a G.P. whose sum simplifies to $\\dfrac{1}{a^2 r^{11}}\\cdot\\dfrac{ar(r^{10}-1)}{r-1} = 6$. Dividing this by the first equation,\n$$\\dfrac{1}{a^2 r^{11}}\\times 18 = 6 \\;\\Rightarrow\\; a^2 r^{11} = 3.$$\nThe product of the ten terms is\n$$a^{10} r^{1+2+\\cdots+10} = a^{10} r^{55} = (a^2 r^{11})^5 = 3^5 = 243.$$",
    solutionSteps: [
      "Write $\\tfrac{ar(r^{10}-1)}{r-1}=18$ for the sum.",
      "Express the reciprocal sum as $\\tfrac{1}{a^2r^{11}}\\cdot18=6$, giving $a^2r^{11}=3$.",
      "Product $=a^{10}r^{55}=(a^2r^{11})^5=3^5=243$.",
    ],
  },
  {
    id: "seq-sc-038",
    statement:
      "Let $x,\\,y,\\,z$ be three distinct prime numbers. Which statement is true?",
    format: "mcq",
    options: [
      { label: "A", text: "$x, y, z$ may be in A.P. but not in G.P." },
      { label: "B", text: "$x, y, z$ may be in G.P. but not in A.P." },
      { label: "C", text: "$x, y, z$ can be neither in A.P. nor in G.P." },
      { label: "D", text: "none of these" },
    ],
    answer: "A",
    topic: "sequences",
    subtopic: "Geometric Progression",
    concepts: ["primes", "A.P. vs G.P.", "divisibility"],
    difficulty: "medium",
    source: "original",
    skills: ["testing the G.P. condition on primes", "example-based reasoning"],
    estMinutes: 4,
    tags: ["cengage-seq", "ap-gp"],
    hints: [
      "For a G.P., $y^2 = xz$; this forces $x$ to divide $y$.",
      "Try three primes in A.P., such as $3, 5, 7$.",
    ],
    solution:
      "If $x, y, z$ were in G.P., then $y^2 = xz$, which would force the prime $x$ to divide $y$ — impossible for distinct primes. So they cannot be in G.P. However $3, 5, 7$ are distinct primes in A.P. (common difference $2$). Hence $x, y, z$ may be in A.P. but not in G.P.",
    solutionSteps: [
      "G.P. would require $y^2=xz$, forcing $x\\mid y$, impossible for distinct primes.",
      "Example $3,5,7$ shows distinct primes can be in A.P.",
      "Therefore A.P. is possible, G.P. is not.",
    ],
  },
  {
    id: "seq-sc-039",
    statement:
      "Let $a = \\underbrace{111\\ldots1}_{55\\text{ ones}}$ (the 55-digit repunit), $b = 1 + 10 + 10^2 + 10^3 + 10^4$, and $c = 1 + 10^5 + 10^{10} + 10^{15} + \\cdots + 10^{50}$. Which relation holds?",
    format: "mcq",
    options: [
      { label: "A", text: "$a = b + c$" },
      { label: "B", text: "$a = bc$" },
      { label: "C", text: "$b = ac$" },
      { label: "D", text: "$c = ab$" },
    ],
    answer: "B",
    topic: "sequences",
    subtopic: "Geometric Progression",
    concepts: ["repunit", "geometric sum", "factoring"],
    difficulty: "hard",
    source: "original",
    skills: ["summing geometric series", "factoring $10^{55}-1$"],
    estMinutes: 5,
    tags: ["cengage-seq", "gp"],
    hints: [
      "Write $a$ as $\\dfrac{10^{55}-1}{10-1}$ and split the fraction.",
      "Note $b = \\dfrac{10^5-1}{10-1}$ and $c = \\dfrac{10^{55}-1}{10^5-1}$.",
    ],
    solution:
      "The repunit is a geometric sum: $a = 1 + 10 + 10^2 + \\cdots + 10^{54} = \\dfrac{10^{55}-1}{10-1}$. Factor this as\n$$a = \\dfrac{10^{55}-1}{10^5-1}\\times\\dfrac{10^5-1}{10-1}.$$\nHere $\\dfrac{10^5-1}{10-1} = 1+10+10^2+10^3+10^4 = b$, and $\\dfrac{10^{55}-1}{10^5-1} = 1+10^5+10^{10}+\\cdots+10^{50} = c$. Therefore $a = bc$.",
    solutionSteps: [
      "Write $a=\\tfrac{10^{55}-1}{10-1}$.",
      "Split as $\\tfrac{10^{55}-1}{10^5-1}\\cdot\\tfrac{10^5-1}{10-1}$.",
      "Identify the factors as $c$ and $b$, so $a=bc$.",
    ],
  },
  {
    id: "seq-sc-040",
    statement:
      "Let $a_n$ be the $n$th term of a geometric progression of positive numbers. Define $\\alpha = \\sum\\limits_{n=1}^{100} a_{2n}$ and $\\beta = \\sum\\limits_{n=1}^{100} a_{2n-1}$, with $\\alpha \\neq \\beta$. The common ratio equals",
    format: "mcq",
    options: [
      { label: "A", text: "$\\dfrac{\\alpha}{\\beta}$" },
      { label: "B", text: "$\\dfrac{\\beta}{\\alpha}$" },
      { label: "C", text: "$\\sqrt{\\dfrac{\\alpha}{\\beta}}$" },
      { label: "D", text: "$\\sqrt{\\dfrac{\\beta}{\\alpha}}$" },
    ],
    answer: "A",
    topic: "sequences",
    subtopic: "Geometric Progression",
    concepts: ["G.P. term", "even and odd indexed terms", "common ratio"],
    difficulty: "medium",
    source: "original",
    skills: ["separating even/odd terms", "ratio of two G.P. sums"],
    estMinutes: 4,
    tags: ["cengage-seq", "gp"],
    hints: [
      "Write the even-indexed sum and odd-indexed sum in terms of $a$ and $r$.",
      "Each even-indexed term is $r$ times the corresponding odd-indexed term.",
    ],
    solution:
      "With first term $a$ and ratio $r$,\n$$\\alpha = a_2 + a_4 + \\cdots + a_{200} = ar(1 + r^2 + r^4 + \\cdots + r^{198}),$$\n$$\\beta = a_1 + a_3 + \\cdots + a_{199} = a(1 + r^2 + r^4 + \\cdots + r^{198}).$$\nDividing, the common factor cancels and $\\dfrac{\\alpha}{\\beta} = r$. So the common ratio is $\\dfrac{\\alpha}{\\beta}$.",
    solutionSteps: [
      "Express $\\alpha=ar(1+r^2+\\cdots+r^{198})$ and $\\beta=a(1+r^2+\\cdots+r^{198})$.",
      "Divide to cancel the common bracket.",
      "Obtain $\\alpha/\\beta=r$.",
    ],
  },
  {
    id: "seq-sc-041",
    statement:
      "In a series of 20 terms the first term is $1$; every even-position term is $2$ times the term just before it, and every odd-position term (after the first) is $3$ times the term just before it. Find the sum of all 20 terms.",
    format: "mcq",
    options: [
      { label: "A", text: "$\\dfrac{2}{7}(6^{10} - 1)$" },
      { label: "B", text: "$\\dfrac{3}{7}(6^{10} - 1)$" },
      { label: "C", text: "$\\dfrac{3}{5}(6^{10} - 1)$" },
      { label: "D", text: "none of these" },
    ],
    answer: "C",
    topic: "sequences",
    subtopic: "Geometric Progression",
    concepts: ["mixed recurrence", "grouping into two G.P.s"],
    difficulty: "hard",
    source: "original",
    skills: ["splitting a series", "summing geometric series"],
    estMinutes: 6,
    tags: ["cengage-seq", "gp"],
    hints: [
      "List the terms: $1,\\,2,\\,2\\cdot3,\\,2^2\\cdot3,\\,2^2\\cdot3^2,\\,2^3\\cdot3^2,\\ldots$",
      "Group odd-position and even-position terms; each group is a G.P. with ratio $6$.",
    ],
    solution:
      "The terms are $1,\\; 2,\\; 2\\cdot3,\\; 2^2\\cdot3,\\; 2^2\\cdot3^2,\\; 2^3\\cdot3^2,\\ldots$ (20 terms). Group them:\n$$\\big(1 + 2\\cdot3 + 2^2\\cdot3^2 + \\cdots\\ \\text{to 10 terms}\\big) + \\big(2 + 2^2\\cdot3 + 2^3\\cdot3^2 + \\cdots\\ \\text{to 10 terms}\\big).$$\nEach group is a G.P. with ratio $6$:\n$$\\dfrac{1\\,(6^{10}-1)}{6-1} + \\dfrac{2\\,(6^{10}-1)}{6-1} = \\dfrac{3(6^{10}-1)}{5} = \\dfrac{3}{5}(6^{10}-1).$$",
    solutionSteps: [
      "Write out the 20 terms from the alternating $\\times2,\\times3$ rule.",
      "Split into odd-position and even-position groups, each a G.P. with ratio $6$ (10 terms).",
      "Sum: $\\tfrac{6^{10}-1}{5}+\\tfrac{2(6^{10}-1)}{5}=\\tfrac{3}{5}(6^{10}-1)$.",
    ],
  },
  {
    id: "seq-sc-042",
    statement:
      "Suppose $a \\in (0, 1]$ satisfies $a^{2008} - 2a + 1 = 0$, and let $S = 1 + a + a^2 + \\cdots + a^{2007}$. Find the sum of all possible values of $S$.",
    format: "mcq",
    options: [
      { label: "A", text: "$2010$" },
      { label: "B", text: "$2009$" },
      { label: "C", text: "$2008$" },
      { label: "D", text: "$2$" },
    ],
    answer: "A",
    topic: "sequences",
    subtopic: "Geometric Progression",
    concepts: ["finite geometric sum", "cases on the root"],
    difficulty: "hard",
    source: "original",
    skills: ["handling the $a=1$ case", "using the given equation to simplify"],
    estMinutes: 5,
    tags: ["cengage-seq", "gp"],
    hints: [
      "Check $a = 1$ directly; it satisfies the equation.",
      "For $a \\neq 1$, use $S = \\dfrac{a^{2008}-1}{a-1}$ and substitute $a^{2008} = 2a - 1$.",
    ],
    solution:
      "If $a = 1$, then $S = 1 + 1 + \\cdots + 1 = 2008$ (the value $S_1$). If $a \\neq 1$, then $S = \\dfrac{a^{2008}-1}{a-1}$. The condition gives $a^{2008} = 2a - 1$, so\n$$S = \\dfrac{(2a-1)-1}{a-1} = \\dfrac{2(a-1)}{a-1} = 2\\qquad (\\text{value } S_2).$$\nThe sum of all possible values is $S_1 + S_2 = 2008 + 2 = 2010$.",
    solutionSteps: [
      "Case $a=1$: $S=2008$.",
      "Case $a\\neq1$: $S=\\tfrac{a^{2008}-1}{a-1}$ with $a^{2008}=2a-1$ gives $S=2$.",
      "Sum of possible values $=2008+2=2010$.",
    ],
  },
  {
    id: "seq-sc-043",
    statement:
      "In a geometric series the first term is $a$ and the common ratio is $r$. Let $S_n$ be the sum of the first $n$ terms, and let $U_n = \\sum\\limits_{k=1}^{n} S_k$. What is $rS_n + (1 - r)U_n$?",
    format: "mcq",
    options: [
      { label: "A", text: "$0$" },
      { label: "B", text: "$n$" },
      { label: "C", text: "$na$" },
      { label: "D", text: "$nar$" },
    ],
    answer: "C",
    topic: "sequences",
    subtopic: "Sigma & Telescoping",
    concepts: ["G.P. partial sums", "summing partial sums"],
    difficulty: "hard",
    source: "original",
    skills: ["summing $S_k$", "algebraic manipulation"],
    estMinutes: 6,
    tags: ["cengage-seq", "sigma"],
    hints: [
      "Use $S_n = \\dfrac{a(r^n - 1)}{r - 1}$ and sum it to get $U_n$.",
      "You will find $(r-1)U_n = rS_n - an$; rearrange into the required combination.",
    ],
    solution:
      "With $S_k = \\dfrac{a(r^k - 1)}{r - 1}$,\n$$U_n = \\sum_{k=1}^{n} \\dfrac{a(r^k - 1)}{r-1} = \\dfrac{a}{r-1}\\left\\{(r + r^2 + \\cdots + r^n) - n\\right\\} = \\dfrac{a}{r-1}\\left\\{\\dfrac{r(r^n-1)}{r-1} - n\\right\\}.$$\nMultiplying by $(r-1)$,\n$$(r-1)U_n = \\dfrac{ar(r^n-1)}{r-1} - an = rS_n - an.$$\nTherefore $rS_n - (r-1)U_n = an$, i.e. $rS_n + (1-r)U_n = an = na$.",
    solutionSteps: [
      "Write $S_k=\\tfrac{a(r^k-1)}{r-1}$ and sum over $k$ to form $U_n$.",
      "Simplify to $(r-1)U_n=rS_n-an$.",
      "Rearrange: $rS_n+(1-r)U_n=na$.",
    ],
  },
  {
    id: "seq-sc-044",
    statement:
      "Let $S \\subset (0, \\pi)$ be the set of $x$ satisfying $8^{\\,1 + |\\cos x| + \\cos^2 x + |\\cos^3 x| + \\cdots\\ \\text{(to }\\infty)} = 4^3$. Find $S$.",
    format: "mcq",
    options: [
      { label: "A", text: "$\\{\\pi/3\\}$" },
      { label: "B", text: "$\\{\\pi/6,\\ 5\\pi/6\\}$" },
      { label: "C", text: "$\\{\\pi/3,\\ 5\\pi/6\\}$" },
      { label: "D", text: "$\\{\\pi/3,\\ 2\\pi/3\\}$" },
    ],
    answer: "D",
    topic: "sequences",
    subtopic: "Geometric Progression",
    concepts: ["infinite geometric series", "trigonometric equation"],
    difficulty: "hard",
    source: "original",
    skills: ["summing an infinite G.P.", "solving for $\\cos x$"],
    estMinutes: 5,
    tags: ["cengage-seq", "gp"],
    hints: [
      "For $x \\in (0,\\pi)$, $|\\cos x| < 1$, so the exponent is a convergent geometric series $\\dfrac{1}{1-|\\cos x|}$.",
      "Rewrite both sides as powers of $8$ (note $4^3 = 8^2$).",
    ],
    solution:
      "For $x \\in (0, \\pi)$ we have $|\\cos x| < 1$, so the exponent is the geometric sum\n$$1 + |\\cos x| + |\\cos x|^2 + \\cdots = \\dfrac{1}{1 - |\\cos x|}.$$\nSince $4^3 = 8^2$, the equation becomes $8^{1/(1-|\\cos x|)} = 8^2$, giving $\\dfrac{1}{1-|\\cos x|} = 2$, so $|\\cos x| = \\dfrac{1}{2}$ and $\\cos x = \\pm\\dfrac{1}{2}$. In $(0,\\pi)$ this yields $x = \\dfrac{\\pi}{3},\\ \\dfrac{2\\pi}{3}$, so $S = \\{\\pi/3,\\ 2\\pi/3\\}$.",
    solutionSteps: [
      "Sum the exponent as $\\tfrac{1}{1-|\\cos x|}$ since $|\\cos x|<1$.",
      "Set $8^{1/(1-|\\cos x|)}=8^2$ to get $|\\cos x|=\\tfrac12$.",
      "Solve $\\cos x=\\pm\\tfrac12$ in $(0,\\pi)$: $x=\\pi/3,2\\pi/3$.",
    ],
  },
  {
    id: "seq-sc-045",
    statement:
      "For $|a| < 1$ and $|b| < 1$, find the sum of the series $1 + (1+a)b + (1+a+a^2)b^2 + (1+a+a^2+a^3)b^3 + \\cdots$.",
    format: "mcq",
    options: [
      { label: "A", text: "$\\dfrac{1}{(1-a)(1-b)}$" },
      { label: "B", text: "$\\dfrac{1}{(1-a)(1-ab)}$" },
      { label: "C", text: "$\\dfrac{1}{(1-b)(1-ab)}$" },
      { label: "D", text: "$\\dfrac{1}{(1-a)(1-b)(1-ab)}$" },
    ],
    answer: "C",
    topic: "sequences",
    subtopic: "Sigma & Telescoping",
    concepts: ["infinite series", "closed form for partial sums", "geometric series"],
    difficulty: "olympiad",
    source: "original",
    skills: ["replacing partial sums by closed form", "splitting into two geometric series"],
    estMinutes: 7,
    tags: ["cengage-seq", "sigma"],
    hints: [
      "The $n$th bracket is $1 + a + \\cdots + a^{n-1} = \\dfrac{1-a^n}{1-a}$.",
      "Split into two geometric series in $b$ and in $ab$.",
    ],
    solution:
      "The general term is $\\left(\\dfrac{1-a^n}{1-a}\\right)b^{n-1}$, so the sum is\n$$\\sum_{n=1}^{\\infty}\\dfrac{b^{n-1}}{1-a} - \\sum_{n=1}^{\\infty}\\dfrac{a^n b^{n-1}}{1-a} = \\dfrac{1}{1-a}\\sum_{n=1}^{\\infty}b^{n-1} - \\dfrac{a}{1-a}\\sum_{n=1}^{\\infty}(ab)^{n-1}.$$\nSumming the two geometric series,\n$$= \\dfrac{1}{1-a}\\cdot\\dfrac{1}{1-b} - \\dfrac{a}{1-a}\\cdot\\dfrac{1}{1-ab} = \\dfrac{(1-ab) - a(1-b)}{(1-a)(1-b)(1-ab)} = \\dfrac{1-a}{(1-a)(1-b)(1-ab)} = \\dfrac{1}{(1-b)(1-ab)}.$$",
    solutionSteps: [
      "Replace the $n$th bracket by $\\tfrac{1-a^n}{1-a}$.",
      "Split into geometric series in $b$ and in $ab$.",
      "Combine: $\\tfrac{1}{(1-a)(1-b)}-\\tfrac{a}{(1-a)(1-ab)}=\\tfrac{1}{(1-b)(1-ab)}$.",
    ],
  },
  {
    id: "seq-sc-046",
    statement:
      "Evaluate $0.2^{\\,\\log_{\\sqrt{5}}\\left(\\frac{1}{4} + \\frac{1}{8} + \\frac{1}{16} + \\cdots\\right)}$.",
    format: "mcq",
    options: [
      { label: "A", text: "$4$" },
      { label: "B", text: "$\\log 4$" },
      { label: "C", text: "$\\log 2$" },
      { label: "D", text: "none of these" },
    ],
    answer: "A",
    topic: "sequences",
    subtopic: "Geometric Progression",
    concepts: ["infinite geometric series", "logarithms", "change of base"],
    difficulty: "hard",
    source: "original",
    skills: ["summing an infinite G.P.", "log-exponent manipulation"],
    estMinutes: 4,
    tags: ["cengage-seq", "gp"],
    hints: [
      "First sum the geometric series $\\dfrac{1}{4} + \\dfrac{1}{8} + \\cdots$.",
      "Write $0.2 = 5^{-1}$ and $\\log_{\\sqrt{5}} = 2\\log_5$.",
    ],
    solution:
      "The infinite G.P. sums to $\\dfrac{1/4}{1 - 1/2} = \\dfrac{1}{2}$. So the expression is\n$$0.2^{\\log_{\\sqrt{5}}(1/2)} = \\left(5^{-1}\\right)^{2\\log_5(1/2)} = 5^{-2\\log_5(1/2)} = 5^{\\log_5 4} = 4.$$",
    solutionSteps: [
      "Sum the G.P.: $\\tfrac{1/4}{1-1/2}=\\tfrac12$.",
      "Use $0.2=5^{-1}$ and $\\log_{\\sqrt5}=2\\log_5$.",
      "Simplify $5^{-2\\log_5(1/2)}=5^{\\log_5 4}=4$.",
    ],
  },
];
