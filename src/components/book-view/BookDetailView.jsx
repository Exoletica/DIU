import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AppSidebar from "../layout/AppSidebar";
import AppTopBar from "../layout/AppTopBar";
import Toast from "../common/Toast"
import useToast from "../common/useToast";
import { libros, catalogo } from "../../data/libros";
import { RUTAS, useNavegacion } from "../../routes";
import { addItemReservation, findOpenItemReservation, useReservations } from "../../data/reservas/estado_reservas";
import "./BookDetailView.scss";

const Estrellas = ({ n }) => (
  <span className="bdv-stars" aria-label={`${n} de 5 estrellas`}>
    {"★★★★★".slice(0, n)}<span>{"★★★★★".slice(n)}</span>
  </span>
);

// Página de detalle de un libro. Uso: <BookDetailView libroId="calculus" />
const BookDetailView = ({ libroId }) => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const libro = libros[libroId];
  const [pestana, setPestana] = useState("info");
  const [favorito, setFavorito] = useState(false);
  const [toast, setToast] = useToast();
  const handleNavigate = useNavegacion();

  const disponibles = libro.ejemplares.filter((e) => e.estado === "disponible").length;

  const copiar = (texto, mensaje) => {
    navigator.clipboard?.writeText(texto).catch(() => {});
    setToast(mensaje);
  };

  const reserva = findOpenItemReservation(useReservations(), `libro-${libroId}`);
  const enEspera = reserva?.status === "waitlist";

  const reservar = () => {
    addItemReservation({ itemId: `libro-${libroId}`, type: "book", title: libro.titulo, subtitle: libro.autor, available: disponibles > 0 });
    setToast(disponibles > 0
      ? `Reservaste "${libro.titulo}". Retíralo en el mesón de préstamos; la verás en Mis Reservas.`
      : `Te uniste a la lista de espera de "${libro.titulo}". Te avisaremos cuando se libere un ejemplar.`);
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
      <AppSidebar onNavigate={handleNavigate} />
      <div className="bdv-main">
        <AppTopBar breadcrumbs={["Inicio", "Biblioteca"]} onBreadcrumbNavigate={() => navigate("/")} showSearch />

        <main className="bdv-content">
          <nav className="bdv-crumbs" aria-label="Ruta">
            <button type="button" onClick={() => navigate("/")}>Inicio</button>
            <span aria-hidden="true">›</span>
            <button type="button" onClick={() => navigate(RUTAS.catalogo + (state?.busqueda ?? ""))}>Resultados</button>
            <span aria-hidden="true">›</span>
            <b>{libro.titulo}</b>
          </nav>

          <div className="bdv-top">
            <aside className="bdv-left">
              <img className="bdv-cover" src={libro.portada} alt={`Portada de ${libro.titulo}`} />
              {reserva ? (
                <button type="button" className="bdv-primary" onClick={() => navigate(RUTAS.reservas)}>
                  {enEspera ? "En lista de espera ✓ · Ver" : "Reservado ✓ · Ver en Mis Reservas"}
                </button>
              ) : (
                <button type="button" className="bdv-primary" onClick={reservar}>
                  {disponibles > 0 ? "Reservar ahora" : "Unirme a la lista de espera"}
                </button>
              )}
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
                const r = catalogo[id];
                return (
                  <button
                    key={id}
                    type="button"
                    className="bdv-rec"
                    onClick={() => (r.ruta ? navigate(r.ruta, { state }) : setToast(`La ficha de "${r.titulo}" aún no está disponible.`))}
                  >
                    <img src={r.portada} alt="" loading="lazy" />
                    <small>{r.area}</small>
                    <b>{r.titulo}</b>
                    <span>{r.autor}</span>
                  </button>
                );
              })}
            </div>
          </section>
        </main>
      </div>

      <Toast mensaje={toast} />
    </div>
  );
};

export default BookDetailView;
