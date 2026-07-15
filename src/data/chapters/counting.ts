import type { Chapter, SubChapter } from "@/lib/types";

// ═══════════════════════════════════════════════════════════════════════════════
// SUB-CHAPTERS
// ═══════════════════════════════════════════════════════════════════════════════

const sub1: SubChapter = {
  id: "experiments-outcomes-sample-spaces",
  title: "Experiments, outcomes and sample spaces",
  lesson: [
    {
      kind: "prose",
      heading: "1 · Random experiments and sample spaces",
      content:
        "A **random experiment** (or trial) is any process whose outcome cannot be predicted with certainty in advance, even though the set of all possible outcomes is known.\n\nExamples: tossing a coin, rolling a die, drawing a card from a shuffled deck, measuring tomorrow's temperature.\n\nThe **sample space** $S$ (or $\\Omega$) is the set of all possible outcomes of an experiment.\n\n**Notation conventions:**\n- Coin toss: $S = \\{H, T\\}$\n- Die roll: $S = \\{1, 2, 3, 4, 5, 6\\}$\n- Two coins: $S = \\{HH, HT, TH, TT\\}$ — note that $HT \\neq TH$ (first coin, second coin)\n- Two dice: $S = \\{(1,1), (1,2), \\ldots, (6,6)\\}$, with $|S| = 36$\n\n**Finite vs infinite sample spaces:** Most exam problems have finite sample spaces. But experiments like 'toss a coin until you get heads' have $S = \\{H, TH, TTH, TTTH, \\ldots\\}$ — countably infinite.",
    },
    {
      kind: "diagram",
      diagram: {
        alt: "Tree diagram for tossing two coins showing all four outcomes: HH, HT, TH, TT",
        caption:
          "Tree diagram for tossing $2$ coins: $|S| = 4$ equally likely outcomes.",
        svg: `<svg width="280" height="200" viewBox="0 0 280 200" xmlns="http://www.w3.org/2000/svg">
  <g stroke="#16a34a" stroke-width="1.8" fill="none" opacity="0.8">
    <line x1="40" y1="95" x2="120" y2="45"/>
    <line x1="40" y1="95" x2="120" y2="145"/>
    <line x1="120" y1="45" x2="220" y2="20"/>
    <line x1="120" y1="45" x2="220" y2="70"/>
    <line x1="120" y1="145" x2="220" y2="120"/>
    <line x1="120" y1="145" x2="220" y2="170"/>
  </g>
  <g fill="#15803d">
    <circle cx="40" cy="95" r="8"/>
    <circle cx="120" cy="45" r="8"/>
    <circle cx="120" cy="145" r="8"/>
    <circle cx="220" cy="20" r="8"/>
    <circle cx="220" cy="70" r="8"/>
    <circle cx="220" cy="120" r="8"/>
    <circle cx="220" cy="170" r="8"/>
  </g>
  <g fill="white" font-size="10" font-family="Georgia, serif" text-anchor="middle" font-weight="bold">
    <text x="40" y="99">S</text>
    <text x="120" y="49">H</text>
    <text x="120" y="149">T</text>
    <text x="220" y="24">H</text>
    <text x="220" y="74">T</text>
    <text x="220" y="124">H</text>
    <text x="220" y="174">T</text>
  </g>
  <g fill="#15803d" font-size="12" font-family="Georgia, serif" text-anchor="start" font-weight="bold">
    <text x="238" y="24">HH</text>
    <text x="238" y="74">HT</text>
    <text x="238" y="124">TH</text>
    <text x="238" y="174">TT</text>
  </g>
  <g fill="#6b7280" font-size="9" font-family="sans-serif" text-anchor="middle">
    <text x="75" y="60">Coin 1</text>
    <text x="75" y="135">Coin 1</text>
    <text x="170" y="22">Coin 2</text>
    <text x="170" y="170">Coin 2</text>
  </g>
</svg>`,
      },
    },
    {
      kind: "callout",
      variant: "tip",
      title: "Counting sample-space size",
      content:
        "For multi-stage experiments, use the multiplication principle. Two coins: $2 \\times 2 = 4$. Three dice: $6^3 = 216$. Drawing $2$ cards (without replacement) from $52$: $52 \\times 51 = 2652$ ordered outcomes, or $\\binom{52}{2} = 1326$ unordered pairs.",
    },
    {
      kind: "check",
      id: "prob-c1",
      prompt:
        "A die is rolled and a coin is tossed simultaneously. How many outcomes are in the sample space?",
      format: "numeric",
      answer: "12",
      hint: "Die has $6$ outcomes, coin has $2$ — multiply.",
      explanation: "$6 \\times 2 = 12$.",
    },
    {
      kind: "check",
      id: "prob-c2",
      prompt:
        "Three coins are tossed. Write the number of elements in the sample space.",
      format: "numeric",
      answer: "8",
      hint: "Each coin has $2$ outcomes: $2^3$.",
      explanation: "$2^3 = 8$. The outcomes are HHH, HHT, HTH, HTT, THH, THT, TTH, TTT.",
    },
    {
      kind: "check",
      id: "prob-c3",
      prompt:
        "Two dice are rolled. How many outcomes have the sum equal to $7$?",
      format: "numeric",
      answer: "6",
      hint: "List pairs $(a, b)$ with $a + b = 7$: $(1,6), (2,5), \\ldots$",
      explanation:
        "The pairs are $(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)$ — exactly $6$ outcomes.",
    },
    {
      kind: "check",
      id: "prob-c4",
      prompt:
        "A card is drawn from a standard $52$-card deck. How many outcomes are in the sample space?",
      format: "numeric",
      answer: "52",
      hint: "Each card is a distinct outcome.",
      explanation: "The sample space has $52$ elements — one for each card.",
    },
    {
      kind: "check",
      id: "prob-c5",
      prompt:
        "A coin is tossed repeatedly until a head appears. How many elements are in the sample space? (Enter 'infinite' or a number.)",
      format: "text",
      answer: "infinite",
      hint: "The outcomes are $H, TH, TTH, TTTH, \\ldots$ — there is no upper bound on the number of tosses.",
      explanation:
        "The sample space $\\{H, TH, TTH, TTTH, \\ldots\\}$ is countably infinite.",
    },
  ],
  workedExamples: [
    {
      kind: "example",
      title: "Sample space for sum of two dice",
      statement:
        "Two dice are rolled. List the sample space for the experiment and determine $|S|$.",
      approach:
        "Each die has outcomes $1$-$6$. The sample space consists of all ordered pairs.",
      solution:
        "$S = \\{(i,j) : i, j \\in \\{1,2,3,4,5,6\\}\\}$. Since each die is independent with $6$ outcomes, $|S| = 6 \\times 6 = 36$.",
    },
  ],
  practiceProblemIds: [],
};

