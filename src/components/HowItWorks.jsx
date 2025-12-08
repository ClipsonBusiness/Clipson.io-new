import React from 'react'

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24" style={{
      background: 'linear-gradient(to bottom, rgb(15 23 42) 0%, rgb(30 41 59) 30%, rgb(51 65 85) 60%, rgb(67 56 202) 100%)'
    }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-200 mb-3">
            How ClipSon works.
          </h2>
          <p className="text-center text-gray-300 text-lg mb-16 max-w-2xl mx-auto">
            The easiest way to get paid for your content.
          </p>

          {/* Three Step Panels */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {/* Step 1: Link Account */}
            <div className="bg-purple-200/20 backdrop-blur-sm rounded-2xl p-4 border border-purple-300/30">
              <div className="bg-purple-100/10 rounded-xl p-4 mb-4 min-h-[140px] flex items-center justify-center">
                <div className="w-full">
                  {/* Video icon on left */}
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="h-1 bg-gray-400/30 rounded-full mb-1.5"></div>
                      <div className="h-1 bg-gray-400/30 rounded-full w-3/4"></div>
                    </div>
                  </div>
                  
                  {/* Connected accounts */}
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="w-7 h-7 bg-black rounded-full flex items-center justify-center mr-2">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                        </svg>
                      </div>
                      <span className="text-gray-300 text-xs font-medium">@mrbeast</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-7 h-7 bg-black rounded-full flex items-center justify-center mr-2">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </div>
                      <span className="text-gray-300 text-xs font-medium">@elonmusk</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-7 h-7 bg-black rounded-full flex items-center justify-center mr-2">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                      </div>
                      <span className="text-gray-300 text-xs font-medium">@donaldtrump</span>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-200 mb-1">Link account</h3>
              <p className="text-gray-400 text-xs">Connect your social profiles to ClipSon to verify ownership.</p>
            </div>

            {/* Step 2: Submit Content */}
            <div className="bg-purple-200/20 backdrop-blur-sm rounded-2xl p-4 border border-purple-300/30">
              <div className="bg-purple-100/10 rounded-xl p-3 mb-4 min-h-[140px]">
                {/* Content preview */}
                <div className="bg-gray-800 rounded-lg overflow-hidden mb-2 relative">
                  <div className="h-20 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-10 h-10 bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-1">
                        <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                      <p className="text-white text-[10px] font-semibold">Your Clip</p>
                    </div>
                  </div>
                </div>
                
                {/* Input field */}
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-2 py-1.5 flex items-center gap-2">
                    <svg className="w-3 h-3 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span className="text-gray-400 text-xs">/p/your_post_id/</span>
                  </div>
                  <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                    <svg className="w-4 h-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                  </button>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-200 mb-1">Submit content</h3>
              <p className="text-gray-400 text-xs">Create and post content, then submit your link to start tracking views.</p>
            </div>

            {/* Step 3: Get Paid */}
            <div className="bg-purple-200/20 backdrop-blur-sm rounded-2xl p-4 border border-purple-300/30">
              <div className="bg-purple-100/10 rounded-xl p-3 mb-4 min-h-[140px]">
                <div className="bg-gray-800 rounded-xl p-3">
                  <h4 className="text-gray-300 text-xs font-medium mb-2">My balance</h4>
                  <div className="text-2xl font-bold text-white mb-2">$8,512.71</div>
                  <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg mb-2 transition-colors text-xs">
                    Withdraw Earnings
                  </button>
                  
                  {/* Recent transactions - reduced */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 bg-gray-700 rounded-full flex items-center justify-center">
                          <span className="text-white text-[10px] font-bold">$</span>
                        </div>
                        <div>
                          <p className="text-white text-xs font-medium">ClipSon Earnings</p>
                          <p className="text-gray-400 text-[10px]">Nov 3, 2025</p>
                        </div>
                      </div>
                      <span className="text-green-400 font-semibold text-xs">+$1,399.60</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 bg-gray-700 rounded-full flex items-center justify-center">
                          <span className="text-white text-[10px] font-bold">$</span>
                        </div>
                        <div>
                          <p className="text-white text-xs font-medium">ClipSon Earnings</p>
                          <p className="text-gray-400 text-[10px]">Nov 2, 2025</p>
                        </div>
                      </div>
                      <span className="text-green-400 font-semibold text-xs">+$691.04</span>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-200 mb-1">Get paid</h3>
              <p className="text-gray-400 text-xs">Earn automatically for every verified view your content generates.</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <a 
              href="https://app.clipson.io/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors shadow-lg"
            >
              Start earning
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
