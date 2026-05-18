import Link from "next/link";

export function MarketingFooter({
  mspLink = true,
}: {
  /** Show the "For MSP partners" footer link (true on homepage, false on /msp). */
  mspLink?: boolean;
}) {
  return (
    <footer className="border-t border-rule py-8 pb-14 text-ink-mute font-display-mono text-[13px]">
      <div className="max-w-[1120px] mx-auto px-8 flex flex-wrap items-center justify-between gap-4">
        <div>Binary 1702 LLC · Wyoming · © 2026</div>
        <div className="flex items-center gap-5">
          <Link
            href="/logs"
            className="text-ink-soft hover:text-accent no-underline transition-colors"
          >
            Execution log →
          </Link>
          {mspLink && (
            <Link
              href="/msp"
              className="text-ink-soft hover:text-accent no-underline transition-colors"
            >
              For MSP partners →
            </Link>
          )}
          {!mspLink && (
            <Link
              href="/"
              className="text-ink-soft hover:text-accent no-underline transition-colors"
            >
              ← binary1702.com
            </Link>
          )}
        </div>
      </div>
    </footer>
  );
}
