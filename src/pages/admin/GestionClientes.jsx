import { clientes } from '@/data'
import { Card, CardBody } from '@/components/ui/Card'

export function GestionClientes() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Gestión de Clientes</h1>
      <Card>
        <CardBody>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-semibold">Nombre</th>
                  <th className="text-left py-3 px-4 font-semibold">Email</th>
                  <th className="text-left py-3 px-4 font-semibold">Pedidos</th>
                  <th className="text-left py-3 px-4 font-semibold">Estado</th>
                </tr>
              </thead>
              <tbody>
                {clientes.slice(0, 5).map(cliente => (
                  <tr key={cliente.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4">{cliente.nombre}</td>
                    <td className="py-3 px-4 text-sm text-gray-600">{cliente.email}</td>
                    <td className="py-3 px-4">{cliente.ordenesTotales}</td>
                    <td className="py-3 px-4"><span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">Activo</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}
