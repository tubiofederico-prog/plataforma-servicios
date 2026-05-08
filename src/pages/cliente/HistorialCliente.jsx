import { MobileHeader } from '@/components/mobile/MobileHeader'
import { Card, CardBody } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { ordenes, servicios, trabajadores } from '@/data'
import { formatCurrency, formatDate } from '@/utils/format'
import { useNavigate } from 'react-router-dom'

export function HistorialCliente() {
  const navigate = useNavigate()
  const clienteOrdenes = ordenes.filter(o => o.clienteId === 1).reverse()

  return (
    <>
      <MobileHeader title="Mis Pedidos" showBack={false} />
      <div className="px-4 py-6 pb-20 space-y-3">
        {clienteOrdenes.map(orden => {
          const servicio = servicios.find(s => s.id === orden.servicioId)
          const trabajador = trabajadores.find(t => t.id === orden.trabajadorId)
          const statusColor = { completado: 'success', cancelado: 'danger', en_progreso: 'processing' }[orden.estado] || 'info'
          
          return (
            <Card key={orden.id} onClick={() => navigate(`/cliente/seguimiento/${orden.id}`)} className="cursor-pointer hover:shadow-md">
              <CardBody>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-900">{servicio?.nombre}</h3>
                  <Badge variant={statusColor === 'success' ? 'success' : statusColor === 'danger' ? 'danger' : 'info'} size="sm">
                    {orden.estado}
                  </Badge>
                </div>
                <p className="text-xs text-gray-500 mb-2">Trabajador: {trabajador?.nombre}</p>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">{formatDate(orden.fechaSolicitud)}</span>
                  <span className="font-bold text-violet-600">{formatCurrency(orden.precio)}</span>
                </div>
              </CardBody>
            </Card>
          )
        })}
      </div>
    </>
  )
}
