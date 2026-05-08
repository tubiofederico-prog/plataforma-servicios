import { useParams, useNavigate } from 'react-router-dom'
import { MobileHeader } from '@/components/mobile/MobileHeader'
import { Button } from '@/components/ui/Button'
import { Card, CardBody } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { Badge } from '@/components/ui/Badge'
import { ordenes, servicios } from '@/data'
import { formatCurrency } from '@/utils/format'
import { Lock } from 'lucide-react'

export function Pago() {
  const { ordenId } = useParams()
  const navigate = useNavigate()
  const orden = ordenes.find((o) => o.id === ordenId)
  const servicio = servicios.find((s) => s.id === orden?.servicioId)

  const handlePago = () => {
    navigate('/cliente/calificar/' + ordenId)
  }

  return (
    <>
      <MobileHeader title="Pago" showBack={true} />
      <div className="px-4 py-6 pb-32 space-y-4">
        <Card>
          <CardBody>
            <h3 className="font-bold mb-4">Método de pago</h3>
            <div className="space-y-2">
              {['tarjeta', 'transferencia', 'efectivo'].map((method) => (
                <label key={method} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                  <input type="radio" name="metodo" value={method} defaultChecked={method === 'tarjeta'} />
                  <span className="capitalize">{method === 'tarjeta' ? 'Tarjeta de crédito' : method === 'transferencia' ? 'Transferencia' : 'Efectivo'}</span>
                </label>
              ))}
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <h3 className="font-bold mb-4">Resumen</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">{servicio?.nombre}</span>
                <span>{formatCurrency(orden?.precio || 0)}</span>
              </div>
              <div className="pt-2 border-t border-gray-200 flex justify-between font-bold">
                <span>Total</span>
                <span className="text-lg text-violet-600">{formatCurrency(orden?.precio || 0)}</span>
              </div>
            </div>
          </CardBody>
        </Card>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 flex gap-2 text-xs text-blue-700">
          <Lock className="w-4 h-4 mt-0.5 flex-shrink-0" />
          <span>Tus datos de pago están protegidos con encriptación de seguridad</span>
        </div>

        <Button variant="primary" size="block" onClick={handlePago}>
          Confirmar pago
        </Button>
      </div>
    </>
  )
}
