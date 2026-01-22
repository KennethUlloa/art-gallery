import { useState } from "react";
import Xmark from "../assets/xmark.svg?react"
import ChevronUp from "../assets/chevronup.svg?react"
import ChevronDown from "../assets/chevrondown.svg?react"

export default function ArtworkModal({ artwork, onClose }) {
  const [isClosing, setIsClosing] = useState(false);
  const [openInfo, setOpenInfo] = useState(true);

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
        <button className="icon-button close-button" onClick={() => handleClose()}>
            <Xmark />
        </button>
        <div
          className={`modal-image ${
            artwork.light ? "light" : "dark"
          }`}
        >
          <img src={artwork.image} alt={artwork.title} />
        </div>

        <div className={`modal-info ${openInfo ? '': 'closed'}`}>
          <button className="icon-button toggle-button" onClick={() => setOpenInfo(!openInfo)}>
            {
              openInfo ? (<ChevronUp />) : (<ChevronDown />)
            }
          </button>
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
