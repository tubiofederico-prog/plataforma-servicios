export const categorias = [
  {
    id: 'plomeria',
    nombre: 'Plomería',
    icono: 'Droplets',
    color: 'from-blue-500 to-cyan-600',
    descripcion: 'Reparaciones y instalaciones de agua',
    precioBase: 1200,
    tiempoEstimado: '1-2 horas'
  },
  {
    id: 'electricidad',
    nombre: 'Electricidad',
    icono: 'Zap',
    color: 'from-yellow-500 to-orange-600',
    descripcion: 'Instalaciones y reparaciones eléctricas',
    precioBase: 1500,
    tiempoEstimado: '1-3 horas'
  },
  {
    id: 'limpieza',
    nombre: 'Limpieza',
    icono: 'Sparkles',
    color: 'from-green-500 to-emerald-600',
    descripcion: 'Servicios de limpieza y desinfección',
    precioBase: 800,
    tiempoEstimado: '2-4 horas'
  },
  {
    id: 'jardineria',
    nombre: 'Jardinería',
    icono: 'Leaf',
    color: 'from-lime-500 to-green-600',
    descripcion: 'Cuidado y mantenimiento de jardines',
    precioBase: 1000,
    tiempoEstimado: '2-3 horas'
  },
  {
    id: 'pintura',
    nombre: 'Pintura',
    icono: 'Paintbrush',
    color: 'from-red-500 to-rose-600',
    descripcion: 'Trabajos de pintura interior y exterior',
    precioBase: 2000,
    tiempoEstimado: '4-8 horas'
  },
  {
    id: 'mudanzas',
    nombre: 'Mudanzas',
    icono: 'Truck',
    color: 'from-purple-500 to-violet-600',
    descripcion: 'Servicios de mudanza y traslados',
    precioBase: 3000,
    tiempoEstimado: '3-6 horas'
  },
  {
    id: 'cerrajeria',
    nombre: 'Cerrajería',
    icono: 'Key',
    color: 'from-slate-500 to-gray-600',
    descripcion: 'Servicios de cerrajería y seguridad',
    precioBase: 800,
    tiempoEstimado: '30 min - 1 hora'
  },
  {
    id: 'gas',
    nombre: 'Gas & Calefacción',
    icono: 'Flame',
    color: 'from-orange-500 to-red-600',
    descripcion: 'Instalación y reparación de gas',
    precioBase: 1200,
    tiempoEstimado: '1-2 horas'
  },
  {
    id: 'informatica',
    nombre: 'Informática',
    icono: 'Monitor',
    color: 'from-blue-600 to-indigo-600',
    descripcion: 'Reparación de computadoras y celulares',
    precioBase: 1500,
    tiempoEstimado: '1-4 horas'
  },
  {
    id: 'belleza',
    nombre: 'Belleza & Spa',
    icono: 'Scissors',
    color: 'from-pink-500 to-fuchsia-600',
    descripcion: 'Servicios de belleza y bienestar',
    precioBase: 600,
    tiempoEstimado: '1-2 horas'
  }
]

