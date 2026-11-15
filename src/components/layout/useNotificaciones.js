import { useReservations } from "../../data/reservas/estado_reservas";
import { prestamosIniciales, estadoPrestamo, textoVencimiento, diasEntre, HOY, DIAS_AVISO_VENCIMIENTO, CLAVE_PRESTAMOS } from "../../data/misPrestamos";
import { leer } from "../../utils/almacenamiento";
import { formatShortDate } from "../../utils/fechas";
import { RUTAS } from "../../routes";

// Avisos para la campana: préstamos atrasados o por vencer, reservas por confirmar y retiros pendientes.
// Mis Préstamos pasa su lista para que el aviso cambie apenas se renueva un libro.
const useNotificaciones = (prestamos) => {
  const reservas = useReservations();
  const lista = prestamos ?? leer(CLAVE_PRESTAMOS, prestamosIniciales);
  const avisos = [];

  lista.forEach((p) => {
    if (estadoPrestamo(p) === "atrasado") {
      avisos.push({ id: `atrasado-${p.id}`, alerta: true, texto: `"${p.titulo}" está atrasado. Devuélvelo para evitar multas.`, ruta: RUTAS["mis-prestamos"] });
    } else if (diasEntre(HOY, p.fechaDevolucion) <= DIAS_AVISO_VENCIMIENTO) {
      avisos.push({ id: `vence-${p.id}`, texto: `"${p.titulo}": ${textoVencimiento(p).toLowerCase()}.`, ruta: RUTAS["mis-prestamos"] });
    }
  });

  reservas.forEach((r) => {
    if (r.status === "pending") {
      avisos.push({ id: `confirmar-${r.id}`, texto: `Confirma tu reserva de ${r.title} para el ${formatShortDate(r.date)}.`, ruta: RUTAS.reservas });
    } else if (r.status === "active" && r.type !== "room") {
      avisos.push({ id: `retirar-${r.id}`, texto: `${r.title} está listo para retirar antes del ${formatShortDate(r.date)}.`, ruta: RUTAS.reservas });
    }
  });

  // Los urgentes (atrasados) primero.
  return avisos.sort((a, b) => Number(Boolean(b.alerta)) - Number(Boolean(a.alerta)));
};

export default useNotificaciones;
