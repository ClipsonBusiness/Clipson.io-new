import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Index from './Index'
import CampaignLaunch from './pages/CampaignLaunch'
import SelfManagedOffer from './pages/SelfManagedOffer'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/launch-campaign" element={<CampaignLaunch />} />
        <Route path="/self-managed-offer" element={<SelfManagedOffer />} />
      </Routes>
    </Router>
  )
}

export default App
