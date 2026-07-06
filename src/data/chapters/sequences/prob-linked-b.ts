import type { Problem } from "@/lib/types";

/**
 * Linked-comprehension practice problems (chunk B, source #16-#30) for the
 * "Sequences & Series" chapter, reworded in the app's own voice from a Cengage
 * exercise bank. Each passage setup has been folded into the individual problem
 * so every item stands alone in the Problem Bank.
 */

const SEQ = "cengage-seq";

export const seqLinkedB: Problem[] = [
  // ─── Passage: two AP triples, sum 15, D − d = 1, p/q = 7/8 (source 16–18) ───
  {
    id: "seq-lc-016",
    statement:
      "Two sets $A$ and $B$ each consist of three numbers in A.P. whose sum is $15$. Their common differences $D$ (for $A$) and $d$ (for $B$) satisfy $D - d = 1$, and if $p$ and $q$ denote the products of the numbers in $A$ and $B$ respectively then $\\dfrac{p}{q} = \\dfrac{7}{8}$, with $d > 0$. Find the sum of the products of the numbers of set $A$ taken two at a time.",
    format: "mcq",
    options: [
      { label: "A", text: "$51$" },
      { label: "B", text: "$71$" },
      { label: "C", text: "$74$" },
      { label: "D", text: "$86$" },
    ],
    answer: "B",
    topic: "sequences",
    subtopic: "Arithmetic Progression",
    concepts: ["A.P. symmetric parametrisation", "products of roots"],
    difficulty: "medium",
    source: "original",
    skills: ["setting up symmetric A.P. terms", "solving for common difference"],
    estMinutes: 5,
    tags: [SEQ, "linked-comprehension", "ap-products"],
    hints: [
      "Write each triple symmetrically as $a-D, a, a+D$; the sum $=3a=15$ fixes $a=5$ for both sets.",
      "Use $\\dfrac{5(25-D^2)}{5(25-d^2)}=\\dfrac{7}{8}$ with $D=d+1$ to find $d$.",
    ],
    solution:
      "Write set $A$ as $5-D,\\,5,\\,5+D$ and set $B$ as $5-d,\\,5,\\,5+d$, since each sum $=3a=15$ gives $a=5$. With $D=d+1$,\n$$\\frac{p}{q}=\\frac{5(25-D^2)}{5(25-d^2)}=\\frac{7}{8}.$$\nThen $25(8-7)=8(d+1)^2-7d^2$, giving $d^2+16d-17=0$, so $d=1$ (as $d>0$). Thus $A=\\{3,5,7\\}$. The sum of products taken two at a time is $3\\cdot5+3\\cdot7+5\\cdot7=15+21+35=71$.",
    solutionSteps: [
      "Symmetric triples: $A=\\{5-D,5,5+D\\}$, $B=\\{5-d,5,5+d\\}$ from sum $=15$.",
      "Apply $D=d+1$ and $\\frac{p}{q}=\\frac{5(25-D^2)}{5(25-d^2)}=\\frac{7}{8}$ to get $d=1$.",
      "So $A=\\{3,5,7\\}$ and $3\\cdot5+3\\cdot7+5\\cdot7=71$.",
    ],
  },
  {
    id: "seq-lc-017",
    statement:
      "Two sets $A$ and $B$ each consist of three numbers in A.P. whose sum is $15$. Their common differences $D$ (for $A$) and $d$ (for $B$) satisfy $D - d = 1$, and if $p$ and $q$ denote the products of the numbers in $A$ and $B$ respectively then $\\dfrac{p}{q} = \\dfrac{7}{8}$, with $d > 0$. Find the sum of the products of the numbers of set $B$ taken two at a time.",
    format: "mcq",
    options: [
      { label: "A", text: "$74$" },
      { label: "B", text: "$64$" },
      { label: "C", text: "$73$" },
      { label: "D", text: "$81$" },
    ],
    answer: "A",
    topic: "sequences",
    subtopic: "Arithmetic Progression",
    concepts: ["A.P. symmetric parametrisation", "products of roots"],
    difficulty: "medium",
    source: "original",
    skills: ["setting up symmetric A.P. terms", "solving for common difference"],
    estMinutes: 4,
    tags: [SEQ, "linked-comprehension", "ap-products"],
    hints: [
      "The two triples are $A=\\{3,5,7\\}$ and $B=\\{4,5,6\\}$.",
      "Add the three pairwise products for set $B$.",
    ],
    solution:
      "As found, $d=1$, so $B=\\{4,5,6\\}$. The sum of products taken two at a time is $4\\cdot5+5\\cdot6+6\\cdot4=20+30+24=74$.",
    solutionSteps: [
      "From $d=1$, set $B=\\{4,5,6\\}$.",
      "$4\\cdot5+5\\cdot6+6\\cdot4=74$.",
    ],
  },
  {
    id: "seq-lc-018",
    statement:
      "Two sets $A$ and $B$ each consist of three numbers in A.P. whose sum is $15$. Their common differences $D$ (for $A$) and $d$ (for $B$) satisfy $D - d = 1$, and if $p$ and $q$ denote the products of the numbers in $A$ and $B$ respectively then $\\dfrac{p}{q} = \\dfrac{7}{8}$, with $d > 0$. Find the value of $q - p$.",
    format: "mcq",
    options: [
      { label: "A", text: "$20$" },
      { label: "B", text: "$30$" },
      { label: "C", text: "$15$" },
      { label: "D", text: "$25$" },
    ],
    answer: "C",
    topic: "sequences",
    subtopic: "Arithmetic Progression",
    concepts: ["A.P. symmetric parametrisation", "products of roots"],
    difficulty: "medium",
    source: "original",
    skills: ["computing products of A.P. terms"],
    estMinutes: 3,
    tags: [SEQ, "linked-comprehension", "ap-products"],
    hints: [
      "$A=\\{3,5,7\\}$ and $B=\\{4,5,6\\}$, so compute the two products.",
    ],
    solution:
      "With $A=\\{3,5,7\\}$ and $B=\\{4,5,6\\}$: $p=3\\cdot5\\cdot7=105$ and $q=4\\cdot5\\cdot6=120$. Hence $q-p=120-105=15$.",
    solutionSteps: [
      "$p=3\\cdot5\\cdot7=105$, $q=4\\cdot5\\cdot6=120$.",
      "$q-p=15$.",
    ],
  },

  // ─── Passage: AMs between −2 and 1027, GMs between 1 and 1024 (source 19–21) ─
  {
    id: "seq-lc-019",
    statement:
      "Let $A_1, A_2, \\ldots, A_m$ be the arithmetic means inserted between $-2$ and $1027$, and let $G_1, G_2, \\ldots, G_n$ be the geometric means inserted between $1$ and $1024$. The product of the geometric means equals $2^{45}$ and the sum of the arithmetic means equals $1025 \\times 171$. Find the value of $\\displaystyle\\sum_{r=1}^{n} G_r$.",
    format: "mcq",
    options: [
      { label: "A", text: "$512$" },
      { label: "B", text: "$2046$" },
      { label: "C", text: "$1022$" },
      { label: "D", text: "none of these" },
    ],
    answer: "C",
    topic: "sequences",
    subtopic: "Means & Inequalities",
    concepts: ["geometric means insertion", "product of G.M.s", "geometric series sum"],
    difficulty: "medium",
    source: "original",
    skills: ["inserting geometric means", "summing a geometric series"],
    estMinutes: 5,
    tags: [SEQ, "linked-comprehension", "geometric-means"],
    hints: [
      "The product of $n$ geometric means between $a$ and $b$ is $(\\sqrt{ab})^n$.",
      "Once $n$ is found, the common ratio is $r=(1024)^{1/(n+1)}$.",
    ],
    solution:
      "The product $G_1G_2\\cdots G_n=(\\sqrt{1\\times1024})^n=2^{5n}$. Setting $2^{5n}=2^{45}$ gives $n=9$. The ratio is $r=(1024)^{1/(9+1)}=2$, and $G_1=1\\cdot r=2$. Hence\n$$\\sum_{r=1}^{9}G_r=\\frac{2(2^9-1)}{2-1}=2^{10}-2=1024-2=1022.$$",
    solutionSteps: [
      "Product of G.M.s $=(\\sqrt{1024})^n=2^{5n}=2^{45}\\Rightarrow n=9$.",
      "$r=(1024)^{1/10}=2$, $G_1=2$.",
      "$\\sum G_r=\\frac{2(2^9-1)}{1}=1022$.",
    ],
  },
  {
    id: "seq-lc-020",
    statement:
      "Let $A_1, A_2, \\ldots, A_m$ be the arithmetic means inserted between $-2$ and $1027$, and let $G_1, G_2, \\ldots, G_n$ be the geometric means inserted between $1$ and $1024$. The product of the geometric means equals $2^{45}$ and the sum of the arithmetic means equals $1025 \\times 171$. Find the number of arithmetic means $m$.",
    format: "mcq",
    options: [
      { label: "A", text: "$442$" },
      { label: "B", text: "$342$" },
      { label: "C", text: "$378$" },
      { label: "D", text: "none of these" },
    ],
    answer: "B",
    topic: "sequences",
    subtopic: "Means & Inequalities",
    concepts: ["arithmetic means insertion", "sum of A.M.s"],
    difficulty: "medium",
    source: "original",
    skills: ["inserting arithmetic means", "using the average of endpoints"],
    estMinutes: 3,
    tags: [SEQ, "linked-comprehension", "arithmetic-means"],
    hints: [
      "The sum of $m$ arithmetic means between $a$ and $b$ equals $m\\cdot\\dfrac{a+b}{2}$.",
    ],
    solution:
      "The sum of $m$ arithmetic means between $-2$ and $1027$ is\n$$m\\left(\\frac{-2+1027}{2}\\right)=m\\cdot\\frac{1025}{2}.$$\nSetting this equal to $1025\\times171$ gives $\\frac{m}{2}=171$, so $m=342$.",
    solutionSteps: [
      "Sum of A.M.s $=m\\cdot\\frac{-2+1027}{2}=m\\cdot\\frac{1025}{2}$.",
      "$m\\cdot\\frac{1025}{2}=1025\\times171\\Rightarrow m=342$.",
    ],
  },
  {
    id: "seq-lc-021",
    statement:
      "Let $A_1, A_2, \\ldots, A_m$ be the arithmetic means inserted between $-2$ and $1027$ (there are $342$ of them), and let $G_1, G_2, \\ldots, G_n$ be the geometric means inserted between $1$ and $1024$ (with common ratio $2$). In which type of progression are the numbers $2A_{171}$, $G_5^2 + 1$, $2A_{172}$?",
    format: "mcq",
    options: [
      { label: "A", text: "A.P." },
      { label: "B", text: "G.P." },
      { label: "C", text: "H.P." },
      { label: "D", text: "none of these" },
    ],
    answer: "A",
    topic: "sequences",
    subtopic: "Means & Inequalities",
    concepts: ["symmetry of arithmetic means", "A.P. middle-term test"],
    difficulty: "medium",
    source: "original",
    skills: ["using symmetric A.M. pairing", "recognising an A.P."],
    estMinutes: 4,
    tags: [SEQ, "linked-comprehension", "arithmetic-means"],
    hints: [
      "Arithmetic means equidistant from the centre sum to the endpoint sum: $A_{171}+A_{172}=-2+1027$.",
      "Compute $G_5=1\\cdot2^5$ and hence $G_5^2+1$.",
    ],
    solution:
      "Since $A_{171}$ and $A_{172}$ are the middle pair of $342$ means, $A_{171}+A_{172}=-2+1027=1025$, so $2A_{171}+2A_{172}=2\\times1025$, i.e. their average is $1025$. Also $G_5=1\\cdot2^5=32$, so $G_5^2+1=1024+1=1025$. Thus the middle term $1025$ equals the average of $2A_{171}$ and $2A_{172}$, so $2A_{171},\\,G_5^2+1,\\,2A_{172}$ are in A.P.",
    solutionSteps: [
      "$A_{171}+A_{172}=-2+1027=1025$.",
      "$G_5=2^5=32\\Rightarrow G_5^2+1=1025$.",
      "Middle term equals the average of the outer terms $\\Rightarrow$ A.P.",
    ],
  },

  // ─── Passage: remove two consecutive numbers, mean of rest = 105/4 (22–24) ──
  {
    id: "seq-lc-022",
    statement:
      "Two consecutive numbers are removed from the list $1, 2, 3, \\ldots, n$, and the arithmetic mean of the remaining numbers is $\\dfrac{105}{4}$. In which interval does $n$ lie?",
    format: "mcq",
    options: [
      { label: "A", text: "$[45, 55]$" },
      { label: "B", text: "$[52, 60]$" },
      { label: "C", text: "$[41, 49]$" },
      { label: "D", text: "none of these" },
    ],
    answer: "A",
    topic: "sequences",
    subtopic: "Sigma & Telescoping",
    concepts: ["sum of first n integers", "arithmetic mean", "integer constraints"],
    difficulty: "hard",
    source: "original",
    skills: ["forming an equation from a mean", "solving with integrality"],
    estMinutes: 6,
    tags: [SEQ, "linked-comprehension", "series-mean"],
    hints: [
      "If $m$ and $m+1$ are removed, the remaining sum is $\\frac{n(n+1)}{2}-(2m+1)$ over $n-2$ terms.",
      "Force $m$ to be a positive integer with $1\\le m<n$ to pin down $n$.",
    ],
    solution:
      "Let the removed numbers be $m$ and $m+1$. Then\n$$\\frac{105}{4}=\\frac{\\frac{n(n+1)}{2}-(2m+1)}{n-2},$$\nwhich rearranges to $2n^2-103n-8m+206=0$. For $m$ integral, $n$ must be even; write $n=2k$, giving $m=\\frac{4k^2+103(1-k)}{4}$, so $1-k$ is divisible by $4$. Writing $k=1+4t$ leads to $n=8t+2$ and $m=16t^2-95t+1$. Imposing $1\\le m<n$ forces $t=6$, hence $n=50$. This lies in $[45,55]$.",
    solutionSteps: [
      "Set up $\\frac{105}{4}=\\frac{\\frac{n(n+1)}{2}-(2m+1)}{n-2}$.",
      "Reduce to $2n^2-103n-8m+206=0$; integrality forces $n$ even.",
      "Solving the integer conditions gives $n=50\\in[45,55]$.",
    ],
  },
  {
    id: "seq-lc-023",
    statement:
      "Two consecutive numbers are removed from the list $1, 2, 3, \\ldots, n$, and the arithmetic mean of the remaining numbers is $\\dfrac{105}{4}$ (this forces $n = 50$). Which statement about the two removed numbers is correct?",
    format: "mcq",
    options: [
      { label: "A", text: "They lie between $10$ and $20$." },
      { label: "B", text: "They are greater than $10$." },
      { label: "C", text: "They are less than $15$." },
      { label: "D", text: "none of these" },
    ],
    answer: "C",
    topic: "sequences",
    subtopic: "Sigma & Telescoping",
    concepts: ["sum of first n integers", "arithmetic mean"],
    difficulty: "medium",
    source: "original",
    skills: ["back-substituting to find removed values"],
    estMinutes: 3,
    tags: [SEQ, "linked-comprehension", "series-mean"],
    hints: [
      "With $n=50$, solve for the removed pair $m, m+1$.",
    ],
    solution:
      "From the analysis, $n=50$ gives $m=7$, so the removed numbers are $7$ and $8$. Both are less than $15$.",
    solutionSteps: [
      "$n=50\\Rightarrow m=7$.",
      "Removed numbers are $7$ and $8$, both less than $15$.",
    ],
  },
  {
    id: "seq-lc-024",
    statement:
      "Two consecutive numbers are removed from the list $1, 2, 3, \\ldots, n$, and the arithmetic mean of the remaining numbers is $\\dfrac{105}{4}$ (this forces $n = 50$). Which statement about the sum $1 + 2 + \\cdots + n$ of all the original numbers is correct?",
    format: "mcq",
    options: [
      { label: "A", text: "It exceeds $1600$." },
      { label: "B", text: "It is less than $1500$." },
      { label: "C", text: "It lies between $1300$ and $1500$." },
      { label: "D", text: "none of these" },
    ],
    answer: "B",
    topic: "sequences",
    subtopic: "Sigma & Telescoping",
    concepts: ["sum of first n integers"],
    difficulty: "easy",
    source: "original",
    skills: ["evaluating the triangular-number formula"],
    estMinutes: 2,
    tags: [SEQ, "linked-comprehension", "series-mean"],
    hints: [
      "Use $\\frac{n(n+1)}{2}$ with $n=50$.",
    ],
    solution:
      "With $n=50$, the sum of all numbers is $\\frac{50\\cdot51}{2}=1275$. This is less than $1500$ (option B) but does not lie between $1300$ and $1500$, and does not exceed $1600$.",
    solutionSteps: [
      "$\\frac{50\\cdot51}{2}=1275$.",
      "$1275<1500$, so the correct statement is 'less than $1500$'.",
    ],
  },

  // ─── Passage: two APs with cross-ratio 4 and sum-ratio 2 (source 25–27) ─────
  {
    id: "seq-lc-025",
    statement:
      "Two arithmetic progressions each have $n$ terms. Denote the first by first term $a$, common difference $d$, and the second by first term $b$, common difference $e$. The ratio of the last term of the first A.P. to the first term of the second equals the ratio of the last term of the second A.P. to the first term of the first, and both ratios equal $4$. Moreover, the ratio of the sums of the $n$ terms of the two progressions equals $2$. Find the ratio $\\dfrac{d}{e}$ of their common differences.",
    format: "mcq",
    options: [
      { label: "A", text: "$12$" },
      { label: "B", text: "$24$" },
      { label: "C", text: "$26$" },
      { label: "D", text: "$9$" },
    ],
    answer: "C",
    topic: "sequences",
    subtopic: "Arithmetic Progression",
    concepts: ["A.P. last term", "sum of an A.P.", "simultaneous equations"],
    difficulty: "hard",
    source: "original",
    skills: ["translating ratio conditions into linear equations", "elimination"],
    estMinutes: 7,
    tags: [SEQ, "linked-comprehension", "two-aps"],
    hints: [
      "Write $\\frac{a+(n-1)d}{b}=\\frac{b+(n-1)e}{a}=4$ and $\\frac{2a+(n-1)d}{2b+(n-1)e}=2$.",
      "Eliminate $a$ and $b$ to relate $d$ and $e$.",
    ],
    solution:
      "The conditions give\n$$a+(n-1)d=4b,\\quad b+(n-1)e=4a,\\quad 2a+(n-1)d=2\\big(2b+(n-1)e\\big).$$\nThe last equation is $2a-4b+(n-1)d-2(n-1)e=0$. Using the first two as $a-4b+(n-1)d=0$ and $b-4a+(n-1)e=0$, combine them: $4\\times(\\text{first})+(\\text{second})$ gives $-15b+4(n-1)d+(n-1)e=0$, and $(\\text{second})+2\\times(\\text{third})$ gives $-7b+2(n-1)d-3(n-1)e=0$. Eliminating $b$ via $15\\times$ the second minus $7\\times$ the first yields $2(n-1)d-52(n-1)e=0$, so $d=26e$. Hence $\\dfrac{d}{e}=26$.",
    solutionSteps: [
      "Ratio conditions: $a+(n-1)d=4b$, $b+(n-1)e=4a$; sum condition $2a-4b+(n-1)d-2(n-1)e=0$.",
      "Eliminate $a,b$ by linear combinations.",
      "Obtain $d=26e$, so $\\frac{d}{e}=26$.",
    ],
  },
  {
    id: "seq-lc-026",
    statement:
      "Two arithmetic progressions each have $n$ terms, with first terms $a, b$ and common differences $d, e$. The ratio of the last term of the first A.P. to the first term of the second equals the ratio of the last term of the second A.P. to the first term of the first, and both ratios equal $4$; also the ratio of the sums of their $n$ terms equals $2$. Find the ratio of their $n$th terms.",
    format: "mcq",
    options: [
      { label: "A", text: "$\\dfrac{6}{5}$" },
      { label: "B", text: "$\\dfrac{7}{2}$" },
      { label: "C", text: "$\\dfrac{9}{5}$" },
      { label: "D", text: "none of these" },
    ],
    answer: "B",
    topic: "sequences",
    subtopic: "Arithmetic Progression",
    concepts: ["A.P. nth term", "simultaneous equations"],
    difficulty: "hard",
    source: "original",
    skills: ["expressing first terms via common differences", "forming the term ratio"],
    estMinutes: 5,
    tags: [SEQ, "linked-comprehension", "two-aps"],
    hints: [
      "From the earlier work, $d=26e$, $a=2(n-1)e$ and $b=7(n-1)e$.",
      "The $n$th terms are $a+(n-1)d$ and $b+(n-1)e$.",
    ],
    solution:
      "Using $d=26e$ in the equations gives $a=2(n-1)e$ and $b=7(n-1)e$. The ratio of the $n$th terms is\n$$\\frac{a+(n-1)d}{b+(n-1)e}=\\frac{2(n-1)e+(n-1)26e}{7(n-1)e+(n-1)e}=\\frac{28}{8}=\\frac{7}{2}.$$",
    solutionSteps: [
      "$d=26e$, $a=2(n-1)e$, $b=7(n-1)e$.",
      "$\\frac{a+(n-1)d}{b+(n-1)e}=\\frac{28(n-1)e}{8(n-1)e}=\\frac{7}{2}$.",
    ],
  },
  {
    id: "seq-lc-027",
    statement:
      "Two arithmetic progressions each have $n$ terms, with first terms $a, b$ and common differences $d, e$. The ratio of the last term of the first A.P. to the first term of the second equals the ratio of the last term of the second A.P. to the first term of the first, and both ratios equal $4$; also the ratio of the sums of their $n$ terms equals $2$. Find the ratio $\\dfrac{a}{b}$ of their first terms.",
    format: "mcq",
    options: [
      { label: "A", text: "$\\dfrac{2}{7}$" },
      { label: "B", text: "$\\dfrac{3}{5}$" },
      { label: "C", text: "$\\dfrac{4}{7}$" },
      { label: "D", text: "$\\dfrac{2}{5}$" },
    ],
    answer: "A",
    topic: "sequences",
    subtopic: "Arithmetic Progression",
    concepts: ["A.P. first term", "simultaneous equations"],
    difficulty: "medium",
    source: "original",
    skills: ["expressing first terms via common differences"],
    estMinutes: 3,
    tags: [SEQ, "linked-comprehension", "two-aps"],
    hints: [
      "From the earlier work, $a=2(n-1)e$ and $b=7(n-1)e$.",
    ],
    solution:
      "With $a=2(n-1)e$ and $b=7(n-1)e$, the ratio of the first terms is $\\dfrac{a}{b}=\\dfrac{2(n-1)e}{7(n-1)e}=\\dfrac{2}{7}$.",
    solutionSteps: [
      "$a=2(n-1)e$, $b=7(n-1)e$.",
      "$\\frac{a}{b}=\\frac{2}{7}$.",
    ],
  },

  // ─── Passage: a, b, c in (2,18), sum 25, 2-a-b AP, b-c-18 GP (source 28–30) ─
  {
    id: "seq-lc-028",
    statement:
      "The numbers $a$, $b$, $c$ all lie between $2$ and $18$ and satisfy: (i) $a+b+c=25$; (ii) $2, a, b$ are consecutive terms of an A.P.; (iii) $b, c, 18$ are consecutive terms of a G.P. Find the value of $abc$.",
    format: "mcq",
    options: [
      { label: "A", text: "$500$" },
      { label: "B", text: "$450$" },
      { label: "C", text: "$720$" },
      { label: "D", text: "$480$" },
    ],
    answer: "D",
    topic: "sequences",
    subtopic: "Means & Inequalities",
    concepts: ["A.P. middle-term relation", "G.P. middle-term relation", "solving a quadratic"],
    difficulty: "medium",
    source: "original",
    skills: ["translating A.P./G.P. conditions", "eliminating variables"],
    estMinutes: 5,
    tags: [SEQ, "linked-comprehension", "ap-gp-mix"],
    hints: [
      "From the A.P.: $2a=b+2$. From the G.P.: $c^2=18b$.",
      "Eliminate $a$ and $b$ to obtain a quadratic in $c$.",
    ],
    solution:
      "The conditions give $a+b+c=25$, $2a=b+2$, and $c^2=18b$. Eliminating $a$ from the first two gives $b=16-\\frac{2c}{3}$. Substituting into $c^2=18b$ yields $c^2=18\\left(16-\\frac{2c}{3}\\right)$, i.e. $c^2+12c-288=0$, so $(c-12)(c+24)=0$. Since $c$ lies between $2$ and $18$, $c=12$. Then $b=8$ and $a=5$. Hence $abc=5\\cdot8\\cdot12=480$.",
    solutionSteps: [
      "$2a=b+2$, $c^2=18b$, $a+b+c=25$.",
      "$b=16-\\frac{2c}{3}\\Rightarrow c^2+12c-288=0\\Rightarrow c=12$.",
      "$b=8$, $a=5$, so $abc=480$.",
    ],
  },
  {
    id: "seq-lc-029",
    statement:
      "The numbers $a$, $b$, $c$ all lie between $2$ and $18$ and satisfy $a+b+c=25$, with $2, a, b$ in A.P. and $b, c, 18$ in G.P. (so $a=5$, $b=8$, $c=12$). Describe the roots of the equation $ax^2 + bx + c = 0$.",
    format: "mcq",
    options: [
      { label: "A", text: "real and positive" },
      { label: "B", text: "real and negative" },
      { label: "C", text: "imaginary" },
      { label: "D", text: "real and of opposite sign" },
    ],
    answer: "C",
    topic: "sequences",
    subtopic: "Means & Inequalities",
    concepts: ["discriminant test"],
    difficulty: "easy",
    source: "original",
    skills: ["evaluating a discriminant"],
    estMinutes: 2,
    tags: [SEQ, "linked-comprehension", "ap-gp-mix"],
    hints: [
      "Substitute $a=5$, $b=8$, $c=12$ and check the sign of $b^2-4ac$.",
    ],
    solution:
      "With $a=5$, $b=8$, $c=12$, the equation is $5x^2+8x+12=0$. Its discriminant is $8^2-4\\cdot5\\cdot12=64-240=-176<0$, so the roots are imaginary.",
    solutionSteps: [
      "Equation: $5x^2+8x+12=0$.",
      "Discriminant $=64-240=-176<0\\Rightarrow$ imaginary roots.",
    ],
  },
  {
    id: "seq-lc-030",
    statement:
      "The numbers $a$, $b$, $c$ all lie between $2$ and $18$ and satisfy $a+b+c=25$, with $2, a, b$ in A.P. and $b, c, 18$ in G.P. (so $a=5$, $b=8$, $c=12$). If $a$, $b$, $c$ are the roots of $x^3 + qx^2 + rx + s = 0$, find the value of $r$.",
    format: "mcq",
    options: [
      { label: "A", text: "$184$" },
      { label: "B", text: "$196$" },
      { label: "C", text: "$224$" },
      { label: "D", text: "none of these" },
    ],
    answer: "B",
    topic: "sequences",
    subtopic: "Means & Inequalities",
    concepts: ["Vieta's formulas", "sum of products of roots"],
    difficulty: "easy",
    source: "original",
    skills: ["applying Vieta's relations"],
    estMinutes: 2,
    tags: [SEQ, "linked-comprehension", "ap-gp-mix"],
    hints: [
      "For a cubic $x^3+qx^2+rx+s$, $r$ is the sum of products of the roots taken two at a time.",
    ],
    solution:
      "By Vieta's formulas, $r$ equals the sum of the products of the roots taken two at a time: $r=ab+ac+bc=5\\cdot8+5\\cdot12+8\\cdot12=40+60+96=196$.",
    solutionSteps: [
      "$r=ab+ac+bc$.",
      "$=40+60+96=196$.",
    ],
  },
];
