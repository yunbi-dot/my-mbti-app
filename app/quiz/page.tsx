"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ProgressBar from "@/components/ProgressBar";
import QuestionCard from "@/components/QuestionCard";
import LoadingAnalysis from "@/components/LoadingAnalysis";
import { questions } from "@/lib/questions";
import { calculateMBTI } from "@/lib/scoring";
import { saveMbtiResult } from "@/lib/supabaseClient";
import { QuizOption, Trait } from "@/lib/types";

const TRANSITION_MS = 260;

export default function QuizPage() {
  const router = useRouter();
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<Trait[]>([]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const currentQuestion = questions[stepIndex];
  const totalQuestions = questions.length;

  const finishQuiz = async (finalAnswers: Trait[]) => {
    setIsSubmitting(true);
    const mbtiType = calculateMBTI(finalAnswers);

    try {
      await saveMbtiResult(mbtiType, finalAnswers);
    } catch (err) {
      console.error("결과 저장 중 오류:", err);
    }

    window.setTimeout(() => {
      router.push(`/result/${mbtiType}`);
    }, 900);
  };

  const handleSelect = (option: QuizOption) => {
    if (isTransitioning || isSubmitting) return;
    setIsTransitioning(true);

    window.setTimeout(() => {
      const nextAnswers = [...answers, option.trait];

      if (stepIndex + 1 < totalQuestions) {
        setAnswers(nextAnswers);
        setStepIndex((prev) => prev + 1);
        setIsTransitioning(false);
      } else {
        setAnswers(nextAnswers);
        void finishQuiz(nextAnswers);
      }
    }, TRANSITION_MS);
  };

  if (isSubmitting) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-cyan-50 px-4">
        <LoadingAnalysis />
      </main>
    );
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-cyan-50 px-4 py-12">
      <div className="w-full max-w-md space-y-8 rounded-2xl bg-white p-6 shadow-xl md:p-8">
        <ProgressBar current={stepIndex + 1} total={totalQuestions} />

        <div
          className="transition-opacity duration-200"
          style={{ opacity: isTransitioning ? 0 : 1 }}
        >
          <QuestionCard
            questionNumber={currentQuestion.id}
            question={currentQuestion.question}
            options={currentQuestion.options}
            onSelect={handleSelect}
            disabled={isTransitioning}
          />
        </div>
      </div>
    </main>
  );
}
