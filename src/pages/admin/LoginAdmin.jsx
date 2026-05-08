import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'

export function LoginAdmin() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Panel Admin</h1>
        <p className="text-gray-600 mb-6">Gestión de plataforma</p>
        <form onSubmit={e => { e.preventDefault(); navigate('/admin') }} className="space-y-4">
          <Input label="Usuario" defaultValue="admin" required />
          <Input label="Contraseña" type="password" defaultValue="123456" required />
          <Button variant="primary" size="block">Ingresar</Button>
        </form>
      </div>
    </div>
  )
}
