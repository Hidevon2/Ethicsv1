"use client";

import Link from "next/link";
import { AppHeader } from "@/components/layout/app-header";
import { SearchDialog } from "@/components/search/search-dialog";
import { getLessonsByUnit, unit2 } from "@/lib/content";
import { useLessonProgress, useUnit1Exam } from "@/lib/hooks";
import { UNIT1_EXAM_PASS_SCORE, unit1Exam } from "@/lib/content/unit1-exam";
import { Button } from "@/components/ui/button";
import { CheckIcon, ArrowRightIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

export default function UnitTwoPage() {
  const { progress, loading } = useLessonProgress();
  const { state: exam, loading: examLoading } = useUnit1Exam();
  const unitLessons = getLessonsByUnit(2);
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
                Unit II
              </p>
              <h1 className="mt-3 text-balance font-serif text-6xl font-bold leading-none tracking-tight text-foreground sm:text-7xl">
                Utilitarianism
              </h1>
              <p className="mt-3 font-serif text-lg italic text-muted">
                {unit2.tagline}
              </p>
              <p className="mt-6 max-w-[52ch] text-balance font-serif text-[17px] leading-relaxed text-ink-body">
                An ethical theory arguing for the goodness of pleasure and
                determining right behavior based on the usefulness of an
                action&rsquo;s consequences.
              </p>
            </div>

            <div className="mt-8 border-t border-border" />
            <h2 className="mt-8 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
              Contents
            </h2>
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-4 pb-24 pt-10 sm:px-6">
          {examLoading ? (
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
              Loading Unit II…
            </p>
          ) : exam.passed ? (
            <>
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
            The lessons follow Bentham and Mill from the Mamasapano clash to the
            principle of utility, the principle of the greatest number, and
            their account of justice and rights. Read each lesson page by page,
            tap an amber term to pop its definition, answer the check at the end,
            and keep your Challenge reflections on file.
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
              aria-label="Overall Unit II progress"
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
            {loading && (
              <p className="mt-2 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
                Loading progress…
              </p>
            )}
          </div>
            </>
          ) : (
            <div className="rise-in overflow-hidden rounded-[var(--radius)] border border-border bg-panel">
              <div className="flex items-center gap-3 border-b border-border bg-primary/10 px-4 py-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-sm border border-primary bg-primary/10 font-mono text-sm font-semibold text-primary">
                  {UNIT1_EXAM_PASS_SCORE}
                </span>
                <div>
                  <p className="font-mono text-sm font-semibold uppercase tracking-[0.12em] text-foreground">
                    Unit II is locked
                  </p>
                  <p className="font-serif text-sm text-ink-body">
                    Pass the Unit I examination first
                  </p>
                </div>
              </div>
              <div className="px-5 py-6">
                <p className="text-pretty font-serif text-[17px] leading-relaxed text-ink-body">
                  Score {UNIT1_EXAM_PASS_SCORE} of {unit1Exam.length} on the Unit I examination to
                  unlock Unit II. Below that, you will need to take the examination again.
                </p>
                <div className="mt-5">
                  <Button asChild>
                    <Link href="/unit/1/exam">
                      Take the Unit I examination
                      <ArrowRightIcon className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          )}

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
