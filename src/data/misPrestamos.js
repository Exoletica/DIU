// Datos de ejemplo para la página "Mis Préstamos".
// Cuando exista backend, esto se reemplaza por una llamada a la API.

// Fecha "de hoy" fija para que los estados calcen con el diseño de Figma.
export const HOY = "2024-05-14";

export const MAX_PRESTAMOS = 5;
export const MAX_RENOVACIONES = 2;
export const DIAS_POR_RENOVACION = 7;
export const DIAS_AVISO_VENCIMIENTO = 3;
export const MULTA_DIARIA = 500;

export const prestamosIniciales = [
  {
    id: "calculus",
    titulo: "Calculus",
    autor: "Michael Spivak",
    portada: "/prestamos/Container10@2x.png",
    fechaPrestamo: "2024-05-10",
    fechaDevolucion: "2024-05-24",
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
    portada: "/prestamos/Container6@2x.png",
    fechaPrestamo: "2024-05-01",
    fechaDevolucion: "2024-05-15",
    isbn: "978-8262833848",
    ubicacion: "Central - Piso 2",
    renovaciones: 1,
    reservadoPorOtro: true,
  },
  {
    id: "gatsby",
    titulo: "El Gran Gatsby",
    autor: "Scott Fitzgerald",
    portada: "/prestamos/Container11@2x.png",
    fechaPrestamo: "2024-04-20",
    fechaDevolucion: "2024-05-04",
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
    fecha: "2024-05-08",
    estado: "aprobada",
    detalle: "Nueva fecha de devolución: 2024-05-15",
  },
  {
    id: "sol-2",
    tipo: "Préstamo especial",
    titulo: "Física Universitaria Vol. 1",
    fecha: "2024-05-12",
    estado: "pendiente",
    detalle: "En revisión por el personal de biblioteca",
  },
  {
    id: "sol-3",
    tipo: "Renovación",
    titulo: "El libro de las matemáticas",
    fecha: "2024-05-13",
    estado: "rechazada",
    detalle: "Otro usuario tiene una reserva activa para este ejemplar",
  },
];

// Préstamos ya devueltos (para "Ver Historial")
export const historialPrestamos = [
  { id: "h1", titulo: "El Miedo en Occidente", autor: "Jean Delumeau", fechaPrestamo: "2024-03-04", fechaDevolucion: "2024-03-18", fechaEntrega: "2024-03-15" },
  { id: "h2", titulo: "Cálculo Trascendentes Tempranas", autor: "James Stewart", fechaPrestamo: "2024-03-20", fechaDevolucion: "2024-04-03", fechaEntrega: "2024-04-06" },
  { id: "h3", titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", fechaPrestamo: "2024-04-08", fechaDevolucion: "2024-04-22", fechaEntrega: "2024-04-22" },
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
