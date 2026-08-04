"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { searchLessons, unit } from "@/lib/content";
import { SearchIcon, XIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

const KIND_LABEL: Record<string, string> = {
  title: "Lesson",
  outcome: "Outcome",
  narrative: "Narrative",
  term: "Key term",
  reflection: "Reflection",
};

export function SearchDialog() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const results = useMemo(() => searchLessons(query), [query]);

  const openDialog = () => {
    setQuery("");
    setActiveIndex(0);
    setOpen(true);
    window.requestAnimationFrame(() => inputRef.current?.focus());
  };

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      const tag = (e.target as HTMLElement)?.tagName;
      const typing = tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT";
      if (e.key === "/" && !typing) {
        e.preventDefault();
        openDialog();
      }
    }
    function onOpen() {
      openDialog();
    }
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("opencode:search", onOpen);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("opencode:search", onOpen);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
      }
      if (e.key === "ArrowDown" && results.length > 0) {
        e.preventDefault();
        setActiveIndex((i) => Math.min(i + 1, results.length - 1));
      }
      if (e.key === "ArrowUp" && results.length > 0) {
        e.preventDefault();
        setActiveIndex((i) => Math.max(i - 1, 0));
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, results.length]);

  useEffect(() => {
    const el = listRef.current?.querySelector<HTMLElement>("[data-active='true']");
    el?.scrollIntoView({ block: "nearest" });
  }, [activeIndex]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-foreground/40 p-4 pt-[12vh]"
      role="dialog"
      aria-modal="true"
      aria-label="Search lessons and key terms"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) setOpen(false);
      }}
    >
      <div className="w-full max-w-xl overflow-hidden rounded-[var(--radius)] border-2 border-foreground bg-panel shadow-[6px_6px_0_var(--border)]">
        <div className="flex items-center gap-2 border-b-2 border-foreground px-3">
          <SearchIcon className="h-4 w-4 shrink-0 text-muted" />
          <label htmlFor="search-input" className="sr-only">
            Search Unit I
          </label>
          <input
            ref={inputRef}
            id="search-input"
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActiveIndex(0);
            }}
            placeholder={`Search ${unit.title}…`}
            className="h-12 w-full bg-transparent font-serif text-base text-foreground placeholder:text-muted focus:outline-none"
          />
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close search"
            className="shrink-0 rounded-sm p-1.5 text-muted hover:text-foreground"
          >
            <XIcon className="h-4 w-4" />
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto">
          {query.trim().length < 2 ? (
            <p className="px-4 py-8 text-center font-sans text-xs uppercase tracking-[0.14em] text-muted">
              Type at least two letters. Press{" "}
              <kbd className="text-foreground">/</kbd> to open,{" "}
              <kbd className="text-foreground">Esc</kbd> to close.
            </p>
          ) : results.length === 0 ? (
            <p className="px-4 py-8 text-center text-sm text-muted">
              Nothing in Unit I matches &ldquo;{query}&rdquo;.
            </p>
          ) : (
            <ul ref={listRef} role="listbox" aria-label="Search results">
              {results.map((result, index) => (
                <li
                  key={`${result.lesson.slug}-${result.kind}-${index}`}
                  role="option"
                  aria-selected={index === activeIndex}
                >
                  <Link
                    href={`/lesson?slug=${result.lesson.slug}${result.anchor ? `#${result.anchor}` : ""}`}
                    onMouseEnter={() => setActiveIndex(index)}
                    onClick={() => setOpen(false)}
                    data-active={index === activeIndex}
                    className={cn(
                      "flex items-start gap-3 border-b border-border px-4 py-3 transition-colors",
                      index === activeIndex ? "bg-panel-muted" : "hover:bg-panel-muted",
                    )}
                  >
                    <span className="mt-0.5 shrink-0 rounded-sm border border-foreground bg-background px-1.5 py-0.5 font-sans text-[10px] font-semibold uppercase tracking-[0.1em]">
                      {KIND_LABEL[result.kind]}
                    </span>
                    <span className="min-w-0">
                      <span className="block font-sans text-xs font-semibold uppercase tracking-[0.08em] text-primary">
                        {result.lesson.number}. {result.lesson.title}
                      </span>
                      <span className="mt-0.5 block text-sm leading-relaxed text-foreground">
                        {result.text.length > 160
                          ? `${result.text.slice(0, 160)}…`
                          : result.text}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
