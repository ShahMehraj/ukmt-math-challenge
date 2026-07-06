import type { SubChapter } from "@/lib/types";

export const subGP: SubChapter = {
  id: "geometric-progression",
  title: "Geometric Progression (GP)",
  lesson: [
    {
      kind: "prose",
      heading: "4 · What is a Geometric Progression?",
      content:
        "A **geometric progression (GP)** is a sequence in which the first term is non-zero and each following term is obtained by multiplying the previous one by a fixed constant. That constant is the **common ratio** $r$, found by dividing any term by the one just before it.\n\nIf the first term is $a$ and the common ratio is $r$, the GP is\n$$a, \\ ar, \\ ar^2, \\ ar^3, \\ \\ldots, \\ ar^{n-1}.$$\n\n**nth term:** $$T_n = ar^{n-1} = l \\quad (\\text{the last term}), \\qquad r = \\frac{T_n}{T_{n-1}}.$$\n\n**nth term counted from the end:** if $l$ is the last term, $$T_n' = \\frac{l}{r^{n-1}}.$$",
    },
    {
      kind: "callout",
      variant: "definition",
      title: "Common ratio",
      content:
        "In a GP the ratio of successive terms is constant: $\\frac{T_2}{T_1} = \\frac{T_3}{T_2} = \\cdots = r$. The first term must be non-zero, and every term is non-zero, so $r \\neq 0$.",
    },
    {
      kind: "prose",
      heading: "Increasing and decreasing GPs",
      content:
        "For a GP to be **monotonic** (steadily increasing or decreasing), we need $r > 0$. If $r < 0$ the terms alternate in sign, so the sequence is neither increasing nor decreasing.\n\nThe direction then depends on the signs of $a$ and $r$:\n- $a > 0,\\ r > 1$: **increasing** (e.g. $2, 4, 8, \\ldots$)\n- $a > 0,\\ 0 < r < 1$: **decreasing** (e.g. $8, 4, 2, \\ldots$)\n- $a < 0,\\ r > 1$: **decreasing** (terms grow more negative)\n- $a < 0,\\ 0 < r < 1$: **increasing** (terms shrink toward $0$ from below)",
    },
    {
      kind: "callout",
      variant: "trap",
      title: "Negative ratio ⇒ no monotonicity",
      content:
        "If $r < 0$, the terms flip sign every step (e.g. $3, -6, 12, -24, \\ldots$). Such a GP is neither increasing nor decreasing — don't assume $r > 1$ automatically means 'increasing' without checking the sign of $r$ first.",
    },
    {
      kind: "prose",
      heading: "Selecting terms symmetrically",
      content:
        "When a problem gives you the **product** of terms of a GP, choosing them symmetrically makes the algebra collapse:\n- **3 terms:** $\\dfrac{a}{r}, \\ a, \\ ar$ — their product is $a^3$.\n- **4 terms:** $\\dfrac{a}{r^3}, \\ \\dfrac{a}{r}, \\ ar, \\ ar^3$ — their product is $a^4$, and the common ratio between them is $r^2$.\n\nFor problems that don't involve the product, it is usually simpler to take the terms as $a, \\ ar, \\ ar^2, \\ldots$",
    },
    {
      kind: "callout",
      variant: "tip",
      title: "Product-of-terms shortcut",
      content:
        "With the symmetric choice, the product of $3$ terms is exactly $a^3$ and the product of $4$ terms is exactly $a^4$ — the $r$'s cancel. So the product condition instantly fixes $a$, and the sum condition then fixes $r$.",
    },
    // ── Preserved checks (verbatim from original sub4) ──
    {
      kind: "check",
      id: "seq-c15",
      prompt: "Find the 8th term of the GP $2, 6, 18, 54, \\ldots$",
      format: "numeric",
      answer: "4374",
      hint: "$a = 2, r = 3$. $a_8 = 2 \\times 3^7$.",
      explanation: "$a_8 = 2 \\times 3^7 = 2 \\times 2187 = 4374$.",
    },
    {
      kind: "check",
      id: "seq-c16",
      prompt: "Three numbers in GP have product $216$ and sum $19$. Find them.",
      format: "text",
      answer: "4, 6, 9",
      hint: "Let them be $a/r, a, ar$. Product $= a^3 = 216$, so $a = 6$.",
      explanation:
        "$a = 6$. Sum: $6/r + 6 + 6r = 19 \\Rightarrow 6/r + 6r = 13 \\Rightarrow 6r^2 - 13r + 6 = 0 \\Rightarrow r = 3/2$ or $2/3$. Terms: $4, 6, 9$.",
    },
    {
      kind: "check",
      id: "seq-c17",
      prompt:
        "If the 4th and 7th terms of a GP are $\\frac{1}{2}$ and $\\frac{1}{16}$ respectively, find $a$ and $r$.",
      format: "text",
      answer: "a=4, r=1/2",
      hint: "$ar^3 = 1/2$ and $ar^6 = 1/16$. Divide to get $r^3$.",
      explanation:
        "$r^3 = \\frac{1/16}{1/2} = \\frac{1}{8} \\Rightarrow r = 1/2$. Then $a \\times 1/8 = 1/2 \\Rightarrow a = 4$.",
    },
    {
      kind: "check",
      id: "seq-c18",
      prompt: "If $a, b, c$ are in GP, prove that $\\log a, \\log b, \\log c$ are in AP.",
      format: "text",
      answer: "Since b²=ac, 2log b = log a + log c",
      hint: "GP condition: $b^2 = ac$. Take logarithm.",
      explanation:
        "$b^2 = ac \\Rightarrow 2\\log b = \\log a + \\log c$, which means $\\log a, \\log b, \\log c$ are in AP.",
    },
    {
      kind: "check",
      id: "seq-c19",
      prompt: "Find the number of terms in the GP $3, 12, 48, \\ldots, 3072$.",
      format: "numeric",
      answer: "6",
      hint: "$ar^{n-1} = 3072$ with $a=3, r=4$. Solve $3 \\times 4^{n-1} = 3072$.",
      explanation: "$4^{n-1} = 1024 = 4^5 \\Rightarrow n-1 = 5 \\Rightarrow n = 6$.",
    },
    // ── Worked examples woven into the lesson ──
    {
      kind: "example",
      title: "Illustration 5.32 — Product from one term",
      statement:
        "The third term of a GP is $4$. Find the product of the first five terms.",
      approach:
        "Write everything with $a$ and $r$; notice the product of five symmetric-looking terms telescopes into a power of $ar^2$.",
      solution:
        "Let the first term be $a$ and common ratio $r$. The third term is $ar^2 = 4$.\n\nProduct of the first five terms $= a \\cdot ar \\cdot ar^2 \\cdot ar^3 \\cdot ar^4 = a^5 r^{10} = (ar^2)^5 = 4^5 = 1024.$\n\nThe product is $4^5 = 1024$.",
    },
    {
      kind: "example",
      title: "Illustration 5.33 — Sum of two terms fixes the ratio",
      statement:
        "The first term of a GP is $1$. The sum of the third and fifth terms is $90$. Find the common ratio.",
      approach:
        "Substitute $a = 1$, form a quadratic in $r^2$, and factorise.",
      solution:
        "With $a = 1$: $a_3 + a_5 = r^2 + r^4 = 90$, so $r^4 + r^2 - 90 = 0$.\n\nFactorising: $(r^2 + 10)(r^2 - 9) = 0$. Since $r^2 + 10 > 0$, we need $r^2 - 9 = 0$, giving $r = \\pm 3$.",
    },
    {
      kind: "example",
      title: "Illustration 5.35 — First term and number of terms",
      statement:
        "The 4th, 7th and last terms of a GP are $10$, $80$ and $2560$ respectively. Find the first term and the number of terms.",
      approach:
        "Divide $a_7$ by $a_4$ to get $r^3$, back-substitute for $a$, then solve $ar^{n-1} = 2560$ as an equation in powers of $2$.",
      solution:
        "$ar^3 = 10$ and $ar^6 = 80$. Dividing: $\\frac{ar^6}{ar^3} = \\frac{80}{10} \\Rightarrow r^3 = 8 \\Rightarrow r = 2.$\n\nThen $a \\cdot 2^3 = 10 \\Rightarrow a = \\frac{10}{8} = \\frac{5}{4}.$\n\nLast term: $ar^{n-1} = 2560 \\Rightarrow \\frac{5}{4} \\cdot 2^{n-1} = 2560 \\Rightarrow 2^{n-1} = 2560 \\cdot \\frac{4}{5} = 2048 = 2^{11}.$ Hence $n - 1 = 11 \\Rightarrow n = 12.$\n\nFirst term $a = \\frac{5}{4}$ and the GP has $n = 12$ terms.",
    },
    {
      kind: "example",
      title: "Illustration 5.34 — Ratios forcing a GP",
      statement:
        "If $\\dfrac{a+bx}{a-bx} = \\dfrac{b+cx}{b-cx} = \\dfrac{c+dx}{c-dx}$ with $x \\neq 0$, show that $a, b, c, d$ are in GP.",
      approach:
        "Set each ratio equal to $\\lambda$ and apply componendo–dividendo (subtract numerator and denominator, then add them).",
      solution:
        "Let each equal fraction be $\\lambda$. Applying componendo and dividendo to the first:\n$$\\frac{(a+bx)-(a-bx)}{(a+bx)+(a-bx)} = \\frac{\\lambda-1}{\\lambda+1} \\Rightarrow \\frac{bx}{a} = \\frac{\\lambda-1}{\\lambda+1} \\Rightarrow \\frac{b}{a} = \\frac{\\lambda-1}{x(\\lambda+1)}.$$\nThe identical treatment of the other two fractions gives $\\frac{c}{b} = \\frac{d}{c} = \\frac{\\lambda-1}{x(\\lambda+1)}$ as well. Since $\\frac{b}{a} = \\frac{c}{b} = \\frac{d}{c}$, the numbers $a, b, c, d$ are in GP.",
    },
    {
      kind: "example",
      title: "Illustration 5.36 — Sum of squares ≤ 0 forces a GP",
      statement:
        "If $a, b, c, d, p$ are distinct reals with $(a^2+b^2+c^2)p^2 - 2(ab+bc+cd)p + (b^2+c^2+d^2) \\leq 0$, prove that $a, b, c, d$ are in GP.",
      approach:
        "Recognise the expression as a sum of three perfect squares. A sum of squares can only be $\\leq 0$ if each square is exactly $0$.",
      solution:
        "The left side rearranges into $(ap-b)^2 + (bp-c)^2 + (cp-d)^2 \\leq 0.$ A sum of real squares is $\\geq 0$, so equality forces each to vanish:\n$$ap - b = 0,\\quad bp - c = 0,\\quad cp - d = 0.$$\nHence $p = \\frac{b}{a} = \\frac{c}{b} = \\frac{d}{c}$, so $a, b, c, d$ are in GP with common ratio $p$.",
    },
    {
      kind: "example",
      title: "Illustration 5.37 — Do 8, 12, 27 lie in a common GP?",
      statement:
        "Does a GP exist containing $27$, $8$ and $12$ as three of its terms? If so, how many such GPs are possible?",
      approach:
        "Take $8$ as the first term, let $12$ and $27$ be the $m$th and $n$th terms, and turn the exponent equations into a linear relation between $m$ and $n$.",
      solution:
        "Let $12 = 8r^{m-1}$ and $27 = 8r^{n-1}$. Then $r^{m-1} = \\frac{3}{2}$ and $r^{n-1} = \\frac{27}{8} = \\left(\\frac{3}{2}\\right)^3.$\n\nSo $r^{n-1} = r^{3(m-1)} \\Rightarrow n - 1 = 3(m-1) \\Rightarrow 3m = n + 2.$\n\nSetting $m = k$ gives $n = 3k - 2$; every positive integer $k$ yields valid positions. Hence infinitely many such GPs exist (with $8, 12, 27$ as non-consecutive terms).",
    },
    {
      kind: "example",
      title: "Illustration 5.38 — AP joined to a GP",
      statement:
        "A sequence has $4n+1$ terms: the first $2n+1$ form an AP with common difference $2$, and the last $2n+1$ form a GP with ratio $\\frac{1}{2}$. The middle term of the AP equals the middle term of the GP. Find the mid-term of the whole sequence.",
      approach:
        "The overall middle term is the $(2n+1)$th term. Express the AP's middle term ($T_{n+1}$) and the GP's middle term (which sits $n$ steps beyond the shared $(2n+1)$th term), set them equal, and solve for $a$.",
      solution:
        "With $d = 2$: the AP mid-term is $T_{n+1} = a + nd = a + 2n$. The whole sequence's middle term is the $(2n+1)$th term, $T_{2n+1} = a + 4n$; the GP's mid-term lies $n$ steps further with ratio $\\frac{1}{2}$, so $t_{n+1} = (a+4n)\\left(\\frac{1}{2}\\right)^n$.\n\nSetting $T_{n+1} = t_{n+1}$: $a + 2n = (a+4n)\\,2^{-n}$, i.e. $(2^n - 1)a = 4n - 2n \\cdot 2^n$, so $a = \\dfrac{4n - n \\cdot 2^{n+1}}{2^n - 1}.$\n\nThe mid-term of the sequence is\n$$a + 4n = \\frac{4n - n \\cdot 2^{n+1}}{2^n - 1} + 4n = \\frac{-n \\cdot 2^{n+1} + 2n \\cdot 2^{n+1}}{2^n - 1} = \\frac{n \\cdot 2^{n+1}}{2^n - 1}.$$",
    },
    {
      kind: "check",
      id: "seq-gp-c1",
      prompt:
        "The third term of a GP is $5$. Find the product of the first five terms.",
      format: "numeric",
      answer: "3125",
      hint: "Product of first five terms $= (ar^2)^5 = (T_3)^5$.",
      explanation:
        "Product $= a^5 r^{10} = (ar^2)^5 = 5^5 = 3125$. The product of the first five terms is always the fifth power of the middle (third) term.",
    },
    {
      kind: "check",
      id: "seq-gp-c2",
      prompt:
        "The first term of a GP is $1$ and the sum of the 3rd and 5th terms is $20$. Find the positive common ratio (leave in surd form).",
      format: "text",
      answer: "2",
      hint: "$r^2 + r^4 = 20 \\Rightarrow r^4 + r^2 - 20 = 0$. Factor as a quadratic in $r^2$.",
      explanation:
        "$r^4 + r^2 - 20 = (r^2 + 5)(r^2 - 4) = 0$. Since $r^2 + 5 > 0$, $r^2 = 4$, so the positive ratio is $r = 2$.",
    },
    {
      kind: "check",
      id: "seq-gp-c3",
      prompt:
        "In a GP the 4th term is $24$ and the 7th term is $192$. Find the common ratio $r$.",
      format: "numeric",
      answer: "2",
      hint: "$\\frac{ar^6}{ar^3} = \\frac{192}{24} = r^3$.",
      explanation: "$r^3 = \\frac{192}{24} = 8 \\Rightarrow r = 2$.",
    },
    {
      kind: "prose",
      heading: "Properties of the terms of a GP",
      content:
        "These facts are used constantly in competition proofs:\n\n1. **Geometric mean:** if $a, b, c$ are in GP then $\\frac{b}{a} = \\frac{c}{b}$, i.e. $b^2 = ac$. Here $b$ is the geometric mean of $a$ and $c$.\n2. **Scaling:** multiplying or dividing every term of a GP by a fixed non-zero number gives another GP (same $r$).\n3. **Powers:** if $a_1, a_2, \\ldots, a_n$ is a GP then $a_1^m, a_2^m, \\ldots, a_n^m$ (for rational $m$, where defined) is also a GP.\n4. **Term-by-term product/quotient:** if $\\{a_k\\}$ and $\\{b_k\\}$ are GPs then $\\{a_k b_k\\}$ and $\\{a_k/b_k\\}$ are also GPs.\n5. **Logs turn a GP into an AP:** if $a_1, a_2, a_3, \\ldots$ is a GP of positive terms, then $\\log a_1, \\log a_2, \\log a_3, \\ldots$ is an AP — and conversely.\n6. **Equally-spaced terms:** terms taken at equal gaps also form a GP. In particular $a_{n-k}, a_n, a_{n+k}$ are in GP, so $$a_n^2 = a_{n-k}\\,a_{n+k}.$$",
    },
    {
      kind: "callout",
      variant: "definition",
      title: "Geometric mean characterisation",
      content:
        "Three quantities $a, b, c$ are in GP **iff** $b^2 = ac$. This single equation is the workhorse for proving three numbers form a GP.",
    },
    {
      kind: "callout",
      variant: "tip",
      title: "Reciprocals and logs",
      content:
        "The reciprocals of a GP $a, ar, ar^2, \\ldots$ are $\\frac{1}{a}, \\frac{1}{ar}, \\frac{1}{ar^2}, \\ldots$ — again a GP, with ratio $\\frac{1}{r}$. And taking logarithms of a positive-term GP produces an AP with common difference $\\log r$. These two conversions link GP problems to simpler ones.",
    },
    {
      kind: "callout",
      variant: "trap",
      title: "Equidistant ⇒ constant product",
      content:
        "Terms equally spaced from the two ends of a GP have a constant product: $a_1 a_n = a_2 a_{n-1} = a_3 a_{n-2} = \\cdots$. Equivalently, any term is the geometric mean of two terms placed symmetrically around it: $a_n^2 = a_{n-k}\\,a_{n+k}$.",
    },
    {
      kind: "example",
      title: "Illustration 5.39 — When is a weighted quotient the GM?",
      statement:
        "For what value of $n$ is $\\dfrac{a^{n+1} + b^{n+1}}{a^n + b^n}$ the geometric mean of $a$ and $b$?",
      approach:
        "Set the expression equal to $\\sqrt{ab} = a^{1/2}b^{1/2}$, clear the denominator, and group terms to isolate a common factor $(\\sqrt{a} - \\sqrt{b})$.",
      solution:
        "Require $\\dfrac{a^{n+1} + b^{n+1}}{a^n + b^n} = a^{1/2}b^{1/2}$. Cross-multiplying:\n$$a^{n+1} + b^{n+1} = a^{n+1/2}b^{1/2} + b^{n+1/2}a^{1/2}.$$\nGrouping gives $a^{n+1/2}(\\sqrt{a} - \\sqrt{b}) = b^{n+1/2}(\\sqrt{a} - \\sqrt{b})$. For $a \\neq b$ we cancel $(\\sqrt{a} - \\sqrt{b})$ to get $a^{n+1/2} = b^{n+1/2}$, which holds for all $a, b$ only when the exponent is zero:\n$$n + \\tfrac{1}{2} = 0 \\Rightarrow n = -\\tfrac{1}{2}.$$",
    },
    {
      kind: "example",
      title: "Illustration 5.40 — Term at the midpoint of two positions",
      statement:
        "The $(p+q)$th term of a GP is $a$ and the $(p-q)$th term is $b$ (with $a, b > 0$). Find its $p$th term.",
      approach:
        "The positions $p-q,\\ p,\\ p+q$ are equally spaced, so the corresponding terms are equidistant in the GP and therefore form a GP themselves — use $T_p^2 = T_{p-q}\\,T_{p+q}$.",
      solution:
        "Since $(p-q), p, (p+q)$ are in AP, the terms $T_{p-q}, T_p, T_{p+q}$ are equidistant and hence in GP. Therefore\n$$T_p^2 = T_{p-q}\\,T_{p+q} = ab \\Rightarrow T_p = \\sqrt{ab}.$$",
    },
    {
      kind: "example",
      title: "Illustration 5.41 — Four numbers in GP from sum & product",
      statement:
        "Find four numbers in GP whose sum is $85$ and product is $4096$.",
      approach:
        "Use the symmetric four-term selection $\\frac{a}{r^3}, \\frac{a}{r}, ar, ar^3$. The product fixes $a$; substitute $t = r + \\frac{1}{r}$ to reduce the sum equation to a cubic.",
      solution:
        "Take the terms as $\\frac{a}{r^3}, \\frac{a}{r}, ar, ar^3$. Product $= a^4 = 4096 = 8^4 \\Rightarrow a = 8$.\n\nSum: $8\\left(r^3 + \\frac{1}{r^3} + r + \\frac{1}{r}\\right) = 85$. Let $t = r + \\frac{1}{r}$, so $r^3 + \\frac{1}{r^3} = t^3 - 3t$. Then $8(t^3 - 3t) + 8t = 85 \\Rightarrow 8t^3 - 16t - 85 = 0$. Putting $y = 2t$: $y^3 - 8y - 85 = 0 \\Rightarrow (y-5)(y^2 + 5y + 17) = 0$, so $y = 5$ (the quadratic factor has no real root).\n\nThus $2t = 5 \\Rightarrow 2r + \\frac{2}{r} = 5 \\Rightarrow 2r^2 - 5r + 2 = 0 \\Rightarrow (r-2)(2r-1) = 0 \\Rightarrow r = 2$ or $\\frac{1}{2}$. With $a = 8$, the four numbers are $1, 4, 16, 64$ (or in reverse, $64, 16, 4, 1$).",
    },
    {
      kind: "example",
      title: "Illustration 5.42 — Mixed AP/GP conditions",
      statement:
        "Three non-zero numbers $a, b, c$ are in AP. Increasing $a$ by $1$, or increasing $c$ by $2$, makes the numbers a GP. Find $b$.",
      approach:
        "Write the AP condition and the two GP conditions ($b^2 = $ product of the outer terms), then eliminate to find $a$, and hence $b$.",
      solution:
        "AP: $2b = a + c \\ (1)$. The two GP conditions give $b^2 = (a+1)c \\ (2)$ and $b^2 = a(c+2) \\ (3)$.\n\nEquating (2) and (3): $(a+1)c = a(c+2) \\Rightarrow ac + c = ac + 2a \\Rightarrow c = 2a.$\n\nFrom (1): $2b = a + 2a = 3a \\Rightarrow b = \\frac{3a}{2}$. Substituting into (2): $\\frac{9a^2}{4} = (a+1)\\,2a \\Rightarrow \\frac{9a}{8} = a + 1 \\Rightarrow 9a = 8a + 8 \\Rightarrow a = 8.$\n\nThen $c = 16$, and $2b = 8 + 16 = 24 \\Rightarrow b = 12.$",
    },
    {
      kind: "example",
      title: "Illustration 5.43 — Chaining AP and GP means",
      statement:
        "If $a, b, c$ are in AP, $b, c, d$ are in GP, and $\\frac{1}{c}, \\frac{1}{d}, \\frac{1}{e}$ are in AP, prove that $a, c, e$ are in GP.",
      approach:
        "Translate each condition into an equation, express $b$ and $d$ in terms of $a, c, e$, and substitute into the third condition to reach $c^2 = ae$.",
      solution:
        "The conditions give: $2b = a + c \\ (1)$; $c^2 = bd \\ (2)$; $\\frac{2}{d} = \\frac{1}{c} + \\frac{1}{e} \\ (3)$.\n\nFrom (1), $b = \\frac{a+c}{2}$. From (2), $d = \\frac{c^2}{b}$. Substituting into (3):\n$$\\frac{2b}{c^2} = \\frac{1}{c} + \\frac{1}{e} \\Rightarrow \\frac{a+c}{c^2} = \\frac{e + c}{ce} \\Rightarrow \\frac{a+c}{c} = \\frac{e+c}{e}.$$\nCross-multiplying: $ae + ce = ec + c^2 \\Rightarrow c^2 = ae.$ Hence $a, c, e$ are in GP.",
    },
    {
      kind: "check",
      id: "seq-gp-c4",
      prompt:
        "The 3rd term of a GP is $a$ and the 7th term is $b$ (both positive). What is the 5th term?",
      format: "text",
      answer: "sqrt(ab)",
      hint: "Positions $3, 5, 7$ are equally spaced, so $T_5^2 = T_3 \\cdot T_7$.",
      explanation:
        "The terms $T_3, T_5, T_7$ are equidistant, hence in GP, so $T_5^2 = T_3 T_7 = ab$, giving $T_5 = \\sqrt{ab}$ (the geometric mean).",
    },
    {
      kind: "check",
      id: "seq-gp-c5",
      prompt:
        "If $2, x, 18$ are in GP, find all possible real values of $x$.",
      format: "text",
      answer: "6 or -6",
      hint: "GP condition: $x^2 = 2 \\times 18$.",
      explanation:
        "$x^2 = 2 \\cdot 18 = 36 \\Rightarrow x = \\pm 6$. Both give a valid GP: $2, 6, 18$ (ratio $3$) and $2, -6, 18$ (ratio $-3$).",
    },
    {
      kind: "check",
      id: "seq-gp-c6",
      prompt:
        "Four numbers in GP have product $16$ and the ratio between them is $r = 2$ (terms taken as $a/r^3, a/r, ar, ar^3$). Find $a$.",
      format: "numeric",
      answer: "2",
      hint: "Product of the four symmetric terms is $a^4$.",
      explanation:
        "Product $= a^4 = 16 = 2^4 \\Rightarrow a = 2$ (taking the positive value). The four numbers are then $\\frac{2}{8}, 1, 4, 16$, i.e. $\\frac{1}{4}, 1, 4, 16$.",
    },
    {
      kind: "check",
      id: "seq-gp-c7",
      prompt:
        "A GP has $a = 3$ and $r = -2$. Is the sequence increasing, decreasing, or neither?",
      format: "text",
      answer: "neither",
      hint: "A monotonic GP requires $r > 0$.",
      explanation:
        "With $r = -2 < 0$ the terms are $3, -6, 12, -24, \\ldots$, alternating in sign. Such a GP is neither increasing nor decreasing.",
    },
    {
      kind: "check",
      id: "seq-gp-c8",
      prompt:
        "If $a, b, c, d$ are in GP, which quantities are equal by the 'equidistant terms' property: $ad$ and $bc$?",
      format: "text",
      answer: "yes, ad = bc",
      hint: "Terms equidistant from the ends have equal products.",
      explanation:
        "With common ratio $r$: $a \\cdot d = a \\cdot ar^3 = a^2 r^3$ and $b \\cdot c = ar \\cdot ar^2 = a^2 r^3$. So $ad = bc$.",
    },
  ],
  workedExamples: [
    {
      kind: "example",
      title: "Positive-term GP: logs give an AP",
      statement:
        "The positive numbers $x, y, z$ are in GP. Show that $\\log x, \\log y, \\log z$ are in AP, and use this to find $y$ if $\\log x = 1$ and $\\log z = 5$.",
      approach:
        "Use $y^2 = xz$ (GP condition) and take logarithms; then apply the AP mean.",
      solution:
        "Since $x, y, z$ are in GP, $y^2 = xz$. Taking logs: $2\\log y = \\log x + \\log z$, so $\\log x, \\log y, \\log z$ are in AP.\n\nHere $\\log y = \\frac{\\log x + \\log z}{2} = \\frac{1 + 5}{2} = 3$, so $y = 10^3 = 1000$ (if logs are base $10$).",
      alternative:
        "Directly: $y = \\sqrt{xz}$. With $\\log x = 1, \\log z = 5$ we have $x = 10, z = 10^5$, so $y = \\sqrt{10 \\cdot 10^5} = \\sqrt{10^6} = 10^3 = 1000$.",
    },
    {
      kind: "example",
      title: "Reciprocals of a GP form a GP",
      statement:
        "Show that if $2, 6, 18, 54$ is a GP, then $\\frac{1}{2}, \\frac{1}{6}, \\frac{1}{18}, \\frac{1}{54}$ is also a GP, and state its common ratio.",
      approach:
        "Compute the ratio of successive reciprocals.",
      solution:
        "The original ratio is $r = 3$. For the reciprocals, $\\frac{1/6}{1/2} = \\frac{1}{3}$, $\\frac{1/18}{1/6} = \\frac{1}{3}$, $\\frac{1/54}{1/18} = \\frac{1}{3}$. The reciprocals form a GP with common ratio $\\frac{1}{r} = \\frac{1}{3}$.",
    },
  ],
  practiceProblemIds: [],
};
