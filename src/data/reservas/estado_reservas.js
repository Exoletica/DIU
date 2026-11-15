import { useSyncExternalStore } from 'react'

import INITIAL_RESERVATIONS, { describeCapacity, isOpen } from './reservas'
import { leer, guardar } from '../../utils/almacenamiento'

const STORAGE_KEY = 'bibliotecausm:reservas'

let reservations = leer(STORAGE_KEY, INITIAL_RESERVATIONS)
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

export const updateStatus = (reservationId, status) => {
  setReservations((current) =>
    current.map((reservation) => (reservation.id === reservationId ? { ...reservation, status } : reservation))
  )
}

export const cancelReservation = (reservationId) => updateStatus(reservationId, 'cancelled')

export const useReservations = () => useSyncExternalStore(subscribe, getSnapshot, getSnapshot)
