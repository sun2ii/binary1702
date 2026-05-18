import type { ReactNode } from "react";

/**
 * Numbered-eyebrow + title pattern repeated across marketing sections.
 */
export function SectionHead({
  label,
  title,
  variant = "light",
}: {
  label: string;
  title: ReactNode;
  variant?: "light" | "dark";
}) {
  const isDark = variant === "dark";
  return (
    <div className="grid sm:grid-cols-[200px_1fr] gap-4 sm:gap-[60px] mb-10 sm:mb-14">
      <div
        className={`font-display-mono text-xs uppercase tracking-[0.12em] pt-3.5 font-medium ${
          isDark ? "text-cream-mute" : "text-ink-mute"
        }`}
      >
        {label}
      </div>
      <h2
        className={`text-[clamp(28px,3.6vw,42px)] font-bold leading-[1.15] tracking-tight max-w-[760px] m-0 ${
          isDark ? "text-cream" : "text-ink"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}
