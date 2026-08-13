import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import WhatsAppButton from './components/WhatsAppButton'
import Footer from './components/Footer'
import Home from './pages/Home'
import EG1Page from './pages/EG1Page'
import ES1Page from './pages/ES1Page'
import VIBEPage from './pages/VIBEPage'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/eg1" element={<EG1Page />} />
          <Route path="/es1" element={<ES1Page />} />
          <Route path="/vibe" element={<VIBEPage />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
