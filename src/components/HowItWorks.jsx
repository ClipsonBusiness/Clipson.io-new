import React from 'react'

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24" style={{
      background: 'linear-gradient(to bottom, rgb(15 23 42) 0%, rgb(30 41 59) 30%, rgb(51 65 85) 60%, rgb(240 253 244) 100%)'
    }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
            How ClipSon Works
          </h2>
          <p className="text-center text-white font-bold mb-12 max-w-2xl mx-auto">
            Watch how easy it is to start earning from your clips.
          </p>

          {/* YouTube Video Embed */}
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/pvV4g53XE9I"
              title="How ClipSon Works"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks

