import { useCallback } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Box,
} from "@mui/material";
import PropTypes from "prop-types";
import "./Container1.scss";

const Container1 = ({ className = "" }) => {
  const onInicioTextClick = useCallback(() => {
    // Please sync "Inicio" to the project
  }, []);

  return (
    <Box className="container33">
      <Box className="container-row-03">
        <div className="inicio3" onClick={onInicioTextClick}>
          Inicio
        </div>
        <div className="user-nav-info">/</div>
        <div className="biblioteca">Biblioteca</div>
        <TextField
          className="textbox"
          placeholder="Buscar libros, salas..."
          variant="outlined"
          slotProps={{
            input: {
              startAdornment: (
                <img width="16px" height="16px" src="/search.svg" />
              ),
            },
          }}
          sx={{
            "& fieldset": { border: "none" },
            "& .MuiInputBase-root": {
              height: "40px",
              paddingLeft: "10.4px",
              borderRadius: "0px 0px 0px 0px",
              fontSize: "14px",
            },
            "& .MuiInputBase-input": { paddingLeft: "6px", color: "#696d72" },
            width: "403.5px",
          }}
        />
        <Box className="merged-asset-2">
          <img className="merged-asset-2-icon" alt="Notificaciones" src="/bell.svg" />
        </Box>
        <button className="container34">
          <img className="container-icon4" alt="" src="/Container2.svg" />
        </button>
        <div className="estudiante">Estudiante</div>
      </Box>
      <img className="line-icon9" alt="" src="/Line.svg" />
    </Box>
  );
};

Container1.propTypes = {
  className: PropTypes.string,
};

export default Container1;
