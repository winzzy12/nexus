# Nexus — Web3 Portfolio & DeFi Platform

> Next-generation Web3 portfolio management and DeFi analytics platform built with Next.js 14, Tailwind CSS, and wagmi.

**🚀 [Live Demo](https://nexus1-zeta.vercel.app/)**

---

## About The Project

**Nexus** is a modern, feature-rich Web3 portfolio management platform designed for the decentralized future. It provides users with a unified interface to manage their crypto assets across multiple blockchain networks, track portfolio performance in real-time, and access DeFi analytics — all from a single, elegant dashboard.

### Why Nexus?

The crypto landscape is fragmented. Users juggle multiple wallets, different chain explorers, and scattered DeFi protocols. Nexus solves this by aggregating everything into one powerful yet intuitive interface:

- **Unified Portfolio View** — See all your assets across Ethereum, Polygon, Arbitrum, Optimism, Base, and more in one dashboard
- **Real-time Analytics** — Track portfolio performance, compare against market benchmarks, and identify opportunities
- **Non-custodial Architecture** — Your keys, your crypto. Nexus never holds your funds or private keys
- **Institutional-grade Design** — Glassmorphism UI with smooth animations, built for both beginners and power users

### Built For

- **DeFi Enthusiasts** — Track yields, positions, and opportunities across chains
- **Portfolio Managers** — Monitor allocation, performance, and risk metrics
- **Crypto Traders** — Analyze market trends and execute swaps at best rates
- **Web3 Developers** — Reference implementation for wagmi + Next.js integration

### Key Highlights

| Feature | Description |
|---------|-------------|
| Multi-Chain Support | 24+ blockchain networks supported |
| Wallet Integration | MetaMask, WalletConnect, and 100+ wallets |
| Interactive Charts | Real-time portfolio tracking with Recharts |
| Dark Theme | Premium glassmorphism design |
| Mobile First | Fully responsive across all devices |
| SEO Optimized | Open Graph, Twitter cards, meta tags |
| Type Safe | Full TypeScript coverage |
| Open Source | MIT License, community driven |

---

## Features

- 🌐 **Multi-chain wallet connection** (MetaMask, WalletConnect)
- 📊 **Real-time portfolio tracking** with interactive charts
- 💎 **Glassmorphism dark theme UI**
- ⚡ **Lightning-fast performance** with Next.js App Router
- 📱 **Fully responsive** (mobile, tablet, desktop)
- 🔍 **SEO optimized** with Open Graph and Twitter cards
- 🎨 **Smooth animations** with Framer Motion
- 🔒 **Non-custodial** — your keys, your crypto

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 3.4
- **Web3:** wagmi + viem
- **Animations:** Framer Motion
- **Charts:** Recharts
- **Icons:** Lucide React
- **State:** TanStack Query

## Quick Start

```bash
# Install dependencies
npm install

# Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
nexus/
├── app/
│   ├── layout.tsx           # Root layout with providers
│   ├── page.tsx             # Landing page
│   ├── globals.css          # Global styles
│   ├── providers.tsx        # Web3 providers
│   └── dashboard/
│       └── page.tsx         # Dashboard page
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx       # Responsive navbar
│   │   └── Footer.tsx       # Site footer
│   ├── ui/
│   │   ├── Button.tsx       # Button component
│   │   ├── Card.tsx         # Glass card component
│   │   ├── Badge.tsx        # Status badges
│   │   └── GradientText.tsx # Gradient text
│   ├── sections/
│   │   ├── Hero.tsx         # Hero section
│   │   ├── Features.tsx     # Features grid
│   │   ├── Stats.tsx        # Live stats
│   │   ├── HowItWorks.tsx   # How it works
│   │   └── CTA.tsx          # Call to action
│   ├── wallet/
│   │   └── ConnectButton.tsx # Wallet connect
│   └── dashboard/
│       ├── StatsGrid.tsx     # Overview stats
│       ├── PortfolioChart.tsx # Portfolio chart
│       ├── TokenList.tsx     # Token holdings
│       └── ActivityFeed.tsx  # Transaction history
├── lib/
│   ├── utils.ts             # Utility functions
│   ├── wagmi.ts             # Web3 config
│   └── constants.ts         # App constants
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
└── vercel.json
```

## Deploy to Vercel

```bash
# Push to GitHub
git push origin main

# Deploy to Vercel
# https://vercel.com/new → Select repository → Deploy
```

## Environment Variables

```env
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_project_id
NEXT_PUBLIC_INFURA_KEY=your_infura_key
NEXT_PUBLIC_ALCHEMY_KEY=your_alchemy_key
```

## License

MIT
