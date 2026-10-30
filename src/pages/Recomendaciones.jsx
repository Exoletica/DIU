import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppSidebar from "../components/layout/AppSidebar";
import AppTopBar from "../components/layout/AppTopBar";
import RecommendationAreaFilter from "../components/recommendations/RecommendationAreaFilter";
import RecommendationBookCard from "../components/recommendations/RecommendationBookCard";
import styles from "./Recomendaciones.module.scss";

const areas = [
  { id: "todos", label: "Todos", iconSrc: "/book-open.svg" },
  { id: "matematicas", label: "Matemáticas", iconSrc: "/graduation-cap.svg" },
  { id: "literatura", label: "Literatura", iconSrc: "/book-text.svg" },
  { id: "historia", label: "Historia", iconSrc: "/history.svg" },
];

const recommendations = [
  { areaId: "historia", detailPath: "/prestamos/detalle-del-libro-2", coverSrc: "/el-miedo-de-occidente.png", status: "Disponible", statusTone: "available", category: "Historia", rating: "4.8", title: "El Miedo en Occidente", authorEdition: "Jean Delumeau • 1ra Edición", description: "Esta historia del miedo, asimismo una historia de las mentalidades, demuestra que no solo los individuos, sino también ...", studyPurpose: "...", availability: "Disponible", featured: true },
  { areaId: "matematicas", detailPath: "/prestamos/detalle-del-libro-4", coverSrc: "/calculo-trascendentes-tempranas.png", status: "Disponible", statusTone: "available", category: "Matemáticas", rating: "4.9", title: "Cálculo Trascendentes Tempranas", authorEdition: "James Stewart • 7ma Edición", description: "Ampliamente reconocido por su precisión matemática, claridad de la exposición y notables conjuntos de problemas.", studyPurpose: "...", availability: "Disponible" },
  { areaId: "matematicas", coverSrc: "/el-libro-de-las-matematicas.png", status: "Disponible", statusTone: "available", category: "Matemáticas", rating: "5", title: "El Libro de las Matemáticas", authorEdition: "DK • 1ra Edición", description: "¿Qué es un número imaginario? ¿Cómo pueden servir las matemáticas para predecir el futuro?", studyPurpose: "...", availability: "Disponible" },
  { areaId: "matematicas", coverSrc: "/algebra-matricial-y-geometria-analitica.png", status: "En Préstamo", statusTone: "loan", category: "Matemáticas", rating: "4.7", title: "Álgebra Matricial y Geometría Analítica", authorEdition: "Cecilia Gaita • 3ra Edición", description: "Condensa la experiencia de enseñanza de muchos años, así como la profunda reflexión sobre el proceso de aprendizaje.", studyPurpose: "...", availability: "En préstamo" },
  { areaId: "matematicas", detailPath: "/prestamos/detalle-del-libro-1", coverSrc: "/calculus.png", status: "Disponible", statusTone: "available", category: "Matemáticas", rating: "4.7", title: "Calculus", authorEdition: "Michael Spivak • 3ra Edición", description: "Presenta el cálculo como la evolución de una idea que ayude a desarrollar la intuición del estudiante.", studyPurpose: "...", availability: "Disponible", featured: true },
  { areaId: "literatura", coverSrc: "/los-miserables.png", status: "Disponible", statusTone: "available", category: "Literatura", rating: "4.8", title: "Los Miserables", authorEdition: "Víctor Hugo • 1ra Edición", description: "Les misérables (1862) es una novela publicada por Victor Hugo y está considerada como una de las obras más ...", studyPurpose: "...", availability: "Disponible" },
  { areaId: "literatura", coverSrc: "/don-quijote-de-la-mancha.png", status: "Disponible", statusTone: "available", category: "Literatura", rating: "5", title: "Don Quijote de la Mancha", authorEdition: "Miguel de Cervantes • 1ra Edición", description: "Don Quijote de la Mancha «El que lee mucho y anda mucho, ve mucho y sabe mucho».", studyPurpose: "Análisis literario y lectura recreativa de formación humanista.", availability: "Disponible", featured: true },
  { areaId: "literatura", coverSrc: "/el-arte-de-la-guerra.png", status: "En Préstamo", statusTone: "loan", category: "Literatura", rating: "4.9", title: "El Arte de la Guerra", authorEdition: "Sun Tzu • 1ra Edición", description: "El arte de la guerra, un clásico de la literatura china estratégica que ha convertido en lectura esencial para ...", studyPurpose: "...", availability: "En préstamo" },
  { areaId: "literatura", coverSrc: "/el-gran-gatsby.png", status: "Disponible", statusTone: "available", category: "Literatura", rating: "4.8", title: "El Gran Gatsby", authorEdition: "F. Scott Fitzgerald • Edición Especial", description: "Las fiestas, el esplendor con que vivía West Egg, es el arquetipo de los hedonismos de la ...", studyPurpose: "...", availability: "Disponible" },
  { areaId: "historia", coverSrc: "/historia-de-la-teconologia-vol2.png", status: "Disponible", statusTone: "available", category: "Historia", rating: "5", title: "Historia de la Tecnología desde 1900 hasta 1950", authorEdition: "Trevor Williams • 8va Edición", description: "La importancia de la tecnología en todos los hitos tecnológicos en el desarrollo de la sociedad en su historia ...", studyPurpose: "...", availability: "Disponible" },
  { areaId: "historia", coverSrc: "/la-historia-del-arte.png", status: "En Préstamo", statusTone: "loan", category: "Historia", rating: "4.9", title: "La Historia del Arte", authorEdition: "Ernst. H. Gombrich • 16va Edición", description: "La Historia del Arte como la de todos los historiadores del arte de mi generación, mi forma de ver las pinturas está influida e...", studyPurpose: "Referencia para cursos de historia contemporánea y ciencias políticas.", availability: "En préstamo", featured: true },
  { areaId: "historia", coverSrc: "/historia-de-la-filosofia.png", status: "Disponible", statusTone: "available", category: "Historia", rating: "4.9", title: "Historia de la Filosofía", authorEdition: "Julián Marías • 3ra Edición", description: "Publicada originalmente en 1941, las numerosas ediciones de la Historia de la Filosofía de Julián Marías son la ...", studyPurpose: "...", availability: "Disponible" },
];

