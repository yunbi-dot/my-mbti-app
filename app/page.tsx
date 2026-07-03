import Link from "next/link";
import CounterBanner from "@/components/CounterBanner";
import { fetchParticipantCount } from "@/lib/supabaseClient";

// 방문할 때마다 최신 참여자 수를 반영하기 위해 항상 동적으로 렌더링합니다.
export const dynamic = "force-dynamic";

export default async function HomePage() {
  const participantCount = await fetchParticipantCount();

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-cyan-50 px-4 py-16">
      <div className="w-full max-w-md animate-fade-in-up space-y-8 text-center">
        <div className="space-y-4">
          <span className="inline-block rounded-full bg-indigo-100 px-4 py-1.5 text-xs font-bold tracking-wider text-indigo-600">
            IT WORKER MBTI TEST
          </span>
          <h1 className="text-3xl font-extrabold leading-snug text-slate-900 md:text-4xl">
            출근길 내 모습으로 알아보는
            <br />
            <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">
              &apos;IT 부캐&apos;
            </span>{" "}
            테스트
          </h1>
          <p className="text-sm leading-relaxed text-slate-500 md:text-base">
            협업 스타일부터 위기 대처법까지,
            <br />내 MBTI 유형에 맞는 IT 직무 페르소나는?
          </p>
        </div>

        <CounterBanner initialCount={participantCount} />

        <Link
          href="/quiz"
          className="group inline-flex w-full animate-floaty items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-6 py-4 text-lg font-bold text-white shadow-glow transition-all duration-200 hover:scale-105 hover:bg-indigo-700"
        >
          내 IT 부캐 확인하러 가기
          <span className="transition-transform duration-200 group-hover:translate-x-1">
            ➔
          </span>
        </Link>

        <p className="text-xs text-slate-400">
          8개의 질문 · 소요시간 약 1분
        </p>
      </div>
    </main>
  );
}
