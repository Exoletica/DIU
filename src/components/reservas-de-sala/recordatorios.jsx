import React from 'react'
import { CircleAlert } from 'lucide-react'

const REMINDERS = [
  'Reservas máximas de 3 horas por día por estudiante.',
  'Se requiere un mínimo de 2 personas para salas de colaboración.',
  'Tolerancia de 15 minutos antes de liberar la sala reservada.'
]

export const Recordatorios = ({ highlighted }) => {
  const classes = ['recordatorios']
  if (highlighted) classes.push('recordatorios--destacado')

  return (
    <section id='normativas' className={classes.join(' ')}>
      <h2 className='recordatorios__cabecera'>
        <CircleAlert className='recordatorios__icono' size={20} />
        Recordatorios
      </h2>
      <ul className='recordatorios__lista'>
        {REMINDERS.map((reminder) => (
          <li key={reminder} className='recordatorios__item'>{reminder}</li>
        ))}
      </ul>
    </section>
  )
}

export default Recordatorios
