import type { Lesson } from "@/lib/types";

export function LessonHeader({ lesson }: { lesson: Lesson }) {
  return (
    <header className="mb-10">
      <div className="mb-4 flex items-center gap-3">
        <span className="inline-flex h-9 min-w-9 items-center justify-center rounded-sm border-2 border-foreground bg-primary px-2 font-sans text-sm font-bold uppercase text-primary-contrast">
          {lesson.number}
        </span>
        <span className="h-px flex-1 bg-foreground/30" />
        <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
          Unit I · Lesson {lesson.number} of 4
        </span>
      </div>
      <h1 className="text-balance font-serif text-4xl font-bold leading-tight text-foreground sm:text-5xl">
        {lesson.title}
      </h1>
      <p className="mt-4 max-w-[68ch] text-balance font-serif text-lg italic leading-relaxed text-muted">
        {lesson.coverLine}
      </p>
    </header>
  );
}
