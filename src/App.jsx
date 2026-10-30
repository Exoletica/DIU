import { useEffect } from "react";
import { Route, Routes, useLocation, useNavigationType } from "react-router-dom";
import Inicio from "./pages/Inicio";

function App() {
  const action = useNavigationType();
  const { pathname } = useLocation();

  useEffect(() => {
    if (action !== "POP") window.scrollTo(0, 0);
  }, [action, pathname]);

  useEffect(() => {
    if (pathname === "/") {
      document.title = "BibliotecaUSM | Inicio";
      const description = document.querySelector('head > meta[name="description"]');
      if (description) description.content = "BibliotecaUSM: recursos, reservas y apoyo académico.";
    }
  }, [pathname]);

  return <Routes><Route path="/" element={<Inicio />} /></Routes>;
}

export default App;
