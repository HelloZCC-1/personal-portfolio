type FloralVisualProps = {
  variant?: "light" | "dark";
  className?: string;
};

export function FloralVisual({
  variant = "light",
  className = "",
}: FloralVisualProps) {
  const isDark = variant === "dark";
  const petal = isDark ? "bg-white/10" : "bg-white/80";
  const petalRing = isDark ? "border-blue-100/20" : "border-blue-200/50";
  const stem = isDark ? "bg-blue-100/25" : "bg-blue-300/40";
  const glow = isDark
    ? "from-blue-400/25 via-violet-400/15 to-transparent"
    : "from-blue-100 via-violet-100 to-transparent";

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute overflow-hidden ${className}`}
    >
      <div className={`absolute inset-0 rounded-[2rem] bg-gradient-to-br ${glow} blur-xl`} />
      <div className={`absolute left-8 top-8 h-40 w-40 rounded-full border ${petalRing}`} />
      <div className={`absolute left-20 top-16 h-24 w-12 rotate-45 rounded-full ${petal} shadow-sm`} />
      <div className={`absolute left-14 top-24 h-24 w-12 -rotate-12 rounded-full ${petal} shadow-sm`} />
      <div className={`absolute left-28 top-24 h-24 w-12 rotate-12 rounded-full ${petal} shadow-sm`} />
      <div className={`absolute left-24 top-12 h-16 w-10 -rotate-45 rounded-full ${petal} shadow-sm`} />
      <div className={`absolute left-[104px] top-20 h-4 w-4 rounded-full ${isDark ? "bg-blue-200/50" : "bg-blue-300/70"}`} />
      <div className={`absolute left-[110px] top-32 h-28 w-px rotate-12 ${stem}`} />
      <div className={`absolute left-24 top-44 h-14 w-7 -rotate-45 rounded-full ${isDark ? "bg-emerald-200/10" : "bg-emerald-100/80"}`} />
      <div className={`absolute left-32 top-48 h-12 w-6 rotate-45 rounded-full ${isDark ? "bg-emerald-200/10" : "bg-emerald-100/80"}`} />
    </div>
  );
}
