"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, Feather, Scale, Search } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  { href: "/", label: "The course", icon: BookOpen, active: (path: string) => path === "/" || path.startsWith("/lesson") || path.startsWith("/unit/") },
  { href: "/sources", label: "Sources", icon: Scale, active: (path: string) => path.startsWith("/sources") },
  { href: "/reflections", label: "Reflections", icon: Feather, active: (path: string) => path.startsWith("/reflections") },
];

export function AppHeader() {
  const pathname = usePathname();
  return (
    <header className="site-header">
      <a href="#main-content" className="skip-link">Skip to content</a>
      <div className="site-header-inner">
        <Link href="/" className="site-brand" aria-label="Ethics home"><Scale size={25} strokeWidth={1.3} /><span>Ethics<span className="brand-description">A collegiate study</span></span></Link>
        <nav className="site-nav" aria-label="Primary navigation">{items.map((item) => <Link key={item.href} href={item.href} aria-current={item.active(pathname) ? "page" : undefined} className={cn("site-nav-link", item.active(pathname) && "is-active")}><item.icon size={15} /><span>{item.label}</span></Link>)}</nav>
        <button type="button" className="header-search" onClick={() => window.dispatchEvent(new CustomEvent("opencode:search"))} aria-label="Search lessons and key terms"><Search size={17} /><span>Search the course</span><kbd>/</kbd></button>
      </div>
    </header>
  );
}
