import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate, useSearchParams } from "react-router-dom";
import { rutaBusqueda } from "../../routes";
import { asset } from "../../utils/assetUrl";
import useNotificaciones from "./useNotificaciones";
import "./AppTopBar.scss";

const AppTopBar = ({ breadcrumbs, userName = "Estudiante", avatarSrc = asset("/Container.svg"), prestamos, showSearch = false, onBreadcrumbNavigate = null }) => {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const consulta = params.get("q") ?? "";
  const [busqueda, setBusqueda] = useState(consulta);

  // Mantiene la caja igual a la búsqueda de la URL (por ejemplo, al usar "Atrás").
  useEffect(() => setBusqueda(consulta), [consulta]);

  const avisos = useNotificaciones(prestamos);
  const [avisosAbiertos, setAvisosAbiertos] = useState(false);
  const campanaRef = useRef(null);

  // Cierra el panel de avisos con Escape o al hacer clic fuera.
  useEffect(() => {
    if (!avisosAbiertos) return undefined;
    const cerrar = (event) => {
      if (event.key === "Escape" || (event.type === "mousedown" && !campanaRef.current?.contains(event.target))) setAvisosAbiertos(false);
    };
    document.addEventListener("keydown", cerrar);
    document.addEventListener("mousedown", cerrar);
    return () => {
      document.removeEventListener("keydown", cerrar);
      document.removeEventListener("mousedown", cerrar);
    };
  }, [avisosAbiertos]);

  const buscar = (event) => {
    event.preventDefault();
    navigate(rutaBusqueda(busqueda));
  };

  return (
    <header className="app-top-bar">
      <div className="app-top-bar__content">
        <nav className="app-top-bar__crumbs" aria-label="Migas de pan">
          {breadcrumbs.map((crumb, index) => (
            <span key={crumb} className={index === breadcrumbs.length - 1 ? "app-top-bar__current" : ""}>
              {index > 0 && <span aria-hidden="true">/</span>}
              {index === 0 && onBreadcrumbNavigate ? <button type="button" onClick={onBreadcrumbNavigate}>{crumb}</button> : crumb}
            </span>
          ))}
        </nav>
        {showSearch && (
          <form className="app-top-bar__search" role="search" onSubmit={buscar}>
            <img src={asset("/Search.svg")} alt="" />
            <input value={busqueda} onChange={(event) => setBusqueda(event.target.value)} placeholder="Buscar libros, autores, materias..." aria-label="Buscar en el catálogo" type="search" />
          </form>
        )}
        <div className="app-top-bar__user">
          <div className="app-top-bar__notifications" ref={campanaRef}>
            <button type="button" className="app-top-bar__notification" aria-expanded={avisosAbiertos} aria-controls="panel-avisos" aria-label={avisos.length > 0 ? `Notificaciones: ${avisos.length} sin leer` : "Notificaciones: no hay avisos"} onClick={() => setAvisosAbiertos(!avisosAbiertos)}>
              <img src={asset("/notification-bell.svg")} alt="" />{avisos.length > 0 && <i aria-hidden="true" />}
            </button>
            {avisosAbiertos && (
              <div className="app-top-bar__panel" id="panel-avisos" role="region" aria-label="Notificaciones">
                <b>Notificaciones</b>
                {avisos.length === 0 ? <p>No tienes avisos pendientes.</p> : (
                  <ul>
                    {avisos.map((aviso) => (
                      <li key={aviso.id}>
                        <button type="button" className={aviso.alerta ? "app-top-bar__aviso app-top-bar__aviso--alerta" : "app-top-bar__aviso"} onClick={() => { setAvisosAbiertos(false); navigate(aviso.ruta); }}>{aviso.texto}</button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
          <img className="app-top-bar__avatar" src={avatarSrc} alt="" /><span>{userName}</span>
        </div>
      </div>
    </header>
  );
};

AppTopBar.propTypes = {
  breadcrumbs: PropTypes.arrayOf(PropTypes.string).isRequired,
  userName: PropTypes.string,
  avatarSrc: PropTypes.string,
  prestamos: PropTypes.arrayOf(PropTypes.object),
  showSearch: PropTypes.bool,
  onBreadcrumbNavigate: PropTypes.func,
};

export default AppTopBar;
