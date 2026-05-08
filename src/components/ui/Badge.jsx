import { cn } from '@/utils/cn'

export function Badge({ children, variant = 'default', size = 'md', className, ...props }) {
  const variants = {
    default: 'bg-gray-100 text-gray-800',
    primary: 'bg-green-100 text-green-700',
    success: 'bg-green-100 text-green-700',
    warning: 'bg-yellow-100 text-yellow-700',
    danger: 'bg-red-100 text-red-700',
    info: 'bg-green-100 text-green-700'
  }

  const sizes = {
    sm: 'px-2 py-1 text-xs rounded-full',
    md: 'px-3 py-1.5 text-sm rounded-full',
    lg: 'px-4 py-2 text-sm rounded-full'
  }

  return (
    <span className={cn('font-medium', variants[variant], sizes[size], className)} {...props}>
      {children}
    </span>
  )
}
