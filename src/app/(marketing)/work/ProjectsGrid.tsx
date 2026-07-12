"use client";

import { useState } from "react";

/**
 * Filterable project grid for /work.
 * Data reconstructed from the approved design mockup.
 */

const filters = [
  { id: "all", label: "ALL PROJECTS" },
  { id: "systems", label: "SYSTEMS & AUTOMATION" },
  { id: "websites", label: "WEBSITES" },
  { id: "platforms", label: "PLATFORMS" },
  { id: "internal", label: "INTERNAL OPERATIONS" },
  { id: "marketing", label: "MARKETING AUTOMATION" },
];

type Project = {
  title: string;
  description: string;
  tags: string[];
  metrics: { value: string; label: string }[];
  categories: string[];
};

const projects: Project[] = [
  {
    title: "SIGNATURE SIGNINGS",
    description:
      "Rebuilt their membership, payment, and onboarding systems for a smoother member experience.",
    tags: ["Systems", "Automation", "Stripe"],
    metrics: [
      { value: "80%", label: "Manual Work Reduced" },
      { value: "3x", label: "Faster Onboarding Process" },
      { value: "100%", label: "Access Issues Resolved" },
    ],
    categories: ["systems", "internal"],
  },
  {
    title: "MYFENCER",
    description:
      "A complete platform for fencers to find events, track results, and connect with the community.",
    tags: ["Web Platform", "Community", "Events"],
    metrics: [
      { value: "2,500+", label: "Active Users" },
      { value: "250+", label: "Events Managed" },
      { value: "95%", label: "User Satisfaction Rate" },
    ],
    categories: ["platforms", "websites"],
  },
  {
    title: "TRAVEL MEDIA VAULT",
    description:
      "A media management platform to organize, store, and deliver content across environments.",
    tags: ["Web Platform", "Cloud", "Storage"],
    metrics: [
      { value: "10TB+", label: "Media Managed" },
      { value: "60%", label: "Faster Content Delivery" },
      { value: "99.9%", label: "System Uptime" },
    ],
    categories: ["platforms"],
  },
  {
    title: "LOU ENTERPRISES",
    description:
      "Built a modern website and automated client onboarding system with integrated workflows.",
    tags: ["Website", "Automation", "CRM"],
    metrics: [
      { value: "3x", label: "Increase in Leads" },
      { value: "70%", label: "Less Admin Work" },
      { value: "100%", label: "Automated Follow-ups" },
    ],
    categories: ["websites", "systems"],
  },
  {
    title: "AUTOMATED EMAIL SYSTEM",
    description:
      "Designed and implemented automated email workflows that nurture leads and increase conversions.",
    tags: ["Email Automation", "Workflows", "CRM"],
    metrics: [
      { value: "65%", label: "Increase in Open Rate" },
      { value: "40%", label: "More Replies Generated" },
      { value: "3x", label: "More Qualified Leads" },
    ],
    categories: ["marketing", "systems"],
  },
  {
    title: "SMART INVOICING SYSTEM",
    description:
      "Automated invoicing, payment reminders, and client communication across multiple accounts.",
    tags: ["Invoicing", "Automation", "Payments"],
    metrics: [
      { value: "90%", label: "On-time Payments" },
      { value: "75%", label: "Less Manual Work" },
      { value: "100%", label: "Accurate Records" },
    ],
    categories: ["systems", "internal"],
  },
];

/* Miniature browser-window placeholder (swap for real screenshots later) */
function MiniUi() {
  return (
    <div className="flex h-[104px] w-[132px] flex-none flex-col overflow-hidden rounded-[10px] border border-white/10 bg-[#0C0B16]" aria-hidden>
      <div className="flex h-3.5 flex-none items-center gap-[3px] bg-white/[0.06] px-1.5">
        <span className="h-1 w-1 rounded-full bg-white/30" />
        <span className="h-1 w-1 rounded-full bg-white/30" />
        <span className="h-1 w-1 rounded-full bg-white/30" />
      </div>
      <div className="flex flex-1 flex-col gap-1.5 p-2">
        <div className="h-2 w-[70%] rounded-[3px] bg-gradient-to-r from-violet-bright/55 to-violet/25" />
        <div className="h-1.5 w-[90%] rounded-[3px] bg-white/10" />
        <div className="h-1.5 w-[80%] rounded-[3px] bg-white/[0.08]" />
        <div className="mt-auto flex gap-[5px]">
          <div className="h-5 flex-1 rounded bg-violet/30" />
          <div className="h-5 flex-1 rounded bg-white/[0.07]" />
          <div className="h-5 flex-1 rounded bg-white/[0.07]" />
        </div>
      </div>
    </div>
  );
}

export function ProjectsGrid() {
  const [active, setActive] = useState("all");
  const visible = projects.filter((p) => active === "all" || p.categories.includes(active));

  return (
    <div className="flex flex-col gap-6">
      {/* Filter bar */}
      <div className="flex flex-wrap items-center gap-2.5 rounded-[14px] border border-white/[0.08] bg-[#0E0C18]/70 px-4 py-3">
        {filters.map((f) => {
          const isActive = f.id === active;
          return (
            <button
              key={f.id}
              type="button"
              onClick={() => setActive(f.id)}
              className={`inline-flex cursor-pointer items-center whitespace-nowrap rounded-full px-5 py-[11px] text-xs font-extrabold tracking-[1.2px] transition ${
                isActive
                  ? "border border-[#C084FC]/70 bg-gradient-to-br from-violet to-violet-bright text-white"
                  : "border border-white/[0.12] text-[#B7B5C4] hover:border-violet-bright/60 hover:text-white"
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {visible.map((p) => (
          <div
            key={p.title}
            className="relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-violet-bright/[0.22] p-[22px] transition hover:border-violet-bright/[0.55] hover:shadow-[0_0_32px_rgba(124,58,237,0.15)]"
            style={{ background: "linear-gradient(180deg, rgba(20,16,36,0.55), rgba(10,9,18,0.85))" }}
          >
            <span
              className="absolute right-0 top-0 h-[34px] w-[34px] rounded-bl-2xl"
              style={{ background: "linear-gradient(225deg, rgba(168,85,247,0.6), transparent 65%)" }}
              aria-hidden
            />
            <div className="grid items-start gap-4 min-[420px]:grid-cols-[132px_1fr]">
              <MiniUi />
              <div className="flex flex-col gap-2">
                <h3 className="font-heading text-lg font-bold tracking-[0.5px] text-white">
                  {p.title}
                </h3>
                <p className="text-[13px] leading-[1.6] text-[#B7B5C4]">{p.description}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-violet-bright/40 bg-violet/10 px-3 py-[5px] text-[11px] font-bold text-[#C084FC]"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="grid grid-cols-3 border-t border-white/[0.08] pt-3.5">
              {p.metrics.map((m, i) => (
                <div key={m.label} className={`px-2.5 ${i > 0 ? "border-l border-white/[0.08]" : ""}`}>
                  <p className="font-heading text-[21px] font-bold text-[#C084FC]">{m.value}</p>
                  <p className="mt-[3px] text-[11.5px] leading-[1.45] text-fog">{m.label}</p>
                </div>
              ))}
            </div>
            <a
              href="#"
              className="mt-auto flex items-center justify-between border-t border-white/[0.08] pt-3.5 text-[12.5px] font-extrabold tracking-[1.5px] text-[#E7E6EF] transition hover:text-[#C084FC]"
            >
              VIEW CASE STUDY <span aria-hidden className="text-base text-violet-bright">→</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
