import { lazy, Suspense, useEffect } from "react";
import { Route, Routes, useLocation, useNavigationType } from "react-router-dom";
import { RUTAS } from "./routes";

// Cada página se descarga recién cuando se visita.
const Inicio = lazy(() => import("./pages/Inicio"));
const Recomendaciones = lazy(() => import("./pages/Recomendaciones"));
const PrestamoHerramientas = lazy(() => import("./pages/PrestamoHerramientas"));
const PrestamoEquipos = lazy(() => import("./pages/PrestamoEquipos"));
const MisPrestamos = lazy(() => import("./pages/MisPrestamos"));
const DetalleLibroCalculus = lazy(() => import("./pages/DetalleLibroCalculus"));
const DetalleLibroMiedoOccidente = lazy(() => import("./pages/DetalleLibroMiedoOccidente"));
const DetalleLibroCalculoTrascendentes = lazy(() => import("./pages/DetalleLibroCalculoTrascendentes"));
const MisReservas = lazy(() => import("./pages/MisReservas"));
const ReservasDeSala = lazy(() => import("./pages/ReservasDeSala"));
const ResultadosDeBusqueda = lazy(() => import("./pages/ResultadosDeBusqueda"));
const ContactoBibliotecario = lazy(() => import("./pages/ContactoBibliotecario"));
const NoEncontrada = lazy(() => import("./pages/NoEncontrada"));

const DESCRIPCION_GENERAL = "BibliotecaUSM: recursos, reservas y apoyo académico.";

const metadataPorRuta = {
  [RUTAS.inicio]: ["BibliotecaUSM | Inicio", DESCRIPCION_GENERAL],
  [RUTAS.recomendaciones]: ["BibliotecaUSM | Recomendaciones de Estudio", "Selección académica de materiales de estudio de BibliotecaUSM."],
  [RUTAS.prestamos]: ["BibliotecaUSM | Préstamo de Herramientas", "Catálogo de préstamo de libros físicos, Arduinos y calculadoras."],
  [RUTAS.calculadoras]: ["BibliotecaUSM | Préstamo de Calculadoras", "Reserva calculadoras científicas y graficadoras para tus pruebas y laboratorios."],
  [RUTAS.arduinos]: ["BibliotecaUSM | Préstamo de Arduinos", "Reserva placas Arduino para tus proyectos y laboratorios."],
  [RUTAS["mis-prestamos"]]: ["BibliotecaUSM | Mis Préstamos", "Tus préstamos activos, devoluciones pendientes y solicitudes de renovación."],
  [RUTAS["libro-1"]]: ["BibliotecaUSM | Calculus", "Calculus de Michael Spivak: disponibilidad, reseñas y ficha técnica."],
  [RUTAS["libro-2"]]: ["BibliotecaUSM | El Miedo en Occidente", "El Miedo en Occidente de Jean Delumeau: disponibilidad, reseñas y ficha técnica."],
  [RUTAS["libro-4"]]: ["BibliotecaUSM | Cálculo Trascendentes Tempranas", "Cálculo Trascendentes Tempranas de James Stewart: disponibilidad, reseñas y ficha técnica."],
  [RUTAS.reservas]: ["BibliotecaUSM | Mis Reservas", "Gestiona tus reservas actuales de libros y salas de estudio."],
  [RUTAS.salas]: ["BibliotecaUSM | Reservas de Sala", "Reserva salas de estudio y colaboración grupal en la biblioteca."],
  [RUTAS.catalogo]: ["BibliotecaUSM | Resultados de búsqueda", "Busca libros del catálogo de BibliotecaUSM y filtra por disponibilidad, área y año."],
  [RUTAS.contacto]: ["BibliotecaUSM | Contacto con bibliotecario", "Conversa con un bibliotecario para encontrar el material que necesitas."],
};

function App() {
  const action = useNavigationType();
  const { pathname } = useLocation();

  useEffect(() => {
    if (action !== "POP") window.scrollTo(0, 0);
  }, [action, pathname]);

  useEffect(() => {
    const [title, description] = metadataPorRuta[pathname] ?? ["BibliotecaUSM | Página no encontrada", DESCRIPCION_GENERAL];
    document.title = title;
    const tag = document.querySelector('head > meta[name="description"]');
    if (tag) tag.content = description;
  }, [pathname]);

  return (
    <Suspense fallback={<div className="app-cargando" role="status">Cargando…</div>}>
      <Routes>
        <Route path={RUTAS.inicio} element={<Inicio />} />
        <Route path={RUTAS.recomendaciones} element={<Recomendaciones />} />
        <Route path={RUTAS.prestamos} element={<PrestamoHerramientas />} />
        <Route path={RUTAS.calculadoras} element={<PrestamoEquipos tipo="calculadoras" />} />
        <Route path={RUTAS.arduinos} element={<PrestamoEquipos tipo="arduinos" />} />
        <Route path={RUTAS["mis-prestamos"]} element={<MisPrestamos />} />
        <Route path={RUTAS["libro-1"]} element={<DetalleLibroCalculus />} />
        <Route path={RUTAS["libro-2"]} element={<DetalleLibroMiedoOccidente />} />
        <Route path={RUTAS["libro-4"]} element={<DetalleLibroCalculoTrascendentes />} />
        <Route path={RUTAS.reservas} element={<MisReservas />} />
        <Route path={RUTAS.salas} element={<ReservasDeSala />} />
        <Route path={RUTAS.catalogo} element={<ResultadosDeBusqueda />} />
        <Route path={RUTAS.contacto} element={<ContactoBibliotecario />} />
        <Route path="*" element={<NoEncontrada />} />
      </Routes>
    </Suspense>
  );
}

export default App;
