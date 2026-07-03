import type { PaperQuestion } from "@/lib/types";
import { paperFigure } from "./svg-figure";

// Figures derived from the official UKMT IMC 2015 PDF.
import q6svg from "./imc-2015/q6.svg?raw";
import q13svg from "./imc-2015/q13.svg?raw";
import q24svg from "./imc-2015/q24.svg?raw";
import q25svg from "./imc-2015/q25.svg?raw";

/**
 * Intermediate Mathematical Challenge 2015 — full transcription.
 *
 * Transcribed from the official UKMT IMC 2015 paper (Thursday 5 February 2015)
 * for in-app practice. Statements are reproduced as faithfully as possible;
 * diagrams are derived from the official PDF figures. Answer key lives in
 * `papers.ts` and was verified against the official UKMT solutions.
 *
 * © UK Mathematics Trust — questions are the intellectual property of UKMT and
 * are included here for educational practice.
 */

export const IMC_2015_QUESTIONS: PaperQuestion[] = [
  {
    number: 1,
    statement: "What is the value of $1 - 0.2 + 0.03 - 0.004$?",
    options: [
      { label: "A", text: "$0.826$" },
      { label: "B", text: "$0.834$" },
      { label: "C", text: "$0.926$" },
      { label: "D", text: "$1.226$" },
      { label: "E", text: "$1.234$" },
    ],
  },
  {
    number: 2,
    statement:
      "Last year, Australian Suzy Walsham won the annual women's race up the $1576$ steps of the Empire State Building in New York for a record fifth time. Her winning time was $11$ minutes $57$ seconds. Approximately how many steps did she climb per minute?",
    options: [
      { label: "A", text: "$13$" },
      { label: "B", text: "$20$" },
      { label: "C", text: "$80$" },
      { label: "D", text: "$100$" },
      { label: "E", text: "$130$" },
    ],
  },
  {
    number: 3,
    statement:
      "What is a half of a third, plus a third of a quarter, plus a quarter of a fifth?",
    options: [
      { label: "A", text: "$\\dfrac{1}{1440}$" },
      { label: "B", text: "$\\dfrac{3}{38}$" },
      { label: "C", text: "$\\dfrac{1}{30}$" },
      { label: "D", text: "$\\dfrac{1}{3}$" },
      { label: "E", text: "$\\dfrac{3}{10}$" },
    ],
  },
  {
    number: 4,
    statement:
      "The diagram shows a regular pentagon inside a square. A regular pentagon sits inside a square with one side along the base; $x°$ is the angle between the square's right edge and the pentagon's upper-right edge. What is the value of $x$?",
    options: [
      { label: "A", text: "$48$" },
      { label: "B", text: "$51$" },
      { label: "C", text: "$54$" },
      { label: "D", text: "$60$" },
      { label: "E", text: "$72$" },
    ],
  },
  {
    number: 5,
    statement: "Which of the following numbers is not a square?",
    options: [
      { label: "A", text: "$1^6$" },
      { label: "B", text: "$2^5$" },
      { label: "C", text: "$3^4$" },
      { label: "D", text: "$4^3$" },
      { label: "E", text: "$5^2$" },
    ],
  },
  {
    number: 6,
    statement:
      "The equilateral triangle and regular hexagon shown have perimeters of the same length. What is the ratio of the area of the triangle to the area of the hexagon?",
    options: [
      { label: "A", text: "$5:6$" },
      { label: "B", text: "$4:5$" },
      { label: "C", text: "$3:4$" },
      { label: "D", text: "$2:3$" },
      { label: "E", text: "$1:1$" },
    ],
    diagram: {
      alt: "An equilateral triangle and a regular hexagon, both with the same perimeter length.",
      svg: paperFigure(q6svg),
    },
  },
  {
    number: 7,
    statement:
      "A tetrahedron is a solid figure which has four faces, all of which are triangles. What is the product of the number of edges and the number of vertices of the tetrahedron?",
    options: [
      { label: "A", text: "$8$" },
      { label: "B", text: "$10$" },
      { label: "C", text: "$12$" },
      { label: "D", text: "$18$" },
      { label: "E", text: "$24$" },
    ],
  },
  {
    number: 8,
    statement:
      "How many two-digit squares differ by $1$ from a multiple of $10$?",
    options: [
      { label: "A", text: "$1$" },
      { label: "B", text: "$2$" },
      { label: "C", text: "$3$" },
      { label: "D", text: "$4$" },
      { label: "E", text: "$5$" },
    ],
  },
  {
    number: 9,
    statement:
      "The diagram shows two overlapping pentagons with exterior angles $p°$, $q°$, $r°$, $s°$, $t°$, $u°$, $v°$, $w°$, $x°$ and $y°$ marked at each vertex. What is the value of $p + q + r + s + t + u + v + w + x + y$?",
    options: [
      { label: "A", text: "$540$" },
      { label: "B", text: "$720$" },
      { label: "C", text: "$900$" },
      { label: "D", text: "$1080$" },
      { label: "E", text: "$1440$" },
    ],
  },
  {
    number: 10,
    statement:
      "What is the remainder when $2^2 \\times 3^3 \\times 5^5 \\times 7^7$ is divided by $8$?",
    options: [
      { label: "A", text: "$2$" },
      { label: "B", text: "$3$" },
      { label: "C", text: "$4$" },
      { label: "D", text: "$5$" },
      { label: "E", text: "$7$" },
    ],
  },
  {
    number: 11,
    statement:
      "Three different positive integers have a mean of $7$. What is the largest positive integer that could be one of them?",
    options: [
      { label: "A", text: "$15$" },
      { label: "B", text: "$16$" },
      { label: "C", text: "$17$" },
      { label: "D", text: "$18$" },
      { label: "E", text: "$19$" },
    ],
  },
  {
    number: 12,
    statement:
      "An ant is on the square marked with a black dot on a $5 \\times 5$ chessboard-coloured grid; the ant starts on the central black square. The ant moves across an edge from one square to an adjacent square four times and then stops. How many of the possible finishing squares are black?",
    options: [
      { label: "A", text: "$0$" },
      { label: "B", text: "$2$" },
      { label: "C", text: "$4$" },
      { label: "D", text: "$6$" },
      { label: "E", text: "$8$" },
    ],
  },
  {
    number: 13,
    statement:
      "What is the area of the shaded region in the rectangle?",
    options: [
      { label: "A", text: "$21 \\text{ cm}^2$" },
      { label: "B", text: "$22 \\text{ cm}^2$" },
      { label: "C", text: "$23 \\text{ cm}^2$" },
      { label: "D", text: "$24 \\text{ cm}^2$" },
      { label: "E", text: "more information needed" },
    ],
    diagram: {
      alt: "A rectangle measuring 14 cm by 3 cm with a diagonal shaded triangle inside.",
      svg: paperFigure(q13svg),
    },
  },
  {
    number: 14,
    statement:
      "In a sequence, each term after the first two terms is the mean of all the terms which come before that term. The first term is $8$ and the tenth term is $26$. What is the second term?",
    options: [
      { label: "A", text: "$17$" },
      { label: "B", text: "$18$" },
      { label: "C", text: "$44$" },
      { label: "D", text: "$52$" },
      { label: "E", text: "$68$" },
    ],
  },
  {
    number: 15,
    statement:
      "A flag is in the shape of a right-angled triangle, with the horizontal and vertical sides being of length $72$ cm and $24$ cm respectively. The flag is divided into $6$ vertical stripes of equal width. What, in cm$^2$, is the difference between the areas of any two adjacent stripes?",
    options: [
      { label: "A", text: "$96$" },
      { label: "B", text: "$72$" },
      { label: "C", text: "$48$" },
      { label: "D", text: "$32$" },
      { label: "E", text: "$24$" },
    ],
  },
  {
    number: 16,
    statement:
      "You are asked to choose two positive integers, $m$ and $n$ with $m > n$, so that as many as possible of the expressions $m + n$, $m - n$, $m \\times n$ and $m \\div n$ have values that are prime. When you do this correctly, how many of these four expressions have values that are prime?",
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
      "The football shown is made by sewing together $12$ black pentagonal panels and $20$ white hexagonal panels. There is a join wherever two panels meet along an edge. How many joins are there?",
    options: [
      { label: "A", text: "$20$" },
      { label: "B", text: "$32$" },
      { label: "C", text: "$60$" },
      { label: "D", text: "$90$" },
      { label: "E", text: "$180$" },
    ],
  },
  {
    number: 18,
    statement:
      "The total weight of a box, $20$ plates and $30$ cups is $4.8$ kg. The total weight of the box, $40$ plates and $50$ cups is $8.4$ kg. What is the total weight of the box, $10$ plates and $20$ cups?",
    options: [
      { label: "A", text: "$3$ kg" },
      { label: "B", text: "$3.2$ kg" },
      { label: "C", text: "$3.6$ kg" },
      { label: "D", text: "$4$ kg" },
      { label: "E", text: "$4.2$ kg" },
    ],
  },
  {
    number: 19,
    statement:
      "The figure shows four smaller squares in the corners of a large square. The smaller squares have sides of length $1$ cm, $2$ cm, $3$ cm and $4$ cm (in anticlockwise order) and the sides of the large square have length $11$ cm. The vertices of these small squares that face the centre are joined to form a shaded quadrilateral. What is the area of the shaded quadrilateral?",
    options: [
      { label: "A", text: "$35 \\text{ cm}^2$" },
      { label: "B", text: "$36 \\text{ cm}^2$" },
      { label: "C", text: "$37 \\text{ cm}^2$" },
      { label: "D", text: "$38 \\text{ cm}^2$" },
      { label: "E", text: "$39 \\text{ cm}^2$" },
    ],
  },
  {
    number: 20,
    statement:
      "A voucher code is made up of four characters. The first is a letter: V, X or P. The second and third are different digits. The fourth is the units digit of the sum of the second and third digits. How many different voucher codes like this are there?",
    options: [
      { label: "A", text: "$180$" },
      { label: "B", text: "$243$" },
      { label: "C", text: "$270$" },
      { label: "D", text: "$300$" },
      { label: "E", text: "$2700$" },
    ],
  },
  {
    number: 21,
    statement:
      "A rectangle is placed obliquely on top of an identical rectangle. The area $X$ of the overlapping region (shaded more darkly) is one eighth of the total shaded area. What fraction of the area of one rectangle is $X$?",
    options: [
      { label: "A", text: "$\\dfrac{1}{3}$" },
      { label: "B", text: "$\\dfrac{2}{7}$" },
      { label: "C", text: "$\\dfrac{1}{4}$" },
      { label: "D", text: "$\\dfrac{2}{9}$" },
      { label: "E", text: "$\\dfrac{1}{5}$" },
    ],
  },
  {
    number: 22,
    statement:
      "The diagram shows a shaded region inside a large square. The shaded region is divided into small squares. A large square contains a diamond-shaped shaded region subdivided into small tilted squares in a checkerboard pattern. What fraction of the area of the large square is shaded?",
    options: [
      { label: "A", text: "$\\dfrac{3}{10}$" },
      { label: "B", text: "$\\dfrac{1}{3}$" },
      { label: "C", text: "$\\dfrac{3}{8}$" },
      { label: "D", text: "$\\dfrac{2}{5}$" },
      { label: "E", text: "$\\dfrac{3}{7}$" },
    ],
  },
  {
    number: 23,
    statement:
      "There are $120$ different ways of arranging the letters U, K, M, I and C. All of these arrangements are listed in dictionary order, starting with CIKMU. Which position in the list does UKIMC occupy?",
    options: [
      { label: "A", text: "$110$th" },
      { label: "B", text: "$112$th" },
      { label: "C", text: "$114$th" },
      { label: "D", text: "$116$th" },
      { label: "E", text: "$118$th" },
    ],
  },
  {
    number: 24,
    statement:
      "In square $RSTU$ a quarter-circle arc with centre $S$ is drawn from $T$ to $R$. A point $P$ on this arc is $1$ unit from $TU$ and $8$ units from $RU$. What is the length of the side of square $RSTU$?",
    options: [
      { label: "A", text: "$9$" },
      { label: "B", text: "$10$" },
      { label: "C", text: "$11$" },
      { label: "D", text: "$12$" },
      { label: "E", text: "$13$" },
    ],
    diagram: {
      alt: "Square RSTU with a quarter-circle arc centred at S drawn from T to R. A point P on the arc is marked, 1 unit from TU and 8 units from RU.",
      svg: paperFigure(q24svg),
    },
  },
  {
    number: 25,
    statement:
      "A point is marked one quarter of the way along each side of a triangle, as shown. What fraction of the area of the triangle is shaded?",
    options: [
      { label: "A", text: "$\\dfrac{7}{16}$" },
      { label: "B", text: "$\\dfrac{1}{2}$" },
      { label: "C", text: "$\\dfrac{9}{16}$" },
      { label: "D", text: "$\\dfrac{5}{8}$" },
      { label: "E", text: "$\\dfrac{11}{16}$" },
    ],
    diagram: {
      alt: "A triangle with a point marked one quarter of the way along each side. Lines from these points create a shaded inner region.",
      svg: paperFigure(q25svg),
    },
  },
];
