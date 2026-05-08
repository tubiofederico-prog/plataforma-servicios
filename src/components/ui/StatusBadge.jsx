import { cn } from '@/utils/cn'

export function StatusBadge({ label, status = 'default', size = 'md', className, ...props }) {
  const statusColors = {
    default: { dot: 'bg-gray-400', bg: 'bg-gray-100', text: 'text-gray-700' },
    success: { dot: 'bg-green-500', bg: 'bg-green-100', text: 'text-green-700' },
    warning: { dot: 'bg-yellow-500', bg: 'bg-yellow-100', text: 'text-yellow-700' },
    danger: { dot: 'bg-red-500', bg: 'bg-red-100', text: 'text-red-700' },
    info: { dot: 'bg-blue-500', bg: 'bg-blue-100', text: 'text-blue-700' },
    processing: { dot: 'bg-purple-500 animate-pulse', bg: 'bg-purple-100', text: 'text-purple-700' }
  }

  const sizes = {
    sm: 'px-2.5 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base'
  }

  const colors = statusColors[status] || statusColors.default

  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 font-medium rounded-full',
        colors.bg,
        colors.text,
        sizes[size],
        className
      )}
      {...props}
    >
      <span className={cn('w-2 h-2 rounded-full', colors.dot)} />
      {label}
    </span>
  )
}
