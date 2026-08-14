import type { Lesson } from "@/lib/types";

export function TermGlossary({ lesson }: { lesson: Lesson }) {
  if (lesson.keyTerms.length === 0) return null;
  return (
    <section
      id="glossary"
      aria-labelledby="glossary-heading"
      className="mt-12"
    >
      <header className="mb-4 flex items-baseline gap-3">
        <h2
          id="glossary-heading"
          className="text-balance font-serif text-2xl font-bold leading-snug text-foreground"
        >
          Key terms
        </h2>
        <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
          {lesson.keyTerms.length} defined
        </span>
      </header>
      <dl className="divide-y divide-border border-y border-border">
        {lesson.keyTerms.map((term) => (
          <div
            key={term.slug}
            id={`term-${term.slug}`}
            className="grid gap-1 py-4 sm:grid-cols-[minmax(0,240px)_1fr] sm:gap-6"
          >
            <dt className="font-serif text-sm font-semibold uppercase tracking-[0.04em] text-primary">
              {term.term}
            </dt>
            <dd className="text-pretty font-serif text-[15px] leading-relaxed text-foreground">
              {term.definition}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}