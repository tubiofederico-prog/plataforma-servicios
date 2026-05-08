import { MobileHeader } from '@/components/mobile/MobileHeader'
import { Card, CardBody } from '@/components/ui/Card'
import { TrendingUp, DollarSign, Calendar, Download } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function GananciasTrabajador() {
  const ganancias = {
    hoy: 2400,
    semana: 12800,
    mes: 52300,
    total: 156400
  }

  const transacciones = [
    { id: 1, fecha: '08/05/2025', concepto: 'Reparación de inodoro', monto: 960, comision: 240 },
    { id: 2, fecha: '07/05/2025', concepto: 'Destape de cañería', monto: 1200, comision: 300 },
    { id: 3, fecha: '06/05/2025', concepto: 'Instalación de grifo', monto: 640, comision: 160 },
    { id: 4, fecha: '05/05/2025', concepto: 'Reparación de tuberías', monto: 800, comision: 200 },
  ]

  return (
    <>
      <MobileHeader title="Mis Ganancias" showBack={false} />

      <div className="flex flex-col h-full overflow-y-auto pb-20 md:pb-16">
        {/* Resumen de Ganancias */}
        <div className="px-4 py-6 space-y-3">
          {/* Hoy */}
          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
            <CardBody>
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs text-gray-600 font-medium uppercase">Hoy</p>
                  <p className="text-3xl font-bold text-green-600 mt-1">${ganancias.hoy}</p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-green-600 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardBody>
          </Card>

          {/* Grid: Semana y Mes */}
          <div className="grid grid-cols-2 gap-3">
            <Card className="border-blue-200 bg-blue-50">
              <CardBody className="text-center">
                <p className="text-xs text-gray-600 font-medium uppercase">Esta Semana</p>
                <p className="text-2xl font-bold text-blue-600 mt-1">${ganancias.semana}</p>
              </CardBody>
            </Card>

            <Card className="border-purple-200 bg-purple-50">
              <CardBody className="text-center">
                <p className="text-xs text-gray-600 font-medium uppercase">Este Mes</p>
                <p className="text-2xl font-bold text-purple-600 mt-1">${ganancias.mes}</p>
              </CardBody>
            </Card>
          </div>

          {/* Total */}
          <Card className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
            <CardBody>
              <p className="text-xs font-medium uppercase opacity-90">Total Ganado</p>
              <div className="flex items-end justify-between mt-2">
                <p className="text-3xl font-bold">${ganancias.total}</p>
                <p className="text-xs opacity-75">desde el inicio</p>
              </div>
            </CardBody>
          </Card>
        </div>

        {/* Detalles de Transacciones */}
        <div className="px-4 pb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide">Transacciones Recientes</h3>
            <Button variant="ghost" size="sm" className="text-green-600 hover:text-green-700 flex items-center gap-1 px-2">
              <Download className="w-3.5 h-3.5" />
              Descargar
            </Button>
          </div>

          <div className="space-y-2">
            {transacciones.map((tx) => (
              <Card key={tx.id} className="border-green-100 hover:shadow-md transition-all">
                <CardBody>
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900 text-sm">{tx.concepto}</p>
                      <p className="text-xs text-gray-500 mt-1">{tx.fecha}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="font-bold text-green-600">${tx.monto}</p>
                      <p className="text-xs text-gray-500 mt-1">-${tx.comision} comisión</p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>

          {/* Info Footer */}
          <Card className="mt-4 bg-green-50 border-green-200">
            <CardBody className="text-center">
              <p className="text-xs text-green-900 font-medium">💡 Comisión de Plataforma</p>
              <p className="text-xs text-green-700 mt-2">
                Retenemos el 20% de cada servicio como comisión. El 80% es tuyo.
              </p>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  )
}
