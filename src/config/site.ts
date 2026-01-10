export const siteConfig = {
  name: "Binary 1702",
  description: "Systems behind businesses",
  tagline: "Web systems, AI, and backend infrastructure for operations that scale.",
  contact: {
    email: "ben@binary1702.com",
    calendly: "https://calendly.com/benbasuni",
  },
  founder: {
    name: "Ben Basuni",
    role: "Principal",
  },
  links: [
    { label: "GitHub", href: "https://github.com/sun2ii" },
    { label: "LinkedIn", href: "https://linkedin.com/in/benbasuni" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
