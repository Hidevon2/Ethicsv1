"use client";

import Link from "next/link";
import { AppHeader } from "@/components/layout/app-header";
import { SearchDialog } from "@/components/search/search-dialog";
import { ExamRunner } from "@/components/quiz/exam-runner";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, ArrowRightIcon, CheckCircleIcon } from "@/components/ui/icons";
import { UNIT1_EXAM_PASS_SCORE, unit1Exam } from "@/lib/content/unit1-exam";
import { useUnit1Exam } from "@/lib/hooks";

export default function UnitOneExamPage() {
  const { state, loading, submit } = useUnit1Exam();

  return (
    <div className="flex min-h-dvh flex-col bg-background font-serif text-foreground">
      <AppHeader />
      <SearchDialog />

      <main className="flex-1">
        <div className="halftone border-b-2 border-foreground">
          <div className="mx-auto max-w-3xl px-4 pb-12 pt-14 sm:px-6 sm:pt-20">
            <div className="flex items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-muted">
              <span className="h-px flex-1 bg-foreground/30" />
              <span>University Study Companion</span>
              <span className="h-px flex-1 bg-foreground/30" />
            </div>

            <div className="mt-10">
              <p className="font-sans text-[11px] font-bold uppercase tracking-[0.28em] text-primary">
                Unit I · Examination
              </p>
              <h1 className="mt-3 text-balance font-serif text-5xl font-bold leading-none tracking-tight sm:text-6xl">
                Unit I Examination
              </h1>
              <p className="mt-3 font-serif text-lg italic text-muted">
                {unit1Exam.length} questions · all five lessons · pass with {UNIT1_EXAM_PASS_SCORE} or
                higher
              </p>
              <p className="mt-6 max-w-[54ch] text-balance font-serif text-[17px] leading-relaxed text-foreground/90">
                This examination covers everything from the Mendez case through the senses of the
                self. Score {UNIT1_EXAM_PASS_SCORE} of {unit1Exam.length} or higher to unlock Unit
                II — below that, you take it again.
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-4 pb-24 pt-10 sm:px-6">
          {loading ? (
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
              Loading examination…
            </p>
          ) : state.passed ? (
            <div
              className="overflow-hidden rounded-[var(--radius)] border-2 border-foreground bg-panel shadow-[4px_4px_0_var(--border)]"
              role="status"
            >
              <div className="flex items-center gap-3 border-b-2 border-foreground bg-primary px-4 py-3 text-primary-contrast">
                <span className="flex h-9 w-9 items-center justify-center rounded-sm border-2 border-foreground bg-background text-primary">
                  <CheckCircleIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-sans text-sm font-bold uppercase tracking-[0.12em]">
                    Examination passed
                  </p>
                  <p className="font-serif text-sm text-primary-contrast/80">
                    Best score kept: {state.best ?? 0} of {unit1Exam.length}
                  </p>
                </div>
              </div>
              <div className="px-4 py-5">
                <p className="text-pretty font-serif text-[17px] leading-relaxed text-foreground">
                  Congratulations — you may now continue to Unit II, Utilitarianism. Your passing
                  score is saved, so you can return to this page anytime.
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-4">
                  <Button asChild>
                    <Link href="/unit/2">
                      Continue to Unit II
                      <ArrowRightIcon className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <ExamRunner
              questions={unit1Exam}
              passScore={UNIT1_EXAM_PASS_SCORE}
              onSubmit={(score) => void submit(score)}
            />
          )}

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 border-t-2 border-foreground pt-6">
            <Link
              href="/lesson?slug=senses-of-the-self"
              className="inline-flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-[0.12em] text-primary underline-offset-4 hover:underline"
            >
              <ArrowLeftIcon className="h-4 w-4 text-primary" />
              Back to Lesson 5 · Senses of the Self
            </Link>
            <Link
              href="/unit/1/wrap-up"
              className="inline-flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-[0.12em] text-primary underline-offset-4 hover:underline"
            >
              Review the Unit I wrap-up
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
