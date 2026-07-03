import type { PaperQuestion } from "@/lib/types";
import { paperFigure } from "./svg-figure";

// Figures derived from the official UKMT IMC 2016 PDF.
import q7svg from "./imc-2016/q7.svg?raw";
import q13svg from "./imc-2016/q13.svg?raw";
import q15svg from "./imc-2016/q15.svg?raw";
import q17svg from "./imc-2016/q17.svg?raw";
import q20svg from "./imc-2016/q20.svg?raw";
import q21svg from "./imc-2016/q21.svg?raw";
import q23svg from "./imc-2016/q23.svg?raw";
import q25svg from "./imc-2016/q25.svg?raw";

/**
 * Intermediate Mathematical Challenge 2016 — full transcription.
 *
 * Transcribed from the official UKMT IMC 2016 paper (Thursday 4 February 2016)
 * for in-app practice. Statements are reproduced as faithfully as possible;
 * diagrams are derived from the official PDF figures. Answer key lives in
 * `papers.ts` and was verified against the official UKMT solutions.
 *
 * © UK Mathematics Trust — questions are the intellectual property of UKMT and
 * are included here for educational practice.
 */

export const IMC_2016_QUESTIONS: PaperQuestion[] = [
  {
    number: 1,
    statement: "What is the value of $6102 - 2016$?",
    options: [
      { label: "A", text: "$3994$" },
      { label: "B", text: "$4086$" },
      { label: "C", text: "$4096$" },
      { label: "D", text: "$4114$" },
      { label: "E", text: "$4994$" },
    ],
  },
  {
    number: 2,
    statement:
      "Which of the following fractions is closest to $1$?",
    options: [
      { label: "A", text: "$\\dfrac{7}{8}$" },
      { label: "B", text: "$\\dfrac{8}{7}$" },
      { label: "C", text: "$\\dfrac{9}{10}$" },
      { label: "D", text: "$\\dfrac{10}{11}$" },
      { label: "E", text: "$\\dfrac{11}{10}$" },
    ],
  },
  {
    number: 3,
    statement:
      "How many of these five expressions give answers which are not prime numbers?\n\n$1^2 + 2^2 \\quad 2^2 + 3^2 \\quad 3^2 + 4^2 \\quad 4^2 + 5^2 \\quad 5^2 + 6^2$",
    options: [
      { label: "A", text: "$0$" },
      { label: "B", text: "$1$" },
      { label: "C", text: "$2$" },
      { label: "D", text: "$3$" },
      { label: "E", text: "$4$" },
    ],
  },
  {
    number: 4,
    statement:
      "Amrita is baking a cake today. She bakes a cake every fifth day. How many days will it be before she next bakes a cake on a Thursday?",
    options: [
      { label: "A", text: "$5$" },
      { label: "B", text: "$7$" },
      { label: "C", text: "$14$" },
      { label: "D", text: "$25$" },
      { label: "E", text: "$35$" },
    ],
  },
  {
    number: 5,
    statement:
      "When travelling from London to Edinburgh by train, you pass a sign saying 'Edinburgh $200$ miles'. Then, $3\\frac{1}{2}$ miles later, you pass another sign saying 'Half way between London and Edinburgh'. How many miles is it by train from London to Edinburgh?",
    options: [
      { label: "A", text: "$393$" },
      { label: "B", text: "$396\\frac{1}{2}$" },
      { label: "C", text: "$400$" },
      { label: "D", text: "$403\\frac{1}{2}$" },
      { label: "E", text: "$407$" },
    ],
  },
  {
    number: 6,
    statement:
      "One third of the animals in Jacob's flock are goats, the rest are sheep. There are twelve more sheep than goats. How many animals are there altogether in Jacob's flock?",
    options: [
      { label: "A", text: "$12$" },
      { label: "B", text: "$24$" },
      { label: "C", text: "$36$" },
      { label: "D", text: "$48$" },
      { label: "E", text: "$60$" },
    ],
  },
  {
    number: 7,
    statement:
      "In the diagram, what is the value of $x$?",
    options: [
      { label: "A", text: "$23$" },
      { label: "B", text: "$24$" },
      { label: "C", text: "$25$" },
      { label: "D", text: "$26$" },
      { label: "E", text: "$27$" },
    ],
    diagram: {
      alt: "Three rectangles meeting at a point with angle labels 27°, 75°, 24°, 26°, 23° and x°.",
      svg: paperFigure(q7svg),
    },
  },
  {
    number: 8,
    statement:
      "What is the value of $2.017 \\times 2016 - 10.16 \\times 201.7$?",
    options: [
      { label: "A", text: "$2.016$" },
      { label: "B", text: "$2.017$" },
      { label: "C", text: "$20.16$" },
      { label: "D", text: "$2016$" },
      { label: "E", text: "$2017$" },
    ],
  },
  {
    number: 9,
    statement:
      "The world's fastest tortoise is acknowledged to be a leopard tortoise from County Durham called Bertie. In July 2014, Bertie sprinted along a $5.5\\,\\text{m}$ long track in an astonishing $19.6$ seconds. What was Bertie's approximate average speed in km per hour?",
    options: [
      { label: "A", text: "$0.1$" },
      { label: "B", text: "$0.5$" },
      { label: "C", text: "$1$" },
      { label: "D", text: "$5$" },
      { label: "E", text: "$10$" },
    ],
  },
  {
    number: 10,
    statement:
      "The angles of a quadrilateral taken in order are $x°$, $5x°$, $2x°$ and $4x°$. Which of the following is the quadrilateral?",
    options: [
      { label: "A", text: "kite" },
      { label: "B", text: "parallelogram" },
      { label: "C", text: "rhombus" },
      { label: "D", text: "arrowhead" },
      { label: "E", text: "trapezium" },
    ],
  },
  {
    number: 11,
    statement:
      "The net shown consists of squares and equilateral triangles. The net is folded to form a rhombicuboctahedron, as shown. When the face marked $P$ is placed face down on a table, which face will be facing up?",
    options: [
      { label: "A", text: "A" },
      { label: "B", text: "B" },
      { label: "C", text: "C" },
      { label: "D", text: "D" },
      { label: "E", text: "E" },
    ],
  },
  {
    number: 12,
    statement:
      "The sum of two numbers $a$ and $b$ is $7$ and the difference between them is $2$. What is the value of $a \\times b$?",
    options: [
      { label: "A", text: "$8\\frac{1}{4}$" },
      { label: "B", text: "$9\\frac{1}{4}$" },
      { label: "C", text: "$10\\frac{1}{4}$" },
      { label: "D", text: "$11\\frac{1}{4}$" },
      { label: "E", text: "$12\\frac{1}{4}$" },
    ],
  },
  {
    number: 13,
    statement:
      "The diagram shows a heptagon with a line of three circles on each side. Each circle is to contain exactly one number. The numbers $8$ to $14$ are distributed as shown and the numbers $1$ to $7$ are to be distributed to the remaining circles. The total of the numbers in each of the lines of three circles is to be the same. What is this total?",
    options: [
      { label: "A", text: "$18$" },
      { label: "B", text: "$19$" },
      { label: "C", text: "$20$" },
      { label: "D", text: "$21$" },
      { label: "E", text: "$22$" },
    ],
    diagram: {
      alt: "A heptagon with circles on each vertex and midpoint of each side, showing the numbers 8 to 14 placed in some circles.",
      svg: paperFigure(q13svg),
    },
  },
  {
    number: 14,
    statement:
      "Tegwen has the same number of brothers as she has sisters. Each one of her brothers has $50\\%$ more sisters than brothers. How many children are in Tegwen's family?",
    options: [
      { label: "A", text: "$5$" },
      { label: "B", text: "$7$" },
      { label: "C", text: "$9$" },
      { label: "D", text: "$11$" },
      { label: "E", text: "$13$" },
    ],
  },
  {
    number: 15,
    statement:
      "The circle has radius $1\\,\\text{cm}$. Two vertices of the square lie on the circle. One edge of the square goes through the centre of the circle, as shown. What is the area of the square?",
    options: [
      { label: "A", text: "$\\dfrac{4}{5}\\,\\text{cm}^2$" },
      { label: "B", text: "$\\dfrac{\\pi}{5}\\,\\text{cm}^2$" },
      { label: "C", text: "$1\\,\\text{cm}^2$" },
      { label: "D", text: "$\\dfrac{\\pi}{4}\\,\\text{cm}^2$" },
      { label: "E", text: "$\\dfrac{5}{4}\\,\\text{cm}^2$" },
    ],
    diagram: {
      alt: "A circle of radius 1 cm with a square whose top edge passes through the centre and whose two top vertices lie on the circle.",
      svg: paperFigure(q15svg),
    },
  },
  {
    number: 16,
    statement:
      "How many of the following positive integers are divisible by $24$?\n\n$2^2 \\times 3^2 \\times 5^2 \\times 7^3 \\quad 2^2 \\times 3^2 \\times 5^3 \\times 7^2 \\quad 2^2 \\times 3^3 \\times 5^2 \\times 7^2 \\quad 2^3 \\times 3^2 \\times 5^2 \\times 7^2$",
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
    statement:
      "The shaded region in the diagram, bounded by two concentric circles, is called an annulus. The circles have radii $2\\,\\text{cm}$ and $14\\,\\text{cm}$. The dashed circle divides the area of this annulus into two equal areas. What is its radius?",
    options: [
      { label: "A", text: "$9\\,\\text{cm}$" },
      { label: "B", text: "$10\\,\\text{cm}$" },
      { label: "C", text: "$11\\,\\text{cm}$" },
      { label: "D", text: "$12\\,\\text{cm}$" },
      { label: "E", text: "$13\\,\\text{cm}$" },
    ],
    diagram: {
      alt: "An annulus formed by two concentric circles of radii 2 cm and 14 cm, with a dashed circle between them dividing the annulus into two equal areas.",
      svg: paperFigure(q17svg),
    },
  },
  {
    number: 18,
    statement:
      "The sum of the areas of the squares on the sides of a right-angled isosceles triangle is $72\\,\\text{cm}^2$. What is the area of the triangle?",
    options: [
      { label: "A", text: "$6\\,\\text{cm}^2$" },
      { label: "B", text: "$8\\,\\text{cm}^2$" },
      { label: "C", text: "$9\\,\\text{cm}^2$" },
      { label: "D", text: "$12\\,\\text{cm}^2$" },
      { label: "E", text: "$18\\,\\text{cm}^2$" },
    ],
  },
  {
    number: 19,
    statement:
      "A list of positive integers has a median of $8$, a mode of $9$ and a mean of $10$. What is the smallest possible number of integers in the list?",
    options: [
      { label: "A", text: "$5$" },
      { label: "B", text: "$6$" },
      { label: "C", text: "$7$" },
      { label: "D", text: "$8$" },
      { label: "E", text: "$9$" },
    ],
  },
  {
    number: 20,
    statement:
      "Two semicircles are drawn in a rectangle as shown. What is the width of the overlap of the two semicircles?",
    options: [
      { label: "A", text: "$3\\,\\text{cm}$" },
      { label: "B", text: "$4\\,\\text{cm}$" },
      { label: "C", text: "$5\\,\\text{cm}$" },
      { label: "D", text: "$6\\,\\text{cm}$" },
      { label: "E", text: "$7\\,\\text{cm}$" },
    ],
    diagram: {
      alt: "A rectangle measuring 10 cm by 8 cm with two overlapping semicircles drawn inside it. A question mark labels the width of the overlap region.",
      svg: paperFigure(q20svg),
    },
  },
  {
    number: 21,
    statement:
      "The diagram shows a regular octagon. What is the ratio of the area of the shaded trapezium to the area of the whole octagon?",
    options: [
      { label: "A", text: "$1:4$" },
      { label: "B", text: "$5:16$" },
      { label: "C", text: "$1:3$" },
      { label: "D", text: "$\\sqrt{2}:2$" },
      { label: "E", text: "$3:8$" },
    ],
    diagram: {
      alt: "A regular octagon with a shaded trapezium formed by one side of the octagon and a diagonal.",
      svg: paperFigure(q21svg),
    },
  },
  {
    number: 22,
    statement:
      "In a particular group of people, some always tell the truth, the rest always lie. There are $2016$ people sitting in a circle. Each person in the group says, \"Both the person on my left and the person on my right are liars.\" What is the difference between the largest and smallest number of people who could be telling the truth?",
    options: [
      { label: "A", text: "$0$" },
      { label: "B", text: "$72$" },
      { label: "C", text: "$126$" },
      { label: "D", text: "$288$" },
      { label: "E", text: "$336$" },
    ],
  },
  {
    number: 23,
    statement:
      "A Saxon silver penny, from the reign of Ethelbert II in the eighth century, was sold in 2014 for \\pounds$78\\,000$. A design on the coin depicts a circle surrounded by four equal arcs, each a quarter of a circle, as shown. The width of the design is $2\\,\\text{cm}$. What is the radius of the small circle, in centimetres?",
    options: [
      { label: "A", text: "$\\dfrac{1}{2}$" },
      { label: "B", text: "$2 - \\sqrt{2}$" },
      { label: "C", text: "$\\dfrac{1}{2}\\sqrt{2}$" },
      { label: "D", text: "$5 - 3\\sqrt{2}$" },
      { label: "E", text: "$2\\sqrt{2} - 2$" },
    ],
    diagram: {
      alt: "A coin design showing a small circle surrounded by four equal quarter-circle arcs forming a symmetric pattern, with the total width labelled as 2 cm.",
      svg: paperFigure(q23svg),
    },
  },
  {
    number: 24,
    statement:
      "Every day, Aimee goes up an escalator on her journey to work. If she stands still, it takes her $60$ seconds to travel from the bottom to the top. One day the escalator was broken so she had to walk up it. This took her $90$ seconds. How many seconds would it take her to travel up the escalator if she walked up at the same speed as before while it was working?",
    options: [
      { label: "A", text: "$30$" },
      { label: "B", text: "$32$" },
      { label: "C", text: "$36$" },
      { label: "D", text: "$45$" },
      { label: "E", text: "$75$" },
    ],
  },
  {
    number: 25,
    statement:
      "The tiling pattern shown uses two types of tile, regular hexagons and equilateral triangles, with the length of each side of the equilateral triangles equal to half the length of each side of the hexagons. A large number of tiles is used to cover a floor. Which of the following is closest to the fraction of the floor that is shaded black?",
    options: [
      { label: "A", text: "$\\dfrac{1}{8}$" },
      { label: "B", text: "$\\dfrac{1}{10}$" },
      { label: "C", text: "$\\dfrac{1}{12}$" },
      { label: "D", text: "$\\dfrac{1}{13}$" },
      { label: "E", text: "$\\dfrac{1}{16}$" },
    ],
    diagram: {
      alt: "A tiling pattern made of regular hexagons and equilateral triangles, where the triangle side length is half the hexagon side length. Some tiles are shaded black.",
      svg: paperFigure(q25svg),
    },
  },
];
