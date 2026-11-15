import { useNavigate } from "react-router-dom";
import PaginaBiblioteca from "../components/busqueda/PaginaBiblioteca";
import { RUTAS } from "../routes";
import "./NoEncontrada.scss";

const NoEncontrada = () => {
  const navigate = useNavigate();
  return (
    <PaginaBiblioteca>
      <section className="no-encontrada">
        <p className="no-encontrada__codigo">404</p>
        <h1>Página no encontrada</h1>
        <p>La dirección que buscas no existe o cambió de lugar. Revisa el enlace o vuelve al inicio.</p>
        <div className="no-encontrada__acciones">
          <button type="button" className="no-encontrada__principal" onClick={() => navigate(RUTAS.inicio)}>Ir al inicio</button>
          <button type="button" onClick={() => navigate(RUTAS.catalogo)}>Buscar en el catálogo</button>
        </div>
      </section>
    </PaginaBiblioteca>
  );
};

export default NoEncontrada;