const sub2: SubChapter = {
  id: "events-types",
  title: "Events and their types",
  lesson: [
    {
      kind: "prose",
      heading: "2 · Events and their types",
      content:
        "An **event** is any subset of the sample space $S$. We say an event $A$ 'occurs' if the outcome of the experiment belongs to $A$.\n\n**Types of events:**\n\n1. **Elementary (simple) event:** Contains exactly one outcome. E.g., getting a $4$ on a die: $\\{4\\}$.\n\n2. **Compound event:** Contains more than one outcome. E.g., getting an even number: $\\{2, 4, 6\\}$.\n\n3. **Sure (certain) event:** The event $S$ itself — it always occurs. $P(S) = 1$.\n\n4. **Impossible event:** The empty set $\\emptyset$ — it never occurs. $P(\\emptyset) = 0$.\n\n5. **Equally likely events:** Events that have the same probability of occurrence. For a fair die, each face is equally likely.\n\n6. **Complementary event:** $\\bar{A}$ (or $A'$ or $A^c$) is the event 'A does not occur': $\\bar{A} = S \\setminus A$.\n\n7. **Exhaustive events:** Events $A_1, A_2, \\ldots, A_n$ are exhaustive if $A_1 \\cup A_2 \\cup \\cdots \\cup A_n = S$.\n\n8. **Mutually exclusive (disjoint) events:** Events $A$ and $B$ are mutually exclusive if $A \\cap B = \\emptyset$ — they cannot occur simultaneously.",
    },
    {
      kind: "callout",
      variant: "definition",
      title: "Complementary events",
      content:
        "For any event $A$:\n- $A \\cup \\bar{A} = S$ (exhaustive)\n- $A \\cap \\bar{A} = \\emptyset$ (mutually exclusive)\n- $P(A) + P(\\bar{A}) = 1$, so $P(\\bar{A}) = 1 - P(A)$.\n\nThis is one of the most useful identities in probability — it lets us solve 'at least one' problems by computing the complement.",
    },
    {
      kind: "callout",
      variant: "warning",
      title: "Mutually exclusive is NOT the same as independent",
      content:
        "Two events can be mutually exclusive (never happen together) OR independent (one doesn't affect the other) — but (for events with non-zero probability) never both! If $A \\cap B = \\emptyset$ then knowing $A$ occurred tells you $B$ definitely did not — that's dependence, not independence.",
    },
    {
      kind: "check",
      id: "prob-c6",
      prompt:
        "A die is rolled. Let $A = \\{2, 4, 6\\}$ (even) and $B = \\{1, 3, 5\\}$ (odd). Are $A$ and $B$ mutually exclusive? Are they exhaustive? (Answer: 'both', 'exclusive only', 'exhaustive only', or 'neither')",
      format: "text",
      answer: "both",
      hint: "$A \\cap B = \\emptyset$ and $A \\cup B = S$.",
      explanation:
        "$A \\cap B = \\emptyset$ (mutually exclusive) and $A \\cup B = \\{1,2,3,4,5,6\\} = S$ (exhaustive). So: both.",
    },
    {
      kind: "check",
      id: "prob-c7",
      prompt:
        "A card is drawn from a deck. Event $A$: 'the card is a heart'. What is $\\bar{A}$? How many outcomes are in $\\bar{A}$?",
      format: "numeric",
      answer: "39",
      hint: "$\\bar{A}$ is 'the card is NOT a heart'. There are $52 - 13 = 39$ non-heart cards.",
      explanation: "$|\\bar{A}| = 52 - 13 = 39$.",
    },
    {
      kind: "check",
      id: "prob-c8",
      prompt:
        "Two dice are rolled. Events: $A$ = 'sum is $7$', $B$ = 'sum is $11$'. Are $A$ and $B$ mutually exclusive?",
      format: "text",
      answer: "yes",
      hint: "Can the sum be both $7$ and $11$ at the same time?",
      explanation:
        "A single roll cannot produce two different sums simultaneously. $A \\cap B = \\emptyset$, so they are mutually exclusive.",
    },
    {
      kind: "check",
      id: "prob-c9",
      prompt:
        "A die is rolled. $A$ = 'number $\\leq 4$' = $\\{1,2,3,4\\}$, $B$ = 'number is even' = $\\{2,4,6\\}$. Find $|A \\cap B|$.",
      format: "numeric",
      answer: "2",
      hint: "Which numbers are both $\\leq 4$ AND even?",
      explanation: "$A \\cap B = \\{2, 4\\}$, so $|A \\cap B| = 2$.",
    },
  ],
  workedExamples: [
    {
      kind: "example",
      title: "Identifying event types",
      statement:
        "A bag contains $3$ red, $2$ blue and $1$ green ball. One ball is drawn. Classify these events: $A$ = 'red ball', $B$ = 'yellow ball', $C$ = 'red or blue or green ball'.",
      approach: "Compare each event to the sample space.",
      solution:
        "$A = \\{R_1, R_2, R_3\\}$ — compound event (3 outcomes).\n$B = \\emptyset$ — impossible event (no yellow balls).\n$C = S$ — sure/certain event (covers all balls).",
    },
  ],
  practiceProblemIds: [],
};

