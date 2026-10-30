import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./BookDetailSidebar.scss";
const BookDetailSidebar = ({ className = "" }) => {
  const navigate = useNavigate();
  const onButtonContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);
  const onButtonContainerClick1 = useCallback(() => {
    // Please sync "Mis Reservas" to the project
  }, []);
  const onButtonContainerClick2 = useCallback(() => {
    navigate("/prestamos");
  }, [navigate]);
  const onButtonContainerClick3 = useCallback(() => {
    // Please sync "Recomendaciones" to the project
  }, []);
  const onButtonContainerClick4 = useCallback(() => {
    // Please sync "Reservas de Sala" to the project
  }, []);
  return (
    <section className="container116">
      <div className="container117">
        <img className="line-icon23" alt="" src="/prestamos/Line.svg" />
        <div className="container118">
          <div className="container-column-03">
            <div className="container-column-0-row-03">
              <img
                className="container-icon34"
                alt=""
                src="/prestamos/Container1.svg"
              />
              <div className="bibliotecausm5">BibliotecaUSM</div>
            </div>
            <div className="button43" onClick={onButtonContainerClick}>
              <img className="house-icon5" alt="" src="/prestamos/House.svg" />
              <div className="inicio14">Inicio</div>
            </div>
            <div className="button44" onClick={onButtonContainerClick1}>
              <img
                className="house-icon5"
                alt=""
                src="/prestamos/Calendar-days.svg"
              />
              <div className="inicio14">Mis Reservas</div>
            </div>
            <div className="button44" onClick={onButtonContainerClick2}>
              <img
                className="house-icon5"
                alt=""
                src="/prestamos/Book-marked.svg"
              />
              <div className="inicio14">Mis Préstamos</div>
            </div>
            <div className="button46" onClick={onButtonContainerClick3}>
              <img
                className="house-icon5"
                alt=""
                src="/prestamos/Lightbulb.svg"
              />
              <div className="recomendaciones5">Recomendaciones</div>
            </div>
            <button className="button47">
              <div className="button48" onClick={onButtonContainerClick4}>
                <img
                  className="house-icon5"
                  alt=""
                  src="/prestamos/Users.svg"
                />
                <div className="reservas-de-sala5">Reservas de Sala</div>
              </div>
            </button>
            <div className="container119">
              <img className="line-icon24" alt="" src="/prestamos/Line1.svg" />
              <div className="biblioteca-usm5">© 2024 Biblioteca USM</div>
            </div>
          </div>
          <img className="line-icon25" alt="" src="/prestamos/Line.svg" />
        </div>
        <img
          className="container-icon35"
          alt=""
          src="/prestamos/Container1.svg"
        />
        <div className="bibliotecausm6">BibliotecaUSM</div>
        <div className="button49" onClick={onButtonContainerClick}>
          <img className="house-icon5" alt="" src="/prestamos/House.svg" />
          <div className="inicio14">Inicio</div>
        </div>
        <div className="button50" onClick={onButtonContainerClick1}>
          <img
            className="house-icon5"
            alt=""
            src="/prestamos/Calendar-days.svg"
          />
          <div className="inicio14">Mis Reservas</div>
        </div>
        <div className="button51" onClick={onButtonContainerClick2}>
          <img
            className="house-icon5"
            alt=""
            src="/prestamos/Book-marked.svg"
          />
          <div className="inicio14">Mis Préstamos</div>
        </div>
        <div className="button52" onClick={onButtonContainerClick3}>
          <img className="house-icon5" alt="" src="/prestamos/Lightbulb.svg" />
          <div className="recomendaciones5">Recomendaciones</div>
        </div>
        <div className="button53" onClick={onButtonContainerClick4}>
          <img className="house-icon5" alt="" src="/prestamos/Users.svg" />
          <div className="inicio14">Reservas de Sala</div>
        </div>
        <div className="container120">
          <img className="line-icon24" alt="" src="/prestamos/Line1.svg" />
          <div className="biblioteca-usm5">© 2024 Biblioteca USM</div>
        </div>
      </div>
      <div className="container120">
        <img className="line-icon24" alt="" src="/prestamos/Line1.svg" />
        <div className="biblioteca-usm5">© 2024 Biblioteca USM</div>
      </div>
      <div className="button54" onClick={onButtonContainerClick4}>
        <img className="house-icon5" alt="" src="/prestamos/Users.svg" />
        <div className="inicio14">Reservas de Sala</div>
      </div>
      <div className="button55" onClick={onButtonContainerClick3}>
        <img className="house-icon5" alt="" src="/prestamos/Lightbulb.svg" />
        <div className="recomendaciones5">Recomendaciones</div>
      </div>
      <div className="button56" onClick={onButtonContainerClick2}>
        <img className="house-icon5" alt="" src="/prestamos/Book-marked.svg" />
        <div className="inicio14">Mis Préstamos</div>
      </div>
      <div className="button57" onClick={onButtonContainerClick1}>
        <img
          className="house-icon5"
          alt=""
          src="/prestamos/Calendar-days.svg"
        />
        <div className="inicio14">Mis Reservas</div>
      </div>
      <div className="button58" onClick={onButtonContainerClick}>
        <img className="house-icon5" alt="" src="/prestamos/House.svg" />
        <div className="inicio14">Inicio</div>
      </div>
      <img
        className="container-icon36"
        alt=""
        src="/prestamos/Container1.svg"
      />
      <div className="bibliotecausm6">BibliotecaUSM</div>
      <img className="line-icon23" alt="" src="/prestamos/Line.svg" />
    </section>
  );
};
export default BookDetailSidebar;
