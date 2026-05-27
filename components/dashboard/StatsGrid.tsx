'use client'

import Card from '@/components/ui/Card'
import { Wallet, TrendingUp, ArrowRightLeft, DollarSign } from 'lucide-react'

const stats = [
  { label: 'Total Balance', value: '$35,358.72', change: '+4.21%', icon: DollarSign, positive: true },
  { label: '24h Change', value: '+$1,425.30', change: '+4.21%', icon: TrendingUp, positive: true },
  { label: 'Assets', value: '6', change: '3 chains', icon: Wallet, positive: true },
  { label: 'Transactions', value: '142', change: 'This month', icon: ArrowRightLeft, positive: true },
]

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => {
        const Icon = stat.icon
        return (
          <Card key={stat.label} variant="hover" padding="md">
            <div className="flex items-start justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center">
                <Icon className="w-5 h-5 text-brand-400" />
              </div>
            </div>
            <p className="text-xs text-gray-500 mb-1">{stat.label}</p>
            <p className="text-xl font-bold text-white">{stat.value}</p>
            <p className="text-xs text-success-400 mt-1">{stat.change}</p>
          </Card>
        )
      })}
    </div>
  )
}
