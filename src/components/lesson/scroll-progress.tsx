"use client";

import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    function measure() {
      const el = document.documentElement;
      const total = el.scrollHeight - el.clientHeight;
      const ratio = total > 0 ? window.scrollY / total : 0;
      setPct(Math.min(1, Math.max(0, ratio)));
    }
    measure();
    window.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <div
      role="progressbar"
      aria-label="Reading progress through this lesson"
      aria-valuenow={Math.round(pct * 100)}
      aria-valuemin={0}
      aria-valuemax={100}
      className="sticky top-14 z-30 h-[3px] w-full bg-border"
    >
      <div className="h-full bg-primary" style={{ width: `${pct * 100}%` }} />
    </div>
  );
}
