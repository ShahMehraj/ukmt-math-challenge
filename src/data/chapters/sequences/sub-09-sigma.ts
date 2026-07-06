import type { SubChapter } from "@/lib/types";

export const subSigma: SubChapter = {
  id: "sigma-notation",
  title: "Sigma notation and standard sums",
  lesson: [
    {
      kind: "prose",
      heading: "9 · Sigma notation — packing a series into $\\sum$",
      content:
        "Once you know the formula for the general (the $r$th) term $T_r$ of a series, you can write its sum compactly using the summation symbol $\\sum$ (sigma):\n\n$$S_n = T_1 + T_2 + T_3 + \\cdots + T_n = \\sum_{r=1}^n T_r$$\n\nHere $T_r$ is the **general term** and $r$ is the **index of summation** running from the lower limit $1$ to the upper limit $n$.\n\nAny series can be put in sigma form once its $r$th term is known. For example:\n- An AP with $T_r = a + (r-1)d$ has sum $\\sum_{r=1}^n \\big(a + (r-1)d\\big)$.\n- A GP with $T_r = AR^{r-1}$ has sum $\\sum_{r=1}^n AR^{r-1}$.\n\nThe whole power of sigma notation is that it lets us break a complicated general term into simple pieces and sum each piece using standard formulas.",
    },
    {
      kind: "callout",
      variant: "definition",
      title: "Properties of $\\sum$ (linearity)",
      content:
        "For any sequences $T_r, T_r'$ and constant $a$:\n\n- **Distributes over $\\pm$:** $\\displaystyle\\sum_{r=1}^n (T_r \\pm T_r') = \\sum_{r=1}^n T_r \\pm \\sum_{r=1}^n T_r'$\n- **Constants pull out:** $\\displaystyle\\sum_{r=1}^n a\\,T_r = a\\sum_{r=1}^n T_r$\n- **Sum of a constant:** $\\displaystyle\\sum_{r=1}^n 1 = n$, and more generally $\\displaystyle\\sum_{r=1}^n c = nc$.\n\nTogether the first two say $\\sum$ is **linear** — this is the single most-used fact when summing series.",
    },
    {
      kind: "callout",
      variant: "trap",
      title: "$\\sum$ does NOT split over products or quotients",
      content:
        "A very common error: $\\sum$ is linear, but it does **not** distribute over multiplication or division of two variable sequences:\n\n$$\\sum_{r=1}^n T_r T_r' \\neq \\Big(\\sum_{r=1}^n T_r\\Big)\\Big(\\sum_{r=1}^n T_r'\\Big), \\qquad \\sum_{r=1}^n \\frac{T_r}{T_r'} \\neq \\frac{\\sum T_r}{\\sum T_r'}.$$\n\nTo sum a product like $\\sum r(r+1)$ you must first **expand** the general term into a sum of powers of $r$, then apply linearity to each power.",
    },
    {
      kind: "prose",
      heading: "The three standard power-sum formulas",
      content:
        "Almost every polynomial series reduces to these three results. Memorise them cold:\n\n$$\\sum_{r=1}^n r = \\frac{n(n+1)}{2}$$\n$$\\sum_{r=1}^n r^2 = \\frac{n(n+1)(2n+1)}{6}$$\n$$\\sum_{r=1}^n r^3 = \\left[\\frac{n(n+1)}{2}\\right]^2$$\n\nThe cube formula is derived from the telescoping identity $n^4 - (n-1)^4 = 4n^3 - 6n^2 + 4n - 1$: summing both sides collapses the left-hand side to $n^4$ and, after substituting $\\sum r^2$ and $\\sum r$, gives $\\sum r^3 = \\frac{n^2(n+1)^2}{4}$. Likewise $\\sum r^2$ comes from $n^3 - (n-1)^3 = 3n^2 - 3n + 1$.",
    },
    {
      kind: "callout",
      variant: "tip",
      title: "A beautiful identity",
      content:
        "The sum of the first $n$ cubes equals the square of the sum of the first $n$ naturals:\n$$\\sum_{r=1}^n r^3 = \\left(\\sum_{r=1}^n r\\right)^2.$$\nSo $1^3 + 2^3 + \\cdots + n^3 = (1 + 2 + \\cdots + n)^2$. For example $1^3+2^3+3^3+4^3 = 100 = 10^2 = (1+2+3+4)^2$.",
    },
    {
      // PRESERVED
      kind: "check",
      id: "seq-c37",
      prompt: "Find $\\sum_{k=1}^{20} k^2$.",
      format: "numeric",
      answer: "2870",
      hint: "$\\frac{20 \\times 21 \\times 41}{6}$.",
      explanation: "$\\frac{20 \\times 21 \\times 41}{6} = \\frac{17220}{6} = 2870$.",
    },
    {
      // PRESERVED
      kind: "check",
      id: "seq-c38",
      prompt: "Find $\\sum_{k=1}^{10} k^3$.",
      format: "numeric",
      answer: "3025",
      hint: "$\\left[\\frac{10 \\times 11}{2}\\right]^2 = 55^2$.",
      explanation: "$55^2 = 3025$.",
    },
    {
      kind: "prose",
      heading: "Summing series with a product general term",
      content:
        "When each term is a product of factors that each form an AP, find the $r$th term of every factor, multiply them, expand into powers of $r$, then sum term by term.\n\nWork through the illustrations below to see this recipe in action, then try the checks.",
    },
    {
      kind: "check",
      id: "seq-sig-c1",
      prompt:
        "In the series $2 \\times 5 + 5 \\times 9 + 8 \\times 13 + \\cdots$, the first factors are $2, 5, 8, \\ldots$ and the second factors are $5, 9, 13, \\ldots$. What is the general term $T_r$ (expanded)?",
      format: "text",
      answer: "12r^2 - r - 1",
      acceptedAnswers: ["12r^2-r-1", "12r²-r-1"],
      hint: "First factors: $T_r = 3r - 1$. Second factors: $T_r = 4r + 1$. Multiply.",
      explanation:
        "First factors form an AP with $r$th term $3r-1$; second factors form an AP with $r$th term $4r+1$. So $T_r = (3r-1)(4r+1) = 12r^2 + 3r - 4r - 1 = 12r^2 - r - 1$.",
    },
    {
      kind: "check",
      id: "seq-sig-c2",
      prompt:
        "Continuing the previous series, the sum to $n$ terms simplifies to $\\frac{n}{2}(8n^2 + 11n + 1)$. What is the sum of the first $2$ terms directly (i.e. $2\\times5 + 5\\times9$), and does the formula agree at $n=2$?",
      format: "numeric",
      answer: "55",
      hint: "$2\\times5 = 10$, $5\\times9 = 45$. Then check $\\frac{2}{2}(8\\cdot4 + 22 + 1)$.",
      explanation:
        "$10 + 45 = 55$. Formula: $\\frac{2}{2}(8(4) + 11(2) + 1) = 1(32 + 22 + 1) = 55$ ✓.",
    },
    {
      kind: "check",
      id: "seq-sig-c3",
      prompt:
        "Find $\\sum_{k=1}^n k(k+1)(k+2)$, the sum to $n$ terms of $1\\cdot2\\cdot3 + 2\\cdot3\\cdot4 + 3\\cdot4\\cdot5 + \\cdots$.",
      format: "text",
      answer: "n(n+1)(n+2)(n+3)/4",
      acceptedAnswers: [
        "n(n+1)(n+2)(n+3)/4",
        "[n(n+1)(n+2)(n+3)]/4",
      ],
      hint: "Expand $k(k+1)(k+2) = k^3 + 3k^2 + 2k$ and sum each power.",
      explanation:
        "$\\sum(k^3 + 3k^2 + 2k) = \\left[\\frac{n(n+1)}{2}\\right]^2 + 3\\cdot\\frac{n(n+1)(2n+1)}{6} + 2\\cdot\\frac{n(n+1)}{2}$. Factoring $\\frac{n(n+1)}{2}$: $\\frac{n(n+1)}{2}\\left[\\frac{n(n+1)}{2} + (2n+1) + 2\\right] = \\frac{n(n+1)}{4}(n^2 + 5n + 6) = \\frac{n(n+1)(n+2)(n+3)}{4}$.",
    },
    {
      kind: "check",
      id: "seq-sig-c4",
      prompt: "Find the sum of the odd squares $1^2 + 3^2 + 5^2 + \\cdots$ to $n$ terms.",
      format: "text",
      answer: "n(2n-1)(2n+1)/3",
      acceptedAnswers: ["n(2n-1)(2n+1)/3", "[n(2n-1)(2n+1)]/3"],
      hint: "General term is $(2k-1)^2 = 4k^2 - 4k + 1$.",
      explanation:
        "$\\sum(4k^2 - 4k + 1) = 4\\cdot\\frac{n(n+1)(2n+1)}{6} - 4\\cdot\\frac{n(n+1)}{2} + n = \\frac{n}{3}(4n^2 - 1) = \\frac{n(2n-1)(2n+1)}{3}$.",
    },
    {
      kind: "prose",
      heading: "Differences form an AP or a GP",
      content:
        "Some series are not obviously polynomial or geometric, but the **differences of consecutive terms** follow a familiar pattern.\n\n**If the first differences form an AP**, the $n$th term is a quadratic: $T_n = an^2 + bn + c$. Find $a, b, c$ from the first three terms, then sum with the standard formulas.\n\n**If the first differences form a GP** with ratio $r$, the $n$th term has the form $T_n = a\\,r^{\\,n} + b$ (a geometric part plus a constant). Find $a, b$ from the first two terms.\n\nThe underlying technique both methods rely on is the **shift-and-subtract**: write $S_n$, write $S_n$ shifted one place, and subtract so that the differences line up.",
    },
    {
      kind: "callout",
      variant: "tip",
      title: "Quick shortcut for the $n$th term",
      content:
        "Differences in AP $\\Rightarrow$ $T_n = an^2 + bn + c$ (solve using $T_1, T_2, T_3$).\n\nDifferences in GP with ratio $r$ $\\Rightarrow$ $T_n = a\\,r^{\\,n} + b$ (solve using $T_1, T_2$).\n\nThis avoids the full shift-and-subtract each time — you only need to pin down the constants.",
    },
    {
      kind: "check",
      id: "seq-sig-c5",
      prompt:
        "For the series $3 + 15 + 35 + 63 + \\cdots$, the differences $12, 20, 28, \\ldots$ are in AP, so $T_n = an^2 + bn + c$. Find $T_n$ in simplest form.",
      format: "text",
      answer: "4n^2 - 1",
      acceptedAnswers: ["4n^2-1", "4n²-1"],
      hint: "Solve $a+b+c=3$, $4a+2b+c=15$, $9a+3b+c=35$.",
      explanation:
        "Subtracting gives $3a+b = 12$ and $5a+b = 20$, so $2a = 8 \\Rightarrow a = 4$, then $b = 0$ and $c = -1$. Hence $T_n = 4n^2 - 1$.",
    },
    {
      kind: "check",
      id: "seq-sig-c6",
      prompt:
        "For the series $5 + 7 + 13 + 31 + 85 + \\cdots$, the differences $2, 6, 18, 54, \\ldots$ form a GP with ratio $3$. The $n$th term is $T_n = 4 + 3^{n-1}$. Find the sum $S_n$.",
      format: "text",
      answer: "(3^n + 8n - 1)/2",
      acceptedAnswers: [
        "(3^n+8n-1)/2",
        "1/2(3^n+8n-1)",
        "(3^n - 1)/2 + 4n",
      ],
      hint: "$S_n = \\sum(4 + 3^{k-1}) = 4n + \\sum 3^{k-1}$.",
      explanation:
        "$S_n = 4n + (1 + 3 + 3^2 + \\cdots + 3^{n-1}) = 4n + \\frac{3^n - 1}{2} = \\frac{1}{2}(3^n + 8n - 1)$.",
    },
    {
      kind: "prose",
      heading: "Double sums: independent vs dependent indices",
      content:
        "A **double sum** runs one index inside another. Everything hinges on whether the two indices are **independent** or **linked**.\n\n**Independent indices.** If $i$ and $j$ each run freely from $1$ to $n$, the double sum factors into a product of single sums:\n$$\\sum_{j=1}^n \\sum_{i=1}^n T_i T_j = \\Big(\\sum_{i=1}^n T_i\\Big)\\Big(\\sum_{j=1}^n T_j\\Big).$$\nThe same works for three independent indices, giving a product of three single sums.\n\n**Dependent indices.** If the index ranges are linked, such as $1 \\le i < j \\le n$, they no longer factor. The trick is to relate the restricted sum to the full independent square. Splitting the $n\\times n$ grid of products into the diagonal ($i=j$) and two equal triangles ($i<j$ and $i>j$) gives:\n$$\\sum\\sum_{1\\le i<j\\le n} T_i T_j = \\frac{\\Big(\\sum_i T_i\\Big)\\Big(\\sum_j T_j\\Big) - \\sum_i T_i^2}{2}.$$\nEquivalently, from $\\big(\\sum T_i\\big)^2 = \\sum T_i^2 + 2\\sum\\sum_{i<j} T_i T_j$.",
    },
    {
      kind: "callout",
      variant: "tip",
      title: "The square identity for pair sums",
      content:
        "For any numbers $a_1, \\ldots, a_n$:\n$$\\Big(\\sum a_i\\Big)^2 = \\sum a_i^2 + 2\\!\\!\\sum\\sum_{1\\le i<j\\le n}\\!\\! a_i a_j.$$\nSo the sum of all products taken two at a time is $\\dfrac{(\\sum a_i)^2 - \\sum a_i^2}{2}$. This is the fastest route to any 'products taken two at a time' problem.",
    },
    {
      kind: "check",
      id: "seq-sig-c7",
      prompt: "Evaluate $\\displaystyle\\sum_{j=1}^{n}\\sum_{i=1}^{n} i\\times 3^{j}$.",
      format: "text",
      answer: "3n(3^n - 1)(n+1)/4",
      acceptedAnswers: [
        "3n(3^n-1)(n+1)/4",
        "[3n(3^n-1)(n+1)]/4",
      ],
      hint: "Indices are independent, so it factors: $\\left(\\sum_j 3^j\\right)\\left(\\sum_i i\\right)$.",
      explanation:
        "$\\left(\\sum_{j=1}^n 3^j\\right)\\left(\\sum_{i=1}^n i\\right) = \\frac{3(3^n-1)}{3-1}\\cdot\\frac{n(n+1)}{2} = \\frac{3(3^n-1)}{2}\\cdot\\frac{n(n+1)}{2} = \\frac{3n(3^n-1)(n+1)}{4}$.",
    },
    {
      kind: "check",
      id: "seq-sig-c8",
      prompt:
        "Find the sum of the products of the ten numbers $\\pm 1, \\pm 2, \\pm 3, \\pm 4, \\pm 5$ taken two at a time.",
      format: "numeric",
      answer: "-55",
      hint: "Use $(\\sum a_i)^2 = \\sum a_i^2 + 2S$. Note $\\sum a_i = 0$ here.",
      explanation:
        "The ten numbers sum to $0$, so $0 = (\\sum a_i)^2 = \\sum a_i^2 + 2S$. Here $\\sum a_i^2 = 2(1^2+2^2+3^2+4^2+5^2) = 2(55) = 110$. Thus $0 = 110 + 2S \\Rightarrow S = -55$.",
    },
    {
      kind: "check",
      id: "seq-sig-c9",
      prompt: "Find $\\displaystyle\\sum\\sum_{1\\le i<j\\le n} 1$ (the number of pairs $i<j$).",
      format: "text",
      answer: "n(n-1)/2",
      acceptedAnswers: ["n(n-1)/2", "[n(n-1)]/2", "nC2", "C(n,2)"],
      hint: "$= \\frac{\\left(\\sum_i 1\\right)\\left(\\sum_j 1\\right) - \\sum_i 1}{2}$.",
      explanation:
        "$\\frac{n\\cdot n - n}{2} = \\frac{n^2 - n}{2} = \\frac{n(n-1)}{2}$ — exactly the number of ways to choose $2$ indices from $n$.",
    },
    {
      // PRESERVED
      kind: "check",
      id: "seq-c39",
      prompt: "Find $\\sum_{k=1}^n (2k-1)^2$ in terms of $n$.",
      format: "text",
      answer: "n(2n-1)(2n+1)/3",
      hint: "Expand: $(2k-1)^2 = 4k^2 - 4k + 1$. Sum each part.",
      explanation:
        "$\\sum(4k^2-4k+1) = 4 \\cdot \\frac{n(n+1)(2n+1)}{6} - 4 \\cdot \\frac{n(n+1)}{2} + n = \\frac{n(2n-1)(2n+1)}{3}$.",
    },
    {
      // PRESERVED
      kind: "check",
      id: "seq-c40",
      prompt: "Find: $1 \\cdot 2 + 2 \\cdot 3 + 3 \\cdot 4 + \\cdots + n(n+1)$.",
      format: "text",
      answer: "n(n+1)(n+2)/3",
      hint: "$\\sum k(k+1) = \\sum k^2 + \\sum k$.",
      explanation:
        "$\\sum k^2 + \\sum k = \\frac{n(n+1)(2n+1)}{6} + \\frac{n(n+1)}{2} = \\frac{n(n+1)}{6}(2n+1+3) = \\frac{n(n+1)(n+2)}{3}$.",
    },
    {
      // PRESERVED
      kind: "check",
      id: "seq-c41",
      prompt: "Evaluate: $\\sum_{k=1}^{100} k(k+1)(k+2)$.",
      format: "numeric",
      answer: "26527650",
      hint: "$k(k+1)(k+2) = \\frac{1}{4}[k(k+1)(k+2)(k+3) - (k-1)k(k+1)(k+2)]$. Telescope!",
      explanation:
        "By telescoping: sum $= \\frac{1}{4}[100 \\cdot 101 \\cdot 102 \\cdot 103 - 0] = \\frac{100 \\cdot 101 \\cdot 102 \\cdot 103}{4} = 25 \\times 101 \\times 102 \\times 103 = 26527650$.",
    },
  ],
  workedExamples: [
    {
      kind: "example",
      title: "Product of two APs (Illustration 5.83)",
      statement:
        "Find the sum $2\\times5 + 5\\times9 + 8\\times13 + 11\\times17 + \\cdots$ to $n$ terms.",
      approach:
        "Each term is (first factor)$\\times$(second factor). Both factor sequences are APs — find each $r$th term, multiply, expand into powers of $r$, then apply linearity.",
      solution:
        "First factors $2, 5, 8, 11, \\ldots$ have $r$th term $3r-1$; second factors $5, 9, 13, 17, \\ldots$ have $r$th term $4r+1$. So $$T_r = (3r-1)(4r+1) = 12r^2 - r - 1.$$ Then $$S = \\sum_{r=1}^n(12r^2 - r - 1) = 12\\cdot\\frac{n(n+1)(2n+1)}{6} - \\frac{n(n+1)}{2} - n = \\frac{n}{2}\\big(8n^2 + 11n + 1\\big).$$",
    },
    {
      kind: "example",
      title: "A symmetric product series (Illustration 5.84)",
      statement:
        "Find the sum $1\\times n + 2(n-1) + 3(n-2) + \\cdots + (n-1)\\times2 + n\\times1$.",
      approach:
        "Write the $r$th term as $r$ times its partner. The partner of $r$ is $n-(r-1) = (n+1)-r$.",
      solution:
        "$$T_r = r\\big[(n+1)-r\\big] = (n+1)r - r^2.$$ So $$\\sum_{r=1}^n T_r = (n+1)\\sum_{r=1}^n r - \\sum_{r=1}^n r^2 = (n+1)\\frac{n(n+1)}{2} - \\frac{n(n+1)(2n+1)}{6} = \\frac{n(n+1)(n+2)}{6}.$$",
    },
    {
      kind: "example",
      title: "Alternating cubes for odd $n$ (Illustration 5.85)",
      statement:
        "For any odd integer $n \\ge 1$, find $n^3 - (n-1)^3 + (n-2)^3 - \\cdots + (-1)^{n-1}\\,1^3$.",
      approach:
        "Since $n$ is odd, every odd base carries a $+$ sign and every even base a $-$ sign. Write the whole thing as (sum of all cubes) minus (twice the even cubes).",
      solution:
        "$$S = \\big[n^3 + (n-1)^3 + \\cdots + 1^3\\big] - 2\\big[(n-1)^3 + (n-3)^3 + \\cdots + 2^3\\big].$$ The first bracket is $\\frac{n^2(n+1)^2}{4}$. In the second bracket, factor $2^3$ from each even cube: $(2m)^3 = 8m^3$ with $m$ running to $\\frac{n-1}{2}$, so it equals $2\\cdot8\\Big[\\frac12\\cdot\\frac{n-1}{2}\\big(\\frac{n-1}{2}+1\\big)\\Big]^2 = \\frac{(n-1)^2(n+1)^2}{4}$. Hence $$S = \\frac{(n+1)^2}{4}\\big[n^2 - (n-1)^2\\big] = \\frac{(n+1)^2(2n-1)}{4}.$$",
    },
    {
      kind: "example",
      title: "Cubes over odd sums (Illustration 5.86)",
      statement:
        "Find $\\dfrac{1^3}{1} + \\dfrac{1^3+2^3}{1+3} + \\dfrac{1^3+2^3+3^3}{1+3+5} + \\cdots$ to $n$ terms.",
      approach:
        "Simplify the general term using $\\sum r^3 = \\big[\\frac{r(r+1)}{2}\\big]^2$ (numerator) and the sum of the first $r$ odd numbers $= r^2$ (denominator).",
      solution:
        "$$T_r = \\frac{\\left[\\frac{r(r+1)}{2}\\right]^2}{r^2} = \\frac{(r+1)^2}{4}.$$ So $$\\text{Sum} = \\frac14\\sum_{r=1}^n (r+1)^2 = \\frac14\\big[2^2 + 3^2 + \\cdots + (n+1)^2\\big] = \\frac14\\left[\\frac{(n+1)(n+2)(2n+3)}{6} - 1\\right] = \\frac{n(2n^2 + 9n + 13)}{24}.$$",
    },
    {
      kind: "example",
      title: "Recovering $T_r$ from $S_n$ (Illustration 5.88)",
      statement:
        "If $\\sum_{r=1}^n T_r = n(2n^2 + 9n + 13)$, find $\\sum_{r=1}^n \\sqrt{T_r}$.",
      approach:
        "Recover the general term with $T_r = S_r - S_{r-1}$, take the square root, then sum.",
      solution:
        "$$T_r = r(2r^2+9r+13) - (r-1)\\big[2(r-1)^2 + 9(r-1) + 13\\big] = 6r^2 + 12r + 6 = 6(r+1)^2.$$ Then $\\sqrt{T_r} = \\sqrt6\\,(r+1)$, so $$\\sum_{r=1}^n \\sqrt{T_r} = \\sqrt6\\sum_{r=1}^n(r+1) = \\sqrt6\\left(\\frac{n^2+3n}{2}\\right) = \\sqrt{\\tfrac32}\\,(n^2+3n).$$",
    },
    {
      kind: "example",
      title: "Differences form an AP (Illustration 5.89)",
      statement: "Find the sum to $n$ terms of $3 + 15 + 35 + 63 + \\cdots$.",
      approach:
        "The differences $12, 20, 28, \\ldots$ are in AP, so $T_n$ is a quadratic. Shift-and-subtract gives $T_n$; then sum with standard formulas.",
      solution:
        "Subtracting the shifted series from the original: $$T_n = 3 + \\big[12 + 20 + 28 + \\cdots \\text{ to }(n-1)\\text{ terms}\\big] = 3 + \\frac{n-1}{2}\\big[24 + (n-2)8\\big] = 4n^2 - 1.$$ Then $$S_n = \\sum_{k=1}^n(4k^2 - 1) = 4\\cdot\\frac{n(n+1)(2n+1)}{6} - n = \\frac{n}{3}(4n^2 + 6n - 1).$$",
      alternative:
        "Since the differences are in AP, assume $T_n = an^2 + bn + c$. From $T_1 = 3, T_2 = 15, T_3 = 35$ solve to get $a = 4, b = 0, c = -1$, so $T_n = 4n^2 - 1$ and $S_n = \\frac{n}{3}(4n^2 + 6n - 1)$.",
    },
    {
      kind: "example",
      title: "Differences form a GP (Illustration 5.90)",
      statement: "Find the sum to $n$ terms of $5 + 7 + 13 + 31 + 85 + \\cdots$.",
      approach:
        "The differences $2, 6, 18, 54, \\ldots$ form a GP with ratio $3$. Shift-and-subtract to get $T_n$ (a geometric part plus a constant), then sum.",
      solution:
        "Subtracting the shifted series: $0 = 5 + 2\\cdot\\frac{3^{n-1}-1}{3-1} - T_n$, so $$T_n = 5 + (3^{n-1} - 1) = 4 + 3^{n-1}.$$ Then $$S_n = \\sum_{k=1}^n(4 + 3^{k-1}) = 4n + \\frac{3^n - 1}{2} = \\frac{1}{2}(3^n + 8n - 1).$$",
      alternative:
        "Since the differences are in GP with ratio $3$, assume $T_n = a\\cdot3^n + b$. From $T_1 = 5, T_2 = 7$: $3a + b = 5$, $9a + b = 7$, giving $a = \\frac13, b = 4$, so $T_n = 3^{n-1} + 4$ and $S_n = \\frac12(3^n + 8n - 1)$.",
    },
    {
      kind: "example",
      title: "A double sum over independent indices (Illustration 5.91)",
      statement:
        "Find $\\displaystyle\\sum_{k=1}^{\\infty}\\sum_{n=1}^{\\infty}\\frac{k}{2^{n+k}}$.",
      approach:
        "Split $\\frac{1}{2^{n+k}} = \\frac{1}{2^k}\\cdot\\frac{1}{2^n}$. Since $k$ and $n$ are independent the double sum factors into a product of two single sums.",
      solution:
        "$$S = \\left(\\sum_{k=1}^{\\infty}\\frac{k}{2^k}\\right)\\left(\\sum_{n=1}^{\\infty}\\frac{1}{2^n}\\right).$$ The right factor is $\\frac{1/2}{1-1/2} = 1$, so $S = \\sum_{k=1}^{\\infty}\\frac{k}{2^k}$. To evaluate this AGP, let $S = \\frac12 + \\frac{2}{2^2} + \\frac{3}{2^3} + \\cdots$; then $\\frac{S}{2} = \\frac{1}{2^2} + \\frac{2}{2^3} + \\cdots$. Subtracting, $\\frac{S}{2} = \\frac12 + \\frac1{2^2} + \\frac1{2^3} + \\cdots = 1$, so $S = 2$.",
    },
    {
      kind: "example",
      title: "Products taken two at a time (Illustration 5.92)",
      statement:
        "Find the sum of the products of the ten numbers $\\pm1, \\pm2, \\pm3, \\pm4, \\pm5$ taken two at a time.",
      approach:
        "Use $(\\sum a_i)^2 = \\sum a_i^2 + 2S$ where $S$ is the required sum. The ten numbers add to $0$.",
      solution:
        "$(1 - 1 + 2 - 2 + \\cdots + 5 - 5)^2 = 0$, and $\\sum a_i^2 = 2(1^2+2^2+3^2+4^2+5^2) = 2(55) = 110$. So $0 = 110 + 2S$, giving $S = -55$.",
    },
    {
      kind: "example",
      title: "Counting pairs with a dependent double sum (Illustration 5.93)",
      statement: "Find $\\displaystyle\\sum\\sum_{0\\le i<j\\le n} 1$.",
      approach:
        "Relate the restricted sum (over $i<j$) to the full independent double sum by removing the diagonal and halving.",
      solution:
        "$$\\sum\\sum_{i<j} 1 = \\frac{\\Big(\\sum_i 1\\Big)\\Big(\\sum_j 1\\Big) - \\sum_{i=j} 1}{2} = \\frac{n\\cdot n - n}{2} = \\frac{n(n-1)}{2}.$$ This is just the number of ways to pick $2$ indices out of $n$.",
    },
    {
      kind: "example",
      title: "Pair-products of a GP (Illustration 5.94)",
      statement:
        "Let $a_1, a_2, \\ldots$ be a GP with common ratio $r$, and $S_k$ the sum of its first $k$ terms. Prove $S_{m-1}\\,S_m = \\frac{r+1}{r}\\sum\\sum_{1\\le i<j\\le m} a_i a_j$.",
      approach:
        "Apply the square identity to the first $m$ terms and evaluate each sum with the GP formulas.",
      solution:
        "From $(a_1 + \\cdots + a_m)^2 = \\sum a_i^2 + 2\\sum\\sum_{i<j} a_i a_j$: $$\\left[\\frac{a_1(1-r^m)}{1-r}\\right]^2 = \\frac{a_1^2(1-r^{2m})}{1-r^2} + 2\\sum\\sum_{i<j} a_i a_j.$$ Solving for the pair sum, $$2\\sum\\sum_{i<j} a_i a_j = \\frac{2r}{1+r}\\left\\{a_1\\frac{1-r^{m-1}}{1-r}\\right\\}\\left\\{\\frac{a_1(1-r^m)}{1-r}\\right\\} = \\frac{2r}{1+r}\\,S_{m-1}\\,S_m.$$ Hence $\\sum\\sum_{i<j} a_i a_j = \\frac{r}{r+1}S_{m-1}S_m$, i.e. $S_{m-1}S_m = \\frac{r+1}{r}\\sum\\sum_{i<j} a_i a_j$.",
    },
    {
      kind: "example",
      title: "Sum of a range of cubes (Exercise 5.8 Q3)",
      statement: "Find $31^3 + 32^3 + \\cdots + 50^3$.",
      approach:
        "Write it as the difference of two cube-sums using $\\sum r^3 = \\big[\\frac{n(n+1)}{2}\\big]^2$.",
      solution:
        "$$S = \\left(\\frac{50\\times51}{2}\\right)^2 - \\left(\\frac{30\\times31}{2}\\right)^2 = 1275^2 - 465^2 = (1275-465)(1275+465) = 810\\times1740 = 1409400.$$",
    },
    {
      kind: "example",
      title: "Nested squares (Exercise 5.8 Q4)",
      statement:
        "Find $1^2 + (1^2+2^2) + (1^2+2^2+3^2) + \\cdots$ up to the $22$nd term.",
      approach:
        "The $n$th term is $T_n = \\sum_{k=1}^n k^2 = \\frac{n(n+1)(2n+1)}{6}$. Sum $T_n$ over $n$, then substitute $n = 22$.",
      solution:
        "$$S_n = \\sum T_n = \\frac{1}{6}\\Big[2\\sum n^3 + 3\\sum n^2 + \\sum n\\Big] = \\frac{n(n+1)}{12}(n^2 + 3n + 2) = \\frac{n(n+1)^2(n+2)}{12}.$$ For $n = 22$: $S_{22} = \\frac{22\\times23}{12}(484 + 66 + 2) = \\frac{22\\times23}{12}\\times552 = 22\\times23\\times46 = 23276.$",
    },
    {
      kind: "example",
      title: "Difference of squared blocks (Exercise 5.8 Q6)",
      statement:
        "Find $11^2 - 1^2 + 12^2 - 2^2 + 13^2 - 3^2 + \\cdots + 20^2 - 10^2$.",
      approach:
        "Group all positive squares and all negative squares: it is (sum of $1^2$ to $20^2$) minus twice (sum of $1^2$ to $10^2$).",
      solution:
        "$$S = \\sum_{k=1}^{20}k^2 - 2\\sum_{k=1}^{10}k^2 = \\frac{20\\times21\\times41}{6} - 2\\cdot\\frac{10\\times11\\times21}{6} = \\frac{20\\times21}{6}(41 - 21) = 70\\times20 = 1400.$$",
    },
    {
      kind: "example",
      title: "Pair-products from $S_n$ (Exercise 5.8 Q9)",
      statement:
        "If $S_n = 2n^2 + 3n$ for a sequence $\\langle a_n\\rangle$, find $\\sum\\sum_{1\\le i<j\\le 10} a_i a_j$.",
      approach:
        "Recover $a_n = S_n - S_{n-1}$, then use the square identity over the first $10$ terms.",
      solution:
        "$a_n = (2n^2+3n) - \\big[2(n-1)^2 + 3(n-1)\\big] = 4n + 1$, so the sequence is $5, 9, 13, \\ldots$. Then $$\\sum\\sum_{1\\le i<j\\le10} a_i a_j = \\frac{\\Big(\\sum_{i=1}^{10}a_i\\Big)^2 - \\sum_{i=1}^{10}a_i^2}{2}.$$ Here $\\sum_{i=1}^{10}a_i = \\frac{10}{2}(5 + 41) = 230$ and $\\sum_{i=1}^{10}a_i^2 = \\sum(16i^2 + 8i + 1) = 16(385) + 8(55) + 10 = 6610$. So the sum $= \\frac{230^2 - 6610}{2} = \\frac{52900 - 6610}{2} = 23145.$",
    },
  ],
  practiceProblemIds: [],
};
