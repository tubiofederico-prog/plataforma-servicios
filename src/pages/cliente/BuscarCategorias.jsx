import { MobileHeader } from '@/components/mobile/MobileHeader'
import { Card, CardBody } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { categorias, servicios } from '@/data'
import { useNavigate } from 'react-router-dom'

export function BuscarCategorias() {
  const navigate = useNavigate()

  return (
    <>
      <MobileHeader title="Categorías" showBack={true} />
      <div className="px-4 py-6 space-y-4">
        {categorias.map((cat) => (
          <Card key={cat.id} onClick={() => navigate(`?categoria=${cat.id}`)} className="cursor-pointer hover:shadow-md">
            <CardBody>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900">{cat.nombre}</h3>
                  <p className="text-sm text-gray-600 mt-1">{cat.descripcion}</p>
                </div>
                <Badge variant="primary" size="sm">
                  {servicios.filter((s) => s.categoriaId === cat.id).length}
                </Badge>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </>
  )
}
