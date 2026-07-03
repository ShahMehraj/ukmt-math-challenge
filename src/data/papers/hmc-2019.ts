import type { PaperQuestion } from "@/lib/types";

/**
 * Intermediate Mathematical Olympiad — Hamilton Paper 2019.
 *
 * Transcribed from the official UKMT Hamilton paper (Thursday 21 March 2019)
 * for in-app timed practice. This is a written olympiad: full justified
 * solutions are required, not just answers. Auto-scoring is not possible —
 * students self-mark against the official solutions.
 *
 * © UK Mathematics Trust — questions are the intellectual property of UKMT and
 * are included here for educational practice.
 */

export const HMC_2019_QUESTIONS: PaperQuestion[] = [
  {
    number: 1,
    statement:
      "A number of couples met and each person shook hands with everyone else present, but not with themselves or their partners.\n\nThere were $31\\,000$ handshakes altogether.\n\nHow many couples were there?",
  },
  {
    number: 2,
    statement:
      "The diagram shows a pentagon $ABCDE$ in which all sides are equal in length and two adjacent interior angles are $90°$. The point $X$ is the point of intersection of $AD$ and $BE$.\n\nProve that $DX = BX$.",
    diagram: {
      alt: "An equilateral pentagon ABCDE (all sides equal) with right angles at A and B. A and B form the square base at the bottom, E and C are the sides, and D is the apex at the top. Diagonals AD and BE cross at X.",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" role="img">
  <g stroke="currentColor" fill="none" stroke-width="1.4">
    <polygon points="35,120 115,120 115,55 75,20 35,55"/>
    <line x1="35" y1="120" x2="115" y2="55"/>
    <line x1="115" y1="120" x2="35" y2="55"/>
  </g>
  <g fill="currentColor"><circle cx="75" cy="79" r="2.2"/></g>
  <g font-size="13" fill="currentColor" font-family="Georgia, 'Times New Roman', serif" font-style="italic">
    <text x="25" y="133">A</text>
    <text x="116" y="133">B</text>
    <text x="120" y="55">C</text>
    <text x="72" y="16">D</text>
    <text x="22" y="55">E</text>
    <text x="79" y="80">X</text>
  </g>
</svg>`,
    },
  },
  {
    number: 3,
    statement:
      "A $4$ cm $\\times$ $4$ cm square is split into four rectangular regions using two line segments parallel to the sides.\n\nHow many ways are there to do this so that each region has an area equal to an integer number of square centimetres?",
  },
  {
    number: 4,
    statement:
      "Each of $A$ and $B$ is a four-digit palindromic integer, $C$ is a three-digit palindromic integer, and $A - B = C$.\n\nWhat are the possible values of $C$?\n\n[A palindromic integer reads the same 'forwards' and 'backwards'.]",
  },
  {
    number: 5,
    statement:
      "The area of the right-angled triangle in the diagram alongside is $60$ cm$^2$. The triangle touches the circle, and one side of the triangle has length $15$ cm, as shown.\n\nWhat is the radius of the circle?",
    diagram: {
      alt: "A right-angled triangle with one leg labelled 15 cm. A circle is tangent to the triangle (an inscribed-style circle touching its sides).",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 170 140" role="img">
  <g stroke="currentColor" fill="none" stroke-width="1.4">
    <polygon points="25,115 130,115 25,35"/>
    <rect x="25" y="103" width="12" height="12"/>
    <circle cx="58" cy="92" r="20"/>
  </g>
  <g font-size="12" fill="currentColor" font-family="Georgia, 'Times New Roman', serif">
    <text x="66" y="52">15 cm</text>
  </g>
</svg>`,
    },
  },
  {
    number: 6,
    statement:
      "Nine dots are arranged in the $2 \\times 2$ square grid shown. The arrow points north.\n\nHarry and Victoria take it in turns to draw a unit line segment to join two dots in the grid.\n\nHarry is only allowed to draw an east–west line segment, and Victoria is only allowed to draw a north–south line segment. Harry goes first.\n\nA point is scored when a player draws a line segment that completes a $1 \\times 1$ square on the grid.\n\nCan either player force a win, no matter how the other person plays?",
    diagram: {
      alt: "A 3-by-3 arrangement of nine dots forming a 2-by-2 grid of unit squares. A north-pointing arrow is shown beside the grid.",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 130" role="img">
  <g fill="currentColor">
    <circle cx="30" cy="100" r="3"/><circle cx="70" cy="100" r="3"/><circle cx="110" cy="100" r="3"/>
    <circle cx="30" cy="60" r="3"/><circle cx="70" cy="60" r="3"/><circle cx="110" cy="60" r="3"/>
    <circle cx="30" cy="20" r="3"/><circle cx="70" cy="20" r="3"/><circle cx="110" cy="20" r="3"/>
  </g>
  <g stroke="currentColor" fill="none" stroke-width="1.4">
    <line x1="135" y1="115" x2="135" y2="90"/>
    <polygon points="135,86 132,94 138,94" fill="currentColor"/>
  </g>
  <text x="130" y="128" font-size="11" fill="currentColor" font-family="Georgia, 'Times New Roman', serif">N</text>
</svg>`,
    },
  },
];
