import { useState } from "react";
import "./AppSidebar.scss";

const navigationItems = [
  ["inicio", "Inicio", "/House.svg"], ["reservas", "Mis Reservas", "/Calendar-days.svg"], ["mis-prestamos", "Mis Préstamos", "/Book-marked.svg"], ["recomendaciones", "Recomendaciones", "/Lightbulb.svg"], ["salas", "Reservas de Sala", "/Users.svg"],
];

// En celular el menú queda plegado detrás del botón "Menú".
const AppSidebar = ({ activeItem, onNavigate }) => {
  const [menuAbierto, setMenuAbierto] = useState(false);
  return (
    <aside className="app-sidebar" aria-label="Navegación principal">
      <div className="app-sidebar__top">
        <div className="app-sidebar__brand"><img src="/Container.svg" alt="" /><strong>BibliotecaUSM</strong></div>
        <button type="button" className="app-sidebar__toggle" aria-expanded={menuAbierto} aria-controls="menu-principal" onClick={() => setMenuAbierto(!menuAbierto)}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">{menuAbierto ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}</svg>
          Menú
        </button>
      </div>
      <nav id="menu-principal" className={menuAbierto ? "app-sidebar__nav app-sidebar__nav--abierto" : "app-sidebar__nav"}>
        {navigationItems.map(([id, label, icon]) => <button className={id === activeItem ? "app-sidebar__item app-sidebar__item--active" : "app-sidebar__item"} aria-current={id === activeItem ? "page" : undefined} key={id} onClick={() => onNavigate(id)}><img src={icon} alt="" />{label}</button>)}
      </nav>
      <div className="app-sidebar__copyright">© {new Date().getFullYear()} Biblioteca USM</div>
    </aside>
  );
};

export default AppSidebar;
