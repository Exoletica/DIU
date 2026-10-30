import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ToolLoanCatalog.scss";
const ToolLoanCatalog = ({ className = "" }) => {
  const navigate = useNavigate();
  const onInicioTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);
  const onCatlogoTextClick = useCallback(() => {
    navigate("/prestamos");
  }, [navigate]);
  const onContainerClick = useCallback(() => {
    navigate("/prestamos/detalle-del-libro-1");
  }, [navigate]);
  const onContainerClick1 = useCallback(() => {
    navigate("/prestamos");
  }, [navigate]);
  return (
    <section className="container96">
      <header className="container97">
        <div className="container98">
          <div className="container-row-03">
            <div className="inicio13" onClick={onInicioTextClick}>
              Inicio
            </div>
            <button className="container99">
              <img
                className="chevron-right-icon7"
                alt=""
                src="/prestamos/chevron-right.svg"
              />
            </button>
            <div className="catlogo" onClick={onCatlogoTextClick}>
              Catálogo
            </div>
            <button className="container99">
              <img
                className="chevron-right-icon7"
                alt=""
                src="/prestamos/chevron-right.svg"
              />
            </button>
            <b className="bsqueda-fsica">Búsqueda: "Física"</b>
            <button className="container99">
              <div className="mostrando-1-4-de">
                Mostrando 1-4 de 128 resultados
              </div>
            </button>
            <button className="container102">
              <img
                className="arrow-up-narrow-wide-icon"
                alt=""
                src="/prestamos/arrow-up-narrow-wide.svg"
              />
              <div className="relevancia">Relevancia</div>
            </button>
          </div>
          <img className="line-icon21" alt="" src="/prestamos/Line1.svg" />
        </div>
      </header>
      <h1 className="prstamos-de-herramientas">Préstamo de Herramientas</h1>
      <img className="line-icon22" alt="" src="/prestamos/Line1.svg" />
      <section className="container-row-3">
        <div className="container-row-32">
          <div className="container103" onClick={onContainerClick}>
            <div className="container110">
              <img
                className="container-icon32"
                loading="lazy"
                alt=""
                src="/prestamos/Container3@2x.png"
              />
            </div>
            <div className="star6">
              <img
                className="star-icon5"
                loading="lazy"
                alt=""
                src="/prestamos/star.svg"
              />
            </div>
            <div className="container-row-25">
              <div className="container108">
                <b className="libros-fsicos">Libros Físicos</b>
              </div>
              <div className="calculadoras-cientficasy-ti">
                Catálogo de mas de 800
                <br />
                libros.
              </div>
            </div>
            <button className="button41">
              <div className="button40">
                <div className="ver-detalles3">Ver Detalles</div>
              </div>
            </button>
          </div>
          <div className="container103" onClick={onCatlogoTextClick}>
            <div className="container110">
              <img
                className="container-icon32"
                loading="lazy"
                alt=""
                src="/prestamos/Container2@2x.png"
              />
            </div>
            <div className="star6">
              <img
                className="star-icon5"
                loading="lazy"
                alt=""
                src="/prestamos/star.svg"
              />
            </div>
            <div className="container-row-25">
              <div className="container108">
                <b className="libros-fsicos">Arduinos</b>
              </div>
              <div className="calculadoras-cientficasy-ti">
                Más de 3 versiones y 50 <br />
                unidades disponibles.
              </div>
            </div>
            <button className="button41">
              <div className="button40">
                <div className="ver-detalles3">Ver Detalles</div>
              </div>
            </button>
          </div>
          <div className="container103" onClick={onContainerClick1}>
            <div className="container110">
              <img
                className="container-icon32"
                loading="lazy"
                alt=""
                src="/prestamos/Container4@2x.png"
              />
            </div>
            <div className="star6">
              <img
                className="star-icon5"
                loading="lazy"
                alt=""
                src="/prestamos/star.svg"
              />
            </div>
            <div className="container-row-25">
              <div className="container108">
                <b className="libros-fsicos">Calculadoras</b>
              </div>
              <div className="calculadoras-cientficasy-ti">
                Calculadoras científicas
                <br />y TI.
                <br />
              </div>
            </div>
            <button className="button41">
              <div className="button40" onClick={onContainerClick1}>
                <div className="ver-detalles3">Ver Detalles</div>
              </div>
            </button>
          </div>
        </div>
      </section>
    </section>
  );
};
export default ToolLoanCatalog;
