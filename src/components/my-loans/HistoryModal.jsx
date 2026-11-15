import { createPortal } from "react-dom";
import useModal from "../common/useModal";
import { diasEntre, MULTA_DIARIA } from "../../data/misPrestamos";
import { HistoryIcon, XIcon } from "./LoanIcons";
import "./HistoryModal.scss";

const HistoryModal = ({ historial, onCerrar }) => {
  const ref = useModal(onCerrar);

  return createPortal(
    <div className="history-modal__backdrop">
      <button type="button" className="history-modal__overlay" aria-label="Cerrar" onClick={onCerrar} />
      <div ref={ref} role="dialog" className="history-modal" aria-modal="true" aria-labelledby="history-title">
        <header className="history-modal__head">
          <h2 id="history-title"><HistoryIcon size={18} /> Historial de Préstamos</h2>
          <button onClick={onCerrar} aria-label="Cerrar"><XIcon size={18} /></button>
        </header>
        <p className="history-modal__sub">Libros que ya devolviste.</p>

        {historial.length === 0 ? (
          <p className="history-modal__empty">Aún no tienes préstamos devueltos.</p>
        ) : (
          <ul className="history-modal__list">
            {historial.map((h) => {
              const atraso = Math.max(0, diasEntre(h.fechaDevolucion, h.fechaEntrega));
              return (
                <li key={h.id}>
                  <div>
                    <b>{h.titulo}</b>
                    <small>{h.autor}</small>
                  </div>
                  <div className="history-modal__dates">
                    <span>Prestado: {h.fechaPrestamo}</span>
                    <span>Devuelto: {h.fechaEntrega}</span>
                  </div>
                  {atraso > 0 ? (
                    <span className="history-modal__tag history-modal__tag--late">
                      {atraso} {atraso === 1 ? "día" : "días"} de atraso · ${(atraso * MULTA_DIARIA).toLocaleString("es-CL")}
                    </span>
                  ) : (
                    <span className="history-modal__tag">A tiempo</span>
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>,
    document.body,
  );
};

export default HistoryModal;
