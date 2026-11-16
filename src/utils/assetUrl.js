// Resuelve rutas de archivos de /public respetando el base de Vite.
// Así la app funciona tanto en la raíz como en un subdirectorio (GitHub Pages).
export const asset = (ruta) => `${import.meta.env.BASE_URL}${ruta.replace(/^\//, "")}`;
