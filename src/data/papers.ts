import type { PastPaper, PaperExam } from "@/lib/types";
import { IMC_2024_QUESTIONS } from "./papers/imc-2024";
import { IMC_2023_QUESTIONS } from "./papers/imc-2023";
import { IMC_2022_QUESTIONS } from "./papers/imc-2022";
import { IMC_2021_QUESTIONS } from "./papers/imc-2021";
import { IMC_2020_QUESTIONS } from "./papers/imc-2020";
import { IMC_2019_QUESTIONS } from "./papers/imc-2019";
import { IMC_2018_QUESTIONS } from "./papers/imc-2018";
import { IMC_2017_QUESTIONS } from "./papers/imc-2017";
import { IMC_2016_QUESTIONS } from "./papers/imc-2016";
import { IMC_2015_QUESTIONS } from "./papers/imc-2015";
import { HMC_2026_QUESTIONS } from "./papers/hmc-2026";
import { HMC_2025_QUESTIONS } from "./papers/hmc-2025";
import { HMC_2024_QUESTIONS } from "./papers/hmc-2024";
import { HMC_2023_QUESTIONS } from "./papers/hmc-2023";
import { HMC_2022_QUESTIONS } from "./papers/hmc-2022";
import { HMC_2021_QUESTIONS } from "./papers/hmc-2021";
import { HMC_2020_QUESTIONS } from "./papers/hmc-2020";
import { HMC_2019_QUESTIONS } from "./papers/hmc-2019";
import { HMC_2018_QUESTIONS } from "./papers/hmc-2018";
import { HMC_2017_QUESTIONS } from "./papers/hmc-2017";
import { HMC_2016_QUESTIONS } from "./papers/hmc-2016";
import { HMC_2015_QUESTIONS } from "./papers/hmc-2015";

/**
 * Past papers (PYQ) for both challenges, grouped into two exam families:
 *
 *  - IMC — Intermediate Mathematical Challenge (25 MCQ, 60 min)
 *  - HMC — Hamilton Mathematical Challenge / Olympiad (written, 2 hr)
 *
 * Papers come in two flavours. A flagship in-app paper carries fully
 * transcribed `questions` so students read and answer everything on-page and
 * are scored instantly. Self-mark papers omit `questions`: to respect UKMT
 * copyright at scale we don't host their text — they link out to UKMT's
 * official PDFs and the app wraps them with a timer, self-mark grid and the
 * authentic scoring scheme.
 *
 * Answer keys are added only when verified against an official source; until
 * then `answers` is left empty and `verified` is false, but the paper still
 * appears so students can open it and time themselves.
 */

const blank = (n: number) => Array<string>(n).fill("");