const sub3: SubChapter = {
  id: "classical-definition",
  title: "Classical definition of probability",
  lesson: [
    {
      kind: "prose",
      heading: "3 · Classical (a priori) definition of probability",
      content:
        "When all outcomes in the sample space $S$ are **equally likely**, the probability of event $A$ is:\n\n$$P(A) = \\frac{n(A)}{n(S)} = \\frac{\\text{number of outcomes favourable to } A}{\\text{total number of equally likely outcomes}}$$\n\n**Properties:**\n- $0 \\leq P(A) \\leq 1$ for every event $A$\n- $P(S) = 1$ (certain event)\n- $P(\\emptyset) = 0$ (impossible event)\n- $P(\\bar{A}) = 1 - P(A)$\n\n**Odds in favour of $A$:** $$\\text{Odds in favour} = \\frac{P(A)}{P(\\bar{A})} = \\frac{n(A)}{n(\\bar{A})}$$\n\n**Odds against $A$:** $$\\text{Odds against} = \\frac{P(\\bar{A})}{P(A)} = \\frac{n(\\bar{A})}{n(A)}$$\n\nIf odds in favour of $A$ are $m : n$, then $P(A) = \\dfrac{m}{m+n}$.",
    },
    {
      kind: "callout",
      variant: "trap",
      title: "Equally likely outcomes are essential",
      content:
        "The classical definition ONLY works when outcomes are equally likely. The sums $2, 3, \\ldots, 12$ from two dice are NOT equally likely (a sum of $7$ has $6$ ways, a sum of $2$ has only $1$). Always work with the $36$ equally likely ordered pairs, not the $11$ possible sums.",
    },
    {
      kind: "callout",
      variant: "definition",
      title: "Converting between odds and probability",
      content:
        "If odds in favour of event $A$ are $m:n$, then:\n$$P(A) = \\frac{m}{m+n}, \\quad P(\\bar{A}) = \\frac{n}{m+n}$$\n\nConversely, if $P(A) = \\frac{3}{8}$, then odds in favour are $3:5$ (since $P(\\bar{A}) = \\frac{5}{8}$).",
    },
    {
      kind: "check",
      id: "prob-c10",
      prompt:
        "A fair die is rolled. What is the probability of getting a prime number? Give as a fraction.",
      format: "text",
      answer: "1/2",
      hint: "Primes on a die: $2, 3, 5$ — that's $3$ out of $6$.",
      explanation: "Favourable: $\\{2, 3, 5\\}$, so $P = 3/6 = 1/2$.",
    },
    {
      kind: "check",
      id: "prob-c11",
      prompt:
        "A card is drawn from a $52$-card deck. What is the probability it is a face card (Jack, Queen or King)? Fraction in lowest terms.",
      format: "text",
      answer: "3/13",
      hint: "There are $12$ face cards in total ($3$ per suit $\\times 4$ suits).",
      explanation: "$P = 12/52 = 3/13$.",
    },
    {
      kind: "check",
      id: "prob-c12",
      prompt:
        "The odds in favour of an event are $3:7$. What is the probability of the event? Fraction.",
      format: "text",
      answer: "3/10",
      hint: "$P = m/(m+n)$ where odds are $m:n$.",
      explanation: "$P(A) = 3/(3+7) = 3/10$.",
    },
    {
      kind: "check",
      id: "prob-c13",
      prompt:
        "Two dice are rolled. What is the probability that the sum is at least $10$? Fraction in lowest terms.",
      format: "text",
      answer: "1/6",
      hint: "Sum $\\geq 10$ means sum is $10, 11,$ or $12$. Count favourable pairs out of $36$.",
      explanation:
        "Sum $10$: $(4,6),(5,5),(6,4)$ — $3$. Sum $11$: $(5,6),(6,5)$ — $2$. Sum $12$: $(6,6)$ — $1$. Total favourable: $6$. $P = 6/36 = 1/6$.",
    },
    {
      kind: "check",
      id: "prob-c14",
      prompt:
        "If $P(A) = 0.6$, what are the odds against event $A$? Express as a ratio like '2:3'.",
      format: "text",
      answer: "2:3",
      hint: "Odds against $= P(\\bar{A}) : P(A) = 0.4 : 0.6$.",
      explanation: "Odds against $= 0.4 : 0.6 = 2 : 3$.",
    },
    {
      kind: "check",
      id: "prob-c15",
      prompt:
        "A bag has $5$ red, $3$ blue and $2$ green balls. One ball is drawn at random. What is the probability it is NOT green? Fraction in lowest terms.",
      format: "text",
      answer: "4/5",
      hint: "P(not green) = 1 - P(green). P(green) = 2/10.",
      explanation: "$P(\\text{not green}) = 1 - 2/10 = 8/10 = 4/5$.",
    },
  ],
  workedExamples: [
    {
      kind: "example",
      title: "Probability with cards",
      statement:
        "A card is drawn at random from a well-shuffled deck. Find the probability that it is (i) a red king, (ii) a black card or a king.",
      approach:
        "Count favourable outcomes in each case. For (ii), be careful not to double-count the black kings.",
      solution:
        "(i) Red kings: King of Hearts, King of Diamonds — $2$ cards. $P = 2/52 = 1/26$.\n\n(ii) Black cards: $26$. Kings: $4$. But $2$ kings are already black. By inclusion-exclusion: $26 + 4 - 2 = 28$. $P = 28/52 = 7/13$.",
    },
  ],
  practiceProblemIds: [],
};

const sub4: SubChapter = {
  id: "addition-theorem",
  title: "Addition theorem",
  lesson: [
    {
      kind: "prose",
      heading: "4 · Addition theorem of probability",
      content:
        "For any two events $A$ and $B$:\n\n$$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$$\n\nThis is the probability analogue of the inclusion-exclusion principle for sets.\n\n**For three events:**\n$$P(A \\cup B \\cup C) = P(A) + P(B) + P(C) - P(A \\cap B) - P(B \\cap C) - P(A \\cap C) + P(A \\cap B \\cap C)$$\n\n**Special case — mutually exclusive events:**\nIf $A \\cap B = \\emptyset$, then $P(A \\cup B) = P(A) + P(B)$.\n\nMore generally, if $A_1, A_2, \\ldots, A_n$ are pairwise mutually exclusive:\n$$P(A_1 \\cup A_2 \\cup \\cdots \\cup A_n) = P(A_1) + P(A_2) + \\cdots + P(A_n)$$\n\n**Boole's inequality (subadditivity):**\n$$P(A \\cup B) \\leq P(A) + P(B)$$\nEquality holds iff $A$ and $B$ are mutually exclusive.",
    },
    {
      kind: "callout",
      variant: "tip",
      title: "Useful rearrangements",
      content:
        "From the addition theorem:\n- $P(A \\cap B) = P(A) + P(B) - P(A \\cup B)$\n- $P(\\text{only } A) = P(A) - P(A \\cap B)$\n- $P(\\text{only } B) = P(B) - P(A \\cap B)$\n- $P(\\text{exactly one of } A, B) = P(A) + P(B) - 2P(A \\cap B)$\n- $P(\\text{neither } A \\text{ nor } B) = 1 - P(A \\cup B)$",
    },
    {
      kind: "check",
      id: "prob-c16",
      prompt:
        "If $P(A) = 0.5$, $P(B) = 0.4$ and $P(A \\cap B) = 0.2$, find $P(A \\cup B)$.",
      format: "text",
      answer: "0.7",
      hint: "Apply the addition theorem directly.",
      explanation:
        "$P(A \\cup B) = 0.5 + 0.4 - 0.2 = 0.7$.",
    },
    {
      kind: "check",
      id: "prob-c17",
      prompt:
        "Events $A$ and $B$ are mutually exclusive with $P(A) = 1/3$ and $P(B) = 1/4$. Find $P(A \\cup B)$. Fraction.",
      format: "text",
      answer: "7/12",
      hint: "Mutually exclusive means $P(A \\cap B) = 0$, so just add.",
      explanation: "$P(A \\cup B) = 1/3 + 1/4 = 4/12 + 3/12 = 7/12$.",
    },
    {
      kind: "check",
      id: "prob-c18",
      prompt:
        "A card is drawn from a $52$-card deck. Find the probability it is a heart OR a king. Fraction in lowest terms.",
      format: "text",
      answer: "4/13",
      hint: "$P(\\text{heart}) = 13/52$, $P(\\text{king}) = 4/52$, $P(\\text{king of hearts}) = 1/52$.",
      explanation:
        "$P = 13/52 + 4/52 - 1/52 = 16/52 = 4/13$.",
    },
    {
      kind: "check",
      id: "prob-c19",
      prompt:
        "If $P(A) = 0.6$, $P(B) = 0.5$ and $P(A \\cup B) = 0.8$, find $P(A \\cap B)$.",
      format: "text",
      answer: "0.3",
      hint: "Rearrange: $P(A \\cap B) = P(A) + P(B) - P(A \\cup B)$.",
      explanation: "$P(A \\cap B) = 0.6 + 0.5 - 0.8 = 0.3$.",
    },
    {
      kind: "check",
      id: "prob-c20",
      prompt:
        "If $P(A) = 0.4$ and $P(B) = 0.3$ with $P(A \\cap B) = 0.1$, find the probability that exactly one of $A$, $B$ occurs.",
      format: "text",
      answer: "0.5",
      hint: "$P(\\text{exactly one}) = P(A) + P(B) - 2P(A \\cap B)$.",
      explanation:
        "$P(\\text{exactly one}) = 0.4 + 0.3 - 2(0.1) = 0.5$.",
    },
  ],
  workedExamples: [
    {
      kind: "example",
      title: "Addition theorem with three events",
      statement:
        "In a class of $60$ students: $25$ play cricket, $20$ play football, $22$ play hockey. Also: $8$ play cricket and football, $7$ play football and hockey, $6$ play cricket and hockey, and $3$ play all three. Find the probability that a randomly chosen student plays at least one sport.",
      approach: "Use the three-event inclusion-exclusion formula.",
      solution:
        "$P(C \\cup F \\cup H) = P(C) + P(F) + P(H) - P(C\\cap F) - P(F\\cap H) - P(C\\cap H) + P(C\\cap F\\cap H)$\n\n$= \\frac{25 + 20 + 22 - 8 - 7 - 6 + 3}{60} = \\frac{49}{60}$.",
    },
  ],
  practiceProblemIds: [],
};

