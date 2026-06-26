import type { PastPaper, PaperExam } from "@/lib/types";
import { IMC_2024_QUESTIONS } from "./papers/imc-2024";
import { IMC_2023_QUESTIONS } from "./papers/imc-2023";
import { IMC_2022_QUESTIONS } from "./papers/imc-2022";

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
    answers: blank(25),
    verified: false,
    notes:
      "Open the official paper and solutions from UKMT, then time yourself. Answer key to be added once verified.",
  },
  {
    id: "imc-2020",
    exam: "IMC",
    year: 2020,
    questionCount: 25,
    minutes: 60,
    questionsUrl:
      "https://ukmt.org.uk/competition-papers?title=intermediate+mathematical+challenge",
    answers: blank(25),
    verified: false,
    notes:
      "Open the official paper and solutions from UKMT, then time yourself. Answer key to be added once verified.",
  },
  {
    id: "imc-2019",
    exam: "IMC",
    year: 2019,
    questionCount: 25,
    minutes: 60,
    questionsUrl:
      "https://ukmt.org.uk/competition-papers?title=intermediate+mathematical+challenge",
    answers: blank(25),
    verified: false,
    notes:
      "Open the official paper and solutions from UKMT, then time yourself. Answer key to be added once verified.",
  },

  // ─── HMC (Hamilton) ───────────────────────────────────────────────────────
  // Hamilton is a written-solution olympiad (6 questions, 2 hours) — there's no
  // answer grid to auto-score, so these list as self-mark papers that open the
  // official paper and full solutions for you to mark against.
  {
    id: "hmc-2023",
    exam: "HMC",
    year: 2023,
    questionCount: 6,
    minutes: 120,
    questionsUrl:
      "https://ukmt.org.uk/competition-papers?title=hamilton",
    answers: blank(6),
    verified: false,
    notes:
      "Hamilton is a 2-hour, 6-question written olympiad. Open the official paper, write full solutions, then mark against UKMT's published solutions. Auto-scoring isn't possible for written work.",
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
