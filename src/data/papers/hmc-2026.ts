import type { PaperQuestion } from "@/lib/types";

/**
 * Intermediate Mathematical Olympiad — Hamilton Paper 2026.
 *
 * Transcribed from the official UKMT Hamilton paper (Thursday 19 March 2026)
 * for in-app timed practice. This is a written olympiad: full justified
 * solutions are required, not just answers. Auto-scoring is not possible —
 * students self-mark against the official solutions.
 *
 * © UK Mathematics Trust — questions are the intellectual property of UKMT and
 * are included here for educational practice.
 */

export const HMC_2026_QUESTIONS: PaperQuestion[] = [
  {
    number: 1,
    statement:
      "A palindromic sum is a sum of two palindromic numbers. For example, $2024 = 2002 + 22$ and $2025 = 1551 + 474$.\n\n(a) Find, with proof, the next integer after $2025$ which cannot be written as a palindromic sum.\n\n(b) Find, with proof, the next integer after $2025$ which can be written as a palindromic sum in more than one way.",
    parts: ["a", "b"],
  },
  {
    number: 2,
    statement:
      "Let $f(x)$ denote the fractional part of $x^2$. For example, $f(1.1) = 0.21$.\n\nHow many positive fractions, $x$, less than $1$ satisfy $f(20 + x) = f(26 - x)$?",
  },
  {
    number: 3,
    statement:
      "Starting at $(0, 0)$, a frog makes $99$ jumps of distance $\\sqrt{5}$ between points on the lines $y = -1$, $y = 0$ and $y = 1$, increasing its $x$-coordinate by $1$ or $2$ each time.\n\nHow many possibilities are there for the frog's final position?",
  },
  {
    number: 4,
    statement:
      "$P$ is a point inside the convex quadrilateral $ABCD$ satisfying both conditions below.\n\n$$\\angle BPC = \\angle CPD$$\n$$\\angle DAC = \\angle PCD = \\angle PBC = \\angle BCA$$\n\nProve that $ABCD$ is a parallelogram.",
    diagram: {
      alt: "A convex quadrilateral ABCD with point P inside. A is top-left, D is top-right, B is bottom-left, C is bottom-right. Lines are drawn from P to all four vertices, with angle marks indicating the equal-angle conditions.",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 130" role="img">
  <g stroke="currentColor" fill="none" stroke-width="1.4">
    <polygon points="20,20 160,15 155,115 25,110"/>
    <line x1="20" y1="20" x2="90" y2="55"/>
    <line x1="160" y1="15" x2="90" y2="55"/>
    <line x1="155" y1="115" x2="90" y2="55"/>
    <line x1="25" y1="110" x2="90" y2="55"/>
    <line x1="20" y1="20" x2="155" y2="115"/>
    <line x1="25" y1="110" x2="160" y2="15"/>
  </g>
  <g font-size="13" fill="currentColor" font-family="Georgia, 'Times New Roman', serif" font-style="italic">
    <text x="10" y="17">A</text>
    <text x="162" y="14">D</text>
    <text x="14" y="122">B</text>
    <text x="157" y="124">C</text>
    <text x="88" y="48">P</text>
  </g>
</svg>`,
    },
  },
  {
    number: 5,
    statement:
      "A pair of fractions, each with both numerator and denominator being positive integers, add up to $2$. The numerator of one, $x$, is the denominator of the other.\n\nIf $x$ is increased by $10$, the sum is still $2$.\n\nFind all possible pairs of fractions for which this is true.",
  },
  {
    number: 6,
    statement:
      "A padlock has two wheels, each of which has the digits $0$ to $9$ equally spaced. Together, the wheels show a two-digit code. Trying to open it with the wrong code locks it forever, but there is a probe to check if the code is close without locking the padlock forever. It is close if either (i) the code is correct or (ii) the correct code can be shown by rotating one wheel to an adjacent digit.\n\nFor example, if the wheels show $02$, the probe will show it is close if the correct code is $01$, $02$, $03$, $12$ or $92$.\n\nFind the minimum number of times to use the probe to guarantee discovering the correct code.",
  },
];
