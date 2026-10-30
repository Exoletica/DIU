import { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./BookDetailBreadcrumbBar.scss";
const BookDetailBreadcrumbBar = ({
  className = "",
  textboxHeight,
  buscarLibrosSalasHeight,
  buscarLibrosSalasPadding,
  mergedAsset3Border,
  mergedAsset3BackgroundColor,
  containerBorder,
  containerBackgroundColor,
}) => {
  const navigate = useNavigate();
  const textboxStyle = useMemo(() => {
    return {
      height: textboxHeight,
    };
  }, [textboxHeight]);
  const buscarLibrosSalasStyle = useMemo(() => {
    return {
      height: buscarLibrosSalasHeight,
      padding: buscarLibrosSalasPadding,
    };
  }, [buscarLibrosSalasHeight, buscarLibrosSalasPadding]);
  const container6Style = useMemo(() => {
    return {
      border: containerBorder,
      backgroundColor: containerBackgroundColor,
    };
  }, [containerBorder, containerBackgroundColor]);
  const onInicioTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);
  const onTextboxContainerClick = useCallback(() => {
    navigate("/prestamos");
  }, [navigate]);
  return (
    <div className="container143">
      <div className="container-row-05">
        <div className="inicio23" onClick={onInicioTextClick}>
          Inicio
        </div>
        <div className="search-info2">/</div>
        <div className="biblioteca8">Biblioteca</div>
        <div className="textbox11">
          <div
            className="textbox12"
            onClick={onTextboxContainerClick}
            style={textboxStyle}
          >
            <img className="search-icon8" alt="" src="/prestamos/Search.svg" />
            <input
              className="buscar-libros-salas8"
              placeholder="Buscar libros, salas..."
              type="text"
              style={buscarLibrosSalasStyle}
            />
          </div>
        </div>
        <button className="merged-asset-33">
          <img className="merged-asset-3-icon3" loading="lazy" alt="" src="/prestamos/merged-asset-1.png" />
        </button>
        <button className="container144" style={container6Style}>
          <img
            className="container-icon45"
            alt=""
            src="/prestamos/Container.svg"
          />
        </button>
        <div className="estudiante8">Estudiante</div>
      </div>
      <img className="line-icon39" alt="" src="/prestamos/Line1.svg" />
    </div>
  );
};
export default BookDetailBreadcrumbBar;
