import React from 'react'
import { MapPin, Users, Wifi, Tv } from 'lucide-react'

const STATUS_LABELS = {
  available: 'Disponible',
  occupied: 'Ocupada',
  reserved: 'Reservada'
}

export const RoomCard = ({ room, isReserved, limitReached, onReserve, onCancel }) => {
  const { Icon } = room
  let status = 'available'
  if (!room.available) status = 'occupied'
  else if (isReserved) status = 'reserved'

  const renderAction = () => {
    if (status === 'occupied') {
      return (
        <button type='button' className='button button--primary button--block button--disabled' disabled>
          No disponible
        </button>
      )
    }
    if (status === 'reserved') {
      return (
        <button type='button' className='button button--secondary button--block' onClick={onCancel}>
          Cancelar Reserva
        </button>
      )
    }
    if (limitReached) {
      return (
        <button type='button' className='button button--primary button--block button--disabled' disabled>
          Límite diario alcanzado
        </button>
      )
    }
    return (
      <button type='button' className='button button--primary button--block' onClick={onReserve}>
        Reservar Espacio
      </button>
    )
  }

  return (
    <article className='room-card'>
      <div className='room-card__media'>
        <Icon className='room-card__media-icon' size={48} />
        <span className={`room-card__status room-card__status--${status}`}>{STATUS_LABELS[status]}</span>
      </div>
      <div className='room-card__body'>
        <h3 className='room-card__title'>{room.name}</h3>
        <p className='room-card__location'>
          <MapPin size={12} />
          {room.location}
        </p>
        <ul className='room-card__amenities'>
          <li className='room-card__amenity'>
            <Users size={16} />
            Cap: {room.capacity}
          </li>
          {room.wifi && (
            <li className='room-card__amenity'>
              <Wifi size={16} />
              Wifi
            </li>
          )}
          {room.av && (
            <li className='room-card__amenity'>
              <Tv size={16} />
              AV
            </li>
          )}
        </ul>
        <p className='room-card__description'>{room.description}</p>
      </div>
      <div className='room-card__footer'>{renderAction()}</div>
    </article>
  )
}

export default RoomCard
