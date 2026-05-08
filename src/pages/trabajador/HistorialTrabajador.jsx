import { MobileHeader } from '@/components/mobile/MobileHeader'
import { Card, CardBody } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Star, MapPin } from 'lucide-react'

export function HistorialTrabajador() {
  const servicios = [
    {
      id: 1,
      servicio: 'Reparación de inodoro',
      cliente: 'Valentina Torres',
      fecha: '08/05/2025',
      calificacion: 5.0,
      monto: 1200
    },
    {
      id: 2,
      servicio: 'Destape de cañería',
      cliente: 'Martín García',
      fecha: '07/05/2025',
      calificacion: 4.8,
      monto: 1500
    },
    {
      id: 3,
      servicio: 'Instalación de grifo',
      cliente: 'Lucía Martínez',
      fecha: '06/05/2025',
      calificacion: 5.0,
      monto: 800
    },
  ]

  return (
    <>
      <MobileHeader title="Historial" showBack={false} />
      <div className="flex flex-col h-full overflow-y-auto pb-20 md:pb-16">
        <div className="px-4 py-6 space-y-3">
          <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide">
            {servicios.length} servicios completados
          </h3>

          {servicios.map((svc) => (
            <Card key={svc.id} className="border-green-100">
              <CardBody>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 text-sm">{svc.servicio}</h4>
                    <p className="text-xs text-gray-600 mt-1">{svc.cliente}</p>
                  </div>
                  <Badge variant="success" size="sm">
                    Completado
                  </Badge>
                </div>
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-200">
                  <p className="text-xs text-gray-600">{svc.fecha}</p>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold text-gray-900">{svc.calificacion}</span>
                    <span className="text-green-600 font-bold ml-2">${svc.monto}</span>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </>
  )
}
