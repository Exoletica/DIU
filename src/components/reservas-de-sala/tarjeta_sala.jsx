import React from 'react'
import { MapPin, Users, Wifi, Tv } from 'lucide-react'

const STATUS_LABELS = {
  disponible: 'Disponible',
  ocupada: 'Ocupada',
  reservada: 'Reservada'
}

export const TarjetaSala = ({ room, isReserved, limitReached, onReserve, onCancel }) => {
  const { Icon } = room
  let status = 'disponible'
  if (!room.available) status = 'ocupada'
  else if (isReserved) status = 'reservada'

  const renderAction = () => {
    if (status === 'ocupada') {
      return (
        <button type='button' className='boton boton--primario boton--ancho-completo boton--deshabilitado' disabled>
          No disponible
        </button>
      )
    }
    if (status === 'reservada') {
      return (
        <button type='button' className='boton boton--secundario boton--ancho-completo' onClick={onCancel}>
          Cancelar Reserva
        </button>
      )
    }
    if (limitReached) {
      return (
        <button type='button' className='boton boton--primario boton--ancho-completo boton--deshabilitado' disabled>
          Límite diario alcanzado
        </button>
      )
    }
    return (
      <button type='button' className='boton boton--primario boton--ancho-completo' onClick={onReserve}>
        Reservar Espacio
      </button>
    )
  }

  return (
    <article className='tarjeta-sala'>
      <div className='tarjeta-sala__imagen'>
        <Icon className='tarjeta-sala__imagen-icono' size={48} />
        <span className={`tarjeta-sala__estado tarjeta-sala__estado--${status}`}>{STATUS_LABELS[status]}</span>
      </div>
      <div className='tarjeta-sala__cuerpo'>
        <h3 className='tarjeta-sala__titulo'>{room.name}</h3>
        <p className='tarjeta-sala__ubicacion'>
          <MapPin size={12} />
          {room.location}
        </p>
        <ul className='tarjeta-sala__equipamiento'>
          <li className='tarjeta-sala__equipamiento-item'>
            <Users size={16} />
            Cap: {room.capacity}
          </li>
          {room.wifi && (
            <li className='tarjeta-sala__equipamiento-item'>
              <Wifi size={16} />
              Wifi
            </li>
          )}
          {room.av && (
            <li className='tarjeta-sala__equipamiento-item'>
              <Tv size={16} />
              AV
            </li>
          )}
        </ul>
        <p className='tarjeta-sala__descripcion'>{room.description}</p>
      </div>
      <div className='tarjeta-sala__pie'>{renderAction()}</div>
    </article>
  )
}

export default TarjetaSala
