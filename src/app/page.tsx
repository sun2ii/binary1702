import Link from "next/link";
import { getRecentLogs } from "@/lib/logs";
import { siteConfig } from "@/config/site";

const projectColors: Record<string, string> = {
  "Binary1702": "#f59e0b",
  "Japanese Intent Game": "#a78bfa",
};

function getProjectColor(project: string): string {
  return projectColors[project] || "#888";
}

export default function Home() {
  const recentLogs = getRecentLogs(3);

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <section>
        <h1 className="text-2xl font-semibold mb-2">
          {siteConfig.description}
        </h1>
        <p className="text-[#666] text-sm">{siteConfig.tagline}</p>
        <p className="text-[#444] text-xs">
          Not a blog. Not a portfolio. Not a roadmap.
        </p>
      </section>


      {/* Recent Logs */}
      <section>
        <h2 className="text-sm uppercase tracking-wider text-[#888] mb-4">
          Recent Logs
        </h2>
        {recentLogs.length === 0 ? (
          <p className="text-[#888] text-sm">No logs yet.</p>
        ) : (
          <ul className="space-y-1">
            {recentLogs.map((log) => (
              <li key={log.id}>
                <Link
                  href={`/logs/${log.id}`}
                  className="block hover:bg-[#111] -mx-3 px-3 py-2 rounded"
                >
                  {log.frontmatter.project && (
                    <span
                      className="text-xs border border-[#333] px-2 py-0.5 rounded mr-2"
                      style={{ color: getProjectColor(log.frontmatter.project) }}
                    >
                      {log.frontmatter.project}
                    </span>
                  )}
                  <span className="font-medium">{log.frontmatter.title}</span>
                  <span className="text-[#888] text-sm ml-2">
                    {log.frontmatter.date}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
        {recentLogs.length > 0 && (
          <Link href="/logs" className="text-sm mt-6 inline-block">
            View all logs →
          </Link>
        )}
      </section>

      {/* External Links */}
      <section>
        <h2 className="text-sm uppercase tracking-wider text-[#888] mb-4">
          Elsewhere
        </h2>
        <div className="flex flex-col gap-2">
          {siteConfig.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm"
            >
              {link.label}
            </a>
          ))}
        </div>
      </section>

      {/* Human Anchor */}
      <p className="text-[#666] text-xs">
        Built and maintained by Ben Basuni.
      </p>

    </div>
  );
}
