"use client";

import { useEffect, useRef, useState } from "react";
import type { KeyTerm } from "@/lib/types";
import { cn } from "@/lib/utils";

export function KeyTerm({ term }: { term: KeyTerm }) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    function onOutsideClick(e: MouseEvent) {
      if (!wrapperRef.current?.contains(e.target as Node)) setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("mousedown", onOutsideClick);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("mousedown", onOutsideClick);
    };
  }, [open]);

  return (
    <span
      ref={wrapperRef}
      className="relative inline-block"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className={cn(
          "inline-block rounded-sm border-2 border-foreground bg-background px-1 font-medium text-primary",
          "transition-transform hover:-translate-y-px",
          open && "bg-accent text-primary-contrast",
        )}
      >
        {term.term}
      </button>
      {open && (
        <span
          role="region"
          aria-label={`Definition of ${term.term}`}
          className="bubble-up absolute left-0 top-full z-30 mt-3 block max-w-[280px] rounded-[var(--radius)] border-2 border-foreground bg-panel px-3 py-2 shadow-[4px_4px_0_var(--border)]"
        >
          <span className="block font-sans text-[10px] font-bold uppercase tracking-[0.12em] text-primary">
            {term.term}
          </span>
          <span className="mt-0.5 block text-sm leading-relaxed text-foreground">
            {term.definition}
          </span>
        </span>
      )}
    </span>
  );
}
