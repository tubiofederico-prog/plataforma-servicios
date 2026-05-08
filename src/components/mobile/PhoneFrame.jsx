import { cn } from '@/utils/cn'

export function PhoneFrame({ children, className }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-2 md:p-8">
      <div className={cn('phone-frame-wrapper', className)}>
        {/* Notch - solo en desktop */}
        <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-gray-900 rounded-b-3xl z-50" />
        {/* Content area */}
        <div className="phone-frame-content">
          {children}
        </div>
      </div>
    </div>
  )
}
