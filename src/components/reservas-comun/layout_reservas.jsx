import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import AppSidebar from '../layout/AppSidebar'
import AppTopBar from '../layout/AppTopBar'
import SiteFooter from '../layout/SiteFooter'
import '../../styles/reservas/index.scss'

const ROUTES = {
  inicio: '/',
  reservas: '/mis-reservas',
  salas: '/reservas-de-sala',
  prestamos: '/prestamos',
  recomendaciones: '/recomendaciones'
}

export const LayoutReservas = ({ activeItem, title, children }) => {
  const navigate = useNavigate()
  const handleNavigate = useCallback((destination) => {
    if (ROUTES[destination]) return navigate(ROUTES[destination])
    window.console.info(`Navigation requested: ${destination}`)
  }, [navigate])

  return (
    <div className='layout-reservas'>
      <AppSidebar activeItem={activeItem} onNavigate={handleNavigate} />
      <div className='layout-reservas__principal'>
        <AppTopBar breadcrumbs={['Inicio', title]} userName='Estudiante' avatarSrc='/Container.svg' notificationCount={1} />
        <div className='layout-reservas__contenido'>
          <main className='layout-reservas__pagina reservas'>{children}</main>
          <SiteFooter onNavigate={handleNavigate} />
        </div>
      </div>
    </div>
  )
}

export default LayoutReservas
