import type { SubChapter } from "@/lib/types";

export const subGPSum: SubChapter = {
  id: "sum-of-gp",
  title: "Sum of GP and infinite series",
  lesson: [
    {
      kind: "prose",
      heading: "5 · Summing a geometric progression",
      content:
        "For a GP with first term $a$ and common ratio $r$, the sum of the first $n$ terms is\n\n$$S_n = a\\left(\\frac{r^n - 1}{r - 1}\\right) = a\\left(\\frac{1 - r^n}{1 - r}\\right), \\quad r \\neq 1.$$\n\nThe two forms are identical — pick whichever keeps the arithmetic tidy. When $r > 1$, use $\\frac{r^n - 1}{r - 1}$ so both parts stay positive; when $r < 1$ (e.g. a fractional ratio), use $\\frac{1 - r^n}{1 - r}$.\n\n**Where it comes from.** Write $S_n = a + ar + ar^2 + \\cdots + ar^{n-1}$, multiply through by $r$ to get $rS_n = ar + ar^2 + \\cdots + ar^n$, and subtract. Every middle term cancels, leaving $S_n - rS_n = a - ar^n$, so $S_n(1 - r) = a(1 - r^n)$. This 'multiply-and-subtract' idea reappears everywhere in this chapter.",
    },
    {
      kind: "callout",
      variant: "trap",
      title: "r = 1 is a special case!",
      content:
        "When $r = 1$: every term equals $a$, so $S_n = na$. The formula $\\frac{a(r^n-1)}{r-1}$ gives $\\frac{0}{0}$ — undefined. Always check whether $r = 1$ separately before reaching for the formula.",
    },
    {
      kind: "callout",
      variant: "tip",
      title: "Three quantities, one clean identity",
      content:
        "For the first $n$ terms of a GP, let $S$ be their sum, $P$ their product, and $R$ the sum of their reciprocals. Then $$P^2 R^n = S^n.$$ The product is $P = a^n r^{n(n-1)/2}$ and the reciprocals themselves form a GP with first term $\\frac{1}{a}$ and ratio $\\frac{1}{r}$, so $R = \\frac{r^n - 1}{a r^{n-1}(r - 1)}$. Substituting collapses everything to $\\left[\\frac{a(r^n-1)}{r-1}\\right]^n = S^n$.",
    },
    {
      kind: "example",
      title: "Illustration 5.48 — recovering the number of terms",
      statement:
        "A GP has $a_1 = 3$, $a_n = 96$, and $S_n = 189$. Find the number of terms $n$.",
      approach:
        "Use $a_n = a_1 r^{n-1}$ to express $r^{n-1}$, then feed that into the sum formula to solve for $r$, and finally for $n$.",
      solution:
        "From $a_n = 96$: $3r^{n-1} = 96 \\Rightarrow r^{n-1} = 32$.\n\nFrom $S_n = 189$: $3\\left(\\frac{r^n - 1}{r - 1}\\right) = 189$. Writing $r^n = (r^{n-1})r = 32r$ gives $3\\left(\\frac{32r - 1}{r - 1}\\right) = 189$, so $32r - 1 = 63(r - 1) = 63r - 63$, hence $31r = 62$ and $r = 2$.\n\nThen $2^{n-1} = 32 = 2^5$, so $n - 1 = 5$ and $n = 6$.",
    },
    {
      kind: "example",
      title: "Illustration 5.50 — summing squared GP terms",
      statement:
        "Find the sum to $n$ terms of $\\left(x + \\frac{1}{x}\\right)^2, \\left(x^2 + \\frac{1}{x^2}\\right)^2, \\left(x^3 + \\frac{1}{x^3}\\right)^2, \\ldots$",
      approach:
        "Expand each square as $x^{2k} + \\frac{1}{x^{2k}} + 2$. That splits the sum into two geometric series (in $x^2$ and in $1/x^2$) plus a constant part.",
      solution:
        "$\\left(x^k + \\frac{1}{x^k}\\right)^2 = x^{2k} + \\frac{1}{x^{2k}} + 2$. Summing $k = 1$ to $n$:\n\n$$S_n = (x^2 + x^4 + \\cdots + x^{2n}) + \\left(\\frac{1}{x^2} + \\cdots + \\frac{1}{x^{2n}}\\right) + 2n.$$\n\nThe first bracket is a GP with first term $x^2$, ratio $x^2$: it equals $x^2\\cdot\\frac{x^{2n} - 1}{x^2 - 1}$. The second, with first term $\\frac{1}{x^2}$ and ratio $\\frac{1}{x^2}$, simplifies to $\\frac{1}{x^{2n}}\\cdot\\frac{x^{2n} - 1}{x^2 - 1}$. Combining,\n\n$$S_n = \\left(\\frac{x^{2n} - 1}{x^2 - 1}\\right)\\left(x^2 + \\frac{1}{x^{2n}}\\right) + 2n.$$",
    },
    {
      kind: "example",
      title: "Illustration 5.51 — splitting into a GP plus an AP",
      statement:
        "Prove that the sum to $n$ terms of $11 + 103 + 1005 + \\cdots$ is $\\frac{10}{9}(10^n - 1) + n^2$.",
      approach:
        "The $k$th term is $10^k + (2k - 1)$: a power of ten plus an odd number. Sum the powers of ten as a GP and the odd numbers as an AP.",
      solution:
        "$S_n = (10 + 1) + (10^2 + 3) + (10^3 + 5) + \\cdots + (10^n + (2n-1))$.\n\nSplit: $S_n = (10 + 10^2 + \\cdots + 10^n) + (1 + 3 + 5 + \\cdots + (2n-1))$.\n\nThe GP part is $\\frac{10(10^n - 1)}{10 - 1} = \\frac{10}{9}(10^n - 1)$. The AP part is the sum of the first $n$ odd numbers $= n^2$. Hence $S_n = \\frac{10}{9}(10^n - 1) + n^2$.",
    },
    {
      kind: "example",
      title: "Illustration 5.52(i) — the 5, 55, 555 trick",
      statement: "Find the sum of $5 + 55 + 555 + \\cdots$ to $n$ terms.",
      approach:
        "Factor out the repeated digit and rewrite each repunit-type term as $\\frac{1}{9}(10^k - 1)$, turning the sum into a GP minus a constant.",
      solution:
        "$5 + 55 + 555 + \\cdots = 5[1 + 11 + 111 + \\cdots] = \\frac{5}{9}[9 + 99 + 999 + \\cdots]$.\n\nEach term $\\underbrace{99\\ldots9}_{k} = 10^k - 1$, so the bracket is $(10 - 1) + (10^2 - 1) + \\cdots + (10^n - 1) = (10 + 10^2 + \\cdots + 10^n) - n$.\n\nThus $\\frac{5}{9}\\left[10\\cdot\\frac{10^n - 1}{9} - n\\right] = \\frac{5}{81}\\left[10^{n+1} - 10 - 9n\\right].$",
    },
    {
      kind: "example",
      title: "Illustration 5.52(ii) — a finite decimal sum",
      statement: "Find $0.6 + 0.66 + 0.666 + \\cdots$ to $n$ terms.",
      approach:
        "Same idea, but each term $\\underbrace{0.9\\ldots9}_{k} = 1 - \\frac{1}{10^k}$. That gives $n$ ones minus a geometric series in $\\frac{1}{10}$.",
      solution:
        "$S_n = 6[0.1 + 0.11 + \\cdots] = \\frac{6}{9}[0.9 + 0.99 + \\cdots] = \\frac{2}{3}\\left[\\left(1 - \\frac{1}{10}\\right) + \\left(1 - \\frac{1}{10^2}\\right) + \\cdots\\right]$.\n\nSo $S_n = \\frac{2}{3}\\left[n - \\frac{1}{10}\\cdot\\frac{1 - (1/10)^n}{1 - 1/10}\\right] = \\frac{2}{3}n - \\frac{2}{27}\\left(1 - 10^{-n}\\right).$",
    },
    {
      kind: "example",
      title: "Illustration 5.53 — a sum whose terms are themselves sums",
      statement:
        "Find $1 + (1 + 2) + (1 + 2 + 2^2) + (1 + 2 + 2^2 + 2^3) + \\cdots$ to $n$ terms.",
      approach:
        "First find a closed form for the general term $T_k$ (itself a GP sum), then sum those closed forms.",
      solution:
        "$T_k = 1 + 2 + 2^2 + \\cdots + 2^{k-1} = \\frac{2^k - 1}{2 - 1} = 2^k - 1$.\n\nThen $S = \\sum_{k=1}^{n}(2^k - 1) = (2 + 2^2 + \\cdots + 2^n) - n = \\frac{2(2^n - 1)}{2 - 1} - n = 2^{n+1} - 2 - n.$",
    },
    {
      kind: "example",
      title: "Illustration 5.54 — recovering terms from the sum, then reciprocals",
      statement:
        "If the sum of $n$ terms of a GP is $3^n - 1$, find the sum of the series formed by the reciprocals of its terms.",
      approach:
        "Use $T_r = S_r - S_{r-1}$ to identify the GP, invert each term (reciprocals of a GP are again a GP), then sum.",
      solution:
        "$T_r = S_r - S_{r-1} = (3^r - 1) - (3^{r-1} - 1) = 3^{r-1}(3 - 1) = 2\\cdot 3^{r-1}$.\n\nSo $\\frac{1}{T_r} = \\frac{1}{2}\\left(\\frac{1}{3}\\right)^{r-1}$, a GP with first term $\\frac{1}{2}$ and ratio $\\frac{1}{3}$.\n\nSum of $n$ terms $= \\frac{\\frac{1}{2}\\left(1 - (1/3)^n\\right)}{1 - \\frac{1}{3}} = \\frac{3}{4}\\left(1 - \\left(\\frac{1}{3}\\right)^n\\right).$",
    },
    {
      kind: "check",
      id: "seq-gps-c1",
      prompt:
        "The sum of $n$ terms of a GP is $S_n = 3^n - 1$. What is its common ratio $r$?",
      format: "numeric",
      answer: "3",
      hint: "Use $T_r = S_r - S_{r-1}$ to find the general term.",
      explanation:
        "$T_r = (3^r - 1) - (3^{r-1} - 1) = 2\\cdot 3^{r-1}$. Consecutive ratio $\\frac{T_{r+1}}{T_r} = \\frac{2\\cdot 3^r}{2\\cdot 3^{r-1}} = 3$.",
    },
    {
      kind: "check",
      id: "seq-gps-c2",
      prompt:
        "Find the sum to $n$ terms of $1 + (1 + 2) + (1 + 2 + 2^2) + \\cdots$ (each bracket adds the next power of $2$).",
      format: "text",
      answer: "2^(n+1) - 2 - n",
      acceptedAnswers: ["2^{n+1}-2-n", "2^(n+1)-n-2"],
      hint: "The $k$th term is $2^k - 1$.",
      explanation:
        "$T_k = 2^k - 1$, so $S = \\sum_{k=1}^n (2^k - 1) = (2^{n+1} - 2) - n = 2^{n+1} - 2 - n$.",
    },
    {
      kind: "prose",
      heading: "Sum of an infinite GP",
      content:
        "An infinite GP $a + ar + ar^2 + \\cdots$ adds up to a **finite** value exactly when the terms shrink toward zero. Since $S_n = \\frac{a}{1 - r} - \\frac{ar^n}{1 - r}$, the behaviour is controlled by $r^n$. If $|r| < 1$ then $r^n \\to 0$ as $n \\to \\infty$, so the second piece vanishes and\n\n$$S_\\infty = \\frac{a}{1 - r}, \\quad 0 < |r| < 1.$$\n\nIf $|r| \\geq 1$ the terms do not shrink, $r^n$ does not tend to $0$, and the series diverges (has no finite sum). The case $r = -1$ oscillates between partial sums and never settles.",
    },
    {
      kind: "callout",
      variant: "definition",
      title: "Convergence condition",
      content:
        "An infinite geometric series converges **if and only if** $|r| < 1$ (with $r \\neq 0$ for a genuine GP). Only then is $S_\\infty = \\frac{a}{1 - r}$ meaningful. Always state or check this condition before using the infinite-sum formula.",
    },
    {
      kind: "callout",
      variant: "tip",
      title: "Recurring decimals are infinite GPs",
      content:
        "A repeating decimal is a hidden infinite GP. For example $0.\\overline{37} = \\frac{37}{100} + \\frac{37}{100^2} + \\cdots = \\frac{37/100}{1 - 1/100} = \\frac{37}{99}$. In general a block of $k$ repeating digits with value $N$ gives $0.\\overline{d_1\\ldots d_k} = \\frac{N}{10^k - 1}$.",
    },
    {
      kind: "example",
      title: "Illustration 5.58(i) — an infinite GP with a surd ratio",
      statement:
        "Find $(\\sqrt{2} + 1) + 1 + (\\sqrt{2} - 1) + \\cdots \\infty$.",
      approach:
        "Identify $a$ and $r$ (rationalise to see $r = \\sqrt{2} - 1 < 1$), then apply $S_\\infty = \\frac{a}{1 - r}$ and rationalise the result.",
      solution:
        "$a = \\sqrt{2} + 1$ and $r = \\frac{1}{\\sqrt{2} + 1} = \\sqrt{2} - 1$, which satisfies $|r| < 1$.\n\n$$S = \\frac{\\sqrt{2} + 1}{1 - (\\sqrt{2} - 1)} = \\frac{\\sqrt{2} + 1}{2 - \\sqrt{2}} = \\frac{\\sqrt{2} + 1}{\\sqrt{2}(\\sqrt{2} - 1)}.$$\n\nMultiplying top and bottom by $(\\sqrt{2} + 1)$ gives $\\frac{(\\sqrt{2}+1)^2}{\\sqrt{2}\\cdot 1} = \\frac{3 + 2\\sqrt{2}}{\\sqrt{2}} = \\frac{4 + 3\\sqrt{2}}{2}.$",
    },
    {
      kind: "example",
      title: "Illustration 5.58(ii) — splitting interleaved GPs",
      statement:
        "Find $\\frac{1}{2} + \\frac{1}{3^2} + \\frac{1}{2^3} + \\frac{1}{3^4} + \\frac{1}{2^5} + \\frac{1}{3^6} + \\cdots \\infty$.",
      approach:
        "The odd-position terms form one GP (powers of $1/2$) and the even-position terms another (powers of $1/3^2$). Sum each separately.",
      solution:
        "Group: $\\left(\\frac{1}{2} + \\frac{1}{2^3} + \\frac{1}{2^5} + \\cdots\\right) + \\left(\\frac{1}{3^2} + \\frac{1}{3^4} + \\cdots\\right)$.\n\nFirst GP: first term $\\frac{1}{2}$, ratio $\\frac{1}{4}$, sum $= \\frac{1/2}{1 - 1/4} = \\frac{2}{3}$.\n\nSecond GP: first term $\\frac{1}{9}$, ratio $\\frac{1}{9}$, sum $= \\frac{1/9}{1 - 1/9} = \\frac{1}{8}$.\n\nTotal $= \\frac{2}{3} + \\frac{1}{8} = \\frac{16 + 3}{24} = \\frac{19}{24}.$",
    },
    {
      kind: "example",
      title: "Illustration 5.59 — sum and sum of squares",
      statement:
        "The sum of an infinite GP is $20$ and the sum of the squares of its terms is $100$. Find the common ratio.",
      approach:
        "The squares form a GP with ratio $r^2$. Set up two equations, then divide the square of the first by the second to eliminate $a$.",
      solution:
        "$\\frac{a}{1 - r} = 20$ and $\\frac{a^2}{1 - r^2} = 100$. Squaring the first: $\\frac{a^2}{(1-r)^2} = 400$.\n\nDividing: $\\frac{1 - r^2}{(1 - r)^2} = \\frac{400}{100} = 4$, i.e. $\\frac{1 + r}{1 - r} = 4$. Then $1 + r = 4 - 4r \\Rightarrow 5r = 3 \\Rightarrow r = \\frac{3}{5}.$",
    },
    {
      kind: "example",
      title: "Illustration 5.60 — each term twice the sum of the rest",
      statement:
        "If each term of an infinite GP is twice the sum of the terms following it, find the common ratio.",
      approach:
        "Write $a_n = 2(a_{n+1} + a_{n+2} + \\cdots)$. The tail is itself an infinite GP with first term $a_{n+1}$.",
      solution:
        "$ar^{n-1} = 2(ar^n + ar^{n+1} + \\cdots) = 2\\cdot\\frac{ar^n}{1 - r}$. Cancelling $ar^{n-1}$: $1 = \\frac{2r}{1 - r}$, so $1 - r = 2r$ and $r = \\frac{1}{3}.$",
    },
    {
      kind: "example",
      title: "Illustration 5.61 — three interleaved infinite GPs",
      statement:
        "If $x = a + \\frac{a}{r} + \\frac{a}{r^2} + \\cdots \\infty$, $y = b - \\frac{b}{r} + \\frac{b}{r^2} - \\cdots \\infty$, and $z = c + \\frac{c}{r^2} + \\frac{c}{r^4} + \\cdots \\infty$, prove that $\\frac{xy}{z} = \\frac{ab}{c}$.",
      approach:
        "Sum each infinite GP with $S_\\infty = \\frac{\\text{first term}}{1 - \\text{ratio}}$, watching the sign of the ratio in $y$.",
      solution:
        "$x = \\frac{a}{1 - 1/r} = \\frac{ar}{r - 1}$; $\\;y = \\frac{b}{1 + 1/r} = \\frac{br}{r + 1}$; $\\;z = \\frac{c}{1 - 1/r^2} = \\frac{cr^2}{r^2 - 1}$.\n\nThen $xy = \\frac{ar}{r-1}\\cdot\\frac{br}{r+1} = \\frac{abr^2}{r^2 - 1}$, so $\\frac{xy}{z} = \\frac{abr^2/(r^2-1)}{cr^2/(r^2-1)} = \\frac{ab}{c}.$",
    },
    {
      kind: "example",
      title: "Illustration 5.62 — bouncing ball total distance",
      statement:
        "A ball is dropped from $120$ m and after each strike rebounds to $\\frac{4}{5}$ of the previous height. Find the total distance travelled before it comes to rest.",
      approach:
        "Count the initial fall once, then every rebound is travelled twice (up and down). The rebound heights form an infinite GP with ratio $\\frac{4}{5}$.",
      solution:
        "Total $= 120 + 2\\left[\\frac{4}{5}(120) + \\left(\\frac{4}{5}\\right)^2(120) + \\cdots \\infty\\right]$.\n\nThe bracket is a GP with first term $\\frac{4}{5}(120) = 96$ and ratio $\\frac{4}{5}$: it sums to $\\frac{96}{1 - 4/5} = 480$.\n\nTotal $= 120 + 2(480) = 1080$ metres.",
    },
    {
      kind: "example",
      title: "Illustration 5.63 — allowed range of the second term",
      statement:
        "An infinite GP has second term $x$ and sum $4$. Prove that $x \\in (-8,\\, 1] - \\{0\\}$.",
      approach:
        "Write the first term as $\\frac{x}{r}$, use $S_\\infty = 4$ to express $x$ in terms of $r$, then find the range of that expression over $r \\in (-1,1)-\\{0\\}$.",
      solution:
        "First term $= \\frac{x}{r}$, so $\\frac{x/r}{1 - r} = 4 \\Rightarrow x = 4(r - r^2)$.\n\nComplete the square: $r - r^2 = \\frac{1}{4} - \\left(r - \\frac{1}{2}\\right)^2$. For $r \\in (-1, 1) - \\{0\\}$ this expression ranges over $\\left(-2, \\frac{1}{4}\\right] - \\{0\\}$. Multiplying by $4$ gives $x \\in (-8, 1] - \\{0\\}.$",
    },
    {
      kind: "check",
      id: "seq-gps-c3",
      prompt:
        "The sum of an infinite GP is $20$ and the sum of the squares of its terms is $100$. Find $r$.",
      format: "text",
      answer: "3/5",
      acceptedAnswers: ["0.6", "3/5", "r = 3/5"],
      hint: "The squares form a GP with ratio $r^2$; divide the square of the first equation by the second.",
      explanation:
        "$\\frac{a}{1-r} = 20$ and $\\frac{a^2}{1-r^2} = 100$. Squaring the first and dividing gives $\\frac{1+r}{1-r} = 4$, so $r = \\frac{3}{5}$.",
    },
    {
      kind: "check",
      id: "seq-gps-c4",
      prompt:
        "If each term of an infinite GP equals twice the sum of all terms after it, find $r$.",
      format: "text",
      answer: "1/3",
      acceptedAnswers: ["1/3", "0.333", "r = 1/3"],
      hint: "Set $ar^{n-1} = 2\\cdot\\frac{ar^n}{1-r}$.",
      explanation:
        "$1 = \\frac{2r}{1-r} \\Rightarrow 1 - r = 2r \\Rightarrow r = \\frac{1}{3}$.",
    },
    {
      kind: "check",
      id: "seq-gps-c5",
      prompt:
        "A ball dropped from $120$ m rebounds to $\\frac{4}{5}$ of each previous height. Find the total distance travelled (in metres).",
      format: "numeric",
      answer: "1080",
      hint: "Initial fall counted once; each rebound is travelled twice. Rebounds form a GP with ratio $4/5$.",
      explanation:
        "$120 + 2\\cdot\\frac{96}{1 - 4/5} = 120 + 2(480) = 1080$ m.",
    },
    {
      kind: "prose",
      heading: "GP sums as a divisibility and product tool",
      content:
        "The identity $a^{n-1} + a^{n-2}b + \\cdots + b^{n-1} = \\frac{a^n - b^n}{a - b}$ is just a GP sum (ratio $\\frac{b}{a}$). Using $-\\frac{b}{a}$ as the ratio shows that for **odd** $n$, $\\;a^n + b^n$ is divisible by $a + b$, since $\\frac{a^n + b^n}{a + b} = a^{n-1} - a^{n-2}b + \\cdots + b^{n-1}$ is an integer. Pairing terms this way is a classic way to prove large sums like $1^{99} + 2^{99} + \\cdots + 100^{99}$ are divisible by chosen numbers.\n\nInfinite GPs also linearise products of powers: $6^{1/2}\\cdot 6^{1/4}\\cdot 6^{1/8}\\cdots = 6^{(1/2 + 1/4 + 1/8 + \\cdots)} = 6^1 = 6$, because the exponents form an infinite GP summing to $1$.",
    },
    {
      kind: "example",
      title: "Illustration 5.56 — functional equation hiding a GP",
      statement:
        "A function satisfies $f(x + y) = f(x)f(y)$ for all $x, y \\in \\mathbb{N}$, with $f(1) = 3$ and $f(1) + f(2) + \\cdots + f(n) = 120$. Find $n$.",
      approach:
        "The multiplicative rule forces $f(k) = 3^k$, a GP. Sum it and solve.",
      solution:
        "$f(2) = f(1)f(1) = 9$, $f(3) = f(1)f(2) = 27$, so $f(k) = 3^k$: a GP with first term $3$ and ratio $3$.\n\n$120 = \\frac{3(3^n - 1)}{3 - 1} = \\frac{3}{2}(3^n - 1) \\Rightarrow 3^n = 81 = 3^4 \\Rightarrow n = 4.$",
    },
    {
      kind: "example",
      title: "Exercise 5.5 Q1 — sum vs odd-place sum",
      statement:
        "A GP has an even number of terms $2n$. If the sum of all the terms is $5$ times the sum of the terms in odd places, find the common ratio.",
      approach:
        "The odd-place terms $t_1, t_3, t_5, \\ldots$ themselves form a GP with ratio $r^2$. Set the whole sum equal to $5$ times that and simplify.",
      solution:
        "$\\frac{a(1 - r^{2n})}{1 - r} = 5\\cdot\\frac{a(1 - (r^2)^n)}{1 - r^2}$. Since $1 - r^2 = (1 - r)(1 + r)$, the equation reduces to $1 = \\frac{5}{1 + r}$, so $1 + r = 5$ and $r = 4.$",
    },
    {
      kind: "example",
      title: "Exercise 5.5 Q5 — decompose into constant plus GP",
      statement:
        "Find the sum of $n$ terms of $\\frac{4}{3} + \\frac{10}{9} + \\frac{28}{27} + \\cdots$",
      approach:
        "Notice each term is $1 + \\frac{1}{3^k}$: $\\frac{4}{3} = 1 + \\frac{1}{3}$, $\\frac{10}{9} = 1 + \\frac{1}{9}$, and so on. Split into $n$ ones plus a GP.",
      solution:
        "$S_n = n + \\left(\\frac{1}{3} + \\frac{1}{9} + \\cdots + \\frac{1}{3^n}\\right) = n + \\frac{\\frac{1}{3}(1 - 3^{-n})}{1 - \\frac{1}{3}} = n + \\frac{1}{2}\\left(1 - \\frac{1}{3^n}\\right).$\n\nCombining over a common denominator: $S_n = \\frac{(2n + 1)3^n - 1}{2\\cdot 3^n}.$",
    },
    {
      kind: "example",
      title: "Exercise 5.5 Q10 — grouped GP terms",
      statement:
        "Find the sum to $n$ terms of $1 + \\left(1 + \\frac{1}{2} + \\frac{1}{2^2}\\right) + \\left(1 + \\frac{1}{2} + \\frac{1}{2^2} + \\frac{1}{2^3} + \\frac{1}{2^4}\\right) + \\cdots$",
      approach:
        "Each bracket is a finite GP; the $k$th bracket sums to $2\\left(1 - (1/2)^{2k-1}\\right)$. Sum those closed forms.",
      solution:
        "The $k$th group $= \\frac{1 - (1/2)^{2k-1}}{1 - 1/2} = 2\\left(1 - \\left(\\tfrac{1}{2}\\right)^{2k-1}\\right)$. Adding the $n$ groups and simplifying the leftover geometric part gives\n\n$$S_n = 2n - \\frac{4}{3}\\left(1 - \\frac{1}{2^{2n}}\\right).$$",
    },
    {
      kind: "check",
      id: "seq-gps-c6",
      prompt:
        "A GP with an even number of terms has total sum equal to $5$ times the sum of the odd-place terms. Find $r$.",
      format: "numeric",
      answer: "4",
      hint: "Odd-place terms form a GP with ratio $r^2$; use $1 - r^2 = (1-r)(1+r)$.",
      explanation:
        "$\\frac{a(1-r^{2n})}{1-r} = 5\\cdot\\frac{a(1-r^{2n})}{1-r^2}$ reduces to $1 = \\frac{5}{1+r}$, so $r = 4$.",
    },
    {
      kind: "check",
      id: "seq-gps-c7",
      prompt:
        "Sum the infinite product of exponents: what is $6^{1/2}\\cdot 6^{1/4}\\cdot 6^{1/8}\\cdots \\infty$?",
      format: "numeric",
      answer: "6",
      hint: "Add the exponents; they form an infinite GP with first term $1/2$ and ratio $1/2$.",
      explanation:
        "The exponents sum to $\\frac{1/2}{1 - 1/2} = 1$, so the product is $6^1 = 6$.",
    },
    {
      kind: "check",
      id: "seq-gps-c8",
      prompt:
        "If $\\sum_{n=0}^\\infty r^n = s$ (with $|r| < 1$), express $\\sum_{n=0}^\\infty r^{2n}$ in terms of $s$.",
      format: "text",
      answer: "s^2/(2s-1)",
      acceptedAnswers: ["s^2/(2s-1)", "s²/(2s-1)", "\\frac{s^2}{2s-1}"],
      hint: "From $s = \\frac{1}{1-r}$ solve for $r$, then use $\\sum r^{2n} = \\frac{1}{1-r^2}$.",
      explanation:
        "$s = \\frac{1}{1-r} \\Rightarrow r = \\frac{s-1}{s}$. Then $\\frac{1}{1-r^2} = \\frac{1}{1 - (s-1)^2/s^2} = \\frac{s^2}{s^2 - (s-1)^2} = \\frac{s^2}{2s-1}$.",
    },
    {
      kind: "prose",
      heading: "The preserved core checks",
      content:
        "Work through these to lock in the finite formula, the infinite formula, recurring decimals, and the sum-of-cubes trick.",
    },
    {
      kind: "check",
      id: "seq-c20",
      prompt: "Find the sum of the first $8$ terms of the GP $3, 6, 12, 24, \\ldots$",
      format: "numeric",
      answer: "765",
      hint: "$a=3, r=2, n=8$. $S_8 = 3 \\cdot \\frac{2^8-1}{2-1}$.",
      explanation: "$S_8 = 3(2^8 - 1) = 3 \\times 255 = 765$.",
    },
    {
      kind: "check",
      id: "seq-c21",
      prompt: "Find the sum to infinity: $1 + \\frac{1}{3} + \\frac{1}{9} + \\frac{1}{27} + \\cdots$",
      format: "text",
      answer: "3/2",
      hint: "$a = 1, r = 1/3$. $S_\\infty = \\frac{1}{1-1/3}$.",
      explanation: "$\\frac{1}{1-1/3} = \\frac{1}{2/3} = \\frac{3}{2}$.",
    },
    {
      kind: "check",
      id: "seq-c22",
      prompt: "Express $0.\\overline{6}$ as a fraction.",
      format: "text",
      answer: "2/3",
      hint: "$0.666\\ldots = \\frac{6/10}{1-1/10} = \\frac{6}{9}$.",
      explanation: "$\\frac{6}{9} = \\frac{2}{3}$.",
    },
    {
      kind: "check",
      id: "seq-c23",
      prompt:
        "The sum of an infinite GP is $4$ and the sum of cubes of its terms is $192$. Find the first term.",
      format: "numeric",
      answer: "6",
      hint: "Sum $= a/(1-r) = 4$. Cubes form GP with first term $a^3$, ratio $r^3$: sum $= a^3/(1-r^3)$.",
      explanation:
        "$\\frac{a}{1-r} = 4$ so $a = 4(1-r)$. $\\frac{a^3}{1-r^3} = 192$. $1-r^3 = (1-r)(1+r+r^2)$. So $\\frac{a^3}{(1-r)(1+r+r^2)} = 192$. Since $a/(1-r) = 4$: $\\frac{a^2 \\cdot 4}{1+r+r^2} = 192 \\Rightarrow a^2 = 48(1+r+r^2)/(1) $... Actually: $\\frac{a^3}{1-r^3} = \\frac{a^3}{(1-r)(1+r+r^2)} = \\frac{a}{1-r} \\cdot \\frac{a^2}{1+r+r^2} = 4 \\cdot \\frac{a^2}{1+r+r^2} = 192$. So $a^2 = 48(1+r+r^2)$. Also $a = 4-4r$, so $16(1-r)^2 = 48(1+r+r^2)$. $(1-r)^2 = 3(1+r+r^2)$. $1-2r+r^2 = 3+3r+3r^2$. $2r^2+5r+2 = 0$. $r = -1/2$ or $-2$. For convergence $|r|<1$: $r = -1/2$. $a = 4(1+1/2) = 6$.",
    },
    {
      kind: "check",
      id: "seq-c24",
      prompt: "Find the sum: $1 + 2 \\cdot 3 + 3 \\cdot 3^2 + 4 \\cdot 3^3 + \\cdots$ to $n$ terms.",
      format: "text",
      answer: "(2n-1)3^n/4 + 1/4",
      hint: "This is an AGP. Multiply by $r=3$, subtract, and solve.",
      explanation:
        "Let $S = 1 + 2(3) + 3(3^2) + \\cdots + n \\cdot 3^{n-1}$. $3S = 1(3) + 2(3^2) + \\cdots + (n-1)3^{n-1} + n \\cdot 3^n$. $S - 3S = 1 + 3 + 3^2 + \\cdots + 3^{n-1} - n \\cdot 3^n = \\frac{3^n-1}{2} - n \\cdot 3^n$. $-2S = \\frac{3^n-1}{2} - n \\cdot 3^n$. $S = \\frac{(2n-1)3^n + 1}{4}$.",
    },
  ],
  workedExamples: [
    {
      kind: "example",
      title: "Infinite GP where each term is the sum of all that follow",
      statement:
        "The first term of an infinite GP is $1$. Every term equals the sum of all terms that follow it. Find $r$.",
      approach:
        "For term $a_n$: $a_n = a_{n+1} + a_{n+2} + \\cdots = \\frac{a_{n+1}}{1-r}$.",
      solution:
        "$ar^{n-1} = \\frac{ar^n}{1-r} \\Rightarrow 1 = \\frac{r}{1-r} \\Rightarrow 1-r = r \\Rightarrow r = \\frac{1}{2}$.",
    },
    {
      kind: "example",
      title: "Illustration 5.49 — the P, R, S identity",
      statement:
        "Let $S$, $P$, $R$ be the sum, product, and sum of reciprocals of $n$ terms of a GP. Prove $P^2 R^n = S^n$.",
      approach:
        "Compute each of $S$, $P$, $R$ explicitly (the reciprocals form a GP), then multiply and cancel.",
      solution:
        "$S = \\frac{a(r^n - 1)}{r - 1}$; $\\;P = a^n r^{1 + 2 + \\cdots + (n-1)} = a^n r^{n(n-1)/2}$; $\\;R = \\frac{\\frac{1}{a}(1 - (1/r)^n)}{1 - 1/r} = \\frac{r^n - 1}{a r^{n-1}(r - 1)}$.\n\nThen $P^2 R^n = a^{2n} r^{n(n-1)}\\cdot\\frac{(r^n - 1)^n}{a^n r^{n(n-1)}(r - 1)^n} = \\frac{a^n (r^n - 1)^n}{(r - 1)^n} = \\left[\\frac{a(r^n - 1)}{r - 1}\\right]^n = S^n.$",
    },
    {
      kind: "example",
      title: "Illustration 5.57 — divisibility from a GP sum",
      statement:
        "Prove $a^n + b^n$ is divisible by $a + b$ for odd $n$, and hence that $1^{99} + 2^{99} + \\cdots + 100^{99}$ is divisible by $10100$.",
      approach:
        "Write $\\frac{a^n + b^n}{a+b}$ as a GP sum with ratio $-\\frac{b}{a}$; for odd $n$ it is an integer. Then pair terms of the big sum to expose factors $101$ and $100$.",
      solution:
        "For odd $n$, $\\frac{a^n + b^n}{a + b} = a^{n-1} - a^{n-2}b + a^{n-3}b^2 - \\cdots + b^{n-1}$, an integer, so $a + b \\mid a^n + b^n$.\n\nPairing $1^{99} + 2^{99} + \\cdots + 100^{99} = (1^{99} + 100^{99}) + (2^{99} + 99^{99}) + \\cdots + (50^{99} + 51^{99})$: each bracket is divisible by $101$, so the sum is divisible by $101$.\n\nRe-pairing as $(1^{99} + 99^{99}) + (2^{99} + 98^{99}) + \\cdots + (49^{99} + 51^{99}) + 50^{99} + 100^{99}$: each bracket, and $50^{99}$ and $100^{99}$, is divisible by $100$, so the sum is divisible by $100$.\n\nSince $\\gcd(100, 101) = 1$, the sum is divisible by $100 \\times 101 = 10100.$",
    },
  ],
  practiceProblemIds: [],
};
