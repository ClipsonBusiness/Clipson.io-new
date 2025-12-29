import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Index from './Index'
import CampaignLaunch from './pages/CampaignLaunch'
import SelfManagedOffer from './pages/SelfManagedOffer'
import CloseSale from './pages/CloseSale.jsx'
import Success from './pages/Success.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/launch-campaign" element={<CampaignLaunch />} />
        <Route path="/self-managed-offer" element={<SelfManagedOffer />} />
        <Route path="/close-sale" element={<CloseSale />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  )
}

export default App
