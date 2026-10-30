import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";
import "./Container.scss";

const Container = ({ className = "" }) => {
  return (
    <Box className="container31">
      <header className="container-row-02">
        <div className="inicio2">Inicio</div>
        <Box className="chevron-right">
          <img className="chevron-right-icon" alt="" src="/chevron-right.svg" />
        </Box>
        <div className="catlogo">Catálogo</div>
        <Box className="chevron-right2">
          <img className="chevron-right-icon" alt="" src="/chevron-right.svg" />
        </Box>
        <Typography
          className="bsqueda-fsica"
          variant="inherit"
          variantMapping={{ inherit: "b" }}
          sx={{ lineHeight: "var(--lh-16)", fontWeight: "700" }}
        >
          Búsqueda: "Física"
        </Typography>
        <Box className="mostrando-1-4-de-128-resultado">
          <div className="mostrando-1-4-de">
            Mostrando 1-4 de 128 resultados
          </div>
        </Box>
        <Box className="container32">
          <img
            className="arrow-up-narrow-wide-icon"
            alt=""
            src="/arrow-up-narrow-wide.svg"
          />
          <div className="relevancia">Relevancia</div>
        </Box>
      </header>
      <img className="line-icon8" alt="" src="/Line.svg" />
    </Box>
  );
};

Container.propTypes = {
  className: PropTypes.string,
};

export default Container;
