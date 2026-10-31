import { useState } from "react";
import PropTypes from "prop-types";
import "./BotonGuardarFavorito.scss";

const BotonGuardarFavorito = ({ className = "", guardar = false }) => {
  const [isSaved, setIsSaved] = useState(guardar);

  const handleClick = () => {
    setIsSaved(!isSaved);
  };

  return (
    <button 
      className={`boton-guardar-favorito ${className}`} 
      onClick={handleClick}
      data-guardar={isSaved}
    >
      <img
        className="bookmark-icon"
        loading="lazy"
        alt="Guardar"
        src="/Bookmark.svg"
      />
      <div className="guardar">
        {isSaved ? "Guardado" : "Guardar"}
      </div>
    </button>
  );
};

BotonGuardarFavorito.propTypes = {
  className: PropTypes.string,
  guardar: PropTypes.bool,
};

export default BotonGuardarFavorito;