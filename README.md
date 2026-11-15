# BibliotecaUSM

Interfaz web de una biblioteca universitaria para consultar recursos, reservar salas, revisar préstamos y acceder a recomendaciones de estudio desde un solo lugar.

## Características

- Página de inicio con buscador y accesos rápidos.
- Panel de próximas reservas y préstamos.
- Recomendaciones de estudio con portadas y valoraciones.
- Recursos útiles, novedades y asistencia en línea.
- Diseño responsive con sidebar y barra superior.
- Catálogo de préstamo de herramientas (libros físicos, Arduinos y calculadoras).
- Fichas de detalle del libro con resumen, ficha técnica (ISBN, páginas, editorial, idioma) y recomendados.
- Buscador de libros en Inicio y en la barra superior, con filtros por disponibilidad, área y año.
- Mis Préstamos: renovaciones, historial, solicitudes y comprobante imprimible.
- Préstamo de calculadoras y Arduinos.
- Chat de asesoría con un bibliotecario.
- Reserva de salas de estudio con calendario, horarios, filtros por capacidad y disponibilidad, y límite diario por estudiante.
- Mis Reservas: reservas activas e historial de libros y salas, con vista de calendario, confirmación, cancelación y ayuda (FAQ y contacto con soporte).

## Tecnologías

- React 19
- Vite 6
- React Router
- Sass
- ESLint

## Requisitos

- Node.js 20 o superior
- npm 10 o superior

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm start
```

La aplicación queda disponible en `http://localhost:5173`.

## Producción

```bash
npm run build
npm run preview
```

El build se genera en la carpeta `build/`.

## Estructura del proyecto

```text
src/
├── components/
│   ├── book-view/         # Ficha de detalle de un libro (BookDetailView)
│   ├── busqueda/          # Layout de Resultados, Contacto y página 404
│   ├── common/            # Encabezados, avisos (Toast) y hook de modales accesibles
│   ├── home/              # Secciones y tarjetas de la página de inicio
│   ├── layout/            # Sidebar, barra superior (con buscador) y footer
│   ├── my-loans/          # Tarjetas, tabla y modales de Mis Préstamos
│   ├── recommendations/   # Filtro y tarjetas de Recomendaciones
│   ├── tool-loans/        # Tarjeta de herramienta/equipo
│   ├── mis-reservas/      # Tarjeta de reserva y ayuda de Mis Reservas
│   ├── reservas-de-sala/  # Tarjeta de sala, filtros y recordatorios de Reservas de Sala
│   └── reservas-comun/    # Layout, encabezado y calendario compartidos por las reservas
├── data/
│   ├── libros.js          # Catálogo central de libros y fichas de detalle
│   ├── equipos.js         # Calculadoras y Arduinos para préstamo
│   ├── misPrestamos.js    # Préstamos de ejemplo (fechas relativas a hoy)
│   └── reservas/          # Salas, reservas de ejemplo y estado compartido de las reservas
├── pages/                 # Una página por ruta
├── styles/reservas/       # Estilos BEM de reservas: una carpeta por bloque
├── utils/                 # fechas.js y almacenamiento.js (guardado en el navegador)
├── routes.js              # Rutas de la app y navegación compartida
├── App.jsx                # Rutas, títulos y descripciones por página
├── global.scss            # Variables y estilos globales
└── index.jsx
public/                    # Imágenes (WebP), iconos SVG y favicon
└── herramientas/          # Imágenes de libros físicos, calculadoras y Arduinos
```

## Rutas

| Ruta | Página |
| --- | --- |
| `/` | Inicio |
| `/resultados-de-busqueda?q=texto` | Resultados de búsqueda |
| `/recomendaciones` | Recomendaciones de estudio |
| `/prestamos` | Préstamo de Herramientas |
| `/prestamos/calculadoras` | Préstamo de calculadoras |
| `/prestamos/arduinos` | Préstamo de Arduinos |
| `/prestamos/detalle-del-libro-1` | Calculus — Michael Spivak |
| `/prestamos/detalle-del-libro-2` | El Miedo en Occidente — Jean Delumeau |
| `/prestamos/detalle-del-libro-4` | Cálculo Trascendentes Tempranas — James Stewart |
| `/mis-prestamos` | Mis Préstamos |
| `/mis-reservas` | Mis Reservas |
| `/reservas-de-sala` | Reservas de Sala |
| `/contacto-bibliotecario` | Chat con bibliotecario |
| cualquier otra | Página no encontrada (404) |

## Cómo agregar contenido

- **Un libro al catálogo:** agrega una entrada en `catalogo` de `src/data/libros.js`. Aparece en Inicio, Resultados y Recomendaciones con la misma portada, área y disponibilidad.
- **Una ficha de libro:** agrega su bloque en `libros`, crea su página como `<BookDetailView libroId="..." />`, su ruta en `src/routes.js` y `src/App.jsx`, y pon esa ruta en `catalogo`.
- **Un tipo de equipo:** agrega un bloque en `src/data/equipos.js` y su ruta con `<PrestamoEquipos tipo="..." />`.

## Notas

- Las reservas, renovaciones y solicitudes se guardan en el navegador (`localStorage`). Para volver a los datos de ejemplo, borra los datos del sitio.
- Despliegue: `vercel.json` y `public/_redirects` (Netlify) redirigen todas las rutas a `index.html`, así recargar cualquier página funciona.
- `npm run lint` revisa el código con ESLint 9 (`eslint.config.js`).
- Foto de la sección de novedades: [Eric Lozaga en Pexels](https://www.pexels.com/photo/spacious-library-aisle-with-bookshelves-and-study-tables-31138995/).

## Autores

- [Exoletica](https://github.com/Exoletica) — Página de inicio, layout y componentes base.
- Matías Santibáñez — Préstamo de herramientas y fichas de detalle del libro.
