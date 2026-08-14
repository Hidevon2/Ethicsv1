"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { SearchIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

const UNIT_TABS = [
  { href: "/", label: "Unit I", activeOn: (pathname: string) => !pathname.startsWith("/unit/2") },
  { href: "/unit/2", label: "Unit II", activeOn: (pathname: string) => pathname.startsWith("/unit/2") },
];

const NAV_ITEMS = [
  { href: "/", label: "Lessons", activeOn: (pathname: string) => pathname === "/" || pathname.startsWith("/lesson") || pathname.startsWith("/unit/") },
  { href: "/sources", label: "Sources", activeOn: (pathname: string) => pathname.startsWith("/sources") },
  { href: "/reflections", label: "Reflections", activeOn: (pathname: string) => pathname.startsWith("/reflections") },
];

export function AppHeader() {
  const pathname = usePathname();

  function openSearch() {
    window.dispatchEvent(new CustomEvent("opencode:search"));
  }

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-void/95 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-6xl items-center gap-4 px-4 sm:px-6">
        <Link
          href="/"
          className="flex shrink-0 items-baseline gap-2"
          aria-label="Back to the Ethics cover"
        >
          <span className="font-serif text-lg font-bold tracking-tight text-foreground">
            Ethics
          </span>
          <span className="hidden font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-muted sm:inline">
            A Collegiate Study
          </span>
        </Link>

        <nav
          className="ml-2 hidden items-center gap-4 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] lg:flex"
          aria-label="Units"
        >
          {UNIT_TABS.map((tab) => {
            const active = tab.activeOn(pathname);
            return (
              <Link
                key={tab.href}
                href={tab.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative py-1 transition-colors",
                  active ? "text-foreground" : "text-muted hover:text-foreground",
                )}
              >
                {tab.label}
                {active && (
                  <motion.span
                    layoutId="unit-underline"
                    className="absolute inset-x-0 -bottom-0.5 h-[2px] origin-left rounded-full bg-primary"
                    transition={{ duration: 0.15, ease: "easeOut" }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <nav className="ml-auto flex items-center gap-4 font-mono text-[11px] font-semibold uppercase tracking-[0.12em]" aria-label="Primary">
          {NAV_ITEMS.map((item) => {
            const active = item.activeOn(pathname);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative py-1 transition-colors",
                  active ? "text-primary" : "text-muted hover:text-foreground",
                )}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-0 -bottom-0.5 h-[2px] origin-left rounded-full bg-primary"
                    transition={{ duration: 0.15, ease: "easeOut" }}
                  />
                )}
              </Link>
            );
          })}

          <button
            type="button"
            onClick={openSearch}
            className="flex h-8 items-center gap-2 rounded-md border border-border bg-panel px-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-muted transition-colors hover:border-primary/50 hover:text-foreground"
            aria-label="Open search"
          >
            <SearchIcon className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Search</span>
            <kbd className="hidden rounded-sm border border-border bg-void px-1 text-[10px] text-muted sm:inline">
              /
            </kbd>
          </button>
        </nav>
      </div>
    </header>
  );
}