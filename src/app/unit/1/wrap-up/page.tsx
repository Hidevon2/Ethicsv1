import Link from "next/link";
import { AppHeader } from "@/components/layout/app-header";
import { SearchDialog } from "@/components/search/search-dialog";
import { CalloutBlock } from "@/components/lesson/callout-block";
import { findGlossaryTerm, getLesson } from "@/lib/content";
import { unitOneWrapUp } from "@/lib/content/unit1-wrapup";

export default function UnitOneWrapUpPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-background font-serif text-foreground">
      <AppHeader />
      <SearchDialog />

      <main className="mx-auto w-full max-w-3xl flex-1 px-4 pb-24 pt-10 sm:px-6">
        <header className="mb-10">
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
            Unit I · Wrap-up
          </p>
          <h1 className="mt-3 text-balance font-serif text-4xl font-bold leading-tight text-foreground sm:text-5xl">
            HARNESS · SUMMARY · KEY WORDS
          </h1>
          <p className="mt-4 max-w-[68ch] text-balance font-serif text-lg italic leading-relaxed text-muted">
            Where the unit leaves you: one capstone discussion, the unit in four
            bullets, and the words that carried it.
          </p>
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
          <div className="overflow-hidden rounded-[var(--radius)] border-2 border-foreground bg-panel shadow-[4px_4px_0_var(--border)]">
            <ol className="px-5 py-4">
              {unitOneWrapUp.summary.map((bullet, index) => (
                <li
                  key={index}
                  className="flex gap-3 border-b border-border py-3 last:border-b-0"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-sm border-2 border-foreground bg-background font-sans text-xs font-bold text-primary">
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
            <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
              {unitOneWrapUp.keyWords.length} to know
            </span>
          </header>
          <p className="mb-4 max-w-[68ch] font-serif text-sm italic leading-relaxed text-muted">
            Each term links back to the lesson where it is defined.
          </p>
          <dl className="divide-y-2 divide-foreground/25 border-y-2 border-foreground">
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
                      className="font-sans text-sm font-bold uppercase tracking-[0.08em] text-primary underline-offset-4 hover:underline"
                    >
                      {keyword.label}
                    </Link>
                    {lesson && (
                      <span className="mt-0.5 block font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
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
            <p className="mb-4 font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
              {unitOneWrapUp.furtherReading.note}
            </p>
            <p className="text-pretty font-serif text-[15px] leading-relaxed text-foreground">
              {unitOneWrapUp.furtherReading.text}
            </p>
            <p className="mb-2 mt-5 font-sans text-[11px] font-bold uppercase tracking-[0.14em] text-muted">
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
                    className="rounded-[var(--radius)] border-2 border-foreground bg-background px-2.5 py-1 font-sans text-[11px] font-semibold uppercase tracking-[0.08em] text-primary transition-colors hover:bg-panel-muted"
                  >
                    {entry.term}
                  </Link>
                );
              })}
            </div>
          </CalloutBlock>
        </section>

        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-[0.12em] text-primary underline-offset-4 hover:underline"
        >
          Back to the Unit I cover
        </Link>
      </main>
    </div>
  );
}
