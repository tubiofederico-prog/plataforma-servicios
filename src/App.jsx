import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Landing } from '@/pages/Landing'
import { MobileLayout } from '@/layouts/MobileLayout'
import { AdminLayout } from '@/layouts/AdminLayout'

// Cliente pages
import { HomeCliente } from '@/pages/cliente/HomeCliente'
import { BuscarCategorias } from '@/pages/cliente/BuscarCategorias'
import { SolicitarServicio } from '@/pages/cliente/SolicitarServicio'
import { AsignacionCargando } from '@/pages/cliente/AsignacionCargando'
import { SeguimientoOrden } from '@/pages/cliente/SeguimientoOrden'
import { Pago } from '@/pages/cliente/Pago'
import { HistorialCliente } from '@/pages/cliente/HistorialCliente'
import { CalificacionServicio } from '@/pages/cliente/CalificacionServicio'
import { LoginCliente } from '@/pages/cliente/LoginCliente'
import { PerfilCliente } from '@/pages/cliente/PerfilCliente'

// Trabajador pages
import { DashboardTrabajador } from '@/pages/trabajador/DashboardTrabajador'
import { SolicitudesEntrantes } from '@/pages/trabajador/SolicitudesEntrantes'
import { ServicioActivo } from '@/pages/trabajador/ServicioActivo'
import { HistorialTrabajador } from '@/pages/trabajador/HistorialTrabajador'
import { GananciasTrabajador } from '@/pages/trabajador/GananciasTrabajador'
import { PerfilTrabajador } from '@/pages/trabajador/PerfilTrabajador'
import { LoginTrabajador } from '@/pages/trabajador/LoginTrabajador'
import { RegistroTrabajador } from '@/pages/trabajador/RegistroTrabajador'

// Admin pages
import { LoginAdmin } from '@/pages/admin/LoginAdmin'
import { DashboardAdmin } from '@/pages/admin/DashboardAdmin'
import { GestionClientes } from '@/pages/admin/GestionClientes'
import { GestionProveedores } from '@/pages/admin/GestionProveedores'
import { GestionOrdenes } from '@/pages/admin/GestionOrdenes'
import { ReasignacionManual } from '@/pages/admin/ReasignacionManual'
import { GestionFinanciera } from '@/pages/admin/GestionFinanciera'
import { GestionCategorias } from '@/pages/admin/GestionCategorias'
import { Soporte } from '@/pages/admin/Soporte'
import { ConfigComisiones } from '@/pages/admin/ConfigComisiones'
import { ConfiguracionGeneral } from '@/pages/admin/ConfiguracionGeneral'

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Landing */}
        <Route path="/" element={<Landing />} />

        {/* Cliente App */}
        <Route path="/cliente/login" element={<LoginCliente />} />
        <Route element={<MobileLayout app="cliente" />}>
          <Route path="/cliente" element={<HomeCliente />} />
          <Route path="/cliente/buscar" element={<BuscarCategorias />} />
          <Route path="/cliente/solicitar/:servicioId" element={<SolicitarServicio />} />
          <Route path="/cliente/asignando" element={<AsignacionCargando />} />
          <Route path="/cliente/seguimiento/:ordenId" element={<SeguimientoOrden />} />
          <Route path="/cliente/pago/:ordenId" element={<Pago />} />
          <Route path="/cliente/historial" element={<HistorialCliente />} />
          <Route path="/cliente/calificar/:ordenId" element={<CalificacionServicio />} />
          <Route path="/cliente/perfil" element={<PerfilCliente />} />
        </Route>

        {/* Trabajador App */}
        <Route path="/trabajador/login" element={<LoginTrabajador />} />
        <Route path="/trabajador/registro" element={<RegistroTrabajador />} />
        <Route element={<MobileLayout app="trabajador" />}>
          <Route path="/trabajador" element={<DashboardTrabajador />} />
          <Route path="/trabajador/solicitudes" element={<SolicitudesEntrantes />} />
          <Route path="/trabajador/activo/:ordenId" element={<ServicioActivo />} />
          <Route path="/trabajador/historial" element={<HistorialTrabajador />} />
          <Route path="/trabajador/ganancias" element={<GananciasTrabajador />} />
          <Route path="/trabajador/perfil" element={<PerfilTrabajador />} />
        </Route>

        {/* Admin Panel */}
        <Route path="/admin/login" element={<LoginAdmin />} />
        <Route element={<AdminLayout />}>
          <Route path="/admin" element={<DashboardAdmin />} />
          <Route path="/admin/clientes" element={<GestionClientes />} />
          <Route path="/admin/proveedores" element={<GestionProveedores />} />
          <Route path="/admin/ordenes" element={<GestionOrdenes />} />
          <Route path="/admin/reasignacion" element={<ReasignacionManual />} />
          <Route path="/admin/financiero" element={<GestionFinanciera />} />
          <Route path="/admin/categorias" element={<GestionCategorias />} />
          <Route path="/admin/soporte" element={<Soporte />} />
          <Route path="/admin/comisiones" element={<ConfigComisiones />} />
          <Route path="/admin/configuracion" element={<ConfiguracionGeneral />} />
        </Route>

        {/* Catch all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  )
}
