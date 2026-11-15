import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppSidebar from "../components/layout/AppSidebar";
import AppTopBar from "../components/layout/AppTopBar";
import Toast from "../components/common/Toast"
import useToast from "../components/common/useToast";
import { catalogo } from "../data/libros";
import { RUTAS, useNavegacion } from "../routes";
import RecommendationAreaFilter from "../components/recommendations/RecommendationAreaFilter";
import RecommendationBookCard from "../components/recommendations/RecommendationBookCard";
import styles from "./Recomendaciones.module.scss";

const areas = [
  { id: "todos", label: "Todos", iconSrc: "/book-open.svg" },
  { id: "matematicas", label: "Matemáticas", iconSrc: "/graduation-cap.svg" },
  { id: "literatura", label: "Literatura", iconSrc: "/book-text.svg" },
  { id: "historia", label: "Historia", iconSrc: "/history.svg" },
];

// Selección curada. Título, portada, área, valoración, ficha y disponibilidad vienen del catálogo central.
const recommendations = [
  { id: "miedo", areaId: "historia", authorEdition: "Jean Delumeau • 1ra Edición", description: "Esta historia del miedo, asimismo una historia de las mentalidades, demuestra que no solo los individuos, sino también ...", studyPurpose: "Comprensión de la historia de las mentalidades y análisis de fuentes para cursos de historia moderna.", featured: true },
  { id: "stewart", areaId: "matematicas", authorEdition: "James Stewart • 7ma Edición", description: "Ampliamente reconocido por su precisión matemática, claridad de la exposición y notables conjuntos de problemas.", studyPurpose: "Preparación para certámenes de Cálculo I y II, con ejercicios graduados de límites, derivadas e integrales.", availability: "Disponible" },
  { id: "matematicas", areaId: "matematicas", authorEdition: "DK • 1ra Edición", description: "¿Qué es un número imaginario? ¿Cómo pueden servir las matemáticas para predecir el futuro?", studyPurpose: "Lectura introductoria para conocer la historia y las ideas clave de la disciplina antes de cursos avanzados.", availability: "Disponible" },
  { id: "algebra", areaId: "matematicas", authorEdition: "Cecilia Gaita • 3ra Edición", description: "Condensa la experiencia de enseñanza de muchos años, así como la profunda reflexión sobre el proceso de aprendizaje.", studyPurpose: "Base para Álgebra Lineal: matrices, sistemas de ecuaciones y geometría en el plano y el espacio.", availability: "En préstamo" },
  { id: "calculus", areaId: "matematicas", authorEdition: "Michael Spivak • 3ra Edición", description: "Presenta el cálculo como la evolución de una idea que ayude a desarrollar la intuición del estudiante.", studyPurpose: "Estudio riguroso del análisis real y demostraciones para estudiantes que buscan profundizar en el cálculo.", featured: true },
  { id: "miserables", areaId: "literatura", authorEdition: "Víctor Hugo • 1ra Edición", description: "Les misérables (1862) es una novela publicada por Victor Hugo y está considerada como una de las obras más ...", studyPurpose: "Lectura de formación humanista y análisis de la novela social del siglo XIX.", availability: "Disponible" },
  { id: "quijote", areaId: "literatura", authorEdition: "Miguel de Cervantes • 1ra Edición", description: "Don Quijote de la Mancha «El que lee mucho y anda mucho, ve mucho y sabe mucho».", studyPurpose: "Análisis literario y lectura recreativa de formación humanista.", featured: true },
  { id: "guerra", areaId: "literatura", authorEdition: "Sun Tzu • 1ra Edición", description: "El arte de la guerra, un clásico de la literatura china estratégica que ha convertido en lectura esencial para ...", studyPurpose: "Estudio de estrategia y pensamiento crítico, útil para cursos de gestión y liderazgo.", availability: "En préstamo" },
  { id: "gatsby", areaId: "literatura", authorEdition: "F. Scott Fitzgerald • Edición Especial", description: "Las fiestas, el esplendor con que vivía West Egg, es el arquetipo de los hedonismos de la ...", studyPurpose: "Análisis literario de la narrativa estadounidense del siglo XX y su crítica social.", availability: "Disponible" },
  { id: "tecnologia", areaId: "historia", authorEdition: "Trevor Williams • 8va Edición", description: "La importancia de la tecnología en todos los hitos tecnológicos en el desarrollo de la sociedad en su historia ...", studyPurpose: "Contexto histórico de la ingeniería moderna para cursos de historia de la ciencia y la tecnología.", availability: "Disponible" },
  { id: "arte", areaId: "historia", authorEdition: "Ernst. H. Gombrich • 16va Edición", description: "La Historia del Arte como la de todos los historiadores del arte de mi generación, mi forma de ver las pinturas está influida e...", studyPurpose: "Referencia para cursos de historia del arte y apreciación de las corrientes artísticas.", featured: true },
  { id: "filosofia", areaId: "historia", authorEdition: "Julián Marías • 3ra Edición", description: "Publicada originalmente en 1941, las numerosas ediciones de la Historia de la Filosofía de Julián Marías son la ...", studyPurpose: "Panorama de los grandes pensadores para cursos de filosofía y ética profesional.", availability: "Disponible" },
].map((item) => {
  const libro = catalogo[item.id];
  return {
    ...item,
    title: libro.titulo,
    coverSrc: libro.portada,
    detailPath: libro.ruta,
    category: libro.area,
    rating: String(libro.rating),
    available: libro.disponible,
  };
});

