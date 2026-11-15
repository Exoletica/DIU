import { useNavigate } from "react-router-dom";
import AppSidebar from "../layout/AppSidebar";
import AppTopBar from "../layout/AppTopBar";
import { useNavegacion } from "../../routes";
import "./PaginaBiblioteca.scss";

// Estructura común: barra lateral + barra superior + contenido.
// Uso: <PaginaBiblioteca>...contenido...</PaginaBiblioteca>
const PaginaBiblioteca = ({ activeItem, children }) => {
  const navigate = useNavigate();
  const handleNavigate = useNavegacion();

  return (
    <div className="pagina-biblioteca">
      <AppSidebar activeItem={activeItem} onNavigate={handleNavigate} />
      <div className="pagina-biblioteca__main">
        <AppTopBar breadcrumbs={["Inicio", "Biblioteca"]} onBreadcrumbNavigate={() => navigate("/")} showSearch />
        <main className="pagina-biblioteca__content">{children}</main>
      </div>
    </div>
  );
};

export default PaginaBiblioteca;
