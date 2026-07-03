import type { PaperQuestion } from "@/lib/types";

/**
 * Intermediate Mathematical Olympiad — Hamilton Paper 2024.
 *
 * Transcribed from the official UKMT Hamilton paper (Thursday 21 March 2024)
 * for in-app timed practice. This is a written olympiad: full justified
 * solutions are required, not just answers. Auto-scoring is not possible —
 * students self-mark against the official solutions.
 *
 * © UK Mathematics Trust — questions are the intellectual property of UKMT and
 * are included here for educational practice.
 */

export const HMC_2024_QUESTIONS: PaperQuestion[] = [
  {
    number: 1,
    statement:
      "Richard is cycling at a speed $v$ km/h when he looks at his cycle computer to see how long it will take him to get home at his current speed. It shows a time $t$ hours.\n\nHe cycles at this speed for $40$ minutes, then instantaneously slows down by $1$ km/h and checks his cycle computer; the predicted time to get home at his new speed is still $t$ hours.\n\nAfter cycling at this new speed for $45$ minutes, he instantaneously slows down by another $1$ km/h and checks his cycle computer; the predicted time to get home at this speed is again $t$ hours.\n\nHow far from home was he when he first looked at the computer?",
  },
  {
    number: 2,
    statement:
      "$ABCD$ is a square. $BDEF$ is a rhombus with $A$, $E$ and $F$ collinear. Find $\\angle ADE$.",
    diagram: {
      alt: "Square ABCD with C at the top, B to the right, D to the left, A at the bottom-left. A rhombus BDEF extends to the right, with points A, E and F collinear along a line running to the lower right.",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 190 150" role="img">
  <g stroke="currentColor" fill="none" stroke-width="1.4">
    <polygon points="40,100 100,40 160,100 100,160" transform="translate(-20,-25) scale(0.85)"/>
    <polygon points="14,60 65,110 116,110 65,60"/>
    <line x1="14" y1="110" x2="150" y2="130"/>
  </g>
  <g font-size="12" fill="currentColor" font-family="Georgia, 'Times New Roman', serif" font-style="italic">
    <text x="60" y="24">C</text>
    <text x="120" y="60">B</text>
    <text x="4" y="60">D</text>
    <text x="4" y="122">A</text>
    <text x="66" y="122">E</text>
    <text x="150" y="128">F</text>
  </g>
</svg>`,
    },
  },
  {
    number: 3,
    statement:
      "A large number of people arrange themselves into groups of $2$, $5$ or $11$ people. The mean size of a group is $4$. However, when each person is asked how many other people are in their group (excluding themselves), the mean of their answers is $6$. Prove that the number of groups must be a multiple of $27$.",
  },
  {
    number: 4,
    statement:
      "The numbers $1$, $2$, $3$, $4$ and $5$ are used once each in some order substituting for the letters in the series of powers $M^{\\left(A^{\\left(H^S\\right)^T}\\right)}$. In how many of the arrangements is the units digit of the value of this expression equal to $1$?",
  },
  {
    number: 5,
    statement:
      "The integers $1$ to $100$ are written on a board. Seth chooses two distinct integers from the board, $b$ and $c$, and forms the quadratic equation $x^2 + bx + c = 0$. If the quadratic equation formed has integer solutions, then he erases $b$ and $c$ from the board; if not, the board remains unchanged.\n\nIf Seth continually repeats this process, is it possible for him to erase all the numbers from the board?",
  },
  {
    number: 6,
    statement:
      "The diagram shows a quadrilateral $ABCD$ with $AB + CD = BC$. The interior angle bisectors of $\\angle B$ and $\\angle C$, and the perpendicular bisector of $AD$, are shown as dotted lines.\n\nProve that those three bisectors meet at a point.",
    diagram: {
      alt: "A quadrilateral ABCD with A at the top, D to the upper right, C at the lower right and B at the lower left. Dotted lines show the interior angle bisectors at B and C and the perpendicular bisector of side AD, all shown meeting inside.",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 150" role="img">
  <g stroke="currentColor" fill="none" stroke-width="1.4">
    <polygon points="60,20 150,55 140,120 30,110"/>
  </g>
  <g stroke="currentColor" fill="none" stroke-width="1" stroke-dasharray="3 3">
    <line x1="30" y1="110" x2="120" y2="70"/>
    <line x1="140" y1="120" x2="80" y2="60"/>
    <line x1="105" y1="37" x2="95" y2="95"/>
  </g>
  <g font-size="12" fill="currentColor" font-family="Georgia, 'Times New Roman', serif" font-style="italic">
    <text x="54" y="16">A</text>
    <text x="153" y="54">D</text>
    <text x="143" y="128">C</text>
    <text x="20" y="112">B</text>
  </g>
</svg>`,
    },
  },
];
