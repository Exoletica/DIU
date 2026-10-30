import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import { WEEKDAYS, toDateKey, fromDateKey, formatMonth, buildMonthGrid } from '../../utils/dates'

export const Calendar = ({
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
    const classes = ['calendar__day']
    if (!day.inMonth) classes.push('calendar__day--outside')
    if (day.key === todayKey) classes.push('calendar__day--today')
    if (markedDates.includes(day.key)) classes.push('calendar__day--marked')
    if (isDisabled(day)) classes.push('calendar__day--disabled')
    if (day.key === selectedDate) classes.push('calendar__day--selected')
    return classes.join(' ')
  }

  return (
    <section className='calendar'>
      <h2 className='calendar__title'>{title}</h2>
      <div className='calendar__body'>
        <div className='calendar__header'>
          <button type='button' className='calendar__nav-button' onClick={() => changeMonth(-1)} aria-label='Mes anterior'>
            <ChevronLeft size={16} />
          </button>
          <span className='calendar__month'>{formatMonth(viewDate)}</span>
          <button type='button' className='calendar__nav-button' onClick={() => changeMonth(1)} aria-label='Mes siguiente'>
            <ChevronRight size={16} />
          </button>
        </div>
        <div className='calendar__weekdays'>
          {WEEKDAYS.map((weekday) => (
            <span key={weekday} className='calendar__weekday'>{weekday}</span>
          ))}
        </div>
        <div className='calendar__days'>
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

export default Calendar
