import { Zap } from 'lucide-react'

export function LoadingAssignment({ serviceName = 'servicio' }) {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4">
      <div className="relative flex items-center justify-center mb-6">
        {/* Concentric pulsing rings */}
        <div className="absolute w-40 h-40 rounded-full bg-violet-100 animate-ping opacity-30" />
        <div className="absolute w-32 h-32 rounded-full bg-violet-200 animate-ping opacity-50" style={{ animationDelay: '150ms' }} />

        {/* Center icon */}
        <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-violet-600 to-violet-700 flex items-center justify-center shadow-lg">
          <Zap className="w-8 h-8 text-white" />
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-2">Buscando profesional</h2>
      <p className="text-gray-600 text-center mb-6">
        Estamos buscando el mejor {serviceName} disponible para tu solicitud...
      </p>

      {/* Criteria list */}
      <div className="w-full max-w-sm bg-gray-50 rounded-xl p-4 space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-violet-600" />
          <span className="text-sm text-gray-700">✓ Cercanía a tu ubicación</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-violet-600" />
          <span className="text-sm text-gray-700">✓ Excelentes calificaciones</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-violet-600" />
          <span className="text-sm text-gray-700">✓ Disponibilidad inmediata</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-violet-600" />
          <span className="text-sm text-gray-700">✓ Tiempo de respuesta rápido</span>
        </div>
      </div>
    </div>
  )
}
