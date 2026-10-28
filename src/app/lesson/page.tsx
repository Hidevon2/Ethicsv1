"use client";

import { Suspense, useEffect, useState, type CSSProperties } from "react";
import { BookOpen, Minus, Plus } from "lucide-react";
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
import { EditorNotes } from "@/components/lesson/editor-note";
import { Profiles } from "@/components/lesson/profile-card";
import { TermGlossary } from "@/components/lesson/term-glossary";
import { ReflectionSection } from "@/components/lesson/reflection-section";
import { LessonNav } from "@/components/lesson/lesson-nav";
import { SidebarToc } from "@/components/lesson/sidebar-toc";
import { QuizDialog } from "@/components/quiz/quiz-dialog";
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
  const [textSize, setTextSize] = useState(18);
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
      if (typing || target.closest('[role="dialog"]')) return;
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
      <main id="main-content" className="mx-auto w-full max-w-2xl flex-1 px-4 pb-24 pt-16 sm:px-6">
        <h1 className="font-serif text-3xl font-bold text-foreground">
          Lesson not found
        </h1>
        <p className="mt-3 font-serif text-muted">
          The slug you opened does not match any lesson in the module.
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
    <main id="main-content" className="lesson-page" style={{ "--reader-size": `${textSize}px` } as CSSProperties}>
      <LessonHeader lesson={lesson} />
      <div className="lesson-workspace">
        <SidebarToc
          lesson={lesson}
          completed={progress?.completed ?? false}
          className="desktop-lesson-sidebar"
        />
        <article className="lesson-article" aria-label={lesson.title}>
          <details className="lesson-mobile-contents">
            <summary>In this lesson</summary>
            <SidebarToc lesson={lesson} compact />
          </details>
          <div className="reader-toolbar"><span><BookOpen size={15} />Make room for a little reflection.</span><div aria-label="Reading text size"><span>Text size</span><button type="button" aria-label="Decrease reading text size" disabled={textSize <= 16} onClick={() => setTextSize((size) => size - 1)}><Minus size={14} /></button><button type="button" aria-label="Increase reading text size" disabled={textSize >= 22} onClick={() => setTextSize((size) => size + 1)}><Plus size={14} /></button></div></div>
          <LearningOutcomes lesson={lesson} />
          <Prose
            lesson={lesson}
            annotations={annotations}
            onAddAnnotation={add}
            onRemoveAnnotation={(id) => void remove(id)}
          />
          <Profiles profiles={lesson.profiles ?? []} />
          <EditorNotes notes={lesson.editorNotes ?? []} />
          <TermGlossary lesson={lesson} />
          <section
            id="reflections"
            aria-labelledby="reflections-heading"
            className="reader-section lesson-reflections"
          >
            <h2
              id="reflections-heading"
              className="reader-section-title"
            >
              Make the lesson your own.
            </h2>
            <p className="reader-section-description">Pause, consider, and put your perspective into words.</p>
            <ReflectionSection
              lesson={lesson}
              savedByPromptId={savedByPromptId}
              onSave={upsert}
              onRemove={removeReflection}
            />
          </section>
          <QuizDialog
            lesson={lesson}
            best={progress?.quizBest ?? null}
            onSubmitScore={(score) => submitScore(lesson.slug, score)}
          />
          <div className="lesson-completion"><MarkComplete
            completed={progress?.completed ?? false}
            onToggle={() => toggleComplete(lesson.slug, !(progress?.completed ?? false))}
          /></div>
          <LessonNav slug={lesson.slug} />
          <p className="mt-6 text-center font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
            <kbd className="rounded-sm border border-foreground/40 bg-panel px-1 text-foreground">←</kbd>{" "}
            <kbd className="rounded-sm border border-foreground/40 bg-panel px-1 text-foreground">→</kbd>{" "}
            move between lessons ·{" "}
            <kbd className="rounded-sm border border-foreground/40 bg-panel px-1 text-foreground">/</kbd>{" "}
            search
          </p>
        </article>
      </div>
    </main>
  );
}

function LessonRouter() {
  const params = useSearchParams();
  const slug = params.get("slug");
  if (!slug) {
    return (
      <main id="main-content" className="mx-auto w-full max-w-2xl flex-1 px-4 pb-24 pt-16 sm:px-6">
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
      <Suspense fallback={<main id="main-content" className="lesson-page lesson-loading" aria-busy="true"><div /><div /><p>Opening your lesson…</p></main>}>
        <LessonRouter />
      </Suspense>
    </PageFrame>
  );
}
