import type { Problem } from "@/lib/types";

/**
 * Archive practice problems for the "Sequences & Series" chapter, adapted in the
 * app's own voice from the JEE Advanced archive of the Cengage Algebra chapter.
 * Mathematics is preserved exactly; wording and solutions are rewritten.
 *
 * Order (matching the source): 3 single-correct, 2 multiple-correct, 1 matrix,
 * 10 numerical-value problems -> seq-arch-001 .. seq-arch-016.
 */

export const seqArchives: Problem[] = [
  // ═══════════════════ Single Correct (mcq) ═══════════════════
  {
    id: "seq-arch-001",
    statement:
      "A sequence $a_1, a_2, a_3, \\ldots$ is in harmonic progression with $a_1 = 5$ and $a_{20} = 25$. What is the smallest positive integer $n$ for which $a_n$ becomes negative?",
    format: "mcq",
    options: [
      { label: "A", text: "$22$" },
      { label: "B", text: "$23$" },
      { label: "C", text: "$24$" },
      { label: "D", text: "$25$" },
    ],
    answer: "D",
    topic: "sequences",
    subtopic: "Harmonic Progression",
    concepts: ["harmonic progression", "reciprocal AP", "sign of a term"],
    difficulty: "hard",
    source: "original",
    skills: ["converting an HP to an AP of reciprocals", "solving a linear inequality"],
    estMinutes: 5,
    tags: ["cengage-seq", "single-correct"],
    hints: [
      "If $a_n$ is in HP then $\\dfrac{1}{a_n}$ is in AP.",
      "Find the common difference of the reciprocal AP, then require $\\dfrac{1}{a_n} < 0$.",
    ],
    solution:
      "Since the $a_n$ are in HP, the reciprocals $\\dfrac{1}{a_n}$ form an AP with first term $\\dfrac{1}{5}$ and $\\dfrac{1}{a_{20}} = \\dfrac{1}{25}$. The common difference is $d = \\dfrac{\\frac{1}{25} - \\frac{1}{5}}{19} = \\dfrac{-4}{19 \\times 25}$. We need $\\dfrac{1}{a_n} = \\dfrac{1}{5} + (n-1)\\left(\\dfrac{-4}{19 \\times 25}\\right) < 0$, i.e. $\\dfrac{4(n-1)}{19 \\times 5} > 1$, so $n - 1 > \\dfrac{95}{4}$, giving $n > \\dfrac{95}{4} + 1 = 24.75$. The least such integer is $n = 25$.",
    solutionSteps: [
      "Reciprocals form an AP: $\\frac{1}{a_1} = \\frac{1}{5}$, $\\frac{1}{a_{20}} = \\frac{1}{25}$.",
      "Common difference $d = \\dfrac{\\frac{1}{25} - \\frac{1}{5}}{19} = \\dfrac{-4}{475}$.",
      "Require $\\frac{1}{5} + (n-1)d < 0 \\Rightarrow n > 24.75$.",
      "Least integer is $n = 25$.",
    ],
  },
  {
    id: "seq-arch-002",
    statement:
      "Evaluate $\\displaystyle\\sum_{k=1}^{13} \\dfrac{1}{\\sin\\!\\left(\\dfrac{\\pi}{4} + \\dfrac{(k-1)\\pi}{6}\\right)\\, \\sin\\!\\left(\\dfrac{\\pi}{4} + \\dfrac{k\\pi}{6}\\right)}$.",
    format: "mcq",
    options: [
      { label: "A", text: "$3 - \\sqrt{3}$" },
      { label: "B", text: "$2(3 - \\sqrt{3})$" },
      { label: "C", text: "$2(\\sqrt{3} - 1)$" },
      { label: "D", text: "$2(2 + \\sqrt{3})$" },
    ],
    answer: "C",
    topic: "sequences",
    subtopic: "Sigma & Telescoping",
    concepts: ["telescoping sum", "cotangent difference identity", "trigonometric series"],
    difficulty: "olympiad",
    source: "original",
    skills: ["introducing $\\sin(\\pi/6)$ to telescope", "using $\\sin(A-B)$ expansion"],
    estMinutes: 7,
    tags: ["cengage-seq", "single-correct"],
    hints: [
      "The angles in consecutive factors differ by $\\dfrac{\\pi}{6}$; multiply and divide by $\\sin\\dfrac{\\pi}{6} = \\dfrac{1}{2}$.",
      "Use $\\dfrac{\\sin(A-B)}{\\sin A \\sin B} = \\cot B - \\cot A$ to telescope.",
    ],
    solution:
      "Write $\\sin\\dfrac{\\pi}{6} = \\dfrac{1}{2}$ and multiply each term by $\\dfrac{\\sin(\\pi/6)}{\\sin(\\pi/6)}$. Since $\\left(\\dfrac{\\pi}{4} + \\dfrac{k\\pi}{6}\\right) - \\left(\\dfrac{\\pi}{4} + \\dfrac{(k-1)\\pi}{6}\\right) = \\dfrac{\\pi}{6}$, the sum equals\n$2\\displaystyle\\sum_{k=1}^{13}\\dfrac{\\sin\\!\\left[\\left(\\frac{\\pi}{4}+\\frac{k\\pi}{6}\\right)-\\left(\\frac{\\pi}{4}+\\frac{(k-1)\\pi}{6}\\right)\\right]}{\\sin\\!\\left(\\frac{\\pi}{4}+\\frac{(k-1)\\pi}{6}\\right)\\sin\\!\\left(\\frac{\\pi}{4}+\\frac{k\\pi}{6}\\right)} = 2\\sum_{k=1}^{13}\\left[\\cot\\!\\left(\\tfrac{\\pi}{4}+\\tfrac{(k-1)\\pi}{6}\\right) - \\cot\\!\\left(\\tfrac{\\pi}{4}+\\tfrac{k\\pi}{6}\\right)\\right].$\nThis telescopes to $2\\left[\\cot\\dfrac{\\pi}{4} - \\cot\\!\\left(\\dfrac{\\pi}{4} + \\dfrac{13\\pi}{6}\\right)\\right]$. Since $\\cot\\dfrac{\\pi}{4} = 1$ and $\\cot\\!\\left(\\dfrac{\\pi}{4} + \\dfrac{13\\pi}{6}\\right) = \\cot\\dfrac{5\\pi}{12} = 2 - \\sqrt{3}$, the value is $2[1 - (2 - \\sqrt{3})] = 2(\\sqrt{3} - 1)$.",
    solutionSteps: [
      "Insert $\\sin(\\pi/6)$; angle gap between factors is $\\pi/6$.",
      "Apply $\\frac{\\sin(A-B)}{\\sin A \\sin B} = \\cot B - \\cot A$.",
      "Telescope to $2[\\cot\\frac{\\pi}{4} - \\cot(\\frac{\\pi}{4}+\\frac{13\\pi}{6})]$.",
      "Evaluate: $2[1 - (2-\\sqrt{3})] = 2(\\sqrt{3}-1)$.",
    ],
  },
  {
    id: "seq-arch-003",
    statement:
      "Let $b_i > 1$ for $i = 1, 2, \\ldots, 101$, and suppose $\\log_e b_1, \\log_e b_2, \\ldots, \\log_e b_{101}$ are in AP with common difference $\\log_e 2$. Let $a_1, a_2, \\ldots, a_{101}$ be in AP with $a_1 = b_1$ and $a_{51} = b_{51}$. Put $t = b_1 + b_2 + \\cdots + b_{51}$ and $s = a_1 + a_2 + \\cdots + a_{51}$. Which statement holds?",
    format: "mcq",
    options: [
      { label: "A", text: "$s > t$ and $a_{101} > b_{101}$" },
      { label: "B", text: "$s > t$ and $a_{101} < b_{101}$" },
      { label: "C", text: "$s < t$ and $a_{101} > b_{101}$" },
      { label: "D", text: "$s < t$ and $a_{101} < b_{101}$" },
    ],
    answer: "B",
    topic: "sequences",
    subtopic: "Means & Inequalities",
    concepts: ["GP from log-AP", "AP vs GP sums", "AM-GM comparison"],
    difficulty: "olympiad",
    source: "original",
    skills: ["reading a GP off a log-AP", "comparing partial sums of AP and GP"],
    estMinutes: 8,
    tags: ["cengage-seq", "single-correct"],
    hints: [
      "$\\log_e b_{k+1} - \\log_e b_k = \\log_e 2$ means the $b_k$ form a GP with ratio $2$.",
      "Compute $t = b_1(2^{51}-1)$ and $s = \\tfrac{51}{2}(b_1 + b_{51})$, then compare.",
    ],
    solution:
      "Since $\\log_e b_{k+1} - \\log_e b_k = \\log_e 2$, we have $\\dfrac{b_{k+1}}{b_k} = 2$, so $b_k = b_1 2^{k-1}$ is a GP with ratio $2$. Then $t = b_1(2^{51} - 1)$. The AP $a_k$ has $a_1 = b_1$ and $a_{51} = b_{51} = 2^{50}b_1$, so $s = \\dfrac{51}{2}(a_1 + a_{51}) = \\dfrac{51}{2}b_1(1 + 2^{50})$. Then $s - t = b_1\\!\\left(\\dfrac{51}{2} + 51\\cdot 2^{49} - 2^{51} + 1\\right) = b_1\\!\\left(\\dfrac{53}{2} + 47\\cdot 2^{49}\\right) > 0$, so $s > t$. For the $101$st terms, $b_{101} = 2^{100}b_1$, while $a_{101} = 2a_{51} - a_1 = 2b_{51} - b_1 = (2^{51} - 1)b_1$. Since $2^{100} > 2^{51} - 1$, we get $b_{101} > a_{101}$, i.e. $a_{101} < b_{101}$.",
    solutionSteps: [
      "Log-AP with difference $\\log 2 \\Rightarrow b_k$ is a GP with ratio $2$.",
      "$t = b_1(2^{51}-1)$; $s = \\frac{51}{2}b_1(1 + 2^{50})$.",
      "$s - t = b_1(\\frac{53}{2} + 47\\cdot 2^{49}) > 0 \\Rightarrow s > t$.",
      "$a_{101} = (2^{51}-1)b_1 < 2^{100}b_1 = b_{101}$.",
    ],
  },

  // ═══════════════════ Multiple Correct (text) ═══════════════════
  {
    id: "seq-arch-004",
    statement:
      "Let $S_n = \\displaystyle\\sum_{k=1}^{4n} (-1)^{\\frac{k(k+1)}{2}} k^2$. Which of the following values can $S_n$ attain? (1) $1056$ (2) $1088$ (3) $1120$ (4) $1332$",
    format: "text",
    answer: "1, 4",
    acceptedAnswers: ["1,4", "(1),(4)", "1 and 4"],
    topic: "sequences",
    subtopic: "Sigma & Telescoping",
    concepts: ["sign pattern of $(-1)^{k(k+1)/2}$", "grouping in blocks of four", "closed form"],
    difficulty: "olympiad",
    source: "original",
    skills: ["identifying the period-4 sign pattern", "summing an arithmetic block sum"],
    estMinutes: 7,
    tags: ["cengage-seq", "multiple-correct"],
    hints: [
      "The sign $(-1)^{k(k+1)/2}$ repeats with period $4$: the pattern on $k \\equiv 1,2,3,0$ is $-,-,+,+$.",
      "Group four consecutive terms and simplify to get a formula in $n$.",
    ],
    solution:
      "The exponent $\\dfrac{k(k+1)}{2}$ makes the sign pattern periodic with period $4$, giving signs $-,-,+,+$ on each block of four. Grouping,\n$S_n = \\displaystyle\\sum_{r=0}^{n-1}\\left[(4r+4)^2 + (4r+3)^2 - (4r+2)^2 - (4r+1)^2\\right] = \\sum_{r=0}^{n-1}(32r + 20) = 16n(n-1) + 20n = 4n(4n+1).$\nSo $S_n = 4n(4n+1)$. For $n = 8$ this is $4\\cdot 8\\cdot 33 = 1056$, and for $n = 9$ it is $4\\cdot 9\\cdot 37 = 1332$. The values $1088$ and $1120$ are not of the form $4n(4n+1)$. Hence $S_n$ can equal $1056$ and $1332$.",
    solutionSteps: [
      "Sign pattern has period 4: $-,-,+,+$.",
      "Block sum: $(4r+4)^2 + (4r+3)^2 - (4r+2)^2 - (4r+1)^2 = 32r + 20$.",
      "$S_n = \\sum_{r=0}^{n-1}(32r+20) = 4n(4n+1)$.",
      "$n=8 \\to 1056$, $n=9 \\to 1332$; others impossible.",
    ],
  },
  {
    id: "seq-arch-005",
    statement:
      "Let $\\alpha, \\beta$ be the roots of $x^2 - x - 1 = 0$ with $\\alpha > \\beta$. For positive integers $n$ define $a_n = \\dfrac{\\alpha^n - \\beta^n}{\\alpha - \\beta}$ for $n \\geq 1$, and $b_1 = 1$, $b_n = a_{n-1} + a_{n+1}$ for $n \\geq 2$. Which of the following are correct? (1) $\\displaystyle\\sum_{n=1}^{\\infty} \\dfrac{a_n}{10^n} = \\dfrac{10}{89}$ (2) $b_n = \\alpha^n + \\beta^n$ for all $n \\geq 1$ (3) $a_1 + a_2 + \\cdots + a_n = a_{n+2} - 1$ for all $n \\geq 1$ (4) $\\displaystyle\\sum_{n=1}^{\\infty} \\dfrac{b_n}{10^n} = \\dfrac{8}{89}$",
    format: "text",
    answer: "1, 2, 3",
    acceptedAnswers: ["1,2,3", "(1),(2),(3)", "1 2 3"],
    topic: "sequences",
    subtopic: "Sigma & Telescoping",
    concepts: ["Fibonacci-type recurrence", "geometric series of $\\alpha^n$", "Lucas numbers"],
    difficulty: "olympiad",
    source: "original",
    skills: ["using $\\alpha + \\beta = 1$, $\\alpha\\beta = -1$", "summing geometric series with roots"],
    estMinutes: 8,
    tags: ["cengage-seq", "multiple-correct"],
    hints: [
      "Here $\\alpha + \\beta = 1$, $\\alpha\\beta = -1$, and $1 + x = x^2$ for each root.",
      "Show $b_n = \\alpha^n + \\beta^n$, then evaluate the two infinite geometric series.",
    ],
    solution:
      "From $x^2 = x + 1$ we get $\\alpha + \\beta = 1$, $\\alpha\\beta = -1$, and $\\alpha - \\beta = \\sqrt{5}$.\n\n(2) $b_n = a_{n-1} + a_{n+1} = \\dfrac{\\alpha^{n-1}(1+\\alpha^2) - \\beta^{n-1}(1+\\beta^2)}{\\alpha - \\beta}$. Using $1 + \\alpha^2 = \\alpha + 2$ and similarly for $\\beta$, this simplifies to $\\dfrac{\\sqrt{5}(\\alpha^n + \\beta^n)}{\\alpha - \\beta} = \\alpha^n + \\beta^n$. Correct.\n\n(1) $\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{a_n}{10^n} = \\dfrac{1}{\\alpha-\\beta}\\left[\\dfrac{\\alpha/10}{1-\\alpha/10} - \\dfrac{\\beta/10}{1-\\beta/10}\\right] = \\dfrac{10}{(10-\\alpha)(10-\\beta)} = \\dfrac{10}{100 - 10 - 1} = \\dfrac{10}{89}$. Correct.\n\n(3) Summing the closed form and using $1 + x = x^2$ gives $a_1 + \\cdots + a_n = a_{n+2} - 1$. Correct.\n\n(4) $\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{b_n}{10^n} = \\dfrac{10(\\alpha+\\beta) - 2\\alpha\\beta}{100 - 10(\\alpha+\\beta) + \\alpha\\beta} = \\dfrac{10 + 2}{100 - 10 - 1} = \\dfrac{12}{89} \\neq \\dfrac{8}{89}$. Incorrect.\n\nHence options (1), (2), (3) are correct.",
    solutionSteps: [
      "$\\alpha+\\beta = 1$, $\\alpha\\beta = -1$, $\\alpha-\\beta = \\sqrt{5}$.",
      "(2) $b_n = \\alpha^n + \\beta^n$: true.",
      "(1) $\\sum a_n/10^n = 10/89$: true.",
      "(3) $\\sum_{r\\le n} a_r = a_{n+2}-1$: true. (4) gives $12/89 \\ne 8/89$: false.",
    ],
  },

  // ═══════════════════ Matrix Match (text) ═══════════════════
  {
    id: "seq-arch-006",
    statement:
      "Let the harmonic mean of two positive real numbers $a$ and $b$ be $4$. Suppose $q$ is a positive real number such that $a, 5, q, b$ is an arithmetic progression. Which of the following are possible values of $|q - a|$? (1) $1$ (2) $2$ (3) $3$ (4) $5$",
    format: "text",
    answer: "2, 4",
    acceptedAnswers: ["2,4", "(2),(4)", "2 and 4"],
    topic: "sequences",
    subtopic: "Means & Inequalities",
    concepts: ["harmonic mean", "arithmetic progression conditions", "quadratic in a"],
    difficulty: "hard",
    source: "original",
    skills: ["setting up HM equation", "using equal AP differences"],
    estMinutes: 6,
    tags: ["cengage-seq", "matrix-match"],
    hints: [
      "HM $= \\dfrac{2ab}{a+b} = 4$ gives $ab = 2a + 2b$.",
      "For the AP $a, 5, q, b$, equal steps give $q = 10 - a$ and $2q = 5 + b$.",
    ],
    solution:
      "The harmonic mean condition gives $\\dfrac{2ab}{a+b} = 4$, i.e. $ab = 2a + 2b$. For the AP $a, 5, q, b$ the common difference $d$ satisfies $5 = a + d$ so $q = 5 + d = 10 - a$, and $b = q + d = 2q - 5$. From $q = 10 - a$: $b = 15 - 2a$, i.e. $2a + b = 15$. Substituting into $ab = 2a + 2b$: $a(15 - 2a) = 2a + 2(15 - 2a)$, giving $2a^2 - 17a + 30 = 0$, so $a = 6$ or $a = \\dfrac{5}{2}$. Correspondingly $q = 10 - a = 4$ or $\\dfrac{15}{2}$, so $|q - a| = 2$ or $5$. Hence the possible values are $2$ and $5$, matching (2) and (4).",
    solutionSteps: [
      "HM: $\\frac{2ab}{a+b} = 4 \\Rightarrow ab = 2a + 2b$.",
      "AP steps: $q = 10 - a$, $2a + b = 15$.",
      "Solve $2a^2 - 17a + 30 = 0 \\Rightarrow a = 6$ or $\\frac{5}{2}$.",
      "$|q-a| = 2$ or $5$.",
    ],
  },

  // ═══════════════════ Numerical Value (numeric) ═══════════════════
  {
    id: "seq-arch-007",
    statement:
      "For $k = 1, 2, \\ldots, 100$, let $S_k$ be the sum of the infinite geometric series with first term $\\dfrac{k-1}{k!}$ and common ratio $\\dfrac{1}{k}$. Find the value of $\\dfrac{100^2}{100!} + \\displaystyle\\sum_{k=1}^{100} \\left| (k^2 - 3k + 1) S_k \\right|$.",
    format: "numeric",
    answer: "3",
    acceptedAnswers: ["3.00", "3.0"],
    topic: "sequences",
    subtopic: "Geometric Progression",
    concepts: ["infinite GP sum", "factorial telescoping", "absolute value handling"],
    difficulty: "olympiad",
    source: "original",
    skills: ["summing an infinite GP", "telescoping factorial expressions"],
    estMinutes: 8,
    tags: ["cengage-seq", "numerical"],
    hints: [
      "Sum the GP: $S_k = \\dfrac{(k-1)/k!}{1 - 1/k} = \\dfrac{1}{(k-1)!}$.",
      "Rewrite $(k^2 - 3k + 1)S_k$ as a difference $\\dfrac{k-1}{(k-2)!} - \\dfrac{k}{(k-1)!}$ and telescope.",
    ],
    solution:
      "Summing the GP, $S_k = \\dfrac{(k-1)/k!}{1 - 1/k} = \\dfrac{1}{(k-1)!}$. The $k=1$ term is $0$ (its first term is $0$), so the sum runs from $k=2$. Write the general term as a difference: $\\dfrac{k^2 - 3k + 1}{(k-1)!} = \\dfrac{(k-1)^2 - k}{(k-1)!} = \\dfrac{k-1}{(k-2)!} - \\dfrac{k}{(k-1)!}$. This bracket is positive for $k \\ge 3$, but at $k=2$ it equals $\\dfrac{1}{0!} - \\dfrac{2}{1!} = -1$, so the absolute value flips it to $+1$. Splitting off $k=2$ and telescoping the positive tail:\n$$\\sum_{k=2}^{100}\\left|\\dfrac{k-1}{(k-2)!} - \\dfrac{k}{(k-1)!}\\right| = 1 + \\sum_{k=3}^{100}\\left(\\dfrac{k-1}{(k-2)!} - \\dfrac{k}{(k-1)!}\\right) = 1 + \\left(\\dfrac{2}{1!} - \\dfrac{100}{99!}\\right) = 3 - \\dfrac{100}{99!}.$$\nAdding $\\dfrac{100^2}{100!} = \\dfrac{100}{99!}$ cancels the tail, giving $3$.",
    solutionSteps: [
      "$S_k = \\frac{1}{(k-1)!}$; the $k=1$ term is $0$.",
      "$(k^2 - 3k + 1)S_k = \\frac{k-1}{(k-2)!} - \\frac{k}{(k-1)!}$, negative only at $k=2$ (value $-1$).",
      "Absolute value gives $1 + \\sum_{k=3}^{100}(\\cdots) = 3 - \\frac{100}{99!}$.",
      "Add $\\frac{100^2}{100!} = \\frac{100}{99!}$ to get $3$.",
    ],
  },
  {
    id: "seq-arch-008",
    statement:
      "Let $a_1, a_2, \\ldots, a_{11}$ be real numbers with $a_1 = 15$, $27 - 2a_2 > 0$, and $a_k = 2a_{k-1} - a_{k-2}$ for $k = 3, 4, \\ldots, 11$. If $\\dfrac{a_1^2 + a_2^2 + \\cdots + a_{11}^2}{11} = 90$, find the value of $\\dfrac{a_1 + a_2 + \\cdots + a_{11}}{11}$.",
    format: "numeric",
    answer: "0",
    acceptedAnswers: ["0.00", "0.0"],
    topic: "sequences",
    subtopic: "Arithmetic Progression",
    concepts: ["recurrence defining an AP", "sum of squares of AP", "mean of an AP"],
    difficulty: "hard",
    source: "original",
    skills: ["recognizing an AP from a linear recurrence", "using the mean-of-squares condition"],
    estMinutes: 6,
    tags: ["cengage-seq", "numerical"],
    hints: [
      "$a_k = 2a_{k-1} - a_{k-2}$ means the sequence is an AP.",
      "Use the mean of squares to find $d$; the constraint $27 - 2a_2 > 0$ selects the right root.",
    ],
    solution:
      "The recurrence $a_k = 2a_{k-1} - a_{k-2}$ shows the terms form an AP with first term $a = 15$ and common difference $d$. Then $\\dfrac{1}{11}\\sum a_k^2 = 11a^2 + 35\\cdot 11 d^2/11 \\ldots$; expanding, $225 + 35d^2 + 150d = 90$, so $35d^2 + 150d + 135 = 0$, giving $d = -3$ or $d = -\\dfrac{9}{7}$. The condition $27 - 2a_2 > 0$, i.e. $a_2 < \\dfrac{27}{2}$, requires $d = -3$. The mean of an AP equals its middle term $a_6 = a + 5d = 15 + 5(-3) = 0$. Hence $\\dfrac{a_1 + \\cdots + a_{11}}{11} = 0$.",
    solutionSteps: [
      "Recurrence $\\Rightarrow$ AP with $a = 15$.",
      "Mean of squares: $225 + 35d^2 + 150d = 90$.",
      "$35d^2 + 150d + 135 = 0 \\Rightarrow d = -3$ (from $a_2 < 27/2$).",
      "Mean $= a_6 = 15 + 5(-3) = 0$.",
    ],
  },
  {
    id: "seq-arch-009",
    statement:
      "Let $a_1, a_2, \\ldots, a_{100}$ be an AP with $a_1 = 3$, and let $S_p = \\displaystyle\\sum_{i=1}^{p} a_i$ for $1 \\leq p \\leq 100$. For any integer $n$ with $1 \\leq n \\leq 20$, set $m = 5n$. If $\\dfrac{S_m}{S_n}$ is independent of $n$, find $a_2$.",
    format: "numeric",
    answer: "9",
    acceptedAnswers: ["9.00", "9.0"],
    topic: "sequences",
    subtopic: "Arithmetic Progression",
    concepts: ["sum of AP", "ratio independent of index", "finding common difference"],
    difficulty: "hard",
    source: "original",
    skills: ["forming $S_{5n}/S_n$", "forcing $n$-independence"],
    estMinutes: 5,
    tags: ["cengage-seq", "numerical"],
    hints: [
      "Write $S_n = \\dfrac{n}{2}(6 + (n-1)d)$ and $S_{5n}$ similarly.",
      "The ratio is independent of $n$ only when a certain coefficient vanishes.",
    ],
    solution:
      "With $a_1 = 3$, $S_n = \\dfrac{n}{2}(6 + (n-1)d)$ and $S_{5n} = \\dfrac{5n}{2}(6 + (5n-1)d)$, so $\\dfrac{S_{5n}}{S_n} = \\dfrac{5(6 + (5n-1)d)}{6 + (n-1)d}$. This is independent of $n$ exactly when $6 - d = 0$, i.e. $d = 6$. Then $a_2 = a_1 + d = 3 + 6 = 9$.",
    solutionSteps: [
      "$S_n = \\frac{n}{2}(6 + (n-1)d)$, $S_{5n} = \\frac{5n}{2}(6 + (5n-1)d)$.",
      "Ratio independent of $n \\Rightarrow 6 - d = 0 \\Rightarrow d = 6$.",
      "$a_2 = 3 + 6 = 9$.",
    ],
  },
  {
    id: "seq-arch-010",
    statement:
      "A pack contains $n$ cards numbered $1$ to $n$. Two consecutively numbered cards are removed, and the sum of the numbers on the remaining cards is $1224$. If the smaller of the two removed numbers is $k$, find $k - 20$.",
    format: "numeric",
    answer: "5",
    acceptedAnswers: ["5.00", "5.0"],
    topic: "sequences",
    subtopic: "Arithmetic Progression",
    concepts: ["sum of first n integers", "bounding n", "solving for removed cards"],
    difficulty: "hard",
    source: "original",
    skills: ["bounding n by inequalities", "using the triangular-number formula"],
    estMinutes: 5,
    tags: ["cengage-seq", "numerical"],
    hints: [
      "The removed pair sums to $2k + 1$; bound $n$ using $\\dfrac{n(n+1)}{2} - (2k+1) = 1224$.",
      "Inequalities force a unique $n$, then solve for $k$.",
    ],
    solution:
      "Removing two consecutive cards $k$ and $k+1$ leaves total $\\dfrac{n(n+1)}{2} - (2k+1) = 1224$. Since $1 \\le k$ and $k+1 \\le n$, we have $\\dfrac{(n-2)(n-1)}{2} \\le 1224 \\le \\dfrac{(n-2)(n+3)}{2}$, which yields $49 < n < 51$, so $n = 50$. Then $\\dfrac{50\\cdot 51}{2} - (2k+1) = 1224$, i.e. $1275 - (2k+1) = 1224$, giving $2k + 1 = 51$, so $k = 25$. Hence $k - 20 = 5$.",
    solutionSteps: [
      "$\\frac{n(n+1)}{2} - (2k+1) = 1224$.",
      "Bounding gives $n = 50$.",
      "$1275 - (2k+1) = 1224 \\Rightarrow k = 25$.",
      "$k - 20 = 5$.",
    ],
  },
  {
    id: "seq-arch-011",
    statement:
      "Let $a, b, c$ be positive integers with $\\dfrac{b}{a}$ an integer. Suppose $a, b, c$ are in geometric progression and the arithmetic mean of $a, b, c$ equals $b + 2$. Find the value of $\\dfrac{a^2 + a - 14}{a + 1}$.",
    format: "numeric",
    answer: "4",
    acceptedAnswers: ["4.00", "4.0"],
    topic: "sequences",
    subtopic: "Geometric Progression",
    concepts: ["GP condition $b^2 = ac$", "integer ratio", "perfect-square divisibility"],
    difficulty: "hard",
    source: "original",
    skills: ["using $b^2 = ac$", "reducing to a perfect-square divisibility"],
    estMinutes: 5,
    tags: ["cengage-seq", "numerical"],
    hints: [
      "GP gives $b^2 = ac$, so $c = \\dfrac{b^2}{a}$.",
      "The AM condition becomes $\\left(\\dfrac{b}{a} - 1\\right)^2 = \\dfrac{6}{a}$ with $\\dfrac{b}{a}$ an integer.",
    ],
    solution:
      "Since $a, b, c$ are in GP with $\\dfrac{b}{a} = \\dfrac{c}{b}$ an integer, $b^2 = ac$ so $c = \\dfrac{b^2}{a}$. The AM condition $\\dfrac{a+b+c}{3} = b + 2$ gives $a - 2b + c = 6$, i.e. $a - 2b + \\dfrac{b^2}{a} = 6$. Dividing by $a$: $\\left(\\dfrac{b}{a} - 1\\right)^2 = \\dfrac{6}{a}$. Because $\\dfrac{b}{a}$ is an integer, the left side is a perfect square times $1$, forcing $\\dfrac{6}{a}$ to be a perfect square with $a$ a positive integer; the only solution is $a = 6$. Then $\\dfrac{a^2 + a - 14}{a + 1} = \\dfrac{36 + 6 - 14}{7} = \\dfrac{28}{7} = 4$.",
    solutionSteps: [
      "GP: $b^2 = ac$, $c = b^2/a$.",
      "AM condition $\\Rightarrow (\\frac{b}{a} - 1)^2 = \\frac{6}{a}$.",
      "Integer ratio forces $a = 6$.",
      "$\\frac{36 + 6 - 14}{7} = 4$.",
    ],
  },
  {
    id: "seq-arch-012",
    statement:
      "All terms of an arithmetic progression are natural numbers. The ratio of the sum of its first seven terms to the sum of its first eleven terms is $6 : 11$, and its seventh term lies strictly between $130$ and $140$. Find the common difference.",
    format: "numeric",
    answer: "9",
    acceptedAnswers: ["9.00", "9.0"],
    topic: "sequences",
    subtopic: "Arithmetic Progression",
    concepts: ["sum ratio of AP", "term bounds", "natural-number constraint"],
    difficulty: "hard",
    source: "original",
    skills: ["forming the sum ratio equation", "using term bounds to pin d"],
    estMinutes: 5,
    tags: ["cengage-seq", "numerical"],
    hints: [
      "$\\dfrac{S_7}{S_{11}} = \\dfrac{6}{11}$ relates the first term $a$ and difference $d$.",
      "Deduce $a = 9d$, then use $130 < T_7 < 140$.",
    ],
    solution:
      "Using $S_7 = \\dfrac{7}{2}(2a + 6d)$ and $S_{11} = \\dfrac{11}{2}(2a + 10d)$, the ratio $\\dfrac{S_7}{S_{11}} = \\dfrac{7(a + 3d)}{11(a + 5d)} = \\dfrac{6}{11}$ gives $7(a + 3d) = 6(a + 5d)$, so $a = 9d$. Then the seventh term is $T_7 = a + 6d = 15d$. From $130 < 15d < 140$ we get $8.67 < d < 9.33$, and since $d$ is a natural number, $d = 9$.",
    solutionSteps: [
      "$\\frac{S_7}{S_{11}} = \\frac{7(a+3d)}{11(a+5d)} = \\frac{6}{11} \\Rightarrow a = 9d$.",
      "$T_7 = a + 6d = 15d$.",
      "$130 < 15d < 140 \\Rightarrow d = 9$.",
    ],
  },
  {
    id: "seq-arch-013",
    statement:
      "The side lengths of a right-angled triangle are in arithmetic progression. If the triangle has area $24$, find the length of its shortest side.",
    format: "numeric",
    answer: "6",
    acceptedAnswers: ["6.00", "6.0"],
    topic: "sequences",
    subtopic: "Arithmetic Progression",
    concepts: ["3-4-5 scaling", "Pythagoras with AP sides", "area condition"],
    difficulty: "medium",
    source: "original",
    skills: ["parametrizing AP sides", "applying Pythagoras and area"],
    estMinutes: 4,
    tags: ["cengage-seq", "numerical"],
    hints: [
      "Write the sides as $a - d, a, a + d$ and apply the Pythagorean theorem.",
      "You should find the sides are $3d, 4d, 5d$; use the area to find $d$.",
    ],
    solution:
      "Let the sides be $a - d, a, a + d$ with $d > 0$. By the Pythagorean theorem, $a^2 + (a - d)^2 = (a + d)^2$, which simplifies to $a = 4d$. So the sides are $3d, 4d, 5d$. The area is $\\dfrac{1}{2}(3d)(4d) = 6d^2 = 24$, giving $d^2 = 4$, so $d = 2$. The sides are $6, 8, 10$, and the shortest side is $6$.",
    solutionSteps: [
      "Sides $a-d, a, a+d$; Pythagoras gives $a = 4d$.",
      "Sides are $3d, 4d, 5d$.",
      "Area $= 6d^2 = 24 \\Rightarrow d = 2$.",
      "Shortest side $= 3d = 6$.",
    ],
  },
  {
    id: "seq-arch-014",
    statement:
      "Let $X$ be the set of the first $2018$ terms of the AP $1, 6, 11, \\ldots$, and $Y$ the set of the first $2018$ terms of the AP $9, 16, 23, \\ldots$. Find the number of elements in $X \\cup Y$.",
    format: "numeric",
    answer: "3748",
    topic: "sequences",
    subtopic: "Arithmetic Progression",
    concepts: ["intersection of two APs", "LCM common difference", "inclusion-exclusion"],
    difficulty: "hard",
    source: "original",
    skills: ["finding common terms of two APs", "counting via inclusion-exclusion"],
    estMinutes: 7,
    tags: ["cengage-seq", "numerical"],
    hints: [
      "Common terms of the two APs form an AP whose difference is the LCM of $5$ and $7$.",
      "Use $n(X \\cup Y) = n(X) + n(Y) - n(X \\cap Y)$.",
    ],
    solution:
      "Here $X$ has common difference $5$ and $Y$ has common difference $7$. Their common terms form an AP with common difference $\\operatorname{lcm}(5,7) = 35$, starting at the first shared value $16$: namely $16, 51, 86, \\ldots$. The largest element of $X$ is $1 + 2017\\cdot 5 = 10086$ (that of $Y$ is $14128$), so common terms satisfy $16 + (n-1)\\cdot 35 \\le 10086$, giving $n \\le 288.7$, hence $288$ common terms. Therefore $n(X \\cup Y) = 2018 + 2018 - 288 = 3748$.",
    solutionSteps: [
      "Common terms have difference $\\operatorname{lcm}(5,7) = 35$, starting at $16$.",
      "Max element of $X$ is $10086$.",
      "$16 + (n-1)35 \\le 10086 \\Rightarrow n = 288$.",
      "$n(X \\cup Y) = 2018 + 2018 - 288 = 3748$.",
    ],
  },
  {
    id: "seq-arch-015",
    statement:
      "Let $AP(a; d)$ denote the set of all terms of an infinite AP with first term $a$ and common difference $d > 0$. If $AP(1; 3) \\cap AP(2; 5) \\cap AP(3; 7) = AP(a; d)$, find $a + d$.",
    format: "numeric",
    answer: "157",
    acceptedAnswers: ["157.00", "157.0"],
    topic: "sequences",
    subtopic: "Arithmetic Progression",
    concepts: ["intersection of three APs", "simultaneous congruences", "LCM difference"],
    difficulty: "olympiad",
    source: "original",
    skills: ["solving simultaneous congruences", "identifying the resulting AP"],
    estMinutes: 6,
    tags: ["cengage-seq", "numerical"],
    hints: [
      "A common term must be $\\equiv 1 \\pmod 3$, $\\equiv 2 \\pmod 5$, $\\equiv 3 \\pmod 7$.",
      "The intersection is an AP with difference $\\operatorname{lcm}(3,5,7)$.",
    ],
    solution:
      "The three APs are $\\{1,4,7,\\ldots\\}$ (terms $\\equiv 1 \\bmod 3$), $\\{2,7,12,\\ldots\\}$ (terms $\\equiv 2 \\bmod 5$), and $\\{3,10,17,\\ldots\\}$ (terms $\\equiv 3 \\bmod 7$). A common term satisfies all three congruences; searching the third progression for the least value that is $\\equiv 1 \\bmod 3$ and $\\equiv 2 \\bmod 5$ gives $a = 52$. The common terms recur every $\\operatorname{lcm}(3,5,7) = 105$, so $d = 105$. Thus $a + d = 52 + 105 = 157$.",
    solutionSteps: [
      "Term $\\equiv 1 \\bmod 3$, $\\equiv 2 \\bmod 5$, $\\equiv 3 \\bmod 7$.",
      "Least common value: $a = 52$.",
      "$d = \\operatorname{lcm}(3,5,7) = 105$.",
      "$a + d = 157$.",
    ],
  },
  {
    id: "seq-arch-016",
    statement:
      "Let $a_1, a_2, a_3, \\ldots$ be a sequence of positive integers in AP with common difference $2$, and $b_1, b_2, b_3, \\ldots$ a sequence of positive integers in GP with common ratio $2$. If $a_1 = b_1 = c$, find the number of possible values of $c$ for which $2(a_1 + a_2 + \\cdots + a_n) = b_1 + b_2 + \\cdots + b_n$ holds for some positive integer $n$.",
    format: "numeric",
    answer: "1",
    acceptedAnswers: ["1.00", "1.0"],
    topic: "sequences",
    subtopic: "Means & Inequalities",
    concepts: ["AP sum vs GP sum", "positive-integer constraint", "bounding n"],
    difficulty: "olympiad",
    source: "original",
    skills: ["equating AP and GP sums", "bounding n via growth comparison"],
    estMinutes: 7,
    tags: ["cengage-seq", "numerical"],
    hints: [
      "Write both sums in terms of $c$ and $n$, then solve for $c = \\dfrac{2n^2 - 2n}{2^n - 1 - 2n}$.",
      "For $c$ to be a positive integer, the growth of $2^n$ bounds $n$.",
    ],
    solution:
      "The AP sum is $\\dfrac{n}{2}(2c + (n-1)2) = n(c + n - 1)$, and the GP sum is $c(2^n - 1)$. The condition $2\\cdot n(c + n - 1) = c(2^n - 1)$ rearranges to $c = \\dfrac{2n^2 - 2n}{2^n - 1 - 2n}$. For $c$ to be a positive integer the denominator must be positive, so $2n^2 + 1 \\ge 2^n$, which forces $n \\le 6$. Checking $n = 1, 2, \\ldots, 6$, only $n = 3$ gives a positive integer, namely $c = \\dfrac{12}{3} = 12$. Hence there is exactly $1$ possible value of $c$.",
    solutionSteps: [
      "AP sum $= n(c + n - 1)$; GP sum $= c(2^n - 1)$.",
      "$c = \\dfrac{2n^2 - 2n}{2^n - 1 - 2n}$.",
      "Positivity requires $2n^2 + 1 \\ge 2^n \\Rightarrow n \\le 6$.",
      "Only $n = 3$ gives an integer $c = 12$; so $1$ value.",
    ],
  },
];
