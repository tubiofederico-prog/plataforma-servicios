import { Zap } from 'lucide-react'

export function MapPlaceholder({ location = 'Montevideo, Uruguay' }) {
  return (
    <div className="w-full h-48 rounded-2xl overflow-hidden relative bg-gradient-to-br from-slate-200 via-slate-100 to-slate-200">
      {/* Grid lines simulating streets */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(#94a3b8 1px, transparent 1px), linear-gradient(90deg, #94a3b8 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}
      />

      {/* Center location indicator */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center">
          <div className="relative">
            <div className="w-4 h-4 bg-green-600 rounded-full shadow-lg" />
            <div className="absolute inset-0 w-4 h-4 bg-green-400 rounded-full animate-ping" />
          </div>
          {/* Satellite dish */}
          <div className="mt-2 flex items-center justify-center">
            <Zap className="w-5 h-5 text-green-600" />
          </div>
        </div>
      </div>

      {/* Location label */}
      <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur px-3 py-1.5 rounded-lg text-xs font-medium text-gray-700 shadow-md">
        {location}
      </div>

      {/* Direction badge */}
      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-3 py-1.5 rounded-lg text-xs font-medium text-gray-700 shadow-md">
        En tiempo real
      </div>
    </div>
  )
}
