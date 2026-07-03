import type { PaperQuestion } from "@/lib/types";
import { paperFigure } from "./svg-figure";

// Figures derived from the official UKMT IMC 2017 PDF.
import q5svg from "./imc-2017/q5.svg?raw";
import q10svg from "./imc-2017/q10.svg?raw";
import q11svg from "./imc-2017/q11.svg?raw";
import q13svg from "./imc-2017/q13.svg?raw";
import q15svg from "./imc-2017/q15.svg?raw";
import q17svg from "./imc-2017/q17.svg?raw";
import q20svg from "./imc-2017/q20.svg?raw";
import q22svg from "./imc-2017/q22.svg?raw";
import q25svg from "./imc-2017/q25.svg?raw";

/**
 * Intermediate Mathematical Challenge 2017 — full transcription.
 *
 * Transcribed from the official UKMT IMC 2017 paper (Thursday 2 February 2017)
 * for in-app practice. Statements are reproduced as faithfully as possible;
 * diagrams are derived from the official PDF figures. Answer key lives in
 * `papers.ts` and was verified against the official UKMT solutions.
 *
 * © UK Mathematics Trust — questions are the intellectual property of UKMT and
 * are included here for educational practice.
 */

export const IMC_2017_QUESTIONS: PaperQuestion[] = [
  {
    number: 1,
    statement:
      "What is the value of $\\dfrac{2}{5} + \\dfrac{2}{50} + \\dfrac{2}{500}$?",
    options: [
      { label: "A", text: "$0.111$" },
      { label: "B", text: "$0.222$" },
      { label: "C", text: "$0.333$" },
      { label: "D", text: "$0.444$" },
      { label: "E", text: "$0.555$" },
    ],
  },
  {
    number: 2,
    statement:
      "Each of the diagrams below shows a circle and four small squares. In each case, the centre of the circle is the point where all four squares meet. In one of the diagrams, exactly one third of the circle is shaded. Which one?",
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
      "How many squares have $7$ as their units digit?",
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
      "Which of the following is not the sum of two primes?",
    options: [
      { label: "A", text: "$5$" },
      { label: "B", text: "$7$" },
      { label: "C", text: "$9$" },
      { label: "D", text: "$11$" },
      { label: "E", text: "$13$" },
    ],
  },
  {
    number: 5,
    statement:
      "The diagram shows two circles with the same centre. The radius of the outer circle is twice the radius of the inner circle. The region between the inner circle and the outer circle is divided into six equal segments as shown. What fraction of the area of the outer circle is shaded?",
    options: [
      { label: "A", text: "$\\dfrac{3}{7}$" },
      { label: "B", text: "$\\dfrac{3}{8}$" },
      { label: "C", text: "$\\dfrac{3}{9}$" },
      { label: "D", text: "$\\dfrac{3}{10}$" },
      { label: "E", text: "$\\dfrac{3}{11}$" },
    ],
    diagram: {
      alt: "Two concentric circles where the outer radius is twice the inner. The annular region between them is divided into six equal segments, with alternate segments shaded.",
      svg: paperFigure(q5svg),
    },
  },
  {
    number: 6,
    statement:
      "The angles of a quadrilateral are in the ratio $3:4:5:6$. What is the difference between the largest angle and the smallest angle?",
    options: [
      { label: "A", text: "$30°$" },
      { label: "B", text: "$40°$" },
      { label: "C", text: "$50°$" },
      { label: "D", text: "$60°$" },
      { label: "E", text: "$70°$" },
    ],
  },
  {
    number: 7,
    statement:
      "Four different positive integers are to be chosen so that they have a mean of $2017$. What is the smallest possible range of the chosen integers?",
    options: [
      { label: "A", text: "$2$" },
      { label: "B", text: "$3$" },
      { label: "C", text: "$4$" },
      { label: "D", text: "$5$" },
      { label: "E", text: "$6$" },
    ],
  },
  {
    number: 8,
    statement:
      "Which of the following numbers is the largest?\n\nA $1.3542$\n\nB $1.35\\dot{4}2$\n\nC $1.3\\dot{5}4\\dot{2}$\n\nD $1.\\dot{3}54\\dot{2}$\n\nE $1.354\\dot{2}$",
    options: [
      { label: "A", text: "$1.3542$" },
      { label: "B", text: "$1.35\\dot{4}2$" },
      { label: "C", text: "$1.3\\dot{5}4\\dot{2}$" },
      { label: "D", text: "$1.\\dot{3}54\\dot{2}$" },
      { label: "E", text: "$1.354\\dot{2}$" },
    ],
  },
  {
    number: 9,
    statement:
      "The number $\\overline{tu}$ is the two-digit number with units digit $u$ and tens digit $t$. The digits $a$ and $b$ are distinct, and non-zero. What is the largest possible value of $\\overline{ab} - \\overline{ba}$?",
    options: [
      { label: "A", text: "$81$" },
      { label: "B", text: "$72$" },
      { label: "C", text: "$63$" },
      { label: "D", text: "$54$" },
      { label: "E", text: "$45$" },
    ],
  },
  {
    number: 10,
    statement:
      "The diagram shows three rectangles. What is the value of $x$?",
    options: [
      { label: "A", text: "$108$" },
      { label: "B", text: "$104$" },
      { label: "C", text: "$100$" },
      { label: "D", text: "$96$" },
      { label: "E", text: "$92$" },
    ],
    diagram: {
      alt: "Three rectangles arranged so that certain angles are marked as 43 degrees, 29 degrees, and x degrees.",
      svg: paperFigure(q10svg),
    },
  },
  {
    number: 11,
    statement:
      "The diagram shows four equilateral triangles with sides of lengths $1$, $2$, $3$ and $4$. The area of the shaded region is equal to $n$ times the area of the unshaded triangle of side-length $1$. What is the value of $n$?",
    options: [
      { label: "A", text: "$8$" },
      { label: "B", text: "$11$" },
      { label: "C", text: "$18$" },
      { label: "D", text: "$23$" },
      { label: "E", text: "$26$" },
    ],
    diagram: {
      alt: "Four nested equilateral triangles with side lengths 1, 2, 3 and 4. Certain regions between the triangles are shaded.",
      svg: paperFigure(q11svg),
    },
  },
  {
    number: 12,
    statement:
      "The combined age of Alice and Bob is $39$. The combined age of Bob and Clare is $40$. The combined age of Clare and Dan is $38$. The combined age of Dan and Eve is $44$. The total of all five ages is $105$. Which of the five is the youngest?",
    options: [
      { label: "A", text: "Alice" },
      { label: "B", text: "Bob" },
      { label: "C", text: "Clare" },
      { label: "D", text: "Dan" },
      { label: "E", text: "Eve" },
    ],
  },
  {
    number: 13,
    statement:
      "The diagram shows a quadrilateral $PQRS$ made from two similar right-angled triangles, $PQR$ and $PRS$. The length of $PQ$ is $3$, the length of $QR$ is $4$ and $\\angle PRQ = \\angle PSR$. What is the perimeter of $PQRS$?",
    options: [
      { label: "A", text: "$22$" },
      { label: "B", text: "$22\\tfrac{5}{6}$" },
      { label: "C", text: "$27$" },
      { label: "D", text: "$32$" },
      { label: "E", text: "$45\\tfrac{1}{3}$" },
    ],
    diagram: {
      alt: "A quadrilateral PQRS formed from two similar right-angled triangles PQR and PRS. PQ is labelled 3 and QR is labelled 4.",
      svg: paperFigure(q13svg),
    },
  },
  {
    number: 14,
    statement:
      "For what value of $x$ is $64^x$ equal to $512^5$?",
    options: [
      { label: "A", text: "$6$" },
      { label: "B", text: "$7.5$" },
      { label: "C", text: "$8$" },
      { label: "D", text: "$16$" },
      { label: "E", text: "$40$" },
    ],
  },
  {
    number: 15,
    statement:
      "In the diagram shown, $PQ = SQ = QR$ and $\\angle SPQ = 2 \\times \\angle RSQ$. What is the size of angle $QRS$?",
    options: [
      { label: "A", text: "$20°$" },
      { label: "B", text: "$25°$" },
      { label: "C", text: "$30°$" },
      { label: "D", text: "$35°$" },
      { label: "E", text: "$40°$" },
    ],
    diagram: {
      alt: "A triangle with vertices P, R and S, with Q on side PR such that PQ = SQ = QR. Angle SPQ is twice angle RSQ.",
      svg: paperFigure(q15svg),
    },
  },
  {
    number: 16,
    statement:
      "The product of two positive integers is equal to twice their sum and also equal to six times the difference between the two integers. What is the sum of these two integers?",
    options: [
      { label: "A", text: "$6$" },
      { label: "B", text: "$7$" },
      { label: "C", text: "$8$" },
      { label: "D", text: "$9$" },
      { label: "E", text: "$10$" },
    ],
  },
  {
    number: 17,
    statement:
      "The diagram shows two rectangles and a regular pentagon. One side of each rectangle has been extended to meet at $X$. What is the value of $x$?",
    options: [
      { label: "A", text: "$52$" },
      { label: "B", text: "$54$" },
      { label: "C", text: "$56$" },
      { label: "D", text: "$58$" },
      { label: "E", text: "$60$" },
    ],
    diagram: {
      alt: "Two rectangles placed on either side of a regular pentagon, each with one side extended to meet at a point X. The angle at X is labelled x degrees.",
      svg: paperFigure(q17svg),
    },
  },
  {
    number: 18,
    statement:
      "A water tank is $\\dfrac{5}{6}$ full. When $30$ litres of water are removed from the tank, the tank is $\\dfrac{4}{5}$ full. How much water does the tank hold when full?",
    options: [
      { label: "A", text: "$180$ litres" },
      { label: "B", text: "$360$ litres" },
      { label: "C", text: "$540$ litres" },
      { label: "D", text: "$720$ litres" },
      { label: "E", text: "$900$ litres" },
    ],
  },
  {
    number: 19,
    statement:
      "$PQRS$ is a square. Point $T$ lies on $PQ$ so that $PT:TQ = 1:2$. Point $U$ lies on $SR$ so that $SU:UR = 1:2$. The perimeter of $PTUS$ is $40$ cm. What is the area of $PTUS$?",
    options: [
      { label: "A", text: "$40 \\text{ cm}^2$" },
      { label: "B", text: "$45 \\text{ cm}^2$" },
      { label: "C", text: "$48 \\text{ cm}^2$" },
      { label: "D", text: "$60 \\text{ cm}^2$" },
      { label: "E", text: "$75 \\text{ cm}^2$" },
    ],
  },
  {
    number: 20,
    statement:
      "The diagram shows seven circular arcs and a heptagon with equal sides but unequal angles. The sides of the heptagon have length $4$. The centre of each arc is a vertex of the heptagon, and the ends of the arc are the midpoints of the two adjacent sides. What is the total shaded area?",
    options: [
      { label: "A", text: "$12\\pi$" },
      { label: "B", text: "$14\\pi$" },
      { label: "C", text: "$16\\pi$" },
      { label: "D", text: "$18\\pi$" },
      { label: "E", text: "$20\\pi$" },
    ],
    diagram: {
      alt: "A heptagon with equal sides of length 4 but unequal angles. Seven circular arcs are drawn, each centred at a vertex of the heptagon with endpoints at the midpoints of the two adjacent sides. The regions inside the arcs are shaded.",
      svg: paperFigure(q20svg),
    },
  },
  {
    number: 21,
    statement:
      "Brachycephalus frogs are tiny — less than $1$ cm long — and have three toes on each foot and two fingers on each 'hand', whereas the common frog has five toes on each foot and four fingers on each hand. Some Brachycephalus and common frogs are in a bucket. Each frog has all its fingers and toes. Between them they have $122$ toes and $92$ fingers. How many frogs are in the bucket?",
    options: [
      { label: "A", text: "$15$" },
      { label: "B", text: "$17$" },
      { label: "C", text: "$19$" },
      { label: "D", text: "$21$" },
      { label: "E", text: "$23$" },
    ],
  },
  {
    number: 22,
    statement:
      "The diagram shows an arc $PQ$ of a circle with centre $O$ and radius $8$. Angle $QOP$ is a right angle, the point $M$ is the midpoint of $OP$ and $N$ lies on the arc $PQ$ so that $MN$ is perpendicular to $OP$. Which of the following is closest to the length of the perimeter of triangle $PNM$?",
    options: [
      { label: "A", text: "$17$" },
      { label: "B", text: "$18$" },
      { label: "C", text: "$19$" },
      { label: "D", text: "$20$" },
      { label: "E", text: "$21$" },
    ],
    diagram: {
      alt: "A quarter-circle arc PQ with centre O and radius 8. M is the midpoint of OP and N lies on the arc such that MN is perpendicular to OP. Triangle PNM is shown.",
      svg: paperFigure(q22svg),
    },
  },
  {
    number: 23,
    statement:
      "Two brothers and three sisters form a single line for a photograph. The two boys refuse to stand next to each other. How many different line-ups are possible?",
    options: [
      { label: "A", text: "$24$" },
      { label: "B", text: "$36$" },
      { label: "C", text: "$60$" },
      { label: "D", text: "$72$" },
      { label: "E", text: "$120$" },
    ],
  },
  {
    number: 24,
    statement:
      "The $n$th term in a certain sequence is calculated by multiplying together all the numbers $\\sqrt{1 + \\dfrac{1}{k}}$, where $k$ takes all the integer values from $2$ to $n + 1$ inclusive. For example the third term in the sequence is $\\sqrt{1 + \\dfrac{1}{2}} \\times \\sqrt{1 + \\dfrac{1}{3}} \\times \\sqrt{1 + \\dfrac{1}{4}}$. Which is the smallest value of $n$ for which the $n$th term of the sequence is an integer?",
    options: [
      { label: "A", text: "$3$" },
      { label: "B", text: "$5$" },
      { label: "C", text: "$6$" },
      { label: "D", text: "$7$" },
      { label: "E", text: "more than $7$" },
    ],
  },
  {
    number: 25,
    statement:
      "The diagram shows a circle with radius $2$ and a square with sides of length $2$. The centre of the circle lies on the perpendicular bisector of a side of the square, at a distance $x$ from the side, as shown. The shaded region — inside the square but outside the circle — has area $2$. What is the value of $x$?",
    options: [
      { label: "A", text: "$\\dfrac{\\pi}{3} + \\dfrac{\\sqrt{3}}{2} - 1$" },
      { label: "B", text: "$\\dfrac{\\pi}{3} + \\dfrac{\\sqrt{3}}{4} - 1$" },
      { label: "C", text: "$\\dfrac{\\pi}{3} + \\dfrac{1}{2}$" },
      { label: "D", text: "$\\dfrac{\\pi}{3} + 1$" },
      { label: "E", text: "$\\dfrac{\\pi}{3}$" },
    ],
    diagram: {
      alt: "A circle of radius 2 overlapping a square of side 2. The centre of the circle is on the perpendicular bisector of one side of the square at distance x from that side. The region inside the square but outside the circle is shaded.",
      svg: paperFigure(q25svg),
    },
  },
];