const formatToday = () => {
  const today = new Date();
  const month = today.toLocaleDateString("es-CL", { month: "long" });
  return `${today.getDate()} de ${month.charAt(0).toUpperCase()}${month.slice(1)}, ${today.getFullYear()}`;
};

const Recomendaciones = () => {
  const navigate = useNavigate();
  const [selectedArea, setSelectedArea] = useState("todos");
  const [viewMode, setViewMode] = useState("grid");
  const todayLabel = formatToday();
  const visibleRecommendations = selectedArea === "todos" ? recommendations.filter((item) => item.featured) : recommendations.filter((item) => item.areaId === selectedArea);
  const [toast, setToast] = useToast(3500);
  const handleNavigate = useNavegacion();
  const handleDetails = useCallback(({ title, detailPath, available }) => {
    if (!available) return setToast(`Te avisaremos cuando "${title}" vuelva a estar disponible.`);
    if (detailPath) return navigate(detailPath);
    return setToast(`La ficha de "${title}" aún no está disponible.`);
  }, [navigate, setToast]);

  return (
    <div className={styles.page}>
      <AppSidebar activeItem="recomendaciones" onNavigate={handleNavigate} />
      <div className={styles.mainArea}>
        <AppTopBar breadcrumbs={["Inicio", "Recomendaciones"]} onBreadcrumbNavigate={() => navigate("/")} showSearch />
        <main className={styles.content}>
          <section className={styles.hero}>
            <div className={styles.heroCopy}><div className={styles.eyebrow}><img src="/trending-up.svg" alt="" />Curaduría Académica</div><h1>Recomendaciones de Estudio</h1><p>Selección curada por académicos y bibliotecarios de la USM para potenciar tu desempeño en las asignaturas críticas de este semestre.</p></div>
            <div className={styles.updated}><div><strong>Actualizado</strong><span>{todayLabel}</span></div><img src="/Container.svg" alt="" /></div>
          </section>
          <section className={styles.filters} aria-label="Filtrar por área de estudio">
            <div className={styles.areaOptions}>{areas.map((area) => <RecommendationAreaFilter key={area.id} {...area} isSelected={selectedArea === area.id} onSelect={() => setSelectedArea(area.id)} />)}</div>
          </section>
          <section className={styles.materials} aria-labelledby="materials-title">
            <div className={styles.materialHeader}><div><h2 id="materials-title">Listado de Material Seleccionado</h2><p>Mostrando {visibleRecommendations.length} {visibleRecommendations.length === 1 ? "recurso recomendado" : "recursos recomendados"}</p></div><div className={styles.viewToggle}><button className={viewMode === "grid" ? styles.activeView : ""} type="button" aria-pressed={viewMode === "grid"} onClick={() => setViewMode("grid")}>Vista Cuadrícula</button><button className={viewMode === "list" ? styles.activeView : ""} type="button" aria-pressed={viewMode === "list"} onClick={() => setViewMode("list")}>Vista Listado</button></div></div>
            <div className={viewMode === "grid" ? styles.cardGrid : styles.cardList}>{visibleRecommendations.map(({ id, areaId, featured, detailPath, ...recommendation }) => <RecommendationBookCard key={id} layout={viewMode} {...recommendation} onDetails={() => handleDetails({ ...recommendation, detailPath })} />)}</div>
          </section>
          <section className={styles.cta}><div className={styles.ctaGlow} /><img className={styles.ctaIcon} src="/Container.svg" alt="" /><div><h2>¿No encuentras lo que buscas?</h2><p>Si necesitas material específico para tu proyecto de tesis o investigación que no figura en nuestras recomendaciones semanales, puedes solicitar una adquisición bibliográfica o consultar con un bibliotecario referencista en el mesón central.</p><div className={styles.ctaActions}><button type="button" onClick={() => setToast("Solicitud de adquisición enviada. Un bibliotecario te contactará por correo.")}>Solicitar Adquisición</button><button type="button" onClick={() => navigate(RUTAS.contacto)}>Contactar Bibliotecario</button></div></div></section>
        </main>
      </div>
      <Toast mensaje={toast} />
    </div>
  );
};

export default Recomendaciones;
