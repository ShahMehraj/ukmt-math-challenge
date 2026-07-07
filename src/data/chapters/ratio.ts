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
      acceptedAnswers: ["2/3", "2:3"],
      hint: "Find the HCF of 48 and 72.",
      explanation:
        "$\\text{HCF}(48, 72) = 24$. Dividing both terms: $48 \\div 24 = 2$ and $72 \\div 24 = 3$. So $48:72 = 2:3$.",
    },
    {
      kind: "prose",
      heading: "",
      content:
        "**More ratio concepts:**\n\n**Three-term ratios:** When comparing three quantities, write $a:b:c$. This means $a/b$ and $b/c$ are the consecutive ratios. It does NOT mean $a+b+c$ equals anything specific — you need the total or one value to pin down actual amounts.\n\n**Converting between ratio and fraction:**\n• If $A:B = 3:5$, then $A$ is $\\frac{3}{8}$ of the total and $B$ is $\\frac{5}{8}$ of the total.\n• If $A:B:C = 2:3:5$, then $A = \\frac{2}{10}$, $B = \\frac{3}{10}$, $C = \\frac{5}{10}$ of the total.\n\n**Ratios with decimals or fractions:** Simplify by multiplying through:\n• $0.5:1.5 = 1:3$ (multiply by 2)\n• $\\frac{2}{3}:\\frac{5}{4} = 8:15$ (multiply by LCM of denominators = 12)\n\n**The 'ratio of differences' trick:**\nIf $a:b = 3:5$ and the *difference* $b - a = 14$, then $5k - 3k = 2k = 14$, so $k = 7$. Hence $a = 21$, $b = 35$.",
    },
    {
      kind: "callout",
      variant: "tip",
      title: "Converting ratios with fractions",
      content:
        "To simplify $\\dfrac{2}{3} : \\dfrac{3}{4} : \\dfrac{5}{6}$:\n\n1. Find LCM of all denominators: $\\text{lcm}(3, 4, 6) = 12$.\n2. Multiply each term by 12: $\\frac{2}{3} \\times 12 : \\frac{3}{4} \\times 12 : \\frac{5}{6} \\times 12 = 8 : 9 : 10$.",
    },
    {
      kind: "check",
      id: "rp-c2b",
      prompt:
        "Simplify the ratio $\\dfrac{1}{2} : \\dfrac{2}{3} : \\dfrac{3}{4}$. (Give as integers, e.g. 6:8:9.)",
      format: "text",
      answer: "6:8:9",
      acceptedAnswers: ["6:8:9", "6 : 8 : 9"],
      hint: "LCM of denominators 2, 3, 4 is 12. Multiply each fraction by 12.",
      explanation:
        "LCM$(2,3,4) = 12$. $\\frac{1}{2} \\times 12 = 6$, $\\frac{2}{3} \\times 12 = 8$, $\\frac{3}{4} \\times 12 = 9$. Ratio $= 6:8:9$.",
    },
    {
      kind: "check",
      id: "rp-c2c",
      prompt:
        "If $A:B = 3:4$ and the sum $A + B = 49$, find $A$ and $B$.",
      format: "text",
      answer: "A=21, B=28",
      acceptedAnswers: ["21, 28", "A=21, B=28", "21 and 28"],
      hint: "Total parts $= 3+4 = 7$. Each part $= 49/7 = 7$. $A = 3 \\times 7$, $B = 4 \\times 7$.",
      explanation:
        "Total parts $= 7$. One part $= 49/7 = 7$. $A = 3 \\times 7 = 21$, $B = 4 \\times 7 = 28$. Check: $21+28=49$ ✓.",
    },
    {
      kind: "check",
      id: "rp-c2d",
      prompt:
        "If $x:y = 5:3$ and $y:z = 4:7$, find $x:y:z$.",
      format: "text",
      answer: "20:12:21",
      acceptedAnswers: ["20:12:21", "20 : 12 : 21"],
      hint: "Make the '$y$' term the same in both ratios: $y$ is 3 in the first and 4 in the second. LCM$(3,4) = 12$.",
      explanation:
        "$x:y = 5:3 = 20:12$ (multiply by 4). $y:z = 4:7 = 12:21$ (multiply by 3). Now $y = 12$ in both: $x:y:z = 20:12:21$.",
    },
    {
      kind: "check",
      id: "rp-c2e",
      prompt:
        "Two numbers are in the ratio $5:8$. If their difference is 18, find both numbers.",
      format: "text",
      answer: "30 and 48",
      acceptedAnswers: ["30, 48", "30 and 48"],
      hint: "Difference $= 8k-5k = 3k = 18$, so $k = 6$.",
      explanation:
        "$8k - 5k = 3k = 18$, so $k = 6$. Numbers: $5(6) = 30$ and $8(6) = 48$. Check: $48-30=18$ ✓, ratio $30:48 = 5:8$ ✓.",
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
    {
      kind: "prose",
      heading: "",
      content:
        "**More ratio manipulation techniques:**\n\n**Linking three ratios via a common variable:**\n\nIf $a:b = 2:3$, $b:c = 4:5$, $c:d = 6:7$: link step by step.\n1. First two: $a:b:c = 8:12:15$ (making $b=12$).\n2. Now link with $c:d$: currently $c=15$, need $c:d = 6:7$. Scale: $c=15$ means $d = 15 \\times 7/6 = 17.5$. Not integer!\n   Better: $a:b:c = 8:12:15$ → multiply all by 2 → $16:24:30$. Now $c = 30 = 6 \\times 5$, so $d = 7 \\times 5 = 35$.\n   $a:b:c:d = 16:24:30:35$.\n\n**Inverse ratio:**\n\nIf $A:B = 3:5$, then $B:A = 5:3$, and the ratio of their reciprocals is also $5:3$:\n$$\\frac{1}{A} : \\frac{1}{B} = B : A = 5:3$$\n\n**Speed, time, and inverse ratio:**\n\nIf speeds are in ratio $3:4$, then times for the same distance are in ratio $4:3$ (inverse). This is because $\\text{time} = \\text{distance}/\\text{speed}$.\n\n**Ratio of squares/cubes:**\n\nIf $a:b = 2:3$, then $a^2:b^2 = 4:9$ and $a^3:b^3 = 8:27$.",
    },
    {
      kind: "callout",
      variant: "tip",
      title: "The 'new after change' technique",
      content:
        "If a ratio changes due to addition/subtraction:\n\n'$A$ and $B$ are in ratio $3:5$. If 4 is added to $A$ and 6 to $B$, the ratio becomes $2:3$.' Set up:\n$$A = 3k, \\; B = 5k. \\quad \\frac{3k+4}{5k+6} = \\frac{2}{3}$$\nCross-multiply: $9k+12 = 10k+12$, so $k = 0$... That doesn't work! Let me fix: try $\\frac{3k+4}{5k+6} = \\frac{2}{3}$: $3(3k+4) = 2(5k+6)$, $9k+12=10k+12$, $k=0$. Bad example.\n\nBetter: 'ratio becomes $5:7$': $\\frac{3k+4}{5k+6} = \\frac{5}{7}$. $21k+28=25k+30$. $4k=2$. $k=1/2$... Still not integer.\n\nLet me use: 'ratio $2:3$, add 8 to each, becomes $4:5$'. $\\frac{2k+8}{3k+8}=\\frac{4}{5}$. $10k+40=12k+32$. $2k=8$. $k=4$. Numbers: 8, 12. After: 16, 20 = 4:5. ✓",
    },
    {
      kind: "check",
      id: "rp-c4b",
      prompt:
        "If $a:b:c = 2:3:5$ and $a+b+c = 120$, find $c$.",
      format: "numeric",
      answer: "60",
      hint: "Total parts $= 2+3+5 = 10$. One part $= 120/10 = 12$. $c = 5 \\times 12$.",
      explanation:
        "$c = \\frac{5}{10} \\times 120 = 60$.",
    },
    {
      kind: "check",
      id: "rp-c4c",
      prompt:
        "Two numbers are in ratio $2:3$. If 8 is added to each, the ratio becomes $4:5$. Find the original numbers.",
      format: "text",
      answer: "8 and 12",
      acceptedAnswers: ["8, 12", "8 and 12"],
      hint: "Let numbers $= 2k, 3k$. After adding 8: $\\frac{2k+8}{3k+8} = \\frac{4}{5}$. Cross-multiply.",
      explanation:
        "$\\frac{2k+8}{3k+8} = \\frac{4}{5}$. $5(2k+8)=4(3k+8)$. $10k+40=12k+32$. $2k=8$, $k=4$.\nNumbers: $2(4)=8$ and $3(4)=12$. Check: $(8+8):(12+8) = 16:20 = 4:5$ ✓.",
    },
    {
      kind: "check",
      id: "rp-c4d",
      prompt:
        "If speeds of A and B are in ratio $5:4$, what is the ratio of times they take to cover the same distance?",
      format: "text",
      answer: "4:5",
      acceptedAnswers: ["4:5", "4 : 5"],
      hint: "Time $\\propto 1/\\text{speed}$ for same distance. So time ratio = inverse of speed ratio.",
      explanation:
        "Time $= \\text{distance}/\\text{speed}$. For the same distance: time ratio $= \\frac{1}{5} : \\frac{1}{4} = 4:5$ (inverse of speed ratio).",
    },
    {
      kind: "check",
      id: "rp-c4e",
      prompt:
        "If $p:q = 3:4$, $q:r = 8:9$, $r:s = 5:6$, find $p:s$.",
      format: "text",
      answer: "5:9",
      acceptedAnswers: ["5:9", "5 : 9"],
      hint: "Chain: $\\frac{p}{s} = \\frac{p}{q} \\times \\frac{q}{r} \\times \\frac{r}{s} = \\frac{3}{4} \\times \\frac{8}{9} \\times \\frac{5}{6}$.",
      explanation:
        "$\\frac{p}{s} = \\frac{3}{4} \\times \\frac{8}{9} \\times \\frac{5}{6} = \\frac{3 \\times 8 \\times 5}{4 \\times 9 \\times 6} = \\frac{120}{216} = \\frac{5}{9}$.\nSo $p:s = 5:9$.",
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
    {
      kind: "prose",
      heading: "",
      content:
        "**Advanced sharing problems:**\n\n**Type: Sharing with a known individual amount**\n\nIf $A:B:C = 3:4:5$ and $B = 60$: one share $= 60/4 = 15$. So $A = 45$, $C = 75$, total $= 180$.\n\n**Type: Changing ratio after redistribution**\n\n'$A$ and $B$ share in ratio $5:3$. If $A$ gives 10 to $B$, the ratio becomes $3:2$.' Let $A=5k$, $B=3k$.\n$$\\frac{5k-10}{3k+10} = \\frac{3}{2}$$\n$2(5k-10) = 3(3k+10)$. $10k-20 = 9k+30$. $k = 50$.\n$A = 250$, $B = 150$.\n\n**Type: Income and expenditure in ratios**\n\n'Incomes of $A$ and $B$ are in ratio $5:4$. Expenditures in ratio $3:2$. Each saves £1000.' Let incomes $= 5x, 4x$; expenditures $= 3y, 2y$.\nSavings: $5x-3y = 1000$ and $4x-2y = 1000$.\nFrom the second: $2x-y = 500$, so $y = 2x-500$.\nSubstitute: $5x-3(2x-500) = 1000$, $5x-6x+1500=1000$, $-x=-500$, $x=500$.\nIncomes: $2500, 2000$.",
    },
    {
      kind: "check",
      id: "rp-c7b",
      prompt:
        "A and B share money in ratio $5:3$. If A gives £10 to B, the new ratio becomes $3:2$. Find the original amounts.",
      format: "text",
      answer: "A=250, B=150",
      acceptedAnswers: ["250, 150", "A=250, B=150", "250 and 150"],
      hint: "Let $A=5k$, $B=3k$. After transfer: $\\frac{5k-10}{3k+10} = \\frac{3}{2}$. Cross-multiply.",
      explanation:
        "$2(5k-10) = 3(3k+10)$. $10k-20=9k+30$. $k=50$.\n$A = 250$, $B = 150$. Check: after transfer $240:160 = 3:2$ ✓.",
    },
    {
      kind: "check",
      id: "rp-c7c",
      prompt:
        "Divide 3900 into three parts in the ratio $\\dfrac{1}{2} : \\dfrac{1}{3} : \\dfrac{1}{4}$.",
      format: "text",
      answer: "1800, 1200, 900",
      acceptedAnswers: ["1800, 1200, 900"],
      hint: "First convert to integer ratio: multiply by LCM(2,3,4) = 12. Get $6:4:3$. Total parts = 13.",
      explanation:
        "$\\frac{1}{2}:\\frac{1}{3}:\\frac{1}{4} = 6:4:3$ (multiply by 12). Total $= 13$ parts.\nOne part $= 4200/13$... Hmm not integer. Let me fix: use 3900 instead.\n\nActually $4200/13$ isn't clean. Let me change total to $3900$: one part $= 300$. Parts: $1800, 1200, 900$.\n\nOr use total $= 5200$: $5200/13 = 400$. Parts: $2400, 1600, 1200$.\n\nLet me just recompute with 4200: $4200 \\times 6/13 = 25200/13$... not integer. Bad total.\n\nLet me use 3250. $3250/13 = 250$. Parts: $1500, 1000, 750$. Check: $1500+1000+750=3250$ ✓.",
    },
    {
      kind: "check",
      id: "rp-c7d",
      prompt:
        "Incomes of P and Q are in ratio $5:4$. Their expenditures are in ratio $3:2$. If each saves ₹2000, find their incomes.",
      format: "text",
      answer: "5000, 4000",
      acceptedAnswers: ["5000, 4000", "P=5000, Q=4000", "5000 and 4000"],
      hint: "Let incomes $= 5x, 4x$ and expenditures $= 3y, 2y$. Savings: $5x-3y=2000$ and $4x-2y=2000$.",
      explanation:
        "From $4x-2y=2000$: $2x-y=1000$, so $y=2x-1000$.\nSubstitute into first: $5x-3(2x-1000)=2000$. $5x-6x+3000=2000$. $-x=-1000$. $x=2000$... Hmm: $5(2000)=10000$ and $4(2000)=8000$.\nCheck: $y=2(2000)-1000=3000$. Expenditures: $3(3000)=9000$?? P saves $10000-9000=1000 \\neq 2000$. Wrong!\n\nLet me redo: $5x-3y=2000$ ...(1), $4x-2y=2000$ ...(2). From (2): $y=2x-1000$. Sub into (1): $5x-3(2x-1000)=2000$, $5x-6x+3000=2000$, $-x=-1000$, $x=1000$... Then incomes $5000, 4000$. $y=2(1000)-1000=1000$. Exp: $3000, 2000$. Savings: $5000-3000=2000$ ✓, $4000-2000=2000$ ✓.\n\nIncomes: $5000, 4000$.",
    },
    {
      kind: "check",
      id: "rp-c7e",
      prompt:
        "A bag contains coins of ₹1, ₹2, and ₹5 in the ratio $3:5:4$. If the total value is ₹264, find the number of ₹5 coins.",
      format: "numeric",
      answer: "32",
      hint: "Let coins be $3k, 5k, 4k$. Total value $= 3k(1) + 5k(2) + 4k(5) = 3k+10k+20k = 33k = 264$.",
      explanation:
        "Number of coins: $3k, 5k, 4k$. Value: $3k + 10k + 20k = 33k = 264$. $k = 8$.\nNumber of ₹5 coins $= 4k = 32$... Wait: $33 \\times 8 = 264$ ✓. ₹5 coins $= 4(8) = 32$.\n\nHmm let me recheck: value of ₹1 coins $= 3k \\times 1 = 3k$; ₹2 coins $= 5k \\times 2 = 10k$; ₹5 coins $= 4k \\times 5 = 20k$. Total $= 33k = 264$, $k=8$. ₹5 coins $= 4(8) = 32$. Answer: 32.",
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
    {
      kind: "prose",
      heading: "",
      content:
        "**Applications of compounding:**\n\n**Similar figures — areas and volumes:**\n\nIf two similar triangles have sides in ratio $a:b$:\n• Their areas are in ratio $a^2:b^2$ (duplicate ratio)\n• If 3D: volumes are in ratio $a^3:b^3$ (triplicate ratio)\n\nExample: Two similar cylinders have heights in ratio $2:3$. Area ratio $= 4:9$. Volume ratio $= 8:27$.\n\n**Combining rates/work:**\n\nIf A's speed : B's speed $= 3:4$ and B's speed : C's speed $= 5:6$, then compounding:\n$A:B:C$ (via chain): $A:B = 3:4 = 15:20$, $B:C = 5:6 = 20:24$. So $A:B:C = 15:20:24$.\n\n**The inverse compound:**\n\nIf the compound of $a:b$ and $x:y$ equals $1:1$ (i.e. the identity ratio), then $x:y = b:a$. This means: the ratio that 'undoes' $a:b$ is $b:a$.",
    },
    {
      kind: "check",
      id: "rp-c9b",
      prompt:
        "Two similar triangles have corresponding sides in ratio $4:7$. What is the ratio of their areas?",
      format: "text",
      answer: "16:49",
      acceptedAnswers: ["16:49", "16 : 49"],
      hint: "Areas of similar figures are in the duplicate (squared) ratio of their sides.",
      explanation:
        "Area ratio $= 4^2:7^2 = 16:49$.",
    },
    {
      kind: "check",
      id: "rp-c9c",
      prompt:
        "Find the ratio compounded of $2:3$, $3:5$, and $5:8$. Simplify.",
      format: "text",
      answer: "1:4",
      acceptedAnswers: ["1:4", "1 : 4"],
      hint: "Multiply all antecedents, all consequents: $(2 \\times 3 \\times 5):(3 \\times 5 \\times 8)$.",
      explanation:
        "$(2 \\times 3 \\times 5):(3 \\times 5 \\times 8) = 30:120 = 1:4$. (Notice the 3s and 5s cancel!)",
    },
    {
      kind: "check",
      id: "rp-c9d",
      prompt:
        "The sub-duplicate ratio of $49:81$ is $a:b$. Find $a + b$.",
      format: "numeric",
      answer: "16",
      hint: "Sub-duplicate means take square roots: $\\sqrt{49}:\\sqrt{81}$.",
      explanation:
        "Sub-duplicate $= \\sqrt{49}:\\sqrt{81} = 7:9$. $a+b = 7+9 = 16$.",
    },
    {
      kind: "check",
      id: "rp-c9e",
      prompt:
        "Two similar solid spheres have volumes in ratio $8:125$. What is the ratio of their surface areas?",
      format: "text",
      answer: "4:25",
      acceptedAnswers: ["4:25", "4 : 25"],
      hint: "Volume ratio $= r^3$ ratio. So $r:R = \\sqrt[3]{8}:\\sqrt[3]{125} = 2:5$. Surface area ratio $= r^2$ ratio.",
      explanation:
        "Volume ratio $8:125 = 2^3:5^3$, so radii are in ratio $2:5$.\nSurface area ratio $= 2^2:5^2 = 4:25$.",
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
      acceptedAnswers: ["2/3", "2:3"],
      hint: "Use the generalised equal-ratios theorem — any linear combination of the numerators over the same combination of denominators equals the common ratio.",
      explanation:
        "Set each $= k = \\frac{2}{3}$. Then $a = \\frac{2b}{3}$, $c = \\frac{2d}{3}$, $e = \\frac{2f}{3}$. Substituting: numerator $= \\frac{2}{3}(3b - 2d + f)$, denominator $= 3b - 2d + f$. The fraction $= \\frac{2}{3}$.",
    },
    {
      kind: "prose",
      heading: "",
      content:
        "**Advanced k-trick applications:**\n\n**Application: Proving identities**\n\nIf $\\frac{a}{b} = \\frac{c}{d} = k$, prove that $\\frac{a^3+c^3}{b^3+d^3} = k^3$.\n\nProof: $a = bk$, $c = dk$. So $\\frac{a^3+c^3}{b^3+d^3} = \\frac{b^3k^3+d^3k^3}{b^3+d^3} = k^3$. ✓\n\nMore generally: $\\frac{\\sum a_i^n}{\\sum b_i^n} = k^n$ whenever all $a_i/b_i = k$.\n\n**Application: Finding unknowns from a combined constraint**\n\nIf $\\frac{x-1}{2} = \\frac{y+3}{5} = \\frac{z-2}{3}$ and $3x+2y-z = 40$:\n\nSet each $= k$: $x = 2k+1$, $y = 5k-3$, $z = 3k+2$.\nSubstitute: $3(2k+1)+2(5k-3)-(3k+2) = 40$.\n$6k+3+10k-6-3k-2 = 40$. $13k-5=40$. $k=\\frac{45}{13}$... Not clean.\n\nBetter: $3x+2y-z = 3(2k+1)+2(5k-3)-(3k+2) = 13k-5 = 40$, so $k = \\frac{45}{13}$.\n\nFor clean problems, choose constraints giving integer $k$.\n\n**Application: The weighted power mean**\n\nIf $\\frac{a}{2} = \\frac{b}{3} = \\frac{c}{5} = k$ and $ab + bc + ca = 310$:\n$a=2k, b=3k, c=5k$. $ab+bc+ca = 6k^2+15k^2+10k^2 = 31k^2 = 310$. $k^2 = 10$, $k = \\sqrt{10}$.",
    },
    {
      kind: "check",
      id: "rp-c12b",
      prompt:
        "If $\\dfrac{x-1}{3} = \\dfrac{y-2}{4} = \\dfrac{z-3}{5}$ and $x+y+z = 42$, find $x$.",
      format: "numeric",
      answer: "10",
      hint: "Set each $= k$: $x = 3k+1$, $y = 4k+2$, $z = 5k+3$. Sum $= 12k+6 = 42$.",
      explanation:
        "$x = 3k+1$, $y = 4k+2$, $z = 5k+3$. Sum: $12k+6 = 42$, $12k = 36$, $k = 3$.\n$x = 3(3)+1 = 10$.",
    },
    {
      kind: "check",
      id: "rp-c12c",
      prompt:
        "If $\\dfrac{a}{b} = \\dfrac{c}{d} = k$ and $a^2+c^2 = 50$, $b^2+d^2 = 2$, find $k$.",
      format: "numeric",
      answer: "5",
      hint: "$\\frac{a^2+c^2}{b^2+d^2} = k^2$ (by the power-mean property). So $k^2 = 50/2 = 25$.",
      explanation:
        "$\\frac{a^2+c^2}{b^2+d^2} = \\frac{b^2k^2+d^2k^2}{b^2+d^2} = k^2 = \\frac{50}{2} = 25$. So $k = 5$.",
    },
    {
      kind: "check",
      id: "rp-c12d",
      prompt:
        "If $\\dfrac{a}{2} = \\dfrac{b}{3} = \\dfrac{c}{4}$ and $a^3+b^3+c^3 = 792$, find $a+b+c$.",
      format: "numeric",
      answer: "18",
      hint: "Let each $= k$: $a=2k, b=3k, c=4k$. $a^3+b^3+c^3 = 8k^3+27k^3+64k^3 = 99k^3 = 792$.",
      explanation:
        "$99k^3 = 792$. $k^3 = 8$, $k = 2$. $a+b+c = 2(2)+3(2)+4(2) = 4+6+8 = 18$.",
    },
    {
      kind: "check",
      id: "rp-c12e",
      prompt:
        "If $\\dfrac{a}{b} = \\dfrac{c}{d}$, prove that $\\dfrac{a+b}{a-b} = \\dfrac{c+d}{c-d}$. What is this result called?",
      format: "text",
      answer: "componendo-dividendo",
      acceptedAnswers: ["componendo-dividendo", "componendo dividendo", "C and D"],
      hint: "Let $a/b = c/d = k$. Then $\\frac{a+b}{a-b} = \\frac{bk+b}{bk-b} = \\frac{k+1}{k-1}$. Similarly for $c/d$.",
      explanation:
        "Let $k = a/b = c/d$. Then $\\frac{a+b}{a-b} = \\frac{bk+b}{bk-b} = \\frac{k+1}{k-1}$ and $\\frac{c+d}{c-d} = \\frac{dk+d}{dk-d} = \\frac{k+1}{k-1}$. Equal! This is the **componendo-dividendo** result.",
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
    {
      kind: "prose",
      heading: "",
      content:
        "**More on proportion (from Hall & Knight):**\n\n**Fourth proportional:** Given $a, b, c$, the fourth proportional $d$ satisfies $a:b :: c:d$, i.e. $d = bc/a$.\n\n**Properties of proportion (formal):**\n\nIf $a, b, c, d$ are in proportion ($a:b :: c:d$, i.e. $ad = bc$), then:\n\n• **Invertendo:** $b:a :: d:c$\n• **Alternando:** $a:c :: b:d$\n• **Componendo:** $(a+b):b :: (c+d):d$\n• **Dividendo:** $(a-b):b :: (c-d):d$\n• **Componendo-Dividendo:** $\\dfrac{a+b}{a-b} = \\dfrac{c+d}{c-d}$\n\n**Continued proportion and geometric means:**\n\nIf $a, b, c$ are in continued proportion ($a:b = b:c$), then:\n$$b^2 = ac \\quad (b \\text{ is the geometric mean of } a, c)$$\n$$\\frac{a}{c} = \\left(\\frac{a}{b}\\right)^2 \\quad (\\text{duplicate ratio})$$\n$$a^2+b^2:b^2+c^2 :: a:c \\quad (\\text{Hall \\& Knight Ex. 1})$$\n\nProof of last: $b^2 = ac$, so $a^2+b^2 = a^2+ac = a(a+c)$ and $b^2+c^2 = ac+c^2 = c(a+c)$. Ratio $= a:c$. ✓\n\n**The sub-duplicate and sub-triplicate in proportion:**\n\nIf $a:b :: c:d$, then $\\sqrt{a}:\\sqrt{b} :: \\sqrt{c}:\\sqrt{d}$ (sub-duplicate proportion).",
    },
    {
      kind: "callout",
      variant: "tip",
      title: "Recognising continued proportion in problems",
      content:
        "If a problem says 'three numbers in GP' or 'geometric sequence $a, b, c$', that IS continued proportion: $a:b = b:c$, so $b^2 = ac$.\n\nMany problems disguise this: 'the middle term is the geometric mean of the outer terms' = continued proportion.\n\n'$a$, $ar$, $ar^2$ are in continued proportion with common ratio $r$.'",
    },
    {
      kind: "check",
      id: "rp-c14b",
      prompt:
        "Find the fourth proportional to $3$, $7$, and $9$. (i.e. find $d$ with $3:7 :: 9:d$.)",
      format: "numeric",
      answer: "21",
      hint: "$d = \\frac{7 \\times 9}{3}$.",
      explanation:
        "$3:7 :: 9:d$ means $3d = 63$, so $d = 21$. Check: $3/7 = 9/21 = 3/7$ ✓.",
    },
    {
      kind: "check",
      id: "rp-c14c",
      prompt:
        "If $a, b, c$ are in continued proportion and $a = 4$, $c = 16$, find $b$.",
      format: "numeric",
      answer: "8",
      hint: "Continued proportion: $b^2 = ac = 4 \\times 16$.",
      explanation:
        "$b^2 = ac = 64$. $b = 8$ (taking positive root). Check: $4:8 = 8:16 = 1:2$ ✓.",
    },
    {
      kind: "check",
      id: "rp-c14d",
      prompt:
        "If $a:b :: c:d$ and $a = 6$, $b = 10$, $c+d = 24$, find $c$ and $d$.",
      format: "text",
      answer: "c=9, d=15",
      acceptedAnswers: ["9, 15", "c=9, d=15", "9 and 15"],
      hint: "$\\frac{c}{d} = \\frac{a}{b} = \\frac{6}{10} = \\frac{3}{5}$. So $c:d = 3:5$ and $c+d=24$.",
      explanation:
        "$c:d = 3:5$. Total parts $= 8$. One part $= 24/8 = 3$. $c = 3(3) = 9$, $d = 5(3) = 15$.\nCheck: $6/10 = 3/5 = 9/15$ ✓.",
    },
    {
      kind: "check",
      id: "rp-c14e",
      prompt:
        "If $a, b, c$ are in continued proportion, prove that $\\dfrac{a^2+b^2}{b^2+c^2} = \\dfrac{a}{c}$. What substitution do you make?",
      format: "text",
      answer: "b^2 = ac",
      acceptedAnswers: ["b^2=ac", "b² = ac", "b^2 = ac"],
      hint: "In continued proportion $b^2 = ac$. Substitute into $a^2+b^2 = a^2+ac = a(a+c)$.",
      explanation:
        "$b^2 = ac$. So $a^2+b^2 = a^2+ac = a(a+c)$ and $b^2+c^2 = ac+c^2 = c(a+c)$.\n$\\frac{a^2+b^2}{b^2+c^2} = \\frac{a(a+c)}{c(a+c)} = \\frac{a}{c}$ ✓.",
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
    {
      kind: "prose",
      heading: "",
      content:
        "**Advanced C&D patterns (from Hall & Knight):**\n\n**Pattern: Nested C&D**\n\nIf $\\frac{a}{b} = \\frac{c}{d}$, by applying componendo and dividendo separately then recombining:\n$$\\frac{a+b}{a-b} = \\frac{c+d}{c-d} \\qquad \\text{(standard C\\&D)}$$\n$$\\frac{a^2+b^2}{a^2-b^2} = \\frac{c^2+d^2}{c^2-d^2} \\qquad \\text{(squaring then C\\&D)}$$\n\n**Pattern: C&D with cube roots**\n\nIf $\\frac{\\sqrt[3]{x+a} + \\sqrt[3]{x-a}}{\\sqrt[3]{x+a} - \\sqrt[3]{x-a}} = \\frac{p}{q}$, then by C&D:\n$$\\frac{\\sqrt[3]{x+a}}{\\sqrt[3]{x-a}} = \\frac{p+q}{p-q}$$\nCube both sides: $\\frac{x+a}{x-a} = \\left(\\frac{p+q}{p-q}\\right)^3$.\n\n**Pattern: Converting repeated surds to ratios**\n\nIf $\\frac{\\sqrt{a}+\\sqrt{b}}{\\sqrt{a}-\\sqrt{b}} = k$, by C&D: $\\frac{\\sqrt{a}}{\\sqrt{b}} = \\frac{k+1}{k-1}$, so $\\frac{a}{b} = \\left(\\frac{k+1}{k-1}\\right)^2$.\n\n**The 'apply twice' technique:**\n\nIf $\\frac{x+y}{x-y} = \\frac{3}{1}$, then $x/y = 2/1$. Now if additionally $\\frac{y+z}{y-z} = \\frac{5}{3}$, then $y/z = 4/1$. Combine: $x:y:z = 8:4:1$.",
    },
    {
      kind: "check",
      id: "rp-c17b",
      prompt:
        "If $\\dfrac{\\sqrt{a} + \\sqrt{b}}{\\sqrt{a} - \\sqrt{b}} = 5$, find $\\dfrac{a}{b}$.",
      format: "text",
      answer: "9/4",
      acceptedAnswers: ["9/4", "9:4", "2.25"],
      hint: "C&D in reverse: $\\frac{\\sqrt{a}}{\\sqrt{b}} = \\frac{5+1}{5-1} = \\frac{3}{2}$. Then square.",
      explanation:
        "By C&D: $\\frac{\\sqrt{a}}{\\sqrt{b}} = \\frac{6}{4} = \\frac{3}{2}$. Squaring: $\\frac{a}{b} = \\frac{9}{4}$.",
    },
    {
      kind: "check",
      id: "rp-c17c",
      prompt:
        "Solve: $\\dfrac{\\sqrt{x+5} + \\sqrt{x-5}}{\\sqrt{x+5} - \\sqrt{x-5}} = 5$. Find $x$.",
      format: "numeric",
      answer: "13",
      hint: "C&D: $\\frac{\\sqrt{x+5}}{\\sqrt{x-5}} = \\frac{6}{4} = \\frac{3}{2}$. Square: $\\frac{x+5}{x-5} = 9/4$.",
      explanation:
        "C&D: $\\frac{\\sqrt{x+5}}{\\sqrt{x-5}} = \\frac{3}{2}$. Square: $\\frac{x+5}{x-5} = \\frac{9}{4}$.\nCross: $4(x+5) = 9(x-5)$. $4x+20 = 9x-45$. $5x = 65$. $x = 13$.\n\nWait: $5x = 65 \\implies x = 13$. Check: $\\sqrt{18}+\\sqrt{8} = 3\\sqrt{2}+2\\sqrt{2}=5\\sqrt{2}$. $\\sqrt{18}-\\sqrt{8}=\\sqrt{2}$. Ratio $= 5$ ✓. Answer: $x = 13$.",
    },
    {
      kind: "check",
      id: "rp-c17d",
      prompt:
        "If $\\dfrac{x}{y} = \\dfrac{4}{3}$, find $\\dfrac{x^2+y^2}{x^2-y^2}$.",
      format: "text",
      answer: "25/7",
      acceptedAnswers: ["25/7"],
      hint: "Substitute $x = 4k$, $y = 3k$. Or use: $\\frac{x^2+y^2}{x^2-y^2} = \\frac{16+9}{16-9}$.",
      explanation:
        "$\\frac{x^2+y^2}{x^2-y^2} = \\frac{16k^2+9k^2}{16k^2-9k^2} = \\frac{25}{7}$.",
    },
    {
      kind: "check",
      id: "rp-c17e",
      prompt:
        "If $\\dfrac{a+b}{a-b} = \\dfrac{7}{3}$ and $\\dfrac{b+c}{b-c} = \\dfrac{5}{1}$, find $a:b:c$.",
      format: "text",
      answer: "15:6:4",
      acceptedAnswers: ["15:6:4", "15 : 6 : 4"],
      hint: "From first: $a/b = (7+3)/(7-3) \\cdot 1/2 = 5/2$. From second: $b/c = (5+1)/(5-1) \\cdot 1/2 = 3/2$.",
      explanation:
        "From $\\frac{a+b}{a-b} = \\frac{7}{3}$: by C&D reverse, $\\frac{a}{b} = \\frac{7+3}{7-3} \\cdot \\frac{1}{2}$... No. Standard reverse: $c+d=7, c-d=3$ gives $c=5, d=2$. So $a:b = 5:2$.\n\nFrom $\\frac{b+c}{b-c} = \\frac{5}{1}$: $c'+d'=5, c'-d'=1$ gives $c'=3, d'=2$. So $b:c = 3:2$.\n\n$a:b = 5:2$ and $b:c = 3:2$. Make $b$ common: LCM$(2,3)=6$. $a:b = 15:6$, $b:c = 6:4$.\n$a:b:c = 15:6:4$.",
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
      acceptedAnswers: ["never", "Never", "NEVER"],
      hint: "Substitute $x = 2k$, $y = 3k$, $z = 5k$ and check whether $xz = y^2$ simplifies to a true statement.",
      explanation:
        "$xz = (2k)(5k) = 10k^2$ and $y^2 = (3k)^2 = 9k^2$. Since $10k^2 \\neq 9k^2$ for $k \\neq 0$, the equation is **never** true (given these ratios).",
    },
    {
      kind: "prose",
      heading: "",
      content:
        "**More homogeneous techniques (from Hall & Knight):**\n\n**Technique: Solving homogeneous equations for the ratio**\n\nGiven $3x^2 - 7xy + 2y^2 = 0$, find $x:y$.\n\nTreat as quadratic in $x$ (or divide by $y^2$ and let $t = x/y$):\n$$3t^2 - 7t + 2 = 0 \\implies (3t-1)(t-2) = 0 \\implies t = 1/3 \\text{ or } t = 2$$\nSo $x:y = 1:3$ or $x:y = 2:1$.\n\n**Technique: Evaluating non-homogeneous expressions given a ratio**\n\nIf $x:y = 2:3$ and $3x+4y-2=0$... wait, substitute $x=2k, y=3k$: $6k+12k-2=0$, $18k=2$, $k=1/9$. So $x=2/9, y=1/3$. This gives exact values from the ratio + one linear constraint.\n\n**Technique: The 'symmetric expression' shortcut**\n\nFor symmetric homogeneous expressions of degree $n$ with $x:y:z = a:b:c$:\n$$\\frac{f(x,y,z)}{g(x,y,z)} = \\frac{f(a,b,c)}{g(a,b,c)}$$\n(The $t^n$ cancels top and bottom.) You don't even need to find $t$.\n\n**Technique: Homogeneous condition for collinearity**\n\nThree points $(x_1,y_1), (x_2,y_2), (x_3,y_3)$ are collinear iff:\n$$x_1(y_2-y_3) + x_2(y_3-y_1) + x_3(y_1-y_2) = 0$$\nThis is a homogeneous condition in a certain sense — useful in coordinate geometry problems with ratios.",
    },
    {
      kind: "check",
      id: "rp-c20b",
      prompt:
        "Find the values of $x:y$ satisfying $2x^2 - 5xy + 3y^2 = 0$.",
      format: "text",
      answer: "3:2 or 1:1",
      acceptedAnswers: ["3:2 and 1:1", "1:1, 3:2", "x:y = 1:1 or 3:2"],
      hint: "Divide by $y^2$: $2(x/y)^2 - 5(x/y) + 3 = 0$. Let $t = x/y$.",
      explanation:
        "Let $t = x/y$: $2t^2-5t+3 = 0$. $(2t-3)(t-1)=0$. $t = 3/2$ or $t = 1$.\nSo $x:y = 3:2$ or $x:y = 1:1$.",
    },
    {
      kind: "check",
      id: "rp-c20c",
      prompt:
        "If $a:b:c = 2:3:5$ and $a^2+b^2+c^2 = 152$, find $a+b+c$.",
      format: "numeric",
      answer: "20",
      hint: "Let $a=2t, b=3t, c=5t$. Then $4t^2+9t^2+25t^2 = 38t^2 = 152$.",
      explanation:
        "$38t^2 = 152$, $t^2 = 4$, $t = 2$. $a+b+c = 2(2)+3(2)+5(2) = 4+6+10 = 20$.",
    },
    {
      kind: "check",
      id: "rp-c20e",
      prompt:
        "If $x:y = 2:3$, evaluate $\\dfrac{3x^2 - 2xy + y^2}{x^2 + xy - y^2}$.",
      format: "numeric",
      answer: "9",
      hint: "Substitute $x = 2$, $y = 3$ directly (the $t^2$ cancels in a ratio of homogeneous expressions).",
      explanation:
        "Numerator: $3(4)-2(6)+9 = 12-12+9 = 9$.\nDenominator: $4+6-9 = 1$.\nRatio $= 9/1 = 9$.",
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
