"use client";

import { useState } from "react";
import { chapters } from "@/lib/ethics-content";
import { Button } from "@/components/ui/button";

interface ChapterNavProps {
  currentChapterId: number;
  mode: "study" | "quiz" | "notes";
  showCaseStudy: boolean;
  showActivity: boolean;
  onChapterChange: (id: number) => void;
  onModeChange: (mode: "study" | "quiz" | "notes") => void;
  onSelectCaseStudy: () => void;
  onSelectActivity: () => void;
  sidebarOpen: boolean;
  onSidebarToggle: () => void;
}

const modeIcons: Record<string, string> = {
  study: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  quiz: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
  notes: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
};

export default function ChapterNav({
  currentChapterId,
  mode,
  showCaseStudy,
  showActivity,
  onChapterChange,
  onModeChange,
  onSelectCaseStudy,
  onSelectActivity,
  sidebarOpen,
  onSidebarToggle,
}: ChapterNavProps) {
  const [expandedChapter, setExpandedChapter] = useState<number | null>(0);
  const currentChapter = chapters.find((c) => c.id === currentChapterId);

  const toggleExpand = (id: number) => {
    setExpandedChapter((prev) => (prev === id ? null : id));
  };

  const navContent = (
    <nav className="flex flex-col h-full" aria-label="Chapter navigation">
      <div className="mb-6 pb-4 border-b border-paper-border">
        <h2 className="font-display text-xl text-antique-gold tracking-wide">
          Ethics
        </h2>
        <p className="font-serif text-xs text-ink-brown/50 mt-1 italic">
          A Collegiate Study
        </p>
      </div>

      <div className="grid grid-cols-3 gap-1 mb-6" role="tablist">
        {(["study", "quiz", "notes"] as const).map((m) => (
          <button
            key={m}
            role="tab"
            aria-selected={mode === m}
            onClick={() => onModeChange(m)}
            className={`flex flex-col items-center gap-1 py-2 px-1 rounded-sm text-[11px] font-sans uppercase tracking-wider transition-colors ${
              mode === m
                ? "bg-antique-gold/15 text-antique-gold"
                : "text-ink-brown/40 hover:text-ink-brown/70 hover:bg-paper-border/30"
            }`}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
              aria-hidden="true"
            >
              <path d={modeIcons[m]} />
            </svg>
            <span className="hidden sm:inline">{m}</span>
          </button>
        ))}
      </div>

      <div className="mb-3 flex items-center gap-2">
        <span className="h-px flex-1 bg-paper-border" />
        <span className="font-sans text-[10px] text-ink-brown/40 uppercase tracking-widest">
          Chapters
        </span>
        <span className="h-px flex-1 bg-paper-border" />
      </div>

      <ul className="space-y-0.5 flex-1 overflow-y-auto min-h-0" role="list">
        {chapters.map((chapter) => (
          <li key={chapter.id}>
            {/* Main chapter button */}
            <div className="flex items-stretch gap-0">
              <button
                onClick={() => {
                  onChapterChange(chapter.id);
                  if (chapter.id === 0) toggleExpand(chapter.id);
                }}
                role="tab"
                aria-selected={chapter.id === currentChapterId}
                className={`flex-1 text-left px-3 py-2.5 rounded-sm transition-colors ${
                  chapter.id === currentChapterId
                    ? "bg-antique-gold/12 text-ink-brown border-l-2 border-antique-gold"
                    : "text-ink-brown/60 hover:bg-paper-border/30 hover:text-ink-brown border-l-2 border-transparent"
                }`}
              >
                <p className="font-sans text-[11px] text-ink-brown/40 tracking-wide">
                  {chapter.philosopher} &middot; {chapter.dates}
                </p>
                <p className="font-serif text-sm leading-snug mt-0.5">
                  {chapter.title}
                </p>
              </button>
              {/* Expand chevron for chapter 0 */}
              {chapter.id === 0 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleExpand(0);
                    onChapterChange(0);
                  }}
                  className={`px-2 flex items-center justify-center transition-colors rounded-sm ${
                    expandedChapter === 0
                      ? "text-antique-gold"
                      : "text-ink-brown/30 hover:text-ink-brown/60"
                  }`}
                  aria-label={expandedChapter === 0 ? "Collapse sub-items" : "Expand sub-items"}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className={`w-3.5 h-3.5 transition-transform ${
                      expandedChapter === 0 ? "rotate-180" : ""
                    }`}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              )}
            </div>

            {/* Expandable sub-items for chapter 0 */}
            {chapter.id === 0 && (
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  expandedChapter === 0 ? "max-h-60 opacity-100 mt-0.5" : "max-h-0 opacity-0"
                }`}
              >
                <div className="pl-5 border-l-2 border-antique-gold/20 ml-3 space-y-0.5">
                  <button
                    onClick={() => {
                      onChapterChange(0);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-sm transition-colors text-sm ${
                      currentChapterId === 0 && !showCaseStudy && !showActivity
                        ? "bg-antique-gold/8 text-antique-gold border-l border-antique-gold"
                        : "text-ink-brown/50 hover:text-ink-brown hover:bg-paper-border/20 border-l border-transparent"
                    }`}
                  >
                    <p className="font-sans text-[10px] text-ink-brown/30 uppercase tracking-wider">
                      Chapter Content
                    </p>
                    <p className="font-serif text-xs mt-0.5">
                      What Is Ethics? &amp; Major Approaches
                    </p>
                  </button>
                  <button
                    onClick={() => {
                      onSelectCaseStudy();
                    }}
                    className={`w-full text-left px-3 py-2 rounded-sm transition-colors text-sm ${
                      showCaseStudy
                        ? "bg-dusty-rose/12 text-dusty-rose border-l border-dusty-rose"
                        : "text-ink-brown/50 hover:text-ink-brown hover:bg-paper-border/20 border-l border-transparent"
                    }`}
                  >
                    <p className="font-sans text-[10px] text-dusty-rose/60 uppercase tracking-wider">
                      Case Study
                    </p>
                    <p className="font-serif text-xs mt-0.5 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-dusty-rose inline-block" />
                      Cris Anthony Mendez
                    </p>
                  </button>
                  <button
                    onClick={() => {
                      onSelectActivity();
                    }}
                    className={`w-full text-left px-3 py-2 rounded-sm transition-colors text-sm ${
                      showActivity
                        ? "bg-antique-gold/12 text-antique-gold border-l border-antique-gold"
                        : "text-ink-brown/50 hover:text-ink-brown hover:bg-paper-border/20 border-l border-transparent"
                    }`}
                  >
                    <p className="font-sans text-[10px] text-antique-gold/60 uppercase tracking-wider">
                      Activity
                    </p>
                    <p className="font-serif text-xs mt-0.5 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-antique-gold inline-block" />
                      Types of Value Judgment
                    </p>
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>

      <div className="mt-4 pt-4 border-t border-paper-border text-center">
        <div className="flex items-center justify-center gap-1.5 text-antique-gold">
          <span className="font-display text-xs">&mdash;</span>
          <span className="font-sans text-[9px] text-ink-brown/25 uppercase tracking-[0.25em]">
            Studia Humanitatis
          </span>
          <span className="font-display text-xs">&mdash;</span>
        </div>
      </div>
    </nav>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside
        className="hidden lg:flex flex-col w-72 border-r border-paper-border bg-paper-light h-full overflow-hidden flex-shrink-0"
        aria-label="Sidebar"
      >
        {navContent}
      </aside>

      {/* Mobile header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-3 py-2.5 bg-paper-light border-b border-paper-border">
        <button
          onClick={onSidebarToggle}
          className="h-10 w-10 flex items-center justify-center rounded-sm text-ink-brown hover:bg-paper-border/30 transition-colors"
          aria-label={sidebarOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={sidebarOpen}
        >
          {sidebarOpen ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        <div className="flex items-center gap-2 min-w-0 flex-1 justify-center px-2">
          <span className="font-display text-sm text-antique-gold truncate">
            {currentChapter?.philosopher ?? "Ethics"}
          </span>
          <span className="hidden sm:inline font-sans text-[10px] text-ink-brown/35">
            Ch.{currentChapterId}
          </span>
        </div>

        <div className="flex gap-0.5" role="tablist">
          {(["study", "quiz", "notes"] as const).map((m) => (
            <button
              key={m}
              role="tab"
              aria-selected={mode === m}
              onClick={() => onModeChange(m)}
              className={`h-10 w-10 flex items-center justify-center rounded-sm transition-colors ${
                mode === m
                  ? "text-antique-gold bg-antique-gold/10"
                  : "text-ink-brown/40 hover:text-ink-brown/70"
              }`}
              aria-label={m.charAt(0).toUpperCase() + m.slice(1)}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
                aria-hidden="true"
              >
                <path d={modeIcons[m]} />
              </svg>
            </button>
          ))}
        </div>
      </header>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-30">
          <div
            className="absolute inset-0 bg-ink-brown/20"
            onClick={onSidebarToggle}
            aria-hidden="true"
          />
          <aside
            className="absolute top-14 left-0 bottom-0 w-72 bg-paper-light border-r border-paper-border p-5 overflow-y-auto shadow-lg"
            aria-label="Mobile navigation"
          >
            {navContent}
          </aside>
        </div>
      )}
    </>
  );
}
