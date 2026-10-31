import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import AppSidebar from "../components/layout/AppSidebar";
import AppTopBar from "../components/layout/AppTopBar";
import SiteFooter from "../components/layout/SiteFooter";
import HeroSearchBanner from "../components/home/HeroSearchBanner";
import QuickActionsSection from "../components/home/QuickActionsSection";
import StudyRecommendationsSection from "../components/home/StudyRecommendationsSection";
import NewsAndResourcesSection from "../components/home/NewsAndResourcesSection";
import "./Inicio.scss";

const Inicio = () => {
  const navigate = useNavigate();
  const handleNavigate = useCallback((destination) => {
    if (destination === "mis-prestamos") return navigate("/mis-prestamos");
    if (destination === "prestamos") return navigate("/prestamos");
    if (destination !== "inicio") window.console.info(`Navigation requested: ${destination}`);
  }, [navigate]);
  const handleSearch = useCallback((query) => window.console.info(`Search requested: ${query}`), []);

  return (
    <div className="inicio">
      <AppSidebar activeItem="inicio" onNavigate={handleNavigate} />
      <div className="inicio-main">
        <AppTopBar breadcrumbs={["Inicio", "Biblioteca"]} userName="Estudiante" avatarSrc="/Container.svg" notificationCount={1} />
        <main className="inicio-content">
          <HeroSearchBanner onSearch={handleSearch} onSuggestionSelect={handleSearch} />
          <QuickActionsSection onNavigate={handleNavigate} />
          <StudyRecommendationsSection onNavigate={handleNavigate} />
          <NewsAndResourcesSection onNavigate={handleNavigate} />
          <SiteFooter onNavigate={handleNavigate} />
        </main>
      </div>
    </div>
  );
};

export default Inicio;
