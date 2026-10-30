import React from 'react'
import { CircleAlert } from 'lucide-react'

const REMINDERS = [
  'Reservas máximas de 3 horas por día por estudiante.',
  'Se requiere un mínimo de 2 personas para salas de colaboración.',
  'Tolerancia de 15 minutos antes de liberar la sala reservada.'
]

export const Reminders = ({ highlighted }) => {
  const classes = ['reminders']
  if (highlighted) classes.push('reminders--highlighted')

  return (
    <section id='normativas' className={classes.join(' ')}>
      <h2 className='reminders__header'>
        <CircleAlert className='reminders__icon' size={20} />
        Recordatorios
      </h2>
      <ul className='reminders__list'>
        {REMINDERS.map((reminder) => (
          <li key={reminder} className='reminders__item'>{reminder}</li>
        ))}
      </ul>
    </section>
  )
}

export default Reminders
