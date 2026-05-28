'use client'

import { motion } from 'framer-motion'
import Card from '@/components/ui/Card'
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import { PORTFOLIO_HISTORY } from '@/lib/constants'
import { TrendingUp, TrendingDown, Activity, Clock, Target, Zap } from 'lucide-react'

const performanceData = [
  { month: 'Jan', portfolio: 18000, benchmark: 17500 },
  { month: 'Feb', portfolio: 21000, benchmark: 19000 },
  { month: 'Mar', portfolio: 19500, benchmark: 18500 },
  { month: 'Apr', portfolio: 24000, benchmark: 22000 },
  { month: 'May', portfolio: 22000, benchmark: 21000 },
  { month: 'Jun', portfolio: 28000, benchmark: 25000 },
]

const chainDistribution = [
  { chain: 'Ethereum', value: 45 },
  { chain: 'Arbitrum', value: 20 },
  { chain: 'Polygon', value: 15 },
  { chain: 'Base', value: 12 },
  { chain: 'Optimism', value: 8 },
]

const stats = [
  { label: 'Best Performer', value: 'ETH', change: '+4.21%', icon: TrendingUp, positive: true },
  { label: 'Worst Performer', value: 'MATIC', change: '-3.21%', icon: TrendingDown, positive: false },
  { label: 'Win Rate', value: '75%', change: '12/16 trades', icon: Target, positive: true },
  { label: 'Avg Hold Time', value: '4.2d', change: 'All assets', icon: Clock, positive: true },
]

const riskMetrics = [
  { label: 'Volatility', value: '18.5%', sub: '30-day' },
  { label: 'Sharpe Ratio', value: '1.85', sub: 'Risk-adjusted' },
  { label: 'Max Drawdown', value: '-12.3%', sub: 'Peak to trough' },
  { label: 'Beta', value: '1.15', sub: 'vs ETH' },
]

export default function AnalyticsPage() {
  return (
    <div className="pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-white">Analytics</h1>
            <p className="text-gray-400 mt-1">Track your portfolio performance and insights</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {stats.map((stat) => {
              const Icon = stat.icon
              return (
                <Card key={stat.label} variant="hover">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center">
                      <Icon className={`w-5 h-5 ${stat.positive ? 'text-success-400' : 'text-danger-400'}`} />
                    </div>
                    <span className={`text-sm font-semibold ${stat.positive ? 'text-success-400' : 'text-danger-400'}`}>
                      {stat.change}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500">{stat.label}</p>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                </Card>
              )
            })}
          </div>

          {/* Charts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Portfolio Performance */}
            <Card>
              <h3 className="text-lg font-semibold text-white mb-4">Portfolio Performance</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={PORTFOLIO_HISTORY}>
                    <defs>
                      <linearGradient id="portfolioGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#6366f1" stopOpacity={0.3} />
                        <stop offset="100%" stopColor="#6366f1" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
                    <XAxis dataKey="date" stroke="#6b7280" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
                    <YAxis stroke="#6b7280" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${(v / 1000).toFixed(0)}K`} />
                    <Tooltip
                      contentStyle={{ backgroundColor: '#12121a', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px' }}
                      formatter={(value: number) => [`$${value.toLocaleString()}`, 'Value']}
                    />
                    <Area type="monotone" dataKey="value" stroke="#6366f1" strokeWidth={2} fill="url(#portfolioGradient)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </Card>

            {/* vs Benchmark */}
            <Card>
              <h3 className="text-lg font-semibold text-white mb-4">vs Benchmark</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
                    <XAxis dataKey="month" stroke="#6b7280" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
                    <YAxis stroke="#6b7280" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${(v / 1000).toFixed(0)}K`} />
                    <Tooltip
                      contentStyle={{ backgroundColor: '#12121a', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px' }}
                      formatter={(value: number) => [`$${value.toLocaleString()}`, '']}
                    />
                    <Legend />
                    <Bar dataKey="portfolio" name="Your Portfolio" fill="#6366f1" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="benchmark" name="Market" fill="#6b7280" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Chain Distribution */}
            <Card>
              <h3 className="text-lg font-semibold text-white mb-4">Chain Distribution</h3>
              <div className="space-y-4">
                {chainDistribution.map((item) => (
                  <div key={item.chain}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-300">{item.chain}</span>
                      <span className="text-white font-medium">{item.value}%</span>
                    </div>
                    <div className="h-2 bg-white/[0.06] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-brand-500 to-accent-500 rounded-full transition-all duration-500"
                        style={{ width: `${item.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Risk Metrics */}
            <Card>
              <h3 className="text-lg font-semibold text-white mb-4">Risk Metrics</h3>
              <div className="grid grid-cols-2 gap-4">
                {riskMetrics.map((metric) => (
                  <div key={metric.label} className="p-4 rounded-xl bg-white/[0.02]">
                    <p className="text-sm text-gray-500 mb-1">{metric.label}</p>
                    <p className="text-2xl font-bold text-white">{metric.value}</p>
                    <p className="text-xs text-gray-600 mt-1">{metric.sub}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
