import type { Chapter } from "@/lib/types";

/**
 * Fully-authored flagship chapter: Divisibility, Primes & Factors.
 * Deep-dive teaching of the number-theory toolkit that underpins a large share
 * of IMC and Hamilton problems. Sets the standard for the rest of the course.
 *
 * Enriched with material from Pathfinder for Olympiad Mathematics (Ch 6) and
 * competition practice: formal divisibility properties, modular arithmetic,
 * divisibility proofs via factoring techniques, the Euclidean algorithm &
 * Bézout's identity, extended divisor-function results, and Fermat's Little
 * Theorem.
 */
export const numberTheoryFoundations: Chapter = {
  id: "ch-nt-1",
  title: "Divisibility, Primes & Factors",
  topic: "number-theory",
  order: 20,
  examFocus: "both",
  difficulty: "medium",
  estMinutes: 210,
  prerequisites: ["ch-found-1"],
  blurb:
    "The building blocks of number theory: divisibility rules and their formal properties, primes and the Fundamental Theorem of Arithmetic, modular arithmetic, divisibility proofs via algebraic factoring, the Euclidean algorithm and Bézout's identity, the divisor-counting and HCF/LCM machinery, coprimality and parity, remainder cycles, and Fermat's Little Theorem — the toolkit that cracks a huge fraction of IMC and Hamilton problems.",

  intro: {
    whyItMatters:
      "Almost every number puzzle — from 'how many factors' to remainders, trailing zeros and digit problems — rests on prime factorisation. Master the fingerprint idea once and a whole family of questions becomes routine, while Hamilton 'find all' and divisibility proofs reward the same structural thinking.",
    whereItAppears:
      "Typically several IMC questions each year involve factors, multiples, HCF/LCM, divisibility rules or primes (often Q11–20, with a sting in the tail at Q21–25). Hamilton frequently opens with a number-theory problem that rewards a clean factorisation or parity argument, and 'find all $n$ such that…' is a recurring archetype.",
    typicalPatterns: [
      "Count the divisors of a number, or find the smallest number with exactly $k$ divisors.",
      "Find/use HCF & LCM, including word problems (bells, cogs, stacking) and the product identity.",
      "Apply a divisibility rule (3, 9, 11) to pin down an unknown digit.",
      "Remainder/last-digit questions on a large power via a repeating cycle.",
      "Hamilton: prove a divisibility fact, or find all integers satisfying a divisibility condition.",
      "Use modular arithmetic to determine remainders or last digits of huge expressions.",
      "Apply algebraic factoring identities to prove divisibility statements.",
    ],
    commonMistakes: [
      "Treating $1$ as prime (it is not) — and forgetting $2$ is the only even prime.",
      "Multiplying exponents instead of adding $1$ to each when counting divisors.",
      "Confusing HCF (shared, take lowest powers) with LCM (combined, take highest powers).",
      "Checking divisibility past $\\sqrt{n}$ unnecessarily when testing for primality.",
      "In a 'find all' proof, finding solutions but never proving the list is complete.",
      "Dividing both sides of a congruence by $k$ without checking $\\gcd(k, n) = 1$.",
    ],
  },

  lesson: [
    // ─────────── Section 1: Divisibility ───────────
    {
      kind: "prose",
      heading: "1 · What 'divides' really means",
      content:
        "We say $a$ **divides** $b$ (written $a \\mid b$) when $b$ is a whole number of copies of $a$ — that is, $b = a \\times k$ for some integer $k$, with no remainder. So $3 \\mid 12$ because $12 = 3 \\times 4$, but $3 \\nmid 13$. The numbers that divide $b$ are its **factors** (or divisors); the numbers $b$ divides are its **multiples**.",
    },
    {
      kind: "callout",
      variant: "intuition",
      title: "Think in rectangles",
      content:
        "$a \\mid b$ means you can arrange $b$ dots into a perfect rectangle with one side of length $a$. Primes are the numbers whose only rectangle is a single straight line ($1 \\times p$). Factors come in pairs — $a$ and $b/a$ — which is why you only need to test up to $\\sqrt{b}$.",
    },
    {
      kind: "callout",
      variant: "definition",
      title: "Formal properties of divisibility",
      content:
        "Let $a, b, c$ be integers with $a \\neq 0$. The following hold:\n\n" +
        "- **Transitivity:** If $a \\mid b$ and $b \\mid c$, then $a \\mid c$.\n" +
        "- **Linear combinations:** If $a \\mid b$ and $a \\mid c$, then $a \\mid (bx + cy)$ for all integers $x, y$.\n" +
        "- **Scaling:** If $a \\mid b$, then $a \\mid bc$ for every integer $c$.\n" +
        "- **Antisymmetry:** If $a \\mid b$ and $b \\mid a$, then $a = \\pm b$.\n" +
        "- **Size bound:** If $a \\mid b$ with $a > 0$ and $b > 0$, then $a \\le b$.\n\n" +
        "The 'linear combinations' property is the workhorse of competition proofs: to show $d$ divides a complicated expression, decompose it into parts each known to be divisible by $d$.",
    },
    {
      kind: "check",
      id: "nt-c1",
      prompt: "Which of these does **not** divide $36$?",
      format: "mcq",
      options: [
        { label: "A", text: "$4$" },
        { label: "B", text: "$6$" },
        { label: "C", text: "$8$" },
        { label: "D", text: "$9$" },
      ],
      answer: "C",
      hint: "Try to write $36$ as that number times a whole number.",
      explanation:
        "$36 = 4\\times9 = 6\\times6 = 9\\times4$, but $36 \\div 8 = 4.5$ is not whole, so $8 \\nmid 36$.",
    },
    {
      kind: "prose",
      heading: "Divisibility rules worth knowing cold",
      content:
        "These let you test divisibility without long division — invaluable when calculators are banned:",
    },
    {
      kind: "callout",
      variant: "definition",
      title: "Quick divisibility tests",
      content:
        "- **2**: last digit even.\n" +
        "- **3**: digit sum divisible by $3$.\n" +
        "- **4**: last two digits form a multiple of $4$.\n" +
        "- **5**: ends in $0$ or $5$.\n" +
        "- **6**: divisible by both $2$ and $3$.\n" +
        "- **7**: double the last digit and subtract from the rest; repeat until small. If the result is $0$ or $\\pm7$, the original is divisible by $7$. (E.g. $343 \\to 34 - 6 = 28 \\to 2 - 16 = -14$, which is $-2\\times7$. ✓)\n" +
        "- **8**: last three digits form a multiple of $8$.\n" +
        "- **9**: digit sum divisible by $9$.\n" +
        "- **11**: alternating digit sum ($a - b + c - d + \\cdots$) divisible by $11$.\n" +
        "- **13**: four-times the last digit and add to the rest; repeat. Divisible iff the final small number is divisible by $13$. (E.g. $637 \\to 63 + 28 = 91 \\to 9 + 4 = 13$. ✓)",
    },
    {
      kind: "check",
      id: "nt-c2",
      prompt:
        "The four-digit number $\\overline{52A8}$ is divisible by $9$. What digit is $A$?",
      format: "numeric",
      answer: "3",
      hint: "Divisible by $9$ ⇔ digit sum divisible by $9$. Sum is $5+2+A+8 = 15 + A$.",
      explanation:
        "$15 + A$ must be a multiple of $9$. The only digit that works is $A = 3$ (giving $18$).",
    },
    {
      kind: "example",
      title: "The divisibility-by-11 test in action",
      statement: "Is $90\\,728$ divisible by $11$?",
      approach:
        "Take the alternating sum of the digits (from the right or left, consistently) and check whether it is a multiple of $11$.",
      solution:
        "Alternating sum: $9 - 0 + 7 - 2 + 8 = 22$. Since $22 = 11 \\times 2$ is a multiple of $11$, yes — $90\\,728$ is divisible by $11$ (indeed $90728 = 11 \\times 8248$).",
    },
    {
      kind: "check",
      id: "nt-c13",
      prompt:
        "If $7 \\mid a$ and $7 \\mid b$, which of the following must $7$ divide?",
      format: "mcq",
      options: [
        { label: "A", text: "$a + b$" },
        { label: "B", text: "$3a - 5b$" },
        { label: "C", text: "$a^2 + b$" },
        { label: "D", text: "All of the above" },
      ],
      answer: "D",
      hint: "Use the 'linear combinations' property: $7 \\mid (ax + by)$ for any integers $x, y$. For $a^2 + b$, note $7 \\mid a$ implies $7 \\mid a^2$.",
      explanation:
        "By the linear combination property, $7 \\mid (1\\cdot a + 1\\cdot b) = a+b$ and $7 \\mid (3a - 5b)$. Since $7 \\mid a$ also gives $7 \\mid a^2$ (the scaling property), we get $7 \\mid (a^2 + b)$ by the linear combination property again. So all three hold.",
    },

    // ─────────── Section 2: Primes & factorisation ───────────
    {
      kind: "prose",
      heading: "2 · Primes and the Fundamental Theorem of Arithmetic",
      content:
        "A **prime** is a whole number greater than $1$ whose only divisors are $1$ and itself: $2, 3, 5, 7, 11, 13, \\dots$ Every other whole number bigger than $1$ is **composite**. Note $2$ is the only *even* prime, and $1$ is neither prime nor composite.\n\nThe key fact — the *Fundamental Theorem of Arithmetic* — is that **every** integer greater than $1$ can be written as a product of primes in exactly one way (up to order). For example $360 = 2^3 \\times 3^2 \\times 5$. This unique 'fingerprint' is the single most useful idea in the whole topic.",
    },
    {
      kind: "callout",
      variant: "definition",
      content:
        "Writing $n = p_1^{a_1} p_2^{a_2} \\cdots p_k^{a_k}$ with distinct primes $p_i$ is the **prime factorisation** of $n$. A factor tree is the quickest way to find it by hand — keep splitting until every branch ends in a prime.",
    },
    {
      kind: "callout",
      variant: "tip",
      title: "Testing whether a number is prime",
      content:
        "To check if $n$ is prime, only trial-divide by primes up to $\\sqrt{n}$. If none divides $n$, it is prime. For $n = 187$: test $2,3,5,7,11,13$ (since $13^2 = 169 < 187 < 196 = 14^2$). $11 \\mid 187$ ($= 11\\times 17$), so it is *not* prime.",
    },
    {
      kind: "check",
      id: "nt-c3",
      prompt: "How many of $51, 57, 59, 91$ are prime?",
      format: "numeric",
      answer: "1",
      hint: "Test small factors. $51 = 3\\times17$, $57 = 3\\times19$, $91 = 7\\times13$.",
      explanation:
        "$51 = 3\\times17$, $57 = 3\\times19$ and $91 = 7\\times13$ are composite; only $59$ is prime (no prime up to $7$ divides it). So exactly $1$.",
    },
    {
      kind: "check",
      id: "nt-c4",
      prompt: "Write the prime factorisation of $84$. (Type it as e.g. 2^2*3*7)",
      format: "text",
      answer: "2^2*3*7",
      acceptedAnswers: ["2*2*3*7", "2^2 * 3 * 7", "2^2·3·7"],
      hint: "Start by pulling out factors of $2$: $84 = 2\\times42 = 2\\times2\\times21$.",
      explanation:
        "$84 = 2 \\times 42 = 2 \\times 2 \\times 21 = 2^2 \\times 3 \\times 7$. Every branch ends in a prime.",
    },

    // ─────────── Section 3: Modular arithmetic ───────────
    {
      kind: "prose",
      heading: "3 · Modular arithmetic",
      content:
        "We write $a \\equiv b \\pmod{n}$ (read '$a$ is congruent to $b$ modulo $n$') to mean $n \\mid (a - b)$ — equivalently, $a$ and $b$ leave the same remainder when divided by $n$. Think of it as 'clock arithmetic': on a clock with $n$ hours, $a$ and $b$ point to the same position.\n\nModular arithmetic lets us reduce enormous calculations to tiny ones by working only with remainders.",
    },
    {
      kind: "callout",
      variant: "definition",
      title: "Arithmetic with congruences",
      content:
        "If $a \\equiv b \\pmod{n}$ and $c \\equiv d \\pmod{n}$, then:\n\n" +
        "- $a + c \\equiv b + d \\pmod{n}$ (addition)\n" +
        "- $a - c \\equiv b - d \\pmod{n}$ (subtraction)\n" +
        "- $a \\cdot c \\equiv b \\cdot d \\pmod{n}$ (multiplication)\n" +
        "- $a^k \\equiv b^k \\pmod{n}$ for all $k \\ge 1$ (powers)\n\n" +
        "You can add, subtract and multiply congruences freely. The one operation that is NOT automatic is **division**: you can only cancel a factor $k$ from both sides of $ka \\equiv kb \\pmod{n}$ when $\\gcd(k, n) = 1$.",
    },
    {
      kind: "callout",
      variant: "trap",
      title: "Division in modular arithmetic",
      content:
        "You cannot simply 'divide by $2$' in mod $6$: $4 \\equiv 10 \\pmod 6$ is true, but dividing both sides by $2$ gives $2 \\equiv 5 \\pmod 6$, which is false! The rule: $ka \\equiv kb \\pmod{n}$ implies $a \\equiv b \\pmod{n/\\gcd(k,n)}$. Safe to cancel $k$ only when $\\gcd(k, n) = 1$.",
    },
    {
      kind: "example",
      title: "Last two digits via mod 100",
      statement: "Find the last two digits of $3^{20}$.",
      approach:
        "Work mod $100$. Build up powers of $3$ by repeated squaring, reducing each time.",
      solution:
        "$3^2 = 9$. $3^4 = 81$. $3^8 = 81^2 = 6561 \\equiv 61 \\pmod{100}$. $3^{16} = 61^2 = 3721 \\equiv 21 \\pmod{100}$. Finally $3^{20} = 3^{16} \\cdot 3^4 \\equiv 21 \\times 81 = 1701 \\equiv 01 \\pmod{100}$. The last two digits are $\\mathbf{01}$.",
    },
    {
      kind: "check",
      id: "nt-c14",
      prompt: "What is the remainder when $2^{30}$ is divided by $7$?",
      format: "numeric",
      answer: "1",
      hint: "Compute $2^1, 2^2, 2^3, \\ldots$ mod $7$ until you spot a cycle. ($2^3 = 8 \\equiv 1 \\pmod 7$...)",
      explanation:
        "$2^3 = 8 \\equiv 1 \\pmod 7$. So $2^{30} = (2^3)^{10} \\equiv 1^{10} = 1 \\pmod 7$. The remainder is $1$.",
    },
    {
      kind: "check",
      id: "nt-c15",
      prompt: "Find the last digit of $13^{2024} + 17^{2024}$.",
      format: "numeric",
      answer: "2",
      hint: "Last digits: powers of $3$ cycle $3,9,7,1$ (length $4$); powers of $7$ cycle $7,9,3,1$ (length $4$). Since $2024 \\equiv 0 \\pmod 4$...",
      explanation:
        "Last digit of $13^{2024}$ depends only on $3^{2024}$. Cycle of last digits of powers of $3$: $3,9,7,1$ (length $4$). Since $2024 = 4 \\times 506$, we land on position $4$, giving last digit $1$. Similarly $17^{2024}$ depends on $7^{2024}$: cycle $7,9,3,1$, position $4$ gives $1$. Last digit of the sum: $1 + 1 = 2$.",
    },
    {
      kind: "check",
      id: "nt-c16",
      prompt:
        "What is the remainder when $5^{21}$ is divided by $3$?",
      format: "numeric",
      answer: "2",
      hint: "$5 \\equiv 2 \\pmod 3$, so $5^{21} \\equiv 2^{21} \\pmod 3$. Now $2 \\equiv -1 \\pmod 3$, so $2^{21} \\equiv (-1)^{21}$.",
      explanation:
        "$5 \\equiv 2 \\equiv -1 \\pmod 3$. So $5^{21} \\equiv (-1)^{21} = -1 \\equiv 2 \\pmod 3$. The remainder is $2$.",
    },

    // ─────────── Section 4: Divisibility proofs ───────────
    {
      kind: "prose",
      heading: "4 · Divisibility proofs — the $(a - b) \\mid (a^n - b^n)$ technique",
      content:
        "A powerful family of competition problems asks you to *prove* that some expression is always divisible by a given number. The key algebraic facts that power these proofs are:\n\n" +
        "- $(x - y) \\mid (x^n - y^n)$ for all positive integers $n$.\n" +
        "- $(x + y) \\mid (x^n + y^n)$ when $n$ is *odd*.\n\n" +
        "These follow from the factorisations $x^n - y^n = (x-y)(x^{n-1} + x^{n-2}y + \\cdots + y^{n-1})$ and $x^n + y^n = (x+y)(x^{n-1} - x^{n-2}y + \\cdots + y^{n-1})$ (the second only for odd $n$).\n\n" +
        "The competition technique: to prove $k \\mid E$, rewrite $E$ as a sum or product of terms, each shown divisible by $k$ using these identities or the 'linear combination' property.",
    },
    {
      kind: "example",
      title: "Summing paired terms (Olympiad classic)",
      statement:
        "Show that $1^{1997} + 2^{1997} + 3^{1997} + \\cdots + 1996^{1997}$ is divisible by $1997$.",
      approach:
        "Pair each term $i$ with $1997 - i$. Since $1997$ is odd, the identity $(x+y) \\mid (x^n + y^n)$ for odd $n$ applies with $x + y = 1997$.",
      solution:
        "Pair the sum: $(1^{1997} + 1996^{1997}) + (2^{1997} + 1995^{1997}) + \\cdots + (998^{1997} + 999^{1997})$. For each pair, $i + (1997-i) = 1997$. Since $1997$ is odd, $(i + (1997-i)) \\mid (i^{1997} + (1997-i)^{1997})$, i.e. $1997 \\mid (i^{1997} + (1997-i)^{1997})$. Each of the $998$ pairs is divisible by $1997$, so the entire sum is. $\\;\\blacksquare$",
    },
    {
      kind: "example",
      title: "Consecutive integers: $6 \\mid n(n+1)(n+2)$",
      statement:
        "Prove that the product of any three consecutive integers is divisible by $6$.",
      approach:
        "Among any three consecutive integers, at least one is divisible by $2$ and at least one by $3$. Since $\\gcd(2,3)=1$, the product is divisible by $2 \\times 3 = 6$.",
      solution:
        "Let the integers be $n, n+1, n+2$. Since consecutive, one of them is even (giving a factor of $2$) and one is a multiple of $3$ (since every third integer is). As $2$ and $3$ share no common factor, $6 = 2 \\times 3$ divides the product. $\\;\\blacksquare$\n\nAlternatively, $n(n+1)(n+2) = 6\\binom{n+2}{3}$, which is manifestly an integer times $6$.",
    },
    {
      kind: "check",
      id: "nt-c17",
      prompt:
        "What is the value of $7^4 - 3^4$ divided by $4$? (Use the factoring identity.)",
      format: "numeric",
      answer: "580",
      hint: "$x^n - y^n$ is divisible by $x - y$. Here $7 - 3 = 4$. Compute $7^4 - 3^4 = 2401 - 81 = 2320$.",
      explanation:
        "$7^4 - 3^4 = 2401 - 81 = 2320$. Since $(7-3) = 4$ divides $7^4 - 3^4$, we get $2320 / 4 = 580$. Alternatively, $7^4 - 3^4 = (7-3)(7^3 + 7^2\\cdot3 + 7\\cdot9 + 27) = 4(343 + 147 + 63 + 27) = 4 \\times 580$.",
    },
    {
      kind: "check",
      id: "nt-c18",
      prompt:
        "True or false: $(x + y)$ always divides $(x^4 + y^4)$.",
      format: "mcq",
      options: [
        { label: "A", text: "True" },
        { label: "B", text: "False" },
      ],
      answer: "B",
      hint: "The identity $(x+y) \\mid (x^n + y^n)$ works only for odd $n$. Try $x=1, y=1$: does $2 \\mid 2$? Yes. Try $x=2, y=1$: does $3 \\mid 17$?",
      explanation:
        "False. The identity $(x+y) \\mid (x^n + y^n)$ holds only for *odd* $n$. For $n = 4$ (even), it generally fails: $x = 2, y = 1$ gives $x+y = 3$ and $x^4 + y^4 = 17$, and $3 \\nmid 17$.",
    },
    {
      kind: "check",
      id: "nt-c19",
      prompt:
        "Show that $5 \\mid (n^5 - n)$ for every positive integer $n$. Which factoring helps? What is $n^5 - n$ when $n = 4$?",
      format: "numeric",
      answer: "1020",
      hint: "$n^5 - n = n(n^4 - 1) = n(n^2-1)(n^2+1) = n(n-1)(n+1)(n^2+1)$. For the divisibility, note $(n^5 - n) = (n^5 - n)$, and $n^5 \\equiv n \\pmod 5$ by Fermat's Little Theorem (or check each residue $0,1,2,3,4$). For $n=4$: $4^5 - 4 = 1024 - 4 = 1020$.",
      explanation:
        "$4^5 - 4 = 1024 - 4 = 1020$. Check: $1020 / 5 = 204$. ✓ The general proof: $n^5 - n \\equiv 0 \\pmod 5$ for $n \\equiv 0,1,2,3,4 \\pmod 5$ (verify each), or use Fermat's Little Theorem: $n^5 \\equiv n \\pmod 5$ for all $n$.",
    },
    {
      kind: "check",
      id: "nt-c20",
      prompt:
        "Prove-style: among any $4$ consecutive integers, one is divisible by $4$. Using this, what is the largest power of $2$ that always divides $n(n+1)(n+2)(n+3)$? Give the exponent.",
      format: "numeric",
      answer: "3",
      hint: "Among $n, n+1, n+2, n+3$: one is divisible by $4$ (gives $2^2$), and a different one of the remaining is even (gives another $2^1$). Total: $2^3$. But you don't always get $2^4$.",
      explanation:
        "Among $4$ consecutive integers, exactly one is $\\equiv 0 \\pmod 4$ (contributing $2^2$), and exactly one other is $\\equiv 2 \\pmod 4$ (contributing $2^1$). So $2^3 = 8$ always divides the product. But $1 \\cdot 2 \\cdot 3 \\cdot 4 = 24$ is not divisible by $16 = 2^4$, so the answer is $3$.",
    },

    // ─────────── Section 5: Euclidean Algorithm & Bézout ───────────
    {
      kind: "prose",
      heading: "5 · The Euclidean Algorithm and Bézout's Identity",
      content:
        "The **Euclidean algorithm** computes $\\gcd(a, b)$ by repeated division: replace the larger number by its remainder on division by the smaller, and repeat until the remainder is $0$. The last non-zero remainder is the GCD.\n\n" +
        "For example, $\\gcd(252, 105)$: $252 = 2 \\times 105 + 42$, then $105 = 2 \\times 42 + 21$, then $42 = 2 \\times 21 + 0$. So $\\gcd(252, 105) = 21$.\n\n" +
        "**Bézout's Identity** says: for any integers $a, b$ (not both zero), there exist integers $x, y$ such that $ax + by = \\gcd(a, b)$. These $x, y$ can be found by 'back-substituting' through the Euclidean algorithm steps.",
    },
    {
      kind: "callout",
      variant: "definition",
      title: "Bézout's Identity",
      content:
        "For any integers $a, b$ with $\\gcd(a, b) = d$:\n\n" +
        "- There exist integers $x, y$ with $ax + by = d$.\n" +
        "- The integer $d$ is the *smallest* positive value expressible as $ax + by$.\n" +
        "- Every integer of the form $ax + by$ is a multiple of $d$.\n\n" +
        "Key consequence: if $\\gcd(a, b) = 1$ (coprime) and $a \\mid bc$, then $a \\mid c$. (Proof: write $1 = ax + by$, multiply by $c$: $c = axc + byc$; $a$ divides both terms on the right.)",
    },
    {
      kind: "example",
      title: "Running the Euclidean Algorithm",
      statement: "Find $\\gcd(161, 63)$ and express it as $161x + 63y$.",
      approach:
        "Apply repeated division, then back-substitute to find the Bézout coefficients.",
      solution:
        "$161 = 2 \\times 63 + 35$\n$63 = 1 \\times 35 + 28$\n$35 = 1 \\times 28 + 7$\n$28 = 4 \\times 7 + 0$.\n\nSo $\\gcd(161, 63) = 7$. Back-substituting: $7 = 35 - 1 \\times 28 = 35 - 1(63 - 35) = 2 \\times 35 - 63 = 2(161 - 2 \\times 63) - 63 = 2 \\times 161 - 5 \\times 63$. Check: $322 - 315 = 7$. ✓",
    },
    {
      kind: "check",
      id: "nt-c21",
      prompt: "What is $\\gcd(84, 36)$?",
      format: "numeric",
      answer: "12",
      hint: "Apply the Euclidean algorithm: $84 = 2 \\times 36 + 12$, then $36 = 3 \\times 12 + 0$.",
      explanation:
        "$84 = 2 \\times 36 + 12$, then $36 = 3 \\times 12 + 0$. The last non-zero remainder is $12$, so $\\gcd(84, 36) = 12$.",
    },
    {
      kind: "check",
      id: "nt-c22",
      prompt:
        "If $\\gcd(a, 15) = 1$ and $a \\mid 45b$, must $a \\mid 3b$?",
      format: "mcq",
      options: [
        { label: "A", text: "Yes, always" },
        { label: "B", text: "Not necessarily" },
      ],
      answer: "A",
      hint: "$45b = 3 \\cdot 15b$. Since $\\gcd(a, 15) = 1$ and $a \\mid 15b \\cdot 3$... think about what Bézout gives.",
      explanation:
        "Since $\\gcd(a, 15) = 1$, by Bézout's consequence, $a \\mid 15b$ implies... actually let's be more direct. $45b = 3 \\cdot 15b$. We have $\\gcd(a, 15) = 1$. Write $45 = 3 \\times 15$. From $a \\mid 45b$ we get $a \\mid 3 \\cdot 15b$. By Bézout, $\\gcd(a,15)=1$ means $1 = ax + 15y$ for some integers. Multiply by $3b$: $3b = 3abx + 45by$. Since $a \\mid 3ab$ and $a \\mid 45b$, we get $a \\mid 3b$. Yes, always.",
    },
    {
      kind: "check",
      id: "nt-c23",
      prompt:
        "Find integers $x, y$ with $5x + 8y = 1$. What is the value of $x$ with smallest absolute value?",
      format: "numeric",
      answer: "-3",
      hint: "Use the Euclidean algorithm on $8$ and $5$: $8 = 1 \\times 5 + 3$, $5 = 1 \\times 3 + 2$, $3 = 1 \\times 2 + 1$. Back-substitute.",
      explanation:
        "Back-substituting: $1 = 3 - 1 \\times 2 = 3 - (5 - 3) = 2 \\times 3 - 5 = 2(8 - 5) - 5 = 2 \\times 8 - 3 \\times 5$. So $5 \\times (-3) + 8 \\times 2 = -15 + 16 = 1$. The $x$ with smallest $|x|$ is $x = -3$.",
    },

    // ─────────── Section 6: Counting divisors (expanded) ───────────
    {
      kind: "prose",
      heading: "6 · Counting divisors without listing them",
      content:
        "Here is the payoff. If $n = p_1^{a_1} p_2^{a_2}\\cdots p_k^{a_k}$, then the number of positive divisors of $n$ is $$(a_1+1)(a_2+1)\\cdots(a_k+1).$$ The reason: to build a divisor you independently choose how many copies of each prime to include — anywhere from $0$ up to $a_i$, giving $a_i + 1$ options for that prime.",
    },
    {
      kind: "example",
      title: "Counting divisors",
      statement: "How many positive divisors does $360$ have?",
      approach:
        "Factorise, then add one to each exponent and multiply — never list all the divisors by hand.",
      solution:
        "$360 = 2^3 \\times 3^2 \\times 5^1$. The divisor count is $(3+1)(2+1)(1+1) = 4 \\times 3 \\times 2 = 24$.",
      alternative:
        "Spot that $360 = 36 \\times 10 = (2^2 3^2)(2\\cdot5) = 2^3 3^2 5$ — combining known factorisations is often quicker than a full tree.",
    },
    {
      kind: "check",
      id: "nt-c5",
      prompt: "How many positive divisors does $48$ have?",
      format: "numeric",
      answer: "10",
      hint: "$48 = 2^4 \\times 3$. Now apply $(a+1)(b+1)$.",
      explanation:
        "$48 = 2^4 \\times 3^1$, so the divisor count is $(4+1)(1+1) = 5 \\times 2 = 10$.",
    },
    {
      kind: "callout",
      variant: "tip",
      title: "Perfect squares have an odd number of divisors",
      content:
        "Divisors usually pair up ($d$ with $n/d$), giving an even count. The exception is a **perfect square**, where $\\sqrt{n}$ pairs with itself — so a number has an odd number of divisors *exactly when* it is a perfect square. That fact alone solves the classic 'locker problem'.",
    },
    {
      kind: "check",
      id: "nt-c6",
      prompt:
        "How many integers from $1$ to $50$ have an odd number of divisors?",
      format: "numeric",
      answer: "7",
      hint: "Odd number of divisors ⇔ perfect square. Count the squares up to $50$.",
      explanation:
        "The perfect squares up to $50$ are $1,4,9,16,25,36,49$ — that's $7$ of them.",
    },
    {
      kind: "prose",
      heading: "Sum of the divisors",
      content:
        "The same fingerprint gives the *sum* of all divisors. For each prime power $p^a$, the divisors contribute $1 + p + p^2 + \\cdots + p^a$, and the totals multiply across primes. Formally, if $n = p_1^{a_1}\\cdots p_k^{a_k}$ then the **sum-of-divisors function** is:\n\n$$\\sigma(n) = \\prod_{i=1}^{k} \\frac{p_i^{a_i+1} - 1}{p_i - 1} = \\prod_{i=1}^{k}(1 + p_i + p_i^2 + \\cdots + p_i^{a_i}).$$\n\nFor $12 = 2^2\\cdot3$: $\\sigma(12) = (1+2+4)(1+3) = 7\\times4 = 28$.",
    },
    {
      kind: "callout",
      variant: "definition",
      title: "Perfect numbers and product of divisors",
      content:
        "- A **perfect number** is one where $\\sigma(n) = 2n$ (the sum of its proper divisors equals $n$ itself). Example: $6$, since $1+2+3 = 6$; also $28$, since $1+2+4+7+14 = 28$.\n" +
        "- The **product of all divisors** of $n$ equals $n^{\\tau(n)/2}$, where $\\tau(n)$ is the number of divisors. (Pair each $d$ with $n/d$; there are $\\tau(n)/2$ pairs, each with product $n$.)",
    },
    {
      kind: "check",
      id: "nt-c7",
      prompt: "What is the sum of all positive divisors of $18$?",
      format: "numeric",
      answer: "39",
      hint: "$18 = 2\\times3^2$. Sum $= (1+2)(1+3+9)$.",
      explanation:
        "$(1+2)(1+3+9) = 3 \\times 13 = 39$. (Check: $1+2+3+6+9+18 = 39$.)",
    },
    {
      kind: "check",
      id: "nt-c24",
      prompt: "What is $\\sigma(20)$, the sum of all positive divisors of $20$?",
      format: "numeric",
      answer: "42",
      hint: "$20 = 2^2 \\times 5$. Apply the formula: $(1+2+4)(1+5)$.",
      explanation:
        "$20 = 2^2 \\times 5^1$. $\\sigma(20) = (1+2+4)(1+5) = 7 \\times 6 = 42$. (Check: $1+2+4+5+10+20 = 42$. ✓)",
    },
    {
      kind: "check",
      id: "nt-c25",
      prompt:
        "The number $n$ has exactly $6$ divisors and their product is $n^3$. What is $\\tau(n)$?",
      format: "numeric",
      answer: "6",
      hint: "The product of all divisors of $n$ equals $n^{\\tau(n)/2}$. We're told it equals $n^3$.",
      explanation:
        "Product of divisors $= n^{\\tau(n)/2} = n^3$, so $\\tau(n)/2 = 3$, giving $\\tau(n) = 6$. (Consistent with the given '6 divisors'.)",
    },

    // ─────────── Section 7: HCF & LCM ───────────
    {
      kind: "prose",
      heading: "7 · HCF and LCM from the fingerprint",
      content:
        "Once two numbers are in prime-factor form, the **highest common factor (HCF)** takes the *lowest* power of each shared prime, and the **lowest common multiple (LCM)** takes the *highest* power of every prime that appears.\n\nFor $12 = 2^2\\times3$ and $18 = 2\\times3^2$: the HCF is $2^1\\times3^1 = 6$ and the LCM is $2^2\\times3^2 = 36$.",
    },
    {
      kind: "callout",
      variant: "tip",
      title: "The product shortcut",
      content:
        "For any two numbers, $$\\text{HCF}(a,b) \\times \\text{LCM}(a,b) = a \\times b.$$ If you know three of these four quantities, you can find the fourth instantly.",
    },
    {
      kind: "check",
      id: "nt-c8",
      prompt:
        "Two numbers have HCF $6$ and LCM $90$. If one number is $18$, what is the other?",
      format: "numeric",
      answer: "30",
      hint: "Use $\\text{HCF} \\times \\text{LCM} = a \\times b$.",
      explanation:
        "$6 \\times 90 = 18 \\times b$, so $540 = 18b$ and $b = 30$. (Check: HCF$(18,30)=6$, LCM$=90$. ✓)",
    },
    {
      kind: "callout",
      variant: "trap",
      title: "HCF vs LCM mix-up",
      content:
        "Under pressure it's easy to swap them. Anchor it: the **H**CF is the **biggest number that fits into both** (so it's *smaller*); the **L**CM is the **smallest number both fit into** (so it's *larger*). Word-problem cue: things 'happening together again' → LCM; sharing/cutting 'into equal groups' → HCF.",
    },
    {
      kind: "check",
      id: "nt-c9",
      prompt:
        "Two cogs with $24$ and $36$ teeth mesh, starting with a marked tooth of each touching. After how many tooth-meshings do the marks touch again?",
      format: "numeric",
      answer: "72",
      hint: "The marks realign after a common multiple of $24$ and $36$ — the lowest one.",
      explanation:
        "LCM$(24,36)$: $24 = 2^3\\cdot3$, $36 = 2^2\\cdot3^2$, so LCM $= 2^3\\cdot3^2 = 72$.",
    },

    // ─────────── Section 8: Coprimality & parity ───────────
    {
      kind: "prose",
      heading: "8 · Coprimality and parity",
      content:
        "Two numbers are **coprime** (relatively prime) when their HCF is $1$ — they share no prime factor. **Parity** simply means whether a number is even or odd, and tracking it is a surprisingly powerful tool: even ± even = even, odd ± odd = even, even ± odd = odd. Many competition problems are cracked by noticing that a quantity must be even (or odd).",
    },
    {
      kind: "check",
      id: "nt-c10",
      prompt:
        "How many integers from $1$ to $12$ are coprime to $12$?",
      format: "numeric",
      answer: "4",
      hint: "$12 = 2^2\\times3$; remove every multiple of $2$ or $3$.",
      explanation:
        "The numbers sharing no factor with $12$ are $1, 5, 7, 11$ — exactly $4$. (This count is Euler's totient $\\varphi(12) = 4$.)",
    },
    {
      kind: "callout",
      variant: "tip",
      title: "A parity argument in one line",
      content:
        "Can $1 + 2 + 3 + \\cdots + 100$ be odd? Pair the $50$ odd numbers among $1\\ldots100$: an even count of odd numbers sums to an even total, and adding the even numbers keeps it even. So the sum is even — without computing $5050$.",
    },

    // ─────────── Section 9: Remainders, cycles & Fermat's Little Theorem ───────────
    {
      kind: "prose",
      heading: "9 · Remainders, repeating cycles, and Fermat's Little Theorem",
      content:
        "Last-digit and remainder questions look scary because the numbers are huge, but powers repeat in short cycles. The last digits of $2^1, 2^2, 2^3, \\dots$ go $2, 4, 8, 6, 2, 4, 8, 6, \\dots$ — a cycle of length $4$. To find the last digit of $2^{50}$, you only need $50 \\bmod 4 = 2$, pointing to the $2$nd entry, which is $4$.\n\n" +
        "Why do these cycles always exist? Because there are only finitely many possible remainders mod $m$, so the sequence $a^1, a^2, a^3, \\ldots \\pmod m$ must eventually repeat. The length of the cycle divides $\\varphi(m)$ (Euler's theorem), and in the special case where $m = p$ is prime, we get **Fermat's Little Theorem**.",
    },
    {
      kind: "callout",
      variant: "definition",
      title: "Fermat's Little Theorem",
      content:
        "If $p$ is prime and $p \\nmid a$, then:\n\n" +
        "$$a^{p-1} \\equiv 1 \\pmod{p}$$\n\n" +
        "Equivalently (for *any* integer $a$, including multiples of $p$):\n\n" +
        "$$a^p \\equiv a \\pmod{p}$$\n\n" +
        "This is immensely useful for finding remainders of huge powers. For example, to find $2^{100} \\bmod 13$: since $13$ is prime and $13 \\nmid 2$, we have $2^{12} \\equiv 1 \\pmod{13}$. Then $2^{100} = (2^{12})^8 \\cdot 2^4 \\equiv 1^8 \\cdot 16 \\equiv 3 \\pmod{13}$.",
    },
    {
      kind: "check",
      id: "nt-c11",
      prompt: "What is the last digit of $7^{2024}$?",
      format: "numeric",
      answer: "1",
      hint: "Last digits of powers of $7$ cycle: $7, 9, 3, 1, \\dots$ (length $4$). Find $2024 \\bmod 4$.",
      explanation:
        "The cycle $7,9,3,1$ has length $4$. Since $2024$ is a multiple of $4$, we land on the last entry of the cycle, $1$.",
    },
    {
      kind: "check",
      id: "nt-c12",
      prompt:
        "What is the remainder when $3^{100}$ is divided by $4$?",
      format: "numeric",
      answer: "1",
      hint: "$3 \\equiv -1 \\pmod 4$, so $3^{100} \\equiv (-1)^{100}$.",
      explanation:
        "$3 \\equiv -1 \\pmod 4$, so $3^{100} \\equiv (-1)^{100} = 1 \\pmod 4$. The remainder is $1$.",
    },
    {
      kind: "check",
      id: "nt-c26",
      prompt: "What is the remainder when $2^{50}$ is divided by $7$?",
      format: "numeric",
      answer: "4",
      hint: "By Fermat's Little Theorem, $2^6 \\equiv 1 \\pmod 7$. Write $50 = 6 \\times 8 + 2$.",
      explanation:
        "By FLT, $2^6 \\equiv 1 \\pmod 7$. So $2^{50} = (2^6)^8 \\cdot 2^2 \\equiv 1^8 \\cdot 4 = 4 \\pmod 7$. The remainder is $4$.",
    },
    {
      kind: "check",
      id: "nt-c27",
      prompt:
        "What is the remainder when $3^{1000}$ is divided by $11$?",
      format: "numeric",
      answer: "1",
      hint: "By FLT with $p = 11$: $3^{10} \\equiv 1 \\pmod{11}$. Since $1000 = 10 \\times 100$...",
      explanation:
        "$3^{10} \\equiv 1 \\pmod{11}$ (Fermat). $3^{1000} = (3^{10})^{100} \\equiv 1^{100} = 1 \\pmod{11}$. Remainder is $1$.",
    },
  ],

  workedExamples: [
    {
      kind: "example",
      title: "Smallest number with many factors",
      statement:
        "What is the smallest positive integer with exactly $12$ divisors?",
      approach:
        "We need exponents whose '+1's multiply to $12$. To keep the number small, attach the largest exponents to the smallest primes.",
      solution:
        "We want $(a_1+1)(a_2+1)\\cdots = 12$. Options for the exponent pattern: $12 = 12$ → $2^{11}=2048$; $=6\\times2$ → $2^5\\cdot3 = 96$; $=4\\times3$ → $2^3\\cdot3^2 = 72$; $=3\\times2\\times2$ → $2^2\\cdot3\\cdot5 = 60$. The smallest is $\\boxed{60}$.",
      alternative:
        "A useful rule of thumb: spread the factorisation across as many small primes as possible, with exponents decreasing as the primes increase.",
    },
    {
      kind: "example",
      title: "Trailing zeros of a factorial (harder)",
      statement:
        "How many zeros does $50!$ end in?",
      approach:
        "A trailing zero is a factor of $10 = 2\\times5$. There are far more $2$s than $5$s in a factorial, so the number of zeros equals the number of factors of $5$. Count multiples of $5$, then *additional* factors from multiples of $25$.",
      solution:
        "Multiples of $5$ up to $50$: $\\lfloor 50/5\\rfloor = 10$. Multiples of $25$ contribute one extra each: $\\lfloor 50/25\\rfloor = 2$. Total factors of $5$ is $10 + 2 = 12$, so $50!$ ends in $\\boxed{12}$ zeros.",
      alternative:
        "This is Legendre's formula: the exponent of a prime $p$ in $n!$ is $\\lfloor n/p\\rfloor + \\lfloor n/p^2\\rfloor + \\cdots$.",
    },
    {
      kind: "example",
      title: "Hamilton-style: bells (LCM with full reasoning)",
      statement:
        "Three bells ring at intervals of $12$, $15$ and $20$ minutes. They ring together at noon. When do they next all ring together? Give full reasoning.",
      approach:
        "'Ring together again' means a common multiple of all three intervals — the *lowest* such, the LCM.",
      solution:
        "Factorise: $12 = 2^2\\cdot3$, $15 = 3\\cdot5$, $20 = 2^2\\cdot5$. The LCM takes the highest power of each prime: $2^2 \\cdot 3 \\cdot 5 = 60$. So they next ring together $60$ minutes after noon, i.e. at **1:00 pm**. A complete solution states *why* the LCM is the answer: any common ringing time is a common multiple of $12,15,20$, and the first one after noon is the least common multiple.",
    },
    {
      kind: "example",
      title: "Hamilton-style: a 'find all' divisibility proof (hard)",
      statement:
        "Find all positive integers $n$ for which $n + 2$ divides $n^2 + 4$. Prove your list is complete.",
      approach:
        "Rewrite $n^2 + 4$ to expose a multiple of $(n+2)$ plus a constant remainder; then $(n+2)$ must divide that remainder.",
      solution:
        "Since $n^2 - 4 = (n+2)(n-2)$, we have $n^2 + 4 = (n+2)(n-2) + 8$. Therefore $n+2 \\mid n^2+4$ if and only if $n+2 \\mid 8$. The divisors of $8$ are $1,2,4,8$; with $n$ positive, $n+2 \\ge 3$, leaving $n+2 \\in \\{4, 8\\}$, i.e. $n = 2$ or $n = 6$. Both check out ($n+2=4\\mid 8$; $n+2=8\\mid 40$). The argument is exhaustive because we reduced the condition to dividing the fixed number $8$. $\\;\\blacksquare$",
      alternative:
        "The recurring move: to test '$f(n)$ divides $g(n)$', subtract a suitable multiple of $f(n)$ from $g(n)$ to leave a constant — the divisor must then divide that constant.",
    },
    {
      kind: "example",
      title: "Using Fermat's Little Theorem (competition remainder)",
      statement:
        "Find the remainder when $7^{82}$ is divided by $5$.",
      approach:
        "Since $5$ is prime and $5 \\nmid 7$, Fermat's Little Theorem gives $7^4 \\equiv 1 \\pmod 5$. Reduce the exponent mod $4$.",
      solution:
        "$7^4 \\equiv 1 \\pmod 5$ (FLT). $82 = 4 \\times 20 + 2$, so $7^{82} = (7^4)^{20} \\cdot 7^2 \\equiv 1 \\cdot 49 \\equiv 49 \\pmod 5$. $49 = 9 \\times 5 + 4$, so the remainder is $\\boxed{4}$.",
    },
    {
      kind: "example",
      title: "Euclidean algorithm in a word problem",
      statement:
        "A rectangular room measures $252\\text{ cm}$ by $108\\text{ cm}$. What is the side length of the largest square tile that fits perfectly (no cutting)?",
      approach:
        "The tile side must divide both $252$ and $108$, so the largest is $\\gcd(252, 108)$.",
      solution:
        "$252 = 2 \\times 108 + 36$. $108 = 3 \\times 36 + 0$. So $\\gcd(252, 108) = 36$. The largest square tile has side $\\boxed{36}\\text{ cm}$.",
    },
  ],

  practiceProblemIds: [
    "nt-001",
    "nt-010",
    "nt-003",
    "nt-002",
    "nt-006",
    "nt-015",
    "nt-007",
    "nt-005",
  ],
  challengeProblemIds: [
    "nt-008",
    "nt-011",
    "nt-009",
    "nt-004",
    "nt-012",
    "nt-013",
    "nt-014",
  ],

  summary: {
    keyFormulas: [
      "Divisor count of $n = p_1^{a_1}\\cdots p_k^{a_k}$ $$(a_1+1)(a_2+1)\\cdots(a_k+1)$$",
      "Sum of divisors $$\\sigma(n) = \\prod_{i} \\frac{p_i^{a_i+1}-1}{p_i - 1}$$",
      "Product of divisors $$\\prod d_i = n^{\\tau(n)/2}$$",
      "Product of HCF and LCM $$\\text{HCF}(a,b)\\times\\text{LCM}(a,b) = a\\times b$$",
      "Factors of prime $p$ in $n!$ (Legendre) $$\\left\\lfloor \\tfrac{n}{p}\\right\\rfloor + \\left\\lfloor \\tfrac{n}{p^2}\\right\\rfloor + \\cdots$$",
      "Fermat's Little Theorem: $a^{p-1} \\equiv 1 \\pmod{p}$ when $p$ is prime, $p \\nmid a$",
      "Bézout: $\\gcd(a,b) = ax + by$ for some integers $x, y$",
      "Factoring: $(x-y) \\mid (x^n - y^n)$; $(x+y) \\mid (x^n + y^n)$ for odd $n$",
      "HCF: lowest powers of shared primes; LCM: highest powers of all primes.",
    ],
    bigIdeas: [
      "Prime factorisation is a number's unique fingerprint — almost everything follows from it.",
      "An odd number of divisors signals a perfect square.",
      "Large powers repeat in short cycles, so remainders are about $\\bmod$ the cycle length.",
      "To prove '$f(n) \\mid g(n)$', reduce $g$ modulo $f$ to a constant the divisor must divide.",
      "Modular arithmetic lets you add, subtract, and multiply congruences — but NOT divide without checking coprimality.",
      "The Euclidean algorithm is the engine for computing GCDs and for finding Bézout coefficients.",
      "Fermat's Little Theorem provides a universal cycle length ($p-1$) for powers mod a prime.",
    ],
    patternTips: [
      "See 'how many factors' → factorise and use the $(a+1)$ rule.",
      "See 'happen together again' → LCM. See 'largest that divides/cuts both' → HCF.",
      "Unknown digit + 'divisible by 3/9/11' → use the digit-sum / alternating-sum rule.",
      "See a huge power's last digit/remainder → find the cycle length, then reduce the exponent mod it.",
      "'Trailing zeros of $n!$' → count factors of $5$ (with the $25, 125, \\dots$ extras).",
      "See '$a^{\\text{big}} \\bmod p$' with $p$ prime → use FLT to reduce the exponent mod $(p-1)$.",
      "Need to prove $k \\mid E$ → try to pair terms using $(x \\pm y) \\mid (x^n \\pm y^n)$.",
      "GCD of large numbers → Euclidean algorithm (repeated division) is faster than factoring.",
    ],
    traps: [
      "$1$ is not prime; $2$ is the only even prime.",
      "Don't multiply exponents; add $1$ to each then multiply.",
      "Keep HCF (smaller) and LCM (larger) straight.",
      "In a 'find all', always prove the list is complete — don't just list examples.",
      "You cannot cancel a factor $k$ from a congruence mod $n$ unless $\\gcd(k,n) = 1$.",
      "FLT requires $p$ to be prime and $p \\nmid a$; check both before applying.",
    ],
    revisionNotes: [
      "Be able to factorise any number up to ~1000 quickly with a factor tree.",
      "Memorise the divisibility tests for 2,3,4,5,6,7,8,9,11,13.",
      "Memorise last-digit cycles for $2,3,7,8$ (length $4$) and $4,9$ (length $2$).",
      "Practise turning word problems into HCF/LCM in one reading.",
      "Drill the 'reduce mod $f$' technique for divisibility proofs.",
      "Be fluent with the Euclidean algorithm — practise on 3-digit numbers.",
      "Know Fermat's Little Theorem and practise reducing exponents mod $p-1$.",
      "Practise writing divisibility proofs using pairing and factoring identities.",
    ],
  },
};
