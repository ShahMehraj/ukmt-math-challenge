import type { PaperQuestion } from "@/lib/types";

/**
 * Intermediate Mathematical Olympiad — Hamilton Paper 2018.
 *
 * Transcribed from the official UKMT Hamilton paper for in-app timed practice.
 * This is a written olympiad: full justified solutions are required, not just
 * answers. Auto-scoring is not possible — students self-mark against the
 * official solutions.
 *
 * © UK Mathematics Trust — questions are the intellectual property of UKMT and
 * are included here for educational practice.
 */

export const HMC_2018_QUESTIONS: PaperQuestion[] = [
  {
    number: 1,
    statement:
      "The positive integers $m$ and $n$ satisfy the equation $20m + 18n = 2018$.\n\nHow many possible values of $m$ are there?",
  },
  {
    number: 2,
    statement:
      "How many nine-digit integers of the form '$pqrpqrpqr$' are multiples of $24$?\n\n(Note that $p$, $q$ and $r$ need not be different.)",
  },
  {
    number: 3,
    statement:
      "The diagram shows a regular dodecagon and a square, whose vertices are also vertices of the dodecagon.\n\nWhat is the value of the ratio\n\n$$\\text{area of the square} : \\text{area of the dodecagon}?$$",
    diagram: {
      alt: "A regular dodecagon (12-sided polygon) with a square inscribed so that all four square vertices coincide with vertices of the dodecagon (every third vertex).",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" role="img">
  <g stroke="currentColor" fill="none" stroke-width="1.4">
    <polygon points="88,13 106,21 118,37 122,57 118,77 106,93 88,101 70,101 52,93 40,77 36,57 40,37 52,21 70,13" transform="translate(-9,6)"/>
    <polygon points="97,27 111,83 55,97 41,41" />
  </g>
</svg>`,
    },
  },
  {
    number: 4,
    statement:
      "The diagram shows a circle and a trapezium $ABCD$ in which $AD$ is parallel to $BC$ and $AB = DC$. All four sides of $ABCD$ are tangents of the circle. The circle has radius $4$ and the area of $ABCD$ is $72$.\n\nWhat is the length of $AB$?",
    diagram: {
      alt: "An isosceles trapezium ABCD with the shorter parallel side AD on top and the longer parallel side BC on the bottom. A circle sits inside, tangent to all four sides.",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 120" role="img">
  <g stroke="currentColor" fill="none" stroke-width="1.4">
    <polygon points="55,25 125,25 160,100 20,100"/>
    <circle cx="90" cy="62" r="30"/>
  </g>
  <g font-size="13" fill="currentColor" font-family="Georgia, 'Times New Roman', serif" font-style="italic">
    <text x="45" y="22">A</text>
    <text x="127" y="22">D</text>
    <text x="8" y="112">B</text>
    <text x="162" y="112">C</text>
  </g>
</svg>`,
    },
  },
  {
    number: 5,
    statement:
      "A two-digit number is divided by the sum of its digits. The result is a number between $2.6$ and $2.7$.\n\nFind all of the possible values of the original two-digit number.",
  },
  {
    number: 6,
    statement:
      "The figure shows seven circles joined by three straight lines.\n\nThe numbers $9$, $12$, $18$, $24$, $36$, $48$ and $96$ are to be placed into the circles, one in each, so that the product of the three numbers on each of the three lines is the same.\n\nWhich of the numbers could go in the centre?",
    diagram: {
      alt: "Seven circles arranged so that three straight lines each pass through three of the circles, all three lines crossing at a single central circle. Each line has the central circle plus two outer circles.",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 160" role="img">
  <g stroke="currentColor" fill="none" stroke-width="1.4">
    <line x1="20" y1="30" x2="160" y2="130"/>
    <line x1="160" y1="30" x2="20" y2="130"/>
    <line x1="90" y1="15" x2="90" y2="150"/>
  </g>
  <g fill="#ffffff" stroke="currentColor" stroke-width="1.4">
    <circle cx="90" cy="80" r="11"/>
    <circle cx="20" cy="30" r="11"/>
    <circle cx="160" cy="30" r="11"/>
    <circle cx="20" cy="130" r="11"/>
    <circle cx="160" cy="130" r="11"/>
    <circle cx="90" cy="15" r="11"/>
    <circle cx="90" cy="150" r="11"/>
  </g>
</svg>`,
    },
  },
];
