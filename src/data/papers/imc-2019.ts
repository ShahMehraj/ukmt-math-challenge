import type { PaperQuestion } from "@/lib/types";
import { paperFigure } from "./svg-figure";

// Figures derived from the official UKMT IMC 2019 PDF: the pdf2svg traces have
// been flattened to plain display coordinates with real <text> labels (see
// svg-figure.ts), matching the IMC 2020–2024 treatment.
import q4svg from "./imc-2019/q4.svg?raw";
import q6svg from "./imc-2019/q6.svg?raw";
import q12svg from "./imc-2019/q12.svg?raw";
import q15svg from "./imc-2019/q15.svg?raw";
import q20svg from "./imc-2019/q20.svg?raw";
import q21svg from "./imc-2019/q21.svg?raw";
import q23svg from "./imc-2019/q23.svg?raw";
import q25svg from "./imc-2019/q25.svg?raw";

/**
 * Intermediate Mathematical Challenge 2019 — full transcription.
 *
 * Transcribed from the official UKMT IMC 2019 paper (Thursday 7 February 2019)
 * for in-app practice. Statements are reproduced as faithfully as possible;
 * diagrams are derived from the official PDF figures. Answer key lives in
 * `papers.ts` and was verified against the official UKMT solutions.
 *
 * © UK Mathematics Trust — questions are the intellectual property of UKMT and
 * are included here for educational practice.
 */

