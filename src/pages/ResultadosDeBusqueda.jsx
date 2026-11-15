import { useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import PaginaBiblioteca from "../components/busqueda/PaginaBiblioteca";
import Toast from "../components/common/Toast"
import useToast from "../components/common/useToast";
import { catalogo } from "../data/libros";
import { RUTAS } from "../routes";
import { addItemReservation, findOpenItemReservation, useReservations } from "../data/reservas/estado_reservas";
import { CheckIcon, ClockIcon, ChevronIcon, InfoIcon } from "../components/my-loans/LoanIcons";
import "./ResultadosDeBusqueda.scss";

// Libros que aparecen en el buscador. Título, autor, área, portada, ruta y disponibilidad
// vienen del catálogo central (src/data/libros.js).
const resultados = [
  { id: "calculus", edicion: "3ª Edición", anio: 2012, destacado: true, descripcion: "El cálculo como la evolución de una idea que ayude a desarrollar la intuición del estudiante para la comprensión de los conceptos del análisis y convencerle de que la precisión y el rigor representan la manera natural de formular y pensar sobre las cuestiones matemáticas." },
  { id: "stewart", edicion: "7ª Edición", anio: 2010, descripcion: "Ampliamente reconocido por su precisión matemática y exactitud, claridad de la exposición y notables ejemplos y conjuntos de problemas." },
  { id: "matematicas", edicion: "1ª Edición", anio: 2020, descripcion: "¿Qué es un número imaginario? ¿Cómo pueden servir las matemáticas para predecir el futuro? Las grandes ideas de las matemáticas explicadas de forma sencilla." },
  { id: "algebra", edicion: "3ª Edición", anio: 2015, descripcion: "Condensa la experiencia de enseñanza de muchos años, así como la profunda reflexión sobre el proceso de aprendizaje del álgebra lineal." },
  { id: "miedo", edicion: "1ª Edición", anio: 2019, descripcion: "Historia de las mentalidades que muestra cómo individuos, colectividades y civilizaciones pueden quedar atrapados en un permanente diálogo con el miedo." },
  { id: "tecnologia", edicion: "8ª Edición", anio: 1987, descripcion: "Sitúa el desarrollo tecnológico dentro de su perspectiva histórica mediante una descripción amena que satisface las necesidades de un amplio núcleo de lectores." },
  { id: "arte", edicion: "16ª Edición", anio: 1995, descripcion: "Una de las introducciones al arte más leídas, desde las pinturas rupestres hasta el arte experimental contemporáneo." },
  { id: "filosofia", edicion: "1ª Edición", anio: 1941, descripcion: "Panorama de los grandes pensadores, desde los presocráticos hasta la filosofía contemporánea, en una de las obras de referencia más reeditadas en español." },
  { id: "miserables", edicion: "1ª Edición", anio: 1862, descripcion: "Novela de Victor Hugo considerada una de las obras más importantes del siglo XIX, sobre la justicia, la política y la redención." },
  { id: "quijote", edicion: "1ª Edición", anio: 1605, descripcion: "La obra cumbre de Miguel de Cervantes y de la literatura en español: las aventuras del ingenioso hidalgo y su escudero Sancho Panza." },
  { id: "gatsby", edicion: "Edición Especial", anio: 1925, descripcion: "El esplendor y las fiestas de West Egg como retrato del sueño americano y sus contradicciones." },
  { id: "guerra", edicion: "1ª Edición", anio: 2005, descripcion: "Clásico chino sobre estrategia que se ha convertido en lectura esencial para la gestión y la toma de decisiones." },
].map((r) => ({ ...catalogo[r.id], ...r }));

// Quita tildes y mayúsculas para comparar textos.
const normalizar = (texto) => texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

const AREAS = ["Física", "Matemáticas", "Química", "Biología", "Literatura", "Historia", "Filosofía"];
const ANIO_ACTUAL = new Date().getFullYear();
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

const ResultadosDeBusqueda = () => {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const consulta = params.get("q")?.trim() ?? "";
  const [disp, setDisp] = useState([]);
  const [areas, setAreas] = useState([]);
  const [periodo, setPeriodo] = useState([]);
  const [favoritos, setFavoritos] = useState([]);
  const reservas = useReservations();
  const [orden, setOrden] = useState("relevancia");
  const [toast, setToast] = useToast();

  const visibles = useMemo(() => {
    const texto = normalizar(consulta);
    const lista = resultados.filter((r) =>
      (!texto || normalizar(`${r.titulo} ${r.autor} ${r.area} ${r.temas}`).includes(texto)) &&
      (disp.length === 0 || disp.includes(r.disponible ? "disponible" : "prestado")) &&
      (areas.length === 0 || areas.includes(r.area)) &&
      (periodo.length === 0 || PERIODOS.some((p) => periodo.includes(p.id) && p.cumple(r.anio))));
    if (orden === "titulo") return [...lista].sort((a, b) => a.titulo.localeCompare(b.titulo));
    if (orden === "anio") return [...lista].sort((a, b) => b.anio - a.anio);
    return lista;
  }, [consulta, disp, areas, periodo, orden]);

  const hayFiltros = disp.length + areas.length + periodo.length > 0;

  const verDetalle = (r) => (r.ruta ? navigate(r.ruta) : setToast(`La ficha de "${r.titulo}" aún no está disponible.`));
  const reservar = (r) => {
    addItemReservation({ itemId: `libro-${r.id}`, type: "book", title: r.titulo, subtitle: r.autor, available: r.disponible });
    setToast(r.disponible ? `Reservaste "${r.titulo}". La verás en Mis Reservas.` : `Te uniste a la lista de espera de "${r.titulo}".`);
  };

  return (
    <PaginaBiblioteca>
      <nav className="pb-crumbs" aria-label="Ruta">
        <button type="button" onClick={() => navigate("/")}>Inicio</button>
        <span aria-hidden="true">›</span>
        <button type="button" onClick={() => navigate(RUTAS.catalogo)}>Catálogo</button>
        <span aria-hidden="true">›</span>
        <b>{consulta ? `Búsqueda: "${consulta}"` : "Todos los libros"}</b>
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
            <button type="button" onClick={() => navigate(RUTAS.contacto)}>Contactar Bibliotecario</button>
          </div>
        </aside>

        <section className="rb-results">
          <header className="rb-results__head">
            <div>
              <h1>Resultados de Búsqueda</h1>
              <p>Se encontraron <b>{visibles.length}</b> {visibles.length === 1 ? "libro" : "libros"}{consulta ? <> para <b>“{consulta}”</b></> : " en el catálogo"}.</p>
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

          {visibles.length === 0 && <p className="rb-empty">No encontramos libros{consulta ? ` para “${consulta}”` : ""} con esos filtros. Prueba con otra palabra o pide ayuda a un bibliotecario.</p>}

          <ul className="rb-list">
            {visibles.map((r) => {
              const fav = favoritos.includes(r.id);
              const reservado = Boolean(findOpenItemReservation(reservas, `libro-${r.id}`));
              return (
                <li key={r.id} className="rb-item">
                  <img className="rb-item__cover" src={r.portada} alt={`Portada de ${r.titulo}`} loading="lazy" />
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
                      <button type="button" className={r.disponible ? "rb-btn rb-btn--primary" : "rb-btn rb-btn--outline"} onClick={() => (reservado ? navigate(RUTAS.reservas) : reservar(r))}>
                        {reservado ? "Reservado ✓ · Ver" : r.disponible ? "Reservar Ahora" : "Unirme a la Lista de Espera"}
                      </button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      </div>

      <Toast mensaje={toast} />
    </PaginaBiblioteca>
  );
};

export default ResultadosDeBusqueda;
