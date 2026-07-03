import type { PaperQuestion } from "@/lib/types";

/**
 * Intermediate Mathematical Olympiad — Hamilton Paper 2022.
 *
 * Transcribed from the official UKMT Hamilton paper (Thursday 17 March 2022)
 * for in-app timed practice. This is a written olympiad: full justified
 * solutions are required, not just answers. Auto-scoring is not possible —
 * students self-mark against the official solutions.
 *
 * © UK Mathematics Trust — questions are the intellectual property of UKMT and
 * are included here for educational practice.
 */

export const HMC_2022_QUESTIONS: PaperQuestion[] = [
  {
    number: 1,
    statement:
      "A regular polygon $P$ has four more sides than another regular polygon $Q$, and their interior angles differ by $1°$. How many sides does $P$ have?",
  },
  {
    number: 2,
    statement:
      "Hudson labels each of the four vertices of a triangular pyramid with a different integer chosen from $1$ to $15$. For each of the four triangular faces, he then calculates the mean of the three numbers at the vertices of the face.\n\nGiven that the means calculated by Hudson are all integers, how many different sets of four numbers could he have chosen to label the vertices of the triangular pyramid?",
  },
  {
    number: 3,
    statement:
      "It is possible to write $15129 = 123^2$ as the sum of three distinct squares:\n\n$$15129 = 27^2 + 72^2 + 96^2.$$\n\n(i) By using the identity $(a + b)^2 \\equiv a^2 + 2ab + b^2$, or otherwise, find another way to write $15129$ as the sum of three distinct squares.\n\n(ii) Hence, or otherwise, show that $378225 = 615^2$ can be written as the sum of six distinct squares.",
    parts: ["i", "ii"],
  },
  {
    number: 4,
    statement:
      "Mr Evans has a class containing an even number of students. He calculated that in the end-of-term examination the mean mark of the students was $58$, the median mark was $80$ and the difference between the lowest mark and the highest mark was $40$. Show that Mr Evans made a mistake in his calculations.",
  },
  {
    number: 5,
    statement:
      "A square $ABCD$ has side-length $2$, and $M$ is the midpoint of $BC$. The circle $S$ inside the quadrilateral $AMCD$ touches the three sides $AM$, $CD$ and $DA$.\n\nWhat is its radius?",
    diagram: {
      alt: "Square ABCD with A top-left, B top-right, C bottom-right, D bottom-left. M is the midpoint of the right side BC. A circle S sits inside quadrilateral AMCD, tangent to the segment AM, to side CD and to side DA.",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" role="img">
  <g stroke="currentColor" fill="none" stroke-width="1.4">
    <rect x="20" y="20" width="100" height="100"/>
    <line x1="20" y1="20" x2="120" y2="70"/>
    <circle cx="62" cy="82" r="30"/>
  </g>
  <g font-size="12" fill="currentColor" font-family="Georgia, 'Times New Roman', serif" font-style="italic">
    <text x="12" y="18">A</text>
    <text x="123" y="18">B</text>
    <text x="123" y="128">C</text>
    <text x="10" y="128">D</text>
    <text x="123" y="74">M</text>
    <text x="58" y="86">S</text>
  </g>
</svg>`,
    },
  },
  {
    number: 6,
    statement:
      "A robot sits at zero on a number line. Each second the robot chooses a direction, left or right, and at the $s$th second the robot moves $2^{s-1}$ units in that direction on the number line.\n\nFor which integers $n$ are there infinitely many routes the robot can take to reach $n$?\n\n(You may use the fact that every positive integer can be written as a sum of different powers of $2$. For example, $19 = 2^0 + 2^1 + 2^4$.)",
  },
];
