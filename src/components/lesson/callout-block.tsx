"use client";

import type { ReactNode } from "react";
import { Lightbulb, Eye, ListChecks, Feather, NotebookPen } from "lucide-react";
import { cn } from "@/lib/utils";

export type CalloutVariant = "think" | "experience" | "assess" | "challenge" | "note";
const icons = { think: Lightbulb, experience: Eye, assess: ListChecks, challenge: Feather, note: NotebookPen };

export function CalloutBlock({ variant, title, children, className }: { variant: CalloutVariant; title: string; children: ReactNode; className?: string }) {
  const Icon = icons[variant];
  return <section className={cn("lesson-callout", `lesson-callout-${variant}`, className)}>
    <header><Icon size={19} strokeWidth={1.5} /><h3>{title}</h3></header>
    <div className="lesson-callout-body">{children}</div>
  </section>;
}
