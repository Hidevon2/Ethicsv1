export type LessonSlug =
  | "brotherhood-or-violence"
  | "valuation"
  | "thinking-of-ethics"
  | "sources-of-authority";

export type LessonNumber = 1 | 2 | 3 | 4;

export interface KeyTerm {
  slug: string;
  term: string;
  definition: string;
}

export type NarrativeBlock =
  | { type: "paragraph"; text: string }
  | { type: "subheading"; text: string }
  | { type: "quote"; text: string; source?: string };

export interface NarrativeSection {
  id: string;
  heading: string;
  blocks: NarrativeBlock[];
}

export type ReflectionGroup = "experience" | "assess" | "challenge";

export interface ReflectionQuestion {
  id: string;
  group: ReflectionGroup;
  text: string;
}

interface QuizBase {
  id: string;
  prompt: string;
  explanation: string;
}

export interface QuizMultipleChoice extends QuizBase {
  kind: "multiple-choice";
  options: string[];
  correctIndex: number;
}

export interface QuizTrueFalse extends QuizBase {
  kind: "true-false";
  correct: boolean;
}

export interface QuizClassification extends QuizBase {
  kind: "classification";
  categoryLabel: string;
  categories: string[];
  correctIndex: number;
}

export interface QuizMatching extends QuizBase {
  kind: "matching";
  pairs: { left: string; right: string }[];
}

export type QuizItem =
  | QuizMultipleChoice
  | QuizTrueFalse
  | QuizClassification
  | QuizMatching;

export interface Lesson {
  slug: LessonSlug;
  number: LessonNumber;
  title: string;
  coverLine: string;
  summary: string;
  learningOutcomes: string[];
  think: NarrativeSection[];
  keyTerms: KeyTerm[];
  reflections: ReflectionQuestion[];
  quiz: QuizItem[];
}

export interface SourceComparison {
  id: string;
  name: string;
  tagline: string;
  intro: string;
  strengths: string[];
  limitations: string[];
}

export type HighlightColor = "red" | "teal" | "amber";

export interface Annotation {
  id: string;
  lessonSlug: LessonSlug;
  paragraphId: string;
  text: string;
  color: HighlightColor;
  startOffset: number;
  endOffset: number;
  createdAt: number;
}

export interface LessonProgress {
  lessonSlug: LessonSlug;
  completed: boolean;
  completedAt: number | null;
  quizBest: number | null;
  updatedAt: number;
}

export interface ReflectionAnswer {
  id: string;
  lessonSlug: LessonSlug;
  promptId: string;
  prompt: string;
  group: ReflectionGroup;
  answer: string;
  updatedAt: number;
}
