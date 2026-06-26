import type { Chapter, TopicId, ExamFocus, Difficulty } from "@/lib/types";
import { foundationsChapter } from "./foundations";
import { numberTheoryFoundations } from "./number-theory";
import { countingChapter } from "./counting";

/** Fully-authored chapters available to study now. */
export const FULL_CHAPTERS: Chapter[] = [
  foundationsChapter,
  numberTheoryFoundations,
  countingChapter,
];

/**
 * Lightweight curriculum-map entry for chapters that are planned and visible in
 * navigation but not yet authored. Keeps the whole syllabus map browsable.
 */
export interface PlannedChapter {
  id: string;
  title: string;
  topic: TopicId;
  order: number;
  examFocus: ExamFocus;
  difficulty: Difficulty;
  estMinutes: number;
  prerequisites: string[];
  blurb: string;
  subtopics: string[];
  status: "available" | "planned";
}

/** The complete curriculum map — full chapters plus the planned roadmap. */
export const CURRICULUM: PlannedChapter[] = [
  toPlanned(foundationsChapter, [
    "BIDMAS & negatives",
    "Fractions",
    "Percentages",
    "Ratio",
    "Indices",
    "Surds",
    "Standard form",
    "Expanding & factorising",
    "Linear equations",
    "Simultaneous equations",
    "Quadratics",
    "Inequalities",
    "Rearranging formulae",
    "Coordinates & lines",
    "Core geometry",
  ]),
  {
    id: "ch-num-1",
    title: "Number Sense & Clever Calculation",
    topic: "number",
    order: 10,
    examFocus: "IMC",
    difficulty: "easy",
    estMinutes: 60,
    prerequisites: ["ch-found-1"],
    blurb:
      "Place value, powers and roots, and the calculation shortcuts that win time on the early IMC questions.",
    subtopics: ["Place value", "Powers & roots", "Estimation", "Difference of squares tricks"],
    status: "planned",
  },
  toPlanned(numberTheoryFoundations, [
    "Divisibility & rules",
    "Primes & factorisation",
    "Divisor counting & sum",
    "HCF & LCM",
    "Coprimality & parity",
    "Remainders & cycles",
    "Divisibility proofs",
  ]),
  {
    id: "ch-algebra-1",
    title: "Algebraic Manipulation & Equations",
    topic: "algebra",
    order: 30,
    examFocus: "both",
    difficulty: "medium",
    estMinutes: 70,
    prerequisites: ["ch-found-1"],
    blurb:
      "Expanding, factorising, linear & simultaneous equations, and forming equations from word problems.",
    subtopics: ["Expanding & factorising", "Linear equations", "Simultaneous equations", "Forming equations"],
    status: "planned",
  },
  {
    id: "ch-seq-1",
    title: "Sequences, Patterns & Series",
    topic: "sequences",
    order: 40,
    examFocus: "both",
    difficulty: "medium",
    estMinutes: 60,
    prerequisites: ["ch-algebra-1"],
    blurb:
      "Arithmetic and geometric sequences, spotting and proving patterns, and summing series.",
    subtopics: ["Arithmetic sequences", "Geometric sequences", "Pattern proofs", "Triangular numbers"],
    status: "planned",
  },
  {
    id: "ch-ratio-1",
    title: "Ratio, Proportion & Rates",
    topic: "ratio-proportion",
    order: 50,
    examFocus: "both",
    difficulty: "easy",
    estMinutes: 55,
    prerequisites: ["ch-found-1"],
    blurb:
      "Sharing in ratios, direct & inverse proportion, and speed–distance–time problems.",
    subtopics: ["Sharing in a ratio", "Direct & inverse proportion", "Speed/distance/time", "Best-value rates"],
    status: "planned",
  },
  toPlanned(countingChapter, [
    "Multiplication principle",
    "Arrangements",
    "Choosing/handshakes",
    "Probability",
    "Lattice routes",
  ]),
  {
    id: "ch-angles-1",
    title: "Angles, Triangles & Polygons",
    topic: "geometry-angles",
    order: 70,
    examFocus: "both",
    difficulty: "medium",
    estMinutes: 75,
    prerequisites: ["ch-found-1"],
    blurb:
      "Angle rules, parallel lines, triangle properties, and polygon angle sums.",
    subtopics: ["Angle rules", "Parallel lines", "Triangle angles", "Polygon angle sums", "Symmetry"],
    status: "planned",
  },
  {
    id: "ch-area-1",
    title: "Area, Perimeter & Pythagoras",
    topic: "geometry-area",
    order: 80,
    examFocus: "both",
    difficulty: "medium",
    estMinutes: 70,
    prerequisites: ["ch-angles-1"],
    blurb:
      "Areas of standard shapes, compound and shaded regions, and the Pythagorean theorem.",
    subtopics: ["Areas of shapes", "Compound shapes", "Shaded regions", "Pythagoras & triples"],
    status: "planned",
  },
  {
    id: "ch-circles-1",
    title: "Circles: Length, Area & Angles",
    topic: "geometry-circles",
    order: 90,
    examFocus: "both",
    difficulty: "medium",
    estMinutes: 60,
    prerequisites: ["ch-area-1"],
    blurb:
      "Circumference and area, arcs and sectors, and the key circle-angle facts.",
    subtopics: ["Circumference & area", "Arcs & sectors", "Circle theorems (intro)"],
    status: "planned",
  },
  {
    id: "ch-coord-1",
    title: "Coordinate Geometry",
    topic: "coordinate-geometry",
    order: 100,
    examFocus: "both",
    difficulty: "medium",
    estMinutes: 55,
    prerequisites: ["ch-algebra-1"],
    blurb:
      "The coordinate plane, distance and midpoint, gradient, and equations of straight lines.",
    subtopics: ["Points & distance", "Midpoints", "Gradient", "Line equations"],
    status: "planned",
  },
  {
    id: "ch-3d-1",
    title: "3D Shapes & Mensuration",
    topic: "mensuration-3d",
    order: 110,
    examFocus: "both",
    difficulty: "hard",
    estMinutes: 65,
    prerequisites: ["ch-area-1"],
    blurb:
      "Surface area and volume of prisms, cylinders and pyramids; nets and visualisation.",
    subtopics: ["Volume of prisms", "Cylinders", "Surface area", "Nets", "Cubes & dissections"],
    status: "planned",
  },
  {
    id: "ch-logic-1",
    title: "Logic, Reasoning & Problem-Solving Strategy",
    topic: "logic-strategy",
    order: 120,
    examFocus: "both",
    difficulty: "hard",
    estMinutes: 70,
    prerequisites: [],
    blurb:
      "Working backwards, extremal and invariant arguments, casework, and Hamilton write-up technique.",
    subtopics: ["Deduction & ordering", "Working backwards", "Casework", "Invariants", "Writing full solutions"],
    status: "planned",
  },
];

function toPlanned(c: Chapter, subtopics: string[]): PlannedChapter {
  return {
    id: c.id,
    title: c.title,
    topic: c.topic,
    order: c.order,
    examFocus: c.examFocus,
    difficulty: c.difficulty,
    estMinutes: c.estMinutes,
    prerequisites: c.prerequisites,
    blurb: c.blurb,
    subtopics,
    status: "available",
  };
}

export const CHAPTER_BY_ID = Object.fromEntries(
  FULL_CHAPTERS.map((c) => [c.id, c])
) as Record<string, Chapter>;

export const CURRICULUM_SORTED = [...CURRICULUM].sort((a, b) => a.order - b.order);
