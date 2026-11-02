import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppSidebar from "../layout/AppSidebar";
import AppTopBar from "../layout/AppTopBar";
import "./PaginaBiblioteca.scss";

const rutas = {
  inicio: "/",
  reservas: "/mis-reservas",
  prestamos: "/prestamos",
  "mis-prestamos": "/mis-prestamos",
  recomendaciones: "/recomendaciones",
  salas: "/reservas-de-sala",
};

// Estructura común: barra lateral + barra superior + contenido.
// Uso: <PaginaBiblioteca activeItem="inicio">...contenido...</PaginaBiblioteca>
const PaginaBiblioteca = ({ activeItem = "inicio", children }) => {
  const navigate = useNavigate();
  const [busqueda, setBusqueda] = useState("");

  const handleNavigate = useCallback((destino) => {
    if (rutas[destino]) navigate(rutas[destino]);
  }, [navigate]);

  return (
    <div className="pagina-biblioteca">
      <AppSidebar activeItem={activeItem} onNavigate={handleNavigate} />
      <div className="pagina-biblioteca__main">
        <AppTopBar
          breadcrumbs={["Inicio", "Biblioteca"]}
          userName="Estudiante"
          avatarSrc="/Container.svg"
          notificationCount={1}
          onBreadcrumbNavigate={() => navigate("/")}
          search={{ value: busqueda, onChange: setBusqueda, placeholder: "Buscar libros, salas...", ariaLabel: "Buscar libros o salas" }}
        />
        <main className="pagina-biblioteca__content">{children}</main>
      </div>
    </div>
  );
};

export default PaginaBiblioteca;
