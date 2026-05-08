import { useNavigate } from 'react-router-dom'
import { Users, Briefcase, Lock, ArrowRight } from 'lucide-react'

export function Landing() {
  const navigate = useNavigate()

  const roles = [
    {
      id: 'cliente',
      title: 'Soy Cliente',
      description: 'Solicita servicios y gestiona tus pedidos',
      icon: Users,
      color: 'from-blue-500 to-cyan-600',
      path: '/cliente'
    },
    {
      id: 'trabajador',
      title: 'Soy Trabajador',
      description: 'Recibe solicitudes y gana dinero',
      icon: Briefcase,
      color: 'from-violet-500 to-purple-600',
      path: '/trabajador'
    },
    {
      id: 'admin',
      title: 'Panel Admin',
      description: 'Gestiona la plataforma',
      icon: Lock,
      color: 'from-orange-500 to-red-600',
      path: '/admin'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-violet-900 to-slate-900 flex flex-col items-center justify-center px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12 md:mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Plataforma de Servicios
        </h1>
        <p className="text-lg md:text-xl text-violet-200 max-w-2xl mx-auto">
          Conecta con profesionales, solicita servicios o gana dinero realizando trabajos
        </p>
      </div>

      {/* Role selector cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full mb-12">
        {roles.map((role) => {
          const Icon = role.icon

          return (
            <button
              key={role.id}
              onClick={() => navigate(role.path)}
              className="group bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all hover:scale-105 hover:shadow-2xl text-left"
            >
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${role.color} mb-6 group-hover:scale-110 transition-transform`}
              >
                <Icon className="w-8 h-8 text-white" />
              </div>

              <h2 className="text-2xl font-bold text-white mb-2">{role.title}</h2>
              <p className="text-violet-200 mb-6">{role.description}</p>

              <div className="flex items-center gap-2 text-violet-300 group-hover:text-white transition-colors font-medium">
                Continuar
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          )
        })}
      </div>

      {/* Footer info */}
      <div className="text-center text-violet-300 text-sm max-w-lg">
        <p>Este es un prototipo visual de una plataforma de servicios integral con experiencias para clientes, trabajadores y administradores.</p>
      </div>
    </div>
  )
}
