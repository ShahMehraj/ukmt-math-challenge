import type { PaperQuestion } from "@/lib/types";
import { paperFigure } from "./svg-figure";

// Figures derived from the official UKMT IMC 2022 PDF: the pdf2svg traces have
// been flattened to plain display coordinates with real <text> labels (see
// svg-figure.ts), matching the IMC 2023/2024 treatment.
import q7svg from "./imc-2022/q7.svg?raw";
import q10svg from "./imc-2022/q10.svg?raw";
import q12svg from "./imc-2022/q12.svg?raw";
import q14svg from "./imc-2022/q14.svg?raw";
import q17svg from "./imc-2022/q17.svg?raw";
import q19svg from "./imc-2022/q19.svg?raw";
import q21svg from "./imc-2022/q21.svg?raw";
import q22svg from "./imc-2022/q22.svg?raw";
import q23svg from "./imc-2022/q23.svg?raw";

/**
 * Intermediate Mathematical Challenge 2022 — full transcription.
 *
 * Transcribed from the official UKMT IMC 2022 paper (Wednesday 2 / Thursday 3
 * February 2022) for in-app practice. Statements are reproduced as faithfully
 * as possible; diagrams are derived from the official PDF figures. Answer key
 * lives in `papers.ts` and was verified against the official UKMT solutions.
 *
 * © UK Mathematics Trust — questions are the intellectual property of UKMT and
 * are included here for educational practice.
 */

