import { estadoPrestamo, motivoNoRenovable, textoVencimiento, multaAcumulada, MAX_RENOVACIONES } from "../../data/misPrestamos";
import { CalendarIcon, ClockIcon, RefreshIcon, PinIcon } from "./LoanIcons";
import "./LoanCard.scss";

const etiquetas = { activo: "Activo", renovado: "Renovado", atrasado: "Atrasado" };

// variante "devolver": versión de la pestaña "Por Devolver" (muestra urgencia y dónde devolver)
const LoanCard = ({ prestamo, variante = "activo", onRenovar }) => {
  const estado = estadoPrestamo(prestamo);
  const motivo = motivoNoRenovable(prestamo);
  const multa = multaAcumulada(prestamo);

  return (
    <article className={`loan-card loan-card--${estado}`}>
      <img className="loan-card__cover" src={prestamo.portada} alt={`Portada de ${prestamo.titulo}`} />
      <div className="loan-card__body">
        <div className="loan-card__head">
          <div>
            <h3>{prestamo.titulo}</h3>
            <p>{prestamo.autor}</p>
          </div>
          <span className={`loan-badge loan-badge--${estado}`}>{etiquetas[estado]}</span>
        </div>

        {variante === "devolver" ? (
          <div className="loan-card__urgency">
            <strong>{textoVencimiento(prestamo)}</strong>
            {multa > 0 && <span>Multa acumulada: ${multa.toLocaleString("es-CL")} CLP</span>}
            {motivo && <span>{motivo}</span>}
          </div>
        ) : (
          <div className="loan-card__dates">
            <div>
              <CalendarIcon size={14} />
              <div><small>Fecha préstamo</small><b>{prestamo.fechaPrestamo}</b></div>
            </div>
            <div>
              <ClockIcon size={14} />
              <div><small>Fecha devolución</small><b className="loan-card__due">{prestamo.fechaDevolucion}</b></div>
            </div>
          </div>
        )}

        <div className="loan-card__foot">
          {variante === "devolver" ? (
            <span className="loan-card__meta"><PinIcon size={13} /> {prestamo.ubicacion}</span>
          ) : (
            <span className="loan-card__meta">ISBN: {prestamo.isbn}</span>
          )}

          {variante === "devolver" ? (
            <span className="loan-card__meta">Renovaciones: {prestamo.renovaciones}/{MAX_RENOVACIONES}</span>
          ) : (
            <button
              className="loan-card__renew"
              disabled={Boolean(motivo)}
              title={motivo ?? "Extiende tu plazo de devolución"}
              onClick={() => onRenovar(prestamo)}
            >
              <RefreshIcon size={14} /> Renovar Préstamo
            </button>
          )}
        </div>
        {variante !== "devolver" && motivo && <p className="loan-card__reason">{motivo}</p>}
      </div>
    </article>
  );
};

export default LoanCard;
