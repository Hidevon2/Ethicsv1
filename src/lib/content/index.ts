import type { Lesson, LessonSlug } from "@/lib/types";
import { lesson01 } from "@/lib/content/lesson-01";
import { lesson02 } from "@/lib/content/lesson-02";
import { lesson03 } from "@/lib/content/lesson-03";
import { lesson04 } from "@/lib/content/lesson-04";

export const unit = {
  number: "I",
  title: "The Ethical Dimension of Human Existence",
  tagline: "Unit I of Ethics",
};

export const lessons: Lesson[] = [lesson01, lesson02, lesson03, lesson04];

export function getLesson(slug: string): Lesson | undefined {
  return lessons.find((lesson) => lesson.slug === slug);
}

export function getLessonByNumber(number: number): Lesson | undefined {
  return lessons.find((lesson) => lesson.number === number);
}

export function getAdjacentLesson(slug: LessonSlug, direction: -1 | 1): Lesson | undefined {
  const index = lessons.findIndex((lesson) => lesson.slug === slug);
  if (index === -1) return undefined;
  return lessons[index + direction];
}

export interface GlossaryEntry {
  lesson: Lesson;
  termSlug: string;
  term: string;
  definition: string;
}

export const glossary: GlossaryEntry[] = lessons.flatMap((lesson) =>
  lesson.keyTerms.map((term) => ({
    lesson,
    termSlug: term.slug,
    term: term.term,
    definition: term.definition,
  })),
);

export function stripMarkers(text: string): string {
  return text.replace(/\{\{[a-z0-9-]+\}\}/g, "");
}

export interface SearchResult {
  lesson: Lesson;
  kind: "title" | "outcome" | "narrative" | "term" | "reflection";
  anchor?: string;
  termSlug?: string;
  text: string;
}

export function searchLessons(query: string): SearchResult[] {
  const q = query.trim().toLowerCase();
  if (q.length < 2) return [];
  const matches: SearchResult[] = [];

  for (const lesson of lessons) {
    if (lesson.title.toLowerCase().includes(q)) {
      matches.push({ lesson, kind: "title", text: lesson.title });
    }
    lesson.learningOutcomes.forEach((outcome) => {
      if (outcome.toLowerCase().includes(q)) {
        matches.push({ lesson, kind: "outcome", anchor: "outcomes", text: outcome });
      }
    });
    lesson.think.forEach((section) =>
      section.blocks.forEach((block) => {
        if (block.type === "paragraph" || block.type === "subheading") {
          const plain = stripMarkers(block.text);
          if (plain.toLowerCase().includes(q)) {
            matches.push({
              lesson,
              kind: "narrative",
              anchor: section.id,
              text: plain,
            });
          }
        }
      }),
    );
    lesson.keyTerms.forEach((term) => {
      if (
        term.term.toLowerCase().includes(q) ||
        term.definition.toLowerCase().includes(q)
      ) {
        matches.push({
          lesson,
          kind: "term",
          anchor: `term-${term.slug}`,
          termSlug: term.slug,
          text: term.definition,
        });
      }
    });
    lesson.reflections.forEach((reflection) => {
      if (reflection.text.toLowerCase().includes(q)) {
        matches.push({
          lesson,
          kind: "reflection",
          anchor: `reflection-${reflection.id}`,
          text: reflection.text,
        });
      }
    });
  }

  return matches;
}
