import type { PaperQuestion } from "@/lib/types";

/**
 * Intermediate Mathematical Olympiad — Hamilton Paper 2025.
 *
 * Transcribed from the official UKMT Hamilton paper (Thursday 20 March 2025)
 * for in-app timed practice. This is a written olympiad: full justified
 * solutions are required, not just answers. Auto-scoring is not possible —
 * students self-mark against the official solutions.
 *
 * © UK Mathematics Trust — questions are the intellectual property of UKMT and
 * are included here for educational practice.
 */

export const HMC_2025_QUESTIONS: PaperQuestion[] = [
  {
    number: 1,
    statement:
      "There is a water tank which is a cuboid with base area, $x$, and height, $h$. Standing in the tank are three identical metal columns, each a cylinder of height, $h$, and base a circle of area, $y$. The tank is then filled with a volume, $v$, of water.\n\nWhen one column is removed, the water level drops by $50$.\n\nWhen a second column is removed, the water level drops by a further $30$.\n\nFind how much further the water level drops when the last column is removed.",
  },
  {
    number: 2,
    statement:
      "There are two types of tile to tile a floor. One is a square tile $5$ by $5$ and the other is a rectangular tile $4$ by $9$. The floor is $140$ long by $80$ wide. It is to be completely tiled with no gaps, none of them overlapping and none going outside the edges of the floor using the minimum number of tiles possible.\n\nDemonstrate how to do this and prove that it cannot be done with fewer tiles.",
  },
  {
    number: 3,
    statement:
      "A parallelogram $ABCD$ has a point $X$ on $BC$ such that $\\angle BAX = \\angle CAD$ and $AX : AC = 5 : 7$.\n\nFind the ratio of $CX : XB$.",
    diagram: {
      alt: "Parallelogram ABCD with A top-left, D top-right, B bottom-left, C bottom-right. X lies on the bottom side BC between B and C. Lines AX and AC are drawn from A, with angle BAX equal to angle CAD.",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 190 130" role="img">
  <g stroke="currentColor" fill="none" stroke-width="1.4">
    <polygon points="30,30 150,30 170,105 50,105"/>
    <line x1="30" y1="30" x2="105" y2="105"/>
    <line x1="30" y1="30" x2="170" y2="105"/>
  </g>
  <g font-size="12" fill="currentColor" font-family="Georgia, 'Times New Roman', serif" font-style="italic">
    <text x="20" y="28">A</text>
    <text x="152" y="28">D</text>
    <text x="40" y="118">B</text>
    <text x="103" y="118">X</text>
    <text x="170" y="118">C</text>
  </g>
</svg>`,
    },
  },
  {
    number: 4,
    statement:
      "A keypad is a $3$ by $3$ grid with the digits $1$ to $3$ in order on the top row, $4$ to $6$ in order on the second row and $7$ to $9$ in order on the third row.\n\nFred has the keypad upside-down (i.e. rotated through $180°$) and types his four-digit PIN as if the keypad were the right way up. The number he types in turns out to be $2025$ more than $k$ times his original PIN where $k$ is a positive integer. Prove there is only one possible PIN and find it.",
  },
  {
    number: 5,
    statement:
      "Find all integer values of $n$, $0 \\le n \\le 2025$, $n \\ne 3$, for which $\\dfrac{1}{n^2 - 9}$ can be written as a terminating decimal.",
  },
  {
    number: 6,
    statement:
      "A vegetable patch is a square grid of $n$ by $n$ uncleared cells with $n \\ge 3$ and $n$ odd. Mo the mole is in the centre cell and digs it up to clear it.\n\nMo then digs up cells one at a time according to the following rule. Mo can dig up an uncleared cell that is both adjacent horizontally or vertically to a cleared cell and in the middle of a line of three uncleared cells in the vegetable patch.\n\nAfter digging up $M$ squares, Mo can dig no further. Find in terms of $n$ the smallest $M$ for which this can happen and prove there is no smaller value.",
  },
];
