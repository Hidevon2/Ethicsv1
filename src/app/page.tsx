"use client";

import { useRef } from "react";
import Link from "next/link";
import { AppHeader } from "@/components/layout/app-header";
import { SearchDialog } from "@/components/search/search-dialog";
import { lessons, unit } from "@/lib/content";
import { useLessonProgress } from "@/lib/hooks";
import { CheckIcon, ArrowRightIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

export default function Home() {
  const { progress, loading, completedCount } = useLessonProgress();
  const tocRef = useRef<HTMLOListElement>(null);

  function onTocKeyDown(e: React.KeyboardEvent) {
    if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
    const links = Array.from(
      tocRef.current?.querySelectorAll<HTMLAnchorElement>("a[data-toc-row]") ?? [],
    );
    if (links.length === 0) return;
    const currentIndex = links.indexOf(document.activeElement as HTMLAnchorElement);
    const nextIndex =
      e.key === "ArrowDown"
        ? currentIndex < 0
          ? 0
          : Math.min(currentIndex + 1, links.length - 1)
        : currentIndex < 0
          ? links.length - 1
          : Math.max(currentIndex - 1, 0);
    e.preventDefault();
    links[nextIndex]?.focus();
  }

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

            <div className="mt-10 flex items-start justify-between gap-6">
              <div>
                <p className="font-sans text-[11px] font-bold uppercase tracking-[0.28em] text-primary">
                  Unit I
                </p>
                <h1 className="mt-3 text-balance font-serif text-6xl font-bold leading-none tracking-tight sm:text-7xl">
                  Ethics
                </h1>
                <p className="mt-3 font-serif text-lg italic text-muted">
                  A Collegiate Study
                </p>
                <p className="mt-6 max-w-[52ch] text-balance font-serif text-[17px] leading-relaxed text-foreground/90">
                  {unit.title}
                </p>
              </div>
              <span
                aria-hidden="true"
                className="hidden h-28 w-28 shrink-0 rotate-3 bg-primary sm:block"
                style={{
                  clipPath:
                    "polygon(50% 0%, 58% 18%, 79% 6%, 86% 27%, 100% 24%, 96% 46%, 100% 62%, 83% 71%, 86% 92%, 66% 84%, 57% 100%, 44% 86%, 24% 94%, 17% 74%, 0% 76%, 5% 55%, 0% 37%, 15% 29%, 10% 7%, 31% 14%)",
                }}
              />
            </div>

            <div className="mt-8 border-t-2 border-foreground" />
            <h2 className="mt-8 font-sans text-[11px] font-bold uppercase tracking-[0.28em] text-foreground">
              Contents
            </h2>
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-4 pb-24 pt-10 sm:px-6">
          <div className="relative overflow-hidden rounded-[var(--radius)] border-2 border-foreground bg-panel shadow-[5px_5px_0_var(--border)]">
            <ol ref={tocRef} role="list" onKeyDown={onTocKeyDown} className="divide-y-2 divide-foreground/15">
              {lessons.map((lesson) => {
                const p = progress.find((item) => item.lessonSlug === lesson.slug);
                const isFirst = lesson.number === 1;
                return (
                  <li key={lesson.slug} className="relative">
                    <Link
                      href={`/lesson?slug=${lesson.slug}`}
                      data-toc-row
                      className="group flex w-full items-center gap-5 px-5 py-6 text-left transition-colors hover:bg-panel-muted sm:px-6"
                    >
                      <span
                        className={cn(
                          "relative flex h-11 w-11 shrink-0 items-center justify-center border-2 border-foreground font-serif text-lg font-bold",
                          p?.completed
                            ? "bg-primary text-primary-contrast"
                            : isFirst
                              ? "starburst flex items-center justify-center border-0 bg-primary text-primary-contrast"
                              : "bg-background text-foreground",
                        )}
                      >
                        {p?.completed ? <CheckIcon className="h-5 w-5" /> : lesson.number}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-balance font-serif text-xl font-bold leading-snug text-foreground sm:text-2xl">
                          {lesson.title}
                        </span>
                        <span className="mt-1 block font-serif text-sm italic leading-relaxed text-muted">
                          {lesson.coverLine}
                        </span>
                        <span className="mt-1.5 block font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
                          {lesson.learningOutcomes.length} outcomes ·{" "}
                          {lesson.keyTerms.length} key terms · {lesson.quiz.length} quiz
                          items
                          {p?.completed ? " · complete" : ""}
                        </span>
                      </span>
                      <ArrowRightIcon className="h-5 w-5 shrink-0 text-muted transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                    </Link>
                  </li>
                );
              })}
            </ol>
          </div>

          <p className="mt-8 max-w-[62ch] text-pretty font-serif text-[15px] leading-relaxed text-muted">
            Read each lesson like an issue page by page — tap a red term to pop
            its definition, drag a selection to mark it in ink, answer the check
            at the end, and keep your Challenge reflections on file. Press{" "}
            <kbd className="rounded-sm border border-foreground/40 bg-panel px-1 font-sans text-xs text-foreground">/</kbd>{" "}
            anywhere to search the whole unit.
          </p>

          <div className="mt-10 rounded-[var(--radius)] border-2 border-foreground bg-panel px-5 py-4 shadow-[4px_4px_0_var(--border)]">
            <div className="flex items-center justify-between">
              <span className="font-sans text-xs font-bold uppercase tracking-[0.16em] text-muted">
                Unit progress
              </span>
              <span className="font-serif font-semibold text-foreground">
                {completedCount} of {lessons.length} lessons complete
              </span>
            </div>
            <div
              className="mt-2 h-3 w-full border-2 border-foreground bg-background"
              role="progressbar"
              aria-label="Overall Unit I progress"
              aria-valuenow={completedCount}
              aria-valuemin={0}
              aria-valuemax={lessons.length}
            >
              <div
                className="h-full bg-primary transition-all duration-300"
                style={{
                  width: `${lessons.length === 0 ? 0 : (completedCount / lessons.length) * 100}%`,
                }}
              />
            </div>
            {loading && (
              <p className="mt-2 font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
                Loading progress…
              </p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
