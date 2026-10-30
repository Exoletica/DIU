import { useMemo } from "react";
import PropTypes from "prop-types";
import "./BotonGuardarFavorito.scss";

const BotonGuardarFavorito = ({
  className = "",
  guardar = false,
  guardarLeft,
  bookmarkIconLeft,
}) => {
  const guardarStyle = useMemo(() => {
    return {
      left: guardarLeft,
    };
  }, [guardarLeft]);

  const bookmarkIconStyle = useMemo(() => {
    return {
      left: bookmarkIconLeft,
    };
  }, [bookmarkIconLeft]);

  return (
    <button className="boton-guardar-favorito" data-guardar={guardar}>
      <div className="guardar" style={guardarStyle}>
        Guardar
      </div>
      <img
        className="bookmark-icon"
        loading="lazy"
        alt=""
        src="/Bookmark.svg"
        style={bookmarkIconStyle}
      />
    </button>
  );
};

BotonGuardarFavorito.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  guardar: PropTypes.string,

  /** Style props */
  guardarLeft: PropTypes.string,
  bookmarkIconLeft: PropTypes.string,
};

export default BotonGuardarFavorito;
