import type { SubChapter } from "@/lib/types";

export const subHP: SubChapter = {
  id: "harmonic-progression",
  title: "Harmonic Progression and Harmonic Mean",
  lesson: [
    {
      kind: "prose",
      heading: "7 · What is a Harmonic Progression?",
      content:
        "A sequence of **non-zero** numbers $a_1, a_2, a_3, \\ldots$ is a **harmonic progression (HP)** if the sequence of *reciprocals* $\\frac{1}{a_1}, \\frac{1}{a_2}, \\frac{1}{a_3}, \\ldots$ is an **arithmetic progression (AP)**.\n\nFor example, $\\frac{1}{a}, \\frac{1}{a+d}, \\frac{1}{a+2d}, \\ldots$ is an HP, because its reciprocals $a, a+d, a+2d, \\ldots$ form an AP.\n\n**The golden rule:** every HP problem is really an AP problem in disguise. Flip the terms upside down, work with the AP, and flip back at the end.",
    },
    {
      kind: "callout",
      variant: "definition",
      title: "HP ⇔ AP of reciprocals",
      content:
        "$a_1, a_2, a_3, \\ldots$ are in HP $\\iff$ $\\dfrac{1}{a_1}, \\dfrac{1}{a_2}, \\dfrac{1}{a_3}, \\ldots$ are in AP. No term of an HP may be zero, since $\\frac{1}{0}$ is undefined.",
    },
    {
      kind: "prose",
      heading: "The nth term — there is no shortcut",
      content:
        "There is **no direct nth-term formula** for an HP the way there is for an AP or GP. Instead, take reciprocals to get the associated AP with first term $\\frac{1}{a_1}$ and common difference $d$, find the AP's nth term, then invert:\n\n$$a_n = \\frac{1}{\\frac{1}{a_1} + (n-1)d}$$\n\nHere $d$ is the common difference of the AP of reciprocals — **not** of the HP itself.",
    },
    {
      kind: "callout",
      variant: "trap",
      title: "Do not try to average HP terms directly",
      content:
        "An HP is not an AP, so the middle term is **not** the average of its neighbours. Do not write $a_n = \\frac{1}{2}(a_{n-1}+a_{n+1})$ for an HP. Always convert to the reciprocal AP first, then use AP properties there.",
    },
    {
      kind: "prose",
      heading: "Three numbers in HP",
      content:
        "If $a, b, c$ are in HP, then $\\frac{1}{a}, \\frac{1}{b}, \\frac{1}{c}$ are in AP, so\n\n$$\\frac{1}{b} - \\frac{1}{a} = \\frac{1}{c} - \\frac{1}{b} \\Rightarrow \\frac{2}{b} = \\frac{1}{a} + \\frac{1}{c} \\Rightarrow b = \\frac{2ac}{a+c}.$$\n\nSo the middle term of three numbers in HP is exactly the **harmonic mean** of the outer two.",
    },
    {
      kind: "check",
      id: "seq-c30",
      prompt: "Find the 5th term of the HP $\\frac{1}{2}, \\frac{1}{5}, \\frac{1}{8}, \\ldots$",
      format: "text",
      answer: "1/14",
      hint: "Reciprocals: $2, 5, 8, \\ldots$ (AP with $d=3$). 5th term of AP $= 2 + 4(3) = 14$.",
      explanation: "AP: $2, 5, 8, 11, 14, \\ldots$ 5th term $= 14$. HP 5th term $= 1/14$.",
    },
    {
      kind: "check",
      id: "seq-c33",
      prompt: "If $a, b, c$ are in HP and $a = 2, c = 6$, find $b$.",
      format: "numeric",
      answer: "3",
      hint: "$b = \\frac{2ac}{a+c} = \\frac{2(2)(6)}{8}$.",
      explanation: "$b = \\frac{24}{8} = 3$.",
    },
    {
      kind: "example",
      title: "Illustration 5.64 — Largest term of an HP",
      statement:
        "The 20th term of an HP is $1$ and the 30th term is $-\\frac{1}{17}$. Find its largest term.",
      approach:
        "Write the HP as $\\frac{1}{a}, \\frac{1}{a+d}, \\ldots$ so the associated AP has $n$th term $a+(n-1)d$. Turn the two given HP terms into two linear equations in $a$ and $d$, solve, then study when the HP term is largest.",
      solution:
        "From $a_{20}=1$: $\\frac{1}{a+19d}=1 \\Rightarrow a+19d=1$. From $a_{30}=-\\frac{1}{17}$: $\\frac{1}{a+29d}=-\\frac{1}{17} \\Rightarrow a+29d=-17$.\n\nSubtracting: $10d=-18 \\Rightarrow d=-\\frac{9}{5}$, and $a = 1-19\\left(-\\frac{9}{5}\\right) = \\frac{176}{5}$.\n\nThe general term is\n$$a_n = \\frac{1}{\\frac{176}{5}+(n-1)\\left(-\\frac{9}{5}\\right)} = \\frac{5}{176-9(n-1)} = \\frac{5}{185-9n}.$$\n$a_n$ is largest when the positive denominator $185-9n$ is the **least positive integer**. Testing $n=20$ gives $185-180=5$ (smallest positive value), so the 20th term is largest, equal to $\\frac{5}{5}=1$.",
    },
    {
      kind: "check",
      id: "seq-hp-c1",
      prompt:
        "In the HP of Illustration 5.64, the associated AP has $n$th term $\\frac{176}{5} - \\frac{9}{5}(n-1)$. What is the common difference $d$ of that AP?",
      format: "text",
      answer: "-9/5",
      hint: "Use $a+19d=1$ and $a+29d=-17$; subtract.",
      explanation:
        "Subtracting the equations gives $10d = -17 - 1 = -18$, so $d = -\\frac{9}{5}$.",
    },
    {
      kind: "example",
      title: "Illustration 5.67 — mth term is n, nth term is m",
      statement:
        "The $m$th term of an HP is $n$ and the $n$th term is $m$. Prove its $r$th term is $\\frac{mn}{r}$.",
      approach:
        "Write the HP as reciprocals of an AP $a, a+d, \\ldots$. The conditions on HP terms become conditions on the AP terms $a+(m-1)d$ and $a+(n-1)d$. Solve for $a$ and $d$.",
      solution:
        "$a_m=n \\Rightarrow a+(m-1)d=\\frac{1}{n}$ and $a_n=m \\Rightarrow a+(n-1)d=\\frac{1}{m}$.\n\nSubtract: $(m-n)d = \\frac{1}{n}-\\frac{1}{m} = \\frac{m-n}{mn}$, so $d=\\frac{1}{mn}$.\n\nSubstitute into $a+(m-1)d=\\frac{1}{n}$: $a + \\frac{m-1}{mn} = \\frac{1}{n}$, i.e. $a + \\frac{1}{n} - \\frac{1}{mn} = \\frac{1}{n}$, giving $a=\\frac{1}{mn}$.\n\nThen $a_r = \\dfrac{1}{a+(r-1)d} = \\dfrac{1}{\\frac{1}{mn}+\\frac{r-1}{mn}} = \\dfrac{mn}{1+(r-1)} = \\dfrac{mn}{r}$.",
    },
    {
      kind: "check",
      id: "seq-hp-c2",
      prompt:
        "The 3rd term of an HP is $\\frac{1}{7}$ and the 7th term is $\\frac{1}{3}$ (so the $m$th term is $n$ with $m=3,n=7$ etc.). Using the result $a_r = \\frac{mn}{r}$, find the 21st term.",
      format: "text",
      answer: "1",
      hint: "Here $m=3, n=7$ (the 3rd term is $\\frac{1}{7}$, the 7th is $\\frac{1}{3}$). So $a_r = \\frac{21}{r}$.",
      explanation:
        "$a_r = \\frac{mn}{r} = \\frac{3 \\cdot 7}{r} = \\frac{21}{r}$. For $r=21$: $a_{21} = \\frac{21}{21} = 1$.",
    },
    {
      kind: "example",
      title: "Illustration 5.65 — Proving x, y, z are in HP",
      statement:
        "If $\\dfrac{a-x}{px} = \\dfrac{a-y}{qy} = \\dfrac{a-z}{rz}$ and $p, q, r$ are in AP, prove that $x, y, z$ are in HP.",
      approach:
        "Set the common ratio equal to $\\lambda$, solve each for $p, q, r$, and feed the AP condition on $p, q, r$ through the algebra until you reach an AP in $\\frac{1}{x}, \\frac{1}{y}, \\frac{1}{z}$.",
      solution:
        "Let $\\frac{a-x}{px}=\\frac{a-y}{qy}=\\frac{a-z}{rz}=\\lambda$. Then $p=\\frac{a-x}{\\lambda x}$, $q=\\frac{a-y}{\\lambda y}$, $r=\\frac{a-z}{\\lambda z}$.\n\nSince $p, q, r$ are in AP, so are $\\frac{a-x}{x}, \\frac{a-y}{y}, \\frac{a-z}{z}$ (the constant $\\frac{1}{\\lambda}$ scales an AP into an AP).\n\nThat is $\\frac{a}{x}-1, \\frac{a}{y}-1, \\frac{a}{z}-1$ are in AP $\\Rightarrow \\frac{a}{x}, \\frac{a}{y}, \\frac{a}{z}$ are in AP $\\Rightarrow \\frac{1}{x}, \\frac{1}{y}, \\frac{1}{z}$ are in AP $\\Rightarrow x, y, z$ are in HP.",
    },
    {
      kind: "example",
      title: "Illustration 5.66 — Building a new AP from an HP",
      statement:
        "If $a, b, c, d$ are in HP, prove that $\\dfrac{b+c+d}{a}, \\dfrac{c+d+a}{b}, \\dfrac{d+a+b}{c}, \\dfrac{a+b+c}{d}$ are in AP.",
      approach:
        "Since $a,b,c,d$ are in HP, $\\frac{1}{a}, \\frac{1}{b}, \\frac{1}{c}, \\frac{1}{d}$ are in AP. Multiply that AP by the constant $(a+b+c+d)$ and then subtract $1$ from each term — both operations preserve AP.",
      solution:
        "$\\frac{1}{a}, \\frac{1}{b}, \\frac{1}{c}, \\frac{1}{d}$ are in AP. Multiply each by $S=a+b+c+d$: $\\frac{S}{a}, \\frac{S}{b}, \\frac{S}{c}, \\frac{S}{d}$ are in AP.\n\nSubtract $1$ from each term (subtracting a constant keeps an AP an AP): $\\frac{S}{a}-1, \\frac{S}{b}-1, \\frac{S}{c}-1, \\frac{S}{d}-1$ are in AP. But $\\frac{S}{a}-1 = \\frac{b+c+d}{a}$, and similarly for the others. Hence $\\frac{b+c+d}{a}, \\frac{c+d+a}{b}, \\frac{d+a+b}{c}, \\frac{a+b+c}{d}$ are in AP.",
    },
    {
      kind: "example",
      title: "Illustration 5.68 — Mixing GP and logs into an HP",
      statement:
        "If $a>1, b>1, c>1$ are in GP, show that $\\dfrac{1}{1+\\log_e a}, \\dfrac{1}{1+\\log_e b}, \\dfrac{1}{1+\\log_e c}$ are in HP.",
      approach:
        "Take logs of the GP condition $b^2=ac$ to get an AP of logarithms, shift by $1$, then take reciprocals.",
      solution:
        "$a, b, c$ in GP $\\Rightarrow b^2=ac \\Rightarrow 2\\log_e b = \\log_e a + \\log_e c$, so $\\log_e a, \\log_e b, \\log_e c$ are in AP.\n\nAdding $1$ to each: $1+\\log_e a, 1+\\log_e b, 1+\\log_e c$ are in AP. Taking reciprocals of an AP gives an HP, so $\\frac{1}{1+\\log_e a}, \\frac{1}{1+\\log_e b}, \\frac{1}{1+\\log_e c}$ are in HP.",
    },
    {
      kind: "callout",
      variant: "tip",
      title: "The AP toolkit transfers to HP",
      content:
        "Any operation that turns an AP into an AP — adding a constant, multiplying by a constant — can be applied to the reciprocals of an HP. Also remember: reciprocals of an AP form an HP, and $a, b, c$ in GP $\\Rightarrow \\log a, \\log b, \\log c$ in AP. Chaining these links AP, GP and HP problems together.",
    },
    {
      kind: "example",
      title: "Illustration 5.69 — GP and HP sharing a shift x",
      statement:
        "If $a, b, c$ are in GP and $a+x, b+x, c+x$ are in HP (with $a, b, c$ distinct), find $x$.",
      approach:
        "Apply the HP middle-term condition $b+x = \\frac{2(a+x)(c+x)}{(a+x)+(c+x)}$, expand, and use $b^2=ac$ (from the GP) to simplify.",
      solution:
        "$b+x = \\dfrac{2(a+x)(c+x)}{(a+x)+(c+x)} \\Rightarrow (b+x)(a+c+2x) = 2(a+x)(c+x)$.\n\nExpanding: $x(a+c-2b) = bc+ab-2ac$. Since $a,b,c$ are in GP, $ac=b^2$, so the right side is $bc+ab-2b^2 = b(a+c-2b)$.\n\nThus $x(a+c-2b) = b(a+c-2b)$. Because $a,b,c$ are in GP and distinct, they cannot also be in AP, so $a+c-2b \\neq 0$. Dividing gives $x = b$.",
    },
    {
      kind: "example",
      title: "Illustration 5.70 — First three in GP, last three in HP",
      statement:
        "The four numbers $\\frac{1}{16}, a, b, \\frac{1}{6}$ have their first three in geometric progression and their last three in harmonic progression. Find $a$ and $b$.",
      approach:
        "GP condition on $\\frac{1}{16}, a, b$: $a^2 = \\frac{1}{16}\\,b$. HP condition on $a, b, \\frac{1}{6}$: $b = \\frac{2ac}{a+c}$ with $c=\\frac{1}{6}$. Substitute one into the other.",
      solution:
        "GP: $a^2 = \\frac{b}{16} \\Rightarrow b = 16a^2$ ... (1).\n\nHP: $b = \\dfrac{2a\\cdot \\frac{1}{6}}{a+\\frac{1}{6}} = \\dfrac{2a}{6a+1}$ ... (2).\n\nSet (1) = (2): $16a^2 = \\dfrac{2a}{6a+1}$. Since $a\\neq 0$, divide by $2a$: $8a(6a+1) = 1 \\Rightarrow 48a^2 + 8a - 1 = 0 \\Rightarrow (4a+1)(12a-1)=0$.\n\nSo $a=-\\frac{1}{4}$ or $a=\\frac{1}{12}$. From (1): if $a=-\\frac{1}{4}$, $b=16\\cdot\\frac{1}{16}=1$; if $a=\\frac{1}{12}$, $b=16\\cdot\\frac{1}{144}=\\frac{1}{9}$.\n\nHence $a=-\\frac{1}{4}, b=1$ or $a=\\frac{1}{12}, b=\\frac{1}{9}$.",
    },
    {
      kind: "check",
      id: "seq-hp-c3",
      prompt:
        "For $\\frac{1}{16}, a, b, \\frac{1}{6}$ with the first three in GP and the last three in HP, one solution has $a = \\frac{1}{12}$. Find the corresponding value of $b$.",
      format: "text",
      answer: "1/9",
      hint: "Use the GP condition $b = 16a^2$.",
      explanation:
        "From $b = 16a^2 = 16\\left(\\frac{1}{12}\\right)^2 = \\frac{16}{144} = \\frac{1}{9}$.",
    },
    {
      kind: "example",
      title: "Illustration 5.71 — AP terms in GP, indices in HP",
      statement:
        "If the $(m+1)$th, $(n+1)$th, $(r+1)$th terms of an AP are in GP, and $m, n, r$ are in HP, find $\\dfrac{d}{a}$ (ratio of common difference to first term of the AP).",
      approach:
        "Write the three AP terms as $a+md, a+nd, a+rd$, impose the GP condition (square of middle = product of outer), and combine with the HP condition $n = \\frac{2mr}{m+r}$.",
      solution:
        "GP condition: $(a+nd)^2 = (a+md)(a+rd)$. Expanding and cancelling gives $a(2n-m-r) = d(mr-n^2)$, so\n$$\\frac{d}{a} = \\frac{2n-(m+r)}{mr-n^2}. \\quad (1)$$\n$m, n, r$ in HP $\\Rightarrow n = \\dfrac{2mr}{m+r}$, i.e. $mr = \\frac{n(m+r)}{2}$ ... (2).\n\nSubstituting (2) into (1): $\\dfrac{d}{a} = \\dfrac{2n-(m+r)}{\\frac{n(m+r)}{2}-n^2} = \\dfrac{2n-(m+r)}{\\frac{n}{2}\\left[(m+r)-2n\\right]} = \\dfrac{2}{n}\\cdot\\dfrac{2n-(m+r)}{(m+r)-2n} = -\\dfrac{2}{n}.$",
    },
    {
      kind: "prose",
      heading: "Harmonic Mean of two numbers",
      content:
        "If $a, H, c$ are in HP, then $\\frac{1}{a}, \\frac{1}{H}, \\frac{1}{c}$ are in AP, so $\\frac{2}{H} = \\frac{1}{a} + \\frac{1}{c}$, giving the **harmonic mean** of $a$ and $c$:\n\n$$H = \\frac{2ac}{a+c}.$$\n\nThis is simply the reciprocal of the average of the reciprocals — the natural 'mean' for rates and speeds.",
    },
    {
      kind: "callout",
      variant: "definition",
      title: "Harmonic mean formula",
      content:
        "The harmonic mean of two positive numbers $a$ and $b$ is $H = \\dfrac{2ab}{a+b}$. Equivalently, $\\dfrac{1}{H} = \\dfrac{1}{2}\\left(\\dfrac{1}{a}+\\dfrac{1}{b}\\right)$.",
    },
    {
      kind: "check",
      id: "seq-c31",
      prompt: "Find the HM of $3$ and $6$.",
      format: "numeric",
      answer: "4",
      hint: "HM $= 2ab/(a+b) = 2(3)(6)/(3+6)$.",
      explanation: "$\\frac{2 \\times 3 \\times 6}{9} = \\frac{36}{9} = 4$.",
    },
    {
      kind: "check",
      id: "seq-c32",
      prompt:
        "If $a = 2, b = 8$, verify that AM, GM, HM are $5, 4, 16/5$ and that AM $>$ GM $>$ HM.",
      format: "text",
      answer: "AM=5, GM=4, HM=16/5=3.2; 5>4>3.2 ✓",
      hint: "Compute each directly.",
      explanation:
        "AM $= 5$, GM $= \\sqrt{16} = 4$, HM $= 2(16)/10 = 3.2$. Indeed $5 > 4 > 3.2$ ✓.",
    },
    {
      kind: "prose",
      heading: "Inserting n harmonic means",
      content:
        "To insert $n$ harmonic means $H_1, H_2, \\ldots, H_n$ between $a$ and $b$ so that $a, H_1, \\ldots, H_n, b$ is an HP, insert $n$ **arithmetic** means between $\\frac{1}{a}$ and $\\frac{1}{b}$ instead, then take reciprocals.\n\nThe reciprocal AP $\\frac{1}{a}, \\frac{1}{H_1}, \\ldots, \\frac{1}{H_n}, \\frac{1}{b}$ has $n+2$ terms, so its common difference $D$ satisfies $\\frac{1}{b} = \\frac{1}{a} + (n+1)D$, giving\n\n$$D = \\frac{a-b}{(n+1)\\,ab}.$$\n\nThen $\\frac{1}{H_k} = \\frac{1}{a} + kD$ for $k = 1, 2, \\ldots, n$, and each $H_k$ is the reciprocal.",
    },
    {
      kind: "callout",
      variant: "tip",
      title: "Insert means in the reciprocal world",
      content:
        "Never try to insert HMs directly. Flip $a$ and $b$ to $\\frac{1}{a}$ and $\\frac{1}{b}$, insert ordinary arithmetic means with $D = \\frac{a-b}{(n+1)ab}$, then flip each result back. The common difference $D$ uses $a-b$ in the numerator (not $b-a$).",
    },
    {
      kind: "example",
      title: "Illustration 5.72 — Insert four HMs",
      statement: "Insert four harmonic means between $\\frac{2}{3}$ and $\\frac{2}{13}$.",
      approach:
        "Work with the reciprocals $\\frac{3}{2}$ and $\\frac{13}{2}$. Insert four arithmetic means, so there are six AP terms; find $d$, list the AP, then invert.",
      solution:
        "The reciprocal AP runs from $\\frac{3}{2}$ to $\\frac{13}{2}$ with $4$ means inserted ($6$ terms, so $5$ gaps):\n$$d = \\frac{\\frac{13}{2}-\\frac{3}{2}}{5} = \\frac{5}{5} = 1.$$\nReciprocals of the means: $\\frac{1}{H_1}=\\frac{3}{2}+1=\\frac{5}{2}$, $\\frac{1}{H_2}=\\frac{7}{2}$, $\\frac{1}{H_3}=\\frac{9}{2}$, $\\frac{1}{H_4}=\\frac{11}{2}$.\n\nInverting: $H_1=\\frac{2}{5}, H_2=\\frac{2}{7}, H_3=\\frac{2}{9}, H_4=\\frac{2}{11}$.",
    },
    {
      kind: "check",
      id: "seq-hp-c4",
      prompt:
        "Insert two harmonic means between $3$ and $\\frac{3}{4}$. What is the first harmonic mean $H_1$? (Work with reciprocals $\\frac{1}{3}$ and $\\frac{4}{3}$.)",
      format: "text",
      answer: "3/2",
      hint: "Reciprocal AP: $\\frac{1}{3}, ?, ?, \\frac{4}{3}$ has 4 terms, so $d = \\frac{\\frac{4}{3}-\\frac{1}{3}}{3} = \\frac{1}{3}$.",
      explanation:
        "The reciprocal AP has common difference $d = \\frac{4/3 - 1/3}{3} = \\frac{1}{3}$. So $\\frac{1}{H_1} = \\frac{1}{3} + \\frac{1}{3} = \\frac{2}{3}$, giving $H_1 = \\frac{3}{2}$.",
    },
    {
      kind: "example",
      title: "Illustration 5.73 — Nine AMs and nine HMs together",
      statement:
        "Nine arithmetic means and nine harmonic means are inserted between $2$ and $3$. Prove that $A + \\frac{6}{H} = 5$, where $A$ is any AM and $H$ the corresponding HM.",
      approach:
        "Find the HM reciprocals via the AP with $D = \\frac{a-b}{(n+1)ab}$, and the AMs via $d = \\frac{b-a}{n+1}$. Then add $A_i + \\frac{6}{H_i}$ and watch the index-dependent parts cancel.",
      solution:
        "HMs: the reciprocal AP $\\frac{1}{2}, \\ldots, \\frac{1}{3}$ has $D = \\frac{2-3}{10\\cdot 2 \\cdot 3} = -\\frac{1}{60}$. So $\\frac{1}{H_i} = \\frac{1}{2} + iD = \\frac{1}{2} - \\frac{i}{60}$, hence $\\frac{6}{H_i} = 3 - \\frac{i}{10}$ ... (1).\n\nAMs: the AP $2, \\ldots, 3$ has $d = \\frac{3-2}{10} = \\frac{1}{10}$, so $A_i = 2 + \\frac{i}{10}$ ... (2).\n\nAdding (1) and (2): $A_i + \\frac{6}{H_i} = \\left(2+\\frac{i}{10}\\right) + \\left(3-\\frac{i}{10}\\right) = 5$ for every $i$.",
    },
    {
      kind: "example",
      title: "Illustration 5.74 — Linking A, G and H means",
      statement:
        "Let $a, b > 0$. If $a, A_1, A_2, b$ are in AP, $a, G_1, G_2, b$ are in GP, and $a, H_1, H_2, b$ are in HP, show that $\\dfrac{G_1 G_2}{H_1 H_2} = \\dfrac{A_1+A_2}{H_1+H_2} = \\dfrac{(2a+b)(a+2b)}{9ab}$.",
      approach:
        "Use the standard means-sum identities: the sum of the two AMs is $a+b$, the product of the two GMs is $ab$, and the sum of the reciprocals of the HMs equals the sum of the reciprocals of $a, b$. Then compute $H_1, H_2$ explicitly.",
      solution:
        "For the AP: $A_1 + A_2 = a+b$. For the GP: $G_1 G_2 = ab$. For the HP: $\\frac{1}{H_1}+\\frac{1}{H_2} = \\frac{1}{a}+\\frac{1}{b}$, so $\\frac{H_1+H_2}{H_1 H_2} = \\frac{a+b}{ab} = \\frac{A_1+A_2}{G_1 G_2}$. Rearranging gives $\\frac{G_1 G_2}{H_1 H_2} = \\frac{A_1+A_2}{H_1+H_2}$.\n\nNow compute the HMs from the reciprocal AP with common difference $\\frac{1}{3}\\left(\\frac{1}{b}-\\frac{1}{a}\\right)$: $\\frac{1}{H_1} = \\frac{1}{a}+\\frac{1}{3}\\left(\\frac{1}{b}-\\frac{1}{a}\\right) \\Rightarrow H_1 = \\frac{3ab}{2b+a}$, and $\\frac{1}{H_2} = \\frac{1}{a}+\\frac{2}{3}\\left(\\frac{1}{b}-\\frac{1}{a}\\right) \\Rightarrow H_2 = \\frac{3ab}{2a+b}$.\n\nThen $\\dfrac{A_1+A_2}{H_1+H_2} = \\dfrac{a+b}{3ab\\left(\\frac{1}{2b+a}+\\frac{1}{2a+b}\\right)} = \\dfrac{(2b+a)(2a+b)}{9ab}$, which equals $\\dfrac{(2a+b)(a+2b)}{9ab}$.",
    },
    {
      kind: "check",
      id: "seq-hp-c5",
      prompt:
        "Two harmonic means $H_1, H_2$ are inserted between $a$ and $b$ (positive). Using the formula $H_1 = \\frac{3ab}{2b+a}$, find $H_1$ when $a = 1, b = 4$.",
      format: "text",
      answer: "4/3",
      hint: "Substitute $a=1, b=4$ into $\\frac{3ab}{2b+a}$.",
      explanation:
        "$H_1 = \\frac{3(1)(4)}{2(4)+1} = \\frac{12}{9} = \\frac{4}{3}$.",
    },
    {
      kind: "check",
      id: "seq-hp-c6",
      prompt:
        "The common difference $D$ of the reciprocal AP when inserting $n$ HMs between $a$ and $b$ is $D = \\frac{a-b}{(n+1)ab}$. Compute $D$ for inserting $9$ HMs between $2$ and $3$.",
      format: "text",
      answer: "-1/60",
      hint: "Use $a=2, b=3, n=9$: $D = \\frac{2-3}{10 \\cdot 2 \\cdot 3}$.",
      explanation:
        "$D = \\frac{2-3}{(9+1)(2)(3)} = \\frac{-1}{60}$.",
    },
  ],
  workedExamples: [
    {
      kind: "example",
      title: "Speeds and the harmonic mean",
      statement:
        "A car travels from town P to town Q at $40$ km/h and returns along the same road at $60$ km/h. Find the average speed for the whole trip.",
      approach:
        "Equal distances covered at two speeds: the average speed is the harmonic mean of the two speeds, $\\frac{2ab}{a+b}$.",
      solution:
        "Average speed $= \\frac{2 \\cdot 40 \\cdot 60}{40+60} = \\frac{4800}{100} = 48$ km/h. This is the harmonic mean, and it lies below the arithmetic mean $50$ — the classic AM $>$ HM gap.",
    },
    {
      kind: "example",
      title: "Reciprocal AP shortcut for a missing HP term",
      statement:
        "If $a, b, c$ are in HP with $b = \\frac{2ac}{a+c}$, and $a = 4, b = 3$, find $c$.",
      approach:
        "Convert to the reciprocal AP: $\\frac{1}{a}, \\frac{1}{b}, \\frac{1}{c}$ are in AP, so $\\frac{2}{b} = \\frac{1}{a} + \\frac{1}{c}$.",
      solution:
        "$\\frac{2}{3} = \\frac{1}{4} + \\frac{1}{c} \\Rightarrow \\frac{1}{c} = \\frac{2}{3} - \\frac{1}{4} = \\frac{8-3}{12} = \\frac{5}{12}$, so $c = \\frac{12}{5}$.",
    },
  ],
  practiceProblemIds: [],
};
