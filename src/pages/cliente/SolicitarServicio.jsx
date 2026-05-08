import { useParams, useNavigate } from 'react-router-dom'
import { MobileHeader } from '@/components/mobile/MobileHeader'
import { Button } from '@/components/ui/Button'
import { Card, CardBody } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { servicios, categorias } from '@/data'
import { formatCurrency } from '@/utils/format'

export function SolicitarServicio() {
  const { servicioId } = useParams()
  const navigate = useNavigate()
  const servicio = servicios.find((s) => s.id === parseInt(servicioId))
  const categoria = categorias.find((c) => c.id === servicio?.categoriaId)

  if (!servicio) return <div>Servicio no encontrado</div>

  const handleSolicitar = () => {
    navigate('/cliente/asignando', { state: { servicio } })
  }

  return (
    <>
      <MobileHeader title={servicio.nombre} showBack={true} />
      <div className="px-4 py-6 pb-32 space-y-4">
        <Card>
          <CardBody>
            <h3 className="font-bold text-lg mb-2">{servicio.nombre}</h3>
            <p className="text-gray-600 text-sm mb-4">{servicio.descripcion}</p>
            <div className="space-y-2 text-sm">
              <p>
                <span className="text-gray-600">Categoría:</span> <span className="font-medium">{categoria?.nombre}</span>
              </p>
              <p>
                <span className="text-gray-600">Duración:</span> <span className="font-medium">{servicio.duracionEstimada} minutos</span>
              </p>
              <p>
                <span className="text-gray-600">Precio:</span> <span className="font-bold text-green-600">{formatCurrency(servicio.precio)}</span>
              </p>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <h4 className="font-semibold mb-4">Detalles de la solicitud</h4>
            <Input label="Dirección" placeholder="Tu dirección completa" required />
            <Input label="Descripción del problema" placeholder="Cuéntanos más detalles" className="mt-4" required />
            <Input label="Fecha deseada" type="date" className="mt-4" required />
          </CardBody>
        </Card>

        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200">
          <div className="max-w-md mx-auto">
            <div className="flex items-center justify-between mb-3 font-semibold">
              <span>Total:</span>
              <span className="text-2xl text-green-600">{formatCurrency(servicio.precio)}</span>
            </div>
            <Button variant="primary" size="block" onClick={handleSolicitar}>
              Solicitar ahora
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
