import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ResultCard from "@/components/ResultCard";
import ShareButtons from "@/components/ShareButtons";
import { getPersona, personas } from "@/lib/personas";

interface ResultPageProps {
  params: Promise<{ type: string }>;
}

export function generateStaticParams() {
  return Object.keys(personas).map((type) => ({ type }));
}

export async function generateMetadata({
  params,
}: ResultPageProps): Promise<Metadata> {
  const { type } = await params;
  const persona = getPersona(type);

  if (!persona) {
    return { title: "결과를 찾을 수 없어요 | IT 부캐 찾기" };
  }

  return {
    title: `나의 IT 부캐는 ${persona.title} (${persona.type}) | IT 부캐 찾기`,
    description: persona.tagline,
    openGraph: {
      title: `나의 IT 부캐는 "${persona.title}" (${persona.type})`,
      description: persona.tagline,
      type: "website",
    },
  };
}

export default async function ResultPage({ params }: ResultPageProps) {
  const { type } = await params;
  const persona = getPersona(type);

  if (!persona) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col items-center gap-8 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 px-4 py-12">
      <ResultCard persona={persona} />
      <div className="w-full max-w-md">
        <ShareButtons />
      </div>
    </main>
  );
}