export const IMC_2019_QUESTIONS: PaperQuestion[] = [
  {
    number: 1,
    statement: "What is the value of $2019$ tenths?",
    options: [
      { label: "A", text: "$2019$" },
      { label: "B", text: "$201.9$" },
      { label: "C", text: "$20.19$" },
      { label: "D", text: "$2.019$" },
      { label: "E", text: "$0.2019$" },
    ],
  },
  {
    number: 2,
    statement:
      "Each of the five shapes shown below is made from five unit cubes. Shape A is a straight rod of five cubes. Shape B is an L-shape (four in a row with one on top at one end). Shape C is a T-shape (three in a row with two stacked on the middle cube). Shape D is an S-shape (a zigzag of cubes). Shape E is a plus/cross shape (one centre cube with one cube on each of its four sides). Which has the smallest surface area?",
    options: [
      { label: "A", text: "A" },
      { label: "B", text: "B" },
      { label: "C", text: "C" },
      { label: "D", text: "D" },
      { label: "E", text: "E" },
    ],
  },
  {
    number: 3,
    statement:
      "There are $120\\,000$ red squirrels living in Scotland. This represents $75\\%$ of their total UK population. How many more red squirrels live in Scotland than live in the remainder of the UK?",
    options: [
      { label: "A", text: "$30\\,000$" },
      { label: "B", text: "$40\\,000$" },
      { label: "C", text: "$60\\,000$" },
      { label: "D", text: "$80\\,000$" },
      { label: "E", text: "$90\\,000$" },
    ],
  },
  {
    number: 4,
    statement:
      "A $24$-hour digital clock shows the time in hours and minutes. How many times in one day will it display all four digits $2$, $0$, $1$ and $9$ in some order?",
    options: [
      { label: "A", text: "$6$" },
      { label: "B", text: "$10$" },
      { label: "C", text: "$12$" },
      { label: "D", text: "$18$" },
      { label: "E", text: "$24$" },
    ],
    diagram: {
      alt: "A 24-hour digital clock display showing 20:19.",
      svg: paperFigure(q4svg),
    },
  },
  {
    number: 5,
    statement:
      "The answers to the three calculations below are to be written in descending order.\n\n$X = 0.6 \\times 0.5 + 0.4$\n\n$Y = 0.6 \\times 0.5 \\div 0.4$\n\n$Z = 0.6 \\times 0.5 \\times 0.4$\n\nWhat is the correct order?",
    options: [
      { label: "A", text: "$Y, Z, X$" },
      { label: "B", text: "$X, Y, Z$" },
      { label: "C", text: "$X, Z, Y$" },
      { label: "D", text: "$Y, X, Z$" },
      { label: "E", text: "$Z, Y, X$" },
    ],
  },
  {
    number: 6,
    statement:
      "The diagram shows part of a tessellation of the plane by a quadrilateral. Khelen wants to colour each quadrilateral so that no two quadrilaterals that meet (even at a point) have the same colour. What is the smallest number of colours he needs?",
    options: [
      { label: "A", text: "$3$" },
      { label: "B", text: "$4$" },
      { label: "C", text: "$5$" },
      { label: "D", text: "$6$" },
      { label: "E", text: "$7$" },
    ],
    diagram: {
      alt: "A tessellation of the plane by congruent quadrilaterals, arranged so that each quadrilateral shares edges and vertices with its neighbours.",
      svg: paperFigure(q6svg),
    },
  },
  {
    number: 7,
    statement:
      "How many positive cubes less than $5000$ end in the digit $5$?",
    options: [
      { label: "A", text: "$1$" },
      { label: "B", text: "$2$" },
      { label: "C", text: "$3$" },
      { label: "D", text: "$4$" },
      { label: "E", text: "$5$" },
    ],
  },
  {
    number: 8,
    statement:
      "Three consecutive positive integers less than $20$ are, in ascending order, prime, even and triangular. What is the product of these three integers?",
    options: [
      { label: "A", text: "$6$" },
      { label: "B", text: "$60$" },
      { label: "C", text: "$990$" },
      { label: "D", text: "$1786$" },
      { label: "E", text: "$2730$" },
    ],
  },
  {
    number: 9,
    statement:
      "What is the value of $(7 - 6 \\times (-5)) - 4 \\times (-3) \\div (-2)$?",
    options: [
      { label: "A", text: "$-17$" },
      { label: "B", text: "$-11$" },
      { label: "C", text: "$31$" },
      { label: "D", text: "$37$" },
      { label: "E", text: "$43$" },
    ],
  },
  {
    number: 10,
    statement:
      "A recent report about the amount of plastic created in the last $65$ years stated that the $8.3$ billion tonnes produced is as heavy as $25\\,000$ Empire State Buildings in New York or a billion elephants. On that basis, how many elephants have the same total weight as the Empire State Building?",
    options: [
      { label: "A", text: "$4000$" },
      { label: "B", text: "$40\\,000$" },
      { label: "C", text: "$400\\,000$" },
      { label: "D", text: "$4\\,000\\,000$" },
      { label: "E", text: "$40\\,000\\,000$" },
    ],
  },
  {
    number: 11,
    statement:
      "Which of the following is equal to $\\dfrac{3^9}{9^3}$?",
    options: [
      { label: "A", text: "$3$" },
      { label: "B", text: "$9$" },
      { label: "C", text: "$27$" },
      { label: "D", text: "$81$" },
      { label: "E", text: "$243$" },
    ],
  },
  {
    number: 12,
    statement:
      "The game of Rorrim$^2$ is played on a $4 \\times 4$ board, starting with a counter in one corner as shown. At each turn, the player moves the counter to a cell that is the reflection of its current cell in one of the six dashed lines. How many cells could the counter occupy after precisely three turns?",
    options: [
      { label: "A", text: "$4$" },
      { label: "B", text: "$6$" },
      { label: "C", text: "$8$" },
      { label: "D", text: "$12$" },
      { label: "E", text: "$16$" },
    ],
    diagram: {
      alt: "A 4 by 4 grid with six dashed lines of reflection (two diagonals, two midlines, and two anti-diagonals). A counter sits in one corner cell.",
      svg: paperFigure(q12svg),
    },
  },
  {
    number: 13,
    statement:
      "Megan writes down a list of five numbers. The mean of her first three numbers is $-3$. The mean of her first four numbers is $4$. The mean of her first five numbers is $-5$. What is the difference between her fourth number and her fifth number?",
    options: [
      { label: "A", text: "$66$" },
      { label: "B", text: "$55$" },
      { label: "C", text: "$44$" },
      { label: "D", text: "$33$" },
      { label: "E", text: "$22$" },
    ],
  },
  {
    number: 14,
    statement:
      "There are four people, some of whom always tell the truth. The others always lie. The first person said, \"An odd number of us always tell the truth\". The second person said, \"An even number of us always tell the truth\". The third person said, \"A prime number of us always tell the truth\". The fourth person said, \"A square number of us always tell the truth\". How many of these four people were telling the truth?",
    options: [
      { label: "A", text: "$0$" },
      { label: "B", text: "$1$" },
      { label: "C", text: "$2$" },
      { label: "D", text: "$3$" },
      { label: "E", text: "$4$" },
    ],
  },
  {
    number: 15,
    statement:
      "The diagram shows six congruent equilateral triangles, of side-length $2$, placed together to form a parallelogram. What is the length of $PR$?",
    options: [
      { label: "A", text: "$2\\sqrt{13}$" },
      { label: "B", text: "$7$" },
      { label: "C", text: "$6\\sqrt{3}$" },
      { label: "D", text: "$9$" },
      { label: "E", text: "$7\\sqrt{3}$" },
    ],
    diagram: {
      alt: "Six congruent equilateral triangles of side 2 arranged to form a parallelogram. Points P and R are marked at opposite ends of a diagonal.",
      svg: paperFigure(q15svg),
    },
  },
  {
    number: 16,
    statement:
      "Two numbers $x$ and $y$ have a product which is equal to their sum. Which of these expressions gives $x$ in terms of $y$?",
    options: [
      { label: "A", text: "$\\dfrac{y}{y - 1}$" },
      { label: "B", text: "$\\dfrac{y}{y + 1}$" },
      { label: "C", text: "$\\dfrac{y + 1}{y}$" },
      { label: "D", text: "$\\dfrac{y - 1}{y}$" },
      { label: "E", text: "$\\dfrac{y^2}{y + 1}$" },
    ],
  },
  {
    number: 17,
    statement:
      "Which of these is equal to $0.\\dot{8} + 0.0\\dot{7}$?",
    options: [
      { label: "A", text: "$0.8\\dot{7}$" },
      { label: "B", text: "$0.88$" },
      { label: "C", text: "$0.9\\dot{5}$" },
      { label: "D", text: "$0.9\\dot{6}$" },
      { label: "E", text: "$0.9\\dot{8}$" },
    ],
  },
  {
    number: 18,
    statement:
      "Two numbers $x$ and $y$ are such that $x + y = \\dfrac{2}{3}$ and $\\dfrac{x}{y} = \\dfrac{2}{3}$. What is the value of $x - y$?",
    options: [
      { label: "A", text: "$-\\dfrac{2}{3}$" },
      { label: "B", text: "$-\\dfrac{2}{15}$" },
      { label: "C", text: "$\\dfrac{2}{25}$" },
      { label: "D", text: "$\\dfrac{2}{5}$" },
      { label: "E", text: "$\\dfrac{2}{3}$" },
    ],
  },
  {
    number: 19,
    statement: "Which of these expressions has the largest value?",
    options: [
      { label: "A", text: "$\\dfrac{1}{2}$" },
      { label: "B", text: "$\\dfrac{1}{3} + \\dfrac{1}{4}$" },
      { label: "C", text: "$\\dfrac{1}{4} + \\dfrac{1}{5} + \\dfrac{1}{6}$" },
      { label: "D", text: "$\\dfrac{1}{5} + \\dfrac{1}{6} + \\dfrac{1}{7} + \\dfrac{1}{8}$" },
      { label: "E", text: "$\\dfrac{1}{6} + \\dfrac{1}{7} + \\dfrac{1}{8} + \\dfrac{1}{9} + \\dfrac{1}{10}$" },
    ],
  },
  {
    number: 20,
    statement:
      "Three equilateral triangles with sides of length $1$ are shown shaded in a larger equilateral triangle. The total shaded area is half the area of the larger triangle. What is the side-length of the larger equilateral triangle?",
    options: [
      { label: "A", text: "$\\sqrt{5}$" },
      { label: "B", text: "$\\sqrt{6}$" },
      { label: "C", text: "$\\dfrac{5}{2}$" },
      { label: "D", text: "$\\dfrac{3\\sqrt{3}}{2}$" },
      { label: "E", text: "$1 + \\sqrt{3}$" },
    ],
    diagram: {
      alt: "A larger equilateral triangle containing three shaded equilateral triangles of side 1 arranged inside it.",
      svg: paperFigure(q20svg),
    },
  },
  {
    number: 21,
    statement:
      "The diagram shows a right-angled triangle $PQR$. The point $S$ is the midpoint of the side $QR$ and $\\tan \\angle QPR = \\dfrac{3}{2}$. What is the value of $\\sin \\angle QPS$?",
    options: [
      { label: "A", text: "$\\dfrac{1}{\\sqrt{3}}$" },
      { label: "B", text: "$\\dfrac{1}{\\sqrt{2}}$" },
      { label: "C", text: "$\\dfrac{1}{2}$" },
      { label: "D", text: "$\\dfrac{3}{5}$" },
      { label: "E", text: "$\\dfrac{4}{5}$" },
    ],
    diagram: {
      alt: "A right-angled triangle PQR with the right angle at Q. S is the midpoint of QR. The angle QPR and the line PS are marked.",
      svg: paperFigure(q21svg),
    },
  },
  {
    number: 22,
    statement:
      "Four of the following six-digit integers are always divisible by $7$, regardless of the values of the digits $P$ and $Q$. Which of the following is not necessarily a multiple of $7$?",
    options: [
      { label: "A", text: "$\\overline{PQQPQQ}$" },
      { label: "B", text: "$\\overline{PQPQPQ}$" },
      { label: "C", text: "$\\overline{QPQPQP}$" },
      { label: "D", text: "$\\overline{PPPPPP}$" },
      { label: "E", text: "$\\overline{PPPQQQ}$" },
    ],
  },
  {
    number: 23,
    statement:
      "The diagram shows a triangle with sides $n^2 + n$, $2n + 12$ and $3n + 3$. What is the sum of all the values of $n$ for which the triangle is isosceles?",
    options: [
      { label: "A", text: "$7$" },
      { label: "B", text: "$9$" },
      { label: "C", text: "$12$" },
      { label: "D", text: "$13$" },
      { label: "E", text: "$16$" },
    ],
    diagram: {
      alt: "A triangle with its three sides labelled n squared plus n, 2n plus 12, and 3n plus 3.",
      svg: paperFigure(q23svg),
    },
  },
  {
    number: 24,
    statement:
      "When $5655$ is divided by a two-digit positive integer $N$, the remainder is $11$. When $5879$ is divided by the same positive integer $N$, the remainder is $14$. What is the sum of the digits of $N$?",
    options: [
      { label: "A", text: "$6$" },
      { label: "B", text: "$7$" },
      { label: "C", text: "$8$" },
      { label: "D", text: "$9$" },
      { label: "E", text: "$10$" },
    ],
  },
  {
    number: 25,
    statement:
      "The diagram shows three touching semicircles with radius $1$ inside an equilateral triangle, which each semicircle also touches. The diameter of each semicircle lies along a side of the triangle. What is the length of each side of the equilateral triangle?",
    options: [
      { label: "A", text: "$3$" },
      { label: "B", text: "$\\dfrac{13}{4}$" },
      { label: "C", text: "$\\dfrac{3}{2}\\sqrt{3}$" },
      { label: "D", text: "$2\\sqrt{3}$" },
      { label: "E", text: "$4$" },
    ],
    diagram: {
      alt: "An equilateral triangle with three semicircles of radius 1 inside it. Each semicircle has its diameter along one side of the triangle and touches both other semicircles.",
      svg: paperFigure(q25svg),
    },
  },
];
