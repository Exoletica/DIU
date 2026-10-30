import "./SectionHeader.scss";

const SectionHeader = ({ title, description, action }) => (
  <div className="section-header">
    <div className="section-header__copy">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
    {action && <div className="section-header__action">{action}</div>}
  </div>
);

export default SectionHeader;
