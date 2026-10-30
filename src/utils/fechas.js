export const WEEKDAYS = ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá']

export const toDateKey = (date) => {
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${date.getFullYear()}-${month}-${day}`
}

export const fromDateKey = (key) => {
  const [year, month, day] = key.split('-').map(Number)
  return new Date(year, month - 1, day)
}

export const formatMonth = (date) => {
  const text = date.toLocaleDateString('es-CL', { month: 'long', year: 'numeric' })
  return text.charAt(0).toUpperCase() + text.slice(1)
}

export const formatLongDate = (key) =>
  fromDateKey(key).toLocaleDateString('es-CL', { weekday: 'long', day: 'numeric', month: 'long' })

export const formatShortDate = (key) =>
  fromDateKey(key).toLocaleDateString('es-CL', { day: 'numeric', month: 'short', year: 'numeric' })

export const buildMonthGrid = (viewDate) => {
  const year = viewDate.getFullYear()
  const month = viewDate.getMonth()
  const firstWeekday = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const totalCells = Math.ceil((firstWeekday + daysInMonth) / 7) * 7

  return Array.from({ length: totalCells }, (_, index) => {
    const date = new Date(year, month, index - firstWeekday + 1)
    return { key: toDateKey(date), date, inMonth: date.getMonth() === month }
  })
}
