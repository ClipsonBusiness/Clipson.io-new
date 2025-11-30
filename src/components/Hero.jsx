import React from 'react'
import logo from '../assets/images/ClipSon.jpg'

const Hero = () => {
  // Platform logo components
  const PlatformLogo = ({ platform }) => {
    const logos = {
      youtube: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
      instagram: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      tiktok: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
      ),
      x: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      facebook: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
    }
    return logos[platform] || null
  }

  const socialPlatforms = [
    { name: 'YouTube', platform: 'youtube', position: 'top-right', revenue: '$8.2K', celebrity: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face' },
    { name: 'Instagram', platform: 'instagram', position: 'top-left', revenue: '$10.8K', celebrity: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face' },
    { name: 'TikTok', platform: 'tiktok', position: 'bottom-right', revenue: '$6.5K', celebrity: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face' },
    { name: 'X', platform: 'x', position: 'bottom-left', revenue: '$4.1K', celebrity: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face' },
    { name: 'Facebook', platform: 'facebook', position: 'center-right', revenue: '$7.4K', celebrity: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face' },
  ]

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden bg-green-50">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950"></div>
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          transform: 'perspective(500px) rotateX(60deg)',
          transformOrigin: 'center bottom',
        }}
      ></div>

      {/* Subtle glow dots */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-green-400/20 blur-sm"
              style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `pulse ${3 + Math.random() * 4}s ease-in-out infinite`,
            }}
          ></div>
        ))}
      </div>

      {/* Floating white dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(80)].map((_, i) => {
          const size = Math.random() * 4 + 2
          const duration = Math.random() * 10 + 15
          const delay = Math.random() * 5
          const left = Math.random() * 100
          
          return (
            <div
              key={`float-${i}`}
              className="absolute rounded-full bg-white/70"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${left}%`,
                bottom: '-10px',
                animation: `float-up ${duration}s linear infinite`,
                animationDelay: `${delay}s`,
                boxShadow: '0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.4)',
              }}
            ></div>
          )
        })}
      </div>

      {/* Snowflakes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(40)].map((_, i) => {
          const size = Math.random() * 8 + 4
          const duration = Math.random() * 15 + 20
          const delay = Math.random() * 10
          const left = Math.random() * 100
          
          return (
            <div
              key={`snowflake-${i}`}
              className="absolute text-white/60"
              style={{
                fontSize: `${size}px`,
                left: `${left}%`,
                bottom: '-20px',
                animation: `snowflake-float ${duration}s linear infinite`,
                animationDelay: `${delay}s`,
              }}
            >
              ❄
            </div>
          )
        })}
      </div>

      {/* Subtle Christmas twinkles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => {
          const colors = ['rgba(220, 38, 38, 0.6)', 'rgba(34, 197, 94, 0.6)'] // red and green
          const color = colors[Math.floor(Math.random() * colors.length)]
          const size = Math.random() * 3 + 2
          const duration = Math.random() * 2 + 1.5
          const delay = Math.random() * 2
          const left = Math.random() * 100
          const top = Math.random() * 100
          
          return (
            <div
              key={`twinkle-${i}`}
              className="absolute rounded-full"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${left}%`,
                top: `${top}%`,
                backgroundColor: color,
                animation: `twinkle ${duration}s ease-in-out infinite`,
                animationDelay: `${delay}s`,
                boxShadow: `0 0 ${size * 2}px ${color}`,
              }}
            ></div>
          )
        })}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Post Clips.{' '}
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Guaranteed Clipper Earnings.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl leading-relaxed">
              ClipSon is the platform that pays clippers for making viral short-form content. Join thousands of clippers earning from every view.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12">
              <a 
                href="https://app.pink58.com/clipper-login.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full bg-green-400 text-gray-900 font-semibold text-lg hover:bg-green-300 transition-all shadow-lg shadow-green-400/30 hover:shadow-green-400/50 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-green-400/50 inline-block text-center relative overflow-hidden"
                style={{
                  boxShadow: '0 4px 20px rgba(34, 197, 94, 0.3), 0 0 25px rgba(220, 38, 38, 0.1)',
                }}
              >
                <span className="relative z-10">Start Clipping</span>
              </a>
            </div>
          </div>

          {/* Right: Illustration */}
          <div className="relative hidden lg:block">
            <div className="relative w-full h-[500px]">
              {/* Central hub */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-green-400/20 to-emerald-500/20 backdrop-blur-md border border-green-400/30 flex items-center justify-center shadow-lg shadow-green-400/20 overflow-hidden" style={{
                animation: 'glow-pulse 3s ease-in-out infinite'
              }}>
                <img 
                  src={logo} 
                  alt="ClipSon Logo" 
                  className="w-full h-full object-cover rounded-full"
                  loading="lazy"
                />
              </div>

              {/* Social platform icons orbiting */}
              {socialPlatforms.map((platform, index) => {
                const positions = {
                  'top-right': { top: '10%', right: '10%' },
                  'top-left': { top: '10%', left: '10%' },
                  'bottom-right': { bottom: '10%', right: '10%' },
                  'bottom-left': { bottom: '10%', left: '10%' },
                  'center-right': { top: '50%', right: '5%', transform: 'translateY(-50%)' },
                }
                const pos = positions[platform.position]

                // Tag position relative to icon
                const tagPositions = {
                  'top-right': { top: '-20%', left: '50%', transform: 'translateX(-50%)' },
                  'top-left': { top: '-20%', right: '50%', transform: 'translateX(50%)' },
                  'bottom-right': { bottom: '-20%', left: '50%', transform: 'translateX(-50%)' },
                  'bottom-left': { bottom: '-20%', right: '50%', transform: 'translateX(50%)' },
                  'center-right': { top: '-20%', left: '50%', transform: 'translateX(-50%)' },
                }
                const tagPos = tagPositions[platform.position]

                const animationDelay = index * 0.3
                const animationDuration = 3 + (index * 0.2)
                
                return (
                  <div 
                    key={index} 
                    className="absolute" 
                    style={{
                      ...pos,
                      animation: `float ${animationDuration}s ease-in-out infinite`,
                      animationDelay: `${animationDelay}s`
                    }}
                  >
                    {/* Celebrity image behind */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full overflow-hidden opacity-30 blur-sm -z-10">
                      <img 
                        src={platform.celebrity} 
                        alt={`${platform.name} creator`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        onError={(e) => {
                          e.target.style.display = 'none'
                        }}
                      />
                    </div>
                    {/* Logo circle */}
                    <div className="relative backdrop-blur-md bg-white/10 border border-green-400/30 rounded-full w-20 h-20 flex items-center justify-center shadow-lg shadow-green-400/20 hover:scale-110 transition-transform z-10">
                      <div className="text-white">
                        <PlatformLogo platform={platform.platform} />
                      </div>
                    </div>
                    {/* Revenue tag */}
                    <div 
                      className="absolute whitespace-nowrap backdrop-blur-md bg-green-400/20 border border-green-400/50 rounded-lg px-3 py-1.5 shadow-lg shadow-green-400/20 z-20"
                      style={tagPos}
                    >
                      <div className="text-xs font-semibold text-green-400">
                        {platform.revenue}
                      </div>
                      <div className="text-[10px] text-gray-300">
                        Revenue for the month
                      </div>
                    </div>
                  </div>
                )
              })}

              {/* Connection lines - behind everything */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                {socialPlatforms.map((platform, index) => {
                  const centerX = 50
                  const centerY = 50
                  const positions = [
                    { x: 80, y: 20 }, // top-right
                    { x: 20, y: 20 }, // top-left
                    { x: 80, y: 80 }, // bottom-right
                    { x: 20, y: 80 }, // bottom-left
                    { x: 90, y: 50 }, // center-right
                  ]
                  const end = positions[index]
                  
                  return (
                    <line
                      key={index}
                      x1={`${centerX}%`}
                      y1={`${centerY}%`}
                      x2={`${end.x}%`}
                      y2={`${end.y}%`}
                      stroke="rgba(34, 197, 94, 0.3)"
                      strokeWidth="1"
                      strokeDasharray="4,4"
                      style={{
                        animation: `dash-flow ${2 + index * 0.3}s linear infinite`,
                        strokeDashoffset: 0
                      }}
                    />
                  )
                })}
              </svg>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Hero
