'use client'

import { motion } from 'framer-motion'
import { Wallet, Search, ArrowRightLeft, TrendingUp } from 'lucide-react'
import GradientText from '@/components/ui/GradientText'

const steps = [
  {
    icon: Wallet,
    number: '01',
    title: 'Connect Wallet',
    description: 'Link your MetaMask, WalletConnect, or any Web3 wallet in one click.',
  },
  {
    icon: Search,
    number: '02',
    title: 'Discover Opportunities',
    description: 'AI-powered analytics surface the best yield opportunities across 24 chains.',
  },
  {
    icon: ArrowRightLeft,
    number: '03',
    title: 'Execute Transactions',
    description: 'Swap, bridge, and stake with the best rates aggregated from 50+ protocols.',
  },
  {
    icon: TrendingUp,
    number: '04',
    title: 'Track & Earn',
    description: 'Monitor your portfolio in real-time and auto-compound yields for maximum returns.',
  },
]

export default function HowItWorks() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold uppercase tracking-wider mb-4">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Get Started in <GradientText>Minutes</GradientText>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Four simple steps to take control of your DeFi portfolio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative"
              >
                {i < 3 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-[1px] bg-gradient-to-r from-white/10 to-transparent z-0" />
                )}
                <div className="relative p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.1] transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500/20 to-accent-500/20 border border-brand-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-brand-400" />
                    </div>
                    <span className="text-xs font-mono text-gray-600">{step.number}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
