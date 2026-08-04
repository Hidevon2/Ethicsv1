import { NextRequest, NextResponse } from "next/server";
import {
  getAllProgress,
  recordQuizBest,
  upsertProgress,
} from "@/lib/db";
import { isLessonSlug } from "@/lib/validate";

export async function GET() {
  return NextResponse.json(getAllProgress());
}

export async function PUT(request: NextRequest) {
  const body = (await request.json()) as {
    lessonSlug?: string;
    completed?: boolean;
    quizBest?: number;
  };

  if (!body.lessonSlug || !isLessonSlug(body.lessonSlug)) {
    return NextResponse.json({ error: "Invalid lesson slug." }, { status: 400 });
  }

  if (body.completed !== undefined && typeof body.completed === "boolean") {
    return NextResponse.json(upsertProgress(body.lessonSlug, body.completed));
  }

  if (body.quizBest !== undefined && typeof body.quizBest === "number") {
    return NextResponse.json(recordQuizBest(body.lessonSlug, body.quizBest));
  }

  return NextResponse.json(
    { error: "Provide either completed or quizBest." },
    { status: 400 },
  );
}
