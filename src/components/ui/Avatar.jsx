import { cn } from '@/utils/cn'

export function Avatar({ initials, size = 'md', className, ...props }) {
  const sizes = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base',
    xl: 'w-16 h-16 text-lg'
  }

  const colors = ['bg-violet-600', 'bg-blue-600', 'bg-green-600', 'bg-orange-600', 'bg-pink-600', 'bg-indigo-600']
  const colorIndex = (initials ? initials.charCodeAt(0) : 0) % colors.length

  return (
    <div
      className={cn(
        'rounded-full flex items-center justify-center font-semibold text-white',
        colors[colorIndex],
        sizes[size],
        className
      )}
      {...props}
    >
      {initials}
    </div>
  )
}
