"use client";

import { useState, useCallback, useEffect, useRef, useMemo } from "react";
import { Chapter, Annotation, HighlightColor, HIGHLIGHT_COLORS } from "@/types";
import { saveAnnotation, deleteAnnotation, generateId } from "@/lib/annotations";

interface StudyReaderProps {
  chapter: Chapter;
  annotations: Annotation[];
  onAnnotationChange: () => void;
}

const BORDER_CLASS: Record<HighlightColor, string> = {
  gold: "border-highlight-gold",
  rose: "border-highlight-rose",
  sage: "border-highlight-sage",
  lavender: "border-highlight-lavender",
  amber: "border-highlight-amber",
};

function paragraphId(sIdx: number, pIdx: number): string {
  return `${sIdx}-${pIdx}`;
}

export default function StudyReader({
  chapter,
  annotations,
  onAnnotationChange,
}: StudyReaderProps) {
  const [tooltip, setTooltip] = useState<{
    x: number;
    y: number;
    text: string;
    paragraphId: string;
    startOffset: number;
    endOffset: number;
  } | null>(null);

  const tooltipRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const chapterAnnotations = useMemo(
    () => annotations.filter((a) => a.chapterId === chapter.id),
    [annotations, chapter.id]
  );

  const handleMouseUp = useCallback(() => {
    const selection = window.getSelection();
    if (!selection || selection.isCollapsed || !selection.toString().trim()) {
      return;
    }

    const text = selection.toString().trim();
    const range = selection.getRangeAt(0);
    const rect = range.getBoundingClientRect();

    // Find which paragraph the selection is in
    const node = range.startContainer;
    const paragraphEl = node.nodeType === Node.TEXT_NODE
      ? node.parentElement?.closest("[data-paragraph-id]")
      : (node as Element).closest("[data-paragraph-id]");

    if (!paragraphEl) return;

    const pid = paragraphEl.getAttribute("data-paragraph-id") ?? "";
    const fullText = paragraphEl.getAttribute("data-full-text") ?? "";
    const startOffset = fullText.indexOf(text);

    if (startOffset === -1) return;

    setTooltip({
      x: rect.left + rect.width / 2,
      y: rect.top - 8,
      text,
      paragraphId: pid,
      startOffset,
      endOffset: startOffset + text.length,
    });
  }, []);

  const applyHighlight = useCallback(
    (color: HighlightColor) => {
      if (!tooltip) return;
      saveAnnotation({
        id: generateId(),
        chapterId: chapter.id,
        paragraphId: tooltip.paragraphId,
        text: tooltip.text,
        color,
        timestamp: Date.now(),
        startOffset: tooltip.startOffset,
        endOffset: tooltip.endOffset,
      });
      onAnnotationChange();
      setTooltip(null);
      window.getSelection()?.removeAllRanges();
    },
    [tooltip, chapter.id, onAnnotationChange]
  );

  const removeHighlight = useCallback(
    (id: string) => {
      deleteAnnotation(id);
      onAnnotationChange();
    },
    [onAnnotationChange]
  );

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (tooltipRef.current && !tooltipRef.current.contains(e.target as Node)) {
        setTooltip(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const renderParagraph = (sIdx: number, pIdx: number, text: string) => {
    const pid = paragraphId(sIdx, pIdx);
    const annotationsForPara = chapterAnnotations
      .filter((a) => a.paragraphId === pid)
      .sort((a, b) => a.startOffset - b.startOffset);

    if (annotationsForPara.length === 0) {
      return (
        <p
          key={pid}
          data-paragraph-id={pid}
          data-full-text={text}
          className="mb-4 leading-[1.85] text-[15px]"
        >
          {text}
        </p>
      );
    }

    const segments: { text: string; annotation?: Annotation }[] = [];
    let lastEnd = 0;

    for (const ann of annotationsForPara) {
      if (ann.startOffset > lastEnd) {
        segments.push({ text: text.slice(lastEnd, ann.startOffset) });
      }
      segments.push({
        text: text.slice(ann.startOffset, ann.endOffset),
        annotation: ann,
      });
      lastEnd = ann.endOffset;
    }

    if (lastEnd < text.length) {
      segments.push({ text: text.slice(lastEnd) });
    }

    return (
      <p
        key={pid}
        data-paragraph-id={pid}
        data-full-text={text}
        className="mb-4 leading-[1.85] text-[15px]"
      >
        {segments.map((seg, i) =>
          seg.annotation ? (
            <span
              key={i}
              className={`${HIGHLIGHT_COLORS[seg.annotation.color].bg} rounded-sm px-0.5 border-b ${BORDER_CLASS[seg.annotation.color]} relative group`}
            >
              {seg.text}
              <button
                onClick={() => removeHighlight(seg.annotation!.id)}
                className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-dusty-rose text-parchment text-[10px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                aria-label={`Remove highlight: ${seg.text}`}
              >
                &times;
              </button>
            </span>
          ) : (
            <span key={i}>{seg.text}</span>
          )
        )}
      </p>
    );
  };

  return (
    <div className="flex flex-col flex-1 min-h-0">
      <div
        ref={contentRef}
        className="flex-1 overflow-y-auto px-4 sm:px-8 lg:px-12 py-6 sm:py-10"
        onMouseUp={handleMouseUp}
      >
        <div className="max-w-3xl mx-auto">
          {/* Ornamental header */}
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px flex-1 bg-paper-border" />
            <span className="font-sans text-[10px] text-antique-gold uppercase tracking-[0.25em]">
              Chapter {chapter.id + 1}
            </span>
            <span className="h-px flex-1 bg-paper-border" />
          </div>

          {/* Philosopher header */}
          <div className="mb-6">
            <p className="font-sans text-xs text-ink-brown/40 tracking-wide">
              {chapter.philosopher} &middot; {chapter.dates}
            </p>
            <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl text-ink-brown mt-1 leading-tight">
              {chapter.title}
            </h1>
            <p className="font-serif text-sm text-ink-brown/60 mt-3 italic leading-relaxed max-w-2xl">
              {chapter.summary}
            </p>
          </div>

          {/* Sections */}
          {chapter.sections.map((section, sIdx) => (
            <div key={sIdx} className="mb-10">
              <h2 className="font-display text-lg sm:text-xl text-ink-brown mb-4 leading-snug">
                {section.heading}
              </h2>
              {section.paragraphs.map((p, pIdx) =>
                renderParagraph(sIdx, pIdx, p)
              )}
            </div>
          ))}

          {/* End ornament */}
          <div className="flex items-center justify-center gap-2 mt-12 text-antique-gold">
            <span className="font-display text-sm">&mdash;</span>
            <span className="font-sans text-[9px] text-ink-brown/25 uppercase tracking-[0.3em]">
              Finis
            </span>
            <span className="font-display text-sm">&mdash;</span>
          </div>
        </div>
      </div>

      {/* Highlighter tooltip */}
      {tooltip && (
        <div
          ref={tooltipRef}
          className="fixed z-50 -translate-x-1/2 -translate-y-full"
          style={{ left: tooltip.x, top: tooltip.y }}
        >
          <div className="bg-paper-light border border-paper-border rounded-sm shadow-lg px-3 py-2 flex items-center gap-1.5">
            {(Object.entries(HIGHLIGHT_COLORS) as [HighlightColor, typeof HIGHLIGHT_COLORS[HighlightColor]][]).map(
              ([key, val]) => (
                <button
                  key={key}
                  onClick={() => applyHighlight(key)}
                  className="w-6 h-6 rounded-sm border border-ink-brown/15 hover:scale-110 transition-transform cursor-pointer"
                  style={{ backgroundColor: val.hex }}
                  title={val.label}
                  aria-label={`Highlight with ${val.label}`}
                />
              )
            )}
          </div>
        </div>
      )}

      {/* Annotations panel */}
      {chapterAnnotations.length > 0 && (
        <div className="border-t border-paper-border bg-paper-light/50">
          <div className="max-w-3xl mx-auto px-4 sm:px-8 lg:px-12 py-4">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-px flex-1 bg-paper-border/50" />
              <span className="font-sans text-[10px] text-ink-brown/40 uppercase tracking-widest">
                Annotations ({chapterAnnotations.length})
              </span>
              <span className="h-px flex-1 bg-paper-border/50" />
            </div>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {chapterAnnotations.map((ann) => (
                <div
                  key={ann.id}
                  className="flex items-start gap-3 p-2 rounded-sm text-sm group"
                >
                  <span
                    className="mt-0.5 w-3 h-3 rounded-sm flex-shrink-0 border border-ink-brown/10"
                    style={{ backgroundColor: HIGHLIGHT_COLORS[ann.color].hex }}
                  />
                  <p className="text-ink-brown/60 leading-relaxed text-[13px] italic flex-1">
                    &ldquo;{ann.text}&rdquo;
                  </p>
                  <button
                    onClick={() => removeHighlight(ann.id)}
                    className="text-ink-brown/30 hover:text-dusty-rose transition-colors text-xs flex-shrink-0 cursor-pointer"
                    aria-label={`Delete annotation: ${ann.text}`}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
