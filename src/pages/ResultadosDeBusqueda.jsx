import { useCallback } from "react";
import { Box, Typography, Button } from "@mui/material";
import Container from "../components/resultados_busqueda/Container";
import Container1 from "../components/resultados_busqueda/Container1";
import False from "../components/resultados_busqueda/False";
import CheckboxIcon from "../components/resultados_busqueda/CheckboxIcon";
import BotonGuardarFavorito from "../components/resultados_busqueda/BotonGuardarFavorito";
import "./ResultadosDeBusqueda.scss";

const ResultadosDeBsqueda = () => {
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

  const onButtonClick = useCallback(() => {
    // Please sync "Contacto Bibliotecario" to the project
  }, []);

  return (
    <Box className="resultados-de-bsqueda">
      <section className="container">
        <Box className="container-column-0">
          <Box className="container-column-0-row-0">
            <img className="container-icon" alt="" src="/Container4.svg" />
            <div className="bibliotecausm">BibliotecaUSM</div>
          </Box>
          <Box className="button" onClick={onButtonContainerClick}>
            <img className="house-icon" alt="" src="/House.svg" />
            <div className="inicio">Inicio</div>
          </Box>
          <Box className="button2" onClick={onButtonContainerClick1}>
            <img className="house-icon" alt="" src="/Calendar-days.svg" />
            <div className="inicio">Mis Reservas</div>
          </Box>
          <Box className="button2" onClick={onButtonContainerClick2}>
            <img className="house-icon" alt="" src="/Book-marked.svg" />
            <div className="inicio">Mis Préstamos</div>
          </Box>
          <Box className="button4" onClick={onButtonContainerClick3}>
            <img className="house-icon" alt="" src="/Lightbulb.svg" />
            <div className="recomendaciones">Recomendaciones</div>
          </Box>
          <Box className="button5">
            <Box className="button6" onClick={onButtonContainerClick4}>
              <img className="house-icon" alt="" src="/Users.svg" />
              <div className="inicio">Reservas de Sala</div>
            </Box>
          </Box>
          <Box className="container2">
            <img className="line-icon" alt="" src="/Line.svg" />
            <div className="biblioteca-usm">© 2024 Biblioteca USM</div>
          </Box>
        </Box>
        <img className="line-icon2" alt="" src="/Line1.svg" />
      </section>
      <main className="container3">
        <section className="container4">
          <Container />
          <Container1 />
          <Box className="page-body">
            <section className="left-sidebar">
              <Box className="filter-header">
                <img className="house-icon" alt="" src="/Image1.svg" />
                <Typography
                  className="filtros"
                  variant="inherit"
                  variantMapping={{ inherit: "h3" }}
                  sx={{ fontWeight: "600", lineHeight: "var(--lh-28)" }}
                >
                  Filtros
                </Typography>
              </Box>
              <Box className="container5">
                <Box className="filtro-disponibilidad">
                  <Box className="filtro-disponibilidad2">
                    <Box className="container6">
                      <Box className="checkbox">
                        <Box className="frame">
                          <div className="fsica">Disponible ahora</div>
                          <False />
                        </Box>
                      </Box>
                      <Box className="checkbox2">
                        <Box className="frame2">
                          <div className="matemticas">En préstamo</div>
                          <False />
                        </Box>
                      </Box>
                      <Box className="checkbox3">
                        <Box className="frame">
                          <div className="qumica">Reserva próximamente</div>
                          <False />
                        </Box>
                      </Box>
                      <Box className="checkbox4">
                        <Box className="frame4">
                          <div className="biologa">Biología</div>
                          <False />
                        </Box>
                      </Box>
                      <Box className="checkbox5">
                        <Box className="frame">
                          <div className="literatura">Literatura</div>
                          <False />
                        </Box>
                      </Box>
                      <Box className="checkbox6">
                        <Box className="frame4">
                          <div className="historia">Historia</div>
                          <False />
                        </Box>
                      </Box>
                    </Box>
                    <Box className="button7">
                      <Typography
                        className="titulo"
                        variant="inherit"
                        variantMapping={{ inherit: "b" }}
                        sx={{ lineHeight: "var(--lh-20)", fontWeight: "700" }}
                      >
                        DISPONIBILIDAD
                      </Typography>
                      <img
                        className="chevron-down-icon"
                        alt=""
                        src="/Chevron-down.svg"
                      />
                    </Box>
                  </Box>
                </Box>
                <Box className="filtro-area-estudio">
                  <Box className="container6">
                    <Box className="checkbox7">
                      <Box className="frame">
                        <div className="fsica2">Física</div>
                        <False />
                      </Box>
                    </Box>
                    <Box className="checkbox8">
                      <Box className="frame2">
                        <div className="matemticas2">Matemáticas</div>
                        <False />
                      </Box>
                    </Box>
                    <Box className="checkbox9">
                      <Box className="frame">
                        <div className="qumica2">Química</div>
                        <False />
                      </Box>
                    </Box>
                    <Box className="checkbox10">
                      <Box className="frame">
                        <div className="biologa">Biología</div>
                        <False />
                      </Box>
                    </Box>
                    <Box className="checkbox11">
                      <Box className="frame">
                        <div className="literatura">Literatura</div>
                        <False />
                      </Box>
                    </Box>
                    <Box className="checkbox12">
                      <Box className="frame">
                        <div className="historia">Historia</div>
                        <False />
                      </Box>
                    </Box>
                  </Box>
                  <Box className="button8">
                    <Typography
                      className="titulo2"
                      variant="inherit"
                      variantMapping={{ inherit: "b" }}
                      sx={{ lineHeight: "var(--lh-20)", fontWeight: "700" }}
                    >
                      ÁREA DE ESTUDIO
                    </Typography>
                    <img
                      className="chevron-down-icon"
                      alt=""
                      src="/Chevron-down.svg"
                    />
                  </Box>
                </Box>
                <Box className="filtro-ao-publicacion">
                  <Box className="container6">
                    <Box className="checkbox">
                      <Box className="frame">
                        <div className="fsica3">Últimos 5 años</div>
                        <input className="checkbox14" type="checkbox" />
                      </Box>
                    </Box>
                    <Box className="checkbox2">
                      <Box className="frame2">
                        <div className="matemticas3">Últimos 10 años</div>
                        <input className="checkbox14" type="checkbox" />
                      </Box>
                    </Box>
                    <Box className="checkbox3">
                      <Box className="frame">
                        <div className="qumica3">Anterior a 2010</div>
                        <input className="checkbox14" type="checkbox" />
                      </Box>
                    </Box>
                    <Box className="checkbox4">
                      <Box className="frame">
                        <div className="biologa">Biología</div>
                        <False />
                      </Box>
                    </Box>
                    <Box className="checkbox5">
                      <Box className="frame">
                        <div className="literatura">Literatura</div>
                        <False />
                      </Box>
                    </Box>
                    <Box className="checkbox6">
                      <Box className="frame">
                        <div className="historia">Historia</div>
                        <False />
                      </Box>
                    </Box>
                  </Box>
                  <Box className="button8">
                    <Typography
                      className="titulo3"
                      variant="inherit"
                      variantMapping={{ inherit: "b" }}
                      sx={{ lineHeight: "var(--lh-20)", fontWeight: "700" }}
                    >
                      AÑO DE PUBLICACIÓN
                    </Typography>
                    <img
                      className="chevron-down-icon"
                      alt=""
                      src="/Chevron-down.svg"
                    />
                  </Box>
                </Box>
              </Box>
              <Box className="checkbox22">
                <Box className="ischeckedtrue">
                  <CheckboxIcon isChecked />
                </Box>
                <img className="ischeckedfalse-icon" alt="" />
              </Box>
              <Box className="container9">
                <Box className="container-row-0">
                  <img
                    className="container-icon2"
                    alt=""
                    src="/Container.svg"
                  />
                  <Typography
                    className="asesora-de-bsqueda"
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                    sx={{
                      lineHeight: "var(--lh-16)",
                      letterSpacing: "0.12px",
                      fontWeight: "700",
                    }}
                  >
                    Asesoría de Búsqueda
                  </Typography>
                </Box>
                <Box className="no-encuentras-lo-que-buscas-s">
                  <div className="no-encuentras-lo">
                    ¿No encuentras lo que buscas? Solicita ayuda a un
                    bibliotecario en línea.
                  </div>
                </Box>
                <Button
                  className="button10"
                  disableElevation
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#003366",
                    fontSize: "12",
                    background: "#f6f7f9",
                    border: "#003366 solid 1px",
                    borderRadius: "4px",
                    "&:hover": { background: "#f6f7f9" },
                    height: 36,
                  }}
                  onClick={onButtonClick}
                >
                  Contactar Bibliotecario
                </Button>
              </Box>
            </section>
            <Box className="main-content">
              <Box className="results-header">
                <Typography
                  className="resultados-de-bsqueda2"
                  variant="inherit"
                  variantMapping={{ inherit: "h1" }}
                  sx={{
                    fontWeight: "600",
                    lineHeight: "40px",
                    letterSpacing: "-0.32px",
                  }}
                >
                  Resultados de Búsqueda
                </Typography>
                <div className="encontramos-128-libros-container">
                  <Typography
                    variant="inherit"
                    variantMapping={{ inherit: "span" }}
                    sx={{ lineHeight: "var(--lh-26)" }}
                  >{`Encontramos `}</Typography>
                  <Typography
                    className="b"
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                    sx={{ lineHeight: "var(--lh-26)" }}
                  >
                    128
                  </Typography>
                  <Typography
                    variant="inherit"
                    variantMapping={{ inherit: "span" }}
                    sx={{ lineHeight: "var(--lh-26)" }}
                  >
                    {" "}
                    libros relacionados con tu criterio de búsqueda.
                  </Typography>
                </div>
              </Box>
              <Box className="book-results-list">
                <section className="container10">
                  <Box className="container11">
                    <Box className="book-image-container">
                      <Box className="tag">
                        <Box className="frame19">
                          <div className="destacado">Destacado</div>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Box className="book-info-section">
                    <Box className="book-meta-header">
                      <Box className="book-title-group">
                        <div className="ciencias-fsicas">Ciencias Físicas</div>
                        <Typography
                          className="fsica-universitaria-volumen"
                          variant="inherit"
                          variantMapping={{ inherit: "h3" }}
                          sx={{
                            fontWeight: "600",
                            fontSize: "var(--fs-20)",
                            lineHeight: "25px",
                          }}
                        >
                          Física Universitaria Volumen 1
                        </Typography>
                        <div className="loretta-jones-peter">
                          Sears y Zemansky
                        </div>
                      </Box>
                      <Box className="status-rating-group">
                        <Box className="container12">
                          <img
                            className="circle-check-icon"
                            alt=""
                            src="/circle-check.svg"
                          />
                          <div className="disponible">Disponible</div>
                        </Box>
                        <img className="rating-icon" loading="lazy" alt="" />
                      </Box>
                    </Box>
                    <Box className="container13">
                      <Box className="container14">
                        <div className="la-decimocuarta-edicin">
                          La decimocuarta edición de este libro es la referencia
                          estándar para cursos de física basados en cálculo.
                          Ofrece un enfoque claro en la resolución de problemas.
                        </div>
                      </Box>
                    </Box>
                    <Box className="container15">
                      <img className="line-icon" alt="" src="/Line.svg" />
                      <Box className="container-row-1">
                        <BotonGuardarFavorito guardar={false} />
                        <Button
                          className="button11"
                          startIcon={
                            <img width="16px" height="16px" src="/info.svg" />
                          }
                          disableElevation
                          variant="text"
                          sx={{
                            textTransform: "none",
                            color: "#696d72",
                            fontSize: "14",
                            borderRadius: "0px 0px 0px 0px",
                            height: 32,
                          }}
                        >
                          Detalles
                        </Button>
                        <Button
                          className="button12"
                          endIcon={
                            <img
                              width="16px"
                              height="16px"
                              src="/arrow-right.svg"
                            />
                          }
                          disableElevation
                          variant="contained"
                          sx={{
                            textTransform: "none",
                            color: "#f1f7ff",
                            fontSize: "14",
                            background: "#003366",
                            borderRadius: "4px",
                            "&:hover": { background: "#003366" },
                            width: 164,
                            height: 36,
                          }}
                        >
                          Reservar Ahora
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </section>
                <section className="container16">
                  <img
                    className="container-icon3"
                    alt=""
                    src="/Container1@2x.png"
                  />
                  <Box className="book-info">
                    <Box className="book-meta-header">
                      <Box className="book-title-group2">
                        <div className="ciencias-fsicas">Química</div>
                        <Typography
                          className="fsica-universitaria-volumen"
                          variant="inherit"
                          variantMapping={{ inherit: "h3" }}
                          sx={{
                            fontWeight: "600",
                            fontSize: "var(--fs-20)",
                            lineHeight: "25px",
                          }}
                        >
                          Principios de Química General
                        </Typography>
                        <div className="loretta-jones-peter">
                          Loretta Jones, Peter Atkins • 2012
                        </div>
                      </Box>
                      <Box className="status-rating-group2">
                        <Box className="container17">
                          <img
                            className="circle-check-icon"
                            loading="lazy"
                            alt=""
                            src="/clock.svg"
                          />
                          <div className="disponible">Prestado</div>
                        </Box>
                        <img className="rating-icon" alt="" />
                      </Box>
                    </Box>
                    <Box className="container13">
                      <Box className="container19">
                        <div className="explora-los-fundamentos">
                          Explora los fundamentos de la química moderna con un
                          énfasis en el descubrimiento y el pensamiento crítico.
                        </div>
                      </Box>
                    </Box>
                    <Box className="container15">
                      <img className="line-icon" alt="" src="/Line.svg" />
                      <Box className="container-row-1">
                        <BotonGuardarFavorito
                          guardar={false}
                          guardarLeft="calc(50% - 10.5px)"
                          bookmarkIconLeft="calc(50% - 42.5px)"
                        />
                        <Button
                          className="button13"
                          startIcon={
                            <img width="16px" height="16px" src="/info.svg" />
                          }
                          disableElevation
                          variant="text"
                          sx={{
                            textTransform: "none",
                            color: "#696d72",
                            fontSize: "14",
                            borderRadius: "0px 0px 0px 0px",
                            height: 32,
                          }}
                        >
                          Detalles
                        </Button>
                        <Button
                          className="button14"
                          endIcon={
                            <img
                              width="16px"
                              height="16px"
                              src="/arrow-right-1.svg"
                            />
                          }
                          disableElevation
                          variant="contained"
                          sx={{
                            textTransform: "none",
                            color: "#1d1f23",
                            fontSize: "14",
                            background: "#f6f7f9",
                            border: "#c8cbcf solid 1px",
                            borderRadius: "4px",
                            "&:hover": { background: "#f6f7f9" },
                            width: 189,
                            height: 36,
                          }}
                        >
                          Ver Lista de Espera
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </section>
                <section className="container21">
                  <img className="merged-asset-1-icon" loading="lazy" alt="" />
                  <Box className="book-info-section3">
                    <Box className="book-meta-header">
                      <Box className="book-title-group3">
                        <div className="ciencias-fsicas">Biología</div>
                        <Typography
                          className="fsica-universitaria-volumen"
                          variant="inherit"
                          variantMapping={{ inherit: "h3" }}
                          sx={{
                            fontWeight: "600",
                            fontSize: "var(--fs-20)",
                            lineHeight: "25px",
                          }}
                        >
                          Biología: La Vida en la Tierra
                        </Typography>
                        <div className="loretta-jones-peter">
                          Teresa Audesirk, Gerald Audesirk • 2016
                        </div>
                      </Box>
                      <Box className="status-rating-group">
                        <Box className="container12">
                          <img
                            className="circle-check-icon"
                            alt=""
                            src="/circle-check.svg"
                          />
                          <div className="disponible">Disponible</div>
                        </Box>
                        <img className="rating-icon" alt="" />
                      </Box>
                    </Box>
                    <Box className="container13">
                      <Box className="container19">
                        <div className="una-visin-integral">
                          Una visión integral de los procesos biológicos, desde
                          el nivel molecular hasta el ecosistema global.
                        </div>
                      </Box>
                    </Box>
                    <Box className="container15">
                      <img className="line-icon" alt="" src="/Line.svg" />
                      <Box className="container-row-1">
                        <BotonGuardarFavorito
                          guardar={false}
                          guardarLeft="calc(50% - 10.6px)"
                          bookmarkIconLeft="calc(50% - 42.6px)"
                        />
                        <Button
                          className="button11"
                          startIcon={
                            <img width="16px" height="16px" src="/info.svg" />
                          }
                          disableElevation
                          variant="text"
                          sx={{
                            textTransform: "none",
                            color: "#696d72",
                            fontSize: "14",
                            borderRadius: "0px 0px 0px 0px",
                            height: 32,
                          }}
                        >
                          Detalles
                        </Button>
                        <Button
                          className="button12"
                          endIcon={
                            <img
                              width="16px"
                              height="16px"
                              src="/arrow-right.svg"
                            />
                          }
                          disableElevation
                          variant="contained"
                          sx={{
                            textTransform: "none",
                            color: "#f1f7ff",
                            fontSize: "14",
                            background: "#003366",
                            borderRadius: "4px",
                            "&:hover": { background: "#003366" },
                            width: 164,
                            height: 36,
                          }}
                        >
                          Reservar Ahora
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </section>
                <section className="container16">
                  <Box className="frame20">
                    <img
                      className="image-2-icon"
                      loading="lazy"
                      alt=""
                      src="/image-2@2x.png"
                    />
                  </Box>
                  <Box className="book-info">
                    <Box className="book-meta-header">
                      <Box className="book-title-group4">
                        <div className="ciencias-fsicas">Matemáticas</div>
                        <Typography
                          className="fsica-universitaria-volumen"
                          variant="inherit"
                          variantMapping={{ inherit: "h3" }}
                          sx={{
                            fontWeight: "600",
                            fontSize: "var(--fs-20)",
                            lineHeight: "25px",
                          }}
                        >
                          Cálculo: Una Variable
                        </Typography>
                        <div className="loretta-jones-peter">
                          George B. Thomas • 2015
                        </div>
                      </Box>
                      <Box className="status-rating-group">
                        <Box className="container12">
                          <img
                            className="circle-check-icon"
                            alt=""
                            src="/circle-check.svg"
                          />
                          <div className="disponible">Disponible</div>
                        </Box>
                        <img className="rating-icon" alt="" />
                      </Box>
                    </Box>
                    <Box className="container13">
                      <Box className="container29">
                        <div className="texto-clsico-que">
                          Texto clásico que introduce los conceptos de límites,
                          derivadas e integrales de manera rigurosa.
                        </div>
                      </Box>
                    </Box>
                    <Box className="container15">
                      <img className="line-icon" alt="" src="/Line.svg" />
                      <Box className="container-row-1">
                        <BotonGuardarFavorito
                          guardar={false}
                          guardarLeft="calc(50% - 10.5px)"
                          bookmarkIconLeft="calc(50% - 42.5px)"
                        />
                        <Button
                          className="button11"
                          startIcon={
                            <img width="16px" height="16px" src="/info.svg" />
                          }
                          disableElevation
                          variant="text"
                          sx={{
                            textTransform: "none",
                            color: "#696d72",
                            fontSize: "14",
                            borderRadius: "0px 0px 0px 0px",
                            height: 32,
                          }}
                        >
                          Detalles
                        </Button>
                        <Button
                          className="button12"
                          endIcon={
                            <img
                              width="16px"
                              height="16px"
                              src="/arrow-right.svg"
                            />
                          }
                          disableElevation
                          variant="contained"
                          sx={{
                            textTransform: "none",
                            color: "#f1f7ff",
                            fontSize: "14",
                            background: "#003366",
                            borderRadius: "4px",
                            "&:hover": { background: "#003366" },
                            width: 164,
                            height: 36,
                          }}
                        >
                          Reservar Ahora
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </section>
              </Box>
              <Box className="pagination-bar">
                <Button
                  className="button19"
                  disableElevation
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#1d1f23",
                    fontSize: "14",
                    background: "#f6f7f9",
                    border: "#c8cbcf solid 1px",
                    borderRadius: "4px",
                    "&:hover": { background: "#f6f7f9" },
                    width: 86,
                    height: 40,
                  }}
                >
                  Anterior
                </Button>
                <Box className="pagination-pages">
                  <button className="button20">
                    <div className="div">1</div>
                  </button>
                  <button className="button21">
                    <div className="div2">2</div>
                  </button>
                  <Button
                    className="button22"
                    disableElevation
                    variant="text"
                    sx={{
                      borderRadius: "0px 0px 0px 0px",
                      width: 49,
                      height: 40,
                    }}
                  />
                  <Box className="extra-pagination-container">
                    <div className="div3">...</div>
                  </Box>
                  <button className="button21">
                    <div className="div2">32</div>
                  </button>
                </Box>
                <Button
                  className="button24"
                  disableElevation
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#1d1f23",
                    fontSize: "14",
                    background: "#f6f7f9",
                    border: "#c8cbcf solid 1px",
                    borderRadius: "4px",
                    "&:hover": { background: "#f6f7f9" },
                    width: 94,
                    height: 40,
                  }}
                >
                  Siguiente
                </Button>
              </Box>
            </Box>
          </Box>
          <img className="line-icon7" alt="" src="/Line.svg" />
          <Box className="image-3" />
        </section>
      </main>
    </Box>
  );
};

export default ResultadosDeBsqueda;
