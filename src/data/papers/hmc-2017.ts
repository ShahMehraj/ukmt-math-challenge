import type { PaperQuestion } from "@/lib/types";

/**
 * Intermediate Mathematical Olympiad — Hamilton Paper 2017.
 *
 * Transcribed from the official UKMT Hamilton paper for in-app timed practice.
 * This is a written olympiad: full justified solutions are required, not just
 * answers. Auto-scoring is not possible — students self-mark against the
 * official solutions.
 *
 * © UK Mathematics Trust — questions are the intellectual property of UKMT and
 * are included here for educational practice.
 */

export const HMC_2017_QUESTIONS: PaperQuestion[] = [
  {
    number: 1,
    statement:
      "The diagram shows four equal arcs placed on the sides of a square. Each arc is a major arc of a circle with radius $1$ cm, and each side of the square has length $2$ cm.\n\nWhat is the area of the shaded region?",
    diagram: {
      alt: "A square of side 2 cm. On each side sits a major arc of a circle of radius 1 cm bulging outward, so the four arcs together form a rounded, four-lobed shaded shape around the square.",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" role="img">
  <g stroke="currentColor" stroke-width="1.4" fill="currentColor" fill-opacity="0.18">
    <path d="M 40 40 A 30 30 0 1 1 100 40 A 30 30 0 1 1 100 100 A 30 30 0 1 1 40 100 A 30 30 0 1 1 40 40 Z"/>
  </g>
  <rect x="40" y="40" width="60" height="60" fill="none" stroke="currentColor" stroke-width="1.4"/>
</svg>`,
    },
  },
  {
    number: 2,
    statement:
      "A ladybird walks from $A$ to $B$ along the edges of the network shown. She never walks along the same edge twice. However, she may pass through the same point more than once, though she stops the first time she reaches $B$.\n\nHow many different routes can she take?",
    diagram: {
      alt: "A network of nodes and edges between a start point A on the left and end point B on the right, with several intermediate vertices connected by edges forming multiple possible paths.",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100" role="img">
  <g stroke="currentColor" fill="none" stroke-width="1.4">
    <line x1="20" y1="50" x2="70" y2="20"/>
    <line x1="20" y1="50" x2="70" y2="80"/>
    <line x1="70" y1="20" x2="70" y2="80"/>
    <line x1="70" y1="20" x2="130" y2="20"/>
    <line x1="70" y1="80" x2="130" y2="80"/>
    <line x1="130" y1="20" x2="130" y2="80"/>
    <line x1="70" y1="20" x2="130" y2="80"/>
    <line x1="70" y1="80" x2="130" y2="20"/>
    <line x1="130" y1="20" x2="180" y2="50"/>
    <line x1="130" y1="80" x2="180" y2="50"/>
  </g>
  <g fill="currentColor">
    <circle cx="20" cy="50" r="2.6"/>
    <circle cx="70" cy="20" r="2.6"/>
    <circle cx="70" cy="80" r="2.6"/>
    <circle cx="130" cy="20" r="2.6"/>
    <circle cx="130" cy="80" r="2.6"/>
    <circle cx="180" cy="50" r="2.6"/>
  </g>
  <g font-size="13" fill="currentColor" font-family="Georgia, 'Times New Roman', serif" font-style="italic">
    <text x="8" y="54">A</text>
    <text x="186" y="54">B</text>
  </g>
</svg>`,
    },
  },
  {
    number: 3,
    statement:
      "The diagram shows squares $ABCD$ and $EFGD$. The length of $BF$ is $10$ cm. The area of trapezium $BCGF$ is $35$ cm$^2$.\n\nWhat is the length of $AB$?",
    diagram: {
      alt: "Two squares sharing vertex D. Square ABCD is the larger, with C top-left, B top-right, A bottom-right, D bottom-left. Square EFGD is smaller, sharing corner D, with G and F to the right. Trapezium BCGF is shaded.",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 170 150" role="img">
  <g stroke="currentColor" fill="none" stroke-width="1.4">
    <polygon points="20,20 120,20 120,120 20,120"/>
    <polygon points="20,70 70,70 70,120 20,120"/>
    <polygon points="20,20 120,20 70,70" fill="currentColor" fill-opacity="0.15"/>
  </g>
  <g font-size="13" fill="currentColor" font-family="Georgia, 'Times New Roman', serif" font-style="italic">
    <text x="10" y="18">C</text>
    <text x="123" y="18">B</text>
    <text x="123" y="126">A</text>
    <text x="10" y="134">D</text>
    <text x="60" y="66">G</text>
    <text x="72" y="70">F</text>
    <text x="10" y="72">E</text>
  </g>
</svg>`,
    },
  },
  {
    number: 4,
    statement:
      "The largest of four different real numbers is $d$. When the numbers are summed in pairs, the four largest sums are $9$, $10$, $12$ and $13$.\n\nWhat are the possible values of $d$?",
  },
  {
    number: 5,
    statement:
      "In the trapezium $ABCD$, the lines $AB$ and $DC$ are parallel, $BC = AD$, $DC = 2AD$ and $AB = 3AD$. The angle bisectors of $\\angle DAB$ and $\\angle CBA$ intersect at the point $E$.\n\nWhat fraction of the area of the trapezium $ABCD$ is the area of the triangle $ABE$?",
  },
  {
    number: 6,
    statement:
      "Solve the pair of simultaneous equations\n\n$$x^2 + 3y = 10 \\qquad \\text{and} \\qquad 3 + y = \\frac{10}{x}.$$",
  },
];
