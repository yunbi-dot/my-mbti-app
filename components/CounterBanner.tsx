"use client";

import { useEffect, useState } from "react";
import { MBTI_RESULTS_TABLE, supabase } from "@/lib/supabaseClient";

interface CounterBannerProps {
  initialCount: number;
}

export default function CounterBanner({ initialCount }: CounterBannerProps) {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    const channel = supabase
      .channel("mbti_results_realtime_counter")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: MBTI_RESULTS_TABLE },
        () => {
          setCount((prev) => prev + 1);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return (
    <div className="flex items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-5 py-4 text-sm font-semibold text-white shadow-glow md:text-base">
      <span className="text-lg">👥</span>
      <span>
        이미{" "}
        <span className="font-extrabold text-cyan-300">
          {count.toLocaleString()}명
        </span>
        의 동료들이 자신의 부캐를 확인했어요!
      </span>
    </div>
  );
}
