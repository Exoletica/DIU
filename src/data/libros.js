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
    portada: "/calculus.webp",
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
  miedo: {
    id: "miedo",
    titulo: "El Miedo en Occidente",
    autor: "Jean Delumeau",
    edicion: "1ª Edición",
    etiqueta: "Libro de texto",
    rating: 4.8,
    numResenas: 7,
    portada: "/el-miedo-de-occidente.webp",
    resumen:
      "Esta historia del miedo, asimismo una historia de las mentalidades, demuestra que no solo los individuos, sino también las colectividades e incluso las civilizaciones, pueden estar atrapados en un permanente diálogo con el miedo. El autor traza el retrato de una sociedad traumatizada por la peste, las guerras, las disputas religiosas y la constante inseguridad, y analiza la instrumentalización del terror, sobre todo por parte de la Iglesia.",
    ficha: [
      ["ISBN-13", "9788430622856"],
      ["Páginas", "752 páginas"],
      ["Publicación", "2019"],
      ["Idioma", "Castellano"],
      ["Editorial", "Taurus"],
    ],
    ejemplares: [
      { codigo: "BF575 .D45 2019 c.1", ubicacion: "Central - Piso 2", estado: "disponible" },
      { codigo: "BF575 .D45 2019 c.2", ubicacion: "Central - Piso 2", estado: "disponible" },
      { codigo: "BF575 .D45 2019 c.3", ubicacion: "San Joaquín - Piso 1", estado: "prestado" },
    ],
    resenas: [
      { iniciales: "MA", carrera: "Licenciatura en Historia", estrellas: 5, texto: "Un clásico de la historia de las mentalidades. Muy bien documentado y ameno de leer." },
      { iniciales: "FS", carrera: "Pedagogía en Castellano", estrellas: 4, texto: "Denso en algunos capítulos, pero las fuentes que cita son muy útiles para ensayos." },
    ],
    recomendados: ["filosofia", "matematicas", "calculus", "gatsby"],
  },
  stewart: {
    id: "stewart",
    titulo: "Cálculo Trascendentes Tempranas",
    autor: "James Stewart",
    edicion: "7ª Edición",
    etiqueta: "Libro de texto",
    rating: 4.9,
    numResenas: 7,
    portada: "/calculo-trascendentes-tempranas.webp",
    resumen:
      "Cálculo Trascendentes Tempranas es ampliamente reconocido por su precisión matemática y la exactitud, claridad de la exposición y notables ejemplos y conjuntos de problemas. Millones de estudiantes en todo el mundo han estudiado el cálculo a través del estilo registrado de Stewart, mientras que los instructores han adoptado su planteamiento una y otra vez.",
    ficha: [
      ["ISBN-13", "9786074817836"],
      ["Páginas", "1350 páginas"],
      ["Publicación", "2010"],
      ["Idioma", "Español"],
      ["Editorial", "Cengage Learning"],
    ],
    ejemplares: [
      { codigo: "QA303.2 .S74 2010 c.1", ubicacion: "Central - Piso 3", estado: "prestado" },
      { codigo: "QA303.2 .S74 2010 c.2", ubicacion: "Central - Piso 3", estado: "prestado" },
      { codigo: "QA303.2 .S74 2010 c.3", ubicacion: "San Joaquín - Piso 2", estado: "prestado" },
    ],
    resenas: [
      { iniciales: "VR", carrera: "Ingeniería Civil Informática", estrellas: 5, texto: "Muy claro y con muchísimos ejercicios resueltos. El libro base para Matemática I y II." },
      { iniciales: "DT", carrera: "Ingeniería Civil Eléctrica", estrellas: 5, texto: "Las explicaciones gráficas ayudan mucho a entender límites y derivadas." },
    ],
    recomendados: ["miedo", "matematicas", "calculus", "gatsby"],
  },
};

// Datos comunes de cada libro del catálogo: los usan Inicio, Resultados, Recomendaciones,
// los "Recomendados para ti" de las fichas y Mis Préstamos. ruta: null = todavía no tiene ficha.
// temas: palabras extra para que el buscador lo encuentre.
export const catalogo = {
  calculus: { titulo: "Calculus", autor: "Michael Spivak", area: "Matemáticas", portada: "/calculus.webp", ruta: "/prestamos/detalle-del-libro-1", disponible: true, rating: 4.7, temas: "cálculo análisis matemático" },
  stewart: { titulo: "Cálculo Trascendentes Tempranas", autor: "James Stewart", area: "Matemáticas", portada: "/calculo-trascendentes-tempranas.webp", ruta: "/prestamos/detalle-del-libro-4", disponible: false, rating: 4.9, temas: "cálculo derivadas integrales" },
  miedo: { titulo: "El Miedo en Occidente", autor: "Jean Delumeau", area: "Historia", portada: "/el-miedo-de-occidente.webp", ruta: "/prestamos/detalle-del-libro-2", disponible: true, rating: 4.8, temas: "historia mentalidades edad media" },
  matematicas: { titulo: "El libro de las matemáticas", autor: "DK", area: "Matemáticas", portada: "/el-libro-de-las-matematicas.webp", ruta: null, disponible: true, rating: 5, temas: "matemáticas divulgación números" },
  algebra: { titulo: "Álgebra Matricial y Geometría Analítica", autor: "Cecilia Gaita", area: "Matemáticas", portada: "/algebra-matricial-y-geometria-analitica.webp", ruta: null, disponible: false, rating: 4.7, temas: "álgebra lineal matrices" },
  gatsby: { titulo: "El Gran Gatsby", autor: "F. Scott Fitzgerald", area: "Literatura", portada: "/el-gran-gatsby.webp", ruta: null, disponible: true, rating: 4.8, temas: "novela literatura estadounidense" },
  miserables: { titulo: "Los Miserables", autor: "Víctor Hugo", area: "Literatura", portada: "/los-miserables.webp", ruta: null, disponible: true, rating: 4.8, temas: "novela literatura francesa" },
  quijote: { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", area: "Literatura", portada: "/don-quijote-de-la-mancha.webp", ruta: null, disponible: true, rating: 5, temas: "novela literatura española" },
  guerra: { titulo: "El Arte de la Guerra", autor: "Sun Tzu", area: "Literatura", portada: "/el-arte-de-la-guerra.webp", ruta: null, disponible: false, rating: 4.9, temas: "estrategia liderazgo" },
  filosofia: { titulo: "Historia de la Filosofía", autor: "Julián Marías", area: "Filosofía", portada: "/historia-de-la-filosofia.webp", ruta: null, disponible: true, rating: 4.9, temas: "filosofía pensamiento" },
  tecnologia: { titulo: "Historia de la Tecnología desde 1900 hasta 1950", autor: "Trevor Williams", area: "Historia", portada: "/historia-de-la-teconologia-vol2.webp", ruta: null, disponible: true, rating: 5, temas: "tecnología ingeniería siglo XX" },
  arte: { titulo: "La Historia del Arte", autor: "Ernst H. Gombrich", area: "Historia", portada: "/la-historia-del-arte.webp", ruta: null, disponible: false, rating: 4.9, temas: "arte pintura" },
};