const sub5: SubChapter = {
  id: "independent-dependent-events",
  title: "Independent and dependent events",
  lesson: [
    {
      kind: "prose",
      heading: "5 · Independent and dependent events",
      content:
        "Two events $A$ and $B$ are **independent** if the occurrence of one does not affect the probability of the other. Formally:\n\n$$P(A \\cap B) = P(A) \\cdot P(B) \\quad \\text{(definition of independence)}$$\n\nEquivalently, $P(A | B) = P(A)$ and $P(B | A) = P(B)$.\n\n**Dependent events:** If the outcome of the first event changes the probabilities for the second, the events are dependent. The classic case is drawing **without replacement**.\n\n**Example — With replacement:** A bag has $3$ red and $2$ blue balls. Draw one, replace it, draw again.\n- $P(\\text{both red}) = \\frac{3}{5} \\times \\frac{3}{5} = \\frac{9}{25}$\n\n**Example — Without replacement:** Same bag, no replacement.\n- $P(\\text{both red}) = \\frac{3}{5} \\times \\frac{2}{4} = \\frac{6}{20} = \\frac{3}{10}$\n\nNotice how the second probability changes because the pool has shrunk.",
    },
    {
      kind: "diagram",
      diagram: {
        alt: "Tree diagram comparing drawing with and without replacement from a bag of 3 red and 2 blue balls",
        caption:
          "With vs without replacement: the second-stage probabilities change when we don't replace.",
        svg: `<svg width="340" height="260" viewBox="0 0 340 260" xmlns="http://www.w3.org/2000/svg">
  <text x="170" y="15" text-anchor="middle" fill="#15803d" font-size="11" font-family="Georgia, serif" font-weight="bold">WITHOUT REPLACEMENT</text>
  <g stroke="#16a34a" stroke-width="1.5" fill="none" opacity="0.8">
    <line x1="40" y1="80" x2="130" y2="45"/>
    <line x1="40" y1="80" x2="130" y2="115"/>
    <line x1="130" y1="45" x2="250" y2="25"/>
    <line x1="130" y1="45" x2="250" y2="65"/>
    <line x1="130" y1="115" x2="250" y2="95"/>
    <line x1="130" y1="115" x2="250" y2="135"/>
  </g>
  <g fill="#15803d">
    <circle cx="40" cy="80" r="7"/>
    <circle cx="130" cy="45" r="7"/>
    <circle cx="130" cy="115" r="7"/>
    <circle cx="250" cy="25" r="7"/>
    <circle cx="250" cy="65" r="7"/>
    <circle cx="250" cy="95" r="7"/>
    <circle cx="250" cy="135" r="7"/>
  </g>
  <g fill="white" font-size="9" font-family="Georgia, serif" text-anchor="middle" font-weight="bold">
    <text x="40" y="83">S</text>
    <text x="130" y="48">R</text>
    <text x="130" y="118">B</text>
    <text x="250" y="28">R</text>
    <text x="250" y="68">B</text>
    <text x="250" y="98">R</text>
    <text x="250" y="138">B</text>
  </g>
  <g fill="#6b7280" font-size="9" font-family="sans-serif" text-anchor="middle">
    <text x="78" y="54">3/5</text>
    <text x="78" y="108">2/5</text>
    <text x="190" y="28">2/4</text>
    <text x="190" y="62">2/4</text>
    <text x="190" y="98">3/4</text>
    <text x="190" y="132">1/4</text>
  </g>
  <g fill="#15803d" font-size="10" font-family="Georgia, serif" text-anchor="start">
    <text x="262" y="28">RR: 3/5 x 2/4 = 6/20</text>
    <text x="262" y="68">RB: 3/5 x 2/4 = 6/20</text>
    <text x="262" y="98">BR: 2/5 x 3/4 = 6/20</text>
    <text x="262" y="138">BB: 2/5 x 1/4 = 2/20</text>
  </g>
  <line x1="10" y1="155" x2="335" y2="155" stroke="#d1d5db" stroke-width="0.8"/>
  <text x="170" y="172" text-anchor="middle" fill="#15803d" font-size="11" font-family="Georgia, serif" font-weight="bold">WITH REPLACEMENT</text>
  <g stroke="#16a34a" stroke-width="1.5" fill="none" opacity="0.8">
    <line x1="40" y1="215" x2="130" y2="190"/>
    <line x1="40" y1="215" x2="130" y2="240"/>
    <line x1="130" y1="190" x2="250" y2="180"/>
    <line x1="130" y1="190" x2="250" y2="200"/>
    <line x1="130" y1="240" x2="250" y2="230"/>
    <line x1="130" y1="240" x2="250" y2="250"/>
  </g>
  <g fill="#15803d">
    <circle cx="40" cy="215" r="7"/>
    <circle cx="130" cy="190" r="7"/>
    <circle cx="130" cy="240" r="7"/>
    <circle cx="250" cy="180" r="7"/>
    <circle cx="250" cy="200" r="7"/>
    <circle cx="250" cy="230" r="7"/>
    <circle cx="250" cy="250" r="7"/>
  </g>
  <g fill="white" font-size="9" font-family="Georgia, serif" text-anchor="middle" font-weight="bold">
    <text x="40" y="218">S</text>
    <text x="130" y="193">R</text>
    <text x="130" y="243">B</text>
    <text x="250" y="183">R</text>
    <text x="250" y="203">B</text>
    <text x="250" y="233">R</text>
    <text x="250" y="253">B</text>
  </g>
  <g fill="#6b7280" font-size="9" font-family="sans-serif" text-anchor="middle">
    <text x="78" y="195">3/5</text>
    <text x="78" y="238">2/5</text>
    <text x="190" y="180">3/5</text>
    <text x="190" y="200">2/5</text>
    <text x="190" y="230">3/5</text>
    <text x="190" y="250">2/5</text>
  </g>
</svg>`,
      },
    },
    {
      kind: "callout",
      variant: "tip",
      title: "Testing for independence",
      content:
        "To check whether events are independent, verify whether $P(A \\cap B) = P(A) \\cdot P(B)$. If yes, they are independent. If $P(A \\cap B) \\neq P(A) \\cdot P(B)$, they are dependent. You cannot determine independence from mutual exclusivity alone.",
    },
    {
      kind: "check",
      id: "prob-c21",
      prompt:
        "A coin is tossed twice. Let $A$ = 'head on first toss', $B$ = 'head on second toss'. Are $A$ and $B$ independent? (yes/no)",
      format: "text",
      answer: "yes",
      hint: "$P(A) = 1/2$, $P(B) = 1/2$, $P(A \\cap B) = P(HH) = 1/4 = P(A) \\cdot P(B)$.",
      explanation:
        "$P(A \\cap B) = 1/4 = (1/2)(1/2) = P(A) \\cdot P(B)$. Yes, independent.",
    },
    {
      kind: "check",
      id: "prob-c22",
      prompt:
        "A bag has $4$ red and $6$ blue balls. Two are drawn without replacement. What is the probability both are red? Fraction in lowest terms.",
      format: "text",
      answer: "2/15",
      hint: "$P(\\text{1st red}) = 4/10$, then $P(\\text{2nd red}) = 3/9$.",
      explanation:
        "$\\frac{4}{10} \\times \\frac{3}{9} = \\frac{12}{90} = \\frac{2}{15}$.",
    },
    {
      kind: "check",
      id: "prob-c23",
      prompt:
        "A bag has $4$ red and $6$ blue balls. Two are drawn WITH replacement. What is the probability both are red? Fraction in lowest terms.",
      format: "text",
      answer: "4/25",
      hint: "With replacement: probabilities stay the same. $P = (4/10)^2$.",
      explanation:
        "$\\frac{4}{10} \\times \\frac{4}{10} = \\frac{16}{100} = \\frac{4}{25}$.",
    },
    {
      kind: "check",
      id: "prob-c24",
      prompt:
        "If $P(A) = 0.4$, $P(B) = 0.5$ and $A$, $B$ are independent, find $P(A \\cap B)$.",
      format: "text",
      answer: "0.2",
      hint: "Independent means $P(A \\cap B) = P(A) \\cdot P(B)$.",
      explanation: "$P(A \\cap B) = 0.4 \\times 0.5 = 0.2$.",
    },
    {
      kind: "check",
      id: "prob-c25",
      prompt:
        "If $P(A) = 0.4$, $P(B) = 0.5$ and $A$, $B$ are independent, find $P(A \\cup B)$.",
      format: "text",
      answer: "0.7",
      hint: "Use addition theorem: $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$.",
      explanation:
        "$P(A \\cup B) = 0.4 + 0.5 - 0.2 = 0.7$.",
    },
  ],
  workedExamples: [
    {
      kind: "example",
      title: "With vs without replacement",
      statement:
        "A box has $5$ white and $3$ black balls. Two balls are drawn. Find the probability of getting one white and one black ball (a) with replacement, (b) without replacement.",
      approach:
        "In each case, consider two paths: WB and BW. Add their probabilities.",
      solution:
        "**(a) With replacement:**\n$P(WB) = \\frac{5}{8} \\times \\frac{3}{8} = \\frac{15}{64}$. $P(BW) = \\frac{3}{8} \\times \\frac{5}{8} = \\frac{15}{64}$.\nTotal: $\\frac{30}{64} = \\frac{15}{32}$.\n\n**(b) Without replacement:**\n$P(WB) = \\frac{5}{8} \\times \\frac{3}{7} = \\frac{15}{56}$. $P(BW) = \\frac{3}{8} \\times \\frac{5}{7} = \\frac{15}{56}$.\nTotal: $\\frac{30}{56} = \\frac{15}{28}$.",
    },
  ],
  practiceProblemIds: [],
};

