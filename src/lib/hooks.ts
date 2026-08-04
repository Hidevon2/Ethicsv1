"use client";

import { useCallback, useEffect, useState } from "react";
import type {
  Annotation,
  LessonProgress,
  LessonSlug,
  ReflectionAnswer,
} from "@/lib/types";
import {
  deleteAnnotation as apiDeleteAnnotation,
  deleteReflection as apiDeleteReflection,
  fetchAnnotations,
  fetchProgress,
  fetchReflections,
  recordQuizScore,
  saveAnnotation,
  saveReflection,
  setCompleted,
} from "@/lib/api";
import type { ReflectionGroup } from "@/lib/types";

export function useLessonProgress() {
  const [progress, setProgress] = useState<LessonProgress[]>([]);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    try {
      const data = await fetchProgress();
      setProgress(data);
    } catch {
      // keep whatever we have
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    void refresh();
  }, [refresh]);

  const toggleComplete = useCallback(async (slug: LessonSlug, completed: boolean) => {
    const updated = await setCompleted(slug, completed);
    setProgress((prev) => {
      const exists = prev.some((p) => p.lessonSlug === slug);
      return exists
        ? prev.map((p) => (p.lessonSlug === slug ? updated : p))
        : [...prev, updated];
    });
  }, []);

  const submitScore = useCallback(async (slug: LessonSlug, score: number) => {
    const updated = await recordQuizScore(slug, score);
    setProgress((prev) => {
      const exists = prev.some((p) => p.lessonSlug === slug);
      return exists
        ? prev.map((p) => (p.lessonSlug === slug ? updated : p))
        : [...prev, updated];
    });
  }, []);

  const getProgress = useCallback(
    (slug: LessonSlug): LessonProgress | undefined =>
      progress.find((p) => p.lessonSlug === slug),
    [progress],
  );

  const completedCount = progress.filter((p) => p.completed).length;

  return { progress, loading, refresh, toggleComplete, submitScore, getProgress, completedCount };
}

export function useReflections(lessonSlug?: LessonSlug) {
  const [reflections, setReflections] = useState<ReflectionAnswer[]>([]);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    try {
      const data = await fetchReflections(lessonSlug);
      setReflections(data);
    } catch {
      // keep whatever we have
    } finally {
      setLoading(false);
    }
  }, [lessonSlug]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    void refresh();
  }, [refresh]);

  const upsert = useCallback(
    async (input: {
      lessonSlug: LessonSlug;
      promptId: string;
      prompt: string;
      group: ReflectionGroup;
      answer: string;
    }) => {
      const saved = await saveReflection(input);
      setReflections((prev) => {
        const exists = prev.some((r) => r.promptId === input.promptId && r.lessonSlug === input.lessonSlug);
        return exists
          ? prev.map((r) => (r.promptId === input.promptId && r.lessonSlug === input.lessonSlug ? saved : r))
          : [...prev, saved];
      });
    },
    [],
  );

  const remove = useCallback(async (id: string) => {
    await apiDeleteReflection(id);
    setReflections((prev) => prev.filter((r) => r.id !== id));
  }, []);

  return { reflections, loading, refresh, upsert, remove };
}

export function useAnnotations(lessonSlug: LessonSlug) {
  const [annotations, setAnnotations] = useState<Annotation[]>([]);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    try {
      const data = await fetchAnnotations(lessonSlug);
      setAnnotations(data);
    } catch {
      // keep whatever we have
    } finally {
      setLoading(false);
    }
  }, [lessonSlug]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    void refresh();
  }, [refresh]);

  const add = useCallback(
    async (input: {
      lessonSlug: LessonSlug;
      paragraphId: string;
      text: string;
      color: "red" | "teal" | "amber";
      startOffset: number;
      endOffset: number;
    }) => {
      const created = await saveAnnotation(input);
      setAnnotations((prev) => [...prev, created]);
    },
    [],
  );

  const remove = useCallback(async (id: string) => {
    await apiDeleteAnnotation(id);
    setAnnotations((prev) => prev.filter((a) => a.id !== id));
  }, []);

  return { annotations, loading, refresh, add, remove };
}
