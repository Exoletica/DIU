# BibliotecaUSM

Interfaz web de una biblioteca universitaria para consultar recursos, reservar salas, revisar préstamos y acceder a recomendaciones de estudio desde un solo lugar.

## Características

- Página de inicio con buscador y accesos rápidos.
- Panel de próximas reservas y préstamos.
- Recomendaciones de estudio con portadas y valoraciones.
- Recursos útiles, novedades y asistencia en línea.
- Diseño responsive con sidebar y barra superior.

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
│   ├── common/    # Encabezados y elementos compartidos
│   ├── home/      # Secciones y tarjetas de la página de inicio
│   └── layout/    # Sidebar, barra superior y footer
├── pages/         # Página de inicio
├── App.jsx
├── global.scss    # Variables y estilos globales
└── index.jsx
public/            # Imágenes, iconos y assets estáticos
```

## Notas

- El script `npm run lint` requiere configurar `eslint.config.js` para ESLint 9.
- Foto de la sección de novedades: [Eric Lozaga en Pexels](https://www.pexels.com/photo/spacious-library-aisle-with-bookshelves-and-study-tables-31138995/).

## Autor

[Exoletica](https://github.com/Exoletica)