const sub6: SubChapter = {
  id: "multiplication-rule",
  title: "Multiplication rule",
  lesson: [
    {
      kind: "prose",
      heading: "6 · The multiplication rule",
      content:
        "The **multiplication rule** (AND rule) gives the probability that two events both occur.\n\n**For independent events:**\n$$P(A \\cap B) = P(A) \\cdot P(B)$$\n\n**Extension to $n$ independent events:**\n$$P(A_1 \\cap A_2 \\cap \\cdots \\cap A_n) = P(A_1) \\cdot P(A_2) \\cdots P(A_n)$$\n\n**For dependent events (general multiplication rule):**\n$$P(A \\cap B) = P(A) \\cdot P(B|A)$$\nwhere $P(B|A)$ is the conditional probability of $B$ given $A$.\n\n**Repeated independent trials:**\nIf a trial has probability $p$ of success, and we perform $n$ independent trials:\n- $P(\\text{all } n \\text{ succeed}) = p^n$\n- $P(\\text{all } n \\text{ fail}) = (1-p)^n = q^n$ where $q = 1-p$",
    },
    {
      kind: "callout",
      variant: "definition",
      title: "Conditional probability",
      content:
        "The probability of $B$ given that $A$ has occurred:\n$$P(B|A) = \\frac{P(A \\cap B)}{P(A)} \\quad \\text{(provided } P(A) > 0\\text{)}$$\n\nFor independent events, $P(B|A) = P(B)$ — knowing $A$ occurred doesn't change $B$'s probability.",
    },
    {
      kind: "check",
      id: "prob-c26",
      prompt:
        "A die is rolled $3$ times. What is the probability of getting a $6$ on all three rolls? Fraction.",
      format: "text",
      answer: "1/216",
      hint: "Independent trials: $P = (1/6)^3$.",
      explanation: "$P = (1/6)^3 = 1/216$.",
    },
    {
      kind: "check",
      id: "prob-c27",
      prompt:
        "A marksman hits a target with probability $0.8$ on each shot. He fires $3$ independent shots. What is the probability he hits on all three?",
      format: "text",
      answer: "0.512",
      hint: "$P = (0.8)^3$.",
      explanation: "$P = 0.8^3 = 0.512$.",
    },
    {
      kind: "check",
      id: "prob-c28",
      prompt:
        "Two cards are drawn without replacement from a $52$-card deck. What is the probability both are aces? Fraction in lowest terms.",
      format: "text",
      answer: "1/221",
      hint: "$P = (4/52) \\times (3/51)$.",
      explanation:
        "$P = \\frac{4}{52} \\times \\frac{3}{51} = \\frac{12}{2652} = \\frac{1}{221}$.",
    },
    {
      kind: "check",
      id: "prob-c29",
      prompt:
        "A machine produces defective items with probability $0.05$. Three items are selected independently. What is the probability none is defective?",
      format: "text",
      answer: "0.857375",
      hint: "$P(\\text{none defective}) = (1 - 0.05)^3 = (0.95)^3$.",
      explanation: "$P = 0.95^3 = 0.857375$.",
    },
    {
      kind: "check",
      id: "prob-c30",
      prompt:
        "Events $A$ and $B$ are such that $P(A) = 1/2$, $P(B|A) = 2/5$. Find $P(A \\cap B)$. Fraction in lowest terms.",
      format: "text",
      answer: "1/5",
      hint: "$P(A \\cap B) = P(A) \\cdot P(B|A)$.",
      explanation: "$P(A \\cap B) = (1/2)(2/5) = 2/10 = 1/5$.",
    },
  ],
  workedExamples: [
    {
      kind: "example",
      title: "Repeated trials",
      statement:
        "A biased coin shows heads with probability $2/3$. It is tossed $4$ times. Find the probability of getting heads on all four tosses.",
      approach: "Independent repeated trials — multiply probabilities.",
      solution:
        "$P(\\text{all heads}) = \\left(\\frac{2}{3}\\right)^4 = \\frac{16}{81}$.",
    },
  ],
  practiceProblemIds: [],
};

