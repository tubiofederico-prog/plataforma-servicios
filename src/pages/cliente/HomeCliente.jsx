import { useNavigate } from 'react-router-dom'
import { Search, MapPin, Star, ChevronRight } from 'lucide-react'
import { MobileHeader } from '@/components/mobile/MobileHeader'
import { Button } from '@/components/ui/Button'
import { Card, CardBody } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Avatar } from '@/components/ui/Avatar'
import { categorias, servicios, clientes, ordenes } from '@/data'
import { formatCurrency } from '@/utils/format'

export function HomeCliente() {
  const navigate = useNavigate()
  const cliente = clientes[0]
  const ordenesActivas = ordenes.filter(
    (o) => o.clienteId === cliente.id && ['asignado', 'en_camino', 'en_progreso'].includes(o.estado)
  )
  const categoriasPopulares = categorias.slice(0, 6)
  const serviciosPopulares = servicios.filter((s) => s.popular).slice(0, 3)

  return (
    <>
      <MobileHeader title="" showBack={false} />

      <div className="px-4 py-6 space-y-6">
        {/* Greeting and location */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">¡Hola {cliente.nombre}! 👋</h1>
          <div className="flex items-center gap-1 text-gray-600">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">{cliente.ciudad}</span>
          </div>
        </div>

        {/* Active order card */}
        {ordenesActivas.length > 0 && (
          <Card className="bg-gradient-to-br from-violet-50 to-blue-50 border-violet-200">
            <CardBody>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-gray-900">Orden en progreso</h3>
                <Badge variant="primary" size="sm">
                  En camino
                </Badge>
              </div>
              <p className="text-sm text-gray-600 mb-3">{servicios.find((s) => s.id === ordenesActivas[0].servicioId)?.nombre}</p>
              <Button variant="ghost" size="sm" onClick={() => navigate(`/cliente/seguimiento/${ordenesActivas[0].id}`)} className="w-full justify-center">
                Ver seguimiento →
              </Button>
            </CardBody>
          </Card>
        )}

        {/* Search bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="¿Qué necesitás hoy?"
            onClick={() => navigate('/cliente/buscar')}
            className="w-full pl-10 pr-4 py-3 bg-gray-100 border-0 rounded-xl focus:outline-none focus:bg-white focus:ring-2 focus:ring-violet-600 cursor-pointer"
          />
        </div>

        {/* Categories */}
        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-3">Categorías</h2>
          <div className="grid grid-cols-2 gap-3">
            {categoriasPopulares.map((cat) => {
              const Icon = require(`lucide-react`)[cat.icono]
              return (
                <button
                  key={cat.id}
                  onClick={() => navigate(`/cliente/buscar?categoria=${cat.id}`)}
                  className={`p-4 rounded-xl bg-gradient-to-br ${cat.color} text-white hover:shadow-lg transition-all active:scale-95`}
                >
                  <div className="flex flex-col gap-2">
                    {Icon && <Icon className="w-6 h-6" />}
                    <span className="text-sm font-semibold text-left">{cat.nombre}</span>
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* Featured services */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-gray-900">Destacados</h2>
            <button onClick={() => navigate('/cliente/buscar')} className="text-violet-600 text-sm font-medium flex items-center gap-1">
              Ver más <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="space-y-3">
            {serviciosPopulares.map((servicio) => {
              const categoria = categorias.find((c) => c.id === servicio.categoriaId)
              const trabajador = clientes[Math.floor(Math.random() * clientes.length)]
              return (
                <Card
                  key={servicio.id}
                  onClick={() => navigate(`/cliente/solicitar/${servicio.id}`)}
                  className="hover:shadow-md active:scale-95 transition-all cursor-pointer"
                >
                  <CardBody>
                    <div className="flex items-start gap-3">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{servicio.nombre}</h3>
                        <p className="text-xs text-gray-500 mt-1">{categoria?.nombre}</p>
                        <div className="flex items-center gap-1 mt-2">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-xs font-medium text-gray-700">4.8</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-violet-600">{formatCurrency(servicio.precio)}</p>
                        <p className="text-xs text-gray-500">{servicio.duracionEstimada}m</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
