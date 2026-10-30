import { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ToolLoanCard.scss";
const ToolLoanCard = ({
  className = "",
  onContainerClick,
  container,
  star,
  containerRow2Padding,
  containerAlignSelf,
  librosFsicos,
  librosFsicosFlex,
  catlogoDeMasDe800Libros,
  onCatlogoTextClick,
  containerHeight,
  containerPadding,
  containerIconWidth,
  containerIconFlex,
  containerIconOverflow,
  starPadding,
  onMsDeClick,
  buttonPadding,
  buttonPadding1,
  verDetallesFontFamily,
  verDetallesFlex,
}) => {
  const navigate = useNavigate();
  const containerRow2Style = useMemo(() => {
    return {
      padding: containerRow2Padding,
    };
  }, [containerRow2Padding]);
  const container3Style = useMemo(() => {
    return {
      alignSelf: containerAlignSelf,
    };
  }, [containerAlignSelf]);
  const librosFsicosStyle = useMemo(() => {
    return {
      flex: librosFsicosFlex,
    };
  }, [librosFsicosFlex]);
  const container4Style = useMemo(() => {
    return {
      height: containerHeight,
      padding: containerPadding,
    };
  }, [containerHeight, containerPadding]);
  const containerIcon1Style = useMemo(() => {
    return {
      width: containerIconWidth,
      flex: containerIconFlex,
      overflow: containerIconOverflow,
    };
  }, [containerIconWidth, containerIconFlex, containerIconOverflow]);
  const container5Style = useMemo(() => {
    return {
      padding: starPadding,
    };
  }, [starPadding]);
  const fsicaUniversitariaConFsicStyle = useMemo(() => {
    return {
      padding: buttonPadding,
    };
  }, [buttonPadding]);
  const buttonStyle = useMemo(() => {
    return {
      padding: buttonPadding1,
    };
  }, [buttonPadding1]);
  const verDetallesStyle = useMemo(() => {
    return {
      fontFamily: verDetallesFontFamily,
      flex: verDetallesFlex,
    };
  }, [verDetallesFontFamily, verDetallesFlex]);
  const onContainerClick1 = useCallback(() => {
    navigate("/prestamos");
  }, [navigate]);
  const onButtonContainerClick = useCallback(() => {
    navigate("/prestamos");
  }, [navigate]);
  return (
    <div className="container133" onClick={onContainerClick}>
      <button className="container134">
        <img
          className="container-icon41"
          loading="lazy"
          alt=""
          src={container}
          style={containerIcon1Style}
        />
      </button>
      <button className="container134">
        <img className="star-icon7" loading="lazy" alt="" src={star} />
      </button>
      <div className="container-row-27" style={containerRow2Style}>
        <div className="container136" style={container3Style}>
          <b className="libros-fsicos2" style={librosFsicosStyle}>
            {librosFsicos}
          </b>
        </div>
        <div className="catlogo-de-mas2" onClick={onMsDeClick}>
          {catlogoDeMasDe800Libros}
        </div>
      </div>
      <div className="fsica-universitaria-con-fsic4">
        <div
          className="button59"
          onClick={onCatlogoTextClick}
          style={buttonStyle}
        >
          <div className="ver-detalles4" style={verDetallesStyle}>
            Ver Detalles
          </div>
        </div>
      </div>
    </div>
  );
};
export default ToolLoanCard;
