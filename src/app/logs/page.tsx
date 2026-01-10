import Link from "next/link";
import { getAllLogs } from "@/lib/logs";

export default function LogsPage() {
  const logs = getAllLogs();

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <div className="mb-8 space-y-2">
        <h1 className="text-2xl md:text-3xl font-semibold">Work Log</h1>
        <p className="text-[var(--muted)] text-sm md:text-base">
          Public record of what we ship, when it ships, and why work stops.
        </p>
      </div>

      {logs.length === 0 ? (
        <p className="text-[#888]">No logs yet.</p>
      ) : (
        <ul className="space-y-2">
          {logs.map((log) => (
            <li key={log.id}>
              <Link
                href={`/logs/${log.id}`}
                className="block hover:bg-[#111] -mx-3 px-3 py-2 rounded"
              >
                <span className="font-medium">{log.frontmatter.title}</span>
                <span className="text-[#888] text-sm ml-3">
                  {log.frontmatter.date}
                </span>
                {log.frontmatter.tags && log.frontmatter.tags.length > 0 && (
                  <span className="text-[#666] text-xs ml-3">
                    {log.frontmatter.tags.join(", ")}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
