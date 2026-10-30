import { useState } from "react";
import "./HeroSearchBanner.scss";

const suggestions = ["E-books", "Tesis de Grado", "Revistas Científicas"];

const HeroSearchBanner = ({ onSearch, onSuggestionSelect }) => {
  const [query, setQuery] = useState("");
  const submitSearch = (event) => { event.preventDefault(); onSearch(query); };
  return <section className="hero-search-banner" aria-labelledby="hero-title">
    <div className="hero-search-banner__content">
      <span className="hero-search-banner__tag">BIENVENIDO A TU BIBLIOTECA</span>
      <h1 id="hero-title">Descubre un mundo de <em>conocimiento</em> sin límites.</h1>
      <p>Accede a miles de recursos académicos, reserva espacios de estudio colaborativo y gestiona tus préstamos de forma sencilla y eficiente.</p>
      <form onSubmit={submitSearch}><label><img src="/Search.svg" alt="" /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Título, autor, materia o ISBN..." aria-label="Buscar en BibliotecaUSM" /></label><button type="submit">Buscar</button></form>
      <div className="hero-search-banner__suggestions"><strong>Sugerencias:</strong>{suggestions.map((suggestion) => <button key={suggestion} onClick={() => onSuggestionSelect(suggestion)}>{suggestion}</button>)}</div>
    </div>
  </section>;
};

export default HeroSearchBanner;
