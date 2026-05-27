'use client'

import { motion } from 'framer-motion'
import GradientText from '@/components/ui/GradientText'
import { STATS } from '@/lib/constants'

export default function Stats() {
  return (
    <section className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent-500/10 border border-accent-500/20 text-accent-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Live Stats
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Trusted by <GradientText>Thousands</GradientText>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-brand-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.1] transition-all duration-300 text-center">
                <p className="text-3xl sm:text-4xl font-bold text-white mb-2">{stat.value}</p>
                <p className="text-sm text-gray-500 mb-2">{stat.label}</p>
                <span className="text-xs text-success-400 font-medium">{stat.change}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
