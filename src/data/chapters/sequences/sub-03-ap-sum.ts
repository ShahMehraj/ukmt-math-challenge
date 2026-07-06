import type { SubChapter } from "@/lib/types";

export const subAPSum: SubChapter = {
  id: "sum-of-ap",
  title: "Sum of AP and Arithmetic Means",
  lesson: [
    {
      kind: "prose",
      heading: "3 · Sum of an arithmetic progression",
      content:
        "Once you can find any term of an AP, the next natural question is: what do the first $n$ terms add up to? Write the sum forwards and then backwards, line up the two copies, and add them term by term. Each vertical pair adds to the *same* value $a_1 + a_n$, and there are $n$ such pairs, giving $2S_n = n(a_1 + a_n)$.\n\n**Sum of the first $n$ terms:** $$S_n = \\frac{n}{2}[2a + (n-1)d] = \\frac{n}{2}(a + l)$$ where $a = a_1$ is the first term and $l = a_n = a + (n-1)d$ is the last term.\n\nUse the first form when you know $a$ and $d$; use the second, $S_n = \\frac{n}{2}(a + l)$, when you know the first and last terms. Both are the same formula written two ways.",
    },
    {
      kind: "callout",
      variant: "definition",
      title: "The pairing proof (why the formula works)",
      content:
        "Writing $S_n = a_1 + a_2 + \\cdots + a_n$ and the reversed copy $S_n = a_n + a_{n-1} + \\cdots + a_1$, then adding, every column has the same total because in an AP the sum of terms *equidistant from the ends* is constant: $a_1 + a_n = a_2 + a_{n-1} = a_3 + a_{n-2} = \\cdots$. With $n$ equal columns each equal to $(a_1 + a_n)$, we get $2S_n = n(a_1 + a_n)$, hence $S_n = \\frac{n}{2}(a_1 + a_n)$.",
    },
    {
      kind: "prose",
      heading: "Recovering the nth term from the sum",
      content:
        "If you are handed a formula for $S_n$ instead of the terms, you can recover the individual terms by *subtracting consecutive sums*:\n\n$$a_n = S_n - S_{n-1} \\quad (n \\geq 2), \\qquad a_1 = S_1.$$\n\nEverything counted in $S_n$ but not in $S_{n-1}$ is exactly the single term $a_n$.\n\n**A powerful test:** the sum of an AP is always a *quadratic in $n$ with no constant term*, i.e. $S_n = An^2 + Bn$. Comparing $\\frac{n}{2}[2a + (n-1)d] = \\frac{d}{2}n^2 + \\left(a - \\frac{d}{2}\\right)n$ shows $d = 2A$ (twice the coefficient of $n^2$) and $a = A + B$. So whenever $S_n$ is a quadratic in $n$ with zero constant term, the sequence is an AP.",
    },
    {
      kind: "callout",
      variant: "trap",
      title: "S_n vs a_n — and the missing constant term",
      content:
        "Never confuse the *sum of $n$ terms* $S_n$ with the *nth term* $a_n$. To get the term from the sum use $a_n = S_n - S_{n-1}$.\n\nAlso: a genuine AP sum has **no constant term**. If someone claims $S_n = 2n^2 + 3n + 5$ is the sum of an AP, be suspicious — the $+5$ means $S_0 \\neq 0$, so it is *not* the sum of a standard AP starting at $a_1$.",
    },
    {
      kind: "callout",
      variant: "tip",
      title: "Quick standard sums",
      content:
        "Sum of first $n$ natural numbers: $1 + 2 + \\cdots + n = \\dfrac{n(n+1)}{2}$.\n\nSum of first $n$ odd numbers: $1 + 3 + 5 + \\cdots + (2n-1) = n^2$.\n\nSum of first $n$ even numbers: $2 + 4 + 6 + \\cdots + 2n = n(n+1)$.\n\nThese are just special APs, but recognising them instantly saves time in a timed round.",
    },
    {
      kind: "prose",
      heading: "Arithmetic mean",
      content:
        "If $a, A, b$ are three consecutive terms of an AP, then $A - a = b - A$, so $2A = a + b$ and $$A = \\frac{a+b}{2}.$$ This $A$ is the **arithmetic mean (AM)** of $a$ and $b$ — the single number that sits exactly halfway between them.",
    },
    {
      kind: "callout",
      variant: "definition",
      title: "Inserting n arithmetic means",
      content:
        "To insert $n$ arithmetic means $A_1, A_2, \\ldots, A_n$ between $a$ and $b$ means making $a, A_1, A_2, \\ldots, A_n, b$ a single AP. That AP has $n + 2$ terms, so $b$ is the $(n+2)$th term: $b = a + (n+1)d$, giving the common difference $$d = \\frac{b - a}{n + 1}.$$ Then $A_k = a + k\\,d = a + k\\cdot\\dfrac{b-a}{n+1}$ for $k = 1, 2, \\ldots, n$.",
    },
    {
      kind: "callout",
      variant: "tip",
      title: "Sum of the n inserted means",
      content:
        "You rarely need each mean separately. The $n$ inserted means themselves form an AP, so their sum is $\\frac{n}{2}(A_1 + A_n) = \\frac{n}{2}\\big[(a+d) + (b-d)\\big] = \\frac{n}{2}(a+b)$:\n\n$$A_1 + A_2 + \\cdots + A_n = n\\left(\\frac{a+b}{2}\\right) = n \\times (\\text{AM of } a \\text{ and } b).$$\n\nIn words: the sum of $n$ arithmetic means equals $n$ times the single AM of the two endpoints. Note this is the sum of the *means only* — it does **not** include $a$ and $b$ themselves.",
    },
    {
      kind: "check",
      id: "seq-c10",
      prompt: "Find the sum of the first $50$ terms of the AP $1, 3, 5, 7, \\ldots$",
      format: "numeric",
      answer: "2500",
      hint: "Sum of first $n$ odd numbers $= n^2$.",
      explanation: "$50^2 = 2500$. Or: $S_{50} = \\frac{50}{2}(2 \\times 1 + 49 \\times 2) = 25 \\times 100 = 2500$.",
    },
    {
      kind: "check",
      id: "seq-c11",
      prompt: "Find the sum $1 + 2 + 3 + \\cdots + 100$.",
      format: "numeric",
      answer: "5050",
      hint: "$\\frac{n(n+1)}{2}$ with $n = 100$.",
      explanation: "$\\frac{100 \\times 101}{2} = 5050$.",
    },
    {
      kind: "check",
      id: "seq-c12",
      prompt: "Insert $4$ arithmetic means between $3$ and $18$.",
      format: "text",
      answer: "6, 9, 12, 15",
      hint: "Total $6$ terms in AP from $3$ to $18$. $d = (18-3)/5 = 3$.",
      explanation: "$d = 15/5 = 3$. Means: $6, 9, 12, 15$.",
    },
    {
      kind: "check",
      id: "seq-c13",
      prompt: "If $S_n = 3n^2 + 5n$, find $a_n$ for $n \\geq 2$ and the common difference.",
      format: "text",
      answer: "a_n = 6n+2, d=6",
      hint: "$a_n = S_n - S_{n-1} = 3n^2+5n - 3(n-1)^2 - 5(n-1)$.",
      explanation: "$a_n = 3n^2+5n - 3(n^2-2n+1) - 5(n-1) = 6n + 2$. So $d = 6$.",
    },
    {
      kind: "check",
      id: "seq-c14",
      prompt: "The sum of $n$ AMs inserted between $2$ and $38$ is $200$. Find $n$.",
      format: "numeric",
      answer: "10",
      hint: "Sum of $n$ AMs $= n \\cdot \\frac{a+b}{2} = n \\cdot 20 = 200$.",
      explanation: "$n \\times \\frac{2+38}{2} = n \\times 20 = 200 \\Rightarrow n = 10$.",
    },
    {
      kind: "check",
      id: "seq-aps-c1",
      prompt: "Find the sum of all three-digit natural numbers that are divisible by $7$.",
      format: "numeric",
      answer: "70336",
      hint: "The smallest is $105$ and the largest is $994$; they form an AP with $d = 7$. First find how many terms.",
      explanation: "The three-digit multiples of $7$ are $105, 112, \\ldots, 994$, an AP with $a = 105$, $d = 7$. From $105 + (n-1)\\cdot 7 = 994$ we get $n = 128$. Then $S_{128} = \\frac{128}{2}[2 \\times 105 + 127 \\times 7] = 64 \\times 1099 = 70336$.",
    },
    {
      kind: "check",
      id: "seq-aps-c2",
      prompt: "Eleven arithmetic means are inserted between $28$ and $10$. How many of the eleven means are integers?",
      format: "numeric",
      answer: "5",
      hint: "There are $13$ terms in total. Find $d$ from $10 = 28 + 12d$, then check which means $28 + kd$ are integers.",
      explanation: "With $13$ terms, $10 = 28 + 12d \\Rightarrow d = -\\frac{18}{12} = -\\frac{3}{2}$. A mean $A_k = 28 - k\\cdot\\frac{3}{2}$ is an integer only when $k$ is even, i.e. $k = 2, 4, 6, 8, 10$. That gives $5$ integral means.",
    },
    {
      kind: "check",
      id: "seq-aps-c3",
      prompt: "For an AP, $S_n = nP + \\frac{n(n-1)}{2}Q$. What is the common difference?",
      format: "text",
      answer: "Q",
      acceptedAnswers: ["Q", "d = Q", "d=Q"],
      hint: "Rewrite $S_n$ in the form $\\frac{n}{2}[2a + (n-1)d]$ and match coefficients.",
      explanation: "$S_n = nP + \\frac{n(n-1)}{2}Q = \\frac{n}{2}[2P + (n-1)Q]$. Comparing with $S_n = \\frac{n}{2}[2a + (n-1)d]$ gives $a = P$ and $d = Q$.",
    },
    {
      kind: "check",
      id: "seq-aps-c4",
      prompt: "Solve for $x$: $(x+1) + (x+4) + (x+7) + \\cdots + (x+28) = 155$.",
      format: "numeric",
      answer: "1",
      hint: "The constants $1, 4, 7, \\ldots, 28$ form an AP with $d = 3$. How many terms are there?",
      explanation: "The bracketed constants run $1, 4, \\ldots, 28$: that is $10$ terms ($28 = 1 + (n-1)3 \\Rightarrow n = 10$). So the left side is $\\frac{10}{2}[(x+1) + (x+28)] = 5(2x + 29) = 155$, giving $2x + 29 = 31$, so $x = 1$.",
    },
    {
      kind: "check",
      id: "seq-aps-c5",
      prompt: "If $S_{2n} = 3S_n$ for an AP, find the ratio $\\dfrac{S_{3n}}{S_n}$.",
      format: "numeric",
      answer: "6",
      hint: "Turn $S_{2n} = 3S_n$ into a relation between $2a$ and $d$, then substitute into $S_{3n}/S_n$.",
      explanation: "$S_{2n} = 3S_n \\Rightarrow \\frac{2n}{2}[2a+(2n-1)d] = 3\\cdot\\frac{n}{2}[2a+(n-1)d]$, which simplifies to $2a = (n+1)d$. Then $\\frac{S_{3n}}{S_n} = \\frac{3[2a+(3n-1)d]}{2a+(n-1)d} = \\frac{3[(n+1)d+(3n-1)d]}{(n+1)d+(n-1)d} = \\frac{3(4nd)}{2nd} = 6$.",
    },
    {
      kind: "check",
      id: "seq-aps-c6",
      prompt: "The interior angles of a polygon are in AP; the smallest is $120°$ and the common difference is $5°$. How many sides does the polygon have?",
      format: "numeric",
      answer: "9",
      hint: "The sum of interior angles of an $n$-gon is $(n-2)\\times 180°$. Set the AP sum equal to this and discard any solution giving an angle above $180°$.",
      explanation: "$\\frac{n}{2}[2\\times 120 + (n-1)5] = (n-2)\\times 180 \\Rightarrow 5n^2 - 125n + 720 = 0 \\Rightarrow n^2 - 25n + 144 = 0 \\Rightarrow (n-9)(n-16)=0$. If $n=16$ the largest angle is $120 + 15\\times 5 = 195° > 180°$, impossible. So $n = 9$.",
    },
    {
      kind: "check",
      id: "seq-aps-c7",
      prompt: "Find the sum to $n$ terms of $1^2 - 2^2 + 3^2 - 4^2 + \\cdots$ when $n$ is even.",
      format: "text",
      answer: "-n(n+1)/2",
      acceptedAnswers: ["-n(n+1)/2", "-\\frac{n(n+1)}{2}", "-(n(n+1))/2"],
      hint: "Group in consecutive pairs and factor each as a difference of squares.",
      explanation: "Pairing, $(1^2-2^2)+(3^2-4^2)+\\cdots = (1-2)(1+2) + (3-4)(3+4) + \\cdots = -(1+2+3+\\cdots+n) = -\\frac{n(n+1)}{2}$. (When $n$ is odd, the extra unpaired $+n^2$ flips the answer to $+\\frac{n(n+1)}{2}$.)",
    },
  ],
  workedExamples: [
    {
      kind: "example",
      title: "Two different numbers of terms giving the same sum",
      statement:
        "Find the number of terms in the series $20, 19\\frac{1}{3}, 18\\frac{2}{3}, \\ldots$ whose sum is $300$, and explain the answer.",
      approach:
        "This AP has $a = 20$ and $d = -\\frac{2}{3}$. Set $S_n = 300$ and solve the resulting quadratic in $n$.",
      solution:
        "$S_n = \\frac{n}{2}[2\\times 20 + (n-1)(-\\frac{2}{3})] = 300$. Multiplying out gives $n^2 - 61n + 900 = 0$, i.e. $(n-25)(n-36) = 0$, so $n = 25$ or $n = 36$.\n\nBoth are valid: because $d < 0$ the terms decrease and the $31$st term is $0$. Terms $32$ onward are negative and exactly cancel the positive terms from the $26$th to $30$th, so the running sum is the same after $25$ terms as after $36$ terms — both equal $300$.",
    },
    {
      kind: "example",
      title: "Degree of a product using an AP sum",
      statement: "Find the degree of $(1+x)(1+x^6)(1+x^{11})\\cdots(1+x^{101})$.",
      approach:
        "The highest-degree term is the product of the highest power from each factor, so the degree is $1 + 6 + 11 + \\cdots + 101$, an AP.",
      solution:
        "The exponents $1, 6, 11, \\ldots, 101$ form an AP with $a = 1$, $d = 5$. From $101 = 1 + 5(n-1)$ we get $n = 21$ factors. The degree is $\\frac{21}{2}(1 + 101) = 21 \\times 51 = 1071$.",
    },
    {
      kind: "example",
      title: "Using equidistant-pair sums",
      statement:
        "Find the sum of the first $24$ terms of an AP given that $a_1 + a_5 + a_{10} + a_{15} + a_{20} + a_{24} = 225$.",
      approach:
        "In any AP, terms equidistant from the two ends share the same sum. Pair the six given terms into three such pairs.",
      solution:
        "For $24$ terms, $a_1 + a_{24} = a_5 + a_{20} = a_{10} + a_{15}$. So the given equation says $3(a_1 + a_{24}) = 225$, hence $a_1 + a_{24} = 75$. Then $S_{24} = \\frac{24}{2}(a_1 + a_{24}) = 12 \\times 75 = 900$.",
    },
    {
      kind: "example",
      title: "Ratio of full sum to sum of even-numbered terms",
      statement:
        "An AP has an odd number of terms $n$. Its total sum is $S_1$ and the sum of its even-numbered terms is $S_2$. Find $\\frac{S_1}{S_2}$.",
      approach:
        "Count the even-numbered terms, then use the pairing form of the sum for each.",
      solution:
        "$S_1 = \\frac{n}{2}(a_1 + a_n)$. The even-numbered terms are $a_2, a_4, \\ldots, a_{n-1}$, of which there are $\\frac{n-1}{2}$. Their sum is $S_2 = \\frac{1}{2}\\cdot\\frac{n-1}{2}(a_2 + a_{n-1}) = \\frac{n-1}{4}(a_1 + a_n)$, since $a_2 + a_{n-1} = a_1 + a_n$. Therefore $\\frac{S_1}{S_2} = \\frac{2n}{n-1}$.",
    },
    {
      kind: "example",
      title: "Alternating squares of an AP",
      statement:
        "If $a_1, a_2, a_3, \\ldots$ is an AP, prove that $a_1^2 - a_2^2 + a_3^2 - a_4^2 + \\cdots + a_{2n-1}^2 - a_{2n}^2 = \\frac{n}{2n-1}(a_1^2 - a_{2n}^2)$.",
      approach:
        "Group in pairs and factor each as a difference of squares; the difference factor is constant ($-d$).",
      solution:
        "Each pair gives $a_{2k-1}^2 - a_{2k}^2 = (a_{2k-1}+a_{2k})(a_{2k-1}-a_{2k}) = -d(a_{2k-1}+a_{2k})$. Summing over all pairs, the sum of factors is $-d(a_1 + a_2 + \\cdots + a_{2n}) = -d\\cdot\\frac{2n}{2}(a_1 + a_{2n}) = -dn(a_1 + a_{2n})$. Since $a_{2n} = a_1 + (2n-1)d$, we have $a_{2n} - a_1 = (2n-1)d$, so the expression equals $\\frac{dn(a_1^2 - a_{2n}^2)}{a_{2n}-a_1} = \\frac{n}{2n-1}(a_1^2 - a_{2n}^2)$.",
    },
    {
      kind: "example",
      title: "Splitting an AP into blocks",
      statement:
        "In an AP with nonzero common difference, the sum of the first $3n$ terms equals the sum of the next $n$ terms. Find the ratio of the sum of the first $2n$ terms to the sum of the next $2n$ terms.",
      approach:
        "Let $S_k$ be the sum of the first $k$ terms. 'Sum of next $n$ terms' after $3n$ is $S_{4n} - S_{3n}$. Convert the given condition into a relation between $2a$ and $d$.",
      solution:
        "The condition $S_{3n} = S_{4n} - S_{3n}$ means $2S_{3n} = S_{4n}$: $2\\cdot\\frac{3n}{2}[2a+(3n-1)d] = \\frac{4n}{2}[2a+(4n-1)d]$, which simplifies to $4a = (2-2n)d$, i.e. $2a = (1-n)d$. Now the required ratio is $\\frac{S_{2n}}{S_{4n}-S_{2n}}$. Substituting $2a = (1-n)d$ into $S_{2n} = \\frac{2n}{2}[2a+(2n-1)d]$ gives numerator factor $(1-n)d + (2n-1)d = nd$, and the denominator works out to $5nd$ over the same base, so the ratio is $\\frac{2nd}{10nd} = \\frac{1}{5}$.",
    },
    {
      kind: "example",
      title: "Ratio of terms from a ratio of sums",
      statement:
        "The sums of $n$ terms of two APs are in the ratio $(5n+4):(9n+6)$. Find the ratio of their $18$th terms.",
      approach:
        "$\\frac{S_n^{(1)}}{S_n^{(2)}} = \\frac{2a_1+(n-1)d_1}{2a_2+(n-1)d_2}$. The $18$th term uses $a + 17d$, which matches $2a + (n-1)d$ when $n-1 = 34$, i.e. $n = 35$.",
      solution:
        "$\\frac{\\frac{n}{2}[2a_1+(n-1)d_1]}{\\frac{n}{2}[2a_2+(n-1)d_2]} = \\frac{5n+4}{9n+6}$, so $\\frac{2a_1+(n-1)d_1}{2a_2+(n-1)d_2} = \\frac{5n+4}{9n+6}$. To reach the $18$th term ($a + 17d$) put $n = 35$: $\\frac{2a_1+34d_1}{2a_2+34d_2} = \\frac{5(35)+4}{9(35)+6} = \\frac{179}{321}$. Dividing top and bottom by $2$, $\\frac{a_1+17d_1}{a_2+17d_2} = \\frac{179}{321}$. So the $18$th terms are in ratio $179:321$.",
    },
    {
      kind: "example",
      title: "Inserted means with a given ratio",
      statement:
        "Between $1$ and $31$, $m$ arithmetic means are inserted so that the $7$th mean and the $(m-1)$th mean are in ratio $5:9$. Find $m$.",
      approach:
        "The common difference is $d = \\frac{31-1}{m+1} = \\frac{30}{m+1}$; write $A_7$ and $A_{m-1}$ and set the ratio.",
      solution:
        "$A_7 = 1 + 7d = \\frac{m+211}{m+1}$ and $A_{m-1} = 1 + (m-1)d = \\frac{31m-29}{m+1}$. Then $\\frac{A_7}{A_{m-1}} = \\frac{m+211}{31m-29} = \\frac{5}{9}$, so $9(m+211) = 5(31m-29)$, giving $9m + 1899 = 155m - 145$, hence $146m = 2044$ and $m = 14$.",
    },
    {
      kind: "example",
      title: "Sum of inserted means",
      statement:
        "If $n$ arithmetic means are inserted between $2$ and $38$, and the sum of the resulting means is $200$, find $n$.",
      approach:
        "The sum of $n$ inserted means equals $n \\times (\\text{AM of the endpoints})$.",
      solution:
        "AM of $2$ and $38$ is $\\frac{2+38}{2} = 20$, so the sum of the means is $20n = 200$, giving $n = 10$.",
    },
  ],
  practiceProblemIds: [],
};
