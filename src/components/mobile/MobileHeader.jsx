import { ArrowLeft, Menu } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { cn } from '@/utils/cn'

export function MobileHeader({ title, showBack = true, onMenuClick, action, className }) {
  const navigate = useNavigate()

  const handleBack = () => {
    navigate(-1)
  }

  return (
    <div
      className={cn(
        'sticky top-0 z-40 bg-white border-b border-gray-100 flex items-center justify-between px-4 py-3 safe-area-inset',
        className
      )}
    >
      <div className="flex items-center gap-3 flex-1">
        {showBack && (
          <button
            onClick={handleBack}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            type="button"
          >
            <ArrowLeft className="w-5 h-5 text-gray-700" />
          </button>
        )}
        {title && <h1 className="text-lg font-bold text-gray-900">{title}</h1>}
      </div>

      <div className="flex items-center gap-2">
        {action && action}
        {onMenuClick && (
          <button
            onClick={onMenuClick}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            type="button"
          >
            <Menu className="w-5 h-5 text-gray-700" />
          </button>
        )}
      </div>
    </div>
  )
}
