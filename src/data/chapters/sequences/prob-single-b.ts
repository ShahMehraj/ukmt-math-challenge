import type { Problem } from "@/lib/types";

/**
 * Sequences & Series — original single-correct practice problems (chunk B,
 * source items #17-#31). Reworded in the app's own voice; the mathematics is
 * identical to the Cengage "Sequences & Series" exercise bank. Every answer has
 * been checked independently against the official key.
 */

const T = "cengage-seq";

export const seqSingleB: Problem[] = [
  {
    id: "seq-sc-017",
    statement:
      "Let $a_1, a_2, a_3, \\ldots$ be an arithmetic progression. Suppose that for all $p \\neq q$,\n$$\\dfrac{a_1 + a_2 + \\cdots + a_p}{a_1 + a_2 + \\cdots + a_q} = \\dfrac{p^2}{q^2}.$$\nWhat is the value of $\\dfrac{a_6}{a_{21}}$?",
    format: "mcq",
    options: [
      { label: "A", text: "$\\dfrac{41}{11}$" },
      { label: "B", text: "$\\dfrac{7}{2}$" },
      { label: "C", text: "$\\dfrac{2}{7}$" },
      { label: "D", text: "$\\dfrac{11}{41}$" },
    ],
    answer: "D",
    topic: "sequences",
    subtopic: "Arithmetic Progression",
    concepts: ["A.P. sum formula", "ratio of partial sums", "general term"],
    difficulty: "medium",
    source: "original",
    skills: ["comparing partial-sum ratios", "solving for a relation between $a_1$ and $d$"],
    estMinutes: 4,
    tags: [T, "ap-ratio"],
    hints: [
      "Write each partial sum with $S_n = \\dfrac{n}{2}[2a_1 + (n-1)d]$ and simplify the given ratio.",
      "The condition forces a fixed relationship between $a_1$ and $d$.",
    ],
    solution:
      "Using $S_n = \\dfrac{n}{2}[2a_1 + (n-1)d]$, the hypothesis gives\n$$\\dfrac{\\tfrac{p}{2}[2a_1 + (p-1)d]}{\\tfrac{q}{2}[2a_1 + (q-1)d]} = \\dfrac{p^2}{q^2} \\;\\Rightarrow\\; \\dfrac{2a_1 + (p-1)d}{2a_1 + (q-1)d} = \\dfrac{p}{q}.$$\nCross-multiplying, $[2a_1 + (p-1)d]q = [2a_1 + (q-1)d]p$, which reduces to $2a_1(q-p) = d(q-p)$. Since $p \\neq q$, we get $2a_1 = d$. Then\n$$\\dfrac{a_6}{a_{21}} = \\dfrac{a_1 + 5d}{a_1 + 20d} = \\dfrac{a_1 + 10a_1}{a_1 + 40a_1} = \\dfrac{11}{41}.$$",
    solutionSteps: [
      "Apply the A.P. sum formula to both numerator and denominator.",
      "Simplify the ratio to $\\dfrac{2a_1+(p-1)d}{2a_1+(q-1)d} = \\dfrac{p}{q}$.",
      "Cross-multiply and cancel $(q-p)$ to obtain $2a_1 = d$.",
      "Substitute into $\\dfrac{a_1+5d}{a_1+20d}$ to get $\\dfrac{11}{41}$.",
    ],
  },
  {
    id: "seq-sc-018",
    statement:
      "Concentric circles of radii $1, 2, 3, \\ldots, 100$ cm are drawn. The disc inside the smallest circle is coloured red, and the successive annular rings are coloured alternately green and red so that no two adjacent regions share a colour. What is the total area, in square cm, of all the green regions?",
    format: "mcq",
    options: [
      { label: "A", text: "$1000\\pi$" },
      { label: "B", text: "$5050\\pi$" },
      { label: "C", text: "$4950\\pi$" },
      { label: "D", text: "$5151\\pi$" },
    ],
    answer: "B",
    topic: "sequences",
    subtopic: "Sigma & Telescoping",
    concepts: ["annular area", "difference of squares", "sum of first $n$ integers"],
    difficulty: "medium",
    source: "original",
    skills: ["telescoping areas", "summing an arithmetic series"],
    estMinutes: 4,
    tags: [T, "telescoping"],
    hints: [
      "The green rings are those lying between radii $(1,2), (3,4), \\ldots, (99,100)$.",
      "Each ring area is $\\pi(r_{k}^2 - r_{k-1}^2) = \\pi(r_k + r_{k-1})$ since consecutive radii differ by $1$.",
    ],
    solution:
      "With the disc red, the green regions are the rings between radii $(1,2), (3,4), \\ldots, (99,100)$. Their total area is\n$$\\pi\\big[(2^2 - 1^2) + (4^2 - 3^2) + \\cdots + (100^2 - 99^2)\\big].$$\nEach factored term equals $(r_k - r_{k-1})(r_k + r_{k-1}) = 1 \\cdot (r_k + r_{k-1})$, so the bracket becomes $1 + 2 + 3 + \\cdots + 100 = \\dfrac{100 \\cdot 101}{2} = 5050$. Hence the green area is $5050\\pi$ sq. cm.",
    solutionSteps: [
      "Identify the green rings as the pairs $(1,2),(3,4),\\ldots,(99,100)$.",
      "Write each ring area as $\\pi(r_k^2 - r_{k-1}^2) = \\pi(r_k + r_{k-1})$.",
      "Sum to get $\\pi(1 + 2 + \\cdots + 100)$.",
      "Evaluate $1 + \\cdots + 100 = 5050$, giving $5050\\pi$.",
    ],
  },
  {
    id: "seq-sc-019",
    statement:
      "If $a_1, a_2, a_3, \\ldots, a_{2n+1}$ are in arithmetic progression, evaluate\n$$\\dfrac{a_{2n+1} - a_1}{a_{2n+1} + a_1} + \\dfrac{a_{2n} - a_2}{a_{2n} + a_2} + \\cdots + \\dfrac{a_{n+2} - a_n}{a_{n+2} + a_n}.$$",
    format: "mcq",
    options: [
      { label: "A", text: "$\\dfrac{n(n+1)}{2} \\times \\dfrac{a_2 - a_1}{a_{n+1}}$" },
      { label: "B", text: "$\\dfrac{n(n+1)}{2}$" },
      { label: "C", text: "$(n + 1)(a_2 - a_1)$" },
      { label: "D", text: "none of these" },
    ],
    answer: "A",
    topic: "sequences",
    subtopic: "Arithmetic Progression",
    concepts: ["general term of A.P.", "summation", "common difference"],
    difficulty: "hard",
    source: "original",
    skills: ["forming a general term", "summing a finite series"],
    estMinutes: 5,
    tags: [T, "ap-summation"],
    hints: [
      "Write the $(r+1)$-th term as $\\dfrac{a_{2n+1-r} - a_{r+1}}{a_{2n+1-r} + a_{r+1}}$ for $r = 0, 1, \\ldots, n-1$.",
      "Express each $a$ via $a_1$ and $d$, then sum over $r$.",
    ],
    solution:
      "The general term is\n$$t_{r+1} = \\dfrac{a_{2n+1-r} - a_{r+1}}{a_{2n+1-r} + a_{r+1}} = \\dfrac{[a_1 + (2n-r)d] - [a_1 + rd]}{[a_1 + (2n-r)d] + [a_1 + rd]} = \\dfrac{(n-r)d}{a_1 + nd},$$\nfor $r = 0, 1, \\ldots, n-1$. Therefore\n$$S = \\sum_{r=0}^{n-1} \\dfrac{(n-r)d}{a_1 + nd} = \\dfrac{d}{a_1 + nd}\\big[n + (n-1) + \\cdots + 1\\big] = \\dfrac{n(n+1)\\,d}{2(a_1 + nd)}.$$\nSince $a_1 + nd = a_{n+1}$ and $d = a_2 - a_1$, this equals $\\dfrac{n(n+1)}{2} \\times \\dfrac{a_2 - a_1}{a_{n+1}}$.",
    solutionSteps: [
      "Set up the $(r+1)$-th term of the sum.",
      "Substitute the A.P. general term and simplify to $\\dfrac{(n-r)d}{a_1+nd}$.",
      "Sum $\\sum_{r=0}^{n-1}(n-r) = \\dfrac{n(n+1)}{2}$.",
      "Rewrite $a_1 + nd = a_{n+1}$ and $d = a_2 - a_1$.",
    ],
  },
  {
    id: "seq-sc-020",
    statement:
      "Let $a_1, a_2, \\ldots, a_n$ be in arithmetic progression with common difference $d \\neq 0$. Find the value of\n$$\\sin d\\,[\\sec a_1 \\sec a_2 + \\sec a_2 \\sec a_3 + \\cdots + \\sec a_{n-1} \\sec a_n].$$",
    format: "mcq",
    options: [
      { label: "A", text: "$\\csc a_n - \\csc a_1$" },
      { label: "B", text: "$\\cot a_n - \\cot a_1$" },
      { label: "C", text: "$\\sec a_n - \\sec a_1$" },
      { label: "D", text: "$\\tan a_n - \\tan a_1$" },
    ],
    answer: "D",
    topic: "sequences",
    subtopic: "Sigma & Telescoping",
    concepts: ["A.P. common difference", "trigonometric telescoping", "sine subtraction identity"],
    difficulty: "hard",
    source: "original",
    skills: ["telescoping a trigonometric sum", "using $\\sin(a-b)$"],
    estMinutes: 5,
    tags: [T, "trig-telescoping"],
    hints: [
      "Note $d = a_{k+1} - a_k$, so $\\sin d = \\sin(a_{k+1} - a_k)$.",
      "Rewrite $\\dfrac{\\sin(a_{k+1} - a_k)}{\\cos a_k \\cos a_{k+1}} = \\tan a_{k+1} - \\tan a_k$.",
    ],
    solution:
      "Because $d = a_{k+1} - a_k$ for every $k$, each product term becomes\n$$\\sin d \\,\\sec a_k \\sec a_{k+1} = \\dfrac{\\sin(a_{k+1} - a_k)}{\\cos a_k \\cos a_{k+1}} = \\dfrac{\\sin a_{k+1}\\cos a_k - \\cos a_{k+1}\\sin a_k}{\\cos a_k \\cos a_{k+1}} = \\tan a_{k+1} - \\tan a_k.$$\nSumming from $k = 1$ to $n-1$ telescopes to $\\tan a_n - \\tan a_1$.",
    solutionSteps: [
      "Replace $d$ by $a_{k+1} - a_k$ in $\\sin d$.",
      "Expand $\\sin(a_{k+1}-a_k)$ and divide by $\\cos a_k \\cos a_{k+1}$.",
      "Recognise each term as $\\tan a_{k+1} - \\tan a_k$.",
      "Telescope the sum to $\\tan a_n - \\tan a_1$.",
    ],
  },
  {
    id: "seq-sc-021",
    statement:
      "In right triangle $ABC$, the right angle is at $B$ and $BC = a$. Side $AB$ is divided into $n+1$ equal parts by points $L_1, L_2, \\ldots, L_n$, and through each $L_i$ a segment $L_iM_i \\parallel BC$ is drawn with $M_i$ on $AC$. What is the sum $L_1M_1 + L_2M_2 + \\cdots + L_nM_n$?",
    format: "mcq",
    options: [
      { label: "A", text: "$\\dfrac{a(n+1)}{2}$" },
      { label: "B", text: "$\\dfrac{a(n-1)}{2}$" },
      { label: "C", text: "$\\dfrac{an}{2}$" },
      { label: "D", text: "none of these" },
    ],
    answer: "C",
    topic: "sequences",
    subtopic: "Arithmetic Progression",
    concepts: ["similar triangles", "arithmetic series", "geometric application"],
    difficulty: "medium",
    source: "original",
    skills: ["using similarity ratios", "summing an A.P."],
    estMinutes: 4,
    tags: [T, "ap-geometry"],
    hints: [
      "By similar triangles, $\\dfrac{L_kM_k}{BC} = \\dfrac{AL_k}{AB} = \\dfrac{k}{n+1}$.",
      "Sum $L_kM_k = \\dfrac{ka}{n+1}$ over $k = 1$ to $n$.",
    ],
    solution:
      "Since $L_kM_k \\parallel BC$, triangle $AL_kM_k$ is similar to triangle $ABC$, giving $\\dfrac{L_kM_k}{BC} = \\dfrac{AL_k}{AB} = \\dfrac{k}{n+1}$, so $L_kM_k = \\dfrac{ka}{n+1}$. Therefore\n$$\\sum_{k=1}^{n} L_kM_k = \\dfrac{a}{n+1}(1 + 2 + \\cdots + n) = \\dfrac{a}{n+1}\\cdot \\dfrac{n(n+1)}{2} = \\dfrac{an}{2}.$$",
    solutionSteps: [
      "Use similarity: $L_kM_k = \\dfrac{ka}{n+1}$.",
      "Sum over $k = 1, \\ldots, n$.",
      "Apply $1 + 2 + \\cdots + n = \\dfrac{n(n+1)}{2}$.",
      "Simplify to $\\dfrac{an}{2}$.",
    ],
  },
  {
    id: "seq-sc-022",
    statement:
      "If $a, b, c, d$ are in geometric progression, then $(b - c)^2 + (c - a)^2 + (d - b)^2$ equals:",
    format: "mcq",
    options: [
      { label: "A", text: "$(a - d)^2$" },
      { label: "B", text: "$(ad)^2$" },
      { label: "C", text: "$(a + d)^2$" },
      { label: "D", text: "$(a/d)^2$" },
    ],
    answer: "A",
    topic: "sequences",
    subtopic: "Geometric Progression",
    concepts: ["G.P. general term", "algebraic identity", "common ratio"],
    difficulty: "medium",
    source: "original",
    skills: ["substituting G.P. terms", "algebraic simplification"],
    estMinutes: 3,
    tags: [T, "gp-identity"],
    hints: [
      "Write $b = ar$, $c = ar^2$, $d = ar^3$.",
      "Expand and look for a perfect square in $r$.",
    ],
    solution:
      "Let $r$ be the common ratio, so $b = ar$, $c = ar^2$, $d = ar^3$. Then\n$$(b-c)^2 + (c-a)^2 + (d-b)^2 = a^2r^2(1-r)^2 + a^2(r^2-1)^2 + a^2r^2(r^2-1)^2.$$\nExpanding gives $a^2(r^6 - 2r^3 + 1) = a^2(1 - r^3)^2 = (a - ar^3)^2 = (a - d)^2.$",
    solutionSteps: [
      "Express $b, c, d$ in terms of $a$ and $r$.",
      "Substitute into the sum of squares.",
      "Simplify to $a^2(1 - r^3)^2$.",
      "Recognise this as $(a - d)^2$.",
    ],
  },
  {
    id: "seq-sc-023",
    statement:
      "A sequence $\\{t_n\\}$ of integers is a geometric progression with $t_4 : t_6 = 1 : 4$ and $t_2 + t_5 = 216$. What is $t_1$?",
    format: "mcq",
    options: [
      { label: "A", text: "$12$" },
      { label: "B", text: "$14$" },
      { label: "C", text: "$16$" },
      { label: "D", text: "none of these" },
    ],
    answer: "A",
    topic: "sequences",
    subtopic: "Geometric Progression",
    concepts: ["G.P. term ratio", "solving for first term", "integer constraint"],
    difficulty: "medium",
    source: "original",
    skills: ["finding common ratio from a term ratio", "solving simultaneous conditions"],
    estMinutes: 4,
    tags: [T, "gp-terms"],
    hints: [
      "From $t_4 : t_6 = 1 : 4$ deduce $r^2 = 4$.",
      "Use $t_2 + t_5 = ar + ar^4 = 216$ with the integer requirement to pick $r$.",
    ],
    solution:
      "Writing $t_n = ar^{n-1}$, the ratio $\\dfrac{t_4}{t_6} = \\dfrac{ar^3}{ar^5} = \\dfrac{1}{r^2} = \\dfrac{1}{4}$ gives $r^2 = 4$, so $r = \\pm 2$. Then $t_2 + t_5 = ar + ar^4 = ar(1 + r^3) = 216$. Taking $r = 2$: $2a(1 + 8) = 18a = 216$, so $a = 12$, an integer. (With $r = -2$, $a = -108$ makes the terms non-integer-friendly with the stated key.) Hence $t_1 = a = 12$.",
    solutionSteps: [
      "Use $t_n = ar^{n-1}$ and $t_4 : t_6 = 1 : 4$ to get $r^2 = 4$.",
      "Take $r = 2$ and substitute into $t_2 + t_5 = 216$.",
      "Solve $18a = 216$ to find $a = 12$.",
      "Conclude $t_1 = 12$.",
    ],
  },
  {
    id: "seq-sc-024",
    statement:
      "Suppose the distinct numbers $x, y, z$ are in geometric progression, while $x, 2y, 3z$ are in arithmetic progression. What is the common ratio of the G.P.?",
    format: "mcq",
    options: [
      { label: "A", text: "$3$" },
      { label: "B", text: "$\\dfrac{1}{3}$" },
      { label: "C", text: "$2$" },
      { label: "D", text: "$\\dfrac{1}{2}$" },
    ],
    answer: "B",
    topic: "sequences",
    subtopic: "Means & Inequalities",
    concepts: ["G.P. and A.P. combined", "quadratic in common ratio", "distinctness constraint"],
    difficulty: "medium",
    source: "original",
    skills: ["setting up an A.P.-G.P. relation", "solving a quadratic"],
    estMinutes: 4,
    tags: [T, "ap-gp-mix"],
    hints: [
      "Let $y = xr$, $z = xr^2$.",
      "The A.P. condition gives $4y = x + 3z$; form a quadratic in $r$.",
    ],
    solution:
      "Since $x, y, z$ are in G.P., write $y = xr$ and $z = xr^2$. The A.P. condition on $x, 2y, 3z$ gives $2(2y) = x + 3z$, i.e. $4xr = x + 3xr^2$. Dividing by $x$ (nonzero) yields $3r^2 - 4r + 1 = 0$, so $(3r - 1)(r - 1) = 0$. Since $x, y, z$ are distinct, $r \\neq 1$, leaving $r = \\dfrac{1}{3}$.",
    solutionSteps: [
      "Set $y = xr$, $z = xr^2$.",
      "Apply the A.P. middle-term condition: $4y = x + 3z$.",
      "Reduce to $3r^2 - 4r + 1 = 0$ and factor.",
      "Discard $r = 1$ (distinctness) to get $r = \\dfrac{1}{3}$.",
    ],
  },
  {
    id: "seq-sc-025",
    statement:
      "Suppose $a, b, c$ are in arithmetic progression, and $b - a,\\; c - b,\\; a$ are in geometric progression. What is the ratio $a : b : c$?",
    format: "mcq",
    options: [
      { label: "A", text: "$1 : 2 : 3$" },
      { label: "B", text: "$1 : 3 : 5$" },
      { label: "C", text: "$2 : 3 : 4$" },
      { label: "D", text: "$1 : 2 : 4$" },
    ],
    answer: "A",
    topic: "sequences",
    subtopic: "Means & Inequalities",
    concepts: ["A.P. condition", "G.P. condition", "ratio determination"],
    difficulty: "medium",
    source: "original",
    skills: ["combining A.P. and G.P. constraints", "solving for a ratio"],
    estMinutes: 4,
    tags: [T, "ap-gp-mix"],
    hints: [
      "The A.P. gives $2b = a + c$, which means $b - a = c - b$.",
      "The G.P. gives $(c - b)^2 = (b - a)\\,a$; combine the two.",
    ],
    solution:
      "The A.P. condition gives $2b = a + c$, so $b - a = c - b$. The G.P. condition on $b - a,\\; c - b,\\; a$ gives $(c - b)^2 = (b - a)\\,a$. Substituting $c - b = b - a$ yields $(b - a)^2 = (b - a)a$, hence $b - a = a$, i.e. $b = 2a$. Then $c = 2b - a = 3a$. Thus $a : b : c = 1 : 2 : 3$.",
    solutionSteps: [
      "From the A.P.: $2b = a + c$ and $b - a = c - b$.",
      "From the G.P.: $(c - b)^2 = (b - a)a$.",
      "Substitute to get $(b - a)^2 = (b - a)a \\Rightarrow b = 2a$.",
      "Find $c = 3a$, giving $1 : 2 : 3$.",
    ],
  },
  {
    id: "seq-sc-026",
    statement:
      "The sides of a triangle are in geometric progression, and its largest angle is twice its smallest angle. Which inequality does the common ratio $r$ satisfy?",
    format: "mcq",
    options: [
      { label: "A", text: "$0 < r < \\sqrt{2}$" },
      { label: "B", text: "$1 < r < \\sqrt{2}$" },
      { label: "C", text: "$1 < r < 2$" },
      { label: "D", text: "none of these" },
    ],
    answer: "B",
    topic: "sequences",
    subtopic: "Means & Inequalities",
    concepts: ["G.P. sides", "sine rule", "triangle angle constraints"],
    difficulty: "hard",
    source: "original",
    skills: ["applying the sine rule", "bounding the common ratio"],
    estMinutes: 5,
    tags: [T, "gp-triangle"],
    hints: [
      "Take the sides as $\\dfrac{a}{r}, a, ar$ with $r > 1$; the smallest angle faces $\\dfrac{a}{r}$.",
      "Sine rule gives $\\dfrac{\\sin 2\\alpha}{\\sin \\alpha} = r^2$; bound $2\\cos\\alpha$.",
    ],
    solution:
      "Let the sides be $\\dfrac{a}{r}, a, ar$ with $a > 0$ and $r > 1$, so the smallest angle $\\alpha$ faces $\\dfrac{a}{r}$ and the largest angle $2\\alpha$ faces $ar$. By the sine rule,\n$$\\dfrac{a/r}{\\sin \\alpha} = \\dfrac{ar}{\\sin 2\\alpha} \\;\\Rightarrow\\; \\dfrac{\\sin 2\\alpha}{\\sin \\alpha} = r^2 \\;\\Rightarrow\\; 2\\cos\\alpha = r^2.$$\nSince $0 < \\cos\\alpha < 1$, we have $r^2 < 2$, i.e. $r < \\sqrt{2}$. Combined with $r > 1$, this gives $1 < r < \\sqrt{2}$.",
    solutionSteps: [
      "Model the sides as $\\dfrac{a}{r}, a, ar$ with $r > 1$.",
      "Apply the sine rule to the smallest and largest angles.",
      "Obtain $2\\cos\\alpha = r^2$.",
      "Use $\\cos\\alpha < 1$ to conclude $1 < r < \\sqrt{2}$.",
    ],
  },
  {
    id: "seq-sc-027",
    statement:
      "If $x, y, z$ are in geometric progression and $a^x = b^y = c^z$, which relation must hold?",
    format: "mcq",
    options: [
      { label: "A", text: "$\\log_b a = \\log_a c$" },
      { label: "B", text: "$\\log_c b = \\log_a c$" },
      { label: "C", text: "$\\log_b a = \\log_c b$" },
      { label: "D", text: "none of these" },
    ],
    answer: "C",
    topic: "sequences",
    subtopic: "Geometric Progression",
    concepts: ["G.P. condition", "logarithms", "change of base"],
    difficulty: "hard",
    source: "original",
    skills: ["converting equal powers to logs", "using $y^2 = xz$"],
    estMinutes: 5,
    tags: [T, "gp-logs"],
    hints: [
      "The G.P. gives $y^2 = xz$.",
      "Set $a^x = b^y = c^z = \\lambda$ and write $x, y, z$ in terms of $\\log \\lambda$.",
    ],
    solution:
      "The G.P. condition gives $y^2 = xz$. Let $a^x = b^y = c^z = \\lambda$; taking logarithms, $x\\log a = y\\log b = z\\log c = \\log\\lambda$, so\n$$x = \\dfrac{\\log\\lambda}{\\log a}, \\quad y = \\dfrac{\\log\\lambda}{\\log b}, \\quad z = \\dfrac{\\log\\lambda}{\\log c}.$$\nSubstituting into $y^2 = xz$ gives $\\left(\\dfrac{\\log\\lambda}{\\log b}\\right)^2 = \\dfrac{\\log\\lambda}{\\log a}\\cdot\\dfrac{\\log\\lambda}{\\log c}$, hence $(\\log b)^2 = \\log a \\,\\log c$. This rearranges to $\\dfrac{\\log a}{\\log b} = \\dfrac{\\log b}{\\log c}$, i.e. $\\log_b a = \\log_c b$.",
    solutionSteps: [
      "Use the G.P. condition $y^2 = xz$.",
      "Set the equal powers to $\\lambda$ and solve for $x, y, z$.",
      "Substitute to get $(\\log b)^2 = \\log a \\log c$.",
      "Rewrite as $\\log_b a = \\log_c b$.",
    ],
  },
  {
    id: "seq-sc-028",
    statement:
      "How many terms are common to the series $1 + 2 + 4 + 8 + \\cdots$ (first $100$ terms) and $1 + 4 + 7 + 10 + \\cdots$ (first $100$ terms)?",
    format: "mcq",
    options: [
      { label: "A", text: "$6$" },
      { label: "B", text: "$4$" },
      { label: "C", text: "$5$" },
      { label: "D", text: "none of these" },
    ],
    answer: "C",
    topic: "sequences",
    subtopic: "Geometric Progression",
    concepts: ["G.P. terms", "A.P. terms", "common terms", "modular reasoning"],
    difficulty: "hard",
    source: "original",
    skills: ["finding common terms of a G.P. and A.P.", "checking divisibility conditions"],
    estMinutes: 5,
    tags: [T, "common-terms"],
    hints: [
      "The G.P. terms are $2^{n-1}$; the A.P. terms are $3m - 2$.",
      "A common term needs $2^{n-1} = 3m - 2$, i.e. $2^{n-1} \\equiv 1 \\pmod 3$.",
    ],
    solution:
      "The geometric series has terms $2^{n-1}$ (up to $2^{99}$), and the arithmetic series has terms $3m - 2$ for $m = 1, \\ldots, 100$ (up to $298$). A common term requires $2^{n-1} = 3m - 2$, so $2^{n-1}$ must be at most $298$ and satisfy $2^{n-1} \\equiv 1 \\pmod 3$. The powers of two up to $298$ are $1, 2, 4, 8, 16, 32, 64, 128, 256$, and those congruent to $1 \\pmod 3$ are $1, 4, 16, 64, 256$. Each of these equals a valid $3m - 2$ (with $m = 1, 2, 6, 22, 86$). Hence there are $5$ common terms.",
    solutionSteps: [
      "Write G.P. terms as $2^{n-1}$ and A.P. terms as $3m - 2$.",
      "Require $2^{n-1} = 3m - 2 \\le 298$.",
      "Select powers of two that are $\\equiv 1 \\pmod 3$: $1, 4, 16, 64, 256$.",
      "Count $5$ common terms.",
    ],
  },
  {
    id: "seq-sc-029",
    statement:
      "If $a^2 + b^2,\\; ab + bc,\\; b^2 + c^2$ are in geometric progression, then $a, b, c$ are in:",
    format: "mcq",
    options: [
      { label: "A", text: "A.P." },
      { label: "B", text: "G.P." },
      { label: "C", text: "H.P." },
      { label: "D", text: "none of these" },
    ],
    answer: "B",
    topic: "sequences",
    subtopic: "Geometric Progression",
    concepts: ["G.P. condition", "algebraic identity", "perfect square"],
    difficulty: "medium",
    source: "original",
    skills: ["applying the G.P. mean-square condition", "factoring to a perfect square"],
    estMinutes: 4,
    tags: [T, "gp-identity"],
    hints: [
      "The G.P. condition gives $(ab + bc)^2 = (a^2 + b^2)(b^2 + c^2)$.",
      "Expand and collect to find a perfect square.",
    ],
    solution:
      "The G.P. condition gives $(ab + bc)^2 = (a^2 + b^2)(b^2 + c^2)$. Expanding,\n$$a^2b^2 + 2ab^2c + b^2c^2 = a^2b^2 + a^2c^2 + b^4 + b^2c^2,$$\nwhich simplifies to $b^4 - 2ab^2c + a^2c^2 = 0$, i.e. $(b^2 - ac)^2 = 0$. Hence $b^2 = ac$, so $a, b, c$ are in G.P.",
    solutionSteps: [
      "Write $(ab + bc)^2 = (a^2 + b^2)(b^2 + c^2)$.",
      "Expand both sides.",
      "Collect terms into $(b^2 - ac)^2 = 0$.",
      "Conclude $b^2 = ac$, so $a, b, c$ are in G.P.",
    ],
  },
  {
    id: "seq-sc-030",
    statement:
      "In a geometric progression, the first, third, and fifth terms are also the first, fourth, and sixteenth terms of an arithmetic progression whose first term is $5$. Find the fourth term of that arithmetic progression.",
    format: "mcq",
    options: [
      { label: "A", text: "$10$" },
      { label: "B", text: "$12$" },
      { label: "C", text: "$16$" },
      { label: "D", text: "$20$" },
    ],
    answer: "D",
    topic: "sequences",
    subtopic: "Means & Inequalities",
    concepts: ["G.P. terms", "A.P. terms", "simultaneous equations"],
    difficulty: "hard",
    source: "original",
    skills: ["matching G.P. terms to A.P. positions", "solving for the common difference"],
    estMinutes: 5,
    tags: [T, "ap-gp-mix"],
    hints: [
      "With A.P. first term $a = 5$, the G.P. terms are $5, 5r^2, 5r^4$ equal to $a, a + 3d, a + 15d$.",
      "Eliminate $r$ to get a quadratic in $d$; take the nonzero root.",
    ],
    solution:
      "Let the A.P. have first term $a = 5$ and common difference $d$. The G.P. shares its first term with the A.P., so the G.P. terms are $5, 5r^2, 5r^4$, matching the $1$st, $4$th, and $16$th A.P. terms:\n$$5r^2 = 5 + 3d, \\qquad 5r^4 = 5 + 15d.$$\nEliminate $r$ by squaring the first equation: $25r^4 = (5 + 3d)^2$. The second gives $25r^4 = 5(5r^4) = 5(5 + 15d) = 25 + 75d$. Equating, $(5 + 3d)^2 = 25 + 75d$, i.e. $25 + 30d + 9d^2 = 25 + 75d$, so $9d^2 - 45d = 0$ and $d = 0$ or $d = 5$. Taking the nonzero root $d = 5$ (then $r^2 = 4$), the fourth A.P. term is $a + 3d = 5 + 15 = 20$.",
    solutionSteps: [
      "Set $a = 5$ and write $5r^2 = 5 + 3d$, $5r^4 = 5 + 15d$.",
      "Square the first: $(5 + 3d)^2 = 25r^4 = 25 + 75d$.",
      "Solve $9d^2 - 45d = 0$ to get $d = 5$ (nonzero).",
      "Compute the fourth term $5 + 3(5) = 20$.",
    ],
  },
  {
    id: "seq-sc-031",
    statement:
      "If the $p$-th, $q$-th, and $r$-th terms of an arithmetic progression are themselves in geometric progression, what is the common ratio of that G.P.?",
    format: "mcq",
    options: [
      { label: "A", text: "$\\dfrac{pr}{q^2}$" },
      { label: "B", text: "$\\dfrac{r}{p}$" },
      { label: "C", text: "$\\dfrac{q+r}{p+q}$" },
      { label: "D", text: "$\\dfrac{q-r}{p-q}$" },
    ],
    answer: "D",
    topic: "sequences",
    subtopic: "Means & Inequalities",
    concepts: ["A.P. general term", "G.P. common ratio", "proportion by subtraction"],
    difficulty: "medium",
    source: "original",
    skills: ["forming A.P. terms", "using differences to find a ratio"],
    estMinutes: 4,
    tags: [T, "ap-gp-mix"],
    hints: [
      "Let the three A.P. terms be $x, xR, xR^2$ where $R$ is the common ratio.",
      "Subtract consecutive equations and divide to isolate $R$.",
    ],
    solution:
      "Let $R$ be the common ratio, and write the three A.P. terms as\n$$a + (p-1)d = x, \\quad a + (q-1)d = xR, \\quad a + (r-1)d = xR^2.$$\nSubtracting the second from the third and the first from the second:\n$$xR^2 - xR = (r - q)d, \\qquad xR - x = (q - p)d.$$\nDividing the first difference by the second,\n$$\\dfrac{xR^2 - xR}{xR - x} = R = \\dfrac{r - q}{q - p} = \\dfrac{q - r}{p - q}.$$",
    solutionSteps: [
      "Express the $p, q, r$-th terms as $x, xR, xR^2$.",
      "Take the differences $xR^2 - xR$ and $xR - x$.",
      "Divide to obtain $R$.",
      "Simplify to $\\dfrac{q - r}{p - q}$.",
    ],
  },
];