const sub7: SubChapter = {
  id: "at-least-one-exactly-one",
  title: "'At least one' and exactly one",
  lesson: [
    {
      kind: "prose",
      heading: "7 · 'At least one' and 'exactly one' problems",
      content:
        "**The complement trick for 'at least one':**\n\n$$P(\\text{at least one}) = 1 - P(\\text{none})$$\n\nThis is almost always simpler than summing the cases 'exactly $1$', 'exactly $2$', etc.\n\n**For $n$ independent events with individual probabilities $p_1, p_2, \\ldots, p_n$:**\n$$P(\\text{at least one occurs}) = 1 - (1-p_1)(1-p_2)\\cdots(1-p_n)$$\n\nIf all have the same probability $p$:\n$$P(\\text{at least one}) = 1 - (1-p)^n$$\n\n**Exactly one of two events:**\n$$P(\\text{exactly one of } A, B) = P(A) \\cdot P(\\bar{B}) + P(\\bar{A}) \\cdot P(B)$$\n\nFor independent events, this becomes:\n$$P(A)(1-P(B)) + (1-P(A))P(B)$$",
    },
    {
      kind: "callout",
      variant: "tip",
      title: "When to use the complement",
      content:
        "Whenever you see 'at least one', default to the complement method. It replaces a messy multi-case calculation with a single clean product. The same idea works for 'at least two' — but then subtract both 'none' and 'exactly one' from the total.",
    },
    {
      kind: "check",
      id: "prob-c31",
      prompt:
        "Two dice are rolled. What is the probability of getting at least one six? Fraction in lowest terms.",
      format: "text",
      answer: "11/36",
      hint: "$P(\\text{no six}) = (5/6)^2 = 25/36$.",
      explanation:
        "$P(\\text{at least one six}) = 1 - 25/36 = 11/36$.",
    },
    {
      kind: "check",
      id: "prob-c32",
      prompt:
        "A die is rolled $4$ times. What is the probability of getting at least one $6$? Give as a fraction with denominator $1296$.",
      format: "text",
      answer: "671/1296",
      hint: "$P(\\text{no six in 4 rolls}) = (5/6)^4 = 625/1296$.",
      explanation:
        "$P(\\text{at least one}) = 1 - 625/1296 = 671/1296$.",
    },
    {
      kind: "check",
      id: "prob-c33",
      prompt:
        "Three independent events $A$, $B$, $C$ have probabilities $1/2$, $1/3$, $1/4$ respectively. Find the probability that at least one occurs. Fraction in lowest terms.",
      format: "text",
      answer: "3/4",
      hint: "$P(\\text{none}) = (1-1/2)(1-1/3)(1-1/4) = (1/2)(2/3)(3/4)$.",
      explanation:
        "$P(\\text{none}) = \\frac{1}{2} \\times \\frac{2}{3} \\times \\frac{3}{4} = \\frac{6}{24} = \\frac{1}{4}$. So $P(\\text{at least one}) = 1 - 1/4 = 3/4$.",
    },
    {
      kind: "check",
      id: "prob-c34",
      prompt:
        "Two archers independently hit a target with probabilities $0.7$ and $0.8$. Find the probability that exactly one hits the target.",
      format: "text",
      answer: "0.38",
      hint: "$P(\\text{exactly one}) = P(A)P(\\bar{B}) + P(\\bar{A})P(B)$.",
      explanation:
        "$P = (0.7)(0.2) + (0.3)(0.8) = 0.14 + 0.24 = 0.38$.",
    },
    {
      kind: "check",
      id: "prob-c35",
      prompt:
        "The probability that a student passes English is $2/3$ and passes Maths is $4/9$. If the two are independent, find the probability the student passes at least one subject. Fraction in lowest terms.",
      format: "text",
      answer: "22/27",
      hint: "$P(\\text{fails both}) = (1 - 2/3)(1 - 4/9) = (1/3)(5/9)$.",
      explanation:
        "$P(\\text{fails both}) = \\frac{1}{3} \\times \\frac{5}{9} = \\frac{5}{27}$. $P(\\text{at least one}) = 1 - \\frac{5}{27} = \\frac{22}{27}$.",
    },
    {
      kind: "check",
      id: "prob-c36",
      prompt:
        "A fair coin is tossed $5$ times. What is the probability of getting at least one head? Fraction in lowest terms.",
      format: "text",
      answer: "31/32",
      hint: "$P(\\text{no heads}) = (1/2)^5 = 1/32$.",
      explanation:
        "$P(\\text{at least one head}) = 1 - 1/32 = 31/32$.",
    },
  ],
  workedExamples: [
    {
      kind: "example",
      title: "At least one defective item",
      statement:
        "A box has $10$ items, $3$ of which are defective. Two items are drawn at random without replacement. Find the probability that at least one is defective.",
      approach:
        "Complement: $P(\\text{at least one defective}) = 1 - P(\\text{both good})$.",
      solution:
        "$P(\\text{both good}) = \\frac{7}{10} \\times \\frac{6}{9} = \\frac{42}{90} = \\frac{7}{15}$.\n\n$P(\\text{at least one defective}) = 1 - \\frac{7}{15} = \\frac{8}{15}$.",
    },
    {
      kind: "example",
      title: "Exactly one success from multiple events",
      statement:
        "Three students A, B, C independently attempt a problem. Their probabilities of solving it are $1/2$, $1/3$, $1/4$ respectively. Find the probability that exactly one solves it.",
      approach:
        "Three mutually exclusive paths: only A solves, only B solves, only C solves.",
      solution:
        "$P(\\text{only A}) = \\frac{1}{2} \\times \\frac{2}{3} \\times \\frac{3}{4} = \\frac{6}{24} = \\frac{1}{4}$\n\n$P(\\text{only B}) = \\frac{1}{2} \\times \\frac{1}{3} \\times \\frac{3}{4} = \\frac{3}{24} = \\frac{1}{8}$\n\n$P(\\text{only C}) = \\frac{1}{2} \\times \\frac{2}{3} \\times \\frac{1}{4} = \\frac{2}{24} = \\frac{1}{12}$\n\nTotal: $\\frac{1}{4} + \\frac{1}{8} + \\frac{1}{12} = \\frac{6+3+2}{24} = \\frac{11}{24}$.",
    },
  ],
  practiceProblemIds: [],
};

