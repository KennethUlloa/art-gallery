import { useEffect, useState } from "react";
import Gallery from "./components/Gallery";
import "./index.css";
import { getData } from "./data/loader";

const langs = [
  {
    value: 'es',
    label: '🇲🇽ES'
  },
  {
    value: 'en',
    label: '🇬🇧EN'
  }
];

export default function App() {
  const [lang, setLang] = useState(langs[0]);
  const [data, setData] = useState({});

  useEffect(() => {
      getData(lang.value).then((data) => {
        setData(data);
        document.title = data.title;
      });
    }, [lang]);

  return (
    <div className="app">
      <header className="header">
        <h1 className="artist-name">{data.title}</h1>
        <p className="subtitle">{data.subtitle}</p>
        <select className="lang-selector" value={lang.value} onChange={(event) => {
          const newLang = langs.find((l) => l.value === event.target.value);

          if (newLang) {
            setLang(newLang);
          }
        }}>
        {
          langs.map((lang) => (
            <option key={lang.value} value={lang.value}>{lang.label}</option>
          ))
        }
      </select>
      </header>
      <Gallery artworks={data.items ?? []} />
    </div>
  );
}

