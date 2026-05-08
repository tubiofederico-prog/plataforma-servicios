export const kpiData = {
  ordenesHoy: 47,
  ingresosMes: 184500,
  trabajadoresActivos: 23,
  clientesRegistrados: 412,
  tasaCompletacion: 94.2,
  tiempoPromedioAsignacion: 4.3
}

export const ventasSemana = [
  { dia: 'Lun', ordenes: 32, ingresos: 48000 },
  { dia: 'Mar', ordenes: 38, ingresos: 52300 },
  { dia: 'Mié', ordenes: 41, ingresos: 58900 },
  { dia: 'Jue', ordenes: 45, ingresos: 61200 },
  { dia: 'Vie', ordenes: 52, ingresos: 68500 },
  { dia: 'Sab', ordenes: 48, ingresos: 64200 },
  { dia: 'Dom', ordenes: 35, ingresos: 42800 }
]

export const comisiones = [
  { categoriaId: 'plomeria', nombre: 'Plomería', porcentaje: 20 },
  { categoriaId: 'electricidad', nombre: 'Electricidad', porcentaje: 20 },
  { categoriaId: 'limpieza', nombre: 'Limpieza', porcentaje: 15 },
  { categoriaId: 'jardineria', nombre: 'Jardinería', porcentaje: 18 },
  { categoriaId: 'pintura', nombre: 'Pintura', porcentaje: 18 },
  { categoriaId: 'mudanzas', nombre: 'Mudanzas', porcentaje: 20 },
  { categoriaId: 'cerrajeria', nombre: 'Cerrajería', porcentaje: 22 },
  { categoriaId: 'gas', nombre: 'Gas', porcentaje: 20 },
  { categoriaId: 'informatica', nombre: 'Informática', porcentaje: 25 },
  { categoriaId: 'belleza', nombre: 'Belleza', porcentaje: 20 }
]

export const incidentes = [
  {
    id: 1,
    ordenId: 'ORD-2025-0039',
    clienteId: 2,
    trabajadorId: 8,
    tipo: 'reclamo',
    descripcion: 'Servicio no completado a tiempo',
    estado: 'abierto',
    prioridad: 'alta',
    fecha: '2025-05-07T15:00:00'
  },
  {
    id: 2,
    ordenId: 'ORD-2025-0038',
    clienteId: 6,
    trabajadorId: 4,
    tipo: 'cancelacion',
    descripcion: 'Cliente solicitó cancelación sin causa',
    estado: 'cerrado',
    prioridad: 'baja',
    fecha: '2025-05-06T14:30:00'
  },
  {
    id: 3,
    ordenId: 'ORD-2025-0037',
    clienteId: 4,
    trabajadorId: 7,
    tipo: 'reclamo',
    descripcion: 'Trabajo deficiente, requiere revisión',
    estado: 'abierto',
    prioridad: 'media',
    fecha: '2025-05-05T10:15:00'
  },
  {
    id: 4,
    ordenId: 'ORD-2025-0036',
    clienteId: 9,
    trabajadorId: 3,
    tipo: 'pago',
    descripcion: 'Problema con procesamiento de pago',
    estado: 'resuelto',
    prioridad: 'alta',
    fecha: '2025-05-04T16:45:00'
  },
  {
    id: 5,
    ordenId: 'ORD-2025-0035',
    clienteId: 11,
    trabajadorId: 6,
    tipo: 'comportamiento',
    descripcion: 'Cliente reporta falta de profesionalismo',
    estado: 'abierto',
    prioridad: 'media',
    fecha: '2025-05-03T09:20:00'
  }
]

export const liquidacionesPendientes = [
  {
    id: 1,
    trabajadorId: 1,
    nombre: 'Carlos Rodríguez',
    totalGenerado: 28400,
    comisionPlataforma: 5680,
    montoNeto: 22720,
    estado: 'pendiente',
    fechaProxima: '2025-05-15'
  },
  {
    id: 2,
    trabajadorId: 2,
    nombre: 'Miguel Soto',
    totalGenerado: 19200,
    comisionPlataforma: 3840,
    montoNeto: 15360,
    estado: 'pendiente',
    fechaProxima: '2025-05-15'
  },
  {
    id: 3,
    trabajadorId: 3,
    nombre: 'Juan Menéndez',
    totalGenerado: 22800,
    comisionPlataforma: 4104,
    montoNeto: 18696,
    estado: 'pagado',
    fechaProxima: '2025-05-01'
  },
  {
    id: 4,
    trabajadorId: 4,
    nombre: 'Luis Fernández',
    totalGenerado: 35600,
    comisionPlataforma: 7120,
    montoNeto: 28480,
    estado: 'pagado',
    fechaProxima: '2025-05-01'
  },
  {
    id: 5,
    trabajadorId: 5,
    nombre: 'Mario González',
    totalGenerado: 15600,
    comisionPlataforma: 2340,
    montoNeto: 13260,
    estado: 'pendiente',
    fechaProxima: '2025-05-15'
  }
]
