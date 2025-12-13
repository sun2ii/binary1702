import fs from "fs";
import path from "path";
import matter from "gray-matter";

const LOGS_DIR = path.join(process.cwd(), "logs");

export interface LogFrontmatter {
  id: string;
  title: string;
  date: string;
  project?: string;
  tags?: string[];
  tech?: string[];
  [key: string]: unknown;
}

export interface Log {
  id: string;
  frontmatter: LogFrontmatter;
  content: string;
}

export function getAllLogs(): Log[] {
  if (!fs.existsSync(LOGS_DIR)) {
    return [];
  }

  const files = fs.readdirSync(LOGS_DIR).filter((f) => f.endsWith(".md"));

  const logs = files.map((filename) => {
    const filePath = path.join(LOGS_DIR, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);
    const id = filename.replace(/\.md$/, "");

    return {
      id,
      frontmatter: { id, ...data } as LogFrontmatter,
      content,
    };
  });

  // Sort newest → oldest by date
  return logs.sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime()
  );
}

export function getLogById(id: string): Log | null {
  const filePath = path.join(LOGS_DIR, `${id}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    id,
    frontmatter: { id, ...data } as LogFrontmatter,
    content,
  };
}

export function getRecentLogs(count: number = 3): Log[] {
  return getAllLogs().slice(0, count);
}
