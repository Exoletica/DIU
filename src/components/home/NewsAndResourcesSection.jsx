import ResourceTile from "./ResourceTile";
import "./NewsAndResourcesSection.scss";

const resources = [["Guía de Citación", "Formatos APA e IEEE"], ["Repositorio USM", "Tesis y publicaciones"], ["Calendario", "Horarios y festivos"]];
const NewsAndResourcesSection = ({ onNavigate }) => <section className="news-and-resources"><article className="news-and-resources__news"><div><span>Novedad</span><h2>Nuevas Salas de Estudio</h2><p>Hemos habilitado 10 nuevas salas en el tercer piso con equipamiento multimedia de última generación para tus proyectos.</p><button onClick={() => onNavigate("salas")}>Explorar Espacios</button></div><img src="/news-study-room.jpg" alt="Sala de estudio" /></article><section className="news-and-resources__resources"><div className="news-and-resources__heading"><h2>Recursos Útiles</h2></div><div className="news-and-resources__tiles">{resources.map(([title, description]) => <ResourceTile key={title} iconSrc="/Container.svg" title={title} description={description} onClick={() => onNavigate(title)} />)}</div><button className="news-and-resources__availability" onClick={() => onNavigate("contacto")}><i /><span>Asistencia en línea disponible</span><strong>Chat con bibliotecario</strong></button></section></section>;

export default NewsAndResourcesSection;
