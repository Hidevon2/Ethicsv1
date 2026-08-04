import type { Annotation, KeyTerm } from "@/lib/types";

export interface Marker {
  slug: string;
  plainIndex: number;
}

export function parseMarkers(text: string): {
  plain: string;
  markers: Marker[];
} {
  const re = /\{\{([a-z0-9-]+)\}\}/g;
  let plain = "";
  const markers: Marker[] = [];
  let last = 0;
  let match: RegExpExecArray | null;
  while ((match = re.exec(text))) {
    plain += text.slice(last, match.index);
    markers.push({ slug: match[1], plainIndex: plain.length });
    last = re.lastIndex;
  }
  plain += text.slice(last);
  return { plain, markers };
}

export type RenderNode =
  | { kind: "text"; text: string; annotation?: Annotation }
  | { kind: "term"; slug: string };

export function buildRenderNodes(
  text: string,
  annotations: Annotation[],
): RenderNode[] {
  const { plain, markers } = parseMarkers(text);
  const anns = [...annotations].sort((a, b) => a.startOffset - b.startOffset);
  const nodes: RenderNode[] = [];

  function pushText(start: number, end: number) {
    if (end <= start) return;
    let s = start;
    for (const ann of anns) {
      if (ann.endOffset <= start || ann.startOffset >= end) continue;
      if (ann.startOffset > s) {
        nodes.push({ kind: "text", text: plain.slice(s, ann.startOffset) });
        s = ann.startOffset;
      }
      const cut = Math.min(ann.endOffset, end);
      nodes.push({ kind: "text", text: plain.slice(s, cut), annotation: ann });
      s = cut;
    }
    if (s < end) nodes.push({ kind: "text", text: plain.slice(s, end) });
  }

  let pos = 0;
  for (const marker of markers) {
    pushText(pos, marker.plainIndex);
    nodes.push({ kind: "term", slug: marker.slug });
    pos = marker.plainIndex;
  }
  pushText(pos, plain.length);
  return nodes;
}

export function paragraphPlainText(text: string): string {
  return parseMarkers(text).plain;
}

export function lookupTerm(lesson: { keyTerms: KeyTerm[] }, slug: string): KeyTerm | undefined {
  return lesson.keyTerms.find((term) => term.slug === slug);
}
