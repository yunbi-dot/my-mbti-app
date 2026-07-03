import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 px-4 text-center">
      <div className="text-6xl">🧭</div>
      <h1 className="text-2xl font-extrabold text-slate-900">
        페이지를 찾을 수 없어요
      </h1>
      <p className="text-sm text-slate-500">
        요청하신 결과나 페이지가 존재하지 않아요.
      </p>
      <Link
        href="/"
        className="rounded-2xl bg-indigo-600 px-6 py-3 text-sm font-bold text-white shadow-glow transition-all duration-200 hover:scale-105 hover:bg-indigo-700"
      >
        홈으로 돌아가기
      </Link>
    </main>
  );
}
