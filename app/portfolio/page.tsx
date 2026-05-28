'use client'

import { motion } from 'framer-motion'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import { TOKENS, PORTFOLIO_HISTORY } from '@/lib/constants'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'
import { TrendingUp, TrendingDown, Send, ArrowRightLeft, Download } from 'lucide-react'
import { formatUSD, formatPercent } from '@/lib/utils'

const COLORS = ['#6366f1', '#a855f7', '#10b981', '#f59e0b', '#3b82f6', '#ef4444']

const allocationData = TOKENS.map((t, i) => ({
  name: t.symbol,
  value: t.value,
  color: COLORS[i % COLORS.length],
}))

const totalValue = TOKENS.reduce((sum, t) => sum + t.value, 0)

export default function PortfolioPage() {
  return (
    <div className="pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-white">Portfolio</h1>
              <p className="text-gray-400 mt-1">Manage your assets across all chains</p>
            </div>
            <div className="flex gap-2">
              <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-500 text-white text-sm font-semibold hover:bg-brand-600 transition-colors">
                <Send className="w-4 h-4" />
                Send
              </button>
              <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.06] border border-white/[0.08] text-white text-sm font-semibold hover:bg-white/[0.1] transition-colors">
                <ArrowRightLeft className="w-4 h-4" />
                Swap
              </button>
            </div>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Allocation Chart */}
            <Card>
              <h3 className="text-lg font-semibold text-white mb-4">Asset Allocation</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={allocationData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={90}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {allocationData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#12121a',
                        border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: '12px',
                      }}
                      formatter={(value: number) => [`$${value.toLocaleString()}`, 'Value']}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-4">
                {allocationData.map((item, i) => (
                  <div key={item.name} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-xs text-gray-400">{item.name}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Total Value */}
            <div className="lg:col-span-2 space-y-4">
              <Card>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Total Portfolio Value</p>
                    <p className="text-4xl font-bold text-white">{formatUSD(totalValue)}</p>
                    <p className="text-sm text-success-400 mt-2 flex items-center gap-1">
                      <TrendingUp className="w-4 h-4" />
                      +$1,425.30 (4.21%) today
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-400 mb-1">24h Change</p>
                    <p className="text-2xl font-bold text-success-400">+$1,425.30</p>
                  </div>
                </div>
              </Card>

              {/* Token List */}
              <Card>
                <h3 className="text-lg font-semibold text-white mb-4">Your Assets</h3>
                <div className="space-y-2">
                  {TOKENS.map((token) => (
                    <div
                      key={token.symbol}
                      className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] hover:bg-white/[0.04] transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold"
                          style={{ backgroundColor: `${token.color}20`, color: token.color }}
                        >
                          {token.icon}
                        </div>
                        <div>
                          <p className="font-semibold text-white">{token.symbol}</p>
                          <p className="text-sm text-gray-500">{token.balance} {token.symbol}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-white">{formatUSD(token.value)}</p>
                        <span className={`flex items-center justify-end gap-1 text-sm ${
                          token.change >= 0 ? 'text-success-400' : 'text-danger-400'
                        }`}>
                          {token.change >= 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                          {formatPercent(token.change)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
