import type { SubChapter } from "@/lib/types";

export const subAP: SubChapter = {
  id: "arithmetic-progression",
  title: "Arithmetic Progression (AP)",
  lesson: [
    {
      kind: "prose",
      heading: "2 · What an arithmetic progression is",
      content:
        "An **arithmetic progression** (AP) is a sequence in which every term is obtained from the previous one by adding the same fixed number. That fixed number is the **common difference** $d = a_n - a_{n-1}$, and it can be positive, negative, or zero.\n\nIf the first term is $a$ and the common difference is $d$, the AP reads\n$$a, \\; a+d, \\; a+2d, \\; \\ldots, \\; a+(n-1)d, \\; \\ldots$$\n\n**nth term (general term):** $$a_n = a + (n-1)d = l$$ where $l$ denotes the last term when the AP is finite.\n\n**nth term counting from the end:** if $l$ is the last term, $$a'_n = l - (n-1)d.$$",
    },
    {
      kind: "callout",
      variant: "definition",
      title: "The nth term is linear in n",
      content:
        "Expand the formula: $a_n = a + (n-1)d = dn + (a-d)$. This is a **linear expression in $n$** of the form $a_n = pn + q$, where the coefficient of $n$ is exactly the common difference $d$. Conversely, whenever a term formula is linear in $n$, the sequence is an AP whose common difference is the coefficient of $n$.",
    },
    {
      kind: "example",
      title: "Illustration 5.6 — Confirming an AP and finding terms",
      statement:
        "Show that $9, 12, 15, 18, \\ldots$ is an AP. Find its 16th term and its general term.",
      approach:
        "Check that consecutive differences are equal, then apply $a_n = a + (n-1)d$.",
      solution:
        "The differences $12-9 = 15-12 = 18-15 = 3$ are all equal, so this is an AP with $a = 9$ and $d = 3$.\n\n16th term: $a_{16} = a + 15d = 9 + 15 \\times 3 = 54$.\n\nGeneral term: $a_n = 9 + (n-1)\\times 3 = 3n + 6$ (linear in $n$, as expected).",
    },
    {
      kind: "example",
      title: "Illustration 5.7 — A logarithmic AP",
      statement:
        "Show that $\\log a, \\; \\log(ab), \\; \\log(ab^2), \\; \\log(ab^3), \\ldots$ is an AP and find its nth term.",
      approach:
        "Compute a consecutive difference using $\\log X - \\log Y = \\log\\frac{X}{Y}$.",
      solution:
        "Each difference equals $\\log(ab^{k+1}) - \\log(ab^k) = \\log\\frac{ab^{k+1}}{ab^k} = \\log b$, a constant. So it is an AP with first term $\\log a$ and common difference $\\log b$.\n\nnth term: $a_n = \\log a + (n-1)\\log b = \\log a + \\log b^{n-1} = \\log(ab^{n-1})$.",
    },
    {
      kind: "prose",
      heading: "Working with term relations",
      content:
        "Many AP problems give you information about specific terms (like \"the 7th term is 32\") and ask for others. The move is always the same: write each stated term as $a + (\\text{index}-1)d$, then solve the resulting linear equations for $a$ and $d$. Subtracting two such equations kills $a$ and isolates $d$: $$a_m - a_n = (m-n)d.$$",
    },
    {
      kind: "example",
      title: "Illustration 5.8 — When a term must be zero",
      statement:
        "In an AP, five times the 5th term equals eight times the 8th term. Prove that the 13th term is $0$.",
      approach: "Write $T_5$ and $T_8$ in terms of $a$ and $d$, then simplify.",
      solution:
        "$5T_5 = 8T_8 \\Rightarrow 5(a+4d) = 8(a+7d)$.\n\nExpand: $5a + 20d = 8a + 56d \\Rightarrow 3a + 36d = 0 \\Rightarrow a + 12d = 0$.\n\nBut $a + 12d = T_{13}$, so $T_{13} = 0$.",
    },
    {
      kind: "callout",
      variant: "tip",
      title: "p-th term = q and q-th term = p",
      content:
        "A classic pattern: if the $p$th term is $q$ and the $q$th term is $p$, subtracting the two equations gives $(p-q)d = q-p$, so $d = -1$. Then the $r$th term works out to $$T_r = p + q - r.$$ Memorise this shortcut — it turns a two-equation problem into one line.",
    },
    {
      kind: "example",
      title: "Illustration 5.9 — The numerically smallest term",
      statement:
        "Find the term of $25, \\; 22\\frac{3}{4}, \\; 20\\frac{1}{2}, \\; 18\\frac{1}{4}, \\ldots$ that is numerically smallest.",
      approach:
        "This AP decreases, so terms fall through zero. Find where the terms turn negative; the smallest-magnitude term sits right at that crossover.",
      solution:
        "Here $a = 25$ and $d = -\\frac{9}{4}$, so $T_n = 25 + (n-1)\\left(-\\frac{9}{4}\\right) = \\frac{109}{4} - \\frac{9}{4}n$.\n\n$T_n < 0$ requires $\\frac{109}{4} - \\frac{9}{4}n < 0$, i.e. $n > \\frac{109}{9} = 12\\frac{1}{9}$.\n\nSo $T_{13}$ is the first negative term and $T_{12}$ the last positive one. Computing: $T_{12} = \\frac{109 - 108}{4} = \\frac{1}{4}$ and $T_{13} = \\frac{109 - 117}{4} = -2$. Since $\\left|\\frac{1}{4}\\right| < |-2|$, the numerically smallest term is $T_{12} = \\frac{1}{4}$.",
    },
    {
      kind: "example",
      title: "Illustration 5.10 — p-th, q-th, r-th term identities",
      statement:
        "If the $p$th, $q$th, and $r$th terms of an AP are $a$, $b$, $c$, prove that (i) $a(q-r) + b(r-p) + c(p-q) = 0$ and (ii) $(a-b)r + (b-c)p + (c-a)q = 0$.",
      approach:
        "Write $a, b, c$ with first term $A$ and common difference $D$; the $A$-parts and $D$-parts collapse to zero by symmetry.",
      solution:
        "Let $a = A + (p-1)D$, $b = A + (q-1)D$, $c = A + (r-1)D$.\n\n(i) Grouping the $A$ terms gives $A[(q-r)+(r-p)+(p-q)] = A\\cdot 0 = 0$. The $D$ terms give $D[p(q-r)+q(r-p)+r(p-q)] = D\\cdot 0 = 0$ (the cyclic sum vanishes). Hence the total is $0$.\n\n(ii) Subtracting pairs of the equations: $a-b = (p-q)D$, $b-c = (q-r)D$, $c-a = (r-p)D$. Then\n$$(a-b)r + (b-c)p + (c-a)q = D[(p-q)r + (q-r)p + (r-p)q] = D\\cdot 0 = 0.$$",
    },
    {
      kind: "check",
      id: "seq-c5",
      prompt: "Find the 20th term of the AP $3, 7, 11, 15, \\ldots$",
      format: "numeric",
      answer: "79",
      hint: "$a = 3, d = 4$. Use $a_n = a + (n-1)d$.",
      explanation: "$a_{20} = 3 + 19 \\times 4 = 3 + 76 = 79$.",
    },
    {
      kind: "check",
      id: "seq-c6",
      prompt: "The 7th term of an AP is $32$ and the 13th term is $62$. Find the AP.",
      format: "text",
      answer: "2, 7, 12, ...",
      hint: "$a + 6d = 32$ and $a + 12d = 62$. Subtract to find $d$.",
      explanation:
        "$6d = 30 \\Rightarrow d = 5$. Then $a = 32 - 30 = 2$. AP: $2, 7, 12, 17, \\ldots$",
    },
    {
      kind: "check",
      id: "seq-ap-c1",
      prompt:
        "In an AP the $p$th term is $q$ and the $q$th term is $p$ (with $p \\neq q$). Find the $r$th term.",
      format: "text",
      answer: "p + q - r",
      acceptedAnswers: ["p+q-r", "p + q - r"],
      hint: "Subtract the two equations to get $d$, then read off the $r$th term.",
      explanation:
        "$a+(p-1)d = q$ and $a+(q-1)d = p$. Subtracting: $(p-q)d = q-p$, so $d = -1$. Then $T_r = q + (r-p)d = q - (r-p) = p + q - r$.",
    },
    {
      kind: "check",
      id: "seq-ap-c2",
      prompt:
        "For the AP $25, \\; 22\\frac{3}{4}, \\; 20\\frac{1}{2}, \\ldots$ (with $d = -\\frac{9}{4}$), which term is the first negative one?",
      format: "text",
      answer: "the 13th term",
      acceptedAnswers: ["13", "13th", "T_13", "13th term"],
      hint: "Solve $\\frac{109}{4} - \\frac{9}{4}n < 0$ for the smallest integer $n$.",
      explanation:
        "$T_n = \\frac{109}{4} - \\frac{9}{4}n < 0 \\Rightarrow n > \\frac{109}{9} \\approx 12.1$. The first integer beyond that is $n = 13$, so $T_{13} = -2$ is the first negative term.",
    },
    {
      kind: "prose",
      heading: "Common terms of two APs",
      content:
        "When two APs share terms, those shared values themselves form an AP. Its common difference is the **LCM of the two individual common differences**, and its first term is the smallest value common to both. From there it is an ordinary AP problem — just watch the range limits imposed by both original sequences.",
    },
    {
      kind: "example",
      title: "Illustration 5.11 — Common terms and the last common term",
      statement:
        "Consider $S_1: 2, 7, 12, 17, \\ldots$ (500 terms) and $S_2: 1, 8, 15, 22, \\ldots$ (300 terms). Find the number of common terms and the last common term.",
      approach:
        "Find each sequence's range, then build the AP of common terms with difference $\\text{lcm}$.",
      solution:
        "Last terms: $S_1$ ends at $T_{500} = 2 + 499\\times 5 = 2497$; $S_2$ ends at $T_{300} = 1 + 299\\times 7 = 2094$. Any common term cannot exceed $2094$.\n\nThe common differences are $5$ and $7$, so common terms step by $\\operatorname{lcm}(5,7) = 35$. The first common term is $22$, giving the AP $22, 57, 92, \\ldots$\n\nSolving $22 + (n-1)35 \\le 2094$ gives $n \\le 60.2$, so $n = 60$ common terms. The last common term is $22 + 59\\times 35 = 2087$.",
    },
    {
      kind: "check",
      id: "seq-ap-c3",
      prompt:
        "How many terms are common to $17, 21, 25, \\ldots, 417$ and $16, 21, 26, \\ldots, 466$?",
      format: "numeric",
      answer: "20",
      hint: "Common differences are $4$ and $5$; step by their LCM starting from the first shared value.",
      explanation:
        "$\\operatorname{lcm}(4,5) = 20$ and the first common term is $21$, so the common terms are $21, 41, 61, \\ldots, 401$ (bounded by $417$). That AP has $\\frac{401-21}{20} + 1 = 20$ terms.",
    },
    {
      kind: "prose",
      heading: "AP terms and irrationality (a proof pattern)",
      content:
        "Because differences of AP terms are integer multiples of $d$, ratios of such differences are always rational. This gives a slick way to prove that certain irrational numbers cannot all belong to one AP.",
    },
    {
      kind: "example",
      title: "Illustration 5.13 — Why √2, √3, √5 cannot share one AP",
      statement:
        "If $p, q, r$ ($p \\neq q$) are terms of an AP with non-zero common difference, prove $\\frac{r-q}{q-p}$ is rational, and deduce that $\\sqrt{2}, \\sqrt{3}, \\sqrt{5}$ cannot all be terms of a single AP.",
      approach:
        "Write each as $a + (\\text{index}-1)d$; the $d$ cancels in the ratio, leaving integers.",
      solution:
        "Let $p, q, r$ be the $l$th, $m$th, $n$th terms. Then $r - q = (n-m)d$ and $q - p = (m-l)d$, so $\\frac{r-q}{q-p} = \\frac{n-m}{m-l}$, a ratio of integers — hence rational.\n\nIf $\\sqrt{2}, \\sqrt{3}, \\sqrt{5}$ all lay in one AP, then $\\frac{\\sqrt{5}-\\sqrt{3}}{\\sqrt{3}-\\sqrt{2}}$ would be rational. But this quantity is irrational, a contradiction. Therefore no single AP (with non-zero $d$) contains all three.",
    },
    {
      kind: "example",
      title: "Illustration 5.12 — A telescoping identity in an AP",
      statement:
        "If $a_1, a_2, \\ldots, a_n$ are in AP with all $a_i > 0$, prove $$\\frac{1}{\\sqrt{a_1}+\\sqrt{a_2}} + \\frac{1}{\\sqrt{a_2}+\\sqrt{a_3}} + \\cdots + \\frac{1}{\\sqrt{a_{n-1}}+\\sqrt{a_n}} = \\frac{n-1}{\\sqrt{a_1}+\\sqrt{a_n}}.$$",
      approach:
        "Rationalise each fraction; the denominators become the constant difference and the sum telescopes.",
      solution:
        "Each consecutive difference is $-d$: $a_k - a_{k+1} = -d$. Rationalising, $\\frac{1}{\\sqrt{a_k}+\\sqrt{a_{k+1}}} = \\frac{\\sqrt{a_k}-\\sqrt{a_{k+1}}}{a_k - a_{k+1}} = \\frac{\\sqrt{a_k}-\\sqrt{a_{k+1}}}{-d}$.\n\nSumming telescopes to $\\frac{\\sqrt{a_1}-\\sqrt{a_n}}{-d} = \\frac{\\sqrt{a_n}-\\sqrt{a_1}}{d}$. Multiply top and bottom by $\\sqrt{a_n}+\\sqrt{a_1}$: this equals $\\frac{a_n - a_1}{d(\\sqrt{a_n}+\\sqrt{a_1})} = \\frac{(n-1)d}{d(\\sqrt{a_n}+\\sqrt{a_1})} = \\frac{n-1}{\\sqrt{a_1}+\\sqrt{a_n}}$.",
    },
    {
      kind: "prose",
      heading: "Properties of the terms of an AP",
      content:
        "These structural facts turn many \"prove they are in AP\" problems into two or three lines:\n\n- **Three-term test:** $a, b, c$ are in AP $\\iff 2b = a + c \\iff b = \\frac{a+c}{2}$. Here $b$ is the **arithmetic mean** of $a$ and $c$.\n- Adding or subtracting a **fixed number** to every term gives another AP with the *same* $d$.\n- Multiplying (or dividing by a non-zero) **fixed constant** gives another AP.\n- Adding or subtracting two APs term-by-term gives another AP.\n- Terms picked at **equal spacing** ($a_1, a_3, a_5, \\ldots$ etc.) are themselves in AP.\n- For any spacing $k$: $a_{n-k}, a_n, a_{n+k}$ are in AP, so $$a_n = \\frac{a_{n-k} + a_{n+k}}{2}.$$",
    },
    {
      kind: "callout",
      variant: "tip",
      title: "Symmetric selection of AP terms",
      content:
        "When a problem fixes the **sum** of consecutive AP terms, choose them symmetrically about the middle so the $d$'s cancel:\n\n- **3 terms:** $a-d, \\; a, \\; a+d$ (sum $= 3a$).\n- **4 terms:** $a-3d, \\; a-d, \\; a+d, \\; a+3d$ (sum $= 4a$, common difference $= 2d$).\n- **5 terms:** $a-2d, \\; a-d, \\; a, \\; a+d, \\; a+2d$ (sum $= 5a$).\n\nThe sum instantly gives $a$; the remaining condition (product, ratio, etc.) then gives $d$.",
    },
    {
      kind: "callout",
      variant: "trap",
      title: "Four symmetric terms step by 2d, not d",
      content:
        "In the selection $a-3d, a-d, a+d, a+3d$ the common difference of the actual AP is $2d$, not $d$. Forgetting this doubles or halves your answer. The gaps are $2d$ each: $(a-d)-(a-3d) = 2d$.",
    },
    {
      kind: "example",
      title: "Illustration 5.18 — Three numbers from sum and product",
      statement:
        "The sum of three numbers in AP is $24$ and their product is $440$. Find the numbers.",
      approach: "Take them as $a-d, a, a+d$; sum gives $a$, product gives $d$.",
      solution:
        "Sum: $(a-d) + a + (a+d) = 3a = 24 \\Rightarrow a = 8$.\n\nProduct: $(8-d)(8)(8+d) = 440 \\Rightarrow 8(64 - d^2) = 440 \\Rightarrow 64 - d^2 = 55 \\Rightarrow d^2 = 9 \\Rightarrow d = \\pm 3$.\n\nEither sign gives the same set: $5, 8, 11$.",
    },
    {
      kind: "example",
      title: "Illustration 5.19 — Splitting 32 into four AP parts",
      statement:
        "Divide $32$ into four parts in AP so that the ratio of the product of the extremes to the product of the means is $7:15$.",
      approach:
        "Use $a-3d, a-d, a+d, a+3d$; the sum gives $a$, the ratio gives $d$.",
      solution:
        "Sum: $4a = 32 \\Rightarrow a = 8$.\n\nRatio: $\\frac{(a-3d)(a+3d)}{(a-d)(a+d)} = \\frac{a^2 - 9d^2}{a^2 - d^2} = \\frac{64 - 9d^2}{64 - d^2} = \\frac{7}{15}$.\n\nCross-multiplying: $15(64 - 9d^2) = 7(64 - d^2) \\Rightarrow 960 - 135d^2 = 448 - 7d^2 \\Rightarrow 128d^2 = 512 \\Rightarrow d^2 = 4 \\Rightarrow d = \\pm 2$.\n\nThe four parts are $2, 6, 10, 14$.",
    },
    {
      kind: "example",
      title: "Illustration 5.20 — Three-digit number with AP digits",
      statement:
        "The digits of a three-digit positive integer are in AP with sum $15$. Reversing the digits gives a number $594$ less than the original. Find the number.",
      approach:
        "Let the digits be $a-d, a, a+d$; use the digit-sum and the reversal difference.",
      solution:
        "With hundreds, tens, ones digits $a+d, a, a-d$, the number is $100(a+d) + 10a + (a-d) = 111a + 99d$ and the reversed number is $111a - 99d$.\n\nDigit sum: $(a-d) + a + (a+d) = 3a = 15 \\Rightarrow a = 5$.\n\nReversal: $111a - 99d = (111a + 99d) - 594 \\Rightarrow 198d = 594 \\Rightarrow d = 3$.\n\nThe number is $111\\times 5 + 99\\times 3 = 555 + 297 = 852$.",
    },
    {
      kind: "check",
      id: "seq-c7",
      prompt: "Three numbers in AP have sum $27$ and product $648$. Find them.",
      format: "text",
      answer: "6, 9, 12",
      hint: "Let them be $a-d, a, a+d$. Sum $= 3a = 27$, so $a = 9$.",
      explanation:
        "$a = 9$. Product: $9(81 - d^2) = 648 \\Rightarrow 81 - d^2 = 72 \\Rightarrow d^2 = 9 \\Rightarrow d = 3$. Terms: $6, 9, 12$.",
    },
    {
      kind: "check",
      id: "seq-ap-c4",
      prompt:
        "Divide $28$ into four AP parts so that (first × third) : (second × fourth) $= 8:15$. Give the four parts.",
      format: "text",
      answer: "4, 6, 8, 10",
      acceptedAnswers: ["4,6,8,10", "4, 6, 8, 10"],
      hint: "Take $a-3d, a-d, a+d, a+3d$; the sum fixes $a$, the ratio fixes $d$.",
      explanation:
        "$4a = 28 \\Rightarrow a = 7$. Then $\\frac{(a-3d)(a+d)}{(a-d)(a+3d)} = \\frac{8}{15}$ leads to $3d^2 + 46d - 49 = 0$, i.e. $(d-1)(3d+49) = 0$, so $d = 1$. The parts are $4, 6, 8, 10$.",
    },
    {
      kind: "prose",
      heading: "\"Prove they are in AP\" via the properties",
      content:
        "The transform properties above (add a constant, multiply by a constant, divide term-by-term) let you convert an unfamiliar-looking triple into the plain condition $2b = a+c$. The strategy: massage each side by allowed operations until you reach a triple you already know is in AP.",
    },
    {
      kind: "example",
      title: "Illustration 5.15 — Reducing to 1/a, 1/b, 1/c",
      statement:
        "If $\\frac{b+c-a}{a}, \\; \\frac{c+a-b}{b}, \\; \\frac{a+b-c}{c}$ are in AP, prove that $\\frac{1}{a}, \\frac{1}{b}, \\frac{1}{c}$ are in AP.",
      approach: "Add the constant $2$ to each term; the numerators become $a+b+c$.",
      solution:
        "Adding $2$ to every term keeps them in AP: $\\frac{b+c-a}{a} + 2 = \\frac{a+b+c}{a}$, and similarly for the others. So $\\frac{a+b+c}{a}, \\frac{a+b+c}{b}, \\frac{a+b+c}{c}$ are in AP.\n\nDividing each by the constant $a+b+c$ preserves the AP, giving $\\frac{1}{a}, \\frac{1}{b}, \\frac{1}{c}$ in AP.",
    },
    {
      kind: "example",
      title: "Illustration 5.16 — Adding a divided AP",
      statement:
        "If $a, b, c \\in \\mathbb{R}^+$ are in AP, prove that $a + \\frac{1}{bc}, \\; b + \\frac{1}{ac}, \\; c + \\frac{1}{ab}$ are in AP.",
      approach:
        "Divide the AP $a, b, c$ by $abc$ to get another AP, then add it term-by-term to the original.",
      solution:
        "Dividing $a, b, c$ by $abc$ gives $\\frac{1}{bc}, \\frac{1}{ca}, \\frac{1}{ab}$, which is an AP. Adding this AP term-by-term to $a, b, c$ (sum of two APs is an AP) yields $a + \\frac{1}{bc}, \\; b + \\frac{1}{ca}, \\; c + \\frac{1}{ab}$ in AP.",
    },
    {
      kind: "example",
      title: "Illustration 5.17 — Three consequences of a,b,c in AP",
      statement:
        "If $a, b, c$ are in AP, prove each of the following is also in AP: (i) $a^2(b+c), b^2(c+a), c^2(a+b)$; (ii) $\\frac{1}{\\sqrt{b}+\\sqrt{c}}, \\frac{1}{\\sqrt{c}+\\sqrt{a}}, \\frac{1}{\\sqrt{a}+\\sqrt{b}}$.",
      approach:
        "In each, assume the triple is in AP (equal consecutive differences) and reduce to the given $2b = a+c$.",
      solution:
        "(i) The triple is in AP iff $b^2(c+a) - a^2(b+c) = c^2(a+b) - b^2(c+a)$. Factoring both sides gives $(b-a)(ab+bc+ca) = (c-b)(ab+bc+ca)$, i.e. $b-a = c-b$, i.e. $2b = a+c$ — which is given. Hence the triple is in AP.\n\n(ii) The triple is in AP iff $\\frac{1}{\\sqrt{c}+\\sqrt{a}} - \\frac{1}{\\sqrt{b}+\\sqrt{c}} = \\frac{1}{\\sqrt{a}+\\sqrt{b}} - \\frac{1}{\\sqrt{c}+\\sqrt{a}}$. Rationalising and simplifying reduces this to $b - a = c - b$, i.e. $2b = a+c$, which holds. Hence the triple is in AP.",
    },
    {
      kind: "check",
      id: "seq-c8",
      prompt: "How many terms of the AP $5, 9, 13, \\ldots$ are needed for the sum to exceed $1000$?",
      format: "numeric",
      answer: "22",
      hint: "$S_n = \\frac{n}{2}(2a + (n-1)d) > 1000$. Solve $\\frac{n}{2}(10 + 4(n-1)) > 1000$.",
      explanation:
        "$S_n = \\frac{n}{2}(4n + 6) = n(2n+3) > 1000$. Try $n=21$: $21 \\times 45 = 945 < 1000$. $n=22$: $22 \\times 47 = 1034 > 1000$. Answer: $22$.",
    },
    {
      kind: "check",
      id: "seq-c9",
      prompt: "If $a_5 = 19$ and $S_5 = 55$ for an AP, find $a$ and $d$.",
      format: "text",
      answer: "a=3, d=4",
      hint: "$a_5 = a+4d = 19$ and $S_5 = \\frac{5}{2}(2a+4d) = 55$.",
      explanation:
        "$S_5 = 5(a+2d) = 55 \\Rightarrow a+2d = 11$. And $a+4d = 19$. Subtract: $2d = 8 \\Rightarrow d = 4, a = 3$.",
    },
    {
      kind: "example",
      title: "Illustration 5.14 — AP of square roots, least composite value",
      statement:
        "If $\\sqrt{a-x}, \\sqrt{x}, \\sqrt{a+x}$ are in AP and all are integers, with $a, x > 0$, find the least composite value of $a$.",
      approach:
        "Use $2b = a+c$ on the three roots, square carefully, then test perfect-square values of $x$.",
      solution:
        "AP condition: $2\\sqrt{x} = \\sqrt{a-x} + \\sqrt{a+x}$. Squaring: $4x = (a-x) + (a+x) + 2\\sqrt{a^2 - x^2} = 2a + 2\\sqrt{a^2-x^2}$, so $2x - a = \\sqrt{a^2 - x^2}$. Squaring again: $4x^2 - 4ax + a^2 = a^2 - x^2 \\Rightarrow 5x^2 = 4ax \\Rightarrow a = \\frac{5x}{4}$.\n\nSince $\\sqrt{x}$ is an integer, $x$ is a perfect square. Testing: $x=1 \\Rightarrow a=\\frac{5}{4}$; $x=4 \\Rightarrow a=5$ (prime); $x=9 \\Rightarrow a=\\frac{45}{4}$; $x=16 \\Rightarrow a=20$ (composite). The least composite value is $a = 20$.",
    },
    {
      kind: "check",
      id: "seq-ap-c5",
      prompt:
        "The first four terms of an AP sum to $56$, the last four sum to $112$, and the first term is $11$. How many terms does the AP have?",
      format: "numeric",
      answer: "11",
      hint: "Sum of first four $= 44 + 6d$; sum of last four $= 44 + (4n-10)d$.",
      explanation:
        "First four: $44 + 6d = 56 \\Rightarrow d = 2$. Last four: $44 + (4n-10)d = 112 \\Rightarrow 44 + 2(4n-10) = 112 \\Rightarrow 8n = 88 \\Rightarrow n = 11$.",
    },
    {
      kind: "check",
      id: "seq-ap-c6",
      prompt:
        "If the $n$th term of an AP is $a_n = 3n + 6$, what is its common difference $d$?",
      format: "numeric",
      answer: "3",
      hint: "The nth term of an AP is linear in $n$; the coefficient of $n$ is $d$.",
      explanation:
        "$a_n = 3n + 6$ is linear in $n$, so the sequence is an AP with common difference equal to the coefficient of $n$: $d = 3$ (indeed $a_{n+1} - a_n = 3$).",
    },
    {
      kind: "check",
      id: "seq-ap-c7",
      prompt:
        "If $\\frac{a^n + b^n}{a^{n-1} + b^{n-1}}$ equals the arithmetic mean of $a$ and $b$ (with $a \\neq b$), find $n$.",
      format: "numeric",
      answer: "1",
      hint: "Set the expression equal to $\\frac{a+b}{2}$ and cross-multiply.",
      explanation:
        "$\\frac{a+b}{2} = \\frac{a^n+b^n}{a^{n-1}+b^{n-1}}$ gives $ab^{n-1} + a^{n-1}b = a^n + b^n$, i.e. $b^{n-1}(a-b) = a^{n-1}(a-b)$. Since $a \\neq b$, $\\left(\\frac{a}{b}\\right)^{n-1} = 1$, so $n - 1 = 0$, giving $n = 1$.",
    },
  ],
  workedExamples: [
    {
      kind: "example",
      title: "Finding an AP from conditions on terms",
      statement:
        "The sum of three numbers in AP is $-3$ and their product is $8$. Find the numbers.",
      approach: "Let them be $a-d, a, a+d$. Sum gives $a$, product gives $d$.",
      solution:
        "Sum: $3a = -3 \\Rightarrow a = -1$. Product: $(-1)(1-d^2) = 8 \\Rightarrow 1-d^2 = -8 \\Rightarrow d^2 = 9 \\Rightarrow d = \\pm 3$. Numbers: $-4, -1, 2$ or $2, -1, -4$.",
    },
    {
      kind: "example",
      title: "Four distinct integers in AP with a squared-sum condition",
      statement:
        "If $a, b, c, d$ are distinct integers in AP such that $d = a^2 + b^2 + c^2$, find $a + b + c + d$.",
      approach:
        "Write the terms with integer common difference $k$; the condition becomes a quadratic in $k$ whose discriminant bounds $a$ to a few integers.",
      solution:
        "Let the terms be $a, a+k, a+2k, a+3k$. The condition $a + 3k = a^2 + (a+k)^2 + (a+2k)^2$ simplifies to $5k^2 + 3(2a-1)k + 3a^2 - a = 0$. For real integer $k$, the discriminant must be non-negative, which forces $24a^2 + 16a - 9 \\le 0$, giving only $a = -1$ or $a = 0$.\n\nFor $a = 0$: $5k^2 - 3k = 0 \\Rightarrow k = \\frac{3}{5}$ (not an integer, rejected). For $a = -1$: $5k^2 - 9k + 4 = 0 \\Rightarrow k = 1$ (integer). Then the terms are $-1, 0, 1, 2$, and $a + b + c + d = 2$.",
    },
    {
      kind: "example",
      title: "Equal r-th means inserted between two pairs",
      statement:
        "$n$ arithmetic means are inserted between $x$ and $2y$, and separately between $2x$ and $y$. If the $r$th mean is equal in both cases, find $x/y$.",
      approach:
        "The $r$th mean between $A$ and $B$ is $A + r\\cdot\\frac{B-A}{n+1}$; equate the two.",
      solution:
        "Inserting $n$ means between $A$ and $B$ makes an AP of $n+2$ terms with $d = \\frac{B-A}{n+1}$, so the $r$th mean is $x_r = A + \\frac{r(B-A)}{n+1} = \\frac{A(n-r+1) + rB}{n+1}$.\n\nWith $A=x, B=2y$: $\\frac{x(n-r+1) + 2yr}{n+1}$. With $A=2x, B=y$: $\\frac{2x(n-r+1) + yr}{n+1}$. Equating and cancelling: $x(n-r+1) = yr$, so $\\frac{x}{y} = \\frac{r}{n-r+1}$.",
    },
  ],
  practiceProblemIds: [],
};
