import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CalendarDays, CalendarPlus, List, CircleCheck, Clock } from 'lucide-react'

import ReservasLayout from '../components/reservas/reservas_layout'
import PageHeader from '../components/reservas/page_header'
import Calendar from '../components/reservas/calendar'
import ReservationCard from '../components/reservas/reservation_card'
import HelpBox from '../components/reservas/help_box'
import { isOpen } from '../data/reservas/reservations'
import { useReservations, updateStatus, cancelReservation } from '../data/reservas/store'
import { toDateKey, formatShortDate } from '../utils/dates'

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
    const classes = ['my-reservations-page__tab']
    if (activeTab === tab) classes.push('my-reservations-page__tab--active')
    return classes.join(' ')
  }

  const contentClass = ['my-reservations-page__content']
  if (showCalendar) contentClass.push('my-reservations-page__content--with-calendar')

  const renderEmpty = () => {
    if (activeTab === 'history') {
      return <p className='my-reservations-page__empty-text'>No hay reservas en tu historial{showCalendar ? ' para este día' : ''}.</p>
    }
    return (
      <>
        <p className='my-reservations-page__empty-text'>
          No tienes reservas activas{showCalendar ? ' para este día' : ''}.
        </p>
        <button type='button' className='button button--primary' onClick={() => navigate('/reservas-de-sala')}>
          Reservar una sala
        </button>
      </>
    )
  }

  return (
    <ReservasLayout activeItem='reservas' title='Mis Reservas'>
      <div className='my-reservations-page'>
        <PageHeader title='Mis Reservas' subtitle='Gestiona tus reservas actuales de libros y salas de estudio.'>
          <button type='button' className='button button--secondary' onClick={() => setShowCalendar(!showCalendar)}>
            {showCalendar ? <List size={16} /> : <CalendarDays size={16} />}
            {showCalendar ? 'Ver Lista' : 'Ver Calendario'}
          </button>
          <button type='button' className='button button--primary' onClick={() => navigate('/reservas-de-sala')}>
            <CalendarPlus size={16} />
            Nueva Reserva
          </button>
        </PageHeader>

        <section className='my-reservations-page__stats'>
          {stats.map(({ label, value, Icon }) => (
            <div key={label} className='my-reservations-page__stat'>
              <span className='my-reservations-page__stat-icon'>
                <Icon size={20} />
              </span>
              <div className='my-reservations-page__stat-text'>
                <p className='my-reservations-page__stat-label'>{label}</p>
                <p className='my-reservations-page__stat-value'>{value}</p>
              </div>
            </div>
          ))}
        </section>

        <div className='my-reservations-page__tabs' role='tablist'>
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
            <Calendar
              title='Calendario de Reservas'
              selectedDate={selectedDate}
              onSelectDate={setSelectedDate}
              markedDates={tabReservations.map((reservation) => reservation.date)}
              disablePast={false}
            />
          )}
          <div className='my-reservations-page__list'>
            {visibleReservations.length === 0 ? (
              <div className='my-reservations-page__empty'>{renderEmpty()}</div>
            ) : (
              visibleReservations.map((reservation) => (
                <ReservationCard
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

        <HelpBox />
      </div>
    </ReservasLayout>
  )
}

export default MisReservas