const sub8: SubChapter = {
  id: "coins-dice-cards",
  title: "Problems with coins, dice and cards",
  lesson: [
    {
      kind: "prose",
      heading: "8 · Standard problems with coins, dice and cards",
      content:
        "**Coins:**\n- $n$ coins tossed: $|S| = 2^n$\n- $P(\\text{exactly } k \\text{ heads in } n \\text{ tosses}) = \\frac{\\binom{n}{k}}{2^n}$\n\n**Dice:**\n- One die: $|S| = 6$\n- Two dice: $|S| = 36$. The number of ways to get sum $s$:\n  - Sum $2$ or $12$: $1$ way\n  - Sum $3$ or $11$: $2$ ways\n  - Sum $4$ or $10$: $3$ ways\n  - Sum $5$ or $9$: $4$ ways\n  - Sum $6$ or $8$: $5$ ways\n  - Sum $7$: $6$ ways (the most likely sum)\n\n**Cards ($52$-card deck):**\n- $4$ suits: hearts ($\\heartsuit$), diamonds ($\\diamondsuit$), clubs ($\\clubsuit$), spades ($\\spadesuit$)\n- Each suit: $13$ cards (A, 2-10, J, Q, K)\n- Face cards (J, Q, K): $12$ total\n- Red cards: $26$ (hearts + diamonds)\n- Black cards: $26$ (clubs + spades)\n\n**Birthday-type problems:**\nThe probability that among $n$ people, at least two share a birthday (ignoring Feb 29):\n$$P = 1 - \\frac{365 \\times 364 \\times \\cdots \\times (365-n+1)}{365^n}$$\nWith just $23$ people, this exceeds $50\\%$!",
    },
    {
      kind: "callout",
      variant: "tip",
      title: "Systematic approach for card problems",
      content:
        "For card problems:\n1. Identify $|S|$ — usually $\\binom{52}{r}$ if drawing $r$ cards unordered.\n2. Count favourable outcomes using combinations.\n3. Apply: $P = \\frac{\\text{favourable}}{|S|}$.\n\nFor example, $P(\\text{2 cards are both hearts}) = \\frac{\\binom{13}{2}}{\\binom{52}{2}} = \\frac{78}{1326} = \\frac{1}{17}$.",
    },
    {
      kind: "callout",
      variant: "warning",
      title: "Common card-problem trap",
      content:
        "When drawing multiple cards, the sample space depends on whether draws are ordered or unordered. Stick with one convention throughout. Unordered (combinations) is usually cleaner for 'hand' problems.",
    },
    {
      kind: "check",
      id: "prob-c37",
      prompt:
        "Three coins are tossed. What is the probability of getting exactly $2$ heads? Fraction in lowest terms.",
      format: "text",
      answer: "3/8",
      hint: "Favourable: $\\binom{3}{2} = 3$. Total: $2^3 = 8$.",
      explanation: "$P = \\binom{3}{2}/2^3 = 3/8$.",
    },
    {
      kind: "check",
      id: "prob-c38",
      prompt:
        "Two dice are rolled. What is the probability the sum is $7$? Fraction in lowest terms.",
      format: "text",
      answer: "1/6",
      hint: "Sum $7$ has $6$ favourable outcomes out of $36$.",
      explanation: "$P = 6/36 = 1/6$.",
    },
    {
      kind: "check",
      id: "prob-c39",
      prompt:
        "Two cards are drawn without replacement from a $52$-card deck. What is the probability both are kings? Fraction in lowest terms.",
      format: "text",
      answer: "1/221",
      hint: "$\\frac{\\binom{4}{2}}{\\binom{52}{2}} = \\frac{6}{1326}$.",
      explanation:
        "$P = \\frac{6}{1326} = \\frac{1}{221}$.",
    },
    {
      kind: "check",
      id: "prob-c40",
      prompt:
        "Five coins are tossed. What is the probability of getting at most $1$ head? Fraction in lowest terms.",
      format: "text",
      answer: "3/16",
      hint: "At most $1$ head means $0$ or $1$: $\\binom{5}{0} + \\binom{5}{1} = 1 + 5 = 6$ out of $32$.",
      explanation: "$P = 6/32 = 3/16$.",
    },
    {
      kind: "check",
      id: "prob-c41",
      prompt:
        "From a deck of $52$ cards, one card is drawn. What is the probability it is a red face card? Fraction in lowest terms.",
      format: "text",
      answer: "3/26",
      hint: "Red face cards: hearts (J, Q, K) + diamonds (J, Q, K) $= 6$.",
      explanation: "$P = 6/52 = 3/26$.",
    },
    {
      kind: "check",
      id: "prob-c42",
      prompt:
        "Two dice are rolled. What is the probability the product of the numbers is odd? Fraction in lowest terms.",
      format: "text",
      answer: "1/4",
      hint: "Product is odd only if BOTH dice show odd. Odd outcomes per die: $3$.",
      explanation:
        "Both odd: $3 \\times 3 = 9$ out of $36$. $P = 9/36 = 1/4$.",
    },
    {
      kind: "check",
      id: "prob-c43",
      prompt:
        "What is the minimum number of people needed in a room so that the probability of at least two sharing a birthday exceeds $50\\%$?",
      format: "numeric",
      answer: "23",
      hint: "The famous birthday problem. For $n = 23$, $P \\approx 0.507$.",
      explanation:
        "For $n = 22$: $P \\approx 0.476 < 0.5$. For $n = 23$: $P \\approx 0.507 > 0.5$. So $23$ people are needed.",
    },
  ],
  workedExamples: [
    {
      kind: "example",
      title: "Card probability with combinations",
      statement:
        "From a $52$-card deck, $5$ cards are drawn. Find the probability of getting exactly $3$ hearts and $2$ spades.",
      approach:
        "Sample space: $\\binom{52}{5}$. Choose hearts and spades separately, then multiply.",
      solution:
        "Favourable: $\\binom{13}{3} \\times \\binom{13}{2} = 286 \\times 78 = 22308$.\n\nTotal: $\\binom{52}{5} = 2598960$.\n\n$P = \\frac{22308}{2598960} = \\frac{143}{16660} \\approx 0.00858$.",
    },
    {
      kind: "example",
      title: "Dice — probability of a specific sum",
      statement:
        "Three dice are rolled. Find the probability that the sum equals $10$.",
      approach:
        "Count ordered triples $(a, b, c)$ with $a+b+c = 10$ and $1 \\leq a, b, c \\leq 6$. Total outcomes: $6^3 = 216$.",
      solution:
        "We need integer solutions to $a+b+c = 10$ with $1 \\leq a,b,c \\leq 6$.\n\nSubstitute $x = a-1$, etc: $x+y+z = 7$, $0 \\leq x,y,z \\leq 5$.\n\nWithout upper bound: $\\binom{9}{2} = 36$. Subtract cases where any variable $> 5$ (i.e. $\\geq 6$): if $x \\geq 6$, let $x' = x-6$: $x'+y+z = 1$, giving $\\binom{3}{2} = 3$ solutions. By symmetry, $3 \\times 3 = 9$.\n\nFavourable: $36 - 9 = 27$.\n\n$P = \\frac{27}{216} = \\frac{1}{8}$.",
    },
  ],
  practiceProblemIds: [],
};

// ═══════════════════════════════════════════════════════════════════════════════
// MAIN CHAPTER EXPORT
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Probability chapter — comprehensive coverage from sample spaces through
 * independence, multiplication rule, 'at least one', and standard coin/dice/card
 * problems. Based on S.Chand Chapter 9 syllabus for IMC & HMC preparation.
 */
