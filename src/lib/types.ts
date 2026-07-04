// ─────────────────────────────────────────────────────────────────────────────
// Core domain types for the IMC + HMC preparation platform.
//
// Design goals:
//  - One schema covers both IMC (25 MCQ, 60 min) and Hamilton (6 written, 2 hr).
//  - Lessons interleave theory with inline interactive checks (never passive).
//  - Every Problem carries rich metadata so the bank is fully filterable.
//  - Progress/analytics types are storage-agnostic (persisted via zustand).
// ─────────────────────────────────────────────────────────────────────────────

/** Top-level subject areas. Kept deliberately small; subtopics add granularity. */
export type TopicId =
  | "foundations"
  | "number"
  | "number-theory"
  | "algebra"
  | "sequences"
  | "ratio-proportion"
  | "geometry-angles"
  | "geometry-area"
  | "geometry-circles"
  | "coordinate-geometry"
  | "mensuration-3d"
  | "counting-probability"
  | "logic-strategy";

export type Difficulty =
  | "foundation" // brush-up / prerequisite level
  | "easy" // early IMC (Q1–10)
  | "medium" // mid IMC (Q11–18)
  | "hard" // late IMC (Q19–25)
  | "olympiad"; // Hamilton written-solution level

/** Which competition a piece of content is oriented toward. */
export type ExamFocus = "IMC" | "HMC" | "both";

export type ProblemFormat = "mcq" | "written" | "numeric" | "text";

export type ProblemSource =
  | "IMC"
  | "Hamilton"
  | "Cayley"
  | "Maclaurin"
  | "JMC"
  | "Kangaroo"
  | "original";

// ─── Math / rendering ────────────────────────────────────────────────────────

/** Inline SVG diagram (string markup) with accessibility text. */
export interface Diagram {
  svg: string;
  alt: string;
  /** Optional caption shown below the figure. */
  caption?: string;
}

// ─── Problems ──────────────────────────────────────────────────────────────--

export interface MCQOption {
  /** Label shown to the student, e.g. "A". */
  label: string;
  /** Option text; may contain LaTeX delimited by $…$. */
  text: string;
}

export interface Problem {
  id: string;
  /** Statement text; LaTeX allowed with $…$ (inline) and $$…$$ (display). */
  statement: string;
  format: ProblemFormat;
  /** Present when format === "mcq". */
  options?: MCQOption[];
  /**
   * Canonical answer.
   *  - mcq: the correct option label (e.g. "C")
   *  - numeric: the exact value as a string ("42", "3/4", "2\\sqrt{3}")
   *  - written: a model final answer / key result
   */
  answer: string;
  /** Accepted alternative numeric forms, e.g. ["0.75"] for "3/4". */
  acceptedAnswers?: string[];

  // — Metadata (all filterable in the problem bank) —
  topic: TopicId;
  subtopic: string;
  concepts: string[];
  difficulty: Difficulty;
  source: ProblemSource;
  /** Competition year if from a real past paper. */
  year?: number;
  /** Question number in its source paper, if known. */
  paperNumber?: number;
  skills: string[];
  /** Estimated solving time in minutes. */
  estMinutes: number;
  tags: string[];
  /** IDs of similar problems for "more like this". */
  similar?: string[];

  // — Help —
  /** Progressive hints, revealed one at a time. */
  hints: string[];
  /** Full worked solution (LaTeX allowed). */
  solution: string;
  /** Ordered solution steps for the step-by-step reveal UI. */
  solutionSteps?: string[];
  diagram?: Diagram;
}

// ─── Lessons & theory ──────────────────────────────────────────────────────--

/**
 * A lesson is an ordered list of blocks. Theory blocks are interleaved with
 * `check` blocks so the student is continuously prompted to engage.
 */
export type LessonBlock =
  | ProseBlock
  | CalloutBlock
  | ExampleBlock
  | CheckBlock
  | DiagramBlock;

export interface ProseBlock {
  kind: "prose";
  /** Markdown-lite + LaTeX. Newlines split paragraphs. */
  content: string;
  heading?: string;
}

export interface CalloutBlock {
  kind: "callout";
  variant: "intuition" | "tip" | "warning" | "definition" | "trap";
  title?: string;
  content: string;
}

export interface DiagramBlock {
  kind: "diagram";
  diagram: Diagram;
}

