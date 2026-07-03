import type { Chapter } from "@/lib/types";

/**
 * Ratio, Proportion & the k-Trick — a comprehensive standalone chapter drawing
 * from Hall & Knight's "Higher Algebra" (Chapters I–II), explained lucidly for
 * Year 9–11 competition students preparing for IMC and Hamilton.
 *
 * Covers: definition of ratio, manipulating and comparing ratios, sharing in a
 * ratio, compounding ratios, the equal-ratios theorem ("k-trick"), proportion,
 * componendo-dividendo, and homogeneous substitution.
 */
export const ratioChapter: Chapter = {
  id: "ch-ratio-1",
  title: "Ratio, Proportion & the k-Trick",
  topic: "ratio-proportion",
  order: 50,
  examFocus: "both",
  difficulty: "medium",
  estMinutes: 90,
  prerequisites: ["ch-found-1"],
  blurb:
    "A deep dive into ratio and proportion — from the fundamentals of what a ratio is, through sharing and compounding, to the powerful equal-ratios theorem (the 'k-trick') and componendo-dividendo. These are the workhorse tools for IMC and Hamilton algebra problems.",

  intro: {
    whyItMatters:
      "Ratio and proportion are the hidden backbone of competition mathematics. Around 3–5 IMC questions every year hinge on ratio reasoning, and Hamilton regularly sets multi-step problems where the k-trick or componendo-dividendo collapses a page of algebra into three lines. Master these techniques and you gain a decisive speed advantage.",
    whereItAppears:
      "IMC Q8–15 frequently feature 'share in a ratio' and 'equal fractions' setups. Hamilton Q2–4 love proportion chains, homogeneous equations, and applications of componendo-dividendo. The k-trick also underpins many geometry problems where similar triangles yield equal ratios.",
    typicalPatterns: [
      "Sharing a quantity in a given ratio, sometimes with constraints like 'one part exceeds another by…'.",
      "A chain of equal fractions where you set each equal to $k$ and derive a new expression.",
      "Equations that simplify dramatically via componendo-dividendo.",
      "Homogeneous equations where substituting $x = ak, y = bk, z = ck$ unlocks the solution.",
      "Cross-multiplication to compare or prove inequalities between ratios.",
    ],
    commonMistakes: [
      "Confusing a ratio with a fraction — a ratio $a:b$ compares two quantities, it does not mean 'a out of a+b'.",
      "Forgetting that ratios must compare quantities in the same units.",
      "Adding/subtracting ratios as if they were fractions without a common link.",
      "Applying componendo-dividendo to ratios that are not equal.",
      "Losing track of which variable equals $k$ times what in the k-trick.",
    ],
  },

  lesson: [
    // ═══════════════════════════════════════════════════════════════════════════
    // SECTION 1: What is a ratio?
    // ═══════════════════════════════════════════════════════════════════════════
    {
      kind: "prose",
      heading: "1 · What is a ratio?",
      content:
        "A **ratio** is a way of comparing two quantities of the same kind by division. When we write $a : b$, we mean 'for every $a$ units of the first quantity, there are $b$ units of the second'. The first term ($a$) is called the **antecedent** and the second ($b$) the **consequent**.\n\nThink of it this way: a ratio is not an absolute size — it tells you the *relative* size. A rope cut in the ratio $3:5$ could be 8 cm total, or 8 km total; the ratio only tells you the shape of the split, not the size.\n\nCritically, a ratio $a:b$ is the *same thing* as the fraction $\\dfrac{a}{b}$, and it obeys all the same rules. You can multiply or divide both terms by the same non-zero number without changing the ratio: $3:5 = 6:10 = 15:25$.",
    },
    {
      kind: "callout",
      variant: "definition",
      title: "Ratio — formal definition",
      content:
        "The ratio of $a$ to $b$ (written $a:b$) is the quotient $\\dfrac{a}{b}$, where $a$ and $b$ are positive real numbers measured in the same units. Two ratios $a:b$ and $c:d$ are **equal** if and only if $ad = bc$ (cross-multiplication).",
    },
    {
      kind: "callout",
      variant: "tip",
      title: "Commensurable vs incommensurable",
      content:
        "Two quantities are **commensurable** if their ratio is rational (expressible as a ratio of integers). For example, $6$ cm and $9$ cm have ratio $2:3$. Two quantities are **incommensurable** if their ratio is irrational — like the diagonal and side of a square ($\\sqrt{2}:1$). In competition problems the ratio is almost always rational, but being aware of this distinction deepens understanding.",
    },
    {
      kind: "prose",
      heading: "Comparing ratios",
      content:
        "Which is larger: $3:7$ or $5:11$? Convert to fractions and cross-multiply: compare $\\dfrac{3}{7}$ and $\\dfrac{5}{11}$ by checking $3 \\times 11$ vs $5 \\times 7$. Since $33 < 35$, we have $\\dfrac{3}{7} < \\dfrac{5}{11}$, so $5:11$ is the larger ratio.\n\nThis **cross-multiplication test** is your go-to for comparing ratios quickly: $\\dfrac{a}{b} < \\dfrac{c}{d}$ if and only if $ad < bc$ (assuming $b, d > 0$).",
    },
    {
      kind: "check",
      id: "rp-c1",
      prompt: "Which ratio is larger: $4:9$ or $5:12$? (Type '4:9' or '5:12')",
      format: "text",
      answer: "4:9",
      acceptedAnswers: ["4/9", "4:9"],
      hint: "Cross-multiply: compare $4 \\times 12$ with $5 \\times 9$.",
      explanation:
        "Cross-multiply: $4 \\times 12 = 48$ and $5 \\times 9 = 45$. Since $48 > 45$, we have $\\frac{4}{9} > \\frac{5}{12}$. So $4:9$ is the larger ratio. (Decimals confirm: $\\frac{4}{9} \\approx 0.444$ vs $\\frac{5}{12} \\approx 0.417$.)",
    },
    {
      kind: "check",
      id: "rp-c2",
      prompt: "Simplify the ratio $48:72$ to its lowest terms. (Type e.g. 2:3)",
      format: "text",
      answer: "2:3",
      acceptedAnswers: ["2/3"],
      hint: "Find the HCF of 48 and 72.",
      explanation:
        "$\\text{HCF}(48, 72) = 24$. Dividing both terms: $48 \\div 24 = 2$ and $72 \\div 24 = 3$. So $48:72 = 2:3$.",
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // SECTION 2: Manipulating ratios
    // ═══════════════════════════════════════════════════════════════════════════
    {
      kind: "prose",
      heading: "2 · Manipulating ratios",
      content:
        "Since a ratio is just a fraction, you can:\n\n• **Scale** both terms by the same factor: $2:5 = 6:15 = 20:50$.\n• **Simplify** by dividing both terms by their HCF.\n• **Convert to same denominator** to combine: if $a:b = 3:4$ and $b:c = 5:7$, link them by making the '$b$' part equal. Scale the first to $15:20$ and the second to $20:28$, giving $a:b:c = 15:20:28$.\n\nThis 'chain linking' technique — making the shared term match — is essential for competition problems with cascading ratios.",
    },
    {
      kind: "callout",
      variant: "tip",
      title: "The key insight for equal ratios",
      content:
        "If $\\dfrac{a}{b} = \\dfrac{c}{d}$, you can write both as equal to some constant $k$. Then $a = bk$ and $c = dk$. This simple substitution — setting the common ratio equal to $k$ — is the seed of the powerful 'k-trick' we'll develop in Section 5.",
    },
    {
      kind: "check",
      id: "rp-c3",
      prompt:
        "If $a:b = 2:3$ and $b:c = 4:5$, find $a:b:c$. (Type e.g. 8:12:15)",
      format: "text",
      answer: "8:12:15",
      hint: "Make the $b$ values match: LCM of 3 and 4 is 12.",
      explanation:
        "Scale $a:b = 2:3$ by $4$ to get $8:12$. Scale $b:c = 4:5$ by $3$ to get $12:15$. Since $b = 12$ in both, $a:b:c = 8:12:15$.",
    },
    {
      kind: "check",
      id: "rp-c4",
      prompt:
        "Express the ratio $1.5 : 2.5 : 4$ in simplest integer form. (Type e.g. 3:5:8)",
      format: "text",
      answer: "3:5:8",
      hint: "Multiply all terms by 2 to clear the decimals.",
      explanation:
        "$1.5:2.5:4 = 3:5:8$ (multiply each term by $2$). These share no common factor, so this is already simplest.",
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // SECTION 3: Sharing in a ratio
    // ═══════════════════════════════════════════════════════════════════════════
    {
      kind: "prose",
      heading: "3 · Sharing in a ratio",
      content:
        "This is the workhorse competition technique. To share a quantity $T$ in the ratio $a:b:c$:\n\n1. Add the parts: total shares $= a + b + c$.\n2. Value of one share $= \\dfrac{T}{a+b+c}$.\n3. Each portion $= (\\text{its part}) \\times (\\text{one share})$.\n\nBut competition problems rarely just ask 'share £120 in ratio 2:3:5'. They add twists: 'one part is 12 more than another', or 'the difference between the largest and smallest is 40'. The trick is always the same: express the *gap* in terms of shares.\n\nFor example, in ratio $2:3:5$, the gap between largest and smallest is $5 - 2 = 3$ shares. If that gap equals $18$, then one share $= 6$, and the total is $10 \\times 6 = 60$.",
    },
    {
      kind: "example",
      title: "Sharing with a constraint",
      statement:
        "Three friends share some money in the ratio $2:5:7$. The friend with the most gets £$30$ more than the friend with the least. How much money is shared in total?",
      approach:
        "The difference between the largest and smallest parts is $7 - 2 = 5$ shares, and this equals £$30$.",
      solution:
        "One share $= 30 \\div 5 = £6$. Total shares $= 2 + 5 + 7 = 14$. Total money $= 14 \\times 6 = £84$.",
    },
    {
      kind: "check",
      id: "rp-c5",
      prompt:
        "A prize of £$480$ is split between Alice and Bob in the ratio $5:7$. How much does Bob receive, in £?",
      format: "numeric",
      answer: "280",
      hint: "Total shares $= 5 + 7 = 12$. Find one share, then multiply by $7$.",
      explanation:
        "One share $= 480 \\div 12 = 40$. Bob gets $7 \\times 40 = £280$.",
    },
    {
      kind: "check",
      id: "rp-c6",
      prompt:
        "Two numbers are in the ratio $3:8$. Their difference is $45$. What is the smaller number?",
      format: "numeric",
      answer: "27",
      hint: "The difference is $8 - 3 = 5$ shares.",
      explanation:
        "$5$ shares $= 45$, so one share $= 9$. The smaller number $= 3 \\times 9 = 27$.",
    },
    {
      kind: "check",
      id: "rp-c7",
      prompt:
        "A sum of money is divided among $A$, $B$, and $C$ in the ratio $1:2:3$. If $C$'s share exceeds $A$'s share by £$500$, what is the total?",
      format: "numeric",
      answer: "1500",
      hint: "The gap $C - A = 3 - 1 = 2$ shares $= £500$.",
      explanation:
        "$2$ shares $= 500$, so one share $= 250$. Total $= (1+2+3) \\times 250 = 6 \\times 250 = £1500$.",
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // SECTION 4: Compounding ratios
    // ═══════════════════════════════════════════════════════════════════════════
    {
      kind: "prose",
      heading: "4 · Compounding ratios",
      content:
        "When we combine ratios by multiplication, we get a **compounded** ratio. If ratio $R_1 = a:b$ and ratio $R_2 = c:d$, their compound is $ac:bd$.\n\nThink of it as multiplying the fractions: $\\dfrac{a}{b} \\times \\dfrac{c}{d} = \\dfrac{ac}{bd}$.\n\nSpecial cases with classical names (these appear in older textbooks and occasionally in competition shorthand):\n\n• **Duplicate ratio** of $a:b$ is $a^2:b^2$ (the ratio compounded with itself).\n• **Sub-duplicate ratio** of $a:b$ is $\\sqrt{a}:\\sqrt{b}$.\n• **Triplicate ratio** of $a:b$ is $a^3:b^3$.\n• **Sub-triplicate ratio** of $a:b$ is $\\sqrt[3]{a}:\\sqrt[3]{b}$.\n\nWhy does this matter? If areas of similar figures are in ratio $a^2:b^2$ (duplicate ratio of their sides $a:b$), and volumes are in ratio $a^3:b^3$ (triplicate ratio), then recognising these structures saves time.",
    },
    {
      kind: "callout",
      variant: "definition",
      title: "Compounded ratio",
      content:
        "The ratio **compounded** of $a_1:b_1$, $a_2:b_2$, ..., $a_n:b_n$ is $$a_1 a_2 \\cdots a_n \\;:\\; b_1 b_2 \\cdots b_n.$$",
    },
    {
      kind: "check",
      id: "rp-c8",
      prompt:
        "Find the ratio compounded of $2:3$ and $9:4$. (Type in simplest form e.g. 3:2)",
      format: "text",
      answer: "3:2",
      hint: "Multiply antecedents and consequents: $(2 \\times 9):(3 \\times 4)$.",
      explanation:
        "Compound $= 18:12 = 3:2$ (dividing both by $6$).",
    },
    {
      kind: "check",
      id: "rp-c9",
      prompt:
        "The duplicate ratio of $3:5$ is $a:b$. What is $a + b$?",
      format: "numeric",
      answer: "34",
      hint: "Duplicate ratio means squaring both terms.",
      explanation:
        "Duplicate ratio of $3:5$ is $9:25$. So $a + b = 9 + 25 = 34$.",
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // SECTION 5: The equal-ratios theorem (the k-trick)
    // ═══════════════════════════════════════════════════════════════════════════
    {
      kind: "prose",
      heading: "5 · The equal-ratios theorem (the 'k-trick')",
      content:
        "This is THE most important competition tool in the chapter. Here's the setup:\n\nSuppose $\\dfrac{a}{b} = \\dfrac{c}{d} = \\dfrac{e}{f}$. Call this common value $k$. Then $a = bk$, $c = dk$, $e = fk$.\n\nNow look at $\\dfrac{a + c + e}{b + d + f}$. Substituting: $$\\frac{bk + dk + fk}{b + d + f} = \\frac{k(b + d + f)}{b + d + f} = k.$$\n\nSo **each fraction also equals $\\dfrac{a+c+e}{b+d+f}$**. But this generalises enormously:",
    },
    {
      kind: "callout",
      variant: "definition",
      title: "The General Equal-Ratios Theorem",
      content:
        "If $\\dfrac{a_1}{b_1} = \\dfrac{a_2}{b_2} = \\cdots = \\dfrac{a_n}{b_n} = k$, then for any weights $p_1, p_2, \\ldots, p_n$ and any exponent $n$: $$k = \\left(\\frac{p_1 a_1^n + p_2 a_2^n + \\cdots}{p_1 b_1^n + p_2 b_2^n + \\cdots}\\right)^{1/n}$$ The most-used special case ($n=1$, all weights $= 1$): $$\\frac{a_1}{b_1} = \\frac{a_2}{b_2} = \\cdots = \\frac{a_1 + a_2 + \\cdots}{b_1 + b_2 + \\cdots}.$$",
    },
    {
      kind: "prose",
      heading: "Using the k-trick in practice",
      content:
        "The method has two flavours:\n\n**Flavour 1: Set each ratio = $k$ and substitute.** This is best when you need to express one quantity in terms of others.\n\n**Flavour 2: Use the sum/difference property directly.** When you know the sum (or difference) of numerators or denominators, plug in to find $k$ instantly.\n\nLet's see both in action.",
    },
    {
      kind: "example",
      title: "k-trick Flavour 1",
      statement:
        "If $\\dfrac{x}{3} = \\dfrac{y}{4} = \\dfrac{z}{5}$ and $x + y + z = 36$, find $x$, $y$, $z$.",
      approach:
        "Set each $= k$. Then $x = 3k$, $y = 4k$, $z = 5k$. Use the constraint to find $k$.",
      solution:
        "$3k + 4k + 5k = 36 \\Rightarrow 12k = 36 \\Rightarrow k = 3$. So $x = 9$, $y = 12$, $z = 15$.",
      alternative:
        "By the equal-ratios theorem directly: each $= \\frac{x+y+z}{3+4+5} = \\frac{36}{12} = 3$. Same result.",
    },
    {
      kind: "example",
      title: "k-trick Flavour 2",
      statement:
        "If $\\dfrac{a}{2} = \\dfrac{b}{3} = \\dfrac{c}{7}$ and $a^2 + b^2 + c^2 = 248$, find $a + b + c$.",
      approach:
        "Set each $= k$, so $a = 2k$, $b = 3k$, $c = 7k$. Substitute into the quadratic constraint.",
      solution:
        "$(2k)^2 + (3k)^2 + (7k)^2 = 4k^2 + 9k^2 + 49k^2 = 62k^2 = 248$. So $k^2 = 4$, giving $k = 2$ (taking positive root). Then $a + b + c = 2(2) + 3(2) + 7(2) = 24$.",
    },
    {
      kind: "check",
      id: "rp-c10",
      prompt:
        "If $\\dfrac{p}{5} = \\dfrac{q}{7} = \\dfrac{r}{3}$ and $p - q + r = 3$, find the value of $p$.",
      format: "numeric",
      answer: "15",
      hint: "Let each $= k$. Then $p = 5k$, $q = 7k$, $r = 3k$. Substitute into $p - q + r = 3$.",
      explanation:
        "$5k - 7k + 3k = k = 3$. So $p = 5k = 15$.",
    },
    {
      kind: "check",
      id: "rp-c11",
      prompt:
        "If $\\dfrac{x}{2} = \\dfrac{y}{3} = \\dfrac{z}{4}$ and $x^2 + y^2 + z^2 = 116$, what is $x + y + z$?",
      format: "numeric",
      answer: "18",
      hint: "Set each $= k$. Then $x = 2k, y = 3k, z = 4k$. Find $k$ from the sum of squares.",
      explanation:
        "$4k^2 + 9k^2 + 16k^2 = 29k^2 = 116$, so $k^2 = 4$, $k = 2$. Then $x + y + z = 2(2) + 3(2) + 4(2) = 18$.",
    },
    {
      kind: "check",
      id: "rp-c12",
      prompt:
        "If $\\dfrac{a}{b} = \\dfrac{c}{d} = \\dfrac{e}{f} = \\dfrac{2}{3}$, what is $\\dfrac{3a - 2c + e}{3b - 2d + f}$? (Give as a fraction.)",
      format: "text",
      answer: "2/3",
      acceptedAnswers: ["2:3"],
      hint: "Use the generalised equal-ratios theorem — any linear combination of the numerators over the same combination of denominators equals the common ratio.",
      explanation:
        "Set each $= k = \\frac{2}{3}$. Then $a = \\frac{2b}{3}$, $c = \\frac{2d}{3}$, $e = \\frac{2f}{3}$. Substituting: numerator $= \\frac{2}{3}(3b - 2d + f)$, denominator $= 3b - 2d + f$. The fraction $= \\frac{2}{3}$.",
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // SECTION 6: Proportion
    // ═══════════════════════════════════════════════════════════════════════════
    {
      kind: "prose",
      heading: "6 · Proportion",
      content:
        "When two ratios are equal, the four quantities are said to be **in proportion**. We write $a:b :: c:d$ (read '$a$ is to $b$ as $c$ is to $d$'), meaning $\\dfrac{a}{b} = \\dfrac{c}{d}$, or equivalently $ad = bc$.\n\nTerminology:\n• $a$ and $d$ are the **extremes**; $b$ and $c$ are the **means**.\n• The **product of the extremes equals the product of the means**: $ad = bc$. This is the fundamental property.\n\n**Mean proportional:** If $a:x :: x:b$ (i.e. $a, x, b$ are in continued proportion), then $x^2 = ab$, so $x = \\sqrt{ab}$. The number $x$ is the **geometric mean** (or mean proportional) of $a$ and $b$.\n\n**Third proportional:** If $a:b :: b:c$, then $c = \\dfrac{b^2}{a}$ is called the third proportional to $a$ and $b$.\n\n**Continued proportion:** The sequence $a, b, c, d, \\ldots$ is in continued proportion if $\\dfrac{a}{b} = \\dfrac{b}{c} = \\dfrac{c}{d} = \\cdots$. Each consecutive pair has the same ratio — this is a geometric sequence.",
    },
    {
      kind: "callout",
      variant: "definition",
      title: "Key proportion identities",
      content:
        "If $a:b :: c:d$ (i.e. $\\frac{a}{b} = \\frac{c}{d}$), then:\n\n• **Invertendo:** $\\dfrac{b}{a} = \\dfrac{d}{c}$\n• **Alternando:** $\\dfrac{a}{c} = \\dfrac{b}{d}$\n• **Componendo:** $\\dfrac{a+b}{b} = \\dfrac{c+d}{d}$\n• **Dividendo:** $\\dfrac{a-b}{b} = \\dfrac{c-d}{d}$",
    },
    {
      kind: "check",
      id: "rp-c13",
      prompt:
        "Find the mean proportional between $8$ and $32$.",
      format: "numeric",
      answer: "16",
      hint: "Mean proportional $= \\sqrt{8 \\times 32}$.",
      explanation:
        "$\\sqrt{8 \\times 32} = \\sqrt{256} = 16$.",
    },
    {
      kind: "check",
      id: "rp-c14",
      prompt:
        "Find the third proportional to $4$ and $12$. (That is, find $c$ such that $4:12 :: 12:c$.)",
      format: "numeric",
      answer: "36",
      hint: "$c = \\dfrac{12^2}{4}$.",
      explanation:
        "From $4:12 :: 12:c$, cross-multiply: $4c = 144$, so $c = 36$.",
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // SECTION 7: Componendo, Dividendo & Componendo-Dividendo
    // ═══════════════════════════════════════════════════════════════════════════
    {
      kind: "prose",
      heading: "7 · Componendo, Dividendo & Componendo-Dividendo",
      content:
        "These are the four classical operations on a proportion $\\dfrac{a}{b} = \\dfrac{c}{d}$. They let you derive new equalities without cross-multiplying — and in competition contexts, they can collapse ugly expressions into clean ones in a single step.\n\nStarting from $\\dfrac{a}{b} = \\dfrac{c}{d}$:\n\n**Componendo** (add 1 to each side): $$\\frac{a}{b} + 1 = \\frac{c}{d} + 1 \\quad\\Longrightarrow\\quad \\frac{a + b}{b} = \\frac{c + d}{d}$$\n\n**Dividendo** (subtract 1 from each side): $$\\frac{a}{b} - 1 = \\frac{c}{d} - 1 \\quad\\Longrightarrow\\quad \\frac{a - b}{b} = \\frac{c - d}{d}$$\n\n**Componendo-Dividendo** (divide the two results): $$\\frac{a + b}{a - b} = \\frac{c + d}{c - d}$$\n\nThis last form — **C&D** for short — is extraordinarily useful. Whenever you see a fraction of the form $\\dfrac{\\text{sum}}{\\text{difference}}$ on one side of an equation, think C&D.",
    },
    {
      kind: "callout",
      variant: "tip",
      title: "When to use Componendo-Dividendo",
      content:
        "C&D is your weapon when an equation has the form $\\dfrac{a+b}{a-b} = \\dfrac{\\text{something}}{\\text{something}}$. Apply C&D *in reverse*: if you can write it as $\\frac{a+b}{a-b} = \\frac{c+d}{c-d}$, then immediately $\\frac{a}{b} = \\frac{c}{d}$. This reverse application saves massive algebra in Hamilton problems.",
    },
    {
      kind: "example",
      title: "Componendo-Dividendo in action",
      statement:
        "If $\\dfrac{x + y}{x - y} = \\dfrac{7}{3}$, find $\\dfrac{x}{y}$.",
      approach:
        "This is already in C&D form. Apply the reverse: $\\frac{x}{y} = \\frac{(7+3)/2}{(7-3)/2}$... Actually, use the standard C&D reverse directly.",
      solution:
        "By componendo-dividendo in reverse: from $\\frac{a+b}{a-b} = \\frac{c+d}{c-d}$ we get $\\frac{a}{b} = \\frac{c}{d}$. Here $a = x$, $b = y$. We need to write $\\frac{7}{3}$ as $\\frac{c+d}{c-d}$: take $c+d = 7$, $c-d = 3$, giving $c = 5$, $d = 2$. So $\\frac{x}{y} = \\frac{5}{2}$.\n\nAlternatively, apply componendo: $\\frac{2x}{x-y} = \\frac{10}{3}$ and dividendo: $\\frac{2y}{x-y} = \\frac{4}{3}$. Dividing: $\\frac{x}{y} = \\frac{10}{4} = \\frac{5}{2}$.",
    },
    {
      kind: "example",
      title: "Solving an equation with C&D",
      statement:
        "Solve $\\dfrac{\\sqrt{x+1} + \\sqrt{x-1}}{\\sqrt{x+1} - \\sqrt{x-1}} = \\dfrac{5}{2}$.",
      approach:
        "The left side is in componendo-dividendo form with $a = \\sqrt{x+1}$, $b = \\sqrt{x-1}$. Apply C&D in reverse.",
      solution:
        "By C&D in reverse: $\\frac{\\sqrt{x+1}}{\\sqrt{x-1}} = \\frac{5+2}{5-2} = \\frac{7}{3}$.\n\nSquaring: $\\frac{x+1}{x-1} = \\frac{49}{9}$.\n\nCross-multiply: $9(x+1) = 49(x-1)$, i.e. $9x + 9 = 49x - 49$, so $40x = 58$, giving $x = \\frac{29}{20}$.",
    },
    {
      kind: "check",
      id: "rp-c15",
      prompt:
        "If $\\dfrac{a + b}{a - b} = \\dfrac{5}{1}$, find $\\dfrac{a}{b}$. (Give as a fraction.)",
      format: "text",
      answer: "3/2",
      acceptedAnswers: ["3:2", "1.5"],
      hint: "Apply C&D in reverse: write $5/1$ as $(c+d)/(c-d)$ and find $c:d$.",
      explanation:
        "We need $c + d = 5$ and $c - d = 1$, giving $c = 3$, $d = 2$. So $\\frac{a}{b} = \\frac{3}{2}$.",
    },
    {
      kind: "check",
      id: "rp-c16",
      prompt:
        "If $\\dfrac{p}{q} = \\dfrac{3}{4}$, find $\\dfrac{p + q}{p - q}$. (Give as an integer or fraction.)",
      format: "text",
      answer: "-7",
      acceptedAnswers: ["-7/1", "-7:1"],
      hint: "Apply componendo-dividendo: $\\frac{p+q}{p-q} = \\frac{3+4}{3-4}$.",
      explanation:
        "By C&D: $\\frac{p+q}{p-q} = \\frac{3+4}{3-4} = \\frac{7}{-1} = -7$.",
    },
    {
      kind: "check",
      id: "rp-c17",
      prompt:
        "Solve: $\\dfrac{\\sqrt{x+3} + \\sqrt{x-3}}{\\sqrt{x+3} - \\sqrt{x-3}} = 3$. Find $x$.",
      format: "numeric",
      answer: "5",
      hint: "Apply C&D in reverse to get $\\frac{\\sqrt{x+3}}{\\sqrt{x-3}} = \\frac{3+1}{3-1} = 2$. Then square both sides.",
      explanation:
        "By C&D in reverse: $\\frac{\\sqrt{x+3}}{\\sqrt{x-3}} = \\frac{3+1}{3-1} = 2$. Squaring: $\\frac{x+3}{x-3} = 4$. Cross-multiply: $x + 3 = 4(x-3) = 4x - 12$, so $3x = 15$, giving $x = 5$. Check: $\\sqrt{8} + \\sqrt{2} = 3\\sqrt{2}$ and $\\sqrt{8} - \\sqrt{2} = \\sqrt{2}$, ratio $= 3$. ✓",
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // SECTION 8: Homogeneous equations and substitution
    // ═══════════════════════════════════════════════════════════════════════════
    {
      kind: "prose",
      heading: "8 · Homogeneous equations & ratio substitution",
      content:
        "An equation is **homogeneous of degree $n$** in variables $x, y, z$ if every term has total degree $n$. For example, $x^2 + 3xy + 2y^2 = 0$ is homogeneous of degree $2$.\n\nHere's the key insight: if you're told $x:y:z = a:b:c$, you can substitute $x = at$, $y = bt$, $z = ct$ for some parameter $t$. In a homogeneous equation, $t^n$ factors out completely and cancels, leaving a pure equation in the known constants $a, b, c$ — often telling you something about $t$, or confirming a relationship.\n\nConversely, if an equation is homogeneous, then the *ratios* between the variables are determined (not their actual values). This is why homogeneous equations and ratio problems go hand-in-hand.\n\nThis technique is particularly powerful in Hamilton problems where you're given a ratio between variables and asked to evaluate a symmetric expression.",
    },
    {
      kind: "callout",
      variant: "warning",
      title: "Checking homogeneity",
      content:
        "Before substituting $x = at$, $y = bt$, verify the equation is genuinely homogeneous. If one side has $x^2 + y^2$ and the other has $x + y$, the degrees differ (2 vs 1) — it's NOT homogeneous, and the cancellation trick won't work cleanly. You'd need a different approach.",
    },
    {
      kind: "example",
      title: "Ratio substitution in a homogeneous expression",
      statement:
        "If $x:y = 2:3$, find the value of $\\dfrac{x^2 + xy}{y^2 - x^2}$.",
      approach:
        "Substitute $x = 2t$, $y = 3t$. The expression is a ratio of degree-2 quantities, so $t^2$ cancels.",
      solution:
        "Numerator: $(2t)^2 + (2t)(3t) = 4t^2 + 6t^2 = 10t^2$.\n\nDenominator: $(3t)^2 - (2t)^2 = 9t^2 - 4t^2 = 5t^2$.\n\nSo $\\dfrac{10t^2}{5t^2} = 2$.",
    },
    {
      kind: "check",
      id: "rp-c18",
      prompt:
        "If $a:b = 3:4$, evaluate $\\dfrac{a^2 + ab + b^2}{a^2 - ab + b^2}$. (Give as a fraction.)",
      format: "text",
      answer: "37/13",
      hint: "Substitute $a = 3t$, $b = 4t$ and compute. The $t^2$ cancels.",
      explanation:
        "Numerator: $9t^2 + 12t^2 + 16t^2 = 37t^2$. Denominator: $9t^2 - 12t^2 + 16t^2 = 13t^2$. Ratio $= \\frac{37}{13}$.",
    },
    {
      kind: "check",
      id: "rp-c19",
      prompt:
        "If $x:y:z = 1:2:3$ and $x^2 + y^2 + z^2 = 56$, find $xyz$.",
      format: "numeric",
      answer: "48",
      hint: "Let $x = t$, $y = 2t$, $z = 3t$. Find $t$ from the sum of squares, then compute $xyz$.",
      explanation:
        "$t^2 + 4t^2 + 9t^2 = 14t^2 = 56$, so $t^2 = 4$, $t = 2$. Then $x = 2$, $y = 4$, $z = 6$. $xyz = 2 \\times 4 \\times 6 = 48$.",
    },
    {
      kind: "check",
      id: "rp-c20",
      prompt:
        "If $\\dfrac{x}{2} = \\dfrac{y}{3} = \\dfrac{z}{5}$ and $xz = y^2$, is the equation $xz = y^2$ always true, sometimes true, or never true for these ratios? (Type 'always', 'sometimes', or 'never'.)",
      format: "text",
      answer: "never",
      acceptedAnswers: ["Never", "NEVER"],
      hint: "Substitute $x = 2k$, $y = 3k$, $z = 5k$ and check whether $xz = y^2$ simplifies to a true statement.",
      explanation:
        "$xz = (2k)(5k) = 10k^2$ and $y^2 = (3k)^2 = 9k^2$. Since $10k^2 \\neq 9k^2$ for $k \\neq 0$, the equation is **never** true (given these ratios).",
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // BONUS: Competition applications & combining techniques
    // ═══════════════════════════════════════════════════════════════════════════
    {
      kind: "prose",
      heading: "Putting it all together: competition strategy",
      content:
        "In a real IMC or Hamilton paper, ratio problems rarely announce themselves with 'Given the ratio...'. Instead, the ratio structure is hidden inside a word problem or a geometry setup. Your job is to *recognise* the pattern:\n\n• See two or more fractions set equal? → **k-trick**.\n• See $\\frac{\\text{sum}}{\\text{difference}}$? → **Componendo-dividendo**.\n• Told a ratio and asked for a complicated expression? → **Substitute and cancel**.\n• Need to combine multiple ratios into one chain? → **Link via the common term**.\n\nThe speed advantage these give you is enormous. A Hamilton problem that takes 20 minutes by brute-force algebra can collapse to 5 lines with the right technique.",
    },
    {
      kind: "callout",
      variant: "trap",
      title: "Watch for: direction of the ratio",
      content:
        "If a problem says 'the ratio of boys to girls is $3:5$', then boys $= 3$ parts and girls $= 5$ parts. A surprisingly common mistake is to read this backwards. Always label your parts clearly.",
    },
  ],

  workedExamples: [
    {
      kind: "example",
      title: "IMC-style: ratio with algebra",
      statement:
        "Two positive numbers are in the ratio $2:5$. When $8$ is added to each, the new ratio is $1:2$. Find the original numbers.",
      approach:
        "Let the numbers be $2k$ and $5k$. Form an equation from the new ratio.",
      solution:
        "$\\frac{2k + 8}{5k + 8} = \\frac{1}{2}$. Cross-multiply: $2(2k + 8) = 5k + 8$, i.e. $4k + 16 = 5k + 8$, so $k = 8$. The numbers are $16$ and $40$.\n\nCheck: $\\frac{16+8}{40+8} = \\frac{24}{48} = \\frac{1}{2}$. ✓",
    },
    {
      kind: "example",
      title: "Hamilton-style: k-trick with power sums",
      statement:
        "If $\\dfrac{a}{3} = \\dfrac{b}{5} = \\dfrac{c}{7}$ and $a^3 + b^3 + c^3 = 3960$, find $abc$.",
      approach:
        "Set each $= k$. Substitute into the sum of cubes to find $k^3$, then compute $abc$ directly from $k^3$.",
      solution:
        "$a = 3k$, $b = 5k$, $c = 7k$.\n\n$a^3 + b^3 + c^3 = 27k^3 + 125k^3 + 343k^3 = 495k^3 = 3960$.\n\nSo $k^3 = 8$, giving $k = 2$.\n\nThen $abc = (3 \\times 2)(5 \\times 2)(7 \\times 2) = 6 \\times 10 \\times 14 = 840$.\n\n(Alternatively: $abc = 105k^3 = 105 \\times 8 = 840$.)",
    },
    {
      kind: "example",
      title: "Componendo-Dividendo to solve an equation",
      statement:
        "Solve $\\dfrac{\\sqrt{3x+4} + \\sqrt{3x-4}}{\\sqrt{3x+4} - \\sqrt{3x-4}} = 4$.",
      approach:
        "The left side is in C&D form with $a = \\sqrt{3x+4}$ and $b = \\sqrt{3x-4}$. Apply C&D in reverse.",
      solution:
        "By C&D: $\\dfrac{a}{b} = \\dfrac{4+1}{4-1} = \\dfrac{5}{3}$.\n\nSo $\\dfrac{\\sqrt{3x+4}}{\\sqrt{3x-4}} = \\dfrac{5}{3}$.\n\nSquaring: $\\dfrac{3x+4}{3x-4} = \\dfrac{25}{9}$.\n\nCross-multiply: $9(3x+4) = 25(3x-4)$, i.e. $27x + 36 = 75x - 100$, so $48x = 136$, giving $x = \\dfrac{136}{48} = \\dfrac{17}{6}$.\n\nCheck: $3 \\times \\frac{17}{6} + 4 = \\frac{17}{2} + 4 = \\frac{25}{2}$ and $3 \\times \\frac{17}{6} - 4 = \\frac{17}{2} - 4 = \\frac{9}{2}$. Then $\\frac{\\sqrt{25/2} + \\sqrt{9/2}}{\\sqrt{25/2} - \\sqrt{9/2}} = \\frac{5 + 3}{5 - 3} = \\frac{8}{2} = 4$. ✓",
    },
    {
      kind: "example",
      title: "Chain of ratios in a word problem",
      statement:
        "In a school, the ratio of boys to girls is $3:4$. Among the boys, the ratio who play sport to those who don't is $5:1$. Among the girls, this ratio is $3:1$. What fraction of the whole school plays sport?",
      approach:
        "Convert each partial ratio into a fraction of the whole, then add.",
      solution:
        "Let the school have $3k$ boys and $4k$ girls (total $7k$).\n\nBoys who play sport $= \\frac{5}{6} \\times 3k = \\frac{5k}{2}$.\n\nGirls who play sport $= \\frac{3}{4} \\times 4k = 3k$.\n\nTotal playing sport $= \\frac{5k}{2} + 3k = \\frac{5k + 6k}{2} = \\frac{11k}{2}$.\n\nFraction $= \\frac{11k/2}{7k} = \\frac{11}{14}$.",
    },
  ],

  practiceProblemIds: [],
  challengeProblemIds: [],

  summary: {
    keyFormulas: [
      "Cross-multiplication test: $\\dfrac{a}{b} = \\dfrac{c}{d} \\iff ad = bc$",
      "Sharing $T$ in ratio $a:b:c$: $$\\text{one share} = \\frac{T}{a+b+c}$$",
      "Compounded ratio: $$a_1 a_2 \\cdots a_n \\;:\\; b_1 b_2 \\cdots b_n$$",
      "Equal-ratios theorem (k-trick): $$\\frac{a}{b} = \\frac{c}{d} = \\frac{e}{f} = \\frac{a+c+e}{b+d+f} = \\frac{pa + qc + re}{pb + qd + rf}$$",
      "Mean proportional of $a$ and $b$: $$x = \\sqrt{ab}$$",
      "Componendo-Dividendo: $$\\frac{a}{b} = \\frac{c}{d} \\;\\Longrightarrow\\; \\frac{a+b}{a-b} = \\frac{c+d}{c-d}$$",
      "Homogeneous substitution: if $x:y:z = a:b:c$, set $x = at,\\; y = bt,\\; z = ct$",
    ],
    bigIdeas: [
      "A ratio IS a fraction — all fraction operations apply directly.",
      "The k-trick: setting a chain of equal fractions equal to $k$ collapses complex expressions into one-variable algebra.",
      "Componendo-dividendo converts 'sum over difference' forms into simple ratios and vice versa.",
      "Homogeneous expressions depend only on the ratios between variables, not on their magnitudes.",
    ],
    patternTips: [
      "See equal fractions in a chain → immediately set each = $k$ and substitute.",
      "See (sum)/(difference) structure → think componendo-dividendo.",
      "Need to combine $a:b$ and $b:c$ into $a:b:c$ → equalise the shared term via LCM.",
      "'Difference of parts = X' in a sharing problem → the difference in shares gives 'one share'.",
      "Given a ratio and a symmetric expression → substitute with parameter $t$ and cancel.",
    ],
    traps: [
      "Reading '$a:b$' as '$a$ out of $b$' instead of '$a$ out of $a+b$' for the total.",
      "Forgetting that componendo-dividendo requires $\\frac{a}{b} = \\frac{c}{d}$ as a starting point — you can't apply it to two unrelated fractions.",
      "In the k-trick, confusing which side is the numerator: if $\\frac{a}{b} = k$ then $a = bk$, not $b = ak$.",
      "Applying the equal-ratios theorem when the fractions are NOT actually all equal.",
      "Squaring both sides of a ratio equation and forgetting to check for extraneous solutions.",
    ],
    revisionNotes: [
      "Practise chain-linking ratios until it's automatic: equalise the common term via LCM.",
      "Memorise the C&D shortcut in both directions — applying and reversing.",
      "Work through problems where you identify the technique FIRST, before computing. Pattern recognition is the real skill.",
      "Review Hall & Knight Chapter I problems for fluency with classical ratio manipulation.",
      "Create flashcards for: k-trick, C&D forward, C&D reverse, mean proportional, third proportional.",
    ],
  },
};
