import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ToolLoanCatalog from "../components/loans/ToolLoanCatalog";
import "../styles/prestamos-tokens.scss";
import "./PrestamoHerramientas.scss";
const PrestamoHerramientas = () => {
  const navigate = useNavigate();
  const onButtonContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);
  const onButtonContainerClick1 = useCallback(() => {
    navigate("/mis-reservas");
  }, [navigate]);
  const onButtonContainerClick2 = useCallback(() => {
    navigate("/prestamos");
  }, [navigate]);
  const onButtonContainerClick3 = useCallback(() => {
    // Please sync "Recomendaciones" to the project
  }, []);
  const onButtonContainerClick4 = useCallback(() => {
    navigate("/reservas-de-sala");
  }, [navigate]);
  const onTextboxContainerClick = useCallback(() => {
    // Please sync "Resultados de Búsqueda" to the project
  }, []);
  return (
    <div className="prestamo-herramientas">
      <section className="container13">
        <div className="container-column-0">
          <div className="container-column-0-row-0">
            <img
              className="container-icon7"
              alt=""
              src="/prestamos/Container1.svg"
            />
            <div className="bibliotecausm">BibliotecaUSM</div>
          </div>
          <div className="button6" onClick={onButtonContainerClick}>
            <img className="house-icon" alt="" src="/prestamos/House.svg" />
            <div className="mis-reservas">Inicio</div>
          </div>
          <div className="button7" onClick={onButtonContainerClick1}>
            <img
              className="house-icon"
              alt=""
              src="/prestamos/Calendar-days.svg"
            />
            <div className="mis-reservas">Mis Reservas</div>
          </div>
          <div className="button7" onClick={onButtonContainerClick2}>
            <img
              className="house-icon"
              alt=""
              src="/prestamos/Book-marked.svg"
            />
            <div className="mis-reservas">Mis Préstamos</div>
          </div>
          <div className="button9" onClick={onButtonContainerClick3}>
            <img className="house-icon" alt="" src="/prestamos/Lightbulb.svg" />
            <div className="recomendaciones">Recomendaciones</div>
          </div>
          <div className="star2">
            <div className="button10" onClick={onButtonContainerClick4}>
              <img className="house-icon" alt="" src="/prestamos/Users.svg" />
              <div className="mis-reservas">Reservas de Sala</div>
            </div>
          </div>
          <div className="container14">
            <img className="line-icon3" alt="" src="/prestamos/Line1.svg" />
            <div className="biblioteca-usm">© 2024 Biblioteca USM</div>
          </div>
        </div>
        <img className="line-icon4" alt="" src="/prestamos/Line.svg" />
      </section>
      <main className="main-area">
        <div className="container15">
          <div className="container-row-0">
            <div className="inicio3" onClick={onButtonContainerClick}>
              Inicio
            </div>
            <div className="inicio4">/</div>
            <div className="biblioteca">Biblioteca</div>
            <div className="textbox">
              <div className="textbox2" onClick={onTextboxContainerClick}>
                <img
                  className="search-icon"
                  alt=""
                  src="/prestamos/Search.svg"
                />
                <input
                  className="buscar-libros-salas"
                  placeholder="Buscar libros, salas..."
                  type="text"
                />
              </div>
            </div>
            <div className="merged-asset-1">
              <img
                className="merged-asset-1-icon"
                alt=""
                src="/prestamos/merged-asset-1.svg"
              />
            </div>
            <div className="container16">
              <img
                className="container-icon8"
                alt=""
                src="/prestamos/Container.svg"
              />
            </div>
            <div className="estudiante">Estudiante</div>
          </div>
          <img className="line-icon3" alt="" src="/prestamos/Line1.svg" />
        </div>
        <ToolLoanCatalog />
      </main>
    </div>
  );
};
export default PrestamoHerramientas;
