import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import PaginaBiblioteca from "../components/busqueda/PaginaBiblioteca";
import { CheckIcon, ClockIcon, ChevronIcon, InfoIcon } from "../components/my-loans/LoanIcons";
import "./ResultadosDeBsqueda.scss";

// Resultados de ejemplo. ruta: ficha del libro (null = aún no tiene página)
const resultados = [
  {
    id: "calculus", titulo: "Calculus", autor: "Michael Spivak", edicion: "3ª Edición", area: "Matemáticas", anio: 2012,
    portada: "/calculus.png", disponible: true, destacado: true, ruta: "/prestamos/detalle-del-libro-1",
    descripcion: "El cálculo como la evolución de una idea que ayude a desarrollar la intuición del estudiante para la comprensión de los conceptos del análisis y convencerle de que la precisión y el rigor representan la manera natural de formular y pensar sobre las cuestiones matemáticas.",
  },
  {
    id: "stewart", titulo: "Cálculo Trascendentes Tempranas", autor: "James Stewart", edicion: "7ª Edición", area: "Matemáticas", anio: 2012,
    portada: "/calculo-trascendentes-tempranas.png", disponible: false, ruta: "/prestamos/detalle-del-libro-4",
    descripcion: "Ampliamente reconocido por su precisión matemática y exactitud, claridad de la exposición y notables ejemplos y conjuntos de problemas.",
  },
  {
    id: "tecnologia", titulo: "Historia de la Tecnología desde 1900 hasta 1950", autor: "Trevor Williams", edicion: "8ª Edición", area: "Historia", anio: 1987,
    portada: "/historia-de-la-teconologia-vol2.png", disponible: true, ruta: null,
    descripcion: "Sitúa el desarrollo tecnológico dentro de su perspectiva histórica mediante una descripción amena que satisface las necesidades de un amplio núcleo de lectores.",
  },
  {
    id: "filosofia", titulo: "Historia de la Filosofía", autor: "Julián Marías", edicion: "1ª Edición", area: "Filosofía", anio: 1941,
    portada: "/historia-de-la-filosofia.png", disponible: true, ruta: null,
    descripcion: "Panorama de los grandes pensadores, desde los presocráticos hasta la filosofía contemporánea, en una de las obras de referencia más reeditadas en español.",
  },
];

const AREAS = ["Física", "Matemáticas", "Química", "Biología", "Literatura", "Historia", "Filosofía"];
const ANIO_ACTUAL = 2026;
const PERIODOS = [
  { id: "5", label: "Últimos 5 años", cumple: (a) => a >= ANIO_ACTUAL - 5 },
  { id: "10", label: "Últimos 10 años", cumple: (a) => a >= ANIO_ACTUAL - 10 },
  { id: "antes", label: "Anterior a 2010", cumple: (a) => a < 2010 },
];

const alternar = (lista, valor) => (lista.includes(valor) ? lista.filter((v) => v !== valor) : [...lista, valor]);

const Filtro = ({ titulo, children }) => {
  const [abierto, setAbierto] = useState(true);
  return (
    <fieldset className="rb-filter">
      <legend>
        <button type="button" onClick={() => setAbierto(!abierto)} aria-expanded={abierto}>
          {titulo} <span className={abierto ? "rb-chev rb-chev--open" : "rb-chev"}><ChevronIcon size={14} /></span>
        </button>
      </legend>
      {abierto && <div className="rb-filter__options">{children}</div>}
    </fieldset>
  );
};

const Check = ({ label, checked, onChange }) => (
  <label className="rb-check">
    <input type="checkbox" checked={checked} onChange={onChange} /> {label}
  </label>
);

