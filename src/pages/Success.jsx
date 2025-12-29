import React, { useEffect, useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import logo from '../assets/images/ClipSon.jpg'

const Success = () => {
  const [searchParams] = useSearchParams()
  const sessionId = searchParams.get('session_id')

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full">
        <div className="bg-purple-200/20 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-purple-300/30 shadow-2xl text-center">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img 
              src={logo} 
              alt="ClipSon Logo" 
              className="h-20 w-20 rounded-full object-cover"
            />
          </div>

          {/* Success Icon */}
          <div className="mb-6">
            <div className="w-20 h-20 bg-green-400 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-12 h-12 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>

          {/* Success Message */}
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Payment Successful!
          </h1>
          <p className="text-gray-300 text-lg mb-8">
            Thank you for your purchase. Your campaign access will be activated shortly.
          </p>

          {/* Session ID (for debugging) */}
          {sessionId && (
            <p className="text-gray-500 text-sm mb-8">
              Session ID: {sessionId}
            </p>
          )}

          {/* Next Steps */}
          <div className="bg-purple-100/10 rounded-lg p-6 mb-8 text-left">
            <h2 className="text-white font-semibold mb-4">What's Next?</h2>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>You'll receive a confirmation email shortly</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Access your dashboard at <a href="https://app.clipson.io" className="text-green-400 hover:underline">app.clipson.io</a></span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Start launching your clipping campaign</span>
              </li>
            </ul>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://app.clipson.io/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-green-400 hover:bg-green-300 text-gray-900 font-semibold text-lg rounded-xl transition-all shadow-lg shadow-green-400/30 hover:shadow-green-400/50 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-green-400/50"
              style={{
                boxShadow: '0 4px 20px rgba(34, 197, 94, 0.3), 0 0 25px rgba(220, 38, 38, 0.1)',
              }}
            >
              Go to Dashboard
            </a>
            <Link 
              to="/"
              className="px-8 py-4 bg-transparent border-2 border-white/30 hover:bg-white/10 hover:border-white/50 text-white font-semibold text-lg rounded-xl transition-all transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Success

