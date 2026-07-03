import type { PaperQuestion } from "@/lib/types";
import { paperFigure } from "./svg-figure";

// Figures derived from the official UKMT IMC 2018 PDF: the pdf2svg traces have
// been flattened to plain display coordinates with real <text> labels (see
// svg-figure.ts), matching the IMC 2019–2024 treatment.
import q4svg from "./imc-2018/q4.svg?raw";
import q8svg from "./imc-2018/q8.svg?raw";
import q11svg from "./imc-2018/q11.svg?raw";
import q12svg from "./imc-2018/q12.svg?raw";
import q13svg from "./imc-2018/q13.svg?raw";
import q16svg from "./imc-2018/q16.svg?raw";
import q18svg from "./imc-2018/q18.svg?raw";
import q19svg from "./imc-2018/q19.svg?raw";
import q22svg from "./imc-2018/q22.svg?raw";
import q23svg from "./imc-2018/q23.svg?raw";
import q25svg from "./imc-2018/q25.svg?raw";

/**
 * Intermediate Mathematical Challenge 2018 — full transcription.
 *
 * Transcribed from the official UKMT IMC 2018 paper (Thursday 1 February 2018)
 * for in-app practice. Statements are reproduced as faithfully as possible;
 * diagrams are derived from the official PDF figures. Answer key lives in
 * `papers.ts` and was verified against the official UKMT solutions.
 *
 * © UK Mathematics Trust — questions are the intellectual property of UKMT and
 * are included here for educational practice.
 */

