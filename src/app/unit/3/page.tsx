"use client";

import Link from "next/link";
import { AppHeader } from "@/components/layout/app-header";
import { SearchDialog } from "@/components/search/search-dialog";
import { getLessonsByUnit, unit3 } from "@/lib/content";
import { useLessonProgress } from "@/lib/hooks";
import { CheckIcon, ArrowRightIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

export default function UnitThreePage() {
  const { progress } = useLessonProgress();
  const unitLessons = getLessonsByUnit(3);
  const completedCount = unitLessons.filter((lesson) =>
    progress.some((item) => item.lessonSlug === lesson.slug && item.completed),
  ).length;

  return (
    <div className="flex min-h-dvh flex-col bg-background font-serif text-foreground">
      <AppHeader />
      <SearchDialog />

      <main className="flex-1">
        <div className="border-b border-border">
          <div className="mx-auto max-w-3xl px-4 pb-12 pt-14 sm:px-6 sm:pt-20">
            <div className="relative">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
                Unit III
              </p>
              <h1 className="mt-3 text-balance font-serif text-6xl font-bold leading-none tracking-tight text-foreground sm:text-7xl">
                Deontology
              </h1>
              <p className="mt-3 font-serif text-lg italic text-muted">
                {unit3.tagline}
              </p>
              <p className="mt-6 max-w-[52ch] text-balance font-serif text-[17px] leading-relaxed text-ink-body">
                An ethical theory that judges the morality of an action based on whether it conforms to a moral rule or duty, independent of the action&rsquo;s consequences.
              </p>
            </div>

            <div className="mt-8 border-t border-border" />
            <h2 className="mt-8 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
              Contents
            </h2>
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-4 pb-24 pt-10 sm:px-6">
          <div className="relative overflow-hidden rounded-[var(--radius)] border border-border bg-panel">
            <ol role="list" className="divide-y divide-border">
              {unitLessons.map((lesson) => {
                const p = progress.find((item) => item.lessonSlug === lesson.slug);
                return (
                  <li key={lesson.slug} className="relative">
                    <Link
                      href={`/lesson?slug=${lesson.slug}`}
                      className="group flex w-full items-center gap-5 px-5 py-5 text-left transition-colors hover:bg-panel-muted sm:px-6"
                    >
                      <span
                        className={cn(
                          "relative flex h-10 w-10 shrink-0 items-center justify-center rounded-md border font-serif text-base font-bold transition-colors",
                          p?.completed
                            ? "border-primary bg-primary text-primary-contrast"
                            : "border-border bg-background text-foreground",
                        )}
                      >
                        {p?.completed ? <CheckIcon className="h-4 w-4" /> : lesson.number}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-balance font-serif text-xl font-bold leading-snug text-foreground sm:text-2xl">
                          {lesson.title}
                        </span>
                        <span className="mt-1 block font-serif text-sm italic leading-relaxed text-muted">
                          {lesson.coverLine}
                        </span>
                        <span className="mt-1.5 block font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
                          {lesson.learningOutcomes.length} outcomes ·{" "}
                          {lesson.keyTerms.length} key terms · {lesson.quiz.length} quiz
                          items
                          {p?.completed ? " · complete" : ""}
                        </span>
                      </span>
                      <ArrowRightIcon className="h-5 w-5 shrink-0 text-muted transition-transform group-hover:translate-x-1 group-hover:text-primary motion-reduce:group-hover:translate-x-0" />
                    </Link>
                  </li>
                );
              })}
            </ol>
          </div>

          <p className="mt-8 max-w-[62ch] text-pretty font-serif text-[15px] leading-relaxed text-muted">
            The lesson follows Reggie Cabututan&rsquo;s honesty to define duty in deontological terms: doing the right thing because it is right, independent of reward or punishment. Read the lesson page by page, tap an amber term to pop its definition, answer the check at the end, and keep your Challenge reflections on file.
          </p>

          <div className="mt-10 rounded-[var(--radius)] border border-border bg-panel px-5 py-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
                Unit progress
              </span>
              <span className="font-mono text-[13px] font-semibold text-foreground">
                {completedCount} of {unitLessons.length} lessons complete
              </span>
            </div>
            <div
              className="wick-track mt-3"
              role="progressbar"
              aria-label="Overall Unit III progress"
              aria-valuenow={completedCount}
              aria-valuemin={0}
              aria-valuemax={unitLessons.length}
            >
              <div
                className="wick-fill"
                style={{
                  transform: `scaleX(${unitLessons.length === 0 ? 0 : completedCount / unitLessons.length})`,
                }}
              />
            </div>
          </div>

          <Link
            href="/"
            className="mt-6 inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-primary underline-offset-4 hover:underline"
          >
            <ArrowRightIcon className="h-4 w-4 rotate-180 text-primary" />
            Back to Unit I
          </Link>
        </div>
      </main>
    </div>
  );
}