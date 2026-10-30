import "./BookDetailFooter.scss";
const BookDetailFooter = ({ className = "", globe }) => {
  return (
    <section className="container132">
      <img className="line-icon32" alt="" src="/prestamos/Line1.svg" />
      <div className="container-row-13">
        <div className="polticas-de-prstamo3">Políticas de Préstamo</div>
        <div className="polticas-de-prstamo3">Guía de Usuario</div>
        <div className="polticas-de-prstamo3">Soporte Biblioteca</div>
      </div>
      <div className="container-row-26">
        <img className="globe-icon3" alt="" src="/prestamos/globe.svg" />
        <div className="red-de-bibliotecas3">
          Red de Bibliotecas USM — Chile, 2024
        </div>
      </div>
    </section>
  );
};
export default BookDetailFooter;