const Recomendaciones = () => {
  const navigate = useNavigate();
  const [selectedArea, setSelectedArea] = useState("todos");
  const [viewMode, setViewMode] = useState("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const visibleRecommendations = selectedArea === "todos" ? recommendations.filter((item) => item.featured) : recommendations.filter((item) => item.areaId === selectedArea);
  const handleNavigate = useCallback((destination) => { if (destination === "inicio") navigate("/"); else if (destination === "recomendaciones") navigate("/recomendaciones"); else window.console.info(`Navigation requested: ${destination}`); }, [navigate]);
  const handleUnavailableAction = useCallback((action) => window.console.info(`Action requested: ${action}`), []);

  return (
    <div className={styles.page}>
      <AppSidebar activeItem="recomendaciones" onNavigate={handleNavigate} />
      <div className={styles.mainArea}>
        <AppTopBar breadcrumbs={["Inicio", "Biblioteca"]} userName="Estudiante" avatarSrc="/Container.svg" notificationCount={1} onBreadcrumbNavigate={() => navigate("/")} search={{ value: searchQuery, onChange: setSearchQuery, placeholder: "Buscar libros, salas...", ariaLabel: "Buscar libros o salas" }} />
        <main className={styles.content}>
          <section className={styles.hero}>
            <div className={styles.heroCopy}><div className={styles.eyebrow}><img src="/trending-up.svg" alt="" />Curaduría Académica</div><h1>Recomendaciones de Estudio</h1><p>Selección curada por académicos y bibliotecarios de la USM para potenciar tu desempeño en las asignaturas críticas de este semestre.</p></div>
            <div className={styles.updated}><div><strong>Actualizado</strong><span>30 de Octubre , 2026</span></div><img src="/Container.svg" alt="" /></div>
          </section>
          <section className={styles.filters} aria-labelledby="filter-title">
            <div className={styles.sectionHeader}><div><img src="/circle-check-filter.svg" alt="" /><h2 id="filter-title">Filtrar por Área de Estudio</h2></div><button type="button" onClick={() => setSelectedArea("todos")}>Ver todas las áreas <img src="/Chevron-right.svg" alt="" /></button></div>
            <div className={styles.areaOptions}>{areas.map((area) => <RecommendationAreaFilter key={area.id} {...area} isSelected={selectedArea === area.id} onSelect={() => setSelectedArea(area.id)} />)}</div>
          </section>
          <section className={styles.materials} aria-labelledby="materials-title">
            <div className={styles.materialHeader}><div><h2 id="materials-title">Listado de Material Seleccionado</h2><p>Mostrando {visibleRecommendations.length} {visibleRecommendations.length === 1 ? "recurso recomendado" : "recursos recomendados"}</p></div><div className={styles.viewToggle}><button className={viewMode === "grid" ? styles.activeView : ""} type="button" aria-pressed={viewMode === "grid"} onClick={() => setViewMode("grid")}>Vista Cuadrícula</button><button className={viewMode === "list" ? styles.activeView : ""} type="button" aria-pressed={viewMode === "list"} onClick={() => setViewMode("list")}>Vista Listado</button></div></div>
            <div className={viewMode === "grid" ? styles.cardGrid : styles.cardList}>{visibleRecommendations.map(({ areaId, featured, detailPath, ...recommendation }) => <RecommendationBookCard key={recommendation.title} {...recommendation} onDetails={() => (detailPath ? navigate(detailPath) : handleUnavailableAction(recommendation.title))} />)}</div>
          </section>
          <section className={styles.cta}><div className={styles.ctaGlow} /><img className={styles.ctaIcon} src="/Container.svg" alt="" /><div><h2>¿No encuentras lo que buscas?</h2><p>Si necesitas material específico para tu proyecto de tesis o investigación que no figura en nuestras recomendaciones semanales, puedes solicitar una adquisición bibliográfica o consultar con un bibliotecario referencista en el mesón central.</p><div className={styles.ctaActions}><button type="button" onClick={() => handleUnavailableAction("adquisición")}>Solicitar Adquisición</button><button type="button" onClick={() => handleUnavailableAction("contacto")}>Contactar Bibliotecario</button></div></div></section>
        </main>
      </div>
    </div>
  );
};

export default Recomendaciones;
