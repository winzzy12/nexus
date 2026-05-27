'use client'

import { cn } from '@/lib/utils'
import { type ButtonHTMLAttributes, forwardRef } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const variants = {
      primary: 'bg-gradient-to-r from-brand-500 to-accent-500 text-white hover:shadow-lg hover:shadow-brand-500/25 hover:scale-[1.02] active:scale-[0.98]',
      secondary: 'bg-white/[0.06] border border-white/[0.08] text-white hover:bg-white/[0.1] hover:border-white/[0.12]',
      ghost: 'text-gray-400 hover:text-white hover:bg-white/[0.06]',
      danger: 'bg-danger-500/20 text-danger-400 hover:bg-danger-500/30 border border-danger-500/20',
    }

    const sizes = {
      sm: 'px-3 py-1.5 text-xs rounded-lg',
      md: 'px-5 py-2.5 text-sm rounded-xl',
      lg: 'px-7 py-3.5 text-base rounded-xl',
    }

    return (
      <button
        ref={ref}
        className={cn(
          'font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
export default Button
