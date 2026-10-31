import { CheckIcon, ClockIcon, XIcon } from "./LoanIcons";
import "./RequestsList.scss";

const estados = {
  pendiente: { label: "Pendiente", Icon: ClockIcon },
  aprobada: { label: "Aprobada", Icon: CheckIcon },
  rechazada: { label: "Rechazada", Icon: XIcon },
};

const RequestsList = ({ solicitudes, onCancelar }) => {
  if (solicitudes.length === 0) {
    return <p className="requests__empty">No tienes solicitudes en curso.</p>;
  }

  return (
    <ul className="requests">
      {solicitudes.map((s) => {
        const { label, Icon } = estados[s.estado];
        return (
          <li key={s.id} className={`requests__item requests__item--${s.estado}`}>
            <span className="requests__icon"><Icon size={18} /></span>
            <div className="requests__info">
              <small>{s.tipo} · enviada el {s.fecha}</small>
              <b>{s.titulo}</b>
              <span>{s.detalle}</span>
            </div>
            <span className={`requests__status requests__status--${s.estado}`}>{label}</span>
            {s.estado === "pendiente" && (
              <button className="requests__cancel" onClick={() => onCancelar(s)}>Cancelar</button>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default RequestsList;
