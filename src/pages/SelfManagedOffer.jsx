import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/images/ClipSon.jpg'

const SelfManagedOffer = () => {
  const navigate = useNavigate()
  const [clipperSpending, setClipperSpending] = useState('')
  const [calculatedPrice, setCalculatedPrice] = useState(null)

  const calculatePrice = (spending) => {
    const amount = parseFloat(spending) || 0
    
    if (amount < 2000) {
      return 247
    } else if (amount >= 2000 && amount < 5000) {
      return 297
    } else if (amount >= 5000 && amount <= 10000) {
      return 347
    } else {
      return 399
    }
  }

  const handleSpendingChange = (e) => {
    const value = e.target.value.replace(/[^0-9.]/g, '')
    setClipperSpending(value)
    
    if (value) {
      const price = calculatePrice(value)
      setCalculatedPrice(price)
    } else {
      setCalculatedPrice(null)
    }
  }

  const handleGetStarted = () => {
    if (!clipperSpending || !calculatedPrice) {
      alert('Please enter how much you spend on clippers to see your price.')
      return
    }
    
    // Navigate to checkout with the calculated price
    navigate(`/close-sale?price=${calculatedPrice}&spending=${clipperSpending}`)
  }

  const getPriceTier = () => {
    if (!clipperSpending) return null
    const amount = parseFloat(clipperSpending) || 0
    
    if (amount < 2000) {
      return { tier: 'Starter', description: 'Spending below $2K' }
    } else if (amount >= 2000 && amount < 5000) {
      return { tier: 'Growth', description: 'Spending $2K-$5K' }
    } else if (amount >= 5000 && amount <= 10000) {
      return { tier: 'Professional', description: 'Spending $5K-$10K' }
    } else {
      return { tier: 'Enterprise', description: 'Spending over $10K' }
    }
  }

  const priceTier = getPriceTier()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img 
            src={logo} 
            alt="ClipSon Logo" 
            className="h-16 w-16 rounded-full object-cover"
          />
        </div>

        {/* Offer Content */}
        <div className="bg-purple-200/20 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-purple-300/30 shadow-2xl">
          <h1 className="text-2xl md:text-3xl font-bold text-center text-white mb-4">
            Self-Managed Campaign
          </h1>
          
          <div className="space-y-4 text-gray-300">
            {/* Price Calculator */}
            <div className="bg-purple-100/10 rounded-xl p-4 md:p-6 border border-purple-300/20">
              <h2 className="text-xl font-bold text-white mb-3 text-center">
                Calculate Your Price
              </h2>

              <div className="max-w-md mx-auto">
                <label htmlFor="clipperSpending" className="block text-white font-medium mb-2 text-sm">
                  How much are you spending on this campaign?
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">$</span>
                  <input
                    type="text"
                    id="clipperSpending"
                    value={clipperSpending}
                    onChange={handleSpendingChange}
                    placeholder="0"
                    className="w-full pl-6 pr-4 py-2.5 bg-gray-800/50 border border-gray-700 rounded-lg text-white text-lg font-semibold placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:border-transparent"
                  />
                </div>

                {/* Price Display */}
                {calculatedPrice && priceTier && (
                  <div className="mt-4 p-3 bg-green-400/10 border border-green-400/30 rounded-lg">
                    <div className="text-center">
                      <p className="text-gray-400 text-xs mb-1">{priceTier.tier} Plan</p>
                      <p className="text-3xl font-bold text-green-400 mb-1">${calculatedPrice}</p>
                      <p className="text-gray-400 text-xs">{priceTier.description}</p>
                      {(parseFloat(clipperSpending) < 2000 || parseFloat(clipperSpending) >= 5000) && (
                        <div className="mt-2 pt-2 border-t border-green-400/20">
                          <p className="text-green-400 text-xs font-medium">
                            ✓ Discord Announcement Included
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Pricing Tiers Info */}
                <div className="mt-4 space-y-1.5 text-xs text-gray-400">
                  <div className="flex justify-between items-center">
                    <span>Spending below $2K</span>
                    <span className="text-white font-medium">$247</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Spending $2K-$5K</span>
                    <span className="text-white font-medium">$297</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Spending $5K-$10K</span>
                    <span className="text-white font-medium">$347</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Spending over $10K</span>
                    <span className="text-white font-medium">$399</span>
                  </div>
                </div>

                {/* Minimum Fee Note */}
                <div className="mt-3 p-2 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                  <p className="text-yellow-300 text-xs text-center">
                    <svg className="w-3 h-3 inline-block mr-1 align-middle" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    Note: $500 is a minimum fee for clipper campaign
                  </p>
                </div>
              </div>
            </div>
            
            {/* Features */}
            <div className="grid md:grid-cols-2 gap-3 mt-4">
              <div className="bg-purple-100/10 rounded-lg p-3">
                <h3 className="text-white font-semibold mb-1 text-sm">Access Top Clippers</h3>
                <p className="text-xs">Army of clippers are on your mission</p>
              </div>
              <div className="bg-purple-100/10 rounded-lg p-3">
                <h3 className="text-white font-semibold mb-1 text-sm">Your Dashboard</h3>
                <p className="text-xs">All video submissions and accounts</p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-6">
              <button
                onClick={handleGetStarted}
                disabled={!calculatedPrice}
                className="inline-block px-6 py-3 bg-green-400 hover:bg-green-300 disabled:bg-gray-600 disabled:cursor-not-allowed text-gray-900 font-semibold text-base rounded-xl transition-all shadow-lg shadow-green-400/30 hover:shadow-green-400/50 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-green-400/50 disabled:transform-none"
                style={{
                  boxShadow: calculatedPrice ? '0 4px 20px rgba(34, 197, 94, 0.3), 0 0 25px rgba(220, 38, 38, 0.1)' : 'none',
                }}
              >
                {calculatedPrice ? `Get Started - $${calculatedPrice}` : 'Enter Your Spending Above'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SelfManagedOffer
