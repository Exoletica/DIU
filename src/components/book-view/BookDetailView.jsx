import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppSidebar from "../layout/AppSidebar";
import AppTopBar from "../layout/AppTopBar";
import { libros, recomendadosInfo } from "../../data/libros";
import "./BookDetailView.scss";

const rutas = {
  inicio: "/",
  reservas: "/mis-reservas",
  prestamos: "/prestamos",
  "mis-prestamos": "/mis-prestamos",
  recomendaciones: "/recomendaciones",
  salas: "/reservas-de-sala",
};

const Estrellas = ({ n }) => (
  <span className="bdv-stars" aria-label={`${n} de 5 estrellas`}>
    {"★★★★★".slice(0, n)}<span>{"★★★★★".slice(n)}</span>
  </span>
);

// Página de detalle de un libro. Uso: <BookDetailView libroId="calculus" />
const BookDetailView = ({ libroId }) => {
  const navigate = useNavigate();
  const libro = libros[libroId];
  const [pestana, setPestana] = useState("info");
  const [favorito, setFavorito] = useState(false);
  const [reservado, setReservado] = useState(false);
  const [busqueda, setBusqueda] = useState("");
  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (!toast) return undefined;
    const t = setTimeout(() => setToast(null), 3000);
    return () => clearTimeout(t);
  }, [toast]);

  const handleNavigate = useCallback((destino) => {
    if (rutas[destino]) navigate(rutas[destino]);
  }, [navigate]);

  const disponibles = libro.ejemplares.filter((e) => e.estado === "disponible").length;

  const copiar = (texto, mensaje) => {
    navigator.clipboard?.writeText(texto).catch(() => {});
    setToast(mensaje);
  };

  const reservar = () => {
    setReservado(true);
    setToast(`Reserva solicitada: ${libro.titulo}. Te avisaremos cuando esté lista para retirar.`);
  };

  const anio = libro.ficha.find(([k]) => k === "Publicación")?.[1] ?? "s.f.";
  const editorial = libro.ficha.find(([k]) => k === "Editorial")?.[1] ?? "";
  const cita = `${libro.autor} (${anio}). ${libro.titulo} (${libro.edicion}). ${editorial}.`;

  const pestanas = [
    { id: "info", label: "Información General" },
    { id: "disponibilidad", label: `Disponibilidad (${disponibles})` },
    { id: "resenas", label: "Reseñas" },
  ];

  return (
    <div className="bdv-page">
      <AppSidebar activeItem="inicio" onNavigate={handleNavigate} />
      <div className="bdv-main">
        <AppTopBar
          breadcrumbs={["Inicio", "Biblioteca"]}
          userName="Estudiante"
          avatarSrc="/Container.svg"
          notificationCount={1}
          onBreadcrumbNavigate={() => navigate("/")}
          search={{ value: busqueda, onChange: setBusqueda, placeholder: "Buscar libros, salas...", ariaLabel: "Buscar libros o salas" }}
        />

        <main className="bdv-content">
          <nav className="bdv-crumbs" aria-label="Ruta">
            <button type="button" onClick={() => navigate("/")}>Inicio</button>
            <span aria-hidden="true">›</span>
            <button type="button" onClick={() => navigate("/resultados-de-busqueda")}>Resultados</button>
            <span aria-hidden="true">›</span>
            <b>{libro.titulo}</b>
          </nav>

          <div className="bdv-top">
            <aside className="bdv-left">
              <img className="bdv-cover" src={libro.portada} alt={`Portada de ${libro.titulo}`} />
              <button type="button" className="bdv-primary" onClick={reservar} disabled={reservado}>
                {reservado ? "Reserva solicitada ✓" : "Reservar ahora"}
              </button>
              <button type="button" className="bdv-secondary" onClick={() => setToast("La muestra online estará disponible pronto.")}>
                <img src="/prestamos/Book-open.svg" alt="" /> Leer Muestra Online
              </button>
              <div className="bdv-actions">
                <button type="button" className={favorito ? "bdv-action bdv-action--on" : "bdv-action"} aria-pressed={favorito} onClick={() => setFavorito(!favorito)}>
                  <img src="/prestamos/heart.svg" alt="" /> Favorito
                </button>
                <button type="button" className="bdv-action" onClick={() => copiar(window.location.href, "Enlace copiado al portapapeles.")}>
                  <img src="/prestamos/share-2.svg" alt="" /> Compartir
                </button>
                <button type="button" className="bdv-action" onClick={() => copiar(cita, "Cita copiada al portapapeles.")}>
                  <img src="/prestamos/download.svg" alt="" /> Citar
                </button>
              </div>
            </aside>

            <section className="bdv-right">
              <div className="bdv-meta">
                <span className="bdv-tag">{libro.etiqueta}</span>
                <span className="bdv-rating">★ <b>{libro.rating}</b> ({libro.numResenas} reseñas)</span>
              </div>
              <h1>{libro.titulo}</h1>
              <p className="bdv-author">{libro.autor}</p>
              <p className="bdv-edition">{libro.edicion}</p>

              <div className="bdv-tabs" role="tablist">
                {pestanas.map((t) => (
                  <button key={t.id} type="button" role="tab" aria-selected={pestana === t.id} className={pestana === t.id ? "bdv-tab bdv-tab--on" : "bdv-tab"} onClick={() => setPestana(t.id)}>
                    {t.label}
                  </button>
                ))}
              </div>

              {pestana === "info" && (
                <>
                  <h2 className="bdv-h2"><img src="/prestamos/file-text.svg" alt="" /> Resumen</h2>
                  <p className="bdv-summary">{libro.resumen}</p>
                  <dl className="bdv-ficha">
                    {libro.ficha.map(([k, v]) => (
                      <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
                    ))}
                  </dl>
                </>
              )}

              {pestana === "disponibilidad" && (
                <ul className="bdv-list">
                  {libro.ejemplares.map((e) => (
                    <li key={e.codigo}>
                      <div><b>{e.codigo}</b><small>{e.ubicacion}</small></div>
                      <span className={`bdv-badge bdv-badge--${e.estado}`}>{e.estado === "disponible" ? "Disponible" : "Prestado"}</span>
                    </li>
                  ))}
                </ul>
              )}

              {pestana === "resenas" && (
                <ul className="bdv-list">
                  {libro.resenas.map((r) => (
                    <li key={r.iniciales + r.texto.slice(0, 10)} className="bdv-review">
                      <span className="bdv-avatar">{r.iniciales}</span>
                      <div><small>{r.carrera}</small><Estrellas n={r.estrellas} /><p>{r.texto}</p></div>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          </div>

          <section className="bdv-recs">
            <h2>Recomendados para ti</h2>
            <p>Basado en tus búsquedas de Ciencias e Ingeniería</p>
            <div className="bdv-recs__grid">
              {libro.recomendados.map((id) => {
                const r = recomendadosInfo[id];
                return (
                  <button
                    key={id}
                    type="button"
                    className="bdv-rec"
                    onClick={() => (r.ruta ? navigate(r.ruta) : setToast(`La ficha de "${r.titulo}" aún no está disponible.`))}
                  >
                    <img src={r.portada} alt="" />
                    <small>{r.categoria}</small>
                    <b>{r.titulo}</b>
                    <span>{r.autor}</span>
                  </button>
                );
              })}
            </div>
          </section>
        </main>
      </div>

      {toast && <div className="bdv-toast" role="status">{toast}</div>}
    </div>
  );
};

export default BookDetailView;
