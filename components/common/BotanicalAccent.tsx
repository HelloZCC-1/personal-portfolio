type BotanicalAccentProps = {
  variant?: "light" | "dark";
  className?: string;
};

export function BotanicalAccent({
  variant = "light",
  className = "",
}: BotanicalAccentProps) {
  const lineColor =
    variant === "dark" ? "border-blue-200/25" : "border-blue-300/25";
  const glowColor =
    variant === "dark" ? "bg-violet-400/20" : "bg-violet-200/50";
  const leafColor =
    variant === "dark" ? "bg-white/10" : "bg-white/70";

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute select-none ${className}`}
    >
      <div className={`absolute h-36 w-36 rounded-full ${glowColor} blur-3xl`} />
      <div className={`absolute left-10 top-10 h-40 w-40 rounded-full border ${lineColor}`} />
      <div className={`absolute left-20 top-4 h-24 w-10 rotate-45 rounded-full ${leafColor} blur-[1px]`} />
      <div className={`absolute left-6 top-20 h-20 w-9 -rotate-12 rounded-full ${leafColor} blur-[1px]`} />
      <div className={`absolute left-28 top-28 h-16 w-8 rotate-12 rounded-full ${leafColor} blur-[1px]`} />
      <div className={`absolute left-16 top-16 h-28 w-px rotate-45 ${variant === "dark" ? "bg-blue-100/25" : "bg-blue-300/35"}`} />
    </div>
  );
}
