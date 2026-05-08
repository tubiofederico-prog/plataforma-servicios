import { MobileHeader } from '@/components/mobile/MobileHeader'
import { Card, CardBody } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { useNavigate } from 'react-router-dom'
import { Search, Star, MapPin, Clock } from 'lucide-react'

const CATEGORIAS_COMPLETAS = [
  { id: 'electricidad', nombre: 'Electricidad', desc: 'Instalaciones eléctricas', icon: '⚡', color: 'from-yellow-400 to-orange-500', servicios: 5 },
  { id: 'plomeria', nombre: 'Plomería', desc: 'Reparación de tuberías', icon: '🔧', color: 'from-blue-400 to-cyan-500', servicios: 5 },
  { id: 'limpieza', nombre: 'Limpieza', desc: 'Limpieza del hogar', icon: '✨', color: 'from-green-400 to-emerald-500', servicios: 5 },
  { id: 'jardineria', nombre: 'Jardinería', desc: 'Cuidado de jardines', icon: '🌿', color: 'from-lime-400 to-green-600', servicios: 5 },
  { id: 'pintura', nombre: 'Pintura', desc: 'Trabajos de pintura', icon: '🎨', color: 'from-red-400 to-rose-500', servicios: 5 },
  { id: 'mudanzas', nombre: 'Mudanzas', desc: 'Servicio de mudanza', icon: '🚚', color: 'from-purple-400 to-green-600', servicios: 5 },
]

const SERVICIOS_DESTACADOS = [
  { nombre: 'Cambio de grifo', categoria: 'Plomería', precio: 800, rating: 4.9, disponible: true },
  { nombre: 'Instalación de luminaria', categoria: 'Electricidad', precio: 900, rating: 4.8, disponible: true },
  { nombre: 'Limpieza profunda', categoria: 'Limpieza', precio: 1500, rating: 5.0, disponible: true },
]

export function BuscarCategorias() {
  const navigate = useNavigate()

  return (
    <>
      <MobileHeader title="Servicios" showBack={false} />
      <div className="flex flex-col h-full pb-24 overflow-y-auto bg-gray-50">
        {/* Search bar */}
        <div className="sticky top-0 z-20 px-4 py-4 bg-white border-b border-gray-100">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar servicios..."
              className="w-full pl-12 pr-4 py-2.5 bg-gray-100 border-0 rounded-full focus:outline-none focus:ring-2 focus:ring-green-600 text-sm"
            />
          </div>
        </div>

        {/* Categorías Grid */}
        <div className="px-4 py-6">
          <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-4">Categorías</h3>
          <div className="grid grid-cols-2 gap-3 mb-8">
            {CATEGORIAS_COMPLETAS.map((cat) => (
              <button
                key={cat.id}
                onClick={() => navigate('/cliente/buscar')}
                className={`p-4 rounded-2xl bg-gradient-to-br ${cat.color} text-white hover:shadow-lg transition-all active:scale-95 flex flex-col items-start justify-between h-28`}
              >
                <span className="text-3xl">{cat.icon}</span>
                <div className="text-left">
                  <p className="font-bold text-sm">{cat.nombre}</p>
                  <p className="text-xs opacity-90">{cat.servicios} servicios</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Servicios Destacados */}
        <div className="px-4 pb-6">
          <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-4">Servicios en demanda</h3>
          <div className="space-y-3">
            {SERVICIOS_DESTACADOS.map((servicio, idx) => (
              <Card
                key={idx}
                onClick={() => navigate('/cliente/buscar')}
                className="cursor-pointer hover:shadow-lg transition-all border-green-100"
              >
                <CardBody>
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900">{servicio.nombre}</h4>
                      <p className="text-xs text-gray-500 mt-1">{servicio.categoria}</p>
                      <div className="flex items-center gap-3 mt-2 text-xs">
                        <span className="flex items-center gap-1">
                          <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                          {servicio.rating}
                        </span>
                        <span className="flex items-center gap-1 text-gray-500">
                          <Clock className="w-3.5 h-3.5" />
                          30-60 min
                        </span>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="font-bold text-lg text-green-600">${servicio.precio}</p>
                      <Badge variant="success" size="sm" className="mt-2">Disponible</Badge>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
