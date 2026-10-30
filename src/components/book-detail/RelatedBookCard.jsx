import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./RelatedBookCard.scss";
const RelatedBookCard = ({ className = "" }) => {
  const navigate = useNavigate();
  const onContainerClick = useCallback(() => {
    navigate("/prestamos/detalle-del-libro-2");
  }, [navigate]);
  return (
    <div className="container112" onClick={onContainerClick}>
      <div className="heart4">
        <img className="container-icon33" alt="" />
      </div>
      <div className="download4">
        <div className="frame7">
          <b className="fsica3">HISTORIA</b>
        </div>
      </div>
      <div className="container113">
        <div className="container114">
          <div className="clculo-de-una3">eL mIEDO EN OCCIDENTE</div>
        </div>
      </div>
      <div className="chevron-right7">
        <div className="container114">
          <div className="james-stewart3">Jean Delumeau</div>
        </div>
      </div>
    </div>
  );
};
export default RelatedBookCard;
