import type { PaperQuestion } from "@/lib/types";
import { paperFigure, INK } from "./svg-figure";

// Figures derived from the official UKMT IMC 2024 PDF: the pdf2svg traces have
// been flattened to plain display coordinates with real <text> labels (see
// svg-figure.ts). Q11 (frame + dimensions) is hand-authored as a clean SVG
// file; Q19 (3×3 grid) is hand-authored inline below — both crisp and
// theme-aware.
import q3svg from "./imc-2024/q3.svg?raw";
import q9svg from "./imc-2024/q9.svg?raw";
import q11svg from "./imc-2024/q11.svg?raw";
import q12svg from "./imc-2024/q12.svg?raw";
import q21svg from "./imc-2024/q21.svg?raw";
import q23svg from "./imc-2024/q23.svg?raw";
import q24svg from "./imc-2024/q24.svg?raw";

/**
 * Intermediate Mathematical Challenge 2024 — full transcription.
 *
 * Transcribed from the official UKMT IMC 2024 paper (Wednesday 31 January 2024)
 * for in-app practice. Statements are reproduced as faithfully as possible;
 * diagrams are derived from the official PDF figures. Answer key lives in
 * `papers.ts` and was verified against the official UKMT solutions.
 *
 * © UK Mathematics Trust — questions are the intellectual property of UKMT and
 * are included here for educational practice.
 */

