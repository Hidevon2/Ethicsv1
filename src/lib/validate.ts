import type { LessonSlug } from "@/lib/types";

export const lessonSlugs: LessonSlug[] = [
  "brotherhood-or-violence",
  "valuation",
  "thinking-of-ethics",
  "sources-of-authority",
];

export function isLessonSlug(value: string): value is LessonSlug {
  return lessonSlugs.includes(value as LessonSlug);
}

export function isReflectionGroup(value: string): value is "experience" | "assess" | "challenge" {
  return value === "experience" || value === "assess" || value === "challenge";
}

export const highlightColors = ["red", "teal", "amber"] as const;

export type HighlightColorValue = (typeof highlightColors)[number];

export function isHighlightColor(value: string): value is HighlightColorValue {
  return highlightColors.includes(value as HighlightColorValue);
}
