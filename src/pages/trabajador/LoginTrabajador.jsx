import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'

export function LoginTrabajador() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Bienvenido</h1>
        <p className="text-gray-600 mb-6">Plataforma para trabajadores</p>
        <form onSubmit={e => { e.preventDefault(); navigate('/trabajador') }} className="space-y-4">
          <Input label="Email" type="email" defaultValue="carlos.r@servicios.uy" required />
          <Input label="Contraseña" type="password" defaultValue="123456" required />
          <Button variant="primary" size="block">Ingresar</Button>
        </form>
      </div>
    </div>
  )
}
