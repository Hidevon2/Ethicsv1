import type {
  Annotation,
  LessonProgress,
  LessonSlug,
  ReflectionAnswer,
  ReflectionGroup,
  Unit1ExamState,
} from "@/lib/types";

async function request<T>(
  path: string,
  init?: RequestInit,
): Promise<T> {
  const response = await fetch(path, {
    ...init,
    headers: { "Content-Type": "application/json", ...init?.headers },
  });
  if (!response.ok) {
    throw new Error(`Request to ${path} failed with ${response.status}.`);
  }
  return (await response.json()) as T;
}

export function fetchProgress(): Promise<LessonProgress[]> {
  return request<LessonProgress[]>("/api/progress");
}

export function setCompleted(
  lessonSlug: LessonSlug,
  completed: boolean,
): Promise<LessonProgress> {
  return request<LessonProgress>("/api/progress", {
    method: "PUT",
    body: JSON.stringify({ lessonSlug, completed }),
  });
}

export function recordQuizScore(
  lessonSlug: LessonSlug,
  quizBest: number,
): Promise<LessonProgress> {
  return request<LessonProgress>("/api/progress", {
    method: "PUT",
    body: JSON.stringify({ lessonSlug, quizBest }),
  });
}

export function fetchReflections(lessonSlug?: LessonSlug): Promise<ReflectionAnswer[]> {
  const path = lessonSlug ? `/api/reflections?lesson=${lessonSlug}` : "/api/reflections";
  return request<ReflectionAnswer[]>(path);
}

export function saveReflection(input: {
  lessonSlug: LessonSlug;
  promptId: string;
  prompt: string;
  group: ReflectionGroup;
  answer: string;
}): Promise<ReflectionAnswer> {
  return request<ReflectionAnswer>("/api/reflections", {
    method: "PUT",
    body: JSON.stringify(input),
  });
}

export function deleteReflection(id: string): Promise<{ ok: true }> {
  return request<{ ok: true }>(`/api/reflections?id=${encodeURIComponent(id)}`, {
    method: "DELETE",
  });
}

export function fetchAnnotations(lessonSlug: LessonSlug): Promise<Annotation[]> {
  return request<Annotation[]>(`/api/annotations?lesson=${lessonSlug}`);
}

export function saveAnnotation(input: {
  lessonSlug: LessonSlug;
  paragraphId: string;
  text: string;
  color: "red" | "teal" | "amber";
  startOffset: number;
  endOffset: number;
}): Promise<Annotation> {
  return request<Annotation>("/api/annotations", {
    method: "POST",
    body: JSON.stringify(input),
  });
}

export function deleteAnnotation(id: string): Promise<{ ok: true }> {
  return request<{ ok: true }>(`/api/annotations?id=${encodeURIComponent(id)}`, {
    method: "DELETE",
  });
}

export function fetchUnit1ExamState(): Promise<Unit1ExamState> {
  return request<Unit1ExamState>("/api/exam");
}

export function recordUnit1Exam(score: number): Promise<Unit1ExamState> {
  return request<Unit1ExamState>("/api/exam", {
    method: "PUT",
    body: JSON.stringify({ score }),
  });
}