export const IMC_2022_QUESTIONS: PaperQuestion[] = [
  {
    number: 1,
    statement: "How many hours is $6$ minutes?",
    options: [
      { label: "A", text: "$0.06$" },
      { label: "B", text: "$0.1$" },
      { label: "C", text: "$0.6$" },
      { label: "D", text: "$10$" },
      { label: "E", text: "$360$" },
    ],
  },
  {
    number: 2,
    statement:
      "My recipe for apple crumble uses $100$ g of flour, $50$ g of butter and $50$ g of sugar to make the crumble topping. When my family come for a meal, I have to use two and a half times each amount to provide enough crumble. In total, how much crumble topping do I then make?",
    options: [
      { label: "A", text: "$0.5$ kg" },
      { label: "B", text: "$2$ kg" },
      { label: "C", text: "$2.5$ kg" },
      { label: "D", text: "$5$ kg" },
      { label: "E", text: "$50$ kg" },
    ],
  },
  {
    number: 3,
    statement:
      "In the Caribbean, loggerhead turtles lay three million eggs in twenty thousand nests. On average, how many eggs are in each nest?",
    options: [
      { label: "A", text: "$15$" },
      { label: "B", text: "$150$" },
      { label: "C", text: "$1500$" },
      { label: "D", text: "$15\\,000$" },
      { label: "E", text: "$150\\,000$" },
    ],
  },
  {
    number: 4,
    statement:
      "Workers digging a tunnel for an underground railway complete $5$ metres of tunnel on a typical day. Working every day, how long will it take them to dig a tunnel of length $2$ kilometres?",
    options: [
      { label: "A", text: "three months" },
      { label: "B", text: "six months" },
      { label: "C", text: "just under a year" },
      { label: "D", text: "just over a year" },
      { label: "E", text: "nearly two years" },
    ],
  },
  {
    number: 5,
    statement:
      "Which of the following has the same value as $10\\,006 - 8008$?",
    options: [
      { label: "A", text: "$10\\,007 - 8007$" },
      { label: "B", text: "$100\\,060 - 80\\,080$" },
      { label: "C", text: "$10\\,000 - 8002$" },
      { label: "D", text: "$106 - 88$" },
      { label: "E", text: "$5003 - 4004$" },
    ],
  },
  {
    number: 6,
    statement: "What is $20\\%$ of $3\\tfrac{3}{4}$?",
    options: [
      { label: "A", text: "$\\dfrac{123}{200}$" },
      { label: "B", text: "$\\dfrac{13}{20}$" },
      { label: "C", text: "$\\dfrac{7}{10}$" },
      { label: "D", text: "$\\dfrac{3}{4}$" },
      { label: "E", text: "$\\dfrac{4}{5}$" },
    ],
  },
  {
    number: 7,
    statement:
      "A function machine does the four operations shown in order. Iris inputs a positive integer and the output is also a positive integer. What is the smallest possible number which Iris could have input?",
    options: [
      { label: "A", text: "$9$" },
      { label: "B", text: "$84$" },
      { label: "C", text: "$102$" },
      { label: "D", text: "$120$" },
      { label: "E", text: "$129$" },
    ],
    diagram: {
      alt: "A function machine: an input arrow feeds into four boxes in order — divide by 3, subtract 10, divide by 3, subtract 10 — then an output arrow.",
      svg: paperFigure(q7svg, "w-72"),
    },
  },
  {
    number: 8,
    statement:
      "What is the difference between $40\\%$ of $50\\%$ of $60$ and $50\\%$ of $60\\%$ of $70$?",
    options: [
      { label: "A", text: "$9$" },
      { label: "B", text: "$8$" },
      { label: "C", text: "$7$" },
      { label: "D", text: "$6$" },
      { label: "E", text: "$5$" },
    ],
  },
  {
    number: 9,
    statement:
      "A number $x$ is greater than $2022$. Which is the smallest of the following?",
    options: [
      { label: "A", text: "$\\dfrac{x}{2022}$" },
      { label: "B", text: "$\\dfrac{2022}{x - 1}$" },
      { label: "C", text: "$\\dfrac{x + 1}{2022}$" },
      { label: "D", text: "$\\dfrac{2022}{x}$" },
      { label: "E", text: "$\\dfrac{2022}{x + 1}$" },
    ],
  },
  {
    number: 10,
    statement:
      "One hundred rectangles are arranged edge-to-edge in a continuation of the pattern shown. Each rectangle measures $3$ cm by $1$ cm. What is the perimeter, in cm, of the completed shape?",
    options: [
      { label: "A", text: "$800$" },
      { label: "B", text: "$700$" },
      { label: "C", text: "$602$" },
      { label: "D", text: "$600$" },
      { label: "E", text: "$502$" },
    ],
    diagram: {
      alt: "A row of 3 cm by 1 cm rectangles arranged edge-to-edge, alternately standing upright and lying flat so they interlock in a repeating pattern, continuing to the right.",
      svg: paperFigure(q10svg, "w-64"),
    },
  },
  {
    number: 11,
    statement:
      'The Universal Magazine of Knowledge and Pleasure (Vol. 1, 1747) asked the following question. "What number is that, whose quarter shall be $9$ more than the whole?" What is the correct answer?',
    options: [
      { label: "A", text: "$12$" },
      { label: "B", text: "$9$" },
      { label: "C", text: "$8$" },
      { label: "D", text: "$-8$" },
      { label: "E", text: "$-12$" },
    ],
  },
  {
    number: 12,
    statement:
      "The shape shown is made up of three similar right-angled triangles. The smallest triangle has two sides of side-length $2$, as shown. What is the area of the shape?",
    options: [
      { label: "A", text: "$14$" },
      { label: "B", text: "$12 + 12\\sqrt{2}$" },
      { label: "C", text: "$28$" },
      { label: "D", text: "$24 + 20\\sqrt{2}$" },
      { label: "E", text: "$56$" },
    ],
    diagram: {
      alt: "Three similar right-angled triangles joined to form a larger triangle. The smallest triangle, at the top-left, has two sides of length 2 marked.",
      svg: paperFigure(q12svg),
    },
  },
  {
    number: 13,
    statement:
      "How many sets of three consecutive integers are there in which the sum of the three integers equals their product?",
    options: [
      { label: "A", text: "$0$" },
      { label: "B", text: "$2$" },
      { label: "C", text: "$3$" },
      { label: "D", text: "$4$" },
      { label: "E", text: "$5$" },
    ],
  },
  {
    number: 14,
    statement:
      "In a number pyramid, each cell above the bottom row contains the sum of the numbers in the two cells immediately below it. The three numbers on the second row are all equal, and are all integers. Which of these statements must be true?",
    options: [
      { label: "A", text: "The bottom row contains at least one zero" },
      { label: "B", text: "The third row contains at least one zero" },
      { label: "C", text: "The top number is a multiple of three" },
      { label: "D", text: "The top number is a multiple of four" },
      { label: "E", text: "None of the above" },
    ],
    diagram: {
      alt: "A four-row number pyramid: a bottom row of four cells, a third row of three cells, a second row of two cells, and a single top cell, each cell resting on the two below it.",
      svg: paperFigure(q14svg),
    },
  },
  {
    number: 15,
    statement:
      "Reflection in the line $l$ transforms the point with coordinates $(5, 3)$ into the point with coordinates $(1, -1)$. What is the equation of the line $l$?",
    options: [
      { label: "A", text: "$y = x - 2$" },
      { label: "B", text: "$y = 1$" },
      { label: "C", text: "$x = 3$" },
      { label: "D", text: "$y = 2 - x$" },
      { label: "E", text: "$y = 4 - x$" },
    ],
  },
  {
    number: 16,
    statement: "What is half of $4^{2022}$?",
    options: [
      { label: "A", text: "$4^{1011}$" },
      { label: "B", text: "$2^{4044}$" },
      { label: "C", text: "$4^{2021}$" },
      { label: "D", text: "$2^{4043}$" },
      { label: "E", text: "$2^{1011}$" },
    ],
  },
  {
    number: 17,
    statement:
      "The first figure shows four touching circles of radius $1$ cm in a horizontal row, held together tightly by an outer band X. The second figure shows six touching circles of radius $1$ cm, again held tightly together by a surrounding band Y. Which of the following statements is true?",
    options: [
      { label: "A", text: "X is $2$ cm longer than Y" },
      { label: "B", text: "X is $1$ cm longer than Y" },
      { label: "C", text: "X and Y are the same length" },
      { label: "D", text: "Y is $1$ cm longer than X" },
      { label: "E", text: "Y is $2$ cm longer than X" },
    ],
    diagram: {
      alt: "Band X tightly wraps four unit circles in a horizontal row. Band Y tightly wraps six unit circles packed in a triangle (rows of 3, 2 and 1).",
      svg: paperFigure(q17svg, "w-64"),
    },
  },
  {
    number: 18,
    statement:
      "Dick Turnip sold his horse, Slack Bess, for £$56$. The percentage profit he made was numerically the same as the cost, in pounds, of his horse. What was the cost of his horse?",
    options: [
      { label: "A", text: "£$36$" },
      { label: "B", text: "£$40$" },
      { label: "C", text: "£$45$" },
      { label: "D", text: "£$48$" },
      { label: "E", text: "£$50$" },
    ],
  },
  {
    number: 19,
    statement:
      "A sector of a circle has radius $6$ and arc length $10$, as shown. What is the area of the sector?",
    options: [
      { label: "A", text: "$30$" },
      { label: "B", text: "$36$" },
      { label: "C", text: "$40$" },
      { label: "D", text: "$60$" },
      { label: "E", text: "$66$" },
    ],
    diagram: {
      alt: "A sector of a circle with two straight radii of length 6 meeting at a right angle at the centre, and a curved arc of length 10 joining their ends.",
      svg: paperFigure(q19svg),
    },
  },
  {
    number: 20,
    statement:
      "Aroon is asked to choose five integers so that the mode is $2$ more than the median and the mean is $2$ less than the median. What is the largest possible value of the range of Aroon's five integers?",
    options: [
      { label: "A", text: "$2$" },
      { label: "B", text: "$5$" },
      { label: "C", text: "$12$" },
      { label: "D", text: "$15$" },
      { label: "E", text: "The largest possible range depends on the integers chosen" },
    ],
  },
  {
    number: 21,
    statement:
      "The diagram shows a shaded semicircle of diameter $4$, from which a smaller semicircle has been removed. The two semicircles touch at exactly three points. What fraction of the larger semicircle is shaded?",
    options: [
      { label: "A", text: "$\\dfrac{2}{\\pi}$" },
      { label: "B", text: "$\\dfrac{1}{2}$" },
      { label: "C", text: "$\\dfrac{\\sqrt{2}}{3}$" },
      { label: "D", text: "$\\dfrac{\\sqrt{2}}{2}$" },
      { label: "E", text: "$\\dfrac{3}{4\\pi}$" },
    ],
    diagram: {
      alt: "A large semicircle of diameter 4 sitting flat-side up, with a smaller semicircle removed from its centre (bulging upward). The two crescent regions at the sides, plus the strip below the small semicircle, are shaded.",
      svg: paperFigure(q21svg),
    },
  },
  {
    number: 22,
    statement:
      "A rectangle with integer side-lengths is divided into four smaller rectangles, as shown. The perimeters of the largest and smallest of these smaller rectangles are $28$ cm and $12$ cm. Which of the following is a possible area of the original rectangle?",
    options: [
      { label: "A", text: "$90$ cm$^2$" },
      { label: "B", text: "$92$ cm$^2$" },
      { label: "C", text: "$94$ cm$^2$" },
      { label: "D", text: "$96$ cm$^2$" },
      { label: "E", text: "$98$ cm$^2$" },
    ],
    diagram: {
      alt: "A rectangle divided into four smaller rectangles by one horizontal and one vertical line, placed off-centre so the four pieces have different sizes.",
      svg: paperFigure(q22svg),
    },
  },
  {
    number: 23,
    statement:
      "Two squares are drawn inside a regular hexagon with side-length $2$, as shown. What is the area of the overlap of the two squares?",
    options: [
      { label: "A", text: "$2$" },
      { label: "B", text: "$2 - \\sqrt{3}$" },
      { label: "C", text: "$4 - \\sqrt{3}$" },
      { label: "D", text: "$4 - 2\\sqrt{3}$" },
      { label: "E", text: "$8 - 4\\sqrt{3}$" },
    ],
    diagram: {
      alt: "A regular hexagon with two congruent squares drawn inside, one above the other, sharing the hexagon's vertical axis; their overlap is a shaded horizontal band across the middle.",
      svg: paperFigure(q23svg),
    },
  },
  {
    number: 24,
    statement:
      "Pete's pies all cost an integer number of pounds. A cherry pie costs the same as two apple pies. A blueberry pie costs the same as two damson pies. A cherry pie and two damson pies cost the same as an apple pie and two blueberry pies. Paul buys one of each type of pie. Which of the following could be the amount he spends?",
    options: [
      { label: "A", text: "£$16$" },
      { label: "B", text: "£$18$" },
      { label: "C", text: "£$20$" },
      { label: "D", text: "£$22$" },
      { label: "E", text: "£$24$" },
    ],
  },
  {
    number: 25,
    statement:
      "Alvita is planning a garden patio to be made from identical square paving stones laid out in a rectangle measuring $x$ stones by $y$ stones. She finds that when she adds a border of width one stone around the patio, the area of the border is equal to the original area of the patio. How many possible values for $x$ are there?",
    options: [
      { label: "A", text: "$1$" },
      { label: "B", text: "$2$" },
      { label: "C", text: "$4$" },
      { label: "D", text: "$8$" },
      { label: "E", text: "$16$" },
    ],
  },
];
