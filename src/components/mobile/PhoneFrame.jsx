import { cn } from '@/utils/cn'

export function PhoneFrame({ children, className }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-violet-950 to-slate-900 flex items-center justify-center p-4 md:py-12">
      <div
        className={cn(
          'w-full md:w-[390px] md:h-[844px] md:rounded-[55px] md:border-8 md:border-gray-900',
          'md:shadow-[0_50px_100px_rgba(0,0,0,0.4)] md:overflow-hidden md:relative',
          'bg-white h-screen md:h-auto',
          className
        )}
      >
        {/* Notch - solo en desktop */}
        <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-gray-900 rounded-b-3xl z-50" />
        {/* Content area con padding para el notch en mobile */}
        <div className="h-full md:pt-0 flex flex-col">
          {children}
        </div>
      </div>
    </div>
  )
}
