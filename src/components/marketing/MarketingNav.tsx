"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export interface NavLink {
  href: string;
  label: string;
  /** For scroll-spy active-state highlighting. */
  sectionId?: string;
  external?: boolean;
  accent?: boolean;
}

/**
 * Sticky marketing nav with scroll-spy active-section detection.
 * Variant "light" = paper bg, "dark" = night bg.
 */
export function MarketingNav({
  variant = "light",
  links,
  brandHref = "/",
}: {
  variant?: "light" | "dark";
  links: NavLink[];
  brandHref?: string;
}) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const sectioned = links.filter((l) => l.sectionId);
    if (sectioned.length === 0) return;

    const onScroll = () => {
      const y = window.scrollY + 120;
      let current: string | null = null;
      sectioned.forEach((link) => {
        const el = document.getElementById(link.sectionId!);
        if (el && el.offsetTop <= y) current = link.sectionId!;
      });
      setActive(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [links]);

  const isDark = variant === "dark";
  const navBg = isDark
    ? "bg-night/90 border-night-rule"
    : "bg-paper/90 border-rule";
  const brandColor = isDark ? "text-cream" : "text-ink";

  return (
    <nav
      className={`sticky top-0 z-50 backdrop-blur-md backdrop-saturate-150 border-b ${navBg}`}
    >
      <div className="max-w-[1120px] mx-auto px-8 py-[18px] flex items-center justify-between">
        <Link
          href={brandHref}
          className={`font-display-mono font-semibold text-[15px] tracking-tight ${brandColor} no-underline`}
        >
          binary <span className="text-accent">1702</span>
        </Link>
        <ul className="hidden sm:flex gap-7 list-none items-center m-0 p-0">
          {links.map((link) => {
            const isActive = link.sectionId && active === link.sectionId;
            const colorClasses = link.accent
              ? "text-accent hover:text-accent-deep"
              : isDark
                ? isActive
                  ? "text-cream"
                  : "text-cream-mute hover:text-cream"
                : isActive
                  ? "text-ink"
                  : "text-ink-soft hover:text-ink";

            const className = `text-sm font-medium transition-colors no-underline ${colorClasses}`;

            const inner = (
              <>
                {link.label}
                {isActive && (
                  <div className="h-0.5 bg-accent mt-1 rounded-sm" />
                )}
              </>
            );

            if (link.external) {
              return (
                <li key={link.href} className="list-none">
                  <a
                    href={link.href}
                    className={className}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    {inner}
                  </a>
                </li>
              );
            }

            return (
              <li key={link.href} className="list-none">
                <Link href={link.href} className={className}>
                  {inner}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
