'use client'

import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { Wallet, LogOut, Copy, Check } from 'lucide-react'
import { useState } from 'react'
import { formatAddress } from '@/lib/utils'
import Button from '@/components/ui/Button'

export default function ConnectButton() {
  const { address, isConnected, chain } = useAccount()
  const { connect, connectors, isPending } = useConnect()
  const { disconnect } = useDisconnect()
  const [copied, setCopied] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  const copyAddress = () => {
    if (address) {
      navigator.clipboard.writeText(address)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  if (isConnected && address) {
    return (
      <div className="relative">
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/[0.06] border border-white/[0.08] hover:bg-white/[0.1] transition-all duration-200"
        >
          <div className="w-2 h-2 rounded-full bg-success-500 animate-pulse" />
          <span className="text-sm font-medium text-white">{formatAddress(address)}</span>
          {chain && (
            <span className="text-xs text-gray-400 bg-white/[0.06] px-2 py-0.5 rounded-full">
              {chain.name}
            </span>
          )}
        </button>

        {showMenu && (
          <div className="absolute right-0 mt-2 w-56 py-2 rounded-xl bg-dark-800 border border-white/[0.08] shadow-2xl shadow-black/50">
            <div className="px-4 py-3 border-b border-white/[0.06]">
              <p className="text-xs text-gray-500">Connected</p>
              <p className="text-sm font-mono text-white mt-1">{formatAddress(address)}</p>
            </div>
            <button
              onClick={copyAddress}
              className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/[0.06] transition-colors"
            >
              {copied ? <Check className="w-4 h-4 text-success-400" /> : <Copy className="w-4 h-4" />}
              {copied ? 'Copied!' : 'Copy Address'}
            </button>
            <button
              onClick={() => { disconnect(); setShowMenu(false) }}
              className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-danger-400 hover:bg-danger-500/10 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Disconnect
            </button>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="flex flex-wrap gap-2">
      {connectors.filter(c => c.ready).map((connector) => (
        <Button
          key={connector.uid}
          onClick={() => connect({ connector })}
          disabled={isPending}
          size="sm"
        >
          <Wallet className="w-4 h-4" />
          {isPending ? 'Connecting...' : connector.name}
        </Button>
      ))}
    </div>
  )
}
