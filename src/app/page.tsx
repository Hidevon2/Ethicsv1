"use client";

import { useState, useCallback, useEffect } from "react";
import ChapterNav from "@/components/ChapterNav";
import StudyReader from "@/components/StudyReader";
import QuizMode from "@/components/QuizMode";
import AnnotationsView from "@/components/AnnotationsView";
import CaseStudyContent from "@/components/CaseStudyContent";
import ActivityContent from "@/components/ActivityContent";
import { chapters } from "@/lib/ethics-content";
import { Annotation } from "@/types";
import { loadAnnotations } from "@/lib/annotations";

export default function Home() {
  const [currentChapterId, setCurrentChapterId] = useState(1);
  const [mode, setMode] = useState<"study" | "quiz" | "notes">("study");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [annotations, setAnnotations] = useState<Annotation[]>([]);
  const [showCaseStudy, setShowCaseStudy] = useState(false);
  const [showActivity, setShowActivity] = useState(false);

  useEffect(() => {
    setAnnotations(loadAnnotations());
  }, []);

  const refreshAnnotations = useCallback(() => {
    setAnnotations(loadAnnotations());
  }, []);

  const currentChapter =
    chapters.find((c) => c.id === currentChapterId) ?? chapters[0];

  const handleChapterChange = useCallback((id: number) => {
    setCurrentChapterId(id);
    setShowCaseStudy(false);
    setShowActivity(false);
    setSidebarOpen(false);
  }, []);

  const handleModeChange = useCallback((m: "study" | "quiz" | "notes") => {
    setMode(m);
    if (m !== "study") { setShowCaseStudy(false); setShowActivity(false); }
  }, []);

  const handleSelectCaseStudy = useCallback(() => {
    setCurrentChapterId(0);
    setMode("study");
    setShowCaseStudy(true);
    setShowActivity(false);
    setSidebarOpen(false);
  }, []);

  const handleSelectActivity = useCallback(() => {
    setCurrentChapterId(0);
    setMode("study");
    setShowActivity(true);
    setShowCaseStudy(false);
    setSidebarOpen(false);
  }, []);

  return (
    <div className="flex h-screen bg-parchment overflow-hidden">
      <ChapterNav
        currentChapterId={currentChapterId}
        mode={mode}
        showCaseStudy={showCaseStudy}
        showActivity={showActivity}
        onChapterChange={handleChapterChange}
        onModeChange={handleModeChange}
        onSelectCaseStudy={handleSelectCaseStudy}
        onSelectActivity={handleSelectActivity}
        sidebarOpen={sidebarOpen}
        onSidebarToggle={() => setSidebarOpen((v) => !v)}
      />

      {/* Mobile spacer */}
      <div className="lg:hidden h-14 flex-shrink-0" />

      <main className="flex-1 flex flex-col min-w-0 overflow-hidden" role="main">
        {mode === "study" && showActivity ? (
          <ActivityContent />
        ) : mode === "study" && showCaseStudy ? (
          <CaseStudyContent />
        ) : mode === "study" ? (
          <StudyReader
            chapter={currentChapter}
            annotations={annotations}
            onAnnotationChange={refreshAnnotations}
          />
        ) : mode === "quiz" ? (
          <QuizMode chapter={currentChapter} />
        ) : (
          <AnnotationsView
            annotations={annotations}
            onAnnotationChange={refreshAnnotations}
          />
        )}
      </main>
    </div>
  );
}
