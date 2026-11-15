import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppSidebar from "../components/layout/AppSidebar";
import AppTopBar from "../components/layout/AppTopBar";
import ToolCard from "../components/tool-loans/ToolCard";
import Toast from "../components/common/Toast"
import useToast from "../components/common/useToast";
import { equipos } from "../data/equipos";
import { RUTAS, useNavegacion } from "../routes";
import "./PrestamoHerramientas.scss";

// Equipos de un tipo (calculadoras, arduinos...). Uso: <PrestamoEquipos tipo="arduinos" />
const PrestamoEquipos = ({ tipo }) => {
  const navigate = useNavigate();
  const handleNavigate = useNavegacion();
  const { titulo, descripcion, items } = equipos[tipo];
  const [reservados, setReservados] = useState([]);
  const [toast, setToast] = useToast();

  const reservar = (item) => {
    setReservados((lista) => [...lista, item.id]);
    setToast(`${item.titulo} reservado. Retíralo en el mesón de préstamos.`);
  };

  return (
    <div className="prestamo-herramientas-page">
      <AppSidebar onNavigate={handleNavigate} />
      <div className="ph-main">
        <AppTopBar breadcrumbs={["Inicio", "Préstamo de Herramientas"]} onBreadcrumbNavigate={() => navigate("/")} showSearch />

        <main className="ph-content">
          <nav className="ph-crumbs ph-crumbs--page" aria-label="Ruta">
            <button type="button" onClick={() => navigate(RUTAS.inicio)}>Inicio</button>
            <span aria-hidden="true">›</span>
            <button type="button" onClick={() => navigate(RUTAS.prestamos)}>Préstamo de Herramientas</button>
            <span aria-hidden="true">›</span>
            <b>{titulo}</b>
          </nav>
          <h1 className="ph-title">{titulo}</h1>
          <p className="ph-description">{descripcion}</p>

          <div className="ph-grid">
            {items.map((item) => {
              const yaReservado = reservados.includes(item.id);
              return (
                <ToolCard
                  key={item.id}
                  imagen={item.imagen}
                  titulo={item.titulo}
                  descripcion={item.detalle}
                  accion={yaReservado ? "Reservado ✓" : "Reservar"}
                  deshabilitado={yaReservado}
                  onAction={() => reservar(item)}
                />
              );
            })}
          </div>
        </main>
      </div>
      <Toast mensaje={toast} />
    </div>
  );
};

export default PrestamoEquipos;
