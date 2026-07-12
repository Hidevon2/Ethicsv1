"use client";

import { useState, useMemo, useCallback } from "react";
import { Annotation, HighlightColor, HIGHLIGHT_COLORS } from "@/types";
import { chapters } from "@/lib/ethics-content";
import { deleteAnnotation, clearAllAnnotations } from "@/lib/annotations";
import { Button } from "@/components/ui/button";

interface AnnotationsViewProps {
  annotations: Annotation[];
  onAnnotationChange: () => void;
}

const colorOptions = Object.entries(HIGHLIGHT_COLORS) as [HighlightColor, typeof HIGHLIGHT_COLORS[HighlightColor]][];

export default function AnnotationsView({
  annotations,
  onAnnotationChange,
}: AnnotationsViewProps) {
  const [filterColor, setFilterColor] = useState<HighlightColor | "all">("all");
  const [sortBy, setSortBy] = useState<"chapter" | "newest">("newest");

  const filteredAndSorted = useMemo(() => {
    let result = filterColor === "all"
      ? [...annotations]
      : annotations.filter((a) => a.color === filterColor);

    if (sortBy === "newest") {
      result.sort((a, b) => b.timestamp - a.timestamp);
    } else {
      result.sort((a, b) => a.chapterId - b.chapterId || b.timestamp - a.timestamp);
    }
    return result;
  }, [annotations, filterColor, sortBy]);

  const handleDelete = useCallback(
    (id: string) => {
      deleteAnnotation(id);
      onAnnotationChange();
    },
    [onAnnotationChange]
  );

  const handleClearAll = useCallback(() => {
    clearAllAnnotations();
    onAnnotationChange();
  }, [onAnnotationChange]);

  const getChapterInfo = (chapterId: number) => {
    const ch = chapters.find((c) => c.id === chapterId);
    return ch
      ? { title: ch.title, philosopher: ch.philosopher }
      : { title: "Unknown", philosopher: "" };
  };

  return (
    <div className="flex-1 overflow-y-auto px-4 sm:px-8 lg:px-12 py-6 sm:py-10">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-5">
          <span className="h-px flex-1 bg-paper-border" />
          <span className="font-sans text-[10px] text-antique-gold uppercase tracking-[0.25em]">
            Notes &amp; Annotations
          </span>
          <span className="h-px flex-1 bg-paper-border" />
        </div>

        <h1 className="font-display text-2xl sm:text-3xl text-ink-brown mb-1">
          All Annotations
        </h1>
        <p className="font-serif text-ink-brown/50 text-sm italic mb-6">
          Every highlight across all chapters
        </p>

        {annotations.length === 0 ? (
          <div className="bg-paper-light border border-paper-border rounded-sm p-8 text-center">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="w-12 h-12 mx-auto mb-3 text-ink-brown/20"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
            <p className="font-serif text-ink-brown/40 italic">
              No annotations yet. Select text in Study mode to highlight and save notes.
            </p>
          </div>
        ) : (
          <>
            {/* Filters and controls */}
            <div className="flex flex-wrap items-center gap-3 mb-6 p-3 bg-paper-light border border-paper-border rounded-sm">
              <div className="flex items-center gap-2">
                <span className="font-sans text-[10px] text-ink-brown/40 uppercase tracking-wider">Color</span>
                <div className="flex gap-1">
                  <button
                    onClick={() => setFilterColor("all")}
                    className={`px-2 py-1 rounded-sm text-[10px] font-sans uppercase tracking-wider transition-colors cursor-pointer ${
                      filterColor === "all"
                        ? "bg-antique-gold/15 text-antique-gold"
                        : "text-ink-brown/40 hover:text-ink-brown/70"
                    }`}
                  >
                    All
                  </button>
                  {colorOptions.map(([key, val]) => (
                    <button
                      key={key}
                      onClick={() => setFilterColor(key)}
                      className={`flex items-center gap-1 px-2 py-1 rounded-sm text-[10px] font-sans uppercase tracking-wider transition-colors cursor-pointer ${
                        filterColor === key
                          ? "bg-antique-gold/15 text-antique-gold"
                          : "text-ink-brown/40 hover:text-ink-brown/70"
                      }`}
                    >
                      <span
                        className="w-2.5 h-2.5 rounded-sm"
                        style={{ backgroundColor: val.hex }}
                      />
                      {val.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="w-px h-6 bg-paper-border hidden sm:block" />

              <div className="flex items-center gap-2">
                <span className="font-sans text-[10px] text-ink-brown/40 uppercase tracking-wider">Sort</span>
                <button
                  onClick={() => setSortBy("newest")}
                  className={`px-2 py-1 rounded-sm text-[10px] font-sans uppercase tracking-wider transition-colors cursor-pointer ${
                    sortBy === "newest"
                      ? "bg-antique-gold/15 text-antique-gold"
                      : "text-ink-brown/40 hover:text-ink-brown/70"
                  }`}
                >
                  Newest
                </button>
                <button
                  onClick={() => setSortBy("chapter")}
                  className={`px-2 py-1 rounded-sm text-[10px] font-sans uppercase tracking-wider transition-colors cursor-pointer ${
                    sortBy === "chapter"
                      ? "bg-antique-gold/15 text-antique-gold"
                      : "text-ink-brown/40 hover:text-ink-brown/70"
                  }`}
                >
                  Chapter
                </button>
              </div>

              <div className="ml-auto">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleClearAll}
                  className="text-xs"
                >
                  Clear All
                </Button>
              </div>
            </div>

            {/* Annotation count */}
            <p className="font-sans text-xs text-ink-brown/40 mb-4">
              {filteredAndSorted.length} of {annotations.length} annotation{annotations.length !== 1 ? "s" : ""}
            </p>

            {/* Annotation list */}
            <div className="space-y-3">
              {filteredAndSorted.map((ann) => {
                const info = getChapterInfo(ann.chapterId);
                const date = new Date(ann.timestamp);
                return (
                  <div
                    key={ann.id}
                    className="bg-paper-light border border-paper-border rounded-sm p-4 flex items-start gap-4 group"
                  >
                    <span
                      className="mt-0.5 w-4 h-4 rounded-sm flex-shrink-0 border border-ink-brown/10"
                      style={{ backgroundColor: HIGHLIGHT_COLORS[ann.color].hex }}
                      aria-label={`${HIGHLIGHT_COLORS[ann.color].label} highlight`}
                    />

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span className="font-display text-sm text-ink-brown">
                          {info.philosopher}
                        </span>
                        <span className="font-sans text-[10px] text-ink-brown/30">
                          Ch.{ann.chapterId + 1} &middot; {info.title}
                        </span>
                      </div>

                      <p className="font-serif text-sm text-ink-brown/70 italic leading-relaxed">
                        &ldquo;{ann.text}&rdquo;
                      </p>

                      <p className="font-sans text-[10px] text-ink-brown/30 mt-1">
                        {date.toLocaleDateString(undefined, {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                        {ann.color !== "gold" && (
                          <span className="ml-2">
                            &middot; {HIGHLIGHT_COLORS[ann.color].label}
                          </span>
                        )}
                      </p>
                    </div>

                    <button
                      onClick={() => handleDelete(ann.id)}
                      className="text-ink-brown/25 hover:text-dusty-rose transition-colors flex-shrink-0 opacity-0 group-hover:opacity-100 focus:opacity-100 cursor-pointer"
                      aria-label={`Delete annotation: ${ann.text}`}
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                );
              })}
            </div>
          </>
        )}

        <div className="flex items-center justify-center gap-2 mt-10 text-antique-gold">
          <span className="font-display text-sm">&mdash;</span>
          <span className="font-sans text-[9px] text-ink-brown/25 uppercase tracking-[0.3em]">
            {annotations.length} Annotation{annotations.length !== 1 ? "s" : ""}
          </span>
          <span className="font-display text-sm">&mdash;</span>
        </div>
      </div>
    </div>
  );
}
