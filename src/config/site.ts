export const siteConfig = {
  name: "Binary1702",
  description: "Public Execution Log",
  tagline: "What I build, when it ships, and why it stops.",
  activeProject: {
    name: "Binary1702",
    status: "active",
  },
  links: [
    { label: "GitHub", href: "https://github.com/sun2ii" },
    { label: "Twitter", href: "https://twitter.com/binary1702" },
    { label: "LinkedIn", href: "https://linkedin.com/in/benbasuni" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;

/** Scheduling link used by every "free 15-minute call" CTA. */
export const bookingUrl = "https://calendly.com/benbasuni";

/** 5-minute intake form (Notion + Slack pipeline). */
export const intakeUrl = "/operations";
