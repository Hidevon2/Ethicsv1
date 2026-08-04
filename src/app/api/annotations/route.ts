import { NextRequest, NextResponse } from "next/server";
import { addAnnotation, deleteAnnotation, getAnnotations } from "@/lib/db";
import { isLessonSlug, isHighlightColor } from "@/lib/validate";

export async function GET(request: NextRequest) {
  const lesson = request.nextUrl.searchParams.get("lesson");
  if (!lesson || !isLessonSlug(lesson)) {
    return NextResponse.json({ error: "Invalid lesson slug." }, { status: 400 });
  }
  return NextResponse.json(getAnnotations(lesson));
}

export async function POST(request: NextRequest) {
  const body = (await request.json()) as {
    lessonSlug?: string;
    paragraphId?: string;
    text?: string;
    color?: string;
    startOffset?: number;
    endOffset?: number;
  };

  if (
    !body.lessonSlug ||
    !isLessonSlug(body.lessonSlug) ||
    !body.paragraphId ||
    typeof body.text !== "string" ||
    body.text.trim().length === 0 ||
    !body.color ||
    !isHighlightColor(body.color) ||
    typeof body.startOffset !== "number" ||
    typeof body.endOffset !== "number"
  ) {
    return NextResponse.json({ error: "Invalid annotation data." }, { status: 400 });
  }

  return NextResponse.json(
    addAnnotation({
      lessonSlug: body.lessonSlug,
      paragraphId: body.paragraphId,
      text: body.text,
      color: body.color as "red" | "teal" | "amber",
      startOffset: body.startOffset,
      endOffset: body.endOffset,
    }),
  );
}

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  if (!id) {
    return NextResponse.json({ error: "Missing annotation id." }, { status: 400 });
  }
  deleteAnnotation(id);
  return NextResponse.json({ ok: true });
}