export const PAPERS: PastPaper[] = [
  {
    id: "imc-2024",
    exam: "IMC",
    year: 2024,
    questionCount: 25,
    minutes: 60,
    questionsUrl:
      "https://ukmt.org.uk/competition-papers?title=intermediate+mathematical+challenge",
    solutionsUrl:
      "https://ukmt.org.uk/competition-papers?title=intermediate+mathematical+challenge",
    // Fully transcribed for in-app attempts; key verified against the official
    // UKMT IMC 2024 solutions.
    questions: IMC_2024_QUESTIONS,
    answers: [
      "D", "A", "A", "D", "C",
      "C", "B", "C", "D", "B",
      "C", "D", "C", "B", "B",
      "D", "E", "E", "A", "D",
      "E", "E", "B", "C", "E",
    ],
    verified: true,
    answerSource: "Official UKMT IMC 2024 answer key",
  },
  {
    id: "imc-2023",
    exam: "IMC",
    year: 2023,
    questionCount: 25,
    minutes: 60,
    questionsUrl:
      "https://ukmt.org.uk/competition-papers?title=intermediate+mathematical+challenge",
    solutionsUrl:
      "https://ukmt.org.uk/competition-papers?title=intermediate+mathematical+challenge",
    // Fully transcribed for in-app attempts; key verified against the official
    // UKMT IMC 2023 solutions.
    questions: IMC_2023_QUESTIONS,
    answers: [
      "D", "A", "B", "D", "B",
      "E", "B", "E", "B", "D",
      "B", "E", "A", "C", "A",
      "A", "C", "B", "E", "B",
      "A", "E", "D", "C", "D",
    ],
    verified: true,
    answerSource: "Official UKMT IMC 2023 answer key",
  },
  {
    id: "imc-2022",
    exam: "IMC",
    year: 2022,
    questionCount: 25,
    minutes: 60,
    questionsUrl:
      "https://ukmt.org.uk/competition-papers?title=intermediate+mathematical+challenge",
    solutionsUrl:
      "https://ukmt.org.uk/competition-papers?title=intermediate+mathematical+challenge",
    // Fully transcribed for in-app attempts; key verified against the official
    // UKMT IMC 2022 solutions.
    questions: IMC_2022_QUESTIONS,
    answers: [
      "B", "A", "B", "D", "C",
      "D", "E", "A", "E", "C",
      "E", "A", "C", "D", "E",
      "D", "C", "B", "A", "D",
      "B", "D", "E", "B", "C",
    ],
    verified: true,
    answerSource: "Official UKMT IMC 2022 answer key",
  },
  {
    id: "imc-2021",
    exam: "IMC",
    year: 2021,
    questionCount: 25,
    minutes: 60,
    questionsUrl:
      "https://ukmt.org.uk/competition-papers?title=intermediate+mathematical+challenge",
    solutionsUrl:
      "https://ukmt.org.uk/competition-papers?title=intermediate+mathematical+challenge",
    // Fully transcribed for in-app attempts; key verified against the official
    // UKMT IMC 2021 solutions.
    questions: IMC_2021_QUESTIONS,
    answers: [
      "B", "A", "C", "A", "D",
      "E", "C", "B", "D", "D",
      "E", "E", "A", "B", "D",
      "E", "D", "C", "A", "B",
      "D", "E", "B", "B", "E",
    ],
    verified: true,
    answerSource: "Official UKMT IMC 2021 answer key",
  },
  {
    id: "imc-2020",
    exam: "IMC",
    year: 2020,
    questionCount: 25,
    minutes: 60,
    questionsUrl:
      "https://ukmt.org.uk/competition-papers?title=intermediate+mathematical+challenge",
    solutionsUrl:
      "https://ukmt.org.uk/competition-papers?title=intermediate+mathematical+challenge",
    // Fully transcribed for in-app attempts; key verified against the official
    // UKMT IMC 2020 solutions.
    questions: IMC_2020_QUESTIONS,
    answers: [
      "A", "E", "B", "D", "D",
      "C", "B", "E", "E", "B",
      "E", "B", "C", "A", "A",
      "E", "E", "C", "B", "D",
      "B", "C", "A", "A", "A",
    ],
    verified: true,
    answerSource: "Official UKMT IMC 2020 answer key",
  },
  {
    id: "imc-2019",
    exam: "IMC",
    year: 2019,
    questionCount: 25,
    minutes: 60,
    questionsUrl:
      "https://ukmt.org.uk/competition-papers?title=intermediate+mathematical+challenge",
    solutionsUrl:
      "https://ukmt.org.uk/competition-papers?title=intermediate+mathematical+challenge",
    // Fully transcribed for in-app attempts; key verified against the official
    // UKMT IMC 2019 solutions.
    questions: IMC_2019_QUESTIONS,
    answers: [
      "B", "E", "D", "B", "D",
      "B", "B", "E", "C", "B",
      "C", "C", "A", "C", "A",
      "A", "D", "B", "E", "B",
      "D", "E", "A", "C", "D",
    ],
    verified: true,
    answerSource: "Official UKMT IMC 2019 answer key",
  },
  {
    id: "imc-2018",
    exam: "IMC",
    year: 2018,
    questionCount: 25,
    minutes: 60,
    questionsUrl:
      "https://ukmt.org.uk/competition-papers?title=intermediate+mathematical+challenge",
    solutionsUrl:
      "https://ukmt.org.uk/competition-papers?title=intermediate+mathematical+challenge",
    // Fully transcribed for in-app attempts; key verified against the official
    // UKMT IMC 2018 solutions.
    questions: IMC_2018_QUESTIONS,
    answers: [
      "B", "B", "C", "D", "B",
      "A", "B", "A", "E", "E",
      "B", "E", "C", "C", "E",
      "C", "D", "A", "D", "E",
      "D", "E", "A", "B", "D",
    ],
    verified: true,
    answerSource: "Official UKMT IMC 2018 answer key",
  },
  {
    id: "imc-2017",
    exam: "IMC",
    year: 2017,
    questionCount: 25,
    minutes: 60,
    questionsUrl:
      "https://ukmt.org.uk/competition-papers?title=intermediate+mathematical+challenge",
    solutionsUrl:
      "https://ukmt.org.uk/competition-papers?title=intermediate+mathematical+challenge",
    questions: IMC_2017_QUESTIONS,
    answers: [
      "D", "B", "A", "D", "B",
      "D", "C", "D", "B", "A",
      "E", "D", "A", "B", "C",
      "D", "B", "E", "E", "D",
      "A", "C", "D", "C", "A",
    ],
    verified: true,
    answerSource: "Official UKMT IMC 2017 answer key",
  },
  {
    id: "imc-2016",
    exam: "IMC",
    year: 2016,
    questionCount: 25,
    minutes: 60,
    questionsUrl:
      "https://ukmt.org.uk/competition-papers?title=intermediate+mathematical+challenge",
    solutionsUrl:
      "https://ukmt.org.uk/competition-papers?title=intermediate+mathematical+challenge",
    questions: IMC_2016_QUESTIONS,
    answers: [
      "B", "D", "B", "E", "A",
      "C", "C", "E", "C", "E",
      "D", "D", "B", "D", "A",
      "B", "B", "C", "B", "D",
      "A", "E", "B", "C", "D",
    ],
    verified: true,
    answerSource: "Official UKMT IMC 2016 answer key",
  },
  {
    id: "imc-2015",
    exam: "IMC",
    year: 2015,
    questionCount: 25,
    minutes: 60,
    questionsUrl:
      "https://ukmt.org.uk/competition-papers?title=intermediate+mathematical+challenge",
    solutionsUrl:
      "https://ukmt.org.uk/competition-papers?title=intermediate+mathematical+challenge",
    questions: IMC_2015_QUESTIONS,
    answers: [
      "A", "E", "E", "C", "B",
      "D", "E", "B", "B", "C",
      "D", "D", "A", "C", "C",
      "D", "D", "A", "A", "C",
      "D", "B", "B", "E", "D",
    ],
    verified: true,
    answerSource: "Official UKMT IMC 2015 answer key",
  },

  // ─── HMC (Hamilton) ───────────────────────────────────────────────────────
  // Hamilton is a written-solution olympiad (6 questions, 2 hours) — there's no
  // answer grid to auto-score, so these list as self-mark papers that open the
  // official paper and full solutions for you to mark against.
  {
    id: "hmc-2026",
    exam: "HMC",
    year: 2026,
    questionCount: 6,
    minutes: 120,
    questionsUrl:
      "https://ukmt.org.uk/competition-papers?title=hamilton",
    solutionsUrl:
      "https://ukmt.org.uk/competition-papers?title=hamilton",
    // Fully transcribed for in-app timed practice. Hamilton is a written
    // olympiad — full solutions required, no auto-scoring possible.
    questions: HMC_2026_QUESTIONS,
    answers: blank(6),
    verified: false,
    notes:
      "Hamilton is a 2-hour, 6-question written olympiad. Read the questions in-app, write full solutions on paper, then mark against UKMT's published solutions.",
  },
  {
    id: "hmc-2025",
    exam: "HMC",
    year: 2025,
    questionCount: 6,
    minutes: 120,
    questionsUrl:
      "https://ukmt.org.uk/competition-papers?title=hamilton",
    solutionsUrl:
      "https://ukmt.org.uk/competition-papers?title=hamilton",
    questions: HMC_2025_QUESTIONS,
    answers: blank(6),
    verified: false,
    notes:
      "Hamilton is a 2-hour, 6-question written olympiad. Read the questions in-app, write full solutions on paper, then mark against UKMT's published solutions.",
  },
  {
    id: "hmc-2024",
    exam: "HMC",
    year: 2024,
    questionCount: 6,
    minutes: 120,
    questionsUrl:
      "https://ukmt.org.uk/competition-papers?title=hamilton",
    solutionsUrl:
      "https://ukmt.org.uk/competition-papers?title=hamilton",
    questions: HMC_2024_QUESTIONS,
    answers: blank(6),
    verified: false,
    notes:
      "Hamilton is a 2-hour, 6-question written olympiad. Read the questions in-app, write full solutions on paper, then mark against UKMT's published solutions.",
  },
  {
    id: "hmc-2023",
    exam: "HMC",
    year: 2023,
    questionCount: 6,
    minutes: 120,
    questionsUrl:
      "https://ukmt.org.uk/competition-papers?title=hamilton",
    solutionsUrl:
      "https://ukmt.org.uk/competition-papers?title=hamilton",
    questions: HMC_2023_QUESTIONS,
    answers: blank(6),
    verified: false,
    notes:
      "Hamilton is a 2-hour, 6-question written olympiad. Read the questions in-app, write full solutions on paper, then mark against UKMT's published solutions.",
  },
  {
    id: "hmc-2022",
    exam: "HMC",
    year: 2022,
    questionCount: 6,
    minutes: 120,
    questionsUrl:
      "https://ukmt.org.uk/competition-papers?title=hamilton",
    solutionsUrl:
      "https://ukmt.org.uk/competition-papers?title=hamilton",
    questions: HMC_2022_QUESTIONS,
    answers: blank(6),
    verified: false,
    notes:
      "Hamilton is a 2-hour, 6-question written olympiad. Read the questions in-app, write full solutions on paper, then mark against UKMT's published solutions.",
  },
  {
    id: "hmc-2021",
    exam: "HMC",
    year: 2021,
    questionCount: 6,
    minutes: 120,
    questionsUrl:
      "https://ukmt.org.uk/competition-papers?title=hamilton",
    solutionsUrl:
      "https://ukmt.org.uk/competition-papers?title=hamilton",
    questions: HMC_2021_QUESTIONS,
    answers: blank(6),
    verified: false,
    notes:
      "Hamilton is a 2-hour, 6-question written olympiad. Read the questions in-app, write full solutions on paper, then mark against UKMT's published solutions.",
  },
  {
    id: "hmc-2020",
    exam: "HMC",
    year: 2020,
    questionCount: 6,
    minutes: 120,
    questionsUrl:
      "https://ukmt.org.uk/competition-papers?title=hamilton",
    solutionsUrl:
      "https://ukmt.org.uk/competition-papers?title=hamilton",
    questions: HMC_2020_QUESTIONS,
    answers: blank(6),
    verified: false,
    notes:
      "Hamilton is a 2-hour, 6-question written olympiad. Read the questions in-app, write full solutions on paper, then mark against UKMT's published solutions.",
  },
  {
    id: "hmc-2019",
    exam: "HMC",
    year: 2019,
    questionCount: 6,
    minutes: 120,
    questionsUrl:
      "https://ukmt.org.uk/competition-papers?title=hamilton",
    solutionsUrl:
      "https://ukmt.org.uk/competition-papers?title=hamilton",
    questions: HMC_2019_QUESTIONS,
    answers: blank(6),
    verified: false,
    notes:
      "Hamilton is a 2-hour, 6-question written olympiad. Read the questions in-app, write full solutions on paper, then mark against UKMT's published solutions.",
  },
  {
    id: "hmc-2018",
    exam: "HMC",
    year: 2018,
    questionCount: 6,
    minutes: 120,
    questionsUrl:
      "https://ukmt.org.uk/competition-papers?title=hamilton",
    solutionsUrl:
      "https://ukmt.org.uk/competition-papers?title=hamilton",
    questions: HMC_2018_QUESTIONS,
    answers: blank(6),
    verified: false,
    notes:
      "Hamilton is a 2-hour, 6-question written olympiad. Read the questions in-app, write full solutions on paper, then mark against UKMT's published solutions.",
  },
  {
    id: "hmc-2017",
    exam: "HMC",
    year: 2017,
    questionCount: 6,
    minutes: 120,
    questionsUrl:
      "https://ukmt.org.uk/competition-papers?title=hamilton",
    solutionsUrl:
      "https://ukmt.org.uk/competition-papers?title=hamilton",
    questions: HMC_2017_QUESTIONS,
    answers: blank(6),
    verified: false,
    notes:
      "Hamilton is a 2-hour, 6-question written olympiad. Read the questions in-app, write full solutions on paper, then mark against UKMT's published solutions.",
  },
  {
    id: "hmc-2016",
    exam: "HMC",
    year: 2016,
    questionCount: 6,
    minutes: 120,
    questionsUrl:
      "https://ukmt.org.uk/competition-papers?title=hamilton",
    solutionsUrl:
      "https://ukmt.org.uk/competition-papers?title=hamilton",
    questions: HMC_2016_QUESTIONS,
    answers: blank(6),
    verified: false,
    notes:
      "Hamilton is a 2-hour, 6-question written olympiad. Read the questions in-app, write full solutions on paper, then mark against UKMT's published solutions.",
  },
  {
    id: "hmc-2015",
    exam: "HMC",
    year: 2015,
    questionCount: 6,
    minutes: 120,
    questionsUrl:
      "https://ukmt.org.uk/competition-papers?title=hamilton",
    solutionsUrl:
      "https://ukmt.org.uk/competition-papers?title=hamilton",
    questions: HMC_2015_QUESTIONS,
    answers: blank(6),
    verified: false,
    notes:
      "Hamilton is a 2-hour, 6-question written olympiad. Read the questions in-app, write full solutions on paper, then mark against UKMT's published solutions.",
  },
];

