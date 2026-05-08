import { useParams, useNavigate } from 'react-router-dom'
import { Phone, MessageSquare, Clock, DollarSign } from 'lucide-react'
import { MobileHeader } from '@/components/mobile/MobileHeader'
import { Button } from '@/components/ui/Button'
import { Card, CardBody } from '@/components/ui/Card'
import { Avatar } from '@/components/ui/Avatar'
import { StatusBadge } from '@/components/ui/StatusBadge'
import { MapPlaceholder } from '@/components/shared/MapPlaceholder'
import { ordenes, trabajadores, servicios } from '@/data'
import { formatCurrency } from '@/utils/format'
import { ESTADOS_ORDEN } from '@/utils/constants'

export function SeguimientoOrden() {
  const { ordenId } = useParams()
  const navigate = useNavigate()
  const orden = ordenes.find((o) => o.id === ordenId)
  const trabajador = orden?.trabajadorId ? trabajadores.find((t) => t.id === orden.trabajadorId) : null
  const servicio = servicios.find((s) => s.id === orden?.servicioId)
  const estadoConfig = ESTADOS_ORDEN[orden?.estado || 'pendiente']

  if (!orden) return <div>Orden no encontrada</div>

  return (
    <>
      <MobileHeader title="Seguimiento" showBack={true} />
      <div className="px-4 py-6 pb-32 space-y-4">
        {/* Map */}
        <MapPlaceholder />

        {/* Status */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-500">Estado</p>
            <StatusBadge label={estadoConfig.label} status={orden.estado} />
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-500">Orden</p>
            <p className="font-semibold text-gray-900">{orden.id}</p>
          </div>
        </div>

        {/* Worker info */}
        {trabajador && (
          <Card>
            <CardBody>
              <div className="flex items-start gap-3">
                <Avatar initials={trabajador.avatar} size="lg" />
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900">{trabajador.nombre}</h3>
                  <p className="text-sm text-gray-600">{trabajador.categorias.join(', ')}</p>
                  <div className="flex gap-2 mt-2">
                    <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded">★ {trabajador.calificacion}</span>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        )}

        {/* Service details */}
        <Card>
          <CardBody>
            <h4 className="font-semibold mb-3">Detalles del servicio</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Servicio</span>
                <span className="font-medium">{servicio?.nombre}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Dirección</span>
                <span className="font-medium text-right">{orden.direccion}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Costo total</span>
                <span className="font-bold text-violet-600">{formatCurrency(orden.precio)}</span>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Action buttons */}
        <div className="space-y-2">
          <Button variant="primary" size="block" className="flex items-center justify-center gap-2">
            <Phone className="w-4 h-4" />
            Llamar
          </Button>
          <Button variant="secondary" size="block" className="flex items-center justify-center gap-2">
            <MessageSquare className="w-4 h-4" />
            Enviar mensaje
          </Button>
        </div>

        {/* Complete button - if in progress */}
        {orden.estado === 'en_progreso' && (
          <Button variant="ghost" size="block" onClick={() => navigate(`/cliente/pago/${orden.id}`)}>
            Marcar como completado
          </Button>
        )}
      </div>
    </>
  )
}
