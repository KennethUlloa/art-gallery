import { useState } from "react";
import ArtworkCard from "./ArtworkCard";
import ArtworkModal from "./ArtworkModal";

export default function Gallery({ artworks }) {
  const [selectedArtwork, setSelectedArtwork] = useState(null);

  return (
    <>
      <div className="masonry">
        {artworks.map((art) => (
          <ArtworkCard
            key={art.id}
            artwork={art}
            onClick={() => setSelectedArtwork(art)}
          />
        ))}
      </div>

      {selectedArtwork && (
        <ArtworkModal
          artwork={selectedArtwork}
          onClose={() => setSelectedArtwork(null)}
        />
      )}
    </>
  );
}
