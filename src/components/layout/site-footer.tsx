export function SiteFooter() {
  return (
    <footer className="border-t-2 border-foreground bg-panel-muted">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
        <p className="font-sans text-[11px] font-bold uppercase tracking-[0.16em] text-primary">
          Source
        </p>
        <p className="mt-2 max-w-[78ch] text-pretty font-serif text-[15px] leading-relaxed text-foreground">
          <em>A Course Module for Ethics</em> — Oscar G. Bulaong Jr., Albert M.
          Lagliva, Michael Ner E. Mariano, Mark Joseph T. Calano, Jesus
          Deogracias Z. Pr&iacute;ncipe (authors); Greg Tabios Pawilen, PhD
          (coordinator).
        </p>
        <p className="mt-1.5 font-sans text-[10px] font-semibold uppercase tracking-[0.12em] text-muted">
          Author-name spellings flagged for verification against the module
          cover.
        </p>
      </div>
    </footer>
  );
}
