import type { Book } from "@/lib/types";
import { cengageAlgebraBook, bookProblems } from "./cengage-algebra";

/** Every book available in the Books section. */
export const BOOKS: Book[] = [cengageAlgebraBook];

export const BOOK_BY_ID = Object.fromEntries(
  BOOKS.map((b) => [b.id, b])
) as Record<string, Book>;

/**
 * All original practice problems authored for book chapters. These are merged
 * into the central problem bank (see data/problems.ts) so they are filterable
 * alongside every other question, and referenced by book chapters for practice.
 */
export const ALL_BOOK_PROBLEMS = [...bookProblems];
