import type { Chapter, TopicId, ExamFocus, Difficulty } from "@/lib/types";
import { foundationsChapter } from "./foundations";
import { setsRealsChapter } from "./sets-reals";
import { numberTheoryFoundations } from "./number-theory";
import { countingChapter } from "./counting";
import { combinatoricsChapter } from "./combinatorics";
import { ratioChapter } from "./ratio";
import { algebraChapter } from "./algebra";
import { numberSenseChapter } from "./number-sense";
import { sequencesChapter } from "./sequences";

/** Fully-authored chapters available to study now. */
export const FULL_CHAPTERS: Chapter[] = [
  foundationsChapter,
  setsRealsChapter,
  algebraChapter,
  numberSenseChapter,
  numberTheoryFoundations,
  ratioChapter,
  sequencesChapter,
  combinatoricsChapter,
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
  toPlanned(setsRealsChapter, [
    "Sets — definition & notation",
    "Subsets, power sets & intervals",
    "Operations on sets",
    "Counting with sets (inclusion-exclusion)",
    "The number hierarchy",
    "Rational numbers & decimals",
    "Irrational numbers & proofs",
    "Surds & rationalisation",
    "Laws of rational exponents",
  ]),
  toPlanned(algebraChapter, [
    "Expanding & factorising",
    "Algebraic identities",
    "Linear equations & word problems",
    "Simultaneous equations",
    "Quadratics & discriminant",
    "Sum & product of roots (Vieta's)",
    "Equations reducible to quadratics",
    "Inequalities from algebra",
  ]),
  toPlanned(numberSenseChapter, [
    "Place value & digits",
    "Powers & last-digit cycles",
    "Difference of squares",
    "Special number tricks",
    "Fractions & recurring decimals",
    "Percentage shortcuts",
    "Telescoping & pairing",
    "Competition patterns",
  ]),
  toPlanned(numberTheoryFoundations, [
    "Divisibility & rules",
    "Primes & factorisation",
    "Divisor counting & sum",
    "HCF & LCM",
    "Coprimality & parity",
    "Remainders & cycles",
    "Divisibility proofs",
  ]),
  toPlanned(sequencesChapter, [
    "Sequences, series & progressions",
    "Arithmetic Progression",
    "Sum of AP & arithmetic means",
    "Geometric Progression",
    "Sum of GP & infinite series",
    "AM–GM–HM inequality",
    "Harmonic Progression",
    "Arithmetico-geometric progression",
    "Sigma notation & power sums",
    "Telescoping (method of differences)",
  ]),
  toPlanned(ratioChapter, [
    "What is a ratio?",
    "Manipulating & comparing ratios",
    "Sharing in a ratio",
    "Compounding ratios",
    "The k-trick (equal-ratios theorem)",
    "Proportion & mean proportional",
    "Componendo & Dividendo",
    "Homogeneous substitution",
  ]),
  toPlanned(countingChapter, [
    "Multiplication principle",
    "Arrangements & repeats",
    "Combinations & Pascal",
    "Complementary counting",
    "Restricted arrangements",
    "Probability (multi-stage)",
    "Expected frequency",
    "Pigeonhole principle",
  ]),
  toPlanned(combinatoricsChapter, [
    "Fundamental principles of counting",
    "Factorials & properties",
    "Permutations",
    "Permutations with restrictions",
    "Combinations",
    "Properties of combinations",
    "Division & distribution",
    "Derangements",
    "Competition techniques",
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
