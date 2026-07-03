import type { PaperQuestion } from "@/lib/types";
import { paperFigure } from "./svg-figure";

// Figures derived from the official UKMT IMC 2020 PDF: the pdf2svg traces have
// been flattened to plain display coordinates with real <text> labels (see
// svg-figure.ts), matching the IMC 2021/2022/2023/2024 treatment.
import q4svg from "./imc-2020/q4.svg?raw";
import q7svg from "./imc-2020/q7.svg?raw";
import q11svg from "./imc-2020/q11.svg?raw";
import q15svg from "./imc-2020/q15.svg?raw";
import q18svg from "./imc-2020/q18.svg?raw";
import q19svg from "./imc-2020/q19.svg?raw";
import q21svg from "./imc-2020/q21.svg?raw";
import q22svg from "./imc-2020/q22.svg?raw";
import q23svg from "./imc-2020/q23.svg?raw";
import q25svg from "./imc-2020/q25.svg?raw";

/**
 * Intermediate Mathematical Challenge 2020 — full transcription.
 *
 * Transcribed from the official UKMT IMC 2020 paper (Thursday 6 February 2020)
 * for in-app practice. Statements are reproduced as faithfully as possible;
 * diagrams are derived from the official PDF figures. Answer key lives in
 * `papers.ts` and was verified against the official UKMT solutions.
 *
 * © UK Mathematics Trust — questions are the intellectual property of UKMT and
 * are included here for educational practice.
 */

