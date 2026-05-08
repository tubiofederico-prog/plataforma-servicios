import { MobileHeader } from '@/components/mobile/MobileHeader'
import { Card, CardBody } from '@/components/ui/Card'
import { TrendingUp, DollarSign, Download } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function GananciasTrabajador() {
  const stats = [
    { label: 'Hoy', value: '$2,400', color: 'green' },
    { label: 'Esta Semana', value: '$12,800', color: 'green' },
    { label: 'Este Mes', value: '$52,300', color: 'green' },
  ]

  const transacciones = [
    { id: 1, fecha: '08/05/2025', servicio: 'Reparación de inodoro', ganancia: 960 },
    { id: 2, fecha: '07/05/2025', servicio: 'Destape de cañería', ganancia: 1200 },
    { id: 3, fecha: '06/05/2025', servicio: 'Instalación de grifo', ganancia: 640 },
    { id: 4, fecha: '05/05/2025', servicio: 'Reparación de tuberías', ganancia: 800 },
  ]

  return (
    <>
      <MobileHeader title="Mis Ganancias" showBack={false} />
      <div className="flex flex-col h-full overflow-y-auto pb-20 md:pb-16">
        <div className="px-4 py-6 space-y-4">
          {/* Stats Cards */}
          <div className="space-y-3">
            {stats.map((stat) => (
              <Card key={stat.label} className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                <CardBody>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-600 uppercase">{stat.label}</p>
                      <p className="text-2xl font-bold text-green-600 mt-1">{stat.value}</p>
                    </div>
                    <TrendingUp className="w-8 h-8 text-green-600" />
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>

          {/* Total Ganado */}
          <Card className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
            <CardBody>
              <p className="text-sm font-medium opacity-90">Total Ganado</p>
              <p className="text-3xl font-bold mt-2">$156,400</p>
              <p className="text-xs opacity-75 mt-1">desde el inicio</p>
            </CardBody>
          </Card>

          {/* Transacciones */}
          <div className="mt-6">
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-3">
              Transacciones Recientes
            </h3>
            <div className="space-y-2">
              {transacciones.map((tx) => (
                <Card key={tx.id} className="border-green-100">
                  <CardBody>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{tx.servicio}</p>
                        <p className="text-xs text-gray-500 mt-1">{tx.fecha}</p>
                      </div>
                      <p className="font-bold text-green-600">${tx.ganancia}</p>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>

          {/* Info */}
          <Card className="bg-green-50 border-green-200 mt-4">
            <CardBody className="text-center">
              <p className="text-xs text-green-900 font-medium">Comisión: 20% (el 80% es tuyo)</p>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  )
}
