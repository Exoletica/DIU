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

export const HelpBox = () => {
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
    <section className='help-box'>
      <div className='help-box__intro'>
        <h2 className='help-box__title'>
          <CircleHelp className='help-box__icon' size={20} />
          ¿Necesitas ayuda con tus reservas?
        </h2>
        <p className='help-box__text'>
          Si tienes problemas para retirar un libro o necesitas extender el horario de una sala, nuestro equipo de
          soporte está disponible de Lunes a Viernes de 08:30 a 19:00 hrs.
        </p>
      </div>
      <div className='help-box__actions'>
        <button type='button' className='button button--secondary' onClick={() => togglePanel('faq')}>
          {openPanel === 'faq' ? 'Ocultar FAQS' : 'Ver FAQS'}
        </button>
        <button type='button' className='button button--primary' onClick={() => togglePanel('contact')}>
          Contactar Soporte
        </button>
      </div>

      {openPanel === 'faq' && (
        <dl className='help-box__faq'>
          {FAQS.map((faq) => (
            <div key={faq.question} className='help-box__faq-item'>
              <dt className='help-box__question'>{faq.question}</dt>
              <dd className='help-box__answer'>{faq.answer}</dd>
            </div>
          ))}
        </dl>
      )}

      {openPanel === 'contact' && sent && (
        <p className='help-box__success'>
          Tu mensaje fue enviado. Te responderemos a tu correo institucional dentro de 24 horas hábiles.
        </p>
      )}

      {openPanel === 'contact' && !sent && (
        <form className='help-box__form' onSubmit={sendMessage}>
          <label className='help-box__label' htmlFor='support-message'>Describe tu problema</label>
          <textarea
            id='support-message'
            className='help-box__textarea'
            rows={4}
            required
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder='Ej: necesito extender mi reserva de la Sala B-205 por 30 minutos.'
          />
          <button type='submit' className='button button--primary'>Enviar mensaje</button>
        </form>
      )}
    </section>
  )
}

export default HelpBox