export const PAPER_BY_ID = Object.fromEntries(
  PAPERS.map((p) => [p.id, p])
) as Record<string, PastPaper>;

/** Display metadata for each exam family (used to render the sub-groups). */
export const EXAM_GROUPS: {
  exam: PaperExam;
  name: string;
  blurb: string;
}[] = [
  {
    exam: "IMC",
    name: "IMC — Intermediate Mathematical Challenge",
    blurb:
      "25 multiple-choice questions in 60 minutes. Sit a paper in-app and get an instant authentic score.",
  },
  {
    exam: "HMC",
    name: "HMC — Hamilton Mathematical Challenge",
    blurb:
      "A 2-hour written olympiad of 6 problems requiring full justified solutions. Self-marked against UKMT solutions.",
  },
];

/** Papers for a given exam family, newest year first. */
export function papersByExam(exam: PaperExam): PastPaper[] {
  return PAPERS.filter((p) => p.exam === exam).sort((a, b) => b.year - a.year);
}

/**
 * IMC marking: Q1–15 score 5 (no penalty); Q16–20 score 6 (−1 if wrong);
 * Q21–25 score 6 (−2 if wrong); blank scores 0.
 */
export function imcQuestionMarks(index: number): {
  points: number;
  penalty: number;
} {
  if (index < 15) return { points: 5, penalty: 0 };
  if (index < 20) return { points: 6, penalty: 1 };
  return { points: 6, penalty: 2 };
}

export function imcMaxScore(questionCount = 25): number {
  let total = 0;
  for (let i = 0; i < questionCount; i++) total += imcQuestionMarks(i).points;
  return total; // 135 for a full paper
}
