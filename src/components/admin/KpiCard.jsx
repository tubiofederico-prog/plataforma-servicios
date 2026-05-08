import { Card, CardBody } from '@/components/ui/Card'

export function KpiCard({ title, value, icon: Icon, color = 'green' }) {
  return (
    <Card>
      <CardBody className="text-center">
        <div className={`w-12 h-12 bg-${color}-100 rounded-lg flex items-center justify-center mx-auto mb-3`}>
          {Icon && <Icon className={`w-6 h-6 text-${color}-600`} />}
        </div>
        <p className="text-3xl font-bold text-gray-900">{value}</p>
        <p className="text-sm text-gray-600 mt-1">{title}</p>
      </CardBody>
    </Card>
  )
}
