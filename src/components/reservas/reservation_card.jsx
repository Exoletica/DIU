import React from 'react'
import { BookOpen, MapPin, Calendar as CalendarIcon, Clock } from 'lucide-react'

import { STATUS_LABELS, isOpen } from '../../data/reservas/reservations'
import { formatShortDate } from '../../utils/dates'

const TYPE_INFO = {
  book: { label: 'Libro', Icon: BookOpen },
  room: { label: 'Sala', Icon: MapPin }
}

export const ReservationCard = ({ reservation, onConfirm, onComplete, onCancel }) => {
  const { label, Icon } = TYPE_INFO[reservation.type]
  const open = isOpen(reservation)
  const date = formatShortDate(reservation.date)

  const renderMainAction = () => {
    if (reservation.status === 'pending') {
      return (
        <button type='button' className='button button--primary' onClick={onConfirm}>
          Confirmar
        </button>
      )
    }
    if (reservation.type === 'book') {
      return (
        <button type='button' className='button button--primary' onClick={onComplete}>
          Retirar
        </button>
      )
    }
    return null
  }

  return (
    <article className='reservation-card'>
      <div className={`reservation-card__badge reservation-card__badge--${reservation.type}`}>
        <Icon size={24} />
        <span className='reservation-card__badge-label'>{label}</span>
      </div>
      <div className='reservation-card__content'>
        <div className='reservation-card__header'>
          <h3 className='reservation-card__title'>{reservation.title}</h3>
          <span className={`reservation-card__status reservation-card__status--${reservation.status}`}>
            {STATUS_LABELS[reservation.status]}
          </span>
        </div>
        <p className='reservation-card__subtitle'>{reservation.subtitle}</p>
        <ul className='reservation-card__meta'>
          <li className='reservation-card__meta-item'>
            <CalendarIcon size={14} />
            {reservation.type === 'book' && open ? `Retirar antes del ${date}` : date}
          </li>
          {reservation.time && (
            <li className='reservation-card__meta-item'>
              <Clock size={14} />
              {reservation.time}
            </li>
          )}
          <li className='reservation-card__meta-item'>
            <MapPin size={14} />
            {reservation.location}
          </li>
        </ul>
      </div>
      {open && (
        <div className='reservation-card__actions'>
          {renderMainAction()}
          <button type='button' className='button button--secondary' onClick={onCancel}>
            Cancelar
          </button>
        </div>
      )}
    </article>
  )
}

export default ReservationCard
