import { ordenes } from '@/data'
export function GestionOrdenes() {
  return <div><h1 className="text-3xl font-bold mb-8">Gestión de Órdenes</h1><p>{ordenes.length} órdenes totales</p></div>
}
