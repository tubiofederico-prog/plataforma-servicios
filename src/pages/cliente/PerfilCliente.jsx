import { MobileHeader } from '@/components/mobile/MobileHeader'
import { Card, CardBody } from '@/components/ui/Card'
import { Avatar } from '@/components/ui/Avatar'
import { Button } from '@/components/ui/Button'
import { clientes } from '@/data'
import { User, Phone, Mail, MapPin, LogOut } from 'lucide-react'

export function PerfilCliente() {
  const cliente = clientes[0]

  return (
    <>
      <MobileHeader title="Mi Perfil" showBack={false} />
      <div className="px-4 py-6 pb-20 space-y-4">
        <Card>
          <CardBody>
            <div className="flex flex-col items-center text-center">
              <Avatar initials={cliente.avatar} size="xl" className="mb-4" />
              <h2 className="text-2xl font-bold text-gray-900">{cliente.nombre}</h2>
              <p className="text-gray-600">Cliente verificado</p>
              <div className="flex gap-2 mt-2">
                <span className="text-yellow-500">★★★★★</span>
                <span className="text-gray-600">{cliente.calificacionPromedio}</span>
              </div>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody className="space-y-3">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-xs text-gray-500">Email</p>
                <p className="font-medium text-gray-900">{cliente.email}</p>
              </div>
            </div>
            <div className="border-t pt-3 flex items-center gap-3">
              <Phone className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-xs text-gray-500">Teléfono</p>
                <p className="font-medium text-gray-900">{cliente.telefono}</p>
              </div>
            </div>
            <div className="border-t pt-3 flex items-center gap-3">
              <MapPin className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-xs text-gray-500">Ubicación</p>
                <p className="font-medium text-gray-900">{cliente.ciudad}</p>
              </div>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <h3 className="font-bold mb-3">Estadísticas</h3>
            <div className="grid grid-cols-3 gap-3">
              <div className="text-center">
                <p className="text-2xl font-bold text-green-600">{cliente.ordenesTotales}</p>
                <p className="text-xs text-gray-600">Pedidos</p>
              </div>
              <div className="text-center border-l border-r border-gray-200">
                <p className="text-2xl font-bold text-green-600">{cliente.calificacionPromedio}</p>
                <p className="text-xs text-gray-600">Rating</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-green-600">95%</p>
                <p className="text-xs text-gray-600">Completados</p>
              </div>
            </div>
          </CardBody>
        </Card>

        <Button variant="danger" size="block" className="flex items-center justify-center gap-2">
          <LogOut className="w-4 h-4" />
          Cerrar sesión
        </Button>
      </div>
    </>
  )
}
