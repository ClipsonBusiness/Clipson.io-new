import React from 'react'
import logo from '../assets/images/ClipSon.jpg'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src={logo} 
                alt="ClipSon Logo" 
                className="h-20 w-20 md:h-24 md:w-24 rounded-full object-cover"
                loading="lazy"
              />
            </div>
            <p className="text-sm text-gray-400">
              Turn your creativity into consistent income with every view.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Platform</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#how-it-works" className="hover:text-clipson-green transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-clipson-green transition-colors">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-white font-semibold mb-4">Community</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://discord.gg/jkPPdK7Qs8" target="_blank" rel="noopener noreferrer" className="hover:text-clipson-green transition-colors">
                  Discord
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/clipson/" target="_blank" rel="noopener noreferrer" className="hover:text-clipson-green transition-colors">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} ClipSon. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="hover:text-clipson-green transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-clipson-green transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
