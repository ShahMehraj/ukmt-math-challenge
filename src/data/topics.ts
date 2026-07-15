import type { TopicMeta } from "@/lib/types";

/**
 * The smallest set of topic areas that fully covers IMC + Hamilton material.
 * Granularity beyond this lives in chapter subtopics.
 */
export const TOPICS: TopicMeta[] = [
  {
    id: "foundations",
    name: "Foundations",
    description:
      "Brush-up prerequisites: arithmetic fluency, fractions, basic algebra and the language of maths.",
    accent: "slate",
    icon: "GraduationCap",
  },
  {
    id: "sets-reals",
    name: "Sets & Real Numbers",
    description:
      "Set notation, Venn diagrams, the number hierarchy, surds, rationalisation and exponent laws.",
    accent: "emerald",
    icon: "CircleDot",
  },
  {
    id: "number-sense",
    name: "Number Sense & Calculation",
    description:
      "Place value, operations, fractions, decimals, percentages, powers, roots and clever calculation.",
    accent: "emerald",
    icon: "Calculator",
  },
  {
    id: "number-theory",
    name: "Number Theory",
    description:
      "Divisibility, primes, factors & multiples, HCF/LCM, digit problems and remainders.",
    accent: "green",
    icon: "Hash",
  },
  {
    id: "algebra",
    name: "Algebra",
    description:
      "Expressions, linear equations, simultaneous equations, inequalities and algebraic manipulation.",
    accent: "teal",
    icon: "FunctionSquare",
  },
  {
    id: "sequences",
    name: "Sequences & Patterns",
    description:
      "Arithmetic and geometric sequences, pattern spotting, series and recursive rules.",
    accent: "cyan",
    icon: "TrendingUp",
  },
  {
    id: "ratio-proportion",
    name: "Ratio, Proportion & Rates",
    description:
      "Sharing in ratios, direct/inverse proportion, speed–distance–time, and rate problems.",
    accent: "lime",
    icon: "Scale",
  },
  {
    id: "geometry-angles",
    name: "Angles & Polygons",
    description:
      "Angle rules, parallel lines, triangles, quadrilaterals, polygon angle sums and symmetry.",
    accent: "emerald",
    icon: "Triangle",
  },
  {
    id: "geometry-area",
    name: "Area, Perimeter & Pythagoras",
    description:
      "Areas of plane shapes, perimeter, the Pythagorean theorem and shaded-region problems.",
    accent: "green",
    icon: "Square",
  },
  {
    id: "geometry-circles",
    name: "Circles",
    description:
      "Circumference, area, arcs, sectors and the essential circle-angle facts.",
    accent: "teal",
    icon: "Circle",
  },
  {
    id: "coordinate-geometry",
    name: "Coordinate Geometry",
    description:
      "Points, distance, midpoints, gradients, straight-line equations and the coordinate plane.",
    accent: "cyan",
    icon: "Grid3x3",
  },
  {
    id: "mensuration-3d",
    name: "3D & Mensuration",
    description:
      "Surface area and volume of prisms, cylinders, pyramids; nets and solid visualisation.",
    accent: "lime",
    icon: "Box",
  },
  {
    id: "combinatorics",
    name: "Combinatorics",
    description:
      "Systematic counting, permutations, combinations, distribution, and derangements.",
    accent: "emerald",
    icon: "Network",
  },
  {
    id: "probability",
    name: "Probability",
    description:
      "Classical probability, conditional probability, independent events, and expected value.",
    accent: "teal",
    icon: "Dices",
  },
  {
    id: "logic-strategy",
    name: "Logic & Problem-Solving",
    description:
      "Reasoning, working backwards, extremal & invariant ideas, and competition strategy.",
    accent: "green",
    icon: "Brain",
  },
];

export const TOPIC_BY_ID = Object.fromEntries(
  TOPICS.map((t) => [t.id, t])
) as Record<string, TopicMeta>;
