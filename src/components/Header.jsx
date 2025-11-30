import React from 'react'
import logo from '../assets/images/ClipSon.jpg'

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent md:bg-transparent backdrop-blur-sm md:backdrop-blur-none">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <img 
              src={logo} 
              alt="ClipSon Logo" 
              className="h-16 sm:h-20 md:h-24 w-16 sm:w-20 md:w-24 rounded-full object-cover"
              fetchPriority="high"
              width="96"
              height="96"
            />
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center flex-shrink-0">
            <a 
              href="https://app.clipson.io/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-green-400 text-gray-900 font-semibold text-sm sm:text-base hover:bg-green-300 transition-all shadow-lg shadow-green-400/30 hover:shadow-green-400/50 focus:outline-none focus:ring-2 focus:ring-green-400/50 inline-block text-center relative overflow-hidden whitespace-nowrap"
              style={{
                boxShadow: '0 4px 15px rgba(34, 197, 94, 0.3), 0 0 20px rgba(220, 38, 38, 0.1)',
              }}
            >
              <span className="relative z-10">Start Clipping</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
