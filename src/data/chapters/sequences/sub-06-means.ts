import type { SubChapter } from "@/lib/types";

export const subMeans: SubChapter = {
  id: "means-and-inequalities",
  title: "AM, GM, HM and their inequality",
  lesson: [
    {
      kind: "prose",
      heading: "6 · The three means of two positive numbers",
      content:
        "For two positive numbers $a$ and $b$ we build three different \"averages\", each capturing a different kind of balance:\n\n$$\\text{AM} = \\frac{a+b}{2}, \\quad \\text{GM} = \\sqrt{ab}, \\quad \\text{HM} = \\frac{2ab}{a+b}$$\n\nThe **arithmetic mean** sits halfway between $a$ and $b$ additively. The **geometric mean** sits halfway multiplicatively: $a, \\sqrt{ab}, b$ form a GP, so $\\frac{\\sqrt{ab}}{a} = \\frac{b}{\\sqrt{ab}}$. The **harmonic mean** is the reciprocal of the average of the reciprocals.\n\n**Example.** The GM of $4$ and $9$ is $\\sqrt{4 \\cdot 9} = \\sqrt{36} = 6$. The GM of $4$ and $16$ is $\\sqrt{64} = 8$.",
    },
    {
      kind: "callout",
      variant: "definition",
      title: "Geometric mean, formally",
      content:
        "If $a, G, b$ are in GP then $\\frac{G}{a} = \\frac{b}{G}$, so $G^2 = ab$ and $G = \\sqrt{ab}$. We call $G$ the **geometric mean** of $a$ and $b$. Equivalently: the GM of two numbers is the positive square root of their product, and $a, \\sqrt{ab}, b$ is always a GP.",
    },
    {
      kind: "prose",
      heading: "Inserting n geometric means between a and b",
      content:
        "Suppose we want $n$ numbers $G_1, G_2, \\ldots, G_n$ so that $a, G_1, G_2, \\ldots, G_n, b$ is a GP. That is a GP with $n+2$ terms, so $b$ is the $(n+2)$th term:\n\n$$b = a r^{\\,n+1} \\;\\Rightarrow\\; r^{\\,n+1} = \\frac{b}{a} \\;\\Rightarrow\\; r = \\left(\\frac{b}{a}\\right)^{\\frac{1}{n+1}}$$\n\nThen $G_k = a r^{k} = a\\left(\\dfrac{b}{a}\\right)^{\\frac{k}{n+1}}$ for $k = 1, 2, \\ldots, n$.\n\n**Product of the $n$ inserted GMs.** Multiplying them:\n$$G_1 G_2 \\cdots G_n = a^n\\, r^{1+2+\\cdots+n} = a^n\\, r^{\\frac{n(n+1)}{2}} = (ab)^{n/2} = G^n,$$\nwhere $G = \\sqrt{ab}$. So the product of $n$ GMs inserted between two numbers equals the $n$th power of the single GM of those numbers.",
    },
    {
      kind: "callout",
      variant: "tip",
      title: "The GM-insertion shortcut",
      content:
        "Never solve for each $G_k$ separately when you only need their product: $G_1 G_2 \\cdots G_n = (\\sqrt{ab})^n$. For instance, the product of any three GMs inserted between $4$ and $\\frac{1}{4}$ is $(\\sqrt{4 \\cdot \\tfrac14})^3 = 1^3 = 1$ — no matter what the individual means are.",
    },
    {
      kind: "example",
      title: "Insert four GMs between 2 and 486",
      statement: "Find four geometric means $g_1, g_2, g_3, g_4$ so that $2, g_1, g_2, g_3, g_4, 486$ is a GP.",
      approach: "Six terms means $486 = 2 r^5$. Solve for $r$, then multiply out.",
      solution:
        "$486 = 2 r^5 \\Rightarrow r^5 = 243 = 3^5 \\Rightarrow r = 3$.\n\nSo $g_1 = 2 \\cdot 3 = 6$, $g_2 = 2 \\cdot 3^2 = 18$, $g_3 = 2 \\cdot 3^3 = 54$, $g_4 = 2 \\cdot 3^4 = 162$.\n\nThe GP is $2, 6, 18, 54, 162, 486$.",
    },
    {
      kind: "example",
      title: "An identity using the GM",
      statement:
        "If $G$ is the geometric mean of $x$ and $y$, prove that $\\dfrac{1}{G^2 - x^2} + \\dfrac{1}{G^2 - y^2} = \\dfrac{1}{G^2}$.",
      approach: "Replace $G^2$ by $xy$ everywhere, then combine the two fractions.",
      solution:
        "Since $G = \\sqrt{xy}$ we have $G^2 = xy$. Then\n$$\\frac{1}{G^2 - x^2} + \\frac{1}{G^2 - y^2} = \\frac{1}{xy - x^2} + \\frac{1}{xy - y^2} = \\frac{1}{x(y-x)} + \\frac{1}{y(x-y)}.$$\nFactor out $\\frac{1}{x-y}$: $= \\frac{1}{x-y}\\left(-\\frac{1}{x} + \\frac{1}{y}\\right) = \\frac{1}{x-y}\\cdot\\frac{x-y}{xy} = \\frac{1}{xy} = \\frac{1}{G^2}.$",
    },
    {
      kind: "prose",
      heading: "Relation between AM and GM",
      content:
        "Take two positive numbers $a$ and $b$ with $A = \\frac{a+b}{2}$ and $G = \\sqrt{ab}$. Because $a$ and $b$ are the roots of $x^2 - (a+b)x + ab = 0$, we can rewrite this as\n$$x^2 - 2Ax + G^2 = 0,$$\nwhose roots are $A \\pm \\sqrt{A^2 - G^2}$. Therefore\n$$a = A + \\sqrt{A^2 - G^2}, \\qquad b = A - \\sqrt{A^2 - G^2}.$$\nThis is a powerful reconstruction tool: given only $A$ and $G$, you can recover the two original numbers.\n\n**Why AM $\\geq$ GM.** Directly,\n$$A - G = \\frac{a+b}{2} - \\sqrt{ab} = \\frac{(\\sqrt{a} - \\sqrt{b})^2}{2} \\geq 0,$$\nso $A \\geq G$, with equality exactly when $\\sqrt{a} = \\sqrt{b}$, i.e. $a = b$.",
    },
    {
      kind: "example",
      title: "Two numbers from their A/G ratio",
      statement:
        "If the AM and GM between two numbers are in the ratio $m : n$, prove the numbers are in the ratio $\\left(m + \\sqrt{m^2 - n^2}\\right) : \\left(m - \\sqrt{m^2 - n^2}\\right)$.",
      approach: "Use $a = A + \\sqrt{A^2 - G^2}$ and $b = A - \\sqrt{A^2 - G^2}$, then write $A = m\\lambda,\\ G = n\\lambda$.",
      solution:
        "With $a > b$, $a = A + \\sqrt{A^2 - G^2}$ and $b = A - \\sqrt{A^2 - G^2}$. Since $\\frac{A}{G} = \\frac{m}{n}$, put $A = m\\lambda$ and $G = n\\lambda$. Then\n$$\\frac{a}{b} = \\frac{A + \\sqrt{A^2 - G^2}}{A - \\sqrt{A^2 - G^2}} = \\frac{m\\lambda + \\sqrt{m^2\\lambda^2 - n^2\\lambda^2}}{m\\lambda - \\sqrt{m^2\\lambda^2 - n^2\\lambda^2}} = \\frac{m + \\sqrt{m^2 - n^2}}{m - \\sqrt{m^2 - n^2}}.$$",
    },
    {
      kind: "example",
      title: "Two GMs and an AM condition",
      statement:
        "If $a$ is the AM of $b$ and $c$, and $G_1, G_2$ are the two geometric means between $b$ and $c$, prove that $G_1^3 + G_2^3 = 2abc$.",
      approach: "AM gives $b + c = 2a$. Two GMs between $b$ and $c$ make a 4-term GP with $r = (c/b)^{1/3}$.",
      solution:
        "Since $a = \\frac{b+c}{2}$ we have $b + c = 2a$.\n\n$b, G_1, G_2, c$ is a GP, so $r = (c/b)^{1/3}$, giving $G_1 = b(c/b)^{1/3}$ and $G_2 = b(c/b)^{2/3}$. Then\n$$G_1^3 = b^3 \\cdot \\frac{c}{b} = b^2 c, \\qquad G_2^3 = b^3 \\cdot \\frac{c^2}{b^2} = b c^2.$$\nHence $G_1^3 + G_2^3 = b^2 c + b c^2 = bc(b+c) = bc(2a) = 2abc.$",
    },
    {
      kind: "prose",
      heading: "The full chain: AM ≥ GM ≥ HM",
      content:
        "Bringing in the harmonic mean $H = \\frac{2ab}{a+b}$ for two positive numbers gives the complete inequality:\n$$\\text{AM} \\geq \\text{GM} \\geq \\text{HM}, \\qquad \\text{equality iff } a = b.$$\n\nThe missing link is $G \\geq H$:\n$$G - H = \\sqrt{ab} - \\frac{2ab}{a+b} = \\frac{\\sqrt{ab}}{a+b}\\left(a + b - 2\\sqrt{ab}\\right) = \\frac{\\sqrt{ab}}{a+b}\\left(\\sqrt{a} - \\sqrt{b}\\right)^2 \\geq 0.$$\nCombined with $A \\geq G$ from before, we get $A \\geq G \\geq H$, and all three are equal precisely when $a = b$.",
    },
    {
      kind: "callout",
      variant: "definition",
      title: "AM · HM = GM² (the three means form a GP)",
      content:
        "$$A \\cdot H = \\frac{a+b}{2} \\cdot \\frac{2ab}{a+b} = ab = (\\sqrt{ab})^2 = G^2.$$\nSo $\\text{AM} \\times \\text{HM} = \\text{GM}^2$, which means $A, G, H$ are themselves in GP. This is the fastest way to find any one mean from the other two: e.g. $G = \\sqrt{A \\cdot H}$.",
    },
    {
      kind: "example",
      title: "GM from AM and HM",
      statement: "The AM and HM between two numbers are $27$ and $12$. Find their GM.",
      approach: "Use $G^2 = A \\cdot H$ directly.",
      solution: "$G^2 = A \\cdot H = 27 \\times 12 = 324$, so $G = \\sqrt{324} = 18$.",
    },
    {
      kind: "example",
      title: "Recover the numbers from mean gaps",
      statement:
        "The AM of two positive numbers exceeds their GM by $2$, and the GM exceeds their HM by $\\frac{8}{5}$. Find the numbers.",
      approach: "Write $A = G + 2$ and $H = G - \\frac{8}{5}$, then use $G^2 = AH$ to solve for $G$; recover $a, b$ from $A$ and $ab = G^2$.",
      solution:
        "From $A - G = 2$ and $G - H = \\frac{8}{5}$: $A = G + 2$, $H = G - \\frac{8}{5}$. Since $G^2 = AH$,\n$$G^2 = (G+2)\\left(G - \\tfrac{8}{5}\\right) = G^2 + \\tfrac{2}{5}G - \\tfrac{16}{5} \\;\\Rightarrow\\; \\tfrac{2}{5}G = \\tfrac{16}{5} \\;\\Rightarrow\\; G = 8.$$\nThen $ab = G^2 = 64$ and $A = 10 \\Rightarrow a + b = 20$. Solving $t^2 - 20t + 64 = 0$ gives $t = 4$ or $16$. The numbers are $4$ and $16$.",
    },
    {
      kind: "callout",
      variant: "tip",
      title: "Using AM-GM to find extrema",
      content:
        "AM-GM is the workhorse for min/max problems. If a **product is fixed**, the **sum is minimised when the terms are equal**. To minimise $x + \\frac{1}{x}$ for $x > 0$: by AM-GM, $x + \\frac{1}{x} \\geq 2\\sqrt{x \\cdot \\frac{1}{x}} = 2$, with minimum $2$ at $x = 1$. More generally, if $xy = k$ (constant) with $x, y > 0$, then $x + y \\geq 2\\sqrt{k}$, equality at $x = y = \\sqrt{k}$.",
    },
    {
      kind: "prose",
      heading: "AM-GM for n numbers",
      content:
        "The inequality extends to any number of positive terms. For positive $a_1, a_2, \\ldots, a_n$:\n$$\\frac{a_1 + a_2 + \\cdots + a_n}{n} \\geq \\sqrt[n]{a_1 a_2 \\cdots a_n},$$\nwith equality if and only if $a_1 = a_2 = \\cdots = a_n$. Read one way, it bounds a sum below by a product; read the other way, it bounds a product above by a sum. This equal-terms equality condition is the single most useful fact for competition optimisation — always state *when* equality holds.",
    },
    {
      kind: "callout",
      variant: "trap",
      title: "AM-GM needs positive terms — and the right constraint",
      content:
        "Two pitfalls. **(1)** AM-GM requires **all terms positive**; if any term can be negative, the inequality can fail. **(2)** The trick only pins a minimum when the equality point lies inside your allowed region. For $x > 0$, applying AM-GM to $(x+2)(x+3) = x^2 + 5x + 6 = (x + \\tfrac52)^2 - \\tfrac14$ is useless — its true vertex is at $x = -\\frac{5}{2}$, outside $x > 0$, so on $x > 0$ the function just increases from $6$. Match the tool to the constraint before trusting it.",
    },
    {
      kind: "check",
      id: "seq-c25",
      prompt: "Find the AM, GM, and HM of $4$ and $16$.",
      format: "text",
      answer: "AM=10, GM=8, HM=32/5",
      hint: "AM $= (4+16)/2$, GM $= \\sqrt{4 \\times 16}$, HM $= 2(4)(16)/(4+16)$.",
      explanation:
        "AM $= 10$, GM $= \\sqrt{64} = 8$, HM $= 128/20 = 32/5 = 6.4$. Indeed $10 > 8 > 6.4$.",
    },
    {
      kind: "check",
      id: "seq-c26",
      prompt: "Find the minimum value of $x + \\frac{9}{x}$ for $x > 0$.",
      format: "numeric",
      answer: "6",
      hint: "AM-GM: $x + 9/x \\geq 2\\sqrt{9} = 6$.",
      explanation:
        "By AM-GM: $x + \\frac{9}{x} \\geq 2\\sqrt{x \\cdot \\frac{9}{x}} = 2 \\times 3 = 6$. Equality at $x = 3$.",
    },
    {
      kind: "check",
      id: "seq-c27",
      prompt: "If the AM of two positive numbers is $5$ and their GM is $4$, find the numbers.",
      format: "text",
      answer: "2 and 8",
      hint: "$a+b = 10, ab = 16$. Solve the quadratic $t^2 - 10t + 16 = 0$.",
      explanation: "$t^2 - 10t + 16 = 0 \\Rightarrow (t-2)(t-8) = 0$. Numbers: $2, 8$.",
    },
    {
      kind: "check",
      id: "seq-c28",
      prompt: "Verify: AM $\\times$ HM $=$ GM$^2$ for $a = 3, b = 12$.",
      format: "text",
      answer: "7.5 × 24/5 = 36 = 6²",
      hint: "AM $= 7.5$, GM $= 6$, HM $= 24/5 = 4.8$.",
      explanation:
        "AM $= 15/2$, HM $= 2(36)/15 = 24/5$. AM $\\times$ HM $= (15/2)(24/5) = 36 = 6^2 =$ GM$^2$ ✓.",
    },
    {
      kind: "check",
      id: "seq-c29",
      prompt:
        "Find the minimum value of $(x+2)(x+3)$ for $x > 0$ using AM-GM (hint: not directly applicable — use calculus or completing the square instead).",
      format: "text",
      answer:
        "minimum is 1/4 at x = -5/2 (but for x>0, no minimum from AM-GM; the function is increasing)",
      hint: "For $x > 0$, the product $(x+2)(x+3)$ is always $> 6$. AM-GM isn't directly useful here. Minimum over all reals is at $x = -5/2$.",
      explanation:
        "$(x+2)(x+3) = x^2 + 5x + 6 = (x+5/2)^2 - 1/4$. Minimum $= -1/4$ at $x = -5/2$. But for $x > 0$: the function starts at $6$ (when $x=0$) and increases. So there's no AM-GM trick here — it's a trap to apply AM-GM when the constraint doesn't match.",
    },
    {
      kind: "check",
      id: "seq-m-c1",
      prompt: "Insert four geometric means between $2$ and $486$. Give the common ratio $r$ of the resulting GP.",
      format: "numeric",
      answer: "3",
      hint: "Six terms: $486 = 2 r^5$, so $r^5 = 243$.",
      explanation:
        "$486 = 2 r^5 \\Rightarrow r^5 = 243 = 3^5 \\Rightarrow r = 3$. The GMs are $6, 18, 54, 162$.",
    },
    {
      kind: "check",
      id: "seq-m-c2",
      prompt: "Find the product of the three geometric means inserted between $4$ and $\\frac{1}{4}$.",
      format: "numeric",
      answer: "1",
      hint: "Product of $n$ GMs $= (\\sqrt{ab})^n$. Here $n = 3$ and $ab = 4 \\cdot \\frac14 = 1$.",
      explanation:
        "Product $= (\\sqrt{ab})^n = (\\sqrt{4 \\cdot \\tfrac14})^3 = (\\sqrt{1})^3 = 1$.",
    },
    {
      kind: "check",
      id: "seq-m-c3",
      prompt: "Two numbers have arithmetic mean $34$ and geometric mean $16$. Find the two numbers.",
      format: "text",
      answer: "64 and 4",
      hint: "$a+b = 68$ and $ab = 256$. Use $(a-b)^2 = (a+b)^2 - 4ab$.",
      explanation:
        "$a + b = 68$, $ab = 256$. Then $(a-b)^2 = 68^2 - 4(256) = 4624 - 1024 = 3600$, so $a - b = 60$. Solving: $a = 64$, $b = 4$.",
    },
    {
      kind: "check",
      id: "seq-m-c4",
      prompt:
        "If the arithmetic mean of two positive numbers $a$ and $b$ ($a > b$) is twice their geometric mean, find the ratio $a : b$.",
      format: "text",
      answer: "(2 + √3) : (2 − √3)",
      hint: "The numbers are roots of $x^2 - 2Ax + G^2 = 0$ with $A = 2G$, so $x^2 - 4Gx + G^2 = 0$.",
      explanation:
        "With $A = 2G$, $a, b$ satisfy $x^2 - 4Gx + G^2 = 0$, giving $x = \\frac{4G \\pm \\sqrt{16G^2 - 4G^2}}{2} = (2 \\pm \\sqrt{3})G$. Hence $a : b = (2 + \\sqrt{3}) : (2 - \\sqrt{3})$.",
    },
    {
      kind: "check",
      id: "seq-m-c5",
      prompt: "The arithmetic mean and harmonic mean between two numbers are $27$ and $12$. Find their geometric mean.",
      format: "numeric",
      answer: "18",
      hint: "$A, G, H$ are in GP, so $G^2 = A \\cdot H$.",
      explanation: "$G^2 = A \\cdot H = 27 \\times 12 = 324 \\Rightarrow G = 18$.",
    },
    {
      kind: "check",
      id: "seq-m-c6",
      prompt:
        "The AM of two positive numbers exceeds their GM by $2$, and the GM exceeds their HM by $\\frac{8}{5}$. Find the two numbers.",
      format: "text",
      answer: "4 and 16",
      hint: "Set $A = G+2$, $H = G - 8/5$, then use $G^2 = AH$ to get $G$.",
      explanation:
        "$G^2 = (G+2)(G - \\tfrac85) \\Rightarrow \\tfrac25 G = \\tfrac{16}{5} \\Rightarrow G = 8$. Then $ab = 64$, $a+b = 2A = 20$, so the numbers are $4$ and $16$.",
    },
    {
      kind: "check",
      id: "seq-m-c7",
      prompt:
        "The AM of two positive numbers is $2$. If the larger number is increased by $1$, the GM of the pair equals the original AM ($2$). Find the harmonic mean of the original numbers.",
      format: "text",
      answer: "3/2",
      hint: "$a + b = 4$ and $\\sqrt{(a+1)b} = 2$, so $(a+1)b = 4$. Solve for $b$.",
      explanation:
        "$a + b = 4$ and $(a+1)b = 4$. Substituting $a = 4 - b$: $(5-b)b = 4 \\Rightarrow b^2 - 5b + 4 = 0 \\Rightarrow b = 1$ or $4$. Since $b$ is the smaller, $b = 1$, $a = 3$. Then $H = \\frac{2 \\cdot 3 \\cdot 1}{3+1} = \\frac{6}{4} = \\frac{3}{2}$.",
    },
    {
      kind: "check",
      id: "seq-m-c8",
      prompt:
        "For two positive numbers, $H = \\frac{21}{5}$ and $3A + G^2 = 36$. Find the sum of the squares of the two numbers.",
      format: "numeric",
      answer: "58",
      hint: "Use $G^2 = AH$ to turn $3A + G^2 = 36$ into an equation in $A$ alone.",
      explanation:
        "Since $G^2 = AH$, $3A + AH = 36 \\Rightarrow A(3 + \\tfrac{21}{5}) = 36 \\Rightarrow A \\cdot \\tfrac{36}{5} = 36 \\Rightarrow A = 5$, so $a + b = 10$. From $H = \\frac{2ab}{a+b} = \\frac{21}{5}$: $\\frac{2ab}{10} = \\frac{21}{5} \\Rightarrow ab = 21$. Then $a^2 + b^2 = (a+b)^2 - 2ab = 100 - 42 = 58$.",
    },
    {
      kind: "check",
      id: "seq-m-c9",
      prompt: "For positive $x$, find the minimum value of $x + y$ given that $xy = 25$.",
      format: "numeric",
      answer: "10",
      hint: "Fixed product ⇒ AM-GM: $x + y \\geq 2\\sqrt{xy}$.",
      explanation:
        "$x + y \\geq 2\\sqrt{xy} = 2\\sqrt{25} = 10$, with equality when $x = y = 5$. Minimum sum is $10$.",
    },
  ],
  workedExamples: [
    {
      kind: "example",
      title: "Three GMs between 4 and 1/4",
      statement: "Find the product of three geometric means between $4$ and $\\frac{1}{4}$.",
      approach: "Use the shortcut: product of $n$ GMs between $a$ and $b$ is $(\\sqrt{ab})^n$.",
      solution:
        "Here $n = 3$ and $ab = 4 \\cdot \\frac{1}{4} = 1$, so the product $= (\\sqrt{ab})^3 = (\\sqrt{1})^3 = 1$.",
    },
    {
      kind: "example",
      title: "Two numbers from AM and GM",
      statement: "Find two numbers whose arithmetic mean is $34$ and geometric mean is $16$.",
      approach: "AM gives the sum, GM gives the product; recover the difference from $(a-b)^2 = (a+b)^2 - 4ab$.",
      solution:
        "$\\frac{a+b}{2} = 34 \\Rightarrow a + b = 68$. $\\sqrt{ab} = 16 \\Rightarrow ab = 256$. Then $(a-b)^2 = 68^2 - 4 \\cdot 256 = 4624 - 1024 = 3600$, so $a - b = 60$. Solving $a + b = 68$, $a - b = 60$: $a = 64$, $b = 4$.",
    },
    {
      kind: "example",
      title: "Sum of squares from the three means",
      statement:
        "Two positive numbers have $H = \\frac{21}{5}$ and satisfy $3A + G^2 = 36$. Find the sum of their squares.",
      approach: "Replace $G^2$ by $AH$ to solve for $A$, then use $H = \\frac{2ab}{a+b}$ to find $ab$.",
      solution:
        "$G^2 = AH$, so $3A + AH = 36 \\Rightarrow A\\left(3 + \\frac{21}{5}\\right) = 36 \\Rightarrow A = 5$. Thus $a + b = 10$. From $\\frac{2ab}{a+b} = \\frac{21}{5}$: $ab = 21$. Then $a^2 + b^2 = 10^2 - 2 \\cdot 21 = 100 - 42 = 58$.",
    },
  ],
  practiceProblemIds: [],
};
