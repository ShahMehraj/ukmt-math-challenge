import type { PaperQuestion } from "@/lib/types";
import { paperFigure } from "./svg-figure";

// Figures derived from the official UKMT IMC 2023 PDF: the pdf2svg traces have
// been flattened to plain display coordinates with real <text> labels (see
// svg-figure.ts), matching the IMC 2024 treatment.
import q2svg from "./imc-2023/q2.svg?raw";
import q4svg from "./imc-2023/q4.svg?raw";
import q6svg from "./imc-2023/q6.svg?raw";
import q10svg from "./imc-2023/q10.svg?raw";
import q12svg from "./imc-2023/q12.svg?raw";
import q17svg from "./imc-2023/q17.svg?raw";
import q21svg from "./imc-2023/q21.svg?raw";
import q24svg from "./imc-2023/q24.svg?raw";
import q25svg from "./imc-2023/q25.svg?raw";

/**
 * Intermediate Mathematical Challenge 2023 — full transcription.
 *
 * Transcribed from the official UKMT IMC 2023 paper (Wednesday 1 February 2023)
 * for in-app practice. Statements are reproduced as faithfully as possible;
 * diagrams are derived from the official PDF figures. Answer key lives in
 * `papers.ts` and was verified against the official UKMT solutions.
 *
 * © UK Mathematics Trust — questions are the intellectual property of UKMT and
 * are included here for educational practice.
 */

