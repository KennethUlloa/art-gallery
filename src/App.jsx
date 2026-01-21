import Gallery from "./components/Gallery";
import "./index.css";

export default function App() {
  return (
    <div className="app">
      <header className="header">
        <h1 className="artist-name">Kenneth Ulloa</h1>
        <p className="subtitle">Selected Works</p>
      </header>
      <Gallery />
    </div>
  );
}

