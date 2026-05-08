export const ESTADOS_ORDEN = {
  pendiente: { label: 'Pendiente', color: 'gray', icon: 'Clock' },
  buscando_trabajador: { label: 'Buscando trabajador', color: 'yellow', icon: 'Search' },
  asignado: { label: 'Asignado', color: 'blue', icon: 'User' },
  en_camino: { label: 'En camino', color: 'purple', icon: 'Navigation' },
  en_progreso: { label: 'En progreso', color: 'orange', icon: 'Wrench' },
  completado: { label: 'Completado', color: 'green', icon: 'Check' },
  cancelado: { label: 'Cancelado', color: 'red', icon: 'X' }
}

export const ESTADOS_TRABAJADOR = {
  disponible: { label: 'Disponible', color: 'green' },
  ocupado: { label: 'Ocupado', color: 'yellow' },
  offline: { label: 'Offline', color: 'gray' }
}

export const METODOS_PAGO = {
  tarjeta: { label: 'Tarjeta de crédito', icon: 'CreditCard' },
  transferencia: { label: 'Transferencia bancaria', icon: 'Banknote' },
  efectivo: { label: 'Efectivo', icon: 'DollarSign' }
}

export const TIPOS_INCIDENTE = {
  reclamo: { label: 'Reclamo', color: 'red' },
  cancelacion: { label: 'Cancelación', color: 'yellow' },
  pago: { label: 'Problema de pago', color: 'orange' },
  comportamiento: { label: 'Comportamiento', color: 'purple' }
}

export const PRIORIDAD_INCIDENTE = {
  baja: { label: 'Baja', color: 'green' },
  media: { label: 'Media', color: 'yellow' },
  alta: { label: 'Alta', color: 'red' }
}

export const getEstadoOrdenColor = (estado) => {
  const config = ESTADOS_ORDEN[estado]
  if (!config) return 'gray'

  const colors = {
    gray: 'text-gray-600 bg-gray-100',
    yellow: 'text-yellow-700 bg-yellow-100',
    blue: 'text-blue-700 bg-blue-100',
    purple: 'text-purple-700 bg-purple-100',
    orange: 'text-orange-700 bg-orange-100',
    green: 'text-green-700 bg-green-100',
    red: 'text-red-700 bg-red-100'
  }
  return colors[config.color] || colors.gray
}

export const getTrabajadorEstadoColor = (estado) => {
  const config = ESTADOS_TRABAJADOR[estado]
  if (!config) return 'text-gray-600 bg-gray-100'

  const colors = {
    green: 'text-green-700 bg-green-100',
    yellow: 'text-yellow-700 bg-yellow-100',
    gray: 'text-gray-600 bg-gray-100'
  }
  return colors[config.color] || colors.gray
}