export const IMC_2018_QUESTIONS: PaperQuestion[] = [
  {
    number: 1,
    statement:
      "Which of these is the sum of the cubes of two consecutive integers?",
    options: [
      { label: "A", text: "$4$" },
      { label: "B", text: "$9$" },
      { label: "C", text: "$16$" },
      { label: "D", text: "$25$" },
      { label: "E", text: "$36$" },
    ],
  },
  {
    number: 2,
    statement:
      "How many of these four integers are prime?\n\n$1, \\quad 11, \\quad 111, \\quad 1111$",
    options: [
      { label: "A", text: "$0$" },
      { label: "B", text: "$1$" },
      { label: "C", text: "$2$" },
      { label: "D", text: "$3$" },
      { label: "E", text: "$4$" },
    ],
  },
  {
    number: 3,
    statement:
      "In September 2016 a polymer £5 note was introduced. The Bank of England issued $440$ million of them. What is the total face value of all these notes?",
    options: [
      { label: "A", text: "$\\text{£}220\\,000\\,000$" },
      { label: "B", text: "$\\text{£}440\\,000\\,000$" },
      { label: "C", text: "$\\text{£}2\\,200\\,000\\,000$" },
      { label: "D", text: "$\\text{£}4\\,400\\,000\\,000$" },
      { label: "E", text: "$\\text{£}22\\,000\\,000\\,000$" },
    ],
  },
  {
    number: 4,
    statement:
      "A kite is made by joining two congruent isosceles triangles, as shown. What is the value of $x$?",
    options: [
      { label: "A", text: "$36$" },
      { label: "B", text: "$54$" },
      { label: "C", text: "$60$" },
      { label: "D", text: "$72$" },
      { label: "E", text: "$80$" },
    ],
    diagram: {
      alt: "A kite formed by two congruent isosceles triangles, with angles labelled x degrees.",
      svg: paperFigure(q4svg),
    },
  },
  {
    number: 5,
    statement:
      "The adult human body has $206$ bones. Each foot has $26$ bones. Approximately what fraction of the number of bones in the human body is found in one foot?",
    options: [
      { label: "A", text: "$\\dfrac{1}{6}$" },
      { label: "B", text: "$\\dfrac{1}{8}$" },
      { label: "C", text: "$\\dfrac{1}{10}$" },
      { label: "D", text: "$\\dfrac{1}{12}$" },
      { label: "E", text: "$\\dfrac{1}{20}$" },
    ],
  },
  {
    number: 6,
    statement:
      "In 2014, in Boston, Massachusetts, Eli Bishop set a world record for the greatest number of claps per minute. He achieved $1020$ claps in one minute. How many claps is that per second?",
    options: [
      { label: "A", text: "$17$" },
      { label: "B", text: "$16.5$" },
      { label: "C", text: "$16$" },
      { label: "D", text: "$15.5$" },
      { label: "E", text: "$15$" },
    ],
  },
  {
    number: 7,
    statement:
      "How many two-digit squares have the property that the product of their digits is also a square?",
    options: [
      { label: "A", text: "$0$" },
      { label: "B", text: "$1$" },
      { label: "C", text: "$2$" },
      { label: "D", text: "$3$" },
      { label: "E", text: "$4$" },
    ],
  },
  {
    number: 8,
    statement:
      "The diagram shows a square of perimeter $20\\text{ cm}$ inscribed inside a square of perimeter $28\\text{ cm}$. What is the area of the shaded triangle?",
    options: [
      { label: "A", text: "$6\\text{ cm}^2$" },
      { label: "B", text: "$7\\text{ cm}^2$" },
      { label: "C", text: "$8\\text{ cm}^2$" },
      { label: "D", text: "$9\\text{ cm}^2$" },
      { label: "E", text: "$10\\text{ cm}^2$" },
    ],
    diagram: {
      alt: "A square of perimeter 20 cm inscribed inside a square of perimeter 28 cm, with a shaded corner triangle.",
      svg: paperFigure(q8svg),
    },
  },
  {
    number: 9,
    statement:
      "Which integer $n$ satisfies $\\dfrac{3}{10} < \\dfrac{n}{20} < \\dfrac{2}{5}$?",
    options: [
      { label: "A", text: "$3$" },
      { label: "B", text: "$4$" },
      { label: "C", text: "$5$" },
      { label: "D", text: "$6$" },
      { label: "E", text: "$7$" },
    ],
  },
  {
    number: 10,
    statement:
      "Which of these integers cannot be expressed as the difference of two squares?",
    options: [
      { label: "A", text: "$5$" },
      { label: "B", text: "$7$" },
      { label: "C", text: "$8$" },
      { label: "D", text: "$9$" },
      { label: "E", text: "$10$" },
    ],
  },
  {
    number: 11,
    statement:
      "The diagram shows a regular hexagon which has been divided into six regions by three of its diagonals. Two of these regions have been shaded. The total shaded area is $20\\text{ cm}^2$. What is the area of the hexagon?",
    options: [
      { label: "A", text: "$40\\text{ cm}^2$" },
      { label: "B", text: "$48\\text{ cm}^2$" },
      { label: "C", text: "$52\\text{ cm}^2$" },
      { label: "D", text: "$54\\text{ cm}^2$" },
      { label: "E", text: "$60\\text{ cm}^2$" },
    ],
    diagram: {
      alt: "A regular hexagon divided into six regions by three of its diagonals, with two of the regions shaded.",
      svg: paperFigure(q11svg),
    },
  },
  {
    number: 12,
    statement:
      "Someone has switched the numbers around on Harry's calculator! The numbers should be in the positions shown in the left-hand diagram, but have been switched to the positions in the right-hand diagram. Which of the following calculations will not give the correct answer when he uses his calculator?",
    options: [
      { label: "A", text: "$79 \\times 97$" },
      { label: "B", text: "$78 \\times 98$" },
      { label: "C", text: "$147 \\times 369$" },
      { label: "D", text: "$123 \\times 321$" },
      { label: "E", text: "$159 \\times 951$" },
    ],
    diagram: {
      alt: "Two calculator keypads side by side: the left shows the standard layout, the right shows the switched layout.",
      svg: paperFigure(q12svg),
    },
  },
  {
    number: 13,
    statement:
      "The diagram shows a rhombus and two sizes of regular hexagon. What is the ratio of the area of the smaller hexagon to the area of the larger hexagon?",
    options: [
      { label: "A", text: "$1:2$" },
      { label: "B", text: "$1:3$" },
      { label: "C", text: "$1:4$" },
      { label: "D", text: "$1:8$" },
      { label: "E", text: "$1:9$" },
    ],
    diagram: {
      alt: "A rhombus with a smaller regular hexagon and a larger regular hexagon illustrating their area ratio.",
      svg: paperFigure(q13svg),
    },
  },
  {
    number: 14,
    statement:
      "Which of these is equal to $\\dfrac{10}{9} + \\dfrac{9}{10}$?",
    options: [
      { label: "A", text: "$1$" },
      { label: "B", text: "$2$" },
      { label: "C", text: "$2.0\\dot{1}$" },
      { label: "D", text: "$2.\\dot{1}$" },
      { label: "E", text: "$2.\\dot{2}$" },
    ],
  },
  {
    number: 15,
    statement:
      "How many of these four shapes could be the shape of the region where two triangles overlap?\n\nequilateral triangle, square, regular pentagon, regular hexagon",
    options: [
      { label: "A", text: "$0$" },
      { label: "B", text: "$1$" },
      { label: "C", text: "$2$" },
      { label: "D", text: "$3$" },
      { label: "E", text: "$4$" },
    ],
  },
  {
    number: 16,
    statement:
      "The diagram shows a triangle with edges of length $3$, $4$ and $6$. A circle of radius $1$ is drawn at each vertex of the triangle. What is the total shaded area?",
    options: [
      { label: "A", text: "$2\\pi$" },
      { label: "B", text: "$\\dfrac{9\\pi}{4}$" },
      { label: "C", text: "$\\dfrac{5\\pi}{2}$" },
      { label: "D", text: "$\\dfrac{11\\pi}{4}$" },
      { label: "E", text: "$3\\pi$" },
    ],
    diagram: {
      alt: "A triangle with sides of length 3, 4 and 6. A circle of radius 1 is drawn at each vertex, with the parts inside the triangle shaded.",
      svg: paperFigure(q16svg),
    },
  },
  {
    number: 17,
    statement:
      "How many three-digit numbers are increased by $99$ when their digits are reversed?",
    options: [
      { label: "A", text: "$4$" },
      { label: "B", text: "$8$" },
      { label: "C", text: "$10$" },
      { label: "D", text: "$80$" },
      { label: "E", text: "$90$" },
    ],
  },
  {
    number: 18,
    statement:
      "The diagram shows a regular pentagon and an equilateral triangle placed inside a square. What is the value of $x$?",
    options: [
      { label: "A", text: "$24$" },
      { label: "B", text: "$26$" },
      { label: "C", text: "$28$" },
      { label: "D", text: "$30$" },
      { label: "E", text: "$32$" },
    ],
    diagram: {
      alt: "A square containing a regular pentagon and an equilateral triangle, with an angle labelled x degrees.",
      svg: paperFigure(q18svg),
    },
  },
  {
    number: 19,
    statement:
      "The three rectangles shown below all have the same area. What is the value of $x + y$?",
    options: [
      { label: "A", text: "$4$" },
      { label: "B", text: "$6$" },
      { label: "C", text: "$8$" },
      { label: "D", text: "$10$" },
      { label: "E", text: "$12$" },
    ],
    diagram: {
      alt: "Three rectangles with dimensions x by y, (x+4) by (y-3), and (x+8) by (y-4), all having the same area.",
      svg: paperFigure(q19svg),
    },
  },
  {
    number: 20,
    statement:
      "A particular integer is the smallest multiple of $72$, each of whose digits is either $0$ or $1$. How many digits does this integer have?",
    options: [
      { label: "A", text: "$4$" },
      { label: "B", text: "$6$" },
      { label: "C", text: "$8$" },
      { label: "D", text: "$10$" },
      { label: "E", text: "$12$" },
    ],
  },
  {
    number: 21,
    statement:
      "For certain values of $x$, the list $x$, $x + 6$ and $x^2$ contains just two different numbers. How many such values of $x$ are there?",
    options: [
      { label: "A", text: "$1$" },
      { label: "B", text: "$2$" },
      { label: "C", text: "$3$" },
      { label: "D", text: "$4$" },
      { label: "E", text: "$5$" },
    ],
  },
  {
    number: 22,
    statement:
      "Three squares, with side-lengths $2$, are placed together edge-to-edge to make an L-shape. The L-shape is placed inside a rectangle so that all five vertices of the L-shape lie on the rectangle, one of them at the midpoint of an edge, as shown. What is the area of the rectangle?",
    options: [
      { label: "A", text: "$16$" },
      { label: "B", text: "$18$" },
      { label: "C", text: "$20$" },
      { label: "D", text: "$22$" },
      { label: "E", text: "$24$" },
    ],
    diagram: {
      alt: "An L-shape made from three squares of side 2 placed inside a rectangle, with all five vertices of the L-shape touching the rectangle and one at the midpoint of an edge.",
      svg: paperFigure(q22svg),
    },
  },
  {
    number: 23,
    statement:
      "The diagram shows a hexagon. All the interior angles of the hexagon are $120°$. The lengths of some of the sides are indicated. What is the area of the hexagon?",
    options: [
      { label: "A", text: "$20\\sqrt{3}$" },
      { label: "B", text: "$21\\sqrt{3}$" },
      { label: "C", text: "$22\\sqrt{3}$" },
      { label: "D", text: "$23\\sqrt{3}$" },
      { label: "E", text: "$24\\sqrt{3}$" },
    ],
    diagram: {
      alt: "A hexagon with all interior angles 120 degrees and side lengths labelled 1, 2, 3, 4, and 8.",
      svg: paperFigure(q23svg),
    },
  },
  {
    number: 24,
    statement:
      "A list of $5$ positive integers has mean $5$, mode $5$, median $5$ and range $5$. How many such lists are there?",
    options: [
      { label: "A", text: "$1$" },
      { label: "B", text: "$2$" },
      { label: "C", text: "$3$" },
      { label: "D", text: "$4$" },
      { label: "E", text: "$5$" },
    ],
  },
  {
    number: 25,
    statement:
      "The diagram shows two equilateral triangles. The distance from each point of the smaller triangle to the nearest point of the larger triangle is $\\sqrt{3}$, as shown. What is the difference between the lengths of the edges of the two triangles?",
    options: [
      { label: "A", text: "$2\\sqrt{3}$" },
      { label: "B", text: "$4\\frac{1}{2}$" },
      { label: "C", text: "$3\\sqrt{3}$" },
      { label: "D", text: "$6$" },
      { label: "E", text: "$4\\sqrt{3}$" },
    ],
    diagram: {
      alt: "Two equilateral triangles, one inside the other, with the distance from each vertex of the smaller triangle to the nearest side of the larger triangle labelled as the square root of 3.",
      svg: paperFigure(q25svg),
    },
  },
];
