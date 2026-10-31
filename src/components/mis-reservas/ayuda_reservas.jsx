import React, { useState } from 'react'
import { CircleHelp } from 'lucide-react'

const FAQS = [
  {
    question: '¿Cuánto tiempo puedo reservar una sala?',
    answer: 'Puedes reservar hasta 3 horas por día, es decir, dos bloques de 1 hora y 30 minutos.'
  },
  {
    question: '¿Qué pasa si llego tarde a mi reserva?',
    answer: 'Existe una tolerancia de 15 minutos. Pasado ese tiempo, la sala se libera para otros estudiantes.'
  },
  {
    question: '¿Por qué mi reserva aparece como pendiente?',
    answer: 'Las reservas de sala quedan pendientes hasta que las confirmas desde Mis Reservas. Confírmala para asegurar tu espacio.'
  },
  {
    question: '¿Cómo retiro un libro reservado?',
    answer: 'Acércate al mesón de préstamos con tu credencial universitaria antes de la fecha indicada en tu reserva.'
  }
]

export const AyudaReservas = () => {
  const [openPanel, setOpenPanel] = useState(null)
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  const togglePanel = (panel) => {
    setOpenPanel(openPanel === panel ? null : panel)
    setSent(false)
  }

  const sendMessage = (event) => {
    event.preventDefault()
    setSent(true)
    setMessage('')
  }

  return (
    <section className='ayuda-reservas'>
      <div className='ayuda-reservas__introduccion'>
        <h2 className='ayuda-reservas__titulo'>
          <CircleHelp className='ayuda-reservas__icono' size={20} />
          ¿Necesitas ayuda con tus reservas?
        </h2>
        <p className='ayuda-reservas__texto'>
          Si tienes problemas para retirar un libro o necesitas extender el horario de una sala, nuestro equipo de
          soporte está disponible de Lunes a Viernes de 08:30 a 19:00 hrs.
        </p>
      </div>
      <div className='ayuda-reservas__acciones'>
        <button type='button' className='boton boton--secundario' onClick={() => togglePanel('faq')}>
          {openPanel === 'faq' ? 'Ocultar FAQS' : 'Ver FAQS'}
        </button>
        <button type='button' className='boton boton--primario' onClick={() => togglePanel('contact')}>
          Contactar Soporte
        </button>
      </div>

      {openPanel === 'faq' && (
        <dl className='ayuda-reservas__preguntas'>
          {FAQS.map((faq) => (
            <div key={faq.question} className='ayuda-reservas__pregunta-frecuente'>
              <dt className='ayuda-reservas__pregunta'>{faq.question}</dt>
              <dd className='ayuda-reservas__respuesta'>{faq.answer}</dd>
            </div>
          ))}
        </dl>
      )}

      {openPanel === 'contact' && sent && (
        <p className='ayuda-reservas__exito'>
          Tu mensaje fue enviado. Te responderemos a tu correo institucional dentro de 24 horas hábiles.
        </p>
      )}

      {openPanel === 'contact' && !sent && (
        <form className='ayuda-reservas__formulario' onSubmit={sendMessage}>
          <label className='ayuda-reservas__etiqueta' htmlFor='support-message'>Describe tu problema</label>
          <textarea
            id='support-message'
            className='ayuda-reservas__area-texto'
            rows={4}
            required
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder='Ej: necesito extender mi reserva de la Sala B-205 por 30 minutos.'
          />
          <button type='submit' className='boton boton--primario'>Enviar mensaje</button>
        </form>
      )}
    </section>
  )
}

export default AyudaReservas
