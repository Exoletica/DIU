import { diasDesdeHoy } from '../../utils/fechas'

export const STATUS_LABELS = {
  active: 'Activa',
  pending: 'Pendiente',
  waitlist: 'En espera',
  completed: 'Completada',
  cancelled: 'Cancelada'
}

export const isOpen = (reservation) => ['active', 'pending', 'waitlist'].includes(reservation.status)

export const describeCapacity = (capacity) => `Capacidad: ${capacity} ${capacity === 1 ? 'persona' : 'personas'}`

// Fechas relativas a hoy para que las reservas de ejemplo nunca queden en el pasado.
export const INITIAL_RESERVATIONS = [
  {
    id: 'libro-fisica-universitaria',
    type: 'book',
    title: 'Física Universitaria Volumen 1',
    subtitle: 'Sears y Zemansky',
    date: diasDesdeHoy(4),
    location: 'Biblioteca Central - Piso 2',
    status: 'active'
  },
  {
    id: 'sala-B-205-inicial',
    type: 'room',
    roomId: 'B-205',
    title: 'Sala de Estudio B-205',
    subtitle: describeCapacity(4),
    date: diasDesdeHoy(1),
    time: '14:00 - 15:30',
    location: 'Piso 2, Ala Sur',
    status: 'pending'
  },
  {
    id: 'sala-C-04-inicial',
    type: 'room',
    roomId: 'C-04',
    title: 'Cubículo Individual C-04',
    subtitle: describeCapacity(1),
    date: diasDesdeHoy(3),
    time: '10:00 - 11:30',
    location: 'Piso 3, Silencio Total',
    status: 'active'
  },
  {
    id: 'libro-calculo-thomas',
    type: 'book',
    title: 'Cálculo: Una Variable',
    subtitle: 'George B. Thomas',
    date: diasDesdeHoy(-12),
    location: 'Biblioteca Central - Piso 2',
    status: 'completed'
  },
  {
    id: 'sala-A-101-historial',
    type: 'room',
    roomId: 'A-101',
    title: 'Sala de Colaboración A-101',
    subtitle: describeCapacity(6),
    date: diasDesdeHoy(-6),
    time: '11:30 - 13:00',
    location: 'Piso 1, Ala Norte',
    status: 'completed'
  },
  {
    id: 'sala-M-01-historial',
    type: 'room',
    roomId: 'M-01',
    title: 'Sala Multimedia M-01',
    subtitle: describeCapacity(8),
    date: diasDesdeHoy(-18),
    time: '15:30 - 17:00',
    location: 'Subsuelo, Laboratorios',
    status: 'cancelled'
  }
]

export default INITIAL_RESERVATIONS
