'use client'

import { cn } from '@/lib/utils'
import { type HTMLAttributes, forwardRef } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'glass' | 'glass-strong' | 'hover'
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'glass', padding = 'md', children, ...props }, ref) => {
    const variants = {
      glass: 'bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] rounded-2xl',
      'glass-strong': 'bg-white/[0.06] backdrop-blur-2xl border border-white/[0.08] rounded-2xl',
      hover: 'bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] rounded-2xl transition-all duration-300 hover:bg-white/[0.06] hover:border-white/[0.1] hover:shadow-lg hover:shadow-brand-500/5',
    }

    const paddings = {
      none: '',
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
    }

    return (
      <div
        ref={ref}
        className={cn(variants[variant], paddings[padding], className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'
export default Card
