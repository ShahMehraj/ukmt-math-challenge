import type { PaperQuestion } from "@/lib/types";

/**
 * Intermediate Mathematical Olympiad — Hamilton Paper 2015.
 *
 * Transcribed from the official UKMT Hamilton paper (Thursday 19 March 2015)
 * for in-app timed practice. This is a written olympiad: full justified
 * solutions are required, not just answers. Auto-scoring is not possible —
 * students self-mark against the official solutions.
 *
 * © UK Mathematics Trust — questions are the intellectual property of UKMT and
 * are included here for educational practice.
 */

export const HMC_2015_QUESTIONS: PaperQuestion[] = [
  {
    number: 1,
    statement:
      "The five-digit integer '$a679b$' is a multiple of $72$.\n\nWhat are the values of $a$ and $b$?",
  },
  {
    number: 2,
    statement:
      "In Vegetable Village it costs $75$ pence to buy $2$ potatoes, $3$ carrots and $2$ leeks at the Outdoor Market, whereas it costs $88$ pence to buy $2$ potatoes, $3$ carrots and $2$ leeks at the Indoor Market.\n\nTo buy a potato, a carrot and a leek costs $6$ pence more at the Indoor Market than it does at the Outdoor Market.\n\nWhat is the difference, in pence, between the cost of buying a carrot at the Outdoor Market and the cost of buying a carrot at the Indoor Market?",
  },
  {
    number: 3,
    statement:
      "The diagram shows two circular arcs $CP$ and $CQ$ in a right-angled triangle $ABC$, where $\\angle BCA = 90°$. The centres of the arcs are $A$ and $B$.\n\nProve that $\\tfrac{1}{2}\\,PQ^2 = AP \\times BQ$.",
    diagram: {
      alt: "Right-angled triangle ABC with the right angle at C at the top. The hypotenuse AB is the horizontal base with points P and Q on it between A and B. An arc centred at A passes through C and meets AB at P; an arc centred at B passes through C and meets AB at Q.",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 130" role="img">
  <g stroke="currentColor" fill="none" stroke-width="1.4">
    <path d="M 20 110 A 60 60 0 0 1 110 43"/>
    <path d="M 180 110 A 78 78 0 0 0 110 43"/>
    <polygon points="20,110 110,43 180,110"/>
    <line x1="20" y1="110" x2="180" y2="110"/>
    <rect x="103" y="43" width="9" height="9" transform="rotate(37 110 43)"/>
  </g>
  <g font-size="13" fill="currentColor" font-family="Georgia, 'Times New Roman', serif" font-style="italic">
    <text x="10" y="122">A</text>
    <text x="108" y="38">C</text>
    <text x="183" y="122">B</text>
    <text x="74" y="124">P</text>
    <text x="120" y="124">Q</text>
  </g>
</svg>`,
    },
  },
  {
    number: 4,
    statement:
      "The points $A$, $B$ and $C$ are the centres of three faces of a cuboid that meet at a vertex. The lengths of the sides of the triangle $ABC$ are $4$, $5$ and $6$.\n\nWhat is the volume of the cuboid?",
  },
  {
    number: 5,
    statement:
      "Some boys and girls are standing in a row, in some order, about to be photographed. All of them are facing the photographer. Each girl counts the number of boys to her left, and each boy counts the number of girls to his right.\n\nLet the sum of the numbers counted by the girls be $G$, and the sum of the numbers counted by the boys be $B$.\n\nProve that $G = B$.",
  },
  {
    number: 6,
    statement:
      "The diagram shows four identical white triangles symmetrically placed on a grey square. Each triangle is isosceles and right-angled.\n\nThe total area of the visible grey regions is equal to the total area of the white triangles.\n\nWhat is the smallest angle in each of the (identical) grey triangles in the diagram?",
    diagram: {
      alt: "A grey square with four identical white isosceles right-angled triangles placed symmetrically inside it, one hanging from the midpoint of each side pointing towards the centre, leaving grey triangular regions between them.",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" role="img">
  <rect x="10" y="10" width="100" height="100" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.4"/>
  <g fill="#ffffff" stroke="currentColor" stroke-width="1.2">
    <polygon points="10,10 60,10 35,60"/>
    <polygon points="110,10 110,60 60,35"/>
    <polygon points="110,110 60,110 85,60"/>
    <polygon points="10,110 10,60 60,85"/>
  </g>
</svg>`,
    },
  },
];
