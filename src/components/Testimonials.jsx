import React from 'react'

const Testimonials = () => {
  const discordInviteLink = 'https://discord.gg/jkPPdK7Qs8'

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-green-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Clippers Are Saying
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Join thousands of Clippers already earning on ClipSon.
          </p>

          {/* Discord Invite Card */}
          <div className="max-w-md mx-auto bg-gradient-to-br from-indigo-600 to-purple-700 p-8 rounded-xl shadow-2xl text-white">
            <div className="text-6xl mb-4">
              <i className="fab fa-discord"></i> {/* Placeholder for Discord icon */}
            </div>
            <h3 className="text-2xl font-bold mb-3">Join Our Discord Community</h3>
            <p className="text-indigo-100 mb-8 text-lg max-w-2xl mx-auto">
              Connect with thousands of clippers, get instant support, share tips, and celebrate wins together.
            </p>
            <a
              href={discordInviteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-indigo-700 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
            >
              Join Discord Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

