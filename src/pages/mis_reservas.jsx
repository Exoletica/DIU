import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CalendarDays, CalendarPlus, List, CircleCheck, Clock } from 'lucide-react'

import LayoutReservas from '../components/reservas-comun/layout_reservas'
import EncabezadoPagina from '../components/reservas-comun/encabezado_pagina'
import Calendario from '../components/reservas-comun/calendario'
import TarjetaReserva from '../components/mis-reservas/tarjeta_reserva'
import AyudaReservas from '../components/mis-reservas/ayuda_reservas'
import { isOpen } from '../data/reservas/reservas'
import { useReservations, updateStatus, cancelReservation } from '../data/reservas/estado_reservas'
import { toDateKey, formatShortDate } from '../utils/fechas'

export const MisReservas = () => {
  const navigate = useNavigate()
  const reservations = useReservations()
  const [activeTab, setActiveTab] = useState('active')
  const [showCalendar, setShowCalendar] = useState(false)
  const [selectedDate, setSelectedDate] = useState(() => toDateKey(new Date()))

  const todayKey = toDateKey(new Date())
  const openReservations = reservations.filter(isOpen).sort((a, b) => a.date.localeCompare(b.date))
  const history = reservations.filter((reservation) => !isOpen(reservation)).sort((a, b) => b.date.localeCompare(a.date))
  const completedThisMonth = history.filter(
    (reservation) => reservation.status === 'completed' && reservation.date.slice(0, 7) === todayKey.slice(0, 7)
  ).length
  const nextReservation = openReservations.find((reservation) => reservation.date >= todayKey)

  const stats = [
    { label: 'Reservas Activas', value: openReservations.length, Icon: CalendarDays },
    { label: 'Completadas este mes', value: completedThisMonth, Icon: CircleCheck },
    {
      label: 'Próximo Vencimiento',
      value: nextReservation ? formatShortDate(nextReservation.date) : 'Sin reservas',
      Icon: Clock
    }
  ]

  const tabReservations = activeTab === 'active' ? openReservations : history
  const visibleReservations = showCalendar
    ? tabReservations.filter((reservation) => reservation.date === selectedDate)
    : tabReservations

  const tabClass = (tab) => {
    const classes = ['pagina-mis-reservas__pestana']
    if (activeTab === tab) classes.push('pagina-mis-reservas__pestana--activa')
    return classes.join(' ')
  }

  const contentClass = ['pagina-mis-reservas__contenido']
  if (showCalendar) contentClass.push('pagina-mis-reservas__contenido--con-calendario')

  const renderEmpty = () => {
    if (activeTab === 'history') {
      return <p className='pagina-mis-reservas__texto-vacio'>No hay reservas en tu historial{showCalendar ? ' para este día' : ''}.</p>
    }
    return (
      <>
        <p className='pagina-mis-reservas__texto-vacio'>
          No tienes reservas activas{showCalendar ? ' para este día' : ''}.
        </p>
        <button type='button' className='boton boton--primario' onClick={() => navigate('/reservas-de-sala')}>
          Reservar una sala
        </button>
      </>
    )
  }

  return (
    <LayoutReservas activeItem='reservas' title='Mis Reservas'>
      <div className='pagina-mis-reservas'>
        <EncabezadoPagina title='Mis Reservas' subtitle='Gestiona tus reservas actuales de libros y salas de estudio.'>
          <button type='button' className='boton boton--secundario' onClick={() => setShowCalendar(!showCalendar)}>
            {showCalendar ? <List size={16} /> : <CalendarDays size={16} />}
            {showCalendar ? 'Ver Lista' : 'Ver Calendario'}
          </button>
          <button type='button' className='boton boton--primario' onClick={() => navigate('/reservas-de-sala')}>
            <CalendarPlus size={16} />
            Nueva Reserva
          </button>
        </EncabezadoPagina>

        <section className='pagina-mis-reservas__estadisticas'>
          {stats.map(({ label, value, Icon }) => (
            <div key={label} className='pagina-mis-reservas__estadistica'>
              <span className='pagina-mis-reservas__estadistica-icono'>
                <Icon size={20} />
              </span>
              <div className='pagina-mis-reservas__estadistica-texto'>
                <p className='pagina-mis-reservas__estadistica-etiqueta'>{label}</p>
                <p className='pagina-mis-reservas__estadistica-valor'>{value}</p>
              </div>
            </div>
          ))}
        </section>

        <div className='pagina-mis-reservas__pestanas' role='tablist'>
          <button
            type='button'
            role='tab'
            aria-selected={activeTab === 'active'}
            className={tabClass('active')}
            onClick={() => setActiveTab('active')}
          >
            Activas ({openReservations.length})
          </button>
          <button
            type='button'
            role='tab'
            aria-selected={activeTab === 'history'}
            className={tabClass('history')}
            onClick={() => setActiveTab('history')}
          >
            Historial ({history.length})
          </button>
        </div>

        <div className={contentClass.join(' ')}>
          {showCalendar && (
            <Calendario
              title='Calendario de Reservas'
              selectedDate={selectedDate}
              onSelectDate={setSelectedDate}
              markedDates={tabReservations.map((reservation) => reservation.date)}
              disablePast={false}
            />
          )}
          <div className='pagina-mis-reservas__lista'>
            {visibleReservations.length === 0 ? (
              <div className='pagina-mis-reservas__vacio'>{renderEmpty()}</div>
            ) : (
              visibleReservations.map((reservation) => (
                <TarjetaReserva
                  key={reservation.id}
                  reservation={reservation}
                  onConfirm={() => updateStatus(reservation.id, 'active')}
                  onComplete={() => updateStatus(reservation.id, 'completed')}
                  onCancel={() => cancelReservation(reservation.id)}
                />
              ))
            )}
          </div>
        </div>

        <AyudaReservas />
      </div>
    </LayoutReservas>
  )
}

export default MisReservas
