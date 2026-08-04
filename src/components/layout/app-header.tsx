"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { SearchIcon } from "@/components/ui/icons";
import { unit } from "@/lib/content";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { href: "/", label: "Lessons" },
  { href: "/sources", label: "Sources" },
  { href: "/reflections", label: "Reflections" },
];

export function AppHeader() {
  const pathname = usePathname();

  function openSearch() {
    window.dispatchEvent(new CustomEvent("opencode:search"));
  }

  return (
    <header className="sticky top-0 z-40 border-b-2 border-foreground bg-background">
      <div className="mx-auto flex h-14 max-w-6xl items-center gap-3 px-4 sm:px-6">
        <Link
          href="/"
          className="flex shrink-0 items-baseline gap-2 font-sans"
          aria-label="Back to the issue cover"
        >
          <span className="text-lg font-bold uppercase tracking-tight text-primary">
            Ethics
          </span>
          <span className="hidden text-[11px] font-semibold uppercase tracking-[0.18em] text-muted sm:inline">
            {unit.number} · {unit.title}
          </span>
        </Link>

        <nav className="ml-auto flex items-center gap-1 font-sans" aria-label="Primary">
          {NAV_ITEMS.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "hidden rounded-[var(--radius)] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] transition-colors sm:block",
                  active
                    ? "bg-primary text-primary-contrast"
                    : "text-muted hover:bg-panel-muted hover:text-foreground",
                )}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}

          <button
            type="button"
            onClick={openSearch}
            className="ml-1 flex h-9 items-center gap-2 rounded-[var(--radius)] border-2 border-foreground bg-panel px-3 font-sans text-xs font-semibold uppercase tracking-[0.08em] text-muted transition-colors hover:bg-panel-muted hover:text-foreground"
            aria-label="Open search"
          >
            <SearchIcon className="h-4 w-4" />
            <span className="hidden sm:inline">Search</span>
            <kbd className="hidden rounded-sm border border-border bg-panel-muted px-1 text-[10px] text-muted sm:inline">
              /
            </kbd>
          </button>

          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
