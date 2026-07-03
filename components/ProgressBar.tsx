interface ProgressBarProps {
  current: number;
  total: number;
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const percent = Math.min(100, Math.round((current / total) * 100));

  return (
    <div className="w-full space-y-2">
      <div className="flex items-center justify-between text-sm font-semibold text-slate-400">
        <span>진행 상황</span>
        <span className="rounded-full bg-indigo-50 px-3 py-1 text-indigo-600">
          {`[ ${current} / ${total} ]`}
        </span>
      </div>
      <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 transition-all duration-500 ease-out"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
