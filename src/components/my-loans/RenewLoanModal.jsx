import { createPortal } from "react-dom";
import useModal from "../common/useModal";
import { sumarDias, DIAS_POR_RENOVACION, MAX_RENOVACIONES } from "../../data/misPrestamos";
import { RefreshIcon, XIcon } from "./LoanIcons";
import "./RenewLoanModal.scss";

const RenewLoanModal = ({ prestamo, onConfirmar, onCerrar }) => {
  const ref = useModal(onCerrar);

  const nuevaFecha = sumarDias(prestamo.fechaDevolucion, DIAS_POR_RENOVACION);

  return createPortal(
    <div className="renew-modal__backdrop">
      <button type="button" className="renew-modal__overlay" aria-label="Cerrar" onClick={onCerrar} />
      <div ref={ref} role="dialog" className="renew-modal" aria-modal="true" aria-labelledby="renew-title">
        <button className="renew-modal__close" onClick={onCerrar} aria-label="Cerrar"><XIcon size={18} /></button>
        <div className="renew-modal__icon"><RefreshIcon size={22} /></div>
        <h2 id="renew-title">Renovar préstamo</h2>
        <p className="renew-modal__book"><b>{prestamo.titulo}</b> · {prestamo.autor}</p>

        <dl className="renew-modal__dates">
          <div><dt>Devolución actual</dt><dd>{prestamo.fechaDevolucion}</dd></div>
          <div className="renew-modal__arrow" aria-hidden="true">→</div>
          <div><dt>Nueva devolución</dt><dd className="renew-modal__new">{nuevaFecha}</dd></div>
        </dl>

        <p className="renew-modal__count">
          Esta será tu renovación {prestamo.renovaciones + 1} de {MAX_RENOVACIONES}.
        </p>

        <div className="renew-modal__actions">
          <button className="renew-modal__secondary" onClick={onCerrar}>Cancelar</button>
          <button className="renew-modal__primary" onClick={() => onConfirmar(prestamo, nuevaFecha)}>Confirmar renovación</button>
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default RenewLoanModal;
