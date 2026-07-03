import type { PaperQuestion } from "@/lib/types";

/**
 * Intermediate Mathematical Olympiad — Hamilton Paper 2016.
 *
 * Transcribed from the official UKMT Hamilton paper for in-app timed practice.
 * This is a written olympiad: full justified solutions are required, not just
 * answers. Auto-scoring is not possible — students self-mark against the
 * official solutions.
 *
 * © UK Mathematics Trust — questions are the intellectual property of UKMT and
 * are included here for educational practice.
 */

export const HMC_2016_QUESTIONS: PaperQuestion[] = [
  {
    number: 1,
    statement:
      "No digit of the positive integer $N$ is prime. However, all the single-digit primes divide $N$ exactly.\n\nWhat is the smallest such integer $N$?",
  },
  {
    number: 2,
    statement:
      "The diagram shows two arcs. Arc $AB$ is one eighth of a circle with centre $C$, and arc $AC$ is one quarter of a circle with centre $D$. The points $A$ and $B$ are joined by straight lines to $C$, and $A$ and $C$ are joined by straight lines to $D$.\n\nProve that the area of the shaded triangle $T$ is equal to the area of the shaded region $R$.",
    diagram: {
      alt: "Point C on the left. An eighth-circle arc centred at C runs from A to B, with A to the lower right of C and B above it; region R lies between chord and arc AB. A quarter-circle arc centred at D (below C) runs from A to C, forming shaded triangle T near D.",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 190 160" role="img">
  <g stroke="currentColor" fill="none" stroke-width="1.4">
    <path d="M 160 90 A 100 100 0 0 0 118 20" fill="currentColor" fill-opacity="0.18"/>
    <path d="M 30 90 A 130 130 0 0 1 160 90" />
    <line x1="30" y1="90" x2="160" y2="90"/>
    <line x1="30" y1="90" x2="118" y2="20"/>
    <polygon points="30,90 30,150 160,90" fill="currentColor" fill-opacity="0.18"/>
  </g>
  <g font-size="13" fill="currentColor" font-family="Georgia, 'Times New Roman', serif" font-style="italic">
    <text x="20" y="88">C</text>
    <text x="118" y="16">B</text>
    <text x="163" y="92">A</text>
    <text x="22" y="160">D</text>
    <text x="96" y="80">R</text>
    <text x="60" y="112">T</text>
  </g>
</svg>`,
    },
  },
  {
    number: 3,
    statement:
      "Alex is given £$1$ by his grandfather and decides:\n\n(i) to spend at least one third of the £$1$ on toffees at $5$p each;\n\n(ii) to spend at least one quarter of the £$1$ on packs of bubblegum at $3$p each; and\n\n(iii) to spend at least one tenth of the £$1$ on jellybeans at $2$p each.\n\nHe only decides how to spend the rest of the money when he gets to the shop, but he spends all of the £$1$ on toffees, packs of bubblegum and jellybeans.\n\nWhat are the possibilities for the number of jellybeans that he buys?",
  },
  {
    number: 4,
    statement:
      "The diagram shows a right-angled triangle $ACD$ with a point $B$ on the side $AC$. The sides of triangle $ABD$ have lengths $3$, $7$ and $8$, as shown.\n\nWhat is the area of triangle $BCD$?",
    diagram: {
      alt: "Right-angled triangle ACD with the right angle at C. A is bottom-left, C is bottom-right, D is top-right. B lies on AC with AB = 3. Segment BD = 7 and AD = 8.",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 190 140" role="img">
  <g stroke="currentColor" fill="none" stroke-width="1.4">
    <polygon points="20,115 165,115 165,25"/>
    <line x1="70" y1="115" x2="165" y2="25"/>
    <rect x="153" y="103" width="12" height="12"/>
  </g>
  <g font-size="13" fill="currentColor" font-family="Georgia, 'Times New Roman', serif">
    <text x="12" y="128" font-style="italic">A</text>
    <text x="66" y="130" font-style="italic">B</text>
    <text x="167" y="128" font-style="italic">C</text>
    <text x="168" y="24" font-style="italic">D</text>
    <text x="40" y="128">3</text>
    <text x="108" y="63">7</text>
    <text x="82" y="60">8</text>
  </g>
</svg>`,
    },
  },
  {
    number: 5,
    statement:
      "James chooses five different positive integers, each at most eight, so that their mean is equal to their median.\n\nIn how many different ways can he do this?",
  },
  {
    number: 6,
    statement:
      "Tony multiplies together at least two consecutive positive integers. He obtains the six-digit number $N$. The left-hand digits of $N$ are '$47$', and the right-hand digits of $N$ are '$74$'.\n\nWhat integers does Tony multiply together?",
  },
];
