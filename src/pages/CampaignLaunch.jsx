import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/images/ClipSon.jpg'

const CampaignLaunch = () => {
  const navigate = useNavigate()

  const handleManaged = () => {
    window.location.href = 'https://www.clipson.net/'
  }

  const handleSelfManaged = () => {
    navigate('/self-managed-offer')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950 flex items-center justify-center px-4">
      <div className="max-w-4xl w-full">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img 
            src={logo} 
            alt="ClipSon Logo" 
            className="h-24 w-24 rounded-full object-cover"
          />
        </div>

        {/* Question Card */}
        <div className="bg-purple-200/20 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-purple-300/30 shadow-2xl">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
            Launch a Campaign
          </h1>
          <p className="text-xl md:text-2xl text-center text-gray-300 mb-12">
            Do you want it managed or self hosting?
          </p>

          {/* Options */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Managed Option */}
            <button
              onClick={handleManaged}
              className="bg-green-400 hover:bg-green-300 text-gray-900 font-semibold text-lg py-6 px-8 rounded-xl transition-all shadow-lg shadow-green-400/30 hover:shadow-green-400/50 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-green-400/50"
              style={{
                boxShadow: '0 4px 20px rgba(34, 197, 94, 0.3), 0 0 25px rgba(220, 38, 38, 0.1)',
              }}
            >
              <div className="text-2xl font-bold mb-2">Managed</div>
              <div className="text-sm opacity-90">
                We handle everything for you
              </div>
            </button>

            {/* Self Hosting Option */}
            <button
              onClick={handleSelfManaged}
              className="bg-transparent border-2 border-white/30 hover:bg-white/10 hover:border-white/50 text-white font-semibold text-lg py-6 px-8 rounded-xl transition-all transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              <div className="text-2xl font-bold mb-2">Self Hosting</div>
              <div className="text-sm opacity-90">
                Manage your campaign yourself
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CampaignLaunch
