import PropTypes from "prop-types";
import styles from "./RecommendationBookCard.module.scss";

const RecommendationBookCard = ({ coverSrc, status, statusTone, category, rating, title, authorEdition, description, studyPurpose, availability, onDetails, layout = "grid" }) => {
  const isUnavailable = availability === "En préstamo";
  const actionLabel = isUnavailable ? "Notificar Disponibilidad" : "Ver Detalles";

  return (
    <article className={layout === "list" ? `${styles.card} ${styles.listCard}` : styles.card}>
      <div className={styles.cover} style={{ "--cover-image": coverSrc ? `url(${coverSrc})` : "linear-gradient(160deg, #1e3a6e, #0b2a5b)" }}>
        <span className={statusTone === "loan" ? `${styles.status} ${styles.statusLoan}` : styles.status}>{status}</span>
      </div>
      <div className={styles.content}>
        <div className={styles.metadata}><strong>{category}</strong><span><img src="/star.svg" alt="" />{rating}</span></div>
        <h3>{title}</h3>
        <p className={styles.author}>{authorEdition}</p>
        <p className={styles.description}>{description}</p>
        <div className={styles.purpose}><strong>Propósito de estudio:</strong><em>{studyPurpose}</em></div>
        <button className={isUnavailable ? `${styles.details} ${styles.disabled}` : styles.details} type="button" onClick={onDetails} disabled={isUnavailable}>
          <span>{actionLabel}</span><img src="/Arrow-up-right.svg" alt="" />
        </button>
      </div>
    </article>
  );
};

RecommendationBookCard.propTypes = {
  coverSrc: PropTypes.string,
  status: PropTypes.string.isRequired,
  statusTone: PropTypes.oneOf(["available", "loan"]).isRequired,
  category: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  authorEdition: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  studyPurpose: PropTypes.string.isRequired,
  availability: PropTypes.string.isRequired,
  onDetails: PropTypes.func.isRequired,
  layout: PropTypes.oneOf(["grid", "list"]),
};

export default RecommendationBookCard;
