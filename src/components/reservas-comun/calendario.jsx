import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import { WEEKDAYS, toDateKey, fromDateKey, formatMonth, buildMonthGrid } from '../../utils/fechas'

export const Calendario = ({
  title = 'Fecha de Reserva',
  selectedDate,
  onSelectDate,
  markedDates = [],
  disablePast = true
}) => {
  const todayKey = toDateKey(new Date())
  const [viewDate, setViewDate] = useState(() => {
    const selected = fromDateKey(selectedDate)
    return new Date(selected.getFullYear(), selected.getMonth(), 1)
  })

  const changeMonth = (offset) => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + offset, 1))
  }

  const selectDay = (day) => {
    onSelectDate(day.key)
    if (!day.inMonth) setViewDate(new Date(day.date.getFullYear(), day.date.getMonth(), 1))
  }

  const isDisabled = (day) => disablePast && day.key < todayKey

  const dayClass = (day) => {
    const classes = ['calendario__dia']
    if (!day.inMonth) classes.push('calendario__dia--fuera-de-mes')
    if (day.key === todayKey) classes.push('calendario__dia--hoy')
    if (markedDates.includes(day.key)) classes.push('calendario__dia--marcado')
    if (isDisabled(day)) classes.push('calendario__dia--deshabilitado')
    if (day.key === selectedDate) classes.push('calendario__dia--seleccionado')
    return classes.join(' ')
  }

  return (
    <section className='calendario'>
      <h2 className='calendario__titulo'>{title}</h2>
      <div className='calendario__cuerpo'>
        <div className='calendario__cabecera'>
          <button type='button' className='calendario__boton-navegacion' onClick={() => changeMonth(-1)} aria-label='Mes anterior'>
            <ChevronLeft size={16} />
          </button>
          <span className='calendario__mes'>{formatMonth(viewDate)}</span>
          <button type='button' className='calendario__boton-navegacion' onClick={() => changeMonth(1)} aria-label='Mes siguiente'>
            <ChevronRight size={16} />
          </button>
        </div>
        <div className='calendario__dias-semana'>
          {WEEKDAYS.map((weekday) => (
            <span key={weekday} className='calendario__dia-semana'>{weekday}</span>
          ))}
        </div>
        <div className='calendario__dias'>
          {buildMonthGrid(viewDate).map((day) => (
            <button
              key={day.key}
              type='button'
              className={dayClass(day)}
              disabled={isDisabled(day)}
              aria-pressed={day.key === selectedDate}
              onClick={() => selectDay(day)}
            >
              {day.date.getDate()}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Calendario
