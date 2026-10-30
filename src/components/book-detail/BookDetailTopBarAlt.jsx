import BookDetailBreadcrumbBar from "./BookDetailBreadcrumbBar";
import "./BookDetailTopBarAlt.scss";
const BookDetailTopBarAlt = ({ className = "" }) => {
  return (
    <header className="container145">
      <div className="container146">
        <BookDetailBreadcrumbBar
          mergedAsset3Border="none"
          mergedAsset3BackgroundColor="transparent"
        />
        <div className="textbox13">
          <img className="search-icon9" alt="" src="/prestamos/Search.svg" />
          <input
            className="buscar-libros-salas9"
            placeholder="Buscar libros, salas..."
            type="text"
          />
        </div>
        <img
          className="container-icon46"
          alt=""
          src="/prestamos/Container.svg"
        />
        <img className="merged-asset-2-icon3" alt="" src="/prestamos/merged-asset-1.png" />
        <div className="estudiante9">Estudiante</div>
        <div className="biblioteca9">Biblioteca</div>
        <div className="header-info">/</div>
        <div className="inicio24">Inicio</div>
        <img className="line-icon40" alt="" src="/prestamos/Line1.svg" />
      </div>
      <div className="textbox13">
        <img className="search-icon9" alt="" src="/prestamos/Search.svg" />
        <input
          className="buscar-libros-salas9"
          placeholder="Buscar libros, salas..."
          type="text"
        />
      </div>
      <img className="container-icon46" alt="" src="/prestamos/Container.svg" />
      <img className="merged-asset-2-icon3" alt="" src="/prestamos/merged-asset-1.png" />
      <div className="estudiante9">Estudiante</div>
      <div className="biblioteca9">Biblioteca</div>
      <div className="header-info">/</div>
      <div className="inicio24">Inicio</div>
      <img className="line-icon40" alt="" src="/prestamos/Line1.svg" />
    </header>
  );
};
export default BookDetailTopBarAlt;
