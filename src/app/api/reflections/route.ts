import { NextRequest, NextResponse } from "next/server";
import { deleteReflection, getReflections, upsertReflection } from "@/lib/db";
import { isLessonSlug, isReflectionGroup } from "@/lib/validate";

export async function GET(request: NextRequest) {
  const raw = request.nextUrl.searchParams.get("lesson");
  const lesson = raw && isLessonSlug(raw) ? raw : undefined;
  return NextResponse.json(getReflections(lesson));
}

export async function PUT(request: NextRequest) {
  const body = (await request.json()) as {
    lessonSlug?: string;
    promptId?: string;
    prompt?: string;
    group?: string;
    answer?: string;
  };

  if (
    !body.lessonSlug ||
    !isLessonSlug(body.lessonSlug) ||
    !body.promptId ||
    !body.prompt ||
    !body.group ||
    !isReflectionGroup(body.group) ||
    typeof body.answer !== "string"
  ) {
    return NextResponse.json({ error: "Invalid reflection data." }, { status: 400 });
  }

  return NextResponse.json(
    upsertReflection({
      lessonSlug: body.lessonSlug,
      promptId: body.promptId,
      prompt: body.prompt,
      group: body.group,
      answer: body.answer,
    }),
  );
}

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  if (!id) {
    return NextResponse.json({ error: "Missing reflection id." }, { status: 400 });
  }
  deleteReflection(id);
  return NextResponse.json({ ok: true });
}
