import type { Chapter } from "@/lib/types";

/**
 * Number Sense & Clever Calculation — competition speed tricks for IMC Q1-10.
 *
 * Covers: place value & digit manipulation, powers/roots/last-digit cycles,
 * difference of squares & squaring tricks, multiplying by special numbers,
 * fractions & recurring decimals, percentage shortcuts, telescoping sums &
 * pairing tricks, competition patterns & estimation.
 */
export const numberSenseChapter: Chapter = {
  id: "ch-num-1",
  title: "Number Sense & Clever Calculation",
  topic: "number",
  order: 10,
  examFocus: "IMC",
  difficulty: "easy",
  estMinutes: 70,
  prerequisites: ["ch-found-1"],
  blurb:
    "The first ten IMC questions reward speed and mental fluency above all else. This chapter arms you with the calculation shortcuts, number patterns, and estimation tricks that let you blitz through Q1-10 with time to spare for the harder problems.",

  intro: {
    whyItMatters:
      "IMC Q1-10 are designed to be solved in under two minutes each — but only if you know the tricks. Brute-force arithmetic wastes precious time that you need for the later questions worth 4 and 5 marks. Number sense is the art of seeing structure in numbers that lets you shortcut calculations, spot answers without computing, and verify results instantly.",
    whereItAppears:
      "IMC Q1-5 almost always include a 'clever calculation' question (mental multiplication, digit patterns, or percentage reasoning). Q6-10 frequently test place value, last digits of powers, fraction-decimal conversions, and telescoping sums. These skills also underpin harder problems throughout the paper.",
    typicalPatterns: [
      "Compute a product of numbers near a round number (difference of squares).",
      "Find the last digit (or last two digits) of a large power.",
      "Evaluate a sum that telescopes or can be paired cleverly.",
      "Convert between fractions and recurring decimals.",
      "Apply percentage shortcuts to find an original or final value.",
      "Determine which of several expressions is largest without full computation.",
      "Use digit sums or casting out nines to verify or eliminate answers.",
    ],
    commonMistakes: [
      "Attempting long multiplication when a factorisation shortcut exists.",
      "Forgetting that last-digit cycles repeat with period 4 (not 2 or 10).",
      "Confusing $x\\%$ of $y$ with $y\\%$ of $x$ — they are equal, which is the trick!",
      "In reverse percentage problems, dividing by $(1 + r)$ instead of multiplying — or vice versa.",
      "Mis-applying telescoping: not checking that almost all terms actually cancel.",
      "Rounding too aggressively in estimation problems and losing the ability to distinguish close options.",
    ],
  },

  lesson: [
    // ═══════════════════════════════════════════════════════════════════════════
    // SECTION 1: Place value & digit manipulation
    // ═══════════════════════════════════════════════════════════════════════════
    {
      kind: "prose",
      heading: "1 · Place value & digit manipulation",
      content:
        "Every positive integer can be written in **expanded form** using powers of 10. A two-digit number with tens digit $a$ and units digit $b$ equals $10a + b$. A three-digit number $\\overline{abc}$ equals $100a + 10b + c$. This seemingly obvious fact is the gateway to dozens of competition tricks.\n\n**Digit sums:** The digit sum of a number is the sum of its individual digits. For example, the digit sum of 2748 is $2+7+4+8 = 21$. The **digital root** is what you get by repeating this process until you reach a single digit: $21 \\to 3$. The digital root equals the remainder when the number is divided by 9 (with 9 replacing 0).\n\n**Reversing digits:** When you reverse a two-digit number $10a + b$, you get $10b + a$. The difference is:\n$$(10a + b) - (10b + a) = 9(a - b)$$\nFor a three-digit number $\\overline{abc}$, reversing gives $\\overline{cba}$, and:\n$$(100a + 10b + c) - (100c + 10b + a) = 99(a - c)$$\nNotice the middle digit cancels completely!",
    },
    {
      kind: "callout",
      variant: "definition",
      title: "Key digit patterns",
      content:
        "• Two-digit reverse difference: $\\overline{ab} - \\overline{ba} = 9(a - b)$\n• Three-digit reverse difference: $\\overline{abc} - \\overline{cba} = 99(a - c)$\n• Any even-digit palindrome (e.g. $abba$, $abccba$) is divisible by 11\n• A number is divisible by 9 iff its digit sum is divisible by 9\n• A number is divisible by 11 iff the alternating digit sum (odd-position minus even-position) is divisible by 11\n• Digit sum $\\equiv$ number $(\\bmod 9)$ — this is 'casting out nines'",
    },
    {
      kind: "callout",
      variant: "tip",
      title: "Why palindromes with even digits divide by 11",
      content:
        "A four-digit palindrome $\\overline{abba} = 1001a + 110b = 11(91a + 10b)$. A six-digit palindrome $\\overline{abccba} = 100001a + 10010b + 1100c = 11(9091a + 910b + 100c)$. The pattern: each place-value sum (first+last, second+second-last, etc.) produces a factor of 11.",
    },
    {
      kind: "check",
      id: "ns-c1",
      prompt:
        "A two-digit number exceeds the number formed by reversing its digits by 36. What are the possible values of the difference between the two digits?",
      format: "numeric",
      answer: "4",
      hint: "The difference between a two-digit number and its reverse is $9(a-b)$. Set this equal to 36.",
      explanation:
        "$9(a - b) = 36$, so $a - b = 4$. The tens digit exceeds the units digit by exactly 4. (Examples: 51, 62, 73, 84, 95.)",
    },
    {
      kind: "check",
      id: "ns-c2",
      prompt:
        "Is the number $4668$ divisible by 11? (Answer 'yes' or 'no'.)",
      format: "text",
      answer: "no",
      acceptedAnswers: ["no", "No", "NO"],
      hint: "Compute the alternating digit sum: $4 - 6 + 6 - 8$. Is the result divisible by 11?",
      explanation:
        "Alternating digit sum: $4 - 6 + 6 - 8 = -4$. Since $-4$ is not divisible by 11, the number 4668 is not divisible by 11.",
    },
    {
      kind: "check",
      id: "ns-c3",
      prompt:
        "The six-digit palindrome $\\overline{abccba}$ is always divisible by which single-digit prime?",
      format: "numeric",
      answer: "11",
      hint: "Write out $\\overline{abccba} = 100001a + 10010b + 1100c$ and factor.",
      explanation:
        "$\\overline{abccba} = 100001a + 10010b + 1100c = 11(9091a + 910b + 100c)$. So it is always divisible by 11.",
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // SECTION 2: Powers, roots & last-digit cycles
    // ═══════════════════════════════════════════════════════════════════════════
    {
      kind: "prose",
      heading: "2 · Powers, roots & last-digit cycles",
      content:
        "Competition maths requires you to know certain powers by heart. Memorise:\n\n• Squares: $1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225, 256, 289, 324, 361, 400, 441, 484, 529, 576, 625$ (up to $25^2$)\n• Cubes: $1, 8, 27, 64, 125, 216, 343, 512, 729, 1000$ (up to $10^3$)\n• Powers of 2: $1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024$ (up to $2^{10}$)\n\n**Estimating square roots:** To estimate $\\sqrt{n}$, find the nearest perfect squares above and below. For example, $\\sqrt{50}$ lies between $7$ (since $7^2=49$) and $8$ (since $8^2=64$). Since 50 is very close to 49, $\\sqrt{50} \\approx 7.07$.",
    },
    {
      kind: "callout",
      variant: "definition",
      title: "Last-digit cycles",
      content:
        "The last digit of $n^k$ depends only on the last digit of $n$ and on $k \\bmod 4$ (for most digits):\n\n• Digit 0: always 0 (period 1)\n• Digit 1: always 1 (period 1)\n• Digit 2: cycle 2, 4, 8, 6 (period 4)\n• Digit 3: cycle 3, 9, 7, 1 (period 4)\n• Digit 4: cycle 4, 6 (period 2)\n• Digit 5: always 5 (period 1)\n• Digit 6: always 6 (period 1)\n• Digit 7: cycle 7, 9, 3, 1 (period 4)\n• Digit 8: cycle 8, 4, 2, 6 (period 4)\n• Digit 9: cycle 9, 1 (period 2)\n\nTo find the last digit of $n^k$: find the cycle for the last digit of $n$, then compute $k \\bmod (\\text{period})$ to pick the entry.",
    },
    {
      kind: "callout",
      variant: "tip",
      title: "Finding last digit — the method",
      content:
        "To find the last digit of $7^{2024}$:\n1. The last-digit cycle of 7 is: 7, 9, 3, 1 (period 4).\n2. Compute $2024 \\bmod 4 = 0$.\n3. A remainder of 0 means we take the 4th entry in the cycle: $\\mathbf{1}$.\n\nSo the last digit of $7^{2024}$ is 1.",
    },
    {
      kind: "check",
      id: "ns-c4",
      prompt:
        "What is the last digit of $3^{2025}$?",
      format: "numeric",
      answer: "3",
      hint: "The cycle for 3 is: 3, 9, 7, 1 (period 4). Find $2025 \\bmod 4$.",
      explanation:
        "$2025 \\bmod 4 = 1$ (since $2025 = 4 \\times 506 + 1$). The 1st entry in the cycle 3, 9, 7, 1 is $3$. So the last digit of $3^{2025}$ is 3.",
    },
    {
      kind: "check",
      id: "ns-c5",
      prompt:
        "Between which two consecutive integers does $\\sqrt{83}$ lie? Give your answer as 'a and b' where $a < b$.",
      format: "text",
      answer: "9 and 10",
      acceptedAnswers: ["9 and 10", "9, 10", "9 & 10"],
      hint: "$9^2 = 81$ and $10^2 = 100$. Where does 83 fall?",
      explanation:
        "Since $9^2 = 81 < 83 < 100 = 10^2$, we have $9 < \\sqrt{83} < 10$.",
    },
    {
      kind: "check",
      id: "ns-c6",
      prompt:
        "What is the last digit of $2^{100}$?",
      format: "numeric",
      answer: "6",
      hint: "The cycle for 2 is: 2, 4, 8, 6 (period 4). Find $100 \\bmod 4$.",
      explanation:
        "$100 \\bmod 4 = 0$. The 4th entry in the cycle 2, 4, 8, 6 is $6$. So the last digit of $2^{100}$ is 6.",
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // SECTION 3: Difference of squares & squaring tricks
    // ═══════════════════════════════════════════════════════════════════════════
    {
      kind: "prose",
      heading: "3 · Difference of squares & squaring tricks",
      content:
        "The identity $a^2 - b^2 = (a+b)(a-b)$ is arguably the single most useful speed trick in competition arithmetic. It can be used **backwards** to turn a product into a difference of squares:\n\n$$47 \\times 53 = (50-3)(50+3) = 50^2 - 3^2 = 2500 - 9 = 2491$$\n\nAny time you see two numbers that are equidistant from a round number, this identity applies.\n\n**Stepping from known squares:** $(n+1)^2 = n^2 + 2n + 1$. So if you know $20^2 = 400$, then $21^2 = 400 + 40 + 1 = 441$, and $22^2 = 441 + 42 + 1 = 484$. This lets you build up squares quickly.\n\n**Squares near 100:**\n• $99^2 = (100-1)^2 = 10000 - 200 + 1 = 9801$\n• $101^2 = (100+1)^2 = 10000 + 200 + 1 = 10201$\n• $98^2 = (100-2)^2 = 10000 - 400 + 4 = 9604$\n• $102^2 = (100+2)^2 = 10000 + 400 + 4 = 10404$\n\nMore generally: $(100 \\pm k)^2 = 10000 \\pm 200k + k^2$.",
    },
    {
      kind: "callout",
      variant: "definition",
      title: "Squaring tricks toolkit",
      content:
        "• $a^2 - b^2 = (a+b)(a-b)$ — use backwards for products near a midpoint\n• $(n+1)^2 = n^2 + 2n + 1$ — step up from a known square\n• Numbers ending in 5: $n5^2 = n(n+1) \\times 100 + 25$. E.g. $65^2 = 6 \\times 7 \\times 100 + 25 = 4225$\n• $(a+b)^2 = a^2 + 2ab + b^2$ — expand mentally for numbers near round values\n• $n^2 - (n-1)^2 = 2n - 1$ — difference of consecutive squares is always odd",
    },
    {
      kind: "check",
      id: "ns-c7",
      prompt:
        "Without a calculator, compute $48 \\times 52$.",
      format: "numeric",
      answer: "2496",
      hint: "Both numbers are 2 away from 50. Use $(50-2)(50+2) = 50^2 - 4$.",
      explanation:
        "$48 \\times 52 = (50-2)(50+2) = 2500 - 4 = 2496$.",
    },
    {
      kind: "check",
      id: "ns-c8",
      prompt:
        "Compute $75^2$ using the 'ends in 5' trick.",
      format: "numeric",
      answer: "5625",
      hint: "For $n5^2$: multiply $n$ by $(n+1)$, append 25. Here $n = 7$.",
      explanation:
        "$75^2$: $7 \\times 8 = 56$, append 25 to get $5625$.",
    },
    {
      kind: "check",
      id: "ns-c9",
      prompt:
        "If $n^2 = 576$, what is $(n+1)^2$?",
      format: "numeric",
      answer: "625",
      hint: "$(n+1)^2 = n^2 + 2n + 1$. First find $n$ from $n^2 = 576$.",
      explanation:
        "$n = 24$ (since $24^2 = 576$). So $(n+1)^2 = 576 + 2(24) + 1 = 576 + 48 + 1 = 625$. (And indeed $25^2 = 625$.)",
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // SECTION 4: Multiplying & dividing by special numbers
    // ═══════════════════════════════════════════════════════════════════════════
    {
      kind: "prose",
      heading: "4 · Multiplying & dividing by special numbers",
      content:
        "Competition calculators are banned, so you need shortcuts for common multiplications and divisions.\n\n**Multiplying by 5, 25, 125:**\n• $n \\times 5 = n \\times 10 \\div 2$ (halve, then append a zero — or append a zero, then halve)\n• $n \\times 25 = n \\times 100 \\div 4$\n• $n \\times 125 = n \\times 1000 \\div 8$\n\n**Dividing by 5, 25, 125:**\n• $n \\div 5 = n \\times 2 \\div 10$ (double, then move decimal left)\n• $n \\div 25 = n \\times 4 \\div 100$\n• $n \\div 125 = n \\times 8 \\div 1000$\n\n**The $\\times 11$ trick:** To multiply a two-digit number $\\overline{ab}$ by 11: write $a$, then $a+b$, then $b$. If $a+b \\ge 10$, carry. Example: $72 \\times 11$: write 7, then $7+2=9$, then 2 → $792$. For $85 \\times 11$: write 8, then $8+5=13$ (carry 1), then 5 → $935$.\n\n**The $\\times 9$ / $\\times 99$ / $\\times 999$ trick:**\n• $n \\times 9 = 10n - n$\n• $n \\times 99 = 100n - n$\n• $n \\times 999 = 1000n - n$\n\nExample: $37 \\times 99 = 3700 - 37 = 3663$.",
    },
    {
      kind: "callout",
      variant: "tip",
      title: "Quick multiplication summary",
      content:
        "• $\\times 5 = \\times 10 \\div 2$\n• $\\times 25 = \\times 100 \\div 4$\n• $\\times 125 = \\times 1000 \\div 8$\n• $\\times 11$: split digits, sum adjacent pairs, carry if needed\n• $\\times 9 = \\times 10 - \\times 1$\n• $\\times 99 = \\times 100 - \\times 1$\n• $\\div 5 = \\times 2 \\div 10$\n• $\\div 25 = \\times 4 \\div 100$",
    },
    {
      kind: "check",
      id: "ns-c10",
      prompt:
        "Compute $84 \\times 25$ mentally.",
      format: "numeric",
      answer: "2100",
      hint: "$84 \\times 25 = 84 \\times 100 \\div 4 = 8400 \\div 4$.",
      explanation:
        "$84 \\times 25 = 8400 \\div 4 = 2100$.",
    },
    {
      kind: "check",
      id: "ns-c11",
      prompt:
        "Compute $67 \\times 11$ using the $\\times 11$ trick.",
      format: "numeric",
      answer: "737",
      hint: "Write 6, then $6+7=13$ (carry the 1), then 7. Build the answer right-to-left.",
      explanation:
        "$67 \\times 11$: digits are 6 and 7. Middle digit: $6+7=13$, write 3 carry 1. So the answer is $(6+1)37 = 737$.",
    },
    {
      kind: "check",
      id: "ns-c12",
      prompt:
        "Compute $46 \\times 99$ mentally.",
      format: "numeric",
      answer: "4554",
      hint: "$46 \\times 99 = 4600 - 46$.",
      explanation:
        "$46 \\times 99 = 46 \\times 100 - 46 = 4600 - 46 = 4554$.",
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // SECTION 5: Fractions & recurring decimals
    // ═══════════════════════════════════════════════════════════════════════════
    {
      kind: "prose",
      heading: "5 · Fractions & recurring decimals",
      content:
        "Certain fraction-decimal conversions appear so often in competition problems that you should know them cold:\n\n• $1/7 = 0.\\overline{142857}$ (6-digit cycle)\n• $1/9 = 0.\\overline{1}$, $2/9 = 0.\\overline{2}$, ..., $8/9 = 0.\\overline{8}$\n• $1/11 = 0.\\overline{09}$, $2/11 = 0.\\overline{18}$, ..., $10/11 = 0.\\overline{90}$\n• $1/3 = 0.\\overline{3}$, $1/6 = 0.1\\overline{6}$\n\n**Converting recurring decimals to fractions:**\n• Single-digit repeat: $0.\\overline{a} = a/9$\n• Two-digit repeat: $0.\\overline{ab} = ab/99$\n• Three-digit repeat: $0.\\overline{abc} = abc/999$\n\nGeneral rule: the repeating block goes over the same number of 9s.\n\nExample: $0.\\overline{36} = 36/99 = 4/11$.\n\n**Comparing fractions by cross-multiplication:** To compare $a/b$ and $c/d$ (with $b, d > 0$), compare $ad$ with $bc$. If $ad > bc$, then $a/b > c/d$.\n\n**Egyptian fractions** (briefly): Every positive fraction can be written as a sum of distinct unit fractions. E.g. $3/7 = 1/3 + 1/11 + 1/231$. The greedy algorithm (always take the largest unit fraction that fits) works, though the result may not be the shortest representation.",
    },
    {
      kind: "callout",
      variant: "definition",
      title: "Recurring decimal conversion formulas",
      content:
        "• $0.\\overline{d_1 d_2 \\ldots d_n} = \\dfrac{d_1 d_2 \\ldots d_n}{\\underbrace{99\\ldots9}_{n}}$\n• Mixed: $0.a_1 \\ldots a_m \\overline{d_1 \\ldots d_n} = \\dfrac{a_1\\ldots a_m d_1\\ldots d_n - a_1\\ldots a_m}{\\underbrace{99\\ldots9}_{n}\\underbrace{00\\ldots0}_{m}}$\n• Cross-multiply to compare: $\\dfrac{a}{b} \\lessgtr \\dfrac{c}{d}$ iff $ad \\lessgtr bc$ (when $b,d > 0$)",
    },
    {
      kind: "check",
      id: "ns-c13",
      prompt:
        "Convert $0.\\overline{72}$ to a fraction in lowest terms.",
      format: "text",
      answer: "8/11",
      acceptedAnswers: ["8/11"],
      hint: "$0.\\overline{72} = 72/99$. Now simplify by dividing numerator and denominator by their GCD.",
      explanation:
        "$0.\\overline{72} = 72/99$. GCD(72, 99) = 9. So $72/99 = 8/11$.",
    },
    {
      kind: "check",
      id: "ns-c14",
      prompt:
        "Which is larger: $5/7$ or $7/10$? (Type '5/7' or '7/10'.)",
      format: "text",
      answer: "5/7",
      acceptedAnswers: ["5/7"],
      hint: "Cross-multiply: compare $5 \\times 10$ with $7 \\times 7$.",
      explanation:
        "Cross-multiply: $5 \\times 10 = 50$ and $7 \\times 7 = 49$. Since $50 > 49$, we have $5/7 > 7/10$.",
    },
    {
      kind: "check",
      id: "ns-c15",
      prompt:
        "What fraction equals $0.\\overline{123}$? Give your answer in lowest terms.",
      format: "text",
      answer: "41/333",
      acceptedAnswers: ["41/333"],
      hint: "$0.\\overline{123} = 123/999$. Simplify: $\\gcd(123, 999) = 3$.",
      explanation:
        "$0.\\overline{123} = 123/999 = 41/333$. (Check: $123 \\div 3 = 41$, $999 \\div 3 = 333$, and $\\gcd(41, 333) = 1$.)",
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // SECTION 6: Percentage shortcuts
    // ═══════════════════════════════════════════════════════════════════════════
    {
      kind: "prose",
      heading: "6 · Percentage shortcuts",
      content:
        "Percentages are just fractions in disguise, but knowing the shortcuts lets you solve IMC problems in seconds rather than minutes.\n\n**The symmetry rule:** $x\\%$ of $y = y\\%$ of $x$. This is because both equal $xy/100$. So '8% of 50' is the same as '50% of 8' = 4. This turns hard percentage calculations into easy ones.\n\n**Building percentages from 10%:**\n• 10% = divide by 10\n• 5% = half of 10%\n• 15% = 10% + 5%\n• 20% = 10% $\\times$ 2\n• 1% = divide by 100\n• 2.5% = half of 5%\n\n**Successive percentage changes:** A $p\\%$ increase followed by a $p\\%$ decrease does NOT return you to the start! The net effect is always a decrease:\n$$\\text{Multiplier} = (1 + p/100)(1 - p/100) = 1 - (p/100)^2$$\nSo +20% then -20% gives multiplier $1 - 0.04 = 0.96$, a 4% net decrease.\n\n**Reverse percentages:** 'After a 25% increase, the price is now £75. What was the original?' The original times 1.25 gives 75, so original $= 75 / 1.25 = 60$. Never subtract 25% of the final price — that's 25% of the wrong number!",
    },
    {
      kind: "callout",
      variant: "trap",
      title: "The reverse percentage trap",
      content:
        "If a price increases by 20% to £60, the original is NOT $60 - 20\\% \\text{ of } 60 = 48$.\n\nCorrect method: Original $\\times 1.20 = 60$, so Original $= 60 / 1.20 = 50$.\n\nThe percentage was applied to the ORIGINAL, not the final value. Dividing by the multiplier is always correct.",
    },
    {
      kind: "check",
      id: "ns-c16",
      prompt:
        "Compute 15% of 240 mentally.",
      format: "numeric",
      answer: "36",
      hint: "10% of 240 = 24. Half of that = 12. Add them: 24 + 12.",
      explanation:
        "10% of 240 = 24. 5% of 240 = 12. So 15% of 240 = 24 + 12 = 36.",
    },
    {
      kind: "check",
      id: "ns-c17",
      prompt:
        "A shirt is reduced by 20%, then the sale price is reduced by a further 25%. What is the overall percentage reduction?",
      format: "numeric",
      answer: "40",
      hint: "Multipliers: $0.80 \\times 0.75 = ?$ The overall reduction is $1 - \\text{product}$.",
      explanation:
        "Overall multiplier: $0.80 \\times 0.75 = 0.60$. So the overall reduction is $1 - 0.60 = 0.40 = 40\\%$.",
    },
    {
      kind: "check",
      id: "ns-c18",
      prompt:
        "After a 30% increase, a quantity becomes 520. What was the original quantity?",
      format: "numeric",
      answer: "400",
      hint: "Original $\\times 1.30 = 520$. Solve for the original.",
      explanation:
        "Original $= 520 / 1.30 = 400$. Check: $400 \\times 1.30 = 520$ ✓.",
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // SECTION 7: Telescoping sums & pairing tricks
    // ═══════════════════════════════════════════════════════════════════════════
    {
      kind: "prose",
      heading: "7 · Telescoping sums & pairing tricks",
      content:
        "Many competition sums that look intimidating collapse to a simple expression once you spot the pattern.\n\n**Gauss's pairing trick:** $1 + 2 + 3 + \\cdots + n = \\dfrac{n(n+1)}{2}$. Pair the first and last: $1+n$, $2+(n-1)$, etc. Each pair sums to $n+1$, and there are $n/2$ pairs.\n\n**Sum of first $n$ odd numbers:** $1 + 3 + 5 + \\cdots + (2n-1) = n^2$. The $n$-th odd number is $2n-1$, and the sum is always a perfect square.\n\n**Telescoping sums:** A sum **telescopes** when most terms cancel in pairs. The classic:\n$$\\sum_{k=1}^{n} \\frac{1}{k(k+1)} = \\sum_{k=1}^{n} \\left(\\frac{1}{k} - \\frac{1}{k+1}\\right) = 1 - \\frac{1}{n+1} = \\frac{n}{n+1}$$\n\nThe decomposition $\\dfrac{1}{k(k+1)} = \\dfrac{1}{k} - \\dfrac{1}{k+1}$ is a partial fraction.\n\n**Another useful partial fraction:**\n$$\\frac{1}{n(n+2)} = \\frac{1}{2}\\left(\\frac{1}{n} - \\frac{1}{n+2}\\right)$$\n\nThis also telescopes, but with a 'gap' of 2 — so two terms survive at each end.",
    },
    {
      kind: "callout",
      variant: "definition",
      title: "Key summation formulas",
      content:
        "• $1 + 2 + \\cdots + n = \\dfrac{n(n+1)}{2}$\n• $1 + 3 + 5 + \\cdots + (2n-1) = n^2$\n• $1^2 + 2^2 + \\cdots + n^2 = \\dfrac{n(n+1)(2n+1)}{6}$\n• $1^3 + 2^3 + \\cdots + n^3 = \\left(\\dfrac{n(n+1)}{2}\\right)^2$\n• $\\displaystyle\\sum_{k=1}^{n} \\frac{1}{k(k+1)} = 1 - \\frac{1}{n+1}$\n• $\\displaystyle\\sum_{k=1}^{n} \\frac{1}{k(k+2)} = \\frac{1}{2}\\left(\\frac{3}{2} - \\frac{1}{n+1} - \\frac{1}{n+2}\\right)$",
    },
    {
      kind: "callout",
      variant: "tip",
      title: "Spotting a telescope",
      content:
        "If each term of a sum can be written as $f(k) - f(k+1)$ (or $f(k) - f(k+d)$ for some fixed $d$), the sum telescopes. Common triggers:\n• Fractions with consecutive integers in the denominator\n• Expressions like $\\sqrt{k+1} - \\sqrt{k}$ (rationalise first)\n• Products like $k \\cdot k!$ (since $k \\cdot k! = (k+1)! - k!$)",
    },
    {
      kind: "check",
      id: "ns-c19",
      prompt:
        "Evaluate: $1 + 2 + 3 + \\cdots + 100$.",
      format: "numeric",
      answer: "5050",
      hint: "Use Gauss's formula: $n(n+1)/2$ with $n = 100$.",
      explanation:
        "$100 \\times 101 / 2 = 5050$.",
    },
    {
      kind: "check",
      id: "ns-c20",
      prompt:
        "What is the sum of the first 20 odd numbers?",
      format: "numeric",
      answer: "400",
      hint: "The sum of the first $n$ odd numbers is $n^2$.",
      explanation:
        "Sum of first 20 odd numbers $= 20^2 = 400$.",
    },
    {
      kind: "check",
      id: "ns-c21",
      prompt:
        "Evaluate $\\displaystyle\\sum_{k=1}^{99} \\frac{1}{k(k+1)}$. Give your answer as a fraction.",
      format: "text",
      answer: "99/100",
      acceptedAnswers: ["99/100"],
      hint: "This telescopes: $\\frac{1}{k(k+1)} = \\frac{1}{k} - \\frac{1}{k+1}$. Most terms cancel.",
      explanation:
        "$\\sum_{k=1}^{99} \\left(\\frac{1}{k} - \\frac{1}{k+1}\\right) = 1 - \\frac{1}{100} = \\frac{99}{100}$.",
    },
    {
      kind: "check",
      id: "ns-c22",
      prompt:
        "Evaluate $\\dfrac{1}{1 \\times 3} + \\dfrac{1}{3 \\times 5} + \\dfrac{1}{5 \\times 7} + \\cdots + \\dfrac{1}{99 \\times 101}$. Give your answer as a fraction.",
      format: "text",
      answer: "50/101",
      acceptedAnswers: ["50/101"],
      hint: "Use partial fractions: $\\frac{1}{(2k-1)(2k+1)} = \\frac{1}{2}\\left(\\frac{1}{2k-1} - \\frac{1}{2k+1}\\right)$. This telescopes.",
      explanation:
        "$\\frac{1}{(2k-1)(2k+1)} = \\frac{1}{2}\\left(\\frac{1}{2k-1} - \\frac{1}{2k+1}\\right)$. Summing from $k=1$ to $k=50$:\n$\\frac{1}{2}\\left(1 - \\frac{1}{101}\\right) = \\frac{1}{2} \\cdot \\frac{100}{101} = \\frac{50}{101}$.",
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // SECTION 8: Competition patterns & estimation
    // ═══════════════════════════════════════════════════════════════════════════
    {
      kind: "prose",
      heading: "8 · Competition patterns & estimation",
      content:
        "The final skill for IMC Q1-10 is pattern recognition — seeing the quick route through problems that are designed to look harder than they are.\n\n**Regrouping terms:** In expressions like $2024 - 2023 + 2022 - 2021 + \\cdots$, pair adjacent terms: each pair $(2024 - 2023) = 1$, $(2022 - 2021) = 1$, etc. Count the pairs to get the answer.\n\n**Calendar/day-of-week problems:** A normal year has 365 days $= 52 \\times 7 + 1$, so dates shift forward by 1 day each year (2 for leap years). To find a day of the week, work from a known reference day.\n\n**Digital roots and casting out nines:** The digital root of $n$ equals $n \\bmod 9$ (with 9 instead of 0). This lets you check arithmetic: if $a \\times b = c$, then the digital root of $c$ must equal the product of the digital roots of $a$ and $b$ (mod 9). If it doesn't, you've made an error.\n\n**Order-of-magnitude reasoning:** For 'which is biggest?' problems, estimate each option to one or two significant figures. Often you can eliminate 3-4 options quickly, leaving at most one to check carefully.",
    },
    {
      kind: "callout",
      variant: "tip",
      title: "Alternating-sign sum trick",
      content:
        "For $a_1 - a_2 + a_3 - a_4 + \\cdots$ with consecutive integers or arithmetic sequences:\n• If the terms decrease by 1 each time, pair them: $(a_1 - a_2) + (a_3 - a_4) + \\cdots$\n• Each pair gives a constant (often 1 or $-1$)\n• Count the number of pairs to get the final answer\n\nExample: $100 - 99 + 98 - 97 + \\cdots + 2 - 1 = 50$ (there are 50 pairs, each giving 1).",
    },
    {
      kind: "callout",
      variant: "definition",
      title: "Casting out nines — quick check",
      content:
        "• Digital root of $n$ = repeated digit sum until single digit (equivalently $n \\bmod 9$, with 9 for multiples of 9)\n• For addition: $\\text{dr}(a + b) = \\text{dr}(\\text{dr}(a) + \\text{dr}(b))$\n• For multiplication: $\\text{dr}(a \\times b) = \\text{dr}(\\text{dr}(a) \\times \\text{dr}(b))$\n• If the digital root doesn't match, the answer is definitely wrong\n• If it does match, the answer is probably right (but not guaranteed — it misses errors that are multiples of 9)",
    },
    {
      kind: "check",
      id: "ns-c23",
      prompt:
        "Evaluate $1 - 2 + 3 - 4 + 5 - 6 + \\cdots + 99 - 100$.",
      format: "numeric",
      answer: "-50",
      acceptedAnswers: ["-50"],
      hint: "Pair consecutive terms: $(1-2) + (3-4) + \\cdots + (99-100)$. Each pair equals $-1$.",
      explanation:
        "There are 50 pairs, each equal to $-1$. Total $= 50 \\times (-1) = -50$.",
    },
    {
      kind: "check",
      id: "ns-c24",
      prompt:
        "Using casting out nines, determine if $123 \\times 456 = 56,088$ is correct. (Answer 'yes' or 'no'.)",
      format: "text",
      answer: "yes",
      acceptedAnswers: ["yes", "Yes", "YES"],
      hint: "Digital root of 123: $1+2+3=6$. Digital root of 456: $4+5+6=15 \\to 6$. Product of digital roots: $6 \\times 6 = 36 \\to 9$. Digital root of 56088: $5+6+0+8+8=27 \\to 9$.",
      explanation:
        "DR(123) = 6, DR(456) = 6. $6 \\times 6 = 36$, DR(36) = 9. DR(56088) = $5+6+0+8+8 = 27 \\to 9$. The digital roots match (both 9), so the answer passes the casting-out-nines test. (And indeed $123 \\times 456 = 56088$ is correct.)",
    },
    {
      kind: "check",
      id: "ns-c25",
      prompt:
        "January 1st, 2025 is a Wednesday. What day of the week is January 1st, 2026?",
      format: "text",
      answer: "Thursday",
      acceptedAnswers: ["Thursday", "thursday", "THURSDAY", "Thu"],
      hint: "2025 is not a leap year, so it has 365 days. $365 = 52 \\times 7 + 1$, so the day advances by 1.",
      explanation:
        "2025 has 365 days (not a leap year). $365 \\div 7 = 52$ remainder 1. So January 1st, 2026 is one day after Wednesday, which is Thursday.",
    },
  ],

  workedExamples: [
    {
      kind: "example",
      title: "Speed multiplication using difference of squares",
      statement:
        "Compute $37 \\times 43$ without a calculator.",
      approach:
        "Notice that 37 and 43 are equidistant from 40: $37 = 40 - 3$ and $43 = 40 + 3$. Apply the difference of squares identity.",
      solution:
        "$37 \\times 43 = (40 - 3)(40 + 3) = 40^2 - 3^2 = 1600 - 9 = 1591$.\n\nVerification via casting out nines: DR(37) = 1, DR(43) = 7. $1 \\times 7 = 7$. DR(1591) = $1+5+9+1 = 16 \\to 7$. ✓\n\nThis technique works whenever two numbers are symmetric about a round number. Scan for it any time you see a product in a competition.",
    },
    {
      kind: "example",
      title: "Finding last two digits of a large power",
      statement:
        "Find the last two digits of $7^{2024}$.",
      approach:
        "We need $7^{2024} \\bmod 100$. Use the pattern that powers of 7 modulo 100 cycle with period 4 (since $7^4 = 2401 \\equiv 1 \\pmod{100}$... but let's verify).",
      solution:
        "Compute powers of 7 mod 100:\n• $7^1 = 07$\n• $7^2 = 49$\n• $7^3 = 343 \\to 43$\n• $7^4 = 7 \\times 43 = 301 \\to 01$\n\nSo $7^4 \\equiv 1 \\pmod{100}$, and the cycle has period 4.\n\nSince $2024 = 4 \\times 506$, we have $7^{2024} = (7^4)^{506} \\equiv 1^{506} = 1 \\pmod{100}$.\n\nThe last two digits of $7^{2024}$ are $\\mathbf{01}$.",
    },
    {
      kind: "example",
      title: "Telescoping sum evaluation",
      statement:
        "Evaluate $\\dfrac{1}{1 \\times 2} + \\dfrac{1}{2 \\times 3} + \\dfrac{1}{3 \\times 4} + \\cdots + \\dfrac{1}{49 \\times 50}$.",
      approach:
        "Decompose each term using partial fractions: $\\frac{1}{k(k+1)} = \\frac{1}{k} - \\frac{1}{k+1}$. Then observe the telescoping cancellation.",
      solution:
        "Write each term as a difference:\n$$\\left(\\frac{1}{1} - \\frac{1}{2}\\right) + \\left(\\frac{1}{2} - \\frac{1}{3}\\right) + \\left(\\frac{1}{3} - \\frac{1}{4}\\right) + \\cdots + \\left(\\frac{1}{49} - \\frac{1}{50}\\right)$$\n\nAlmost everything cancels! All intermediate terms appear once with $+$ and once with $-$. Only the first term of the first bracket and the last term of the last bracket survive:\n$$= 1 - \\frac{1}{50} = \\frac{49}{50}$$",
    },
    {
      kind: "example",
      title: "Reverse percentage IMC problem",
      statement:
        "In a sale, all prices are reduced by 15%. The sale price of a coat is £68. What was the original price?",
      approach:
        "A 15% reduction means the customer pays 85% of the original. So: Original $\\times 0.85 = 68$.",
      solution:
        "Original price $= \\dfrac{68}{0.85} = \\dfrac{68}{85/100} = \\dfrac{68 \\times 100}{85} = \\dfrac{6800}{85} = 80$.\n\nThe original price was £80.\n\nCheck: 15% of £80 = £12. Sale price = £80 - £12 = £68. ✓\n\nCommon error: computing 15% of £68 = £10.20 and adding to get £78.20. This is WRONG because the 15% was taken off the original, not the sale price. Always divide by the multiplier, never add a percentage of the final value.",
    },
  ],

  practiceProblemIds: [],
  challengeProblemIds: [],

  summary: {
    keyFormulas: [
      "Reverse digits: $\\overline{ab} - \\overline{ba} = 9(a-b)$; $\\overline{abc} - \\overline{cba} = 99(a-c)$",
      "Last-digit cycle: find exponent $\\bmod 4$ and read off the cycle (period 4 for digits 2,3,7,8)",
      "Difference of squares backwards: $m \\times n = \\left(\\frac{m+n}{2}\\right)^2 - \\left(\\frac{m-n}{2}\\right)^2$",
      "Ends-in-5 squaring: $(10a+5)^2 = a(a+1) \\times 100 + 25$",
      "Recurring decimals: $0.\\overline{d_1 d_2 \\ldots d_n} = \\frac{d_1 d_2 \\ldots d_n}{\\underbrace{99\\ldots9}_{n}}$",
      "Percentage symmetry: $x\\%$ of $y = y\\%$ of $x$",
      "Gauss sum: $1+2+\\cdots+n = n(n+1)/2$; sum of first $n$ odds $= n^2$",
      "Telescoping: $\\sum_{k=1}^{n} \\frac{1}{k(k+1)} = 1 - \\frac{1}{n+1}$",
    ],
    bigIdeas: [
      "Look for structure before computing — almost every IMC Q1-10 has a shortcut hiding in plain sight.",
      "Products of numbers near a round number scream 'difference of squares'.",
      "Recurring decimals are just fractions over 9s — learn to convert both ways instantly.",
      "Telescoping works whenever you can write each term as $f(k) - f(k+\\text{const})$.",
      "Casting out nines is a free error-check that takes seconds.",
    ],
    patternTips: [
      "See two numbers equidistant from a round number → difference of squares.",
      "'Last digit of $n^k$' → find $k \\bmod 4$ and use the 4-cycle.",
      "A sum of unit fractions with linear denominators → try partial fractions, expect telescoping.",
      "'After a $p\\%$ increase/decrease' → work with multipliers (1.p or 0.q), never add/subtract percentages of the wrong base.",
      "Alternating sign sums → pair adjacent terms for instant simplification.",
    ],
    traps: [
      "Reverse percentage: never add $p\\%$ of the final value — always divide by the multiplier.",
      "Successive percentage changes: $+p\\%$ then $-p\\%$ does NOT give zero net change.",
      "Last-digit cycles: remainder 0 means take the LAST entry in the cycle, not the first.",
      "Telescoping partial fractions: check the gap (is it $1/(k) - 1/(k+1)$ or $1/(k) - 1/(k+2)$?) — different gaps leave different surviving terms.",
      "Digital root only catches errors that are NOT multiples of 9 — it can miss some mistakes.",
    ],
    revisionNotes: [
      "Memorise squares to $25^2$, cubes to $10^3$, and powers of 2 to $2^{10}$ — these save time on many problems.",
      "Practise the $\\times 11$, $\\times 99$, and $\\times 25$ shortcuts until they are faster than long multiplication.",
      "Work through 10 telescoping sum problems to build the reflex of trying partial fractions on any fraction sum.",
      "For percentage problems, always write down the multiplier first (e.g. 1.15, 0.80) before doing any arithmetic.",
      "Before submitting any competition answer, spend 5 seconds on a casting-out-nines check.",
    ],
  },
};
