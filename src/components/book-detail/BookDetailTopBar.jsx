import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./BookDetailTopBar.scss";
const BookDetailTopBar = ({ className = "" }) => {
  const navigate = useNavigate();
  const onInicioTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);
  const onTextboxContainerClick = useCallback(() => {
    // Please sync "Resultados de Búsqueda" to the project
  }, []);
  return (
    <header className="container122">
      <img className="line-icon29" alt="" src="/prestamos/Line1.svg" />
      <div className="container123">
        <div className="container124">
          <div className="container-row-04">
            <div className="inicio17" onClick={onInicioTextClick}>
              Inicio
            </div>
            <div className="search-elements">/</div>
            <div className="biblioteca5">Biblioteca</div>
            <div className="textbox7">
              <div className="textbox8" onClick={onTextboxContainerClick}>
                <img
                  className="search-icon5"
                  alt=""
                  src="/prestamos/Search.svg"
                />
                <input
                  className="buscar-libros-salas5"
                  placeholder="Buscar libros, salas..."
                  type="text"
                />
              </div>
            </div>
            <div className="merged-asset-32">
              <img className="merged-asset-3-icon2" alt="" />
            </div>
            <button className="container125">
              <img
                className="container-icon37"
                alt=""
                src="/prestamos/Container.svg"
              />
            </button>
            <div className="estudiante5">Estudiante</div>
          </div>
          <img className="line-icon30" alt="" src="/prestamos/Line1.svg" />
        </div>
        <div className="textbox9">
          <img className="search-icon5" alt="" src="/prestamos/Search.svg" />
          <input
            className="buscar-libros-salas5"
            placeholder="Buscar libros, salas..."
            type="text"
          />
        </div>
        <img
          className="container-icon38"
          alt=""
          src="/prestamos/Container.svg"
        />
        <img className="merged-asset-2-icon2" alt="" />
        <div className="estudiante6">Estudiante</div>
        <div className="biblioteca6">Biblioteca</div>
        <div className="search-wrapper">/</div>
        <div className="inicio18">Inicio</div>
        <img className="line-icon29" alt="" src="/prestamos/Line1.svg" />
      </div>
      <div className="inicio18">Inicio</div>
      <div className="search-wrapper">/</div>
      <div className="biblioteca7">Biblioteca</div>
      <div className="textbox10">
        <img className="search-icon5" alt="" src="/prestamos/Search.svg" />
        <input
          className="buscar-libros-salas5"
          placeholder="Buscar libros, salas..."
          type="text"
        />
      </div>
      <img className="merged-asset-2-icon2" alt="" />
      <img className="container-icon38" alt="" src="/prestamos/Container.svg" />
      <div className="estudiante6">Estudiante</div>
    </header>
  );
};
export default BookDetailTopBar;
