'use client'

import { motion } from 'framer-motion'
import StatsGrid from '@/components/dashboard/StatsGrid'
import PortfolioChart from '@/components/dashboard/PortfolioChart'
import TokenList from '@/components/dashboard/TokenList'
import ActivityFeed from '@/components/dashboard/ActivityFeed'

export default function DashboardPage() {
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
            <h1 className="text-2xl sm:text-3xl font-bold text-white">Dashboard</h1>
            <p className="text-gray-400 mt-1">Welcome back. Here&apos;s your portfolio overview.</p>
          </div>

          {/* Stats */}
          <div className="mb-6">
            <StatsGrid />
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <PortfolioChart />
            <TokenList />
          </div>

          {/* Activity */}
          <div className="mt-6">
            <ActivityFeed />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
