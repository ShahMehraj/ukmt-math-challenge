import type { Problem } from "@/lib/types";

/**
 * Central problem bank. Chapters reference problems by id, and the Problem Bank
 * page filters over this whole array. Problems are written in authentic IMC
 * (multiple-choice, 5 options A–E) and Hamilton (written-solution) styles.
 *
 * NOTE: statements are original, written in the *style* of UKMT problems for
 * teaching purposes; where a real past-paper inspired a question, the source &
 * year hint at the lineage without reproducing copyrighted text verbatim.
 */
export const PROBLEMS: Problem[] = [
  // ─────────────────────────── Number Theory ───────────────────────────────
  {
    id: "nt-001",
    statement:
      "What is the sum of all the prime numbers between $10$ and $20$?",
    format: "mcq",
    options: [
      { label: "A", text: "$60$" },
      { label: "B", text: "$58$" },
      { label: "C", text: "$50$" },
      { label: "D", text: "$52$" },
      { label: "E", text: "$48$" },
    ],
    answer: "A",
    topic: "number-theory",
    subtopic: "Primes",
    concepts: ["prime numbers", "addition"],
    difficulty: "easy",
    source: "IMC",
    skills: ["recall of primes", "careful addition"],
    estMinutes: 1,
    tags: ["primes"],
    hints: ["List the primes first: which numbers from 11 to 19 are prime?"],
    solution:
      "The primes between $10$ and $20$ are $11, 13, 17, 19$. Their sum is $11+13+17+19 = 60$.",
    solutionSteps: [
      "Identify primes between 10 and 20: $11, 13, 17, 19$ ($15$ is $3\\times5$, others are even).",
      "Add them: $11+13 = 24$, $17+19 = 36$.",
      "$24 + 36 = 60$.",
    ],
  },
  {
    id: "nt-002",
    statement:
      "How many positive divisors does $72$ have?",
    format: "mcq",
    options: [
      { label: "A", text: "$6$" },
      { label: "B", text: "$8$" },
      { label: "C", text: "$10$" },
      { label: "D", text: "$12$" },
      { label: "E", text: "$14$" },
    ],
    answer: "D",
    topic: "number-theory",
    subtopic: "Divisors",
    concepts: ["prime factorisation", "divisor counting formula"],
    difficulty: "medium",
    source: "IMC",
    skills: ["prime factorisation", "divisor formula"],
    estMinutes: 2,
    tags: ["divisors", "factorisation"],
    similar: ["nt-003"],
    hints: [
      "Write $72$ as a product of prime powers.",
      "If $n = p^a q^b$, the number of divisors is $(a+1)(b+1)$.",
    ],
    solution:
      "$72 = 2^3 \\times 3^2$. The number of divisors is $(3+1)(2+1) = 4 \\times 3 = 12$.",
    solutionSteps: [
      "$72 = 8 \\times 9 = 2^3 \\times 3^2$.",
      "Add one to each exponent: $3+1 = 4$ and $2+1 = 3$.",
      "Multiply: $4 \\times 3 = 12$ divisors.",
    ],
  },
  {
    id: "nt-003",
    statement:
      "What is the highest common factor (HCF) of $84$ and $120$?",
    format: "mcq",
    options: [
      { label: "A", text: "$6$" },
      { label: "B", text: "$12$" },
      { label: "C", text: "$24$" },
      { label: "D", text: "$4$" },
      { label: "E", text: "$840$" },
    ],
    answer: "B",
    topic: "number-theory",
    subtopic: "HCF and LCM",
    concepts: ["prime factorisation", "HCF"],
    difficulty: "easy",
    source: "IMC",
    skills: ["prime factorisation", "comparing factors"],
    estMinutes: 2,
    tags: ["hcf", "factorisation"],
    similar: ["nt-002"],
    hints: ["Factorise both numbers into primes and take the shared part."],
    solution:
      "$84 = 2^2 \\times 3 \\times 7$ and $120 = 2^3 \\times 3 \\times 5$. The HCF takes the lowest power of each shared prime: $2^2 \\times 3 = 12$.",
    solutionSteps: [
      "$84 = 2^2 \\times 3 \\times 7$.",
      "$120 = 2^3 \\times 3 \\times 5$.",
      "Shared primes: $2$ (lowest power $2^2$) and $3$. HCF $= 4 \\times 3 = 12$.",
    ],
  },
  {
    id: "nt-004",
    statement:
      "What is the remainder when $2^{50}$ is divided by $7$?",
    format: "mcq",
    options: [
      { label: "A", text: "$1$" },
      { label: "B", text: "$2$" },
      { label: "C", text: "$4$" },
      { label: "D", text: "$5$" },
      { label: "E", text: "$6$" },
    ],
    answer: "C",
    topic: "number-theory",
    subtopic: "Remainders & cycles",
    concepts: ["powers", "remainder cycles", "modular thinking"],
    difficulty: "hard",
    source: "IMC",
    skills: ["spotting a repeating cycle"],
    estMinutes: 3,
    tags: ["remainders", "powers", "cycles"],
    hints: [
      "Compute $2^1, 2^2, 2^3, \\dots$ modulo $7$ and look for a repeat.",
      "The remainders of powers of $2$ mod $7$ cycle every 3.",
    ],
    solution:
      "Powers of $2$ mod $7$: $2,4,1,2,4,1,\\dots$ — a cycle of length $3$. Since $50 = 3\\times16 + 2$, the remainder matches that of $2^2$, which is $4$.",
    solutionSteps: [
      "$2^1\\equiv2,\\ 2^2\\equiv4,\\ 2^3\\equiv1 \\pmod 7$, then it repeats.",
      "Find $50 \\bmod 3 = 2$.",
      "So $2^{50} \\equiv 2^2 \\equiv 4 \\pmod 7$.",
    ],
  },
  {
    id: "nt-005",
    statement:
      "A two-digit number is $7$ times the sum of its digits. What is the number?",
    format: "numeric",
    answer: "21",
    acceptedAnswers: ["42", "63", "84"],
    topic: "number-theory",
    subtopic: "Digit problems",
    concepts: ["place value", "forming equations from digits"],
    difficulty: "medium",
    source: "Hamilton",
    skills: ["algebra from digits", "case checking"],
    estMinutes: 4,
    tags: ["digits", "place-value"],
    hints: [
      "Write the number as $10a + b$ where $a,b$ are its digits.",
      "Set $10a + b = 7(a+b)$ and simplify.",
    ],
    solution:
      "Let the number be $10a+b$. Then $10a+b = 7(a+b) \\Rightarrow 3a = 6b \\Rightarrow a = 2b$. So $(a,b) \\in \\{(2,1),(4,2),(6,3),(8,4)\\}$, giving $21, 42, 63, 84$. Each works; the smallest is $\\boxed{21}$.",
    solutionSteps: [
      "Let digits be $a$ (tens) and $b$ (units): number $= 10a+b$.",
      "$10a + b = 7(a+b) \\Rightarrow 3a = 6b \\Rightarrow a = 2b$.",
      "Valid digit pairs give $21, 42, 63, 84$.",
    ],
  },

  // ─────────────────────────── Counting & Probability ──────────────────────
  {
    id: "cp-001",
    statement:
      "At a party, every pair of the $8$ guests shakes hands exactly once. How many handshakes take place?",
    format: "mcq",
    options: [
      { label: "A", text: "$16$" },
      { label: "B", text: "$28$" },
      { label: "C", text: "$36$" },
      { label: "D", text: "$56$" },
      { label: "E", text: "$64$" },
    ],
    answer: "B",
    topic: "counting-probability",
    subtopic: "Combinations",
    concepts: ["choosing pairs", "handshake formula"],
    difficulty: "easy",
    source: "IMC",
    skills: ["counting pairs"],
    estMinutes: 2,
    tags: ["handshakes", "combinations", "archetype"],
    hints: [
      "Each handshake involves a *pair* of people.",
      "The number of pairs from $n$ people is $\\frac{n(n-1)}{2}$.",
    ],
    solution:
      "The number of handshakes is the number of ways to choose $2$ people from $8$: $\\frac{8\\times7}{2} = 28$.",
    solutionSteps: [
      "Each person shakes $7$ others' hands: $8 \\times 7 = 56$.",
      "But this counts each handshake twice (A–B and B–A).",
      "Divide by $2$: $56/2 = 28$.",
    ],
  },
  {
    id: "cp-002",
    statement:
      "How many different three-digit numbers can be formed using the digits $1, 2, 3, 4$ if no digit is repeated?",
    format: "mcq",
    options: [
      { label: "A", text: "$12$" },
      { label: "B", text: "$24$" },
      { label: "C", text: "$36$" },
      { label: "D", text: "$64$" },
      { label: "E", text: "$120$" },
    ],
    answer: "B",
    topic: "counting-probability",
    subtopic: "Multiplication principle",
    concepts: ["arrangements", "multiplication principle"],
    difficulty: "easy",
    source: "IMC",
    skills: ["counting arrangements"],
    estMinutes: 2,
    tags: ["counting", "permutations"],
    hints: ["Choose the hundreds digit, then tens, then units in turn."],
    solution:
      "There are $4$ choices for the first digit, $3$ for the second, $2$ for the third: $4\\times3\\times2 = 24$.",
    solutionSteps: [
      "Hundreds digit: $4$ choices.",
      "Tens digit: $3$ remaining choices.",
      "Units digit: $2$ remaining. Total $4\\times3\\times2 = 24$.",
    ],
  },
  {
    id: "cp-003",
    statement:
      "A fair six-sided die is rolled twice. What is the probability that the two numbers add up to $7$?",
    format: "mcq",
    options: [
      { label: "A", text: "$\\tfrac{1}{6}$" },
      { label: "B", text: "$\\tfrac{1}{9}$" },
      { label: "C", text: "$\\tfrac{5}{36}$" },
      { label: "D", text: "$\\tfrac{1}{12}$" },
      { label: "E", text: "$\\tfrac{7}{36}$" },
    ],
    answer: "A",
    topic: "counting-probability",
    subtopic: "Probability",
    concepts: ["equally likely outcomes", "sample space"],
    difficulty: "medium",
    source: "IMC",
    skills: ["listing favourable outcomes"],
    estMinutes: 2,
    tags: ["probability", "dice"],
    hints: [
      "There are $36$ equally likely ordered outcomes.",
      "Which pairs sum to 7?",
    ],
    solution:
      "Pairs summing to $7$: $(1,6),(2,5),(3,4),(4,3),(5,2),(6,1)$ — that's $6$ out of $36$. Probability $= 6/36 = 1/6$.",
    solutionSteps: [
      "Total outcomes: $6 \\times 6 = 36$.",
      "Favourable: $6$ ordered pairs sum to $7$.",
      "$6/36 = 1/6$.",
    ],
  },

  // ─────────────────────────── Geometry — Angles ───────────────────────────
  {
    id: "ga-001",
    statement:
      "The interior angles of a regular polygon are each $156^\\circ$. How many sides does the polygon have?",
    format: "mcq",
    options: [
      { label: "A", text: "$12$" },
      { label: "B", text: "$13$" },
      { label: "C", text: "$15$" },
      { label: "D", text: "$18$" },
      { label: "E", text: "$24$" },
    ],
    answer: "C",
    topic: "geometry-angles",
    subtopic: "Polygon angles",
    concepts: ["exterior angle", "regular polygon"],
    difficulty: "medium",
    source: "IMC",
    skills: ["exterior angle reasoning"],
    estMinutes: 2,
    tags: ["polygons", "angles"],
    hints: [
      "Each exterior angle is $180^\\circ - 156^\\circ$.",
      "Exterior angles of any polygon sum to $360^\\circ$.",
    ],
    solution:
      "Each exterior angle is $180^\\circ - 156^\\circ = 24^\\circ$. Since exterior angles sum to $360^\\circ$, the number of sides is $360 / 24 = 15$.",
    solutionSteps: [
      "Exterior angle $= 180^\\circ - 156^\\circ = 24^\\circ$.",
      "Number of sides $= 360^\\circ / 24^\\circ = 15$.",
    ],
  },
  {
    id: "ga-002",
    statement:
      "In triangle $ABC$, angle $A = 40^\\circ$ and the triangle is isosceles with $AB = AC$. What is the size of angle $B$?",
    format: "mcq",
    options: [
      { label: "A", text: "$40^\\circ$" },
      { label: "B", text: "$50^\\circ$" },
      { label: "C", text: "$60^\\circ$" },
      { label: "D", text: "$70^\\circ$" },
      { label: "E", text: "$100^\\circ$" },
    ],
    answer: "D",
    topic: "geometry-angles",
    subtopic: "Triangles",
    concepts: ["angle sum", "isosceles triangles"],
    difficulty: "easy",
    source: "IMC",
    skills: ["base angles", "angle sum"],
    estMinutes: 2,
    tags: ["triangles", "isosceles", "angles"],
    hints: ["Base angles of an isosceles triangle are equal."],
    solution:
      "Since $AB=AC$, the base angles $B$ and $C$ are equal. They share the remaining $180^\\circ - 40^\\circ = 140^\\circ$, so each is $70^\\circ$.",
    solutionSteps: [
      "Angles sum to $180^\\circ$, so $B + C = 140^\\circ$.",
      "Base angles equal: $B = C = 70^\\circ$.",
    ],
  },

  // ─────────────────────────── Geometry — Area ─────────────────────────────
  {
    id: "ar-001",
    statement:
      "A right-angled triangle has legs of length $5$ and $12$. What is the length of its hypotenuse?",
    format: "numeric",
    answer: "13",
    topic: "geometry-area",
    subtopic: "Pythagoras",
    concepts: ["Pythagorean theorem", "Pythagorean triples"],
    difficulty: "easy",
    source: "IMC",
    skills: ["applying Pythagoras"],
    estMinutes: 1,
    tags: ["pythagoras", "triples"],
    hints: ["$a^2 + b^2 = c^2$."],
    solution:
      "$c = \\sqrt{5^2 + 12^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$. ($5,12,13$ is a Pythagorean triple.)",
    solutionSteps: [
      "$5^2 + 12^2 = 25 + 144 = 169$.",
      "$\\sqrt{169} = 13$.",
    ],
  },
  {
    id: "ar-002",
    statement:
      "A square has the same area as a rectangle measuring $4\\,\\text{cm}$ by $9\\,\\text{cm}$. What is the perimeter of the square?",
    format: "mcq",
    options: [
      { label: "A", text: "$24\\,\\text{cm}$" },
      { label: "B", text: "$26\\,\\text{cm}$" },
      { label: "C", text: "$36\\,\\text{cm}$" },
      { label: "D", text: "$12\\,\\text{cm}$" },
      { label: "E", text: "$18\\,\\text{cm}$" },
    ],
    answer: "A",
    topic: "geometry-area",
    subtopic: "Area & perimeter",
    concepts: ["area of rectangle", "area of square", "square roots"],
    difficulty: "medium",
    source: "IMC",
    skills: ["link area to side length"],
    estMinutes: 2,
    tags: ["area", "perimeter", "squares"],
    hints: [
      "Find the area of the rectangle first.",
      "The square's side is the square root of its area.",
    ],
    solution:
      "Rectangle area $= 4 \\times 9 = 36\\,\\text{cm}^2$. The square has area $36$, so its side is $\\sqrt{36} = 6\\,\\text{cm}$ and its perimeter is $4\\times6 = 24\\,\\text{cm}$.",
    solutionSteps: [
      "Area $= 4 \\times 9 = 36$.",
      "Square side $= \\sqrt{36} = 6$.",
      "Perimeter $= 4 \\times 6 = 24\\,\\text{cm}$.",
    ],
  },

  // ─────────────────────────── Algebra ─────────────────────────────────────
  {
    id: "al-001",
    statement:
      "If $3(x - 2) = 2x + 5$, what is the value of $x$?",
    format: "numeric",
    answer: "11",
    topic: "algebra",
    subtopic: "Linear equations",
    concepts: ["expanding brackets", "solving linear equations"],
    difficulty: "easy",
    source: "IMC",
    skills: ["solving linear equations"],
    estMinutes: 1,
    tags: ["linear", "equations"],
    hints: ["Expand the bracket, then collect $x$ terms on one side."],
    solution:
      "$3x - 6 = 2x + 5 \\Rightarrow x = 11$.",
    solutionSteps: [
      "Expand: $3x - 6 = 2x + 5$.",
      "Subtract $2x$: $x - 6 = 5$.",
      "Add $6$: $x = 11$.",
    ],
  },
  {
    id: "al-002",
    statement:
      "The sum of two numbers is $20$ and their difference is $4$. What is their product?",
    format: "mcq",
    options: [
      { label: "A", text: "$84$" },
      { label: "B", text: "$96$" },
      { label: "C", text: "$80$" },
      { label: "D", text: "$100$" },
      { label: "E", text: "$72$" },
    ],
    answer: "B",
    topic: "algebra",
    subtopic: "Simultaneous equations",
    concepts: ["forming equations", "solving simultaneously"],
    difficulty: "easy",
    source: "IMC",
    skills: ["simultaneous equations"],
    estMinutes: 2,
    tags: ["simultaneous", "equations"],
    hints: ["Add the two relationships to find one number quickly."],
    solution:
      "Adding the equations $a+b=20$ and $a-b=4$ gives $2a = 24$, so $a = 12$ and $b = 8$. Their product is $12\\times8 = 96$.",
    solutionSteps: [
      "$a + b = 20$, $a - b = 4$.",
      "Add: $2a = 24 \\Rightarrow a = 12$, then $b = 8$.",
      "Product $= 12 \\times 8 = 96$.",
    ],
  },

  // ─────────────────────────── Sequences ───────────────────────────────────
  {
    id: "sq-001",
    statement:
      "What is the $10$th term of the arithmetic sequence $3, 7, 11, 15, \\dots$?",
    format: "numeric",
    answer: "39",
    topic: "sequences",
    subtopic: "Arithmetic sequences",
    concepts: ["common difference", "nth term"],
    difficulty: "easy",
    source: "IMC",
    skills: ["nth-term formula"],
    estMinutes: 1,
    tags: ["sequences", "arithmetic"],
    hints: ["The common difference is $4$; use $a + (n-1)d$."],
    solution:
      "First term $a = 3$, common difference $d = 4$. The $10$th term is $3 + 9\\times4 = 39$.",
    solutionSteps: [
      "$a = 3$, $d = 4$.",
      "$a_{10} = 3 + (10-1)\\times 4 = 3 + 36 = 39$.",
    ],
  },
  {
    id: "sq-002",
    statement:
      "Prove that the sum of the first $n$ odd numbers $1 + 3 + 5 + \\cdots + (2n-1)$ equals $n^2$.",
    format: "written",
    answer: "$n^2$",
    topic: "sequences",
    subtopic: "Series & proof",
    concepts: ["sum of an arithmetic series", "proof"],
    difficulty: "olympiad",
    source: "Hamilton",
    skills: ["constructing a proof", "arithmetic series"],
    estMinutes: 8,
    tags: ["proof", "series", "odd-numbers"],
    hints: [
      "Pair the first and last terms, second and second-last, …",
      "Alternatively, use the arithmetic-series formula $\\frac{n}{2}(\\text{first}+\\text{last})$.",
    ],
    solution:
      "The terms form an arithmetic sequence with first term $1$, last term $2n-1$, and $n$ terms. The sum of an arithmetic series is $\\frac{n}{2}(\\text{first} + \\text{last}) = \\frac{n}{2}\\big(1 + (2n-1)\\big) = \\frac{n}{2}\\cdot 2n = n^2$. $\\;\\blacksquare$\n\nA visual proof: $n^2$ counts the unit squares of an $n\\times n$ grid, which can be split into nested L-shaped 'gnomons' of sizes $1, 3, 5, \\dots, 2n-1$.",
    solutionSteps: [
      "Recognise an arithmetic series: first $=1$, last $=2n-1$, count $=n$.",
      "Apply $S = \\frac{n}{2}(\\text{first} + \\text{last})$.",
      "$S = \\frac{n}{2}(2n) = n^2$. State the conclusion clearly.",
    ],
  },

  // ─────────────────────────── Ratio / Rates ───────────────────────────────
  {
    id: "rp-001",
    statement:
      "A car travels $150$ km in $2$ hours $30$ minutes. What is its average speed in km/h?",
    format: "numeric",
    answer: "60",
    topic: "ratio-proportion",
    subtopic: "Speed, distance, time",
    concepts: ["average speed", "unit conversion"],
    difficulty: "easy",
    source: "IMC",
    skills: ["speed = distance / time"],
    estMinutes: 2,
    tags: ["speed", "rates"],
    hints: ["Convert the time to hours: $2$ h $30$ min $= 2.5$ h."],
    solution:
      "Average speed $= \\dfrac{\\text{distance}}{\\text{time}} = \\dfrac{150}{2.5} = 60$ km/h.",
    solutionSteps: [
      "Time $= 2.5$ hours.",
      "Speed $= 150 / 2.5 = 60$ km/h.",
    ],
  },
  {
    id: "rp-002",
    statement:
      "£$96$ is shared between Amy, Ben and Cara in the ratio $3 : 4 : 5$. How much does Cara receive?",
    format: "mcq",
    options: [
      { label: "A", text: "£$24$" },
      { label: "B", text: "£$32$" },
      { label: "C", text: "£$40$" },
      { label: "D", text: "£$48$" },
      { label: "E", text: "£$36$" },
    ],
    answer: "C",
    topic: "ratio-proportion",
    subtopic: "Sharing in a ratio",
    concepts: ["ratio parts", "division"],
    difficulty: "easy",
    source: "IMC",
    skills: ["dividing into ratio parts"],
    estMinutes: 2,
    tags: ["ratio", "sharing"],
    hints: ["There are $3+4+5 = 12$ equal parts."],
    solution:
      "Total parts $= 3+4+5 = 12$, so one part is £$96/12 = £8$. Cara has $5$ parts: $5 \\times £8 = £40$.",
    solutionSteps: [
      "Total parts $= 12$.",
      "One part $= 96 / 12 = 8$.",
      "Cara: $5 \\times 8 = £40$.",
    ],
  },

  // ─────────────────────────── Logic / Strategy ────────────────────────────
  {
    id: "lg-001",
    statement:
      "Five friends finish a race. Alex beat Bo. Cy beat Dee but lost to Eve. Bo beat Eve. Who came last?",
    format: "mcq",
    options: [
      { label: "A", text: "Alex" },
      { label: "B", text: "Bo" },
      { label: "C", text: "Cy" },
      { label: "D", text: "Dee" },
      { label: "E", text: "Eve" },
    ],
    answer: "D",
    topic: "logic-strategy",
    subtopic: "Ordering & deduction",
    concepts: ["transitive ordering", "logical deduction"],
    difficulty: "medium",
    source: "IMC",
    skills: ["chaining inequalities"],
    estMinutes: 3,
    tags: ["logic", "ordering"],
    hints: [
      "Write each result as an inequality, e.g. Alex > Bo (Alex ahead of Bo).",
      "Chain them: Alex > Bo > Eve > Cy > Dee.",
    ],
    solution:
      "From the clues: Alex > Bo, Bo > Eve, Eve > Cy, Cy > Dee. Chaining gives Alex > Bo > Eve > Cy > Dee, so Dee came last.",
    solutionSteps: [
      "Alex > Bo and Bo > Eve.",
      "Eve > Cy and Cy > Dee.",
      "Combine: Alex > Bo > Eve > Cy > Dee — Dee is last.",
    ],
  },
  {
    id: "lg-002",
    statement:
      "Hamilton-style: In a class, every student studies at least one of French or Spanish. $18$ study French, $15$ study Spanish, and $7$ study both. How many students are in the class? Justify your answer.",
    format: "written",
    answer: "26",
    topic: "logic-strategy",
    subtopic: "Sets & inclusion–exclusion",
    concepts: ["inclusion-exclusion", "Venn diagrams"],
    difficulty: "medium",
    source: "Hamilton",
    skills: ["inclusion–exclusion principle"],
    estMinutes: 5,
    tags: ["sets", "venn", "inclusion-exclusion"],
    hints: [
      "Drawing a Venn diagram with the overlap labelled helps.",
      "Adding $18 + 15$ counts the 'both' students twice.",
    ],
    solution:
      "By inclusion–exclusion, $|F \\cup S| = |F| + |S| - |F \\cap S| = 18 + 15 - 7 = 26$. Since every student studies at least one language, the class size equals $|F\\cup S| = 26$.\n\nCheck with a Venn diagram: French only $= 18-7 = 11$, Spanish only $= 15-7 = 8$, both $= 7$; total $= 11+8+7 = 26$. $\\;\\blacksquare$",
    solutionSteps: [
      "French only $= 18 - 7 = 11$.",
      "Spanish only $= 15 - 7 = 8$.",
      "Add the three regions: $11 + 8 + 7 = 26$.",
    ],
  },
];

export const PROBLEM_BY_ID = Object.fromEntries(
  PROBLEMS.map((p) => [p.id, p])
) as Record<string, Problem>;
