import { useMemo, useCallback } from "react";
import { Box, Button } from "@mui/material";
import PropTypes from "prop-types";
import "./ContainerColumn0.scss";

const ContainerColumn0 = ({
  className = "",
  containerBorderRadius,
  buttonBorder,
  buttonBorder1,
  buttonBorder2,
  buttonBorderRadius,
  buttonBackgroundColor,
  buttonOverflow,
  buttonDisplay,
  buttonAlignItems,
  buttonGap,
  buttonHeight,
  buttonBorder3,
  buttonBackgroundColor1,
}) => {
  const containerIconStyle = useMemo(() => {
    return {
      borderRadius: containerBorderRadius,
    };
  }, [containerBorderRadius]);

  const buttonStyle = useMemo(() => {
    return {
      border: buttonBorder,
    };
  }, [buttonBorder]);

  const button1Style = useMemo(() => {
    return {
      border: buttonBorder1,
    };
  }, [buttonBorder1]);

  const button2Style = useMemo(() => {
    return {
      border: buttonBorder2,
    };
  }, [buttonBorder2]);

  const button3Style = useMemo(() => {
    return {
      borderRadius: buttonBorderRadius,
      backgroundColor: buttonBackgroundColor,
      overflow: buttonOverflow,
      display: buttonDisplay,
      alignItems: buttonAlignItems,
      gap: buttonGap,
      height: buttonHeight,
    };
  }, [
    buttonBorderRadius,
    buttonBackgroundColor,
    buttonOverflow,
    buttonDisplay,
    buttonAlignItems,
    buttonGap,
    buttonHeight,
  ]);

  const button4Style = useMemo(() => {
    return {
      border: buttonBorder3,
      backgroundColor: buttonBackgroundColor1,
    };
  }, [buttonBorder3, buttonBackgroundColor1]);

  const onButtonContainerClick = useCallback(() => {
    // Please sync "Inicio" to the project
  }, []);

  const onButtonContainerClick1 = useCallback(() => {
    // Please sync "Mis Reservas" to the project
  }, []);

  const onButtonContainerClick2 = useCallback(() => {
    // Please sync "Mis Préstamos" to the project
  }, []);

  const onButtonContainerClick3 = useCallback(() => {
    // Please sync "Recomendaciones" to the project
  }, []);

  const onButtonContainerClick4 = useCallback(() => {
    // Please sync "Reservas de Sala" to the project
  }, []);

  return (
    <Box className="container-column-0">
      <Box className="container-column-0-row-0">
        <img
          className="container-icon4"
          alt=""
          src="/Container4.svg"
          style={containerIconStyle}
        />
        <div className="bibliotecausm">BibliotecaUSM</div>
      </Box>
      <Box
        className="button22"
        onClick={onButtonContainerClick}
        style={buttonStyle}
      >
        <img className="house-icon" alt="" src="/House.svg" />
        <div className="mis-reservas">Inicio</div>
      </Box>
      <Box
        className="button23"
        onClick={onButtonContainerClick1}
        style={button1Style}
      >
        <img className="house-icon" alt="" src="/Calendar-days.svg" />
        <div className="mis-reservas">Mis Reservas</div>
      </Box>
      <Box
        className="button23"
        onClick={onButtonContainerClick2}
        style={button2Style}
      >
        <img className="house-icon" alt="" src="/Book-marked.svg" />
        <div className="mis-reservas">Mis Préstamos</div>
      </Box>
      <Box
        className="button25"
        onClick={onButtonContainerClick3}
        style={button3Style}
      >
        <img className="house-icon" alt="" src="/Lightbulb.svg" />
        <div className="recomendaciones">Recomendaciones</div>
      </Box>
      <Box className="button26" style={button4Style}>
        <Box className="button27" onClick={onButtonContainerClick4}>
          <img className="house-icon" alt="" src="/Users.svg" />
          <div className="mis-reservas">Reservas de Sala</div>
        </Box>
      </Box>
      <Box className="container36">
        <img className="line-icon10" alt="" src="/Line.svg" />
        <div className="biblioteca-usm">© 2024 Biblioteca USM</div>
      </Box>
    </Box>
  );
};

ContainerColumn0.propTypes = {
  className: PropTypes.string,

  /** Style props */
  containerBorderRadius: PropTypes.string,
  buttonBorder: PropTypes.string,
  buttonBorder1: PropTypes.string,
  buttonBorder2: PropTypes.string,
  buttonBorderRadius: PropTypes.string,
  buttonBackgroundColor: PropTypes.string,
  buttonOverflow: PropTypes.string,
  buttonDisplay: PropTypes.string,
  buttonAlignItems: PropTypes.string,
  buttonGap: PropTypes.string,
  buttonHeight: PropTypes.string,
  buttonBorder3: PropTypes.string,
  buttonBackgroundColor1: PropTypes.string,
};

export default ContainerColumn0;
