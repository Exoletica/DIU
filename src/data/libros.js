// Fichas de libros para las páginas de detalle.
// Para agregar otro libro: copia un bloque, cambia los datos y crea su ruta.

export const libros = {
  calculus: {
    id: "calculus",
    titulo: "Calculus",
    autor: "Michael Spivak",
    edicion: "3ª Edición",
    etiqueta: "Libro de texto",
    rating: 4.7,
    numResenas: 21,
    portada: "/prestamos/Container10@2x.png",
    resumen:
      "En esta edición, el autor mantiene intacto el principal objetivo del libro, que no es otro que presentar el cálculo como la evolución de una idea que ayude a desarrollar la intuición del estudiante para la comprensión de los conceptos del análisis y convencerle de que la precisión y el rigor representan la manera natural de formular y pensar sobre las cuestiones matemáticas. La principal novedad de esta edición es la incorporación de problemas adicionales y una puesta al día completa de los contenidos.",
    ficha: [
      ["ISBN-13", "9788429151824"],
      ["Páginas", "704 páginas"],
      ["Publicación", "2012"],
      ["Idioma", "Español"],
      ["Editorial", "Reverté"],
    ],
    ejemplares: [
      { codigo: "QA303 .S64 2012 c.1", ubicacion: "Central - Piso 3", estado: "disponible" },
      { codigo: "QA303 .S64 2012 c.2", ubicacion: "Central - Piso 3", estado: "disponible" },
      { codigo: "QA303 .S64 2012 c.3", ubicacion: "Central - Piso 3", estado: "prestado" },
    ],
    resenas: [
      { iniciales: "CR", carrera: "Ingeniería Civil Matemática", estrellas: 5, texto: "Exigente, pero las demostraciones están muy bien explicadas. Ideal para entender el porqué de cada teorema." },
      { iniciales: "JP", carrera: "Licenciatura en Física", estrellas: 4, texto: "Los ejercicios son difíciles; conviene complementarlo con apuntes del curso." },
    ],
    recomendados: ["miedo", "stewart", "matematicas", "gatsby"],
  },
};

// Tarjetas de "Recomendados para ti". ruta: null = todavía no tiene página.
export const recomendadosInfo = {
  miedo: { titulo: "El Miedo en Occidente", autor: "Jean Delumeau", categoria: "Historia", portada: "/Frame1@3x.png", ruta: "/prestamos/detalle-del-libro-2" },
  stewart: { titulo: "Cálculo Trascendentes Tempranas", autor: "James Stewart", categoria: "Matemáticas", portada: "/prestamos/Container14@2x.png", ruta: "/prestamos/detalle-del-libro-4" },
  matematicas: { titulo: "El libro de las matemáticas", autor: "DK", categoria: "Matemáticas", portada: "/prestamos/Container6@2x.png", ruta: null },
  gatsby: { titulo: "El Gran Gatsby", autor: "F. Scott Fitzgerald", categoria: "Literatura", portada: "/prestamos/Container11@2x.png", ruta: null },
  calculus: { titulo: "Calculus", autor: "Michael Spivak", categoria: "Matemáticas", portada: "/prestamos/Container10@2x.png", ruta: "/prestamos/detalle-del-libro-1" },
};
