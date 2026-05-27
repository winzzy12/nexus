'use client'

import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import { ACTIVITIES } from '@/lib/constants'
import { ArrowRightLeft, ArrowDownToLine, ArrowUpFromLine, Lock } from 'lucide-react'

const typeIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  swap: ArrowRightLeft,
  receive: ArrowDownToLine,
  send: ArrowUpFromLine,
  stake: Lock,
}

const typeColors: Record<string, string> = {
  swap: 'text-brand-400',
  receive: 'text-success-400',
  send: 'text-danger-400',
  stake: 'text-accent-400',
}

export default function ActivityFeed() {
  return (
    <Card>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white">Recent Activity</h3>
        <button className="text-xs text-brand-400 hover:text-brand-300 transition-colors">View All</button>
      </div>
      <div className="space-y-1">
        {ACTIVITIES.map((activity, i) => {
          const Icon = typeIcons[activity.type]
          return (
            <div
              key={i}
              className="flex items-center justify-between p-3 rounded-xl hover:bg-white/[0.04] transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-lg bg-white/[0.04] flex items-center justify-center ${typeColors[activity.type]}`}>
                  {Icon && <Icon className="w-4 h-4" />}
                </div>
                <div>
                  <p className="text-sm font-medium text-white capitalize">
                    {activity.type === 'swap'
                      ? `Swap ${activity.from} → ${activity.to}`
                      : `${activity.type} ${activity.token}`}
                  </p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-white">{activity.amount}</p>
                <Badge variant="success" size="sm">{activity.status}</Badge>
              </div>
            </div>
          )
        })}
      </div>
    </Card>
  )
}
