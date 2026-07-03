import type { PaperQuestion } from "@/lib/types";

/**
 * Intermediate Mathematical Olympiad — Hamilton Paper 2020.
 *
 * Transcribed from the official UKMT Hamilton paper (Thursday 19 March 2020)
 * for in-app timed practice. This is a written olympiad: full justified
 * solutions are required, not just answers. Auto-scoring is not possible —
 * students self-mark against the official solutions.
 *
 * © UK Mathematics Trust — questions are the intellectual property of UKMT and
 * are included here for educational practice.
 */

export const HMC_2020_QUESTIONS: PaperQuestion[] = [
  {
    number: 1,
    statement:
      "Arun and Disha have some numbered discs to share out between them. They want to end up with one pile each, not necessarily of the same size, where Arun's pile contains exactly one disc numbered with a multiple of $2$ and Disha's pile contains exactly one disc numbered with a multiple of $3$. For each case below, either count the number of ways of sharing the discs, or explain why it is impossible to share them in this way.\n\n(a) They start with ten discs numbered from $1$ to $10$.\n\n(b) They start with twenty discs numbered from $1$ to $20$.",
    parts: ["a", "b"],
  },
  {
    number: 2,
    statement:
      "In the UK, $1$p, $2$p and $5$p coins have thicknesses of $1.6$ mm, $2.05$ mm and $1.75$ mm respectively.\n\nUsing only $1$p and $5$p coins, Joe builds the shortest (non-empty) stack he can whose height in millimetres is equal to its value in pence. Penny does the same but using only $2$p and $5$p coins.\n\nWhose stack is more valuable?",
  },
  {
    number: 3,
    statement:
      "The diagram shows two semicircles with a common centre $O$ and a rectangle $OABC$. The line through $O$ and $C$ meets the small semicircle at $D$ and the large semicircle at $E$. The lengths $CD$ and $CE$ are equal.\n\nWhat fraction of the large semicircle is shaded?",
    diagram: {
      alt: "Two concentric semicircles with common centre O on a horizontal diameter. A rectangle OABC sits with O at the centre. The line from O through C is extended to meet the small semicircle at D and the large semicircle at E, with CD = CE.",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 130" role="img">
  <g stroke="currentColor" fill="none" stroke-width="1.4">
    <path d="M 20 110 A 80 80 0 0 1 180 110"/>
    <path d="M 60 110 A 40 40 0 0 1 140 110"/>
    <line x1="20" y1="110" x2="180" y2="110"/>
    <rect x="100" y="80" width="40" height="30"/>
    <line x1="100" y1="110" x2="55" y2="45"/>
  </g>
  <g font-size="12" fill="currentColor" font-family="Georgia, 'Times New Roman', serif" font-style="italic">
    <text x="96" y="124">O</text>
    <text x="98" y="76">C</text>
    <text x="142" y="78">B</text>
    <text x="142" y="122">A</text>
    <text x="78" y="82">D</text>
    <text x="46" y="42">E</text>
  </g>
</svg>`,
    },
  },
  {
    number: 4,
    statement:
      "Piercarlo chooses $n$ integers from $1$ to $1000$ inclusive. None of his integers is prime, and no two of them share a factor greater than $1$.\n\nWhat is the greatest possible value of $n$?",
  },
  {
    number: 5,
    statement:
      "In the diagram, $ABCD$ is a parallelogram, $M$ is the midpoint of $AB$ and $X$ is the point of intersection of $AC$ and $MD$.\n\nWhat is the ratio of the area of $MBCX$ to the area of $ABCD$?",
    diagram: {
      alt: "Parallelogram ABCD with D top-left, C top-right, A bottom-left, B bottom-right. M is the midpoint of the bottom side AB. Diagonals AC and MD cross at X, and region MBCX is a quadrilateral.",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 190 130" role="img">
  <g stroke="currentColor" fill="none" stroke-width="1.4">
    <polygon points="30,105 150,105 170,30 50,30"/>
    <line x1="30" y1="105" x2="150" y2="30"/>
    <line x1="90" y1="105" x2="50" y2="30"/>
  </g>
  <g fill="currentColor"><circle cx="72" cy="66" r="2.2"/></g>
  <g font-size="13" fill="currentColor" font-family="Georgia, 'Times New Roman', serif" font-style="italic">
    <text x="42" y="26">D</text>
    <text x="172" y="28">C</text>
    <text x="20" y="116">A</text>
    <text x="150" y="118">B</text>
    <text x="86" y="118">M</text>
    <text x="74" y="66">X</text>
  </g>
</svg>`,
    },
  },
  {
    number: 6,
    statement:
      "We write $\\lfloor x \\rfloor$ to represent the largest integer less than or equal to $x$.\n\nSo, for example, $\\lfloor 1.7 \\rfloor = 1$, $\\lfloor 2 \\rfloor = 2$, $\\lfloor \\pi \\rfloor = 3$ and $\\lfloor -0.4 \\rfloor = -1$.\n\nFind all real values of $x$ such that $\\lfloor 3x + 4 \\rfloor = \\lfloor 5x - 1 \\rfloor$.",
  },
];