/** A fully worked example with reasoning narrative. */
export interface ExampleBlock {
  kind: "example";
  title?: string;
  statement: string;
  /** Narrated approach before the solution. */
  approach?: string;
  solution: string;
  /** Optional alternative/faster method. */
  alternative?: string;
  diagram?: Diagram;
}

/** An inline interactive check the student must answer to continue. */
export interface CheckBlock {
  kind: "check";
  id: string;
  prompt: string;
  /** mcq → choose option; numeric/text → typed input validated loosely. */
  format: "mcq" | "numeric" | "text";
  options?: MCQOption[];
  answer: string;
  acceptedAnswers?: string[];
  hint?: string;
  /** Shown after a correct (or revealed) answer. */
  explanation: string;
}

// ─── Chapters ─────────────────────────────────────────────────────────────--

export interface ChapterIntro {
  whyItMatters: string;
  whereItAppears: string;
  typicalPatterns: string[];
  commonMistakes: string[];
}

export interface ChapterSummary {
  keyFormulas: string[];
  bigIdeas: string[];
  patternTips: string[];
  traps: string[];
  revisionNotes: string[];
}

/**
 * A self-contained sub-chapter: a bite-sized portion of a chapter that a
 * student can complete in one sitting (~5-15 min). Ends with relevant practice
 * problems so concepts are reinforced immediately.
 */
export interface SubChapter {
  /** Unique slug within the chapter, e.g. "fractions" */
  id: string;
  title: string;
  /** Lesson blocks for this sub-chapter. */
  lesson: LessonBlock[];
  /** Worked examples specific to this sub-chapter. */
  workedExamples?: ExampleBlock[];
  /** Practice problem IDs relevant to this sub-topic. */
  practiceProblemIds?: string[];
}

export interface Chapter {
  id: string;
  title: string;
  topic: TopicId;
  /** Order within the overall curriculum. */
  order: number;
  examFocus: ExamFocus;
  difficulty: Difficulty;
  estMinutes: number;
  /** Chapter IDs that should be completed first. */
  prerequisites: string[];
  blurb: string;
  intro: ChapterIntro;
  /**
   * The chapter broken into sub-chapters. When present, the renderer shows
   * one sub-chapter at a time with prev/next navigation. When absent, falls
   * back to the flat `lesson` array.
   */
  subChapters?: SubChapter[];
  /** The teaching body: theory interleaved with interactive checks. */
  lesson: LessonBlock[];
  /** Standalone worked examples beyond those embedded in the lesson. */
  workedExamples: ExampleBlock[];
  /** Practice problems, ascending difficulty. References into the bank. */
  practiceProblemIds: string[];
  /** Hardest, multi-concept problems. References into the bank. */
  challengeProblemIds: string[];
  summary: ChapterSummary;
}

// ─── Books ────────────────────────────────────────────────────────────────--
//
// The "Books" section presents a study companion to a source textbook. We do
// NOT reproduce the copyrighted text: each chapter is broken into concept
// sections written as original commentary (theory interleaved with interactive
// checks and worked examples in the app's own voice), and every problem is an
// original question in the style of the book's exercises, pushed into the
// central problem bank with book/chapter tags so it is fully filterable.

/** A single concept/topic within a book chapter. */
export interface BookSection {
  /** Slug unique within the chapter, e.g. "operations-on-sets". */
  id: string;
  title: string;
  /** Teaching body: prose, callouts, diagrams, worked examples, checks. */
  blocks: LessonBlock[];
}

/** A chapter of a source book, retold as original concept commentary. */
export interface BookChapter {
  /** Slug unique within the book, e.g. "set-theory-real-numbers". */
  id: string;
  /** Chapter number as printed in the book. */
  number: number;
  title: string;
  /** One-paragraph overview of what the chapter covers. */
  blurb: string;
  /** Concept-by-concept sections, in reading order. */
  sections: BookSection[];
  /** IDs of problems (in the bank) that practise this chapter. */
  practiceProblemIds: string[];
}

export interface Book {
  id: string;
  title: string;
  author?: string;
  /** Short description shown on the book card. */
  description: string;
  /** Fully-authored chapters available to read now. */
  chapters: BookChapter[];
}

// ─── Curriculum metadata ─────────────────────────────────────────────────────

