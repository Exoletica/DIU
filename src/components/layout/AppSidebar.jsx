import "./AppSidebar.scss";

const navigationItems = [
  ["inicio", "Inicio", "/House.svg"], ["reservas", "Mis Reservas", "/Calendar-days.svg"], ["mis-prestamos", "Mis Préstamos", "/Book-marked.svg"], ["recomendaciones", "Recomendaciones", "/Lightbulb.svg"], ["salas", "Reservas de Sala", "/Users.svg"],
];

const AppSidebar = ({ activeItem, onNavigate }) => (
  <aside className="app-sidebar" aria-label="Navegación principal">
    <div className="app-sidebar__brand"><img src="/Container.svg" alt="" /><strong>BibliotecaUSM</strong></div>
    <nav className="app-sidebar__nav">
      {navigationItems.map(([id, label, icon]) => <button className={id === activeItem ? "app-sidebar__item app-sidebar__item--active" : "app-sidebar__item"} aria-current={id === activeItem ? "page" : undefined} key={id} onClick={() => onNavigate(id)}><img src={icon} alt="" />{label}</button>)}
    </nav>
    <div className="app-sidebar__copyright">© {new Date().getFullYear()} Biblioteca USM</div>
  </aside>
);

export default AppSidebar;
