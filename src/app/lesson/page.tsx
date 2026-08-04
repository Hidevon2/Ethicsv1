"use client";

import { Suspense, useEffect } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { getAdjacentLesson, getLesson } from "@/lib/content";
import type { LessonSlug } from "@/lib/types";
import { AppHeader } from "@/components/layout/app-header";
import { SearchDialog } from "@/components/search/search-dialog";
import { ScrollProgress } from "@/components/lesson/scroll-progress";
import { LessonHeader } from "@/components/lesson/lesson-header";
import { LearningOutcomes } from "@/components/lesson/learning-outcomes";
import { MarkComplete } from "@/components/lesson/mark-complete";
import { Prose } from "@/components/lesson/prose";
import { TermGlossary } from "@/components/lesson/term-glossary";
import { ReflectionSection } from "@/components/lesson/reflection-section";
import { LessonNav } from "@/components/lesson/lesson-nav";
import { SidebarToc } from "@/components/lesson/sidebar-toc";
import { QuizRunner } from "@/components/quiz/quiz-runner";
import { useLessonProgress, useAnnotations, useReflections } from "@/lib/hooks";

function PageFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col bg-background font-serif text-foreground">
      <AppHeader />
      <SearchDialog />
      <ScrollProgress />
      {children}
    </div>
  );
}

function LessonView({ slug }: { slug: LessonSlug }) {
  const router = useRouter();
  const lesson = getLesson(slug);

  const { getProgress, toggleComplete, submitScore } = useLessonProgress();
  const { annotations, add, remove } = useAnnotations(slug);
  const { reflections, upsert, remove: removeReflection } = useReflections(slug);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      const target = e.target as HTMLElement;
      const typing =
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.tagName === "SELECT" ||
        target.isContentEditable;
      if (typing) return;
      if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
        const direction = e.key === "ArrowLeft" ? -1 : 1;
        const adjacent = getAdjacentLesson(slug, direction);
        if (adjacent) {
          e.preventDefault();
          router.push(`/lesson?slug=${adjacent.slug}`);
        }
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [slug, router]);

  if (!lesson) {
    return (
      <main className="mx-auto w-full max-w-2xl flex-1 px-4 pb-24 pt-16 sm:px-6">
        <h1 className="font-serif text-3xl font-bold text-foreground">
          Lesson not found
        </h1>
        <p className="mt-3 font-serif text-muted">
          The slug you opened does not match any lesson in Unit I.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block font-sans text-xs font-bold uppercase tracking-[0.12em] text-primary underline-offset-4 hover:underline"
        >
          Back to the cover
        </Link>
      </main>
    );
  }

  const progress = getProgress(lesson.slug);
  const savedByPromptId = new Map(
    reflections.map((reflection) => [reflection.promptId, reflection]),
  );

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 pb-24 pt-8 sm:px-6 lg:px-8">
      <div className="lg:grid lg:grid-cols-[minmax(0,220px)_1fr] lg:gap-12">
        <SidebarToc
          lesson={lesson}
          className="sticky top-24 hidden max-h-[calc(100vh-7rem)] self-start overflow-y-auto lg:block"
        />
        <div className="min-w-0">
          <LessonHeader lesson={lesson} />
          <MarkComplete
            completed={progress?.completed ?? false}
            onToggle={() => void toggleComplete(lesson.slug, !(progress?.completed ?? false))}
          />
          <LearningOutcomes lesson={lesson} />
          <Prose
            lesson={lesson}
            annotations={annotations}
            onAddAnnotation={add}
            onRemoveAnnotation={(id) => void remove(id)}
          />
          <TermGlossary lesson={lesson} />
          <section
            id="reflections"
            aria-labelledby="reflections-heading"
            className="mt-14"
          >
            <h2
              id="reflections-heading"
              className="mb-6 text-balance font-serif text-2xl font-bold leading-snug text-foreground"
            >
              Reflect
            </h2>
            <ReflectionSection
              lesson={lesson}
              savedByPromptId={savedByPromptId}
              onSave={(input) => void upsert(input)}
              onRemove={(id) => void removeReflection(id)}
            />
          </section>
          <QuizRunner
            lesson={lesson}
            best={progress?.quizBest ?? null}
            onSubmitScore={(score) => void submitScore(lesson.slug, score)}
          />
          <LessonNav slug={lesson.slug} />
          <p className="mt-6 text-center font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
            <kbd className="rounded-sm border border-foreground/40 bg-panel px-1 text-foreground">←</kbd>{" "}
            <kbd className="rounded-sm border border-foreground/40 bg-panel px-1 text-foreground">→</kbd>{" "}
            move between lessons ·{" "}
            <kbd className="rounded-sm border border-foreground/40 bg-panel px-1 text-foreground">/</kbd>{" "}
            search
          </p>
        </div>
      </div>
    </main>
  );
}

function LessonRouter() {
  const params = useSearchParams();
  const slug = params.get("slug");
  if (!slug) {
    return (
      <main className="mx-auto w-full max-w-2xl flex-1 px-4 pb-24 pt-16 sm:px-6">
        <p className="font-serif text-lg text-foreground">
          Pick a lesson from the{" "}
          <Link href="/" className="text-primary underline underline-offset-4">
            cover
          </Link>
          .
        </p>
      </main>
    );
  }
  return <LessonView key={slug} slug={slug as LessonSlug} />;
}

export default function LessonPage() {
  return (
    <PageFrame>
      <Suspense fallback={null}>
        <LessonRouter />
      </Suspense>
    </PageFrame>
  );
}
