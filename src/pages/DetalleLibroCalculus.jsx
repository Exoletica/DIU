import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import BookDetailTopBar from "../components/book-detail/BookDetailTopBar";
import BookSuggestionCard from "../components/book-detail/BookSuggestionCard";
import BookDetailFooter from "../components/book-detail/BookDetailFooter";
import AppSidebar from "../components/layout/AppSidebar";
import "../styles/prestamos-tokens.scss";
import "./DetalleLibroCalculus.scss";
const DetalleLibroCalculus = () => {
  const navigate = useNavigate();
  const handleNavigate = useCallback((destination) => {
    if (destination === "inicio") navigate("/");
    if (destination === "prestamos") navigate("/prestamos");
  }, [navigate]);
  const [containerItems] = useState([
    {
      containerMinWidth: "256px",
      containerHeight: undefined,
      containerIconFlex: 1,
      containerIconOverflow: "hidden",
      containerIconWidth: undefined,
      tagPadding: undefined,
      framePadding: "2px 9px",
      mATEMTICAS: "MATEMÁTICAS",
      containerPadding: "0px 0px 2px 3px",
      qumicaLaCienciaCentral: "Cálculo trascentes tempran...",
      brownLeMayBursten: "James Stewart",
      brownLeMayBurstenFlex: 1,
    },
    {
      containerMinWidth: "262px",
      containerHeight: undefined,
      containerIconFlex: 1,
      containerIconOverflow: undefined,
      containerIconWidth: undefined,
      tagPadding: undefined,
      framePadding: "2px 9px",
      mATEMTICAS: "MATEMÁTICAS",
      containerPadding: "0px 4px 2px 3px",
      qumicaLaCienciaCentral: "El libro de las matemáticas",
      coverSrc: "/prestamos/Container6@2x.png",
      brownLeMayBursten: "DK",
      brownLeMayBurstenFlex: "unset",
    },
    {
      containerMinWidth: "262px",
      containerHeight: undefined,
      containerIconFlex: 1,
      containerIconOverflow: undefined,
      containerIconWidth: undefined,
      tagPadding: "0px 8px 0px 0px",
      framePadding: "2px 9px 2px 10px",
      mATEMTICAS: "LITERATURA",
      containerPadding: "0px 4px 2px 3px",
      qumicaLaCienciaCentral: "eL GRAN GATSBY",
      coverSrc: "/prestamos/Container11@2x.png",
      brownLeMayBursten: "F. Scott Fitzgerald",
      brownLeMayBurstenFlex: 1,
    },
  ]);
  const onContainerClick = useCallback(() => {
    navigate("/prestamos/detalle-del-libro-4");
  }, [navigate]);
  const onContainerClick1 = useCallback(() => {
    // Please sync "Detalle del Libro 5" to the project
  }, []);
  const onContainerImageClick = useCallback(() => {
    // Please sync "Detalle del Libro 7" to the project
  }, []);
  const onInicioTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);
  const onResultadosTextClick = useCallback(() => {
    navigate("/prestamos");
  }, [navigate]);
  const onButtonClick = useCallback(() => {
    // Please sync "Página en Mantenimiento" to the project
  }, []);
  const onContainer1ItemClick = useCallback((index) => {
    if (index === 0) {
      onContainerClick();
    }
  }, []);
  return (
    <div className="detalle-del-libro-1">
      <AppSidebar activeItem="prestamos" onNavigate={handleNavigate} />
      <main className="main-column">
        <BookDetailTopBar />
        <section className="container">
          <div className="breadcrumb-nav">
            <div className="inicio-breadcrumb" onClick={onInicioTextClick}>
              Inicio
            </div>
            <div className="chevron-right">
              <img
                className="chevron-right-icon"
                loading="lazy"
                alt=""
                src="/prestamos/chevron-right2.svg"
              />
            </div>
            <div className="inicio-breadcrumb" onClick={onResultadosTextClick}>
              Resultados
            </div>
            <div className="chevron-right">
              <img
                className="chevron-right-icon"
                alt=""
                src="/prestamos/chevron-right2.svg"
              />
            </div>
            <div className="container2">
              <div className="fsica-universitaria-volumen">Calculus</div>
            </div>
          </div>
          <div className="book-detail-section">
            <section className="book-left-panel">
              <div className="container3">
                <img className="container-icon" alt="" src="/prestamos/Container10@2x.png" />
              </div>
              <button className="button" onClick={onButtonClick}>
                <div className="reservar-ahora">Reservar ahora</div>
              </button>
              <button className="button2" onClick={onButtonClick}>
                <img
                  className="chevron-right-icon"
                  alt=""
                  src="/prestamos/Book-open.svg"
                />
                <div className="leer-muestra-online">Leer Muestra Online</div>
              </button>
              <div className="action-icons-row">
                <button className="favorite-action">
                  <div className="heart">
                    <img
                      className="heart-icon"
                      loading="lazy"
                      alt=""
                      src="/prestamos/heart.svg"
                    />
                  </div>
                  <b className="favorito">Favorito</b>
                </button>
                <button className="share-action">
                  <img
                    className="heart-icon"
                    loading="lazy"
                    alt=""
                    src="/prestamos/share-2.svg"
                  />
                  <b className="favorito">Compartir</b>
                </button>
                <button className="cite-action">
                  <div className="download">
                    <img
                      className="heart-icon"
                      loading="lazy"
                      alt=""
                      src="/prestamos/download.svg"
                    />
                  </div>
                  <b className="favorito">Citar</b>
                </button>
              </div>
            </section>
            <div className="book-right-panel">
              <div className="book-meta-header">
                <div className="badge-and-rating-row">
                  <div className="tag">
                    <div className="tag-wrapper">
                      <b className="libro-de-texto">LIBRO DE TEXTO</b>
                    </div>
                  </div>
                  <div className="rating-group">
                    <div className="star">
                      <img
                        className="chevron-right-icon"
                        alt=""
                        src="/prestamos/star2.svg"
                      />
                    </div>
                    <b className="rating-score">4.7</b>
                    <div className="reseas">(21 reseñas)</div>
                  </div>
                </div>
                <h1 className="fsica-universitaria-volumen2">Calculus</h1>
                <h3 className="hugh-d-young">Michael Spivak</h3>
                <div className="edicin">3ª Edición</div>
              </div>
              <img className="line-icon" alt="" src="/prestamos/Line1.svg" />
              <div className="container4">
                <button className="button3">
                  <div className="leer-muestra-online">Información General</div>
                </button>
                <div className="button4">
                  <div className="disponibilidad-4">Disponibilidad (2)</div>
                </div>
                <div className="button5">
                  <div className="disponibilidad-4">Reseñas</div>
                </div>
              </div>
              <section className="tab-content-section">
                <div className="resumen-header">
                  <img
                    className="file-text-icon"
                    alt=""
                    src="/prestamos/file-text.svg"
                  />
                  <h3 className="resumen">Resumen</h3>
                </div>
                <div className="fsica-universitaria-con-fsic">
                  <div className="fsica-universitaria-con">
                    En esta edición, el autor mantiene intacto el principal
                    objetivo del libro, que no es otro que presentar el cálculo
                    como la evolución de una idea que ayude a desarrollar la
                    intuición del estudiante para la comprensión de los
                    conceptos del análisis y convencerle de que la precisión y
                    el rigor representan la manera natural de formular y pensar
                    sobre las cuestiones matemáticas.La principal novedad de
                    esta edición es la incorporación de problemas adicionales,
                    una puesta al día completa de las ...
                  </div>
                </div>
                <div className="container5">
                  <div className="info-row-1">
                    <div className="isbn-item">
                      <button className="container6">
                        <img
                          className="container-icon2"
                          alt=""
                          src="/prestamos/Container9.svg"
                        />
                      </button>
                      <div className="isbn-text-group">
                        <div className="pginas">ISBN-13</div>
                        <div className="separator">9788429151824</div>
                      </div>
                    </div>
                    <div className="pages-item">
                      <button className="container6">
                        <img
                          className="container-icon2"
                          alt=""
                          src="/prestamos/Container8.svg"
                        />
                      </button>
                      <div className="pages-text-group">
                        <div className="pginas">Páginas</div>
                        <div className="separator">704 páginas</div>
                      </div>
                    </div>
                  </div>
                  <div className="info-row-2">
                    <div className="publication-item">
                      <button className="container6">
                        <img
                          className="container-icon2"
                          alt=""
                          src="/prestamos/Container12.svg"
                        />
                      </button>
                      <div className="isbn-text-group">
                        <div className="pginas">Publicación</div>
                        <div className="separator">2012</div>
                      </div>
                    </div>
                    <div className="language-item">
                      <button className="container6">
                        <img
                          className="container-icon2"
                          alt=""
                          src="/prestamos/Container13.svg"
                        />
                      </button>
                      <div className="pages-text-group">
                        <div className="pginas">Idioma</div>
                        <div className="espaol">Español</div>
                      </div>
                    </div>
                  </div>
                  <div className="editorial-item">
                    <button className="container6">
                      <img
                        className="container-icon2"
                        alt=""
                        src="/prestamos/Container7.svg"
                      />
                    </button>
                    <div className="editorial-text-group">
                      <div className="pginas">Editorial</div>
                      <div className="separator">Reverte</div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <footer className="container11">
            <div className="container12">
              <img className="line-icon2" alt="" src="/prestamos/Line1.svg" />
              <h3 className="recomendados-para-ti">Recomendados para ti</h3>
              <div className="basado-en-tus">
                Basado en tus búsquedas de Ciencias e Ingeniería
              </div>
              <div className="book-cards-row">
                <BookSuggestionCard
                  coverSrc="/Frame1@3x.png"
                  framePadding="2px 9px"
                  mATEMTICAS="HISTORIA"
                  qumicaLaCienciaCentral="El miedo en Occidente"
                  brownLeMayBursten="Jean Delumeau"
                  brownLeMayBurstenFlex={1}
                  onContainerClick1={() => navigate("/prestamos/detalle-del-libro-2")}
                />
                {containerItems.map((item, index) => (
                  <BookSuggestionCard
                    key={index}
                    coverSrc={item.coverSrc}
                    containerMinWidth={item.containerMinWidth}
                    containerHeight={item.containerHeight}
                    containerIconFlex={item.containerIconFlex}
                    containerIconOverflow={item.containerIconOverflow}
                    containerIconWidth={item.containerIconWidth}
                    tagPadding={item.tagPadding}
                    framePadding={item.framePadding}
                    mATEMTICAS={item.mATEMTICAS}
                    containerPadding={item.containerPadding}
                    qumicaLaCienciaCentral={item.qumicaLaCienciaCentral}
                    brownLeMayBursten={item.brownLeMayBursten}
                    brownLeMayBurstenFlex={item.brownLeMayBurstenFlex}
                    onContainerClick1={() => onContainer1ItemClick(index)}
                  />
                ))}
              </div>
            </div>
          </footer>
          <BookDetailFooter />
        </section>
      </main>
    </div>
  );
};
export default DetalleLibroCalculus;
