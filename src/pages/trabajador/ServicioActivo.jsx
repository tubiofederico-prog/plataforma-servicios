import { useNavigate } from 'react-router-dom'
import { MobileHeader } from '@/components/mobile/MobileHeader'
import { Card, CardBody } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Avatar } from '@/components/ui/Avatar'
import { StatusBadge } from '@/components/ui/StatusBadge'
import { MapPlaceholder } from '@/components/shared/MapPlaceholder'
import { Phone, MessageSquare, Clock, DollarSign, MapPin, CheckCircle2, AlertCircle } from 'lucide-react'

export function ServicioActivo() {
  const navigate = useNavigate()

  const orden = {
    id: '#ORD-2025-0050',
    estado: 'en_progreso',
    servicio: 'Reparación de inodoro',
    categoria: 'Plomería',
    direccion: 'Av. 18 de Julio 1234, Apto 5B',
    precio: 1200,
    tiempoInicio: '10:15',
    tiempoTranscurrido: '45 min'
  }

  const cliente = {
    nombre: 'Valentina Torres',
    avatar: 'VT',
    rating: 4.8,
    ordenes: 12,
    telefono: '+598 98 765 432'
  }

  const timeline = [
    { estado: 'Orden confirmada', hora: '10:00', completado: true },
    { estado: 'Llegada al lugar', hora: '10:12', completado: true },
    { estado: 'Servicio en progreso', hora: '10:15', completado: true },
    { estado: 'Servicio completado', hora: '--:--', completado: false },
  ]

  return (
    <>
      <MobileHeader title="Servicio Activo" showBack={true} />
      <div className="flex flex-col h-full overflow-y-auto pb-20 md:pb-16">
        {/* Map */}
        <div className="px-4 pt-4 pb-4">
          <MapPlaceholder location="Dirección del cliente" />
        </div>

        {/* Status Card */}
        <div className="px-4 mb-6">
          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200">
            <CardBody>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <StatusBadge label="En progreso" status="processing" size="md" />
                  <p className="text-2xl font-bold text-gray-900 mt-2">{orden.tiempoTranscurrido}</p>
                  <p className="text-sm text-gray-600">Tiempo transcurrido</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500 mb-1">Orden ID</p>
                  <p className="font-bold text-gray-900 text-sm">{orden.id}</p>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>

        {/* Cliente Info */}
        <div className="px-4 mb-6">
          <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-3">Cliente</h3>
          <Card className="border-green-200 hover:shadow-lg transition-all">
            <CardBody>
              <div className="flex items-start gap-4">
                <Avatar initials={cliente.avatar} size="lg" />
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 text-lg">{cliente.nombre}</h4>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="flex items-center gap-1 bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs font-semibold">
                      ★ {cliente.rating}
                    </span>
                    <span className="text-xs text-gray-500">{cliente.ordenes} servicios</span>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>

        {/* Timeline */}
        <div className="px-4 mb-6">
          <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-3">Progreso</h3>
          <div className="space-y-0">
            {timeline.map((item, idx) => (
              <div key={idx} className="flex gap-4 pb-4">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-3 h-3 rounded-full border-2 ${
                      item.completado ? 'bg-green-500 border-green-500' : 'bg-gray-200 border-gray-300'
                    }`}
                  />
                  {idx < timeline.length - 1 && (
                    <div className={`w-0.5 h-12 ${item.completado ? 'bg-green-500' : 'bg-gray-200'}`} />
                  )}
                </div>
                <div className={`pt-0.5 ${item.completado ? 'opacity-100' : 'opacity-60'}`}>
                  <p className={`text-sm font-semibold ${item.completado ? 'text-gray-900' : 'text-gray-600'}`}>
                    {item.estado}
                  </p>
                  <p className="text-xs text-gray-500">{item.hora}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Service Details */}
        <div className="px-4 mb-6">
          <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-3">Detalles</h3>
          <Card>
            <CardBody className="space-y-3">
              <div className="flex items-start justify-between">
                <span className="text-gray-600 flex items-center gap-2">
                  <span className="text-lg">🔧</span>
                  Servicio
                </span>
                <span className="font-semibold text-gray-900">{orden.servicio}</span>
              </div>
              <div className="border-t pt-3 flex items-start justify-between">
                <span className="text-gray-600 flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Dirección
                </span>
                <span className="font-semibold text-gray-900 text-right text-sm">{orden.direccion}</span>
              </div>
              <div className="border-t pt-3 flex items-start justify-between">
                <span className="text-gray-600 flex items-center gap-2">
                  <DollarSign className="w-4 h-4" />
                  Monto
                </span>
                <span className="font-bold text-green-600 text-lg">${orden.precio}</span>
              </div>
            </CardBody>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="px-4 fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4 space-y-2">
          <div className="max-w-md mx-auto">
            <Button variant="primary" size="block" className="flex items-center justify-center gap-2 mb-2">
              <Phone className="w-4 h-4" />
              Llamar a {cliente.nombre.split(' ')[0]}
            </Button>
            <Button variant="secondary" size="block" className="flex items-center justify-center gap-2">
              <MessageSquare className="w-4 h-4" />
              Enviar mensaje
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
