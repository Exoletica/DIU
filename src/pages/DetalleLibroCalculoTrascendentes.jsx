import { useCallback } from "react";
import BookDetailSidebarAlt from "../components/book-detail/BookDetailSidebarAlt";
import BookDetailTopBarAlt from "../components/book-detail/BookDetailTopBarAlt";
import BookTechnicalDetails from "../components/book-detail/BookTechnicalDetails";
import { useNavigate } from "react-router-dom";
import "../styles/prestamos-tokens.scss";
import "./DetalleLibroCalculoTrascendentes.scss";
const DetalleLibroCalculoTrascendentes = () => {
  const navigate = useNavigate();
  const onInicioTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);
  const onResultadosTextClick = useCallback(() => {
    // Please sync "Resultados de Búsqueda" to the project
  }, []);
  const onButtonClick = useCallback(() => {
    // Please sync "Página en Mantenimiento" to the project
  }, []);
  const onContainerClick = useCallback(() => {
    navigate("/prestamos/detalle-del-libro-2");
  }, [navigate]);
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
    <div className="detalle-del-libro-4">
      <BookDetailSidebarAlt />
      <main className="main-column3">
        <BookDetailTopBarAlt />
        <section className="container64">
          <div className="breadcrumb-nav3">
            <div className="inicio12" onClick={onInicioTextClick}>
              Inicio
            </div>
            <div className="chevron-right5">
              <img
                className="chevron-right-icon5"
                loading="lazy"
                alt=""
                src="/prestamos/chevron-right2.svg"
              />
            </div>
            <div className="inicio12" onClick={onResultadosTextClick}>
              Resultados
            </div>
            <div className="chevron-right5">
              <img
                className="chevron-right-icon5"
                alt=""
                src="/prestamos/chevron-right2.svg"
              />
            </div>
            <div className="container65">
              <div className="fsica-universitaria-volumen5">
                Cálculo Trascendentes Temp...
              </div>
            </div>
          </div>
          <div className="book-detail-main2">
            <section className="book-left-panel3">
              <div className="container66">
                <img className="container-icon25" alt="" />
              </div>
              <button className="button32" onClick={onButtonClick}>
                <div className="reservar-ahora3">Reservar ahora</div>
              </button>
              <button className="button33" onClick={onButtonClick}>
                <img
                  className="chevron-right-icon5"
                  alt=""
                  src="/prestamos/Book-open.svg"
                />
                <div className="leer-muestra-online3">Leer Muestra Online</div>
              </button>
              <div className="book-actions-row2">
                <button className="action-favorite">
                  <div className="heart3">
                    <img
                      className="heart-icon3"
                      loading="lazy"
                      alt=""
                      src="/prestamos/heart.svg"
                    />
                  </div>
                  <b className="favorito3">Favorito</b>
                </button>
                <button className="action-share">
                  <img
                    className="heart-icon3"
                    loading="lazy"
                    alt=""
                    src="/prestamos/share-2.svg"
                  />
                  <b className="favorito3">Compartir</b>
                </button>
                <button className="action-cite">
                  <div className="download3">
                    <img
                      className="heart-icon3"
                      loading="lazy"
                      alt=""
                      src="/prestamos/download.svg"
                    />
                  </div>
                  <b className="favorito3">Citar</b>
                </button>
              </div>
            </section>
            <div className="book-right-panel3">
              <div className="book-meta-header2">
                <div className="badge-and-rating">
                  <div className="tag9">
                    <div className="tag-wrapper2">
                      <b className="libro-de-texto3">LIBRO DE TEXTO</b>
                    </div>
                  </div>
                  <div className="rating-group3">
                    <div className="star4">
                      <img
                        className="chevron-right-icon5"
                        alt=""
                        src="/prestamos/star2.svg"
                      />
                    </div>
                    <b className="rating-label">4.9</b>
                    <div className="reseas5">(7 reseñas)</div>
                  </div>
                </div>
                <h1 className="fsica-universitaria-volumen6">
                  Cálculo Trascendentes Tempranas
                </h1>
                <h3 className="hugh-d-young3">James Stewart</h3>
                <div className="edicin3">7ª Edición</div>
              </div>
              <img className="line-icon18" alt="" src="/prestamos/Line1.svg" />
              <div className="container67">
                <button className="button34">
                  <div className="leer-muestra-online3">
                    Información General
                  </div>
                </button>
                <div className="button35">
                  <div className="disponibilidad-43">Disponibilidad (10)</div>
                </div>
                <div className="button36">
                  <div className="disponibilidad-43">Reseñas</div>
                </div>
              </div>
              <section className="resumen-section">
                <div className="resumen-header3">
                  <div
                    className="heart-icon3"
                    alt=""
                    src="/prestamos/file-text.svg"
                  >
                    <label className="label2" htmlFor="file-119:17127" />
                    <input className="input2" type="file" id="file-119:17127" />
                  </div>
                  <h3 className="resumen3">Resumen</h3>
                </div>
                <div className="fsica-universitaria-con3">
                  Cálculo Trascendentes Tempranas es ampliamente reconocido por
                  su precisión matemática y la exactitud, claridad de la
                  exposición y notables ejemplos y conjuntos de problemas.
                  Millones de estudiantes en todo el mundo han estudiado el
                  cálculo a través del estilo registrado de Stewart, mientras
                  que los instructores han adoptado su planteamiento una y otra
                  vez.
                </div>
              </section>
              <BookTechnicalDetails
                infoRow1Gap="8px"
                separator="9786074817836"
                paginasItemMinWidth="142px"
                pginas="1350 páginas"
                infoRow2Padding="0px 41px 0px 0px"
                prop="2010"
                editorialTextGroupMinWidth="297px"
                pearsonEducacin="Cengage Learning"
              />
            </div>
          </div>
          <div className="container68">
            <div className="container69">
              <img className="line-icon19" alt="" src="/prestamos/Line1.svg" />
              <div className="section-header2">
                <h3 className="recomendados-para-ti3">Recomendados para ti</h3>
                <div className="edicin3">
                  Basado en tus búsquedas de Ciencias e Ingeniería
                </div>
              </div>
              <section className="books-row">
                <div className="container70" onClick={onContainerClick}>
                  <div className="container71">
                    <img className="container-icon26" alt="" />
                  </div>
                  <div className="tag-container2">
                    <div className="tag-list">
                      <b className="fsica2">HISTORIA</b>
                    </div>
                  </div>
                  <div className="container72">
                    <div className="container73">
                      <div className="clculo-de-una2">
                        eL mIEDO EN OCCIDENTE
                      </div>
                    </div>
                  </div>
                  <div className="container74">
                    <div className="container73">
                      <div className="james-stewart2">Jean Delumeau</div>
                    </div>
                  </div>
                </div>
                <div className="container76" onClick={onContainerClick1}>
                  <div className="container77">
                    <img
                      className="container-icon26"
                      alt=""
                      src="/prestamos/Container6@2x.png"
                    />
                  </div>
                  <div className="tag10">
                    <div className="tag11">
                      <div className="frame4">
                        <b className="fsica2">MATEMÁTICAS</b>
                      </div>
                    </div>
                  </div>
                  <div className="container78">
                    <div className="container73">
                      <div className="clculo-de-una2">
                        El libro de las matemáticas
                      </div>
                    </div>
                  </div>
                  <div className="container80">
                    <div className="container73">
                      <div className="libro-de-texto3">DK</div>
                    </div>
                  </div>
                </div>
                <div className="container82">
                  <div className="container83" onClick={onContainerClick2}>
                    <div className="container84">
                      <img
                        className="container-icon28"
                        alt=""
                        src="/prestamos/Container10@2x.png"
                      />
                    </div>
                    <div className="tag10">
                      <div className="tag11">
                        <div className="frame4">
                          <b className="fsica2">MATEMÁTICAS</b>
                        </div>
                      </div>
                    </div>
                    <div className="container78">
                      <div className="container73">
                        <div className="clculo-de-una2">Calculus</div>
                      </div>
                    </div>
                    <div className="container80">
                      <div className="container73">
                        <div className="james-stewart2">Michael Spivak</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container89" onClick={onContainerClick1}>
                  <div className="container84">
                    <img
                      className="container-icon29"
                      alt=""
                      src="/prestamos/Container11@2x.png"
                      onClick={onContainerImageClick}
                    />
                  </div>
                  <div className="tag10">
                    <div className="tag15">
                      <div className="frame6">
                        <b className="fsica2">LITERATURA</b>
                      </div>
                    </div>
                  </div>
                  <div className="container78">
                    <div className="container73">
                      <div className="clculo-de-una2">eL GRAN GATSBY</div>
                    </div>
                  </div>
                  <div className="container80">
                    <div className="container73">
                      <div className="james-stewart2">F. Scott Fitzgerald</div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <section className="container95">
            <img className="line-icon20" alt="" src="/prestamos/Line1.svg" />
            <div className="container-row-12">
              <div className="libro-de-texto3">Políticas de Préstamo</div>
              <div className="libro-de-texto3">Guía de Usuario</div>
              <div className="libro-de-texto3">Soporte Biblioteca</div>
            </div>
            <div className="container-row-22">
              <img className="globe-icon2" alt="" src="/prestamos/globe.svg" />
              <div className="red-de-bibliotecas2">
                Red de Bibliotecas USM — Chile, 2024
              </div>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
};
export default DetalleLibroCalculoTrascendentes;