export const servicios = [
  // Plomería
  { id: 1, categoriaId: 'plomeria', nombre: 'Destape de cañerías', descripcion: 'Servicio profesional de destape', precio: 1500, duracionEstimada: 60, popular: true, icono: 'Wrench' },
  { id: 2, categoriaId: 'plomeria', nombre: 'Instalación de grifo', descripcion: 'Cambio o instalación de grifo', precio: 800, duracionEstimada: 45, popular: false, icono: 'Droplets' },
  { id: 3, categoriaId: 'plomeria', nombre: 'Reparación de cañería rota', descripcion: 'Reparación de tuberías dañadas', precio: 2200, duracionEstimada: 90, popular: true, icono: 'AlertCircle' },
  { id: 4, categoriaId: 'plomeria', nombre: 'Instalación de calefactor', descripcion: 'Instalación de calefactor a gas', precio: 2500, duracionEstimada: 120, popular: false, icono: 'Flame' },
  { id: 5, categoriaId: 'plomeria', nombre: 'Reparación de inodoro', descripcion: 'Arreglo de tanque y mecanismo', precio: 1200, duracionEstimada: 60, popular: true, icono: 'Droplet' },

  // Electricidad
  { id: 6, categoriaId: 'electricidad', nombre: 'Cambio de interruptor', descripcion: 'Instalación de interruptores nuevos', precio: 600, duracionEstimada: 30, popular: false, icono: 'Lightbulb' },
  { id: 7, categoriaId: 'electricidad', nombre: 'Instalación de luminaria', descripcion: 'Colocación de lámparas y focos', precio: 900, duracionEstimada: 45, popular: true, icono: 'Lamp' },
  { id: 8, categoriaId: 'electricidad', nombre: 'Reparación de toma corriente', descripcion: 'Arreglo de enchufes dañados', precio: 700, duracionEstimada: 40, popular: true, icono: 'Plug' },
  { id: 9, categoriaId: 'electricidad', nombre: 'Instalación de aire acondicionado', descripcion: 'Instalación completa de AC', precio: 4500, duracionEstimada: 180, popular: false, icono: 'Wind' },
  { id: 10, categoriaId: 'electricidad', nombre: 'Revisión eléctrica general', descripcion: 'Inspección completa de instalación', precio: 1200, duracionEstimada: 90, popular: false, icono: 'Zap' },

  // Limpieza
  { id: 11, categoriaId: 'limpieza', nombre: 'Limpieza general de hogar', descripcion: 'Limpieza completa del domicilio', precio: 1200, duracionEstimada: 180, popular: true, icono: 'Sparkles' },
  { id: 12, categoriaId: 'limpieza', nombre: 'Limpieza de alfombra', descripcion: 'Lavado y secado de alfombras', precio: 800, duracionEstimada: 120, popular: false, icono: 'Pipette' },
  { id: 13, categoriaId: 'limpieza', nombre: 'Desinfección profunda', descripcion: 'Tratamiento desinfectante completo', precio: 1500, duracionEstimada: 150, popular: true, icono: 'Shield' },
  { id: 14, categoriaId: 'limpieza', nombre: 'Limpieza de ventanas', descripcion: 'Limpieza interior y exterior', precio: 600, duracionEstimada: 90, popular: true, icono: 'Eye' },
  { id: 15, categoriaId: 'limpieza', nombre: 'Limpieza pos-obra', descripcion: 'Limpieza tras trabajos de construcción', precio: 2000, duracionEstimada: 240, popular: false, icono: 'Broom' },

  // Jardinería
  { id: 16, categoriaId: 'jardineria', nombre: 'Corte y poda de pasto', descripcion: 'Mantenimiento del jardín', precio: 800, duracionEstimada: 120, popular: true, icono: 'Scissors' },
  { id: 17, categoriaId: 'jardineria', nombre: 'Plantación de flores', descripcion: 'Diseño e instalación de plantas', precio: 1500, duracionEstimada: 150, popular: false, icono: 'Flower' },
  { id: 18, categoriaId: 'jardineria', nombre: 'Poda de árboles', descripcion: 'Poda y cuidado de árboles', precio: 2000, duracionEstimada: 180, popular: true, icono: 'Trees' },
  { id: 19, categoriaId: 'jardineria', nombre: 'Instalación de riego', descripcion: 'Sistema automático de riego', precio: 2500, duracionEstimada: 240, popular: false, icono: 'Droplets' },
  { id: 20, categoriaId: 'jardineria', nombre: 'Limpieza general de jardín', descripcion: 'Limpieza y ordenamiento', precio: 1000, duracionEstimada: 150, popular: true, icono: 'Leaf' },

  // Pintura
  { id: 21, categoriaId: 'pintura', nombre: 'Pintura de pared interior', descripcion: 'Pintado de paredes interiores', precio: 2500, duracionEstimada: 240, popular: true, icono: 'Paintbrush' },
  { id: 22, categoriaId: 'pintura', nombre: 'Pintura de exterior', descripcion: 'Pintado exterior de fachadas', precio: 3500, duracionEstimada: 300, popular: false, icono: 'Home' },
  { id: 23, categoriaId: 'pintura', nombre: 'Pintura de muebles', descripcion: 'Repintado de muebles', precio: 1200, duracionEstimada: 120, popular: false, icono: 'Sofa' },
  { id: 24, categoriaId: 'pintura', nombre: 'Empapelado', descripcion: 'Colocación de papel de pared', precio: 2000, duracionEstimada: 240, popular: true, icono: 'Palette' },
  { id: 25, categoriaId: 'pintura', nombre: 'Preparación de superficies', descripcion: 'Reparación y preparación', precio: 1500, duracionEstimada: 180, popular: false, icono: 'Hammer' },

  // Mudanzas
  { id: 26, categoriaId: 'mudanzas', nombre: 'Mudanza dentro de ciudad', descripcion: 'Traslado local completo', precio: 3500, duracionEstimada: 300, popular: true, icono: 'Truck' },
  { id: 27, categoriaId: 'mudanzas', nombre: 'Mudanza fuera de ciudad', descripcion: 'Traslado a otra localidad', precio: 6000, duracionEstimada: 480, popular: false, icono: 'MapPin' },
  { id: 28, categoriaId: 'mudanzas', nombre: 'Embalaje de objetos', descripcion: 'Empaque profesional', precio: 1500, duracionEstimada: 180, popular: true, icono: 'Package' },
  { id: 29, categoriaId: 'mudanzas', nombre: 'Almacenamiento', descripcion: 'Guarda de muebles y cosas', precio: 2000, duracionEstimada: 60, popular: false, icono: 'Archive' },
  { id: 30, categoriaId: 'mudanzas', nombre: 'Carga y descarga', descripcion: 'Solo movimiento de cosas', precio: 1800, duracionEstimada: 240, popular: true, icono: 'ArrowUpDown' },

  // Cerrajería
  { id: 31, categoriaId: 'cerrajeria', nombre: 'Cambio de cerradura', descripcion: 'Instalación de cerradura nueva', precio: 900, duracionEstimada: 60, popular: true, icono: 'Lock' },
  { id: 32, categoriaId: 'cerrajeria', nombre: 'Abrimiento de puerta', descripcion: 'Apertura de puerta cerrada', precio: 700, duracionEstimada: 30, popular: true, icono: 'Unlock' },
  { id: 33, categoriaId: 'cerrajeria', nombre: 'Duplicado de llaves', descripcion: 'Copia de llaves', precio: 300, duracionEstimada: 10, popular: false, icono: 'Copy' },
  { id: 34, categoriaId: 'cerrajeria', nombre: 'Instalación de candado', descripcion: 'Colocación de candado', precio: 400, duracionEstimada: 20, popular: false, icono: 'Lock' },
  { id: 35, categoriaId: 'cerrajeria', nombre: 'Reparación de picaporte', descripcion: 'Arreglo de picaporte roto', precio: 600, duracionEstimada: 45, popular: true, icono: 'Zap' },

  // Gas
  { id: 36, categoriaId: 'gas', nombre: 'Instalación de estufa a gas', descripcion: 'Instalación completa de estufa', precio: 1500, duracionEstimada: 90, popular: true, icono: 'Flame' },
  { id: 37, categoriaId: 'gas', nombre: 'Reparación de calefactor', descripcion: 'Arreglo de calefactor averiado', precio: 800, duracionEstimada: 60, popular: true, icono: 'Thermometer' },
  { id: 38, categoriaId: 'gas', nombre: 'Cambio de regulador', descripcion: 'Cambio de regulador de presión', precio: 600, duracionEstimada: 45, popular: false, icono: 'Gauge' },
  { id: 39, categoriaId: 'gas', nombre: 'Inspección de seguridad', descripcion: 'Revisión de instalación de gas', precio: 700, duracionEstimada: 60, popular: false, icono: 'AlertTriangle' },
  { id: 40, categoriaId: 'gas', nombre: 'Instalación de tubería', descripcion: 'Nueva instalación de gasoducto', precio: 2200, duracionEstimada: 180, popular: false, icono: 'Pipe' },

  // Informática
  { id: 41, categoriaId: 'informatica', nombre: 'Reparación de computadora', descripcion: 'Diagnóstico y reparación', precio: 1200, duracionEstimada: 120, popular: true, icono: 'Monitor' },
  { id: 42, categoriaId: 'informatica', nombre: 'Instalación de software', descripcion: 'Instalación de programas y SO', precio: 800, duracionEstimada: 90, popular: true, icono: 'Download' },
  { id: 43, categoriaId: 'informatica', nombre: 'Reparación de celular', descripcion: 'Arreglo de smartphone', precio: 900, duracionEstimada: 60, popular: true, icono: 'Smartphone' },
  { id: 44, categoriaId: 'informatica', nombre: 'Cambio de pantalla', descripcion: 'Cambio de display roto', precio: 1500, duracionEstimada: 45, popular: true, icono: 'Eye' },
  { id: 45, categoriaId: 'informatica', nombre: 'Limpieza de virus', descripcion: 'Eliminación de malware', precio: 600, duracionEstimada: 120, popular: true, icono: 'Shield' },

  // Belleza
  { id: 46, categoriaId: 'belleza', nombre: 'Corte de cabello', descripcion: 'Corte y estilo profesional', precio: 800, duracionEstimada: 60, popular: true, icono: 'Scissors' },
  { id: 47, categoriaId: 'belleza', nombre: 'Coloración de cabello', descripcion: 'Tinte y coloración', precio: 1200, duracionEstimada: 120, popular: true, icono: 'Palette' },
  { id: 48, categoriaId: 'belleza', nombre: 'Manicura', descripcion: 'Cuidado y decoración de uñas', precio: 600, duracionEstimada: 45, popular: true, icono: 'Hand' },
  { id: 49, categoriaId: 'belleza', nombre: 'Masaje relajante', descripcion: 'Masaje terapéutico', precio: 1500, duracionEstimada: 90, popular: false, icono: 'Heart' },
  { id: 50, categoriaId: 'belleza', nombre: 'Depilación', descripcion: 'Servicio de depilación', precio: 700, duracionEstimada: 60, popular: true, icono: 'Sparkles' }
]
