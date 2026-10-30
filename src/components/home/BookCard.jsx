import "./BookCard.scss";

const BookCard = ({ coverSrc, category, rating, title, author, onDetails }) => <article className="book-card"><div className="book-card__cover" style={{ backgroundImage: `url(${coverSrc})` }}><span>{category}</span></div><div className="book-card__body"><div className="book-card__rating"><img src="/star.svg" alt="" />{rating}</div><h3>{title}</h3><p>{author}</p><button onClick={onDetails}>Ver Detalles</button></div></article>;

export default BookCard;
