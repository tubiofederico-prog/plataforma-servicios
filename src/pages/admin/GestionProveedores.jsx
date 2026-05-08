import { trabajadores } from '@/data'
export function GestionProveedores() {
  return <div><h1 className="text-3xl font-bold mb-8">Gestión de Proveedores</h1><p>{trabajadores.length} proveedores activos</p></div>
}
