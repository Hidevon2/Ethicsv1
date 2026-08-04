import Link from "next/link";
import { getAdjacentLesson } from "@/lib/content";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/ui/icons";
import type { LessonSlug } from "@/lib/types";

export function LessonNav({ slug }: { slug: LessonSlug }) {
  const prev = getAdjacentLesson(slug, -1);
  const next = getAdjacentLesson(slug, 1);

  return (
    <nav
      aria-label="Lesson navigation"
      className="mt-16 grid gap-4 border-t-2 border-foreground pt-6 sm:grid-cols-2"
    >
      {prev ? (
        <Link
          href={`/lesson?slug=${prev.slug}`}
          className="group flex items-center gap-3 rounded-[var(--radius)] border-2 border-foreground bg-panel px-4 py-3 shadow-[3px_3px_0_var(--border)] transition-transform hover:-translate-y-0.5"
        >
          <ArrowLeftIcon className="h-4 w-4 shrink-0 text-primary" />
          <span className="min-w-0">
            <span className="block font-sans text-[10px] font-bold uppercase tracking-[0.16em] text-muted">
              Previous lesson
            </span>
            <span className="block truncate font-serif text-sm font-semibold text-foreground">
              {prev.number}. {prev.title}
            </span>
          </span>
        </Link>
      ) : (
        <span aria-hidden="true" />
      )}

      {next ? (
        <Link
          href={`/lesson?slug=${next.slug}`}
          className="group flex items-center justify-end gap-3 rounded-[var(--radius)] border-2 border-foreground bg-panel px-4 py-3 text-right shadow-[3px_3px_0_var(--border)] transition-transform hover:-translate-y-0.5"
        >
          <span className="min-w-0">
            <span className="block font-sans text-[10px] font-bold uppercase tracking-[0.16em] text-muted">
              Next lesson
            </span>
            <span className="block truncate font-serif text-sm font-semibold text-foreground">
              {next.number}. {next.title}
            </span>
          </span>
          <ArrowRightIcon className="h-4 w-4 shrink-0 text-primary" />
        </Link>
      ) : (
        <span aria-hidden="true" />
      )}
    </nav>
  );
}
