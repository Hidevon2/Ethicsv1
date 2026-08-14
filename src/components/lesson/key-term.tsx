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
          "inline-block rounded-sm border-2 border-foreground bg-background px-1 font-medium text-primary",
          "transition-transform hover:-translate-y-px motion-reduce:hover:translate-y-0",
          mounted && "bg-accent text-primary-contrast",
        )}
      >
        {term.term}
      </button>
      {mounted && (
        <span
          role="region"
          aria-label={`Definition of ${term.term}`}
          className={cn(
            "bubble-up absolute left-0 top-full z-30 mt-3 block max-w-[280px] rounded-[var(--radius)] border-2 border-foreground bg-panel px-3 py-2 shadow-[4px_4px_0_var(--border)]",
            leaving ? "bubble-out" : "bubble-in",
          )}
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