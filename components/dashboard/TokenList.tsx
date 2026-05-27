'use client'

import Card from '@/components/ui/Card'
import { TOKENS } from '@/lib/constants'
import { TrendingUp, TrendingDown, ArrowUpRight, ArrowDownRight } from 'lucide-react'
import { formatUSD, formatPercent } from '@/lib/utils'

export default function TokenList() {
  return (
    <Card className="overflow-hidden">
      <h3 className="text-lg font-semibold text-white mb-4">Assets</h3>
      <div className="space-y-1">
        {TOKENS.map((token) => (
          <div
            key={token.symbol}
            className="flex items-center justify-between p-3 rounded-xl hover:bg-white/[0.04] transition-colors cursor-pointer group"
          >
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold"
                style={{ backgroundColor: `${token.color}20`, color: token.color }}
              >
                {token.icon}
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{token.symbol}</p>
                <p className="text-xs text-gray-500">{token.name}</p>
              </div>
            </div>

            <div className="text-right">
              <p className="text-sm font-semibold text-white">{formatUSD(token.value)}</p>
              <div className="flex items-center justify-end gap-1">
                <span className="text-xs text-gray-500">{token.balance} {token.symbol}</span>
                <span className={`flex items-center gap-0.5 text-xs font-medium ${
                  token.change >= 0 ? 'text-success-400' : 'text-danger-400'
                }`}>
                  {token.change >= 0 ? (
                    <ArrowUpRight className="w-3 h-3" />
                  ) : (
                    <ArrowDownRight className="w-3 h-3" />
                  )}
                  {formatPercent(token.change)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
