import { MobileHeader } from '@/components/mobile/MobileHeader'
import { Card, CardBody } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Avatar } from '@/components/ui/Avatar'
import { StatusBadge } from '@/components/ui/StatusBadge'
import { MapPlaceholder } from '@/components/shared/MapPlaceholder'
import { Phone, MessageSquare, DollarSign, MapPin } from 'lucide-react'

export function ServicioActivo() {
  const orden = {
    id: '#ORD-2025-0050',
    servicio: 'Reparación de inodoro',
    direccion: 'Av. 18 de Julio 1234',
    precio: 1200,
    tiempoTranscurrido: '45 min'
  }

  const cliente = {
    nombre: 'Valentina Torres',
    avatar: 'VT',
    rating: 4.8
  }

  return (
    <>
      <MobileHeader title="Servicio Activo" showBack={true} />
      <div className="flex flex-col h-full overflow-y-auto pb-20 md:pb-16">
        {/* Mapa */}
        <div className="px-4 pt-4 pb-4">
          <MapPlaceholder location={orden.direccion} />
        </div>

        {/* Estado */}
        <div className="px-4 mb-6">
          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200">
            <CardBody>
              <StatusBadge label="En progreso" status="processing" size="md" />
              <p className="text-2xl font-bold text-gray-900 mt-3">{orden.tiempoTranscurrido}</p>
              <p className="text-sm text-gray-600">Tiempo transcurrido</p>
            </CardBody>
          </Card>
        </div>

        {/* Cliente */}
        <div className="px-4 mb-6">
          <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-3">Cliente</h3>
          <Card>
            <CardBody>
              <div className="flex items-start gap-3">
                <Avatar initials={cliente.avatar} size="lg" />
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900">{cliente.nombre}</h4>
                  <p className="text-xs text-gray-600 mt-1">★ {cliente.rating}</p>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>

        {/* Detalles */}
        <div className="px-4 mb-6">
          <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-3">Detalles</h3>
          <Card>
            <CardBody className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Servicio</span>
                <span className="font-semibold text-gray-900">{orden.servicio}</span>
              </div>
              <div className="border-t pt-3 flex justify-between">
                <span className="text-gray-600 flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Dirección
                </span>
                <span className="font-semibold text-gray-900 text-sm">{orden.direccion}</span>
              </div>
              <div className="border-t pt-3 flex justify-between">
                <span className="text-gray-600 flex items-center gap-2">
                  <DollarSign className="w-4 h-4" />
                  Monto
                </span>
                <span className="font-bold text-green-600">${orden.precio}</span>
              </div>
            </CardBody>
          </Card>
        </div>

        {/* Botones de Acción */}
        <div className="px-4 fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4">
          <div className="space-y-2 max-w-md mx-auto">
            <Button variant="primary" size="block" className="flex items-center justify-center gap-2">
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
