import { Box, Typography, TextField, InputAdornment } from "@mui/material";
import ContainerColumn0 from "../components/contacto_bibliotecario/ContainerColumn0";
import Container1 from "../components/contacto_bibliotecario/Container1";
import "./ContactoBibliotecario.scss";

const ContactoBibliotecario = () => {
  return (
    <Box className="contacto-bibliotecario">
      <section className="container30">
        <ContainerColumn0 />
        <img className="line-icon7" alt="" src="/Line1.svg" />
      </section>

      {/* Contenido Principal */}
      <main className="main-layout">
        <Container1 />

        <Box className="page-body">
          <Box className="breadcrumbs">
            <Typography variant="body2" className="breadcrumb-link">Inicio</Typography>
            <Typography variant="body2" className="breadcrumb-separator">{`>`}</Typography>
            <Typography variant="body2" className="breadcrumb-link">Resultados de búsqueda</Typography>
            <Typography variant="body2" className="breadcrumb-separator">{`>`}</Typography>
            <Typography variant="body2" className="breadcrumb-current">Asesoría de búsqueda</Typography>
          </Box>

          {/* Título de la página */}
          <Typography
            className="prstamos-de-herramientas"
            variant="inherit"
            variantMapping={{ inherit: "h1" }}
            sx={{
              fontWeight: "600",
              lineHeight: "40px",
              letterSpacing: "-0.32px",
              marginBottom: "24px",
              marginTop: "24px",
              color: "#1d1f23"
            }}
          >
            Asesoría de búsqueda
          </Typography>

          <img className="line-icon8" alt="Separador" src="/Line.svg" />

          {/* Caja principal del chat con el bibliotecario */}
          <Box className="chat-container">
            <Box className="chat-message">
              <span className="emoji" role="img" aria-label="books">📚</span>
              <Typography variant="body2" className="message-text">
                ¡Hola! Te estamos conectando con uno de nuestros bibliotecarios en línea para brindarte la ayuda que requieras. Te agradecemos la espera.
              </Typography>
            </Box>

            <Box className="chat-input-wrapper">
              <TextField
                className="chat-input"
                placeholder="Haz tu consulta de libros"
                variant="outlined"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <img width="16px" height="16px" src="/search.svg" alt="Buscar" />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& fieldset": { border: "none" },
                  "& .MuiInputBase-root": {
                    height: "44px",
                    backgroundColor: "#ffffff",
                    borderRadius: "4px",
                    fontSize: "14px",
                  },
                  "& .MuiInputBase-input": {
                    paddingLeft: "8px",
                    color: "#696d72",
                  }
                }}
              />
            </Box>
          </Box>
        </Box>
      </main>
    </Box>
  );
};

export default ContactoBibliotecario;