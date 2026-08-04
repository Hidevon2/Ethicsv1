"use client";

import Link from "next/link";
import { lessons } from "@/lib/content";
import { useReflections } from "@/lib/hooks";
import type { ReflectionGroup } from "@/lib/types";
import { cn } from "@/lib/utils";
import { XIcon } from "@/components/ui/icons";

const GROUP_LABEL: Record<ReflectionGroup, string> = {
  experience: "Experience",
  assess: "Assess",
  challenge: "Challenge",
};

const GROUP_CLASS: Record<ReflectionGroup, string> = {
  experience: "bg-accent text-primary-contrast",
  assess: "bg-foreground text-background",
  challenge: "bg-primary text-primary-contrast",
};

function formatDate(timestamp: number): string {
  try {
    return new Date(timestamp).toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return "";
  }
}

export function ReflectionsPage() {
  const { reflections, loading, remove } = useReflections();

  return (
    <div>
      <header className="mb-10">
        <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
          Unit I · Your voice
        </p>
        <h1 className="mt-3 text-balance font-serif text-4xl font-bold leading-tight text-foreground sm:text-5xl">
          Reflections
        </h1>
        <p className="mt-4 max-w-[68ch] text-balance font-serif text-lg italic leading-relaxed text-muted">
          The challenge prompts you answered inside each lesson, saved to the
          database and gathered here for exam-week review.
        </p>
      </header>

      {loading && (
        <p className="font-serif text-sm italic text-muted">Loading your answers…</p>
      )}

      {!loading && reflections.length === 0 && (
        <div className="rounded-[var(--radius)] border-2 border-foreground bg-panel px-6 py-10 text-center shadow-[4px_4px_0_var(--border)]">
          <p className="font-serif text-lg text-foreground">No reflections saved yet.</p>
          <p className="mt-1 font-serif text-sm text-muted">
            Open a lesson and answer a Challenge prompt — your words will land here.
          </p>
        </div>
      )}

      <div className="space-y-8">
        {lessons.map((lesson) => {
          const answers = reflections
            .filter((r) => r.lessonSlug === lesson.slug)
            .sort((a, b) => b.updatedAt - a.updatedAt);
          if (answers.length === 0) return null;

          return (
            <section
              key={lesson.slug}
              aria-labelledby={`reflections-${lesson.slug}`}
              className="overflow-hidden rounded-[var(--radius)] border-2 border-foreground bg-panel shadow-[4px_4px_0_var(--border)]"
            >
              <header className="flex flex-wrap items-center gap-3 border-b-2 border-foreground bg-panel-muted px-4 py-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-sm border-2 border-foreground bg-background font-sans text-xs font-bold text-primary">
                  {lesson.number}
                </span>
                <h2
                  id={`reflections-${lesson.slug}`}
                  className="font-serif text-lg font-bold leading-tight text-foreground"
                >
                  {lesson.title}
                </h2>
                <Link
                  href={`/lesson?slug=${lesson.slug}`}
                  className="ml-auto font-sans text-[11px] font-bold uppercase tracking-[0.12em] text-primary underline-offset-4 hover:underline"
                >
                  Open lesson
                </Link>
              </header>

              <ul className="divide-y-2 divide-foreground/15">
                {answers.map((answer) => (
                  <li key={answer.id} className="px-4 py-4">
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <span
                        className={cn(
                          "rounded-sm border-2 border-foreground px-1.5 py-0.5 font-sans text-[10px] font-bold uppercase tracking-[0.12em]",
                          GROUP_CLASS[answer.group],
                        )}
                      >
                        {GROUP_LABEL[answer.group]}
                      </span>
                      <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
                        {formatDate(answer.updatedAt)}
                      </span>
                      <button
                        type="button"
                        onClick={() => void remove(answer.id)}
                        className="ml-auto flex items-center gap-1 rounded-sm px-2 py-1 font-sans text-[11px] font-semibold uppercase tracking-[0.1em] text-muted hover:text-primary"
                        aria-label={`Delete answer to ${answer.prompt}`}
                      >
                        <XIcon className="h-3 w-3" />
                        Delete
                      </button>
                    </div>
                    <p className="text-pretty font-serif text-sm italic leading-relaxed text-muted">
                      {answer.prompt}
                    </p>
                    <p className="mt-2 whitespace-pre-wrap text-pretty font-serif text-[15px] leading-relaxed text-foreground">
                      {answer.answer}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </div>
  );
}
