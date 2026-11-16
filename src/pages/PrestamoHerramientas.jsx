import { useNavigate } from "react-router-dom";
import AppSidebar from "../components/layout/AppSidebar";
import AppTopBar from "../components/layout/AppTopBar";
import ToolCard from "../components/tool-loans/ToolCard";
import { RUTAS, useNavegacion } from "../routes";
import { asset } from "../utils/assetUrl";
import "./PrestamoHerramientas.scss";

const herramientas = [
  {
    id: "libros",
    imagen: asset("/herramientas/libros-fisicos.webp"),
    titulo: "Libros Físicos",
    descripcion: "Catálogo de más de 800 libros.",
    ruta: RUTAS.catalogo,
  },
  {
    id: "arduinos",
    imagen: asset("/herramientas/arduinos.webp"),
    titulo: "Arduinos",
    descripcion: "Más de 3 versiones y 50 unidades disponibles.",
    ruta: RUTAS.arduinos,
  },
  {
    id: "calculadoras",
    imagen: asset("/herramientas/calculadoras.webp"),
    titulo: "Calculadoras",
    descripcion: "Calculadoras científicas y TI.",
    ruta: RUTAS.calculadoras,
  },
];

const PrestamoHerramientas = () => {
  const navigate = useNavigate();
  const handleNavigate = useNavegacion();

  return (
    <div className="prestamo-herramientas-page">
      <AppSidebar onNavigate={handleNavigate} />
      <div className="ph-main">
        <AppTopBar breadcrumbs={["Inicio", "Préstamo de Herramientas"]} onBreadcrumbNavigate={() => navigate("/")} showSearch />

        <main className="ph-content">
          <nav className="ph-crumbs ph-crumbs--page" aria-label="Ruta">
            <button type="button" onClick={() => navigate(RUTAS.inicio)}>Inicio</button>
            <span aria-hidden="true">›</span>
            <b>Préstamo de Herramientas</b>
          </nav>
          <h1 className="ph-title">Préstamo de Herramientas</h1>
          <p className="ph-description">Pide libros físicos y equipos para tus ramos y proyectos.</p>

          <div className="ph-grid">
            {herramientas.map((h) => (
              <ToolCard
                key={h.id}
                imagen={h.imagen}
                titulo={h.titulo}
                descripcion={h.descripcion}
                onAction={() => navigate(h.ruta)}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default PrestamoHerramientas;
