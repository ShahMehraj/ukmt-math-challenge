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
    {
      kind: "prose",
      heading: "",
      content:
        "**More digit manipulation techniques:**\n\n**Technique: Product/sum of a number and its reverse**\n\nIf a two-digit number is $N = 10a + b$, its reverse is $R = 10b + a$. Then:\n$$N + R = 11(a+b), \\qquad N - R = 9(a-b)$$\n$$N \\times R = (10a+b)(10b+a)$$\n\nThe sum is always divisible by 11, and the difference by 9.\n\n**Technique: The number formed by repeating digits**\n$$\\overline{aaa\\ldots a}\\;(n\\text{ digits}) = a \\times \\underbrace{111\\ldots1}_{n} = a \\times \\frac{10^n-1}{9}$$\nSo $\\overline{aaa} = a \\times 111 = a \\times 3 \\times 37$.\n\n**Technique: Digit-counting in ranges**\n\nHow many digits are used writing all integers from 1 to $N$?\n- 1-digit numbers (1–9): $9 \\times 1 = 9$ digits\n- 2-digit numbers (10–99): $90 \\times 2 = 180$ digits\n- 3-digit numbers (100–999): $900 \\times 3 = 2700$ digits\n- In general: $k$-digit numbers contribute $9 \\times 10^{k-1} \\times k$ digits\n\n**Technique: Forming equations from digit relationships**\n\nA number is 4 times the sum of its digits: let $N = 10a + b$. Then $10a+b = 4(a+b)$, giving $6a = 3b$, i.e. $b = 2a$. Possible: 12, 24, 36, 48.",
    },
    {
      kind: "callout",
      variant: "tip",
      title: "Divisibility shortcuts via digits",
      content:
        "• Divisible by 2: last digit even\n• Divisible by 3: digit sum divisible by 3\n• Divisible by 4: last two digits form a number divisible by 4\n• Divisible by 5: last digit 0 or 5\n• Divisible by 6: divisible by both 2 and 3\n• Divisible by 8: last three digits divisible by 8\n• Divisible by 9: digit sum divisible by 9\n• Divisible by 11: alternating digit sum divisible by 11\n• Divisible by 7: no simple digit rule (use division or the 'double-and-subtract' method)",
    },
    {
      kind: "check",
      id: "ns-c3b",
      prompt:
        "A three-digit number $\\overline{abc}$ satisfies $\\overline{abc} = 5(a+b+c)^2$. Find all such numbers.",
      format: "text",
      answer: "405, 605",
      acceptedAnswers: ["405, 605", "405 and 605", "605, 405"],
      hint: "Let $s = a+b+c$. Then $100a+10b+c = 5s^2$. Since $100 \\le 5s^2 \\le 999$: $20 \\le s^2 \\le 199.8$, so $5 \\le s \\le 14$. Try each value.",
      explanation:
        "$5s^2$ must be a 3-digit number whose digits sum to $s$.\n$s=5$: $5(25)=125$. Digit sum $=1+2+5=8\\neq5$ ✗.\n$s=6$: $180$. Sum $=9\\neq6$ ✗.\n$s=7$: $245$. Sum $=11\\neq7$ ✗.\n$s=8$: $320$. Sum $=5\\neq8$ ✗.\n$s=9$: $405$. Sum $=9$ ✓... but $405/5=81=9^2$ ✓. Wait: $5(9)^2=405$. Digit sum of 405: $4+0+5=9$ ✓!\n$s=10$: $500$. Sum $=5\\neq10$ ✗.\n\nActually let me recheck $s=10$: $5(100)=500$. Sum $=5+0+0=5\\neq10$ ✗.\n$s=5$: $125$. Sum $=8$ ✗.\n$s=9$: $405$. Sum $=9$ ✓.\n$s=10$: $500$. Sum $=5$ ✗.\n$s=11$: $605$. Sum $=11$ ✓!\n$s=12$: $720$. Sum $=9$ ✗.\n$s=13$: $845$. Sum $=17$ ✗.\n$s=14$: $980$. Sum $=17$ ✗.\n\nAnswers: 405 and 605.",
    },
    {
      kind: "check",
      id: "ns-c3c",
      prompt:
        "How many total digits are used in writing all integers from 1 to 200?",
      format: "numeric",
      answer: "492",
      hint: "1–9: $9 \\times 1 = 9$ digits. 10–99: $90 \\times 2 = 180$ digits. 100–200: $101 \\times 3 = ?$ digits.",
      explanation:
        "1-digit (1–9): $9$ digits.\n2-digit (10–99): $90 \\times 2 = 180$ digits.\n3-digit (100–200): $101 \\times 3 = 303$ digits.\nTotal: $9 + 180 + 303 = 492$.",
    },
    {
      kind: "check",
      id: "ns-c3d",
      prompt:
        "Find the sum of all two-digit numbers that are divisible by both 3 and 5.",
      format: "numeric",
      answer: "315",
      hint: "Divisible by both 3 and 5 means divisible by 15. List: 15, 30, 45, 60, 75, 90.",
      explanation:
        "Two-digit multiples of 15: $15, 30, 45, 60, 75, 90$.\nSum $= 15+30+45+60+75+90 = 315$.\n(Or use AP formula: $n=6$, $a=15$, $l=90$. Sum $= 6(15+90)/2 = 315$.)",
    },
    {
      kind: "check",
      id: "ns-c3e",
      prompt:
        "A number $N$ is formed by writing all integers from 1 to 15 consecutively: $N = 123456789101112131415$. What is the remainder when $N$ is divided by 9?",
      format: "numeric",
      answer: "3",
      hint: "Remainder mod 9 = digit sum mod 9 = sum of all digits in 1 through 15 mod 9. Sum of integers 1–15 = 120.",
      explanation:
        "Digit sum of $N$ = sum of all digits of numbers 1–15.\nThis equals the sum $1+2+\\cdots+15 = 120$ (since single-digit numbers contribute their value, and for 10–15, the tens digits sum to $1 \\times 6 = 6$ and units to $0+1+2+3+4+5=15$; total $= 6+15+1+2+\\cdots+9 = 6+15+45 = 66$).\n\nActually simpler: digit sum $\\equiv$ number $\\pmod{9}$, and $N \\equiv$ sum of all the numbers 1–15 $\\pmod{9}$ (since concatenation preserves digit sum). $1+2+\\cdots+15 = 120$. $120 = 13 \\times 9 + 3$. Hmm, that gives 3.\n\nWait — concatenation does NOT equal the sum of numbers. The digit sum of the concatenation equals the sum of digit sums of each number. Digit sum of 10 is 1, of 11 is 2, ..., of 15 is 6. So total digit sum $= (1+2+\\cdots+9) + (1+2+3+4+5+6) = 45 + 21 = 66$. $66 \\mod 9 = 66 - 63 = 3$.\n\nSo remainder is 3, not 0. Let me fix the answer.",
    },
    {
      kind: "check",
      id: "ns-c3f",
      prompt:
        "The product of the digits of a two-digit number is 12. If 36 is added to the number, the digits are reversed. Find the number.",
      format: "numeric",
      answer: "26",
      hint: "Let number $= 10a+b$. Then $ab = 12$ and $10a+b+36 = 10b+a$, i.e. $9(b-a) = 36$, so $b-a = 4$.",
      explanation:
        "$b - a = 4$ and $ab = 12$. From first: $b = a+4$. Substitute: $a(a+4) = 12$, $a^2+4a-12 = 0$, $(a+6)(a-2)=0$.\n$a = 2$ (since $a > 0$), $b = 6$. Number $= 26$.\nCheck: $2 \\times 6 = 12$ ✓. $26 + 36 = 62$ (reversed) ✓.",
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
    {
      kind: "prose",
      heading: "",
      content:
        "**Last TWO digits (mod 100):**\n\nFor competition problems asking 'last two digits', you need $n^k \\bmod 100$. Key shortcuts:\n\n• $2^{10} = 1024 \\equiv 24 \\pmod{100}$\n• $2^{20} \\equiv 24^2 = 576 \\equiv 76 \\pmod{100}$\n• $2^{40} \\equiv 76^2 = 5776 \\equiv 76 \\pmod{100}$ (76 is a fixed point!)\n• So for large even powers of 2: last two digits cycle with period 20.\n\n**Comparing large powers:**\n\nWhich is larger: $2^{300}$ or $3^{200}$?\n$$2^{300} = (2^3)^{100} = 8^{100}, \\qquad 3^{200} = (3^2)^{100} = 9^{100}$$\nSince $9 > 8$: $3^{200} > 2^{300}$.\n\n**Number of digits in $n^k$:**\n$$\\text{Number of digits of } N = \\lfloor \\log_{10} N \\rfloor + 1$$\nSo number of digits of $2^{100} = \\lfloor 100 \\log_{10} 2 \\rfloor + 1 = \\lfloor 30.103 \\rfloor + 1 = 31$.\n\n**Perfect square tests:**\nA perfect square can only end in: 0, 1, 4, 5, 6, 9. It can NEVER end in 2, 3, 7, or 8.\nAlso: a perfect square is always $\\equiv 0$ or $1 \\pmod{4}$.",
    },
    {
      kind: "callout",
      variant: "tip",
      title: "Quick mental estimation of roots",
      content:
        "**Linear interpolation for square roots:**\n\n$\\sqrt{n} \\approx a + \\dfrac{n - a^2}{2a}$ where $a^2$ is the nearest perfect square below $n$.\n\nExample: $\\sqrt{50} \\approx 7 + \\frac{50-49}{14} = 7 + \\frac{1}{14} \\approx 7.07$.\n\n**Cube root estimation:**\n\n$\\sqrt[3]{n} \\approx a + \\dfrac{n - a^3}{3a^2}$ where $a^3$ is nearest perfect cube below $n$.\n\nExample: $\\sqrt[3]{30} \\approx 3 + \\frac{30-27}{27} = 3 + \\frac{1}{9} \\approx 3.11$.",
    },
    {
      kind: "check",
      id: "ns-c6b",
      prompt:
        "What are the last two digits of $7^{20}$?",
      format: "numeric",
      answer: "1",
      acceptedAnswers: ["01", "1"],
      hint: "$7^2 = 49$. $7^4 = 2401 \\equiv 01 \\pmod{100}$. So $7^{20} = (7^4)^5 \\equiv 1^5$.",
      explanation:
        "$7^4 = 2401 \\equiv 01 \\pmod{100}$.\n$7^{20} = (7^4)^5 \\equiv 01^5 = 01 \\pmod{100}$.\nLast two digits: 01.",
    },
    {
      kind: "check",
      id: "ns-c6c",
      prompt:
        "How many digits does $2^{50}$ have? (Use $\\log_{10} 2 \\approx 0.301$.)",
      format: "numeric",
      answer: "16",
      hint: "Number of digits $= \\lfloor 50 \\times 0.301 \\rfloor + 1 = \\lfloor 15.05 \\rfloor + 1$.",
      explanation:
        "Digits $= \\lfloor 50 \\times 0.301 \\rfloor + 1 = \\lfloor 15.05 \\rfloor + 1 = 15 + 1 = 16$.\n($2^{50} = 1125899906842624$, which is indeed 16 digits.)",
    },
    {
      kind: "check",
      id: "ns-c6d",
      prompt:
        "Which is larger: $5^{30}$ or $3^{50}$?",
      format: "text",
      answer: "3^50",
      acceptedAnswers: ["3^50", "3^{50}", "3⁵⁰"],
      hint: "Take $\\log_{10}$: $30\\log 5 = 30(0.699) = 20.97$. $50\\log 3 = 50(0.477) = 23.85$.",
      explanation:
        "$\\log_{10}(5^{30}) = 30 \\times 0.699 = 20.97$.\n$\\log_{10}(3^{50}) = 50 \\times 0.477 = 23.85$.\nSince $23.85 > 20.97$: $3^{50} > 5^{30}$.",
    },
    {
      kind: "check",
      id: "ns-c6e",
      prompt:
        "Can $n^2 + 3$ ever be a perfect square for positive integer $n$? (Answer yes/no.)",
      format: "text",
      answer: "yes",
      acceptedAnswers: ["yes", "Yes", "YES"],
      hint: "Try $n = 1$: $1 + 3 = 4 = 2^2$. Done!",
      explanation:
        "$n = 1$: $1 + 3 = 4 = 2^2$ ✓. So yes, it can be a perfect square.\n(For $n \\ge 2$: $n^2 < n^2+3 < (n+1)^2 = n^2+2n+1$ when $3 < 2n+1$, i.e. $n \\ge 2$. So $n=1$ is the ONLY solution.)",
    },
    {
      kind: "check",
      id: "ns-c6f",
      prompt:
        "What is the last digit of $1^1 + 2^2 + 3^3 + 4^4 + 5^5 + 6^6 + 7^7 + 8^8 + 9^9 + 10^{10}$?",
      format: "numeric",
      answer: "7",
      hint: "Find the last digit of each $n^n$ separately: $1^1=1$, $2^2=4$, $3^3=27$ (last digit 7), $4^4=256$ (last digit 6), ...",
      explanation:
        "Last digits: $1^1 \\to 1$, $2^2 \\to 4$, $3^3 \\to 7$, $4^4 \\to 6$, $5^5 \\to 5$, $6^6 \\to 6$, $7^7 \\to 3$ (cycle 7,9,3,1; $7 \\bmod 4 = 3$, 3rd entry), $8^8 \\to 6$ (cycle 8,4,2,6; $8 \\bmod 4 = 0$, 4th entry), $9^9 \\to 9$ (cycle 9,1; $9 \\bmod 2 = 1$), $10^{10} \\to 0$.\nSum of last digits: $1+4+7+6+5+6+3+6+9+0 = 47$. Last digit $= 7$.",
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
    {
      kind: "prose",
      heading: "",
      content:
        "**More difference-of-squares applications:**\n\n**Factorising sums/differences of large numbers:**\n$$10^6 - 1 = (10^3+1)(10^3-1) = 1001 \\times 999 = 999999$$\n$$10^4 - 1 = (10^2+1)(10^2-1) = 101 \\times 99 = 9999$$\n\n**Proving divisibility:**\nShow $n^2 - 1$ is always divisible by 8 for odd $n$:\n$$n^2 - 1 = (n-1)(n+1)$$\nIf $n$ is odd, both $n-1$ and $n+1$ are even — in fact consecutive even numbers. One is divisible by 4, the other by 2. Product divisible by 8. ✓\n\n**The sum of consecutive odd numbers:**\n$$1 + 3 + 5 + \\cdots + (2n-1) = n^2$$\nSo $n^2 - (n-1)^2 = 2n-1$ (always the $n$-th odd number).\n\n**The 'split and multiply' trick:**\n$$37 \\times 43 = (40-3)(40+3) = 1600 - 9 = 1591$$\n$$96 \\times 104 = (100-4)(100+4) = 10000 - 16 = 9984$$\n$$199 \\times 201 = (200)^2 - 1 = 39999$$\n\n**Sophie Germain (for sums of squares that factor):**\n$$a^4 + 4b^4 = (a^2+2b^2)^2 - (2ab)^2 = (a^2+2b^2+2ab)(a^2+2b^2-2ab)$$",
    },
    {
      kind: "callout",
      variant: "tip",
      title: "When to use difference of squares vs direct multiplication",
      content:
        "Use $(a+b)(a-b) = a^2-b^2$ when:\n• Both factors are equidistant from a round number (47×53, 96×104)\n• You need to factorise $n^2 - k^2$ (write as $(n+k)(n-k)$)\n• The problem asks 'how many factors' or 'divisibility' — factor first!\n\nUse $(a+b)^2 = a^2+2ab+b^2$ when:\n• Squaring a number near a round value ($103^2$, $998^2$)\n• You know a nearby square and want to step ($n^2 \\to (n+1)^2$)",
    },
    {
      kind: "check",
      id: "ns-c9b",
      prompt:
        "Compute $998^2$ mentally.",
      format: "numeric",
      answer: "996004",
      hint: "$998 = 1000 - 2$. Use $(1000-2)^2 = 1000000 - 4000 + 4$.",
      explanation:
        "$998^2 = (1000-2)^2 = 1000000 - 2(1000)(2) + 4 = 1000000 - 4000 + 4 = 996004$.",
    },
    {
      kind: "check",
      id: "ns-c9c",
      prompt:
        "Factorise $2021^2 - 2019^2$ without computing either square.",
      format: "numeric",
      answer: "8080",
      hint: "Use $a^2 - b^2 = (a+b)(a-b)$ with $a = 2021$, $b = 2019$.",
      explanation:
        "$2021^2 - 2019^2 = (2021+2019)(2021-2019) = 4040 \\times 2 = 8080$.",
    },
    {
      kind: "check",
      id: "ns-c9d",
      prompt:
        "Compute $1 + 3 + 5 + 7 + \\cdots + 99$ (sum of first 50 odd numbers).",
      format: "numeric",
      answer: "2500",
      hint: "Sum of first $n$ odd numbers $= n^2$. Here $n = 50$.",
      explanation:
        "The 50th odd number is $2(50)-1 = 99$. Sum of first 50 odd numbers $= 50^2 = 2500$.",
    },
    {
      kind: "check",
      id: "ns-c9e",
      prompt:
        "Show that for any odd number $n$, $n^2 - 1$ is divisible by 8. What is the value of $\\dfrac{99^2 - 1}{8}$?",
      format: "numeric",
      answer: "1225",
      hint: "$99^2-1 = (99+1)(99-1) = 100 \\times 98 = 9800$. Divide by 8.",
      explanation:
        "$99^2-1 = (100)(98) = 9800$. $9800/8 = 1225$.\n(General proof: $n$ odd $\\implies n-1, n+1$ are consecutive evens. One is divisible by 4, product divisible by 8.)",
    },
    {
      kind: "check",
      id: "ns-c9f",
      prompt:
        "Without a calculator, compute $199 \\times 201$.",
      format: "numeric",
      answer: "39999",
      hint: "$(200-1)(200+1) = 200^2 - 1$.",
      explanation:
        "$199 \\times 201 = (200-1)(200+1) = 40000 - 1 = 39999$.",
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
    {
      kind: "prose",
      heading: "",
      content:
        "**Advanced fraction techniques:**\n\n**Terminating vs recurring — the quick test:**\n\nA fraction $p/q$ (in lowest terms) terminates iff $q = 2^a \\times 5^b$.\nOtherwise it recurs, and the period divides $\\phi(q)$ (Euler's totient).\n\n**The '1/7 family' — cyclic permutations:**\n$$1/7 = 0.\\overline{142857}, \\quad 2/7 = 0.\\overline{285714}, \\quad 3/7 = 0.\\overline{428571}$$\nAll are cyclic rotations of the same 6 digits! This happens because 7 is a 'full-reptend prime' (period = $p-1$).\n\n**Mediant of fractions:**\n\nThe mediant of $a/b$ and $c/d$ is $\\frac{a+c}{b+d}$. It always lies between the two fractions (when both are positive). This is useful for competition 'find a fraction between' problems.\n\n**Partial fractions for competition sums:**\n$$\\frac{1}{n(n+1)} = \\frac{1}{n} - \\frac{1}{n+1}$$\n$$\\frac{1}{n(n+2)} = \\frac{1}{2}\\left(\\frac{1}{n} - \\frac{1}{n+2}\\right)$$\nThese telescope! So:\n$$\\frac{1}{1 \\times 2} + \\frac{1}{2 \\times 3} + \\cdots + \\frac{1}{99 \\times 100} = 1 - \\frac{1}{100} = \\frac{99}{100}$$",
    },
    {
      kind: "callout",
      variant: "tip",
      title: "Ordering fractions without a calculator",
      content:
        "**Method 1 — Cross multiplication:** Compare $a/b$ with $c/d$: if $ad > bc$ then $a/b > c/d$.\n\n**Method 2 — Same numerator:** If $a/b$ and $a/c$ have the same numerator, the one with the smaller denominator is larger.\n\n**Method 3 — Complement to 1:** Compare $1 - a/b = (b-a)/b$ with $1 - c/d = (d-c)/d$. Whichever 'gap' is smaller corresponds to the larger fraction.\n\nExample: Compare $7/9$ and $11/14$.\nGap from 1: $2/9$ vs $3/14$. Cross-multiply: $2 \\times 14 = 28$ vs $3 \\times 9 = 27$. Since $28 > 27$: $2/9 > 3/14$, meaning $7/9$ has a LARGER gap, so $7/9 < 11/14$.",
    },
    {
      kind: "check",
      id: "ns-c15b",
      prompt:
        "Evaluate: $\\dfrac{1}{1 \\times 2} + \\dfrac{1}{2 \\times 3} + \\dfrac{1}{3 \\times 4} + \\cdots + \\dfrac{1}{49 \\times 50}$.",
      format: "text",
      answer: "49/50",
      acceptedAnswers: ["49/50"],
      hint: "Each term $\\frac{1}{n(n+1)} = \\frac{1}{n} - \\frac{1}{n+1}$. The sum telescopes!",
      explanation:
        "$\\sum_{n=1}^{49} \\left(\\frac{1}{n}-\\frac{1}{n+1}\\right) = 1 - \\frac{1}{50} = \\frac{49}{50}$.",
    },
    {
      kind: "check",
      id: "ns-c15c",
      prompt:
        "Convert $0.1\\overline{6}$ (i.e. $0.16666\\ldots$) to a fraction.",
      format: "text",
      answer: "1/6",
      acceptedAnswers: ["1/6"],
      hint: "Non-repeating: 1 digit. Repeating: 1 digit. Formula: $\\frac{16-1}{90} = \\frac{15}{90}$.",
      explanation:
        "Using the formula: $\\frac{16-1}{90} = \\frac{15}{90} = \\frac{1}{6}$.\nOr: let $x = 0.1\\overline{6}$. $10x = 1.\\overline{6}$. $100x = 16.\\overline{6}$. $100x-10x = 15$. $90x = 15$. $x = 1/6$.",
    },
    {
      kind: "check",
      id: "ns-c15d",
      prompt:
        "Arrange in ascending order: $\\dfrac{3}{7}$, $\\dfrac{5}{11}$, $\\dfrac{4}{9}$.",
      format: "text",
      answer: "3/7, 4/9, 5/11",
      acceptedAnswers: ["3/7, 4/9, 5/11", "3/7 < 4/9 < 5/11"],
      hint: "Cross-multiply pairs: $3/7$ vs $4/9$: $27$ vs $28$. $4/9$ vs $5/11$: $44$ vs $45$.",
      explanation:
        "$3/7$ vs $4/9$: $3 \\times 9 = 27 < 4 \\times 7 = 28$, so $3/7 < 4/9$.\n$4/9$ vs $5/11$: $4 \\times 11 = 44 < 5 \\times 9 = 45$, so $4/9 < 5/11$.\nOrder: $3/7 < 4/9 < 5/11$.",
    },
    {
      kind: "check",
      id: "ns-c15e",
      prompt:
        "What is the 100th digit after the decimal point in the decimal expansion of $1/7$?",
      format: "numeric",
      answer: "8",
      hint: "$1/7 = 0.\\overline{142857}$ (period 6). $100 \\div 6 = 16$ remainder $4$. The 4th digit in the cycle is...",
      explanation:
        "Cycle: 1, 4, 2, 8, 5, 7 (period 6). $100 = 16 \\times 6 + 4$. The 4th digit in the cycle is $8$.",
    },
    {
      kind: "check",
      id: "ns-c15f",
      prompt:
        "Find a fraction between $\\dfrac{3}{5}$ and $\\dfrac{2}{3}$ using the mediant. What is it?",
      format: "text",
      answer: "5/8",
      acceptedAnswers: ["5/8"],
      hint: "Mediant of $a/b$ and $c/d$ is $(a+c)/(b+d)$.",
      explanation:
        "Mediant $= \\frac{3+2}{5+3} = \\frac{5}{8}$.\nCheck: $3/5 = 0.6$, $5/8 = 0.625$, $2/3 = 0.667$. Indeed $3/5 < 5/8 < 2/3$ ✓.",
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
    {
      kind: "prose",
      heading: "",
      content:
        "**More percentage patterns:**\n\n**Successive increases/decreases — the multiplier chain:**\n\nIncrease by $a\\%$ then $b\\%$: multiplier $= (1+a/100)(1+b/100)$.\nOverall percentage change $= [(1+a/100)(1+b/100) - 1] \\times 100\\%$.\n\nExample: +10% then +20%: $1.1 \\times 1.2 = 1.32$, i.e. 32% increase (NOT 30%).\n\n**Population / compound growth:**\n$$\\text{Final} = \\text{Initial} \\times \\left(1 + \\frac{r}{100}\\right)^n$$\nwhere $r$ is the rate per period and $n$ is the number of periods.\n\n**Profit and loss:**\n$$\\text{Profit}\\% = \\frac{\\text{SP} - \\text{CP}}{\\text{CP}} \\times 100$$\n$$\\text{Loss}\\% = \\frac{\\text{CP} - \\text{SP}}{\\text{CP}} \\times 100$$\nAlways on **Cost Price** (CP), not Selling Price (SP)!\n\n**The 'x% increase then x% decrease' net loss:**\n$$\\text{Net change} = -\\left(\\frac{x}{10}\\right)^2 \\%$$\nSo +10% then -10% gives $-(10/10)^2 = -1\\%$ net. +20% then -20% gives $-4\\%$.",
    },
    {
      kind: "callout",
      variant: "tip",
      title: "Competition percentage tricks",
      content:
        "• **Symmetry:** $17\\%$ of $50 = 50\\%$ of $17 = 8.5$. Always swap if one number is easier to take a percentage of.\n• **Fractions as percentages:** $1/8 = 12.5\\%$, $1/6 \\approx 16.7\\%$, $1/5 = 20\\%$, $3/8 = 37.5\\%$, $5/8 = 62.5\\%$.\n• **Quick 33⅓%:** Divide by 3. Quick 66⅔%: multiply by 2 then divide by 3.\n• **Percentage of a percentage:** '25% of 40% of $N$' = $0.25 \\times 0.40 \\times N = 10\\%$ of $N$. Multiply decimals first!",
    },
    {
      kind: "check",
      id: "ns-c18b",
      prompt:
        "A price is increased by 10% and then decreased by 10%. What is the net percentage change?",
      format: "text",
      answer: "-1%",
      acceptedAnswers: ["-1%", "-1", "1% decrease"],
      hint: "Multiplier: $1.1 \\times 0.9 = ?$. Net change $= (\\text{result} - 1) \\times 100$.",
      explanation:
        "$1.1 \\times 0.9 = 0.99$. Net change $= 0.99 - 1 = -0.01 = -1\\%$.\n(A 1% decrease — you can never get back to where you started!)",
    },
    {
      kind: "check",
      id: "ns-c18c",
      prompt:
        "A shopkeeper marks goods 40% above cost price, then gives a 25% discount. What is his profit percentage?",
      format: "numeric",
      answer: "5",
      hint: "Let CP $= 100$. Marked price $= 140$. SP after discount $= 140 \\times 0.75 = ?$. Profit% $= (\\text{SP}-100)/100 \\times 100$.",
      explanation:
        "CP $= 100$. MP $= 140$. SP $= 140 \\times 0.75 = 105$.\nProfit $= 105 - 100 = 5$. Profit% $= 5\\%$.",
    },
    {
      kind: "check",
      id: "ns-c18d",
      prompt:
        "A population grows by 20% each year. After 3 years it is 8640. What was the original population?",
      format: "numeric",
      answer: "5000",
      hint: "Original $\\times (1.2)^3 = 8640$. $(1.2)^3 = 1.728$.",
      explanation:
        "$(1.2)^3 = 1.728$. Original $= 8640/1.728 = 5000$.\nCheck: $5000 \\times 1.2 = 6000 \\times 1.2 = 7200 \\times 1.2 = 8640$ ✓.",
    },
    {
      kind: "check",
      id: "ns-c18e",
      prompt:
        "Using the symmetry rule, compute 4% of 75 mentally.",
      format: "numeric",
      answer: "3",
      hint: "$4\\%$ of $75 = 75\\%$ of $4$.",
      explanation:
        "By symmetry: $4\\%$ of $75 = 75\\%$ of $4 = 3$.",
    },
    {
      kind: "check",
      id: "ns-c18f",
      prompt:
        "Two successive discounts of 20% and 30% are equivalent to a single discount of what percentage?",
      format: "numeric",
      answer: "44",
      hint: "Overall multiplier: $0.8 \\times 0.7 = ?$. Equivalent single discount $= (1 - \\text{multiplier}) \\times 100$.",
      explanation:
        "$0.8 \\times 0.7 = 0.56$. Equivalent discount $= 1 - 0.56 = 0.44 = 44\\%$.",
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
    {
      kind: "prose",
      heading: "",
      content:
        "**More telescoping and pairing patterns:**\n\n**Factorial telescoping:** $k \\cdot k! = (k+1)! - k!$.\nSo: $1 \\cdot 1! + 2 \\cdot 2! + 3 \\cdot 3! + \\cdots + n \\cdot n! = (n+1)! - 1$.\n\n**Square-root telescoping:** After rationalising:\n$$\\frac{1}{\\sqrt{k}+\\sqrt{k+1}} = \\sqrt{k+1}-\\sqrt{k}$$\nSo: $\\sum_{k=1}^{n} \\frac{1}{\\sqrt{k}+\\sqrt{k+1}} = \\sqrt{n+1}-1$.\n\n**Arithmetic series (general):**\n$$a + (a+d) + (a+2d) + \\cdots + (a+(n-1)d) = \\frac{n}{2}(2a+(n-1)d) = \\frac{n(\\text{first}+\\text{last})}{2}$$\n\n**The 'add-and-subtract' pairing:**\n$$1 - 2 + 3 - 4 + 5 - 6 + \\cdots + (2n-1) - 2n = -n$$\nPair consecutive terms: $(1-2)+(3-4)+\\cdots = (-1)\\times n = -n$.\n\n**Sums of squares as telescopes:**\n$$k^2 = \\frac{k(k+1)(k+2) - (k-1)k(k+1)}{3} + k$$\n(Less obvious, but useful for deriving the $n^2$ formula.)",
    },
    {
      kind: "callout",
      variant: "tip",
      title: "Useful decompositions to memorise",
      content:
        "$$\\frac{1}{k(k+1)} = \\frac{1}{k}-\\frac{1}{k+1}$$\n$$\\frac{1}{k(k+1)(k+2)} = \\frac{1}{2}\\left(\\frac{1}{k(k+1)}-\\frac{1}{(k+1)(k+2)}\\right)$$\n$$k \\cdot k! = (k+1)!-k!$$\n$$\\frac{1}{\\sqrt{k}+\\sqrt{k+1}} = \\sqrt{k+1}-\\sqrt{k}$$\n$$\\frac{1}{k^2-1} = \\frac{1}{2}\\left(\\frac{1}{k-1}-\\frac{1}{k+1}\\right)$$",
    },
    {
      kind: "check",
      id: "ns-c22b",
      prompt:
        "Evaluate: $1 \\cdot 1! + 2 \\cdot 2! + 3 \\cdot 3! + \\cdots + 10 \\cdot 10!$.",
      format: "text",
      answer: "11! - 1",
      acceptedAnswers: ["11!-1", "11! - 1", "39916799"],
      hint: "Use $k \\cdot k! = (k+1)! - k!$. The sum telescopes!",
      explanation:
        "$\\sum_{k=1}^{10} [(k+1)!-k!] = (2!-1!)+(3!-2!)+\\cdots+(11!-10!) = 11!-1! = 11!-1 = 39916799$.",
    },
    {
      kind: "check",
      id: "ns-c22c",
      prompt:
        "Evaluate: $\\dfrac{1}{\\sqrt{1}+\\sqrt{2}} + \\dfrac{1}{\\sqrt{2}+\\sqrt{3}} + \\cdots + \\dfrac{1}{\\sqrt{24}+\\sqrt{25}}$.",
      format: "numeric",
      answer: "4",
      hint: "Rationalise each term: $\\frac{1}{\\sqrt{k}+\\sqrt{k+1}} = \\sqrt{k+1}-\\sqrt{k}$. Telescopes!",
      explanation:
        "$\\sum_{k=1}^{24}(\\sqrt{k+1}-\\sqrt{k}) = \\sqrt{25}-\\sqrt{1} = 5-1 = 4$.",
    },
    {
      kind: "check",
      id: "ns-c22d",
      prompt:
        "Find: $1 - 2 + 3 - 4 + 5 - 6 + \\cdots + 99 - 100$.",
      format: "numeric",
      answer: "-50",
      hint: "Pair consecutive terms: $(1-2)+(3-4)+\\cdots+(99-100)$. Each pair $= -1$. How many pairs?",
      explanation:
        "50 pairs, each equal to $-1$. Sum $= 50 \\times (-1) = -50$.",
    },
    {
      kind: "check",
      id: "ns-c22e",
      prompt:
        "Evaluate: $\\dfrac{1}{1 \\times 2 \\times 3} + \\dfrac{1}{2 \\times 3 \\times 4} + \\dfrac{1}{3 \\times 4 \\times 5} + \\cdots + \\dfrac{1}{8 \\times 9 \\times 10}$.",
      format: "text",
      answer: "11/45",
      acceptedAnswers: ["11/45"],
      hint: "$\\frac{1}{k(k+1)(k+2)} = \\frac{1}{2}\\left(\\frac{1}{k(k+1)}-\\frac{1}{(k+1)(k+2)}\\right)$. Telescopes!",
      explanation:
        "$\\frac{1}{2}\\sum_{k=1}^{8}\\left(\\frac{1}{k(k+1)}-\\frac{1}{(k+1)(k+2)}\\right) = \\frac{1}{2}\\left(\\frac{1}{1\\cdot2}-\\frac{1}{9\\cdot10}\\right) = \\frac{1}{2}\\left(\\frac{1}{2}-\\frac{1}{90}\\right) = \\frac{1}{2}\\cdot\\frac{44}{90} = \\frac{22}{90} = \\frac{11}{45}$.\n\nHmm let me recheck: $\\frac{1}{2}-\\frac{1}{90} = \\frac{45-1}{90}=\\frac{44}{90}$. Half of that: $\\frac{22}{90}=\\frac{11}{45}$.\n\nWait: the terms go from $k=1$ to $k=8$: $\\frac{1}{2}(\\frac{1}{1\\cdot2}-\\frac{1}{9\\cdot10}) = \\frac{1}{2}(\\frac{1}{2}-\\frac{1}{90}) = \\frac{1}{2}\\cdot\\frac{44}{90} = \\frac{44}{180} = \\frac{11}{45}$. Answer: $11/45$.",
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
    {
      kind: "prose",
      heading: "",
      content:
        "**More competition patterns:**\n\n**The 'work backwards' strategy:**\nIf a problem asks 'what was the original?' after a series of operations, reverse each step:\n- Undo 'add 5' → subtract 5\n- Undo 'multiply by 3' → divide by 3\n- Undo 'square' → take square root\n\n**Clock problems:**\nThe minute hand moves $360°/60 = 6°$ per minute.\nThe hour hand moves $360°/12 = 0.5°$ per minute.\nAt time $h:m$, the angle between hands $= |30h - 5.5m|°$ (or $360°$ minus that if $> 180°$).\n\n**Units digit of large sums:**\nTo find the last digit of $17^{23} + 23^{17}$: find last digit of each separately, then add (mod 10).\n\n**Pigeonhole reasoning in number sense:**\nAmong any 5 integers, at least two have the same remainder when divided by 4.\nAmong any 10 integers, at least two have the same last digit.\n\n**The 'sandwich' estimation:**\nTo estimate $\\sqrt{200}$: since $14^2 = 196$ and $15^2 = 225$, we get $14 < \\sqrt{200} < 15$. Since 200 is much closer to 196: $\\sqrt{200} \\approx 14.1$.",
    },
    {
      kind: "callout",
      variant: "tip",
      title: "Pattern recognition checklist",
      content:
        "When stuck on a competition problem, try:\n1. **Small cases:** Compute for $n = 1, 2, 3$ and look for a pattern\n2. **Factor the expression:** can it be written as a product or difference?\n3. **Modular arithmetic:** does the problem only care about remainders?\n4. **Symmetry:** can you pair terms from both ends?\n5. **Work backwards:** start from the answer and reverse the operations\n6. **Units digit:** often eliminates 3-4 MCQ options instantly",
    },
    {
      kind: "check",
      id: "ns-c25b",
      prompt:
        "What is the angle between the hour and minute hands of a clock at 3:20?",
      format: "numeric",
      answer: "20",
      hint: "Angle $= |30h - 5.5m|° = |30(3) - 5.5(20)|°$.",
      explanation:
        "$|30 \\times 3 - 5.5 \\times 20| = |90 - 110| = 20°$.",
    },
    {
      kind: "check",
      id: "ns-c25c",
      prompt:
        "Find the last digit of $7^{23} + 3^{17}$.",
      format: "numeric",
      answer: "6",
      hint: "Last digit of $7^{23}$: cycle 7,9,3,1 (period 4). $23 \\bmod 4 = 3$, 3rd entry = 3. Last digit of $3^{17}$: cycle 3,9,7,1. $17 \\bmod 4 = 1$, 1st entry = 3.",
      explanation:
        "Last digit of $7^{23}$: $23 \\bmod 4 = 3$. Cycle of 7: 7,9,3,1. 3rd entry $= 3$.\nLast digit of $3^{17}$: $17 \\bmod 4 = 1$. Cycle of 3: 3,9,7,1. 1st entry $= 3$.\nSum: $3 + 3 = 6$.",
    },
    {
      kind: "check",
      id: "ns-c25d",
      prompt:
        "I think of a number, double it, add 7, multiply by 3, subtract 9, and get 42. What was my number?",
      format: "numeric",
      answer: "5",
      hint: "Work backwards: $42 \\to$ add 9 $\\to 51 \\to$ divide by 3 $\\to 17 \\to$ subtract 7 $\\to 10 \\to$ halve $\\to ?$.",
      explanation:
        "Reverse: $42 + 9 = 51$. $51/3 = 17$. $17-7 = 10$. $10/2 = 5$.\nCheck: $5 \\to 10 \\to 17 \\to 51 \\to 42$ ✓.",
    },
    {
      kind: "check",
      id: "ns-c25e",
      prompt:
        "Without calculating, which of these is closest to $\\sqrt{8000}$?\n(a) 80 (b) 85 (c) 89 (d) 90 (e) 95",
      format: "text",
      answer: "c",
      acceptedAnswers: ["c", "C", "89"],
      hint: "$89^2 = (90-1)^2 = 8100-180+1 = 7921$. $90^2 = 8100$. Since 8000 is between 7921 and 8100, $\\sqrt{8000}$ is between 89 and 90.",
      explanation:
        "$89^2 = 7921$ and $90^2 = 8100$. Since $7921 < 8000 < 8100$: $89 < \\sqrt{8000} < 90$.\n$8000 - 7921 = 79$ and $8100 - 8000 = 100$. Since 8000 is closer to 7921, $\\sqrt{8000} \\approx 89.4$.\nClosest option: (c) 89.",
    },
    {
      kind: "check",
      id: "ns-c25f",
      prompt:
        "The number $2025$ has a special property: $2025 = 45^2 = (20+25)^2$. The number splits into two parts that sum to its square root! Find the next four-digit number with this property.",
      format: "numeric",
      answer: "3025",
      hint: "We need $\\overline{ab\\;cd}$ where $\\overline{ab} + \\overline{cd} = \\sqrt{\\overline{abcd}}$. Try perfect squares: $55^2 = 3025$. Does $30+25 = 55$?",
      explanation:
        "$55^2 = 3025$. Split: $30 + 25 = 55 = \\sqrt{3025}$ ✓.\nSo 3025 is the next four-digit 'Kaprekar-like' number after 2025.\n(These are related to Kaprekar numbers.)",
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
