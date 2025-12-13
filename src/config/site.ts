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
