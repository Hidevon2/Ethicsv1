import Link from "next/link";
import { ScaleIcon } from "@/components/ui/icons";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-baseline sm:justify-between">
          <div>
            <Link href="/" className="mb-4 inline-flex items-center gap-2 font-serif text-xl text-primary"><ScaleIcon className="h-5 w-5" /> Ethics</Link>
            <p className="max-w-[78ch] font-sans text-xs leading-relaxed text-muted">
              <em>A Course Module for Ethics</em> — Oscar G. Bulaong Jr., Albert M.
              Lagliva, Michael Ner E. Mariano, Mark Joseph T. Calano, Jesus
              Deogracias Z. Pr&iacute;ncipe (authors); Greg Tabios Pawilen, PhD
              (coordinator).
            </p>
          </div>
          <div className="flex shrink-0 gap-5 font-sans text-xs text-muted"><Link href="/sources" className="hover:text-primary">Explore sources</Link><Link href="/reflections" className="hover:text-primary">Your reflections</Link></div>
        </div>
      </div>
    </footer>
  );
}
