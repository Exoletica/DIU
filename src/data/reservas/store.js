import { useSyncExternalStore } from 'react'

import INITIAL_RESERVATIONS, { describeCapacity } from './reservations'

let reservations = INITIAL_RESERVATIONS
const listeners = new Set()

const setReservations = (update) => {
  reservations = update(reservations)
  listeners.forEach((listener) => listener())
}

const subscribe = (listener) => {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

const getSnapshot = () => reservations

export const addReservation = (room, date, time) => {
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
}

export const updateStatus = (reservationId, status) => {
  setReservations((current) =>
    current.map((reservation) => (reservation.id === reservationId ? { ...reservation, status } : reservation))
  )
}

export const cancelReservation = (reservationId) => updateStatus(reservationId, 'cancelled')

export const useReservations = () => useSyncExternalStore(subscribe, getSnapshot, getSnapshot)
