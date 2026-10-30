import React from 'react'
import { ChevronDown, Search } from 'lucide-react'

import { CAPACITY_OPTIONS } from '../../data/reservas/rooms'

export const RoomFilters = ({
  availableOnly,
  onAvailableOnlyChange,
  capacity,
  onCapacityChange,
  searchQuery,
  onSearchChange
}) => {
  const tabClass = (isActive) => {
    const classes = ['room-filters__tab']
    if (isActive) classes.push('room-filters__tab--active')
    return classes.join(' ')
  }

  return (
    <div className='room-filters'>
      <div className='room-filters__tabs' role='tablist'>
        <button
          type='button'
          role='tab'
          aria-selected={!availableOnly}
          className={tabClass(!availableOnly)}
          onClick={() => onAvailableOnlyChange(false)}
        >
          Todas las Salas
        </button>
        <button
          type='button'
          role='tab'
          aria-selected={availableOnly}
          className={tabClass(availableOnly)}
          onClick={() => onAvailableOnlyChange(true)}
        >
          Disponibilidad Hoy
        </button>
      </div>
      <label className='room-filters__search'>
        <Search className='room-filters__search-icon' size={16} />
        <input
          className='room-filters__search-input'
          type='search'
          placeholder='Buscar salas...'
          aria-label='Buscar salas por nombre o ubicación'
          value={searchQuery}
          onChange={(event) => onSearchChange(event.target.value)}
        />
      </label>
      <div className='room-filters__capacity'>
        <select
          className='room-filters__select'
          value={capacity}
          onChange={(event) => onCapacityChange(event.target.value)}
          aria-label='Filtrar por capacidad'
        >
          {CAPACITY_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
        <ChevronDown className='room-filters__select-icon' size={16} />
      </div>
    </div>
  )
}

export default RoomFilters
