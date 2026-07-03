export default function LoadingAnalysis() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 text-center">
      <div className="relative flex h-20 w-20 items-center justify-center">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-40" />
        <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-cyan-400 text-2xl shadow-glow">
          🧬
        </span>
      </div>
      <div className="space-y-2">
        <p className="text-lg font-bold text-slate-900">
          나의 IT 부캐를 분석하고 있어요
        </p>
        <p className="text-sm text-slate-400">
          8가지 답변을 종합하는 중... 잠시만 기다려주세요
        </p>
      </div>
    </div>
  );
}
