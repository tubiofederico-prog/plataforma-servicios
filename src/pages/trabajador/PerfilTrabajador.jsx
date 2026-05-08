import { MobileHeader } from '@/components/mobile/MobileHeader'
import { Card, CardBody } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Avatar } from '@/components/ui/Avatar'
import { Star, Mail, Phone, MapPin, Award, Clock } from 'lucide-react'

export function PerfilTrabajador() {
  const trabajador = {
    nombre: 'Carlos Rodríguez',
    avatar: 'CR',
    categoria: 'Plomería',
    calificacion: 4.9,
    email: 'carlos.r@email.com',
    telefono: '+598 99 876 543',
    ubicacion: 'Montevideo',
    ordenesCompletadas: 156,
    tiempoRespuesta: '4.3 min'
  }

  return (
    <>
      <MobileHeader title="Mi Perfil" showBack={false} />
      <div className="flex flex-col h-full overflow-y-auto pb-20 md:pb-16">
        <div className="px-4 py-6 space-y-4">
          {/* Header */}
          <div className="text-center mb-4">
            <Avatar initials={trabajador.avatar} size="xl" className="mx-auto mb-3" />
            <h2 className="text-2xl font-bold text-gray-900">{trabajador.nombre}</h2>
            <p className="text-green-600 font-medium mt-1">{trabajador.categoria}</p>
            <div className="flex items-center justify-center gap-1 mt-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(trabajador.calificacion)
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
              <span className="text-sm font-semibold ml-1">{trabajador.calificacion}</span>
            </div>
          </div>

          {/* Contacto */}
          <Card>
            <CardBody className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-green-600" />
                <div>
                  <p className="text-xs text-gray-600">Email</p>
                  <p className="font-semibold text-gray-900">{trabajador.email}</p>
                </div>
              </div>
              <div className="border-t pt-3 flex items-center gap-3">
                <Phone className="w-5 h-5 text-green-600" />
                <div>
                  <p className="text-xs text-gray-600">Teléfono</p>
                  <p className="font-semibold text-gray-900">{trabajador.telefono}</p>
                </div>
              </div>
              <div className="border-t pt-3 flex items-center gap-3">
                <MapPin className="w-5 h-5 text-green-600" />
                <div>
                  <p className="text-xs text-gray-600">Ubicación</p>
                  <p className="font-semibold text-gray-900">{trabajador.ubicacion}</p>
                </div>
              </div>
            </CardBody>
          </Card>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-3">
            <Card>
              <CardBody className="text-center">
                <Award className="w-6 h-6 text-green-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-green-600">{trabajador.ordenesCompletadas}</p>
                <p className="text-xs text-gray-600 mt-1">Servicios</p>
              </CardBody>
            </Card>
            <Card>
              <CardBody className="text-center">
                <Clock className="w-6 h-6 text-green-600 mx-auto mb-2" />
                <p className="text-lg font-bold text-green-600">{trabajador.tiempoRespuesta}</p>
                <p className="text-xs text-gray-600 mt-1">Respuesta</p>
              </CardBody>
            </Card>
          </div>

          {/* Actions */}
          <Button variant="ghost" size="block" className="border border-gray-300 mt-4">
            Cerrar Sesión
          </Button>
        </div>
      </div>
    </>
  )
}
