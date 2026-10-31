import React from 'react'

export const EncabezadoPagina = ({ title, subtitle, children }) => {
  return (
    <div className='encabezado-pagina'>
      <div className='encabezado-pagina__texto'>
        <h1 className='encabezado-pagina__titulo'>{title}</h1>
        {subtitle && <p className='encabezado-pagina__subtitulo'>{subtitle}</p>}
      </div>
      {children && <div className='encabezado-pagina__acciones'>{children}</div>}
    </div>
  )
}

export default EncabezadoPagina
