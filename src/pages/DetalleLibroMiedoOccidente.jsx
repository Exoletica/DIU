import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/prestamos-tokens.scss";
import "./DetalleLibroMiedoOccidente.scss";
const DetalleLibroMiedoOccidente = () => {
  const navigate = useNavigate();
  const onButtonContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);
  const onButtonContainerClick1 = useCallback(() => {
    navigate("/mis-reservas");
  }, [navigate]);
  const onButtonContainerClick2 = useCallback(() => {
    navigate("/prestamos");
  }, [navigate]);
  const onButtonContainerClick3 = useCallback(() => {
    // Please sync "Recomendaciones" to the project
  }, []);
  const onButtonContainerClick4 = useCallback(() => {
    navigate("/reservas-de-sala");
  }, [navigate]);
  const onTextboxContainerClick = useCallback(() => {
    // Please sync "Resultados de Búsqueda" to the project
  }, []);
  const onButtonClick = useCallback(() => {
    // Please sync "Página en Mantenimiento" to the project
  }, []);
  const onContainerClick = useCallback(() => {
    // Please sync "Detalle del Libro 8" to the project
  }, []);
  const onContainerClick1 = useCallback(() => {
    // Please sync "Detalle del Libro 5" to the project
  }, []);
  const onContainerClick2 = useCallback(() => {
    navigate("/prestamos/detalle-del-libro-1");
  }, [navigate]);
  const onContainerImageClick = useCallback(() => {
    // Please sync "Detalle del Libro 7" to the project
  }, []);
  return (
    <div className="detalle-del-libro-2">
      <section className="container17">
        <img className="line-icon6" alt="" src="/prestamos/Line.svg" />
        <div className="container18">
          <img className="line-icon6" alt="" src="/prestamos/Line.svg" />
          <div className="container19">
            <div className="container-column-02">
              <div className="container-column-0-row-02">
                <img
                  className="container-icon9"
                  alt=""
                  src="/prestamos/Container1.svg"
                />
                <div className="bibliotecausm2">BibliotecaUSM</div>
              </div>
              <div className="button11" onClick={onButtonContainerClick}>
                <img className="file-text" alt="" src="/prestamos/House.svg" />
                <div className="inicio5">Inicio</div>
              </div>
              <div className="button12" onClick={onButtonContainerClick1}>
                <img
                  className="file-text"
                  alt=""
                  src="/prestamos/Calendar-days.svg"
                />
                <div className="inicio5">Mis Reservas</div>
              </div>
              <div className="button12" onClick={onButtonContainerClick2}>
                <img
                  className="file-text"
                  alt=""
                  src="/prestamos/Book-marked.svg"
                />
                <div className="inicio5">Mis Préstamos</div>
              </div>
              <div className="button14" onClick={onButtonContainerClick3}>
                <img
                  className="file-text"
                  alt=""
                  src="/prestamos/Lightbulb.svg"
                />
                <div className="recomendaciones2">Recomendaciones</div>
              </div>
              <button className="button15">
                <div className="button16" onClick={onButtonContainerClick4}>
                  <img
                    className="file-text"
                    alt=""
                    src="/prestamos/Users.svg"
                  />
                  <div className="reservas-de-sala2">Reservas de Sala</div>
                </div>
              </button>
              <div className="container20">
                <img className="line-icon8" alt="" src="/prestamos/Line1.svg" />
                <div className="biblioteca-usm2">© 2024 Biblioteca USM</div>
              </div>
            </div>
            <img className="line-icon9" alt="" src="/prestamos/Line.svg" />
          </div>
          <img
            className="container-icon10"
            alt=""
            src="/prestamos/Container1.svg"
          />
          <div className="bibliotecausm3">BibliotecaUSM</div>
          <div className="button17" onClick={onButtonContainerClick}>
            <img className="file-text" alt="" src="/prestamos/House.svg" />
            <div className="inicio5">Inicio</div>
          </div>
          <div className="button18" onClick={onButtonContainerClick1}>
            <img
              className="file-text"
              alt=""
              src="/prestamos/Calendar-days.svg"
            />
            <div className="inicio5">Mis Reservas</div>
          </div>
          <div className="button19" onClick={onButtonContainerClick2}>
            <img
              className="file-text"
              alt=""
              src="/prestamos/Book-marked.svg"
            />
            <div className="inicio5">Mis Préstamos</div>
          </div>
          <div className="button20" onClick={onButtonContainerClick3}>
            <img className="file-text" alt="" src="/prestamos/Lightbulb.svg" />
            <div className="recomendaciones2">Recomendaciones</div>
          </div>
          <div className="button21" onClick={onButtonContainerClick4}>
            <img className="file-text" alt="" src="/prestamos/Users.svg" />
            <div className="inicio5">Reservas de Sala</div>
          </div>
          <div className="container21">
            <img className="line-icon8" alt="" src="/prestamos/Line1.svg" />
            <div className="biblioteca-usm2">© 2024 Biblioteca USM</div>
          </div>
        </div>
        <img
          className="container-icon10"
          alt=""
          src="/prestamos/Container1.svg"
        />
        <div className="bibliotecausm3">BibliotecaUSM</div>
        <div className="button17" onClick={onButtonContainerClick}>
          <img className="file-text" alt="" src="/prestamos/House.svg" />
          <div className="inicio5">Inicio</div>
        </div>
        <div className="button18" onClick={onButtonContainerClick1}>
          <img
            className="file-text"
            alt=""
            src="/prestamos/Calendar-days.svg"
          />
          <div className="inicio5">Mis Reservas</div>
        </div>
        <div className="button19" onClick={onButtonContainerClick2}>
          <img className="file-text" alt="" src="/prestamos/Book-marked.svg" />
          <div className="inicio5">Mis Préstamos</div>
        </div>
        <div className="button20" onClick={onButtonContainerClick3}>
          <img className="file-text" alt="" src="/prestamos/Lightbulb.svg" />
          <div className="recomendaciones2">Recomendaciones</div>
        </div>
        <div className="button21" onClick={onButtonContainerClick4}>
          <img className="file-text" alt="" src="/prestamos/Users.svg" />
          <div className="inicio5">Reservas de Sala</div>
        </div>
        <div className="container21">
          <img className="line-icon8" alt="" src="/prestamos/Line1.svg" />
          <div className="biblioteca-usm2">© 2024 Biblioteca USM</div>
        </div>
      </section>
      <main className="main-column2">
        <header className="container23">
          <div className="container24">
            <img className="line-icon12" alt="" src="/prestamos/Line1.svg" />
            <div className="container25">
              <div className="container-row-02">
                <div className="inicio8" onClick={onButtonContainerClick}>
                  Inicio
                </div>
                <div className="search-info">/</div>
                <div className="biblioteca2">Biblioteca</div>
                <div className="textbox3">
                  <div className="textbox4" onClick={onTextboxContainerClick}>
                    <img
                      className="search-icon2"
                      alt=""
                      src="/prestamos/Search.svg"
                    />
                    <input
                      className="buscar-libros-salas2"
                      placeholder="Buscar libros, salas..."
                      type="text"
                    />
                  </div>
                </div>
                <button className="merged-asset-3">
                  <img className="merged-asset-3-icon" loading="lazy" alt="" />
                </button>
                <button className="container26">
                  <img
                    className="container-icon12"
                    alt=""
                    src="/prestamos/Container.svg"
                  />
                </button>
                <div className="estudiante2">Estudiante</div>
              </div>
              <img className="line-icon8" alt="" src="/prestamos/Line1.svg" />
            </div>
            <div className="inicio9">Inicio</div>
            <div className="header-title">/</div>
            <div className="biblioteca3">Biblioteca</div>
            <div className="textbox5">
              <img
                className="search-icon2"
                alt=""
                src="/prestamos/Search.svg"
              />
              <input
                className="buscar-libros-salas3"
                placeholder="Buscar libros, salas..."
                type="text"
              />
            </div>
            <img className="merged-asset-2-icon" alt="" />
            <img
              className="container-icon13"
              alt=""
              src="/prestamos/Container.svg"
            />
            <div className="estudiante3">Estudiante</div>
          </div>
          <div className="textbox6">
            <img className="search-icon2" alt="" src="/prestamos/Search.svg" />
            <input
              className="buscar-libros-salas3"
              placeholder="Buscar libros, salas..."
              type="text"
            />
          </div>
          <img
            className="container-icon13"
            alt=""
            src="/prestamos/Container.svg"
          />
          <img className="merged-asset-2-icon" alt="" />
          <div className="estudiante3">Estudiante</div>
          <div className="biblioteca4">Biblioteca</div>
          <div className="header-title">/</div>
          <div className="inicio9">Inicio</div>
          <img className="line-icon12" alt="" src="/prestamos/Line1.svg" />
        </header>
        <section className="container27">
          <div className="breadcrumb-nav2">
            <div className="inicio11" onClick={onButtonContainerClick}>
              Inicio
            </div>
            <div className="chevron-right3">
              <img
                className="search-icon2"
                loading="lazy"
                alt=""
                src="/prestamos/chevron-right2.svg"
              />
            </div>
            <div className="inicio11" onClick={onTextboxContainerClick}>
              Resultados
            </div>
            <div className="chevron-right3">
              <img
                className="search-icon2"
                alt=""
                src="/prestamos/chevron-right2.svg"
              />
            </div>
            <div className="container28">
              <div className="fsica-universitaria-volumen3">
                El Miedo en Occidente
              </div>
            </div>
          </div>
          <div className="book-detail-main">
            <section className="book-left-panel2">
              <div className="container29">
                <img className="container-icon15" alt="" />
              </div>
              <button className="button27" onClick={onButtonClick}>
                <div className="reservar-ahora2">Reservar ahora</div>
              </button>
              <button className="button28" onClick={onButtonClick}>
                <img
                  className="search-icon2"
                  alt=""
                  src="/prestamos/Book-open.svg"
                />
                <div className="leer-muestra-online2">Leer Muestra Online</div>
              </button>
              <div className="book-actions-row">
                <button className="action-favorito">
                  <div className="heart2">
                    <img
                      className="file-text"
                      loading="lazy"
                      alt=""
                      src="/prestamos/heart.svg"
                    />
                  </div>
                  <b className="favorito2">Favorito</b>
                </button>
                <button className="action-compartir">
                  <img
                    className="file-text"
                    loading="lazy"
                    alt=""
                    src="/prestamos/share-2.svg"
                  />
                  <b className="favorito2">Compartir</b>
                </button>
                <button className="action-citar">
                  <div className="download2">
                    <img
                      className="file-text"
                      loading="lazy"
                      alt=""
                      src="/prestamos/download.svg"
                    />
                  </div>
                  <b className="favorito2">Citar</b>
                </button>
              </div>
            </section>
            <div className="book-right-panel2">
              <div className="book-badge-rating-row">
                <div className="tag2">
                  <div className="badge-wrapper">
                    <b className="gilbert-strang">LIBRO DE TEXTO</b>
                  </div>
                </div>
                <div className="rating-group2">
                  <div className="star3">
                    <img
                      className="search-icon2"
                      alt=""
                      src="/prestamos/star2.svg"
                    />
                  </div>
                  <b className="rating-value">4.8</b>
                  <div className="reseas3">(7 reseñas)</div>
                </div>
              </div>
              <div className="book-title-meta">
                <h1 className="fsica-universitaria-volumen4">
                  El Miedo en Occidente
                </h1>
                <h3 className="hugh-d-young2">Jean Delumeau</h3>
                <div className="edicin2">1ª Edición</div>
              </div>
              <div className="line">
                <img
                  className="line-icon15"
                  alt=""
                  src="/prestamos/Line1.svg"
                />
              </div>
              <div className="container30">
                <button className="button29">
                  <div className="leer-muestra-online2">
                    Información General
                  </div>
                </button>
                <div className="button30">
                  <div className="recomendaciones2">Disponibilidad (10)</div>
                </div>
                <div className="button31">
                  <div className="recomendaciones2">Reseñas</div>
                </div>
              </div>
              <div className="resumen-header2">
                <div
                  className="file-text"
                  alt=""
                  src="/prestamos/file-text.svg"
                >
                  <label className="label" htmlFor="file-102:16077" />
                  <input className="input" type="file" id="file-102:16077" />
                </div>
                <h3 className="resumen2">Resumen</h3>
              </div>
              <div className="fsica-universitaria-con-fsic2">
                <div className="fsica-universitaria-con2">
                  Esta historia del miedo, asimismo una historia de las
                  mentalidades, demuestra que no solo los individuos, sino
                  también las colectividades e incluso las civilizaciones,
                  pueden estar atrapados en un permanente diálogo con el miedo.
                  El autor traza el retrato de una sociedad traumatizada por la
                  peste, las guerras, las disputas religiosas y la constante
                  inseguridad, y analiza la instrumentalización del terror,
                  sobre todo por parte de la Iglesia. 
                </div>
              </div>
              <section className="container31">
                <div className="metadata-row-1">
                  <div className="isbn-item2">
                    <div className="container32">
                      <img
                        className="container-icon16"
                        alt=""
                        src="/prestamos/Container9.svg"
                      />
                    </div>
                    <div className="publicacion-text-group">
                      <div className="isbn-132">ISBN-13</div>
                      <div className="metadata-separator">9788430622856</div>
                    </div>
                  </div>
                  <div className="paginas-item">
                    <div className="container32">
                      <img
                        className="container-icon16"
                        alt=""
                        src="/prestamos/Container8.svg"
                      />
                    </div>
                    <div className="paginas-text-group">
                      <div className="isbn-132">Páginas</div>
                      <div className="metadata-separator">752 páginas</div>
                    </div>
                  </div>
                </div>
                <div className="metadata-row-2">
                  <div className="publicacion-item">
                    <div className="container32">
                      <img
                        className="container-icon16"
                        alt=""
                        src="/prestamos/Container12.svg"
                      />
                    </div>
                    <div className="publicacion-text-group">
                      <div className="isbn-132">Publicación</div>
                      <div className="metadata-separator">2019</div>
                    </div>
                  </div>
                  <div className="idioma-item">
                    <div className="container32">
                      <img
                        className="container-icon16"
                        alt=""
                        src="/prestamos/Container13.svg"
                      />
                    </div>
                    <div className="paginas-text-group">
                      <div className="isbn-132">Idioma</div>
                      <div className="metadata-separator">Castellano</div>
                    </div>
                  </div>
                </div>
                <div className="editorial-item2">
                  <div className="container32">
                    <img
                      className="container-icon16"
                      alt=""
                      src="/prestamos/Container7.svg"
                    />
                  </div>
                  <div className="editorial-text-group2">
                    <div className="isbn-132">Editorial</div>
                    <div className="metadata-separator">Taurus</div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div className="container37">
            <div className="container38">
              <img className="line-icon16" alt="" src="/prestamos/Line1.svg" />
              <div className="detalle-section-header">
                <h3 className="recomendados-para-ti2">Recomendados para ti</h3>
                <div className="edicin2">
                  Basado en tus búsquedas de Ciencias e Ingeniería
                </div>
              </div>
              <section className="book-cards-row2">
                <div className="container39" onClick={onContainerClick}>
                  <div className="container40">
                    <img className="container-icon21" alt="" />
                  </div>
                  <div className="tag-container">
                    <div className="tag-row">
                      <b className="fsica">HISTORIA</b>
                    </div>
                  </div>
                  <div className="container41">
                    <div className="container42">
                      <div className="clculo-de-una">
                        Historia de la filosofía
                      </div>
                    </div>
                  </div>
                  <div className="container43">
                    <div className="container42">
                      <div className="james-stewart">Julián Marías</div>
                    </div>
                  </div>
                </div>
                <div className="container45" onClick={onContainerClick1}>
                  <div className="container46">
                    <img
                      className="container-icon21"
                      alt=""
                      src="/prestamos/Container6@2x.png"
                    />
                  </div>
                  <div className="tag3">
                    <div className="tag4">
                      <div className="frame">
                        <b className="fsica">MATEMÁTICAS</b>
                      </div>
                    </div>
                  </div>
                  <div className="container47">
                    <div className="container42">
                      <div className="lgebra-lineal-aplicada">
                        El libro de las matemáticas
                      </div>
                    </div>
                  </div>
                  <div className="container49">
                    <div className="container42">
                      <div className="gilbert-strang">DK</div>
                    </div>
                  </div>
                </div>
                <div className="container51" onClick={onContainerClick2}>
                  <div className="container52">
                    <img
                      className="container-icon23"
                      alt=""
                      src="/prestamos/Container10@2x.png"
                    />
                  </div>
                  <div className="tag3">
                    <div className="tag4">
                      <div className="frame">
                        <b className="fsica">MATEMÁTICAS</b>
                      </div>
                    </div>
                  </div>
                  <div className="container47">
                    <div className="container42">
                      <div className="lgebra-lineal-aplicada">Calculus</div>
                    </div>
                  </div>
                  <div className="container49">
                    <div className="container42">
                      <div className="james-stewart">Michael Spivak</div>
                    </div>
                  </div>
                </div>
                <div className="container51" onClick={onContainerClick1}>
                  <div className="container52">
                    <img
                      className="container-icon24"
                      alt=""
                      src="/prestamos/Container11@2x.png"
                      onClick={onContainerImageClick}
                    />
                  </div>
                  <div className="tag3">
                    <div className="tag8">
                      <div className="frame3">
                        <b className="fsica">LITERATURA</b>
                      </div>
                    </div>
                  </div>
                  <div className="container47">
                    <div className="container42">
                      <div className="lgebra-lineal-aplicada">
                        eL GRAN GATSBY
                      </div>
                    </div>
                  </div>
                  <div className="container49">
                    <div className="container42">
                      <div className="james-stewart">F. Scott Fitzgerald</div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <section className="container63">
            <img className="line-icon8" alt="" src="/prestamos/Line1.svg" />
            <div className="container-row-1">
              <div className="gilbert-strang">Políticas de Préstamo</div>
              <div className="gilbert-strang">Guía de Usuario</div>
              <div className="gilbert-strang">Soporte Biblioteca</div>
            </div>
            <div className="container-row-2">
              <img className="globe-icon" alt="" src="/prestamos/globe.svg" />
              <div className="red-de-bibliotecas">
                Red de Bibliotecas USM — Chile, 2024
              </div>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
};
export default DetalleLibroMiedoOccidente;
