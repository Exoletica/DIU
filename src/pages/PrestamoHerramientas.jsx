import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppSidebar from "../components/layout/AppSidebar";
import AppTopBar from "../components/layout/AppTopBar";
import ToolCard from "../components/tool-loans/ToolCard";
import "./PrestamoHerramientas.scss";

const rutas = {
  inicio: "/",
  reservas: "/mis-reservas",
  prestamos: "/prestamos",
  "mis-prestamos": "/mis-prestamos",
  recomendaciones: "/recomendaciones",
  salas: "/reservas-de-sala",
};

const herramientas = [
  {
    id: "libros",
    imagen: "/prestamos/Container3@2x.png",
    titulo: "Libros Físicos",
    descripcion: "Catálogo de más de 800 libros.",
    ruta: "/resultados-de-busqueda",
  },
  {
    id: "arduinos",
    imagen: "/prestamos/Container2@2x.png",
    titulo: "Arduinos",
    descripcion: "Más de 3 versiones y 50 unidades disponibles.",
    ruta: null, // Aún no tiene página
  },
  {
    id: "calculadoras",
    imagen: "/prestamos/Container4@2x.png",
    titulo: "Calculadoras",
    descripcion: "Calculadoras científicas y TI.",
    ruta: "/prestamos/calculadoras",
  },
];

const PrestamoHerramientas = () => {
  const navigate = useNavigate();
  const [busqueda, setBusqueda] = useState("");

  const handleNavigate = useCallback((destino) => {
    if (rutas[destino]) navigate(rutas[destino]);
  }, [navigate]);

  return (
    <div className="prestamo-herramientas-page">
      <AppSidebar activeItem="inicio" onNavigate={handleNavigate} />
      <div className="ph-main">
        <AppTopBar
          breadcrumbs={["Inicio", "Biblioteca"]}
          userName="Estudiante"
          avatarSrc="/Container.svg"
          notificationCount={1}
          onBreadcrumbNavigate={() => navigate("/")}
          search={{ value: busqueda, onChange: setBusqueda, placeholder: "Buscar libros, salas...", ariaLabel: "Buscar libros o salas" }}
        />

        <main className="ph-content">
          <div className="ph-subbar">
            <nav className="ph-crumbs" aria-label="Ruta">
              <button type="button" onClick={() => navigate("/")}>Inicio</button>
              <span aria-hidden="true">›</span>
              <button type="button" onClick={() => navigate("/resultados-de-busqueda")}>Catálogo</button>
              <span aria-hidden="true">›</span>
              <b>Búsqueda: "Física"</b>
            </nav>
            <div className="ph-subbar__right">
              <span>Mostrando 1-4 de 128 resultados</span>
              <button type="button" className="ph-sort">
                <img src="/prestamos/arrow-up-narrow-wide.svg" alt="" /> Relevancia
              </button>
            </div>
          </div>

          <h1 className="ph-title">Préstamo de Herramientas</h1>

          <div className="ph-grid">
            {herramientas.map((h) => (
              <ToolCard
                key={h.id}
                imagen={h.imagen}
                titulo={h.titulo}
                descripcion={h.descripcion}
                onAction={h.ruta ? () => navigate(h.ruta) : undefined}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default PrestamoHerramientas;
