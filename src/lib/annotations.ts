import { Annotation, HighlightColor } from "@/types";

const STORAGE_KEY = "ethics-annotations";

export function loadAnnotations(): Annotation[] {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return [];
    return JSON.parse(data) as Annotation[];
  } catch {
    return [];
  }
}

export function saveAnnotation(annotation: Annotation): void {
  const annotations = loadAnnotations();
  annotations.push(annotation);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(annotations));
}

export function deleteAnnotation(id: string): void {
  const annotations = loadAnnotations();
  const filtered = annotations.filter((a) => a.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
}

export function clearAllAnnotations(): void {
  localStorage.removeItem(STORAGE_KEY);
}

export function getAnnotationsByChapter(
  chapterId: number
): Annotation[] {
  return loadAnnotations().filter((a) => a.chapterId === chapterId);
}

export function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substring(2, 9);
}
