'use client'

import Link from 'next/link'
import { Zap, Github, Twitter } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/constants'

const footerLinks = {
  Product: [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Portfolio', href: '/dashboard' },
    { name: 'Swap', href: '#' },
    { name: 'Bridge', href: '#' },
  ],
  Resources: [
    { name: 'Documentation', href: '#' },
    { name: 'API', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Changelog', href: '#' },
  ],
  Company: [
    { name: 'About', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold text-white">Nexus</span>
            </Link>
            <p className="text-sm text-gray-500 mb-4 max-w-xs">
              {SITE_CONFIG.description}
            </p>
            <div className="flex items-center gap-3">
              <a href={SITE_CONFIG.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg text-gray-500 hover:text-white hover:bg-white/[0.06] transition-all">
                <Github className="w-4 h-4" />
              </a>
              <a href={`https://twitter.com/${SITE_CONFIG.twitter.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg text-gray-500 hover:text-white hover:bg-white/[0.06] transition-all">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-white mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-gray-500 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-600">
            &copy; 2026 {SITE_CONFIG.name}. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Built for the decentralized future
          </p>
        </div>
      </div>
    </footer>
  )
}
