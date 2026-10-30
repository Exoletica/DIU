import React from 'react'
import { ChevronDown, Search } from 'lucide-react'

import { CAPACITY_OPTIONS } from '../../data/reservas/salas'

export const FiltrosSalas = ({
  availableOnly,
  onAvailableOnlyChange,
  capacity,
  onCapacityChange,
  searchQuery,
  onSearchChange
}) => {
  const tabClass = (isActive) => {
    const classes = ['filtros-salas__pestana']
    if (isActive) classes.push('filtros-salas__pestana--activa')
    return classes.join(' ')
  }

  return (
    <div className='filtros-salas'>
      <div className='filtros-salas__pestanas' role='tablist'>
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
      <label className='filtros-salas__busqueda'>
        <Search className='filtros-salas__busqueda-icono' size={16} />
        <input
          className='filtros-salas__busqueda-campo'
          type='search'
          placeholder='Buscar salas...'
          aria-label='Buscar salas por nombre o ubicación'
          value={searchQuery}
          onChange={(event) => onSearchChange(event.target.value)}
        />
      </label>
      <div className='filtros-salas__capacidad'>
        <select
          className='filtros-salas__selector'
          value={capacity}
          onChange={(event) => onCapacityChange(event.target.value)}
          aria-label='Filtrar por capacidad'
        >
          {CAPACITY_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
        <ChevronDown className='filtros-salas__selector-icono' size={16} />
      </div>
    </div>
  )
}

export default FiltrosSalas
