import { useEffect } from "react";
import { Route, Routes, useLocation, useNavigationType } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Recomendaciones from "./pages/Recomendaciones";

function App() {
  const action = useNavigationType();
  const { pathname } = useLocation();

  useEffect(() => {
    if (action !== "POP") window.scrollTo(0, 0);
  }, [action, pathname]);

  useEffect(() => {
    const metadata = pathname === "/recomendaciones"
      ? { title: "BibliotecaUSM | Recomendaciones de Estudio", description: "Selección académica de materiales de estudio de BibliotecaUSM." }
      : { title: "BibliotecaUSM | Inicio", description: "BibliotecaUSM: recursos, reservas y apoyo académico." };
    document.title = metadata.title;
    const description = document.querySelector('head > meta[name="description"]');
    if (description) description.content = metadata.description;
  }, [pathname]);

  return <Routes><Route path="/" element={<Inicio />} /><Route path="/recomendaciones" element={<Recomendaciones />} /></Routes>;
}

export default App;
