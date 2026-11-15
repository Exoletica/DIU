// Equipos que se pueden pedir en préstamo, agrupados por tipo.
// Para agregar un tipo nuevo: agrega un bloque aquí y su ruta en src/routes.js y src/App.jsx.
export const equipos = {
  calculadoras: {
    titulo: "Calculadoras",
    descripcion: "Calculadoras científicas y graficadoras para pruebas y laboratorios.",
    items: [
      { id: "cientifica", imagen: "/herramientas/calculadora-cientifica.png", titulo: "Calculadora científica", detalle: "Casio fx-570 · 12 unidades" },
      { id: "ti", imagen: "/herramientas/calculadora-ti.png", titulo: "Calculadora TI", detalle: "TI-84 Plus CE · 6 unidades" },
    ],
  },
  arduinos: {
    titulo: "Arduinos",
    descripcion: "Placas de desarrollo con cable USB para proyectos y laboratorios.",
    items: [
      { id: "uno", imagen: "/herramientas/arduino-uno.svg", titulo: "Arduino Uno R3", detalle: "Ideal para empezar · 25 unidades" },
      { id: "mega", imagen: "/herramientas/arduino-mega.svg", titulo: "Arduino Mega 2560", detalle: "Más pines y memoria · 15 unidades" },
      { id: "nano", imagen: "/herramientas/arduino-nano.svg", titulo: "Arduino Nano", detalle: "Formato compacto · 10 unidades" },
    ],
  },
};
