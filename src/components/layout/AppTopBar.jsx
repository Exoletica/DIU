import PropTypes from "prop-types";
import "./AppTopBar.scss";

const AppTopBar = ({ breadcrumbs, userName, avatarSrc, notificationCount, search, onBreadcrumbNavigate }) => (
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
      {search && <label className="app-top-bar__search"><img src="/Search.svg" alt="" /><input value={search.value} onChange={(event) => search.onChange(event.target.value)} placeholder={search.placeholder} aria-label={search.ariaLabel} type="search" /></label>}
      <div className="app-top-bar__user"><span className="app-top-bar__notification" role="img" aria-label="Notificaciones"><img src="/notification-bell.svg" alt="" />{notificationCount > 0 && <i aria-hidden="true" />}</span><img className="app-top-bar__avatar" src={avatarSrc} alt="" /><span>{userName}</span></div>
    </div>
  </header>
);

AppTopBar.propTypes = {
  breadcrumbs: PropTypes.arrayOf(PropTypes.string).isRequired,
  userName: PropTypes.string.isRequired,
  avatarSrc: PropTypes.string.isRequired,
  notificationCount: PropTypes.number.isRequired,
  search: PropTypes.shape({ value: PropTypes.string.isRequired, onChange: PropTypes.func.isRequired, placeholder: PropTypes.string.isRequired, ariaLabel: PropTypes.string.isRequired }),
  onBreadcrumbNavigate: PropTypes.func,
};

AppTopBar.defaultProps = { search: null, onBreadcrumbNavigate: null };
export default AppTopBar;
