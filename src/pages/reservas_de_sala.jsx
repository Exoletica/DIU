import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Info, ArrowRight, ChevronDown } from 'lucide-react'

import LayoutReservas from '../components/reservas-comun/layout_reservas'
import EncabezadoPagina from '../components/reservas-comun/encabezado_pagina'
import Calendario from '../components/reservas-comun/calendario'
import Recordatorios from '../components/reservas-de-sala/recordatorios'
import FiltrosSalas from '../components/reservas-de-sala/filtros_salas'
import TarjetaSala from '../components/reservas-de-sala/tarjeta_sala'
import ROOMS, { CAPACITY_OPTIONS, TIME_SLOTS, MAX_DAILY_ROOM_RESERVATIONS } from '../data/reservas/salas'
import { isOpen } from '../data/reservas/reservas'
import { useReservations, addReservation, cancelReservation } from '../data/reservas/estado_reservas'
import { toDateKey, formatLongDate } from '../utils/fechas'

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
    <LayoutReservas activeItem='salas' title='Reservas de Sala'>
      <div className='pagina-reservas-de-sala'>
        <EncabezadoPagina
          title='Reservas de Sala'
          subtitle='Gestiona tus espacios de estudio y colaboración grupal en la biblioteca.'
        >
          <button type='button' className='boton boton--secundario' onClick={showRules}>
            <Info size={16} />
            Normativas
          </button>
          <button type='button' className='boton boton--acento' onClick={() => navigate('/mis-reservas')}>
            Mis Reservas Activas
            <span className='boton__insignia'>{openReservations.length}</span>
          </button>
        </EncabezadoPagina>

        <div className='pagina-reservas-de-sala__contenido'>
          <div className='pagina-reservas-de-sala__panel-lateral'>
            <Calendario selectedDate={selectedDate} onSelectDate={setSelectedDate} />
            <Recordatorios highlighted={rulesHighlighted} />
          </div>

          <section className='pagina-reservas-de-sala__salas'>
            <FiltrosSalas
              availableOnly={availableOnly}
              onAvailableOnlyChange={setAvailableOnly}
              capacity={capacity}
              onCapacityChange={setCapacity}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
            />
            <div className='pagina-reservas-de-sala__horario'>
              <p className='pagina-reservas-de-sala__fecha-etiqueta'>
                Mostrando salas para el <span className='pagina-reservas-de-sala__fecha'>{formatLongDate(selectedDate)}</span>
              </p>
              <div className='pagina-reservas-de-sala__horario-bloque'>
                <select
                  className='pagina-reservas-de-sala__horario-bloque-selector'
                  value={selectedSlot}
                  onChange={(event) => setSelectedSlot(event.target.value)}
                  aria-label='Horario de la reserva'
                >
                  {TIME_SLOTS.map((slot) => (
                    <option key={slot} value={slot}>{slot}</option>
                  ))}
                </select>
                <ChevronDown className='pagina-reservas-de-sala__horario-bloque-icono' size={16} />
              </div>
            </div>
            {limitReached && (
              <p className='pagina-reservas-de-sala__aviso'>
                Ya tienes {MAX_DAILY_ROOM_RESERVATIONS} reservas de sala para este día (máximo 3 horas por estudiante).
              </p>
            )}

            {visibleRooms.length === 0 ? (
              <p className='pagina-reservas-de-sala__vacio'>No hay salas que coincidan con los filtros seleccionados.</p>
            ) : (
              <div className='pagina-reservas-de-sala__grilla'>
                {visibleRooms.map((room) => {
                  const reservation = findReservation(room.id)
                  return (
                    <TarjetaSala
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
                className='boton boton--sutil pagina-reservas-de-sala__cargar-mas'
                onClick={() => setVisibleCount(visibleCount + PAGE_SIZE)}
              >
                Cargar más salas
                <ArrowRight size={16} />
              </button>
            )}
          </section>
        </div>
      </div>
    </LayoutReservas>
  )
}

export default ReservasDeSala
