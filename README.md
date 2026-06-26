# IMC + HMC Academy

A world-class, interactive learning platform that prepares students for the UK
**Intermediate Mathematical Challenge (IMC)** and the **Hamilton Mathematical
Olympiad (HMC)**.

## What's here (first milestone)

A fully working app shell with **two flagship chapters authored end-to-end** as
the quality template for the rest of the curriculum.

- **Home** — overview, live stats, quick start.
- **Foundations** (`/foundations`) — Phase 2 readiness diagnostic that flags weak
  prerequisite areas and recommends where to begin.
- **Curriculum** (`/curriculum`) — the full 13-area, ~17-chapter syllabus map
  (3 chapters available now; the rest show the planned roadmap with subtopics,
  difficulty, exam focus, prerequisites and study time).
- **Chapter** (`/chapter/:id`) — the core learning flow:
  Introduction → Theory interleaved with **interactive checks** (answer, hints,
  validation, explanation — you can't passively read) → Worked examples →
  Practice ladder → Challenge problems → Summary cheat-sheet.
- **Problem Bank** (`/problems`) — every problem tagged with topic, subtopic,
  concepts, difficulty, source, skills, estimated time and tags; filter by any
  combination and search full text. Bookmarks supported.
- **Mock Exams** (`/mock`) — timed papers using the **authentic IMC scoring
  scheme** (5 marks for Q1–15; 6 marks with −1/−2 penalties for Q16–25) and
  Hamilton written-solution sets.
- **Dashboard** (`/dashboard`) — accuracy, per-topic mastery bars, automatic
  **weak-topic detection**, mock history. Progress persists in `localStorage`.

Dark mode, mobile responsive, green/white theme, KaTeX maths throughout.

## Fully-authored chapters

1. **Foundations Brush-Up** — BIDMAS, fractions, percentages, linear equations.
2. **Divisibility, Primes & Factors** — factorisation, divisor counting, HCF/LCM,
   remainder cycles.
3. **Systematic Counting & Probability** — multiplication principle, arrangements,
   the handshake idea (with diagram), probability, lattice routes.

## Tech stack

- React 18 + TypeScript + Vite
- Tailwind CSS (class-based dark mode)
- React Router
- Zustand (persisted progress store)
- KaTeX (maths rendering)
- lucide-react (icons)

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build
npm run preview
```

## Project structure

```
src/
  components/      Math renderer, lesson blocks, problem card, layout, UI
    lesson/        InteractiveCheck, Blocks, LessonRenderer
  data/
    topics.ts      Topic areas
    problems.ts    The problem bank (tagged)
    mocks.ts       Mock exam definitions
    chapters/      Authored chapters + curriculum map
  lib/             types, answer-checking, helpers
  pages/           Home, Curriculum, Chapter, Foundations, ProblemBank,
                   Mock list/runner, Dashboard
  store/           Zustand progress store (localStorage)
docs/
  curriculum-research.md   Verified IMC/Hamilton research (source of truth)
```

## Content provenance

Competition **formats and scoring** are verified against official UKMT sources
(see `docs/curriculum-research.md`). Problem statements are written in the
**style** of IMC/Hamilton questions for educational use; where a real past paper
inspired a question, the `source`/`year` metadata hints at the lineage without
reproducing copyrighted text verbatim.

## Roadmap (next)

Author the remaining 14 chapters using the same template, expand the bank toward
full 25-question IMC papers, add spaced-repetition review UI (the SM-2 store is
already in place), notes per problem, and richer analytics.
