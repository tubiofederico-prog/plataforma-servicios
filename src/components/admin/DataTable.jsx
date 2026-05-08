import { Card, CardBody } from '@/components/ui/Card'

export function DataTable({ columns, data }) {
  return (
    <Card>
      <CardBody>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                {columns.map(col => (
                  <th key={col} className="text-left py-3 px-4 font-semibold text-sm">{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, i) => (
                <tr key={i} className="border-b hover:bg-gray-50">
                  {Object.values(row).map((val, j) => (
                    <td key={j} className="py-3 px-4 text-sm">{val}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardBody>
    </Card>
  )
}
