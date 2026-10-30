import "./SiteFooter.scss";

const SiteFooter = ({ onNavigate }) => (
  <footer className="site-footer">
    <div className="site-footer__main">
      <section className="site-footer__brand"><div><img src="/Container.svg" alt="" /><strong>BibliotecaUSM</strong></div><p>Comprometidos con la excelencia académica y el acceso universal al conocimiento para toda la comunidad USM.</p></section>
      <section><h3>Servicios</h3><button onClick={() => onNavigate("catalogo")}>Catálogo en línea</button><button onClick={() => onNavigate("salas")}>Reserva de salas</button><button onClick={() => onNavigate("prestamos")}>Renovación de libros</button></section>
      <section><h3>Ayuda</h3><button onClick={() => onNavigate("contacto")}>Asistencia en línea</button></section>
      <section><h3>Contacto</h3><p><b>Email:</b> biblioteca@usm.cl</p><p><b>Teléfono:</b> +56 32 265 4000</p></section>
    </div>
    <div className="site-footer__legal"><span>© 2024 Universidad Técnica Federico Santa María. Todos los derechos reservados.</span><button onClick={() => onNavigate("privacidad")}>Política de Privacidad</button><button onClick={() => onNavigate("terminos")}>Términos de Uso</button></div>
  </footer>
);

export default SiteFooter;
