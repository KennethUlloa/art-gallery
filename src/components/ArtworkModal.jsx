import { useState } from "react";
import Xmark from "../assets/xmark.svg?react"

export default function ArtworkModal({ artwork, onClose }) {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(onClose, 250); // must match exit animation duration
  };

  return (
    <div
      className={`backdrop ${isClosing ? "exit" : "enter"}`}
      onClick={handleClose}
    >
      <div
        className={`modal ${isClosing ? "exit" : "enter"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-button" onClick={() => handleClose()}>
            <Xmark />
        </button>
        <div
          className={`modal-image ${
            artwork.light ? "light" : "dark"
          }`}
        >
          <img src={artwork.image} alt={artwork.title} />
        </div>

        <div className="modal-info">
          <h2>{artwork.title}</h2>
          <p className="year">{artwork.year}</p>
          <p>{artwork.description}</p>

          <div className="tags">
            {artwork.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
