import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Info, ArrowRight, ChevronDown } from 'lucide-react'

import ReservasLayout from '../components/reservas/reservas_layout'
import PageHeader from '../components/reservas/page_header'
import Calendar from '../components/reservas/calendar'
import Reminders from '../components/reservas/reminders'
import RoomFilters from '../components/reservas/room_filters'
import RoomCard from '../components/reservas/room_card'
import ROOMS, { CAPACITY_OPTIONS, TIME_SLOTS, MAX_DAILY_ROOM_RESERVATIONS } from '../data/reservas/rooms'
import { isOpen } from '../data/reservas/reservations'
import { useReservations, addReservation, cancelReservation } from '../data/reservas/store'
import { toDateKey, formatLongDate } from '../utils/dates'

const PAGE_SIZE = 4

export const ReservasDeSala = () => {
  const navigate = useNavigate()
  const reservations = useReservations()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedDate, setSelectedDate] = useState(() => toDateKey(new Date()))
  const [selectedSlot, setSelectedSlot] = useState(TIME_SLOTS[0])
  const [availableOnly, setAvailableOnly] = useState(false)
  const [capacity, setCapacity] = useState('all')
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)
  const [rulesHighlighted, setRulesHighlighted] = useState(false)

  const capacityRange = CAPACITY_OPTIONS.find((option) => option.value === capacity)
  const query = searchQuery.trim().toLowerCase()

  const filteredRooms = ROOMS.filter((room) => {
    const matchesAvailability = !availableOnly || room.available
    const matchesCapacity = room.capacity >= capacityRange.min && room.capacity <= capacityRange.max
    const matchesQuery = query === '' || `${room.name} ${room.location}`.toLowerCase().includes(query)
    return matchesAvailability && matchesCapacity && matchesQuery
  })
  const visibleRooms = filteredRooms.slice(0, visibleCount)

  const openReservations = reservations.filter(isOpen)
  const roomReservationsToday = openReservations.filter(
    (reservation) => reservation.type === 'room' && reservation.date === selectedDate
  )
  const limitReached = roomReservationsToday.length >= MAX_DAILY_ROOM_RESERVATIONS

  const findReservation = (roomId) =>
    roomReservationsToday.find((reservation) => reservation.roomId === roomId && reservation.time === selectedSlot)

  const showRules = () => {
    setRulesHighlighted(true)
    document.getElementById('normativas').scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <ReservasLayout activeItem='salas' title='Reservas de Sala'>
      <div className='room-booking-page'>
        <PageHeader
          title='Reservas de Sala'
          subtitle='Gestiona tus espacios de estudio y colaboración grupal en la biblioteca.'
        >
          <button type='button' className='button button--secondary' onClick={showRules}>
            <Info size={16} />
            Normativas
          </button>
          <button type='button' className='button button--accent' onClick={() => navigate('/mis-reservas')}>
            Mis Reservas Activas
            <span className='button__badge'>{openReservations.length}</span>
          </button>
        </PageHeader>

        <div className='room-booking-page__content'>
          <div className='room-booking-page__sidebar'>
            <Calendar selectedDate={selectedDate} onSelectDate={setSelectedDate} />
            <Reminders highlighted={rulesHighlighted} />
          </div>

          <section className='room-booking-page__rooms'>
            <RoomFilters
              availableOnly={availableOnly}
              onAvailableOnlyChange={setAvailableOnly}
              capacity={capacity}
              onCapacityChange={setCapacity}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
            />
            <div className='room-booking-page__schedule'>
              <p className='room-booking-page__date-label'>
                Mostrando salas para el <span className='room-booking-page__date'>{formatLongDate(selectedDate)}</span>
              </p>
              <div className='room-booking-page__slot'>
                <select
                  className='room-booking-page__slot-select'
                  value={selectedSlot}
                  onChange={(event) => setSelectedSlot(event.target.value)}
                  aria-label='Horario de la reserva'
                >
                  {TIME_SLOTS.map((slot) => (
                    <option key={slot} value={slot}>{slot}</option>
                  ))}
                </select>
                <ChevronDown className='room-booking-page__slot-icon' size={16} />
              </div>
            </div>
            {limitReached && (
              <p className='room-booking-page__notice'>
                Ya tienes {MAX_DAILY_ROOM_RESERVATIONS} reservas de sala para este día (máximo 3 horas por estudiante).
              </p>
            )}

            {visibleRooms.length === 0 ? (
              <p className='room-booking-page__empty'>No hay salas que coincidan con los filtros seleccionados.</p>
            ) : (
              <div className='room-booking-page__grid'>
                {visibleRooms.map((room) => {
                  const reservation = findReservation(room.id)
                  return (
                    <RoomCard
                      key={room.id}
                      room={room}
                      isReserved={Boolean(reservation)}
                      limitReached={limitReached}
                      onReserve={() => addReservation(room, selectedDate, selectedSlot)}
                      onCancel={() => cancelReservation(reservation.id)}
                    />
                  )
                })}
              </div>
            )}

            {visibleCount < filteredRooms.length && (
              <button
                type='button'
                className='button button--ghost room-booking-page__load-more'
                onClick={() => setVisibleCount(visibleCount + PAGE_SIZE)}
              >
                Cargar más salas
                <ArrowRight size={16} />
              </button>
            )}
          </section>
        </div>
      </div>
    </ReservasLayout>
  )
}

export default ReservasDeSala
