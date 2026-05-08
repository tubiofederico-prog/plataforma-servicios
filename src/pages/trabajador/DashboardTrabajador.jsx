import { useState } from 'react'
import { MobileHeader } from '@/components/mobile/MobileHeader'
import { Card, CardBody } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { StatusBadge } from '@/components/ui/StatusBadge'
import { Avatar } from '@/components/ui/Avatar'
import { RatingDisplay } from '@/components/ui/StarRating'
import { Power, TrendingUp, Clock, CheckCircle2, AlertCircle, MapPin, Star } from 'lucide-react'

export function DashboardTrabajador() {
  const [online, setOnline] = useState(true)

  // Mock data
  const trabajador = {
    nombre: 'Carlos Rodríguez',
    avatar: 'CR',
    categoria: 'Plomería',
    calificacion: 4.9,
    ordenesHoy: 5,
    gananciasHoy: 3200,
    gananciasMes: 28400,
    ordenesCompletadas: 156,
    distancia: '2.1 km',
    tiempoRespuesta: '4.3 min'
  }

  const solicitudesEntrantes = [
    { id: 1, servicio: 'Reparación de inodoro', cliente: 'Valentina T.', distancia: '1.2 km', pago: 1200, urgencia: 'normal' },
    { id: 2, servicio: 'Destape de cañería', cliente: 'Martín G.', distancia: '2.8 km', pago: 1500, urgencia: 'alta' },
  ]

  return (
    <>
      <MobileHeader
        title="Mi Dashboard"
        showBack={false}
        action={
          <button
            onClick={() => setOnline(!online)}
            className={`p-2 rounded-lg transition-all ${
              online ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'
            }`}
          >
            <Power className="w-5 h-5" />
          </button>
        }
      />

      <div className="flex flex-col h-full pb-24 overflow-y-auto">
        {/* Hero Section - Status */}
        <div className="px-4 pt-4 pb-6 bg-gradient-to-br from-green-600 to-emerald-600 text-white">
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-2">¡Hola {trabajador.nombre.split(' ')[0]}! 👋</h2>
              <div className="flex items-center gap-2 text-green-100">
                <MapPin className="w-4 h-4" />
                <span className="text-sm font-medium">{trabajador.distancia} de ti</span>
              </div>
            </div>
            <Avatar initials={trabajador.avatar} size="lg" />
          </div>

          {/* Online Toggle Card */}
          <Card className="bg-white/95">
            <CardBody>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-600 font-semibold uppercase tracking-wide">Tu estado</p>
                  <StatusBadge
                    label={online ? 'En línea' : 'Offline'}
                    status={online ? 'success' : 'default'}
                    size="md"
                    className="mt-2"
                  />
                </div>
                <Button
                  variant={online ? 'danger' : 'primary'}
                  size="sm"
                  onClick={() => setOnline(!online)}
                  className="flex items-center gap-2"
                >
                  <Power className="w-4 h-4" />
                  {online ? 'Desconectar' : 'Conectar'}
                </Button>
              </div>
            </CardBody>
          </Card>
        </div>

        {/* Stats Grid */}
        <div className="px-4 py-6">
          <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-4">Hoy</h3>
          <div className="grid grid-cols-2 gap-3 mb-6">
            <Card className="border-emerald-200 bg-emerald-50">
              <CardBody className="text-center">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-600 text-white mx-auto mb-3">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <p className="text-3xl font-bold text-emerald-600">${trabajador.gananciasHoy}</p>
                <p className="text-xs text-gray-600 mt-2 font-medium">Ganancias</p>
              </CardBody>
            </Card>

            <Card className="border-green-200 bg-green-50">
              <CardBody className="text-center">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-green-600 text-white mx-auto mb-3">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <p className="text-3xl font-bold text-green-600">{trabajador.ordenesHoy}</p>
                <p className="text-xs text-gray-600 mt-2 font-medium">Servicios</p>
              </CardBody>
            </Card>
          </div>

          {/* Estadísticas Generales */}
          <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-4">General</h3>
          <div className="grid grid-cols-2 gap-3 mb-6">
            <Card>
              <CardBody className="text-center">
                <div className="flex items-center justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(trabajador.calificacion) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <p className="font-bold text-gray-900">{trabajador.calificacion}</p>
                <p className="text-xs text-gray-600 mt-2 font-medium">Calificación</p>
              </CardBody>
            </Card>

            <Card>
              <CardBody className="text-center">
                <p className="text-2xl font-bold text-green-600">{trabajador.ordenesCompletadas}</p>
                <p className="text-xs text-gray-600 mt-2 font-medium">Servicios realizados</p>
              </CardBody>
            </Card>
          </div>

          {/* Mes */}
          <Card>
            <CardBody>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 font-medium">Ganancias del mes</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">${trabajador.gananciasMes.toLocaleString()}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600 font-medium">Tiempo resp. prom.</p>
                  <p className="text-2xl font-bold text-green-600 mt-1">{trabajador.tiempoRespuesta}</p>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>

        {/* Solicitudes Entrantes */}
        <div className="px-4 pb-6">
          <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-4">Solicitudes entrantes</h3>
          {solicitudesEntrantes.length > 0 ? (
            <div className="space-y-3">
              {solicitudesEntrantes.map((solicitud) => (
                <Card
                  key={solicitud.id}
                  className={`border-2 hover:shadow-lg transition-all cursor-pointer ${
                    solicitud.urgencia === 'alta' ? 'border-red-300 bg-red-50' : 'border-green-200'
                  }`}
                >
                  <CardBody>
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900">{solicitud.servicio}</h4>
                        <p className="text-xs text-gray-600 mt-1">Cliente: {solicitud.cliente}</p>
                      </div>
                      {solicitud.urgencia === 'alta' && (
                        <Badge variant="danger" size="sm">
                          Urgente
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center justify-between text-sm mb-4">
                      <span className="text-gray-600 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {solicitud.distancia}
                      </span>
                      <span className="font-bold text-green-600">${solicitud.pago}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <Button variant="ghost" size="sm" className="border border-gray-300">
                        Rechazar
                      </Button>
                      <Button variant="primary" size="sm">
                        Aceptar
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="border-dashed border-2 border-gray-300">
              <CardBody className="text-center py-8">
                <AlertCircle className="w-10 h-10 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-600 font-medium">No hay solicitudes en este momento</p>
                <p className="text-xs text-gray-500 mt-1">Mantente en línea para recibir solicitudes</p>
              </CardBody>
            </Card>
          )}
        </div>
      </div>
    </>
  )
}
