import type { Chapter, SubChapter, LessonBlock } from "@/lib/types";

/**
 * Auto-splits a chapter's flat `lesson` array into `subChapters` by detecting
 * numbered heading blocks (prose blocks whose `heading` starts with a digit).
 *
 * Each sub-chapter runs from one numbered heading to the next. Worked examples
 * and practice problems stay at the chapter level (they appear in a final
 * "Practice & Challenges" sub-chapter automatically appended by the renderer).
 *
 * This allows existing chapters to gain sub-chapter navigation without manually
 * restructuring their data files.
 */
export function autoSplitSubChapters(chapter: Chapter): SubChapter[] {
  const blocks = chapter.lesson;
  if (!blocks.length) return [];

  const subs: SubChapter[] = [];
  let current: { title: string; id: string; blocks: LessonBlock[] } | null =
    null;

  for (const block of blocks) {
    // Detect a new sub-chapter start: a "prose" block with a numbered heading
    if (
      block.kind === "prose" &&
      "heading" in block &&
      block.heading &&
      /^\d+\s*[·:.–—-]/.test(block.heading)
    ) {
      // Flush previous
      if (current) {
        subs.push({
          id: current.id,
          title: current.title,
          lesson: current.blocks,
        });
      }
      // Start new sub-chapter
      const title = block.heading.replace(/^\d+\s*[·:.–—-]\s*/, "").trim();
      const id = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");
      current = { title, id, blocks: [block] };
    } else {
      // Append to current sub-chapter (or create an "intro" bucket)
      if (!current) {
        current = { title: "Introduction", id: "intro", blocks: [] };
      }
      current.blocks.push(block);
    }
  }
  // Flush last
  if (current) {
    subs.push({
      id: current.id,
      title: current.title,
      lesson: current.blocks,
    });
  }

  return subs;
}

/**
 * Ensure a chapter has its `subChapters` populated — either from explicit data
 * or auto-split from the flat lesson array.
 */
export function ensureSubChapters(chapter: Chapter): Chapter {
  if (chapter.subChapters && chapter.subChapters.length > 0) return chapter;
  return { ...chapter, subChapters: autoSplitSubChapters(chapter) };
}
