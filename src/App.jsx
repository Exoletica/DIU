import { useEffect } from "react";
import { Route, Routes, useLocation, useNavigationType } from "react-router-dom";
import Inicio from "./pages/Inicio";
import PrestamoHerramientas from "./pages/PrestamoHerramientas";
import DetalleLibroCalculus from "./pages/DetalleLibroCalculus";
import DetalleLibroMiedoOccidente from "./pages/DetalleLibroMiedoOccidente";
import DetalleLibroCalculoTrascendentes from "./pages/DetalleLibroCalculoTrascendentes";

const metadataPorRuta = {
  "/": ["BibliotecaUSM | Inicio", "BibliotecaUSM: recursos, reservas y apoyo académico."],
  "/prestamos": ["BibliotecaUSM | Préstamo de Herramientas", "Catálogo de préstamo de libros físicos, Arduinos y calculadoras."],
  "/detalle-del-libro-1": ["BibliotecaUSM | Calculus", "Calculus de Michael Spivak: disponibilidad, reseñas y ficha técnica."],
  "/detalle-del-libro-2": ["BibliotecaUSM | El Miedo en Occidente", "El Miedo en Occidente de Jean Delumeau: disponibilidad, reseñas y ficha técnica."],
  "/detalle-del-libro-4": ["BibliotecaUSM | Cálculo Trascendentes Tempranas", "Cálculo Trascendentes Tempranas de James Stewart: disponibilidad, reseñas y ficha técnica."],
};

function App() {
  const action = useNavigationType();
  const { pathname } = useLocation();

  useEffect(() => {
    if (action !== "POP") window.scrollTo(0, 0);
  }, [action, pathname]);

  useEffect(() => {
    const metadata = metadataPorRuta[pathname];
    if (!metadata) return;
    const [title, description] = metadata;
    document.title = title;
    const tag = document.querySelector('head > meta[name="description"]');
    if (tag) tag.content = description;
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/prestamos" element={<PrestamoHerramientas />} />
      <Route path="/detalle-del-libro-1" element={<DetalleLibroCalculus />} />
      <Route path="/detalle-del-libro-2" element={<DetalleLibroMiedoOccidente />} />
      <Route path="/detalle-del-libro-4" element={<DetalleLibroCalculoTrascendentes />} />
    </Routes>
  );
}

export default App;
