import { useNavigate } from 'react-router-dom'
import { MobileHeader } from '@/components/mobile/MobileHeader'
import { Button } from '@/components/ui/Button'
import { Card, CardBody } from '@/components/ui/Card'
import { Textarea } from '@/components/ui/Input'
import { StarRating } from '@/components/ui/StarRating'
import { useState } from 'react'
import { Avatar } from '@/components/ui/Avatar'

export function CalificacionServicio() {
  const navigate = useNavigate()
  const [rating, setRating] = useState(0)

  const trabajador = {
    nombre: 'Carlos Rodríguez',
    avatar: 'CR'
  }

  return (
    <>
      <MobileHeader title="Calificar servicio" showBack={true} />
      <div className="flex flex-col h-full overflow-y-auto pb-20 md:pb-16">
        <div className="px-4 py-6 space-y-4">
          {/* Trabajador Info */}
          <Card>
            <CardBody>
              <div className="flex items-center gap-3">
                <Avatar initials={trabajador.avatar} size="lg" />
                <div>
                  <h3 className="font-bold">{trabajador.nombre}</h3>
                  <p className="text-sm text-gray-600">Plomero profesional</p>
                </div>
              </div>
            </CardBody>
          </Card>

          {/* Rating */}
          <Card>
            <CardBody className="text-center">
              <p className="text-sm text-gray-600 mb-4">¿Cómo fue el servicio?</p>
              <div className="flex justify-center">
                <StarRating rating={rating} onRate={setRating} size="lg" interactive={true} />
              </div>
            </CardBody>
          </Card>

          {/* Comentario */}
          <Textarea label="Comentario (opcional)" placeholder="Cuéntanos tu experiencia..." rows={4} />

          {/* Botón */}
          <Button variant="primary" size="block" onClick={() => navigate('/cliente')}>
            Completar calificación
          </Button>
        </div>
      </div>
    </>
  )
}
