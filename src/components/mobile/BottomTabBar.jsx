import { Link, useLocation } from 'react-router-dom'
import { cn } from '@/utils/cn'

export function BottomTabBar({ items }) {
  const location = useLocation()

  return (
    <nav
      className={cn(
        'fixed md:absolute bottom-0 left-0 right-0 md:top-auto bg-white border-t border-gray-100',
        'flex justify-around safe-area-inset'
      )}
    >
      {items.map((item) => {
        const Icon = item.icon
        const isActive = location.pathname === item.path

        return (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              'flex-1 flex flex-col items-center justify-center py-3 px-2 text-xs font-medium transition-all',
              isActive
                ? 'text-violet-600 bg-violet-50'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            )}
          >
            <Icon className="w-6 h-6 mb-1" />
            <span className="text-center line-clamp-1">{item.label}</span>
          </Link>
        )
      })}
    </nav>
  )
}
