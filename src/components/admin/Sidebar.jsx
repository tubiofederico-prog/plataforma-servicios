import { Link, useLocation } from 'react-router-dom'
import {
  LayoutDashboard,
  Users,
  Briefcase,
  ShoppingCart,
  DollarSign,
  Grid3x3,
  Zap,
  AlertCircle,
  Settings,
  LogOut
} from 'lucide-react'
import { cn } from '@/utils/cn'

const menuItems = [
  { label: 'Dashboard', path: '/admin', icon: LayoutDashboard },
  { label: 'Clientes', path: '/admin/clientes', icon: Users },
  { label: 'Proveedores', path: '/admin/proveedores', icon: Briefcase },
  { label: 'Órdenes', path: '/admin/ordenes', icon: ShoppingCart },
  { label: 'Financiero', path: '/admin/financiero', icon: DollarSign },
  { label: 'Categorías', path: '/admin/categorias', icon: Grid3x3 },
  { label: 'Comisiones', path: '/admin/comisiones', icon: Zap },
  { label: 'Soporte', path: '/admin/soporte', icon: AlertCircle },
  { label: 'Configuración', path: '/admin/configuracion', icon: Settings }
]

export function Sidebar() {
  const location = useLocation()

  return (
    <div className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200 min-h-screen">
      {/* Logo */}
      <div className="px-6 py-6 border-b border-gray-200">
        <h1 className="text-xl font-bold bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
          Plataforma
        </h1>
        <p className="text-xs text-gray-500 mt-1">Panel de Control</p>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = location.pathname === item.path

          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-sm font-medium',
                isActive
                  ? 'bg-violet-100 text-violet-700'
                  : 'text-gray-700 hover:bg-gray-100'
              )}
            >
              <Icon className="w-5 h-5" />
              {item.label}
            </Link>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="px-4 py-4 border-t border-gray-200">
        <button className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-all">
          <LogOut className="w-5 h-5" />
          Salir
        </button>
      </div>
    </div>
  )
}
