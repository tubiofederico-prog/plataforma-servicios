import { Star } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/utils/cn'

export function StarRating({ rating = 0, onRate, size = 'md', interactive = false, className }) {
  const [hoverRating, setHoverRating] = useState(0)

  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  }

  const displayRating = interactive && hoverRating > 0 ? hoverRating : rating

  return (
    <div className={cn('flex gap-1', className)}>
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          onClick={() => interactive && onRate && onRate(star)}
          onMouseEnter={() => interactive && setHoverRating(star)}
          onMouseLeave={() => interactive && setHoverRating(0)}
          className={cn(
            'transition-all',
            interactive ? 'cursor-pointer hover:scale-110' : 'cursor-default'
          )}
          disabled={!interactive}
          type="button"
        >
          <Star
            className={cn(
              sizes[size],
              displayRating >= star ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
            )}
          />
        </button>
      ))}
    </div>
  )
}

export function RatingDisplay({ rating }) {
  return (
    <div className="flex items-center gap-2">
      <StarRating rating={rating} size="sm" />
      <span className="font-semibold text-gray-700">{rating.toFixed(1)}</span>
    </div>
  )
}
