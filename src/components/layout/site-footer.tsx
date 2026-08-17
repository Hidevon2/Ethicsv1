export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-panel-raised">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-baseline sm:justify-between">
          <div>
            <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.24em] text-primary">
              Source
            </p>
            <p className="mt-2 max-w-[78ch] font-sans text-[14px] leading-relaxed text-ink-body">
              <em>A Course Module for Ethics</em> — Oscar G. Bulaong Jr., Albert M.
              Lagliva, Michael Ner E. Mariano, Mark Joseph T. Calano, Jesus
              Deogracias Z. Pr&iacute;ncipe (authors); Greg Tabios Pawilen, PhD
              (coordinator).
            </p>
          </div>
          <p className="shrink-0 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
            Ethics · A Collegiate Study
          </p>
        </div>
      </div>
    </footer>
  );
}
