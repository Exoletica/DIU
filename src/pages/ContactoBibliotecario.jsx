import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import PaginaBiblioteca from "../components/busqueda/PaginaBiblioteca";
import "./ContactoBibliotecario.scss";

const hora = () => new Date().toLocaleTimeString("es-CL", { hour: "2-digit", minute: "2-digit" });

const mensajeInicial = {
  id: 0,
  de: "bibliotecario",
  texto: "📚 ¡Hola! Te estamos conectando con uno de nuestros bibliotecarios en línea para brindarte la ayuda que requieras. Te agradecemos la espera.",
  hora: hora(),
};

// Chat de ejemplo: responde automáticamente después de un momento.
const ContactoBibliotecario = () => {
  const navigate = useNavigate();
  const [mensajes, setMensajes] = useState([mensajeInicial]);
  const [texto, setTexto] = useState("");
  const [escribiendo, setEscribiendo] = useState(false);
  const finRef = useRef(null);

  useEffect(() => {
    finRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [mensajes, escribiendo]);

  const enviar = (e) => {
    e.preventDefault();
    const consulta = texto.trim();
    if (!consulta) return;
    setMensajes((m) => [...m, { id: Date.now(), de: "usuario", texto: consulta, hora: hora() }]);
    setTexto("");
    setEscribiendo(true);
    setTimeout(() => {
      setEscribiendo(false);
      setMensajes((m) => [...m, {
        id: Date.now() + 1,
        de: "bibliotecario",
        texto: `Gracias por tu consulta sobre "${consulta}". Estoy revisando el catálogo y en un momento te indico las mejores opciones disponibles.`,
        hora: hora(),
      }]);
    }, 1500);
  };

  return (
    <PaginaBiblioteca activeItem="inicio">
      <nav className="pb-crumbs" aria-label="Ruta">
        <button type="button" onClick={() => navigate("/")}>Inicio</button>
        <span aria-hidden="true">›</span>
        <button type="button" onClick={() => navigate("/resultados-de-busqueda")}>Resultados de búsqueda</button>
        <span aria-hidden="true">›</span>
        <b>Asesoría de búsqueda</b>
      </nav>

      <h1 className="cb-title">Asesoría de búsqueda</h1>
      <p className="cb-sub">Conversa con un bibliotecario para encontrar el material que necesitas.</p>

      <section className="cb-chat" aria-label="Chat con bibliotecario">
        <header className="cb-chat__head">
          <span className="cb-avatar" aria-hidden="true">B</span>
          <div>
            <b>Bibliotecario en línea</b>
            <small><i className="cb-dot" aria-hidden="true" /> Disponible</small>
          </div>
        </header>

        <div className="cb-chat__body" aria-live="polite">
          {mensajes.map((m) => (
            <div key={m.id} className={`cb-msg cb-msg--${m.de}`}>
              <p>{m.texto}</p>
              <small>{m.hora}</small>
            </div>
          ))}
          {escribiendo && <div className="cb-msg cb-msg--bibliotecario cb-typing"><p>Escribiendo…</p></div>}
          <div ref={finRef} />
        </div>

        <form className="cb-chat__form" onSubmit={enviar}>
          <input
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            placeholder="Haz tu consulta de libros"
            aria-label="Escribe tu consulta"
          />
          <button type="submit" disabled={!texto.trim()}>Enviar</button>
        </form>
      </section>
    </PaginaBiblioteca>
  );
};

export default ContactoBibliotecario;
