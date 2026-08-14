import type { EditorNote } from "@/lib/types";
import { CalloutBlock } from "@/components/lesson/callout-block";

function Block({ block }: { block: EditorNote["blocks"][number] }) {
  if (block.type === "subheading") {
    return (
      <h4 className="mb-3 mt-4 font-serif text-base font-semibold italic text-foreground">
        {block.text}
      </h4>
    );
  }
  if (block.type === "quote") {
    return (
      <blockquote className="mb-4 mt-4 rounded-[var(--radius)] border border-border bg-background px-4 py-3">
        <p className="font-serif text-base italic leading-relaxed text-foreground">
          &ldquo;{block.text}&rdquo;
        </p>
        {block.source && (
          <cite className="mt-1 block font-mono text-[10px] font-semibold uppercase tracking-[0.14em] not-italic text-muted">
            — {block.source}
          </cite>
        )}
      </blockquote>
    );
  }
  return (
    <p className="mb-4 text-pretty font-serif text-[15px] leading-relaxed text-foreground">
      {block.text}
    </p>
  );
}

export function EditorNotes({ notes }: { notes: EditorNote[] }) {
  if (notes.length === 0) return null;
  return (
    <section aria-labelledby="editor-notes-heading" className="mt-12 space-y-8">
      <h2
        id="editor-notes-heading"
        className="sr-only"
      >
        Editor-supplied notes
      </h2>
      {notes.map((note) => (
        <CalloutBlock key={note.id} variant="note" title={note.label}>
          <p className="mb-4 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
            {note.note}
          </p>
          <div>
            {note.blocks.map((block, index) => (
              <Block key={index} block={block} />
            ))}
          </div>
        </CalloutBlock>
      ))}
    </section>
  );
}