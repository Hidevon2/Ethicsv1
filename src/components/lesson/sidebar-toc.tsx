import type { Lesson } from "@/lib/types";
import { cn } from "@/lib/utils";

export function SidebarToc({
  lesson,
  className,
}: {
  lesson: Lesson;
  className?: string;
}) {
  const items: { href: string; label: string }[] = [
    { href: "#outcomes", label: "Learning outcomes" },
    ...lesson.think.map((section) => ({
      href: `#${section.id}`,
      label: section.heading,
    })),
    { href: "#glossary", label: "Key terms" },
    { href: "#reflections", label: "Reflections" },
    { href: "#quiz", label: "Let's Quiz" },
  ];

  return (
    <nav aria-label="Lesson contents" className={cn("space-y-1", className)}>
      <p className="mb-2 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
        Lesson {lesson.number} contents
      </p>
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="block rounded-[var(--radius)] border-l border-transparent px-2 py-1.5 font-sans text-sm leading-snug text-muted transition-colors hover:border-primary/40 hover:bg-panel-muted hover:text-foreground"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}