import { Persona } from "@/lib/types";

interface ResultCardProps {
  persona: Persona;
}

export default function ResultCard({ persona }: ResultCardProps) {
  return (
    <div className="w-full max-w-md animate-pop-in overflow-hidden rounded-2xl bg-white shadow-xl">
      <div
        className={`bg-gradient-to-br ${persona.gradient} px-6 py-10 text-center text-white`}
      >
        <p className="text-sm font-semibold tracking-widest text-white/80">
          MY IT ALTER-EGO
        </p>
        <div className="my-4 text-6xl">{persona.emoji}</div>
        <h1 className="text-2xl font-extrabold leading-snug md:text-3xl">
          {persona.title}
        </h1>
        <p className="mt-2 text-sm text-white/90 md:text-base">
          &quot;{persona.tagline}&quot;
        </p>
        <span className="mt-4 inline-block rounded-full bg-white/20 px-4 py-1.5 text-sm font-bold tracking-[0.3em]">
          {persona.type}
        </span>
      </div>

      <div className="space-y-6 px-6 py-8 md:px-8">
        <section className="space-y-3">
          <h2 className="text-sm font-bold text-slate-400">
            나의 일상 속 특징 3가지
          </h2>
          <ul className="space-y-2">
            {persona.traits.map((trait, index) => (
              <li
                key={index}
                className="flex items-start gap-2 rounded-xl bg-slate-50 px-4 py-3 text-sm leading-relaxed text-slate-700"
              >
                <span className="mt-0.5 text-indigo-500">✔</span>
                <span>{trait}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="rounded-xl border-2 border-cyan-100 bg-cyan-50/60 px-4 py-4">
            <p className="text-xs font-bold text-cyan-600">💚 찰떡궁합 파트너</p>
            <p className="mt-1 text-sm font-extrabold text-slate-900">
              {persona.bestMatch.type} · {persona.bestMatch.title}
            </p>
            <p className="mt-1 text-xs leading-relaxed text-slate-500">
              {persona.bestMatch.reason}
            </p>
          </div>
          <div className="rounded-xl border-2 border-rose-100 bg-rose-50/60 px-4 py-4">
            <p className="text-xs font-bold text-rose-500">
              ⚡ 케미 주의 파트너
            </p>
            <p className="mt-1 text-sm font-extrabold text-slate-900">
              {persona.worstMatch.type} · {persona.worstMatch.title}
            </p>
            <p className="mt-1 text-xs leading-relaxed text-slate-500">
              {persona.worstMatch.reason}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
