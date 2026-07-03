import type { PaperQuestion } from "@/lib/types";
import { paperFigure } from "./svg-figure";

// Figures derived from the official UKMT IMC 2021 PDF: the pdf2svg traces have
// been flattened to plain display coordinates with real <text> labels (see
// svg-figure.ts), matching the IMC 2022/2023/2024 treatment.
import q4svg from "./imc-2021/q4.svg?raw";
import q8svg from "./imc-2021/q8.svg?raw";
import q14svg from "./imc-2021/q14.svg?raw";
import q16svg from "./imc-2021/q16.svg?raw";
import q19svg from "./imc-2021/q19.svg?raw";
import q21svg from "./imc-2021/q21.svg?raw";
import q23svg from "./imc-2021/q23.svg?raw";

/**
 * Intermediate Mathematical Challenge 2021 — full transcription.
 *
 * Transcribed from the official UKMT IMC 2021 paper (1–4 February 2021) for
 * in-app practice. Statements are reproduced as faithfully as possible;
 * diagrams are derived from the official PDF figures. Answer key lives in
 * `papers.ts` and was verified against the official UKMT solutions.
 *
 * © UK Mathematics Trust — questions are the intellectual property of UKMT and
 * are included here for educational practice.
 */

export const IMC_2021_QUESTIONS: PaperQuestion[] = [
  {
    number: 1,
    statement: "What is the value of $2021 - 2223 + 2425$?",
    options: [
      { label: "A", text: "$2122$" },
      { label: "B", text: "$2223$" },
      { label: "C", text: "$2324$" },
      { label: "D", text: "$2425$" },
      { label: "E", text: "$2526$" },
    ],
  },
  {
    number: 2,
    statement:
      "The day before the day before yesterday was two days after the day before my birthday. Today is Thursday. On what day was my birthday?",
    options: [
      { label: "A", text: "Sunday" },
      { label: "B", text: "Monday" },
      { label: "C", text: "Tuesday" },
      { label: "D", text: "Wednesday" },
      { label: "E", text: "Friday" },
    ],
  },
  {
    number: 3,
    statement: "What is the value of $2 - (-2 - 2) - (-2 - (-2 - 2))$?",
    options: [
      { label: "A", text: "$0$" },
      { label: "B", text: "$2$" },
      { label: "C", text: "$4$" },
      { label: "D", text: "$6$" },
      { label: "E", text: "$8$" },
    ],
  },
  {
    number: 4,
    statement:
      "The diagram shows three squares, $PQRS$, $TUVW$ and $WXYZ$. Angles $PUV$ and $QYX$ are $62°$ and $74°$ respectively. What is angle $VWX$?",
    options: [
      { label: "A", text: "$44°$" },
      { label: "B", text: "$48°$" },
      { label: "C", text: "$60°$" },
      { label: "D", text: "$64°$" },
      { label: "E", text: "$68°$" },
    ],
    diagram: {
      alt: "A large square PQRS. Two smaller tilted squares TUVW and WXYZ sit inside it, meeting at the shared vertex W. Angle PUV is marked 62° and angle QYX is marked 74°.",
      svg: paperFigure(q4svg),
    },
  },
  {
    number: 5,
    statement:
      "April, May and June have $90$ sweets between them. May has three-quarters of the number of sweets that June has. April has two-thirds of the number of sweets that May has. How many sweets does June have?",
    options: [
      { label: "A", text: "$60$" },
      { label: "B", text: "$52$" },
      { label: "C", text: "$48$" },
      { label: "D", text: "$40$" },
      { label: "E", text: "$36$" },
    ],
  },
  {
    number: 6,
    statement:
      "Kai has begun to list, in ascending order, the positive integers which are not factors of $240$. What is the sixth number on Kai's list?",
    options: [
      { label: "A", text: "$11$" },
      { label: "B", text: "$13$" },
      { label: "C", text: "$14$" },
      { label: "D", text: "$15$" },
      { label: "E", text: "$17$" },
    ],
  },
  {
    number: 7,
    statement:
      "What is the value of $\\left(4 - \\tfrac{1}{4}\\right) \\div \\left(2 - \\tfrac{1}{2}\\right)$?",
    options: [
      { label: "A", text: "$1\\tfrac{1}{2}$" },
      { label: "B", text: "$2$" },
      { label: "C", text: "$2\\tfrac{1}{2}$" },
      { label: "D", text: "$3$" },
      { label: "E", text: "$4\\tfrac{1}{4}$" },
    ],
  },
  {
    number: 8,
    statement:
      "The diagram shows two $10$ by $14$ rectangles which are edge-to-edge and share a common vertex. It also shows the centre $O$ of one rectangle and the midpoint $M$ of one edge of the other. What is the distance $OM$?",
    options: [
      { label: "A", text: "$12$" },
      { label: "B", text: "$15$" },
      { label: "C", text: "$18$" },
      { label: "D", text: "$21$" },
      { label: "E", text: "$24$" },
    ],
    diagram: {
      alt: "Two equal rectangles meeting edge-to-edge at a shared vertex, one lying lower-left and one upper-right. O marks the centre of the lower rectangle; M marks the midpoint of the top edge of the upper rectangle.",
      svg: paperFigure(q8svg),
    },
  },
  {
    number: 9,
    statement: "How many of the following statements are true?",
    options: [
      { label: "A", text: "$0$" },
      { label: "B", text: "$1$" },
      { label: "C", text: "$2$" },
      { label: "D", text: "$3$" },
      { label: "E", text: "$4$" },
    ],
    diagram: {
      alt: "A boxed list of four statements.",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 96" role="img">
  <rect x="1" y="1" width="458" height="94" fill="none" stroke="currentColor" stroke-width="1.4"/>
  <g font-size="13" fill="currentColor" font-family="Georgia, 'Times New Roman', serif">
    <text x="14" y="24">A prime multiplied by a prime is always a prime.</text>
    <text x="14" y="46">A square multiplied by a square is always a square.</text>
    <text x="14" y="68">An odd number multiplied by an odd number is always an odd number.</text>
    <text x="14" y="90">An even number multiplied by an even number is always an even number.</text>
  </g>
</svg>`,
    },
  },
  {
    number: 10,
    statement:
      "The prime factor decomposition of $2021$ is $43 \\times 47$. What is the value of $53 \\times 57$?",
    options: [
      { label: "A", text: "$2221$" },
      { label: "B", text: "$2521$" },
      { label: "C", text: "$2921$" },
      { label: "D", text: "$3021$" },
      { label: "E", text: "$3031$" },
    ],
  },
  {
    number: 11,
    statement:
      "The line with equation $y = 2x + 3$ is reflected in the $x$-axis. Which of the following is the equation of the new line?",
    options: [
      { label: "A", text: "$y = 2x - 3$" },
      { label: "B", text: "$y = -2x + 3$" },
      { label: "C", text: "$x = 2y + 3$" },
      { label: "D", text: "$y = \\tfrac{1}{2}x + 3$" },
      { label: "E", text: "$y = -2x - 3$" },
    ],
  },
  {
    number: 12,
    statement:
      "Andrew calculates that $40\\%$ of $50\\%$ of $x$ is equal to $20\\%$ of $30\\%$ of $y$, where $x \\neq 0$. Which of the following is true?",
    options: [
      { label: "A", text: "$y = \\dfrac{2x}{3}$" },
      { label: "B", text: "$y = \\dfrac{4x}{3}$" },
      { label: "C", text: "$y = 2x$" },
      { label: "D", text: "$y = \\dfrac{8x}{3}$" },
      { label: "E", text: "$y = \\dfrac{10x}{3}$" },
    ],
  },
  {
    number: 13,
    statement:
      "What is the remainder when $12\\,345 \\times 54\\,321$ is divided by $9$?",
    options: [
      { label: "A", text: "$0$" },
      { label: "B", text: "$1$" },
      { label: "C", text: "$2$" },
      { label: "D", text: "$3$" },
      { label: "E", text: "$4$" },
    ],
  },
  {
    number: 14,
    statement:
      "The diagram shows a large square divided into squares of three different sizes. What percentage of the large square is shaded?",
    options: [
      { label: "A", text: "$61\\%$" },
      { label: "B", text: "$59\\%$" },
      { label: "C", text: "$57\\%$" },
      { label: "D", text: "$55\\%$" },
      { label: "E", text: "$53\\%$" },
    ],
    diagram: {
      alt: "A large square subdivided into smaller squares of three different sizes, with some of the small squares shaded grey in a scattered pattern.",
      svg: paperFigure(q14svg),
    },
  },
  {
    number: 15,
    statement:
      "Patrick drives from P to Q at an average speed of $40$ mph. His drive back from Q to P is at an average speed of $45$ mph and takes two minutes less. How far, in miles, is it from P to Q?",
    options: [
      { label: "A", text: "$1.5$" },
      { label: "B", text: "$6$" },
      { label: "C", text: "$9$" },
      { label: "D", text: "$12$" },
      { label: "E", text: "$15$" },
    ],
  },
  {
    number: 16,
    statement:
      "A semicircle is drawn on each side of a square, as shown. The square has sides of length $2\\pi$. What is the area of the resulting shape?",
    options: [
      { label: "A", text: "$2\\pi^2(\\pi + 1)$" },
      { label: "B", text: "$\\pi^2(\\pi + 2)$" },
      { label: "C", text: "$2\\pi^2(2\\pi + 1)$" },
      { label: "D", text: "$\\pi^2(\\pi + 4)$" },
      { label: "E", text: "$2\\pi^2(\\pi + 2)$" },
    ],
    diagram: {
      alt: "A square with a semicircle drawn outward on each of its four sides, forming a four-petalled shape. One side is labelled 2π.",
      svg: paperFigure(q16svg),
    },
  },
  {
    number: 17,
    statement:
      "In the rectangle $PQRS$, the side $PQ$ is of length $2$ and the side $QR$ is of length $4$. Points $T$ and $U$ lie inside the rectangle so that $PQT$ and $RSU$ are equilateral triangles. What is the area of the quadrilateral $QRUT$?",
    options: [
      { label: "A", text: "$\\dfrac{6 - \\sqrt{3}}{2}$" },
      { label: "B", text: "$\\dfrac{8}{3}$" },
      { label: "C", text: "$4 - 2\\sqrt{3}$" },
      { label: "D", text: "$4 - \\sqrt{3}$" },
      { label: "E", text: "$3$" },
    ],
  },
  {
    number: 18,
    statement: "Which of these is closest in size to $1$?",
    options: [
      { label: "A", text: "$0.9\\dot{5}$" },
      { label: "B", text: "$1.0\\dot{5}$" },
      { label: "C", text: "$0.\\dot{9}6\\dot{0}$" },
      { label: "D", text: "$1.\\dot{0}4\\dot{0}$" },
      { label: "E", text: "$0.\\dot{9}\\dot{5}$" },
    ],
  },
  {
    number: 19,
    statement:
      "The diagram shows two overlapping rectangles, each measuring $p$ by $q$. The area of overlap is exactly one-quarter of the total area of the figure. What is the ratio $p : q$?",
    options: [
      { label: "A", text: "$5 : 2$" },
      { label: "B", text: "$4 : 1$" },
      { label: "C", text: "$3 : 1$" },
      { label: "D", text: "$2 : 1$" },
      { label: "E", text: "$3 : 2$" },
    ],
    diagram: {
      alt: "Two congruent p-by-q rectangles forming a plus/cross shape — one horizontal, one vertical — overlapping in a shaded square at the centre. The horizontal rectangle's height is labelled q and the total width is labelled p.",
      svg: paperFigure(q19svg),
    },
  },
  {
    number: 20,
    statement:
      "Two straight lines have equations $y = px + 4$ and $py = qx - 7$, where $p$ and $q$ are constants. The two lines meet at the point $(3, 1)$. What is the value of $q$?",
    options: [
      { label: "A", text: "$1$" },
      { label: "B", text: "$2$" },
      { label: "C", text: "$3$" },
      { label: "D", text: "$4$" },
      { label: "E", text: "$5$" },
    ],
  },
  {
    number: 21,
    statement:
      "The diagram shows two congruent equilateral triangles whose overlap is a hexagon. The areas of the smaller triangles, which are also equilateral, are $1$, $1$, $9$, $9$, $16$ and $16$, as shown. What is the area of the inner hexagon?",
    options: [
      { label: "A", text: "$68$" },
      { label: "B", text: "$58$" },
      { label: "C", text: "$48$" },
      { label: "D", text: "$38$" },
      { label: "E", text: "$28$" },
    ],
    diagram: {
      alt: "Two overlapping congruent equilateral triangles forming a six-pointed star. The six small corner triangles have areas labelled 9, 16, 1 (top and right), and 16, 1, 9 (left and bottom).",
      svg: paperFigure(q21svg),
    },
  },
  {
    number: 22,
    statement:
      "What is the result when we simplify the expression $\\left(1 + \\dfrac{1}{x}\\right)\\left(1 - \\dfrac{2}{x + 1}\\right)\\left(1 + \\dfrac{2}{x - 1}\\right)$?",
    options: [
      { label: "A", text: "$1$" },
      { label: "B", text: "$\\dfrac{1}{x(x + 1)}$" },
      { label: "C", text: "$\\dfrac{1}{(x + 1)(x - 1)}$" },
      { label: "D", text: "$\\dfrac{1}{x(x + 1)(x - 1)}$" },
      { label: "E", text: "$\\dfrac{x + 1}{x}$" },
    ],
  },
  {
    number: 23,
    statement:
      "The diagram shows a semicircle with centre $O$ and radius $2$ and a semicircular arc with diameter $PR$. Angle $POR$ is a right angle. What is the area of the shaded region?",
    options: [
      { label: "A", text: "$\\pi - 2$" },
      { label: "B", text: "$2$" },
      { label: "C", text: "$\\pi$" },
      { label: "D", text: "$3$" },
      { label: "E", text: "$2\\pi - 2$" },
    ],
    diagram: {
      alt: "A semicircle with centre O and diameter PQ (radius 2) sitting on a horizontal line. R is on the arc with OR vertical, so angle POR is a right angle. A semicircular arc on diameter PR bulges outward; the region between it and the main semicircle (a lune) is shaded.",
      svg: paperFigure(q23svg),
    },
  },
  {
    number: 24,
    statement:
      "Sam writes on a white board the positive integers from $1$ to $6$ inclusive, once each. She then writes $p$ additional fives and $q$ sevens on the board. The mean of all the numbers on the board is then $5.3$. What is the smallest possible value of $q$?",
    options: [
      { label: "A", text: "$7$" },
      { label: "B", text: "$9$" },
      { label: "C", text: "$11$" },
      { label: "D", text: "$13$" },
      { label: "E", text: "$15$" },
    ],
  },
  {
    number: 25,
    statement:
      "Thomas has constant speeds for both running and walking. When a down-escalator is moving, Thomas can run down it in $15$ seconds or walk down it in $30$ seconds. One day, when the escalator was broken (and stationary), it took Thomas $20$ seconds to run down it. How long, in seconds, would it take Thomas to walk down the broken escalator?",
    options: [
      { label: "A", text: "$30$" },
      { label: "B", text: "$40$" },
      { label: "C", text: "$45$" },
      { label: "D", text: "$50$" },
      { label: "E", text: "$60$" },
    ],
  },
];
