import { HOY, estadoPrestamo } from "./misPrestamos";

const etiquetas = { activo: "Activo", renovado: "Renovado", atrasado: "Atrasado" };

// Abre una ventana con el comprobante y el diálogo de impresión.
// Desde ahí el usuario puede elegir "Guardar como PDF".
export const descargarComprobante = (prestamos) => {
  const filas = prestamos.map((p) => `
    <tr>
      <td><b>${p.titulo}</b><br><small>${p.autor}</small></td>
      <td>${p.isbn}</td>
      <td>${p.fechaPrestamo}</td>
      <td>${p.fechaDevolucion}</td>
      <td>${etiquetas[estadoPrestamo(p)]}</td>
    </tr>`).join("");

  const html = `<!doctype html>
<html lang="es"><head><meta charset="utf-8"><title>Comprobante de préstamos - BibliotecaUSM</title>
<style>
  body { font-family: "IBM Plex Sans", Arial, sans-serif; color: #1d1f23; margin: 40px; }
  h1 { margin: 0; color: #003366; font-size: 22px; }
  p { color: #696d72; margin: 4px 0 24px; font-size: 13px; }
  table { width: 100%; border-collapse: collapse; font-size: 13px; }
  th { text-align: left; background: #f1f7ff; color: #003366; padding: 8px; }
  td { padding: 8px; border-bottom: 1px solid #dfe1e4; }
  small { color: #696d72; }
  footer { margin-top: 32px; font-size: 11px; color: #696d72; }
</style></head>
<body>
  <h1>BibliotecaUSM — Comprobante de préstamos</h1>
  <p>Usuario: Estudiante · Emitido el ${HOY}</p>
  <table>
    <thead><tr><th>Título</th><th>ISBN</th><th>Préstamo</th><th>Devolución</th><th>Estado</th></tr></thead>
    <tbody>${filas}</tbody>
  </table>
  <footer>Documento generado automáticamente por el sistema de biblioteca.</footer>
  <script>window.onload = () => window.print();</script>
</body></html>`;

  const ventana = window.open("", "_blank");
  if (!ventana) return false;
  ventana.document.write(html);
  ventana.document.close();
  return true;
};
