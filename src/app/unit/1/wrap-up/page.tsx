"use client";

import Link from "next/link";
import { AppHeader } from "@/components/layout/app-header";
import { SearchDialog } from "@/components/search/search-dialog";
import { CalloutBlock } from "@/components/lesson/callout-block";
import { ArrowRightIcon } from "@/components/ui/icons";
import { findGlossaryTerm, getLesson, getLessonsByUnit } from "@/lib/content";
import { unitOneWrapUp } from "@/lib/content/unit1-wrapup";
import { useLessonProgress } from "@/lib/hooks";
import { cn } from "@/lib/utils";

export default function UnitOneWrapUpPage() {
  const { progress } = useLessonProgress();
  const lessons = getLessonsByUnit(1);

  return (
    <div className="flex min-h-dvh flex-col bg-background font-serif text-foreground">
      <AppHeader />
      <SearchDialog />

      <main className="mx-auto w-full max-w-3xl flex-1 px-4 pb-24 pt-10 sm:px-6">
        <header className="mb-10">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
            Unit I · Wrap-up
          </p>
          <h1 className="mt-3 text-balance font-serif text-4xl font-bold leading-tight text-foreground sm:text-5xl">
            HARNESS · SUMMARY · KEY WORDS
          </h1>
          <p className="mt-4 max-w-[68ch] text-balance font-serif text-lg italic leading-relaxed text-ink-body">
            Where the unit leaves you: one capstone discussion, the unit in four
            bullets, and the words that carried it.
          </p>

          <div className="mt-8" role="presentation">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
              The unit&rsquo;s five lessons
            </p>
            <ol className="mt-3 flex items-center">
              {lessons.map((lesson, index) => {
                const done = progress.some(
                  (p) => p.lessonSlug === lesson.slug && p.completed,
                );
                return (
                  <li key={lesson.slug} className="flex flex-1 items-center last:flex-none">
                    {index > 0 && (
                      <span
                        aria-hidden="true"
                        className="h-px flex-1 bg-border"
                      />
                    )}
                    <Link
                      href={`/lesson?slug=${lesson.slug}`}
                      aria-label={`Lesson ${lesson.number}: ${lesson.title} — ${done ? "complete" : "incomplete"}`}
                      className={cn(
                        "flex h-4 w-4 shrink-0 items-center justify-center rounded-full border transition-colors",
                        done
                          ? "border-primary bg-primary"
                          : "border-border bg-panel",
                      )}
                    >
                      {done && (
                        <span
                          aria-hidden="true"
                          className="h-1 w-1 rounded-full bg-primary-contrast"
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ol>
            <p className="mt-2 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
              {lessons.filter((lesson) =>
                progress.some((p) => p.lessonSlug === lesson.slug && p.completed),
              ).length}{" "}
              of {lessons.length} lit
            </p>
          </div>
        </header>

        <CalloutBlock variant="challenge" title={unitOneWrapUp.harness.title}>
          <p className="text-pretty font-serif text-[17px] leading-relaxed text-foreground">
            {unitOneWrapUp.harness.prompt}
          </p>
        </CalloutBlock>

        <section className="mt-14" aria-labelledby="summary-heading">
          <h2
            id="summary-heading"
            className="mb-2 text-balance font-serif text-2xl font-bold leading-snug text-foreground"
          >
            Summary
          </h2>
          <p className="mb-4 max-w-[68ch] font-serif text-sm italic leading-relaxed text-muted">
            The book&rsquo;s own four-part recap of Unit I.
          </p>
          <div className="overflow-hidden rounded-[var(--radius)] border border-border bg-panel">
            <ol className="px-5 py-2">
              {unitOneWrapUp.summary.map((bullet, index) => (
                <li
                  key={index}
                  className="flex gap-3 border-b border-border py-3 last:border-b-0"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-sm border border-border bg-primary/10 font-mono text-xs font-semibold text-primary">
                    {index + 1}
                  </span>
                  <span className="text-pretty font-serif text-base leading-relaxed text-foreground">
                    {bullet}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="mt-14" aria-labelledby="keywords-heading">
          <header className="mb-4 flex items-baseline gap-3">
            <h2
              id="keywords-heading"
              className="text-balance font-serif text-2xl font-bold leading-snug text-foreground"
            >
              Key words
            </h2>
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
              {unitOneWrapUp.keyWords.length} to know
            </span>
          </header>
          <p className="mb-4 max-w-[68ch] font-serif text-sm italic leading-relaxed text-muted">
            Each term links back to the lesson where it is defined.
          </p>
          <dl className="divide-y divide-border border-y border-border">
            {unitOneWrapUp.keyWords.map((keyword) => {
              const entry = keyword.termSlug
                ? findGlossaryTerm(keyword.termSlug)
                : undefined;
              const definition =
                entry?.definition ?? keyword.fallbackDefinition ?? "";
              const lesson = getLesson(keyword.lessonSlug);
              const href = `/lesson?slug=${keyword.lessonSlug}${
                entry ? `#term-${keyword.termSlug}` : ""
              }`;
              return (
                <div
                  key={keyword.label}
                  className="grid gap-1 py-4 sm:grid-cols-[minmax(0,240px)_1fr] sm:gap-6"
                >
                  <dt>
                    <Link
                      href={href}
                      className="font-serif text-sm font-semibold uppercase tracking-[0.04em] text-primary underline-offset-4 hover:underline"
                    >
                      {keyword.label}
                    </Link>
                    {lesson && (
                      <span className="mt-0.5 block font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
                        {lesson.number}. {lesson.title}
                      </span>
                    )}
                  </dt>
                  <dd className="text-pretty font-serif text-[15px] leading-relaxed text-foreground">
                    {definition}
                  </dd>
                </div>
              );
            })}
          </dl>
        </section>

        <section className="mt-14" aria-labelledby="further-reading-heading">
          <h2
            id="further-reading-heading"
            className="sr-only"
          >
            Further reading
          </h2>
          <CalloutBlock variant="note" title="Further reading">
            <p className="mb-4 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
              {unitOneWrapUp.furtherReading.note}
            </p>
            <p className="text-pretty font-serif text-[15px] leading-relaxed text-foreground">
              {unitOneWrapUp.furtherReading.text}
            </p>
            <p className="mb-2 mt-5 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
              Read further into this site&rsquo;s key terms
            </p>
            <div className="flex flex-wrap gap-2">
              {unitOneWrapUp.furtherReading.topics.map((topicSlug) => {
                const entry = findGlossaryTerm(topicSlug);
                if (!entry) return null;
                return (
                  <Link
                    key={topicSlug}
                    href={`/lesson?slug=${entry.lesson.slug}#term-${topicSlug}`}
                    className="rounded-[var(--radius)] border border-border bg-background px-2.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-primary transition-colors hover:border-primary/50 hover:bg-panel-muted"
                  >
                    {entry.term}
                  </Link>
                );
              })}
            </div>
          </CalloutBlock>
        </section>

        <Link
          href="/unit/1/exam"
          className="group mt-14 block overflow-hidden rounded-[var(--radius)] border border-border bg-panel transition-colors hover:border-primary/50"
        >
          <div className="flex items-center justify-between gap-4 px-5 py-5">
            <span className="min-w-0">
              <span className="block font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
                Ready for Unit II?
              </span>
              <span className="mt-1 block font-serif text-2xl font-bold leading-snug text-foreground">
                Take the Unit I Examination
              </span>
              <span className="mt-1 block font-serif text-sm italic leading-relaxed text-muted">
                50 questions · all five lessons · pass with 20 or higher to unlock Unit II
              </span>
            </span>
            <ArrowRightIcon className="h-6 w-6 shrink-0 text-primary transition-transform group-hover:translate-x-1 motion-reduce:group-hover:translate-x-0" />
          </div>
        </Link>

        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-primary underline-offset-4 hover:underline"
        >
          Back to the Unit I cover
        </Link>
      </main>
    </div>
  );
}