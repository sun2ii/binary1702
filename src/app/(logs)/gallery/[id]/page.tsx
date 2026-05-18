import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllArtifacts, getArtifactById } from "../data";
import Mermaid from "../Mermaid";

export async function generateStaticParams() {
  const artifacts = getAllArtifacts();
  return artifacts.map((artifact) => ({
    id: artifact.id,
  }));
}

interface ArtifactPageProps {
  params: Promise<{ id: string }>;
}

export default async function ArtifactPage({ params }: ArtifactPageProps) {
  const { id } = await params;
  const artifact = getArtifactById(id);

  if (!artifact) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Link
        href="/gallery"
        className="text-[#888] hover:text-white mb-6 inline-block"
      >
        ← Back to Gallery
      </Link>

      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{artifact.title}</h1>
        <p className="text-xl text-[#888] italic">{artifact.insight}</p>
      </div>

      <div className="bg-[#0a0a0a] border border-[#222] rounded-lg mb-8 p-8 min-h-[400px] flex items-center justify-center">
        <Mermaid chart={artifact.mermaid} className="w-full max-w-2xl" />
      </div>

      <div className="bg-[#0a0a0a] border border-[#222] rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Insights</h2>
        <ul className="space-y-3">
          {artifact.bullets.map((bullet, index) => (
            <li key={index} className="flex items-start">
              <span className="text-[#888] mr-2">•</span>
              <span className="text-[#ccc]">{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
