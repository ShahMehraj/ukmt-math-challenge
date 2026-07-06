import type { Problem } from "@/lib/types";

/**
 * Sequences & Series — single-correct practice, chunk D (source problems 47-61).
 *
 * ORIGINAL problems reworded in the app's own voice from a Cengage
 * "Sequences & Series" exercise bank; the mathematics (numbers, expressions,
 * structure) is preserved exactly. Answers verified against the official key.
 */

const SEQ = "cengage-seq";

export const seqSingleD: Problem[] = [
  {
    id: "seq-sc-047",
    statement:
      "Define $x = 9^{1/3}\\cdot 9^{1/9}\\cdot 9^{1/27}\\cdots$, $y = 4^{1/3}\\cdot 4^{-1/9}\\cdot 4^{1/27}\\cdots$, and $z = \\displaystyle\\sum_{r=1}^{\\infty}(1+i)^{-r}$. What is $\\arg(x + yz)$?",
    format: "mcq",
    options: [
      { label: "A", text: "$0$" },
      { label: "B", text: "$\\pi - \\tan^{-1}\\!\\left(\\dfrac{\\sqrt{2}}{3}\\right)$" },
      { label: "C", text: "$-\\tan^{-1}\\!\\left(\\dfrac{\\sqrt{2}}{3}\\right)$" },
      { label: "D", text: "$-\\tan^{-1}\\!\\left(\\dfrac{2}{\\sqrt{3}}\\right)$" },
    ],
    answer: "C",
    topic: "sequences",
    subtopic: "Geometric Progression",
    concepts: ["infinite GP of exponents", "complex geometric series", "argument of a complex number"],
    difficulty: "hard",
    source: "original",
    skills: ["summing exponent series", "summing a complex GP", "computing an argument"],
    estMinutes: 6,
    tags: [SEQ, "gp-exponents"],
    hints: [
      "Each of $x$ and $y$ is a power whose exponent is an infinite geometric series.",
      "For $z$, sum $\\sum (1+i)^{-r}$ as a GP with ratio $\\tfrac{1}{1+i}$, then locate $x+yz$ in the plane.",
    ],
    solution:
      "The exponent of $x$ is $\\tfrac{1}{3}+\\tfrac{1}{9}+\\tfrac{1}{27}+\\cdots = \\dfrac{1/3}{1-1/3} = \\tfrac12$, so $x = 9^{1/2} = 3$. The exponent of $y$ is $\\tfrac{1}{3}-\\tfrac{1}{9}+\\tfrac{1}{27}-\\cdots = \\dfrac{1/3}{1+1/3} = \\tfrac14$, so $y = 4^{1/4} = \\sqrt{2}$. For $z$, the series is geometric with first term $\\tfrac{1}{1+i}$ and ratio $\\tfrac{1}{1+i}$, giving $z = \\dfrac{1/(1+i)}{1 - 1/(1+i)} = \\dfrac{1}{i} = -i$. Thus $x + yz = 3 - i\\sqrt{2}$, which lies in the fourth quadrant, so $\\arg(x+yz) = -\\tan^{-1}\\!\\left(\\dfrac{\\sqrt{2}}{3}\\right)$.",
    solutionSteps: [
      "Sum the exponent GPs: $x = 9^{1/2} = 3$ and $y = 4^{1/4} = \\sqrt{2}$.",
      "Sum the complex GP: $z = \\dfrac{1}{i} = -i$.",
      "Form $x + yz = 3 - i\\sqrt{2}$ and read off $\\arg = -\\tan^{-1}(\\sqrt{2}/3)$.",
    ],
  },
  {
    id: "seq-sc-048",
    statement:
      "Find the value of $x$ satisfying $x = 1 - x + x^2 - x^3 + x^4 - x^5 + \\cdots$ (infinitely many terms).",
    format: "mcq",
    options: [
      { label: "A", text: "$2\\cos 36^\\circ$" },
      { label: "B", text: "$2\\cos 144^\\circ$" },
      { label: "C", text: "$2\\sin 18^\\circ$" },
      { label: "D", text: "$2\\cos 18^\\circ$" },
    ],
    answer: "C",
    topic: "sequences",
    subtopic: "Geometric Progression",
    concepts: ["infinite GP sum", "quadratic equation", "trigonometric value"],
    difficulty: "hard",
    source: "original",
    skills: ["summing an infinite GP", "selecting the valid convergent root"],
    estMinutes: 4,
    tags: [SEQ, "infinite-gp"],
    hints: [
      "The right side is an infinite GP with first term $1$ and ratio $-x$.",
      "Sum it to get $x = \\dfrac{1}{1+x}$, then keep only the root with $|-x| < 1$.",
    ],
    solution:
      "The right side is a GP with first term $1$ and common ratio $-x$, so $x = \\dfrac{1}{1+x}$. Hence $x^2 + x - 1 = 0$, giving $x = \\dfrac{-1 \\pm \\sqrt{5}}{2}$. For convergence we need $|{-x}| < 1$, so the negative root is rejected and $x = \\dfrac{-1+\\sqrt{5}}{2} = 2\\sin 18^\\circ$.",
    solutionSteps: [
      "Recognise the GP and write $x = \\dfrac{1}{1+x}$.",
      "Solve $x^2 + x - 1 = 0$ to get $x = \\dfrac{-1\\pm\\sqrt5}{2}$.",
      "Keep the convergent root $x = \\dfrac{-1+\\sqrt5}{2} = 2\\sin 18^\\circ$.",
    ],
  },
  {
    id: "seq-sc-049",
    statement:
      "Let $S$ be the sum to infinity and $S_n$ the sum of the first $n$ terms of $1 + \\dfrac{1}{2} + \\dfrac{1}{4} + \\dfrac{1}{8} + \\cdots$. What is the smallest $n$ for which $S - S_n < \\dfrac{1}{1000}$?",
    format: "mcq",
    options: [
      { label: "A", text: "$8$" },
      { label: "B", text: "$9$" },
      { label: "C", text: "$10$" },
      { label: "D", text: "$11$" },
    ],
    answer: "D",
    topic: "sequences",
    subtopic: "Geometric Progression",
    concepts: ["geometric series remainder", "inequality solving"],
    difficulty: "medium",
    source: "original",
    skills: ["computing partial and infinite GP sums", "solving an exponential inequality"],
    estMinutes: 4,
    tags: [SEQ, "gp-tail"],
    hints: [
      "Here $S = 2$ and $S_n = 2 - \\dfrac{1}{2^{n-1}}$.",
      "So $S - S_n = \\dfrac{1}{2^{n-1}}$; require $2^{n-1} > 1000$.",
    ],
    solution:
      "With first term $1$ and ratio $\\tfrac12$, $S = \\dfrac{1}{1-1/2} = 2$ and $S_n = 2\\left(1 - \\dfrac{1}{2^n}\\right) = 2 - \\dfrac{1}{2^{n-1}}$. Then $S - S_n = \\dfrac{1}{2^{n-1}} < \\dfrac{1}{1000}$ requires $2^{n-1} > 1000$. Since $2^{10} = 1024 > 1000$, we need $n - 1 \\ge 10$, i.e. $n \\ge 11$. The least such value is $n = 11$.",
    solutionSteps: [
      "Compute $S = 2$ and $S_n = 2 - \\dfrac{1}{2^{n-1}}$.",
      "Set $\\dfrac{1}{2^{n-1}} < \\dfrac{1}{1000}$, i.e. $2^{n-1} > 1000$.",
      "Since $2^{10} = 1024$, the least $n$ is $11$.",
    ],
  },
  {
    id: "seq-sc-050",
    statement:
      "An infinite geometric series has first term $21$. Both its second term and its total sum are positive integers. Which of the following can **not** be the second term?",
    format: "mcq",
    options: [
      { label: "A", text: "$12$" },
      { label: "B", text: "$14$" },
      { label: "C", text: "$18$" },
      { label: "D", text: "None of these" },
    ],
    answer: "D",
    topic: "sequences",
    subtopic: "Geometric Progression",
    concepts: ["infinite GP sum", "integer constraints", "divisors"],
    difficulty: "hard",
    source: "original",
    skills: ["translating integrality into divisor conditions"],
    estMinutes: 5,
    tags: [SEQ, "gp-integer"],
    hints: [
      "Write $S = \\dfrac{21}{1-r} = \\dfrac{21\\cdot 21}{21 - 21r}$; the second term is $21r$.",
      "Since $21r$ is a positive integer and $S$ is an integer, $21 - 21r$ must be a divisor of $441$ that is less than $21$.",
    ],
    solution:
      "Let the ratio be $r$; then $S = \\dfrac{21}{1-r} = \\dfrac{21\\cdot 21}{21 - 21r}$. The second term $21r$ is a positive integer, so $21 - 21r$ is an integer with $0 < 21 - 21r < 21$, and for $S$ to be an integer it must divide $441 = 21^2$. The divisors of $441$ below $21$ are $1, 3, 7, 9$, giving $21r = 20, 18, 14, 12$. Thus $12, 14, 18$ are all attainable second terms, so the correct choice is 'None of these'.",
    solutionSteps: [
      "Express $S = \\dfrac{441}{21 - 21r}$.",
      "Require $21 - 21r$ to be a divisor of $441$ less than $21$: values $1,3,7,9$.",
      "These give $21r = 20,18,14,12$, so $12,14,18$ are all possible — answer 'None of these'.",
    ],
  },
  {
    id: "seq-sc-051",
    statement:
      "An infinite geometric progression has sum $57$, and the sum of the cubes of its terms is $9747$. Find its common ratio.",
    format: "mcq",
    options: [
      { label: "A", text: "$\\dfrac{1}{3}$" },
      { label: "B", text: "$\\dfrac{2}{3}$" },
      { label: "C", text: "$\\dfrac{1}{6}$" },
      { label: "D", text: "None of these" },
    ],
    answer: "B",
    topic: "sequences",
    subtopic: "Geometric Progression",
    concepts: ["infinite GP sum", "GP of cubes", "eliminating variables"],
    difficulty: "hard",
    source: "original",
    skills: ["forming two GP-sum equations", "dividing to eliminate the first term"],
    estMinutes: 5,
    tags: [SEQ, "gp-cubes"],
    hints: [
      "The cubes form a GP with ratio $r^3$, so $\\dfrac{a^3}{1-r^3} = 9747$ while $\\dfrac{a}{1-r} = 57$.",
      "Divide the cube of the first equation by the second to eliminate $a$.",
    ],
    solution:
      "Let $a$ be the first term. Then $\\dfrac{a}{1-r} = 57$ and $\\dfrac{a^3}{1-r^3} = 9747$. Cubing the first and dividing by the second gives $\\dfrac{1-r^3}{(1-r)^3} = \\dfrac{57^3}{9747} = 19$, i.e. $\\dfrac{1 + r + r^2}{(1-r)^2} = 19$. This simplifies to $18r^2 - 39r + 18 = 0$, whose roots are $r = \\dfrac{2}{3}$ and $r = \\dfrac{3}{2}$. Since $|r| < 1$ for a convergent GP, $r = \\dfrac{2}{3}$.",
    solutionSteps: [
      "Write $\\dfrac{a}{1-r} = 57$ and $\\dfrac{a^3}{1-r^3} = 9747$.",
      "Divide to get $\\dfrac{1+r+r^2}{(1-r)^2} = 19$, i.e. $18r^2 - 39r + 18 = 0$.",
      "Roots $r = \\tfrac23, \\tfrac32$; convergence forces $r = \\tfrac23$.",
    ],
  },
  {
    id: "seq-sc-052",
    statement:
      "For $|r| < 1$, let $S_p = 1 + r^p + r^{2p} + \\cdots$ and $s_p = 1 - r^p + r^{2p} - r^{3p} + \\cdots$. Express $S_p + s_p$ in terms of $S_{2p} = 1 + r^{2p} + r^{4p} + \\cdots$.",
    format: "mcq",
    options: [
      { label: "A", text: "$2S_{2p}$" },
      { label: "B", text: "$0$" },
      { label: "C", text: "$\\dfrac{1}{2}S_{2p}$" },
      { label: "D", text: "$-\\dfrac{1}{2}S_{2p}$" },
    ],
    answer: "A",
    topic: "sequences",
    subtopic: "Geometric Progression",
    concepts: ["infinite GP sum", "algebraic identity"],
    difficulty: "medium",
    source: "original",
    skills: ["summing three infinite GPs", "combining fractions"],
    estMinutes: 3,
    tags: [SEQ, "gp-identity"],
    hints: [
      "Each sum is a GP: $S_p = \\dfrac{1}{1-r^p}$, $s_p = \\dfrac{1}{1+r^p}$, $S_{2p} = \\dfrac{1}{1-r^{2p}}$.",
      "Add the first two over a common denominator.",
    ],
    solution:
      "Summing each geometric series, $S_p = \\dfrac{1}{1-r^p}$, $s_p = \\dfrac{1}{1+r^p}$, and $S_{2p} = \\dfrac{1}{1-r^{2p}}$. Adding, $S_p + s_p = \\dfrac{(1+r^p) + (1-r^p)}{(1-r^p)(1+r^p)} = \\dfrac{2}{1-r^{2p}} = 2S_{2p}$.",
    solutionSteps: [
      "Sum the GPs: $S_p = \\tfrac{1}{1-r^p}$, $s_p = \\tfrac{1}{1+r^p}$.",
      "Add: $S_p + s_p = \\dfrac{2}{1-r^{2p}}$.",
      "Recognise $\\dfrac{1}{1-r^{2p}} = S_{2p}$, so the sum is $2S_{2p}$.",
    ],
  },
  {
    id: "seq-sc-053",
    statement:
      "The infinite series $1 + 2r + 3r^2 + 4r^3 + \\cdots$ sums to $\\dfrac{9}{4}$. Find $r$.",
    format: "mcq",
    options: [
      { label: "A", text: "$\\dfrac{1}{2}$" },
      { label: "B", text: "$\\dfrac{1}{3}$" },
      { label: "C", text: "$\\dfrac{1}{4}$" },
      { label: "D", text: "None of these" },
    ],
    answer: "B",
    topic: "sequences",
    subtopic: "AGP",
    concepts: ["arithmetico-geometric series", "sum to infinity"],
    difficulty: "medium",
    source: "original",
    skills: ["applying the shift-and-subtract technique", "selecting the convergent root"],
    estMinutes: 4,
    tags: [SEQ, "agp"],
    hints: [
      "The series is arithmetico-geometric; its sum is $\\dfrac{1}{(1-r)^2}$.",
      "Set $\\dfrac{1}{(1-r)^2} = \\dfrac{9}{4}$ and keep the root with $|r| < 1$.",
    ],
    solution:
      "Let $S = 1 + 2r + 3r^2 + \\cdots$. Then $rS = r + 2r^2 + 3r^3 + \\cdots$, and subtracting gives $(1-r)S = 1 + r + r^2 + \\cdots = \\dfrac{1}{1-r}$, so $S = \\dfrac{1}{(1-r)^2}$. Setting this equal to $\\dfrac{9}{4}$ gives $1 - r = \\pm\\dfrac{2}{3}$, i.e. $r = \\dfrac{1}{3}$ or $r = \\dfrac{5}{3}$. Since $|r| < 1$, $r = \\dfrac{1}{3}$.",
    solutionSteps: [
      "Use shift-and-subtract to get $S = \\dfrac{1}{(1-r)^2}$.",
      "Solve $\\dfrac{1}{(1-r)^2} = \\dfrac{9}{4}$: $1 - r = \\pm\\tfrac23$.",
      "Keep the convergent root $r = \\tfrac13$.",
    ],
  },
  {
    id: "seq-sc-054",
    statement:
      "Find the sum to infinity of $1 + \\dfrac{4}{5} + \\dfrac{7}{5^2} + \\dfrac{10}{5^3} + \\cdots$.",
    format: "mcq",
    options: [
      { label: "A", text: "$\\dfrac{7}{16}$" },
      { label: "B", text: "$\\dfrac{5}{16}$" },
      { label: "C", text: "$\\dfrac{105}{64}$" },
      { label: "D", text: "$\\dfrac{35}{16}$" },
    ],
    answer: "D",
    topic: "sequences",
    subtopic: "AGP",
    concepts: ["arithmetico-geometric series", "sum to infinity"],
    difficulty: "medium",
    source: "original",
    skills: ["identifying the AP numerators and GP ratio", "shift-and-subtract"],
    estMinutes: 4,
    tags: [SEQ, "agp"],
    hints: [
      "Numerators $1,4,7,10,\\ldots$ form an AP; the ratio is $\\tfrac15$.",
      "Multiply $S$ by $\\tfrac15$ and subtract to leave a simple GP.",
    ],
    solution:
      "Let $S = 1 + \\dfrac{4}{5} + \\dfrac{7}{5^2} + \\cdots$. Then $\\dfrac{1}{5}S = \\dfrac{1}{5} + \\dfrac{4}{5^2} + \\cdots$, and subtracting gives $\\dfrac{4}{5}S = 1 + 3\\left(\\dfrac{1}{5} + \\dfrac{1}{5^2} + \\cdots\\right) = 1 + 3\\cdot\\dfrac{1/5}{1-1/5} = 1 + \\dfrac{3}{4} = \\dfrac{7}{4}$. Hence $S = \\dfrac{5}{4}\\cdot\\dfrac{7}{4} = \\dfrac{35}{16}$.",
    solutionSteps: [
      "Form $\\tfrac15 S$ and subtract from $S$.",
      "Left side $\\tfrac45 S = 1 + 3\\cdot\\dfrac{1/5}{1-1/5} = \\dfrac74$.",
      "Solve to get $S = \\dfrac{35}{16}$.",
    ],
  },
  {
    id: "seq-sc-055",
    statement:
      "Evaluate $0.2 + 0.004 + 0.00006 + 0.0000008 + \\cdots$ to infinity.",
    format: "mcq",
    options: [
      { label: "A", text: "$\\dfrac{200}{891}$" },
      { label: "B", text: "$\\dfrac{2000}{9801}$" },
      { label: "C", text: "$\\dfrac{1000}{9801}$" },
      { label: "D", text: "$\\dfrac{2180}{9801}$" },
    ],
    answer: "B",
    topic: "sequences",
    subtopic: "AGP",
    concepts: ["arithmetico-geometric series", "decimal-to-fraction sum"],
    difficulty: "hard",
    source: "original",
    skills: ["rewriting decimals as an AGP", "summing an AGP with ratio 1/100"],
    estMinutes: 5,
    tags: [SEQ, "agp"],
    hints: [
      "Rewrite the $k$th term as $\\dfrac{2k}{10^{2k-1}} = \\dfrac{2}{10}\\,k\\left(\\dfrac{1}{100}\\right)^{k-1}$: numerators $2,4,6,\\ldots$ with ratio $\\tfrac{1}{100}$.",
      "Use $\\sum_{k\\ge1} k\\,x^{k-1} = \\dfrac{1}{(1-x)^2}$ with $x = \\tfrac{1}{100}$.",
    ],
    solution:
      "Write $S = \\dfrac{2}{10} + \\dfrac{4}{10^3} + \\dfrac{6}{10^5} + \\cdots = \\sum_{k\\ge1}\\dfrac{2k}{10^{2k-1}}$. Factoring, the $k$th term is $\\dfrac{2}{10}\\,k\\left(\\dfrac{1}{100}\\right)^{k-1}$, so with $x = \\dfrac{1}{100}$ this is an arithmetico-geometric series $S = \\dfrac{2}{10}\\sum_{k\\ge1} k\\,x^{k-1} = \\dfrac{2}{10}\\cdot\\dfrac{1}{(1-x)^2} = \\dfrac{2}{10}\\cdot\\dfrac{1}{(99/100)^2} = \\dfrac{2}{10}\\cdot\\dfrac{10000}{9801} = \\dfrac{2000}{9801}$. (A direct partial sum $0.2 + 0.004 + 0.00006 + \\cdots \\approx 0.20406$ confirms this.)",
    solutionSteps: [
      "Rewrite the $k$th term as $\\dfrac{2}{10}\\,k\\left(\\dfrac{1}{100}\\right)^{k-1}$.",
      "Apply $\\sum_{k\\ge1} k\\,x^{k-1} = \\dfrac{1}{(1-x)^2}$ with $x = \\tfrac{1}{100}$.",
      "$S = \\dfrac{2}{10}\\cdot\\dfrac{10000}{9801} = \\dfrac{2000}{9801}$.",
    ],
  },
  {
    id: "seq-sc-056",
    statement:
      "Find the positive integer $n$ satisfying $2\\cdot 2^2 + 3\\cdot 2^3 + 4\\cdot 2^4 + \\cdots + n\\cdot 2^n = 2^{n+10}$.",
    format: "mcq",
    options: [
      { label: "A", text: "$510$" },
      { label: "B", text: "$511$" },
      { label: "C", text: "$512$" },
      { label: "D", text: "$513$" },
    ],
    answer: "D",
    topic: "sequences",
    subtopic: "AGP",
    concepts: ["arithmetico-geometric sum", "shift-and-subtract", "geometric series"],
    difficulty: "hard",
    source: "original",
    skills: ["summing $\\sum k\\cdot 2^k$ by shift-and-subtract", "solving for $n$"],
    estMinutes: 6,
    tags: [SEQ, "agp"],
    hints: [
      "Let the left side equal $2^{n+10}$; multiply the whole equation by $2$ and subtract.",
      "After subtracting, the remaining terms telescope into a geometric series.",
    ],
    solution:
      "Call the left side $T = 2\\cdot 2^2 + 3\\cdot 2^3 + \\cdots + n\\cdot 2^n = 2^{n+10}$. Multiplying by $2$, $2T = 2\\cdot 2^3 + 3\\cdot 2^4 + \\cdots + n\\cdot 2^{n+1}$. Subtracting $2T$ from $T$: $-2^{n+10} = 2\\cdot 2^2 + (2^3 + 2^4 + \\cdots + 2^n) - n\\cdot 2^{n+1}$. The bracket is $2^{n+1} - 8$, so the right side becomes $8 + (2^{n+1} - 8) - n\\cdot 2^{n+1} = 2^{n+1}(1 - n)$. Hence $-2^{n+10} = 2^{n+1}(1-n)$, giving $2^9 = n - 1$... equivalently $2^{10} = 2n - 2$, so $n = 513$.",
    solutionSteps: [
      "Multiply $T = 2^{n+10}$ by $2$ and subtract to isolate a GP.",
      "Simplify to $-2^{n+10} = 2^{n+1}(1 - n)$.",
      "Solve $2^{10} = 2n - 2$ to get $n = 513$.",
    ],
  },
  {
    id: "seq-sc-057",
    statement:
      "If $\\omega$ is a complex $n$th root of unity, evaluate $\\displaystyle\\sum_{r=1}^{n}(ar + b)\\,\\omega^{r-1}$.",
    format: "mcq",
    options: [
      { label: "A", text: "$\\dfrac{n(n+1)a}{2}$" },
      { label: "B", text: "$\\dfrac{nb}{1-n}$" },
      { label: "C", text: "$\\dfrac{na}{\\omega - 1}$" },
      { label: "D", text: "None of these" },
    ],
    answer: "C",
    topic: "sequences",
    subtopic: "Sigma & Telescoping",
    concepts: ["roots of unity", "arithmetico-geometric sum", "sum of nth roots of unity"],
    difficulty: "olympiad",
    source: "original",
    skills: ["splitting into AP and AGP parts", "using $\\sum\\omega^{r-1}=0$"],
    estMinutes: 6,
    tags: [SEQ, "roots-of-unity"],
    hints: [
      "Split the sum as $b\\sum \\omega^{r-1} + a\\sum r\\,\\omega^{r-1}$.",
      "Because $\\omega$ is an $n$th root of unity, $1 + \\omega + \\cdots + \\omega^{n-1} = 0$ and $\\omega^n = 1$.",
    ],
    solution:
      "Split: $S = b\\left(1 + \\omega + \\cdots + \\omega^{n-1}\\right) + a\\left(1 + 2\\omega + 3\\omega^2 + \\cdots + n\\omega^{n-1}\\right)$. The first bracket is the sum of all $n$th roots of unity, which is $0$. For the second, let $S_1 = 1 + 2\\omega + \\cdots + n\\omega^{n-1}$; then $\\omega S_1 = \\omega + 2\\omega^2 + \\cdots + n\\omega^n$, and subtracting gives $S_1(1-\\omega) = 1 + \\omega + \\cdots + \\omega^{n-1} - n\\omega^n = 0 - n = -n$ (using $\\omega^n = 1$). Thus $S_1 = \\dfrac{n}{\\omega - 1}$ and $S = \\dfrac{na}{\\omega - 1}$.",
    solutionSteps: [
      "Write $S = b\\sum\\omega^{r-1} + a\\sum r\\,\\omega^{r-1}$; the first sum is $0$.",
      "Shift-and-subtract: $S_1(1-\\omega) = -n$, so $S_1 = \\dfrac{n}{\\omega-1}$.",
      "Conclude $S = \\dfrac{na}{\\omega-1}$.",
    ],
  },
  {
    id: "seq-sc-058",
    statement:
      "$ABCD$ is a square of side $a$ with $a \\in \\mathbb{N}$, $a > 1$. Points $L_1, L_2, \\ldots$ lie on $BC$ with $BL_1 = L_1L_2 = \\cdots = 1$, and points $M_1, M_2, \\ldots$ lie on $CD$ with $CM_1 = M_1M_2 = \\cdots = 1$. Find $\\displaystyle\\sum_{n=1}^{a-1}\\left(AL_n^2 + L_nM_n^2\\right)$.",
    format: "mcq",
    options: [
      { label: "A", text: "$\\dfrac{1}{2}a(a-1)^2$" },
      { label: "B", text: "$\\dfrac{1}{2}(a-1)(2a-1)(4a-1)$" },
      { label: "C", text: "$\\dfrac{1}{2}a(a-1)(4a-1)$" },
      { label: "D", text: "None of these" },
    ],
    answer: "C",
    topic: "sequences",
    subtopic: "Sigma & Telescoping",
    concepts: ["Pythagoras in a square", "sum of squares formula"],
    difficulty: "hard",
    source: "original",
    skills: ["setting up distances $AL_n$ and $L_nM_n$", "applying $\\sum k^2 = \\tfrac{k(k+1)(2k+1)}{6}$"],
    estMinutes: 7,
    tags: [SEQ, "sigma-squares"],
    hints: [
      "$AL_n^2 = a^2 + n^2$ and $L_nM_n^2 = (a-n)^2 + n^2$ for $n = 1,\\ldots,a-1$.",
      "Sum term by term, then use $\\sum_{n=1}^{a-1} n^2 = \\dfrac{(a-1)a(2a-1)}{6}$.",
    ],
    solution:
      "For each $n$, $AL_n^2 = a^2 + n^2$ (horizontal leg $a$, vertical leg $n$) and $L_nM_n^2 = (a-n)^2 + n^2$. So $AL_n^2 + L_nM_n^2 = a^2 + (a-n)^2 + 2n^2$. Summing over $n = 1$ to $a-1$: the $a^2$ terms give $(a-1)a^2$; the $(a-n)^2$ and $2n^2$ terms combine, since as $n$ ranges over $1,\\ldots,a-1$ so does $a-n$, to give $\\sum (a-n)^2 + 2\\sum n^2 = 3\\sum_{n=1}^{a-1} n^2 = 3\\cdot\\dfrac{(a-1)a(2a-1)}{6}$. Hence the total is $(a-1)a^2 + \\dfrac{(a-1)a(2a-1)}{2} = a(a-1)\\left(a + \\dfrac{2a-1}{2}\\right) = \\dfrac{1}{2}a(a-1)(4a-1)$.",
    solutionSteps: [
      "Set $AL_n^2 = a^2 + n^2$ and $L_nM_n^2 = (a-n)^2 + n^2$.",
      "Sum: $(a-1)a^2 + 3\\sum_{n=1}^{a-1} n^2$.",
      "Apply the sum-of-squares formula to get $\\dfrac{1}{2}a(a-1)(4a-1)$.",
    ],
  },
  {
    id: "seq-sc-059",
    statement:
      "Find the 15th term of the series $2\\dfrac{1}{2} + 1\\dfrac{7}{13} + 1\\dfrac{1}{9} + \\dfrac{20}{23} + \\cdots$.",
    format: "mcq",
    options: [
      { label: "A", text: "$\\dfrac{10}{39}$" },
      { label: "B", text: "$\\dfrac{10}{21}$" },
      { label: "C", text: "$\\dfrac{10}{23}$" },
      { label: "D", text: "None of these" },
    ],
    answer: "A",
    topic: "sequences",
    subtopic: "Harmonic Progression",
    concepts: ["harmonic progression", "reciprocals in AP", "nth term"],
    difficulty: "hard",
    source: "original",
    skills: ["taking reciprocals to reveal an AP", "finding a general term"],
    estMinutes: 5,
    tags: [SEQ, "hp"],
    hints: [
      "Convert each term to an improper fraction and take reciprocals.",
      "The reciprocals $\\tfrac{8}{20}, \\tfrac{13}{20}, \\tfrac{18}{20}, \\tfrac{23}{20}, \\ldots$ form an AP.",
    ],
    solution:
      "The terms are $\\dfrac{5}{2}, \\dfrac{20}{13}, \\dfrac{10}{9}, \\dfrac{20}{23}, \\ldots$, whose reciprocals are $\\dfrac{2}{5}, \\dfrac{13}{20}, \\dfrac{9}{10}, \\dfrac{23}{20}, \\ldots = \\dfrac{8}{20}, \\dfrac{13}{20}, \\dfrac{18}{20}, \\dfrac{23}{20}, \\ldots$, an AP with common difference $\\dfrac{5}{20}$. The $n$th reciprocal is $\\dfrac{8 + (n-1)5}{20} = \\dfrac{5n+3}{20}$. For $n = 15$ this is $\\dfrac{78}{20} = \\dfrac{39}{10}$, so the 15th term is its reciprocal $\\dfrac{10}{39}$.",
    solutionSteps: [
      "Reciprocals form the AP $\\tfrac{8}{20}, \\tfrac{13}{20}, \\tfrac{18}{20}, \\ldots$.",
      "General reciprocal: $\\dfrac{5n+3}{20}$; at $n=15$ it is $\\dfrac{78}{20}$.",
      "Invert to get the 15th term $\\dfrac{10}{39}$.",
    ],
  },
  {
    id: "seq-sc-060",
    statement:
      "If $a_1, a_2, \\ldots, a_n$ are in H.P., then the numbers $\\dfrac{a_1}{a_2 + a_3 + \\cdots + a_n},\\ \\dfrac{a_2}{a_1 + a_3 + \\cdots + a_n},\\ \\ldots,\\ \\dfrac{a_n}{a_1 + a_2 + \\cdots + a_{n-1}}$ are in",
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
    concepts: ["harmonic progression", "AP transformations", "reciprocal relationships"],
    difficulty: "hard",
    source: "original",
    skills: ["manipulating AP relations", "recognising when reciprocals are in AP"],
    estMinutes: 5,
    tags: [SEQ, "hp"],
    hints: [
      "Let $\\Sigma = a_1 + a_2 + \\cdots + a_n$. Since the $a_i$ are in H.P., $\\dfrac{1}{a_i}$ are in A.P.",
      "Multiplying an AP by the constant $\\Sigma$ and subtracting $1$ keeps it an AP.",
    ],
    solution:
      "Since $a_1, \\ldots, a_n$ are in H.P., the reciprocals $\\dfrac{1}{a_i}$ are in A.P. Let $\\Sigma = a_1 + \\cdots + a_n$. Multiplying the A.P. by $\\Sigma$, the terms $\\dfrac{\\Sigma}{a_i}$ are in A.P.; subtracting $1$ from each, the terms $\\dfrac{\\Sigma - a_i}{a_i} = \\dfrac{\\text{(sum of the others)}}{a_i}$ remain in A.P. Therefore their reciprocals $\\dfrac{a_i}{\\Sigma - a_i}$ are in H.P.",
    solutionSteps: [
      "H.P. of $a_i$ means $\\tfrac{1}{a_i}$ are in A.P.",
      "Scale by $\\Sigma$ and subtract $1$: $\\dfrac{\\Sigma - a_i}{a_i}$ are in A.P.",
      "Their reciprocals $\\dfrac{a_i}{\\Sigma - a_i}$ are in H.P.",
    ],
  },
  {
    id: "seq-sc-061",
    statement:
      "Let $a_1, a_2, \\ldots, a_n$ be in H.P., and define $f(k) = \\left(\\displaystyle\\sum_{r=1}^{n} a_r\\right) - a_k$. Then $\\dfrac{a_1}{f(1)}, \\dfrac{a_2}{f(2)}, \\ldots, \\dfrac{a_n}{f(n)}$ are in",
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
    concepts: ["harmonic progression", "AP transformations", "reciprocal relationships"],
    difficulty: "hard",
    source: "original",
    skills: ["interpreting $f(k)$ as the sum of the other terms", "AP-to-HP reasoning"],
    estMinutes: 5,
    tags: [SEQ, "hp"],
    hints: [
      "Note $f(k) = \\Sigma - a_k$ is exactly the sum of all terms except $a_k$.",
      "This is the same structure as the previous problem.",
    ],
    solution:
      "Here $f(k) = \\Sigma - a_k$ where $\\Sigma = a_1 + \\cdots + a_n$, so each ratio is $\\dfrac{a_k}{\\Sigma - a_k}$. Because the $a_i$ are in H.P., $\\dfrac{1}{a_i}$ are in A.P.; scaling by $\\Sigma$ gives $\\dfrac{\\Sigma}{a_i}$ in A.P., and subtracting $1$ leaves $\\dfrac{\\Sigma - a_i}{a_i}$ in A.P. Hence the reciprocals $\\dfrac{a_i}{\\Sigma - a_i} = \\dfrac{a_i}{f(i)}$ are in H.P.",
    solutionSteps: [
      "Recognise $f(k) = \\Sigma - a_k$, so each term is $\\dfrac{a_k}{\\Sigma - a_k}$.",
      "From $\\tfrac{1}{a_i}$ in A.P., deduce $\\dfrac{\\Sigma - a_i}{a_i}$ in A.P.",
      "Their reciprocals $\\dfrac{a_i}{f(i)}$ are in H.P.",
    ],
  },
];
