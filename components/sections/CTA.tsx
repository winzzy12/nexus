'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'
import Button from '@/components/ui/Button'
import GradientText from '@/components/ui/GradientText'

export default function CTA() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/[0.06] p-8 sm:p-12 lg:p-16 text-center"
        >
          {/* Background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-500/20 rounded-full blur-[120px]" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Open Beta — No Sign Up Required
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Ready to Take Control of
              <br />
              <GradientText>Your DeFi Portfolio?</GradientText>
            </h2>

            <p className="text-gray-400 max-w-xl mx-auto mb-8 text-lg">
              Join 180,000+ users managing $2.4B in assets across 24 chains.
              Start in seconds — just connect your wallet.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/dashboard">
                <Button size="lg">
                  Launch App
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Button variant="secondary" size="lg">
                Read Documentation
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
