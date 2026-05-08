import { kpiData } from '@/data'
import { Card, CardBody } from '@/components/ui/Card'
import { BarChart3, TrendingUp } from 'lucide-react'

export function DashboardAdmin() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardBody className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <BarChart3 className="w-6 h-6 text-blue-600" />
            </div>
            <p className="text-3xl font-bold text-gray-900">{kpiData.ordenesHoy}</p>
            <p className="text-sm text-gray-600 mt-1">Órdenes hoy</p>
          </CardBody>
        </Card>

        <Card>
          <CardBody className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <p className="text-3xl font-bold text-gray-900">${(kpiData.ingresosMes / 1000).toFixed(1)}k</p>
            <p className="text-sm text-gray-600 mt-1">Ingresos mes</p>
          </CardBody>
        </Card>

        <Card>
          <CardBody className="text-center">
            <p className="text-3xl font-bold text-gray-900">{kpiData.trabajadoresActivos}</p>
            <p className="text-sm text-gray-600 mt-1">Trabajadores</p>
          </CardBody>
        </Card>

        <Card>
          <CardBody className="text-center">
            <p className="text-3xl font-bold text-gray-900">{kpiData.clientesRegistrados}</p>
            <p className="text-sm text-gray-600 mt-1">Clientes</p>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}
