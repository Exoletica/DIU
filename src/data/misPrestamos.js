// Datos de ejemplo para la página "Mis Préstamos".
// Cuando exista backend, esto se reemplaza por una llamada a la API.

import { diasDesdeHoy, formatShortDate } from "../utils/fechas";
import { asset } from "../utils/assetUrl";

// Las fechas se calculan desde hoy para que los estados (activo, por vencer, atrasado)
// se vean igual que en el diseño de Figma sin importar cuándo se abra la página.
export const HOY = diasDesdeHoy(0);

export const MAX_PRESTAMOS = 5;
export const MAX_RENOVACIONES = 2;
export const DIAS_POR_RENOVACION = 7;
export const DIAS_AVISO_VENCIMIENTO = 3;

// Claves con que se guardan en el navegador los préstamos y solicitudes.
export const CLAVE_PRESTAMOS = "bibliotecausm:prestamos";
export const CLAVE_SOLICITUDES = "bibliotecausm:solicitudes";
export const MULTA_DIARIA = 500;

export const prestamosIniciales = [
  {
    id: "calculus",
    titulo: "Calculus",
    autor: "Michael Spivak",
    portada: asset("/calculus.webp"),
    fechaPrestamo: diasDesdeHoy(-4),
    fechaDevolucion: diasDesdeHoy(10),
    isbn: "978-607-32-2190-3",
    ubicacion: "Central - Piso 3",
    renovaciones: 0,
    reservadoPorOtro: false,
    rutaDetalle: "/prestamos/detalle-del-libro-1",
  },
  {
    id: "matematicas",
    titulo: "El libro de las matemáticas",
    autor: "DK",
    portada: asset("/el-libro-de-las-matematicas.webp"),
    fechaPrestamo: diasDesdeHoy(-13),
    fechaDevolucion: diasDesdeHoy(1),
    isbn: "978-8262833848",
    ubicacion: "Central - Piso 2",
    renovaciones: 1,
    reservadoPorOtro: true,
  },
  {
    id: "gatsby",
    titulo: "El Gran Gatsby",
    autor: "F. Scott Fitzgerald",
    portada: asset("/el-gran-gatsby.webp"),
    fechaPrestamo: diasDesdeHoy(-24),
    fechaDevolucion: diasDesdeHoy(-10),
    isbn: "978-0199270293",
    ubicacion: "Central - Piso 3",
    renovaciones: 0,
    reservadoPorOtro: false,
  },
];

export const solicitudesIniciales = [
  {
    id: "sol-1",
    tipo: "Renovación",
    titulo: "El libro de las matemáticas",
    fecha: diasDesdeHoy(-6),
    estado: "aprobada",
    detalle: `Nueva fecha de devolución: ${formatShortDate(diasDesdeHoy(1))}`,
  },
  {
    id: "sol-2",
    tipo: "Préstamo especial",
    titulo: "Física Universitaria Vol. 1",
    fecha: diasDesdeHoy(-2),
    estado: "pendiente",
    detalle: "En revisión por el personal de biblioteca",
  },
  {
    id: "sol-3",
    tipo: "Renovación",
    titulo: "El libro de las matemáticas",
    fecha: diasDesdeHoy(-1),
    estado: "rechazada",
    detalle: "Otro usuario tiene una reserva activa para este ejemplar",
  },
];

// Préstamos ya devueltos (para "Ver Historial")
export const historialPrestamos = [
  { id: "h1", titulo: "El Miedo en Occidente", autor: "Jean Delumeau", fechaPrestamo: diasDesdeHoy(-71), fechaDevolucion: diasDesdeHoy(-57), fechaEntrega: diasDesdeHoy(-60) },
  { id: "h2", titulo: "Cálculo Trascendentes Tempranas", autor: "James Stewart", fechaPrestamo: diasDesdeHoy(-55), fechaDevolucion: diasDesdeHoy(-41), fechaEntrega: diasDesdeHoy(-38) },
  { id: "h3", titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", fechaPrestamo: diasDesdeHoy(-36), fechaDevolucion: diasDesdeHoy(-22), fechaEntrega: diasDesdeHoy(-22) },
];

// ---------- Helpers ----------

const DIA_MS = 24 * 60 * 60 * 1000;

export const diasEntre = (desde, hasta) =>
  Math.round((new Date(hasta) - new Date(desde)) / DIA_MS);

export const sumarDias = (fecha, dias) => {
  const d = new Date(fecha);
  d.setUTCDate(d.getUTCDate() + dias);
  return d.toISOString().slice(0, 10);
};

// Devuelve "activo" | "renovado" | "atrasado"
export const estadoPrestamo = (prestamo) => {
  if (diasEntre(HOY, prestamo.fechaDevolucion) < 0) return "atrasado";
  if (prestamo.renovaciones > 0) return "renovado";
  return "activo";
};

// Devuelve null si se puede renovar, o el motivo por el que no.
export const motivoNoRenovable = (prestamo) => {
  if (estadoPrestamo(prestamo) === "atrasado") return "Préstamo atrasado: debes devolverlo";
  if (prestamo.reservadoPorOtro) return "Otro usuario reservó este libro";
  if (prestamo.renovaciones >= MAX_RENOVACIONES) return "Alcanzaste el máximo de renovaciones";
  return null;
};

export const necesitaDevolucion = (prestamo) =>
  diasEntre(HOY, prestamo.fechaDevolucion) <= DIAS_AVISO_VENCIMIENTO ||
  motivoNoRenovable(prestamo) !== null;

export const textoVencimiento = (prestamo) => {
  const dias = diasEntre(HOY, prestamo.fechaDevolucion);
  if (dias < 0) return `Atrasado hace ${-dias} ${-dias === 1 ? "día" : "días"}`;
  if (dias === 0) return "Vence hoy";
  return `Vence en ${dias} ${dias === 1 ? "día" : "días"}`;
};

export const multaAcumulada = (prestamo) =>
  Math.max(0, -diasEntre(HOY, prestamo.fechaDevolucion)) * MULTA_DIARIA;
