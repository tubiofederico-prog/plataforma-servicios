import { MobileHeader } from '@/components/mobile/MobileHeader'
import { Card, CardBody } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Star, MapPin, Calendar } from 'lucide-react'

export function HistorialTrabajador() {
  const servicios = [
    {
      id: 1,
      servicio: 'Reparación de inodoro',
      cliente: 'Valentina Torres',
      fecha: '08/05/2025',
      ubicacion: 'Av. 18 de Julio 1234',
      monto: 1200,
      calificacion: 5.0,
      estado: 'completado'
    },
    {
      id: 2,
      servicio: 'Destape de cañería',
      cliente: 'Martín García',
      fecha: '07/05/2025',
      ubicacion: 'Rambla Francia 450',
      monto: 1500,
      calificacion: 4.8,
      estado: 'completado'
    },
    {
      id: 3,
      servicio: 'Instalación de grifo',
      cliente: 'Lucía Martínez',
      fecha: '06/05/2025',
      ubicacion: 'Blvd. Artigas 789',
      monto: 800,
      calificacion: 5.0,
      estado: 'completado'
    },
    {
      id: 4,
      servicio: 'Reparación de tuberías',
      cliente: 'Diego Suárez',
      fecha: '05/05/2025',
      ubicacion: 'Calle 19 de Agosto 500',
      monto: 1000,
      calificacion: 4.6,
      estado: 'completado'
    },
  ]

  return (
    <>
      <MobileHeader title="Historial de Servicios" showBack={false} />

      <div className="flex flex-col h-full overflow-y-auto pb-20 md:pb-16">
        <div className="px-4 py-6 space-y-3">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide">
              {servicios.length} servicios completados
            </h3>
          </div>

          {servicios.map((svc) => (
            <Card key={svc.id} className="border-green-100 hover:shadow-md transition-all">
              <CardBody>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 text-sm">{svc.servicio}</h4>
                    <p className="text-xs text-gray-600 mt-1">Cliente: {svc.cliente}</p>
                  </div>
                  <Badge variant="success" size="sm">
                    Completado
                  </Badge>
                </div>

                <div className="space-y-2 border-t border-gray-200 pt-3">
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <Calendar className="w-3.5 h-3.5" />
                    {svc.fecha}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <MapPin className="w-3.5 h-3.5" />
                    {svc.ubicacion}
                  </div>
                </div>

                <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-200">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold text-gray-900">{svc.calificacion}</span>
                  </div>
                  <span className="font-bold text-green-600">${svc.monto}</span>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </>
  )
}
