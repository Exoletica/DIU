import React from 'react'
import { BookOpen, MapPin, Calendar as CalendarIcon, Clock } from 'lucide-react'

import { STATUS_LABELS, isOpen } from '../../data/reservas/reservas'
import { formatShortDate } from '../../utils/fechas'

const TYPE_INFO = {
  book: { label: 'Libro', modifier: 'libro', Icon: BookOpen },
  room: { label: 'Sala', modifier: 'sala', Icon: MapPin }
}

const STATUS_MODIFIERS = {
  active: 'activa',
  pending: 'pendiente',
  completed: 'completada',
  cancelled: 'cancelada'
}

export const TarjetaReserva = ({ reservation, onConfirm, onComplete, onCancel }) => {
  const { label, modifier, Icon } = TYPE_INFO[reservation.type]
  const open = isOpen(reservation)
  const date = formatShortDate(reservation.date)

  const renderMainAction = () => {
    if (reservation.status === 'pending') {
      return (
        <button type='button' className='boton boton--primario' onClick={onConfirm}>
          Confirmar
        </button>
      )
    }
    if (reservation.type === 'book') {
      return (
        <button type='button' className='boton boton--primario' onClick={onComplete}>
          Retirar
        </button>
      )
    }
    return null
  }

  return (
    <article className='tarjeta-reserva'>
      <div className={`tarjeta-reserva__insignia tarjeta-reserva__insignia--${modifier}`}>
        <Icon size={24} />
        <span className='tarjeta-reserva__insignia-etiqueta'>{label}</span>
      </div>
      <div className='tarjeta-reserva__contenido'>
        <div className='tarjeta-reserva__cabecera'>
          <h3 className='tarjeta-reserva__titulo'>{reservation.title}</h3>
          <span className={`tarjeta-reserva__estado tarjeta-reserva__estado--${STATUS_MODIFIERS[reservation.status]}`}>
            {STATUS_LABELS[reservation.status]}
          </span>
        </div>
        <p className='tarjeta-reserva__subtitulo'>{reservation.subtitle}</p>
        <ul className='tarjeta-reserva__detalles'>
          <li className='tarjeta-reserva__detalle'>
            <CalendarIcon size={14} />
            {reservation.type === 'book' && open ? `Retirar antes del ${date}` : date}
          </li>
          {reservation.time && (
            <li className='tarjeta-reserva__detalle'>
              <Clock size={14} />
              {reservation.time}
            </li>
          )}
          <li className='tarjeta-reserva__detalle'>
            <MapPin size={14} />
            {reservation.location}
          </li>
        </ul>
      </div>
      {open && (
        <div className='tarjeta-reserva__acciones'>
          {renderMainAction()}
          <button type='button' className='boton boton--secundario' onClick={onCancel}>
            Cancelar
          </button>
        </div>
      )}
    </article>
  )
}

export default TarjetaReserva
