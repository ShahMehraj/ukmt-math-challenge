import type { Chapter } from "@/lib/types";

/**
 * Sets & Real Numbers — foundational chapter on set theory, number classification,
 * surds and rational exponents.
 *
 * Covers: set notation, subsets & power sets, set operations, inclusion-exclusion,
 * number hierarchy (N ⊂ Z ⊂ Q ⊂ R), rational/irrational numbers, surds &
 * rationalisation, laws of rational exponents.
 */
export const setsRealsChapter: Chapter = {
  id: "ch-sets-reals",
  title: "Sets & Real Numbers",
  topic: "sets-reals",
  order: 3,
  examFocus: "both",
  difficulty: "easy",
  estMinutes: 90,
  prerequisites: ["ch-found-1"],
  blurb:
    "Sets provide the language for describing collections of numbers, while the real number system is the stage on which all of competition mathematics plays out. This chapter builds fluency with set notation, operations, and counting arguments, then explores the hierarchy from naturals through irrationals, mastering surds and exponent laws along the way.",

  intro: {
    whyItMatters:
      "Set language underpins every branch of mathematics: probability uses event sets, geometry uses loci described as sets of points, and number theory classifies integers into carefully defined sets. Understanding the real number hierarchy — and especially what separates rationals from irrationals — is essential for proof-based questions in Hamilton and for eliminating options in IMC.",
    whereItAppears:
      "IMC regularly tests set counting via inclusion-exclusion (Q8-15), surd manipulation (Q10-18), and exponent laws (Q5-12). Hamilton demands proofs of irrationality and careful rationalisation. Both exams expect fluent interval and set-builder notation in working.",
    typicalPatterns: [
      "Use inclusion-exclusion to count elements in overlapping survey groups.",
      "Determine whether a given decimal is rational or irrational.",
      "Simplify or rationalise expressions involving surds.",
      "Apply exponent laws to simplify nested expressions.",
      "Prove a number is irrational by contradiction.",
      "Find the number of subsets of a finite set with a given property.",
    ],
    commonMistakes: [
      "Confusing $\\subseteq$ (subset or equal) with $\\subset$ (proper subset).",
      "Forgetting to subtract the intersection in inclusion-exclusion.",
      "Claiming $\\sqrt{a+b} = \\sqrt{a} + \\sqrt{b}$ — this is false!",
      "Rationalising only part of a binomial denominator.",
      "Treating $a^{m^n}$ as $(a^m)^n$ — exponentiation is right-associative.",
      "Assuming that irrational times irrational is always irrational (counterexample: $\\sqrt{2} \\times \\sqrt{2} = 2$).",
    ],
  },

  lesson: [
    // ═══════════════════════════════════════════════════════════════════════════
    // SECTION 1: Sets — definition and notation
    // ═══════════════════════════════════════════════════════════════════════════
    {
      kind: "prose",
      heading: "1 · Sets — definition and notation",
      content:
        "A **set** is a well-defined collection of distinct objects called **elements** (or members). 'Well-defined' means there is no ambiguity about whether an object belongs to the set.\n\nWe write $a \\in A$ to mean '$a$ is an element of $A$' and $a \\notin A$ for '$a$ is not in $A$'.\n\n**Roster (tabular) form:** list all elements inside braces.\n$$A = \\{1, 2, 3, 4, 5\\}$$\n\n**Set-builder form:** describe the property that characterises elements.\n$$B = \\{x : x \\in \\mathbb{Z},\\; x > 0,\\; x \\leq 5\\}$$\nBoth describe the same set.\n\n**Special sets:**\n- Empty set: $\\emptyset = \\{\\}$ (contains no elements)\n- Singleton: a set with exactly one element, e.g. $\\{7\\}$\n- Universal set $U$: the 'universe of discourse' containing all objects under consideration",
    },
    {
      kind: "callout",
      variant: "definition",
      title: "Standard number sets",
      content:
        "The standard number sets you must know:\n\n$\\mathbb{N} = \\{0, 1, 2, 3, \\ldots\\}$ — natural numbers (some authors exclude 0)\n$\\mathbb{Z} = \\{\\ldots, -2, -1, 0, 1, 2, \\ldots\\}$ — integers\n$\\mathbb{Q} = \\{p/q : p,q \\in \\mathbb{Z},\\; q \\neq 0\\}$ — rational numbers\n$\\mathbb{R}$ — all real numbers (rationals and irrationals together)\n\nThey nest: $\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R}$.",
    },
    {
      kind: "callout",
      variant: "tip",
      title: "Cardinal number",
      content:
        "The **cardinal number** (or cardinality) of a finite set $A$, written $|A|$ or $n(A)$, is the number of elements in $A$. For example, if $A = \\{2, 4, 6, 8\\}$ then $|A| = 4$. By convention, $|\\emptyset| = 0$.",
    },
    {
      kind: "diagram",
      diagram: {
        svg: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" width="300" height="200"><rect x="5" y="5" width="290" height="190" rx="8" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="280" y="20" font-size="12" fill="currentColor" font-style="italic">U</text><circle cx="120" cy="100" r="60" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="190" cy="100" r="60" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="90" y="105" font-size="16" fill="currentColor" font-weight="bold">A</text><text x="210" y="105" font-size="16" fill="currentColor" font-weight="bold">B</text><text x="148" y="105" font-size="12" fill="currentColor">A∩B</text></svg>`,
        alt: "Venn diagram showing two overlapping circles labelled A and B inside a rectangle representing the universal set U. The overlap region is labelled A∩B.",
      },
    },
    {
      kind: "callout",
      variant: "definition",
      title: "Equal sets and finite vs infinite",
      content:
        "Two sets are **equal** ($A = B$) iff they have exactly the same elements (order and repetition do not matter).\n\nA set is **finite** if its cardinality is a non-negative integer; otherwise it is **infinite**. For example, $\\{1,2,3\\}$ is finite and $\\mathbb{N}$ is infinite.",
    },
    {
      kind: "check",
      id: "sr-c1",
      prompt:
        "Write the set $A = \\{x : x \\in \\mathbb{N},\\; x^2 < 20\\}$ in roster form. How many elements does it have?",
      format: "numeric",
      answer: "5",
      hint: "List natural numbers whose square is less than 20: $0^2=0, 1^2=1, 2^2=4, 3^2=9, 4^2=16, 5^2=25$. Which satisfy $x^2<20$?",
      explanation:
        "$A = \\{0, 1, 2, 3, 4\\}$ since $0^2=0, 1^2=1, 2^2=4, 3^2=9, 4^2=16$ are all less than 20, but $5^2=25 \\geq 20$. So $|A| = 5$.",
    },
    {
      kind: "check",
      id: "sr-c2",
      prompt:
        "True or false: $\\{1, 2, 3\\} = \\{3, 1, 2\\}$.",
      format: "text",
      answer: "true",
      acceptedAnswers: ["true", "True", "TRUE", "yes", "Yes"],
      hint: "Recall that in a set, order does not matter.",
      explanation:
        "Sets are equal if they contain exactly the same elements, regardless of order. Both contain 1, 2, and 3, so they are equal.",
    },
    {
      kind: "check",
      id: "sr-c3",
      prompt:
        "What is the cardinality of the empty set $\\emptyset$?",
      format: "numeric",
      answer: "0",
      hint: "The empty set has no elements at all.",
      explanation:
        "$|\\emptyset| = 0$ by definition — the empty set contains no elements.",
    },
    {
      kind: "prose",
      heading: "",
      content:
        "**More on set notation and representation:**\n\n**Equivalent representations:** Any set can be written in multiple valid ways:\n$$\\{x \\in \\mathbb{Z} : -2 \\le x \\le 3\\} = \\{-2, -1, 0, 1, 2, 3\\}$$\n$$\\{x : x \\text{ is a prime less than 10}\\} = \\{2, 3, 5, 7\\}$$\n\n**Set membership vs subsets:** Don't confuse:\n- $3 \\in \\{1, 2, 3\\}$ — the number 3 is an element\n- $\\{3\\} \\subset \\{1, 2, 3\\}$ — the set $\\{3\\}$ is a subset\n- $3 \\notin \\{\\{3\\}\\}$ — here the only element is the SET $\\{3\\}$, not the number 3!\n\n**Types of sets:**\n- **Null/empty set:** $\\emptyset = \\{\\}$. Note: $\\{0\\} \\neq \\emptyset$ (the first has one element!)\n- **Singleton:** exactly one element, e.g. $\\{5\\}$, $\\{\\emptyset\\}$\n- **Finite:** cardinality is a specific non-negative integer\n- **Infinite:** cardinality is not finite (e.g. $\\mathbb{N}$, $\\mathbb{Z}$, $\\mathbb{R}$)\n- **Equivalent sets:** have the same cardinality (can be put in 1-1 correspondence)\n\n**Important non-examples (not well-defined):**\n- $\\{x : x \\text{ is a beautiful flower}\\}$ — not well-defined (subjective)\n- $\\{x : x \\text{ is a tall person}\\}$ — ambiguous",
    },
    {
      kind: "callout",
      variant: "trap",
      title: "Common set notation traps",
      content:
        "• $\\emptyset \\neq \\{\\emptyset\\}$: the first is the empty set (0 elements); the second is a set containing one element (the empty set itself).\n• $\\{1, 1, 2\\} = \\{1, 2\\}$: repetition doesn't count in sets — elements are distinct.\n• $\\{1, 2, 3\\}$ and $\\{3, 2, 1\\}$ are the SAME set — order is irrelevant.\n• $|\\{\\emptyset\\}| = 1$, not 0! It has one element (which happens to be the empty set).\n• $0 \\in \\mathbb{N}$ in some conventions, $0 \\notin \\mathbb{N}$ in others. Always check which is being used.",
    },
    {
      kind: "callout",
      variant: "definition",
      title: "Describing sets — the three methods",
      content:
        "**1. Roster/Tabular:** List all elements: $A = \\{2, 4, 6, 8, 10\\}$\n\n**2. Set-builder:** Describe the rule: $A = \\{x \\in \\mathbb{N} : x \\text{ is even}, x \\le 10\\}$\n\n**3. Semantic/verbal:** Describe in words: 'A is the set of positive even integers not exceeding 10.'\n\nFor infinite sets, you must use set-builder or verbal (can't list all!):\n$$\\mathbb{Q}^+ = \\{x \\in \\mathbb{Q} : x > 0\\}$$",
    },
    {
      kind: "check",
      id: "sr-c3b",
      prompt:
        "Write in set-builder form: $B = \\{1, 4, 9, 16, 25, 36\\}$.",
      format: "text",
      answer: "{x^2 : x ∈ N, 1 ≤ x ≤ 6}",
      acceptedAnswers: ["{x^2 : x ∈ N, 1 ≤ x ≤ 6}", "{n^2 : n = 1,2,...,6}", "{x : x is a perfect square, x ≤ 36}"],
      hint: "Notice these are $1^2, 2^2, 3^2, 4^2, 5^2, 6^2$.",
      explanation:
        "$B = \\{x^2 : x \\in \\mathbb{N},\\; 1 \\le x \\le 6\\}$ or equivalently $\\{n \\in \\mathbb{N} : n \\text{ is a perfect square and } n \\le 36\\}$.",
    },
    {
      kind: "check",
      id: "sr-c3c",
      prompt:
        "Which of the following is the empty set?\n(a) $\\{x \\in \\mathbb{R} : x^2 = -1\\}$\n(b) $\\{x \\in \\mathbb{R} : x^2 = 0\\}$\n(c) $\\{0\\}$\n(d) $\\{\\}$",
      format: "text",
      answer: "a and d",
      acceptedAnswers: ["a and d", "a, d", "(a) and (d)"],
      hint: "(b) has one element: $x = 0$. (c) has one element: the number 0. (d) is $\\emptyset$. What about (a)?",
      explanation:
        "(a) No real number satisfies $x^2 = -1$, so this set has no elements — it equals $\\emptyset$.\n(b) $= \\{0\\}$ — one element.\n(c) $= \\{0\\}$ — one element (the number 0).\n(d) $= \\emptyset$ by notation.\nEmpty sets: (a) and (d).",
    },
    {
      kind: "check",
      id: "sr-c3d",
      prompt:
        "If $A = \\{1, \\{2, 3\\}, 4\\}$, determine which are true:\n(i) $2 \\in A$ \n(ii) $\\{2, 3\\} \\in A$\n(iii) $|A| = 3$\n(Answer with the true statements, e.g. 'ii, iii'.)",
      format: "text",
      answer: "ii, iii",
      acceptedAnswers: ["ii, iii", "ii and iii", "(ii) and (iii)"],
      hint: "The elements of $A$ are: $1$, the set $\\{2, 3\\}$, and $4$. So $A$ has 3 elements. Is 2 one of them?",
      explanation:
        "The elements of $A$ are three objects: the number 1, the set $\\{2,3\\}$, and the number 4.\n(i) $2 \\notin A$ — the number 2 is NOT directly an element; it's inside a nested set. ✗\n(ii) $\\{2,3\\} \\in A$ ✓ — it's one of the three elements.\n(iii) $|A| = 3$ ✓ — three elements total.",
    },
    {
      kind: "check",
      id: "sr-c3e",
      prompt:
        "State whether the following collections are well-defined sets:\n(i) All prime numbers less than 50\n(ii) All difficult questions in a math exam\n(iii) All vowels in the English alphabet\n(Answer with which ARE well-defined, e.g. 'i, iii'.)",
      format: "text",
      answer: "i, iii",
      acceptedAnswers: ["i, iii", "i and iii", "(i) and (iii)"],
      hint: "A set must be well-defined: there should be no ambiguity about membership. Is 'difficult' objective?",
      explanation:
        "(i) Well-defined ✓ — primality is an objective property.\n(ii) NOT well-defined ✗ — 'difficult' is subjective.\n(iii) Well-defined ✓ — vowels are a, e, i, o, u (unambiguous).",
    },
    {
      kind: "check",
      id: "sr-c3f",
      prompt:
        "If $A = \\{x \\in \\mathbb{Z} : |x| < 4\\}$ and $B = \\{x \\in \\mathbb{N} : x \\le 6\\}$, find $|A| + |B|$.",
      format: "numeric",
      answer: "14",
      hint: "$|x| < 4$ means $-4 < x < 4$. So $A = \\{-3,-2,-1,0,1,2,3\\}$ has 7 elements. $B = \\{0,1,2,3,4,5,6\\}$ or $\\{1,...,6\\}$ depending on convention.",
      explanation:
        "$A = \\{x \\in \\mathbb{Z} : -4 < x < 4\\} = \\{-3,-2,-1,0,1,2,3\\}$, so $|A| = 7$.\n$B = \\{0,1,2,3,4,5,6\\}$ (with $0 \\in \\mathbb{N}$), so $|B| = 7$.\n$|A|+|B| = 14$.\n(If $\\mathbb{N}$ excludes 0: $B = \\{1,...,6\\}$, $|B|=6$, total $= 13$.)",
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // SECTION 2: Subsets, power sets and intervals
    // ═══════════════════════════════════════════════════════════════════════════
    {
      kind: "prose",
      heading: "2 · Subsets, power sets and intervals",
      content:
        "**Subset:** We say $A \\subseteq B$ (A is a subset of B) if every element of $A$ is also in $B$. Every set is a subset of itself, and $\\emptyset$ is a subset of every set.\n\n**Proper subset:** $A \\subset B$ means $A \\subseteq B$ and $A \\neq B$ (there is at least one element in $B$ not in $A$).\n\n**Number of subsets:** If $|A| = n$, then $A$ has exactly $2^n$ subsets (including $\\emptyset$ and $A$ itself). This is because each element is either in or out of a subset — 2 choices per element.\n\n**Power set:** $\\mathcal{P}(A)$ is the set of all subsets of $A$.\n$$\\text{If } A = \\{1, 2\\}, \\text{ then } \\mathcal{P}(A) = \\{\\emptyset, \\{1\\}, \\{2\\}, \\{1,2\\}\\}$$\n\nNote: $|\\mathcal{P}(A)| = 2^{|A|}$.",
    },
    {
      kind: "callout",
      variant: "definition",
      title: "Interval notation",
      content:
        "For real numbers $a < b$:\n\n$[a, b] = \\{x \\in \\mathbb{R} : a \\leq x \\leq b\\}$ — closed interval\n$(a, b) = \\{x \\in \\mathbb{R} : a < x < b\\}$ — open interval\n$[a, b) = \\{x \\in \\mathbb{R} : a \\leq x < b\\}$ — half-open (closed-open)\n$(a, b] = \\{x \\in \\mathbb{R} : a < x \\leq b\\}$ — half-open (open-closed)\n$(-\\infty, a] = \\{x \\in \\mathbb{R} : x \\leq a\\}$\n$[a, \\infty) = \\{x \\in \\mathbb{R} : x \\geq a\\}$\n\nNote: brackets $[\\;]$ include the endpoint; parentheses $(\\;)$ exclude it. Infinity always gets a parenthesis because it is not a number.",
    },
    {
      kind: "check",
      id: "sr-c4",
      prompt:
        "How many subsets does the set $\\{a, b, c, d\\}$ have?",
      format: "numeric",
      answer: "16",
      hint: "A set with $n$ elements has $2^n$ subsets.",
      explanation:
        "$n = 4$, so the number of subsets is $2^4 = 16$.",
    },
    {
      kind: "check",
      id: "sr-c5",
      prompt:
        "If $A = \\{1, 2, 3\\}$, what is $|\\mathcal{P}(A)|$ (the number of elements in the power set of $A$)?",
      format: "numeric",
      answer: "8",
      hint: "The power set has $2^{|A|}$ elements.",
      explanation:
        "$|\\mathcal{P}(A)| = 2^3 = 8$. These are: $\\emptyset, \\{1\\}, \\{2\\}, \\{3\\}, \\{1,2\\}, \\{1,3\\}, \\{2,3\\}, \\{1,2,3\\}$.",
    },
    {
      kind: "check",
      id: "sr-c6",
      prompt:
        "How many proper subsets does a set with 5 elements have?",
      format: "numeric",
      answer: "31",
      hint: "Total subsets minus the set itself (which is a subset but not a proper subset).",
      explanation:
        "Total subsets $= 2^5 = 32$. Proper subsets exclude the set itself, so there are $32 - 1 = 31$ proper subsets.",
    },
    {
      kind: "check",
      id: "sr-c7",
      prompt:
        "Which interval describes the set $\\{x \\in \\mathbb{R} : -3 < x \\leq 7\\}$?",
      format: "text",
      answer: "(-3, 7]",
      acceptedAnswers: ["(-3, 7]", "(-3,7]"],
      hint: "Strict inequality at $-3$ means parenthesis; $\\leq$ at 7 means bracket.",
      explanation:
        "Since $x > -3$ (strict), we use ( at $-3$. Since $x \\leq 7$ (inclusive), we use ] at 7. Answer: $(-3, 7]$.",
    },
    {
      kind: "prose",
      heading: "",
      content:
        "**Important subset properties:**\n\n1. $\\emptyset \\subseteq A$ for every set $A$ (the empty set is a subset of all sets)\n2. $A \\subseteq A$ for every set $A$ (every set is a subset of itself)\n3. If $A \\subseteq B$ and $B \\subseteq A$, then $A = B$ (this is how you PROVE two sets are equal)\n4. If $A \\subseteq B$ and $B \\subseteq C$, then $A \\subseteq C$ (transitivity)\n\n**Counting subsets of a specific size:**\n\nA set with $n$ elements has:\n- $\\binom{n}{0} = 1$ subset of size 0 (the empty set)\n- $\\binom{n}{1} = n$ subsets of size 1 (the singletons)\n- $\\binom{n}{k}$ subsets of size $k$ in general\n- Total: $\\sum_{k=0}^{n} \\binom{n}{k} = 2^n$\n\n**Intervals as sets:**\n\nIntervals can be operated on like any sets:\n$$[1,5] \\cap [3,8] = [3,5], \\qquad (0,4) \\cup [2,7] = (0,7]$$\n$$[1,5] - [3,8] = [1,3), \\qquad (-\\infty,2] \\cap [0,\\infty) = [0,2]$$",
    },
    {
      kind: "callout",
      variant: "tip",
      title: "Subset counting tricks for competitions",
      content:
        "For a set $S$ with $n$ elements:\n\n• Subsets containing a specific element $a$: $2^{n-1}$ (the other $n-1$ elements can be in or out)\n• Subsets NOT containing $a$: also $2^{n-1}$\n• Subsets containing at least one of $a$ or $b$: $2^n - 2^{n-2}$ (total minus subsets with neither)\n• Non-empty subsets: $2^n - 1$\n• Subsets with an even number of elements: $2^{n-1}$ (always exactly half!)\n• Subsets with an odd number of elements: $2^{n-1}$ (the other half)",
    },
    {
      kind: "callout",
      variant: "warning",
      title: "Subset vs element — the critical distinction",
      content:
        "These are DIFFERENT relationships:\n• $a \\in A$ means '$a$ is an element of $A$'\n• $B \\subseteq A$ means '$B$ is a subset of $A$' (every element of $B$ is in $A$)\n\nSo: $1 \\in \\{1,2,3\\}$ ✓, but $1 \\subseteq \\{1,2,3\\}$ is WRONG (1 is not a set).\n$\\{1\\} \\subseteq \\{1,2,3\\}$ ✓, but $\\{1\\} \\in \\{1,2,3\\}$ is WRONG (the set $\\{1\\}$ is not listed as an element).\n\nException: $\\{1\\} \\in \\{\\{1\\}, 2, 3\\}$ ✓ — here $\\{1\\}$ IS explicitly an element.",
    },
    {
      kind: "check",
      id: "sr-c7b",
      prompt:
        "A set $A$ has 6 elements. How many subsets of $A$ contain exactly 2 elements?",
      format: "numeric",
      answer: "15",
      hint: "This is $\\binom{6}{2} = \\frac{6!}{2! \\cdot 4!}$.",
      explanation:
        "$\\binom{6}{2} = \\frac{6 \\times 5}{2 \\times 1} = 15$.",
    },
    {
      kind: "check",
      id: "sr-c7c",
      prompt:
        "How many subsets of $\\{1, 2, 3, 4, 5, 6, 7, 8\\}$ contain the element $3$?",
      format: "numeric",
      answer: "128",
      hint: "If 3 must be included, the remaining 7 elements can each be in or out. So $2^7 = ?$.",
      explanation:
        "Fix $3$ as included. The other 7 elements each have 2 choices (in/out): $2^7 = 128$ subsets.",
    },
    {
      kind: "check",
      id: "sr-c7d",
      prompt:
        "How many non-empty subsets does the set $\\{1, 2, 3, 4, 5, 6, 7, 8, 9, 10\\}$ have that contain at least one even number?",
      format: "numeric",
      answer: "992",
      hint: "Use complementary counting: total non-empty subsets minus subsets with NO even numbers (i.e. subsets of $\\{1,3,5,7,9\\}$).",
      explanation:
        "Total non-empty subsets $= 2^{10} - 1 = 1023$.\nSubsets with no even numbers $=$ subsets of $\\{1,3,5,7,9\\}$ (including empty) minus the empty set: $2^5 - 1 = 31$.\nAnswer $= 1023 - 31 = 992$.",
    },
    {
      kind: "check",
      id: "sr-c7e",
      prompt:
        "Find: $[1, 5] \\cap (3, 9)$. Express as an interval.",
      format: "text",
      answer: "(3, 5]",
      acceptedAnswers: ["(3, 5]", "(3,5]"],
      hint: "$[1,5]$ includes everything from 1 to 5 (inclusive). $(3,9)$ includes everything from 3 to 9 (exclusive endpoints). The intersection is where BOTH hold.",
      explanation:
        "$[1,5] \\cap (3,9)$: need $1 \\le x \\le 5$ AND $3 < x < 9$. Combined: $3 < x \\le 5$, i.e. $(3, 5]$.",
    },
    {
      kind: "check",
      id: "sr-c7f",
      prompt:
        "If $\\mathcal{P}(A)$ has 64 elements, how many elements does $A$ have?",
      format: "numeric",
      answer: "6",
      hint: "$|\\mathcal{P}(A)| = 2^{|A|}$. Solve $2^n = 64$.",
      explanation:
        "$2^n = 64 = 2^6$, so $n = 6$. The set $A$ has 6 elements.",
    },
    {
      kind: "check",
      id: "sr-c7g",
      prompt:
        "If $A \\subset B$ and $|A| = 5$, what is the minimum possible value of $|B|$?",
      format: "numeric",
      answer: "6",
      hint: "$A \\subset B$ means $A$ is a PROPER subset — so $B$ must have at least one element not in $A$.",
      explanation:
        "Since $A \\subset B$ (proper subset), $B$ contains all 5 elements of $A$ plus at least one more. Minimum $|B| = 6$.",
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // SECTION 3: Operations on sets
    // ═══════════════════════════════════════════════════════════════════════════
    {
      kind: "prose",
      heading: "3 · Operations on sets",
      content:
        "Given sets $A$ and $B$ within universal set $U$:\n\n**Union:** $A \\cup B = \\{x : x \\in A \\text{ or } x \\in B\\}$\n\n**Intersection:** $A \\cap B = \\{x : x \\in A \\text{ and } x \\in B\\}$\n\n**Complement:** $A' = \\{x \\in U : x \\notin A\\}$\n\n**Difference:** $A - B = A \\setminus B = \\{x : x \\in A \\text{ and } x \\notin B\\}$\n\n**Symmetric difference:** $A \\triangle B = (A - B) \\cup (B - A)$ — elements in exactly one of $A$ or $B$.\n\nThese operations satisfy many useful identities: commutativity, associativity, distributivity, and the crucial De Morgan's laws.",
    },
    {
      kind: "callout",
      variant: "definition",
      title: "De Morgan's Laws",
      content:
        "For any sets $A, B$ in universal set $U$:\n$$(A \\cup B)' = A' \\cap B'$$\n$$(A \\cap B)' = A' \\cup B'$$\n\nIn words: the complement of a union is the intersection of the complements; the complement of an intersection is the union of the complements.",
    },
    {
      kind: "diagram",
      diagram: {
        svg: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" width="300" height="200"><rect x="5" y="5" width="290" height="190" rx="8" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="280" y="20" font-size="12" fill="currentColor" font-style="italic">U</text><circle cx="120" cy="100" r="60" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="190" cy="100" r="60" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M155,56.8 A60,60 0 0,1 155,143.2 A60,60 0 0,1 155,56.8 Z" fill="currentColor" fill-opacity="0.15" stroke="none"/><clipPath id="clipA"><circle cx="120" cy="100" r="60"/></clipPath><clipPath id="clipB"><circle cx="190" cy="100" r="60"/></clipPath><circle cx="190" cy="100" r="60" clip-path="url(#clipA)" fill="currentColor" fill-opacity="0.15"/><text x="90" y="105" font-size="16" fill="currentColor" font-weight="bold">A</text><text x="210" y="105" font-size="16" fill="currentColor" font-weight="bold">B</text><text x="140" y="170" font-size="12" fill="currentColor">Shaded: A ∩ B</text></svg>`,
        alt: "Venn diagram showing two overlapping circles A and B with the intersection region (A intersect B) shaded.",
      },
    },
    {
      kind: "callout",
      variant: "tip",
      title: "Useful set identities",
      content:
        "• $A \\cup A' = U$ and $A \\cap A' = \\emptyset$\n• $A \\cup \\emptyset = A$ and $A \\cap U = A$\n• $A - B = A \\cap B'$\n• $A \\triangle B = (A \\cup B) - (A \\cap B)$\n• $(A')' = A$ (double complement)\n• Distributive: $A \\cap (B \\cup C) = (A \\cap B) \\cup (A \\cap C)$",
    },
    {
      kind: "check",
      id: "sr-c8",
      prompt:
        "If $A = \\{1,2,3,4,5\\}$ and $B = \\{3,4,5,6,7\\}$, what is $|A \\cup B|$?",
      format: "numeric",
      answer: "7",
      hint: "List all distinct elements that appear in $A$ or $B$.",
      explanation:
        "$A \\cup B = \\{1,2,3,4,5,6,7\\}$, so $|A \\cup B| = 7$.",
    },
    {
      kind: "check",
      id: "sr-c9",
      prompt:
        "Using the same sets $A = \\{1,2,3,4,5\\}$ and $B = \\{3,4,5,6,7\\}$, find $|A \\cap B|$.",
      format: "numeric",
      answer: "3",
      hint: "Which elements appear in both $A$ and $B$?",
      explanation:
        "$A \\cap B = \\{3, 4, 5\\}$, so $|A \\cap B| = 3$.",
    },
    {
      kind: "check",
      id: "sr-c10",
      prompt:
        "If $U = \\{1,2,\\ldots,10\\}$ and $A = \\{2,4,6,8,10\\}$, what is $A'$? Give the cardinality.",
      format: "numeric",
      answer: "5",
      hint: "$A'$ consists of all elements in $U$ that are not in $A$.",
      explanation:
        "$A' = \\{1,3,5,7,9\\}$, so $|A'| = 5$. These are the odd numbers from 1 to 10.",
    },
    {
      kind: "check",
      id: "sr-c11",
      prompt:
        "By De Morgan's law, $(A \\cup B)' = $ what?",
      format: "text",
      answer: "A' ∩ B'",
      acceptedAnswers: ["A' ∩ B'", "A'∩B'", "A' intersect B'"],
      hint: "The complement of a union becomes the intersection of the complements.",
      explanation:
        "De Morgan's first law states $(A \\cup B)' = A' \\cap B'$. The complement flips union to intersection.",
    },
    {
      kind: "prose",
      heading: "",
      content:
        "**Complete list of set operation laws:**\n\n**Idempotent:** $A \\cup A = A$, $\\;A \\cap A = A$\n\n**Commutative:** $A \\cup B = B \\cup A$, $\\;A \\cap B = B \\cap A$\n\n**Associative:** $(A \\cup B) \\cup C = A \\cup (B \\cup C)$, $\\;(A \\cap B) \\cap C = A \\cap (B \\cap C)$\n\n**Distributive:**\n$$A \\cup (B \\cap C) = (A \\cup B) \\cap (A \\cup C)$$\n$$A \\cap (B \\cup C) = (A \\cap B) \\cup (A \\cap C)$$\n\n**Identity:** $A \\cup \\emptyset = A$, $\\;A \\cap U = A$, $\\;A \\cup U = U$, $\\;A \\cap \\emptyset = \\emptyset$\n\n**Complement:** $A \\cup A' = U$, $\\;A \\cap A' = \\emptyset$, $\\;(A')' = A$, $\\;U' = \\emptyset$, $\\;\\emptyset' = U$\n\n**Absorption:** $A \\cup (A \\cap B) = A$, $\\;A \\cap (A \\cup B) = A$\n\n**Key relationships:**\n$$A - B = A \\cap B', \\qquad A \\triangle B = (A \\cup B) - (A \\cap B)$$\n$$|A \\triangle B| = |A| + |B| - 2|A \\cap B|$$",
    },
    {
      kind: "callout",
      variant: "tip",
      title: "Verifying set identities — the element-chasing method",
      content:
        "To prove $A \\cap (B \\cup C) = (A \\cap B) \\cup (A \\cap C)$:\n\n1. Take any $x \\in$ LHS: $x \\in A$ AND $x \\in B \\cup C$, i.e. $x \\in A$ AND ($x \\in B$ or $x \\in C$). So ($x \\in A$ and $x \\in B$) or ($x \\in A$ and $x \\in C$), i.e. $x \\in (A \\cap B) \\cup (A \\cap C)$ = RHS.\n\n2. Reverse direction is similar.\n\nThis technique works for ALL set identity proofs.",
    },
    {
      kind: "callout",
      variant: "tip",
      title: "Cardinality formulas for set operations",
      content:
        "For finite sets:\n$$|A \\cup B| = |A| + |B| - |A \\cap B|$$\n$$|A - B| = |A| - |A \\cap B|$$\n$$|A'| = |U| - |A|$$\n$$|A \\triangle B| = |A| + |B| - 2|A \\cap B|$$",
    },
    {
      kind: "check",
      id: "sr-c11b",
      prompt:
        "If $A = \\{1,2,3,4,5\\}$ and $B = \\{3,4,5,6,7\\}$, find $|A \\triangle B|$.",
      format: "numeric",
      answer: "4",
      hint: "$A \\triangle B = (A-B) \\cup (B-A)$. Find elements in exactly one of the sets.",
      explanation:
        "$A - B = \\{1,2\\}$, $B - A = \\{6,7\\}$. So $A \\triangle B = \\{1,2,6,7\\}$, $|A \\triangle B| = 4$.\nAlternatively: $|A|+|B|-2|A\\cap B| = 5+5-2(3) = 4$ \\checkmark.",
    },
    {
      kind: "check",
      id: "sr-c11c",
      prompt:
        "If $U = \\{1,2,...,20\\}$, $A = $ multiples of 3 in $U$, $B = $ multiples of 5 in $U$. Find $|A' \\cap B'|$.",
      format: "numeric",
      answer: "11",
      hint: "By De Morgan: $A' \\cap B' = (A \\cup B)'$. So $|A' \\cap B'| = |U| - |A \\cup B|$.",
      explanation:
        "$A = \\{3,6,9,12,15,18\\}$, $|A|=6$. $B = \\{5,10,15,20\\}$, $|B|=4$.\n$A \\cap B = \\{15\\}$ (multiples of 15), $|A \\cap B|=1$.\n$|A \\cup B| = 6+4-1 = 9$. $|A' \\cap B'| = |(A\\cup B)'| = 20-9 = 11$.",
    },
    {
      kind: "check",
      id: "sr-c11d",
      prompt:
        "Simplify: $A \\cap (A' \\cup B)$.",
      format: "text",
      answer: "A \\cap B",
      acceptedAnswers: ["A ∩ B", "A∩B", "A intersect B", "A \\cap B"],
      hint: "Distribute: $A \\cap (A' \\cup B) = (A \\cap A') \\cup (A \\cap B)$.",
      explanation:
        "$A \\cap (A' \\cup B) = (A \\cap A') \\cup (A \\cap B) = \\emptyset \\cup (A \\cap B) = A \\cap B$.",
    },
    {
      kind: "check",
      id: "sr-c11e",
      prompt:
        "If $|U| = 50$, $|A| = 30$, $|B| = 25$, $|A \\cap B| = 10$, find the number of elements in neither $A$ nor $B$.",
      format: "numeric",
      answer: "5",
      hint: "Elements in neither = $|A' \\cap B'| = |U| - |A \\cup B|$.",
      explanation:
        "$|A \\cup B| = 30+25-10 = 45$. Elements in neither $= 50-45 = 5$.",
    },
    {
      kind: "check",
      id: "sr-c11f",
      prompt:
        "Which of the following always equals $A$?\n(a) $(A \\cap B) \\cup (A - B)$\n(b) $(A \\cup B) \\cap (A \\cup B')$\n(c) Both\n(d) Neither",
      format: "text",
      answer: "c",
      acceptedAnswers: ["c", "C", "both", "Both"],
      hint: "For (a): $A \\cap B$ plus $A - B$ covers all of $A$. For (b): use $A \\cup (B \\cap B') = A \\cup \\emptyset$.",
      explanation:
        "(a) $(A \\cap B) \\cup (A \\cap B') = A \\cap (B \\cup B') = A \\cap U = A$ \\checkmark.\n(b) $(A \\cup B) \\cap (A \\cup B') = A \\cup (B \\cap B') = A \\cup \\emptyset = A$ \\checkmark.\nBoth equal $A$.",
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // SECTION 4: Counting with sets (inclusion-exclusion)
    // ═══════════════════════════════════════════════════════════════════════════
    {
      kind: "prose",
      heading: "4 · Counting with sets (inclusion-exclusion)",
      content:
        "When we unite two sets, elements in the overlap get counted twice. The **inclusion-exclusion principle** corrects for this:\n$$|A \\cup B| = |A| + |B| - |A \\cap B|$$\n\nFor three sets:\n$$|A \\cup B \\cup C| = |A|+|B|+|C| - |A \\cap B| - |A \\cap C| - |B \\cap C| + |A \\cap B \\cap C|$$\n\nThis extends to any number of sets, alternating addition and subtraction of intersection sizes.\n\nIn competition problems, this usually appears as a **survey question**: 'Of 100 students, 60 play football, 45 play cricket, and 20 play both. How many play neither?' The strategy is always the same: apply the formula, then subtract from the total.",
    },
    {
      kind: "callout",
      variant: "tip",
      title: "The complement counting shortcut",
      content:
        "Often it is easier to count elements in *neither* set first:\n$$|\\text{neither}| = |U| - |A \\cup B|$$\nSo: find $|A \\cup B|$ via inclusion-exclusion, then subtract from $|U|$.",
    },
    {
      kind: "callout",
      variant: "trap",
      title: "The 'at least one' trap",
      content:
        "When a problem says 'at least one of A or B', it means $|A \\cup B|$, NOT $|A| + |B|$. You must subtract the intersection to avoid double-counting.",
    },
    {
      kind: "check",
      id: "sr-c12",
      prompt:
        "In a class of 40 students, 25 study French and 18 study Spanish. If 8 study both, how many study neither?",
      format: "numeric",
      answer: "5",
      hint: "First find $|F \\cup S| = 25 + 18 - 8$, then subtract from 40.",
      explanation:
        "$|F \\cup S| = 25 + 18 - 8 = 35$. Students studying neither $= 40 - 35 = 5$.",
    },
    {
      kind: "check",
      id: "sr-c13",
      prompt:
        "If $|A| = 30$, $|B| = 22$, and $|A \\cup B| = 45$, find $|A \\cap B|$.",
      format: "numeric",
      answer: "7",
      hint: "Rearrange: $|A \\cap B| = |A| + |B| - |A \\cup B|$.",
      explanation:
        "$|A \\cap B| = 30 + 22 - 45 = 7$.",
    },
    {
      kind: "check",
      id: "sr-c14",
      prompt:
        "In a survey of 100 people: 50 like tea, 40 like coffee, 30 like juice, 15 like tea and coffee, 10 like tea and juice, 12 like coffee and juice, and 5 like all three. How many like at least one drink?",
      format: "numeric",
      answer: "88",
      hint: "Apply the three-set formula: $|T \\cup C \\cup J| = 50+40+30-15-10-12+5$.",
      explanation:
        "$|T \\cup C \\cup J| = 50+40+30 - 15-10-12 + 5 = 120 - 37 + 5 = 88$.",
    },
    {
      kind: "check",
      id: "sr-c15",
      prompt:
        "Using the previous survey (100 people total), how many like none of the three drinks?",
      format: "numeric",
      answer: "12",
      hint: "Subtract the 'at least one' count from the total.",
      explanation:
        "People liking none $= 100 - 88 = 12$.",
    },
    {
      kind: "prose",
      heading: "",
      content:
        "**Advanced inclusion-exclusion patterns:**\n\n**Pattern: Finding 'exactly one'**\n\nElements in exactly one of $A$, $B$:\n$$|\\text{exactly one}| = |A| + |B| - 2|A \\cap B| = |A \\triangle B|$$\n\nElements in exactly one of $A$, $B$, $C$:\n$$= |A|+|B|+|C| - 2|A \\cap B| - 2|A \\cap C| - 2|B \\cap C| + 3|A \\cap B \\cap C|$$\n\n**Pattern: Finding 'exactly two'**\n\nElements in exactly two of $A$, $B$, $C$ (in two sets but not the third):\n$$= |A \\cap B| + |A \\cap C| + |B \\cap C| - 3|A \\cap B \\cap C|$$\n\n**Pattern: The Venn diagram decomposition**\n\nFor three sets, a Venn diagram has 8 regions. If you label:\n- $a$ = only $A$ (not $B$ or $C$)\n- $b$ = only $B$\n- $c$ = only $C$\n- $d$ = $A \\cap B$ only (not $C$)\n- $e$ = $A \\cap C$ only (not $B$)\n- $f$ = $B \\cap C$ only (not $A$)\n- $g$ = $A \\cap B \\cap C$\n- $h$ = none of them\n\nThen $|A| = a+d+e+g$, $|A \\cap B| = d+g$, $|A \\cap B \\cap C| = g$, etc.",
    },
    {
      kind: "callout",
      variant: "tip",
      title: "Working backwards from totals",
      content:
        "In many problems you're given regional totals. The strategy:\n1. Start from the INNERMOST region (all-three intersection $g$)\n2. Work outward: $|A \\cap B| = d + g$, so $d = |A \\cap B| - g$\n3. Then find the 'only' regions: $a = |A| - d - e - g$\n4. Finally: elements in none $= |U| - (a+b+c+d+e+f+g)$",
    },
    {
      kind: "check",
      id: "sr-c15b",
      prompt:
        "In a group of 60 students: 35 play chess, 22 play badminton, and 15 play both. How many play exactly one of the two games?",
      format: "numeric",
      answer: "27",
      hint: "Exactly one $= |A \\triangle B| = |A| + |B| - 2|A \\cap B| = 35+22-30$.",
      explanation:
        "Exactly one $= |A|+|B|-2|A \\cap B| = 35+22-30 = 27$.\nAlternatively: only chess $= 35-15 = 20$, only badminton $= 22-15 = 7$, total $= 27$.",
    },
    {
      kind: "check",
      id: "sr-c15c",
      prompt:
        "In a class of 70 students: 45 like Maths, 52 like Science. What is the minimum possible number who like both?",
      format: "numeric",
      answer: "27",
      hint: "Maximum possible for $|M \\cup S|$ is $|U| = 70$. Use $|M \\cap S| = |M|+|S|-|M \\cup S| \\ge 45+52-70$.",
      explanation:
        "$|M \\cap S| = |M|+|S|-|M \\cup S|$. Since $|M \\cup S| \\le 70$:\n$|M \\cap S| \\ge 45+52-70 = 27$.\nMinimum is 27 (when everyone likes at least one subject).",
    },
    {
      kind: "check",
      id: "sr-c15d",
      prompt:
        "In a survey: 80 read newspaper A, 60 read B, 50 read C, 30 read A and B, 20 read A and C, 25 read B and C, 10 read all three. How many read exactly two newspapers?",
      format: "numeric",
      answer: "45",
      hint: "Exactly two $= |A \\cap B| + |A \\cap C| + |B \\cap C| - 3|A \\cap B \\cap C| = 30+20+25-30$.",
      explanation:
        "Exactly two $= (|A \\cap B|-|A \\cap B \\cap C|) + (|A \\cap C|-|A \\cap B \\cap C|) + (|B \\cap C|-|A \\cap B \\cap C|)$\n$= (30-10)+(20-10)+(25-10) = 20+10+15 = 45$.\nAlternatively: $|A \\cap B|+|A \\cap C|+|B \\cap C| - 3|A \\cap B \\cap C| = 75-30 = 45$.",
    },
    {
      kind: "check",
      id: "sr-c15e",
      prompt:
        "In a school of 200 students: every student studies at least one of Biology, Chemistry, or Physics. 120 study Biology, 90 study Chemistry, 70 study Physics, 40 study Bio and Chem, 30 study Bio and Physics, 20 study Chem and Physics. Find the number who study all three.",
      format: "numeric",
      answer: "10",
      hint: "Since every student studies at least one: $|B \\cup C \\cup P| = 200$. Use the 3-set formula and solve for $|B \\cap C \\cap P|$.",
      explanation:
        "$200 = 120+90+70-40-30-20+|B \\cap C \\cap P|$.\n$200 = 280-90+x = 190+x$.\n$x = 10$.",
    },
    {
      kind: "check",
      id: "sr-c15f",
      prompt:
        "How many integers from 1 to 100 are divisible by neither 2, 3, nor 5?",
      format: "numeric",
      answer: "26",
      hint: "Use inclusion-exclusion: subtract multiples of 2, 3, 5; add back multiples of 6, 10, 15; subtract multiples of 30.",
      explanation:
        "$|A_2| = 50$, $|A_3| = 33$, $|A_5| = 20$.\n$|A_2 \\cap A_3| = |A_6| = 16$, $|A_2 \\cap A_5| = |A_{10}| = 10$, $|A_3 \\cap A_5| = |A_{15}| = 6$.\n$|A_2 \\cap A_3 \\cap A_5| = |A_{30}| = 3$.\n$|A_2 \\cup A_3 \\cup A_5| = 50+33+20-16-10-6+3 = 74$.\nDivisible by none: $100-74 = 26$.",
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // SECTION 5: The number hierarchy
    // ═══════════════════════════════════════════════════════════════════════════
    {
      kind: "prose",
      heading: "5 · The number hierarchy",
      content:
        "The real numbers form a hierarchy of nested sets:\n$$\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R}$$\n\n**Natural numbers** $\\mathbb{N} = \\{0, 1, 2, 3, \\ldots\\}$: counting numbers.\n\n**Integers** $\\mathbb{Z}$: naturals plus their negatives. Every natural number is an integer.\n\n**Rationals** $\\mathbb{Q}$: numbers expressible as $p/q$ where $p, q \\in \\mathbb{Z}$, $q \\neq 0$. Every integer $n$ is rational since $n = n/1$.\n\n**Reals** $\\mathbb{R}$: all points on the number line. This includes rationals and **irrationals** — numbers that cannot be written as $p/q$.\n\nKey insight: $\\mathbb{R} = \\mathbb{Q} \\cup \\mathbb{Q}'$ where $\\mathbb{Q}' = \\mathbb{R} \\setminus \\mathbb{Q}$ is the set of irrationals. The rationals and irrationals together fill the entire number line with no gaps.",
    },
    {
      kind: "diagram",
      diagram: {
        svg: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" width="300" height="300"><circle cx="150" cy="150" r="140" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="150" y="25" font-size="14" fill="currentColor" text-anchor="middle" font-weight="bold">R</text><circle cx="150" cy="160" r="105" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="150" y="68" font-size="13" fill="currentColor" text-anchor="middle">Q</text><circle cx="150" cy="170" r="70" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="150" y="112" font-size="13" fill="currentColor" text-anchor="middle">Z</text><circle cx="150" cy="180" r="40" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="150" y="175" font-size="13" fill="currentColor" text-anchor="middle">N</text><text x="150" y="192" font-size="10" fill="currentColor" text-anchor="middle">0, 1, 2, 3...</text></svg>`,
        alt: "Nested circles diagram showing the number hierarchy: N (naturals) inside Z (integers) inside Q (rationals) inside R (reals), from innermost to outermost.",
      },
    },
    {
      kind: "callout",
      variant: "warning",
      title: "Between rationals and reals",
      content:
        "Between any two distinct rational numbers there is another rational (take their average) — and also an irrational. The rationals are 'dense' in the reals, yet they leave infinitely many gaps (the irrationals). In fact, there are 'more' irrationals than rationals — the irrationals are uncountable.",
    },
    {
      kind: "check",
      id: "sr-c16",
      prompt:
        "Is every integer a rational number? (Answer yes or no.)",
      format: "text",
      answer: "yes",
      acceptedAnswers: ["yes", "Yes", "YES", "true", "True"],
      hint: "Can every integer $n$ be written in the form $p/q$ with $q \\neq 0$?",
      explanation:
        "Yes. Every integer $n$ can be written as $n/1$, which is in the form $p/q$ with $p, q \\in \\mathbb{Z}$ and $q \\neq 0$. So $\\mathbb{Z} \\subset \\mathbb{Q}$.",
    },
    {
      kind: "check",
      id: "sr-c17",
      prompt:
        "Give an example of a number that is in $\\mathbb{Q}$ but not in $\\mathbb{Z}$.",
      format: "text",
      answer: "1/2",
      acceptedAnswers: ["1/2", "0.5", "3/4", "2/3", "1/3", "-1/2"],
      hint: "Any fraction that does not simplify to a whole number will do.",
      explanation:
        "$1/2$ is rational (it is $p/q$ with $p=1, q=2$) but it is not an integer since it lies between 0 and 1.",
    },
    {
      kind: "check",
      id: "sr-c18",
      prompt:
        "Which of these is irrational: $\\sqrt{4}$, $\\sqrt{5}$, $22/7$, $0.\\overline{3}$?",
      format: "text",
      answer: "sqrt(5)",
      acceptedAnswers: ["sqrt(5)", "√5", "root 5", "root5", "\\sqrt{5}"],
      hint: "$\\sqrt{4} = 2$, and $22/7$ and $0.\\overline{3}$ are clearly rational. Check $\\sqrt{5}$.",
      explanation:
        "$\\sqrt{4} = 2 \\in \\mathbb{Z}$. $22/7$ and $0.\\overline{3} = 1/3$ are rational. But $\\sqrt{5}$ is irrational since 5 is not a perfect square.",
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // SECTION 6: Rational numbers and decimals
    // ═══════════════════════════════════════════════════════════════════════════
    {
      kind: "prose",
      heading: "6 · Rational numbers and decimals",
      content:
        "Every rational number has a decimal expansion that either **terminates** (e.g. $0.375$) or **recurs** (e.g. $0.333\\ldots = 0.\\overline{3}$). Conversely, every terminating or recurring decimal is rational. This two-way link is the core of the section.\n\n**When does $p/q$ terminate?** Reduce $p/q$ to lowest terms. Then:\n$$\\frac{p}{q} \\text{ terminates } \\iff q = 2^a \\times 5^b \\text{ for some } a, b \\geq 0$$\nWhy? Because $10^n = 2^n \\times 5^n$, so a fraction terminates iff we can make the denominator a power of 10 by multiplying top and bottom.\n\n**Converting a terminating decimal to a fraction:** Count decimal places $d$; then the fraction is (digits)/$10^d$, simplified.\n$$0.375 = \\frac{375}{1000} = \\frac{3}{8}$$",
    },
    {
      kind: "callout",
      variant: "definition",
      title: "The period (cycle length) of a recurring decimal",
      content:
        "For $p/q$ in lowest terms with $\\gcd(q,10) = 1$, the period (length of repeating block) is the smallest positive integer $k$ such that $10^k \\equiv 1 \\pmod{q}$. For example, $1/7$: we need $10^k \\equiv 1 \\pmod{7}$. Check: $10^1=10\\equiv 3$, $10^2\\equiv 2$, $10^3\\equiv 6$, $10^4\\equiv 4$, $10^5\\equiv 5$, $10^6\\equiv 1$ — so the period is 6. This means $1/7 = 0.\\overline{142857}$ (6 repeating digits).",
    },
    {
      kind: "prose",
      heading: "",
      content:
        "**Converting recurring decimals — the general method:**\n\nThere are three types:\n\n**Type 1: Purely recurring** (repeating starts immediately after decimal point)\n\nExample: $x = 0.\\overline{36} = 0.363636\\ldots$\n$$100x = 36.\\overline{36}$$\n$$100x - x = 36 \\implies 99x = 36 \\implies x = \\frac{36}{99} = \\frac{4}{11}$$\n\n**Type 2: Mixed recurring** (some non-repeating digits before the repeating block)\n\nExample: $x = 0.2\\overline{43} = 0.2434343\\ldots$\n$$10x = 2.\\overline{43} = 2.434343\\ldots \\quad \\text{...(i)}$$\n$$1000x = 243.\\overline{43} = 243.4343\\ldots \\quad \\text{...(ii)}$$\nSubtract (i) from (ii): $990x = 241$, so $x = \\frac{241}{990}$.\n\n**Type 3: Harder mixed recurring**\n\nExample: $x = 6.48\\overline{261} = 6.48261261261\\ldots$\n\nHere 2 non-repeating digits after decimal (48), and 3 repeating digits (261).\n$$100x = 648.\\overline{261} \\quad \\text{...(i)}$$\n$$100000x = 648261.\\overline{261} \\quad \\text{...(ii)}$$\nSubtract: $99900x = 648261 - 648 = 647613$, so $x = \\frac{647613}{99900} = \\frac{71957}{11100}$.",
    },
    {
      kind: "callout",
      variant: "tip",
      title: "The shortcut formula",
      content:
        "For a decimal with $n$ non-repeating digits and $m$ repeating digits after the decimal point:\n$$x = \\frac{\\text{(entire non-repeating + repeating digits)} - \\text{(non-repeating digits only)}}{\\underbrace{99\\ldots9}_{m \\text{ nines}}\\underbrace{00\\ldots0}_{n \\text{ zeros}}}$$\nExample: $0.2\\overline{43}$: non-repeating = 2 (1 digit), repeating = 43 (2 digits).\n$$x = \\frac{243 - 2}{990} = \\frac{241}{990}$$",
    },
    {
      kind: "callout",
      variant: "tip",
      title: "Quick patterns for common fractions",
      content:
        "Memorise these — they appear in speed-round competitions:\n$$\\frac{1}{9} = 0.\\overline{1}, \\quad \\frac{2}{9} = 0.\\overline{2}, \\quad \\ldots, \\quad \\frac{8}{9} = 0.\\overline{8}$$\n$$\\frac{1}{99} = 0.\\overline{01}, \\quad \\frac{7}{99} = 0.\\overline{07}, \\quad \\frac{23}{99} = 0.\\overline{23}$$\n$$\\frac{1}{999} = 0.\\overline{001}, \\quad \\frac{137}{999} = 0.\\overline{137}$$\n$$\\frac{1}{11} = 0.\\overline{09}, \\quad \\frac{1}{7} = 0.\\overline{142857}$$\nThe pattern: a repeating block of $m$ digits corresponds to a denominator that divides $\\underbrace{99\\ldots9}_{m}$.",
    },
    {
      kind: "prose",
      heading: "",
      content:
        "**Finding rationals between two rationals:**\n\nMethod 1 (average): The number $\\frac{a+b}{2}$ always lies between $a$ and $b$.\n\nMethod 2 (common denominator): Write both fractions with the same denominator, then the integers between the numerators give rationals between them. If not enough, multiply numerator and denominator by a larger number.\n\nExample: Find 6 rationals between $\\frac{1}{7}$ and $\\frac{4}{7}$.\n\nMultiply both by $\\frac{3}{3}$: $\\frac{3}{21}$ and $\\frac{12}{21}$. Now $\\frac{4}{21}, \\frac{5}{21}, \\ldots, \\frac{11}{21}$ are 8 rationals between them — pick any 6.\n\n**Density of rationals:** Between any two distinct real numbers, there are infinitely many rationals (and infinitely many irrationals). This is called the density property.",
    },
    {
      kind: "callout",
      variant: "warning",
      title: "The denominator test requires lowest terms",
      content:
        "The fraction $6/15$ has denominator 15 = 3 × 5. You might think it's non-terminating because of the factor 3. But first reduce: $6/15 = 2/5$, and $5 = 5^1$ — only factors 2 and 5 — so it terminates (= 0.4). Always simplify before applying the test.",
    },
    {
      kind: "check",
      id: "sr-c19",
      prompt:
        "Does $7/40$ have a terminating decimal? (Answer yes or no.)",
      format: "text",
      answer: "yes",
      acceptedAnswers: ["yes", "Yes", "YES"],
      hint: "Factorise 40 into primes: $40 = 2^3 \\times 5$. Does it have only factors of 2 and 5?",
      explanation:
        "$40 = 2^3 \\times 5^1$. Since the only prime factors are 2 and 5, $7/40$ terminates. (In fact, $7/40 = 0.175$.)",
    },
    {
      kind: "check",
      id: "sr-c20",
      prompt:
        "Convert $0.\\overline{7}$ (i.e. $0.777\\ldots$) to a fraction in lowest terms.",
      format: "text",
      answer: "7/9",
      acceptedAnswers: ["7/9"],
      hint: "Let $x = 0.\\overline{7}$. Then $10x = 7.\\overline{7}$. Subtract to eliminate the repeating part.",
      explanation:
        "Let $x = 0.\\overline{7}$. Then $10x = 7.\\overline{7}$, so $10x - x = 7$, giving $9x = 7$, hence $x = 7/9$.",
    },
    {
      kind: "check",
      id: "sr-c21",
      prompt:
        "Convert $0.\\overline{123}$ to a fraction in lowest terms.",
      format: "text",
      answer: "41/333",
      acceptedAnswers: ["41/333"],
      hint: "The repeating block has 3 digits, so multiply by $10^3 = 1000$. Then $1000x - x = 123$.",
      explanation:
        "Let $x = 0.\\overline{123}$. Then $1000x = 123.\\overline{123}$, so $999x = 123$, giving $x = 123/999 = 41/333$.",
    },
    {
      kind: "check",
      id: "sr-c21b",
      prompt:
        "Convert $0.1\\overline{34}$ (i.e. $0.1343434\\ldots$) to a fraction in lowest terms.",
      format: "text",
      answer: "133/990",
      acceptedAnswers: ["133/990"],
      hint: "Non-repeating part: 1 (one digit, $n=1$). Repeating part: 34 (two digits, $m=2$). Use the formula: (134 - 1) / 990.",
      explanation:
        "Using the shortcut: numerator $= 134 - 1 = 133$. Denominator $= 99 \\times 10 = 990$ (two 9s, one 0). So $x = 133/990$. Check: $\\gcd(133, 990) = \\gcd(7 \\times 19, 2 \\times 5 \\times 9 \\times 11) = 1$. Already in lowest terms.",
    },
    {
      kind: "check",
      id: "sr-c21c",
      prompt:
        "Express $0.\\overline{0\\overline{12}}$ — actually, express $0.\\overline{012}$ as a fraction in lowest terms.",
      format: "text",
      answer: "4/333",
      acceptedAnswers: ["4/333", "12/999"],
      hint: "Repeating block is 012 (three digits). So $x = 12/999$.",
      explanation:
        "$x = 0.\\overline{012} = 0.012012012\\ldots$. The repeating block is '012' (3 digits). So $1000x - x = 12$, giving $999x = 12$, $x = 12/999 = 4/333$.",
    },
    {
      kind: "check",
      id: "sr-c21d",
      prompt:
        "Which of the following fractions have terminating decimals?\n\n(i) $\\frac{13}{80}$ (ii) $\\frac{7}{12}$ (iii) $\\frac{9}{160}$ (iv) $\\frac{11}{70}$\n\nList all that terminate (e.g. 'i, iii').",
      format: "text",
      answer: "i, iii",
      acceptedAnswers: ["i, iii", "i,iii", "(i) and (iii)", "i and iii"],
      hint: "Factorise each denominator (after reducing to lowest terms). Only factors of 2 and 5 allowed.",
      explanation:
        "(i) $80 = 2^4 \\times 5$ ✓ terminates. (ii) $12 = 2^2 \\times 3$ ✗ (has factor 3). (iii) $160 = 2^5 \\times 5$ ✓ terminates. (iv) $70 = 2 \\times 5 \\times 7$ ✗ (has factor 7). Answer: (i) and (iii).",
    },
    {
      kind: "check",
      id: "sr-c21e",
      prompt:
        "The decimal expansion of $\\frac{1}{17}$ has a repeating block. How many digits are in the repeating block?",
      format: "numeric",
      answer: "16",
      hint: "The period of $1/q$ divides $\\phi(q) = q-1$ when $q$ is prime. For $q=17$, the period divides 16. Find the smallest $k$ with $10^k \\equiv 1 \\pmod{17}$.",
      explanation:
        "We need the smallest $k$ with $10^k \\equiv 1 \\pmod{17}$. Check: $10^1 \\equiv 10$, $10^2 \\equiv 15$, $10^4 \\equiv 225 \\equiv 225-13\\times17=4$, $10^8 \\equiv 16 \\equiv -1$, so $10^{16} \\equiv 1$. Since $10^8 \\not\\equiv 1$, the period is exactly 16. So $1/17 = 0.\\overline{0588235294117647}$ (16 digits).",
    },
    {
      kind: "check",
      id: "sr-c21f",
      prompt:
        "Express $2.\\overline{345}$ as a fraction in simplest form.",
      format: "text",
      answer: "781/333",
      acceptedAnswers: ["781/333"],
      hint: "Write $x = 2.\\overline{345}$. Then $x = 2 + 0.\\overline{345} = 2 + 345/999$.",
      explanation:
        "$x = 2 + \\frac{345}{999} = 2 + \\frac{115}{333} = \\frac{666 + 115}{333} = \\frac{781}{333}$. Check $\\gcd(781, 333)$: $781 = 2 \\times 333 + 115$, $333 = 2 \\times 115 + 103$, $115 = 1 \\times 103 + 12$, $103 = 8 \\times 12 + 7$, $12 = 1 \\times 7 + 5$, $7 = 1 \\times 5 + 2$, $5 = 2 \\times 2 + 1$. GCD = 1, so already in lowest terms.",
    },
    {
      kind: "check",
      id: "sr-c21g",
      prompt:
        "Without actually dividing, determine whether $\\frac{987}{10500}$ will give a terminating or non-terminating decimal.",
      format: "text",
      answer: "terminating",
      acceptedAnswers: ["terminating", "Terminating", "TERMINATING"],
      hint: "First simplify: $\\gcd(987, 10500)$. Then check if the reduced denominator has only factors 2 and 5.",
      explanation:
        "$987 = 3 \\times 7 \\times 47$. $10500 = 2^2 \\times 3 \\times 5^3 \\times 7$. $\\gcd = 3 \\times 7 = 21$. Reduced: $\\frac{47}{500}$. Now $500 = 2^2 \\times 5^3$ — only factors 2 and 5. So it terminates. ($47/500 = 0.094$.)",
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // SECTION 7: Irrational numbers and proofs
    // ═══════════════════════════════════════════════════════════════════════════
    {
      kind: "prose",
      heading: "7 · Irrational numbers and proofs",
      content:
        "An **irrational number** has a decimal expansion that is non-terminating and non-repeating. Famous examples: $\\sqrt{2}, \\sqrt{3}, \\pi, e, \\ln 2$.\n\n**Why do irrationals exist?** Because the rationals, despite being dense (between any two rationals lies another rational), have 'gaps'. For instance, no rational number $p/q$ satisfies $x^2 = 2$ — the proof below shows this rigorously.\n\n**Proof Template 1: Proving $\\sqrt{n}$ irrational when $n$ is not a perfect square**\n\nWe prove $\\sqrt{2}$ is irrational by contradiction:\n\n1. Assume $\\sqrt{2} = p/q$ where $\\gcd(p,q) = 1$ (lowest terms).\n2. Square: $p^2 = 2q^2$.\n3. So $2 \\mid p^2$. Since 2 is prime, $2 \\mid p$. Write $p = 2k$.\n4. Then $4k^2 = 2q^2 \\implies q^2 = 2k^2$, so $2 \\mid q$.\n5. But both $p,q$ even contradicts $\\gcd(p,q) = 1$. Contradiction!\n\nThe same argument works for any prime $n$: in step 3, use the key fact that if a prime $p$ divides $a^2$, then $p$ divides $a$.",
    },
    {
      kind: "callout",
      variant: "definition",
      title: "The key lemma for irrationality proofs",
      content:
        "If $p$ is prime and $p \\mid a^2$, then $p \\mid a$.\n\nThis is what makes the proof work. For composite non-squares (like $\\sqrt{12}$), we use: $\\sqrt{12} = 2\\sqrt{3}$, and since $\\sqrt{3}$ is irrational (by the prime argument), $2\\sqrt{3}$ is also irrational.",
    },
    {
      kind: "prose",
      heading: "",
      content:
        "**Proof Template 2: Proving $\\sqrt{3}$ is irrational**\n\nAssume $\\sqrt{3} = p/q$ in lowest terms. Then $p^2 = 3q^2$.\n\nSo $3 \\mid p^2$. Since 3 is prime, $3 \\mid p$. Let $p = 3m$.\n\nThen $9m^2 = 3q^2 \\implies q^2 = 3m^2$, so $3 \\mid q$.\n\nBoth $p$ and $q$ are divisible by 3 — contradiction with $\\gcd(p,q) = 1$.\n\n**Proof Template 3: Proving $a + b\\sqrt{n}$ is irrational (where $a,b \\in \\mathbb{Q}$, $b \\neq 0$, $\\sqrt{n}$ irrational)**\n\nAssume $a + b\\sqrt{n} = r$ (rational). Then $\\sqrt{n} = (r-a)/b$. Since $r,a,b$ are all rational and $b \\neq 0$, $(r-a)/b$ is rational. But $\\sqrt{n}$ is irrational — contradiction!\n\nExample: Prove $2 + \\sqrt{3}$ is irrational.\n\nIf $2 + \\sqrt{3} = r$ (rational), then $\\sqrt{3} = r - 2$ is rational. Contradiction!",
    },
    {
      kind: "prose",
      heading: "",
      content:
        "**Proof Template 4: Proving $\\sqrt{2} + \\sqrt{3}$ is irrational**\n\nThis is harder because it's a sum of two irrationals. The trick: assume rational and derive a contradiction via squaring.\n\nAssume $\\sqrt{2} + \\sqrt{3} = r$ (rational). Then $\\sqrt{3} = r - \\sqrt{2}$.\n\nSquare both sides: $3 = r^2 - 2r\\sqrt{2} + 2$.\n\nSo $2r\\sqrt{2} = r^2 - 1$, giving $\\sqrt{2} = \\frac{r^2 - 1}{2r}$.\n\nSince $r$ is rational, the RHS is rational. But $\\sqrt{2}$ is irrational — contradiction!\n\n**Proof Template 5: Proving $\\sqrt{2} + \\sqrt{3} + \\sqrt{5}$ is irrational**\n\nAssume $\\sqrt{2} + \\sqrt{3} + \\sqrt{5} = r$. Then $\\sqrt{2} + \\sqrt{3} = r - \\sqrt{5}$.\n\nSquare: $5 + 2\\sqrt{6} = r^2 - 2r\\sqrt{5} + 5$.\n\nSo $2\\sqrt{6} + 2r\\sqrt{5} = r^2$, i.e. $2\\sqrt{6} = r^2 - 2r\\sqrt{5}$.\n\nSquare again: $24 = r^4 - 4r^3\\sqrt{5} + 4r^2 \\cdot 5$, which gives $\\sqrt{5}$ rational — contradiction!",
    },
    {
      kind: "callout",
      variant: "tip",
      title: "The squaring strategy",
      content:
        "When proving a sum of square roots is irrational: isolate one root, square to eliminate it, and show the remaining expression forces another known irrational to be rational. Repeat if needed.",
    },
    {
      kind: "callout",
      variant: "definition",
      title: "Arithmetic with irrationals — complete rules",
      content:
        "Let $r \\in \\mathbb{Q}$ (rational, non-zero) and $\\alpha \\notin \\mathbb{Q}$ (irrational):\n\n1. $r + \\alpha$ is always irrational\n2. $r - \\alpha$ is always irrational\n3. $r \\cdot \\alpha$ is always irrational\n4. $r / \\alpha$ is always irrational\n5. $\\alpha + \\alpha = 2\\alpha$ is irrational (rational times irrational)\n\nBut for two irrationals $\\alpha, \\beta$:\n- $\\alpha + \\beta$ may be rational: $\\sqrt{2} + (-\\sqrt{2}) = 0$\n- $\\alpha \\cdot \\beta$ may be rational: $\\sqrt{2} \\cdot \\sqrt{8} = 4$\n- $\\alpha / \\beta$ may be rational: $\\sqrt{12}/\\sqrt{3} = 2$\n- $\\alpha^\\beta$ may be rational: $(\\sqrt{2})^{\\sqrt{2} \\cdot \\sqrt{2}} = (\\sqrt{2})^2 = 2$",
    },
    {
      kind: "callout",
      variant: "trap",
      title: "Irrational times irrational is NOT always irrational",
      content:
        "Counterexamples: $\\sqrt{3} \\times \\sqrt{3} = 3$, $\\sqrt{2} \\times \\sqrt{8} = 4$, $(3+\\sqrt{5})(3-\\sqrt{5}) = 4$.\n\nThe product of two irrationals is irrational only when the surds are 'independent' — roughly, when one cannot be expressed as a rational multiple of the other's conjugate.",
    },
    {
      kind: "prose",
      heading: "",
      content:
        "**Proof Template 6: If $a + b\\sqrt{c} = 0$ where $a,b \\in \\mathbb{Q}$ and $\\sqrt{c}$ is irrational, then $a = 0$ and $b = 0$.**\n\nProof: If $b \\neq 0$, then $\\sqrt{c} = -a/b$ (rational) — contradiction. So $b = 0$, and then $a = 0$.\n\nThis is extremely useful! It means:\n$$\\text{If } a + b\\sqrt{c} = d + e\\sqrt{c} \\text{ with } \\sqrt{c} \\text{ irrational, then } a = d \\text{ and } b = e.$$\n\nWe can 'compare rational and irrational parts' separately — like comparing real and imaginary parts in complex numbers.\n\n**Application:** If $\\frac{3+\\sqrt{5}}{2-\\sqrt{5}} = a + b\\sqrt{5}$, find $a$ and $b$.\n\nRationalise: $\\frac{(3+\\sqrt{5})(2+\\sqrt{5})}{(2-\\sqrt{5})(2+\\sqrt{5})} = \\frac{6+3\\sqrt{5}+2\\sqrt{5}+5}{4-5} = \\frac{11+5\\sqrt{5}}{-1} = -11-5\\sqrt{5}$.\n\nSo $a = -11$ and $b = -5$.",
    },
    {
      kind: "callout",
      variant: "tip",
      title: "Constructing irrationals between given numbers",
      content:
        "To find an irrational between $\\frac{5}{7}$ and $\\frac{9}{11}$:\n\n$5/7 \\approx 0.714$ and $9/11 \\approx 0.818$. A non-terminating, non-repeating decimal between them: $0.75075007500075\\ldots$ (increasing zeros).\n\nOr use surds: $\\sqrt{0.6} \\approx 0.775$ works (since 0.6 is not a perfect square).",
    },
    {
      kind: "check",
      id: "sr-c22",
      prompt:
        "Is $\\sqrt{12}$ rational or irrational?",
      format: "text",
      answer: "irrational",
      acceptedAnswers: ["irrational", "Irrational", "IRRATIONAL"],
      hint: "Is 12 a perfect square? If not, $\\sqrt{12}$ is irrational.",
      explanation:
        "$12$ is not a perfect square ($3^2 = 9, 4^2 = 16$), so $\\sqrt{12}$ is irrational. (Note: $\\sqrt{12} = 2\\sqrt{3}$, still irrational since rational $\\times$ irrational = irrational.)",
    },
    {
      kind: "check",
      id: "sr-c23",
      prompt:
        "Prove that $5\\sqrt{3}$ is irrational. What technique do you use? (State the method in one sentence.)",
      format: "text",
      answer: "assume rational, then sqrt(3) = rational/5 is rational, contradiction",
      acceptedAnswers: [
        "assume rational, then sqrt(3) = rational/5 is rational, contradiction",
        "contradiction",
        "proof by contradiction",
        "assume rational then sqrt 3 is rational",
      ],
      hint: "If $5\\sqrt{3} = r$ (rational), what does that say about $\\sqrt{3}$ itself?",
      explanation:
        "If $5\\sqrt{3} = r$ (rational), then $\\sqrt{3} = r/5$, which is rational — contradicting the known irrationality of $\\sqrt{3}$.",
    },
    {
      kind: "check",
      id: "sr-c24",
      prompt:
        "In the proof that $\\sqrt{2}$ is irrational, what is the key contradiction?",
      format: "text",
      answer: "both p and q are even",
      acceptedAnswers: [
        "both p and q are even",
        "p and q are both even",
        "gcd is not 1",
        "they share a factor of 2",
      ],
      hint: "We assumed $p/q$ was in lowest terms. What goes wrong?",
      explanation:
        "We derive that both $p$ and $q$ must be even, contradicting our assumption that $\\gcd(p,q) = 1$ (i.e. that the fraction was in lowest terms).",
    },
    {
      kind: "check",
      id: "sr-c24b",
      prompt:
        "Prove that $\\sqrt{3} + \\sqrt{5}$ is irrational. What is the first step?",
      format: "text",
      answer: "assume it equals a rational r, then isolate one root and square",
      acceptedAnswers: [
        "assume it equals a rational r, then isolate one root and square",
        "assume rational and square",
        "contradiction",
        "assume rational, isolate sqrt(5), square both sides",
      ],
      hint: "Set $\\sqrt{3} + \\sqrt{5} = r$. Rearrange to isolate $\\sqrt{5}$, then square...",
      explanation:
        "Assume $\\sqrt{3} + \\sqrt{5} = r$. Then $\\sqrt{5} = r - \\sqrt{3}$. Squaring: $5 = r^2 - 2r\\sqrt{3} + 3$, so $\\sqrt{3} = (r^2-2)/(2r)$ — rational. But $\\sqrt{3}$ is irrational. Contradiction!",
    },
    {
      kind: "check",
      id: "sr-c24c",
      prompt:
        "Is $(2-\\sqrt{3})(2+\\sqrt{3})$ rational or irrational?",
      format: "text",
      answer: "rational",
      acceptedAnswers: ["rational", "Rational", "RATIONAL"],
      hint: "This is of the form $(a-b)(a+b) = a^2 - b^2$.",
      explanation:
        "$(2-\\sqrt{3})(2+\\sqrt{3}) = 4 - 3 = 1$. The product of these two irrationals is rational!",
    },
    {
      kind: "check",
      id: "sr-c24d",
      prompt:
        "If $\\frac{\\sqrt{3}-1}{\\sqrt{3}+1} = a + b\\sqrt{3}$, find the values of $a$ and $b$.",
      format: "text",
      answer: "a=2, b=-1",
      acceptedAnswers: ["a=2, b=-1", "a = 2, b = -1", "2, -1"],
      hint: "Rationalise by multiplying by $\\frac{\\sqrt{3}-1}{\\sqrt{3}-1}$.",
      explanation:
        "$\\frac{(\\sqrt{3}-1)^2}{(\\sqrt{3}+1)(\\sqrt{3}-1)} = \\frac{3-2\\sqrt{3}+1}{3-1} = \\frac{4-2\\sqrt{3}}{2} = 2-\\sqrt{3}$. So $a = 2$, $b = -1$.",
    },
    {
      kind: "check",
      id: "sr-c24e",
      prompt:
        "Give an example of two irrational numbers whose SUM is rational and whose PRODUCT is also rational.",
      format: "text",
      answer: "2+sqrt(3) and 2-sqrt(3)",
      acceptedAnswers: [
        "2+sqrt(3) and 2-sqrt(3)",
        "3+sqrt(5) and 3-sqrt(5)",
        "sqrt(2) and -sqrt(2)",
        "1+sqrt(2) and 1-sqrt(2)",
      ],
      hint: "Think of conjugate surds: $a + \\sqrt{b}$ and $a - \\sqrt{b}$.",
      explanation:
        "Take $2+\\sqrt{3}$ and $2-\\sqrt{3}$. Sum $= 4$ (rational). Product $= (2+\\sqrt{3})(2-\\sqrt{3}) = 4-3 = 1$ (rational). Both are individually irrational, but their sum and product are both rational — this is exactly how quadratics with irrational roots work!",
    },
    {
      kind: "check",
      id: "sr-c24f",
      prompt:
        "If $x = \\frac{1}{2+\\sqrt{3}}$, find the value of $x^2 - 4x + 1$.",
      format: "numeric",
      answer: "0",
      hint: "First rationalise $x$. Then note that $x = 2 - \\sqrt{3}$, so $x + \\frac{1}{x} = ?$",
      explanation:
        "Rationalise: $x = \\frac{1}{2+\\sqrt{3}} \\cdot \\frac{2-\\sqrt{3}}{2-\\sqrt{3}} = \\frac{2-\\sqrt{3}}{1} = 2-\\sqrt{3}$.\n\nSo $x = 2-\\sqrt{3}$. Then $x - 2 = -\\sqrt{3}$. Squaring: $(x-2)^2 = 3$, so $x^2-4x+4=3$, giving $x^2-4x+1=0$.",
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // SECTION 8: Surds and rationalisation
    // ═══════════════════════════════════════════════════════════════════════════
    {
      kind: "prose",
      heading: "8 · Surds and rationalisation",
      content:
        "A **surd** is an irrational root that cannot be simplified to a rational number. Examples: $\\sqrt{2}$, $\\sqrt[3]{5}$, $\\sqrt{7}$. The **order** of a surd is the index of the root ($\\sqrt{2}$ has order 2; $\\sqrt[3]{5}$ has order 3). The number under the root is the **radicand**.\n\n**Like surds** share the same irrational part (e.g. $3\\sqrt{5}$ and $7\\sqrt{5}$) and can be combined: $3\\sqrt{5} + 7\\sqrt{5} = 10\\sqrt{5}$. Unlike surds (e.g. $\\sqrt{2}$ and $\\sqrt{3}$) cannot.\n\n**Simplifying surds:** extract the largest perfect-square factor.\n$$\\sqrt{72} = \\sqrt{36 \\times 2} = 6\\sqrt{2}, \\qquad \\sqrt{200} = \\sqrt{100 \\times 2} = 10\\sqrt{2}$$",
    },
    {
      kind: "callout",
      variant: "definition",
      title: "Complete surd identities toolkit",
      content:
        "For $a, b > 0$:\n\n**Splitting / combining:**\n$$\\sqrt{ab} = \\sqrt{a}\\cdot\\sqrt{b}, \\quad \\sqrt{\\tfrac{a}{b}} = \\tfrac{\\sqrt{a}}{\\sqrt{b}}, \\quad (\\sqrt{a})^2 = a, \\quad \\sqrt{a}\\cdot\\sqrt{b}\\cdot\\sqrt{c} = \\sqrt{abc}$$\n\n**Conjugate products and expansions:**\n$$(\\sqrt{a}+\\sqrt{b})(\\sqrt{a}-\\sqrt{b}) = a - b$$\n$$(a+\\sqrt{b})(a-\\sqrt{b}) = a^2 - b$$\n$$(\\sqrt{a}+\\sqrt{b})^2 = a + 2\\sqrt{ab} + b, \\quad (\\sqrt{a}-\\sqrt{b})^2 = a - 2\\sqrt{ab} + b$$",
    },
    {
      kind: "prose",
      heading: "",
      content:
        "**Rationalising the denominator** transforms a fraction so the denominator contains no surds.\n\n**Type 1: Monomial denominator** — multiply by the surd itself:\n$$\\frac{5}{\\sqrt{3}} = \\frac{5\\sqrt{3}}{3}$$\n\n**Type 2: Binomial denominator** — multiply by the conjugate:\n$$\\frac{1}{\\sqrt{5} + \\sqrt{3}} \\times \\frac{\\sqrt{5} - \\sqrt{3}}{\\sqrt{5} - \\sqrt{3}} = \\frac{\\sqrt{5} - \\sqrt{3}}{5 - 3} = \\frac{\\sqrt{5} - \\sqrt{3}}{2}$$\n\n**Type 3: Trinomial denominator (double rationalisation)**\n\nFor $\\frac{1}{\\sqrt{2} + \\sqrt{3} + \\sqrt{5}}$: group two surds, treat as binomial.\n\nStep 1: Group $(\\sqrt{2}+\\sqrt{3})$ and $\\sqrt{5}$. Multiply by $(\\sqrt{2}+\\sqrt{3}) - \\sqrt{5}$:\n$$\\frac{(\\sqrt{2}+\\sqrt{3}) - \\sqrt{5}}{(\\sqrt{2}+\\sqrt{3})^2 - 5} = \\frac{\\sqrt{2}+\\sqrt{3}-\\sqrt{5}}{2+2\\sqrt{6}+3-5} = \\frac{\\sqrt{2}+\\sqrt{3}-\\sqrt{5}}{2\\sqrt{6}}$$\n\nStep 2: Now rationalise $\\frac{1}{2\\sqrt{6}}$ — multiply by $\\frac{\\sqrt{6}}{\\sqrt{6}}$:\n$$\\frac{(\\sqrt{2}+\\sqrt{3}-\\sqrt{5})\\sqrt{6}}{2 \\times 6} = \\frac{\\sqrt{12}+\\sqrt{18}-\\sqrt{30}}{12} = \\frac{2\\sqrt{3}+3\\sqrt{2}-\\sqrt{30}}{12}$$",
    },
    {
      kind: "callout",
      variant: "tip",
      title: "The telescoping rationalisation trick",
      content:
        "When simplifying a sum like $\\frac{1}{\\sqrt{1}+\\sqrt{2}} + \\frac{1}{\\sqrt{2}+\\sqrt{3}} + \\cdots + \\frac{1}{\\sqrt{n}+\\sqrt{n+1}}$:\n\nRationalise each term: $\\frac{1}{\\sqrt{k}+\\sqrt{k+1}} = \\sqrt{k+1}-\\sqrt{k}$.\n\nThe sum telescopes! All middle terms cancel:\n$$\\sum_{k=1}^{n} (\\sqrt{k+1}-\\sqrt{k}) = \\sqrt{n+1} - 1$$",
    },
    {
      kind: "callout",
      variant: "tip",
      title: "Simplifying nested surds",
      content:
        "**Method 1 (inspection):** To simplify $\\sqrt{a + 2\\sqrt{b}}$, find $p, q$ with:\n$$p + q = a \\quad \\text{and} \\quad pq = b$$\nThen $\\sqrt{a + 2\\sqrt{b}} = \\sqrt{p} + \\sqrt{q}$.\n\nExample: $\\sqrt{7 + 4\\sqrt{3}} = \\sqrt{7 + 2\\sqrt{12}}$. Need $p+q=7, pq=12$: so $p=4, q=3$.\nAnswer: $\\sqrt{4} + \\sqrt{3} = 2 + \\sqrt{3}$.\n\n**For subtraction:** $\\sqrt{a - 2\\sqrt{b}} = \\sqrt{p} - \\sqrt{q}$ (take $p > q$).\n\nExample: $\\sqrt{7 - 4\\sqrt{3}} = 2 - \\sqrt{3}$.\n\n**Method 2 (when inspection fails):** Assume $\\sqrt{a+b\\sqrt{c}} = \\sqrt{x} + \\sqrt{y}$. Square: $a + b\\sqrt{c} = x + y + 2\\sqrt{xy}$. Compare rational parts ($x+y=a$) and irrational parts ($2\\sqrt{xy} = b\\sqrt{c}$, so $4xy = b^2c$). Solve the system.",
    },
    {
      kind: "prose",
      heading: "",
      content:
        "**Comparing surds (without calculator):**\n\nTo compare $\\sqrt[3]{4}$ and $\\sqrt{3}$: make the indices the same.\n$$\\sqrt[3]{4} = 4^{1/3} = 4^{2/6} = \\sqrt[6]{16}$$\n$$\\sqrt{3} = 3^{1/2} = 3^{3/6} = \\sqrt[6]{27}$$\nSince $27 > 16$: $\\sqrt{3} > \\sqrt[3]{4}$.\n\n**The square root spiral** (Theodorus spiral): starting from a right triangle with legs 1 and 1 (hypotenuse $\\sqrt{2}$), at each step draw a new right triangle using the previous hypotenuse as one leg and 1 as the other. The successive hypotenuses are $\\sqrt{2}, \\sqrt{3}, \\sqrt{4}, \\sqrt{5}, \\ldots$ This constructs all $\\sqrt{n}$ on the number line.\n\n**Rationalising factor (RF):** The RF of an expression is what you multiply by to get a rational result:\n- RF of $a^{1/n}$ (general): $a^{(n-1)/n}$, since $a^{1/n} \\times a^{(n-1)/n} = a^1 = a$\n- RF of $\\sqrt{a}$: $\\sqrt{a}$ (product $= a$) — this is the $n=2$ case\n- RF of $\\sqrt[3]{a}$: $\\sqrt[3]{a^2}$ (product $= a$) — the $n=3$ case\n- RF of $\\sqrt[5]{a^3}$: $\\sqrt[5]{a^2}$ (product $= a$) — since $a^{3/5} \\times a^{2/5} = a$\n- RF of $\\sqrt{a} + \\sqrt{b}$: $\\sqrt{a} - \\sqrt{b}$ (uses $x^2-y^2$, product $= a-b$)\n- RF of $\\sqrt[3]{a} + \\sqrt[3]{b}$: $\\sqrt[3]{a^2} - \\sqrt[3]{ab} + \\sqrt[3]{b^2}$ (uses $x^3+y^3$, product $= a+b$)\n- RF of $\\sqrt[3]{a} - \\sqrt[3]{b}$: $\\sqrt[3]{a^2} + \\sqrt[3]{ab} + \\sqrt[3]{b^2}$ (uses $x^3-y^3$, product $= a-b$)",
    },
    {
      kind: "callout",
      variant: "definition",
      title: "Representing surds on the number line",
      content:
        "To place $\\sqrt{n}$ on the number line:\n\n1. $\\sqrt{2}$: Right triangle with legs 1, 1. Hypotenuse $= \\sqrt{2}$. Arc from origin.\n2. $\\sqrt{3}$: Right triangle with legs $\\sqrt{2}$, 1. Hypotenuse $= \\sqrt{3}$.\n3. $\\sqrt{5}$: Right triangle with legs 2, 1. Hypotenuse $= \\sqrt{5}$.\n4. Any $\\sqrt{n}$: If $n = a^2 + b^2$, use legs $a, b$.\n\nAlternative: to place $\\sqrt{n}$ directly, mark point $B$ at distance $n$ from origin $A$, add 1 more unit to get point $C$ at $n+1$. The midpoint $O$ of $AC$ is the centre. Draw semicircle on $AC$. The perpendicular from $B$ to the semicircle has length $\\sqrt{n}$ (by the geometric mean: $\\sqrt{n \\cdot 1} = \\sqrt{n}$).",
    },
    {
      kind: "callout",
      variant: "trap",
      title: "Common surd errors",
      content:
        "1. $\\sqrt{a+b} \\neq \\sqrt{a} + \\sqrt{b}$ — NEVER split a root over addition!\n2. $\\sqrt{a^2 + b^2} \\neq a + b$ — the hypotenuse is NOT the sum of legs.\n3. $\\sqrt{x^2} = |x|$, NOT $x$ — remember absolute value when $x$ could be negative.\n4. $(\\sqrt{a})^2 = a$ but $\\sqrt{a^2} = |a|$ — the square root function always returns non-negative.\n5. When rationalising, don't forget to rationalise ALL surd terms in the denominator.",
    },
    {
      kind: "check",
      id: "sr-c25",
      prompt:
        "Simplify $\\sqrt{72}$ into the form $a\\sqrt{b}$ where $b$ has no perfect square factor.",
      format: "text",
      answer: "6√2",
      acceptedAnswers: ["6√2", "6root2", "6\\sqrt{2}", "6 sqrt 2"],
      hint: "$72 = 36 \\times 2$, and $\\sqrt{36} = 6$.",
      explanation:
        "$\\sqrt{72} = \\sqrt{36 \\times 2} = \\sqrt{36} \\cdot \\sqrt{2} = 6\\sqrt{2}$.",
    },
    {
      kind: "check",
      id: "sr-c26",
      prompt:
        "Rationalise the denominator: $\\dfrac{1}{\\sqrt{7} - \\sqrt{5}}$.",
      format: "text",
      answer: "(√7+√5)/2",
      acceptedAnswers: ["(√7+√5)/2", "(sqrt7+sqrt5)/2", "(\\sqrt{7}+\\sqrt{5})/2"],
      hint: "Multiply numerator and denominator by the conjugate $\\sqrt{7} + \\sqrt{5}$.",
      explanation:
        "$\\dfrac{1}{\\sqrt{7}-\\sqrt{5}} \\times \\dfrac{\\sqrt{7}+\\sqrt{5}}{\\sqrt{7}+\\sqrt{5}} = \\dfrac{\\sqrt{7}+\\sqrt{5}}{7-5} = \\dfrac{\\sqrt{7}+\\sqrt{5}}{2}$.",
    },
    {
      kind: "check",
      id: "sr-c27",
      prompt:
        "Simplify $\\sqrt{7 + 4\\sqrt{3}}$.",
      format: "text",
      answer: "2+√3",
      acceptedAnswers: ["2+√3", "2+root3", "2 + √3", "2+\\sqrt{3}"],
      hint: "Write $4\\sqrt{3} = 2\\sqrt{12}$, so we need $p+q=7$ and $pq=12$. Solve.",
      explanation:
        "$7 + 4\\sqrt{3} = 7 + 2\\sqrt{12}$. We need $p+q=7, pq=12$: so $p=4, q=3$. Then $\\sqrt{7+2\\sqrt{12}} = \\sqrt{4} + \\sqrt{3} = 2 + \\sqrt{3}$.",
    },
    {
      kind: "check",
      id: "sr-c27b",
      prompt:
        "Find the value of $\\dfrac{1}{\\sqrt{1}+\\sqrt{2}} + \\dfrac{1}{\\sqrt{2}+\\sqrt{3}} + \\dfrac{1}{\\sqrt{3}+\\sqrt{4}} + \\cdots + \\dfrac{1}{\\sqrt{15}+\\sqrt{16}}$.",
      format: "numeric",
      answer: "3",
      hint: "Rationalise each fraction: $\\frac{1}{\\sqrt{k}+\\sqrt{k+1}} = \\sqrt{k+1}-\\sqrt{k}$. The sum telescopes!",
      explanation:
        "Each term rationalises to $\\sqrt{k+1}-\\sqrt{k}$. The sum telescopes:\n$(\\sqrt{2}-\\sqrt{1})+(\\sqrt{3}-\\sqrt{2})+\\cdots+(\\sqrt{16}-\\sqrt{15}) = \\sqrt{16}-\\sqrt{1} = 4-1 = 3$.",
    },
    {
      kind: "check",
      id: "sr-c27c",
      prompt:
        "Simplify $\\sqrt{11 - 6\\sqrt{2}}$.",
      format: "text",
      answer: "3-√2",
      acceptedAnswers: ["3-√2", "3-root2", "3 - √2", "3-\\sqrt{2}"],
      hint: "Write $6\\sqrt{2} = 2\\sqrt{18}$. Need $p+q=11$ and $pq=18$. Or try: $(a-b)^2 = a^2+b^2-2ab$, so look for $a^2+b^2=11$ and $2ab=6\\sqrt{2}$...",
      explanation:
        "Try $(3-\\sqrt{2})^2 = 9 + 2 - 6\\sqrt{2} = 11 - 6\\sqrt{2}$ ✓.\n\nAlternatively: $11-6\\sqrt{2} = 11-2\\sqrt{18}$. Need $p+q=11, pq=18$: $p=9, q=2$. Answer: $\\sqrt{9}-\\sqrt{2} = 3-\\sqrt{2}$ (we take the minus form since the original has subtraction).",
    },
    {
      kind: "check",
      id: "sr-c27d",
      prompt:
        "Which is larger: $\\sqrt[3]{4}$ or $\\sqrt{3}$?",
      format: "text",
      answer: "√3",
      acceptedAnswers: ["√3", "sqrt(3)", "root 3", "\\sqrt{3}", "sqrt3"],
      hint: "Convert both to 6th roots: $4^{1/3} = 4^{2/6} = \\sqrt[6]{16}$ and $3^{1/2} = 3^{3/6} = \\sqrt[6]{27}$.",
      explanation:
        "$\\sqrt[3]{4} = \\sqrt[6]{4^2} = \\sqrt[6]{16}$. $\\sqrt{3} = \\sqrt[6]{3^3} = \\sqrt[6]{27}$. Since $27 > 16$, $\\sqrt{3} > \\sqrt[3]{4}$.",
    },
    {
      kind: "check",
      id: "sr-c27e",
      prompt:
        "If $x = 3 + 2\\sqrt{2}$, find the value of $\\sqrt{x} + \\dfrac{1}{\\sqrt{x}}$.",
      format: "numeric",
      answer: "2√2",
      acceptedAnswers: ["2√2", "2root2", "2\\sqrt{2}", "2*sqrt(2)"],
      hint: "First simplify $\\sqrt{x}$: $3+2\\sqrt{2} = (\\sqrt{2}+1)^2$. So $\\sqrt{x} = ?$",
      explanation:
        "Note $(1+\\sqrt{2})^2 = 1+2\\sqrt{2}+2 = 3+2\\sqrt{2} = x$. So $\\sqrt{x} = 1+\\sqrt{2}$.\n\n$\\frac{1}{\\sqrt{x}} = \\frac{1}{1+\\sqrt{2}} = \\sqrt{2}-1$ (rationalise).\n\n$\\sqrt{x} + \\frac{1}{\\sqrt{x}} = (1+\\sqrt{2})+(\\sqrt{2}-1) = 2\\sqrt{2}$.",
    },
    {
      kind: "check",
      id: "sr-c27f",
      prompt:
        "Simplify: $\\dfrac{3\\sqrt{2}}{\\sqrt{6}+\\sqrt{3}} - \\dfrac{4\\sqrt{3}}{\\sqrt{6}+\\sqrt{2}} + \\dfrac{\\sqrt{6}}{\\sqrt{3}+\\sqrt{2}}$.",
      format: "numeric",
      answer: "0",
      hint: "Rationalise each fraction separately, then combine. Each denominator is of the form $\\sqrt{a}+\\sqrt{b}$.",
      explanation:
        "Rationalise each:\n$\\frac{3\\sqrt{2}(\\sqrt{6}-\\sqrt{3})}{6-3} = \\sqrt{2}(\\sqrt{6}-\\sqrt{3}) = 2\\sqrt{3}-\\sqrt{6}$.\n$\\frac{4\\sqrt{3}(\\sqrt{6}-\\sqrt{2})}{6-2} = \\sqrt{3}(\\sqrt{6}-\\sqrt{2}) = 3\\sqrt{2}-\\sqrt{6}$.\n$\\frac{\\sqrt{6}(\\sqrt{3}-\\sqrt{2})}{3-2} = 3\\sqrt{2}-2\\sqrt{3}$.\nSum: $(2\\sqrt{3}-\\sqrt{6}) - (3\\sqrt{2}-\\sqrt{6}) + (3\\sqrt{2}-2\\sqrt{3}) = 0$.",
    },
    {
      kind: "check",
      id: "sr-c27g",
      prompt:
        "Find the value of $\\sqrt{12 + \\sqrt{12 + \\sqrt{12 + \\cdots}}}$ (the infinite nested radical).",
      format: "numeric",
      answer: "4",
      hint: "Let $x = \\sqrt{12 + \\sqrt{12 + \\cdots}}$. Then $x = \\sqrt{12 + x}$. Square both sides.",
      explanation:
        "Let $x = \\sqrt{12+x}$. Squaring: $x^2 = 12+x$, so $x^2-x-12=0$, $(x-4)(x+3)=0$. Since $x > 0$: $x = 4$.",
    },
    {
      kind: "check",
      id: "sr-c27h",
      prompt:
        "Find the fourth root of $124 - 32\\sqrt{15}$. (i.e. find $\\sqrt[4]{124-32\\sqrt{15}}$).",
      format: "text",
      answer: "√5-√3",
      acceptedAnswers: ["√5-√3", "sqrt5 - sqrt3", "\\sqrt{5}-\\sqrt{3}", "sqrt(5)-sqrt(3)"],
      hint: "First find the square root: $124 - 32\\sqrt{15} = 124 - 2\\sqrt{256 \\times 15}$. Try $(\\sqrt{a}-\\sqrt{b})^2 = a+b-2\\sqrt{ab}$ with $a+b=124$ and $ab=256\\times15$.",
      explanation:
        "$124-32\\sqrt{15} = 124-2\\sqrt{15\\cdot256} = 124-2\\sqrt{3840}$. Try $a+b=124$, $ab=3840$: solving $t^2-124t+3840=0$, $t=\\frac{124\\pm\\sqrt{15376-15360}}{2}=\\frac{124\\pm4}{2}$, so $a=64, b=60$.\n$\\sqrt{124-32\\sqrt{15}} = \\sqrt{64}-\\sqrt{60} = 8-2\\sqrt{15}$.\nNow $8-2\\sqrt{15} = 5+3-2\\sqrt{15} = (\\sqrt{5})^2+(\\sqrt{3})^2-2\\sqrt{5}\\sqrt{3} = (\\sqrt{5}-\\sqrt{3})^2$.\nSo $\\sqrt[4]{124-32\\sqrt{15}} = \\sqrt{5}-\\sqrt{3}$.",
    },
    {
      kind: "check",
      id: "sr-c27i",
      prompt:
        "Which is greater: $\\sqrt{7} - \\sqrt{5}$ or $\\sqrt{5} - 1$? (Answer with the larger expression.)",
      format: "text",
      answer: "√5 - 1",
      acceptedAnswers: ["√5 - 1", "√5-1", "sqrt5-1", "sqrt(5)-1", "\\sqrt{5}-1"],
      hint: "Rationalise: $\\sqrt{7}-\\sqrt{5} = \\frac{2}{\\sqrt{7}+\\sqrt{5}}$ and $\\sqrt{5}-1 = \\frac{4}{\\sqrt{5}+1}$. Compare the fractions.",
      explanation:
        "$\\sqrt{7}-\\sqrt{5} = \\frac{(\\sqrt{7}-\\sqrt{5})(\\sqrt{7}+\\sqrt{5})}{\\sqrt{7}+\\sqrt{5}} = \\frac{2}{\\sqrt{7}+\\sqrt{5}}$.\n$\\sqrt{5}-1 = \\frac{(\\sqrt{5}-1)(\\sqrt{5}+1)}{\\sqrt{5}+1} = \\frac{4}{\\sqrt{5}+1}$.\nNow $\\sqrt{7}+\\sqrt{5} \\approx 2.65+2.24 = 4.89$ and $\\sqrt{5}+1 \\approx 3.24$.\nSo $\\frac{2}{4.89} \\approx 0.41$ and $\\frac{4}{3.24} \\approx 1.24$. Clearly $\\sqrt{5}-1$ is larger.\n\nMore rigorously: $\\frac{4}{\\sqrt{5}+1} > \\frac{2}{\\sqrt{7}+\\sqrt{5}} \\iff 4(\\sqrt{7}+\\sqrt{5}) > 2(\\sqrt{5}+1) \\iff 4\\sqrt{7}+4\\sqrt{5} > 2\\sqrt{5}+2 \\iff 4\\sqrt{7}+2\\sqrt{5} > 2$. Obviously true.",
    },
    {
      kind: "check",
      id: "sr-c27j",
      prompt:
        "Find the value of $\\sqrt{\\dfrac{1}{2}\\sqrt{\\dfrac{1}{2}\\sqrt{\\dfrac{1}{2}\\cdots}}}$ (infinite nested expression).",
      format: "text",
      answer: "1/2",
      acceptedAnswers: ["1/2", "0.5"],
      hint: "Let $x = \\sqrt{\\frac{1}{2} \\cdot x}$. Square both sides: $x^2 = \\frac{x}{2}$.",
      explanation:
        "Let $x$ equal the expression. Then $x = \\sqrt{\\frac{1}{2} \\cdot x}$ (the nested part equals $x$ itself).\nSquaring: $x^2 = \\frac{x}{2}$, so $2x^2 = x$, giving $x(2x-1)=0$. Since $x > 0$: $x = \\frac{1}{2}$.",
    },
    {
      kind: "check",
      id: "sr-c27k",
      prompt:
        "If $x = 1 - \\sqrt{2}$, find the value of $\\left(x - \\dfrac{1}{x}\\right)^3$.",
      format: "numeric",
      answer: "8",
      hint: "First find $1/x$ by rationalising. Then compute $x - 1/x$, and cube it.",
      explanation:
        "$\\frac{1}{x} = \\frac{1}{1-\\sqrt{2}} \\times \\frac{1+\\sqrt{2}}{1+\\sqrt{2}} = \\frac{1+\\sqrt{2}}{1-2} = -(1+\\sqrt{2})$.\n$x - \\frac{1}{x} = (1-\\sqrt{2}) - (-(1+\\sqrt{2})) = 1-\\sqrt{2}+1+\\sqrt{2} = 2$.\n$\\left(x-\\frac{1}{x}\\right)^3 = 2^3 = 8$.",
    },
    {
      kind: "check",
      id: "sr-c27l",
      prompt:
        "If $x = \\dfrac{\\sqrt{3}+\\sqrt{2}}{\\sqrt{3}-\\sqrt{2}}$ and $y = \\dfrac{\\sqrt{3}-\\sqrt{2}}{\\sqrt{3}+\\sqrt{2}}$, find $x^2 + y^2$.",
      format: "numeric",
      answer: "98",
      hint: "Rationalise each: $x = (\\sqrt{3}+\\sqrt{2})^2/(3-2) = 5+2\\sqrt{6}$. Similarly find $y$. Then use $(x+y)^2 - 2xy$.",
      explanation:
        "$x = \\frac{(\\sqrt{3}+\\sqrt{2})^2}{1} = 5+2\\sqrt{6}$ and $y = \\frac{(\\sqrt{3}-\\sqrt{2})^2}{1} = 5-2\\sqrt{6}$.\n$x+y = 10$ and $xy = (5+2\\sqrt{6})(5-2\\sqrt{6}) = 25-24 = 1$.\n$x^2+y^2 = (x+y)^2-2xy = 100-2 = 98$.",
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // SECTION 9: Laws of rational exponents
    // ═══════════════════════════════════════════════════════════════════════════
    {
      kind: "prose",
      heading: "9 · Laws of rational exponents",
      content:
        "For $a, b > 0$ and $m, n \\in \\mathbb{Q}$, the following laws hold:\n\n**Product / quotient of same base:**\n$$a^m \\cdot a^n = a^{m+n}, \\qquad a^m \\div a^n = a^{m-n}$$\n\n**Power of a power and products:**\n$$(a^m)^n = a^{mn}, \\qquad (ab)^n = a^n b^n, \\qquad \\left(\\frac{a}{b}\\right)^n = \\frac{a^n}{b^n}$$\n\n**Negative and fractional exponents:**\n$$a^{-n} = \\frac{1}{a^n}, \\qquad a^{m/n} = (\\sqrt[n]{a})^m = \\sqrt[n]{a^m}, \\qquad a^0 = 1$$\n\nThese laws unify integer and fractional exponents into one coherent system. The key bridge: $a^{1/n} = \\sqrt[n]{a}$.",
    },
    {
      kind: "callout",
      variant: "trap",
      title: "Tower exponents are right-associative",
      content:
        "Be careful: $a^{m^n}$ means $a^{(m^n)}$, NOT $(a^m)^n$.\n\nExample: $2^{3^2} = 2^9 = 512$, but $(2^3)^2 = 8^2 = 64$. Huge difference!",
    },
    {
      kind: "callout",
      variant: "tip",
      title: "The universal simplification strategy",
      content:
        "For any complex exponent expression:\n1. Convert all roots to fractional exponents: $\\sqrt[n]{x} = x^{1/n}$\n2. Express all bases as prime powers: $12 = 2^2 \\cdot 3$, $72 = 2^3 \\cdot 3^2$\n3. Apply laws to combine exponents\n4. Convert back to surd form if the question requires it\n\nExample: $\\sqrt[3]{8\\sqrt{4}} = (2^3 \\cdot (2^2)^{1/2})^{1/3} = (2^3 \\cdot 2)^{1/3} = (2^4)^{1/3} = 2^{4/3}$.",
    },
    {
      kind: "prose",
      heading: "",
      content:
        "**Classic competition patterns with exponents:**\n\n**Pattern 1: Equating exponents (same base)**\n\nIf $2^{x+1} = 8$, then $2^{x+1} = 2^3$, so $x+1 = 3$ and $x = 2$.\n\n**Pattern 2: Equating bases (same exponent)**\n\nIf $x^3 = 27$, then $x = 3$.\n\n**Pattern 3: Taking both sides to a common base**\n\nSolve $4^x = 8^{x-1}$: rewrite as $(2^2)^x = (2^3)^{x-1}$, so $2^{2x} = 2^{3x-3}$, giving $2x = 3x-3$, hence $x = 3$.\n\n**Pattern 4: Substitution for disguised quadratics**\n\nSolve $4^x - 6 \\cdot 2^x + 8 = 0$: let $t = 2^x$, then $t^2 - 6t + 8 = 0$, so $(t-2)(t-4) = 0$, giving $t = 2$ or $t = 4$, hence $x = 1$ or $x = 2$.\n\n**Pattern 5: Negative/fractional exponent manipulation**\n\nSimplify $(64)^{-1/3} + (0.008)^{1/3}$: $= \\frac{1}{\\sqrt[3]{64}} + \\sqrt[3]{0.008} = \\frac{1}{4} + 0.2 = 0.25 + 0.2 = 0.45$.",
    },
    {
      kind: "prose",
      heading: "",
      content:
        "**Pattern 6: The cyclic exponent identity**\n\nProve that $\\dfrac{x^{a(b-c)}}{x^{b(a-c)}} \\cdot \\dfrac{x^{b(c-a)}}{x^{c(b-a)}} \\cdot \\dfrac{x^{c(a-b)}}{x^{a(c-b)}} = 1$.\n\nCombine exponents: the total exponent of $x$ in the numerator is $a(b-c) + b(c-a) + c(a-b) = ab - ac + bc - ab + ca - cb = 0$. Similarly the denominator exponent is 0. So the expression $= x^0 / x^0 = 1$.\n\n**Pattern 7: If $a^x = b^y = c^z$ and $abc = 1$**\n\nLet $a^x = b^y = c^z = k$. Then $a = k^{1/x}$, $b = k^{1/y}$, $c = k^{1/z}$.\n$abc = k^{1/x + 1/y + 1/z} = 1 = k^0$.\nSo $\\frac{1}{x} + \\frac{1}{y} + \\frac{1}{z} = 0$, i.e. $xy + yz + zx = 0$.\n\n**Pattern 8: Simplifying $(a^m/a^n)^{m+n} \\cdot (a^n/a^p)^{n+p} \\cdot (a^p/a^m)^{p+m}$**\n\nExponent of $a$: $(m-n)(m+n) + (n-p)(n+p) + (p-m)(p+m) = m^2-n^2+n^2-p^2+p^2-m^2 = 0$.\nSo the expression $= a^0 = 1$. (This appears frequently in olympiad papers.)",
    },
    {
      kind: "callout",
      variant: "warning",
      title: "When exponent laws FAIL",
      content:
        "The laws require $a > 0$. If the base is negative or zero:\n\n- $(-8)^{1/3} = -2$ is fine (odd root of negative)\n- $(-4)^{1/2}$ is NOT a real number\n- $0^0$ is indeterminate (not 1, despite the convention in some contexts)\n- $0^{-n}$ is undefined (division by zero)\n\nIn competitions, always check that bases are positive before applying fractional exponent laws.",
    },
    {
      kind: "check",
      id: "sr-c28",
      prompt:
        "Simplify $8^{2/3}$.",
      format: "numeric",
      answer: "4",
      hint: "$8^{2/3} = (8^{1/3})^2$. What is the cube root of 8?",
      explanation:
        "$8^{2/3} = (\\sqrt[3]{8})^2 = 2^2 = 4$.",
    },
    {
      kind: "check",
      id: "sr-c29",
      prompt:
        "Simplify $\\dfrac{27^{2/3} \\times 9^{1/2}}{3^2}$.",
      format: "numeric",
      answer: "3",
      hint: "Write everything as powers of 3: $27 = 3^3$ and $9 = 3^2$.",
      explanation:
        "$27^{2/3} = (3^3)^{2/3} = 3^2 = 9$. $9^{1/2} = (3^2)^{1/2} = 3$. So the expression $= \\dfrac{9 \\times 3}{9} = 3$.",
    },
    {
      kind: "check",
      id: "sr-c30",
      prompt:
        "Solve $4^x = 8^{x-1}$.",
      format: "numeric",
      answer: "3",
      hint: "Write as powers of 2: $2^{2x} = 2^{3(x-1)}$. Equate exponents.",
      explanation:
        "$4^x = (2^2)^x = 2^{2x}$. $8^{x-1} = (2^3)^{x-1} = 2^{3x-3}$. So $2x = 3x-3$, giving $x = 3$.",
    },
    {
      kind: "check",
      id: "sr-c30b",
      prompt:
        "Simplify $\\left(\\dfrac{2}{3}\\right)^{3/4} \\div \\left(\\dfrac{2}{3}\\right)^{7/6}$. Express your answer as $\\left(\\frac{2}{3}\\right)^k$ and give $k$.",
      format: "text",
      answer: "-5/12",
      acceptedAnswers: ["-5/12", "-5 / 12"],
      hint: "Same base! Subtract exponents: $\\frac{3}{4} - \\frac{7}{6}$. Find common denominator.",
      explanation:
        "$\\frac{3}{4} - \\frac{7}{6} = \\frac{9}{12} - \\frac{14}{12} = -\\frac{5}{12}$. So the answer is $\\left(\\frac{2}{3}\\right)^{-5/12}$, and $k = -5/12$.",
    },
    {
      kind: "check",
      id: "sr-c30c",
      prompt:
        "If $9^{a+1} = \\left(\\dfrac{1}{3}\\right)^{4-3a}$, find $a$.",
      format: "numeric",
      answer: "6",
      hint: "Write both sides as powers of 3: $9 = 3^2$ and $1/3 = 3^{-1}$.",
      explanation:
        "LHS: $(3^2)^{a+1} = 3^{2a+2}$. RHS: $(3^{-1})^{4-3a} = 3^{3a-4}$.\nEquate exponents: $2a+2 = 3a-4$, so $a = 6$.",
    },
    {
      kind: "check",
      id: "sr-c30d",
      prompt:
        "Simplify: $\\left(\\dfrac{1}{64}\\right)^0 + (64)^{-1/2} + (-32)^{4/5}$.",
      format: "numeric",
      answer: "17.125",
      acceptedAnswers: ["17.125", "137/8"],
      hint: "$(\\text{anything})^0 = 1$. $64^{-1/2} = 1/\\sqrt{64} = 1/8$. $(-32)^{4/5} = ((-32)^{1/5})^4 = (-2)^4 = 16$.",
      explanation:
        "$(1/64)^0 = 1$. $64^{-1/2} = 1/\\sqrt{64} = 1/8$. $(-32)^{4/5} = ((−32)^{1/5})^4 = (−2)^4 = 16$.\nTotal: $1 + 1/8 + 16 = 17\\frac{1}{8} = 137/8 = 17.125$.",
    },
    {
      kind: "check",
      id: "sr-c30e",
      prompt:
        "If $(2)^{x+4} \\cdot (3)^{x+1} = 288$, find $x$.",
      format: "numeric",
      answer: "1",
      hint: "Factorise 288: $288 = 2^5 \\times 3^2$. Then equate powers of 2 and powers of 3 separately.",
      explanation:
        "$288 = 2^5 \\times 3^2$. So $2^{x+4} \\cdot 3^{x+1} = 2^5 \\cdot 3^2$. Comparing: $x+4 = 5$ and $x+1 = 2$. Both give $x = 1$ ✓.",
    },
    {
      kind: "check",
      id: "sr-c30f",
      prompt:
        "Prove that the expression $\\left(\\dfrac{x^a}{x^b}\\right)^{a+b} \\cdot \\left(\\dfrac{x^b}{x^c}\\right)^{b+c} \\cdot \\left(\\dfrac{x^c}{x^a}\\right)^{c+a} = 1$. What is the total exponent of $x$ in the numerator?",
      format: "numeric",
      answer: "0",
      hint: "Total exponent = $(a-b)(a+b) + (b-c)(b+c) + (c-a)(c+a)$. Expand each using difference of squares.",
      explanation:
        "Exponent $= (a^2-b^2) + (b^2-c^2) + (c^2-a^2) = 0$. So the expression $= x^0 = 1$.",
    },
    {
      kind: "check",
      id: "sr-c30g",
      prompt:
        "If $\\dfrac{2^x}{1+2^x} = \\dfrac{1}{4}$, find the value of $\\dfrac{8^x}{1+8^x}$.",
      format: "text",
      answer: "1/28",
      acceptedAnswers: ["1/28"],
      hint: "From the given: $4 \\cdot 2^x = 1 + 2^x$, so $3 \\cdot 2^x = 1$, giving $2^x = 1/3$. Then $8^x = (2^3)^x = (2^x)^3$.",
      explanation:
        "From $\\frac{2^x}{1+2^x} = \\frac{1}{4}$: cross-multiply to get $4 \\cdot 2^x = 1+2^x$, so $3 \\cdot 2^x = 1$, hence $2^x = \\frac{1}{3}$.\n$8^x = (2^x)^3 = \\left(\\frac{1}{3}\\right)^3 = \\frac{1}{27}$.\n$\\frac{8^x}{1+8^x} = \\frac{1/27}{1+1/27} = \\frac{1/27}{28/27} = \\frac{1}{28}$.",
    },
    {
      kind: "check",
      id: "sr-c30h",
      prompt:
        "Evaluate $(13^2 - 5^2)^{3/2}$.",
      format: "numeric",
      answer: "1728",
      hint: "First compute $13^2 - 5^2 = (13+5)(13-5)$. Then raise to the power $3/2$.",
      explanation:
        "$13^2 - 5^2 = (13+5)(13-5) = 18 \\times 8 = 144$.\n$(144)^{3/2} = (\\sqrt{144})^3 = 12^3 = 1728$.",
    },
    {
      kind: "check",
      id: "sr-c30i",
      prompt:
        "Arrange in descending order of magnitude: $\\sqrt[3]{2}$, $\\sqrt[6]{3}$, $\\sqrt[9]{4}$.",
      format: "text",
      answer: "∛2 > ⁶√3 > ⁹√4",
      acceptedAnswers: ["∛2 > ⁶√3 > ⁹√4", "cube root 2 > 6th root 3 > 9th root 4", "2^(1/3) > 3^(1/6) > 4^(1/9)"],
      hint: "LCM of indices 3, 6, 9 is 18. Convert all to 18th roots: $2^{1/3} = 2^{6/18} = \\sqrt[18]{2^6}$, etc.",
      explanation:
        "LCM(3,6,9) = 18.\n$2^{1/3} = 2^{6/18} = \\sqrt[18]{64}$.\n$3^{1/6} = 3^{3/18} = \\sqrt[18]{27}$.\n$4^{1/9} = 4^{2/18} = \\sqrt[18]{16}$.\nSince $64 > 27 > 16$: $\\sqrt[3]{2} > \\sqrt[6]{3} > \\sqrt[9]{4}$.",
    },
    {
      kind: "check",
      id: "sr-c30j",
      prompt:
        "Which is greater: $2^{300}$ or $3^{200}$?",
      format: "text",
      answer: "3^200",
      acceptedAnswers: ["3^200", "3^{200}", "3²⁰⁰"],
      hint: "Make the exponent the same: $2^{300} = (2^3)^{100} = 8^{100}$ and $3^{200} = (3^2)^{100} = 9^{100}$.",
      explanation:
        "$2^{300} = (2^3)^{100} = 8^{100}$.\n$3^{200} = (3^2)^{100} = 9^{100}$.\nSince $9 > 8$: $9^{100} > 8^{100}$, so $3^{200} > 2^{300}$.",
    },
    {
      kind: "check",
      id: "sr-c30k",
      prompt:
        "Prove that $\\dfrac{1}{1+x^{b-a}+x^{c-a}} + \\dfrac{1}{1+x^{a-b}+x^{c-b}} + \\dfrac{1}{1+x^{a-c}+x^{b-c}} = 1$. What common factor should you multiply each fraction by to see the cancellation?",
      format: "text",
      answer: "x^a, x^b, x^c respectively",
      acceptedAnswers: ["x^a, x^b, x^c respectively", "x^a, x^b, x^c", "multiply by x^a then x^b then x^c"],
      hint: "Multiply the first fraction's numerator and denominator by $x^a$, the second by $x^b$, the third by $x^c$.",
      explanation:
        "Multiply first by $\\frac{x^a}{x^a}$: $\\frac{x^a}{x^a+x^b+x^c}$.\nMultiply second by $\\frac{x^b}{x^b}$: $\\frac{x^b}{x^a+x^b+x^c}$.\nMultiply third by $\\frac{x^c}{x^c}$: $\\frac{x^c}{x^a+x^b+x^c}$.\nSum $= \\frac{x^a+x^b+x^c}{x^a+x^b+x^c} = 1$. ✓",
    },
    {
      kind: "check",
      id: "sr-c30l",
      prompt:
        "If $a^{1/x} = b^{1/y} = c^{1/z}$ and $b^2 = ac$, find $\\dfrac{x+z}{2y}$... what does it equal?",
      format: "numeric",
      answer: "1",
      hint: "Let $a^{1/x} = b^{1/y} = c^{1/z} = k$. Then $a = k^x$, $b = k^y$, $c = k^z$. Substitute into $b^2 = ac$.",
      explanation:
        "Let $k = a^{1/x} = b^{1/y} = c^{1/z}$. Then $a = k^x$, $b = k^y$, $c = k^z$.\n$b^2 = ac \\implies k^{2y} = k^x \\cdot k^z = k^{x+z}$.\nSo $2y = x+z$, hence $\\frac{x+z}{2y} = 1$.",
    },
    {
      kind: "check",
      id: "sr-c30m",
      prompt:
        "Find the value of $m$ if $5^{2m} + 5^{-1} = 5^5$.",
      format: "text",
      answer: "no solution... actually: 5^{2m} = 5^5 - 1/5 = (3125 - 0.2) = not a power of 5",
      acceptedAnswers: ["no real solution", "no solution"],
      hint: "Rearrange: $5^{2m} = 5^5 - 5^{-1}$. Is the RHS a perfect power of 5?",
      explanation:
        "$5^{2m} = 5^5 - 5^{-1} = 3125 - 0.2 = 3124.8$. But $5^{2m}$ must be a power of 5 (e.g. 1, 5, 25, 125...). Since 3124.8 is not a power of 5, there is no real solution for $m$.\n\n(Note: many students try $2m = 5$ giving $m = 5/2$, but that ignores the $-5^{-1}$ term!)",
    },
    {
      kind: "check",
      id: "sr-c30n",
      prompt:
        "Evaluate: $(1^3 + 2^3 + 3^3 + 4^3)^{-3/2}$.",
      format: "text",
      answer: "1/1000",
      acceptedAnswers: ["1/1000", "0.001", "10^{-3}"],
      hint: "First compute $1^3+2^3+3^3+4^3$. Recall that $1^3+2^3+\\cdots+n^3 = \\left(\\frac{n(n+1)}{2}\\right)^2$.",
      explanation:
        "$1^3+2^3+3^3+4^3 = \\left(\\frac{4 \\cdot 5}{2}\\right)^2 = 10^2 = 100$.\n$(100)^{-3/2} = \\frac{1}{100^{3/2}} = \\frac{1}{(\\sqrt{100})^3} = \\frac{1}{10^3} = \\frac{1}{1000}$.",
    },
  ],

  workedExamples: [
    {
      kind: "example",
      title: "Inclusion-exclusion survey problem",
      statement:
        "In a school of 100 students, 60 study French, 50 study Spanish, and 15 study neither language. How many study both French and Spanish?",
      approach:
        "Use inclusion-exclusion. Let $F$ = French students, $S$ = Spanish students. We know $|U| = 100$, $|F| = 60$, $|S| = 50$, and 15 study neither, so $|F \\cup S| = 100 - 15 = 85$.",
      solution:
        "By inclusion-exclusion:\n$$|F \\cup S| = |F| + |S| - |F \\cap S|$$\n$$85 = 60 + 50 - |F \\cap S|$$\n$$|F \\cap S| = 110 - 85 = 25$$\n\nSo **25 students** study both French and Spanish.",
    },
    {
      kind: "example",
      title: "Converting a recurring decimal to a fraction",
      statement:
        "Express $0.\\overline{243}$ as a fraction in lowest terms.",
      approach:
        "The repeating block '243' has 3 digits, so multiply by $10^3 = 1000$ to shift the block one full period.",
      solution:
        "Let $x = 0.\\overline{243} = 0.243243243\\ldots$\n\n$1000x = 243.243243\\ldots$\n\nSubtract: $1000x - x = 243$\n\n$999x = 243$\n\n$x = \\dfrac{243}{999}$\n\nSimplify: $\\gcd(243, 999) = 27$ (since $243 = 27 \\times 9$ and $999 = 27 \\times 37$).\n\n$$x = \\frac{9}{37}$$",
    },
    {
      kind: "example",
      title: "Rationalising a binomial surd denominator",
      statement:
        "Simplify $\\dfrac{1}{\\sqrt{5} + \\sqrt{3}}$.",
      approach:
        "Multiply numerator and denominator by the conjugate $\\sqrt{5} - \\sqrt{3}$ to eliminate the surds from the denominator.",
      solution:
        "$$\\frac{1}{\\sqrt{5}+\\sqrt{3}} \\times \\frac{\\sqrt{5}-\\sqrt{3}}{\\sqrt{5}-\\sqrt{3}} = \\frac{\\sqrt{5}-\\sqrt{3}}{(\\sqrt{5})^2 - (\\sqrt{3})^2} = \\frac{\\sqrt{5}-\\sqrt{3}}{5-3} = \\frac{\\sqrt{5}-\\sqrt{3}}{2}$$",
    },
    {
      kind: "example",
      title: "Proving a sum of surds is irrational",
      statement:
        "Prove that $\\sqrt{3} + \\sqrt{5}$ is irrational.",
      approach:
        "Assume for contradiction that $\\sqrt{3} + \\sqrt{5}$ is rational, then isolate one surd and square to derive a contradiction.",
      solution:
        "Assume $\\sqrt{3} + \\sqrt{5} = r$ where $r \\in \\mathbb{Q}$.\n\nThen $\\sqrt{5} = r - \\sqrt{3}$.\n\nSquaring both sides: $5 = r^2 - 2r\\sqrt{3} + 3$.\n\nRearranging: $2r\\sqrt{3} = r^2 - 2$.\n\nSo $\\sqrt{3} = \\dfrac{r^2 - 2}{2r}$.\n\nSince $r$ is rational, the right side is rational. But $\\sqrt{3}$ is irrational — contradiction!\n\nTherefore $\\sqrt{3} + \\sqrt{5}$ is irrational. $\\square$",
    },
  ],

  practiceProblemIds: [],
  challengeProblemIds: [],

  summary: {
    keyFormulas: [
      "$|A \\cup B| = |A| + |B| - |A \\cap B|$ (inclusion-exclusion, 2 sets)",
      "$|A \\cup B \\cup C| = |A|+|B|+|C|-|A\\cap B|-|A\\cap C|-|B\\cap C|+|A\\cap B\\cap C|$ (3 sets)",
      "Number of subsets of a set with $n$ elements $= 2^n$",
      "$(A \\cup B)' = A' \\cap B'$ and $(A \\cap B)' = A' \\cup B'$ (De Morgan)",
      "$p/q$ terminates iff $q = 2^a \\times 5^b$ (in lowest terms)",
      "$(\\sqrt{a}+\\sqrt{b})(\\sqrt{a}-\\sqrt{b}) = a - b$ (difference of squares for surds)",
      "$a^{m/n} = (\\sqrt[n]{a})^m$ (rational exponents as roots)",
      "$a^m \\cdot a^n = a^{m+n}$, $(a^m)^n = a^{mn}$, $a^{-n} = 1/a^n$",
    ],
    bigIdeas: [
      "Sets provide a universal language for describing mathematical collections; master the notation and you can communicate any mathematical idea precisely.",
      "The real numbers form a strict hierarchy: every natural is an integer, every integer is rational, but not every real is rational.",
      "Inclusion-exclusion is the fundamental counting tool for overlapping sets — always subtract what you double-counted.",
      "Irrationality proofs by contradiction follow a template: assume rational form, derive that numerator and denominator share a factor, contradicting lowest terms.",
      "Rationalising the denominator is not just tidying — it often reveals the structure needed to simplify further or compare expressions.",
    ],
    patternTips: [
      "In survey problems, draw a Venn diagram and fill regions from the inside (intersection) outward.",
      "When converting recurring decimals, the number of 9s in the denominator equals the length of the repeating block.",
      "To simplify nested surds $\\sqrt{a \\pm 2\\sqrt{b}}$, find $p+q=a$ and $pq=b$.",
      "Express all bases as prime powers before applying exponent laws — this prevents errors.",
      "When rationalising with two terms, always multiply by the conjugate (flip the sign between the surds).",
    ],
    traps: [
      "$\\sqrt{a+b} \\neq \\sqrt{a} + \\sqrt{b}$ — this is the single most common surd error.",
      "Irrational $\\times$ irrational is NOT always irrational (e.g. $\\sqrt{2} \\times \\sqrt{2} = 2$).",
      "$a^{m^n} \\neq (a^m)^n$ — tower exponents are right-associative: $a^{m^n} = a^{(m^n)}$.",
      "Do not confuse $\\subset$ (proper subset, strictly smaller) with $\\subseteq$ (subset, may be equal).",
      "In inclusion-exclusion with 3 sets, forgetting to ADD back $|A \\cap B \\cap C|$ is a common error.",
    ],
    revisionNotes: [
      "Memorise the standard sets ($\\mathbb{N}, \\mathbb{Z}, \\mathbb{Q}, \\mathbb{R}$) and their containment chain.",
      "Practise converting recurring decimals to fractions until the multiply-subtract method is automatic.",
      "Know the proof that $\\sqrt{2}$ is irrational by heart — it is a template for all similar proofs.",
      "Keep a mental checklist for rationalisation: monomial denominator (multiply by same surd) vs. binomial (multiply by conjugate).",
      "For exponent problems in competitions, converting to a common base (usually 2, 3, or 5) almost always works.",
    ],
  },
};
