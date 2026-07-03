import type { PaperQuestion } from "@/lib/types";

/**
 * Intermediate Mathematical Olympiad — Hamilton Paper 2021.
 *
 * Transcribed from the official UKMT Hamilton paper (Monday 15 March 2021)
 * for in-app timed practice. This is a written olympiad: full justified
 * solutions are required, not just answers. Auto-scoring is not possible —
 * students self-mark against the official solutions.
 *
 * © UK Mathematics Trust — questions are the intellectual property of UKMT and
 * are included here for educational practice.
 */

export const HMC_2021_QUESTIONS: PaperQuestion[] = [
  {
    number: 1,
    statement:
      "Naomi has a broken calculator. All it can do is either add one to the previous answer, or square the previous answer. (It performs the operations correctly.)\n\nNaomi starts with $2$ on the screen. In how many ways can she obtain an answer of $1000$?",
  },
  {
    number: 2,
    statement:
      "The diagram shows two unshaded squares inside a larger square.\n\nWhat fraction of the larger square is shaded?",
    diagram: {
      alt: "A large square containing two smaller unshaded squares placed inside it at angles; the remaining region of the large square is shaded.",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 130" role="img">
  <rect x="15" y="15" width="100" height="100" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="1.4"/>
  <g fill="#ffffff" stroke="currentColor" stroke-width="1.3">
    <polygon points="15,55 55,15 95,55 55,95"/>
    <rect x="75" y="75" width="40" height="40"/>
  </g>
</svg>`,
    },
  },
  {
    number: 3,
    statement:
      "For how many positive integers $n$ less than $200$ is $n^n$ a cube and $(n+1)^{n+1}$ a square?",
  },
  {
    number: 4,
    statement:
      "$ABCD$ is a rectangle with area $6$ cm$^2$. The point $E$ lies on $AB$, $F$ lies on $BC$, $G$ lies on $CD$ and $H$ lies on $DA$. The point $I$ lies on $AC$ and is the point of intersection of $EG$ and $FH$, and $AEIH$ and $IFCG$ are both rectangles. One possible diagram is shown to the right.\n\nGiven that the combined area of $AEIH$ and $IFCG$ is $4$ cm$^2$, find all possible values for the area of rectangle $AEIH$ in cm$^2$.",
    diagram: {
      alt: "Rectangle ABCD with D top-left, C top-right, A bottom-left, B bottom-right. Point I lies on diagonal AC. E on AB, F on BC, G on CD, H on DA. Rectangles AEIH (bottom-left) and IFCG (top-right) meet at I along the diagonal.",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 130" role="img">
  <g stroke="currentColor" fill="none" stroke-width="1.4">
    <rect x="25" y="25" width="130" height="85"/>
    <line x1="25" y1="110" x2="155" y2="25"/>
    <rect x="25" y="70" width="60" height="40"/>
    <rect x="85" y="25" width="70" height="45"/>
  </g>
  <g font-size="12" fill="currentColor" font-family="Georgia, 'Times New Roman', serif" font-style="italic">
    <text x="16" y="24">D</text>
    <text x="123" y="22">G</text>
    <text x="157" y="24">C</text>
    <text x="16" y="74">H</text>
    <text x="88" y="66">I</text>
    <text x="157" y="72">F</text>
    <text x="16" y="122">A</text>
    <text x="80" y="122">E</text>
    <text x="157" y="122">B</text>
  </g>
</svg>`,
    },
  },
  {
    number: 5,
    statement:
      "Find all real numbers $x$, $y$, $z$ such that $x^2 + y^2 + z^2 = x - z = 2$.",
  },
  {
    number: 6,
    statement:
      "Humpty buys a box of $15$ eggs, with $3$ rows and $5$ columns. Each meal he removes one egg to cook and eat. If necessary, he moves one or more eggs in the box so that between meals there are always two lines of reflective symmetry. What is the smallest total number of extra egg moves he can make while he empties the box?\n\nNote: You must carefully justify that your answer is minimal; that it is impossible to make fewer extra egg moves while emptying the box.",
  },
];
