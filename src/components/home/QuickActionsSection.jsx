import SectionHeader from "../common/SectionHeader";
import QuickActionCard from "./QuickActionCard";
import "./QuickActionsSection.scss";

const actions = [
  { title:"Solicitar un Préstamo", description:"Explora nuestro catálogo completo de herramientas físicas y digitales para potenciar tu estudio.", tone:"neutral", destination:"prestamos" },
  { title:"Reservar Sala", description:"Encuentra el espacio perfecto para tus trabajos grupales o estudio individual intensivo.", tone:"warm", destination:"salas" },
  { title:"Pedir Prórroga", description:"¿Necesitas más tiempo? Extiende el plazo de tus préstamos vigentes con un solo clic.", tone:"extended", destination:"prestamos" },
];

const QuickActionsSection = ({ onNavigate }) => <section className="quick-actions-section"><SectionHeader title="Acciones Rápidas" description="Todo lo que necesitas para tu día académico en un solo lugar." /><div className="quick-actions-section__cards">{actions.map((action) => <QuickActionCard key={action.title} iconSrc="/Container.svg" {...action} onClick={() => onNavigate(action.destination)} />)}</div></section>;

export default QuickActionsSection;
