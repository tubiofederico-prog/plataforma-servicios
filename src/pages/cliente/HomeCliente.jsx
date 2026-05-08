import { useNavigate } from 'react-router-dom'
import { Search, MapPin, Star, ChevronRight, Zap, Wrench, Home as HomeIcon, Sparkles } from 'lucide-react'
import { MobileHeader } from '@/components/mobile/MobileHeader'
import { Button } from '@/components/ui/Button'
import { Card, CardBody } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Avatar } from '@/components/ui/Avatar'
import { RatingDisplay } from '@/components/ui/StarRating'
import { clientes, ordenes, trabajadores } from '@/data'
import { formatCurrency } from '@/utils/format'

const CATEGORIAS_HOME = [
  { id: 'electricidad', nombre: 'Electricidad', icon: Zap, color: 'from-yellow-500 to-orange-600' },
  { id: 'plomeria', nombre: 'Plomería', icon: Wrench, color: 'from-green-500 to-cyan-600' },
  { id: 'limpieza', nombre: 'Limpieza', icon: Sparkles, color: 'from-green-500 to-emerald-600' },
  { id: 'jardineria', nombre: 'Jardinería', icon: HomeIcon, color: 'from-lime-500 to-green-600' },
]

const SERVICIOS_POPULARES = [
  { id: 1, nombre: 'Cambio de grifo', categoria: 'Plomería', precio: 800, rating: 4.9, trabajador: 'Carlos R.' },
  { id: 2, nombre: 'Instalación de luz', categoria: 'Electricidad', precio: 900, rating: 4.8, trabajador: 'Miguel S.' },
  { id: 3, nombre: 'Limpieza general', categoria: 'Limpieza', precio: 1200, rating: 5.0, trabajador: 'Mario G.' },
]

export function HomeCliente() {
  const navigate = useNavigate()
  const cliente = clientes[0]
  const ordenActiva = ordenes.find(
    (o) => o.clienteId === cliente.id && ['asignado', 'en_camino', 'en_progreso'].includes(o.estado)
  )

  return (
    <>
      <MobileHeader title="" showBack={false} />

      <div className="flex flex-col h-full pb-24 overflow-y-auto">
        {/* Header Hero */}
        <div className="px-4 pt-6 pb-8 bg-gradient-to-br from-brand-primary to-brand-accent text-white rounded-b-3xl">
          <div className="mb-4">
            <h1 className="text-3xl font-bold mb-1">¡Hola {cliente.nombre.split(' ')[0]}! 👋</h1>
            <div className="flex items-center gap-2 text-green-100">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium">{cliente.ciudad}</span>
            </div>
          </div>

          {/* Search bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="¿Qué necesitás hoy?"
              onClick={() => navigate('/cliente/buscar')}
              className="w-full pl-12 pr-4 py-3 bg-white border-0 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-secondary text-gray-900 placeholder-gray-500 font-medium cursor-pointer"
            />
          </div>
        </div>

        {/* Active Order Card */}
        {ordenActiva && (
          <div className="px-4 -mt-6 mb-6 relative z-10">
            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-brand-secondary shadow-xl">
              <CardBody>
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-brand-secondary uppercase tracking-wide">Orden en progreso</p>
                    <h3 className="text-lg font-bold text-gray-900 mt-1">Instalación de grifo</h3>
                  </div>
                  <Badge variant="success" size="md">
                    En camino
                  </Badge>
                </div>
                <div className="flex items-center justify-between text-sm mb-4">
                  <span className="text-gray-600">Carlos Rodríguez</span>
                  <span className="font-semibold text-brand-secondary">ETA: 12 min</span>
                </div>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => navigate(`/cliente/seguimiento/${ordenActiva.id}`)}
                  className="w-full bg-brand-primary hover:bg-brand-primary-dark text-white"
                >
                  Ver en vivo →
                </Button>
              </CardBody>
            </Card>
          </div>
        )}

        {/* Categories Grid */}
        <div className="px-4 mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Categorías populares</h2>
          <div className="grid grid-cols-2 gap-3">
            {CATEGORIAS_HOME.map((cat) => {
              const Icon = cat.icon
              return (
                <button
                  key={cat.id}
                  onClick={() => navigate('/cliente/buscar')}
                  className={`p-4 rounded-2xl bg-gradient-to-br from-green-600 to-emerald-700 text-white hover:shadow-lg transition-all active:scale-95 flex flex-col items-start justify-between h-32`}
                >
                  <Icon className="w-8 h-8 opacity-90" />
                  <span className="text-sm font-bold text-left">{cat.nombre}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Featured Services */}
        <div className="px-4 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-900">Servicios destacados</h2>
            <button onClick={() => navigate('/cliente/buscar')} className="text-green-600 text-sm font-semibold flex items-center gap-1 hover:text-green-700">
              Ver todo <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-3">
            {SERVICIOS_POPULARES.map((servicio) => (
              <Card
                key={servicio.id}
                onClick={() => navigate('/cliente/buscar')}
                className="hover:shadow-lg active:scale-95 transition-all cursor-pointer border-green-100 hover:border-green-300"
              >
                <CardBody>
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 text-base">{servicio.nombre}</h3>
                      <p className="text-xs text-gray-500 mt-1">{servicio.categoria}</p>
                      <div className="flex items-center gap-1 mt-2">
                        <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs font-semibold text-gray-700">{servicio.rating}</span>
                        <span className="text-xs text-gray-500">• {servicio.trabajador}</span>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="font-bold text-lg text-brand-secondary">${servicio.precio}</p>
                      <p className="text-xs text-gray-500 mt-1">Desde 30 min</p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="px-4 mb-6">
          <Button variant="primary" size="block" onClick={() => navigate('/cliente/buscar')} className="h-12 text-base bg-brand-primary hover:bg-brand-primary-dark">
            Explorar todos los servicios
          </Button>
        </div>
      </div>
    </>
  )
}
