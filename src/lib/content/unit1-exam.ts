import type { QuizItem } from "@/lib/types";
import { lesson01 } from "@/lib/content/lesson-01";
import { lesson02 } from "@/lib/content/lesson-02";
import { lesson03 } from "@/lib/content/lesson-03";
import { lesson04 } from "@/lib/content/lesson-04";
import { lesson05 } from "@/lib/content/lesson-05";

export const UNIT1_EXAM_PASS_SCORE = 20;

function pickEveryOther(items: QuizItem[]): QuizItem[] {
  return items.filter((_, index) => index % 2 === 0);
}

export const unit1Exam: QuizItem[] = [
  ...pickEveryOther(lesson01.quiz),
  ...pickEveryOther(lesson02.quiz),
  ...pickEveryOther(lesson03.quiz),
  ...pickEveryOther(lesson04.quiz),
  ...pickEveryOther(lesson05.quiz),
];
