import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./BookDetailSidebarAlt.scss";
const BookDetailSidebarAlt = ({ className = "" }) => {
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
    navigate("/recomendaciones");
  }, [navigate]);
  const onButtonContainerClick4 = useCallback(() => {
    navigate("/reservas-de-sala");
  }, [navigate]);
  return (
    <section className="container137">
      <img className="line-icon33" alt="" src="/prestamos/Line.svg" />
      <div className="container138">
        <img className="line-icon33" alt="" src="/prestamos/Line.svg" />
        <div className="container139">
          <div className="container-column-04">
            <div className="container-column-0-row-04">
              <img
                className="container-icon42"
                alt=""
                src="/prestamos/Container1.svg"
              />
              <div className="bibliotecausm8">BibliotecaUSM</div>
            </div>
            <div className="button60" onClick={onButtonContainerClick}>
              <img className="house-icon8" alt="" src="/prestamos/House.svg" />
              <div className="inicio20">Inicio</div>
            </div>
            <div className="button61" onClick={onButtonContainerClick1}>
              <img
                className="house-icon8"
                alt=""
                src="/prestamos/Calendar-days.svg"
              />
              <div className="inicio20">Mis Reservas</div>
            </div>
            <div className="button61" onClick={onButtonContainerClick2}>
              <img
                className="house-icon8"
                alt=""
                src="/prestamos/Book-marked.svg"
              />
              <div className="inicio20">Mis Préstamos</div>
            </div>
            <div className="button63" onClick={onButtonContainerClick3}>
              <img
                className="house-icon8"
                alt=""
                src="/prestamos/Lightbulb.svg"
              />
              <div className="recomendaciones8">Recomendaciones</div>
            </div>
            <button className="button64">
              <div className="button65" onClick={onButtonContainerClick4}>
                <img
                  className="house-icon8"
                  alt=""
                  src="/prestamos/Users.svg"
                />
                <div className="reservas-de-sala8">Reservas de Sala</div>
              </div>
            </button>
            <div className="container140">
              <img className="line-icon35" alt="" src="/prestamos/Line1.svg" />
              <div className="biblioteca-usm8">© 2024 Biblioteca USM</div>
            </div>
          </div>
          <img className="line-icon36" alt="" src="/prestamos/Line.svg" />
        </div>
        <img
          className="container-icon43"
          alt=""
          src="/prestamos/Container1.svg"
        />
        <div className="bibliotecausm9">BibliotecaUSM</div>
        <div className="button66" onClick={onButtonContainerClick}>
          <img className="house-icon8" alt="" src="/prestamos/House.svg" />
          <div className="inicio20">Inicio</div>
        </div>
        <div className="button67" onClick={onButtonContainerClick1}>
          <img
            className="house-icon8"
            alt=""
            src="/prestamos/Calendar-days.svg"
          />
          <div className="inicio20">Mis Reservas</div>
        </div>
        <div className="button68" onClick={onButtonContainerClick2}>
          <img
            className="house-icon8"
            alt=""
            src="/prestamos/Book-marked.svg"
          />
          <div className="inicio20">Mis Préstamos</div>
        </div>
        <div className="button69" onClick={onButtonContainerClick3}>
          <img className="house-icon8" alt="" src="/prestamos/Lightbulb.svg" />
          <div className="recomendaciones8">Recomendaciones</div>
        </div>
        <div className="button70" onClick={onButtonContainerClick4}>
          <img className="house-icon8" alt="" src="/prestamos/Users.svg" />
          <div className="inicio20">Reservas de Sala</div>
        </div>
        <div className="container141">
          <img className="line-icon35" alt="" src="/prestamos/Line1.svg" />
          <div className="biblioteca-usm8">© 2024 Biblioteca USM</div>
        </div>
      </div>
      <img
        className="container-icon43"
        alt=""
        src="/prestamos/Container1.svg"
      />
      <div className="bibliotecausm9">BibliotecaUSM</div>
      <div className="button66" onClick={onButtonContainerClick}>
        <img className="house-icon8" alt="" src="/prestamos/House.svg" />
        <div className="inicio20">Inicio</div>
      </div>
      <div className="button67" onClick={onButtonContainerClick1}>
        <img
          className="house-icon8"
          alt=""
          src="/prestamos/Calendar-days.svg"
        />
        <div className="inicio20">Mis Reservas</div>
      </div>
      <div className="button68" onClick={onButtonContainerClick2}>
        <img className="house-icon8" alt="" src="/prestamos/Book-marked.svg" />
        <div className="inicio20">Mis Préstamos</div>
      </div>
      <div className="button69" onClick={onButtonContainerClick3}>
        <img className="house-icon8" alt="" src="/prestamos/Lightbulb.svg" />
        <div className="recomendaciones8">Recomendaciones</div>
      </div>
      <div className="button70" onClick={onButtonContainerClick4}>
        <img className="house-icon8" alt="" src="/prestamos/Users.svg" />
        <div className="inicio20">Reservas de Sala</div>
      </div>
      <div className="container141">
        <img className="line-icon35" alt="" src="/prestamos/Line1.svg" />
        <div className="biblioteca-usm8">© 2024 Biblioteca USM</div>
      </div>
    </section>
  );
};
export default BookDetailSidebarAlt;