const ResultadosDeBsqueda = () => {
  const navigate = useNavigate();
  const [disp, setDisp] = useState([]);
  const [areas, setAreas] = useState([]);
  const [periodo, setPeriodo] = useState([]);
  const [favoritos, setFavoritos] = useState([]);
  const [reservados, setReservados] = useState([]);
  const [orden, setOrden] = useState("relevancia");
  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (!toast) return undefined;
    const t = setTimeout(() => setToast(null), 3000);
    return () => clearTimeout(t);
  }, [toast]);

  const visibles = useMemo(() => {
    const lista = resultados.filter((r) =>
      (disp.length === 0 || disp.includes(r.disponible ? "disponible" : "prestado")) &&
      (areas.length === 0 || areas.includes(r.area)) &&
      (periodo.length === 0 || PERIODOS.some((p) => periodo.includes(p.id) && p.cumple(r.anio))));
    if (orden === "titulo") return [...lista].sort((a, b) => a.titulo.localeCompare(b.titulo));
    if (orden === "anio") return [...lista].sort((a, b) => b.anio - a.anio);
    return lista;
  }, [disp, areas, periodo, orden]);

  const hayFiltros = disp.length + areas.length + periodo.length > 0;

  const verDetalle = (r) => (r.ruta ? navigate(r.ruta) : setToast(`La ficha de "${r.titulo}" aún no está disponible.`));
  const reservar = (r) => {
    setReservados((l) => [...l, r.id]);
    setToast(r.disponible ? `Reserva solicitada: ${r.titulo}.` : `Te uniste a la lista de espera de "${r.titulo}".`);
  };

  return (
    <PaginaBiblioteca activeItem="inicio">
      <nav className="pb-crumbs" aria-label="Ruta">
        <button type="button" onClick={() => navigate("/")}>Inicio</button>
        <span aria-hidden="true">›</span>
        <button type="button" onClick={() => navigate("/prestamos")}>Catálogo</button>
        <span aria-hidden="true">›</span>
        <b>Búsqueda: "Física"</b>
      </nav>

      <div className="rb-layout">
        <aside className="rb-sidebar">
          <div className="rb-sidebar__head">
            <h2>Filtros</h2>
            {hayFiltros && <button type="button" onClick={() => { setDisp([]); setAreas([]); setPeriodo([]); }}>Limpiar</button>}
          </div>

          <Filtro titulo="Disponibilidad">
            <Check label="Disponible ahora" checked={disp.includes("disponible")} onChange={() => setDisp(alternar(disp, "disponible"))} />
            <Check label="En préstamo" checked={disp.includes("prestado")} onChange={() => setDisp(alternar(disp, "prestado"))} />
          </Filtro>

          <Filtro titulo="Área de estudio">
            {AREAS.map((a) => <Check key={a} label={a} checked={areas.includes(a)} onChange={() => setAreas(alternar(areas, a))} />)}
          </Filtro>

          <Filtro titulo="Año de publicación">
            {PERIODOS.map((p) => <Check key={p.id} label={p.label} checked={periodo.includes(p.id)} onChange={() => setPeriodo(alternar(periodo, p.id))} />)}
          </Filtro>

          <div className="rb-help">
            <b>Asesoría de Búsqueda</b>
            <p>¿No encuentras lo que buscas? Solicita ayuda a un bibliotecario en línea.</p>
            <button type="button" onClick={() => navigate("/contacto-bibliotecario")}>Contactar Bibliotecario</button>
          </div>
        </aside>

        <section className="rb-results">
          <header className="rb-results__head">
            <div>
              <h1>Resultados de Búsqueda</h1>
              <p>Se encontraron <b>{visibles.length}</b> libros relacionados con tu criterio de búsqueda.</p>
            </div>
            <label className="rb-sort">
              Ordenar por
              <select value={orden} onChange={(e) => setOrden(e.target.value)}>
                <option value="relevancia">Relevancia</option>
                <option value="titulo">Título (A-Z)</option>
                <option value="anio">Más recientes</option>
              </select>
            </label>
          </header>

          {visibles.length === 0 && <p className="rb-empty">No hay resultados con esos filtros.</p>}

          <ul className="rb-list">
            {visibles.map((r) => {
              const fav = favoritos.includes(r.id);
              const reservado = reservados.includes(r.id);
              return (
                <li key={r.id} className="rb-item">
                  <img className="rb-item__cover" src={r.portada} alt={`Portada de ${r.titulo}`} />
                  <div className="rb-item__body">
                    <div className="rb-item__top">
                      <span className="rb-cat">{r.area}</span>
                      {r.destacado && <span className="rb-featured">Destacado</span>}
                      <span className={r.disponible ? "rb-state rb-state--ok" : "rb-state rb-state--loan"}>
                        {r.disponible ? <CheckIcon size={13} /> : <ClockIcon size={13} />} {r.disponible ? "Disponible" : "Prestado"}
                      </span>
                      <button
                        type="button"
                        className={fav ? "rb-fav rb-fav--on" : "rb-fav"}
                        aria-pressed={fav}
                        aria-label={fav ? "Quitar de guardados" : "Guardar"}
                        onClick={() => setFavoritos(alternar(favoritos, r.id))}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill={fav ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" /></svg>
                      </button>
                    </div>
                    <h3>{r.titulo}</h3>
                    <p className="rb-item__author">{r.autor} • {r.edicion}</p>
                    <p className="rb-item__desc">{r.descripcion}</p>
                    <div className="rb-item__actions">
                      <button type="button" className="rb-btn rb-btn--ghost" onClick={() => verDetalle(r)}><InfoIcon size={14} /> Detalles</button>
                      <button type="button" className={r.disponible ? "rb-btn rb-btn--primary" : "rb-btn rb-btn--outline"} disabled={reservado} onClick={() => reservar(r)}>
                        {reservado ? "Solicitado ✓" : r.disponible ? "Reservar Ahora" : "Ver Lista de Espera"}
                      </button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      </div>

      {toast && <div className="pb-toast" role="status">{toast}</div>}
    </PaginaBiblioteca>
  );
};

export default ResultadosDeBsqueda;
