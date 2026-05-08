import { Bell, Search, Settings, User } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'

export function Topbar() {
  return (
    <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
      <div className="flex-1 max-w-md">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar órdenes, clientes..."
            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-green-600"
          />
        </div>
      </div>

      <div className="flex items-center gap-4 ml-6">
        {/* Notifications */}
        <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <Bell className="w-6 h-6 text-gray-700" />
          <Badge
            variant="danger"
            size="sm"
            className="absolute -top-1 -right-1"
          >
            3
          </Badge>
        </button>

        {/* Settings */}
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <Settings className="w-6 h-6 text-gray-700" />
        </button>

        {/* User avatar */}
        <button className="flex items-center gap-3 pl-4 border-l border-gray-200">
          <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center">
            <span className="text-white font-semibold text-sm">AD</span>
          </div>
          <div className="text-left hidden sm:block">
            <p className="text-sm font-medium text-gray-900">Administrador</p>
            <p className="text-xs text-gray-500">Sistema</p>
          </div>
        </button>
      </div>
    </div>
  )
}
