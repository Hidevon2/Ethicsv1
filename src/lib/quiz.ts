import type { QuizItem } from "@/lib/types";

export type MatchingAnswer = Record<number, number>;
export type AnswerValue = number | boolean | MatchingAnswer | undefined;

export interface RenderedQuizItem {
  item: QuizItem;
  options?: string[];
  correctIndex?: number;
  rightOptions?: string[];
}

export function kindLabel(kind: QuizItem["kind"]): string {
  switch (kind) {
    case "multiple-choice":
      return "Multiple choice";
    case "true-false":
      return "True or false";
    case "classification":
      return "Discrimination drill";
    case "matching":
      return "Term matching";
  }
}

export function stableSeed(str: string): number {
  let hash = 2166136261;
  for (let i = 0; i < str.length; i += 1) {
    hash ^= str.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

export function mulberry32(seed: number): () => number {
  let state = seed >>> 0;
  return function next() {
    state = (state + 0x6d2b79f5) >>> 0;
    let t = state;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function shuffle<T>(input: readonly T[], rng: () => number): T[] {
  const copy = [...input];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rng() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function renderItem(item: QuizItem, rng: () => number): RenderedQuizItem {
  if (item.kind === "multiple-choice") {
    const options = shuffle(item.options, rng);
    return { item, options, correctIndex: options.indexOf(item.options[item.correctIndex]) };
  }
  if (item.kind === "classification") {
    const options = shuffle(item.categories, rng);
    return { item, options, correctIndex: options.indexOf(item.categories[item.correctIndex]) };
  }
  if (item.kind === "matching") {
    return { item, rightOptions: shuffle(item.pairs.map((pair) => pair.right), rng) };
  }
  return { item };
}

export function buildAttempt(items: QuizItem[], seed: number): RenderedQuizItem[] {
  const rng = mulberry32(seed);
  return shuffle(items, rng).map((item) => renderItem(item, rng));
}

export function isAnswered(rendered: RenderedQuizItem, value: AnswerValue): boolean {
  if (value === undefined) return false;
  if (rendered.item.kind === "matching") {
    return (
      typeof value === "object" &&
      value !== null &&
      Object.keys(value).length === rendered.item.pairs.length
    );
  }
  return true;
}

export function gradeItem(rendered: RenderedQuizItem, value: AnswerValue): boolean {
  const { item } = rendered;
  if (item.kind === "multiple-choice" || item.kind === "classification") {
    return value === rendered.correctIndex;
  }
  if (item.kind === "true-false") {
    return value === item.correct;
  }
  const matching = value as MatchingAnswer | undefined;
  if (!matching) return false;
  return item.pairs.every((pair, index) => {
    const picked = matching[index];
    return picked !== undefined && rendered.rightOptions?.[picked] === pair.right;
  });
}

export function describeUserAnswer(rendered: RenderedQuizItem, value: AnswerValue): string {
  const { item } = rendered;
  if (item.kind === "multiple-choice" || item.kind === "classification") {
    if (typeof value !== "number") return "No answer";
    return rendered.options?.[value] ?? "No answer";
  }
  if (item.kind === "true-false") {
    if (typeof value !== "boolean") return "No answer";
    return value ? "True" : "False";
  }
  const matching = value as MatchingAnswer | undefined;
  return item.pairs
    .map((pair, index) => {
      const picked = matching?.[index];
      const chosen = picked !== undefined ? (rendered.rightOptions?.[picked] ?? "—") : "—";
      return `${pair.left} → ${chosen}`;
    })
    .join(", ");
}

export function describeCorrectAnswer(rendered: RenderedQuizItem): string {
  const { item } = rendered;
  if (item.kind === "multiple-choice" || item.kind === "classification") {
    return rendered.options?.[item.correctIndex] ?? "No answer";
  }
  if (item.kind === "true-false") {
    return item.correct ? "True" : "False";
  }
  return item.pairs.map((pair) => `${pair.left} → ${pair.right}`).join(", ");
}
