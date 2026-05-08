import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { LoadingAssignment } from '@/components/shared/LoadingAssignment'

export function AsignacionCargando() {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/cliente/seguimiento/ORD-2025-0042', { replace: true })
    }, 3000)
    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-white">
      <LoadingAssignment serviceName="profesional" />
    </div>
  )
}
