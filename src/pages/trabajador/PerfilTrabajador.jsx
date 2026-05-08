import { useNavigate } from 'react-router-dom'
import { MobileHeader } from '@/components/mobile/MobileHeader'
import { Card, CardBody } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Avatar } from '@/components/ui/Avatar'
import { Star, Mail, Phone, MapPin, Award, Clock } from 'lucide-react'

export function PerfilTrabajador() {
  const navigate = useNavigate()

  const trabajador = {
    nombre: 'Carlos Rodríguez',
    avatar: 'CR',
    categoria: 'Plomería',
    calificacion: 4.9,
    ordenesCompletadas: 156,
    distancia: '2.1 km',
    tiempoRespuesta: '4.3 min',
    email: 'carlos.rodriguez@email.com',
    telefono: '+598 99 876 543',
    ubicacion: 'Montevideo, Uruguay',
    descripcion: 'Plomero profesional con 10 años de experiencia. Especialista en reparación y mantenimiento de sistemas de plomería.'
  }

  return (
    <>
      <MobileHeader title="Mi Perfil" showBack={false} />

      <div className="flex flex-col h-full overflow-y-auto pb-20 md:pb-16">
        {/* Header with Avatar */}
        <div className="px-4 pt-6 pb-6 bg-gradient-to-br from-green-600 to-emerald-600 text-white rounded-b-3xl">
          <div className="flex items-start gap-4 mb-4">
            <Avatar initials={trabajador.avatar} size="xl" />
            <div className="flex-1">
              <h2 className="text-2xl font-bold">{trabajador.nombre}</h2>
              <p className="text-green-100 text-sm mt-1">{trabajador.categoria}</p>
              <div className="flex items-center gap-1 mt-2">
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
          </div>
        </div>

        {/* Contact Info */}
        <div className="px-4 py-6 space-y-3">
          <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-3">Información de Contacto</h3>

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
          <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mt-6 mb-3">Estadísticas</h3>

          <div className="grid grid-cols-2 gap-3">
            <Card>
              <CardBody className="text-center">
                <Award className="w-6 h-6 text-green-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-green-600">{trabajador.ordenesCompletadas}</p>
                <p className="text-xs text-gray-600 mt-1 font-medium">Servicios Completados</p>
              </CardBody>
            </Card>

            <Card>
              <CardBody className="text-center">
                <Clock className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-blue-600">{trabajador.tiempoRespuesta}</p>
                <p className="text-xs text-gray-600 mt-1 font-medium">Tiempo de Respuesta</p>
              </CardBody>
            </Card>
          </div>

          {/* Description */}
          <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mt-6 mb-3">Acerca de Mi</h3>

          <Card>
            <CardBody>
              <p className="text-sm text-gray-700 leading-relaxed">{trabajador.descripcion}</p>
            </CardBody>
          </Card>

          {/* Actions */}
          <div className="space-y-2 mt-6">
            <Button variant="primary" size="block">
              Editar Perfil
            </Button>
            <Button variant="ghost" size="block" className="border border-gray-300">
              Cerrar Sesión
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
