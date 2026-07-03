import type { PaperQuestion } from "@/lib/types";

/**
 * Intermediate Mathematical Olympiad — Hamilton Paper 2023.
 *
 * Transcribed from the official UKMT Hamilton paper (Thursday 16 March 2023)
 * for in-app timed practice. This is a written olympiad: full justified
 * solutions are required, not just answers. Auto-scoring is not possible —
 * students self-mark against the official solutions.
 *
 * © UK Mathematics Trust — questions are the intellectual property of UKMT and
 * are included here for educational practice.
 */

export const HMC_2023_QUESTIONS: PaperQuestion[] = [
  {
    number: 1,
    statement:
      "Susie thinks of a positive integer $n$. She notices that, when she divides $2023$ by $n$, she is left with a remainder of $43$. Find how many possible values of $n$ there are.",
  },
  {
    number: 2,
    statement:
      "The two positive integers $a$, $b$ with $a > b$ are such that $a\\%$ of $b\\%$ of $a$ and $b\\%$ of $a\\%$ of $b$ differ by $0.003$. Find all possible pairs $(a, b)$.",
  },
  {
    number: 3,
    statement:
      "The $n$th term of a sequence is the first non-zero digit of the decimal expansion of $\\dfrac{1}{\\sqrt{n}}$.\n\nHow many of the first one million terms of the sequence are equal to $1$?",
  },
  {
    number: 4,
    statement:
      "In the parallelogram $ABCD$, a line through $A$ meets $BD$ at $P$, $CD$ at $Q$ and $BC$ extended at $R$.\n\nProve that $\\dfrac{PQ}{PR} = \\dfrac{PD^2}{PB^2}$.",
    diagram: {
      alt: "Parallelogram ABCD with A bottom-left, B bottom-right, C top-right, D top-left. A line through A crosses diagonal BD at P, side CD at Q, and the extension of side BC beyond C at R (above and right).",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 190 160" role="img">
  <g stroke="currentColor" fill="none" stroke-width="1.4">
    <polygon points="25,120 125,120 155,45 55,45"/>
    <line x1="25" y1="120" x2="125" y2="45"/>
    <line x1="25" y1="120" x2="170" y2="12"/>
    <line x1="125" y1="120" x2="170" y2="12"/>
  </g>
  <g fill="currentColor"><circle cx="80" cy="83" r="2"/><circle cx="103" cy="66" r="2"/></g>
  <g font-size="12" fill="currentColor" font-family="Georgia, 'Times New Roman', serif" font-style="italic">
    <text x="16" y="132">A</text>
    <text x="125" y="133">B</text>
    <text x="157" y="44">C</text>
    <text x="46" y="44">D</text>
    <text x="82" y="82">P</text>
    <text x="104" y="62">Q</text>
    <text x="172" y="14">R</text>
  </g>
</svg>`,
    },
  },
  {
    number: 5,
    statement:
      "Mickey writes down on a board $n$ consecutive whole numbers the smallest of which is $2023$. He then replaces the largest two numbers on the board with their difference, reducing the number of numbers on the board by one. He does this repeatedly until there is only a single number on the board. For which values of $n$ is this last remaining number $0$?",
  },
  {
    number: 6,
    statement:
      "Find all triples $(m, n, p)$ which satisfy the equation\n\n$$p^n + 3600 = m^2$$\n\nwhere $p$ is prime and $m$, $n$ are positive integers.",
  },
];
