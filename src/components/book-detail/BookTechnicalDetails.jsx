import { useMemo } from "react";
import "./BookTechnicalDetails.scss";
const BookTechnicalDetails = ({
  className = "",
  containerPadding,
  infoRow1Gap,
  infoRow1JustifyContent,
  separator,
  paginasItemMinWidth,
  pginas,
  infoRow2Padding,
  prop,
  editorialTextGroupMinWidth,
  pearsonEducacin,
}) => {
  const container7Style = useMemo(() => {
    return {
      padding: containerPadding,
    };
  }, [containerPadding]);
  return (
    <section className="container147" style={container7Style}>
      <div className="info-row-12">
        <div className="isbn-item3">
          <div className="container148">
            <img
              className="container-icon48"
              alt=""
              src="/prestamos/Container9.svg"
            />
          </div>
          <div className="isbn-text-group3">
            <div className="isbn-133">ISBN-13</div>
            <div className="separator2">{separator}</div>
          </div>
        </div>
        <div className="paginas-item2">
          <div className="container148">
            <img
              className="container-icon48"
              alt=""
              src="/prestamos/Container8.svg"
            />
          </div>
          <div className="paginas-text-group2">
            <div className="isbn-133">Páginas</div>
            <div className="separator2">{pginas}</div>
          </div>
        </div>
      </div>
      <div className="info-row-22">
        <div className="publicacion-item2">
          <div className="container148">
            <img
              className="container-icon48"
              alt=""
              src="/prestamos/Container12.svg"
            />
          </div>
          <div className="isbn-text-group3">
            <div className="isbn-133">Publicación</div>
            <div className="separator2">{prop}</div>
          </div>
        </div>
        <div className="idioma-item2">
          <div className="container148">
            <img
              className="container-icon48"
              alt=""
              src="/prestamos/Container13.svg"
            />
          </div>
          <div className="paginas-text-group2">
            <div className="isbn-133">Idioma</div>
            <div className="espaol3">Español</div>
          </div>
        </div>
      </div>
      <div className="editorial-item3">
        <div className="container148">
          <img
            className="container-icon48"
            alt=""
            src="/prestamos/Container7.svg"
          />
        </div>
        <div className="editorial-text-group3">
          <div className="isbn-133">Editorial</div>
          <div className="separator2">{pearsonEducacin}</div>
        </div>
      </div>
    </section>
  );
};
export default BookTechnicalDetails;
