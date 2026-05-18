import { getAllArtifacts } from "./data";
import GalleryItem from "./GalleryItem";

export default function GalleryPage() {
  const artifacts = getAllArtifacts();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Gallery</h1>
        <p className="text-[#888]">Visual technical artifacts</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {artifacts.map((artifact) => (
          <GalleryItem key={artifact.id} artifact={artifact} />
        ))}
      </div>
    </div>
  );
}
