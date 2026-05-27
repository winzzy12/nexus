'use client'

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import Card from '@/components/ui/Card'
import GradientText from '@/components/ui/GradientText'
import { PORTFOLIO_HISTORY } from '@/lib/constants'
import { TrendingUp } from 'lucide-react'

export default function PortfolioChart() {
  return (
    <Card className="col-span-1 lg:col-span-2">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-white">Portfolio Value</h3>
          <div className="flex items-center gap-2 mt-1">
            <GradientText as="span" className="text-3xl font-bold">$35,358.72</GradientText>
            <span className="flex items-center gap-1 text-sm text-success-400 font-medium">
              <TrendingUp className="w-3.5 h-3.5" />
              +4.21%
            </span>
          </div>
        </div>
        <div className="flex gap-1.5">
          {['1D', '1W', '1M', '1Y', 'ALL'].map((period) => (
            <button
              key={period}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
                period === 'ALL'
                  ? 'bg-brand-500/20 text-brand-400 border border-brand-500/20'
                  : 'text-gray-500 hover:text-white hover:bg-white/[0.06]'
              }`}
            >
              {period}
            </button>
          ))}
        </div>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={PORTFOLIO_HISTORY}>
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6366f1" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#6366f1" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
            <XAxis dataKey="date" stroke="#6b7280" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
            <YAxis stroke="#6b7280" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} tickFormatter={(v: number) => `$${(v / 1000).toFixed(0)}K`} />
            <Tooltip
              contentStyle={{
                backgroundColor: '#12121a',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '12px',
                padding: '12px',
              }}
              labelStyle={{ color: '#9ca3af', fontSize: 12 }}
              itemStyle={{ color: '#fff', fontSize: 14, fontWeight: 600 }}
              formatter={(value: number) => [`$${value.toLocaleString()}`, 'Value']}
            />
            <Area type="monotone" dataKey="value" stroke="#6366f1" strokeWidth={2} fill="url(#gradient)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}
