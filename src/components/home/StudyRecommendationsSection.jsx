import { useNavigate } from "react-router-dom";
import SectionHeader from "../common/SectionHeader";
import BookCard from "./BookCard";
import { catalogo } from "../../data/libros";
import { asset } from "../../utils/assetUrl";
import "./StudyRecommendationsSection.scss";

const destacados = ["stewart", "miserables", "miedo", "filosofia", "quijote"];

const StudyRecommendationsSection = ({ onNavigate, onBookUnavailable }) => {
  const navigate = useNavigate();
  return <section className="study-recommendations"><SectionHeader title="Recomendaciones de Estudio" description="Basado en tus preferencias y área de estudio." action={<button className="study-recommendations__all" onClick={() => onNavigate("recomendaciones")}>Ver todo <img src={asset("/Arrow-right.svg")} alt="" /></button>} /><div className="study-recommendations__cards">{destacados.map((id) => { const libro = catalogo[id]; return <BookCard key={id} coverSrc={libro.portada} category={libro.area.toUpperCase()} rating={String(libro.rating)} title={libro.titulo} author={libro.autor} onDetails={() => (libro.ruta ? navigate(libro.ruta) : onBookUnavailable(libro.titulo))} />; })}</div></section>;
};

export default StudyRecommendationsSection;