export const IMC_2024_QUESTIONS: PaperQuestion[] = [
  {
    number: 1,
    statement: "What is the value of $\\dfrac{20 + 24}{20 - 24}$?",
    options: [
      { label: "A", text: "$8$" },
      { label: "B", text: "$-9$" },
      { label: "C", text: "$10$" },
      { label: "D", text: "$-11$" },
      { label: "E", text: "$12$" },
    ],
  },
  {
    number: 2,
    statement:
      "What is the difference between the smallest two-digit prime and the largest two-digit prime?",
    options: [
      { label: "A", text: "$86$" },
      { label: "B", text: "$84$" },
      { label: "C", text: "$82$" },
      { label: "D", text: "$80$" },
      { label: "E", text: "$78$" },
    ],
  },
  {
    number: 3,
    statement:
      "The diagram shows the square $PQRS$ and $T$, the mid-point of the side $PQ$. What fraction of the area of the square $PQRS$ is shaded?",
    options: [
      { label: "A", text: "$\\dfrac{1}{4}$" },
      { label: "B", text: "$\\dfrac{1}{3}$" },
      { label: "C", text: "$\\dfrac{1}{2}$" },
      { label: "D", text: "$\\dfrac{2}{3}$" },
      { label: "E", text: "$\\dfrac{3}{4}$" },
    ],
    diagram: {
      alt: "Square PQRS with P top-left, S top-right, Q bottom-left, R bottom-right. T is the midpoint of the left side PQ. The triangle T-P-R (bounded by PT, the diagonal PR... actually T, P, R) is shaded.",
      svg: paperFigure(q3svg),
    },
  },
  {
    number: 4,
    statement:
      "The shorter sides of a right-angled triangle have lengths $\\sqrt{5}$ and $\\sqrt{12}$. What is the length of the hypotenuse?",
    options: [
      { label: "A", text: "$\\sqrt{7}$" },
      { label: "B", text: "$\\sqrt{13}$" },
      { label: "C", text: "$\\sqrt{15}$" },
      { label: "D", text: "$\\sqrt{17}$" },
      { label: "E", text: "$7$" },
    ],
  },
  {
    number: 5,
    statement:
      "The ages of Grannie's seven grandchildren are consecutive positive integers. The youngest three grandchildren have a mean age of $6$. What is the mean age of the oldest three grandchildren?",
    options: [
      { label: "A", text: "$8$" },
      { label: "B", text: "$9$" },
      { label: "C", text: "$10$" },
      { label: "D", text: "$11$" },
      { label: "E", text: "$12$" },
    ],
  },
  {
    number: 6,
    statement:
      "Four of these points lie on a circle. Which of the points does not lie on that circle?",
    options: [
      { label: "A", text: "$(5, 0)$" },
      { label: "B", text: "$(4, 3)$" },
      { label: "C", text: "$(2, 2)$" },
      { label: "D", text: "$(3, 4)$" },
      { label: "E", text: "$(0, 5)$" },
    ],
  },
  {
    number: 7,
    statement:
      "The 'Penny's Puddings' company uses one tonne of rice to make twenty-five thousand cans of rice pudding. Each tonne of rice contains approximately fifty million grains of rice. Approximately how many grains of rice are there in a can of Penny's rice pudding?",
    options: [
      { label: "A", text: "$200$" },
      { label: "B", text: "$2000$" },
      { label: "C", text: "$5000$" },
      { label: "D", text: "$50\\,000$" },
      { label: "E", text: "$1\\,250\\,000$" },
    ],
  },
  {
    number: 8,
    statement: "What is the value of $999 \\times 999 + 999$?",
    options: [
      { label: "A", text: "$10\\,800$" },
      { label: "B", text: "$100\\,800$" },
      { label: "C", text: "$999\\,000$" },
      { label: "D", text: "$999\\,999$" },
      { label: "E", text: "$1\\,000\\,998$" },
    ],
  },
  {
    number: 9,
    statement:
      "Three sectors of a circle are removed from a regular hexagon to form the shaded shape shown. Each sector has perimeter $18$ mm. What is the perimeter, in mm, of the shaded shape formed?",
    options: [
      { label: "A", text: "$48$" },
      { label: "B", text: "$50$" },
      { label: "C", text: "$52$" },
      { label: "D", text: "$54$" },
      { label: "E", text: "$56$" },
    ],
    diagram: {
      alt: "A regular hexagon with three circular sectors cut out of three alternating corners, leaving a shaded pinwheel-like shape. The cut sectors are shown by dashed arcs.",
      svg: paperFigure(q9svg),
      caption: "Each removed sector has perimeter $18$ mm.",
    },
  },
  {
    number: 10,
    statement:
      "Which of the following is equal to $\\dfrac{20}{24} + \\dfrac{20}{25}$?",
    options: [
      { label: "A", text: "$\\dfrac{40}{600}$" },
      { label: "B", text: "$\\dfrac{49}{30}$" },
      { label: "C", text: "$\\dfrac{30}{49}$" },
      { label: "D", text: "$\\dfrac{40}{49}$" },
      { label: "E", text: "$\\dfrac{49}{40}$" },
    ],
  },
  {
    number: 11,
    statement:
      "A picture, together with its frame, makes a square of side-length $80$ cm. The frame is $4$ cm wide. What percentage of the area of the square is covered by the frame?",
    options: [
      { label: "A", text: "$15\\%$" },
      { label: "B", text: "$18\\%$" },
      { label: "C", text: "$19\\%$" },
      { label: "D", text: "$20\\%$" },
      { label: "E", text: "$24\\%$" },
    ],
    diagram: {
      alt: "A square of side 80 cm with a 4 cm wide border (the frame) shaded, and the inner picture left clear.",
      svg: paperFigure(q11svg),
    },
  },
  {
    number: 12,
    statement: "What is the length of the line segment marked $x$?",
    options: [
      { label: "A", text: "$\\sqrt{2}$" },
      { label: "B", text: "$2$" },
      { label: "C", text: "$2\\sqrt{2}$" },
      { label: "D", text: "$3$" },
      { label: "E", text: "$4$" },
    ],
    diagram: {
      alt: "A staircase of unit right-angled steps spirals outward; each short edge is length 1. The segment x is the straight hypotenuse from the start to the end of the staircase.",
      svg: paperFigure(q12svg),
      caption: "Each small segment has length $1$.",
    },
  },
  {
    number: 13,
    statement:
      "When I increase a certain number by $20\\%$, I get twice as much as when I decrease $20$ less than the number by $20\\%$. What is that number?",
    options: [
      { label: "A", text: "$40$" },
      { label: "B", text: "$60$" },
      { label: "C", text: "$80$" },
      { label: "D", text: "$100$" },
      { label: "E", text: "$120$" },
    ],
  },
  {
    number: 14,
    statement:
      "Going clockwise around a quadrilateral, its interior angles are in the ratio $6 : 7 : 8 : 9$. Which of the following is a true statement about the quadrilateral?",
    options: [
      { label: "A", text: "It has a right angle" },
      { label: "B", text: "It is a trapezium" },
      { label: "C", text: "It is a parallelogram" },
      { label: "D", text: "It is a kite" },
      { label: "E", text: "It is cyclic" },
    ],
  },
  {
    number: 15,
    statement:
      "Carrie the cat and Barrie the bat together weigh $4000$ g more than Rollie the rat. Barrie and Rollie together weigh $2000$ g less than Carrie. Carrie and Rollie together weigh $3000$ g more than Barrie. What is the weight, in grams, of Rollie the rat?",
    options: [
      { label: "A", text: "$250$" },
      { label: "B", text: "$500$" },
      { label: "C", text: "$750$" },
      { label: "D", text: "$1000$" },
      { label: "E", text: "$1250$" },
    ],
  },
  {
    number: 16,
    statement:
      "Factorial $n$, written $n!$, is defined by: $n! = 1 \\times 2 \\times 3 \\times \\cdots \\times n$. What is the remainder when $1! + 2! + 3! + 4! + 5! + 6! + 7! + 8! + 9! + 10!$ is divided by $5$?",
    options: [
      { label: "A", text: "$0$" },
      { label: "B", text: "$1$" },
      { label: "C", text: "$2$" },
      { label: "D", text: "$3$" },
      { label: "E", text: "$4$" },
    ],
  },
  {
    number: 17,
    statement: "What is $4^{\\left(3^2\\right)}$ divided by $\\left(4^3\\right)^2$?",
    options: [
      { label: "A", text: "$1$" },
      { label: "B", text: "$6$" },
      { label: "C", text: "$16$" },
      { label: "D", text: "$32$" },
      { label: "E", text: "$64$" },
    ],
  },
  {
    number: 18,
    statement:
      "The point $P(-1, 4)$ is reflected in the $y$-axis to become $Q$. The point $Q$ is reflected in the line $y = x$ to become $R$. The point $R$ is reflected in the $x$-axis to become $S$. What is the area of quadrilateral $PQRS$?",
    options: [
      { label: "A", text: "$4$" },
      { label: "B", text: "$4\\sqrt{2} + 2$" },
      { label: "C", text: "$6$" },
      { label: "D", text: "$4 + 2\\sqrt{2}$" },
      { label: "E", text: "$8$" },
    ],
  },
  {
    number: 19,
    statement:
      "In the grid shown the three non-zero numbers in each row, each column and each diagonal multiply to give the same product. What is the value of $x$?",
    options: [
      { label: "A", text: "$36$" },
      { label: "B", text: "$18$" },
      { label: "C", text: "$12$" },
      { label: "D", text: "$9$" },
      { label: "E", text: "$4$" },
    ],
    diagram: {
      alt: "A 3 by 3 grid. The middle cell of the middle row contains 6. The bottom row reads 2, x, 3. Other cells are blank.",
      svg: `<svg width="180" height="180" viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg" role="img">
  <g ${INK}>
    <rect x="15" y="15" width="120" height="120"/>
    <line x1="55" y1="15" x2="55" y2="135"/>
    <line x1="95" y1="15" x2="95" y2="135"/>
    <line x1="15" y1="55" x2="135" y2="55"/>
    <line x1="15" y1="95" x2="135" y2="95"/>
  </g>
  <g font-size="22" fill="currentColor" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif">
    <text x="75" y="83">6</text>
    <text x="35" y="123">2</text>
    <text x="75" y="123" font-style="italic">x</text>
    <text x="115" y="123">3</text>
  </g>
</svg>`,
    },
  },
  {
    number: 20,
    statement:
      'A shop sign says, "T-shirts. Three for the price of two. Equivalent to a saving of £5.50 on each T-shirt." Using this special offer, what is the cost of three T-shirts?',
    options: [
      { label: "A", text: "£16.50" },
      { label: "B", text: "£22" },
      { label: "C", text: "£31" },
      { label: "D", text: "£33" },
      { label: "E", text: "£49.50" },
    ],
  },
  {
    number: 21,
    statement:
      "The diagram shows a square of side $4$ cm with four identical semi-circles drawn with their centres at the mid-points of the sides. The four semi-circles each touch two other semi-circles, as shown. What is the shaded area, in cm$^2$?",
    options: [
      { label: "A", text: "$8 - \\pi$" },
      { label: "B", text: "$\\pi$" },
      { label: "C", text: "$\\pi - 2$" },
      { label: "D", text: "$\\pi - \\sqrt{2}$" },
      { label: "E", text: "$8 - 2\\pi$" },
    ],
    diagram: {
      alt: "A square of side 4 cm. Four semi-circles are drawn inward with centres at the midpoints of the four sides; each has radius equal to half the side. They overlap in the centre, and the central region bounded by the four arcs is shaded.",
      svg: paperFigure(q21svg),
    },
  },
  {
    number: 22,
    statement:
      "When a cube is cut into two pieces with a single plane cut, two polyhedra are obtained. Which of these polyhedra cannot be obtained in this way?",
    options: [
      { label: "A", text: "A polyhedron with $4$ faces" },
      { label: "B", text: "A polyhedron with $5$ faces" },
      { label: "C", text: "A polyhedron with $6$ faces" },
      { label: "D", text: "A polyhedron with $7$ faces" },
      { label: "E", text: "A polyhedron with $8$ faces" },
    ],
  },
  {
    number: 23,
    statement:
      "A circle is inscribed in a semicircle with centre $O$ and diameter $AB$. The centre of the circle is the point $P$, where $PA = PO$. What is the ratio of the radius of the circle to the radius of the semicircle?",
    options: [
      { label: "A", text: "$4 : 9$" },
      { label: "B", text: "$3 : 8$" },
      { label: "C", text: "$3 : 7$" },
      { label: "D", text: "$2 : 5$" },
      { label: "E", text: "$1 : 2$" },
    ],
    diagram: {
      alt: "A semicircle with diameter AB and centre O, sitting on the line AB. A smaller circle sits inside the semicircle, touching the diameter and the arc; its centre P lies on the left, with PA equal to PO.",
      svg: paperFigure(q23svg),
    },
  },
  {
    number: 24,
    statement:
      "The diagram shows a regular hexagon $RSTUVW$. The area of the shaded pentagon $RSTPQ$ is one quarter of the area of the hexagon. Jay and Kay walk around the hexagon from $P$ to $Q$, Jay going clockwise and Kay anticlockwise. What is the ratio of the distance Jay walks to the distance Kay walks?",
    options: [
      { label: "A", text: "$1 : 2$" },
      { label: "B", text: "$2 : 3$" },
      { label: "C", text: "$3 : 5$" },
      { label: "D", text: "$4 : 7$" },
      { label: "E", text: "$5 : 8$" },
    ],
    diagram: {
      alt: "A regular hexagon labelled R, S, T, U, V, W. Points P and Q lie inside on the upper portion; the pentagon RSTPQ is shaded and is one quarter of the hexagon's area.",
      svg: paperFigure(q24svg),
    },
  },
  {
    number: 25,
    statement:
      "A gold coin is worth $x\\%$ more than a silver coin. The silver coin is worth $y\\%$ less than the gold coin. Both $x$ and $y$ are positive integers. How many possible values for $x$ are there?",
    options: [
      { label: "A", text: "$0$" },
      { label: "B", text: "$3$" },
      { label: "C", text: "$6$" },
      { label: "D", text: "$9$" },
      { label: "E", text: "$12$" },
    ],
  },
];
