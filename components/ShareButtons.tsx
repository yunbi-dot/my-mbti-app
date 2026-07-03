"use client";

import Link from "next/link";
import { useState } from "react";

export default function ShareButtons() {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("클립보드 복사 실패:", err);
    }
  };

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <Link
        href="/"
        className="flex-1 rounded-2xl border-2 border-indigo-200 bg-white px-6 py-4 text-center text-sm font-bold text-indigo-600 shadow-md transition-all duration-200 hover:scale-105 hover:bg-indigo-50 md:text-base"
      >
        테스트 다시 하기
      </Link>
      <button
        type="button"
        onClick={handleCopyLink}
        className="flex-1 rounded-2xl bg-indigo-600 px-6 py-4 text-center text-sm font-bold text-white shadow-glow transition-all duration-200 hover:scale-105 hover:bg-indigo-700 md:text-base"
      >
        {copied ? "링크가 복사됐어요! ✅" : "결과 링크 복사하기 🔗"}
      </button>
    </div>
  );
}
