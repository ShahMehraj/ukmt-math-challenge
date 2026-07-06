import type { Problem } from "@/lib/types";

/**
 * Original multiple-correct / mixed practice problems (chunk C, source #25-#36)
 * reworded from the Cengage "Sequences & Series" chapter exercise bank.
 * Mathematically identical to the source; English rewritten in the app's voice.
 */

const TAG = "cengage-seq";

export const seqMultiC: Problem[] = [
  {
    id: "seq-mc-025",
    statement:
      "Consider the sum $S = \\dfrac{1}{\\sqrt{2}+\\sqrt{5}}+\\dfrac{1}{\\sqrt{5}+\\sqrt{8}}+\\dfrac{1}{\\sqrt{8}+\\sqrt{11}}+\\cdots$ up to $n$ terms. Which of the statements below hold?\n(1) $S = \\dfrac{\\sqrt{3n+2}-\\sqrt{2}}{3}$\n(2) $S = \\dfrac{n}{\\sqrt{2+3n}+\\sqrt{2}}$\n(3) $S$ is less than $n$\n(4) $S$ is less than $\\sqrt{\\dfrac{n}{3}}$",
    format: "text",
    answer: "1, 2, 3, 4",
    acceptedAnswers: ["1,2,3,4", "(1),(2),(3),(4)", "1, 2, 3, 4"],
    topic: "sequences",
    subtopic: "Sigma & Telescoping",
    concepts: ["rationalisation", "telescoping sum", "bounding"],
    difficulty: "hard",
    source: "original",
    skills: ["rationalising surd denominators", "telescoping", "estimating bounds"],
    estMinutes: 6,
    tags: [TAG, "telescoping"],
    hints: [
      "Rationalise each term: $\\dfrac{1}{\\sqrt{k}+\\sqrt{k+3}} = \\dfrac{\\sqrt{k+3}-\\sqrt{k}}{3}$.",
      "After telescoping only the first and last surds survive; then bound the closed form.",
    ],
    solution:
      "Each denominator has the form $\\sqrt{k}+\\sqrt{k+3}$, so rationalising gives $\\dfrac{\\sqrt{k+3}-\\sqrt{k}}{3}$. Summing $n$ terms telescopes to $\\dfrac{\\sqrt{3n+2}-\\sqrt{2}}{3}$, which confirms (1). Multiplying numerator and denominator by the conjugate, $\\dfrac{\\sqrt{3n+2}-\\sqrt{2}}{3} = \\dfrac{(3n+2)-2}{3(\\sqrt{3n+2}+\\sqrt{2})} = \\dfrac{n}{\\sqrt{2+3n}+\\sqrt{2}}$, confirming (2). From this last form, $\\sqrt{2+3n}+\\sqrt{2} > \\sqrt{3n}$, so $S = \\dfrac{n}{\\sqrt{2+3n}+\\sqrt{2}} < \\dfrac{n}{\\sqrt{3n}} = \\sqrt{\\dfrac{n}{3}}$. Hence (4) holds, and since $\\sqrt{n/3} \\le n$ for $n \\ge 1$, statement (3) $S < n$ holds too. All four statements are correct.",
    solutionSteps: [
      "Rationalise each term to $\\dfrac{\\sqrt{k+3}-\\sqrt{k}}{3}$.",
      "Telescope to $\\dfrac{\\sqrt{3n+2}-\\sqrt{2}}{3}$ (statement 1).",
      "Rewrite via conjugate as $\\dfrac{n}{\\sqrt{2+3n}+\\sqrt{2}}$ (statement 2).",
      "Since the denominator exceeds $\\sqrt{3n}$, $S < \\sqrt{n/3} \\le n$, so (4) and (3) both hold.",
    ],
  },
  {
    id: "seq-mc-026",
    statement:
      "Numbers are written in a staircase triangle: row 1 is $1$; row 2 is $2,\\,3$; row 3 is $4,\\,5,\\,6$; row 4 is $7,\\,8,\\,9,\\,10$; and so on, each row holding one more entry than the row above. For the 20th row, which statements are correct?\n(1) the last term equals $210$\n(2) the first term equals $191$\n(3) the sum of the row equals $4010$\n(4) the sum of the row equals $4200$",
    format: "text",
    answer: "1, 2, 3",
    acceptedAnswers: ["1,2,3", "(1),(2),(3)"],
    topic: "sequences",
    subtopic: "Arithmetic Progression",
    concepts: ["triangular numbers", "row sums", "arithmetic series"],
    difficulty: "medium",
    source: "original",
    skills: ["indexing patterned arrays", "arithmetic series sum"],
    estMinutes: 5,
    tags: [TAG, "arithmetic-progression"],
    hints: [
      "The last entry of row $n$ is $1+2+\\cdots+n = \\tfrac{1}{2}n(n+1)$.",
      "The row has $n$ consecutive integers with common difference $1$.",
    ],
    solution:
      "The last term of row $n$ is $\\dfrac{1}{2}n(n+1)$; for $n=20$ this is $\\dfrac{1}{2}\\cdot20\\cdot21 = 210$, confirming (1). The first term is the last term minus $(n-1)$: $210-19 = 191 = \\dfrac{1}{2}(20^2-20+2)$, confirming (2). The row sum is $\\dfrac{n}{2}(\\text{first}+\\text{last}) = \\dfrac{20}{2}(191+210) = 10\\cdot401 = 4010 = \\dfrac{1}{2}n(n^2+1)$, confirming (3) and ruling out (4).",
    solutionSteps: [
      "Last term of row $n$: $\\tfrac{1}{2}n(n+1) = 210$ for $n=20$.",
      "First term: $210 - 19 = 191$.",
      "Row sum: $\\tfrac{20}{2}(191+210) = 4010$.",
    ],
  },
  {
    id: "seq-mc-027",
    statement:
      "Suppose $x+y+z = 15$ when $a,\\,x,\\,y,\\,z,\\,b$ form an A.P., and $\\dfrac{1}{x}+\\dfrac{1}{y}+\\dfrac{1}{z} = \\dfrac{5}{3}$ when $a,\\,x,\\,y,\\,z,\\,b$ form an H.P. Which statements hold?\n(1) the G.M. of $a$ and $b$ is $3$\n(2) one possible value of $a+2b$ is $11$\n(3) the A.M. of $a$ and $b$ is $6$\n(4) the greatest value of $a-b$ is $8$",
    format: "text",
    answer: "1, 2, 4",
    acceptedAnswers: ["1,2,4", "(1),(2),(4)"],
    topic: "sequences",
    subtopic: "Means & Inequalities",
    concepts: ["arithmetic mean", "harmonic mean", "geometric mean"],
    difficulty: "hard",
    source: "original",
    skills: ["A.P./H.P. mean insertion", "solving simultaneous equations"],
    estMinutes: 6,
    tags: [TAG, "means"],
    hints: [
      "For three A.M.s, $x+y+z = 3\\cdot\\dfrac{a+b}{2}$.",
      "For three H.M.s, $\\dfrac{1}{x}+\\dfrac{1}{y}+\\dfrac{1}{z} = \\dfrac{3}{2}\\left(\\dfrac{1}{a}+\\dfrac{1}{b}\\right)$.",
    ],
    solution:
      "With $x,y,z$ the three arithmetic means, $x+y+z = 3\\cdot\\dfrac{a+b}{2} = 15$, so $a+b = 10$. With $x,y,z$ the three harmonic means, $\\dfrac{1}{x}+\\dfrac{1}{y}+\\dfrac{1}{z} = \\dfrac{3}{2}\\cdot\\dfrac{a+b}{ab} = \\dfrac{5}{3}$, giving $\\dfrac{3\\cdot10}{2ab} = \\dfrac{5}{3}$, hence $ab = 9$. Thus $\\{a,b\\} = \\{9,1\\}$. Then $\\mathrm{G.M.} = \\sqrt{ab} = 3$ (1 true); $a+2b$ is $9+2 = 11$ or $1+18 = 19$, so $11$ is possible (2 true); $\\mathrm{A.M.} = \\dfrac{a+b}{2} = 5$, not $6$ (3 false); the greatest $a-b = 9-1 = 8$ (4 true).",
    solutionSteps: [
      "Three A.M.s: $x+y+z = \\tfrac{3}{2}(a+b) = 15 \\Rightarrow a+b = 10$.",
      "Three H.M.s: $\\tfrac{3}{2}\\cdot\\tfrac{a+b}{ab} = \\tfrac{5}{3} \\Rightarrow ab = 9$.",
      "Solve: $\\{a,b\\} = \\{9,1\\}$; check each claim.",
    ],
  },
  {
    id: "seq-mc-028",
    statement:
      "Let $a,\\,b,\\,c$ be in H.P. What is the value of $\\dfrac{(ac+ab-bc)(ab+bc-ac)}{(abc)^2}$?\n(1) $\\dfrac{(a+c)(3a-c)}{4a^2c^2}$\n(2) $\\dfrac{2}{bc}-\\dfrac{1}{b^2}$\n(3) $\\dfrac{2}{bc}-\\dfrac{1}{a^2}$\n(4) $\\dfrac{(a-c)(3a+c)}{4a^2c^2}$",
    format: "text",
    answer: "1, 2",
    acceptedAnswers: ["1,2", "(1),(2)"],
    topic: "sequences",
    subtopic: "Harmonic Progression",
    concepts: ["harmonic progression", "algebraic manipulation"],
    difficulty: "hard",
    source: "original",
    skills: ["H.P. reciprocal condition", "expression simplification"],
    estMinutes: 6,
    tags: [TAG, "harmonic-progression"],
    hints: [
      "Divide numerator and denominator by $(abc)^2$ to express in reciprocals.",
      "In H.P., $\\dfrac{2}{b} = \\dfrac{1}{a}+\\dfrac{1}{c}$.",
    ],
    solution:
      "Dividing through by $(abc)^2$, the expression equals $\\left(\\dfrac{1}{b}+\\dfrac{1}{c}-\\dfrac{1}{a}\\right)\\left(\\dfrac{1}{c}+\\dfrac{1}{a}-\\dfrac{1}{b}\\right)$. Since $a,b,c$ are in H.P., $\\dfrac{1}{a}+\\dfrac{1}{c} = \\dfrac{2}{b}$. Substituting, the first factor becomes $\\dfrac{2}{c}-\\dfrac{1}{b}$ (using $\\tfrac{1}{a} = \\tfrac{2}{b}-\\tfrac{1}{c}$) and the second becomes $\\dfrac{1}{b}$, giving $\\left(\\dfrac{2}{c}-\\dfrac{1}{b}\\right)\\dfrac{1}{b} = \\dfrac{2}{bc}-\\dfrac{1}{b^2}$, which is (2). Eliminating $b$ via $b = \\dfrac{2ac}{a+c}$ turns this into $\\dfrac{(a+c)(3a-c)}{4a^2c^2}$, which is (1). Choices (3) and (4) do not match.",
    solutionSteps: [
      "Rewrite as $\\left(\\tfrac{1}{b}+\\tfrac{1}{c}-\\tfrac{1}{a}\\right)\\left(\\tfrac{1}{c}+\\tfrac{1}{a}-\\tfrac{1}{b}\\right)$.",
      "Use $\\tfrac{1}{a}+\\tfrac{1}{c} = \\tfrac{2}{b}$ to reduce to $\\tfrac{2}{bc}-\\tfrac{1}{b^2}$ (statement 2).",
      "Substitute $b = \\tfrac{2ac}{a+c}$ to obtain $\\tfrac{(a+c)(3a-c)}{4a^2c^2}$ (statement 1).",
    ],
  },
  {
    id: "seq-mc-029",
    statement:
      "Let $p,\\,q,\\,r$ be in A.P. Which of the following is/are true?\n(1) the $p$th, $q$th, and $r$th terms of an A.P. are in A.P.\n(2) the $p$th, $q$th, and $r$th terms of a G.P. are in G.P.\n(3) the $p$th, $q$th, and $r$th terms of an H.P. are in H.P.\n(4) none of these",
    format: "text",
    answer: "1, 2, 3",
    acceptedAnswers: ["1,2,3", "(1),(2),(3)"],
    topic: "sequences",
    subtopic: "Means & Inequalities",
    concepts: ["equidistant terms", "A.P. index property"],
    difficulty: "medium",
    source: "original",
    skills: ["index selection in progressions"],
    estMinutes: 4,
    tags: [TAG, "arithmetic-progression"],
    hints: [
      "If $p,q,r$ are in A.P. then $2q = p+r$, so the picked indices are equally spaced.",
      "Equally spaced terms of any A.P./G.P./H.P. keep the same kind of progression.",
    ],
    solution:
      "Since $p,q,r$ are in A.P., the indices are equidistant ($2q = p+r$). Selecting equidistant terms from any progression preserves its type: from an A.P. they stay in A.P. (1), from a G.P. they stay in G.P. (2), and from an H.P. they stay in H.P. (3). Hence (1), (2), (3) all hold and (4) is false.",
    solutionSteps: [
      "$p,q,r$ in A.P. means $2q = p+r$ — equidistant indices.",
      "Equidistant terms of an A.P./G.P./H.P. form the same type of progression.",
    ],
  },
  {
    id: "seq-mc-030",
    statement:
      "Suppose $x^2+9y^2+25z^2 = xyz\\left(\\dfrac{15}{x}+\\dfrac{5}{y}+\\dfrac{3}{z}\\right)$. Which statements follow?\n(1) $x,\\,y,\\,z$ are in H.P.\n(2) $\\dfrac{1}{x},\\,\\dfrac{1}{y},\\,\\dfrac{1}{z}$ are in A.P.\n(3) $x,\\,y,\\,z$ are in G.P.\n(4) $\\dfrac{1}{x},\\,\\dfrac{1}{y},\\,\\dfrac{1}{z}$ are in G.P.",
    format: "text",
    answer: "1, 2",
    acceptedAnswers: ["1,2", "(1),(2)"],
    topic: "sequences",
    subtopic: "Means & Inequalities",
    concepts: ["sum of squares", "harmonic progression", "perfect-square decomposition"],
    difficulty: "hard",
    source: "original",
    skills: ["recognising sum-of-squares identity"],
    estMinutes: 6,
    tags: [TAG, "harmonic-progression"],
    hints: [
      "The right side simplifies to $15yz+5zx+3xy$.",
      "Try to write everything as $\\tfrac{1}{2}[(x-3y)^2+(3y-5z)^2+(x-5z)^2]$.",
    ],
    solution:
      "The equation reduces to $x^2+9y^2+25z^2 = 15yz+5zx+3xy$, i.e. $x^2+(3y)^2+(5z)^2-(x)(3y)-(3y)(5z)-(x)(5z) = 0$. This equals $\\dfrac{1}{2}\\big[(x-3y)^2+(3y-5z)^2+(x-5z)^2\\big] = 0$, forcing $x = 3y = 5z$. Then $\\dfrac{1}{x} : \\dfrac{1}{y} : \\dfrac{1}{z} = 1 : 3 : 5$, so $\\dfrac{1}{x},\\dfrac{1}{y},\\dfrac{1}{z}$ are in A.P. (2), which means $x,y,z$ are in H.P. (1). They are not in G.P., so (3) and (4) fail.",
    solutionSteps: [
      "Simplify RHS to $15yz+5zx+3xy$ and move all terms to one side.",
      "Recognise $\\tfrac{1}{2}[(x-3y)^2+(3y-5z)^2+(x-5z)^2] = 0$.",
      "Conclude $x = 3y = 5z$, giving reciprocals in A.P. and $x,y,z$ in H.P.",
    ],
  },
  {
    id: "seq-mc-031",
    statement:
      "Let $A_1, A_2$; $G_1, G_2$; and $H_1, H_2$ be, respectively, the two arithmetic, two geometric, and two harmonic means inserted between the quantities $a$ and $b$. Then $ab$ equals\n(1) $A_1 H_2$\n(2) $A_2 H_1$\n(3) $G_1 G_2$\n(4) none of these",
    format: "text",
    answer: "1, 2, 3",
    acceptedAnswers: ["1,2,3", "(1),(2),(3)"],
    topic: "sequences",
    subtopic: "Means & Inequalities",
    concepts: ["inserting means", "A.P. G.P. H.P. means"],
    difficulty: "hard",
    source: "original",
    skills: ["computing inserted means", "cross-mean identities"],
    estMinutes: 7,
    tags: [TAG, "means"],
    hints: [
      "Insert two A.M.s with $d = \\dfrac{b-a}{3}$, two G.M.s with $r = (b/a)^{1/3}$.",
      "For H.M.s, work with reciprocals in A.P.",
    ],
    solution:
      "Inserting two arithmetic means: $A_1 = \\dfrac{2a+b}{3}$, $A_2 = \\dfrac{a+2b}{3}$. Inserting two geometric means with $r = (b/a)^{1/3}$: $G_1 = a^{2/3}b^{1/3}$, $G_2 = a^{1/3}b^{2/3}$. Inserting two harmonic means (reciprocals in A.P.): $H_1 = \\dfrac{3ab}{a+2b}$, $H_2 = \\dfrac{3ab}{2a+b}$. Then $A_1 H_2 = \\dfrac{2a+b}{3}\\cdot\\dfrac{3ab}{2a+b} = ab$ (1), $A_2 H_1 = \\dfrac{a+2b}{3}\\cdot\\dfrac{3ab}{a+2b} = ab$ (2), and $G_1 G_2 = a^{2/3}b^{1/3}\\cdot a^{1/3}b^{2/3} = ab$ (3). So all of (1), (2), (3) equal $ab$.",
    solutionSteps: [
      "Find $A_1, A_2$ using $d = (b-a)/3$.",
      "Find $G_1, G_2$ using $r = (b/a)^{1/3}$.",
      "Find $H_1, H_2$ from reciprocals in A.P.",
      "Verify $A_1H_2 = A_2H_1 = G_1G_2 = ab$.",
    ],
  },
  {
    id: "seq-mc-032",
    statement:
      "Given that $\\dfrac{1}{b-a}+\\dfrac{1}{b-c} = \\dfrac{1}{a}+\\dfrac{1}{c}$, which of the following must hold?\n(1) $a,\\,b,\\,c$ are in H.P.\n(2) $a,\\,b,\\,c$ are in A.P.\n(3) $b = a+c$\n(4) $3a = b+c$",
    format: "text",
    answer: "1, 3",
    acceptedAnswers: ["1,3", "(1),(3)"],
    topic: "sequences",
    subtopic: "Harmonic Progression",
    concepts: ["harmonic progression", "algebraic rearrangement"],
    difficulty: "hard",
    source: "original",
    skills: ["fraction rearrangement", "case analysis"],
    estMinutes: 6,
    tags: [TAG, "harmonic-progression"],
    hints: [
      "Group as $\\dfrac{1}{b-a}-\\dfrac{1}{c} = \\dfrac{1}{a}-\\dfrac{1}{b-c}$.",
      "Combine each side over a common denominator and compare.",
    ],
    solution:
      "Rearranging, $\\dfrac{1}{b-a}-\\dfrac{1}{c} = \\dfrac{1}{a}-\\dfrac{1}{b-c}$, i.e. $\\dfrac{c-b+a}{c(b-a)} = \\dfrac{b-c-a}{a(b-c)}$. The numerators are negatives ($c-b+a = -(b-c-a)$), so either $c-b+a = 0$, giving $b = a+c$ (3), or the denominators satisfy $a(b-c) = -c(b-a)$, which simplifies to $b = \\dfrac{2ac}{a+c}$, i.e. $a,b,c$ in H.P. (1). Choices (2) and (4) are not forced.",
    solutionSteps: [
      "Regroup to $\\dfrac{c-b+a}{c(b-a)} = \\dfrac{b-c-a}{a(b-c)}$.",
      "Case 1: $a+c-b = 0 \\Rightarrow b = a+c$ (statement 3).",
      "Case 2: matching denominators gives $b = \\tfrac{2ac}{a+c}$, so H.P. (statement 1).",
    ],
  },
  {
    id: "seq-mc-033",
    statement:
      "Let $a,\\,b,\\,c$ be three distinct numbers in G.P. such that $b,\\,c,\\,a$ are in A.P. and $a,\\,bc,\\,abc$ are in H.P. Then a possible value of $b$ is\n(1) $3+4\\sqrt{2}$\n(2) $3-4\\sqrt{2}$\n(3) $4+3\\sqrt{2}$\n(4) $4-3\\sqrt{2}$",
    format: "text",
    answer: "3, 4",
    acceptedAnswers: ["3,4", "(3),(4)"],
    topic: "sequences",
    subtopic: "Geometric Progression",
    concepts: ["G.P. parametrisation", "A.P. and H.P. conditions", "quadratic in common ratio"],
    difficulty: "olympiad",
    source: "original",
    skills: ["combining three progression conditions"],
    estMinutes: 8,
    tags: [TAG, "geometric-progression"],
    hints: [
      "Write $a = A/r$, $b = A$, $c = Ar$.",
      "Use the A.P. condition to fix $r$, then apply the H.P. condition to find $A = b$.",
    ],
    solution:
      "Set $a = \\dfrac{A}{r}$, $b = A$, $c = Ar$. Since $b,c,a$ are in A.P., $2c = a+b$: $2Ar = \\dfrac{A}{r}+A$, giving $2r^2-r-1 = 0$, so $r = 1$ or $r = -\\dfrac{1}{2}$. Distinctness rules out $r=1$, so $r = -\\dfrac{1}{2}$, meaning $a = -2A$, $b = A$, $c = -\\dfrac{A}{2}$. Since $a, bc, abc$ are in H.P., their reciprocals are in A.P.: $\\dfrac{2}{bc} = \\dfrac{1}{a}+\\dfrac{1}{abc}$. Substituting yields $A^2-8A-2 = 0$, so $A = 4\\pm3\\sqrt{2}$. Hence $b = 4+3\\sqrt{2}$ or $b = 4-3\\sqrt{2}$, matching (3) and (4).",
    solutionSteps: [
      "Parametrise the G.P. as $a=A/r,\\,b=A,\\,c=Ar$.",
      "A.P. condition $2c=a+b$ gives $2r^2-r-1=0 \\Rightarrow r=-\\tfrac{1}{2}$.",
      "H.P. condition on $a,bc,abc$ gives $A^2-8A-2=0 \\Rightarrow A = 4\\pm3\\sqrt{2}$.",
    ],
  },
  {
    id: "seq-mc-034",
    statement:
      "Suppose $a,\\,b,\\,c$ are in A.P. and $a^2,\\,b^2,\\,c^2$ are in H.P. Which of the following is/are possible?\n(1) $ax^2+bx+c = 0$ has imaginary roots\n(2) $ax^2+bx+c = 0$ has real roots\n(3) $a,\\,b,\\,-\\dfrac{c}{2}$ form a G.P.\n(4) $a,\\,-b,\\,\\dfrac{c}{2}$ form a G.P.",
    format: "text",
    answer: "1, 2, 3",
    acceptedAnswers: ["1,2,3", "(1),(2),(3)"],
    topic: "sequences",
    subtopic: "Means & Inequalities",
    concepts: ["A.P. and H.P. combined", "quadratic discriminant", "G.P. condition"],
    difficulty: "olympiad",
    source: "original",
    skills: ["deriving factor conditions", "case analysis"],
    estMinutes: 8,
    tags: [TAG, "means"],
    hints: [
      "From A.P., $2b = a+c$; from H.P., $\\dfrac{2}{b^2} = \\dfrac{1}{a^2}+\\dfrac{1}{c^2}$.",
      "The H.P. condition factors into $(c-a)(ab+bc+ca) = 0$; examine each branch.",
    ],
    solution:
      "From the A.P., $2b = a+c$. From the H.P., $\\dfrac{1}{b^2}-\\dfrac{1}{a^2} = \\dfrac{1}{c^2}-\\dfrac{1}{b^2}$, and using $a-b = b-c$ this reduces to $(c-a)(ab+bc+ca) = 0$.\n\nCase $c = a$: with $2b = a+c$ this gives $a = b = c$, so $ax^2+bx+c = 0$ becomes $x^2+x+1 = 0$ with imaginary roots, so (1) is possible.\n\nCase $ab+bc+ca = 0$: then $(a+c)b+ca = 0$, and using $a+c = 2b$ gives $2b^2+ca = 0$, i.e. $b^2 = a\\left(-\\dfrac{c}{2}\\right)$, so $a, b, -\\dfrac{c}{2}$ are in G.P.; hence (3) is possible. In this same branch $ca = -2b^2$, so the discriminant of $ax^2+bx+c$ is $b^2 - 4ac = b^2 - 4(-2b^2) = 9b^2 \\ge 0$, giving real roots — so (2) is also possible. Only (4) never holds. Thus (1), (2) and (3) are possible.",
    solutionSteps: [
      "A.P.: $2b = a+c$. H.P.: $\\tfrac{2}{b^2} = \\tfrac{1}{a^2}+\\tfrac{1}{c^2}$.",
      "Factor the H.P. condition to $(c-a)(ab+bc+ca) = 0$.",
      "$c=a \\Rightarrow a=b=c$: quadratic has imaginary roots (statement 1).",
      "$ab+bc+ca=0 \\Rightarrow b^2 = a(-c/2)$: G.P. (statement 3), and $b^2-4ac = 9b^2 \\ge 0$ gives real roots (statement 2).",
    ],
  },
  {
    id: "seq-mc-035",
    statement:
      "An A.P., a G.P., and an H.P. share the same first term and the same $(2n-1)$th term. If their respective $n$th terms are $a$, $b$, and $c$, then\n(1) $a = b = c$\n(2) $a \\geq b \\geq c$\n(3) $a+b = c$\n(4) $ac-b^2 = 0$",
    format: "text",
    answer: "2, 4",
    acceptedAnswers: ["2,4", "(2),(4)"],
    topic: "sequences",
    subtopic: "Means & Inequalities",
    concepts: ["A.M.-G.M.-H.M. inequality", "middle term as mean"],
    difficulty: "hard",
    source: "original",
    skills: ["identifying the middle term as a mean"],
    estMinutes: 6,
    tags: [TAG, "means"],
    hints: [
      "The $n$th term is the middle of the first and $(2n-1)$th terms.",
      "So $a, b, c$ are the A.M., G.M., H.M. of the two shared endpoints.",
    ],
    solution:
      "Let the common first term be $x$ and the common $(2n-1)$th term be $y$. Since the $n$th term sits exactly midway (index-wise) between term $1$ and term $2n-1$, we have $x,a,y$ in A.P., $x,b,y$ in G.P., and $x,c,y$ in H.P. Hence $a = \\dfrac{x+y}{2}$ (A.M.), $b = \\sqrt{xy}$ (G.M.), $c = \\dfrac{2xy}{x+y}$ (H.M.). Since A.M., G.M., H.M. are themselves in G.P., $b^2 = ac$, so $ac - b^2 = 0$ (4). By the mean inequality $a \\geq b \\geq c$ (2). Equality $a=b=c$ holds only when $x=y$, so (1) is not generally true; (3) is false.",
    solutionSteps: [
      "The $n$th term is the middle term between term 1 ($x$) and term $2n-1$ ($y$).",
      "Thus $a = $ A.M., $b = $ G.M., $c = $ H.M. of $x$ and $y$.",
      "A.M., G.M., H.M. give $b^2 = ac$ (statement 4) and $a \\geq b \\geq c$ (statement 2).",
    ],
  },
  {
    id: "seq-mc-036",
    statement:
      "Let $E = \\dfrac{1}{1^2}+\\dfrac{1}{2^2}+\\dfrac{1}{3^2}+\\cdots$. Then\n(1) $E < 3$\n(2) $E > \\dfrac{3}{2}$\n(3) $E > 2$\n(4) $E < 2$",
    format: "text",
    answer: "1, 2, 4",
    acceptedAnswers: ["1,2,4", "(1),(2),(4)"],
    topic: "sequences",
    subtopic: "Sigma & Telescoping",
    concepts: ["comparison test", "telescoping bounds"],
    difficulty: "hard",
    source: "original",
    skills: ["bounding an infinite series by telescoping"],
    estMinutes: 6,
    tags: [TAG, "telescoping"],
    hints: [
      "Compare $\\dfrac{1}{k^2}$ with $\\dfrac{1}{(k-1)k}$ from above and $\\dfrac{1}{k(k+1)}$ from below.",
      "Both comparison series telescope.",
    ],
    solution:
      "For an upper bound, $\\dfrac{1}{k^2} < \\dfrac{1}{(k-1)k}$ for $k \\ge 2$, so $E < 1 + \\dfrac{1}{1\\cdot2}+\\dfrac{1}{2\\cdot3}+\\cdots = 1 + \\left(1-\\dfrac{1}{2}\\right)+\\left(\\dfrac{1}{2}-\\dfrac{1}{3}\\right)+\\cdots = 2$. Thus $E < 2$ (4) and therefore $E < 3$ (1). For a lower bound, $\\dfrac{1}{k^2} > \\dfrac{1}{k(k+1)}$, so $E > 1 + \\dfrac{1}{2\\cdot3}+\\dfrac{1}{3\\cdot4}+\\cdots = 1 + \\left(\\dfrac{1}{2}-\\dfrac{1}{3}\\right)+\\cdots = \\dfrac{3}{2}$. Thus $E > \\dfrac{3}{2}$ (2). Since $E < 2$, statement (3) $E > 2$ is false.",
    solutionSteps: [
      "Upper bound: $\\dfrac{1}{k^2} < \\dfrac{1}{(k-1)k}$ telescopes to $E < 2$ (statements 4 and 1).",
      "Lower bound: $\\dfrac{1}{k^2} > \\dfrac{1}{k(k+1)}$ telescopes to $E > \\tfrac{3}{2}$ (statement 2).",
      "$E < 2$ rules out statement 3.",
    ],
  },
];
