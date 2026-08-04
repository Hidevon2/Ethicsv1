"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import type {
  Annotation,
  HighlightColor,
  Lesson,
  LessonSlug,
} from "@/lib/types";
import { buildRenderNodes, lookupTerm, paragraphPlainText } from "@/lib/prose";
import { KeyTerm } from "@/components/lesson/key-term";
import { HighlightTooltip } from "@/components/lesson/highlight-tooltip";
import { XIcon } from "@/components/ui/icons";

interface HighlightTooltipState {
  x: number;
  y: number;
  paragraphId: string;
  text: string;
  startOffset: number;
  endOffset: number;
}

const HIGHLIGHT_BG: Record<HighlightColor, string> = {
  red: "#a62a1e",
  teal: "#0f6b5c",
  amber: "#a35f00",
};

export function Prose({
  lesson,
  annotations,
  onAddAnnotation,
  onRemoveAnnotation,
}: {
  lesson: Lesson;
  annotations: Annotation[];
  onAddAnnotation: (input: {
    lessonSlug: LessonSlug;
    paragraphId: string;
    text: string;
    color: HighlightColor;
    startOffset: number;
    endOffset: number;
  }) => void;
  onRemoveAnnotation: (id: string) => void;
}) {
  const [tooltip, setTooltip] = useState<HighlightTooltipState | null>(null);

  const annotationsByParagraph = useMemo(() => {
    const map = new Map<string, Annotation[]>();
    for (const ann of annotations) {
      const list = map.get(ann.paragraphId) ?? [];
      list.push(ann);
      map.set(ann.paragraphId, list);
    }
    return map;
  }, [annotations]);

  useEffect(() => {
    if (!tooltip) return;
    function onMouseDown(e: MouseEvent) {
      if (!(e.target as HTMLElement).closest("[data-highlight-tooltip]")) {
        setTooltip(null);
      }
    }
    document.addEventListener("mousedown", onMouseDown);
    return () => document.removeEventListener("mousedown", onMouseDown);
  }, [tooltip]);

  const handleMouseUp = useCallback(() => {
    const selection = window.getSelection();
    if (!selection || selection.isCollapsed || !selection.toString().trim()) {
      return;
    }
    const text = selection.toString().trim();
    const range = selection.getRangeAt(0);
    const rect = range.getBoundingClientRect();
    const node = range.startContainer;
    const paragraphEl =
      node.nodeType === Node.TEXT_NODE
        ? node.parentElement?.closest("[data-paragraph-id]")
        : (node as Element).closest("[data-paragraph-id]");
    if (!paragraphEl) return;

    const paragraphId = paragraphEl.getAttribute("data-paragraph-id") ?? "";
    const fullText = paragraphEl.getAttribute("data-full-text") ?? "";
    const startOffset = fullText.indexOf(text);
    if (startOffset === -1) return;

    setTooltip({
      x: rect.left + rect.width / 2,
      y: rect.top - 10,
      paragraphId,
      text,
      startOffset,
      endOffset: startOffset + text.length,
    });
    selection.removeAllRanges();
  }, []);

  const applyHighlight = useCallback(
    (color: HighlightColor) => {
      if (!tooltip) return;
      void onAddAnnotation({
        lessonSlug: lesson.slug,
        paragraphId: tooltip.paragraphId,
        text: tooltip.text,
        color,
        startOffset: tooltip.startOffset,
        endOffset: tooltip.endOffset,
      });
      setTooltip(null);
    },
    [tooltip, lesson.slug, onAddAnnotation],
  );

  return (
    <div onMouseUp={handleMouseUp} className="relative">
      {lesson.think.map((section) => (
        <section key={section.id} id={section.id} aria-labelledby={`heading-${section.id}`}>
          <h2
            id={`heading-${section.id}`}
            className="mb-5 mt-12 text-balance font-serif text-2xl font-bold leading-snug text-foreground"
          >
            {section.heading}
          </h2>
          {section.blocks.map((block, blockIndex) => {
            if (block.type === "subheading") {
              return (
                <h3
                  key={blockIndex}
                  className="mb-3 mt-8 text-balance font-serif text-lg font-semibold italic text-foreground"
                >
                  {block.text}
                </h3>
              );
            }
            if (block.type === "quote") {
              return (
                <blockquote
                  key={blockIndex}
                  className="mb-8 mt-8 rounded-[var(--radius)] border-2 border-foreground bg-panel px-5 py-4 shadow-[4px_4px_0_var(--border)]"
                >
                  <p className="font-serif text-lg italic leading-relaxed text-foreground">
                    &ldquo;{block.text}&rdquo;
                  </p>
                  {block.source && (
                    <cite className="mt-2 block font-sans text-[11px] font-semibold uppercase tracking-[0.14em] not-italic text-muted">
                      — {block.source}
                    </cite>
                  )}
                </blockquote>
              );
            }

            const paragraphId = `${lesson.slug}:${section.id}:${blockIndex}`;
            const plain = paragraphPlainText(block.text);
            const nodes = buildRenderNodes(
              block.text,
              annotationsByParagraph.get(paragraphId) ?? [],
            );

            return (
              <p
                key={blockIndex}
                data-paragraph-id={paragraphId}
                data-full-text={plain}
                className="mb-6 max-w-[68ch] text-pretty font-serif text-[17px] leading-relaxed text-foreground"
              >
                {nodes.map((node, index) => {
                  if (node.kind === "term") {
                    const term = lookupTerm(lesson, node.slug);
                    return term ? (
                      <KeyTerm key={index} term={term} />
                    ) : (
                      <span key={index}>{node.slug}</span>
                    );
                  }
                  if (node.annotation) {
                    const color = HIGHLIGHT_BG[node.annotation.color];
                    return (
                      <span
                        key={index}
                        className="relative group"
                        style={{ backgroundColor: `${color}26`, boxShadow: `inset 0 -2px 0 ${color}` }}
                      >
                        {node.text}
                        <button
                          type="button"
                          onClick={() => onRemoveAnnotation(node.annotation!.id)}
                          className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full border-2 border-foreground bg-background text-foreground opacity-0 transition-opacity group-hover:opacity-100 focus:opacity-100"
                          aria-label={`Remove highlight: ${node.text}`}
                        >
                          <XIcon className="h-2.5 w-2.5" />
                        </button>
                      </span>
                    );
                  }
                  return <span key={index}>{node.text}</span>;
                })}
              </p>
            );
          })}
        </section>
      ))}

      {tooltip && (
        <div data-highlight-tooltip>
          <HighlightTooltip
            x={tooltip.x}
            y={tooltip.y}
            onPick={applyHighlight}
            onClose={() => setTooltip(null)}
          />
        </div>
      )}
    </div>
  );
}
