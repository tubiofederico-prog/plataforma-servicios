import { useParams, useNavigate } from 'react-router-dom'
import { MobileHeader } from '@/components/mobile/MobileHeader'
import { Button } from '@/components/ui/Button'
import { Card, CardBody } from '@/components/ui/Card'
import { Textarea } from '@/components/ui/Input'
import { StarRating } from '@/components/ui/StarRating'
import { useState } from 'react'
import { Avatar } from '@/components/ui/Avatar'
import { ordenes, trabajadores } from '@/data'

export function CalificacionServicio() {
  const { ordenId } = useParams()
  const navigate = useNavigate()
  const [rating, setRating] = useState(0)
  const orden = ordenes.find(o => o.id === ordenId)
  const trabajador = trabajadores.find(t => t.id === orden?.trabajadorId)

  return (
    <>
      <MobileHeader title="Calificar servicio" showBack={true} />
      <div className="px-4 py-6 pb-32 space-y-4">
        {trabajador && (
          <Card>
            <CardBody>
              <div className="flex items-center gap-3">
                <Avatar initials={trabajador.avatar} size="lg" />
                <div>
                  <h3 className="font-bold">{trabajador.nombre}</h3>
                  <p className="text-sm text-gray-600">Profesional en {trabajador.categorias[0]}</p>
                </div>
              </div>
            </CardBody>
          </Card>
        )}

        <Card>
          <CardBody className="text-center">
            <p className="text-sm text-gray-600 mb-4">¿Cómo fue el servicio?</p>
            <StarRating rating={rating} onRate={setRating} size="lg" interactive={true} className="justify-center" />
          </CardBody>
        </Card>

        <Textarea label="Comentario (opcional)" placeholder="Cuéntanos tu experiencia..." />

        <Button variant="primary" size="block" onClick={() => navigate('/cliente')}>
          Completar calificación
        </Button>
      </div>
    </>
  )
}