export const IMC_2023_QUESTIONS: PaperQuestion[] = [
  {
    number: 1,
    statement:
      "Which of these numbers is neither a multiple of $3$, nor a multiple of $4$?",
    options: [
      { label: "A", text: "$16$" },
      { label: "B", text: "$21$" },
      { label: "C", text: "$28$" },
      { label: "D", text: "$34$" },
      { label: "E", text: "$45$" },
    ],
  },
  {
    number: 2,
    statement: "What is the area of this triangle?",
    options: [
      { label: "A", text: "$6$ cm$^2$" },
      { label: "B", text: "$7.5$ cm$^2$" },
      { label: "C", text: "$8$ cm$^2$" },
      { label: "D", text: "$10$ cm$^2$" },
      { label: "E", text: "$12$ cm$^2$" },
    ],
    diagram: {
      alt: "A right-angled triangle with the right angle at the top vertex. One edge from the apex is labelled 4 cm and the slanted edge is labelled 5 cm.",
      svg: paperFigure(q2svg),
    },
  },
  {
    number: 3,
    statement: "What is the value of $1 - (2 - (3 - 4 - (5 - 6)))$?",
    options: [
      { label: "A", text: "$-2$" },
      { label: "B", text: "$-1$" },
      { label: "C", text: "$0$" },
      { label: "D", text: "$1$" },
      { label: "E", text: "$2$" },
    ],
  },
  {
    number: 4,
    statement:
      "The diagram shows a square, its two diagonals and two line segments, each of which connects two midpoints of sides of the square. What fraction of the area of the square is shaded?",
    options: [
      { label: "A", text: "$\\dfrac{1}{8}$" },
      { label: "B", text: "$\\dfrac{1}{10}$" },
      { label: "C", text: "$\\dfrac{1}{12}$" },
      { label: "D", text: "$\\dfrac{1}{16}$" },
      { label: "E", text: "$\\dfrac{1}{24}$" },
    ],
    diagram: {
      alt: "A square with both diagonals drawn, plus a segment from the midpoint of the top side to the midpoint of the right side, and a segment from the midpoint of the left side to the midpoint of the bottom side. A small triangle near the centre-right is shaded.",
      svg: paperFigure(q4svg),
    },
  },
  {
    number: 5,
    statement:
      "We know that $1 + 2 + 3 + 4 = 10$. It is also true that $1^3 + 2^3 + 3^3 + 4^3 = 10^n$ for some integer $n$. What is this integer?",
    options: [
      { label: "A", text: "$1$" },
      { label: "B", text: "$2$" },
      { label: "C", text: "$3$" },
      { label: "D", text: "$4$" },
      { label: "E", text: "$5$" },
    ],
  },
  {
    number: 6,
    statement:
      "To draw a $3$ by $3$ square grid you need $8$ straight lines, as shown. How many straight lines do you need to draw an $n$ by $n$ square grid?",
    options: [
      { label: "A", text: "$n + 5$" },
      { label: "B", text: "$3n - 1$" },
      { label: "C", text: "$n^2 - 1$" },
      { label: "D", text: "$4(n - 1)$" },
      { label: "E", text: "$2(n + 1)$" },
    ],
    diagram: {
      alt: "A 3 by 3 square grid drawn with 4 horizontal and 4 vertical lines, totalling 8 lines.",
      svg: paperFigure(q6svg),
    },
  },
  {
    number: 7,
    statement: "What is $0.015\\%$ of $60$ million?",
    options: [
      { label: "A", text: "$900$" },
      { label: "B", text: "$9000$" },
      { label: "C", text: "$90\\,000$" },
      { label: "D", text: "$900\\,000$" },
      { label: "E", text: "$9\\,000\\,000$" },
    ],
  },
  {
    number: 8,
    statement: "$\\sqrt{\\sqrt{x}} = 3$. What is the value of $x$?",
    options: [
      { label: "A", text: "$\\sqrt{\\sqrt{3}}$" },
      { label: "B", text: "$\\sqrt{3}$" },
      { label: "C", text: "$9$" },
      { label: "D", text: "$12$" },
      { label: "E", text: "$81$" },
    ],
  },
  {
    number: 9,
    statement:
      "Merryn wrote down the numbers $2$, $0$, $2$, $3$ and one further number. What was the median of her five numbers?",
    options: [
      { label: "A", text: "$0$" },
      { label: "B", text: "$2$" },
      { label: "C", text: "$2.5$" },
      { label: "D", text: "$3$" },
      { label: "E", text: "more information required" },
    ],
  },
  {
    number: 10,
    statement:
      "In the crossnumber shown, 1 Across is a power of $5$, 2 Across is a power of $4$, and 1 Down is a power of $6$. Eight of the digits from $0$ to $9$ inclusive are used to fill the cells of the crossnumber. What is the sum of the two digits which are not used?",
    options: [
      { label: "A", text: "$12$" },
      { label: "B", text: "$13$" },
      { label: "C", text: "$14$" },
      { label: "D", text: "$15$" },
      { label: "E", text: "$16$" },
    ],
    diagram: {
      alt: "A staggered crossnumber grid. The top row of four cells (the first labelled 1) sits to the right; the bottom row of four cells (the first labelled 2) sits to the left, so the first top cell sits directly above the last bottom cell.",
      svg: paperFigure(q10svg, "w-64"),
    },
  },
  {
    number: 11,
    statement:
      "Jill was given a large jar of jam. She gave one sixth of the jam to Jan. Jill then gave one thirteenth of the remaining jam to Jas. Jill was left with $1$ kg of jam. What was the weight, in kg, of the jam in Jill's jar at the start?",
    options: [
      { label: "A", text: "$1.2$" },
      { label: "B", text: "$1.3$" },
      { label: "C", text: "$1.4$" },
      { label: "D", text: "$1.6$" },
      { label: "E", text: "$1.9$" },
    ],
  },
  {
    number: 12,
    statement:
      "In the diagram, $PQRS$ is a square, $PST$ is an equilateral triangle and $SRUVW$ is a regular pentagon. What is the size of angle $WTS$?",
    options: [
      { label: "A", text: "$35°$" },
      { label: "B", text: "$36°$" },
      { label: "C", text: "$37°$" },
      { label: "D", text: "$38°$" },
      { label: "E", text: "$39°$" },
    ],
    diagram: {
      alt: "A square PQRS with Q top-left, P top-right, R bottom-left, S bottom-right. An equilateral triangle PST points to the right with apex T. A regular pentagon SRUVW hangs below the square.",
      svg: paperFigure(q12svg),
    },
  },
  {
    number: 13,
    statement:
      "The mean of $p$ and $q$ is $13$; the mean of $q$ and $r$ is $16$; the mean of $r$ and $p$ is $7$. What is the mean of $p$, $q$ and $r$?",
    options: [
      { label: "A", text: "$12$" },
      { label: "B", text: "$13$" },
      { label: "C", text: "$14$" },
      { label: "D", text: "$15$" },
      { label: "E", text: "$16$" },
    ],
  },
  {
    number: 14,
    statement:
      "A regular octagon $PQRSTUVW$ has sides of length $2$ cm. When I shade the rectangles $PQTU$ and $RSVW$, four small triangles inside the octagon remain unshaded. What is the total area, in cm$^2$, of these four triangles?",
    options: [
      { label: "A", text: "$1$" },
      { label: "B", text: "$2$" },
      { label: "C", text: "$4$" },
      { label: "D", text: "$6$" },
      { label: "E", text: "$8$" },
    ],
  },
  {
    number: 15,
    statement:
      "How many of the following polygons could exist? A triangle with all three sides the same length, but three different interior angles. A quadrilateral with all four sides the same length, but four different interior angles. A pentagon with all five sides the same length, but five different interior angles.",
    options: [
      { label: "A", text: "only the pentagon" },
      { label: "B", text: "only the quadrilateral" },
      { label: "C", text: "the quadrilateral and the pentagon" },
      { label: "D", text: "all three" },
      { label: "E", text: "none of them" },
    ],
  },
  {
    number: 16,
    statement:
      "The sum of the lengths of the three sides of a right-angled triangle is $16$ cm. The sum of the squares of the lengths of the three sides of the triangle is $98$ cm$^2$. What is the area, in cm$^2$, of the triangle?",
    options: [
      { label: "A", text: "$8$" },
      { label: "B", text: "$10$" },
      { label: "C", text: "$12$" },
      { label: "D", text: "$14$" },
      { label: "E", text: "$16$" },
    ],
  },
  {
    number: 17,
    statement:
      "A $3$ by $2$ rectangle is split into four congruent right-angled triangles, as shown in the left-hand diagram. Those four triangles are rearranged to form a rhombus, as shown in the right-hand diagram. What is the ratio of the perimeter of the rectangle to the perimeter of the rhombus?",
    options: [
      { label: "A", text: "$3 : 2$" },
      { label: "B", text: "$2 : 1$" },
      { label: "C", text: "$1 : 1$" },
      { label: "D", text: "$1 : 2$" },
      { label: "E", text: "$2 : 3$" },
    ],
    diagram: {
      alt: "Left: a 3-by-2 rectangle (width 3, height 2) divided into four right-angled triangles by lines from the top-centre to the two bottom corners and a vertical line down the middle. Right: a rhombus formed by the same four triangles, with both diagonals drawn.",
      svg: paperFigure(q17svg, "w-72"),
    },
  },
  {
    number: 18,
    statement: "How many squares are exactly four greater than a prime?",
    options: [
      { label: "A", text: "$0$" },
      { label: "B", text: "$1$" },
      { label: "C", text: "$2$" },
      { label: "D", text: "$3$" },
      { label: "E", text: "$4$" },
    ],
  },
  {
    number: 19,
    statement:
      "What is the positive difference between the numerator and the denominator when the expression $$\\dfrac{n}{\\,n + 1 - \\dfrac{n + 2}{n + 3}\\,}$$ is written as a single fraction in its simplest form?",
    options: [
      { label: "A", text: "$2n + 2$" },
      { label: "B", text: "$n + 2$" },
      { label: "C", text: "$n$" },
      { label: "D", text: "$2$" },
      { label: "E", text: "$1$" },
    ],
  },
  {
    number: 20,
    statement:
      "I roll two standard six-sided fair dice. At least one of the scores obtained on the dice is $3$. What is the probability that both of the scores on the dice are $3$?",
    options: [
      { label: "A", text: "$\\dfrac{1}{12}$" },
      { label: "B", text: "$\\dfrac{1}{11}$" },
      { label: "C", text: "$\\dfrac{1}{6}$" },
      { label: "D", text: "$\\dfrac{1}{3}$" },
      { label: "E", text: "$\\dfrac{1}{4}$" },
    ],
  },
  {
    number: 21,
    statement:
      "A semicircle of radius $3$ units is drawn on one edge of a right-angled triangle, and a semicircle of radius $4$ units is drawn on another edge. The semicircles intersect on the hypotenuse of the triangle, as shown. What is the shaded area, in square units?",
    options: [
      { label: "A", text: "$\\dfrac{25\\pi}{2} - 24$" },
      { label: "B", text: "$12$" },
      { label: "C", text: "$\\dfrac{25\\pi}{2} - 6$" },
      { label: "D", text: "$25\\pi - 24$" },
      { label: "E", text: "$24$" },
    ],
    diagram: {
      alt: "A right-angled triangle with the right angle at top-left, a vertical edge of length 6 (diameter of the radius-3 semicircle drawn outward to the left) and a horizontal base of length 8 (diameter of the radius-4 semicircle drawn upward). The two semicircles intersect on the hypotenuse, and the lune-shaped regions are shaded.",
      svg: paperFigure(q21svg),
      caption: "The radius-$3$ and radius-$4$ semicircles meet on the hypotenuse.",
    },
  },
  {
    number: 22,
    statement:
      "The numbers $x$ and $y$ satisfy both of the equations $$23x + 977y = 2023 \\quad\\text{and}\\quad 977x + 23y = 2977.$$ What is the value of $x^2 - y^2$?",
    options: [
      { label: "A", text: "$1$" },
      { label: "B", text: "$2$" },
      { label: "C", text: "$3$" },
      { label: "D", text: "$4$" },
      { label: "E", text: "$5$" },
    ],
  },
  {
    number: 23,
    statement:
      "It is possible to choose, in two different ways, six different integers from $1$ to $9$ inclusive such that their product is a square. Let the two squares so obtained be $p^2$ and $q^2$, where $p$ and $q$ are both positive. What is the value of $p + q$?",
    options: [
      { label: "A", text: "$72$" },
      { label: "B", text: "$84$" },
      { label: "C", text: "$96$" },
      { label: "D", text: "$108$" },
      { label: "E", text: "$120$" },
    ],
  },
  {
    number: 24,
    statement:
      "A rectangle $PQRS$ has side-lengths $a$ and $b$, with $a < b$. The rectangle $PTUV$ has side-lengths $c$ and $d$, with $c < d$. Also, $a < d$ and $c < b$, as shown. The sides $RS$ and $TU$ cross at $X$. Which of these conditions guarantees that $Q$, $X$ and $V$ lie on a straight line?",
    options: [
      { label: "A", text: "$\\dfrac{a}{b} + \\dfrac{c}{d} = 1$" },
      { label: "B", text: "$\\dfrac{a}{c} + \\dfrac{b}{d} = 1$" },
      { label: "C", text: "$\\dfrac{a}{d} + \\dfrac{c}{b} = 1$" },
      { label: "D", text: "$\\dfrac{a}{c} + \\dfrac{d}{b} = 1$" },
      { label: "E", text: "$\\dfrac{c}{a} + \\dfrac{b}{d} = 1$" },
    ],
    diagram: {
      alt: "Two overlapping rectangles forming an L-shape. Tall rectangle PTUV on the left has width c and height d. Wide rectangle PQRS along the bottom has length b and height a. They share corner P at the bottom-left; sides RS and TU cross at X.",
      svg: paperFigure(q24svg),
    },
  },
  {
    number: 25,
    statement:
      "The diagram shows two unshaded circles which touch each other and also touch a larger circle. Chord $PQ$ of the larger circle is a tangent to both unshaded circles. The length of $PQ$ is $6$ units. What is the area, in square units, of the shaded region?",
    options: [
      { label: "A", text: "$3\\pi$" },
      { label: "B", text: "$\\dfrac{7\\pi}{2}$" },
      { label: "C", text: "$4\\pi$" },
      { label: "D", text: "$\\dfrac{9\\pi}{2}$" },
      { label: "E", text: "$5\\pi$" },
    ],
    diagram: {
      alt: "A large circle. Inside it, two unshaded circles (a smaller one above, a larger one below) touch each other and each touch the large circle. A horizontal chord PQ passes through their point of contact, tangent to both. The region of the large circle outside the two unshaded circles is shaded.",
      svg: paperFigure(q25svg),
    },
  },
];
