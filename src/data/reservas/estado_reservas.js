import { useSyncExternalStore } from 'react'

import INITIAL_RESERVATIONS, { describeCapacity, isOpen } from './reservas'
import { leer, guardar } from '../../utils/almacenamiento'
import { diasDesdeHoy } from '../../utils/fechas'

const STORAGE_KEY = 'bibliotecausm:reservas'

const DIAS_PARA_RETIRAR = 3
const MESON_PRESTAMOS = 'Mesón de préstamos - Biblioteca Central'

// Las reservas cuya fecha ya pasó dejan de estar abiertas: una sala confirmada se da por usada,
// y una sala sin confirmar o un libro/equipo no retirado se cancela. La lista de espera no vence.
const expirePast = (list) => {
  const today = diasDesdeHoy(0)
  return list.map((reservation) => {
    if (!isOpen(reservation) || reservation.status === 'waitlist' || reservation.date >= today) return reservation
    const usedRoom = reservation.type === 'room' && reservation.status === 'active'
    return { ...reservation, status: usedRoom ? 'completed' : 'cancelled' }
  })
}

let reservations = expirePast(leer(STORAGE_KEY, INITIAL_RESERVATIONS))
const listeners = new Set()

const setReservations = (update) => {
  reservations = update(reservations)
  guardar(STORAGE_KEY, reservations)
  listeners.forEach((listener) => listener())
}

const subscribe = (listener) => {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

const getSnapshot = () => reservations

// Devuelve false si ya hay una reserva abierta de sala en esa fecha y horario.
export const addReservation = (room, date, time) => {
  const slotTaken = reservations.some(
    (reservation) => isOpen(reservation) && reservation.type === 'room' && reservation.date === date && reservation.time === time
  )
  if (slotTaken) return false
  setReservations((current) => [
    ...current,
    {
      id: `sala-${room.id}-${date}-${Date.now()}`,
      type: 'room',
      roomId: room.id,
      title: room.name,
      subtitle: describeCapacity(room.capacity),
      date,
      time,
      location: room.location,
      status: 'pending'
    }
  ])
  return true
}

export const findOpenItemReservation = (list, itemId) =>
  list.find((reservation) => reservation.itemId === itemId && isOpen(reservation))

// Reserva de un libro o equipo. Si no hay unidades disponibles queda en lista de espera.
// Devuelve false si ya tiene una reserva abierta de ese ítem.
export const addItemReservation = ({ itemId, type, title, subtitle, available = true }) => {
  if (findOpenItemReservation(reservations, itemId)) return false
  setReservations((current) => [
    ...current,
    {
      id: `${itemId}-${Date.now()}`,
      itemId,
      type,
      title,
      subtitle,
      date: available ? diasDesdeHoy(DIAS_PARA_RETIRAR) : diasDesdeHoy(0),
      location: available ? MESON_PRESTAMOS : 'Te avisaremos cuando se libere un ejemplar',
      status: available ? 'active' : 'waitlist'
    }
  ])
  return true
}

export const updateStatus = (reservationId, status) => {
  setReservations((current) =>
    current.map((reservation) => (reservation.id === reservationId ? { ...reservation, status } : reservation))
  )
}

export const cancelReservation = (reservationId) => updateStatus(reservationId, 'cancelled')

export const useReservations = () => useSyncExternalStore(subscribe, getSnapshot, getSnapshot)
