import { useEffect, useState } from "react";
import { getArtworks } from "../data/loader";
import ArtworkCard from "./ArtworkCard";
import ArtworkModal from "./ArtworkModal";

export default function Gallery() {
  const [selectedArtwork, setSelectedArtwork] = useState(null);
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    getArtworks().then((data) => setArtworks(data));
  }, []);

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
