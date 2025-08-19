import { mockGifs } from "../mock/gifs.mock";

export default function GifsApp() {
  return (
    <>
      {/* Header */}
      <div className="content-center">
        <h1>Buscador de Gifs</h1>
        <p>Descubre y comparte el gif perfecto</p>
      </div>
      {/* Search bar */}
      <div className="search-container">
        <input type="text" placeholder="Buscar Gif" />
        <button>Buscar</button>
      </div>
      {/* Trending searches */}
      <div className="previous-searches">
        <h2>Busqueda previas</h2>
        <ul className="previous-searches-list">
          <li>Goku</li>
          <li>Saitama</li>
          <li>Naruto</li>
          <li>Dragon Ball</li>
        </ul>
      </div>
      {/* Gifs */}
      <div className="gifs-container">
        {mockGifs.map((gif) => (
          <div key={gif.id} className="gif-card">
            <img src={gif.url} alt={gif.title} />
            <h3>{gif.title}</h3>
            <p>
              {gif.width}x{gif.height} (1.5mb)
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
