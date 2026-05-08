import { cn } from '@/utils/cn'

export function Spinner({ size = 'md', className }) {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  }

  return (
    <div
      className={cn(
        'border-4 border-gray-200 border-t-green-600 rounded-full animate-spin',
        sizes[size],
        className
      )}
    />
  )
}
