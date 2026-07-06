import type { SubChapter } from "@/lib/types";

export const subIntro: SubChapter = {
  id: "sequences-intro",
  title: "Introduction to sequences and series",
  lesson: [
    {
      kind: "prose",
      heading: "1 · What is a sequence?",
      content:
        "A **sequence** is an ordered list of objects — most often numbers — in which the *position* of each object is fixed. Each object is a **term** (also called an element or member).\n\nA sequence differs from a set in two important ways:\n- **Order matters:** the sequence $1, 2, 3$ is different from $3, 2, 1$.\n- **Repetition is allowed:** the same value may appear at several positions, e.g. $2, 2, 1, 0, -1$.\n\nWe write a sequence as $a_1, a_2, a_3, \\ldots$ or compactly as $\\{a_n\\}$, where $a_n$ denotes the **$n$th term**. The total number of terms (which may be infinite) is called the **length** of the sequence.",
    },
    {
      kind: "callout",
      variant: "definition",
      title: "Finite vs infinite sequences",
      content:
        "A **finite sequence** has a definite last term. For example $(a, s, p, n)$ and $(0, 4, 3, 0, 1)$ are finite.\n\nAn **infinite sequence** never ends. For example the even natural numbers $(2, 4, 6, 8, \\ldots)$ continue forever. Notice that repetition and non-numeric objects are both allowed in a sequence.",
    },
    {
      kind: "prose",
      heading: "2 · Sequence, series and progression",
      content:
        "Three closely related words are easy to confuse:\n\n- A **sequence** is the ordered *list* itself: $a_1, a_2, a_3, \\ldots, a_n$.\n- A **series** is what you get when you *add* (or subtract) the terms of a sequence: $a_1 + a_2 + a_3 + \\cdots + a_n$. For example, $1 + 2 + 3 + \\cdots + n$ and $2 + 4 + 8 + 16 + \\cdots$ are series.\n- A **progression** is a sequence whose terms follow a definite *pattern* — a rule that lets us predict any term. Every progression is a sequence, but not every sequence is a progression.\n\nThe sum of the first $n$ terms of a series is written $S_n = a_1 + a_2 + \\cdots + a_n$.",
    },
    {
      kind: "callout",
      variant: "trap",
      title: "Sequence ≠ series",
      content:
        "A sequence is a *list*; a series is a *sum*. The list $2, 4, 8, 16$ is a sequence, while $2 + 4 + 8 + 16$ is the corresponding series. Keep $a_n$ (the $n$th term) distinct from $S_n$ (the sum of the first $n$ terms) — mixing them up is one of the most common mistakes in this whole topic.",
    },
    {
      kind: "prose",
      heading: "3 · Explicit (nth-term) definitions",
      content:
        "Many sequences follow a pattern that can be captured by an algebraic formula for the general term $a_n$ (or $t_n$). Such a formula is called an **explicit** or **closed-form** definition: substitute $n = 1, 2, 3, \\ldots$ to generate the terms directly, without needing any earlier term.\n\nFor example, the even natural numbers $2, 4, 6, 8, \\ldots$ have general term $a_n = 2n$. To find the 50th term we simply put $n = 50$: $a_{50} = 2 \\cdot 50 = 100$ — no need to list the first 49 terms.",
    },
    {
      kind: "example",
      title: "Illustration 5.1 — generating terms from an explicit formula",
      statement:
        "Write down the sequence whose $n$th term is (i) $t_n = \\dfrac{2^n}{n}$ and (ii) $t_n = \\dfrac{3 + (-1)^n}{3^n}$.",
      approach:
        "Substitute $n = 1, 2, 3, 4, \\ldots$ into the formula and simplify each value.",
      solution:
        "(i) With $t_n = \\dfrac{2^n}{n}$:\n$$t_1 = \\frac{2}{1} = 2, \\quad t_2 = \\frac{4}{2} = 2, \\quad t_3 = \\frac{8}{3}, \\quad t_4 = \\frac{16}{4} = 4.$$\nSo the sequence is $2, \\ 2, \\ \\dfrac{8}{3}, \\ 4, \\ \\ldots$\n\n(ii) With $t_n = \\dfrac{3 + (-1)^n}{3^n}$, note $(-1)^n = -1$ for odd $n$ and $+1$ for even $n$:\n$$t_1 = \\frac{3-1}{3} = \\frac{2}{3}, \\quad t_2 = \\frac{3+1}{9} = \\frac{4}{9}, \\quad t_3 = \\frac{3-1}{27} = \\frac{2}{27}, \\quad t_4 = \\frac{3+1}{81} = \\frac{4}{81}.$$\nSo the sequence is $\\dfrac{2}{3}, \\ \\dfrac{4}{9}, \\ \\dfrac{2}{27}, \\ \\dfrac{4}{81}, \\ \\ldots$",
    },
    {
      kind: "callout",
      variant: "tip",
      title: "Handle (-1)ⁿ by parity",
      content:
        "Whenever a formula contains $(-1)^n$, split into cases: $(-1)^n = -1$ when $n$ is odd and $(-1)^n = +1$ when $n$ is even. A piecewise (case-based) rule is just another explicit definition — evaluate the branch that matches each $n$.",
    },
    {
      kind: "example",
      title: "Illustration 5.2 — a piecewise-defined sequence",
      statement:
        "Find the sequence defined by $a_n = \\dfrac{1}{n}$ when $n$ is odd and $a_n = -\\dfrac{1}{n}$ when $n$ is even.",
      approach:
        "Use the odd-$n$ branch for $n = 1, 3, 5, \\ldots$ and the even-$n$ branch for $n = 2, 4, 6, \\ldots$, then interleave the results in order.",
      solution:
        "Odd terms: $a_1 = 1, \\ a_3 = \\dfrac{1}{3}, \\ a_5 = \\dfrac{1}{5}, \\ \\ldots$\n\nEven terms: $a_2 = -\\dfrac{1}{2}, \\ a_4 = -\\dfrac{1}{4}, \\ a_6 = -\\dfrac{1}{6}, \\ \\ldots$\n\nInterleaving by position gives the sequence\n$$1, \\ -\\frac{1}{2}, \\ \\frac{1}{3}, \\ -\\frac{1}{4}, \\ \\frac{1}{5}, \\ -\\frac{1}{6}, \\ \\ldots$$",
    },
    {
      kind: "prose",
      heading: "4 · Recursive definitions",
      content:
        "Instead of a closed formula, a sequence can be defined **recursively**: you are given one or more starting terms plus a rule (a **recurrence**) that produces the next term from earlier ones.\n\nFor example, $a_1 = 3$ and $a_{n+1} = 2a_n - 1$ means each term is one less than twice the previous term. To find a specific term you must compute the terms in order, one at a time, until you reach it.",
    },
    {
      kind: "callout",
      variant: "definition",
      title: "Explicit vs recursive",
      content:
        "**Explicit:** $a_n$ is given directly as a formula in $n$ (e.g. $a_n = 2n$). You can jump straight to any term.\n\n**Recursive:** $a_n$ is given in terms of previous term(s) plus initial value(s) (e.g. $a_1 = 2$, $a_n = a_{n-1} - 1$). You must build up term by term. A recurrence needs as many starting terms as it 'looks back' — a rule using $a_{n-1}$ and $a_{n-2}$ needs *two* seeds.",
    },
    {
      kind: "example",
      title: "Illustration 5.3 — a first-order recurrence",
      statement:
        "Write the first three terms of the sequence defined by $a_1 = 2$ and $a_{n+1} = \\dfrac{2a_n + 3}{a_n + 2}$.",
      approach:
        "Put $n = 1$ to get $a_2$ from $a_1$, then put $n = 2$ to get $a_3$ from $a_2$.",
      solution:
        "Put $n = 1$:\n$$a_2 = \\frac{2a_1 + 3}{a_1 + 2} = \\frac{2(2) + 3}{2 + 2} = \\frac{7}{4}.$$\nPut $n = 2$:\n$$a_3 = \\frac{2a_2 + 3}{a_2 + 2} = \\frac{2\\left(\\frac{7}{4}\\right) + 3}{\\frac{7}{4} + 2} = \\frac{\\frac{7}{2} + 3}{\\frac{15}{4}} = \\frac{\\frac{13}{2}}{\\frac{15}{4}} = \\frac{26}{15}.$$\nSo the first three terms are $2, \\ \\dfrac{7}{4}, \\ \\dfrac{26}{15}$.",
    },
    {
      kind: "example",
      title: "Illustration 5.4 — the Fibonacci sequence",
      statement:
        "The Fibonacci sequence is defined by $a_1 = a_2 = 1$ and $a_n = a_{n-1} + a_{n-2}$ for $n > 2$. Find $\\dfrac{a_{n+1}}{a_n}$ for $n = 5$.",
      approach:
        "This recurrence looks back two terms, so it needs two seeds. Build terms up to $a_6$, then form the required ratio $a_6/a_5$.",
      solution:
        "Starting from $a_1 = a_2 = 1$:\n$$a_3 = a_2 + a_1 = 1 + 1 = 2,$$\n$$a_4 = a_3 + a_2 = 2 + 1 = 3,$$\n$$a_5 = a_4 + a_3 = 3 + 2 = 5,$$\n$$a_6 = a_5 + a_4 = 5 + 3 = 8.$$\nFor $n = 5$: $\\dfrac{a_{n+1}}{a_n} = \\dfrac{a_6}{a_5} = \\dfrac{8}{5}$.",
    },
    {
      kind: "callout",
      variant: "tip",
      title: "Periodic recurrences — exploit the cycle",
      content:
        "Some recurrences repeat after a fixed number of steps. When the terms cycle with period $p$, every block of $p$ consecutive terms behaves identically, and their sum is often constant. Reducing an index modulo $p$ (e.g. $S_{999} = S_{6 \\times 166 + 3} = S_3$ when six-term blocks sum to $0$) turns a huge index into a tiny one.",
    },
    {
      kind: "example",
      title: "Illustration 5.5 — a periodic recurrence and its sums",
      statement:
        "A sequence of integers satisfies $a_{n+2} = a_{n+1} - a_n$ for $n \\geq 1$. The sum of the first $999$ terms is $1003$ and the sum of the first $1003$ terms is $-999$. Find the sum of the first $2002$ terms.",
      approach:
        "Iterate the recurrence to expose its period, show every six consecutive terms sum to $0$, then reduce each index modulo $6$.",
      solution:
        "From $a_{n+2} = a_{n+1} - a_n$ we get $a_{n+3} = a_{n+2} - a_{n+1} = (a_{n+1} - a_n) - a_{n+1} = -a_n$. Applying this twice gives $a_{n+6} = -a_{n+3} = a_n$, so the sequence is **periodic with period $6$**. Adding six consecutive terms:\n$$a_n + a_{n+1} + a_{n+2} + a_{n+3} + a_{n+4} + a_{n+5} = 0,$$\nbecause $a_{n+3} = -a_n$, $a_{n+4} = -a_{n+1}$, $a_{n+5} = -a_{n+2}$ each cancel the first three. So the sum of any six consecutive terms is $0$.\n\nLet $S_n$ be the sum of the first $n$ terms. Reducing indices modulo $6$:\n$$S_{999} = S_{6 \\times 166 + 3} = S_3 = 1003,$$\n$$S_{1003} = S_{6 \\times 167 + 1} = S_1 = -999,$$\n$$S_{2002} = S_{6 \\times 333 + 4} = S_4.$$\nNow $S_4 = a_1 + a_2 + a_3 + a_4$, and since $a_4 = -a_1$ (from $a_{n+3} = -a_n$), we have $S_4 = (a_1 + a_2 + a_3) - a_1 = S_3 - a_1 = S_3 - S_1$.\nTherefore\n$$S_{2002} = 1003 - (-999) = 2002.$$",
    },
    {
      kind: "prose",
      heading: "5 · Recognising the standard progressions at a glance",
      content:
        "Four progressions recur throughout competition mathematics. Learning to spot them instantly is half the battle.\n\n- **Arithmetic (AP):** constant *difference* between consecutive terms, e.g. $5, 8, 11, 14, \\ldots$ ($d = 3$). General term $a_n = a + (n-1)d$.\n- **Geometric (GP):** constant *ratio* between consecutive terms, e.g. $3, 6, 12, 24, \\ldots$ ($r = 2$). General term $a_n = a r^{n-1}$.\n- **Harmonic (HP):** the *reciprocals* form an AP, e.g. $\\dfrac{1}{2}, \\dfrac{1}{5}, \\dfrac{1}{8}, \\ldots$ (reciprocals $2, 5, 8, \\ldots$).\n- **Arithmetico-Geometric (AGP):** each term is (a term of an AP) $\\times$ (a term of a GP), e.g. $1 \\cdot 1 + 2 \\cdot 3 + 3 \\cdot 9 + \\cdots$\n\n**Quick test:** compute successive *differences* — constant means AP. Compute successive *ratios* — constant means GP. Take reciprocals and test for an AP — that means HP.",
    },
    {
      kind: "callout",
      variant: "trap",
      title: "Difference OR ratio — never both",
      content:
        "A non-constant sequence cannot be both an AP and a GP. If the differences are constant it is an AP; if the ratios are constant it is a GP. Always check *both* patterns before concluding a sequence is 'neither' — and remember many sequences are neither AP nor GP at all.",
    },
    {
      kind: "check",
      id: "seq-c1",
      prompt: "Write the first 5 terms of the sequence defined by $a_n = 2n + 1$.",
      format: "text",
      answer: "3, 5, 7, 9, 11",
      hint: "Substitute $n = 1, 2, 3, 4, 5$.",
      explanation: "$a_1 = 3, a_2 = 5, a_3 = 7, a_4 = 9, a_5 = 11$.",
    },
    {
      kind: "check",
      id: "seq-c2",
      prompt: "If $a_1 = 3$ and $a_{n+1} = 2a_n - 1$, find $a_4$.",
      format: "numeric",
      answer: "17",
      hint: "Compute: $a_2 = 2(3)-1 = 5$, $a_3 = 2(5)-1 = 9$, ...",
      explanation: "$a_2 = 5, a_3 = 9, a_4 = 2(9)-1 = 17$.",
    },
    {
      kind: "check",
      id: "seq-c3",
      prompt: "The sequence $5, 8, 11, 14, \\ldots$ is: (a) AP with $d=3$, (b) GP with $r=8/5$, (c) neither.",
      format: "text",
      answer: "AP with d=3",
      hint: "Check: $8-5 = 11-8 = 14-11 = 3$.",
      explanation: "Constant difference $d = 3$, so it's an AP.",
    },
    {
      kind: "check",
      id: "seq-c4",
      prompt: "The sequence $3, 6, 12, 24, \\ldots$ is: (a) AP, (b) GP with $r=2$, (c) HP.",
      format: "text",
      answer: "GP with r=2",
      hint: "Check ratios: $6/3 = 12/6 = 24/12 = 2$.",
      explanation: "Constant ratio $r = 2$, so it's a GP.",
    },
    {
      kind: "check",
      id: "seq-i-c1",
      prompt: "Find the third term $t_3$ of the sequence with $n$th term $t_n = \\dfrac{2^n}{n}$.",
      format: "text",
      answer: "8/3",
      acceptedAnswers: ["8/3", "2.667", "2.6667"],
      hint: "Substitute $n = 3$: numerator $2^3$, denominator $3$.",
      explanation: "$t_3 = \\dfrac{2^3}{3} = \\dfrac{8}{3}$.",
    },
    {
      kind: "check",
      id: "seq-i-c2",
      prompt: "For $t_n = \\dfrac{3 + (-1)^n}{3^n}$, find $t_2$.",
      format: "text",
      answer: "4/9",
      acceptedAnswers: ["4/9"],
      hint: "$n = 2$ is even, so $(-1)^n = +1$; numerator $= 4$, denominator $= 3^2$.",
      explanation: "$t_2 = \\dfrac{3 + 1}{3^2} = \\dfrac{4}{9}$.",
    },
    {
      kind: "check",
      id: "seq-i-c3",
      prompt: "A sequence has $a_1 = 2$ and $a_{n+1} = \\dfrac{2a_n + 3}{a_n + 2}$. Find $a_2$.",
      format: "text",
      answer: "7/4",
      acceptedAnswers: ["7/4", "1.75"],
      hint: "Put $n = 1$ and substitute $a_1 = 2$.",
      explanation: "$a_2 = \\dfrac{2(2) + 3}{2 + 2} = \\dfrac{7}{4}$.",
    },
    {
      kind: "check",
      id: "seq-i-c4",
      prompt:
        "In the Fibonacci sequence ($a_1 = a_2 = 1$, $a_n = a_{n-1} + a_{n-2}$), what is $a_6$?",
      format: "numeric",
      answer: "8",
      hint: "Build up: $1, 1, 2, 3, 5, \\ldots$",
      explanation: "$a_3 = 2, a_4 = 3, a_5 = 5, a_6 = a_5 + a_4 = 5 + 3 = 8$.",
    },
    {
      kind: "check",
      id: "seq-i-c5",
      prompt:
        "Write the first five terms of the sequence $a_1 = a_2 = 2$, $a_n = a_{n-1} - 1$ for $n > 2$. (Concept Application Exercise 5.1, Q1)",
      format: "text",
      answer: "2, 2, 1, 0, -1",
      acceptedAnswers: ["2, 2, 1, 0, -1", "2,2,1,0,-1"],
      hint: "Each term after the second is one less than the previous term.",
      explanation:
        "$a_3 = a_2 - 1 = 1$, $a_4 = a_3 - 1 = 0$, $a_5 = a_4 - 1 = -1$. First five terms: $2, 2, 1, 0, -1$. The corresponding series is $2 + 2 + 1 + 0 + (-1) + \\cdots$",
    },
    {
      kind: "check",
      id: "seq-i-c6",
      prompt:
        "A sequence satisfies $a_1 = 1$ and $3a_{n+1} - 3a_n = 1$ for all $n \\geq 1$. Find $a_{2002}$. (Concept Application Exercise 5.1, Q3)",
      format: "numeric",
      answer: "668",
      hint: "Rearrange to $a_{n+1} = a_n + \\dfrac{1}{3}$ — this is an AP with $d = \\dfrac{1}{3}$.",
      explanation:
        "$a_{n+1} = a_n + \\dfrac{1}{3}$, an AP with first term $1$ and common difference $\\dfrac{1}{3}$. So $a_{2002} = 1 + 2001 \\cdot \\dfrac{1}{3} = 1 + 667 = 668$.",
    },
    {
      kind: "check",
      id: "seq-i-c7",
      prompt:
        "A sequence satisfies $a_{n+2} = a_{n+1} - a_n$. After how many terms does the sequence repeat (its period)?",
      format: "numeric",
      answer: "6",
      hint: "Show $a_{n+3} = -a_n$, then apply the rule twice.",
      explanation:
        "$a_{n+3} = a_{n+2} - a_{n+1} = -a_n$, so applying it again gives $a_{n+6} = -a_{n+3} = a_n$. The period is $6$, and any six consecutive terms sum to $0$.",
    },
    {
      kind: "check",
      id: "seq-i-c8",
      prompt: "The list $2, 4, 8, 16$ is a sequence. Which of these is the corresponding *series*?",
      format: "mcq",
      options: [
        { label: "A", text: "$2, 4, 8, 16$" },
        { label: "B", text: "$2 + 4 + 8 + 16$" },
        { label: "C", text: "$2 \\times 4 \\times 8 \\times 16$" },
        { label: "D", text: "$\\{2, 4, 8, 16\\}$" },
      ],
      answer: "B",
      hint: "A series is formed by adding the terms of a sequence.",
      explanation:
        "A series is the *sum* of the terms of a sequence, so $2 + 4 + 8 + 16$ is the series corresponding to the sequence $2, 4, 8, 16$.",
    },
    {
      kind: "check",
      id: "seq-i-c9",
      prompt:
        "The sequence $\\dfrac{1}{2}, \\dfrac{1}{5}, \\dfrac{1}{8}, \\dfrac{1}{11}, \\ldots$ is best classified as:",
      format: "mcq",
      options: [
        { label: "A", text: "an AP" },
        { label: "B", text: "a GP" },
        { label: "C", text: "an HP" },
        { label: "D", text: "none of these" },
      ],
      answer: "C",
      hint: "Take the reciprocals of the terms and see what pattern they form.",
      explanation:
        "The reciprocals are $2, 5, 8, 11, \\ldots$, an AP with common difference $3$. A sequence whose reciprocals form an AP is a Harmonic Progression (HP).",
    },
  ],
  workedExamples: [
    {
      kind: "example",
      title: "Recognising the type of a progression",
      statement:
        "Classify each sequence as AP, GP, HP, or none: (i) $7, 10, 13, 16, \\ldots$; (ii) $2, -6, 18, -54, \\ldots$; (iii) $\\dfrac{1}{3}, \\dfrac{1}{6}, \\dfrac{1}{9}, \\ldots$",
      approach:
        "Test differences (for AP), then ratios (for GP), then reciprocals (for HP).",
      solution:
        "(i) Differences: $10-7 = 13-10 = 16-13 = 3$, constant. This is an **AP** with $d = 3$.\n\n(ii) Ratios: $\\dfrac{-6}{2} = \\dfrac{18}{-6} = \\dfrac{-54}{18} = -3$, constant. This is a **GP** with $r = -3$.\n\n(iii) Reciprocals: $3, 6, 9, \\ldots$ form an AP with $d = 3$, so the original is an **HP**.",
    },
    {
      kind: "example",
      title: "Using a recurrence to reach a distant term",
      statement:
        "A sequence has $a_1 = 1$ and $a_{n+1} = a_n + \\dfrac{1}{3}$. Find $a_{100}$.",
      approach:
        "The recurrence adds a constant each step, so the sequence is an AP; use the closed form $a_n = a_1 + (n-1)d$ instead of computing 99 steps.",
      solution:
        "Here $d = \\dfrac{1}{3}$, so $a_n = 1 + (n-1)\\cdot\\dfrac{1}{3}$. Thus\n$$a_{100} = 1 + 99 \\cdot \\frac{1}{3} = 1 + 33 = 34.$$\nRecognising a recurrence as a standard progression lets you jump straight to any term with an explicit formula.",
    },
  ],
  practiceProblemIds: [],
};
