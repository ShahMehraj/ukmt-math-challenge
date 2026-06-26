import type { MockExam } from "@/lib/types";

/**
 * Mock exams reference problems by id. The IMC mock follows the real format
 * (25 MCQ, 60 min) — here a shorter sampler until the bank grows; the HMC mock
 * uses written-solution problems with a 2-hour allowance.
 */
export const MOCKS: MockExam[] = [
  {
    id: "mock-imc-sampler",
    title: "IMC Sampler (Mixed Topics)",
    exam: "IMC",
    minutes: 25,
    description:
      "A timed multiple-choice sampler in IMC style, increasing in difficulty. (Full 25-question papers unlock as the bank grows.)",
    problemIds: [
      "nt-001",
      "al-001",
      "ar-001",
      "rp-002",
      "cp-002",
      "ga-002",
      "sq-001",
      "nt-003",
      "cp-001",
      "ar-002",
      "ga-001",
      "al-002",
      "rp-001",
      "cp-003",
      "lg-001",
      "nt-002",
      "nt-004",
    ],
  },
  {
    id: "mock-hmc-set1",
    title: "Hamilton Practice Set 1",
    exam: "HMC",
    minutes: 120,
    description:
      "Written-solution problems in Hamilton style. Write full, justified solutions, then compare against the model answers.",
    problemIds: ["nt-005", "lg-002", "sq-002"],
  },
];

export const MOCK_BY_ID = Object.fromEntries(
  MOCKS.map((m) => [m.id, m])
) as Record<string, MockExam>;
