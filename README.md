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
- Navegación entre el inicio y el catálogo de préstamos desde el sidebar.
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
│   ├── common/      # Encabezados y elementos compartidos
│   ├── home/        # Secciones y tarjetas de la página de inicio
│   ├── layout/      # Sidebar, barra superior y footer
│   ├── book-detail/ # Sidebar, barra superior, ficha técnica y tarjetas del detalle del libro
│   ├── loans/       # Catálogo y tarjetas de préstamo de herramientas
│   └── reservas/    # Layout, calendario, tarjetas de sala y de reserva, filtros y ayuda
├── data/
│   └── reservas/    # Salas, reservas de ejemplo y estado compartido de las reservas
├── pages/           # Inicio, préstamo de herramientas y detalle del libro
│   └── reservas/    # Mis Reservas y Reservas de Sala
├── styles/          # Tokens acotados a las páginas de préstamos y detalle
│   └── reservas/    # Estilos BEM de reservas: una carpeta por bloque y un archivo por elemento
├── utils/           # Utilidades de fechas
├── App.jsx
├── global.scss      # Variables y estilos globales
└── index.jsx
public/              # Imágenes, iconos y assets estáticos
└── prestamos/       # Assets de las páginas de préstamos y detalle del libro
```

## Rutas

| Ruta | Página |
| --- | --- |
| `/` | Inicio |
| `/prestamos` | Préstamo de Herramientas |
| `/prestamos/detalle-del-libro-1` | Calculus — Michael Spivak |
| `/prestamos/detalle-del-libro-2` | El Miedo en Occidente — Jean Delumeau |
| `/prestamos/detalle-del-libro-4` | Cálculo Trascendentes Tempranas — James Stewart |
| `/mis-reservas` | Mis Reservas |
| `/reservas-de-sala` | Reservas de Sala |

## Notas

- El script `npm run lint` requiere configurar `eslint.config.js` para ESLint 9.
- Foto de la sección de novedades: [Eric Lozaga en Pexels](https://www.pexels.com/photo/spacious-library-aisle-with-bookshelves-and-study-tables-31138995/).

## Autores

- [Exoletica](https://github.com/Exoletica) — Página de inicio, layout y componentes base.
- Matías Santibáñez — Préstamo de herramientas y fichas de detalle del libro.
