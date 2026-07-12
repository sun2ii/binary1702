"use client";

import { useState } from "react";

const inputCls =
  "w-full rounded-[9px] border border-white/[0.12] bg-[#0A0912]/70 px-4 py-[13px] text-[13.5px] text-[#E7E6EF] outline-none transition placeholder:text-[#6E6C7E] focus:border-[#67E8F9]/60";

const selectCls = (filled: boolean) =>
  `w-full appearance-auto rounded-[9px] border border-white/[0.12] bg-[#0A0912]/70 px-4 py-[13px] text-[13.5px] outline-none transition focus:border-[#67E8F9]/60 ${
    filled ? "text-[#E7E6EF]" : "text-[#6E6C7E]"
  }`;

export function ContactForm() {
  const [vals, setVals] = useState({
    name: "",
    business: "",
    email: "",
    website: "",
    help: "",
    notWorking: "",
    tools: "",
    timeline: "",
    budget: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const set = (key: keyof typeof vals) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setVals((v) => ({ ...v, [key]: e.target.value }));

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "sending" || status === "sent") return;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(vals),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      id="project-form"
      onSubmit={submit}
      className="flex flex-col gap-3 rounded-2xl border border-[#67E8F9]/30 px-7 py-8"
      style={{ background: "linear-gradient(180deg, rgba(12,20,30,0.6), rgba(8,10,18,0.85))" }}
    >
      <h3 className="font-heading text-[22px] font-bold text-white">Tell us about the project</h3>
      <p className="-mt-1 text-[13.5px] text-[#B7B5C4]">
        Share a few details and we&apos;ll get back to you with next steps.
      </p>

      <div className="grid gap-3 sm:grid-cols-2">
        <input required value={vals.name} onChange={set("name")} placeholder="Your Name *" className={inputCls} />
        <input required value={vals.business} onChange={set("business")} placeholder="Business Name *" className={inputCls} />
        <input required type="email" value={vals.email} onChange={set("email")} placeholder="Email Address *" className={inputCls} />
        <input value={vals.website} onChange={set("website")} placeholder="Website (if any)" className={inputCls} />
      </div>

      <select required value={vals.help} onChange={set("help")} className={selectCls(!!vals.help)}>
        <option value="" disabled>
          What would you like help with? *
        </option>
        <option>Systems &amp; Automation</option>
        <option>Website</option>
        <option>Custom Platform</option>
        <option>Internal Operations</option>
        <option>Marketing Automation</option>
        <option>Not sure yet</option>
      </select>

      <input required value={vals.notWorking} onChange={set("notWorking")} placeholder="What is currently not working? *" className={inputCls} />
      <input value={vals.tools} onChange={set("tools")} placeholder="What tools are you using now?" className={inputCls} />

      <div className="grid gap-3 sm:grid-cols-2">
        <select value={vals.timeline} onChange={set("timeline")} className={selectCls(!!vals.timeline)}>
          <option value="" disabled>
            Preferred timeline
          </option>
          <option>As soon as possible</option>
          <option>Within 1 month</option>
          <option>1–3 months</option>
          <option>Flexible</option>
        </select>
        <select value={vals.budget} onChange={set("budget")} className={selectCls(!!vals.budget)}>
          <option value="" disabled>
            Estimated budget range
          </option>
          <option>Under $2,500</option>
          <option>$2,500–$10,000</option>
          <option>$10,000–$25,000</option>
          <option>$25,000+</option>
          <option>Not sure yet</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={status === "sending" || status === "sent"}
        className="mt-1 flex cursor-pointer items-center justify-center gap-3.5 rounded-[10px] border-none px-6 py-4 text-[13.5px] font-extrabold tracking-[1.5px] text-white shadow-[0_0_28px_rgba(124,58,237,0.35)] transition hover:shadow-[0_0_40px_rgba(124,58,237,0.55)] disabled:cursor-default"
        style={{ background: "linear-gradient(90deg,#7C3AED,#2563EB)" }}
      >
        {status === "sent" ? "DETAILS SENT ✓" : status === "sending" ? "SENDING…" : "SEND PROJECT DETAILS"}{" "}
        <span aria-hidden className="text-base">
          →
        </span>
      </button>
      {status === "error" ? (
        <p className="text-xs text-[#F87171]">
          Something went wrong — email us instead at{" "}
          <a href="mailto:ben@binary1702.com" className="underline">
          ben@binary1702.com
          </a>
          .
        </p>
      ) : (
        <p className="text-xs text-[#6E6C7E]">* Required fields</p>
      )}
    </form>
  );
}
