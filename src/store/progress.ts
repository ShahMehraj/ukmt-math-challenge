import { create } from "zustand";
import { persist } from "zustand/middleware";
import type {
  ChapterProgress,
  MockResult,
  ProblemAttempt,
  ReviewItem,
  TopicId,
} from "@/lib/types";

interface ProgressState {
  // — Chapters —
  chapters: Record<string, ChapterProgress>;
  passCheck: (chapterId: string, checkId: string, totalChecks: number) => void;
  visitChapter: (chapterId: string) => void;
  markChapterComplete: (chapterId: string) => void;

  // — Problems —
  attempts: ProblemAttempt[];
  recordAttempt: (a: ProblemAttempt) => void;
  bookmarks: string[];
  toggleBookmark: (problemId: string) => void;
  notes: Record<string, string>;
  setNote: (problemId: string, text: string) => void;

  // — Spaced repetition —
  reviews: Record<string, ReviewItem>;
  scheduleReview: (problemId: string, quality: number) => void;

  // — Mock exams —
  mockResults: MockResult[];
  recordMock: (r: MockResult) => void;

  // — Derived helpers (computed in selectors below) —
  reset: () => void;
}

const empty = {
  chapters: {},
  attempts: [],
  bookmarks: [],
  notes: {},
  reviews: {},
  mockResults: [],
};

export const useProgress = create<ProgressState>()(
  persist(
    (set, get) => ({
      ...empty,

      passCheck: (chapterId, checkId, totalChecks) =>
        set((s) => {
          const prev =
            s.chapters[chapterId] ??
            ({
              checksPassed: [],
              percent: 0,
              lastVisited: Date.now(),
              completed: false,
            } as ChapterProgress);
          if (prev.checksPassed.includes(checkId)) return s;
          const checksPassed = [...prev.checksPassed, checkId];
          const percent = totalChecks
            ? Math.min(100, Math.round((checksPassed.length / totalChecks) * 100))
            : prev.percent;
          return {
            chapters: {
              ...s.chapters,
              [chapterId]: { ...prev, checksPassed, percent },
            },
          };
        }),

      visitChapter: (chapterId) =>
        set((s) => {
          const prev = s.chapters[chapterId];
          return {
            chapters: {
              ...s.chapters,
              [chapterId]: {
                checksPassed: prev?.checksPassed ?? [],
                percent: prev?.percent ?? 0,
                completed: prev?.completed ?? false,
                lastVisited: Date.now(),
              },
            },
          };
        }),

      markChapterComplete: (chapterId) =>
        set((s) => {
          const prev = s.chapters[chapterId];
          return {
            chapters: {
              ...s.chapters,
              [chapterId]: {
                checksPassed: prev?.checksPassed ?? [],
                percent: 100,
                completed: true,
                lastVisited: Date.now(),
              },
            },
          };
        }),

      recordAttempt: (a) =>
        set((s) => ({ attempts: [...s.attempts, a].slice(-2000) })),

      toggleBookmark: (problemId) =>
        set((s) => ({
          bookmarks: s.bookmarks.includes(problemId)
            ? s.bookmarks.filter((b) => b !== problemId)
            : [...s.bookmarks, problemId],
        })),

      setNote: (problemId, text) =>
        set((s) => ({ notes: { ...s.notes, [problemId]: text } })),

      scheduleReview: (problemId, quality) =>
        set((s) => {
          // Minimal SM-2.
          const prev =
            s.reviews[problemId] ??
            ({
              problemId,
              nextReview: Date.now(),
              intervalDays: 0,
              ease: 2.5,
              reps: 0,
            } as ReviewItem);
          let { ease, reps, intervalDays } = prev;
          if (quality < 3) {
            reps = 0;
            intervalDays = 1;
          } else {
            reps += 1;
            intervalDays =
              reps === 1 ? 1 : reps === 2 ? 6 : Math.round(intervalDays * ease);
          }
          ease = Math.max(
            1.3,
            ease + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))
          );
          const nextReview = Date.now() + intervalDays * 86400000;
          return {
            reviews: {
              ...s.reviews,
              [problemId]: { problemId, nextReview, intervalDays, ease, reps },
            },
          };
        }),

      recordMock: (r) =>
        set((s) => ({ mockResults: [...s.mockResults, r].slice(-100) })),

      reset: () => set({ ...empty }),
    }),
    { name: "imc-hmc-progress-v1" }
  )
);

// ─── Selectors / analytics helpers ───────────────────────────────────────────

export function topicAccuracy(
  attempts: ProblemAttempt[],
  problemTopic: (id: string) => TopicId | undefined
): Record<string, { correct: number; total: number }> {
  const acc: Record<string, { correct: number; total: number }> = {};
  for (const a of attempts) {
    const t = problemTopic(a.problemId);
    if (!t) continue;
    acc[t] ??= { correct: 0, total: 0 };
    acc[t].total += 1;
    if (a.correct) acc[t].correct += 1;
  }
  return acc;
}
