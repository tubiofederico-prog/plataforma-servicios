# 🚀 Plataforma de Servicios - Prototipo Visual

Un prototipo visual **premium, moderno e intuitivo** de una plataforma integral de servicios estilo **Uber/Rappi**, con tres experiencias independientes integradas en una sola Single Page Application.

## ✨ Características Principales

### 📱 **App Cliente** (Mobile-First)
- Login y registro
- Home con categorías destacadas
- Búsqueda y navegación de servicios
- Solicitud detallada de servicio
- **Asignación automática** con animación de loading (3 segundos)
- Seguimiento de orden en tiempo real con mapa
- Múltiples métodos de pago
- Historial de pedidos
- Calificación con sistema de 5 estrellas
- Perfil de usuario

### 👷 **App Trabajador** (Mobile-First)
- Login y registro
- Dashboard con toggle online/offline
- Solicitudes entrantes
- Servicio activo con seguimiento
- Historial de trabajos completados
- Resumen de ganancias y liquidaciones
- Perfil con reputación y calificaciones

### 🛠️ **Panel Administrativo** (Desktop-First)
- Dashboard con KPIs en tiempo real
  - Órdenes del día
  - Ingresos totales
  - Trabajadores activos
  - Clientes registrados
- Gestión completa de clientes
- Gestión de proveedores/trabajadores
- Gestión de órdenes y servicios
- Reasignación manual de trabajadores
- Reportes financieros y liquidaciones
- Gestión de categorías de servicio
- Centro de soporte e incidencias
- Configuración de comisiones por categoría
- Configuración general del sistema

## 🎨 Diseño Visual

