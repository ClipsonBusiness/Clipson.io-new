import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import logo from '../assets/images/ClipSon.jpg'

const CloseSale = () => {
  const [searchParams] = useSearchParams()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    agreeToTerms: false,
    discordAnnouncement: false
  })
  const [loading, setLoading] = useState(false)

  // Get price from URL params, default to 247 if not provided
  const campaignPrice = parseFloat(searchParams.get('price')) || 247
  const clipperSpending = searchParams.get('spending') || ''
  const spendingAmount = parseFloat(clipperSpending) || 0
  
  // Discord is free/included for spending $5K or more
  const discordIncluded = spendingAmount >= 5000
  const discordAddOnOriginalPrice = 47
  const discordDiscount = 0.15 // 15% off
  const discordAddOnPrice = discordAddOnOriginalPrice * (1 - discordDiscount) // $39.95
  const discordSavings = discordAddOnOriginalPrice - discordAddOnPrice // $7.05
  const tax = 0 // Adjust if needed
  
  // If Discord is included (spending >= $5K), automatically include it and don't charge
  const discordPrice = (discordIncluded || formData.discordAnnouncement) && !discordIncluded ? discordAddOnPrice : 0
  const total = campaignPrice + discordPrice + tax
  
  // Auto-check Discord if spending >= $5K
  useEffect(() => {
    if (discordIncluded && !formData.discordAnnouncement) {
      setFormData(prev => ({ ...prev, discordAnnouncement: true }))
    }
  }, [discordIncluded])

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setFormData({
      ...formData,
      [e.target.name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.agreeToTerms) {
      alert('Please agree to the terms and conditions to proceed.')
      return
    }
    if (!formData.name || !formData.email) {
      alert('Please fill in all required fields.')
      return
    }

    setLoading(true)

    try {
      // Call your backend API to create a Stripe Checkout session
      // Use relative path - Vite proxy handles it in development
      const apiUrl = '/api/create-checkout-session'
      
      console.log('🔍 Calling API:', apiUrl)
      console.log('📦 Request payload:', {
        name: formData.name,
        email: formData.email,
        amount: total * 100,
        baseAmount: campaignPrice * 100,
        spending: spendingAmount,
        discordAnnouncement: discordIncluded || formData.discordAnnouncement,
      })
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          amount: total * 100, // Convert to cents
          baseAmount: campaignPrice * 100, // Base price in cents
          spending: spendingAmount, // Clipper spending amount
          discordAnnouncement: discordIncluded || formData.discordAnnouncement, // Include if free or selected
        }),
      })

      console.log('📡 Response status:', response.status, response.statusText)
      
      // Check if response is ok
      if (!response.ok) {
        const errorText = await response.text()
        console.error('❌ API Error Response:', errorText)
        try {
          const errorJson = JSON.parse(errorText)
          alert(`Error: ${errorJson.error || errorText}`)
        } catch {
          alert(`Error: ${errorText || 'Server error. Please check your Stripe keys are set in Vercel.'}`)
        }
        setLoading(false)
        return
      }

      const session = await response.json()
      console.log('Session response:', session)

      if (session.error) {
        alert(`Error: ${session.error}`)
        setLoading(false)
        return
      }

      // Use the checkout URL directly (newer Stripe.js doesn't support redirectToCheckout)
      if (session.url) {
        console.log('✅ Redirecting to Stripe Checkout:', session.url)
        // Redirect directly to Stripe Checkout URL
        window.location.href = session.url
        return
      }

      if (!session.id) {
        alert('No checkout session received. Check server logs.')
        setLoading(false)
        return
      }

      // Fallback: Construct checkout URL from session ID
      // This is a workaround until the API is updated to return the URL
      console.log('⚠️ Session URL not provided, constructing from session ID')
      const checkoutUrl = `https://checkout.stripe.com/c/pay/${session.id}`
      console.log('✅ Redirecting to constructed Stripe Checkout URL:', checkoutUrl)
      window.location.href = checkoutUrl
    } catch (error) {
      console.error('❌ Full Error:', error)
      console.error('❌ Error Message:', error.message)
      console.error('❌ Error Stack:', error.stack)
      alert(`Error: ${error.message || error.toString() || 'An error occurred. Please check the browser console for details.'}`)
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img 
            src={logo} 
            alt="ClipSon Logo" 
            className="h-16 w-16 rounded-full object-cover"
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Checkout Form - Left Side (2 columns) */}
          <div className="lg:col-span-2">
            <div className="bg-purple-200/20 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-purple-300/30 shadow-2xl">
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Checkout
              </h1>
              <p className="text-gray-400 mb-6">
                Complete your purchase to launch your self-managed campaign
              </p>
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3 mb-6">
                <p className="text-blue-300 text-sm text-center">
                  <svg className="w-4 h-4 inline-block mr-1 align-middle" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  Monthly subscription - You'll be charged monthly until you cancel
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Contact Information */}
                <div>
                  <h2 className="text-xl font-semibold text-white mb-4">Contact Information</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-white font-medium mb-2 text-sm">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:border-transparent"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-white font-medium mb-2 text-sm">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:border-transparent"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                </div>

                {/* Payment Info Note */}
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                  <p className="text-blue-300 text-sm">
                    <svg className="w-5 h-5 text-blue-400 inline-block mr-2 align-middle" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    You'll be redirected to Stripe's secure checkout page to complete your payment.
                  </p>
                </div>

                {/* Terms and Conditions */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="agreeToTerms"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    className="mt-1 w-5 h-5 rounded border-gray-700 bg-gray-800/50 text-green-400 focus:ring-2 focus:ring-green-400/50"
                  />
                  <label htmlFor="agreeToTerms" className="text-gray-300 text-sm">
                    I agree to the <a href="#" className="text-green-400 hover:underline">Terms and Conditions</a> and <a href="#" className="text-green-400 hover:underline">Privacy Policy</a> *
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-8 py-4 bg-green-400 hover:bg-green-300 disabled:bg-gray-600 disabled:cursor-not-allowed text-gray-900 font-semibold text-lg rounded-xl transition-all shadow-lg shadow-green-400/30 hover:shadow-green-400/50 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-green-400/50"
                  style={{
                    boxShadow: '0 4px 20px rgba(34, 197, 94, 0.3), 0 0 25px rgba(220, 38, 38, 0.1)',
                  }}
                >
                  {loading ? 'Processing...' : `Pay $${total.toFixed(2)} & Launch Campaign`}
                </button>
              </form>

              {/* Security Badges */}
              <div className="mt-6 pt-6 border-t border-gray-700/50">
                <div className="flex flex-wrap items-center justify-center gap-4 text-gray-400 text-xs">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                    <span>256-bit SSL Encryption</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Secure Payment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary - Right Side (1 column) */}
          <div className="lg:col-span-1">
            <div className="bg-purple-200/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-300/30 shadow-2xl sticky top-8">
              <h2 className="text-xl font-semibold text-white mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-white font-medium">Complete Access</p>
                    <p className="text-gray-400 text-sm mt-1">Launch your clipping campaign</p>
                    <p className="text-gray-500 text-xs mt-1">Monthly subscription</p>
                    {clipperSpending && (
                      <p className="text-gray-500 text-xs mt-1">Based on ${parseFloat(clipperSpending).toLocaleString()}/month clipper spending</p>
                    )}
                  </div>
                  <div className="text-right">
                    <p className="text-white font-semibold">${campaignPrice.toFixed(2)}</p>
                    <p className="text-gray-400 text-xs">/month</p>
                  </div>
                </div>
                
                {/* Discord Announcement Add-on */}
                <div className="border-t border-gray-700/50 pt-4">
                  {discordIncluded ? (
                    // Included for free (spending >= $5K)
                    <div className="flex items-start gap-3">
                      <div className="mt-1 w-5 h-5 rounded-full bg-green-400 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start gap-2">
                          <div>
                            <div className="flex items-center gap-2">
                              <p className="text-white font-medium">
                                Discord Announcement
                              </p>
                              <span className="px-2 py-0.5 bg-green-400/20 text-green-400 text-xs font-semibold rounded">
                                INCLUDED
                              </span>
                            </div>
                            <p className="text-gray-400 text-xs mt-1">
                              Announcement inside ClipSon's Discord - Brings campaigns a lot of clippers
                            </p>
                          </div>
                          <div className="text-right ml-2">
                            <span className="text-green-400 font-semibold text-lg">FREE</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Available as add-on (spending < $5K)
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        name="discordAnnouncement"
                        checked={formData.discordAnnouncement}
                        onChange={handleChange}
                        className="mt-1 w-5 h-5 rounded border-gray-700 bg-gray-800/50 text-green-400 focus:ring-2 focus:ring-green-400/50 flex-shrink-0"
                      />
                      <div className="flex-1">
                        <div className="flex justify-between items-start gap-2">
                          <div>
                            <div className="flex items-center gap-2">
                              <p className="text-white font-medium group-hover:text-green-400 transition-colors">
                                Discord Announcement
                              </p>
                              <span className="px-2 py-0.5 bg-green-400/20 text-green-400 text-xs font-semibold rounded">
                                15% OFF
                              </span>
                            </div>
                            <p className="text-gray-400 text-xs mt-1">
                              Announcement inside ClipSon's Discord - Brings campaigns a lot of clippers
                            </p>
                          </div>
                          <div className="text-right ml-2">
                            <div className="flex items-center gap-2">
                              <span className="text-gray-500 text-sm line-through">${discordAddOnOriginalPrice.toFixed(2)}</span>
                              <span className="text-white font-semibold text-lg">${discordAddOnPrice.toFixed(2)}</span>
                            </div>
                            <p className="text-green-400 text-xs mt-0.5">Save ${discordSavings.toFixed(2)}</p>
                          </div>
                        </div>
                      </div>
                    </label>
                  )}
                </div>
                
                {formData.discordAnnouncement && !discordIncluded && (
                  <div className="flex justify-between text-gray-300 text-sm pl-8">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400">Discord Announcement</span>
                      <span className="text-xs text-green-400">(15% off)</span>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-500 text-xs line-through">${discordAddOnOriginalPrice.toFixed(2)}</span>
                        <span>${discordAddOnPrice.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                )}
                
                {discordIncluded && (
                  <div className="flex justify-between text-gray-300 text-sm pl-8">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400">Discord Announcement</span>
                      <span className="text-xs text-green-400">(Included)</span>
                    </div>
                    <div className="text-right">
                      <span className="text-green-400">FREE</span>
                    </div>
                  </div>
                )}
                
                {tax > 0 && (
                  <div className="flex justify-between text-gray-400">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                )}
              </div>

              <div className="border-t border-gray-700/50 pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-lg font-semibold text-white">Total</span>
                    <p className="text-gray-400 text-xs">per month</p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-green-400">${total.toFixed(2)}</span>
                    <p className="text-gray-400 text-xs">/month</p>
                  </div>
                </div>
              </div>

              {/* What's Included */}
              <div className="border-t border-gray-700/50 pt-4">
                <h3 className="text-white font-semibold mb-3">What's Included:</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Your Dashboard - All video submissions and accounts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Access Top Clippers - Army of clippers on your mission</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Full Control - Manage your campaign on your terms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>24/7 Support</span>
                  </li>
                  {formData.discordAnnouncement && (
                    <li className="flex items-start gap-2 pt-2 border-t border-gray-700/30">
                      <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-green-400 font-medium">Discord Announcement - Brings campaigns a lot of clippers</span>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CloseSale
