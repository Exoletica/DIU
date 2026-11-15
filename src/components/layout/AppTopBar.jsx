import { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate, useSearchParams } from "react-router-dom";
import { rutaBusqueda } from "../../routes";
import "./AppTopBar.scss";

const AppTopBar = ({ breadcrumbs, userName = "Estudiante", avatarSrc = "/Container.svg", notificationCount = 1, showSearch = false, onBreadcrumbNavigate = null }) => {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const [busqueda, setBusqueda] = useState(params.get("q") ?? "");

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
            <img src="/Search.svg" alt="" />
            <input value={busqueda} onChange={(event) => setBusqueda(event.target.value)} placeholder="Buscar libros, autores, materias..." aria-label="Buscar en el catálogo" type="search" />
          </form>
        )}
        <div className="app-top-bar__user"><span className="app-top-bar__notification" role="img" aria-label={notificationCount > 0 ? `${notificationCount} notificaciones` : "Sin notificaciones"}><img src="/notification-bell.svg" alt="" />{notificationCount > 0 && <i aria-hidden="true" />}</span><img className="app-top-bar__avatar" src={avatarSrc} alt="" /><span>{userName}</span></div>
      </div>
    </header>
  );
};

AppTopBar.propTypes = {
  breadcrumbs: PropTypes.arrayOf(PropTypes.string).isRequired,
  userName: PropTypes.string,
  avatarSrc: PropTypes.string,
  notificationCount: PropTypes.number,
  showSearch: PropTypes.bool,
  onBreadcrumbNavigate: PropTypes.func,
};

export default AppTopBar;
