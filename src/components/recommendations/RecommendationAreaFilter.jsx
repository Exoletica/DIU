import PropTypes from "prop-types";
import styles from "./RecommendationAreaFilter.module.scss";

const RecommendationAreaFilter = ({ label, iconSrc, isSelected, onSelect }) => (
  <button
    className={isSelected ? `${styles.filter} ${styles.selected}` : styles.filter}
    type="button"
    aria-pressed={isSelected}
    onClick={onSelect}
  >
    <span
      className={styles.icon}
      style={{ "--icon-url": `url(${iconSrc})` }}
      aria-hidden="true"
    />
    <span>{label}</span>
  </button>
);

RecommendationAreaFilter.propTypes = {
  label: PropTypes.string.isRequired,
  iconSrc: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default RecommendationAreaFilter;
