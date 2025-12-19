import React from 'react'
import logo from '../assets/images/ClipSon.jpg'

const SelfManagedOffer = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img 
            src={logo} 
            alt="ClipSon Logo" 
            className="h-24 w-24 rounded-full object-cover"
          />
        </div>

        {/* Offer Content */}
        <div className="bg-purple-200/20 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-purple-300/30 shadow-2xl">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-white mb-6">
            Self-Managed Campaign
          </h1>
          
          <div className="space-y-6 text-gray-300">
            <p className="text-lg text-center">
              Take full control of your clipping campaign with our self-managed solution.
            </p>
            
            {/* Features */}
            <div className="grid md:grid-cols-2 gap-4 mt-8">
              <div className="bg-purple-100/10 rounded-lg p-4">
                <h3 className="text-white font-semibold mb-2">Full Control</h3>
                <p className="text-sm">Manage your campaign on your own terms</p>
              </div>
              <div className="bg-purple-100/10 rounded-lg p-4">
                <h3 className="text-white font-semibold mb-2">Access Top Clippers</h3>
                <p className="text-sm">Army of clippers are on your mission</p>
              </div>
              <div className="bg-purple-100/10 rounded-lg p-4">
                <h3 className="text-white font-semibold mb-2">Cost Effective</h3>
                <p className="text-sm">Save on management fees</p>
              </div>
              <div className="bg-purple-100/10 rounded-lg p-4">
                <h3 className="text-white font-semibold mb-2">Your Dashboard</h3>
                <p className="text-sm">All video submissions and accounts</p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-8">
              <a 
                href="https://app.clipson.io/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-green-400 hover:bg-green-300 text-gray-900 font-semibold text-lg rounded-xl transition-all shadow-lg shadow-green-400/30 hover:shadow-green-400/50 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-green-400/50"
                style={{
                  boxShadow: '0 4px 20px rgba(34, 197, 94, 0.3), 0 0 25px rgba(220, 38, 38, 0.1)',
                }}
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SelfManagedOffer
