import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import AppSidebar from "../components/layout/AppSidebar";
import AppTopBar from "../components/layout/AppTopBar";
import SiteFooter from "../components/layout/SiteFooter";
import Toast from "../components/common/Toast"
import useToast from "../components/common/useToast";
import HeroSearchBanner from "../components/home/HeroSearchBanner";
import QuickActionsSection from "../components/home/QuickActionsSection";
import StudyRecommendationsSection from "../components/home/StudyRecommendationsSection";
import NewsAndResourcesSection from "../components/home/NewsAndResourcesSection";
import { rutaBusqueda, useNavegacion } from "../routes";
import "./Inicio.scss";

// Secciones que todavía no tienen página propia.
const PROXIMAMENTE = {
  privacidad: "La política de privacidad",
  terminos: "Los términos de uso",
  "Guía de Citación": "La guía de citación",
  "Repositorio USM": "El repositorio USM",
  Calendario: "El calendario académico",
};

const Inicio = () => {
  const navigate = useNavigate();
  const [toast, setToast] = useToast();
  const avisarSinPagina = useCallback((destino) => setToast(`${PROXIMAMENTE[destino] ?? "Esta sección"} estará disponible pronto.`), [setToast]);
  const handleNavigate = useNavegacion(avisarSinPagina);
  const handleSearch = useCallback((query) => navigate(rutaBusqueda(query)), [navigate]);
  const handleBookUnavailable = useCallback((titulo) => setToast(`La ficha de "${titulo}" aún no está disponible.`), [setToast]);

  return (
    <div className="inicio">
      <AppSidebar activeItem="inicio" onNavigate={handleNavigate} />
      <div className="inicio-main">
        <AppTopBar breadcrumbs={["Inicio", "Biblioteca"]} />
        <main className="inicio-content"><HeroSearchBanner onSearch={handleSearch} onSuggestionSelect={handleSearch} /><QuickActionsSection onNavigate={handleNavigate} /><StudyRecommendationsSection onNavigate={handleNavigate} onBookUnavailable={handleBookUnavailable} /><NewsAndResourcesSection onNavigate={handleNavigate} /><SiteFooter onNavigate={handleNavigate} /></main>
      </div>
      <Toast mensaje={toast} />
    </div>
  );
};

export default Inicio;
