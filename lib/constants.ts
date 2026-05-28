export const SITE_CONFIG = {
  name: 'Nexus',
  description: 'Next-generation Web3 portfolio management and DeFi analytics platform',
  url: 'https://nexus-web3.vercel.app',
  twitter: '@nexus_web3',
  github: 'https://github.com/winzzy12/nexus',
}

export const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Analytics', href: '/analytics' },
]

export const FEATURES = [
  {
    icon: 'Wallet',
    title: 'Multi-Chain Wallet',
    description: 'Connect and manage assets across Ethereum, Polygon, Arbitrum, and 20+ chains from a single interface.',
  },
  {
    icon: 'BarChart3',
    title: 'DeFi Analytics',
    description: 'Track your positions, yields, and impermanent loss across all major DeFi protocols in real-time.',
  },
  {
    icon: 'Shield',
    title: 'Security First',
    description: 'Non-custodial architecture with hardware wallet support. Your keys, your crypto. Always.',
  },
  {
    icon: 'Zap',
    title: 'Instant Swaps',
    description: 'Aggregate liquidity from 50+ DEXs for the best swap rates with minimal slippage.',
  },
  {
    icon: 'TrendingUp',
    title: 'Yield Optimizer',
    description: 'Auto-compound yields across protocols. Maximize returns with AI-powered strategies.',
  },
  {
    icon: 'Globe',
    title: 'Cross-Chain Bridge',
    description: 'Bridge assets seamlessly across chains with the lowest fees and fastest confirmation times.',
  },
]

export const STATS = [
  { label: 'Total Value Locked', value: '$2.4B', change: '+12.5%' },
  { label: 'Active Users', value: '180K+', change: '+8.3%' },
  { label: 'Chains Supported', value: '24', change: '+3' },
  { label: 'Transactions', value: '5.2M', change: '+15.7%' },
]

export const TOKENS = [
  { symbol: 'ETH', name: 'Ethereum', price: 3847.52, change: 4.21, balance: 2.45, value: 9436.42, color: '#627EEA', icon: '◆' },
  { symbol: 'BTC', name: 'Bitcoin', price: 68420.00, change: 2.15, balance: 0.125, value: 8552.50, color: '#F7931A', icon: '₿' },
  { symbol: 'SOL', name: 'Solana', price: 178.34, change: -1.82, balance: 45.0, value: 8025.30, color: '#9945FF', icon: '◎' },
  { symbol: 'USDC', name: 'USD Coin', price: 1.00, change: 0.01, balance: 5000, value: 5000.00, color: '#2775CA', icon: '$' },
  { symbol: 'ARB', name: 'Arbitrum', price: 1.82, change: 8.45, balance: 1200, value: 2184.00, color: '#28A0F0', icon: '◈' },
  { symbol: 'MATIC', name: 'Polygon', price: 0.72, change: -3.21, balance: 3000, value: 2160.00, color: '#8247E5', icon: '⬡' },
]

export const ACTIVITIES = [
  { type: 'swap', from: 'ETH', to: 'USDC', amount: '0.5 ETH', received: '$1,923.76', time: '2 min ago', status: 'confirmed' },
  { type: 'receive', token: 'ETH', amount: '1.0 ETH', from: '0x1234...5678', time: '1 hour ago', status: 'confirmed' },
  { type: 'send', token: 'USDC', amount: '$500.00', to: '0x9876...5432', time: '3 hours ago', status: 'confirmed' },
  { type: 'stake', token: 'ETH', amount: '2.0 ETH', protocol: 'Lido', time: '1 day ago', status: 'confirmed' },
  { type: 'swap', from: 'SOL', to: 'USDC', amount: '10 SOL', received: '$1,783.40', time: '2 days ago', status: 'confirmed' },
]

export const PORTFOLIO_HISTORY = [
  { date: 'Jan', value: 18000 },
  { date: 'Feb', value: 21000 },
  { date: 'Mar', value: 19500 },
  { date: 'Apr', value: 24000 },
  { date: 'May', value: 22000 },
  { date: 'Jun', value: 28000 },
  { date: 'Jul', value: 26500 },
  { date: 'Aug', value: 31000 },
  { date: 'Sep', value: 29000 },
  { date: 'Oct', value: 35000 },
  { date: 'Nov', value: 33000 },
  { date: 'Dec', value: 35358 },
]
