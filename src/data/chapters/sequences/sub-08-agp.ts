import type { SubChapter } from "@/lib/types";

// ═══════════════════════════════════════════════════════════════════════════════
// SUB-CHAPTER 8 · Arithmetico-Geometric Progression (AGP)
// ═══════════════════════════════════════════════════════════════════════════════

export const subAGP: SubChapter = {
  id: "agp",
  title: "Arithmetico-Geometric Progression",
  lesson: [
    {
      kind: "prose",
      heading: "8 · What is an Arithmetico-Geometric Progression?",
      content:
        "An **arithmetico-geometric progression (AGP)** is built by multiplying, term by term, the terms of an AP with the terms of a GP.\n\nStart with an AP\n$$a, \\ a+d, \\ a+2d, \\ \\ldots, \\ a+(n-1)d$$\nand a GP\n$$a', \\ a'r, \\ a'r^2, \\ \\ldots, \\ a'r^{n-1}.$$\nMultiplying corresponding terms gives the AGP\n$$(a)(a'), \\ (a+d)(a'r), \\ (a+2d)(a'r^2), \\ \\ldots, \\ [a+(n-1)d](a'r^{n-1}).$$\n\nBy absorbing the constant $a'$ we usually write the standard AGP as\n$$a, \\ (a+d)r, \\ (a+2d)r^2, \\ (a+3d)r^3, \\ \\ldots$$\nso the $n$th term is\n$$T_n = [a + (n-1)d]\\, r^{n-1}.$$\n\nEach term is therefore **(a term of an AP) $\\times$ (a term of a GP)** — a linear factor in $n$ multiplied by an exponential factor in $n$.",
    },
    {
      kind: "callout",
      variant: "definition",
      title: "AGP general term",
      content:
        "For an AGP whose AP part has first term $a$ and common difference $d$, and whose GP part has ratio $r$, the general term is\n$$T_n = [a + (n-1)d]\\, r^{n-1}.$$\nA classic example is $1 \\cdot 4 + 3 \\cdot 4^2 + 5 \\cdot 4^3 + 7 \\cdot 4^4 + \\cdots$, where $1, 3, 5, 7, \\ldots$ is an AP ($a=1, d=2$) and $4, 4^2, 4^3, \\ldots$ is a GP ($r=4$).",
    },
    {
      kind: "callout",
      variant: "tip",
      title: "How to recognise an AGP",
      content:
        "If the general term looks like **(linear in $n$) $\\times$ (exponential in $n$)** — e.g. $n \\cdot 2^n$, or $(3n-2)/5^{n-1}$, or $(2n-1)x^{n-1}$ — you are looking at an AGP. Do NOT try the plain GP sum formula. Use the multiply-by-$r$-and-subtract algorithm below.",
    },
    {
      kind: "prose",
      heading: "The multiply-by-r and subtract technique",
      content:
        "To sum $S_n = a + (a+d)r + (a+2d)r^2 + \\cdots + [a+(n-1)d]r^{n-1}$, follow four mechanical steps.\n\n**Step 1 — write $S_n$:**\n$$S_n = a + (a+d)r + (a+2d)r^2 + \\cdots + [a+(n-1)d]r^{n-1}.$$\n\n**Step 2 — multiply by $r$** (this shifts every term one place right):\n$$rS_n = ar + (a+d)r^2 + \\cdots + [a+(n-2)d]r^{n-1} + [a+(n-1)d]r^n.$$\n\n**Step 3 — subtract.** The AP coefficients collapse: each subtraction leaves a constant $d$ times the GP powers, plus the first term, minus the last term:\n$$(1-r)S_n = a + [dr + dr^2 + \\cdots + dr^{n-1}] - [a+(n-1)d]r^n.$$\nThe bracket is a plain GP with first term $dr$, ratio $r$, and $n-1$ terms.\n\n**Step 4 — sum the GP and divide by $(1-r)$:**\n$$S_n = \\frac{a}{1-r} + \\frac{dr\\,(1 - r^{n-1})}{(1-r)^2} - \\frac{[a+(n-1)d]\\,r^n}{1-r}, \\qquad r \\neq 1.$$\n\nIn practice you rarely memorise this formula — you reproduce the algorithm each time, which is more reliable.",
    },
    {
      kind: "callout",
      variant: "trap",
      title: "The subtraction is the point where mistakes happen",
      content:
        "When you subtract $rS_n$ from $S_n$, keep the **first term** ($a$) unpaired at the front and the **last term** ($[a+(n-1)d]r^n$) unpaired at the back. Everything in the middle turns into a clean GP with common coefficient $d$. Losing that first or last term, or forgetting the middle GP has only $n-1$ terms, is the usual error.",
    },
    {
      kind: "prose",
      heading: "Sum to infinity of an AGP",
      content:
        "When $0 < |r| < 1$, both $r^n \\to 0$ and $nr^n \\to 0$ as $n \\to \\infty$. Taking the limit of the finite-sum formula, the last term vanishes and $r^{n-1} \\to 0$, leaving the elegant result\n$$S_\\infty = \\frac{a}{1-r} + \\frac{dr}{(1-r)^2}.$$\n\nThe first piece $\\dfrac{a}{1-r}$ is exactly the infinite GP sum for the constant part; the second piece $\\dfrac{dr}{(1-r)^2}$ is the correction coming from the growing AP coefficients.",
    },
    {
      kind: "callout",
      variant: "definition",
      title: "AGP infinite sum formula",
      content:
        "For $|r| < 1$, the AGP $a + (a+d)r + (a+2d)r^2 + \\cdots$ to infinity sums to\n$$S_\\infty = \\frac{a}{1-r} + \\frac{dr}{(1-r)^2}.$$\nAlways identify $a$ (first-term coefficient), $d$ (AP common difference) and $r$ (GP ratio) carefully — including any sign, e.g. $r = -x$ for an alternating series.",
    },
    {
      kind: "callout",
      variant: "trap",
      title: "Watch the sign of r in alternating series",
      content:
        "A series like $1 - 3x + 5x^2 - 7x^3 + \\cdots$ is an AGP with $a = 1$, $d = 2$, but $r = -x$ (not $x$). Rewrite it as $1 + 3(-x) + 5(-x)^2 + 7(-x)^3 + \\cdots$ first, then read off $r = -x$ before plugging into the formula.",
    },
    // ─── Preserved checks (verbatim from original sub8) ──────────────────────────
    {
      kind: "check",
      id: "seq-c34",
      prompt: "Find the sum to infinity: $1 + \\frac{2}{3} + \\frac{3}{9} + \\frac{4}{27} + \\cdots$",
      format: "text",
      answer: "9/4",
      hint: "AGP with $a=1, d=1, r=1/3$. $S_\\infty = \\frac{1}{1-1/3} + \\frac{1 \\cdot 1/3}{(1-1/3)^2}$.",
      explanation: "$\\frac{1}{2/3} + \\frac{1/3}{4/9} = \\frac{3}{2} + \\frac{3}{4} = \\frac{9}{4}$.",
    },
    {
      kind: "check",
      id: "seq-c35",
      prompt: "Find the sum: $1 + 3x + 5x^2 + 7x^3 + \\cdots$ to infinity for $|x| < 1$.",
      format: "text",
      answer: "(1+x)/(1-x)²",
      hint: "AP: $1,3,5,7,\\ldots$ ($a=1, d=2$). GP ratio $= x$. Use the AGP infinite sum formula.",
      explanation:
        "$S_\\infty = \\frac{1}{1-x} + \\frac{2x}{(1-x)^2} = \\frac{1-x+2x}{(1-x)^2} = \\frac{1+x}{(1-x)^2}$.",
    },
    {
      kind: "check",
      id: "seq-c36",
      prompt:
        "Find the sum of first $n$ terms: $S_n = 1 \\cdot 2 + 2 \\cdot 2^2 + 3 \\cdot 2^3 + \\cdots + n \\cdot 2^n$.",
      format: "text",
      answer: "(n-1)·2^(n+1) + 2",
      hint: "Multiply by $r=2$, subtract, and simplify.",
      explanation:
        "$S = \\sum k \\cdot 2^k$. $2S = \\sum k \\cdot 2^{k+1}$. $S - 2S = 2 + 2^2 + \\cdots + 2^n - n \\cdot 2^{n+1} = 2(2^n-1)/(2-1) - n \\cdot 2^{n+1} = 2^{n+1}-2-n \\cdot 2^{n+1}$. $-S = (1-n)2^{n+1} - 2$. $S = (n-1)2^{n+1} + 2$.",
    },
    // ─── New checks ──────────────────────────────────────────────────────────────
    {
      kind: "check",
      id: "seq-agp-c1",
      prompt:
        "Identify the AP part, GP part and general term of the AGP $1 \\cdot 4 + 3 \\cdot 4^2 + 5 \\cdot 4^3 + 7 \\cdot 4^4 + \\cdots$.",
      format: "text",
      answer: "AP: 1,3,5,... (a=1,d=2); GP ratio 4; T_n=(2n-1)4^n",
      hint: "Separate the linear factors $1,3,5,7,\\ldots$ from the powers of $4$.",
      explanation:
        "The linear factors $1, 3, 5, 7, \\ldots$ form an AP with $a=1, d=2$, so the $n$th AP term is $2n-1$. The powers $4, 4^2, 4^3, \\ldots$ form a GP with ratio $4$, contributing $4^n$. Hence $T_n = (2n-1)\\cdot 4^n$.",
    },
    {
      kind: "check",
      id: "seq-agp-c2",
      prompt:
        "Find the sum to infinity of the alternating series $1 - 3x + 5x^2 - 7x^3 + \\cdots$ for $0 < |x| < 1$.",
      format: "text",
      answer: "(1-x)/(1+x)²",
      hint: "Rewrite as $1 + 3(-x) + 5(-x)^2 + \\cdots$ so that $a=1, d=2, r=-x$.",
      explanation:
        "With $a=1$, $d=2$, $r=-x$: $S_\\infty = \\frac{1}{1-(-x)} + \\frac{2(-x)}{[1-(-x)]^2} = \\frac{1}{1+x} - \\frac{2x}{(1+x)^2} = \\frac{(1+x)-2x}{(1+x)^2} = \\frac{1-x}{(1+x)^2}$.",
    },
    {
      kind: "check",
      id: "seq-agp-c3",
      prompt:
        "If the sum to infinity of $3 + (3+d)\\frac{1}{4} + (3+2d)\\frac{1}{4^2} + \\cdots$ is $\\frac{44}{9}$, find $d$.",
      format: "numeric",
      answer: "2",
      hint: "Multiply by $r=\\frac{1}{4}$ and subtract; the middle collapses to a constant-$d$ GP.",
      explanation:
        "Let $S$ be the sum. Then $\\frac{1}{4}S = 3\\cdot\\frac{1}{4} + (3+d)\\frac{1}{4^2} + \\cdots$. Subtracting: $\\frac{3}{4}S = 3 + d\\left(\\frac{1}{4}+\\frac{1}{4^2}+\\cdots\\right) = 3 + \\frac{d/4}{1-1/4} = 3 + \\frac{d}{3}$. So $S = 4 + \\frac{4d}{9}$. Setting $4 + \\frac{4d}{9} = \\frac{44}{9}$ gives $\\frac{4d}{9} = \\frac{8}{9}$, hence $d = 2$.",
    },
    {
      kind: "check",
      id: "seq-agp-c4",
      prompt:
        "Find the sum to infinity: $\\frac{3}{2} - \\frac{5}{6} + \\frac{7}{18} - \\frac{9}{54} + \\cdots$",
      format: "text",
      answer: "15/16",
      hint: "AP coefficients $3,5,7,9,\\ldots$ ($a=3, d=2$); ratio $r = -\\frac{1}{3}$; first-term factor $\\frac{1}{2}$.",
      explanation:
        "Write $S = 3(\\tfrac{1}{2}) + 5(-\\tfrac{1}{6}) + 7(\\tfrac{1}{18}) + \\cdots$, an AGP with AP coefficients $3,5,7,\\ldots$ and ratio $r=-\\tfrac13$. Multiply by $-\\tfrac13$ and subtract: $\\frac{4}{3}S = \\frac{3}{2} + 2\\left(-\\tfrac16 + \\tfrac1{18} - \\cdots\\right) = \\frac{3}{2} + \\frac{2(-1/6)}{1+1/3} = \\frac{3}{2} - \\frac{1}{4} = \\frac{5}{4}$. Hence $S = \\frac{3}{4}\\cdot\\frac{5}{4} = \\frac{15}{16}$.",
    },
    {
      kind: "check",
      id: "seq-agp-c5",
      prompt:
        "Find the sum to infinity: $\\frac{1^2}{2} + \\frac{3^2}{2^2} + \\frac{5^2}{2^3} + \\frac{7^2}{2^4} + \\cdots$",
      format: "numeric",
      answer: "17",
      hint: "Squares are not an AP, but their differences are. Apply the multiply-and-subtract step twice.",
      explanation:
        "Let $S = \\frac{1^2}{2}+\\frac{3^2}{2^2}+\\frac{5^2}{2^3}+\\cdots$. Then $\\frac12 S = \\frac{1^2}{2^2}+\\frac{3^2}{2^3}+\\cdots$. Subtracting: $\\frac12 S = \\frac{1}{2} + \\frac{8}{2^2}+\\frac{16}{2^3}+\\frac{24}{2^4}+\\cdots$, where $8,16,24,\\ldots$ form an AP. Call the tail $S_1 = \\frac{8}{2^2}+\\frac{16}{2^3}+\\cdots$; then $\\frac12 S_1 = \\frac{8}{2^3}+\\cdots$, and subtracting gives $\\frac12 S_1 = \\frac{8}{2^2}+\\frac{8}{2^3}+\\cdots = \\frac{8/4}{1-1/2} = 4$, so $S_1 = 8$. Thus $\\frac12 S = \\frac12 + 8$, giving $S = 17$.",
    },
    {
      kind: "check",
      id: "seq-agp-c6",
      prompt:
        "Find the sum of $n$ terms of $1 + \\frac{4}{5} + \\frac{7}{5^2} + \\frac{10}{5^3} + \\cdots$",
      format: "text",
      answer: "5/4 + (15/16)(1 - 1/5^(n-1)) - (3n-2)/(4·5^(n-1))",
      hint: "AP $1,4,7,10,\\ldots$ gives $n$th coefficient $3n-2$; GP ratio $\\frac{1}{5}$. Multiply by $\\frac15$ and subtract.",
      explanation:
        "The $n$th term is $\\frac{3n-2}{5^{n-1}}$. Let $S_n = 1 + \\frac{4}{5} + \\cdots + \\frac{3n-2}{5^{n-1}}$; then $\\frac15 S_n = \\frac15 + \\frac{4}{5^2} + \\cdots + \\frac{3n-2}{5^n}$. Subtracting: $\\frac{4}{5}S_n = 1 + 3\\left(\\frac{1}{5}+\\frac{1}{5^2}+\\cdots+\\frac{1}{5^{n-1}}\\right) - \\frac{3n-2}{5^n} = 1 + \\frac34\\left(1-\\frac{1}{5^{n-1}}\\right) - \\frac{3n-2}{5^n}$. Multiplying by $\\frac54$: $S_n = \\frac{5}{4} + \\frac{15}{16}\\left(1-\\frac{1}{5^{n-1}}\\right) - \\frac{3n-2}{4\\cdot 5^{n-1}}$.",
    },
  ],
  workedExamples: [
    {
      kind: "example",
      title: "Illustration 5.77 — nested sum as an AGP",
      statement:
        "Find the sum $2017 + \\frac{1}{4}\\left(2016 + \\frac{1}{4}\\left(2015 + \\cdots + \\frac{1}{4}\\left(2 + \\frac{1}{4}(1)\\right)\\cdots\\right)\\right)$.",
      approach:
        "Expand the nesting: each successive number is one smaller while it picks up an extra factor of $\\frac14$. This is an AGP; use multiply-by-$\\frac14$ and subtract.",
      solution:
        "Expanding gives\n$$S = 2017 + \\frac{1}{4}(2016) + \\frac{1}{4^2}(2015) + \\cdots + \\frac{1}{4^{2016}}(1).$$\nMultiply by $\\frac14$:\n$$\\frac{1}{4}S = \\frac{1}{4}(2017) + \\frac{1}{4^2}(2016) + \\cdots + \\frac{1}{4^{2017}}(1).$$\nSubtract. The coefficients drop by $1$ each step, so the middle collapses to a GP of $-1$ times powers of $\\frac14$:\n$$\\frac{3}{4}S = 2017 - \\frac{1}{4} - \\frac{1}{4^2} - \\cdots - \\frac{1}{4^{2017}}.$$\nSum the finite GP inside:\n$$\\frac{3}{4}S = 2017 - \\frac{\\frac14\\left(1 - \\frac{1}{4^{2017}}\\right)}{1 - \\frac14}.$$\nHence\n$$S = \\frac{4}{3}(2017) - \\frac{4}{9}\\left(1 - \\frac{1}{4^{2017}}\\right).$$",
    },
    {
      kind: "example",
      title: "Illustration 5.78 — a surprising closed form",
      statement:
        "Find the sum of $50$ terms of $1 + 2\\left(1 + \\frac{1}{50}\\right) + 3\\left(1 + \\frac{1}{50}\\right)^2 + \\cdots$.",
      approach:
        "Set $n = 50$ and $x = 1 + \\frac1n$. The series is $\\sum_{k=1}^n k\\,x^{k-1}$, a standard AGP. Multiply by $x$ and subtract.",
      solution:
        "Let $S = 1 + 2x + 3x^2 + \\cdots + nx^{n-1}$. Then $xS = x + 2x^2 + \\cdots + nx^n$. Subtracting:\n$$S(1-x) = 1 + (x + x^2 + \\cdots + x^{n-1}) - nx^n = \\frac{1-x^n}{1-x} - nx^n.$$\nHere $x = 1 + \\frac1n$, so $1 - x = -\\frac1n$. Substituting:\n$$S\\left(-\\frac1n\\right) = \\frac{1 - x^n}{-1/n} - nx^n = -n(1 - x^n) - nx^n = -n.$$\nTherefore $\\frac1n S = n$, giving $S = n^2 = 50^2 = 2500$.",
    },
    {
      kind: "example",
      title: "Illustration 5.79 — alternating infinite AGP",
      statement:
        "Find the sum to infinity of $1 - 3x + 5x^2 - 7x^3 + \\cdots$ for $0 < |x| < 1$.",
      approach:
        "Rewrite with a single GP ratio: $1 + 3(-x) + 5(-x)^2 + \\cdots$. Then $a=1, d=2, r=-x$ and apply the infinite AGP formula.",
      solution:
        "With $a = 1$, $d = 2$, $r = -x$:\n$$S_\\infty = \\frac{a}{1-r} + \\frac{dr}{(1-r)^2} = \\frac{1}{1+x} + \\frac{2(-x)}{(1+x)^2} = \\frac{1}{1+x} - \\frac{2x}{(1+x)^2}.$$\nCombining over $(1+x)^2$:\n$$S_\\infty = \\frac{(1+x) - 2x}{(1+x)^2} = \\frac{1-x}{(1+x)^2}.$$",
    },
    {
      kind: "example",
      title: "Illustration 5.80 — telescoping partial sums",
      statement:
        "Find the sum of the infinite series $1 + \\left(1 + \\frac{1}{5}\\right)\\frac{1}{2} + \\left(1 + \\frac{1}{5} + \\frac{1}{5^2}\\right)\\frac{1}{2^2} + \\cdots$.",
      approach:
        "The coefficients are partial sums of a GP. Multiply the whole series by $\\frac12$, subtract, and a clean GP-of-GP appears.",
      solution:
        "Let $S = 1 + \\left(1+\\tfrac15\\right)\\tfrac12 + \\left(1+\\tfrac15+\\tfrac1{5^2}\\right)\\tfrac1{2^2} + \\cdots$. Then\n$$\\frac{S}{2} = \\frac12 + \\left(1+\\tfrac15\\right)\\tfrac1{2^2} + \\cdots.$$\nSubtracting the second line from the first, each bracket loses its last term, leaving\n$$\\frac{S}{2} = 1 + \\frac15\\cdot\\frac12 + \\frac1{5^2}\\cdot\\frac1{2^2} + \\cdots = 1 + \\frac{1}{10} + \\frac{1}{10^2} + \\cdots = \\frac{1}{1-\\frac{1}{10}}.$$\nHence $\\frac{S}{2} = \\frac{10}{9}$, so $S = \\frac{20}{9}$.",
    },
    {
      kind: "example",
      title: "Illustration 5.81 — solving for the AP difference",
      statement:
        "If the sum to infinity of $3 + (3+d)\\frac{1}{4} + (3+2d)\\frac{1}{4^2} + \\cdots$ is $\\frac{44}{9}$, find $d$.",
      approach:
        "Multiply by $r = \\frac14$ and subtract; the middle collapses to a constant-$d$ GP, giving $S$ in terms of $d$. Then match to $\\frac{44}{9}$.",
      solution:
        "Let $S$ be the sum. Then $\\frac14 S = 3\\cdot\\frac14 + (3+d)\\frac1{4^2} + \\cdots$. Subtracting:\n$$\\frac34 S = 3 + d\\left(\\frac14 + \\frac1{4^2} + \\cdots\\right) = 3 + \\frac{d/4}{1 - 1/4} = 3 + \\frac{d}{3}.$$\nSo $S = 4 + \\frac{4d}{9}$. Setting $4 + \\frac{4d}{9} = \\frac{44}{9}$ gives $\\frac{4d}{9} = \\frac{8}{9}$, hence $d = 2$.",
    },
    {
      kind: "example",
      title: "Illustration 5.82 — squares times a GP (double AGP)",
      statement:
        "Find the sum to infinity of $1^2 + 2^2 x + 3^2 x^2 + 4^2 x^3 + \\cdots$ for $|x| < 1$.",
      approach:
        "This is NOT an AGP directly, because $1^2, 2^2, 3^2, \\ldots$ are not in AP. But their differences $3, 5, 7, \\ldots$ are. So apply the multiply-and-subtract step once to reduce it to an ordinary AGP, then apply the AGP formula.",
      solution:
        "Let $S_\\infty = 1^2 + 2^2 x + 3^2 x^2 + \\cdots$. Then $xS_\\infty = 1^2 x + 2^2 x^2 + \\cdots$. Subtracting:\n$$(1-x)S_\\infty = 1 + (2^2-1^2)x + (3^2-2^2)x^2 + \\cdots = 1 + 3x + 5x^2 + 7x^3 + \\cdots.$$\nThe right side is a genuine AGP with $a=1$, $d=2$, $r=x$:\n$$(1-x)S_\\infty = \\frac{1}{1-x} + \\frac{2x}{(1-x)^2} = \\frac{1+x}{(1-x)^2}.$$\nDividing by $(1-x)$:\n$$S_\\infty = \\frac{1+x}{(1-x)^3}.$$",
    },
  ],
  practiceProblemIds: [],
};
