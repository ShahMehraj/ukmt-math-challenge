import type { Chapter } from "@/lib/types";

/**
 * The Brush-Up / Foundations chapter (Phase 2). A comprehensive, interactive
 * refresher of every prerequisite skill the main course assumes — number,
 * fractions, percentages, ratio, indices, surds, standard form, the full
 * algebra toolkit (manipulation, linear / simultaneous / quadratic equations,
 * inequalities, rearranging), coordinates and core geometry. Rich with tricky
 * checks so a student can genuinely confirm readiness.
 */
export const foundationsChapter: Chapter = {
  id: "ch-found-1",
  title: "Foundations Brush-Up",
  topic: "foundations",
  order: 1,
  examFocus: "both",
  difficulty: "foundation",
  estMinutes: 120,
  prerequisites: [],
  blurb:
    "A complete, confidence-building refresher of every skill the main course assumes: number & negatives, fractions, percentages, ratio, indices, surds, standard form, the full algebra toolkit (expanding, factorising, linear/simultaneous/quadratic equations, inequalities, rearranging), coordinates and core geometry.",

  intro: {
    whyItMatters:
      "Competition questions almost never test these skills directly — they assume them. If you can manipulate fractions, indices and equations fluently and without slips, all of your thinking time is freed for the actual puzzle. Most lost marks at IMC/Hamilton level are not 'I didn't know the idea' but 'I made a careless foundation error'.",
    whereItAppears:
      "Every single IMC and Hamilton question rests on confident arithmetic and algebra under time pressure. A late IMC question might hinge on a surd simplification or a reverse percentage; a Hamilton proof can collapse on one sign slip.",
    typicalPatterns: [
      "Multi-step BIDMAS expressions with powers, brackets and negatives.",
      "Fraction, percentage and ratio calculations — including reverse and successive percentages.",
      "Index and surd manipulation (negative/zero powers, simplifying roots).",
      "Expanding, factorising, and solving linear, simultaneous and quadratic equations.",
      "Rearranging formulae, solving inequalities, and core coordinate/geometry facts.",
    ],
    commonMistakes: [
      "Working left-to-right instead of following BIDMAS.",
      "Adding fractions by adding numerators and denominators separately.",
      "Sign slips with negative numbers and forgetting to flip an inequality.",
      "Treating 'up x% then down x%' as returning to the start.",
      "Thinking a negative power makes the answer negative.",
    ],
  },

  lesson: [
    // ─────────────── 1. Number & negatives ───────────────
    {
      kind: "prose",
      heading: "1 · Order of operations (BIDMAS)",
      content:
        "Evaluate in this order: **B**rackets, **I**ndices (powers & roots), **D**ivision & **M**ultiplication (left to right), then **A**ddition & **S**ubtraction (left to right). So $2 + 3 \\times 4 = 2 + 12 = 14$, *not* $20$. Division and multiplication share a level — do them left to right; the same for addition and subtraction.",
    },
    {
      kind: "callout",
      variant: "warning",
      title: "A subtle trap",
      content:
        "$-3^2$ means $-(3^2) = -9$, because the power binds tighter than the minus sign. Only $(-3)^2 = 9$. Brackets change everything.",
    },
    {
      kind: "check",
      id: "f-c1",
      prompt: "Evaluate $5 + 2 \\times (8 - 3)^2$.",
      format: "numeric",
      answer: "55",
      hint: "Brackets first, then the power, then multiply, then add.",
      explanation:
        "$(8-3)^2 = 5^2 = 25$; then $2\\times25 = 50$; then $5 + 50 = 55$.",
    },
    {
      kind: "prose",
      heading: "Negative numbers",
      content:
        "Two key rules: subtracting a negative *adds* ($a - (-b) = a + b$), and a product/quotient of two negatives is *positive*. Picture a number line: subtracting moves left, but subtracting a negative reverses that and moves right.",
    },
    {
      kind: "check",
      id: "f-c2",
      prompt: "Evaluate $-4 - (-9) + (-3)$.",
      format: "numeric",
      answer: "2",
      hint: "Turn $-(-9)$ into $+9$ first.",
      explanation:
        "$-4 - (-9) + (-3) = -4 + 9 - 3 = 2$.",
    },

    // ─────────────── 2. Fractions ───────────────
    {
      kind: "prose",
      heading: "2 · Fractions",
      content:
        "To **add or subtract**, rewrite over a common denominator. To **multiply**, multiply tops and multiply bottoms (cancel common factors first to keep numbers small). To **divide**, multiply by the reciprocal — flip the second fraction. The word **'of' means multiply**: $\\frac{2}{3}$ of $90$ is $\\frac{2}{3}\\times 90 = 60$.",
    },
    {
      kind: "callout",
      variant: "definition",
      content:
        "A **reciprocal** of $\\frac{a}{b}$ is $\\frac{b}{a}$. Dividing by a number is the same as multiplying by its reciprocal: $\\;\\div\\frac{4}{9}\\;=\\;\\times\\frac{9}{4}$.",
    },
    {
      kind: "check",
      id: "f-c3",
      prompt: "Work out $\\frac{2}{3} + \\frac{1}{4}$. Give your answer as a fraction.",
      format: "text",
      answer: "11/12",
      hint: "Use a common denominator of $12$.",
      explanation:
        "$\\frac{2}{3} = \\frac{8}{12}$ and $\\frac{1}{4} = \\frac{3}{12}$, so the sum is $\\frac{11}{12}$.",
    },
    {
      kind: "check",
      id: "f-c4",
      prompt: "Work out $\\frac{5}{6} \\div \\frac{10}{3}$. Give your answer as a fraction in lowest terms.",
      format: "text",
      answer: "1/4",
      acceptedAnswers: ["0.25"],
      hint: "Multiply by the reciprocal, then cancel.",
      explanation:
        "$\\frac{5}{6}\\times\\frac{3}{10} = \\frac{15}{60} = \\frac{1}{4}$. (Cancelling early: $\\frac{5}{10}=\\frac12$ and $\\frac{3}{6}=\\frac12$, giving $\\frac12\\times\\frac12=\\frac14$.)",
    },
    {
      kind: "example",
      title: "Nested fraction",
      statement: "Evaluate $1 - \\dfrac{1}{1 + \\frac{1}{2}}$.",
      approach: "Always resolve the innermost part first, then work outward.",
      solution:
        "$1 + \\frac{1}{2} = \\frac{3}{2}$. Its reciprocal is $\\frac{2}{3}$. So the expression is $1 - \\frac{2}{3} = \\frac{1}{3}$.",
    },

    // ─────────────── 3. Percentages ───────────────
    {
      kind: "prose",
      heading: "3 · Percentages",
      content:
        "A percentage is a fraction out of $100$. To find $15\\%$ of $80$: $\\frac{15}{100}\\times 80 = 12$. The power move is the **multiplier** — increasing or decreasing by $r\\%$ means $$\\text{increase: } \\times\\left(1+\\frac{r}{100}\\right), \\qquad \\text{decrease: } \\times\\left(1-\\frac{r}{100}\\right).$$ So $+20\\%$ is $\\times 1.2$ and $-25\\%$ is $\\times 0.75$.",
    },
    {
      kind: "check",
      id: "f-c5",
      prompt: "A £$40$ jacket is reduced by $25\\%$. What is the sale price in £?",
      format: "numeric",
      answer: "30",
      hint: "Multiply by $(1 - 0.25) = 0.75$.",
      explanation: "$40 \\times 0.75 = 30$, so the sale price is £$30$.",
    },
    {
      kind: "callout",
      variant: "trap",
      title: "Reverse percentages & 'up then down'",
      content:
        "If a price *after* a $30\\%$ cut is £$63$, the original is **not** £$63 + 30\\%$. The £$63$ is $70\\%$ of the original, so divide: $63 \\div 0.7 = £90$. And increasing by $20\\%$ then decreasing by $20\\%$ gives $\\times 1.2 \\times 0.8 = \\times 0.96$ — a $4\\%$ *loss*, not back to the start.",
    },
    {
      kind: "check",
      id: "f-c6",
      prompt:
        "A number is increased by $25\\%$, then the result is decreased by $20\\%$. What is the overall percentage change?",
      format: "text",
      answer: "0%",
      acceptedAnswers: ["0", "no change", "0 percent", "unchanged"],
      hint: "Multiply the two multipliers: $1.25 \\times 0.8$.",
      explanation:
        "$1.25 \\times 0.8 = 1$, so the number is unchanged — a $0\\%$ overall change. (The decreases and increases happen to cancel here exactly.)",
    },

    // ─────────────── 4. Ratio & proportion ───────────────
    {
      kind: "prose",
      heading: "4 · Ratio & proportion",
      content:
        "To **share in a ratio** $a:b:c$, add the parts to get the total number of equal shares, find the value of one share, then scale. For example, £$96$ in the ratio $3:4:5$ has $3+4+5 = 12$ shares, so one share is £$8$. Ratios behave like fractions — you can scale or simplify them by multiplying/dividing every part by the same number.",
    },
    {
      kind: "check",
      id: "f-c7",
      prompt:
        "Sweets are shared between two children in the ratio $5 : 3$. The older child gets $10$ more than the younger. How many sweets are there in total?",
      format: "numeric",
      answer: "40",
      hint: "The difference is $5 - 3 = 2$ shares, and that equals $10$.",
      explanation:
        "The gap of $2$ shares equals $10$, so one share is $5$. The total is $5+3 = 8$ shares $= 8 \\times 5 = 40$ sweets.",
    },

    // ─────────────── 5. Indices ───────────────
    {
      kind: "prose",
      heading: "5 · Indices (powers)",
      content:
        "The index laws turn products of powers into arithmetic on the exponents:",
    },
    {
      kind: "callout",
      variant: "definition",
      title: "The index laws",
      content:
        "$$\\begin{aligned} a^m \\times a^n &= a^{m+n} & \\frac{a^m}{a^n} &= a^{m-n} & (a^m)^n &= a^{mn} \\\\[4pt] a^0 &= 1 & a^{-n} &= \\frac{1}{a^n} & a^{1/n} &= \\sqrt[n]{a} \\end{aligned}$$",
    },
    {
      kind: "callout",
      variant: "trap",
      title: "Negative powers aren't negative numbers",
      content:
        "$2^{-3} = \\frac{1}{2^3} = \\frac{1}{8}$, a positive value. A negative *index* means 'reciprocal', not 'minus'. Likewise $\\left(\\frac{2}{3}\\right)^{-2} = \\left(\\frac{3}{2}\\right)^2 = \\frac{9}{4}$.",
    },
    {
      kind: "check",
      id: "f-c8",
      prompt: "Simplify $\\dfrac{a^7 \\times a^2}{a^3}$ as a single power of $a$. (Type e.g. a^6)",
      format: "text",
      answer: "a^6",
      acceptedAnswers: ["a6", "a**6"],
      hint: "Add the indices on top, then subtract the bottom one.",
      explanation:
        "Top: $a^{7+2} = a^9$. Then $a^{9-3} = a^6$.",
    },
    {
      kind: "check",
      id: "f-c9",
      prompt: "Evaluate $\\left(\\dfrac{1}{2}\\right)^{-3}$.",
      format: "numeric",
      answer: "8",
      hint: "Flip the fraction, then cube.",
      explanation:
        "$\\left(\\frac{1}{2}\\right)^{-3} = 2^3 = 8$.",
    },

    // ─────────────── 6. Surds ───────────────
    {
      kind: "prose",
      heading: "6 · Surds (exact roots)",
      content:
        "A surd is an irrational root left in exact form, like $\\sqrt{2}$. To **simplify**, pull out the largest square factor: $\\sqrt{72} = \\sqrt{36\\times 2} = 6\\sqrt{2}$. You can add or subtract only **like** surds ($3\\sqrt5 + 2\\sqrt5 = 5\\sqrt5$), and multiply using $\\sqrt{a}\\times\\sqrt{b} = \\sqrt{ab}$.",
    },
    {
      kind: "check",
      id: "f-c10",
      prompt: "Simplify $\\sqrt{50}$ to the form $k\\sqrt{2}$. (Type just the value of $k$.)",
      format: "numeric",
      answer: "5",
      hint: "$50 = 25 \\times 2$.",
      explanation:
        "$\\sqrt{50} = \\sqrt{25}\\sqrt{2} = 5\\sqrt{2}$, so $k = 5$.",
    },

    // ─────────────── 7. Standard form ───────────────
    {
      kind: "prose",
      heading: "7 · Standard form",
      content:
        "Standard form writes a number as $a \\times 10^n$ where $1 \\le a < 10$. Big numbers have positive $n$ ($3\\,200 = 3.2\\times 10^3$); small numbers have negative $n$ ($0.0047 = 4.7\\times 10^{-3}$). Count how many places the decimal point moves to get from $a$ to the original number.",
    },
    {
      kind: "check",
      id: "f-c11",
      prompt: "Write $0.00062$ in standard form. (Type e.g. 6.2x10^-4)",
      format: "text",
      answer: "6.2x10^-4",
      acceptedAnswers: ["6.2×10^-4", "6.2e-4", "6.2 \\times 10^{-4}", "6.2*10^-4"],
      hint: "One non-zero digit before the point: $6.2$. The number is less than $1$.",
      explanation:
        "Moving the point $4$ places gives $6.2$, and the number is small, so $0.00062 = 6.2\\times 10^{-4}$.",
    },

    // ─────────────── 8. Algebraic manipulation ───────────────
    {
      kind: "prose",
      heading: "8 · Algebra: collecting, expanding, factorising",
      content:
        "**Collect like terms**: $3x + 5 - x + 2 = 2x + 7$. **Expand** a single bracket by multiplying through: $3(2x-4) = 6x - 12$. **Expand double brackets** with FOIL (First, Outer, Inner, Last): $(x+3)(x+2) = x^2 + 5x + 6$. **Factorising** reverses this — pull out a common factor, or for a quadratic $x^2 + bx + c$ find two numbers multiplying to $c$ and adding to $b$.",
    },
    {
      kind: "check",
      id: "f-c12",
      prompt: "Expand and simplify $(x + 4)(x - 2)$. (Type e.g. x^2+2x-8)",
      format: "text",
      answer: "x^2+2x-8",
      acceptedAnswers: ["x^2 + 2x - 8"],
      hint: "FOIL, then collect the two $x$ terms.",
      explanation:
        "$x^2 - 2x + 4x - 8 = x^2 + 2x - 8$.",
    },
    {
      kind: "callout",
      variant: "tip",
      title: "Two identities worth memorising",
      content:
        "$$a^2 - b^2 = (a-b)(a+b) \\qquad (a+b)^2 = a^2 + 2ab + b^2$$ The first is the **difference of two squares**, the second a **perfect square**. Spotting them turns hard-looking expressions into one-liners — e.g. $49 - x^2 = (7-x)(7+x)$.",
    },
    {
      kind: "check",
      id: "f-c13",
      prompt: "Factorise $x^2 + 2x - 15$. (Type e.g. (x+5)(x-3))",
      format: "text",
      answer: "(x+5)(x-3)",
      acceptedAnswers: ["(x-3)(x+5)"],
      hint: "Two numbers multiplying to $-15$ and adding to $+2$.",
      explanation:
        "$+5$ and $-3$ work ($5\\times -3 = -15$, $5 + (-3) = 2$), so $x^2 + 2x - 15 = (x+5)(x-3)$.",
    },

    // ─────────────── 9. Linear equations ───────────────
    {
      kind: "prose",
      heading: "9 · Solving linear equations",
      content:
        "Do the same operation to both sides to isolate the unknown. Expand brackets first if needed, gather the unknowns on one side and the numbers on the other, then divide. Fractions? Multiply every term by the denominator to clear them.",
    },
    {
      kind: "check",
      id: "f-c14",
      prompt: "Solve $2(x - 1) = 5x + 7$ for $x$.",
      format: "numeric",
      answer: "-3",
      hint: "Expand the bracket, then get the $x$ terms together.",
      explanation:
        "$2x - 2 = 5x + 7 \\Rightarrow -9 = 3x \\Rightarrow x = -3$.",
    },

    // ─────────────── 10. Simultaneous equations ───────────────
    {
      kind: "prose",
      heading: "10 · Simultaneous equations",
      content:
        "Two equations, two unknowns. **Elimination**: add or subtract the equations (scaling first if needed) so one variable cancels. **Substitution**: rearrange one equation for a variable and put it into the other. Choose whichever is less work for the given numbers.",
    },
    {
      kind: "example",
      title: "Elimination in action",
      statement: "Solve $3x + 2y = 16$ and $x - 2y = 0$.",
      approach: "The $+2y$ and $-2y$ are ready to cancel — just add the equations.",
      solution:
        "Adding: $4x = 16$, so $x = 4$. Substitute into $x - 2y = 0$: $4 - 2y = 0$, so $y = 2$. Solution $(x,y) = (4,2)$.",
      alternative:
        "Substitution: $x - 2y = 0$ gives $x = 2y$; then $3(2y) + 2y = 16 \\Rightarrow 8y = 16 \\Rightarrow y = 2$, $x = 4$.",
    },
    {
      kind: "check",
      id: "f-c15",
      prompt:
        "Solve $x + y = 10$ and $x - y = 4$. What is the value of $x$?",
      format: "numeric",
      answer: "7",
      hint: "Adding the equations eliminates $y$.",
      explanation:
        "Adding: $2x = 14 \\Rightarrow x = 7$ (and $y = 3$).",
    },

    // ─────────────── 11. Quadratic equations ───────────────
    {
      kind: "prose",
      heading: "11 · Quadratic equations",
      content:
        "A quadratic equals zero: $ax^2 + bx + c = 0$. The quickest route when it factorises is the **null-factor law**: if a product is $0$, one of the factors is $0$. So $(x-2)(x-3)=0$ gives $x=2$ or $x=3$. When it doesn't factorise neatly, the **quadratic formula** always works:",
    },
    {
      kind: "callout",
      variant: "definition",
      title: "The quadratic formula",
      content:
        "For $ax^2 + bx + c = 0$, $$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}.$$ The part under the root, $b^2 - 4ac$, is the **discriminant**: positive → two solutions, zero → one, negative → none (real).",
    },
    {
      kind: "check",
      id: "f-c16",
      prompt:
        "Solve $x^2 - 5x + 6 = 0$. Type both solutions, e.g. x=2,x=3.",
      format: "text",
      answer: "x=2,x=3",
      acceptedAnswers: ["2,3", "3,2", "x=3,x=2", "2 and 3", "x=2, x=3"],
      hint: "Factorise: which two numbers multiply to $6$ and add to $5$?",
      explanation:
        "$(x-2)(x-3) = 0$, so $x = 2$ or $x = 3$.",
    },

    // ─────────────── 12. Inequalities ───────────────
    {
      kind: "prose",
      heading: "12 · Inequalities",
      content:
        "Solve inequalities exactly like equations, with one golden rule: **multiplying or dividing by a negative number reverses the inequality sign**. So $-2x > 8$ becomes $x < -4$ (not $x > -4$).",
    },
    {
      kind: "check",
      id: "f-c17",
      prompt: "Solve $5 - 3x \\le 17$. (Type e.g. x>=-4)",
      format: "text",
      answer: "x>=-4",
      acceptedAnswers: ["x ≥ -4", "x>-4 or =", "-4<=x", "x >= -4"],
      hint: "Isolate $-3x$, then divide by $-3$ and flip the sign.",
      explanation:
        "$5 - 3x \\le 17 \\Rightarrow -3x \\le 12 \\Rightarrow x \\ge -4$ (sign flips on dividing by $-3$).",
    },

    // ─────────────── 13. Rearranging formulae ───────────────
    {
      kind: "prose",
      heading: "13 · Rearranging formulae (changing the subject)",
      content:
        "Treat the target variable like the unknown in an equation and peel away everything around it using inverse operations, in reverse BIDMAS order. To make $r$ the subject of $A = \\pi r^2$: divide by $\\pi$, then square-root, giving $r = \\sqrt{A/\\pi}$.",
    },
    {
      kind: "check",
      id: "f-c18",
      prompt:
        "Make $u$ the subject of $v = u + at$. (Type e.g. u=v-at)",
      format: "text",
      answer: "u=v-at",
      acceptedAnswers: ["u = v - at", "v-at"],
      hint: "Subtract $at$ from both sides.",
      explanation: "$v = u + at \\Rightarrow u = v - at$.",
    },

    // ─────────────── 14. Coordinates & lines ───────────────
    {
      kind: "prose",
      heading: "14 · Coordinates & straight lines",
      content:
        "On a grid, the **distance** between two points and the **midpoint** are $$d = \\sqrt{(\\Delta x)^2 + (\\Delta y)^2}, \\qquad M = \\left(\\frac{x_1+x_2}{2},\\ \\frac{y_1+y_2}{2}\\right).$$ A straight line is $y = mx + c$, where the **gradient** is $m = \\dfrac{\\Delta y}{\\Delta x}$ and $c$ is where it crosses the $y$-axis.",
    },
    {
      kind: "check",
      id: "f-c19",
      prompt:
        "Find the gradient of the line through $(1, 2)$ and $(4, 11)$.",
      format: "numeric",
      answer: "3",
      hint: "Gradient $= \\frac{\\text{change in } y}{\\text{change in } x}$.",
      explanation:
        "$m = \\frac{11 - 2}{4 - 1} = \\frac{9}{3} = 3$.",
    },

    // ─────────────── 15. Core geometry ───────────────
    {
      kind: "prose",
      heading: "15 · Core geometry facts",
      content:
        "You must know these cold: angles on a straight line sum to $180^\\circ$; angles around a point sum to $360^\\circ$; angles in a triangle sum to $180^\\circ$ and in a quadrilateral to $360^\\circ$; vertically opposite angles are equal. **Pythagoras** for a right triangle, and the essential **areas**: $$a^2 + b^2 = c^2 \\qquad A_{\\text{rect}} = bh \\qquad A_{\\triangle} = \\tfrac{1}{2}bh \\qquad A_{\\circ} = \\pi r^2 \\qquad C_{\\circ} = 2\\pi r$$",
    },
    {
      kind: "callout",
      variant: "tip",
      title: "Pythagorean triples save time",
      content:
        "Memorise $(3,4,5)$, $(5,12,13)$, $(8,15,17)$ and their multiples — spotting one ($6,8,10$ is just $2\\times(3,4,5)$) avoids a surd calculation entirely.",
    },
    {
      kind: "check",
      id: "f-c20",
      prompt:
        "Two angles of a triangle are $37^\\circ$ and $58^\\circ$. What is the third angle, in degrees?",
      format: "numeric",
      answer: "85",
      hint: "They sum to $180^\\circ$.",
      explanation:
        "$180 - 37 - 58 = 85^\\circ$.",
    },
    {
      kind: "check",
      id: "f-c21",
      prompt:
        "A right-angled triangle has legs $9$ and $12$. How long is the hypotenuse?",
      format: "numeric",
      answer: "15",
      hint: "$9^2 + 12^2 = c^2$ — or spot a multiple of $(3,4,5)$.",
      explanation:
        "$\\sqrt{81 + 144} = \\sqrt{225} = 15$. (It's $3\\times(3,4,5)$.)",
    },
  ],

  workedExamples: [
    {
      kind: "example",
      title: "Multi-skill warm-up",
      statement: "Evaluate $\\dfrac{3}{4} \\times \\left(2 + \\dfrac{2}{3}\\right)$.",
      approach: "Resolve the bracket as a single fraction first, then multiply and simplify.",
      solution:
        "$2 + \\frac{2}{3} = \\frac{8}{3}$. Then $\\frac{3}{4}\\times\\frac{8}{3} = \\frac{24}{12} = 2$.",
      alternative:
        "Cancel before multiplying: $\\frac{3}{4}\\times\\frac{8}{3}$ — the $3$s cancel and $\\frac{8}{4}=2$.",
    },
    {
      kind: "example",
      title: "Reverse percentage",
      statement:
        "After a $30\\%$ reduction, a coat costs £$63$. What was the original price?",
      approach:
        "Don't add $30\\%$ back. The £$63$ represents $70\\%$ of the original, so divide by the multiplier.",
      solution:
        "Original $\\times 0.7 = 63$, so original $= 63 \\div 0.7 = £90$. Check: $30\\%$ of $90$ is $27$, and $90 - 27 = 63$. ✓",
    },
    {
      kind: "example",
      title: "An algebra-identity trick (tricky)",
      statement: "If $x + \\dfrac{1}{x} = 5$, find $x^2 + \\dfrac{1}{x^2}$ without solving for $x$.",
      approach:
        "Square the given expression — the cross-term conveniently becomes a constant.",
      solution:
        "$\\left(x + \\frac1x\\right)^2 = x^2 + 2\\cdot x\\cdot\\frac1x + \\frac{1}{x^2} = x^2 + 2 + \\frac{1}{x^2}$. So $25 = \\left(x^2 + \\frac{1}{x^2}\\right) + 2$, giving $x^2 + \\frac{1}{x^2} = 23$.",
      alternative:
        "This 'square the sum to get the sum of squares' move appears constantly in olympiad algebra — the middle term collapsing to a number is the whole point.",
    },
    {
      kind: "example",
      title: "Difference of two squares (tricky mental arithmetic)",
      statement: "Compute $103^2 - 97^2$ without a calculator.",
      approach:
        "Resist multiplying out. Recognise $a^2 - b^2 = (a-b)(a+b)$.",
      solution:
        "$103^2 - 97^2 = (103 - 97)(103 + 97) = 6 \\times 200 = 1200$.",
    },
  ],

  practiceProblemIds: [
    "fd-001",
    "fd-002",
    "fd-018",
    "fd-003",
    "fd-013",
    "fd-004",
    "fd-005",
    "fd-007",
    "fd-008",
    "fd-009",
    "fd-010",
    "fd-011",
    "fd-016",
    "fd-017",
  ],
  challengeProblemIds: [
    "fd-019",
    "fd-006",
    "fd-012",
    "fd-022",
    "fd-020",
    "fd-021",
    "fd-024",
    "fd-023",
  ],

  summary: {
    keyFormulas: [
      "BIDMAS order: Brackets, Indices, ÷×, +−.",
      "Index laws: $a^m a^n = a^{m+n}$, $a^m/a^n = a^{m-n}$, $(a^m)^n = a^{mn}$, $a^0=1$, $a^{-n}=1/a^n$.",
      "$r\\%$ increase → $\\times(1+\\frac{r}{100})$; decrease → $\\times(1-\\frac{r}{100})$.",
      "Difference of squares: $a^2 - b^2 = (a-b)(a+b)$.",
      "Quadratic formula: $x = \\dfrac{-b \\pm \\sqrt{b^2-4ac}}{2a}$.",
      "Distance: $\\sqrt{(\\Delta x)^2 + (\\Delta y)^2}$; line: $y = mx + c$.",
      "Pythagoras: $a^2 + b^2 = c^2$; circle area $\\pi r^2$, circumference $2\\pi r$.",
    ],
    bigIdeas: [
      "Speed and accuracy here buy you thinking time everywhere else.",
      "A multiplier turns any percentage change into a single multiplication.",
      "Factorising and the two key identities convert hard expressions into easy ones.",
    ],
    patternTips: [
      "Convert mixed numbers to improper fractions before operating; cancel early.",
      "Reverse percentage → divide by the multiplier, never add the percent back.",
      "See $a^2 - b^2$ or a near-round square difference → difference of two squares.",
      "Spot Pythagorean triples to skip surd work.",
    ],
    traps: [
      "Left-to-right instead of BIDMAS; $-3^2 = -9$ not $9$.",
      "Adding fraction denominators; forgetting to flip when dividing.",
      "Sign slips; forgetting to reverse an inequality when dividing by a negative.",
      "'Up x% then down x%' is a net loss, not a return to the start.",
      "A negative power gives a reciprocal, not a negative number.",
    ],
    revisionNotes: [
      "Drill mental arithmetic, times tables, and squares up to $15^2$ to automaticity.",
      "Practise fraction ↔ decimal ↔ percentage conversions until instant.",
      "Rehearse factorising quadratics and the two identities until you spot them on sight.",
      "Re-derive the index and surd rules from scratch so you never misremember them under pressure.",
    ],
  },
};
