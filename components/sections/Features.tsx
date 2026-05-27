'use client'

import { motion } from 'framer-motion'
import {
  Wallet, BarChart3, Shield, Zap, TrendingUp, Globe,
} from 'lucide-react'
import Card from '@/components/ui/Card'
import GradientText from '@/components/ui/GradientText'
import { FEATURES } from '@/lib/constants'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Wallet, BarChart3, Shield, Zap, TrendingUp, Globe,
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Everything You Need to
            <br />
            <GradientText>Manage Your DeFi Portfolio</GradientText>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Powerful tools designed for both beginners and experienced DeFi users.
            One platform to rule them all.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {FEATURES.map((feature) => {
            const Icon = iconMap[feature.icon]
            return (
              <motion.div key={feature.title} variants={itemVariants}>
                <Card variant="hover" className="h-full">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500/20 to-accent-500/20 border border-brand-500/20 flex items-center justify-center mb-5">
                    {Icon && <Icon className="w-6 h-6 text-brand-400" />}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
