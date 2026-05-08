import { MobileHeader } from '@/components/mobile/MobileHeader'
import { Card, CardBody } from '@/components/ui/Card'
import { trabajadores } from '@/data'
export function DashboardTrabajador() { const t = trabajadores[0]; return <><MobileHeader title="Dashboard" showBack={false} /><div className="px-4 py-6 pb-20 space-y-4"><Card><CardBody><p className="text-2xl font-bold text-violet-600">${t.gananciasHoy}</p><p className="text-xs text-gray-600">Ganancias hoy</p></CardBody></Card><Card><CardBody><p className="text-2xl font-bold text-violet-600">{t.ordenesCompletadas}</p><p className="text-xs text-gray-600">Órdenes completadas</p></CardBody></Card></div></> }
