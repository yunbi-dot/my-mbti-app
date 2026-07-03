"use client";

import { QuizOption } from "@/lib/types";

interface QuestionCardProps {
  questionNumber: number;
  question: string;
  options: [QuizOption, QuizOption];
  onSelect: (option: QuizOption) => void;
  disabled?: boolean;
}

export default function QuestionCard({
  questionNumber,
  question,
  options,
  onSelect,
  disabled,
}: QuestionCardProps) {
  return (
    <div key={questionNumber} className="animate-fade-in-up space-y-8">
      <h2 className="text-balance text-center text-xl font-bold leading-relaxed text-slate-900 md:text-2xl">
        {question}
      </h2>
      <div className="flex flex-col gap-4">
        {options.map((option) => (
          <button
            key={option.label}
            type="button"
            disabled={disabled}
            onClick={() => onSelect(option)}
            className="group flex items-start gap-3 rounded-2xl border-2 border-slate-100 bg-white px-6 py-5 text-left shadow-md transition-all duration-200 hover:scale-105 hover:border-indigo-400 hover:bg-indigo-50 hover:shadow-xl disabled:pointer-events-none disabled:opacity-40"
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white">
              {option.label}
            </span>
            <span className="text-sm font-medium leading-relaxed text-slate-700 md:text-base">
              {option.text}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
