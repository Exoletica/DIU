import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import AppSidebar from '../layout/AppSidebar'
import AppTopBar from '../layout/AppTopBar'
import SiteFooter from '../layout/SiteFooter'
import Toast from '../common/Toast'
import useToast from '../common/useToast'
import { useNavegacion } from '../../routes'
import '../../styles/reservas/index.scss'

export const LayoutReservas = ({ activeItem, title, children }) => {
  const navigate = useNavigate()
  const [toast, setToast] = useToast()
  const avisarSinPagina = useCallback(() => setToast('Esta sección estará disponible pronto.'), [setToast])
  const handleNavigate = useNavegacion(avisarSinPagina)

  return (
    <div className='layout-reservas'>
      <AppSidebar activeItem={activeItem} onNavigate={handleNavigate} />
      <div className='layout-reservas__principal'>
        <AppTopBar breadcrumbs={['Inicio', title]} onBreadcrumbNavigate={() => navigate('/')} showSearch />
        <div className='layout-reservas__contenido'>
          <main className='layout-reservas__pagina reservas'>{children}</main>
          <SiteFooter onNavigate={handleNavigate} />
        </div>
      </div>
      <Toast mensaje={toast} />
    </div>
  )
}

export default LayoutReservas
