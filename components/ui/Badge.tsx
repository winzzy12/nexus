'use client'

import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'success' | 'danger' | 'warning' | 'info' | 'brand'
  size?: 'sm' | 'md'
  className?: string
}

const variants = {
  default: 'bg-white/[0.06] text-gray-300 border-white/[0.08]',
  success: 'bg-success-500/15 text-success-400 border-success-500/20',
  danger: 'bg-danger-500/15 text-danger-400 border-danger-500/20',
  warning: 'bg-yellow-500/15 text-yellow-400 border-yellow-500/20',
  info: 'bg-blue-500/15 text-blue-400 border-blue-500/20',
  brand: 'bg-brand-500/15 text-brand-400 border-brand-500/20',
}

export default function Badge({ children, variant = 'default', size = 'sm', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center font-medium border rounded-full',
        variants[variant],
        size === 'sm' ? 'px-2.5 py-0.5 text-xs' : 'px-3 py-1 text-sm',
        className
      )}
    >
      {children}
    </span>
  )
}
