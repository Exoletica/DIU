import "./AppTopBar.scss";

const AppTopBar = ({ breadcrumbs, userName, avatarSrc, notificationCount }) => (
  <header className="app-top-bar">
    <div className="app-top-bar__content">
      <div className="app-top-bar__crumbs">{breadcrumbs.map((crumb, index) => <span key={crumb} className={index === breadcrumbs.length - 1 ? "app-top-bar__current" : ""}>{index > 0 && <span aria-hidden="true">/</span>}{crumb}</span>)}</div>
      <div className="app-top-bar__user"><span className="app-top-bar__notification" role="img" aria-label="Notificaciones"><img src="/notification-bell.svg" alt="" />{notificationCount > 0 && <i aria-hidden="true" />}</span><img className="app-top-bar__avatar" src={avatarSrc} alt="" /><span>{userName}</span></div>
    </div>
  </header>
);

export default AppTopBar;
