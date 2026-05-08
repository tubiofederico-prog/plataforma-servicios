import { MobileHeader } from '@/components/mobile/MobileHeader'
import { Card, CardBody } from '@/components/ui/Card'
import { Avatar } from '@/components/ui/Avatar'
import { Button } from '@/components/ui/Button'
import { User, Phone, Mail, MapPin, LogOut } from 'lucide-react'

export function PerfilCliente() {
  const cliente = {
    nombre: 'Valentina Torres',
    avatar: 'VT',
    email: 'valentina.t@gmail.com',
    telefono: '+598 91 234 567',
    ciudad: 'Montevideo',
    ordenesTotales: 23,
    calificacion: 4.8
  }

  return (
    <>
      <MobileHeader title="Mi Perfil" showBack={false} />
      <div className="flex flex-col h-full overflow-y-auto pb-20 md:pb-16">
        <div className="px-4 py-6 space-y-4">
          {/* Avatar y nombre */}
          <div className="text-center">
            <Avatar initials={cliente.avatar} size="xl" className="mx-auto mb-3" />
            <h2 className="text-2xl font-bold text-gray-900">{cliente.nombre}</h2>
            <p className="text-gray-600 mt-1">Cliente verificado</p>
          </div>

          {/* Contacto */}
          <Card>
            <CardBody className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-green-600" />
                <div>
                  <p className="text-xs text-gray-600">Email</p>
                  <p className="font-medium text-gray-900">{cliente.email}</p>
                </div>
              </div>
              <div className="border-t pt-3 flex items-center gap-3">
                <Phone className="w-5 h-5 text-green-600" />
                <div>
                  <p className="text-xs text-gray-600">Teléfono</p>
                  <p className="font-medium text-gray-900">{cliente.telefono}</p>
                </div>
              </div>
              <div className="border-t pt-3 flex items-center gap-3">
                <MapPin className="w-5 h-5 text-green-600" />
                <div>
                  <p className="text-xs text-gray-600">Ubicación</p>
                  <p className="font-medium text-gray-900">{cliente.ciudad}</p>
                </div>
              </div>
            </CardBody>
          </Card>

          {/* Estadísticas */}
          <div className="grid grid-cols-2 gap-3">
            <Card>
              <CardBody className="text-center">
                <p className="text-2xl font-bold text-green-600">{cliente.ordenesTotales}</p>
                <p className="text-xs text-gray-600 mt-1">Pedidos</p>
              </CardBody>
            </Card>
            <Card>
              <CardBody className="text-center">
                <p className="text-2xl font-bold text-green-600">{cliente.calificacion}</p>
                <p className="text-xs text-gray-600 mt-1">Calificación</p>
              </CardBody>
            </Card>
          </div>

          {/* Botón cerrar sesión */}
          <Button variant="ghost" size="block" className="border border-gray-300 flex items-center justify-center gap-2 mt-4">
            <LogOut className="w-4 h-4" />
            Cerrar sesión
          </Button>
        </div>
      </div>
    </>
  )
}
