import { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./BookSuggestionCard.scss";
const BookSuggestionCard = ({
  className = "",
  onContainerClick1,
  containerMinWidth,
  containerHeight,
  onContainerImageClick,
  containerIconFlex,
  containerIconOverflow,
  containerIconWidth,
  tagPadding,
  framePadding,
  mATEMTICAS,
  containerPadding,
  qumicaLaCienciaCentral,
  brownLeMayBursten,
  brownLeMayBurstenFlex,
}) => {
  const containerStyle = useMemo(() => {
    return {
      minWidth: containerMinWidth,
    };
  }, [containerMinWidth]);
  const container1Style = useMemo(() => {
    return {
      height: containerHeight,
    };
  }, [containerHeight]);
  const containerIconStyle = useMemo(() => {
    return {
      flex: containerIconFlex,
      overflow: containerIconOverflow,
      width: containerIconWidth,
    };
  }, [containerIconFlex, containerIconOverflow, containerIconWidth]);
  const tagStyle = useMemo(() => {
    return {
      padding: tagPadding,
    };
  }, [tagPadding]);
  const frameStyle = useMemo(() => {
    return {
      padding: framePadding,
    };
  }, [framePadding]);
  const container2Style = useMemo(() => {
    return {
      padding: containerPadding,
    };
  }, [containerPadding]);
  const brownLeMayBurstenStyle = useMemo(() => {
    return {
      flex: brownLeMayBurstenFlex,
    };
  }, [brownLeMayBurstenFlex]);
  const navigate = useNavigate();
  const onContainerClick = useCallback(() => {
    navigate("/prestamos/detalle-del-libro-4");
  }, [navigate]);
  return (
    <div
      className="container126"
      onClick={onContainerClick1}
      style={containerStyle}
    >
      <div className="container127" style={container1Style}>
        <img
          className="container-icon40"
          alt=""
          src="/prestamos/Container14@2x.png"
          onClick={onContainerImageClick}
          style={containerIconStyle}
        />
      </div>
      <div className="tag16">
        <div className="tag17" style={tagStyle}>
          <div className="frame8" style={frameStyle}>
            <b className="matemticas7">{mATEMTICAS}</b>
          </div>
        </div>
      </div>
      <div className="container128" style={container2Style}>
        <div className="container129">
          <div className="qumica-la-ciencia">{qumicaLaCienciaCentral}</div>
        </div>
      </div>
      <div className="container130">
        <div className="container129">
          <div className="brown-lemay-bursten" style={brownLeMayBurstenStyle}>
            {brownLeMayBursten}
          </div>
        </div>
      </div>
    </div>
  );
};
export default BookSuggestionCard;
