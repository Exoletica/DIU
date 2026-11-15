import { useState } from 'react'
import { BookOpen, Cpu, MapPin, Calendar as CalendarIcon, Clock } from 'lucide-react'

import { STATUS_LABELS, isOpen } from '../../data/reservas/reservas'
import { formatShortDate } from '../../utils/fechas'

const TYPE_INFO = {
  book: { label: 'Libro', modifier: 'libro', Icon: BookOpen },
  room: { label: 'Sala', modifier: 'sala', Icon: MapPin },
  equipment: { label: 'Equipo', modifier: 'equipo', Icon: Cpu }
}

const STATUS_MODIFIERS = {
  active: 'activa',
  pending: 'pendiente',
  waitlist: 'en-espera',
  completed: 'completada',
  cancelled: 'cancelada'
}

export const TarjetaReserva = ({ reservation, onConfirm, onComplete, onCancel }) => {
  const { label, modifier, Icon } = TYPE_INFO[reservation.type]
  const open = isOpen(reservation)
  const date = formatShortDate(reservation.date)
  const [confirmingCancel, setConfirmingCancel] = useState(false)

  const dateLabel = () => {
    if (reservation.status === 'waitlist') return `Solicitada el ${date}`
    if (reservation.type !== 'room' && open) return `Retirar antes del ${date}`
    return date
  }

  const renderMainAction = () => {
    if (reservation.status === 'pending') {
      return (
        <button type='button' className='boton boton--primario' onClick={onConfirm}>
          Confirmar
        </button>
      )
    }
    if (reservation.type !== 'room' && reservation.status === 'active') {
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
            {dateLabel()}
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
      {open && !confirmingCancel && (
        <div className='tarjeta-reserva__acciones'>
          {renderMainAction()}
          <button type='button' className='boton boton--secundario' onClick={() => setConfirmingCancel(true)}>
            {reservation.status === 'waitlist' ? 'Salir de la lista' : 'Cancelar'}
          </button>
        </div>
      )}
      {open && confirmingCancel && (
        <div className='tarjeta-reserva__acciones' role='group' aria-label='Confirmar cancelación'>
          <p className='tarjeta-reserva__confirmacion'>¿Cancelar esta reserva?</p>
          <button type='button' className='boton boton--peligro' onClick={onCancel} autoFocus>
            Sí, cancelar
          </button>
          <button type='button' className='boton boton--secundario' onClick={() => setConfirmingCancel(false)}>
            No
          </button>
        </div>
      )}
    </article>
  )
}

export default TarjetaReserva
