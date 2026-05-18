import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { getLogById, getAllLogs } from "@/lib/logs";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const logs = getAllLogs();
  return logs.map((log) => ({ id: log.id }));
}

export default async function LogPage({ params }: Props) {
  const { id } = await params;
  const log = getLogById(id);

  if (!log) {
    notFound();
  }

  return (
    <article>
      <Link href="/logs" className="text-sm text-[#888] hover:text-white mb-6 inline-block">
        ← Back to logs
      </Link>

      <header className="mb-8 border-b border-[#222] pb-6">
        <h1 className="text-2xl font-semibold mb-2">{log.frontmatter.title}</h1>
        <div className="flex items-center gap-3 text-sm">
          <span className="text-[#888]">{log.frontmatter.date}</span>
          {log.frontmatter.project && (
            <>
              <span className="text-[#444]">•</span>
              <span className="text-[#f59e0b]">{log.frontmatter.project}</span>
            </>
          )}
        </div>
        {log.frontmatter.tech && log.frontmatter.tech.length > 0 && (
          <div className="mt-2 flex gap-2 flex-wrap">
            {log.frontmatter.tech.map((t) => (
              <span
                key={t}
                className="text-xs bg-[#1a2a1a] text-[#4ade80] px-2 py-1 rounded"
              >
                {t}
              </span>
            ))}
          </div>
        )}
        {log.frontmatter.tags && log.frontmatter.tags.length > 0 && (
          <div className="mt-2 flex gap-2 flex-wrap">
            {log.frontmatter.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-[#1a1a1a] px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      <div className="prose">
        <ReactMarkdown>{log.content}</ReactMarkdown>
      </div>
    </article>
  );
}
