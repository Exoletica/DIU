import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

// Ruta de cada destino de la app. Las usan el menú lateral, el footer y los accesos de Inicio.
export const RUTAS = {
  inicio: "/",
  reservas: "/mis-reservas",
  "mis-prestamos": "/mis-prestamos",
  prestamos: "/prestamos",
  calculadoras: "/prestamos/calculadoras",
  arduinos: "/prestamos/arduinos",
  recomendaciones: "/recomendaciones",
  salas: "/reservas-de-sala",
  contacto: "/contacto-bibliotecario",
  catalogo: "/resultados-de-busqueda",
  "libro-1": "/prestamos/detalle-del-libro-1",
  "libro-2": "/prestamos/detalle-del-libro-2",
  "libro-4": "/prestamos/detalle-del-libro-4",
};

export const rutaBusqueda = (texto) => {
  const q = texto.trim();
  return q ? `${RUTAS.catalogo}?q=${encodeURIComponent(q)}` : RUTAS.catalogo;
};

// Navega al destino; si todavía no tiene página llama a onSinPagina(destino).
export const useNavegacion = (onSinPagina) => {
  const navigate = useNavigate();
  return useCallback((destino) => {
    if (RUTAS[destino]) navigate(RUTAS[destino]);
    else onSinPagina?.(destino);
  }, [navigate, onSinPagina]);
};
