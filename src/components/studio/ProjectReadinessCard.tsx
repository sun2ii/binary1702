"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

/**
 * ProjectReadinessCard
 * ─────────────────────────────────────────────────────────────
 * The first reusable interface component in the Binary 1702 design
 * system. It does not decorate — it demonstrates how we work.
 *
 * On load the checklist assembles itself (each prerequisite confirms
 * in sequence, the counter climbs, the bar fills, the status flips to
 * "Ready to Build"). After that it is fully interactive: every row is
 * a toggle — click or keyboard to confirm / un-confirm — and the
 * counter, progress bar, and status update live.
 *
 * Calm by design — purple is an accent, not the surface. Respects
 * prefers-reduced-motion (renders fully complete, instantly). Rows are
 * always mounted, so toggling causes no layout shift.
 */

export type ReadinessItem = {
  title: string;
  detail: string;
};

const defaultItems: ReadinessItem[] = [
  { title: "Scope Defined", detail: "Deliverables and boundaries agreed before day one." },
  { title: "Timeline Confirmed", detail: "Fixed schedule with weekly checkpoints." },
  { title: "Price Agreed", detail: "One fixed price. No hourly billing." },
  { title: "Ownership Assigned", detail: "Code, docs, and accounts belong to you." },
  { title: "Documentation Included", detail: "Handoff guide and team training." },
];

const STEP_MS = 480;

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);
  return reduced;
}

function CheckMark() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="m5 12 5 5 9-11" />
    </svg>
  );
}

export function ProjectReadinessCard({
  items = defaultItems,
  className = "",
}: {
  items?: ReadinessItem[];
  className?: string;
}) {
  const total = items.length;
  const reduced = usePrefersReducedMotion();
  const [done, setDone] = useState<boolean[]>(() => items.map(() => false));
  const timers = useRef<number[]>([]);

  const clearTimers = useCallback(() => {
    timers.current.forEach((t) => window.clearTimeout(t));
    timers.current = [];
  }, []);

  // Intro: confirm each row in sequence once on mount (or instantly if reduced motion).
  useEffect(() => {
    clearTimers();
    if (reduced) {
      setDone(Array.from({ length: total }, () => true));
      return;
    }
    setDone(Array.from({ length: total }, () => false));
    for (let i = 0; i < total; i++) {
      const t = window.setTimeout(() => {
        setDone((prev) => {
          const next = [...prev];
          next[i] = true;
          return next;
        });
      }, (i + 1) * STEP_MS);
      timers.current.push(t);
    }
    return clearTimers;
  }, [reduced, total, clearTimers]);

  const toggle = useCallback(
    (i: number) => {
      clearTimers(); // any manual interaction cancels the intro sequence
      setDone((prev) => {
        const next = [...prev];
        next[i] = !next[i];
        return next;
      });
    },
    [clearTimers],
  );

  const completed = useMemo(() => done.filter(Boolean).length, [done]);
  const ready = total > 0 && completed === total;
  const pct = total === 0 ? 0 : (completed / total) * 100;

  return (
    <div
      className={`w-full rounded-[18px] border border-white/[0.08] bg-[#0E0C18]/80 p-6 shadow-[0_24px_70px_-40px_rgba(0,0,0,0.95)] backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-white/[0.14] md:p-7 ${className}`}
    >
      {/* Header — quiet label + live counter */}
      <div className="flex items-center justify-between">
        <p className="font-heading text-[11px] font-bold uppercase tracking-[2.5px] text-fog">
          Project Readiness
        </p>
        <span className="rounded-full border border-white/[0.08] px-2.5 py-1 font-heading text-[11px] font-bold tabular-nums text-[#C9C7D6]">
          {completed}/{total}
        </span>
      </div>

      {/* Progress track — fills as prerequisites confirm */}
      <div className="mt-4 h-[3px] w-full overflow-hidden rounded-full bg-white/[0.06]">
        <div
          className="h-full rounded-full bg-gradient-to-r from-violet to-violet-bright transition-[width] duration-500 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>

      {/* Checklist — each row is a toggle */}
      <ul className="mt-5 flex flex-col gap-0.5">
        {items.map((item, i) => {
          const isDone = done[i] ?? false;
          return (
            <li key={item.title}>
              <button
                type="button"
                onClick={() => toggle(i)}
                aria-pressed={isDone}
                aria-label={`${item.title} — ${isDone ? "confirmed" : "not confirmed"}. Toggle.`}
                className="flex w-full cursor-pointer items-start gap-3 rounded-lg px-2 py-2.5 text-left transition-colors hover:bg-white/[0.04] focus:outline-none focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-violet-bright/50"
              >
                <span
                  className={`mt-px flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full ring-1 ring-inset transition-colors duration-300 ${
                    isDone
                      ? "bg-violet-bright/[0.12] text-violet-bright ring-violet-bright/30"
                      : "text-fog ring-white/[0.1]"
                  }`}
                >
                  <span
                    className={`transition-all duration-300 ${
                      isDone ? "scale-100 opacity-100" : "scale-50 opacity-0"
                    }`}
                  >
                    <CheckMark />
                  </span>
                </span>
                <span className="flex flex-col">
                  <span
                    className={`text-[14.5px] leading-tight transition-colors duration-300 ${
                      isDone ? "font-medium text-frost" : "text-fog"
                    }`}
                  >
                    {item.title}
                  </span>
                  <span className="mt-0.5 text-[12.5px] leading-snug text-fog/80">
                    {item.detail}
                  </span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      <div className="my-5 h-px w-full bg-white/[0.06]" />

      {/* Status footer — one calm "go" signal once everything confirms */}
      <div className="flex items-center gap-3">
        <span className="relative flex h-2.5 w-2.5 shrink-0 items-center justify-center">
          {ready && (
            <span
              className="readiness-pulse absolute inline-flex h-full w-full rounded-full bg-mint"
              aria-hidden
            />
          )}
          <span
            className={`relative inline-flex h-2.5 w-2.5 rounded-full transition-colors duration-300 ${
              ready ? "bg-mint" : "bg-fog/40"
            }`}
          />
        </span>
        <div className="flex flex-col">
          <span className="font-heading text-[15px] font-bold text-frost">
            {ready ? "Ready to Build" : "In Preparation"}
          </span>
          <span className="text-[12.5px] leading-snug text-fog">
            {ready
              ? "Every prerequisite confirmed before we start."
              : `${completed} of ${total} prerequisites confirmed.`}
          </span>
        </div>
      </div>
    </div>
  );
}
