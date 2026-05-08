import { Outlet } from 'react-router-dom'
import { Home, Search, ClipboardList, User, LayoutDashboard, Bell, DollarSign } from 'lucide-react'
import { PhoneFrame } from '@/components/mobile/PhoneFrame'
import { BottomTabBar } from '@/components/mobile/BottomTabBar'

const clienteTabs = [
  { icon: Home, label: 'Inicio', path: '/cliente' },
  { icon: Search, label: 'Buscar', path: '/cliente/buscar' },
  { icon: ClipboardList, label: 'Pedidos', path: '/cliente/historial' },
  { icon: User, label: 'Perfil', path: '/cliente/perfil' }
]

const trabajadorTabs = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/trabajador' },
  { icon: Bell, label: 'Solicitudes', path: '/trabajador/solicitudes' },
  { icon: DollarSign, label: 'Ganancias', path: '/trabajador/ganancias' },
  { icon: User, label: 'Perfil', path: '/trabajador/perfil' }
]

export function MobileLayout({ app = 'cliente' }) {
  const tabs = app === 'cliente' ? clienteTabs : trabajadorTabs

  return (
    <PhoneFrame>
      <div className="flex flex-col h-screen md:h-[932px] relative">
        {/* Main content area - scrollable */}
        <div className="flex-1 overflow-y-auto pb-20 md:pb-16">
          <Outlet />
        </div>

        {/* Bottom tab bar */}
        <BottomTabBar items={tabs} />
      </div>
    </PhoneFrame>
  )
}
