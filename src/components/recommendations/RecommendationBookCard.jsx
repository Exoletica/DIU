import PropTypes from "prop-types";
import styles from "./RecommendationBookCard.module.scss";

const RecommendationBookCard = ({ coverSrc, category, rating, title, authorEdition, description, studyPurpose, available, onDetails, layout = "grid" }) => {
  const actionLabel = available ? "Ver Detalles" : "Notificar Disponibilidad";

  return (
    <article className={layout === "list" ? `${styles.card} ${styles.listCard}` : styles.card}>
      <div className={styles.cover} style={{ "--cover-image": coverSrc ? `url(${coverSrc})` : "linear-gradient(160deg, #1e3a6e, #0b2a5b)" }}>
        <span className={available ? styles.status : `${styles.status} ${styles.statusLoan}`}>{available ? "Disponible" : "En Préstamo"}</span>
      </div>
      <div className={styles.content}>
        <div className={styles.metadata}><strong>{category}</strong><span><img src="/star.svg" alt="" />{rating}</span></div>
        <h3>{title}</h3>
        <p className={styles.author}>{authorEdition}</p>
        <p className={styles.description}>{description}</p>
        <div className={styles.purpose}><strong>Propósito de estudio:</strong><em>{studyPurpose}</em></div>
        <button className={styles.details} type="button" onClick={onDetails}>
          <span>{actionLabel}</span><img src="/Arrow-up-right.svg" alt="" />
        </button>
      </div>
    </article>
  );
};

RecommendationBookCard.propTypes = {
  coverSrc: PropTypes.string,
  category: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  authorEdition: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  studyPurpose: PropTypes.string.isRequired,
  available: PropTypes.bool.isRequired,
  onDetails: PropTypes.func.isRequired,
  layout: PropTypes.oneOf(["grid", "list"]),
};

export default RecommendationBookCard;
