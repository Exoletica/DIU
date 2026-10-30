import "./ResourceTile.scss";

const ResourceTile = ({ iconSrc, title, description, onClick }) => <button className="resource-tile" onClick={onClick}><img src={iconSrc} alt="" /><span><strong>{title}</strong><small>{description}</small></span></button>;

export default ResourceTile;
