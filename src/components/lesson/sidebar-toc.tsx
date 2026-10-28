"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, BookOpen, Check, ChevronRight, Feather, Highlighter } from "lucide-react";
import type { Lesson } from "@/lib/types";
import { getLessonsByUnit, getUnit } from "@/lib/content";
import { cn } from "@/lib/utils";

export function SidebarToc({ lesson, className, compact = false, completed = false }: { lesson: Lesson; className?: string; compact?: boolean; completed?: boolean }) {
  const [active, setActive] = useState("outcomes");
  const items = useMemo(() => [
    { id: "outcomes", label: "What you’ll learn" },
    ...lesson.think.map((section) => ({ id: section.id, label: section.heading })),
    ...(lesson.profiles?.length ? [{ id: "thinkers", label: "The thinkers" }] : []),
    { id: "glossary", label: "Key terms" },
    { id: "reflections", label: "Reflections" },
    { id: "quiz", label: "Practice quiz" },
  ], [lesson]);
  const unit = getUnit(lesson.unit ?? 1);

  useEffect(() => {
    let frame = 0;
    function measure() {
      let current = items[0]?.id ?? "outcomes";
      for (const item of items) {
        const element = document.getElementById(item.id);
        if (element && element.getBoundingClientRect().top <= 180) current = item.id;
      }
      setActive(current);
      frame = 0;
    }
    function onScroll() {
      if (!frame) frame = requestAnimationFrame(measure);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(frame); };
  }, [items]);

  return (
    <aside className={cn("lesson-sidebar", compact && "is-compact", className)}>
      <nav aria-label="Lesson contents" className="lesson-toc">
        <h2>In this lesson</h2>
        {items.map((item) => <a key={item.id} href={`#${item.id}`} className={cn(active === item.id && "is-current")} aria-current={active === item.id ? "location" : undefined} onClick={() => setActive(item.id)}><span className="toc-indicator" />{item.label}</a>)}
      </nav>
      {!compact && <>
        <nav className="unit-lesson-list" aria-label={`Unit ${unit.number} lessons`}>
          <h2>More in Unit {unit.number}</h2>
          {getLessonsByUnit(lesson.unit ?? 1).map((item) => <Link key={item.slug} href={`/lesson?slug=${item.slug}`} aria-current={item.slug === lesson.slug ? "page" : undefined} className={cn(item.slug === lesson.slug && "is-current")}><span>{String(item.number).padStart(2, "0")}</span>{item.title}{item.slug === lesson.slug && <ChevronRight size={12} />}</Link>)}
        </nav>
        <div className="lesson-sidebar-note"><Highlighter size={17} /><p>Select a passage to highlight it. Tap a key term to look a little closer.</p></div>
        <Link href="/reflections" className="sidebar-reflections"><Feather size={15} />Your reflections<ArrowUpRight size={13} /></Link>
        <p className="sidebar-lesson-status">{completed ? <Check size={13} /> : <BookOpen size={13} />}{completed ? "Lesson completed" : "Take it at your own pace"}</p>
      </>}
    </aside>
  );
}
