import { useNavigate } from 'react-router-dom'
import { MobileHeader } from '@/components/mobile/MobileHeader'
import { Card, CardBody } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { MapPin, Clock, Star, AlertCircle } from 'lucide-react'

export function SolicitudesEntrantes() {
  const navigate = useNavigate()

  const solicitudes = [
    {
      id: 1,
      numero: '#ORD-2025-0050',
      servicio: 'Reparación de inodoro',
      cliente: 'Valentina Torres',
      clienteRating: 4.8,
      distancia: '1.2 km',
      pago: 1200,
      tiempoLlegada: '8 min',
      urgencia: 'normal',
      direccion: 'Av. 18 de Julio 1234',
      descripcion: 'Tanque defectuoso, no detiene el agua'
    },
    {
      id: 2,
      numero: '#ORD-2025-0051',
      servicio: 'Destape de cañería',
      cliente: 'Martín García',
      clienteRating: 4.6,
      distancia: '2.8 km',
      pago: 1500,
      tiempoLlegada: '15 min',
      urgencia: 'alta',
      direccion: 'Rambla Francia 450',
      descripcion: 'Cañería destapada en la cocina'
    },
    {
      id: 3,
      numero: '#ORD-2025-0052',
      servicio: 'Instalación de grifo',
      cliente: 'Lucía Martínez',
      clienteRating: 5.0,
      distancia: '0.8 km',
      pago: 800,
      tiempoLlegada: '5 min',
      urgencia: 'normal',
      direccion: 'Blvd. Artigas 789',
      descripcion: 'Cambio de grifo de la cocina'
    },
  ]

  const handleAceptar = (solicitud) => {
    navigate(`/trabajador/activo/${solicitud.numero}`)
  }

  return (
    <>
      <MobileHeader title="Solicitudes" showBack={false} />
      <div className="flex flex-col h-full pb-24 overflow-y-auto">
        <div className="px-4 py-6 bg-gradient-to-br from-blue-50 to-cyan-50 border-b border-blue-100">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Tienes {solicitudes.length} solicitudes</h2>
          <p className="text-sm text-gray-600">Acepta una para comenzar a ganar</p>
        </div>

        <div className="px-4 py-6 space-y-3">
          {solicitudes.map((solicitud) => (
            <Card
              key={solicitud.id}
              className={`border-2 hover:shadow-xl transition-all ${
                solicitud.urgencia === 'alta' ? 'border-red-300 bg-red-50' : 'border-blue-200 bg-blue-50'
              }`}
            >
              <CardBody>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-gray-900 text-lg">{solicitud.servicio}</h3>
                      {solicitud.urgencia === 'alta' && (
                        <Badge variant="danger" size="sm" className="flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          Urgente
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs text-gray-600 mt-1">{solicitud.numero}</p>
                  </div>
                </div>

                <div className="mb-4 pb-4 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-400 to-violet-600 flex items-center justify-center text-white text-xs font-bold">
                        {solicitud.cliente.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">{solicitud.cliente}</p>
                        <p className="text-xs text-gray-500">Cliente</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-semibold text-gray-900">{solicitud.clienteRating}</span>
                      </div>
                      <p className="text-xs text-gray-500">Calificación</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-blue-600" />
                      {solicitud.distancia}
                    </span>
                    <span className="text-gray-600 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-blue-600" />
                      {solicitud.tiempoLlegada}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600">{solicitud.direccion}</p>
                  <p className="text-xs text-gray-700 bg-white rounded px-2 py-1 border border-gray-200">
                    "{solicitud.descripcion}"
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                  <div>
                    <p className="text-xs text-gray-600 font-medium">Tu ganancia (80%)</p>
                    <p className="text-2xl font-bold text-emerald-600">
                      ${Math.round(solicitud.pago * 0.8)}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" className="px-4 border border-gray-300 hover:bg-gray-100">
                      Descartar
                    </Button>
                    <Button
                      variant="primary"
                      size="sm"
                      className="px-4"
                      onClick={() => handleAceptar(solicitud)}
                    >
                      Aceptar
                    </Button>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>

        <div className="px-4 pb-6">
          <Card className="bg-blue-50 border-blue-200">
            <CardBody className="text-center">
              <p className="text-sm text-blue-900 font-medium">💡 Consejo</p>
              <p className="text-xs text-blue-800 mt-2">
                Responde rápido a las solicitudes. Los clientes ven tu tiempo de respuesta.
              </p>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  )
}
