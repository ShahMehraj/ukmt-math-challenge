import type { Problem } from "@/lib/types";

/**
 * Original single-correct practice problems (chunk F, source #77-#93) written in
 * the app's own voice for the "Sequences & Series" chapter of the Cengage
 * companion. Statements are reworded; the mathematics is preserved exactly.
 * Every answer has been checked against the official key.
 */

const SEQ = "cengage-seq";

export const seqSingleF: Problem[] = [
  {
    id: "seq-sc-077",
    statement:
      "Let $t_n$ be the $n$th term of the series $2 + 3 + 6 + 11 + 18 + \\cdots$. What is $t_{50}$?",
    format: "mcq",
    options: [
      { label: "A", text: "$49^2 - 1$" },
      { label: "B", text: "$49^2$" },
      { label: "C", text: "$50^2 + 1$" },
      { label: "D", text: "$49^2 + 2$" },
    ],
    answer: "D",
    topic: "sequences",
    subtopic: "Sigma & Telescoping",
    concepts: ["difference sequences", "perfect squares", "general term"],
    difficulty: "medium",
    source: "original",
    skills: ["recognising a quadratic pattern from differences"],
    estMinutes: 3,
    tags: [SEQ, "general-term"],
    hints: [
      "Subtract $2$ from every term and look at what remains.",
      "The remaining values $0, 1, 4, 9, 16, \\ldots$ are consecutive squares.",
    ],
    solution:
      "Writing each term as a square plus $2$ gives $2 = 0^2 + 2,\\; 3 = 1^2 + 2,\\; 6 = 2^2 + 2,\\; 11 = 3^2 + 2,\\; 18 = 4^2 + 2,\\ldots$ So $t_n = (n-1)^2 + 2$, and therefore $t_{50} = 49^2 + 2$.",
    solutionSteps: [
      "Notice $t_n - 2$ gives $0, 1, 4, 9, 16, \\ldots = (n-1)^2$.",
      "Hence $t_n = (n-1)^2 + 2$.",
      "Substitute $n = 50$: $t_{50} = 49^2 + 2$.",
    ],
  },
  {
    id: "seq-sc-078",
    statement:
      "For an even integer $n$, evaluate the alternating sum $\\displaystyle\\sum_{r=0}^{n-1} (-1)^r (n + 2r)^2$.",
    format: "mcq",
    options: [
      { label: "A", text: "$-n^2 + 2n$" },
      { label: "B", text: "$-4n^2 + 2n$" },
      { label: "C", text: "$-n^2 + 3n$" },
      { label: "D", text: "$-n^2 + 4n$" },
    ],
    answer: "B",
    topic: "sequences",
    subtopic: "Sigma & Telescoping",
    concepts: ["alternating sum", "difference of squares", "arithmetic series"],
    difficulty: "hard",
    source: "original",
    skills: ["pairing alternating terms", "summing an arithmetic progression"],
    estMinutes: 6,
    tags: [SEQ, "alternating-sum"],
    hints: [
      "Group the terms in consecutive pairs and use $a^2 - b^2 = (a-b)(a+b)$.",
      "Each pair produces a factor $-2$; the remaining bracket is an arithmetic series with $n/2$ terms.",
    ],
    solution:
      "With $n$ even the sum has $n$ terms (indices $r = 0$ to $n-1$), which pair up into $n/2$ pairs. It is $n^2 - (n+2)^2 + (n+4)^2 - (n+6)^2 + \\cdots - (3n-2)^2$. Pairing consecutive terms and applying $a^2 - b^2 = (a-b)(a+b)$, each pair contributes $-2$ times a linear term, giving $-2\\left[(2n+2) + (2n+10) + (2n+18) + \\cdots\\right]$ with $n/2$ terms. This equals $-2\\left[n^2 + \\dfrac{n}{4}\\left(4 + \\left(\\dfrac{n}{2} - 1\\right)8\\right)\\right] = -2\\left[n^2 + n + n^2 - 2n\\right] = -4n^2 + 2n$.",
    solutionSteps: [
      "With $n$ even there are $n$ terms; write the alternating sum through $-(3n-2)^2$.",
      "Pair terms and factor each with $a^2 - b^2 = (a-b)(a+b)$.",
      "The pairs form an arithmetic series of $n/2$ terms scaled by $-2$.",
      "Summing gives $-4n^2 + 2n$.",
    ],
  },
  {
    id: "seq-sc-079",
    statement:
      "Suppose $(1^2 - t_1) + (2^2 - t_2) + \\cdots + (n^2 - t_n) = \\dfrac{n(n^2 - 1)}{3}$ for all $n$. Determine $t_n$.",
    format: "mcq",
    options: [
      { label: "A", text: "$n^2$" },
      { label: "B", text: "$2n$" },
      { label: "C", text: "$n^2 - 2n$" },
      { label: "D", text: "none of these" },
    ],
    answer: "D",
    topic: "sequences",
    subtopic: "Sigma & Telescoping",
    concepts: ["sum of squares", "term from partial sums"],
    difficulty: "hard",
    source: "original",
    skills: ["isolating a series sum", "recovering a term via $t_n = S_n - S_{n-1}$"],
    estMinutes: 5,
    tags: [SEQ, "general-term"],
    hints: [
      "Split the left side into $\\sum r^2$ minus $\\sum t_r$.",
      "Solve for $S_n = \\sum t_r$, then use $t_n = S_n - S_{n-1}$.",
    ],
    solution:
      "Separating the sums, $\\sum_{r=1}^{n} r^2 - S_n = \\dfrac{n(n^2-1)}{3}$, where $S_n = t_1 + \\cdots + t_n$. Since $\\sum r^2 = \\dfrac{n(n+1)(2n+1)}{6}$, we get $S_n = \\dfrac{n(n+1)}{6}\\left[(2n+1) - 2(n-1)\\right] = \\dfrac{n(n+1)}{2}$. Then $S_{n-1} = \\dfrac{n(n-1)}{2}$, so $t_n = S_n - S_{n-1} = n$. As $n$ is none of the listed choices, the answer is 'none of these'.",
    solutionSteps: [
      "Rewrite as $\\sum r^2 - S_n = \\dfrac{n(n^2-1)}{3}$.",
      "Substitute $\\sum r^2 = \\dfrac{n(n+1)(2n+1)}{6}$ and solve: $S_n = \\dfrac{n(n+1)}{2}$.",
      "Compute $t_n = S_n - S_{n-1} = n$.",
      "$n$ is not among the options, so the answer is 'none of these'.",
    ],
  },
  {
    id: "seq-sc-080",
    statement:
      "Each bracket below is the sum of consecutive odd integers starting at $1$: $(1 + 3 + 5 + \\cdots + p) + (1 + 3 + 5 + \\cdots + q) = (1 + 3 + 5 + \\cdots + r)$. If $p > 6$, find the least possible value of $p + q + r$.",
    format: "mcq",
    options: [
      { label: "A", text: "$12$" },
      { label: "B", text: "$21$" },
      { label: "C", text: "$45$" },
      { label: "D", text: "$54$" },
    ],
    answer: "B",
    topic: "sequences",
    subtopic: "Arithmetic Progression",
    concepts: ["sum of odd numbers", "Pythagorean triples"],
    difficulty: "hard",
    source: "original",
    skills: ["using $1+3+\\cdots+(2k-1)=k^2$", "finding a Pythagorean triple"],
    estMinutes: 5,
    tags: [SEQ, "odd-sums"],
    hints: [
      "The sum of the first $k$ odd numbers is $k^2$; here $p = 2k-1$ so $k = \\dfrac{p+1}{2}$.",
      "The equation becomes a Pythagorean relation in $p+1,\\, q+1,\\, r+1$.",
    ],
    solution:
      "Since $1 + 3 + \\cdots + (2k-1) = k^2$, the condition becomes $\\left(\\dfrac{p+1}{2}\\right)^2 + \\left(\\dfrac{q+1}{2}\\right)^2 = \\left(\\dfrac{r+1}{2}\\right)^2$, i.e. $(p+1)^2 + (q+1)^2 = (r+1)^2$. With $p > 6$ we need $p + 1 > 7$, so take the triple $p+1 = 8,\\; q+1 = 6,\\; r+1 = 10$, giving $p = 7,\\, q = 5,\\, r = 9$. Hence $p + q + r = 21$.",
    solutionSteps: [
      "Use $1 + 3 + \\cdots + (2k-1) = k^2$ on each bracket.",
      "Obtain $(p+1)^2 + (q+1)^2 = (r+1)^2$.",
      "With $p+1 > 7$, choose the triple $(8, 6, 10)$.",
      "Then $p + q + r = 7 + 5 + 9 = 21$.",
    ],
  },
  {
    id: "seq-sc-081",
    statement:
      "Let $H_n = 1 + \\dfrac{1}{2} + \\cdots + \\dfrac{1}{n}$. Evaluate $S = 1 + \\dfrac{3}{2} + \\dfrac{5}{3} + \\cdots + \\dfrac{99}{50}$.",
    format: "mcq",
    options: [
      { label: "A", text: "$H_{50} + 50$" },
      { label: "B", text: "$100 - H_{50}$" },
      { label: "C", text: "$49 + H_{50}$" },
      { label: "D", text: "$H_{50} + 100$" },
    ],
    answer: "B",
    topic: "sequences",
    subtopic: "Harmonic Progression",
    concepts: ["harmonic numbers", "term decomposition"],
    difficulty: "medium",
    source: "original",
    skills: ["rewriting each term as $2 - \\tfrac{1}{k}$"],
    estMinutes: 4,
    tags: [SEQ, "harmonic-number"],
    hints: [
      "The $k$th numerator is $2k - 1$, so the $k$th term is $\\dfrac{2k-1}{k} = 2 - \\dfrac{1}{k}$.",
      "There are $50$ terms.",
    ],
    solution:
      "The $k$th term is $\\dfrac{2k-1}{k} = 2 - \\dfrac{1}{k}$ for $k = 1, 2, \\ldots, 50$. Summing, $S = \\sum_{k=1}^{50}\\left(2 - \\dfrac{1}{k}\\right) = 2 \\cdot 50 - \\sum_{k=1}^{50}\\dfrac{1}{k} = 100 - H_{50}$.",
    solutionSteps: [
      "Recognise the $k$th term as $2 - \\dfrac{1}{k}$.",
      "Sum $50$ copies of $2$ to get $100$.",
      "Subtract $\\sum_{k=1}^{50}\\dfrac{1}{k} = H_{50}$.",
      "So $S = 100 - H_{50}$.",
    ],
  },
  {
    id: "seq-sc-082",
    statement:
      "Find the sum of the first $50$ terms of $\\dfrac{3}{1^2} + \\dfrac{5}{1^2 + 2^2} + \\dfrac{7}{1^2 + 2^2 + 3^2} + \\cdots$.",
    format: "mcq",
    options: [
      { label: "A", text: "$\\dfrac{100}{17}$" },
      { label: "B", text: "$\\dfrac{150}{17}$" },
      { label: "C", text: "$\\dfrac{200}{51}$" },
      { label: "D", text: "$\\dfrac{50}{17}$" },
    ],
    answer: "A",
    topic: "sequences",
    subtopic: "Sigma & Telescoping",
    concepts: ["sum of squares", "partial fractions", "telescoping"],
    difficulty: "hard",
    source: "original",
    skills: ["telescoping a partial-fraction series"],
    estMinutes: 5,
    tags: [SEQ, "telescoping"],
    hints: [
      "The denominator of the $r$th term is $\\dfrac{r(r+1)(2r+1)}{6}$ and the numerator is $2r+1$.",
      "The term simplifies to $6\\left(\\dfrac{1}{r} - \\dfrac{1}{r+1}\\right)$.",
    ],
    solution:
      "The $r$th term is $T_r = \\dfrac{2r+1}{1^2 + 2^2 + \\cdots + r^2} = \\dfrac{6(2r+1)}{r(r+1)(2r+1)} = 6\\left(\\dfrac{1}{r} - \\dfrac{1}{r+1}\\right)$. Telescoping, $\\sum_{r=1}^{50} T_r = 6\\left(1 - \\dfrac{1}{51}\\right) = 6 \\cdot \\dfrac{50}{51} = \\dfrac{100}{17}$.",
    solutionSteps: [
      "Write $T_r = \\dfrac{6(2r+1)}{r(r+1)(2r+1)}$ using $\\sum r^2 = \\dfrac{r(r+1)(2r+1)}{6}$.",
      "Simplify to $T_r = 6\\left(\\dfrac{1}{r} - \\dfrac{1}{r+1}\\right)$.",
      "Telescope over $r = 1$ to $50$: $6\\left(1 - \\dfrac{1}{51}\\right)$.",
      "This equals $\\dfrac{100}{17}$.",
    ],
  },
  {
    id: "seq-sc-083",
    statement:
      "Evaluate $S = \\dfrac{4}{19} + \\dfrac{44}{19^2} + \\dfrac{444}{19^3} + \\cdots$ to infinity.",
    format: "mcq",
    options: [
      { label: "A", text: "$\\dfrac{40}{9}$" },
      { label: "B", text: "$\\dfrac{38}{81}$" },
      { label: "C", text: "$\\dfrac{36}{171}$" },
      { label: "D", text: "none of these" },
    ],
    answer: "B",
    topic: "sequences",
    subtopic: "Geometric Progression",
    concepts: ["arithmetico-geometric idea", "infinite geometric series", "repunits"],
    difficulty: "hard",
    source: "original",
    skills: ["subtracting a shifted copy of the series"],
    estMinutes: 5,
    tags: [SEQ, "geometric"],
    hints: [
      "Multiply $S$ by $\\dfrac{1}{19}$ and subtract from $S$.",
      "The differenced numerators $4, 40, 400, \\ldots$ form a geometric series.",
    ],
    solution:
      "Multiplying by $\\dfrac{1}{19}$ gives $\\dfrac{1}{19}S = \\dfrac{4}{19^2} + \\dfrac{44}{19^3} + \\cdots$. Subtracting from $S$: $\\dfrac{18}{19}S = \\dfrac{4}{19} + \\dfrac{40}{19^2} + \\dfrac{400}{19^3} + \\cdots = \\dfrac{4/19}{1 - 10/19} = \\dfrac{4}{9}$. Hence $S = \\dfrac{19}{18} \\cdot \\dfrac{4}{9} = \\dfrac{38}{81}$.",
    solutionSteps: [
      "Form $\\dfrac{1}{19}S$ and subtract from $S$.",
      "The result $\\dfrac{18}{19}S$ is a geometric series with ratio $\\dfrac{10}{19}$.",
      "Sum it to $\\dfrac{4}{9}$.",
      "Solve for $S = \\dfrac{38}{81}$.",
    ],
  },
  {
    id: "seq-sc-084",
    statement:
      "Given $1 - \\dfrac{1}{3} + \\dfrac{1}{5} - \\dfrac{1}{7} + \\dfrac{1}{9} - \\dfrac{1}{11} + \\cdots = \\dfrac{\\pi}{4}$, find the value of $\\dfrac{1}{1 \\times 3} + \\dfrac{1}{5 \\times 7} + \\dfrac{1}{9 \\times 11} + \\cdots$.",
    format: "mcq",
    options: [
      { label: "A", text: "$\\dfrac{\\pi}{8}$" },
      { label: "B", text: "$\\dfrac{\\pi}{6}$" },
      { label: "C", text: "$\\dfrac{\\pi}{4}$" },
      { label: "D", text: "$\\dfrac{\\pi}{36}$" },
    ],
    answer: "A",
    topic: "sequences",
    subtopic: "Sigma & Telescoping",
    concepts: ["Leibniz series", "grouping terms", "partial fractions"],
    difficulty: "medium",
    source: "original",
    skills: ["pairing terms of the Leibniz series"],
    estMinutes: 4,
    tags: [SEQ, "pi-series"],
    hints: [
      "Group the Leibniz series in consecutive pairs.",
      "Each pair $\\left(\\dfrac{1}{4k-3} - \\dfrac{1}{4k-1}\\right)$ equals $\\dfrac{2}{(4k-3)(4k-1)}$.",
    ],
    solution:
      "Grouping the given series in pairs, $\\dfrac{\\pi}{4} = \\left(1 - \\dfrac{1}{3}\\right) + \\left(\\dfrac{1}{5} - \\dfrac{1}{7}\\right) + \\cdots = \\dfrac{2}{1 \\times 3} + \\dfrac{2}{5 \\times 7} + \\dfrac{2}{9 \\times 11} + \\cdots$. Dividing by $2$, $\\dfrac{1}{1 \\times 3} + \\dfrac{1}{5 \\times 7} + \\dfrac{1}{9 \\times 11} + \\cdots = \\dfrac{\\pi}{8}$.",
    solutionSteps: [
      "Pair the terms of the Leibniz series.",
      "Each pair becomes $\\dfrac{2}{(4k-3)(4k-1)}$.",
      "So the paired series equals $2$ times the target sum.",
      "Divide $\\dfrac{\\pi}{4}$ by $2$ to get $\\dfrac{\\pi}{8}$.",
    ],
  },
  {
    id: "seq-sc-085",
    statement:
      "Given $\\dfrac{1}{1^2} + \\dfrac{1}{2^2} + \\dfrac{1}{3^2} + \\cdots = \\dfrac{\\pi^2}{6}$, find $\\dfrac{1}{1^2} + \\dfrac{1}{3^2} + \\dfrac{1}{5^2} + \\cdots$.",
    format: "mcq",
    options: [
      { label: "A", text: "$\\dfrac{\\pi^2}{8}$" },
      { label: "B", text: "$\\dfrac{\\pi^2}{12}$" },
      { label: "C", text: "$\\dfrac{\\pi^2}{3}$" },
      { label: "D", text: "$\\dfrac{\\pi^2}{2}$" },
    ],
    answer: "A",
    topic: "sequences",
    subtopic: "Sigma & Telescoping",
    concepts: ["Basel problem", "odd/even split of a series"],
    difficulty: "medium",
    source: "original",
    skills: ["separating odd and even index terms"],
    estMinutes: 4,
    tags: [SEQ, "pi-series"],
    hints: [
      "The odd-index sum equals the full sum minus the even-index sum.",
      "The even-index sum $\\sum \\dfrac{1}{(2k)^2} = \\dfrac{1}{4}\\sum\\dfrac{1}{k^2}$.",
    ],
    solution:
      "The sum over even indices is $\\dfrac{1}{2^2} + \\dfrac{1}{4^2} + \\cdots = \\dfrac{1}{4}\\left(\\dfrac{1}{1^2} + \\dfrac{1}{2^2} + \\cdots\\right) = \\dfrac{1}{4}\\cdot\\dfrac{\\pi^2}{6}$. Hence the odd-index sum is $\\dfrac{\\pi^2}{6} - \\dfrac{1}{4}\\cdot\\dfrac{\\pi^2}{6} = \\dfrac{\\pi^2}{6}\\cdot\\dfrac{3}{4} = \\dfrac{\\pi^2}{8}$.",
    solutionSteps: [
      "Split the full sum into odd- and even-index parts.",
      "Even part $= \\dfrac{1}{4}\\cdot\\dfrac{\\pi^2}{6}$.",
      "Odd part $= \\dfrac{\\pi^2}{6} - \\dfrac{1}{4}\\cdot\\dfrac{\\pi^2}{6}$.",
      "This equals $\\dfrac{\\pi^2}{8}$.",
    ],
  },
  {
    id: "seq-sc-086",
    statement:
      "Evaluate $\\displaystyle\\lim_{n\\to\\infty} \\sum_{r=1}^{n} \\dfrac{r}{1 \\times 3 \\times 5 \\times 7 \\times \\cdots \\times (2r+1)}$.",
    format: "mcq",
    options: [
      { label: "A", text: "$\\dfrac{1}{3}$" },
      { label: "B", text: "$\\dfrac{3}{2}$" },
      { label: "C", text: "$\\dfrac{1}{2}$" },
      { label: "D", text: "none of these" },
    ],
    answer: "C",
    topic: "sequences",
    subtopic: "Sigma & Telescoping",
    concepts: ["double factorial", "telescoping", "limit of a series"],
    difficulty: "hard",
    source: "original",
    skills: ["writing $r$ as $\\tfrac{(2r+1)-1}{2}$ to telescope"],
    estMinutes: 6,
    tags: [SEQ, "telescoping"],
    hints: [
      "Write $r = \\dfrac{(2r+1) - 1}{2}$ in the numerator.",
      "This splits the term into a difference of consecutive reciprocal products.",
    ],
    solution:
      "Let $V(r) = \\dfrac{1}{1 \\times 3 \\times 5 \\times \\cdots \\times (2r+1)}$. Writing $r = \\dfrac{(2r+1)-1}{2}$, the $r$th term becomes $\\dfrac{1}{2}\\left(\\dfrac{1}{1\\times 3\\times\\cdots\\times(2r-1)} - \\dfrac{1}{1\\times 3\\times\\cdots\\times(2r+1)}\\right)$, which telescopes. Thus $\\sum_{r=1}^{n} T_r = \\dfrac{1}{2}\\left(1 - \\dfrac{1}{1\\times 3\\times\\cdots\\times(2n+1)}\\right)$, and as $n \\to \\infty$ the second fraction vanishes, giving $\\dfrac{1}{2}$.",
    solutionSteps: [
      "Substitute $r = \\dfrac{(2r+1)-1}{2}$ into the numerator.",
      "The term becomes a difference of consecutive products, halved.",
      "Telescope: $\\sum_{r=1}^{n} T_r = \\dfrac{1}{2}\\left(1 - \\dfrac{1}{1\\times 3\\times\\cdots\\times(2n+1)}\\right)$.",
      "Take $n \\to \\infty$ to get $\\dfrac{1}{2}$.",
    ],
  },
  {
    id: "seq-sc-087",
    statement:
      "The greatest prime number by which $1 + \\displaystyle\\sum_{r=1}^{30} r \\times r!$ is divisible is best described as which of the following?",
    format: "mcq",
    options: [
      { label: "A", text: "an even number" },
      { label: "B", text: "an odd number" },
      { label: "C", text: "divisible by $3$" },
      { label: "D", text: "none of these" },
    ],
    answer: "B",
    topic: "sequences",
    subtopic: "Sigma & Telescoping",
    concepts: ["factorial telescoping", "primality"],
    difficulty: "hard",
    source: "original",
    skills: ["using $r\\cdot r! = (r+1)! - r!$"],
    estMinutes: 4,
    tags: [SEQ, "factorial"],
    hints: [
      "Note that $r \\cdot r! = (r+1)! - r!$.",
      "The sum telescopes and the added $1$ closes it to a single factorial; then find its largest prime factor.",
    ],
    solution:
      "Since $r \\cdot r! = (r+1)! - r!$, the sum telescopes: $\\sum_{r=1}^{30} r \\cdot r! = 31! - 1!$. Adding $1$ gives $1 + \\sum_{r=1}^{30} r \\cdot r! = 31!$. Its greatest prime factor is $31$ (the largest prime $\\le 31$). Since $31$ is odd, the correct description is 'an odd number'.",
    solutionSteps: [
      "Rewrite $r \\cdot r! = (r+1)! - r!$.",
      "Telescope: $\\sum_{r=1}^{30} r \\cdot r! = 31! - 1$.",
      "Add $1$ to obtain $31!$; its largest prime factor is $31$.",
      "$31$ is an odd number.",
    ],
  },
  {
    id: "seq-sc-088",
    statement:
      "Let $I(n) = \\displaystyle\\sum_{r=1}^{n} r^4$. Express $\\displaystyle\\sum_{r=1}^{n} (2r-1)^4$ in terms of $I$.",
    format: "mcq",
    options: [
      { label: "A", text: "$I(2n) - I(n)$" },
      { label: "B", text: "$I(2n) - 16\\,I(n)$" },
      { label: "C", text: "$I(2n) - 8\\,I(n)$" },
      { label: "D", text: "$I(2n) - 4\\,I(n)$" },
    ],
    answer: "B",
    topic: "sequences",
    subtopic: "Sigma & Telescoping",
    concepts: ["sum of fourth powers", "odd/even split"],
    difficulty: "medium",
    source: "original",
    skills: ["separating odd and even index fourth powers"],
    estMinutes: 4,
    tags: [SEQ, "power-sums"],
    hints: [
      "Split $I(2n)$ into odd-index and even-index fourth powers.",
      "The even part factors as $2^4$ times $I(n)$.",
    ],
    solution:
      "Split the first $2n$ fourth powers: $I(2n) = \\left[1^4 + 3^4 + \\cdots + (2n-1)^4\\right] + \\left[2^4 + 4^4 + \\cdots + (2n)^4\\right]$. The even part equals $2^4(1^4 + 2^4 + \\cdots + n^4) = 16\\,I(n)$. Hence $\\sum_{r=1}^{n}(2r-1)^4 = I(2n) - 16\\,I(n)$.",
    solutionSteps: [
      "Write $I(2n)$ as the odd-index sum plus the even-index sum.",
      "Factor the even-index sum as $16\\,I(n)$.",
      "Solve for the odd-index sum: $I(2n) - 16\\,I(n)$.",
    ],
  },
  {
    id: "seq-sc-089",
    statement:
      "Evaluate the infinite product $\\left(1 + \\dfrac{1}{3}\\right)\\left(1 + \\dfrac{1}{3^2}\\right)\\left(1 + \\dfrac{1}{3^4}\\right)\\left(1 + \\dfrac{1}{3^8}\\right)\\cdots$.",
    format: "mcq",
    options: [
      { label: "A", text: "$3$" },
      { label: "B", text: "$\\dfrac{6}{5}$" },
      { label: "C", text: "$\\dfrac{3}{2}$" },
      { label: "D", text: "none of these" },
    ],
    answer: "C",
    topic: "sequences",
    subtopic: "Geometric Progression",
    concepts: ["telescoping product", "difference of squares"],
    difficulty: "hard",
    source: "original",
    skills: ["multiplying by $\\left(1 - \\tfrac{1}{3}\\right)$ to telescope"],
    estMinutes: 5,
    tags: [SEQ, "infinite-product"],
    hints: [
      "Multiply and divide the product by $\\left(1 - \\dfrac{1}{3}\\right)$.",
      "Repeated use of $(1-a)(1+a) = 1 - a^2$ collapses the product.",
    ],
    solution:
      "Multiply the finite product $P_n$ by $\\dfrac{1 - 1/3}{1 - 1/3}$. Using $(1 - a)(1 + a) = 1 - a^2$ repeatedly, the numerator collapses to $1 - \\left(\\dfrac{1}{3}\\right)^{2^{n+1}}$, so $P_n = \\dfrac{1}{1 - 1/3}\\left(1 - \\left(\\dfrac{1}{3}\\right)^{2^{n+1}}\\right) = \\dfrac{3}{2}\\left(1 - \\left(\\dfrac{1}{3}\\right)^{2^{n+1}}\\right)$. As $n \\to \\infty$ the correction term vanishes, giving $\\dfrac{3}{2}$.",
    solutionSteps: [
      "Insert the factor $\\dfrac{1 - 1/3}{1 - 1/3}$.",
      "Apply $(1-a)(1+a) = 1 - a^2$ down the chain.",
      "The finite product becomes $\\dfrac{3}{2}\\left(1 - (1/3)^{2^{n+1}}\\right)$.",
      "Let $n \\to \\infty$ to obtain $\\dfrac{3}{2}$.",
    ],
  },
  {
    id: "seq-sc-090",
    statement:
      "Let $x_1, x_2, \\ldots, x_{20}$ be in H.P., and suppose $x_1, 2, x_{20}$ are in G.P. Find $\\displaystyle\\sum_{r=1}^{19} x_r x_{r+1}$.",
    format: "mcq",
    options: [
      { label: "A", text: "$76$" },
      { label: "B", text: "$80$" },
      { label: "C", text: "$84$" },
      { label: "D", text: "none of these" },
    ],
    answer: "A",
    topic: "sequences",
    subtopic: "Harmonic Progression",
    concepts: ["harmonic progression", "geometric mean", "telescoping"],
    difficulty: "hard",
    source: "original",
    skills: ["using reciprocals in A.P.", "telescoping consecutive products"],
    estMinutes: 6,
    tags: [SEQ, "harmonic"],
    hints: [
      "Reciprocals of an H.P. form an A.P. with common difference $\\lambda$.",
      "$x_r x_{r+1} = -\\dfrac{1}{\\lambda}(x_{r+1} - x_r)$, which telescopes; and $x_1 x_{20} = 2^2$.",
    ],
    solution:
      "Since the $x_r$ are in H.P., their reciprocals are in A.P.: $\\dfrac{1}{x_{r+1}} - \\dfrac{1}{x_r} = \\lambda$ for all $r$. This gives $\\dfrac{x_r - x_{r+1}}{x_r x_{r+1}} = \\lambda$, so $x_r x_{r+1} = -\\dfrac{1}{\\lambda}(x_{r+1} - x_r)$. Summing telescopes to $\\sum_{r=1}^{19} x_r x_{r+1} = -\\dfrac{1}{\\lambda}(x_{20} - x_1)$. From $\\dfrac{1}{x_{20}} = \\dfrac{1}{x_1} + 19\\lambda$ we get $\\dfrac{x_1 - x_{20}}{x_1 x_{20}} = 19\\lambda$, hence the sum equals $19\\,x_1 x_{20}$. Because $x_1, 2, x_{20}$ are in G.P., $x_1 x_{20} = 2^2 = 4$, so the sum is $19 \\times 4 = 76$.",
    solutionSteps: [
      "Reciprocals of the H.P. form an A.P. with common difference $\\lambda$.",
      "Show $x_r x_{r+1} = -\\dfrac{1}{\\lambda}(x_{r+1} - x_r)$ and telescope.",
      "Use $\\dfrac{1}{x_{20}} - \\dfrac{1}{x_1} = 19\\lambda$ to get sum $= 19\\,x_1 x_{20}$.",
      "Since $x_1 x_{20} = 4$, the sum is $76$.",
    ],
  },
  {
    id: "seq-sc-091",
    statement:
      "Evaluate $\\displaystyle\\sum_{r=0}^{n} (a + r + ar)(-a)^r$.",
    format: "mcq",
    options: [
      { label: "A", text: "$(-1)^n \\left[(n+1)a^{n+1} - a\\right]$" },
      { label: "B", text: "$(-1)^n (n+1)a^{n+1}$" },
      { label: "C", text: "$(-1)^n \\dfrac{(n+2)a^{n+1}}{2}$" },
      { label: "D", text: "$(-1)^n \\dfrac{na^n}{2}$" },
    ],
    answer: "B",
    topic: "sequences",
    subtopic: "AGP",
    concepts: ["telescoping", "signed geometric factors"],
    difficulty: "hard",
    source: "original",
    skills: ["rewriting a term as $v(r) - v(r+1)$"],
    estMinutes: 6,
    tags: [SEQ, "telescoping"],
    hints: [
      "Split $(a + r + ar)(-a)^r$ as $r(-a)^r + (r+1)a(-a)^r$.",
      "Show each term equals $v(r) - v(r+1)$ with $v(r) = r(-a)^r$.",
    ],
    solution:
      "Write the general term as $T_r = r(-a)^r + (r+1)a(-a)^r = r(-a)^r - (r+1)(-a)^{r+1}$. With $v(r) = r(-a)^r$, this is $T_r = v(r) - v(r+1)$. Summing telescopes: $\\sum_{r=0}^{n} T_r = v(0) - v(n+1) = 0 - (n+1)(-a)^{n+1} = -(n+1)(-a)^{n+1} = (-1)^n (n+1)a^{n+1}$.",
    solutionSteps: [
      "Expand $T_r = r(-a)^r - (r+1)(-a)^{r+1}$.",
      "Identify $v(r) = r(-a)^r$ so $T_r = v(r) - v(r+1)$.",
      "Telescope: $\\sum_{r=0}^{n} T_r = v(0) - v(n+1) = -(n+1)(-a)^{n+1}$.",
      "Simplify to $(-1)^n (n+1)a^{n+1}$.",
    ],
  },
  {
    id: "seq-sc-092",
    statement:
      "For $|x| < 1$, find the sum to infinity of $\\dfrac{x}{1-x^2} + \\dfrac{x^2}{1-x^4} + \\dfrac{x^4}{1-x^8} + \\cdots$.",
    format: "mcq",
    options: [
      { label: "A", text: "$\\dfrac{x}{1-x}$" },
      { label: "B", text: "$\\dfrac{1}{1-x}$" },
      { label: "C", text: "$\\dfrac{1+x}{1-x}$" },
      { label: "D", text: "$1$" },
    ],
    answer: "A",
    topic: "sequences",
    subtopic: "Sigma & Telescoping",
    concepts: ["telescoping", "partial fractions", "infinite sum"],
    difficulty: "hard",
    source: "original",
    skills: ["decomposing $\\tfrac{x^{2^{n-1}}}{1-x^{2^n}}$ into a difference"],
    estMinutes: 6,
    tags: [SEQ, "telescoping"],
    hints: [
      "The $n$th term is $\\dfrac{x^{2^{n-1}}}{1 - x^{2^n}}$.",
      "Rewrite it as $\\dfrac{1}{1 - x^{2^{n-1}}} - \\dfrac{1}{1 - x^{2^n}}$.",
    ],
    solution:
      "The general term is $t_n = \\dfrac{x^{2^{n-1}}}{1 - x^{2^n}}$. Since $1 - x^{2^n} = (1 - x^{2^{n-1}})(1 + x^{2^{n-1}})$ and $x^{2^{n-1}} = (1 + x^{2^{n-1}}) - 1$, we get $t_n = \\dfrac{1}{1 - x^{2^{n-1}}} - \\dfrac{1}{1 - x^{2^n}}$. Telescoping, $S_n = \\dfrac{1}{1 - x} - \\dfrac{1}{1 - x^{2^n}}$. Because $|x| < 1$, $x^{2^n} \\to 0$, so $\\lim_{n\\to\\infty} S_n = \\dfrac{1}{1 - x} - 1 = \\dfrac{x}{1 - x}$.",
    solutionSteps: [
      "Identify the general term $t_n = \\dfrac{x^{2^{n-1}}}{1 - x^{2^n}}$.",
      "Decompose it as $\\dfrac{1}{1 - x^{2^{n-1}}} - \\dfrac{1}{1 - x^{2^n}}$.",
      "Telescope to $S_n = \\dfrac{1}{1-x} - \\dfrac{1}{1 - x^{2^n}}$.",
      "Let $n \\to \\infty$: sum $= \\dfrac{1}{1-x} - 1 = \\dfrac{x}{1-x}$.",
    ],
  },
  {
    id: "seq-sc-093",
    statement:
      "The $n$th term of a series is $T_n = (-1)^n \\dfrac{n^2 + n + 1}{n!}$. Find the sum of its first $20$ terms.",
    format: "mcq",
    options: [
      { label: "A", text: "$\\dfrac{20}{19!} - 2$" },
      { label: "B", text: "$\\dfrac{21}{20!} - 1$" },
      { label: "C", text: "$\\dfrac{21}{20!}$" },
      { label: "D", text: "none of these" },
    ],
    answer: "B",
    topic: "sequences",
    subtopic: "Sigma & Telescoping",
    concepts: ["factorial decomposition", "telescoping", "alternating series"],
    difficulty: "olympiad",
    source: "original",
    skills: ["splitting $\\tfrac{n^2+n+1}{n!}$ into telescoping factorial pieces"],
    estMinutes: 7,
    tags: [SEQ, "factorial"],
    hints: [
      "Write $n^2 + n + 1 = n(n-1) + 2n + 1$ so the term splits over $(n-2)!,\\,(n-1)!,\\,n!$.",
      "Group into two telescoping differences $V(n) - V(n-1)$.",
    ],
    solution:
      "Split $T_r = (-1)^r\\dfrac{r^2 + r + 1}{r!}$ into factorial pieces: $T_r = \\left[\\dfrac{(-1)^r}{r!} - \\dfrac{(-1)^{r-1}}{(r-1)!}\\right] - \\left[\\dfrac{(-1)^{r-1}}{(r-1)!} - \\dfrac{(-1)^{r-2}}{(r-2)!}\\right] = V(r) - V(r-1)$, where $V(r) = \\dfrac{(-1)^r}{r!} - \\dfrac{(-1)^{r-1}}{(r-1)!}$. Telescoping, $\\sum_{r=1}^{n} T_r = V(n) - V(0) = \\left[\\dfrac{(-1)^n}{n!} - \\dfrac{(-1)^{n-1}}{(n-1)!}\\right] - 1$. For $n = 20$: $\\left[\\dfrac{1}{20!} + \\dfrac{1}{19!}\\right] - 1 = \\dfrac{1 + 20}{20!} - 1 = \\dfrac{21}{20!} - 1$.",
    solutionSteps: [
      "Decompose $T_r$ into terms over $r!,\\,(r-1)!,\\,(r-2)!$.",
      "Group as $V(r) - V(r-1)$ with $V(r) = \\dfrac{(-1)^r}{r!} - \\dfrac{(-1)^{r-1}}{(r-1)!}$.",
      "Telescope: $\\sum_{r=1}^{n} T_r = V(n) - 1$.",
      "Set $n = 20$: $\\dfrac{1}{20!} + \\dfrac{1}{19!} - 1 = \\dfrac{21}{20!} - 1$.",
    ],
  },
];