- **Estilo Premium:** Colores violeta (#7C3AED) y azul eléctrico (#2563EB)
- **Componentes Modernos:** Cards redondeadas, transiciones suaves, animaciones
- **Responsive Design:** 
  - Desktop: Apps móviles en frame de iPhone (390×844px)
  - Tablets y móviles: Experiencia nativa full-screen
- **Iconografía:** Lucide React (50+ iconos profesionales)
- **Accesibilidad:** Colores contrastantes, componentes WCAG-friendly

## 🛠️ Stack Tecnológico

- **React 18** - UI library moderna
- **Vite 5** - Build tool ultra-rápido
- **React Router v6** - Enrutamiento multinivel
- **Tailwind CSS v3** - Estilos utilitarios
- **Lucide React** - Sistema de iconografía
- **JavaScript (ES6+)** - Sin TypeScript (simplificado)

### Dependencias principales
```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-router-dom": "^6.24.0",
  "tailwindcss": "^3.4.4",
  "lucide-react": "^0.400.0"
}
```

## 📊 Mock Data Realista

- **15 clientes** con nombres uruguayos, calificaciones, historial de pedidos
- **10 trabajadores** con diferentes categorías y ganancias
- **10 categorías de servicio** (plomería, electricidad, limpieza, jardinería, pintura, etc.)
- **50 servicios individuales** con precios en UYU ($800–$8,000)
- **45+ órdenes** con estados progresivos
- **KPIs, comisiones, liquidaciones e incidentes** realistas

## 🚀 Cómo Empezar

### Requisitos
- Node.js 16+ 
- npm 7+

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tubiofederico-prog/plataforma-servicios.git
cd plataforma-servicios

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El prototipo se abrirá en `http://localhost:5173`

### Build para Producción

```bash
npm run build      # Genera dist/
npm run preview    # Previsualiza la build
```

## 🗺️ Rutas Disponibles

### Landing
- `/` - Selector de rol (Cliente / Trabajador / Admin)

### App Cliente
```
/cliente/login                    Login
/cliente                          Home (frame móvil)
/cliente/buscar                   Búsqueda de categorías
/cliente/solicitar/:servicioId    Detalles del servicio
/cliente/asignando                Loading de asignación (3s)
/cliente/seguimiento/:ordenId     Tracking + mapa
/cliente/pago/:ordenId            Pago
/cliente/historial                Mis pedidos
/cliente/calificar/:ordenId       Calificación
/cliente/perfil                   Perfil usuario
```

### App Trabajador
```
/trabajador/login                 Login
/trabajador/registro              Registro
/trabajador                       Dashboard (online toggle)
/trabajador/solicitudes           Solicitudes entrantes
/trabajador/activo/:ordenId       Servicio activo
/trabajador/historial             Trabajos completados
/trabajador/ganancias             Resumen financiero
/trabajador/perfil                Perfil trabajador
```

### Panel Admin
```
/admin/login                      Login
/admin                            Dashboard (KPIs)
/admin/clientes                   Gestión de clientes
/admin/proveedores                Gestión de trabajadores
/admin/ordenes                    Tabla de órdenes
/admin/reasignacion               Reasignar trabajador
/admin/financiero                 Gestión financiera
/admin/categorias                 CRUD de categorías
/admin/soporte                    Tickets/Incidencias
/admin/comisiones                 % por categoría
/admin/configuracion              Settings
```

## 📁 Estructura del Proyecto

```
src/
├── App.jsx                    # Router principal
├── main.jsx                   # Entry point
├── index.css                  # Estilos globales
│
├── components/                # Componentes reutilizables
│   ├── ui/                    # Button, Card, Badge, Input, etc.
│   ├── mobile/                # PhoneFrame, MobileHeader, BottomTabBar
│   ├── admin/                 # Sidebar, Topbar, KpiCard, DataTable
│   └── shared/                # MapPlaceholder, LoadingAssignment
│
├── layouts/                   # Layouts principales
│   ├── MobileLayout.jsx       # Wrapper para apps móviles
│   └── AdminLayout.jsx        # Wrapper para admin
│
├── pages/                     # Pantallas por app
│   ├── Landing.jsx            # Selector de rol
│   ├── cliente/               # 10 pantallas
│   ├── trabajador/            # 8 pantallas
│   └── admin/                 # 11 pantallas
│
├── data/                      # Mock data
│   ├── clientes.js
│   ├── trabajadores.js
│   ├── servicios.js
│   ├── ordenes.js
│   ├── pagos.js
│   ├── admin.js
│   └── index.js
│
└── utils/                     # Utilidades
    ├── cn.js                  # Función de merge de clases
    ├── format.js              # Formatters (moneda, fecha)
    └── constants.js           # Constantes (estados, colores)
```

## 🎯 Casos de Uso

✅ **Presentaciones a inversores/clientes** - Interfaz visual ejecutable completa
✅ **Validación de flujos UX** - Navegación end-to-end funcional
✅ **Demostraciones de diseño** - Estilo premium y moderno
✅ **Base para desarrollo** - Estructura lista para integración con backend
✅ **Portfolio profesional** - Proyecto de escala real

## 🔐 Datos de Demo

### Cliente
- Email: `valentina.t@gmail.com`
- Contraseña: `123456`

### Trabajador
- Email: `carlos.r@servicios.uy`
- Contraseña: `123456`

### Admin
- Usuario: `admin`
- Contraseña: `123456`

## 📊 Estadísticas del Proyecto

- **72 archivos** de código React
- **80+ componentes** reutilizables
- **30+ pantallas** funcionales
- **200+ mock data** items realistas
- **~6KB** CSS compilado (77KB gzipped JS)
- **Build time:** < 2 segundos (Vite)

## 🎨 Paleta de Colores

| Uso | Color | Hex |
|-----|-------|-----|
| Primario | Violeta | #7C3AED |
| Secundario | Azul Eléctrico | #2563EB |
| Éxito | Verde | #22C55E |
| Advertencia | Amarillo | #FBBF24 |
| Error | Rojo | #EF4444 |
| Neutro | Gris | #6B7280 |

## 🚢 Deploy Sugerido

El proyecto es ready para deploying en:
- **Vercel** (recomendado para Vite)
- **Netlify**
- **GitHub Pages**
- **AWS Amplify**

```bash
# Build optimizado
npm run build
# dist/ contiene los archivos de producción
```

## 📝 Licencia

MIT

## 👨‍💻 Autor

**Federico Tubio** - [tubiofederico@gmail.com](mailto:tubiofederico@gmail.com)

---

**¿Preguntas o sugerencias?** Abre un issue o contacta directamente.

**⭐ Si te gusta el proyecto, considera darle una estrella en GitHub!**
