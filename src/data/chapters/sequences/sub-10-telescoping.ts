import type { SubChapter } from "@/lib/types";

export const subTelescoping: SubChapter = {
  id: "telescoping",
  title: "Telescoping series (Vn / cancellation method)",
  lesson: [
    {
      kind: "prose",
      heading: "10 · Summing a series by cancellation",
      content: "Many sums that look intimidating collapse to almost nothing once you write each term as a **difference of consecutive values** of some auxiliary sequence $V$. When you add the terms up, the interior parts cancel in pairs and only the ends survive. This is the **telescoping** (or **cancellation**, or **$V_n$**) method.\n\nSuppose the general term $T_r$ can be written as\n$$T_r = V(r) - V(r-1) \\quad \\text{or} \\quad T_r = V(r) - V(r+1).$$\n\nThen summing from $r = 1$ to $n$ leaves only boundary values:\n$$\\sum_{r=1}^{n} \\big(V(r) - V(r-1)\\big) = V(n) - V(0),$$\n$$\\sum_{r=1}^{n} \\big(V(r) - V(r+1)\\big) = V(1) - V(n+1).$$\n\nThe whole game is: **find the right $V$** so that the $k$-th term equals a difference. Once you have it, the answer is just \"last minus first\" (up to a sign)."
    },
    {
      kind: "callout",
      variant: "definition",
      title: "The telescoping identity",
      content: "If $T_r = f(r) - f(r-1)$ for every $r$, then\n$$\\sum_{r=1}^{n} T_r = f(n) - f(0).$$\n\nEverything in between cancels: $\\big(f(1)-f(0)\\big) + \\big(f(2)-f(1)\\big) + \\cdots + \\big(f(n)-f(n-1)\\big) = f(n) - f(0)$. The name comes from a collapsing telescope — the middle slides away and only the two ends remain."
    },
    {
      kind: "callout",
      variant: "tip",
      title: "When terms skip further apart",
      content: "If the difference jumps by two, $T_r = V(r+2) - V(r)$, then two terms survive at each end:\n$$\\sum_{r=1}^{n} \\big(V(r+2) - V(r)\\big) = V(n+1) + V(n+2) - V(1) - V(2).$$\n\nMore generally, if $T_r = V(r+3) - V(r)$, three consecutive $V$ values remain at each end. Always write out the first few and last few terms if you are unsure which ones fail to cancel."
    },
    {
      kind: "prose",
      heading: "Building the telescope with partial fractions",
      content: "The most common way to manufacture a difference is **partial fractions**. The two identities you must know cold are:\n$$\\frac{1}{k(k+1)} = \\frac{1}{k} - \\frac{1}{k+1},$$\n$$\\frac{1}{k(k+1)(k+2)} = \\frac{1}{2}\\left[\\frac{1}{k(k+1)} - \\frac{1}{(k+1)(k+2)}\\right].$$\n\nThe general pattern for a product of consecutive integers in the denominator: to split $\\dfrac{1}{a_1 a_2 \\cdots a_m}$ where the factors are in AP, multiply and divide by the gap $a_m - a_1$. For example,\n$$\\frac{1}{k(k+1)(k+2)(k+3)} = \\frac{1}{3}\\left[\\frac{1}{k(k+1)(k+2)} - \\frac{1}{(k+1)(k+2)(k+3)}\\right],$$\nsince the outer factors differ by $3$."
    },
    {
      kind: "callout",
      variant: "tip",
      title: "The 'gap' trick for products of an AP",
      content: "If $a_1, a_2, \\ldots, a_m$ are in AP with common difference $d$, and $T_r = \\dfrac{1}{a_1 a_2 \\cdots a_m}$, then multiply the numerator by the gap $\\dfrac{a_m - a_1}{a_m - a_1}$ (which equals $\\dfrac{(m-1)d}{(m-1)d}$). Writing $a_m - a_1$ in the numerator lets you split into two fractions, one missing the last factor and one missing the first. Result:\n$$\\frac{1}{a_1 a_2 \\cdots a_m} = \\frac{1}{(m-1)d}\\left[\\frac{1}{a_1 \\cdots a_{m-1}} - \\frac{1}{a_2 \\cdots a_m}\\right].$$"
    },
    {
      kind: "prose",
      heading: "Products of consecutive integers (the reverse direction)",
      content: "The same idea sums **products** of consecutive integers. Here you build $V$ by *extending* the product one step in each direction:\n$$r(r+1)(r+2)(r+3) = \\frac{1}{5}\\Big[r(r+1)(r+2)(r+3)(r+4) - (r-1)r(r+1)(r+2)(r+3)\\Big].$$\n\nThis telescopes with $V(r) = (r-1)r(r+1)(r+2)(r+3)$. The general results are worth memorising:\n$$\\sum_{r=1}^{n} r(r+1)(r+2) = \\frac{n(n+1)(n+2)(n+3)}{4},$$\n$$\\sum_{r=1}^{n} r(r+1)(r+2)(r+3) = \\frac{n(n+1)(n+2)(n+3)(n+4)}{5}.$$\nEach product of $m$ consecutive integers sums to the product of $m+1$ consecutive integers divided by $m+1$."
    },
    {
      kind: "prose",
      heading: "Rationalising surd denominators",
      content: "When a term has a sum of square roots in the denominator, **rationalise** by multiplying by the conjugate — this is how you turn it into a telescoping difference:\n$$\\frac{1}{\\sqrt{k} + \\sqrt{k+1}} = \\frac{\\sqrt{k+1} - \\sqrt{k}}{(\\sqrt{k+1})^2 - (\\sqrt{k})^2} = \\sqrt{k+1} - \\sqrt{k}.$$\n\nSo $\\displaystyle\\sum_{k=1}^{n}\\frac{1}{\\sqrt{k}+\\sqrt{k+1}} = \\sqrt{n+1} - 1$. Whenever you see nested surds in a denominator, reach for the conjugate first."
    },
    {
      kind: "callout",
      variant: "trap",
      title: "Watch the sign and the boundary count",
      content: "Two mistakes wreck telescoping problems. First, sign: $T_r = V(r) - V(r+1)$ leaves $V(1) - V(n+1)$, but $T_r = V(r) - V(r-1)$ leaves $V(n) - V(0)$ — check which direction your difference points. Second, when the gap is bigger than $1$ (e.g. $V(r) - V(r+3)$), more than one term survives at each end. Always test your $V$ on $r=1$ and expand the tail before quoting the answer."
    },
    {
      kind: "check",
      id: "seq-c42",
      prompt: "Find $\\sum_{k=1}^{100} \\frac{1}{k(k+1)}$.",
      format: "text",
      answer: "100/101",
      hint: "$\\frac{1}{k(k+1)} = \\frac{1}{k} - \\frac{1}{k+1}$. Telescopes!",
      explanation: "$\\sum \\left(\\frac{1}{k} - \\frac{1}{k+1}\\right) = 1 - \\frac{1}{101} = \\frac{100}{101}$."
    },
    {
      kind: "check",
      id: "seq-c43",
      prompt: "Find $\\sum_{k=1}^n \\frac{1}{(2k-1)(2k+1)}$.",
      format: "text",
      answer: "n/(2n+1)",
      hint: "$\\frac{1}{(2k-1)(2k+1)} = \\frac{1}{2}\\left(\\frac{1}{2k-1} - \\frac{1}{2k+1}\\right)$.",
      explanation: "$\\frac{1}{2}\\left(1 - \\frac{1}{2n+1}\\right) = \\frac{1}{2} \\cdot \\frac{2n}{2n+1} = \\frac{n}{2n+1}$."
    },
    {
      kind: "check",
      id: "seq-c44",
      prompt: "Find $\\frac{1}{1+\\sqrt{2}} + \\frac{1}{\\sqrt{2}+\\sqrt{3}} + \\cdots + \\frac{1}{\\sqrt{99}+\\sqrt{100}}$.",
      format: "numeric",
      answer: "9",
      hint: "Rationalise: $\\frac{1}{\\sqrt{k}+\\sqrt{k+1}} = \\sqrt{k+1} - \\sqrt{k}$. Telescopes!",
      explanation: "$\\sum_{k=1}^{99}(\\sqrt{k+1}-\\sqrt{k}) = \\sqrt{100} - \\sqrt{1} = 10 - 1 = 9$."
    },
    {
      kind: "check",
      id: "seq-c45",
      prompt: "Find $\\sum_{k=1}^n \\frac{1}{k(k+1)(k+2)}$.",
      format: "text",
      answer: "n(n+3)/[4(n+1)(n+2)]",
      hint: "$\\frac{1}{k(k+1)(k+2)} = \\frac{1}{2}\\left[\\frac{1}{k(k+1)} - \\frac{1}{(k+1)(k+2)}\\right]$. Telescope.",
      explanation: "$\\frac{1}{2}\\left[\\frac{1}{1 \\cdot 2} - \\frac{1}{(n+1)(n+2)}\\right] = \\frac{1}{2} \\cdot \\frac{(n+1)(n+2)-2}{2(n+1)(n+2)} = \\frac{n^2+3n}{4(n+1)(n+2)} = \\frac{n(n+3)}{4(n+1)(n+2)}$."
    },
    {
      kind: "prose",
      heading: "Factorials telescope too",
      content: "The factorial version of the trick rests on the identity $\\dfrac{r}{(r+1)!} = \\dfrac{(r+1)-1}{(r+1)!} = \\dfrac{1}{r!} - \\dfrac{1}{(r+1)!}$. With $V(r) = \\dfrac{1}{r!}$ this telescopes to $1 - \\dfrac{1}{(n+1)!}$, and the infinite sum is exactly $1$. The recurring move is to split the numerator so that one part cancels a factor of the factorial in the denominator."
    },
    {
      kind: "check",
      id: "seq-tel-c1",
      prompt: "Find $\\sum_{r=1}^{n} \\frac{r}{(r+1)!}$, and its limit as $n \\to \\infty$.",
      format: "text",
      answer: "1 - 1/(n+1)!, limit 1",
      hint: "Write $r = (r+1) - 1$ so $\\frac{r}{(r+1)!} = \\frac{1}{r!} - \\frac{1}{(r+1)!}$.",
      explanation: "$T_r = \\frac{1}{r!} - \\frac{1}{(r+1)!} = V(r) - V(r+1)$ with $V(r) = \\frac{1}{r!}$. The sum telescopes to $V(1) - V(n+1) = 1 - \\frac{1}{(n+1)!}$. As $n \\to \\infty$ the tail vanishes, so the infinite sum is $1$."
    },
    {
      kind: "check",
      id: "seq-tel-c2",
      prompt: "Evaluate the infinite sum $\\sum_{r=1}^{\\infty} \\frac{1}{r(r+1)(r+2)(r+3)}$.",
      format: "text",
      answer: "1/18",
      hint: "Use the gap trick: $\\frac{1}{r(r+1)(r+2)(r+3)} = \\frac{1}{3}\\left[\\frac{1}{r(r+1)(r+2)} - \\frac{1}{(r+1)(r+2)(r+3)}\\right]$.",
      explanation: "With $V(r) = \\frac{1}{r(r+1)(r+2)}$, the sum to $n$ terms is $\\frac{1}{3}\\left(V(1) - V(n+1)\\right) = \\frac{1}{3}\\left(\\frac{1}{6} - \\frac{1}{(n+1)(n+2)(n+3)}\\right)$. As $n \\to \\infty$ this gives $\\frac{1}{3} \\cdot \\frac{1}{6} = \\frac{1}{18}$."
    },
    {
      kind: "check",
      id: "seq-tel-c3",
      prompt: "Find $\\sum_{r=1}^{n} r(r+1)(r+2)$ in closed form.",
      format: "text",
      answer: "n(n+1)(n+2)(n+3)/4",
      hint: "Build $V(r) = (r-1)r(r+1)(r+2)$ so that $T_r = \\frac{1}{4}\\left(V(r+1) - V(r)\\right)$.",
      explanation: "$r(r+1)(r+2) = \\frac{1}{4}\\big[r(r+1)(r+2)(r+3) - (r-1)r(r+1)(r+2)\\big] = \\frac{1}{4}(V(r+1) - V(r))$ with $V(r) = (r-1)r(r+1)(r+2)$. Telescoping: $\\frac{1}{4}(V(n+1) - V(1)) = \\frac{1}{4}\\big[n(n+1)(n+2)(n+3) - 0\\big] = \\frac{n(n+1)(n+2)(n+3)}{4}$."
    },
    {
      kind: "check",
      id: "seq-tel-c4",
      prompt: "Find the infinite sum $\\frac{1}{1 \\times 3 \\times 5} + \\frac{1}{3 \\times 5 \\times 7} + \\frac{1}{5 \\times 7 \\times 9} + \\cdots$.",
      format: "text",
      answer: "1/12",
      hint: "$T_r = \\frac{1}{(2r-1)(2r+1)(2r+3)} = \\frac{1}{4}\\left[\\frac{1}{(2r-1)(2r+1)} - \\frac{1}{(2r+1)(2r+3)}\\right]$.",
      explanation: "The outer factors differ by $4$, so $T_r = \\frac{1}{4}\\left[\\frac{1}{(2r-1)(2r+1)} - \\frac{1}{(2r+1)(2r+3)}\\right]$. Telescoping from $r=1$: the sum to $n$ terms is $\\frac{1}{4}\\left[\\frac{1}{1 \\cdot 3} - \\frac{1}{(2n+1)(2n+3)}\\right]$. As $n \\to \\infty$ this is $\\frac{1}{4} \\cdot \\frac{1}{3} = \\frac{1}{12}$."
    },
    {
      kind: "check",
      id: "seq-tel-c5",
      prompt: "Find $\\sum_{r=1}^{\\infty} \\frac{r}{1 + r^2 + r^4}$ to $n$ terms.",
      format: "text",
      answer: "(n^2+n)/[2(n^2+n+1)]",
      hint: "Factor $1 + r^2 + r^4 = (r^2 - r + 1)(r^2 + r + 1)$ and split.",
      explanation: "Using $1 + r^2 + r^4 = (r^2 - r + 1)(r^2 + r + 1)$ and $2r = (r^2 + r + 1) - (r^2 - r + 1)$: $T_r = \\frac{1}{2}\\left[\\frac{1}{r^2 - r + 1} - \\frac{1}{r^2 + r + 1}\\right]$. With $V(r) = \\frac{1}{r^2 + r + 1}$ this is $\\frac{1}{2}(V(r-1) - V(r))$, telescoping to $\\frac{1}{2}(V(0) - V(n)) = \\frac{1}{2}\\left[1 - \\frac{1}{n^2 + n + 1}\\right] = \\frac{n^2 + n}{2(n^2 + n + 1)}$."
    },
    {
      kind: "check",
      id: "seq-tel-c6",
      prompt: "Find the value of $n$ for which $\\sum_{r=1}^{n} \\frac{\\sqrt{r}}{1 + \\sqrt{r} + \\sqrt{r+1}} = 10$.",
      format: "numeric",
      answer: "24",
      hint: "Rationalise: multiply top and bottom by $(\\sqrt{r} + \\sqrt{r+1} - 1)$; each term becomes $\\frac{1}{2}\\left(1 - (\\sqrt{r+1} - \\sqrt{r})\\right)$.",
      explanation: "Rationalising, $T_r = \\frac{1}{2}\\big[1 - (\\sqrt{r+1} - \\sqrt{r})\\big]$. Summing: $\\sum_{r=1}^n T_r = \\frac{n}{2} - \\frac{1}{2}(\\sqrt{n+1} - 1)$. Set equal to $10$: $\\frac{n}{2} - \\frac{\\sqrt{n+1} - 1}{2} = 10$. Testing $n = 24$: $\\frac{24}{2} - \\frac{\\sqrt{25} - 1}{2} = 12 - \\frac{4}{2} = 12 - 2 = 10$. So $n = 24$."
    },
  ],
  workedExamples: [
    {
      kind: "example",
      title: "Reciprocals of triangular numbers (Illustration 5.95)",
      statement: "Find the sum $1 + \\dfrac{1}{1+2} + \\dfrac{1}{1+2+3} + \\cdots + \\dfrac{1}{1+2+3+\\cdots+n}$.",
      approach: "Each denominator is a triangular number $\\frac{r(r+1)}{2}$, so $T_r = \\frac{2}{r(r+1)}$ — a partial-fraction telescope.",
      solution: "$T_r = \\dfrac{1}{1+2+\\cdots+r} = \\dfrac{2}{r(r+1)} = 2\\left(\\dfrac{1}{r} - \\dfrac{1}{r+1}\\right) = 2(V(r) - V(r+1))$ with $V(r) = \\dfrac{1}{r}$.\n\nTelescoping: $\\sum_{r=1}^{n} T_r = 2(V(1) - V(n+1)) = 2\\left(1 - \\dfrac{1}{n+1}\\right) = \\dfrac{2n}{n+1}$."
    },
    {
      kind: "example",
      title: "Odd-number products (Illustration 5.96)",
      statement: "Find the sum to $n$ terms of $\\dfrac{1}{1 \\times 3} + \\dfrac{1}{3 \\times 5} + \\dfrac{1}{5 \\times 7} + \\cdots$.",
      approach: "The $r$-th term is $\\frac{1}{(2r-1)(2r+1)}$; split with the difference of the two odd factors.",
      solution: "$T_r = \\dfrac{1}{(2r-1)(2r+1)} = \\dfrac{1}{2}\\left(\\dfrac{1}{2r-1} - \\dfrac{1}{2r+1}\\right) = \\dfrac{1}{2}(V(r-1) - V(r))$ with $V(r) = \\dfrac{1}{2r+1}$.\n\n$\\sum_{r=1}^{n} T_r = \\dfrac{1}{2}(V(0) - V(n)) = \\dfrac{1}{2}\\left(1 - \\dfrac{1}{2n+1}\\right) = \\dfrac{n}{2n+1}$."
    },
    {
      kind: "example",
      title: "Difference of reciprocal squares (Illustration 5.97)",
      statement: "Find the sum to $n$ terms, and to infinity, of $\\dfrac{3}{1^2 \\times 2^2} + \\dfrac{5}{2^2 \\times 3^2} + \\dfrac{7}{3^2 \\times 4^2} + \\cdots$.",
      approach: "The numerators $3, 5, 7, \\ldots$ are $2r+1 = (r+1)^2 - r^2$, which is exactly the difference needed.",
      solution: "$T_r = \\dfrac{2r+1}{r^2(r+1)^2} = \\dfrac{(r+1)^2 - r^2}{r^2(r+1)^2} = \\dfrac{1}{r^2} - \\dfrac{1}{(r+1)^2} = V(r) - V(r+1)$ with $V(r) = \\dfrac{1}{r^2}$.\n\nSum to $n$: $1 - \\dfrac{1}{(n+1)^2} = \\dfrac{n^2 + 2n}{(n+1)^2}$. As $n \\to \\infty$, $\\dfrac{1}{(n+1)^2} \\to 0$, so the infinite sum is $1$."
    },
    {
      kind: "example",
      title: "A hidden quadratic factorisation (Illustration 5.98)",
      statement: "Find the sum to $n$ terms of $\\dfrac{1}{1 + 1^2 + 1^4} + \\dfrac{2}{1 + 2^2 + 2^4} + \\dfrac{3}{1 + 3^2 + 3^4} + \\cdots$.",
      approach: "Factor the denominator as a difference of two quadratics: $1 + r^2 + r^4 = (r^2 - r + 1)(r^2 + r + 1)$.",
      solution: "$T_r = \\dfrac{r}{1 + r^2 + r^4} = \\dfrac{1}{2} \\cdot \\dfrac{(r^2 + r + 1) - (r^2 - r + 1)}{(r^2 - r + 1)(r^2 + r + 1)} = \\dfrac{1}{2}\\left[\\dfrac{1}{r^2 - r + 1} - \\dfrac{1}{r^2 + r + 1}\\right]$.\n\nWith $V(r) = \\dfrac{1}{r^2 + r + 1}$, note $r^2 - r + 1 = (r-1)^2 + (r-1) + 1$, so $T_r = \\dfrac{1}{2}(V(r-1) - V(r))$. Telescoping: $\\sum_{r=1}^{n} T_r = \\dfrac{1}{2}(V(0) - V(n)) = \\dfrac{1}{2}\\left[1 - \\dfrac{1}{n^2 + n + 1}\\right] = \\dfrac{n^2 + n}{2(n^2 + n + 1)}$."
    },
    {
      kind: "example",
      title: "Factorial telescope (Illustration 5.99)",
      statement: "Find $\\sum_{r=1}^{n} \\dfrac{r}{(r+1)!}$, and the sum of infinite terms.",
      approach: "Split the numerator $r = (r+1) - 1$ so one piece cancels a factorial factor.",
      solution: "$T_r = \\dfrac{r}{(r+1)!} = \\dfrac{(r+1) - 1}{(r+1)!} = \\dfrac{1}{r!} - \\dfrac{1}{(r+1)!} = V(r) - V(r+1)$ with $V(r) = \\dfrac{1}{r!}$.\n\n$\\sum_{r=1}^{n} T_r = V(1) - V(n+1) = 1 - \\dfrac{1}{(n+1)!}$. As $n \\to \\infty$ this tends to $1 - 0 = 1$."
    },
    {
      kind: "example",
      title: "Four-factor product in the denominator (Illustration 5.100)",
      statement: "Find $\\sum_{r=1}^{n} \\dfrac{1}{r(r+1)(r+2)(r+3)}$ and its sum to infinity.",
      approach: "The outer factors $r$ and $r+3$ differ by $3$, so multiply and divide by that gap.",
      solution: "$T_r = \\dfrac{1}{r(r+1)(r+2)(r+3)} = \\dfrac{(r+3) - r}{3 \\, r(r+1)(r+2)(r+3)} = \\dfrac{1}{3}\\left(\\dfrac{1}{r(r+1)(r+2)} - \\dfrac{1}{(r+1)(r+2)(r+3)}\\right)$.\n\nWith $V(r) = \\dfrac{1}{r(r+1)(r+2)}$, this is $\\dfrac{1}{3}(V(r) - V(r+1))$, giving $\\sum_{r=1}^{n} T_r = \\dfrac{1}{3}\\left(\\dfrac{1}{6} - \\dfrac{1}{(n+1)(n+2)(n+3)}\\right)$. As $n \\to \\infty$ the infinite sum is $\\dfrac{1}{3} \\times \\dfrac{1}{6} = \\dfrac{1}{18}$."
    },
    {
      kind: "example",
      title: "Summing a product of consecutive integers (Illustration 5.101)",
      statement: "Find $\\sum_{r=1}^{n} r(r+1)(r+2)(r+3)$.",
      approach: "Build $V$ by extending the product to five consecutive factors, so that the difference recovers the four-factor term.",
      solution: "$T_r = r(r+1)(r+2)(r+3) = \\dfrac{1}{5}\\, r(r+1)(r+2)(r+3)\\big[(r+4) - (r-1)\\big]$ since $(r+4) - (r-1) = 5$.\n\nThis equals $\\dfrac{1}{5}\\big[r(r+1)(r+2)(r+3)(r+4) - (r-1)r(r+1)(r+2)(r+3)\\big] = \\dfrac{1}{5}(V(r+1) - V(r))$ with $V(r) = (r-1)r(r+1)(r+2)(r+3)$.\n\nTelescoping: $\\sum_{r=1}^{n} T_r = \\dfrac{1}{5}(V(n+1) - V(1)) = \\dfrac{1}{5}\\big[n(n+1)(n+2)(n+3)(n+4) - 0\\big] = \\dfrac{n(n+1)(n+2)(n+3)(n+4)}{5}$."
    },
    {
      kind: "example",
      title: "Rationalising a surd sum (Illustration 5.102)",
      statement: "Find $\\sum_{r=1}^{99} \\dfrac{1}{r\\sqrt{r+1} + (r+1)\\sqrt{r}}$.",
      approach: "Factor the denominator as $\\sqrt{r}\\sqrt{r+1}(\\sqrt{r} + \\sqrt{r+1})$, then rationalise.",
      solution: "$T_r = \\dfrac{1}{\\sqrt{r}\\sqrt{r+1}\\,(\\sqrt{r} + \\sqrt{r+1})} = \\dfrac{\\sqrt{r+1} - \\sqrt{r}}{\\sqrt{r}\\sqrt{r+1}} = \\dfrac{1}{\\sqrt{r}} - \\dfrac{1}{\\sqrt{r+1}} = V(r) - V(r+1)$ with $V(r) = \\dfrac{1}{\\sqrt{r}}$.\n\n$\\sum_{r=1}^{99} T_r = V(1) - V(100) = 1 - \\dfrac{1}{\\sqrt{100}} = 1 - \\dfrac{1}{10} = \\dfrac{9}{10}$."
    },
    {
      kind: "example",
      title: "A gap-of-three telescope (Illustration 5.103)",
      statement: "Find $\\dfrac{1}{3^2 + 1} + \\dfrac{1}{4^2 + 2} + \\dfrac{1}{5^2 + 3} + \\dfrac{1}{6^2 + 4} + \\cdots$ to infinity.",
      approach: "The $r$-th denominator is $r^2 + (r-2) = (r+2)(r-1)$, with $r$ running from $3$. Split, but note the outer indices differ by $3$.",
      solution: "$T_r = \\dfrac{1}{(r-1)(r+2)} = \\dfrac{1}{3}\\left[\\dfrac{1}{r-1} - \\dfrac{1}{r+2}\\right] = \\dfrac{1}{3}(V(r) - V(r+3))$ with $V(r) = \\dfrac{1}{r-1}$.\n\nBecause the gap is $3$, three terms survive at each end: $\\sum_{r=3}^{n} T_r = \\dfrac{1}{3}\\big[V(3) + V(4) + V(5) - V(n+1) - V(n+2) - V(n+3)\\big] = \\dfrac{1}{3}\\left[\\dfrac{1}{2} + \\dfrac{1}{3} + \\dfrac{1}{4} - \\dfrac{1}{n} - \\dfrac{1}{n+1} - \\dfrac{1}{n+2}\\right]$.\n\nAs $n \\to \\infty$ the tail vanishes, leaving $\\dfrac{1}{3}\\left[\\dfrac{1}{2} + \\dfrac{1}{3} + \\dfrac{1}{4}\\right] = \\dfrac{1}{3} \\cdot \\dfrac{13}{12} = \\dfrac{13}{36}$."
    },
    {
      kind: "example",
      title: "A factorial with a quadratic numerator (Illustration 5.104)",
      statement: "Find the sum of the first $100$ terms of the series with general term $T_r = (r^2 + 1)\\, r!$.",
      approach: "Rewrite $r^2 + 1 = r(r+1) - (r-1)$ so each piece pairs with a factorial to form a difference.",
      solution: "$T_r = (r^2 + 1)\\, r! = \\big(r(r+1) - (r-1)\\big)r! = r(r+1)! - (r-1)r! = V(r) - V(r-1)$ with $V(r) = r(r+1)!$.\n\n$\\sum_{r=1}^{100} T_r = V(100) - V(0) = 100 \\times 101! - 0 = 100 \\times 101!$."
    },
    {
      kind: "example",
      title: "A mixed AGP-style telescope (Illustration 5.105)",
      statement: "Find the sum to $n$ terms of $\\dfrac{2}{1 \\times 2} + \\dfrac{5}{2 \\times 3}\\cdot 2 + \\dfrac{10}{3 \\times 4}\\cdot 2^2 + \\dfrac{17}{4 \\times 5}\\cdot 2^3 + \\cdots$.",
      approach: "The general term is $\\frac{r^2+1}{r(r+1)}2^{r-1}$; split $r^2 + 1 = 2r^2 - (r^2 - 1)$ to create a difference of two similar pieces scaled by powers of $2$.",
      solution: "$T_r = \\dfrac{r^2 + 1}{r(r+1)}\\, 2^{r-1} = \\dfrac{2r^2 - (r^2 - 1)}{r(r+1)}\\, 2^{r-1} = \\left(\\dfrac{2r}{r+1} - \\dfrac{r-1}{r}\\right)2^{r-1} = \\dfrac{r \\cdot 2^r}{r+1} - \\dfrac{(r-1) \\cdot 2^{r-1}}{r}$.\n\nThis is $V(r) - V(r-1)$ with $V(r) = \\dfrac{r \\cdot 2^r}{r+1}$. Telescoping: $\\sum_{r=1}^{n} T_r = V(n) - V(0) = \\dfrac{n}{n+1}\\, 2^n - 0 = \\dfrac{n \\cdot 2^n}{n+1}$."
    },
    {
      kind: "example",
      title: "Reciprocal of a given telescoping sum (Exercise 5.9 Q2)",
      statement: "If $\\sum_{r=1}^{n} T_r = \\dfrac{n}{8}(n+1)(n+2)(n+3)$, find $\\sum_{r=1}^{n} \\dfrac{1}{T_r}$.",
      approach: "Recover $T_r = S_r - S_{r-1}$, then telescope the reciprocals.",
      solution: "$T_r = S_r - S_{r-1} = \\dfrac{r}{8}(r+1)(r+2)(r+3) - \\dfrac{r-1}{8}\\, r(r+1)(r+2) = \\dfrac{r(r+1)(r+2)}{8}\\big[(r+3) - (r-1)\\big] = \\dfrac{r(r+1)(r+2)}{2}$.\n\nSo $\\dfrac{1}{T_r} = \\dfrac{2}{r(r+1)(r+2)} = \\left[\\dfrac{1}{r(r+1)} - \\dfrac{1}{(r+1)(r+2)}\\right]$. Telescoping: $\\sum_{r=1}^{n}\\dfrac{1}{T_r} = \\dfrac{1}{1 \\cdot 2} - \\dfrac{1}{(n+1)(n+2)} = \\dfrac{(n+1)(n+2) - 2}{2(n+1)(n+2)} = \\dfrac{n(n+3)}{2(n+1)(n+2)}$."
    },
    {
      kind: "example",
      title: "A shifted three-factor sum (Exercise 5.9 Q8)",
      statement: "Find $\\sum_{r=1}^{\\infty} \\dfrac{r-2}{(r+2)(r+3)(r+4)}$.",
      approach: "Split into two two-factor pieces of the form $\\frac{p}{(r+2)(r+3)} + \\frac{q}{(r+3)(r+4)}$, each of which telescopes on its own.",
      solution: "Seek $\\dfrac{r-2}{(r+2)(r+3)(r+4)} = \\dfrac{p}{(r+2)(r+3)} + \\dfrac{q}{(r+3)(r+4)}$. Combining over a common denominator gives numerator $p(r+4) + q(r+2) = (p+q)r + (4p+2q)$, which must equal $r - 2$. So $p + q = 1$ and $4p + 2q = -2$, giving $p = -2$, $q = 3$.\n\nThus $T_r = \\dfrac{-2}{(r+2)(r+3)} + \\dfrac{3}{(r+3)(r+4)}$. Each piece telescopes: $\\sum_{r=1}^{\\infty}\\dfrac{1}{(r+2)(r+3)} = \\dfrac{1}{3}$ and $\\sum_{r=1}^{\\infty}\\dfrac{1}{(r+3)(r+4)} = \\dfrac{1}{4}$. Therefore the sum is $-2 \\cdot \\dfrac{1}{3} + 3 \\cdot \\dfrac{1}{4} = -\\dfrac{2}{3} + \\dfrac{3}{4} = \\dfrac{1}{12}$."
    },
  ],
  practiceProblemIds: [],
};
