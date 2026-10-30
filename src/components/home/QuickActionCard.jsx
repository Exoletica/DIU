import "./QuickActionCard.scss";

const QuickActionCard = ({ iconSrc, title, description, tone, onClick }) => <button className={`quick-action-card quick-action-card--${tone}`} onClick={onClick}><span><img src={iconSrc} alt="" /></span><strong>{title}</strong><small>{description}</small></button>;

export default QuickActionCard;
