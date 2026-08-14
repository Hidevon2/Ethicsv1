"use client";

import { useEffect, useRef, useState } from "react";
import type { KeyTerm } from "@/lib/types";
import { cn } from "@/lib/utils";

export function KeyTerm({ term }: { term: KeyTerm }) {
  const [mounted, setMounted] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const wrapperRef = useRef<HTMLSpanElement>(null);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (leaveTimer.current) clearTimeout(leaveTimer.current);
    };
  }, []);

  useEffect(() => {
    if (!mounted) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    function onOutsideClick(e: MouseEvent) {
      if (!wrapperRef.current?.contains(e.target as Node)) close();
    }
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("mousedown", onOutsideClick);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("mousedown", onOutsideClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mounted]);

  function close() {
    if (!mounted || leaving) return;
    setLeaving(true);
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
    leaveTimer.current = setTimeout(() => {
      setMounted(false);
      setLeaving(false);
    }, 100);
  }

  function open() {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
    setLeaving(false);
    setMounted(true);
  }

  function toggle() {
    if (mounted && !leaving) close();
    else open();
  }

  return (
    <span
      ref={wrapperRef}
      className="relative inline-block"
      onMouseEnter={open}
      onMouseLeave={close}
    >
      <button
        type="button"
        onClick={toggle}
        aria-expanded={mounted}
        className={cn(
          "inline-block rounded-sm px-0.5 font-medium text-primary underline decoration-primary/40 decoration-[1.5px] underline-offset-4",
          "transition-colors hover:bg-primary/10 hover:decoration-primary",
          mounted && "bg-primary/15 decoration-primary",
        )}
      >
        {term.term}
      </button>
      {mounted && (
        <span
          role="region"
          aria-label={`Definition of ${term.term}`}
          className={cn(
            "absolute left-0 top-full z-30 mt-2 block max-w-[280px] rounded-[var(--radius)] border border-border bg-panel px-3 py-2.5 shadow-[0_12px_32px_rgba(0,0,0,0.5)]",
            leaving ? "bubble-out" : "bubble-in",
          )}
        >
          <span className="block font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
            {term.term}
          </span>
          <span className="mt-1 block text-sm leading-relaxed text-ink-body">
            {term.definition}
          </span>
        </span>
      )}
    </span>
  );
}