export const countingChapter: Chapter = {
  id: "ch-count-1",
  title: "Probability",
  topic: "probability",
  order: 60,
  examFocus: "both",
  difficulty: "medium",
  estMinutes: 90,
  prerequisites: ["ch-comb-1"],
  blurb:
    "A thorough introduction to probability: from experiments and sample spaces through the classical definition, addition and multiplication theorems, independent events, the powerful 'at least one' complement technique, and systematic problem-solving with coins, dice and cards.",

  intro: {
    whyItMatters:
      "Probability is the mathematics of uncertainty. Every counting technique you have learnt feeds directly into calculating probabilities — the ratio of favourable to total outcomes. Mastering these ideas gives you a rigorous framework for reasoning about chance, risk, and expectation.",
    whereItAppears:
      "IMC reliably includes probability questions involving dice, coins, cards, or 'at least one' scenarios. Hamilton papers require precise reasoning about independent events, conditional probability, and complement arguments — always with full justification.",
    typicalPatterns: [
      "Classical probability: count favourable outcomes over equally likely total.",
      "'At least one' solved via the complement: $1 - P(\\text{none})$.",
      "Multi-stage experiments using the multiplication rule (with/without replacement).",
      "Addition theorem to handle 'or' events, avoiding double-counting.",
      "Standard setups: coins ($2^n$), dice ($6^n$), cards ($\\binom{52}{r}$).",
    ],
    commonMistakes: [
      "Treating non-equally-likely outcomes as if they were equally likely.",
      "Forgetting to adjust probabilities when drawing without replacement.",
      "Adding probabilities of non-mutually-exclusive events without subtracting the overlap.",
      "Confusing 'independent' with 'mutually exclusive'.",
      "Computing 'at least one' by listing cases instead of using the complement.",
    ],
  },

  subChapters: [sub1, sub2, sub3, sub4, sub5, sub6, sub7, sub8],

  lesson: [],

  workedExamples: [
    {
      kind: "example",
      title: "Complete probability problem — dice",
      statement:
        "Two fair dice are thrown. Find the probability that (a) the sum is at most $4$, (b) the sum is a prime number.",
      approach:
        "List favourable outcomes from the $36$ equally likely pairs.",
      solution:
        "**(a)** Sum $\\leq 4$: sum $2$ → $(1,1)$; sum $3$ → $(1,2),(2,1)$; sum $4$ → $(1,3),(2,2),(3,1)$. Total: $6$. $P = 6/36 = 1/6$.\n\n**(b)** Prime sums: $2, 3, 5, 7, 11$. Ways: $1 + 2 + 4 + 6 + 2 = 15$. $P = 15/36 = 5/12$.",
    },
    {
      kind: "example",
      title: "Complete probability problem — independent events",
      statement:
        "A and B independently try to solve a problem. P(A solves) = $2/3$, P(B solves) = $3/5$. Find the probability that (a) both solve it, (b) at least one solves it, (c) exactly one solves it.",
      approach: "Use independence ($P(A \\cap B) = P(A) \\cdot P(B)$) and complement.",
      solution:
        "**(a)** $P(\\text{both}) = \\frac{2}{3} \\times \\frac{3}{5} = \\frac{6}{15} = \\frac{2}{5}$.\n\n**(b)** $P(\\text{at least one}) = 1 - P(\\text{neither}) = 1 - \\frac{1}{3} \\times \\frac{2}{5} = 1 - \\frac{2}{15} = \\frac{13}{15}$.\n\n**(c)** $P(\\text{exactly one}) = P(A)P(\\bar{B}) + P(\\bar{A})P(B) = \\frac{2}{3} \\times \\frac{2}{5} + \\frac{1}{3} \\times \\frac{3}{5} = \\frac{4}{15} + \\frac{3}{15} = \\frac{7}{15}$.",
    },
    {
      kind: "example",
      title: "Complement method — 'at least one'",
      statement:
        "A bag contains $6$ red and $4$ white balls. Three balls are drawn without replacement. Find the probability of getting at least one red ball.",
      approach:
        "Complement: $P(\\text{at least one red}) = 1 - P(\\text{all white})$.",
      solution:
        "$P(\\text{all white}) = \\frac{\\binom{4}{3}}{\\binom{10}{3}} = \\frac{4}{120} = \\frac{1}{30}$.\n\n$P(\\text{at least one red}) = 1 - \\frac{1}{30} = \\frac{29}{30}$.",
    },
  ],

  practiceProblemIds: [
    "cp-002",
    "cp-001",
    "cp-008",
    "cp-004",
    "cp-011",
    "cp-009",
    "cp-006",
    "cp-003",
  ],
  challengeProblemIds: [
    "cp-005",
    "cp-007",
    "lg-002",
    "cp-010",
    "cp-012",
  ],

  summary: {
    keyFormulas: [
      "Classical probability: $P(A) = \\dfrac{n(A)}{n(S)}$",
      "Complement: $P(\\bar{A}) = 1 - P(A)$",
      "Addition: $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$",
      "Independent events: $P(A \\cap B) = P(A) \\cdot P(B)$",
      "At least one: $1 - (1-p_1)(1-p_2)\\cdots(1-p_n)$",
      "Repeated trials (all succeed): $P = p^n$",
      "Odds in favour: $P(A) : P(\\bar{A})$",
      "Conditional: $P(B|A) = \\dfrac{P(A \\cap B)}{P(A)}$",
    ],
    bigIdeas: [
      "Probability is a ratio: favourable equally-likely outcomes over total equally-likely outcomes.",
      "'At least one' is almost always solved via the complement — $1 - P(\\text{none})$.",
      "Independent events multiply; the occurrence of one doesn't change the other's probability.",
      "Without replacement makes events dependent — probabilities change at each stage.",
      "The addition theorem handles 'or' by correcting for double-counted overlaps.",
    ],
    patternTips: [
      "'At least one' → immediately think complement.",
      "Two dice → denominator is $36$; three dice → $216$.",
      "Cards: use $\\binom{52}{r}$ as the sample space for $r$-card draws.",
      "With/without replacement → check whether probabilities change between stages.",
      "Odds $m:n$ ↔ probability $m/(m+n)$ — convert as needed.",
    ],
    traps: [
      "Non-equally-likely outcomes used as a denominator (e.g. sums of dice).",
      "Adding probabilities of non-mutually-exclusive events without subtracting the intersection.",
      "Confusing 'mutually exclusive' (can't both happen) with 'independent' (one doesn't affect the other).",
      "Forgetting to update pool size for without-replacement problems.",
      "Using $P(A) + P(B)$ when events overlap — always check for $P(A \\cap B)$.",
    ],
    revisionNotes: [
      "Memorise dice-sum counts: sum $7$ has $6$ ways (the maximum), symmetric around $7$.",
      "For $n$ coins: $P(k \\text{ heads}) = \\binom{n}{k}/2^n$.",
      "Cards: $52$ total, $4$ suits of $13$, face cards = $12$, aces = $4$.",
      "Birthday problem: $23$ people gives $> 50\\%$ chance of a shared birthday.",
      "Always verify: are outcomes equally likely? Is drawing with or without replacement?",
    ],
  },
};
