import "./ToolCard.scss";

// Tarjeta de una herramienta (Libros Físicos, Arduinos, Calculadoras, etc.)
// Si no se pasa onAction, el botón queda deshabilitado.
const ToolCard = ({ imagen, titulo, descripcion, accion = "Ver Detalles", onAction, deshabilitado = false }) => (
  <article className="tool-card">
    <img className="tool-card__image" src={imagen} alt={titulo} />
    <div className="tool-card__body">
      <img className="tool-card__star" src="/prestamos/star.svg" alt="" />
      <h3>{titulo}</h3>
      {descripcion && <p>{descripcion}</p>}
      <button
        type="button"
        className="tool-card__button"
        onClick={onAction}
        disabled={deshabilitado || !onAction}
      >
        {accion}
      </button>
    </div>
  </article>
);

export default ToolCard;
