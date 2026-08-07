import { NextRequest, NextResponse } from "next/server";
import { getUnit1ExamState, recordUnit1ExamScore } from "@/lib/db";
import { unit1Exam } from "@/lib/content/unit1-exam";

export async function GET() {
  return NextResponse.json(getUnit1ExamState());
}

export async function PUT(request: NextRequest) {
  let body: { score?: number };
  try {
    body = (await request.json()) as { score?: number };
  } catch {
    return NextResponse.json({ error: "Invalid score." }, { status: 400 });
  }
  const score = body.score;
  if (
    typeof score !== "number" ||
    !Number.isInteger(score) ||
    score < 0 ||
    score > unit1Exam.length
  ) {
    return NextResponse.json({ error: "Invalid score." }, { status: 400 });
  }
  return NextResponse.json(recordUnit1ExamScore(score));
}
