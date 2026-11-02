import { useCallback, useEffect, useState } from "react";
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

const calculadoras = [
  { id: "cientifica", imagen: "/herramientas/calculadora-cientifica.png", titulo: "Calculadora científica" },
  { id: "ti", imagen: "/herramientas/calculadora-ti.png", titulo: "Calculadora TI" },
];

const PrestamoCalculadoras = () => {
  const navigate = useNavigate();
  const [busqueda, setBusqueda] = useState("");
  const [reservadas, setReservadas] = useState([]);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (!toast) return undefined;
    const t = setTimeout(() => setToast(null), 3000);
    return () => clearTimeout(t);
  }, [toast]);

  const handleNavigate = useCallback((destino) => {
    if (rutas[destino]) navigate(rutas[destino]);
  }, [navigate]);

  const reservar = (calc) => {
    setReservadas((lista) => [...lista, calc.id]);
    setToast(`${calc.titulo} reservada. Retírala en el mesón de préstamos.`);
  };

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
          <button type="button" className="ph-back" onClick={() => navigate("/prestamos")}>‹ Volver a Préstamo de Herramientas</button>
          <h1 className="ph-title">Préstamo de Herramientas</h1>

          <div className="ph-grid">
            {calculadoras.map((c) => {
              const yaReservada = reservadas.includes(c.id);
              return (
                <ToolCard
                  key={c.id}
                  imagen={c.imagen}
                  titulo={c.titulo}
                  accion={yaReservada ? "Reservada ✓" : "Reservar"}
                  deshabilitado={yaReservada}
                  onAction={() => reservar(c)}
                />
              );
            })}
          </div>
        </main>
      </div>

      {toast && <div className="ph-toast" role="status">{toast}</div>}
    </div>
  );
};

export default PrestamoCalculadoras;