export interface TopicMeta {
  id: TopicId;
  name: string;
  /** Short description for the topic browser. */
  description: string;
  /** Tailwind-friendly accent for cards. */
  accent: string;
  icon: string; // lucide icon name
}

// ─── Mock exams ───────────────────────────────────────────────────────────--

export interface MockExam {
  id: string;
  title: string;
  exam: "IMC" | "HMC";
  /** Time limit in minutes. */
  minutes: number;
  problemIds: string[];
  description: string;
}

// ─── Past papers (PYQ) ──────────────────────────────────────────────────────
//
// Papers come in two flavours:
//
//  1. In-app papers — the question text, options and diagrams are transcribed
//     into structured data so students read and answer the whole paper inside
//     the app, then get instant authentic scoring. Used for our flagship
//     practice papers.
//  2. Self-mark papers — to respect UKMT copyright at scale we don't host the
//     text; the entry links to UKMT's official question/solution PDFs and
//     stores only the answer key (facts), wrapping it with a timer, self-mark
//     grid and authentic scoring.
//
// A paper is "in-app" when `questions` is present; otherwise it is self-mark.

export type PaperExam = "IMC" | "HMC";

/** A single transcribed question for an in-app paper. */
export interface PaperQuestion {
  /** 1-based number in the paper. */
  number: number;
  /** Statement text; LaTeX allowed with $…$ (inline) and $$…$$ (display). */
  statement: string;
  /** Options A–E (IMC multiple choice). Omitted for written olympiad papers. */
  options?: MCQOption[];
  /** Sub-part labels for multi-part questions, e.g. ["a", "b"]. */
  parts?: string[];
  /** Optional figure that accompanies the question. */
  diagram?: Diagram;
}

export interface PastPaper {
  id: string;
  exam: PaperExam;
  year: number;
  /** Number of questions (25 for IMC). */
  questionCount: number;
  minutes: number;
  /** Official UKMT question paper URL (opens externally / in a new tab). */
  questionsUrl?: string;
  /** Official UKMT solutions URL. */
  solutionsUrl?: string;
  /**
   * Answer key, one entry per question in order. For IMC each is a letter A–E.
   * Empty/undefined entries mean "not yet sourced" so the paper can still list.
   */
  answers: string[];
  /** True when the answer key has been verified against an official source. */
  verified: boolean;
  /** Where the answer key came from (for provenance). */
  answerSource?: string;
  /**
   * Transcribed questions for in-app attempts. When present, the runner shows
   * the questions on-page; when absent, the runner is the self-mark grid that
   * links out to the official PDF.
   */
  questions?: PaperQuestion[];
  notes?: string;
}

/** A saved attempt at a past paper (self-marked against the key). */
export interface PaperResult {
  paperId: string;
  at: number;
  /** Learner's chosen answers, one per question (may contain blanks). */
  given: string[];
  score: number;
  maxScore: number;
  correctCount: number;
  secondsTaken: number;
}

/**
 * An in-progress (or just-finished) paper attempt, persisted so a page reload
 * resumes the same timer and answers instead of restarting. `startedAt` is an
 * absolute epoch-ms timestamp; the countdown is derived from it so it stays
 * accurate across reloads and backgrounded tabs.
 */
export interface PaperSession {
  paperId: string;
  startedAt: number;
  given: string[];
  submitted: boolean;
}

// ─── User progress & analytics ───────────────────────────────────────────────

export type CheckResult = "correct" | "incorrect" | "revealed";

export interface ProblemAttempt {
  problemId: string;
  correct: boolean;
  /** Epoch ms. */
  at: number;
  /** Seconds spent, if measured. */
  seconds?: number;
  hintsUsed: number;
}

/** SM-2 style spaced-repetition record. */
export interface ReviewItem {
  problemId: string;
  nextReview: number; // epoch ms
  intervalDays: number;
  ease: number;
  reps: number;
}

export interface ChapterProgress {
  /** Completed lesson block check IDs. */
  checksPassed: string[];
  /** 0–100 derived completion. */
  percent: number;
  lastVisited: number;
  completed: boolean;
}

export interface MockResult {
  examId: string;
  at: number;
  score: number;
  maxScore: number;
  /** Per-problem correctness. */
  answers: Record<string, { given: string; correct: boolean }>;
  secondsTaken: number;
}
