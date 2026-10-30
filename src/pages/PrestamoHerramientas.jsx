import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ToolLoanCatalog from "../components/loans/ToolLoanCatalog";
import AppSidebar from "../components/layout/AppSidebar";
import "../styles/prestamos-tokens.scss";
import "./PrestamoHerramientas.scss";
const PrestamoHerramientas = () => {
  const navigate = useNavigate();
  const handleNavigate = useCallback((destination) => {
    if (destination === "inicio") navigate("/");
    if (destination === "prestamos") navigate("/prestamos");
  }, [navigate]);
  const onButtonContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);
  const onTextboxContainerClick = useCallback(() => {
    navigate("/prestamos");
  }, [navigate]);
  return (
    <div className="prestamo-herramientas">
      <AppSidebar activeItem="prestamos" onNavigate={handleNavigate} />
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
                src="/prestamos/merged-asset-1.png"
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