export const IMC_2020_QUESTIONS: PaperQuestion[] = [
  {
    number: 1,
    statement: "What is the value of $2 - (3 - 4) - (5 - 6 - 7)$?",
    options: [
      { label: "A", text: "$11$" },
      { label: "B", text: "$9$" },
      { label: "C", text: "$5$" },
      { label: "D", text: "$-5$" },
      { label: "E", text: "$-7$" },
    ],
  },
  {
    number: 2,
    statement: "Which one of these is a multiple of $24$?",
    options: [
      { label: "A", text: "$200$" },
      { label: "B", text: "$300$" },
      { label: "C", text: "$400$" },
      { label: "D", text: "$500$" },
      { label: "E", text: "$600$" },
    ],
  },
  {
    number: 3,
    statement:
      "What is the difference between $25\\%$ of £$37$ and $25\\%$ of £$17$?",
    options: [
      { label: "A", text: "£$4.25$" },
      { label: "B", text: "£$5$" },
      { label: "C", text: "£$6$" },
      { label: "D", text: "£$7.50$" },
      { label: "E", text: "£$9.25$" },
    ],
  },
  {
    number: 4,
    statement: "What fraction of this diagram is shaded?",
    options: [
      { label: "A", text: "$\\dfrac{13}{32}$" },
      { label: "B", text: "$\\dfrac{1}{2}$" },
      { label: "C", text: "$\\dfrac{9}{16}$" },
      { label: "D", text: "$\\dfrac{5}{8}$" },
      { label: "E", text: "$\\dfrac{13}{16}$" },
    ],
    diagram: {
      alt: "A square divided into a 4 by 4 grid, with both main diagonals drawn. Several of the resulting triangular and square regions are shaded grey.",
      svg: paperFigure(q4svg),
    },
  },
  {
    number: 5,
    statement:
      "Four of the following coordinate pairs are the corners of a square. Which is the odd one out?",
    options: [
      { label: "A", text: "$(4, 1)$" },
      { label: "B", text: "$(2, 4)$" },
      { label: "C", text: "$(5, 6)$" },
      { label: "D", text: "$(3, 5)$" },
      { label: "E", text: "$(7, 3)$" },
    ],
  },
  {
    number: 6,
    statement: "Which of the following has the largest value?",
    options: [
      { label: "A", text: "$2^6$" },
      { label: "B", text: "$3^5$" },
      { label: "C", text: "$4^4$" },
      { label: "D", text: "$5^3$" },
      { label: "E", text: "$6^2$" },
    ],
  },
  {
    number: 7,
    statement:
      "Kartik wants to shade three of the squares in this grid blue and Lucy wants to shade the remaining two squares red. There are ten possible finished grids. In how many of the finished grids are Lucy's red squares next to each other?",
    options: [
      { label: "A", text: "$3$" },
      { label: "B", text: "$4$" },
      { label: "C", text: "$5$" },
      { label: "D", text: "$6$" },
      { label: "E", text: "$8$" },
    ],
    diagram: {
      alt: "A horizontal row of five equal square cells.",
      svg: paperFigure(q7svg),
    },
  },
  {
    number: 8,
    statement:
      "One of these options gives the value of $17^2 + 19^2 + 23^2 + 29^2$. Which is it?",
    options: [
      { label: "A", text: "$2004$" },
      { label: "B", text: "$2008$" },
      { label: "C", text: "$2012$" },
      { label: "D", text: "$2016$" },
      { label: "E", text: "$2020$" },
    ],
  },
  {
    number: 9,
    statement:
      "Adam's house number is in exactly one of the following ranges. Which one?",
    options: [
      { label: "A", text: "$123$ to $213$" },
      { label: "B", text: "$132$ to $231$" },
      { label: "C", text: "$123$ to $312$" },
      { label: "D", text: "$231$ to $312$" },
      { label: "E", text: "$312$ to $321$" },
    ],
  },
  {
    number: 10,
    statement:
      "What is the value of $\\dfrac{2468 \\times 2468}{2468 + 2468}$?",
    options: [
      { label: "A", text: "$2$" },
      { label: "B", text: "$1234$" },
      { label: "C", text: "$2468$" },
      { label: "D", text: "$4936$" },
      { label: "E", text: "$6\\,091\\,024$" },
    ],
  },
  {
    number: 11,
    statement:
      'I start at square "1", and have to finish at square "7", moving at each step to a higher numbered adjacent square. How many possible routes are there?',
    options: [
      { label: "A", text: "$7$" },
      { label: "B", text: "$9$" },
      { label: "C", text: "$10$" },
      { label: "D", text: "$11$" },
      { label: "E", text: "$13$" },
    ],
    diagram: {
      alt: "Two rows of cells. The bottom row reads 1, 3, 5, 7; the top row reads 2, 4, 6, offset so each top cell sits above the gap between bottom cells. Adjacent cells (sharing an edge) are connected.",
      svg: paperFigure(q11svg),
    },
  },
  {
    number: 12,
    statement:
      'Farmer Fatima rears chickens and goats. Today she returned from market and said, "I sold $80$ animals, and now there are $200$ fewer legs on my farm than before!" How many goats did she sell?',
    options: [
      { label: "A", text: "$15$" },
      { label: "B", text: "$20$" },
      { label: "C", text: "$25$" },
      { label: "D", text: "$30$" },
      { label: "E", text: "$35$" },
    ],
  },
  {
    number: 13,
    statement: "What is half of $1.6 \\times 10^6$?",
    options: [
      { label: "A", text: "$8 \\times 5^6$" },
      { label: "B", text: "$4 \\times 10^6$" },
      { label: "C", text: "$8 \\times 10^5$" },
      { label: "D", text: "$8 \\times 10^2$" },
      { label: "E", text: "$1.6 \\times 10^3$" },
    ],
  },
  {
    number: 14,
    statement:
      "The result of the calculation $9 \\times 11 \\times 13 \\times 15 \\times 17$ is the six-digit number '$3n8185$'. What is the value of $n$?",
    options: [
      { label: "A", text: "$2$" },
      { label: "B", text: "$4$" },
      { label: "C", text: "$6$" },
      { label: "D", text: "$8$" },
      { label: "E", text: "$0$" },
    ],
  },
  {
    number: 15,
    statement:
      "Triangle $PQR$ has been divided into twenty-five congruent right-angled triangles, as shown. The length of $RP$ is $2.4$ cm. What is the length of $PQ$?",
    options: [
      { label: "A", text: "$3$ cm" },
      { label: "B", text: "$3.2$ cm" },
      { label: "C", text: "$3.6$ cm" },
      { label: "D", text: "$4$ cm" },
      { label: "E", text: "$4.8$ cm" },
    ],
    diagram: {
      alt: "Triangle PQR with P at the bottom-left, Q at the bottom-right and R at the top, divided into twenty-five congruent right-angled triangles arranged in a stepped pattern.",
      svg: paperFigure(q15svg),
    },
  },
  {
    number: 16,
    statement:
      "As a decimal, what is the value of $\\dfrac{1}{9} + \\dfrac{1}{11}$?",
    options: [
      { label: "A", text: "$0.10$" },
      { label: "B", text: "$0.20$" },
      { label: "C", text: "$0.2020$" },
      { label: "D", text: "$0.202020$" },
      { label: "E", text: "$0.\\dot{2}\\dot{0}$" },
    ],
  },
  {
    number: 17,
    statement:
      "The Knave of Hearts stole some tarts. He ate half of them, and half a tart more. The Knave of Diamonds ate half of what was left, and half a tart more. Then the Knave of Clubs ate half of what remained, and half a tart more. This left just one tart for the Knave of Spades. How many tarts did the Knave of Hearts steal?",
    options: [
      { label: "A", text: "$63$" },
      { label: "B", text: "$31$" },
      { label: "C", text: "$19$" },
      { label: "D", text: "$17$" },
      { label: "E", text: "$15$" },
    ],
  },
  {
    number: 18,
    statement:
      "The diagram shows an isosceles right-angled triangle which has a hypotenuse of length $y$. The interior of the triangle is split up into identical squares and congruent isosceles right-angled triangles. What is the total shaded area inside the triangle?",
    options: [
      { label: "A", text: "$\\dfrac{y^2}{2}$" },
      { label: "B", text: "$\\dfrac{y^2}{4}$" },
      { label: "C", text: "$\\dfrac{y^2}{8}$" },
      { label: "D", text: "$\\dfrac{y^2}{16}$" },
      { label: "E", text: "$\\dfrac{y^2}{32}$" },
    ],
    diagram: {
      alt: "An isosceles right-angled triangle (right angle at bottom-left) subdivided into small identical squares and congruent small right-angled triangles; several of the squares are shaded grey.",
      svg: paperFigure(q18svg),
    },
  },
  {
    number: 19,
    statement:
      "The diagram shows two squares and four equal semicircles. The edges of the outer square have length $48$ and the inner square joins the midpoints of the edges of the outer square. Each semicircle touches two edges of the outer square, and the diameter of each semicircle lies along an edge of the inner square. What is the radius of each semicircle?",
    options: [
      { label: "A", text: "$10$" },
      { label: "B", text: "$12$" },
      { label: "C", text: "$14$" },
      { label: "D", text: "$16$" },
      { label: "E", text: "$18$" },
    ],
    diagram: {
      alt: "An outer square of side 48 with an inner square joining the midpoints of its edges (a tilted square). Four equal semicircles have their diameters on the inner square's edges and bulge outward, each touching two edges of the outer square.",
      svg: paperFigure(q19svg),
    },
  },
  {
    number: 20,
    statement:
      "For any fixed value of $x$, which of the following four expressions has the largest value?",
    options: [
      { label: "A", text: "$(x + 1)(x - 1)$" },
      { label: "B", text: "$\\left(x + \\tfrac{1}{2}\\right)\\left(x - \\tfrac{1}{2}\\right)$" },
      { label: "C", text: "$\\left(x + \\tfrac{1}{3}\\right)\\left(x - \\tfrac{1}{3}\\right)$" },
      { label: "D", text: "$\\left(x + \\tfrac{1}{4}\\right)\\left(x - \\tfrac{1}{4}\\right)$" },
      { label: "E", text: "it depends on the value of $x$" },
    ],
  },
  {
    number: 21,
    statement:
      "The diagram shows four semicircles, one with radius $2$ cm, touching the other three, which have radius $1$ cm. What is the total area, in cm$^2$, of the shaded regions?",
    options: [
      { label: "A", text: "$1$" },
      { label: "B", text: "$\\pi - 2$" },
      { label: "C", text: "$2\\pi - 5$" },
      { label: "D", text: "$\\dfrac{3}{2}$" },
      { label: "E", text: "$\\dfrac{1}{2}\\pi$" },
    ],
    diagram: {
      alt: "A large semicircle of radius 2 sits on a horizontal line. Two small semicircles of radius 1 sit on the same line inside it, and a third small semicircle of radius 1 sits on the chord joining their tops. The two regions between the large arc and the small semicircles are shaded.",
      svg: paperFigure(q21svg),
    },
  },
  {
    number: 22,
    statement:
      "The diagram shows a regular pentagon and an irregular quadrilateral. What is the sum of the three marked angles?",
    options: [
      { label: "A", text: "$72°$" },
      { label: "B", text: "$90°$" },
      { label: "C", text: "$108°$" },
      { label: "D", text: "$126°$" },
      { label: "E", text: "$144°$" },
    ],
    diagram: {
      alt: "A regular pentagon with an irregular quadrilateral overlapping it on the right. Three angles of the figure are marked with shaded sectors.",
      svg: paperFigure(q22svg),
    },
  },
  {
    number: 23,
    statement:
      "Five congruent triangles, each of which is half a square, are placed together edge to edge in three different ways as shown to form shapes P, Q and R. Which of the following lists gives the shapes in ascending order of the lengths of their perimeters?",
    options: [
      { label: "A", text: "P, Q, R" },
      { label: "B", text: "Q, P, R" },
      { label: "C", text: "R, Q, P" },
      { label: "D", text: "R, P, Q" },
      { label: "E", text: "P, R, Q" },
    ],
    diagram: {
      alt: "Three composite shapes labelled P, Q and R, each made from five congruent right-angled triangles (each half a square) arranged edge to edge in a different configuration.",
      svg: paperFigure(q23svg),
    },
  },
  {
    number: 24,
    statement:
      "The positive integers $m$ and $n$ are such that $10 \\times 2^m = 2^n + 2^{n+2}$. What is the difference between $m$ and $n$?",
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
      "The diagram shows six points $P$, $Q$, $R$, $S$, $T$ and $U$ equally spaced around a circle of radius $2$ cm. The inner circle has radius $1$ cm. The shaded region has three lines of symmetry. Which of the following gives the area, in cm$^2$, of the shaded region?",
    options: [
      { label: "A", text: "$2\\pi + 3$" },
      { label: "B", text: "$3\\pi + 2$" },
      { label: "C", text: "$\\dfrac{4\\pi + 3}{2}$" },
      { label: "D", text: "$3(\\pi + 2)$" },
      { label: "E", text: "$4\\pi + 3$" },
    ],
    diagram: {
      alt: "Six points P, Q, R, S, T, U equally spaced around an outer circle of radius 2, with a dashed inner circle of radius 1. A three-bladed pinwheel region with three lines of symmetry is shaded.",
      svg: paperFigure(q25svg),
    },
  },
];
