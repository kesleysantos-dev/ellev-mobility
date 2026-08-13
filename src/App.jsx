import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import WhatsAppButton from './components/WhatsAppButton'
import Footer from './components/Footer'
import Home from './pages/Home'
import EG1Page from './pages/EG1Page'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/eg1" element={<EG1Page />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
