import type { Book, BookChapter } from "@/lib/types";
import { cengageAlgebraCh1Problems } from "./cengage-algebra-ch1-problems";

/**
 * Study companion for the Cengage "Algebra" textbook.
 *
 * The content here is ORIGINAL concept commentary written in the app's own
 * voice — it retells each concept of a chapter (definitions, worked reasoning,
 * interactive checks) rather than reproducing the copyrighted book text or its
 * scanned pages. Practice problems are original questions written in the style
 * of the chapter's exercises and live in the central problem bank (tagged with
 * `book:cengage-algebra`) so they are fully filterable alongside everything
 * else.
 */

// ═══════════════════════════════════════════════════════════════════════════
// Chapter 1 — Set Theory and Real Number System
// ═══════════════════════════════════════════════════════════════════════════

const chapter1: BookChapter = {
  id: "cengage-algebra-set-theory",
  number: 1,
  title: "Set Theory and Real Number System",
  blurb:
    "The opening chapter builds the language of sets, then uses it to organise the real number line. Concept by concept it covers: set notation and the kinds of sets; subsets and power sets; the algebra of set operations with Venn diagrams and De Morgan's laws; counting overlapping groups by inclusion–exclusion; intervals as subsets of ℝ; linear inequalities and their sign rules; the ranges of x², 1/x and root expressions; solving polynomial and rational inequalities by the sign-scheme (wavy-curve) method, including repeated factors; and the modulus (absolute value) in full — its definition and graph, properties, equations, inequalities, and the triangle inequality.",
  practiceProblemIds: cengageAlgebraCh1Problems.map((p) => p.id),

  sections: [
    // ── 1 · Sets and how we describe them ──────────────────────────────────
    {
      id: "sets-and-notation",
      title: "Sets and how we describe them",
      blocks: [
        {
          kind: "prose",
          content:
            "A **set** is a well-defined collection of distinct objects, called its **elements** or **members**. 'Well-defined' is the load-bearing word: for any object, there must be an unambiguous yes/no answer to the question *is it in the set?* 'The set of tall people' is not well-defined; 'the set of people over 180 cm' is.\n\nWe write $x \\in A$ for '$x$ is an element of $A$', and $x \\notin A$ for '$x$ is not'. Elements are distinct — a set never lists the same object twice — and unordered, so $\\{1, 2, 3\\}$ and $\\{3, 1, 2\\}$ are the *same* set.",
        },
        {
          kind: "prose",
          heading: "Two ways to write a set",
          content:
            "**Roster (tabular) form** lists the elements between braces: $A = \\{1, 3, 5, 7, 9\\}$. For an obvious infinite pattern we use dots: $\\mathbb{N} = \\{1, 2, 3, \\ldots\\}$.\n\n**Set-builder form** states the property that defines membership: $A = \\{x : x \\text{ is an odd number},\\; x < 10\\}$. Read the colon (or a vertical bar $\\mid$) as 'such that'. Both forms above describe the same set.",
        },
        {
          kind: "callout",
          variant: "definition",
          title: "The standard number sets",
          content:
            "$\\mathbb{N}$ — natural numbers $\\{1, 2, 3, \\ldots\\}$\n$\\mathbb{Z}$ — integers $\\{\\ldots, -2, -1, 0, 1, 2, \\ldots\\}$\n$\\mathbb{Q}$ — rationals $\\{p/q : p, q \\in \\mathbb{Z},\\; q \\neq 0\\}$\n$\\mathbb{R}$ — real numbers\n\nWe also write $\\mathbb{Z}^+, \\mathbb{Q}^+, \\mathbb{R}^+$ for the positive members of each. These nest neatly: $\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R}$.",
        },
        {
          kind: "check",
          id: "cga-c-1a",
          prompt:
            "Write $\\{x : x \\in \\mathbb{N},\\; x \\text{ is a factor of } 12\\}$ in roster form and give its number of elements.",
          format: "numeric",
          answer: "6",
          hint: "List every natural number that divides 12 exactly.",
          explanation:
            "The factors of 12 are $1, 2, 3, 4, 6, 12$, so the set is $\\{1, 2, 3, 4, 6, 12\\}$ with 6 elements.",
        },
      ],
    },

    // ── 2 · Types of sets ───────────────────────────────────────────────────
    {
      id: "types-of-sets",
      title: "Types of sets",
      blocks: [
        {
          kind: "prose",
          content:
            "Sets are classified by how many elements they hold and by how they relate to one another.\n\n- **Finite set** — its elements can be counted and the count stops, e.g. $\\{a, e, i, o, u\\}$.\n- **Infinite set** — the counting never stops, e.g. $\\mathbb{N}$ or the set of points on a line.\n- **Empty (null / void) set** — has no elements at all, written $\\emptyset$ or $\\{\\}$.\n- **Singleton** — exactly one element, e.g. $\\{7\\}$.\n- **Equal sets** — $A = B$ precisely when they have exactly the same elements.",
        },
        {
          kind: "callout",
          variant: "trap",
          title: "$\\{0\\}$ and $\\{\\emptyset\\}$ are NOT empty",
          content:
            "The empty set contains nothing. But $\\{0\\}$ contains one element (the number $0$), and $\\{\\emptyset\\}$ contains one element (the empty set itself). Both are singletons, not empty sets.",
        },
        {
          kind: "prose",
          heading: "Cardinality",
          content:
            "The **cardinal number** of a finite set $A$, written $|A|$ or $n(A)$, is the number of elements in $A$. By convention $|\\emptyset| = 0$. Cardinality is the quantity every counting formula in this chapter is ultimately about.",
        },
        {
          kind: "check",
          id: "cga-c-2a",
          prompt:
            "Which of these is a null set?\n(i) $\\{x : x \\in \\mathbb{N},\\; 3 < x < 4\\}$  (ii) $\\{0\\}$  (iii) $\\{x : x^2 = 9,\\; x \\text{ is even}\\}$\nList all that are empty (e.g. 'i, iii').",
          format: "text",
          answer: "i, iii",
          acceptedAnswers: ["i, iii", "i,iii", "(i) and (iii)", "i and iii"],
          hint: "A set is null only if genuinely nothing satisfies the property.",
          explanation:
            "(i) No natural number lies strictly between 3 and 4 — empty. (ii) $\\{0\\}$ has one element — not empty. (iii) $x^2 = 9$ gives $x = \\pm 3$, neither even — empty. So (i) and (iii).",
        },
      ],
    },

    // ── 3 · Subsets, power sets, universal set ──────────────────────────────
    {
      id: "subsets-power-sets",
      title: "Subsets, power sets and the universal set",
      blocks: [
        {
          kind: "prose",
          content:
            "$A$ is a **subset** of $B$, written $A \\subseteq B$, when every element of $A$ is also in $B$. Two immediate facts: every set is a subset of itself, and $\\emptyset$ is a subset of *every* set.\n\n$A$ is a **proper subset**, written $A \\subset B$, when $A \\subseteq B$ but $A \\neq B$ — so $B$ has at least one element that $A$ lacks. The mirror image is the **superset**: $B \\supseteq A$ means the same as $A \\subseteq B$.",
        },
        {
          kind: "callout",
          variant: "warning",
          title: "$\\subset$ vs $\\subseteq$ — and 'element' vs 'subset'",
          content:
            "Keep two distinctions crisp. First, $\\subseteq$ allows equality while $\\subset$ forbids it. Second, membership ($\\in$) and containment ($\\subseteq$) are different relations: for $A = \\{1, 2\\}$ we have $1 \\in A$ and $\\{1\\} \\subseteq A$, but $1 \\subseteq A$ and $\\{1\\} \\in A$ are both wrong.",
        },
        {
          kind: "prose",
          heading: "Counting subsets and the power set",
          content:
            "Building a subset means deciding, for each element, 'in or out' — two choices per element. So a set with $n$ elements has exactly $2^n$ subsets. Of these, $2^n - 1$ are proper (all but the set itself).\n\nThe **power set** $\\mathcal{P}(A)$ is the set whose elements are *all* the subsets of $A$. Hence $|\\mathcal{P}(A)| = 2^{|A|}$. For example $\\mathcal{P}(\\{1, 2\\}) = \\{\\emptyset, \\{1\\}, \\{2\\}, \\{1, 2\\}\\}$.",
        },
        {
          kind: "prose",
          heading: "The universal set",
          content:
            "In any one discussion we fix a **universal set** $U$ that contains every object under consideration; all the sets in that discussion are subsets of $U$. The universal set is what makes 'complement' meaningful — the complement of $A$ is everything in $U$ that is not in $A$.",
        },
        {
          kind: "check",
          id: "cga-c-3a",
          prompt:
            "A set has $63$ proper subsets. How many elements does it have?",
          format: "numeric",
          answer: "6",
          hint: "Proper subsets number $2^n - 1$. Solve $2^n - 1 = 63$.",
          explanation:
            "$2^n - 1 = 63 \\Rightarrow 2^n = 64 = 2^6$, so $n = 6$.",
        },
        {
          kind: "check",
          id: "cga-c-3b",
          prompt:
            "True or false: for $A = \\{1, \\{2\\}\\}$, the statement $\\{2\\} \\subseteq A$ is correct.",
          format: "text",
          answer: "false",
          acceptedAnswers: ["false", "False", "FALSE", "no", "No"],
          hint: "For $\\{2\\} \\subseteq A$ we would need $2 \\in A$. Is it?",
          explanation:
            "$A$'s elements are $1$ and the set $\\{2\\}$. The number $2$ is not an element of $A$, so $\\{2\\} \\subseteq A$ is false. However $\\{2\\} \\in A$ is true, and $\\{\\{2\\}\\} \\subseteq A$ is true.",
        },
      ],
    },

    // ── 4 · Operations on sets & Venn diagrams ──────────────────────────────
    {
      id: "operations-on-sets",
      title: "Operations on sets, Venn diagrams & De Morgan's laws",
      blocks: [
        {
          kind: "prose",
          content:
            "Fix a universal set $U$ and take $A, B \\subseteq U$.\n\n- **Union** $A \\cup B = \\{x : x \\in A \\text{ or } x \\in B\\}$ — in at least one.\n- **Intersection** $A \\cap B = \\{x : x \\in A \\text{ and } x \\in B\\}$ — in both.\n- **Complement** $A' = \\{x \\in U : x \\notin A\\}$ — everything outside $A$.\n- **Difference** $A - B = \\{x : x \\in A,\\; x \\notin B\\}$ — in $A$ only. Note $A - B = A \\cap B'$.\n- **Symmetric difference** $A \\triangle B = (A - B) \\cup (B - A)$ — in exactly one of the two.\n\nTwo sets are **disjoint** when $A \\cap B = \\emptyset$.",
        },
        {
          kind: "diagram",
          diagram: {
            svg: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" width="320" height="200"><rect x="5" y="5" width="310" height="190" rx="8" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="298" y="22" font-size="12" fill="currentColor" font-style="italic">U</text><clipPath id="cgaA"><circle cx="128" cy="100" r="62"/></clipPath><circle cx="190" cy="100" r="62" clip-path="url(#cgaA)" fill="currentColor" fill-opacity="0.18"/><circle cx="128" cy="100" r="62" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="190" cy="100" r="62" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="96" y="105" font-size="16" fill="currentColor" font-weight="bold">A</text><text x="214" y="105" font-size="16" fill="currentColor" font-weight="bold">B</text><text x="128" y="185" font-size="11" fill="currentColor" text-anchor="middle">Shaded region: A ∩ B</text></svg>`,
            alt: "Venn diagram of two overlapping circles A and B inside a rectangle U, with the lens-shaped overlap A intersect B shaded.",
          },
        },
        {
          kind: "callout",
          variant: "definition",
          title: "De Morgan's laws",
          content:
            "$$(A \\cup B)' = A' \\cap B' \\qquad (A \\cap B)' = A' \\cup B'$$\nThe complement of a union is the intersection of complements, and vice versa. Complementing flips $\\cup$ and $\\cap$ into each other.",
        },
        {
          kind: "callout",
          variant: "tip",
          title: "Identities worth recognising on sight",
          content:
            "$A \\cup A' = U$, $\\;A \\cap A' = \\emptyset$, $\\;(A')' = A$\n$A \\cup \\emptyset = A$, $\\;A \\cap U = A$\n$A - B = A \\cap B'$\nDistributive: $A \\cap (B \\cup C) = (A \\cap B) \\cup (A \\cap C)$ and $A \\cup (B \\cap C) = (A \\cup B) \\cap (A \\cup C)$.",
        },
        {
          kind: "check",
          id: "cga-c-4a",
          prompt:
            "If $A = \\{1,2,3,4,5,6\\}$ and $B = \\{2,4,6,8\\}$, what is $|A - B|$?",
          format: "numeric",
          answer: "3",
          hint: "$A - B$ keeps the elements of $A$ that are not in $B$.",
          explanation:
            "$A - B = \\{1, 3, 5\\}$ (drop $2, 4, 6$ which lie in $B$; $8 \\notin A$ anyway). So $|A - B| = 3$.",
        },
        {
          kind: "check",
          id: "cga-c-4b",
          prompt:
            "Simplify $(A \\cap B)' \\cup B$ for sets inside a universal set $U$. (Answer with $U$, $A'$, $B$, or a simple expression.)",
          format: "text",
          answer: "U",
          acceptedAnswers: ["U", "u", "the universal set"],
          hint: "Apply De Morgan to $(A \\cap B)'$, then use the distributive law with the extra $\\cup B$.",
          explanation:
            "$(A \\cap B)' = A' \\cup B'$, so the expression is $A' \\cup B' \\cup B = A' \\cup (B' \\cup B) = A' \\cup U = U$.",
        },
        {
          kind: "example",
          title: "Reading a condition on operations",
          statement:
            "For two sets $A$ and $B$, suppose $A \\cap B = A \\cup B$. What must be true of $A$ and $B$?",
          approach:
            "The intersection is always a subset of the union. Forcing them equal squeezes both squarely onto each other.",
          solution:
            "In general $A \\cap B \\subseteq A \\subseteq A \\cup B$ and likewise for $B$. If $A \\cap B = A \\cup B$, every one of these containments must be an equality, so $A = A \\cap B = A \\cup B = B$. Hence $A = B$.",
        },
      ],
    },

    // ── 5 · Inclusion–exclusion ─────────────────────────────────────────────
    {
      id: "inclusion-exclusion",
      title: "Counting overlapping groups (inclusion–exclusion)",
      blocks: [
        {
          kind: "prose",
          content:
            "When you add $|A| + |B|$, every element in the overlap is counted twice. Subtracting the overlap once fixes it:\n$$|A \\cup B| = |A| + |B| - |A \\cap B|.$$\nFor three sets the corrections cascade — subtract the three pairwise overlaps, then add back the triple overlap that you removed one time too many:\n$$|A \\cup B \\cup C| = |A|+|B|+|C| - |A\\cap B| - |B\\cap C| - |A\\cap C| + |A\\cap B\\cap C|.$$",
        },
        {
          kind: "callout",
          variant: "tip",
          title: "Two workhorse rearrangements",
          content:
            "Complement count: $|\\text{neither}| = |U| - |A \\cup B|$.\nSolve for an unknown overlap: $|A \\cap B| = |A| + |B| - |A \\cup B|$.\nFor survey problems, sketch the Venn diagram and fill the innermost region (the triple overlap) first, working outward — every other region is then a subtraction.",
        },
        {
          kind: "check",
          id: "cga-c-5a",
          prompt:
            "In a group of $60$ people, $35$ like tea and $30$ like coffee; $12$ like neither. How many like both?",
          format: "numeric",
          answer: "17",
          hint: "First $|T \\cup C| = 60 - 12$, then $|T \\cap C| = |T| + |C| - |T \\cup C|$.",
          explanation:
            "$|T \\cup C| = 60 - 12 = 48$. Then $|T \\cap C| = 35 + 30 - 48 = 17$.",
        },
        {
          kind: "example",
          title: "Three-set survey, region by region",
          statement:
            "In a class of $50$ students, $17$ study French, $13$ study English, $15$ study Sanskrit; $9$ study French and English, $4$ study English and Sanskrit, $5$ study French and Sanskrit, and $3$ study all three. How many study exactly one language?",
          approach:
            "Fill the Venn diagram from the centre out. The triple overlap is $3$. Each pairwise-only region is a pairwise total minus the centre. Each single-only region is the language total minus the two adjoining pairwise totals plus the centre (which was over-removed).",
          solution:
            "French only $= 17 - 9 - 5 + 3 = 6$. English only $= 13 - 9 - 4 + 3 = 3$. Sanskrit only $= 15 - 4 - 5 + 3 = 9$. Exactly one language $= 6 + 3 + 9 = 18$.",
        },
      ],
    },

    // ── 6 · Intervals ───────────────────────────────────────────────────────
    {
      id: "intervals",
      title: "Intervals as subsets of ℝ",
      blocks: [
        {
          kind: "prose",
          content:
            "An **interval** is a connected chunk of the real line — a subset of $\\mathbb{R}$ containing every real number between its endpoints. For $a < b$:\n\n- **Open** $(a, b) = \\{x : a < x < b\\}$ — endpoints excluded.\n- **Closed** $[a, b] = \\{x : a \\leq x \\leq b\\}$ — endpoints included.\n- **Half-open** $[a, b) = \\{x : a \\leq x < b\\}$ and $(a, b] = \\{x : a < x \\leq b\\}$.\n- **Unbounded** $(-\\infty, a]$, $[a, \\infty)$, and so on.\n\nA square bracket $[\\;]$ **includes** the endpoint; a parenthesis $(\\;)$ **excludes** it. Infinity is never a real number, so it always takes a parenthesis. The **length** of $(a,b)$, $[a,b]$, etc. is $b - a$.",
        },
        {
          kind: "diagram",
          diagram: {
            svg: `<svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" width="320" height="120"><line x1="20" y1="40" x2="300" y2="40" stroke="currentColor" stroke-width="1.2"/><circle cx="100" cy="40" r="5" fill="white" stroke="currentColor" stroke-width="1.6"/><circle cx="220" cy="40" r="5" fill="white" stroke="currentColor" stroke-width="1.6"/><line x1="100" y1="40" x2="220" y2="40" stroke="currentColor" stroke-width="3.5"/><text x="96" y="62" font-size="12" fill="currentColor">a</text><text x="216" y="62" font-size="12" fill="currentColor">b</text><text x="160" y="22" font-size="12" fill="currentColor" text-anchor="middle" font-style="italic">(a, b)</text><line x1="20" y1="95" x2="300" y2="95" stroke="currentColor" stroke-width="1.2"/><circle cx="100" cy="95" r="5" fill="currentColor"/><circle cx="220" cy="95" r="5" fill="currentColor"/><line x1="100" y1="95" x2="220" y2="95" stroke="currentColor" stroke-width="3.5"/><text x="96" y="117" font-size="12" fill="currentColor">a</text><text x="216" y="117" font-size="12" fill="currentColor">b</text><text x="160" y="79" font-size="12" fill="currentColor" text-anchor="middle" font-style="italic">[a, b]</text></svg>`,
            alt: "Number-line pictures of the open interval (a,b) drawn with hollow endpoints and the closed interval [a,b] drawn with filled endpoints.",
          },
        },
        {
          kind: "check",
          id: "cga-c-6a",
          prompt:
            "Write $\\{x \\in \\mathbb{R} : -3 \\leq x \\leq 7\\}$ in interval notation.",
          format: "text",
          answer: "[-3, 7]",
          acceptedAnswers: ["[-3, 7]", "[-3,7]"],
          hint: "Both inequalities are $\\leq$ (inclusive), so both endpoints get square brackets.",
          explanation:
            "Both endpoints are included, so the interval is the closed interval $[-3, 7]$.",
        },
      ],
    },

    // ── 7 · Linear inequalities ─────────────────────────────────────────────
    {
      id: "linear-inequalities",
      title: "Linear inequalities and their properties",
      blocks: [
        {
          kind: "prose",
          content:
            "An **inequality** compares two quantities with $<$, $\\leq$, $>$ or $\\geq$. The rules for manipulating one mirror those for equations, with a single crucial exception about signs.\n\n- Adding or subtracting the same quantity keeps the inequality: $a < b \\Rightarrow a \\pm k < b \\pm k$.\n- Multiplying/dividing by a **positive** number keeps the direction: $a < b,\\; k > 0 \\Rightarrow ka < kb$.\n- Multiplying/dividing by a **negative** number **reverses** it: $a < b,\\; k < 0 \\Rightarrow ka > kb$.\n- **Transitivity:** $a < b$ and $b < c \\Rightarrow a < c$.\n\nSolving a linear inequality means isolating $x$ using these rules and writing the answer as an interval.",
        },
        {
          kind: "callout",
          variant: "trap",
          title: "The sign-flip rule",
          content:
            "The most common slip is forgetting to reverse the inequality when dividing by a negative. For $7 - 4x > -17$: subtract $7$ to get $-4x > -24$, then divide by $-4$ **and flip**: $x < 6$.",
        },
        {
          kind: "callout",
          variant: "tip",
          title: "A useful bound",
          content:
            "For $a > 0$, $a + \\dfrac{1}{a} \\geq 2$ (equality at $a = 1$); for $a < 0$, $a + \\dfrac{1}{a} \\leq -2$ (equality at $a = -1$). These appear often when bounding expressions.",
        },
        {
          kind: "example",
          title: "A double inequality",
          statement: "Solve $-1 \\leq \\dfrac{2x + 3}{5} \\leq 3$.",
          approach:
            "Clear the denominator by multiplying all three parts by $5$ (positive, so the directions hold), then isolate $x$.",
          solution:
            "$-5 \\leq 2x + 3 \\leq 15 \\Rightarrow -8 \\leq 2x \\leq 12 \\Rightarrow -4 \\leq x \\leq 6$. Solution: $[-4, 6]$.",
        },
        {
          kind: "check",
          id: "cga-c-lin1",
          prompt:
            "Solve $2x + 17 < 3$ and give the answer in interval notation.",
          format: "text",
          answer: "(-inf, -7)",
          acceptedAnswers: ["(-inf, -7)", "(-∞, -7)", "(-infinity, -7)", "x < -7", "(-∞,-7)"],
          hint: "Subtract 17, then divide by 2 (positive, so no flip).",
          explanation:
            "$2x < 3 - 17 = -14 \\Rightarrow x < -7$, i.e. $(-\\infty, -7)$.",
        },
      ],
    },

    // ── 8 · Ranges of x² and root expressions ───────────────────────────────
    {
      id: "ranges-of-expressions",
      title: "Ranges of x², 1/x and root expressions",
      blocks: [
        {
          kind: "prose",
          content:
            "When $x$ is restricted to an interval, expressions built from it inherit their own range. Two facts drive most of these problems.\n\n**Squaring is not monotonic.** From $a < b$ you may *not* conclude $a^2 < b^2$ — that only holds when $a$ is farther from $0$ has smaller absolute value. On an interval, find the range of $x^2$ by checking whether the interval contains $0$:\n- if $0$ is inside, the minimum of $x^2$ is $0$;\n- otherwise the minimum is at the endpoint nearest $0$;\n- the maximum is always at the endpoint farthest from $0$.\n\n**Reciprocals reverse order within a fixed sign.** Combined with $x^2 \\geq 0$, this lets you bound expressions like $\\dfrac{1}{x^2 + 2}$: since $x^2 + 2 \\geq 2$, the fraction lies in $\\left(0, \\tfrac12\\right]$.",
        },
        {
          kind: "callout",
          variant: "definition",
          title: "Handy square templates",
          content:
            "$x^2 \\leq a^2 \\iff x \\in [-a, a]$\n$x^2 \\geq a^2 \\iff x \\in (-\\infty, -a] \\cup [a, \\infty)$\nFor a root, complete the square first: $\\sqrt{x^2 - 2x + 10} = \\sqrt{(x-1)^2 + 9} \\geq 3$, so its range is $[3, \\infty)$.",
        },
        {
          kind: "example",
          title: "Range of a square on a mixed interval",
          statement: "If $x \\in (-2, 3]$, find the range of $x^2$.",
          approach:
            "Check whether $0$ lies in the interval (it does), then compare the endpoints' distances from $0$.",
          solution:
            "Since $0 \\in (-2, 3]$, the minimum of $x^2$ is $0$ (attained at $x=0$). The farthest endpoint from $0$ is $x = 3$, giving $x^2 = 9$. So $x^2 \\in [0, 9]$.",
        },
        {
          kind: "check",
          id: "cga-c-rng1",
          prompt:
            "If $x \\in [-5, -1]$, find the range of $x^2$ in interval notation.",
          format: "text",
          answer: "[1, 25]",
          acceptedAnswers: ["[1, 25]", "[1,25]"],
          hint: "On $[-5,-1]$ every $x$ is negative; $x^2$ is largest where $|x|$ is largest.",
          explanation:
            "Nearest to $0$ is $x=-1$ ($x^2=1$), farthest is $x=-5$ ($x^2=25$). So $x^2 \\in [1, 25]$.",
        },
      ],
    },

    // ── 9 · Inequalities via the sign scheme ────────────────────────────────
    {
      id: "sign-scheme-inequalities",
      title: "Polynomial & rational inequalities (the sign-scheme method)",
      blocks: [
        {
          kind: "prose",
          content:
            "To solve an inequality such as $F(x) > 0$ where $F$ is a product/quotient of linear factors, use the **sign scheme** (also called the *wavy-curve* method):\n\n1. Move everything to one side so you compare with $0$, and **factorise** into linear factors. Never cross-multiply by a variable expression — its sign is unknown.\n2. Mark the **critical points** (zeros of numerator and denominator) on a number line. They split it into intervals.\n3. In the rightmost interval every factor is positive, so $F > 0$ there. As you cross each simple root, the sign flips. (A repeated factor of even multiplicity does *not* flip the sign.)\n4. Read off the intervals with the sign you want. Include numerator roots when the inequality is $\\leq$/$\\geq$; **always exclude** any root of the denominator.",
        },
        {
          kind: "callout",
          variant: "definition",
          title: "Frequently used templates",
          content:
            "$(x-a)(x-b) < 0 \\;(a<b) \\Rightarrow x \\in (a, b)$\n$(x-a)(x-b) > 0 \\;(a<b) \\Rightarrow x \\in (-\\infty, a) \\cup (b, \\infty)$\n$x^2 \\leq a^2 \\Rightarrow x \\in [-a, a]$\n$x^2 \\geq a^2 \\Rightarrow x \\in (-\\infty, -a] \\cup [a, \\infty)$",
        },
        {
          kind: "callout",
          variant: "trap",
          title: "Do not multiply by the denominator",
          content:
            "To solve $\\frac{2}{x} < 3$ you cannot multiply both sides by $x$ — if $x < 0$ the inequality flips. Instead bring to one side: $\\frac{2}{x} - 3 < 0 \\Rightarrow \\frac{2 - 3x}{x} < 0$, and run the sign scheme on that.",
        },
        {
          kind: "check",
          id: "cga-c-7a",
          prompt:
            "Solve $(x + 1)(x - 4) < 0$. Give the solution in interval notation.",
          format: "text",
          answer: "(-1, 4)",
          acceptedAnswers: ["(-1, 4)", "(-1,4)"],
          hint: "A product of two linear factors is negative strictly between its roots.",
          explanation:
            "Roots at $-1$ and $4$; the product is negative between them, so $x \\in (-1, 4)$.",
        },
        {
          kind: "example",
          title: "A rational inequality end to end",
          statement: "Solve $\\dfrac{x - 2}{x + 3} \\geq 0$.",
          approach:
            "Critical points are the numerator root $x = 2$ (allowed, since $\\geq$) and the denominator root $x = -3$ (forbidden). Build the sign scheme across $-3$ and $2$.",
          solution:
            "Signs of $\\frac{x-2}{x+3}$: on $(-\\infty, -3)$ both factors negative $\\Rightarrow +$; on $(-3, 2)$ the top is negative, bottom positive $\\Rightarrow -$; on $(2, \\infty) \\Rightarrow +$. We want $\\geq 0$, so take the $+$ intervals, include $x = 2$, exclude $x = -3$: $x \\in (-\\infty, -3) \\cup [2, \\infty)$.",
        },
        {
          kind: "callout",
          variant: "tip",
          title: "Repeated factors: even vs odd powers",
          content:
            "When a factor is raised to a power, only its **parity** matters for the sign. Crossing a root of **odd** multiplicity flips the sign; crossing a root of **even** multiplicity does not (the curve just touches the axis). An even-power root is still an equality point for $\\leq$/$\\geq$, so remember to include it as an isolated solution.",
        },
        {
          kind: "example",
          title: "Sign scheme with repeated roots",
          statement: "Solve $x(x+2)^2(x-1)^5(2x-3)(x-3)^4 \\geq 0$.",
          approach:
            "List the critical points and their multiplicities. The sign flips only at odd-power roots ($x=0,1,\\tfrac32$); it is unchanged at even-power roots ($x=-2,3$).",
          solution:
            "Starting from the far right ($x>3$) the product is positive. Flipping only at $0, 1, \\tfrac32$ gives $\\geq 0$ on $[0,1] \\cup [\\tfrac32, \\infty)$. The even-power roots $x=-2$ and $x=3$ are isolated zeros; $x=3$ already lies in $[\\tfrac32,\\infty)$, and $x=-2$ must be added on its own. Solution: $\\{-2\\} \\cup [0, 1] \\cup [\\tfrac32, \\infty)$.",
        },
      ],
    },

    // ── 8 · Reciprocals across an inequality ────────────────────────────────
    {
      id: "reciprocals",
      title: "How reciprocals behave in an inequality",
      blocks: [
        {
          kind: "prose",
          content:
            "Taking reciprocals of an inequality is delicate because $1/x$ reverses order only when the quantities keep a fixed sign.\n\n- If $a$ and $b$ have the **same sign**, then $a < b \\Rightarrow \\dfrac{1}{a} > \\dfrac{1}{b}$ (the inequality reverses). For $2 < 5$ we get $\\tfrac12 > \\tfrac15$.\n- If $a < 0 < b$ (**opposite signs**), reciprocating does *not* simply reverse the inequality, because $1/x$ jumps from $-\\infty$ to $+\\infty$ across $0$. Split the range at $0$ and handle each side separately.\n\nSo from $2 < x < 5$ (all positive) we get $\\dfrac15 < \\dfrac1x < \\dfrac12$; but from $x \\in (-1, 3)\\setminus\\{0\\}$ the reciprocal lands in $(-\\infty, -1) \\cup (\\tfrac13, \\infty)$.",
        },
        {
          kind: "check",
          id: "cga-c-8a",
          prompt:
            "Given $-6 < x < -2$, the reciprocal $\\frac{1}{x}$ lies in which interval? (Answer like '(-1/2, -1/6)'.)",
          format: "text",
          answer: "(-1/2, -1/6)",
          acceptedAnswers: ["(-1/2, -1/6)", "(-1/2,-1/6)"],
          hint: "Both bounds are negative (same sign), so reciprocating reverses the inequality.",
          explanation:
            "Both bounds are negative, so $-6 < x < -2 \\Rightarrow \\frac{1}{-6} > \\frac{1}{x} > \\frac{1}{-2}$, i.e. $-\\frac16 > \\frac1x > -\\frac12$. Thus $\\frac1x \\in \\left(-\\frac12, -\\frac16\\right)$.",
        },
      ],
    },

    // ── 9 · Modulus / absolute value ────────────────────────────────────────
    {
      id: "modulus",
      title: "The modulus (absolute value)",
      blocks: [
        {
          kind: "prose",
          content:
            "The **modulus** $|x|$ is the distance of $x$ from $0$ on the number line, so it is never negative:\n$$|x| = \\begin{cases} x, & x \\geq 0 \\\\ -x, & x < 0. \\end{cases}$$\nMore generally $|x - a|$ is the distance between $x$ and $a$. This distance picture is the fastest way to read off most modulus problems.",
        },
        {
          kind: "diagram",
          diagram: {
            svg: `<svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" width="320" height="150"><line x1="20" y1="120" x2="300" y2="120" stroke="currentColor" stroke-width="1.2"/><line x1="160" y1="120" x2="230" y2="120" stroke="currentColor" stroke-width="1.2" marker-end=""/><polyline points="60,120 160,20 260,120" fill="none" stroke="currentColor" stroke-width="2.2"/><line x1="160" y1="120" x2="160" y2="14" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3" opacity="0.5"/><text x="150" y="138" font-size="11" fill="currentColor">0</text><text x="55" y="138" font-size="11" fill="currentColor">-a</text><text x="255" y="138" font-size="11" fill="currentColor">a</text><text x="95" y="70" font-size="11" fill="currentColor" transform="rotate(-45 95 70)">y = -x</text><text x="205" y="70" font-size="11" fill="currentColor" transform="rotate(45 205 70)">y = x</text></svg>`,
            alt: "Graph of y = |x|: a V-shape with vertex at the origin, the left arm being y = -x and the right arm y = x.",
            caption: "The graph of $y = |x|$ is a V with its vertex at the origin.",
          },
        },
        {
          kind: "callout",
          variant: "definition",
          title: "Core properties",
          content:
            "$|x| \\geq 0$, and $|x| = 0 \\iff x = 0$\n$x^2 = |x|^2$ and $\\sqrt{x^2} = |x|$\n$|{-x}| = |x|$, $\\;|ab| = |a|\\,|b|$, $\\;\\left|\\frac{a}{b}\\right| = \\frac{|a|}{|b|}$\n**Triangle inequality:** $|x + y| \\leq |x| + |y|$, with equality when $x, y$ share a sign (or one is $0$).",
        },
        {
          kind: "callout",
          variant: "tip",
          title: "Solving modulus (in)equalities",
          content:
            "For $c > 0$:\n$|E| = c \\iff E = c$ or $E = -c$.\n$|E| < c \\iff -c < E < c$ (a single interval).\n$|E| > c \\iff E > c$ or $E < -c$ (splits outward).\nHere $E$ can be any expression, e.g. $2x - 1$ or $x^2 - x$.",
        },
        {
          kind: "check",
          id: "cga-c-9a",
          prompt:
            "Solve $|x + 2| \\leq 6$ and give the answer as an interval.",
          format: "text",
          answer: "[-8, 4]",
          acceptedAnswers: ["[-8, 4]", "[-8,4]"],
          hint: "$|E| \\leq c$ becomes the single chain $-c \\leq E \\leq c$.",
          explanation:
            "$|x+2| \\leq 6 \\iff -6 \\leq x + 2 \\leq 6 \\iff -8 \\leq x \\leq 4$, i.e. $[-8, 4]$.",
        },
        {
          kind: "check",
          id: "cga-c-9b",
          prompt:
            "How many real solutions does $|x - 4| = -2$ have?",
          format: "numeric",
          answer: "0",
          hint: "A modulus is never negative.",
          explanation:
            "$|x - 4| \\geq 0$ always, so it can never equal $-2$. There are $0$ solutions.",
        },
        {
          kind: "example",
          title: "A double-modulus inequality",
          statement: "Solve $\\big|\\,|x - 1| - 2\\,\\big| < 3$.",
          approach:
            "Peel the outer modulus first with the rule $|E| < c \\iff -c < E < c$, then handle the inner modulus.",
          solution:
            "Outer: $-3 < |x-1| - 2 < 3 \\Rightarrow -1 < |x-1| < 5$. Since $|x-1| \\geq 0$, the left half is automatic, leaving $|x-1| < 5 \\Rightarrow -5 < x - 1 < 5 \\Rightarrow -4 < x < 6$. Solution: $x \\in (-4, 6)$.",
        },
      ],
    },

    // ── 12 · Solving modulus equations ──────────────────────────────────────
    {
      id: "modulus-equations",
      title: "Solving equations with a modulus",
      blocks: [
        {
          kind: "prose",
          content:
            "There are three standard techniques, chosen by the shape of the equation.\n\n**1 · Direct case split.** $|E| = c$ (with $c \\geq 0$) means $E = c$ or $E = -c$. When the right-hand side contains $x$, keep only the roots that satisfy the sign assumption of each case (and any $\\text{RHS} \\geq 0$ requirement).\n\n**2 · Treat $|x|$ as one variable.** If the equation involves $x^2$ and $|x|$, use $x^2 = |x|^2$ and substitute $t = |x| \\geq 0$. Solve for $t$, discard negative roots, then recover $x = \\pm t$.\n\n**3 · Distance / sum of moduli.** An equation like $|x - a| + |x - b| = k$ is best read as 'total distance from $x$ to $a$ and to $b$ equals $k$'. If $k$ equals the gap $|a - b|$, every point between $a$ and $b$ works.",
        },
        {
          kind: "callout",
          variant: "warning",
          title: "Always check the domain of the right-hand side",
          content:
            "For $|3x - 2| = x$, the left side is $\\geq 0$, so any solution needs $x \\geq 0$. Solving the two cases gives $x = 1$ and $x = \\tfrac12$; both are non-negative, so both survive. Reject anything that violates the case's sign assumption.",
        },
        {
          kind: "example",
          title: "Modulus with x on both sides",
          statement: "Solve $x^2 - |x| - 2 = 0$.",
          approach: "Use $x^2 = |x|^2$ and let $t = |x| \\geq 0$.",
          solution:
            "$|x|^2 - |x| - 2 = 0 \\Rightarrow (|x| - 2)(|x| + 1) = 0$. Since $|x| \\geq 0$, reject $|x| = -1$; take $|x| = 2 \\Rightarrow x = \\pm 2$.",
        },
        {
          kind: "check",
          id: "cga-c-eq1",
          prompt:
            "Solve $|2x - 3| = 5$. Enter the sum of all solutions.",
          format: "numeric",
          answer: "3",
          hint: "$2x - 3 = \\pm 5$.",
          explanation:
            "$2x-3=5 \\Rightarrow x=4$; $2x-3=-5 \\Rightarrow x=-1$. Sum $= 4 + (-1) = 3$.",
        },
      ],
    },

    // ── 13 · Modulus of a sum & the triangle inequality ─────────────────────
    {
      id: "triangle-inequality",
      title: "Modulus of a sum and the triangle inequality",
      blocks: [
        {
          kind: "prose",
          content:
            "Modulus distributes over multiplication and division ($|ab| = |a||b|$, $\\left|\\tfrac{a}{b}\\right| = \\tfrac{|a|}{|b|}$) but **not** over addition. Instead we have the **triangle inequality**:\n$$|x + y| \\leq |x| + |y|,$$\nwith equality exactly when $x$ and $y$ share a sign (or one is $0$). The companion form $|x - y| \\leq |x| + |y|$ becomes an equality when $x$ and $y$ have *opposite* signs.\n\nThe quantity $\\dfrac{|x|}{x}$ is the **sign** of $x$: it equals $+1$ when $x > 0$ and $-1$ when $x < 0$. Sums of such terms take only finitely many values — a favourite exam device.",
        },
        {
          kind: "callout",
          variant: "tip",
          title: "Equality as a geometric condition",
          content:
            "Because $|x+y| = |x| + |y|$ requires $x$ and $y$ to point the same way, statements like $|\\sin\\theta + \\cos\\theta| = |\\sin\\theta| + |\\cos\\theta|$ force $\\sin\\theta$ and $\\cos\\theta$ to have the same sign — i.e. $\\theta$ in the 1st or 3rd quadrant.",
        },
        {
          kind: "example",
          title: "Minimising a sum of distances",
          statement: "Find the minimum of $|x - 5| + |x - 1|$ over all real $x$.",
          approach:
            "Read it as the total distance from $x$ to the points $1$ and $5$.",
          solution:
            "For any $x$ between $1$ and $5$, the two distances add up to the gap $5 - 1 = 4$; moving outside only increases the total. So the minimum value is $4$, attained for every $x \\in [1, 5]$.",
        },
        {
          kind: "check",
          id: "cga-c-tri1",
          prompt:
            "For nonzero reals $x, y$, list all possible values of $\\dfrac{|x|}{x} + \\dfrac{|y|}{y}$ (e.g. '-2, 0, 2').",
          format: "text",
          answer: "-2, 0, 2",
          acceptedAnswers: ["-2, 0, 2", "-2,0,2", "2, 0, -2", "0, 2, -2"],
          hint: "Each term is $+1$ or $-1$.",
          explanation:
            "Each of the two terms is $\\pm 1$, so the sum is $2$, $0$, or $-2$.",
        },
      ],
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════════
// Book
// ═══════════════════════════════════════════════════════════════════════════

export const cengageAlgebraBook: Book = {
  id: "cengage-algebra",
  title: "Algebra",
  author: "Cengage",
  description: "Concept-by-concept companion with worked examples and practice.",
  chapters: [chapter1],
};

/** All book problems, to be merged into the central problem bank. */
export const bookProblems = [...cengageAlgebraCh1Problems];
