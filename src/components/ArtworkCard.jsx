

export default function ArtworkCard({ artwork, onClick }) {
  return (
    <div className={`artwork-card ${artwork.light ? "light": "dark"}`} onClick={onClick}>
      <img src={artwork.image} alt={artwork.title} />
    </div>
  );
}
