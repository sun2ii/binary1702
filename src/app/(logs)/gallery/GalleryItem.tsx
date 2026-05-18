import Link from "next/link";
import { Artifact } from "./data";
import Mermaid from "./Mermaid";

interface GalleryItemProps {
  artifact: Artifact;
}

export default function GalleryItem({ artifact }: GalleryItemProps) {
  return (
    <Link href={`/gallery/${artifact.id}`}>
      <div className="rounded-lg overflow-hidden border border-[#222] hover:border-[#444] transition-colors p-4 bg-[#0a0a0a]">
        <div className="bg-[#111] rounded mb-3 flex items-center justify-center p-6 min-h-[250px]">
          <Mermaid chart={artifact.mermaid} className="w-full" />
        </div>
        <h3 className="font-semibold text-lg mb-2">{artifact.title}</h3>
        <p className="text-sm text-[#888]">{artifact.insight}</p>
      </div>
    </Link>
  );
}
