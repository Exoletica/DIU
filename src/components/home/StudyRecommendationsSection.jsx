import SectionHeader from "../common/SectionHeader";
import BookCard from "./BookCard";
import "./StudyRecommendationsSection.scss";

const books = [
  ["/Book-Card-Wrapper@3x.png", "MATEMÁTICA", "4.9", "Cálculo Trascenden-tes Tempranas", "James Stewart", "libro-4"],
  ["/Frame@3x.png", "LITERATURA", "4.8", "Los Miserables", "Víctor Hugo", "libro-6"],
  ["/Frame1@3x.png", "HISTORIA", "4.8", "El Miedo en Occidente", "Jean Delumeau", "libro-2"],
  ["/Frame2@3x.png", "HISTORIA", "4.9", "Historia de la Filosofía", "Julián Marías", "libro-8"],
  ["/Frame3@3x.png", "LITERATURA", "5", "Don Quijote de la Mancha", "Miguel de Cervantes", "libro-3"],
];

const StudyRecommendationsSection = ({ onNavigate }) => <section className="study-recommendations"><SectionHeader title="Recomendaciones de Estudio" description="Basado en tus preferencias y área de estudio." action={<button className="study-recommendations__all" onClick={() => onNavigate("recomendaciones")}>Ver todo <img src="/Arrow-right.svg" alt="" /></button>} /><div className="study-recommendations__cards">{books.map(([coverSrc, category, rating, title, author, destination]) => <BookCard key={title} coverSrc={coverSrc} category={category} rating={rating} title={title} author={author} onDetails={() => onNavigate(destination)} />)}</div></section>;

export default StudyRecommendationsSection;
