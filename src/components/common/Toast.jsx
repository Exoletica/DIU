import "./Toast.scss";

// Mensaje temporal anunciado a lectores de pantalla. Se usa junto a useToast().
const Toast = ({ mensaje }) => (
  <div className="app-toast-region" role="status" aria-live="polite">
    {mensaje && <div className="app-toast">{mensaje}</div>}
  </div>
);

export default Toast;
