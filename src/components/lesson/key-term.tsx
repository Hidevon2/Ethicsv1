"use client";

import * as Popover from "@radix-ui/react-popover";
import { BookOpen, X } from "lucide-react";
import type { KeyTerm as KeyTermType } from "@/lib/types";

export function KeyTerm({ term, label }: { term: KeyTermType; label?: string }) {
  return <Popover.Root>
    <Popover.Trigger asChild><button type="button" className="inline-key-term" aria-label={`Define ${term.term}`}>{label ?? term.term}</button></Popover.Trigger>
    <Popover.Portal><Popover.Content side="bottom" align="start" sideOffset={9} collisionPadding={18} className="term-definition" aria-label={`Definition of ${term.term}`}>
      <div className="term-definition-heading"><BookOpen size={15} /><strong>{term.term}</strong><Popover.Close className="term-definition-close" aria-label="Close definition"><X size={15} /></Popover.Close></div>
      <p>{term.definition}</p><span>Key term · Ethics</span>
    </Popover.Content></Popover.Portal>
  </Popover.Root>;
}
