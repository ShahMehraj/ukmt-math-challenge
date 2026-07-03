import type { Chapter } from "@/lib/types";

/**
 * Algebraic Manipulation & Equations — a comprehensive standalone chapter
 * drawing from Hall & Knight's "Higher Algebra" (Chapters VIII–X), explained
 * lucidly for Year 9–11 competition students preparing for IMC and Hamilton.
 *
 * Covers: expanding & factorising, algebraic identities, linear equations &
 * word problems, simultaneous equations, quadratics & discriminant, Vieta's
 * formulas, equations reducible to quadratics, inequalities from algebra.
 */
export const algebraChapter: Chapter = {
  id: "ch-algebra-1",
  title: "Algebraic Manipulation & Equations",
  topic: "algebra",
  order: 30,
  examFocus: "both",
  difficulty: "medium",
  estMinutes: 100,
  prerequisites: ["ch-found-1"],
  blurb:
    "From expanding brackets at speed to wielding Vieta's formulas and the discriminant — this chapter builds your algebraic toolkit from the ground up. Every technique is motivated by competition problems and illustrated with the kind of 'hidden structure' reasoning that turns a 10-minute slog into a 2-minute insight.",

  intro: {
    whyItMatters:
      "Algebra is the language of competition mathematics. Almost every IMC and Hamilton problem — even those labelled 'geometry' or 'number theory' — eventually reduces to algebraic manipulation. The difference between a gold certificate and a bronze often comes down to how quickly and accurately you can factorise, substitute, or exploit an identity. This chapter gives you the fluency to do that.",
    whereItAppears:
      "IMC Q10–20 routinely test factorisation speed, completing the square, and 'find $k$' problems. Hamilton Q1–3 love simultaneous equations with a twist, quadratic constraints, and 'prove this expression is always positive' questions. The discriminant condition and Vieta's formulas appear in at least one Hamilton question most years.",
    typicalPatterns: [
      "Factorise a disguised difference of squares or sum/difference of cubes.",
      "Set up and solve simultaneous equations from a word problem.",
      "Find values of a parameter $k$ for which a quadratic has equal/real/rational roots.",
      "Compute $\\alpha^2 + \\beta^2$ or $|\\alpha - \\beta|$ using Vieta's without finding the roots.",
      "Substitute $u = x + 1/x$ or $u = x^2$ to reduce a harder equation to a quadratic.",
      "Prove an expression is always positive using the discriminant or AM-GM.",
    ],
    commonMistakes: [
      "Sign errors when expanding $(a - b)^2$ — forgetting the middle term is $-2ab$, not $+2ab$.",
      "Attempting to factorise $a^2 + b^2$ over the reals (it doesn't factorise!).",
      "Confusing the sum of roots $-b/a$ with $b/a$ (missing the minus sign).",
      "Forgetting to check for extraneous solutions after squaring both sides.",
      "Applying the discriminant condition to a non-standard form (always rearrange to $ax^2+bx+c=0$ first).",
      "In simultaneous equations, substituting back into the wrong equation and missing errors.",
    ],
  },

  lesson: [
    // ═══════════════════════════════════════════════════════════════════════════
    // SECTION 1: Expanding, factorising & algebraic identities (comprehensive)
    // ═══════════════════════════════════════════════════════════════════════════
    {
      kind: "prose",
      heading: "1 · Expanding, factorising & algebraic identities",
      content:
        "This section is your identity arsenal — the formulae you need at your fingertips for every competition. Expanding and factorising are two sides of the same coin: every identity can be read left-to-right (factorising) or right-to-left (expanding).\n\n**Expanding brackets:** $(a + b)(c + d) = ac + ad + bc + bd$. With practice this should be instantaneous. For triple brackets $(a+b)(c+d)(e+f)$, expand two first — if you spot conjugates like $(x+1)(x-1)$, do those to get a difference of squares.\n\n**Factorising by grouping:** Four terms? Look for shared factors in pairs:\n$$ax + ay + bx + by = a(x+y) + b(x+y) = (a+b)(x+y).$$",
    },
    {
      kind: "callout",
      variant: "definition",
      title: "Identity toolkit — squares",
      content:
        "• $(a+b)^2 = a^2 + 2ab + b^2$\n• $(a-b)^2 = a^2 - 2ab + b^2$\n• $(a+b)(a-b) = a^2 - b^2$\n• $(a+b)^2 + (a-b)^2 = 2(a^2 + b^2)$\n• $(a+b)^2 - (a-b)^2 = 4ab$\n• $(a+b+c)^2 = a^2 + b^2 + c^2 + 2(ab + bc + ca)$\n\nMore generally: $(x_1 + x_2 + \\cdots + x_n)^2 = \\sum x_i^2 + 2\\sum_{i<j} x_i x_j$.",
    },
    {
      kind: "callout",
      variant: "definition",
      title: "Identity toolkit — cubes",
      content:
        "• $(a+b)^3 = a^3 + b^3 + 3ab(a+b)$\n• $(a-b)^3 = a^3 - b^3 - 3ab(a-b)$\n• $a^3 + b^3 = (a+b)(a^2 - ab + b^2)$\n• $a^3 - b^3 = (a-b)(a^2 + ab + b^2)$\n• $a^3 + b^3 + c^3 - 3abc = (a+b+c)(a^2+b^2+c^2-ab-bc-ca)$\n\nSpecial case: if $a + b + c = 0$, then $a^3 + b^3 + c^3 = 3abc$.",
    },
    {
      kind: "callout",
      variant: "definition",
      title: "Identity toolkit — $a^n \\pm b^n$ divisibility",
      content:
        "• $a^n - b^n$ is divisible by $(a-b)$ for ALL $n$\n• $a^n - b^n$ is divisible by $(a+b)$ only when $n$ is even\n• $a^n + b^n$ is divisible by $(a+b)$ only when $n$ is odd\n• $a^n + b^n$ is never divisible by $(a-b)$\n\nThe explicit factorisation: $a^n - b^n = (a-b)(a^{n-1} + a^{n-2}b + \\cdots + b^{n-1})$.\n\nExample: $x^5 + 32 = (x+2)(x^4 - 2x^3 + 4x^2 - 8x + 16)$.",
    },
    {
      kind: "callout",
      variant: "definition",
      title: "Identity toolkit — special factorisations",
      content:
        "• $a^4 + 4b^4 = (a^2 + 2b^2 + 2ab)(a^2 + 2b^2 - 2ab)$ — Sophie Germain identity\n  (Trick: add and subtract $4a^2b^2$ to create $(a^2+2b^2)^2 - (2ab)^2$.)\n\n• $a^2 + b^2 + c^2 - ab - bc - ca = \\frac{1}{2}[(a-b)^2 + (b-c)^2 + (c-a)^2] \\ge 0$\n  (Always non-negative; equals $0$ iff $a = b = c$. Competition favourite for inequalities.)",
    },
    {
      kind: "callout",
      variant: "tip",
      title: "Speed tricks with identities",
      content:
        "• $47 \\times 53 = (50-3)(50+3) = 2500 - 9 = 2491$. (Difference of squares)\n• $99^2 = (100-1)^2 = 10000 - 200 + 1 = 9801$.\n• $x^4 - 1 = (x^2+1)(x^2-1) = (x^2+1)(x+1)(x-1)$.\n• Spotting disguised squares: $4a^2 - 12ab + 9b^2 = (2a-3b)^2$.\n• If $x + 1/x = 5$, then $x^2 + 1/x^2 = (x + 1/x)^2 - 2 = 23$.\n\nAlways scan for $A^2 - B^2$, $(A \\pm B)^2$, or $(A \\pm B)^3$ patterns — even when $A$, $B$ are themselves compound expressions.",
    },
    {
      kind: "check",
      id: "alg-c1",
      prompt:
        "Factorise $x^3 - 27$ completely.",
      format: "text",
      answer: "(x-3)(x^2+3x+9)",
      acceptedAnswers: ["(x - 3)(x^2 + 3x + 9)", "(x-3)(x² +3x+9)"],
      hint: "This is a difference of cubes: $x^3 - 3^3$. Apply $a^3 - b^3 = (a-b)(a^2+ab+b^2)$.",
      explanation:
        "$x^3 - 27 = x^3 - 3^3 = (x-3)(x^2 + 3x + 9)$. The quadratic factor has discriminant $9 - 36 = -27 < 0$, so it doesn't factorise further over the reals.",
    },
    {
      kind: "check",
      id: "alg-c2",
      prompt: "Without a calculator, compute $997 \\times 1003$.",
      format: "numeric",
      answer: "999991",
      hint: "Write $997 = 1000 - 3$ and $1003 = 1000 + 3$. Difference of squares.",
      explanation:
        "$997 \\times 1003 = (1000-3)(1000+3) = 1000^2 - 9 = 999991$.",
    },
    {
      kind: "check",
      id: "alg-c3",
      prompt:
        "Factorise $x^3 + x^2 - x - 1$ by grouping.",
      format: "text",
      answer: "(x+1)^2(x-1)",
      acceptedAnswers: [
        "(x+1)(x+1)(x-1)",
        "(x-1)(x+1)^2",
        "(x+1)^2 (x-1)",
        "(x-1)(x+1)(x+1)",
      ],
      hint: "Group as $(x^3 + x^2) + (-x - 1) = x^2(x+1) - 1(x+1)$.",
      explanation:
        "$x^3 + x^2 - x - 1 = x^2(x+1) - 1(x+1) = (x^2-1)(x+1) = (x+1)(x-1)(x+1) = (x+1)^2(x-1)$.",
    },
    {
      kind: "check",
      id: "alg-c4",
      prompt:
        "If $a + b = 7$ and $ab = 10$, find $a^2 + b^2$.",
      format: "numeric",
      answer: "29",
      hint: "Use $(a+b)^2 = a^2 + 2ab + b^2$, so $a^2+b^2 = (a+b)^2 - 2ab$.",
      explanation:
        "$a^2 + b^2 = (a+b)^2 - 2ab = 49 - 20 = 29$.",
    },
    {
      kind: "check",
      id: "alg-c5",
      prompt:
        "If $x + y + z = 10$ and $x^2 + y^2 + z^2 = 40$, find $xy + yz + zx$.",
      format: "numeric",
      answer: "30",
      hint: "$(x+y+z)^2 = x^2+y^2+z^2 + 2(xy+yz+zx)$.",
      explanation:
        "$(x+y+z)^2 = x^2+y^2+z^2 + 2(xy+yz+zx)$, so $100 = 40 + 2(xy+yz+zx)$, giving $xy+yz+zx = 30$.",
    },
    {
      kind: "check",
      id: "alg-c6",
      prompt:
        "If $a + b + c = 0$, what is the value of $a^3 + b^3 + c^3$ in terms of $a$, $b$, $c$?",
      format: "text",
      answer: "3abc",
      acceptedAnswers: ["3abc", "3 abc", "3*abc"],
      hint: "Use the identity $a^3+b^3+c^3-3abc = (a+b+c)(\\ldots)$. What happens when the first factor is zero?",
      explanation:
        "$a^3+b^3+c^3-3abc = (a+b+c)(a^2+b^2+c^2-ab-bc-ca)$. Since $a+b+c = 0$, the right side is $0$, so $a^3+b^3+c^3 = 3abc$.",
    },
    {
      kind: "check",
      id: "alg-c6b",
      prompt:
        "If $x^2 - 4x + 1 = 0$, find the value of $x^3 + \\dfrac{1}{x^3}$.",
      format: "numeric",
      answer: "52",
      hint: "From $x^2 - 4x + 1 = 0$, divide by $x$ to get $x + 1/x = 4$. Then use $(a+b)^3 = a^3 + b^3 + 3ab(a+b)$.",
      explanation:
        "Dividing by $x$: $x - 4 + 1/x = 0$, so $x + 1/x = 4$.\n\nNow $(x + 1/x)^3 = x^3 + 1/x^3 + 3(x + 1/x)$.\n\nSo $64 = x^3 + 1/x^3 + 12$, giving $x^3 + 1/x^3 = 52$.\n\n(This is a classic S.Chand / competition pattern!)",
    },
    {
      kind: "check",
      id: "alg-c6c",
      prompt:
        "If $a + b + c = 0$, what is the value of $a^4 + b^4 + c^4 - 2a^2b^2 - 2b^2c^2 - 2c^2a^2$? (Hint: think about $a^3+b^3+c^3 = 3abc$ and the structure of the expression.)",
      format: "numeric",
      answer: "0",
      hint: "Rewrite the expression as $(a^2+b^2+c^2)^2 - 4(a^2b^2+b^2c^2+c^2a^2)$... or factor it directly. Notice it equals $(a+b+c)(-a+b+c)(a-b+c)(a+b-c)$.",
      explanation:
        "The expression $a^4+b^4+c^4-2a^2b^2-2b^2c^2-2c^2a^2$ factors as:\n$(a+b+c)(-a+b+c)(a-b+c)(a+b-c)$.\n\nSince $a+b+c = 0$, the whole product is $0$.",
    },
    {
      kind: "check",
      id: "alg-c6d",
      prompt:
        "Is $x^{29} - x^{24} + x^{13} - 1$ divisible by $(x-1)$? (Type 'yes' or 'no'.)",
      format: "text",
      answer: "yes",
      acceptedAnswers: ["Yes", "YES", "yes"],
      hint: "By the factor theorem, $(x-1)$ divides $f(x)$ if and only if $f(1) = 0$. Check $f(1)$.",
      explanation:
        "$f(1) = 1 - 1 + 1 - 1 = 0$. So yes, $(x-1)$ is a factor.\n\n(Alternatively: group as $(x^{29}-x^{24}) + (x^{13}-1) = x^{24}(x^5-1) + (x^{13}-1)$, and both $x^5-1$ and $x^{13}-1$ are divisible by $x-1$ since $a^n-b^n$ is always divisible by $a-b$.)",
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // SECTION 2: Linear equations & forming equations from words
    // ═══════════════════════════════════════════════════════════════════════════
    {
      kind: "prose",
      heading: "2 · Linear equations & forming equations from words",
      content:
        "A **linear equation** in one variable has the form $ax + b = 0$ (solution: $x = -b/a$). The algebra is trivial — the *skill* in competitions is **forming** the equation from a word problem, and handling the traps that arise with fractions, absolute values, and multi-step reasoning.\n\n**Systematic approach to word problems:**\n\n1. **Read** the problem twice. Identify what's being asked.\n2. **Define** your variable(s) clearly: 'Let $x$ = the number of apples Alice has.'\n3. **Translate** each sentence into an equation. Key phrases:\n   - 'is' / 'equals' → $=$\n   - 'more than' → $+$ ;  'less than' → $-$\n   - 'times' / 'product' → $\\times$ ;  'of' (with fractions) → $\\times$\n4. **Solve** the equation.\n5. **Check** your answer makes sense in the original context.",
    },
    {
      kind: "callout",
      variant: "definition",
      title: "Key problem types at a glance",
      content:
        "• **Age problems:** Define ages now; translate 'in $n$ years' as $+n$, '$n$ years ago' as $-n$.\n• **Digit problems:** Two-digit number $= 10t + u$; three-digit $= 100h + 10t + u$. Reversed $= 10u + t$.\n• **Speed/distance/time:** $d = st$. Same distance → equate $st$ expressions. Meeting/catching → add or subtract.\n• **Work-rate:** Rate $= 1/\\text{time}$. Together: add rates. Leak/obstruction: subtract rate.\n• **Fraction equations:** Multiply both sides by the LCM of denominators to clear fractions first.\n• **Absolute value:** $|f(x)| = k$ splits into $f(x) = k$ OR $f(x) = -k$ (always check both!).",
    },
    {
      kind: "callout",
      variant: "trap",
      title: "The 'less than' trap",
      content:
        "'$5$ less than $x$' means $x - 5$, NOT $5 - x$.\n'$x$ is $3$ less than $y$' means $x = y - 3$.\n\nThe number being subtracted FROM comes second in the English but first in the algebra. Read twice!",
    },
    {
      kind: "prose",
      heading: "",
      content:
        "**Fractional (rational) equations**\n\nWhen variables appear in denominators, multiply through by the LCM — but always check for **extraneous solutions** (values that make a denominator zero).\n\nExample: Solve $\\dfrac{3}{x-2} + \\dfrac{1}{x+1} = \\dfrac{4}{x^2 - x - 2}$.\n\nNotice $x^2 - x - 2 = (x-2)(x+1)$, so multiply both sides by $(x-2)(x+1)$:\n$$3(x+1) + 1(x-2) = 4$$\n$$3x + 3 + x - 2 = 4 \\implies 4x + 1 = 4 \\implies x = \\tfrac{3}{4}.$$\n\nCheck: $x = 3/4$ doesn't make any denominator zero. ✓\n\n**Absolute value equations**\n\nThe key rule: $|A| = k$ means $A = k$ or $A = -k$ (for $k \\ge 0$).\n\nFor $|A| = |B|$: either $A = B$ or $A = -B$.\n\nExample: $|2x - 5| = 3$ gives $2x - 5 = 3$ (so $x = 4$) or $2x - 5 = -3$ (so $x = 1$). Both valid.",
    },
    {
      kind: "example",
      title: "Digit problem (IMC-style)",
      statement:
        "A two-digit number is 4 times the sum of its digits. If 18 is added to the number, the digits are reversed. Find the number.",
      approach:
        "Let tens digit $= t$, units $= u$. Number $= 10t + u$. Form two equations from the two conditions.",
      solution:
        "Condition 1: $10t + u = 4(t + u)$, so $6t = 3u$, i.e. $u = 2t$.\n\nCondition 2: $10t + u + 18 = 10u + t$, so $9t - 9u = -18$, i.e. $t - u = -2$.\n\nSubstitute $u = 2t$: $t - 2t = -2$, so $t = 2$, $u = 4$.\n\nThe number is $24$. Check: $4(2+4) = 24$ ✓; $24 + 18 = 42$ (reversed) ✓.",
    },
    {
      kind: "example",
      title: "Speed/distance/time (competition classic)",
      statement:
        "A cyclist travels from A to B at 15 km/h, and returns from B to A at 10 km/h. The return journey takes 20 minutes longer. Find the distance from A to B.",
      approach:
        "Let $d$ = distance. Time there $= d/15$, time back $= d/10$. The difference is 20 minutes $= 1/3$ hour.",
      solution:
        "$\\dfrac{d}{10} - \\dfrac{d}{15} = \\dfrac{1}{3}$.\n\nLCM of 10, 15 is 30: $\\dfrac{3d}{30} - \\dfrac{2d}{30} = \\dfrac{1}{3}$, so $\\dfrac{d}{30} = \\dfrac{1}{3}$, giving $d = 10$ km.\n\nCheck: Time there $= 10/15 = 2/3$ hr = 40 min; time back $= 10/10 = 1$ hr = 60 min. Difference = 20 min. ✓",
    },
    {
      kind: "check",
      id: "alg-c7",
      prompt:
        "Alice is currently 3 times as old as Bob. In 12 years, she will be twice his age. How old is Bob now?",
      format: "numeric",
      answer: "12",
      hint: "Let Bob's current age be $b$. Then Alice is $3b$. In 12 years: $3b + 12 = 2(b + 12)$.",
      explanation:
        "Let Bob $= b$, Alice $= 3b$. In 12 years: $3b + 12 = 2(b + 12) = 2b + 24$. So $b = 12$.",
    },
    {
      kind: "check",
      id: "alg-c8",
      prompt:
        "Pipe A fills a tank in 6 hours, pipe B fills it in 9 hours. Working together, how many hours do they take? (Give as a fraction.)",
      format: "text",
      answer: "18/5",
      acceptedAnswers: ["3.6", "18/5"],
      hint: "Combined rate $= 1/6 + 1/9$. Time $= 1 / (\\text{combined rate})$.",
      explanation:
        "Rate of A $= 1/6$, rate of B $= 1/9$. Combined $= 5/18$. Time $= 18/5$ hours $= 3.6$ hours.",
    },
    {
      kind: "check",
      id: "alg-c8b",
      prompt:
        "A three-digit number equals $11$ times the sum of its digits. The sum of the hundreds and units digits equals the tens digit. Find the number.",
      format: "numeric",
      answer: "198",
      hint: "Let digits be $h, t, u$. You have: $100h+10t+u = 11(h+t+u)$ and $h+u = t$. Simplify the first equation.",
      explanation:
        "$100h+10t+u = 11(h+t+u) = 11h+11t+11u$.\nSo $89h - t - 10u = 0$, i.e. $t = 89h - 10u$.\n\nCombine with $t = h + u$: $h + u = 89h - 10u$, so $11u = 88h$, giving $u = 8h$.\n\nSince $u$ is a single digit (1–9) and $h \\ge 1$: $h = 1$, $u = 8$, $t = 1 + 8 = 9$.\n\nThe number is $198$. Check: $1+9+8 = 18$; $11 \\times 18 = 198$ ✓.",
    },
    {
      kind: "check",
      id: "alg-c8c",
      prompt:
        "Solve: $\\dfrac{3x-1}{4} - \\dfrac{x+1}{3} = \\dfrac{x-2}{6}$.",
      format: "numeric",
      answer: "1",
      hint: "Multiply every term by 12 (the LCM of 4, 3, and 6) to clear all denominators.",
      explanation:
        "Multiply by 12: $3(3x-1) - 4(x+1) = 2(x-2)$.\n$9x - 3 - 4x - 4 = 2x - 4$.\n$5x - 7 = 2x - 4$.\n$3x = 3$, so $x = 1$.",
    },
    {
      kind: "check",
      id: "alg-c8d",
      prompt:
        "Find the sum of all values of $x$ satisfying $|3x - 6| = 12$.",
      format: "numeric",
      answer: "4",
      hint: "$|3x-6| = 12$ gives two cases: $3x - 6 = 12$ or $3x - 6 = -12$. Solve each, then add.",
      explanation:
        "Case 1: $3x - 6 = 12 \\implies x = 6$.\nCase 2: $3x - 6 = -12 \\implies x = -2$.\n\nSum $= 6 + (-2) = 4$.",
    },
    {
      kind: "check",
      id: "alg-c8e",
      prompt:
        "A train covers 360 km at a uniform speed. If the speed were 5 km/h more, it would take 1 hour less. Find the original speed in km/h.",
      format: "numeric",
      answer: "40",
      hint: "Let speed $= v$. Time $= 360/v$. New time $= 360/(v+5) = 360/v - 1$. Clear denominators.",
      explanation:
        "$\\frac{360}{v} - \\frac{360}{v+5} = 1$.\n\nMultiply by $v(v+5)$: $360(v+5) - 360v = v(v+5)$.\n$1800 = v^2 + 5v$.\n$v^2 + 5v - 1800 = 0$.\n$(v+45)(v-40) = 0$.\n\nSince $v > 0$: $v = 40$ km/h.\n\nCheck: Time at 40 = 9 hrs; at 45 = 8 hrs. Difference = 1 hr. ✓",
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // SECTION 4: Simultaneous equations
    // ═══════════════════════════════════════════════════════════════════════════
    {
      kind: "prose",
      heading: "3 · Simultaneous equations",
      content:
        "Two (or more) equations in two (or more) unknowns that must hold simultaneously. The standard methods:\n\n**Substitution:** Solve one equation for one variable, substitute into the other.\n\n**Elimination:** Multiply equations by suitable constants so that adding/subtracting eliminates one variable.\n\n**For three unknowns:** Use elimination twice to reduce to two equations in two unknowns, then solve as usual.\n\n**Symmetric systems:** If a system is symmetric in $x$ and $y$ (swapping them gives the same equations), introduce $s = x+y$ and $p = xy$. The equations often simplify dramatically.",
    },
    {
      kind: "callout",
      variant: "definition",
      title: "Cross-multiplication method (using $2 \\times 2$ determinants)",
      content:
        "For the system (written with constant on the same side):\n$$a_1 x + b_1 y + c_1 = 0 \\qquad a_2 x + b_2 y + c_2 = 0$$\n\nWrite the coefficients in a cyclic row — then repeat the first column at the end:\n$$\\begin{array}{cccc} b_1 & c_1 & a_1 & b_1 \\\\ b_2 & c_2 & a_2 & b_2 \\end{array}$$\n\nNow form three $2 \\times 2$ determinants by sliding a window across:\n$$\\frac{x}{\\begin{vmatrix} b_1 & c_1 \\\\ b_2 & c_2 \\end{vmatrix}} = \\frac{y}{\\begin{vmatrix} c_1 & a_1 \\\\ c_2 & a_2 \\end{vmatrix}} = \\frac{1}{\\begin{vmatrix} a_1 & b_1 \\\\ a_2 & b_2 \\end{vmatrix}}$$\n\nwhere $\\begin{vmatrix} p & q \\\\ r & s \\end{vmatrix} = ps - qr$.\n\nSo: $x = \\dfrac{b_1 c_2 - b_2 c_1}{a_1 b_2 - a_2 b_1}$, $\\; y = \\dfrac{c_1 a_2 - c_2 a_1}{a_1 b_2 - a_2 b_1}$.\n\n**Memory trick:** Write $b, c, a, b$ across the top (start from the column *after* $x$'s coefficient, cycle through, and repeat the first). The denominators under $x$, $y$, and $1$ are consecutive $2 \\times 2$ determinants sliding one column each time.",
    },
    {
      kind: "callout",
      variant: "tip",
      title: "Quick example of cross-multiplication",
      content:
        "Solve $2x + 3y - 7 = 0$ and $3x - 2y + 4 = 0$.\n\nCoefficient row (start from $b$, cycle, repeat first):\n$$\\begin{array}{cccc} 3 & -7 & 2 & 3 \\\\ -2 & 4 & 3 & -2 \\end{array}$$\n\nDeterminants:\n• Under $x$: $3 \\cdot 4 - (-2)(-7) = 12 - 14 = -2$\n• Under $y$: $(-7)(3) - (4)(2) = -21 - 8 = -29$\n• Under $1$: $2(-2) - 3(3) = -4 - 9 = -13$\n\nSo $\\dfrac{x}{-2} = \\dfrac{y}{-29} = \\dfrac{1}{-13}$.\n\n$x = \\dfrac{-2}{-13} = \\dfrac{2}{13}$, $\\; y = \\dfrac{-29}{-13} = \\dfrac{29}{13}$.",
    },
    {
      kind: "callout",
      variant: "tip",
      title: "Symmetric system trick",
      content:
        "For equations like $x + y = 5$ and $x^2 + y^2 = 17$, don't solve for individual values immediately. Instead:\n\n• You already have $s = x + y = 5$.\n• From $x^2 + y^2 = s^2 - 2p$: $17 = 25 - 2p$, so $p = xy = 4$.\n• Now $x$ and $y$ are roots of $t^2 - st + p = 0$, i.e. $t^2 - 5t + 4 = 0$.\n\nThis approach scales beautifully to harder problems.",
    },
    {
      kind: "example",
      title: "Three unknowns by elimination",
      statement:
        "Solve: $x + y + z = 6$, $x - y + z = 2$, $x + y - z = 4$.",
      approach:
        "Add and subtract equations strategically to eliminate variables one at a time.",
      solution:
        "Label them (1), (2), (3).\n\n(1) + (2): $2x + 2z = 8$, so $x + z = 4$ ... (4).\n\n(1) $-$ (2): $2y = 4$, so $y = 2$.\n\nFrom (3): $x + 2 - z = 4$, so $x - z = 2$ ... (5).\n\nAdding (4) and (5): $2x = 6$, so $x = 3$. Then $z = 4 - 3 = 1$.\n\nSolution: $x = 3$, $y = 2$, $z = 1$. Check in all three: $3+2+1=6$ ✓, $3-2+1=2$ ✓, $3+2-1=4$ ✓.",
    },
    {
      kind: "check",
      id: "alg-c9",
      prompt:
        "Solve: $3x + 2y = 16$ and $x - y = 2$. What is the value of $x + y$?",
      format: "numeric",
      answer: "6",
      hint: "From the second equation, $x = y + 2$. Substitute into the first.",
      explanation:
        "From $x - y = 2$: $x = y + 2$. Substitute: $3(y+2) + 2y = 16$, so $5y + 6 = 16$, $y = 2$. Then $x = 4$. Check: $3(4)+2(2) = 16$ ✓ and $4-2=2$ ✓. So $x + y = 6$.",
    },
    {
      kind: "check",
      id: "alg-c10",
      prompt:
        "If $x + y = 5$ and $xy = 6$, find $x^2 + y^2$.",
      format: "numeric",
      answer: "13",
      hint: "$x^2 + y^2 = (x+y)^2 - 2xy$.",
      explanation:
        "$x^2 + y^2 = (x+y)^2 - 2xy = 25 - 12 = 13$.",
    },
    {
      kind: "check",
      id: "alg-c11",
      prompt:
        "If $x + y = 9$ and $x^2 + y^2 = 53$, find $xy$.",
      format: "numeric",
      answer: "14",
      hint: "$(x+y)^2 = x^2 + y^2 + 2xy$, so $2xy = (x+y)^2 - (x^2+y^2)$.",
      explanation:
        "$2xy = (x+y)^2 - (x^2+y^2) = 81 - 53 = 28$, so $xy = 14$.",
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // SECTION 5: Quadratic equations & the discriminant
    // ═══════════════════════════════════════════════════════════════════════════
    {
      kind: "prose",
      heading: "4 · Quadratic equations & the discriminant",
      content:
        "A quadratic equation has the standard form $ax^2 + bx + c = 0$ (where $a \\neq 0$). The solutions come from the **quadratic formula**:\n\n$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$\n\nThe expression under the square root, $\\Delta = b^2 - 4ac$, is called the **discriminant**. It tells you everything about the nature of the roots WITHOUT solving:\n\n• $\\Delta > 0$: two distinct real roots.\n• $\\Delta = 0$: one repeated (equal) root: $x = -b/(2a)$.\n• $\\Delta < 0$: no real roots (two complex conjugate roots).\n\nFor competition purposes, you often need: **'Find the value(s) of $k$ such that the equation has equal roots'** — this means setting $\\Delta = 0$ and solving for $k$.\n\n**Completing the square** is the other key technique:\n$$ax^2 + bx + c = a\\left(x + \\frac{b}{2a}\\right)^2 + c - \\frac{b^2}{4a}$$\n\nThis reveals the vertex of the parabola at $x = -b/(2a)$ with value $c - b^2/(4a)$, and is the gateway to proving expressions are always positive or finding their range.",
    },
    {
      kind: "callout",
      variant: "definition",
      title: "The discriminant",
      content:
        "For $ax^2 + bx + c = 0$:\n$$\\Delta = b^2 - 4ac$$\n• $\\Delta > 0$ → two distinct real roots\n• $\\Delta = 0$ → equal (repeated) roots\n• $\\Delta < 0$ → no real roots\n\nAdditionally, if $a, b, c$ are rational:\n• $\\Delta$ is a perfect square → roots are rational\n• $\\Delta > 0$ but not a perfect square → roots are irrational (conjugate surds)",
    },
    {
      kind: "callout",
      variant: "warning",
      title: "Always rearrange to standard form first!",
      content:
        "The discriminant formula $b^2 - 4ac$ only works when the equation is in the form $ax^2 + bx + c = 0$. If you have $2x^2 = 5x - 3$, you MUST rearrange to $2x^2 - 5x + 3 = 0$ before identifying $a=2$, $b=-5$, $c=3$. Getting the signs of $b$ and $c$ wrong is the #1 discriminant error.",
    },
    {
      kind: "example",
      title: "Finding $k$ for equal roots",
      statement:
        "Find the values of $k$ for which $x^2 + kx + 9 = 0$ has equal roots.",
      approach:
        "Equal roots means $\\Delta = 0$. Here $a=1$, $b=k$, $c=9$.",
      solution:
        "$\\Delta = k^2 - 4(1)(9) = k^2 - 36 = 0$. So $k^2 = 36$, giving $k = \\pm 6$.\n\nCheck: $x^2 + 6x + 9 = (x+3)^2 = 0$ ✓ (repeated root $x = -3$). $x^2 - 6x + 9 = (x-3)^2 = 0$ ✓ (repeated root $x = 3$).",
    },
    {
      kind: "check",
      id: "alg-c12",
      prompt:
        "For what value of $k$ does $2x^2 - 8x + k = 0$ have equal roots?",
      format: "numeric",
      answer: "8",
      hint: "Set $\\Delta = 0$: $(-8)^2 - 4(2)(k) = 0$.",
      explanation:
        "$\\Delta = 64 - 8k = 0$, so $k = 8$. The equation becomes $2x^2 - 8x + 8 = 0$, i.e. $2(x-2)^2 = 0$, repeated root $x = 2$. ✓",
    },
    {
      kind: "check",
      id: "alg-c13",
      prompt:
        "By completing the square, find the minimum value of $f(x) = x^2 - 6x + 14$.",
      format: "numeric",
      answer: "5",
      hint: "$x^2 - 6x + 14 = (x-3)^2 + \\text{something}$.",
      explanation:
        "$x^2 - 6x + 14 = (x-3)^2 - 9 + 14 = (x-3)^2 + 5$. Since $(x-3)^2 \\ge 0$, the minimum value is $5$, achieved when $x = 3$.",
    },
    {
      kind: "check",
      id: "alg-c14",
      prompt:
        "The equation $x^2 + 4x + k = 0$ has two distinct real roots. What is the range of $k$? (Type as an inequality, e.g. 'k < 5'.)",
      format: "text",
      answer: "k < 4",
      acceptedAnswers: ["k<4", "k < 4"],
      hint: "Two distinct real roots means $\\Delta > 0$: $16 - 4k > 0$.",
      explanation:
        "$\\Delta = 16 - 4k > 0 \\Rightarrow k < 4$. For $k < 4$, the equation has two distinct real roots.",
    },

    {
      kind: "callout",
      variant: "definition",
      title: "Signs and special conditions on roots",
      content:
        "For $ax^2 + bx + c = 0$ with real roots $\\alpha, \\beta$:\n\n• Both roots positive: $\\alpha+\\beta > 0$ AND $\\alpha\\beta > 0$ (i.e. $-b/a > 0$ and $c/a > 0$)\n• Both roots negative: $\\alpha+\\beta < 0$ AND $\\alpha\\beta > 0$\n• Roots of opposite sign: $\\alpha\\beta < 0$ (i.e. $c/a < 0$, meaning $a$ and $c$ have opposite signs)\n• Roots equal in magnitude, opposite in sign: $\\alpha + \\beta = 0$, i.e. $b = 0$\n• Reciprocal roots ($\\beta = 1/\\alpha$): $\\alpha\\beta = 1$, i.e. $c = a$\n• One root is zero: $\\alpha\\beta = 0$, i.e. $c = 0$",
    },
    {
      kind: "callout",
      variant: "definition",
      title: "Condition when a relationship between roots is given",
      content:
        "If one root of $ax^2 + bx + c = 0$ is $k$ times the other (i.e. $\\beta = k\\alpha$):\n\n• $\\alpha + k\\alpha = -b/a \\implies \\alpha = -b/[a(1+k)]$\n• $\\alpha \\cdot k\\alpha = c/a \\implies k\\alpha^2 = c/a$\n\nEliminating $\\alpha$: substitute the first into the second to get the **condition on coefficients**:\n$$kb^2 = (1+k)^2 \\cdot ac$$\n\nExample: one root is double the other ($k = 2$): condition is $2b^2 = 9ac$.",
    },
    {
      kind: "callout",
      variant: "definition",
      title: "Common roots of two quadratics",
      content:
        "If $ax^2 + bx + c = 0$ and $a_1x^2 + b_1x + c_1 = 0$ have one common root $\\alpha$:\n\n• $(ca_1 - c_1a)^2 = (bc_1 - b_1c)(ab_1 - a_1b)$\n\nThis comes from cross-multiplication: both equations satisfied by $\\alpha$ gives\n$$\\frac{\\alpha^2}{bc_1-b_1c} = \\frac{\\alpha}{ca_1-c_1a} = \\frac{1}{ab_1-a_1b}$$\n\nEliminating $\\alpha$ between the second and third fractions, then equating to the first, yields the condition.",
    },
    {
      kind: "check",
      id: "alg-c14b",
      prompt:
        "Find the condition on $p$ such that the roots of $x^2 + px + 12 = 0$ are both positive.",
      format: "text",
      answer: "p < -2sqrt(12)",
      acceptedAnswers: ["p<0 and p^2>=48", "p<-4sqrt3", "p <= -7"],
      hint: "Both positive: sum $> 0$ AND product $> 0$ AND $\\Delta \\ge 0$. Product $= 12 > 0$ ✓ always. Sum $= -p > 0$ means $p < 0$. And $\\Delta = p^2 - 48 \\ge 0$ means $|p| \\ge 4\\sqrt{3}$.",
      explanation:
        "Sum of roots $= -p > 0 \\implies p < 0$.\nProduct $= 12 > 0$ ✓ always.\nFor real roots: $\\Delta = p^2 - 48 \\ge 0$, so $p \\le -4\\sqrt{3}$ (since $p < 0$).\n\nCondition: $p \\le -4\\sqrt{3} \\approx -6.93$, i.e. $p \\le -7$ for integer values.",
    },
    {
      kind: "check",
      id: "alg-c14c",
      prompt:
        "If one root of $x^2 + kx + 18 = 0$ is double the other, find the positive value of $k$.",
      format: "numeric",
      answer: "9",
      hint: "Let roots be $\\alpha$ and $2\\alpha$. Product $= 2\\alpha^2 = 18$, so $\\alpha = \\pm 3$. Then sum $= 3\\alpha = -k$.",
      explanation:
        "Let roots be $\\alpha$ and $2\\alpha$.\nProduct: $2\\alpha^2 = 18$, so $\\alpha^2 = 9$, $\\alpha = \\pm 3$.\nSum: $3\\alpha = -k$, so $k = -3\\alpha$.\n\nFor $\\alpha = -3$: $k = 9$ (roots $-3, -6$; sum $= -9$ ✓, product $= 18$ ✓).\nFor $\\alpha = 3$: $k = -9$ (roots $3, 6$; sum $= 9$ ✓, product $= 18$ ✓).\n\nPositive value: $k = 9$.",
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // SECTION 6: Sum & product of roots (Vieta's formulas)
    // ═══════════════════════════════════════════════════════════════════════════
    {
      kind: "prose",
      heading: "5 · Sum & product of roots (Vieta's formulas)",
      content:
        "If $\\alpha$ and $\\beta$ are the roots of $ax^2 + bx + c = 0$, Vieta's formulas let you compute expressions involving the roots *without solving the equation*. They come directly from factoring: $a(x - \\alpha)(x - \\beta) = ax^2 - a(\\alpha+\\beta)x + a\\alpha\\beta$.\n\nThe power: you can evaluate $\\alpha^2 + \\beta^2$, $\\alpha^3 + \\beta^3$, $|\\alpha - \\beta|$, $1/\\alpha + 1/\\beta$, and form new equations — all from just two numbers ($\\alpha+\\beta$ and $\\alpha\\beta$).",
    },
    {
      kind: "callout",
      variant: "definition",
      title: "Vieta's formulas — core",
      content:
        "For $ax^2 + bx + c = 0$ with roots $\\alpha, \\beta$:\n\n• $\\alpha + \\beta = -\\dfrac{b}{a}$\n• $\\alpha \\beta = \\dfrac{c}{a}$",
    },
    {
      kind: "callout",
      variant: "definition",
      title: "Vieta's formulas — derived symmetric functions",
      content:
        "Let $S = \\alpha + \\beta$ and $P = \\alpha\\beta$. Then:\n\n• $\\alpha^2 + \\beta^2 = S^2 - 2P$\n• $(\\alpha - \\beta)^2 = S^2 - 4P$, so $|\\alpha - \\beta| = \\sqrt{S^2 - 4P}$\n• $\\alpha^3 + \\beta^3 = S^3 - 3PS = S(S^2 - 3P)$\n• $\\alpha^4 + \\beta^4 = (\\alpha^2+\\beta^2)^2 - 2(\\alpha\\beta)^2 = (S^2-2P)^2 - 2P^2$\n• $\\dfrac{1}{\\alpha} + \\dfrac{1}{\\beta} = \\dfrac{S}{P}$\n• $\\dfrac{\\alpha}{\\beta} + \\dfrac{\\beta}{\\alpha} = \\dfrac{S^2 - 2P}{P}$\n• $\\alpha^2\\beta + \\alpha\\beta^2 = SP$",
    },
    {
      kind: "callout",
      variant: "definition",
      title: "Vieta's formulas — forming new equations",
      content:
        "To find a quadratic with roots $f(\\alpha)$ and $f(\\beta)$:\n1. Compute new sum $= f(\\alpha) + f(\\beta)$ using identities above.\n2. Compute new product $= f(\\alpha) \\cdot f(\\beta)$.\n3. The equation is $x^2 - (\\text{new sum})x + (\\text{new product}) = 0$.\n\nCommon transforms:\n• Roots $\\alpha^2, \\beta^2$: sum $= S^2 - 2P$, product $= P^2$\n• Roots $\\alpha+k, \\beta+k$: sum $= S + 2k$, product $= P + kS + k^2$\n• Roots $1/\\alpha, 1/\\beta$: sum $= S/P$, product $= 1/P$ (just reverse the coefficients: $cx^2 + bx + a = 0$)\n• Roots $\\alpha - \\beta, \\beta - \\alpha$: sum $= 0$, product $= -(S^2 - 4P)$",
    },
    {
      kind: "callout",
      variant: "definition",
      title: "Vieta's for cubics and beyond",
      content:
        "For $ax^3 + bx^2 + cx + d = 0$ with roots $\\alpha, \\beta, \\gamma$:\n\n• $\\alpha + \\beta + \\gamma = -b/a$\n• $\\alpha\\beta + \\beta\\gamma + \\gamma\\alpha = c/a$\n• $\\alpha\\beta\\gamma = -d/a$\n\nFor degree $n$ in general: the $k$-th elementary symmetric polynomial of the roots equals $(-1)^k \\cdot (\\text{coefficient of } x^{n-k}) / (\\text{leading coefficient})$.",
    },
    {
      kind: "callout",
      variant: "tip",
      title: "The minus sign in $\\alpha + \\beta = -b/a$",
      content:
        "The most common Vieta's error is forgetting the minus. Mnemonic: 'Sum is Sad' — the sum has a minus. Or remember: $(x-3)(x-5) = x^2 - 8x + 15$, roots $3+5=8 = -(-8)/1$.",
    },
    {
      kind: "callout",
      variant: "trap",
      title: "Vieta's requires $a \\neq 0$",
      content:
        "If a problem says 'the equation $(k-1)x^2 + 3x + 2 = 0$ has roots $\\alpha, \\beta$...', you MUST note that $k \\neq 1$ (otherwise it's not quadratic). Competition setters use this to eliminate a value of $k$.",
    },
    {
      kind: "example",
      title: "Computing a symmetric function via Vieta's",
      statement:
        "If $\\alpha$ and $\\beta$ are the roots of $x^2 - 5x + 3 = 0$, find $\\alpha^2 + \\beta^2$ and $1/\\alpha + 1/\\beta$.",
      approach:
        "Use Vieta's: $S = \\alpha + \\beta = 5$, $P = \\alpha\\beta = 3$. Express both quantities in terms of $S$ and $P$.",
      solution:
        "$\\alpha^2 + \\beta^2 = S^2 - 2P = 25 - 6 = 19$.\n\n$\\frac{1}{\\alpha} + \\frac{1}{\\beta} = \\frac{S}{P} = \\frac{5}{3}$.",
    },
    {
      kind: "check",
      id: "alg-c15",
      prompt:
        "The roots of $x^2 - 7x + 10 = 0$ are $\\alpha$ and $\\beta$. Find $\\alpha^3 + \\beta^3$.",
      format: "numeric",
      answer: "133",
      hint: "$S = 7$, $P = 10$. Use $\\alpha^3+\\beta^3 = S^3 - 3PS$.",
      explanation:
        "$\\alpha^3+\\beta^3 = 7^3 - 3(10)(7) = 343 - 210 = 133$.",
    },
    {
      kind: "check",
      id: "alg-c16",
      prompt:
        "If $\\alpha$ and $\\beta$ are roots of $2x^2 + 6x - 5 = 0$, find $\\alpha^2\\beta + \\alpha\\beta^2$.",
      format: "text",
      answer: "15/2",
      acceptedAnswers: ["7.5", "15/2"],
      hint: "$\\alpha^2\\beta + \\alpha\\beta^2 = \\alpha\\beta(\\alpha + \\beta) = SP$. Here $S = -3$, $P = -5/2$.",
      explanation:
        "$S = -3$, $P = -5/2$. So $\\alpha^2\\beta + \\alpha\\beta^2 = SP = (-5/2)(-3) = 15/2$.",
    },
    {
      kind: "check",
      id: "alg-c17",
      prompt:
        "Find a quadratic equation (leading coefficient 1, integer coefficients) whose roots are $\\alpha + 1$ and $\\beta + 1$, where $\\alpha, \\beta$ are roots of $x^2 - 4x + 1 = 0$.",
      format: "text",
      answer: "x^2-6x+6=0",
      acceptedAnswers: ["x^2 - 6x + 6 = 0", "x^2-6x+6=0"],
      hint: "New sum $= S + 2 = 6$. New product $= P + S + 1 = 1 + 4 + 1 = 6$.",
      explanation:
        "$S = 4$, $P = 1$. New sum $= 6$. New product $= P + S + 1 = 6$. Equation: $x^2 - 6x + 6 = 0$.",
    },
    {
      kind: "check",
      id: "alg-c17b",
      prompt:
        "If $\\alpha, \\beta$ are roots of $x^2 - 3x + 1 = 0$, find $\\dfrac{\\alpha}{\\beta} + \\dfrac{\\beta}{\\alpha}$.",
      format: "numeric",
      answer: "7",
      hint: "$\\alpha/\\beta + \\beta/\\alpha = (\\alpha^2+\\beta^2)/(\\alpha\\beta) = (S^2 - 2P)/P$.",
      explanation:
        "$S = 3$, $P = 1$. $\\alpha/\\beta + \\beta/\\alpha = (S^2 - 2P)/P = (9-2)/1 = 7$.",
    },
    {
      kind: "check",
      id: "alg-c17c",
      prompt:
        "The roots of $2x^3 - x^2 + 3x - 7 = 0$ are $\\alpha, \\beta, \\gamma$. Find $\\alpha\\beta + \\beta\\gamma + \\gamma\\alpha$.",
      format: "text",
      answer: "3/2",
      acceptedAnswers: ["3/2", "1.5"],
      hint: "For a cubic $ax^3 + bx^2 + cx + d = 0$: $\\alpha\\beta + \\beta\\gamma + \\gamma\\alpha = c/a$.",
      explanation:
        "By Vieta's for cubics: $\\alpha\\beta + \\beta\\gamma + \\gamma\\alpha = c/a = 3/2$.",
    },
    {
      kind: "callout",
      variant: "definition",
      title: "Newton's power-sum recurrence",
      content:
        "Let $p_k = \\alpha^k + \\beta^k + \\gamma^k$ (the $k$-th power sum). If $\\alpha, \\beta, \\gamma$ are roots of $x^3 + bx^2 + cx + d = 0$, then:\n\n• $p_1 = -b$\n• $p_2 = p_1 \\cdot(-b) + 2(-c) = b^2 - 2c$\n• $p_k = -b \\cdot p_{k-1} - c \\cdot p_{k-2} - d \\cdot p_{k-3}$ for $k \\ge 3$\n\nFor a quadratic $x^2 + bx + c = 0$ with roots $\\alpha, \\beta$:\n• $p_k = -b \\cdot p_{k-1} - c \\cdot p_{k-2}$\n\nThis lets you compute $\\alpha^5 + \\beta^5$ (or any power) recursively without ever finding the roots!",
    },
    {
      kind: "callout",
      variant: "definition",
      title: "Roots in AP, GP, HP",
      content:
        "For a cubic $ax^3 + bx^2 + cx + d = 0$:\n\n• **Roots in AP** ($\\alpha - d_0, \\alpha, \\alpha + d_0$): Let middle root $= \\alpha$. Sum of roots $= 3\\alpha = -b/a$, so $\\alpha = -b/(3a)$. Then substitute back to find $d_0$.\n\n• **Roots in GP** ($\\alpha/r, \\alpha, \\alpha r$): Product $= \\alpha^3 = -d/a$, so $\\alpha = (-d/a)^{1/3}$. Then use sum or pairwise-product to find $r$.\n\n• **Roots in HP** (reciprocals are in AP): Substitute $x = 1/t$, solve the transformed cubic (whose roots are in AP).\n\nFor quadratics, if the two roots are in the ratio $m:n$, then $(m+n)^2 \\cdot ac = mn \\cdot b^2$. (This generalises the '$k$ times' condition.)",
    },
    {
      kind: "check",
      id: "alg-c17d",
      prompt:
        "If $\\alpha, \\beta$ are roots of $x^2 - 3x + 1 = 0$, use Newton's recurrence to find $\\alpha^4 + \\beta^4$.",
      format: "numeric",
      answer: "47",
      hint: "Here $b = -3$, $c = 1$. Recurrence: $p_k = 3p_{k-1} - p_{k-2}$. Start with $p_1 = 3$, $p_2 = 9-2 = 7$.",
      explanation:
        "$p_1 = 3$, $p_2 = 3^2 - 2(1) = 7$.\n$p_3 = 3 \\cdot 7 - 1 \\cdot 3 = 21 - 3 = 18$.\n$p_4 = 3 \\cdot 18 - 1 \\cdot 7 = 54 - 7 = 47$.\n\nSo $\\alpha^4 + \\beta^4 = 47$.",
    },
    {
      kind: "check",
      id: "alg-c17e",
      prompt:
        "The roots of $x^3 - 6x^2 + 11x - 6 = 0$ are in arithmetic progression. Find all three roots.",
      format: "text",
      answer: "1, 2, 3",
      acceptedAnswers: ["1,2,3", "1, 2, 3", "3, 2, 1"],
      hint: "Roots in AP: let them be $a-d, a, a+d$. Sum $= 3a = 6$, so $a = 2$. Use the product to find $d$.",
      explanation:
        "Let roots be $a-d, a, a+d$. Sum $= 3a = 6$, so $a = 2$.\nProduct $= a(a^2-d^2) = 6$: $2(4-d^2) = 6$, so $4-d^2 = 3$, $d^2 = 1$, $d = \\pm 1$.\n\nRoots: $1, 2, 3$. Check: $(x-1)(x-2)(x-3) = x^3 - 6x^2 + 11x - 6$ ✓.",
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // SECTION 7: Equations reducible to quadratics
    // ═══════════════════════════════════════════════════════════════════════════
    {
      kind: "prose",
      heading: "6 · Equations reducible to quadratics",
      content:
        "Many equations that aren't quadratic can be *turned into* quadratics by a clever substitution. This is one of the most satisfying skills in algebra. Key types:\n\n**Type 1: Bi-quadratics** ($ax^4 + bx^2 + c = 0$). Substitute $u = x^2$: get $au^2 + bu + c = 0$. Solve for $u$, then $x = \\pm\\sqrt{u}$ (rejecting negative $u$).\n\n**Type 2: Reciprocal equations** ($ax^2 + bx + c + b/x + a/x^2 = 0$ or similar). Divide through by $x^2$ and substitute $u = x + 1/x$. Note: $x^2 + 1/x^2 = u^2 - 2$.\n\n**Type 3: Equations with radicals.** If $\\sqrt{f(x)} = g(x)$, square both sides (but CHECK for extraneous solutions afterwards!). For $\\sqrt{x+a} + \\sqrt{x+b} = c$, isolate one radical then square.\n\n**Type 4: Disguised quadratics.** E.g., $3^{2x} - 4 \\cdot 3^x + 3 = 0$. Substitute $u = 3^x$: $u^2 - 4u + 3 = 0$.\n\nThe Hall & Knight principle: *always look for what to call $u$*. If you see an expression and its square (or its reciprocal), that's your substitution variable.",
    },
    {
      kind: "callout",
      variant: "tip",
      title: "The reciprocal substitution $u = x + 1/x$",
      content:
        "This is enormously powerful. Key relations:\n\n• $x^2 + 1/x^2 = u^2 - 2$\n• $x^3 + 1/x^3 = u^3 - 3u$\n• $x - 1/x = \\pm\\sqrt{u^2 - 4}$\n\nWhenever you see symmetric expressions in $x$ and $1/x$, try $u = x + 1/x$.",
    },
    {
      kind: "example",
      title: "Bi-quadratic equation",
      statement: "Solve $x^4 - 13x^2 + 36 = 0$.",
      approach: "Let $u = x^2$.",
      solution:
        "$u^2 - 13u + 36 = 0$. Factorise: $(u-4)(u-9) = 0$, so $u = 4$ or $u = 9$.\n\nThen $x^2 = 4 \\Rightarrow x = \\pm 2$, and $x^2 = 9 \\Rightarrow x = \\pm 3$.\n\nSolutions: $x \\in \\{-3, -2, 2, 3\\}$.",
    },
    {
      kind: "example",
      title: "Reciprocal equation",
      statement:
        "Solve $x^2 + 1/x^2 = 7$.",
      approach:
        "Let $u = x + 1/x$. Then $x^2 + 1/x^2 = u^2 - 2$.",
      solution:
        "$u^2 - 2 = 7$, so $u^2 = 9$, giving $u = \\pm 3$.\n\nCase 1: $x + 1/x = 3 \\Rightarrow x^2 - 3x + 1 = 0 \\Rightarrow x = \\frac{3 \\pm \\sqrt{5}}{2}$.\n\nCase 2: $x + 1/x = -3 \\Rightarrow x^2 + 3x + 1 = 0 \\Rightarrow x = \\frac{-3 \\pm \\sqrt{5}}{2}$.\n\nFour solutions in total.",
    },
    {
      kind: "check",
      id: "alg-c18",
      prompt:
        "Solve $9^x - 4 \\cdot 3^x + 3 = 0$. Find the sum of all solutions for $x$.",
      format: "numeric",
      answer: "1",
      hint: "Note $9^x = (3^x)^2$. Let $u = 3^x$, so the equation becomes $u^2 - 4u + 3 = 0$.",
      explanation:
        "Let $u = 3^x$: $u^2 - 4u + 3 = 0$, so $(u-1)(u-3) = 0$, giving $u = 1$ or $u = 3$.\n\n$3^x = 1 \\Rightarrow x = 0$. $3^x = 3 \\Rightarrow x = 1$. Sum $= 0 + 1 = 1$.",
    },
    {
      kind: "check",
      id: "alg-c19",
      prompt:
        "Find the positive solution(s) of $x^4 - 5x^2 + 4 = 0$. What is their sum?",
      format: "numeric",
      answer: "3",
      hint: "Let $u = x^2$. Factorise $u^2 - 5u + 4 = (u-1)(u-4) = 0$.",
      explanation:
        "$u = 1$ or $u = 4$. Positive solutions: $x = 1$ (from $u=1$) and $x = 2$ (from $u=4$). Sum $= 1 + 2 = 3$.",
    },
    {
      kind: "check",
      id: "alg-c20",
      prompt:
        "If $x + \\dfrac{1}{x} = 4$, find $x^2 + \\dfrac{1}{x^2}$.",
      format: "numeric",
      answer: "14",
      hint: "Square both sides of $x + 1/x = 4$: $(x + 1/x)^2 = x^2 + 2 + 1/x^2$.",
      explanation:
        "$(x + 1/x)^2 = x^2 + 2 + 1/x^2 = 16$. So $x^2 + 1/x^2 = 16 - 2 = 14$.",
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // SECTION 8: Inequalities from algebra
    // ═══════════════════════════════════════════════════════════════════════════
    {
      kind: "prose",
      heading: "7 · Inequalities from algebra",
      content:
        "Algebra gives you powerful tools to prove inequalities and find extrema — without calculus. The three key ideas:\n\n**Idea 1: Squares are non-negative.** $(\\text{anything})^2 \\ge 0$. This is the simplest but most underrated inequality tool. From $(a-b)^2 \\ge 0$ you get $a^2 + b^2 \\ge 2ab$, which is **AM-GM for two variables**: $$\\frac{a+b}{2} \\ge \\sqrt{ab} \\quad (\\text{for } a, b \\ge 0)$$\n\n**Idea 2: The discriminant as a constraint.** If a quadratic $f(x) = ax^2 + bx + c$ (with $a > 0$) is always $\\ge 0$, then it has no real roots or a repeated root, meaning $\\Delta \\le 0$. This gives you the constraint $b^2 \\le 4ac$. Conversely, you can USE this to prove that a certain expression is bounded.\n\n**Idea 3: Finding ranges of rational expressions.** To find the range of $y = \\dfrac{ax^2 + bx + c}{dx^2 + ex + f}$, rearrange to $(d y - a)x^2 + (ey - b)x + (fy - c) = 0$. For real $x$ to exist, the discriminant of this quadratic-in-$x$ must be $\\ge 0$. This gives an inequality in $y$ — which IS the range.\n\nThese three ideas cover the vast majority of 'prove' and 'find the range' problems in IMC and Hamilton.",
    },
    {
      kind: "callout",
      variant: "definition",
      title: "AM-GM inequality (two variables)",
      content:
        "For non-negative reals $a$ and $b$:\n$$\\frac{a + b}{2} \\ge \\sqrt{ab}$$\nwith equality if and only if $a = b$.\n\nEquivalently: $a + b \\ge 2\\sqrt{ab}$, or $\\left(\\frac{a+b}{2}\\right)^2 \\ge ab$.\n\nProof in one line: $(\\sqrt{a} - \\sqrt{b})^2 \\ge 0 \\Rightarrow a - 2\\sqrt{ab} + b \\ge 0 \\Rightarrow a + b \\ge 2\\sqrt{ab}$. ∎",
    },
    {
      kind: "callout",
      variant: "tip",
      title: "The discriminant trick for 'always positive'",
      content:
        "To prove $x^2 + 4x + 7 > 0$ for all real $x$: compute $\\Delta = 16 - 28 = -12 < 0$. Since $a = 1 > 0$ and $\\Delta < 0$, the parabola opens upward and never crosses the $x$-axis. Hence $f(x) > 0$ for all $x$.\n\nAlternatively, complete the square: $(x+2)^2 + 3 \\ge 3 > 0$. Both methods work; use whichever is faster.",
    },
    {
      kind: "example",
      title: "Finding the range of a rational expression",
      statement:
        "Find the range of $y = \\dfrac{x^2 + 2}{2x^2 + 3}$ for real $x$.",
      approach:
        "Rearrange to get a quadratic in $x$, then require $\\Delta \\ge 0$.",
      solution:
        "Rearrange: $y(2x^2 + 3) = x^2 + 2$, i.e. $(2y - 1)x^2 = 2 - 3y$.\n\nIf $2y - 1 = 0$ (i.e. $y = 1/2$): we'd need $0 = 2 - 3/2 = 1/2$, which is impossible. So $y \\neq 1/2$.\n\nFor $y \\neq 1/2$: $x^2 = \\dfrac{2 - 3y}{2y - 1}$.\n\nSince $x^2 \\ge 0$, we need $\\dfrac{2 - 3y}{2y - 1} \\ge 0$.\n\nThis is $\\ge 0$ when numerator and denominator share the same sign:\n• Both $\\ge 0$: $y \\le 2/3$ and $y > 1/2$, giving $1/2 < y \\le 2/3$.\n• Both $\\le 0$: $y \\ge 2/3$ and $y < 1/2$ — impossible.\n\nCheck boundaries: $x = 0$ gives $y = 2/3$ (achieved). As $x \\to \\infty$, $y \\to 1/2$ (never reached).\n\nRange: $y \\in (1/2, \\, 2/3]$.",
    },
    {
      kind: "check",
      id: "alg-c21",
      prompt:
        "Using AM-GM, find the minimum value of $x + \\dfrac{9}{x}$ for $x > 0$.",
      format: "numeric",
      answer: "6",
      hint: "AM-GM: $x + 9/x \\ge 2\\sqrt{x \\cdot 9/x} = 2\\sqrt{9}$.",
      explanation:
        "By AM-GM: $x + \\frac{9}{x} \\ge 2\\sqrt{x \\cdot \\frac{9}{x}} = 2\\sqrt{9} = 6$. Equality when $x = 9/x$, i.e. $x = 3$. Minimum value $= 6$.",
    },
    {
      kind: "check",
      id: "alg-c22",
      prompt:
        "Show that $2x^2 - 4x + 5$ is always positive by finding its minimum value. What is that minimum?",
      format: "numeric",
      answer: "3",
      hint: "Complete the square: $2x^2 - 4x + 5 = 2(x^2 - 2x) + 5 = 2(x-1)^2 + \\ldots$.",
      explanation:
        "$2x^2 - 4x + 5 = 2(x^2 - 2x + 1) + 5 - 2 = 2(x-1)^2 + 3$. Since $2(x-1)^2 \\ge 0$, the minimum is $3$ (at $x = 1$), which is positive. ✓",
    },
    {
      kind: "check",
      id: "alg-c23",
      prompt:
        "If $x$ is real, what is the maximum value of $\\dfrac{4x}{x^2 + 4}$?",
      format: "numeric",
      answer: "1",
      hint: "Let $y = 4x/(x^2+4)$. Rearrange to $yx^2 - 4x + 4y = 0$. For real $x$, require $\\Delta \\ge 0$.",
      explanation:
        "Set $y = \\frac{4x}{x^2+4}$, so $yx^2 - 4x + 4y = 0$. For real $x$ (when $y \\neq 0$): $\\Delta = 16 - 16y^2 \\ge 0$, i.e. $y^2 \\le 1$, so $-1 \\le y \\le 1$. The maximum is $1$, achieved when $x = 2$ (check: $4(2)/(4+4) = 8/8 = 1$). ✓",
    },
  ],

  workedExamples: [
    {
      kind: "example",
      title: "Factorisation speed-trick (competition classic)",
      statement:
        "Evaluate $\\dfrac{2023^2 - 2022^2}{2023 + 2022}$ without a calculator.",
      approach:
        "Recognise the numerator as a difference of squares.",
      solution:
        "$2023^2 - 2022^2 = (2023+2022)(2023-2022) = 4045 \\times 1 = 4045$.\n\nSo $\\dfrac{4045}{4045} = 1$.\n\nThe difference of squares factorisation turns what looks like a hard calculation into mental arithmetic. Always scan for $A^2 - B^2$ in any expression involving squares of nearby numbers.",
    },
    {
      kind: "example",
      title: "Vieta's to find a symmetric function",
      statement:
        "The roots of $3x^2 - 7x + 2 = 0$ are $\\alpha$ and $\\beta$. Without finding the roots, compute $\\dfrac{\\alpha}{\\beta} + \\dfrac{\\beta}{\\alpha}$.",
      approach:
        "Express the target in terms of $\\alpha+\\beta$ and $\\alpha\\beta$ using Vieta's.",
      solution:
        "By Vieta's: $\\alpha + \\beta = 7/3$ and $\\alpha\\beta = 2/3$.\n\nNow: $\\dfrac{\\alpha}{\\beta} + \\dfrac{\\beta}{\\alpha} = \\dfrac{\\alpha^2 + \\beta^2}{\\alpha\\beta}$.\n\n$\\alpha^2 + \\beta^2 = (\\alpha+\\beta)^2 - 2\\alpha\\beta = \\frac{49}{9} - \\frac{4}{3} = \\frac{49}{9} - \\frac{12}{9} = \\frac{37}{9}$.\n\nSo $\\dfrac{\\alpha}{\\beta} + \\dfrac{\\beta}{\\alpha} = \\dfrac{37/9}{2/3} = \\dfrac{37}{9} \\times \\dfrac{3}{2} = \\dfrac{37}{6}$.\n\nNo quadratic formula needed! This is the power of Vieta's.",
    },
    {
      kind: "example",
      title: "Discriminant to constrain a parameter",
      statement:
        "For what values of $m$ does the line $y = mx + 1$ intersect the parabola $y = x^2 + 2$ at exactly one point?",
      approach:
        "Substitute to get a quadratic in $x$, then set $\\Delta = 0$.",
      solution:
        "At intersection: $mx + 1 = x^2 + 2$, i.e. $x^2 - mx + 1 = 0$.\n\nFor exactly one point: $\\Delta = 0$.\n\n$\\Delta = m^2 - 4(1)(1) = m^2 - 4 = 0$, so $m = \\pm 2$.\n\nCheck $m = 2$: $x^2 - 2x + 1 = (x-1)^2 = 0$, touching at $x = 1$, $y = 3$. ✓\nCheck $m = -2$: $x^2 + 2x + 1 = (x+1)^2 = 0$, touching at $x = -1$, $y = 3$. ✓\n\nGeometrically, these are the two tangent lines from the point $(0,1)$ to the parabola.",
    },
    {
      kind: "example",
      title: "Substitution to reduce to quadratic",
      statement:
        "Solve $x + \\dfrac{1}{x} - \\left(x + \\dfrac{1}{x}\\right)^{1/2} = 2$ for positive real $x$.",
      approach:
        "Let $u = \\sqrt{x + 1/x}$, so $u^2 = x + 1/x$ and the equation becomes $u^2 - u = 2$.",
      solution:
        "Let $u = \\sqrt{x + 1/x}$ (note $u > 0$ since $x > 0$ means $x + 1/x \\ge 2$).\n\nEquation: $u^2 - u - 2 = 0$, i.e. $(u-2)(u+1) = 0$.\n\nSince $u > 0$: $u = 2$, so $x + 1/x = 4$ (squaring: $u^2 = 4$).\n\nNow solve $x + 1/x = 4$: $x^2 - 4x + 1 = 0$, giving $x = \\frac{4 \\pm \\sqrt{12}}{2} = 2 \\pm \\sqrt{3}$.\n\nBoth are positive, so both are valid solutions.\n\nCheck: $x = 2 + \\sqrt{3}$, $1/x = 2 - \\sqrt{3}$, $x + 1/x = 4$, $\\sqrt{4} = 2$, $4 - 2 = 2$. ✓",
    },
  ],

  practiceProblemIds: [],
  challengeProblemIds: [],

  summary: {
    keyFormulas: [
      "Difference of squares: $$a^2 - b^2 = (a+b)(a-b)$$",
      "Sum/difference of cubes: $$a^3 \\pm b^3 = (a \\pm b)(a^2 \\mp ab + b^2)$$",
      "Square of a sum: $$(a+b)^2 = a^2 + 2ab + b^2$$",
      "Three-variable square: $$(a+b+c)^2 = a^2+b^2+c^2+2(ab+bc+ca)$$",
      "Quadratic formula: $$x = \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}$$",
      "Discriminant: $$\\Delta = b^2 - 4ac$$",
      "Vieta's formulas: $$\\alpha+\\beta = -\\frac{b}{a}, \\quad \\alpha\\beta = \\frac{c}{a}$$",
      "Derived: $$\\alpha^2+\\beta^2 = (\\alpha+\\beta)^2 - 2\\alpha\\beta$$",
      "AM-GM: $$\\frac{a+b}{2} \\ge \\sqrt{ab} \\quad (a,b \\ge 0)$$",
      "Reciprocal substitution: $$u = x + \\frac{1}{x} \\Rightarrow x^2 + \\frac{1}{x^2} = u^2 - 2$$",
    ],
    bigIdeas: [
      "Factorisation is pattern-matching: know the standard forms and scan for them relentlessly.",
      "Vieta's formulas let you compute expressions involving roots without ever finding the roots — this saves huge time.",
      "The discriminant is a dual-purpose tool: it classifies roots AND serves as an inequality constraint.",
      "Substitution is the art of naming the right quantity $u$ — look for repeated sub-expressions or symmetry.",
      "Squares are non-negative: the simplest inequality principle, but it proves AM-GM and much more.",
    ],
    patternTips: [
      "See nearby integers multiplied together (e.g. $47 \\times 53$) → difference of squares.",
      "Given sum and product of two quantities → use $a^2+b^2 = (a+b)^2 - 2ab$ immediately.",
      "Problem says 'equal roots' or 'touches' → set $\\Delta = 0$.",
      "Expression involves both $x$ and $1/x$ symmetrically → substitute $u = x + 1/x$.",
      "Need to prove 'always positive' → complete the square or check $\\Delta < 0$ with $a > 0$.",
      "'Find the range' of a rational expression → rearrange to quadratic in $x$, require $\\Delta \\ge 0$.",
    ],
    traps: [
      "Sign error in $(a-b)^2$: the cross-term is $-2ab$, not $+2ab$.",
      "Forgetting the minus in Vieta's: $\\alpha + \\beta = -b/a$, not $+b/a$.",
      "Applying discriminant to a non-standard form (always rearrange to $ax^2+bx+c=0$ first).",
      "After squaring both sides to clear a radical, failing to check for extraneous roots.",
      "In bi-quadratics, forgetting that $u = x^2 \\ge 0$, so negative $u$ solutions must be rejected.",
      "Trying to factorise $a^2 + b^2$ over the reals (it does not factorise!).",
    ],
    revisionNotes: [
      "Drill the standard factorisations until they're instant: $a^2-b^2$, $a^3 \\pm b^3$, grouping.",
      "Practise Vieta's with progressively harder symmetric functions: $\\alpha^2+\\beta^2$, then $\\alpha^3+\\beta^3$, then $\\alpha/\\beta + \\beta/\\alpha$.",
      "Work through 'find $k$ for equal roots' problems until the $\\Delta = 0$ setup is automatic.",
      "Collect a library of substitutions: $u = x^2$, $u = 3^x$, $u = x + 1/x$, $u = \\sqrt{\\text{something}}$.",
      "Review the discriminant-as-inequality technique for 'find the range' problems — this is a Hamilton favourite.",
      "Hall & Knight Chapters VIII–X have excellent drill exercises; work through the first 10 problems in each.",
    ],
  },
};
