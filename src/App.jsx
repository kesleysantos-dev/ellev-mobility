import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import WhatsAppButton from './components/WhatsAppButton'
import Footer from './components/Footer'
import Home from './pages/Home'
import EG1Page from './pages/EG1Page'
import ES1Page from './pages/ES1Page'
import VIBEPage from './pages/VIBEPage'
import SejaConcessionarioPage from './pages/SejaConcessionarioPage'
import ConcessionariasPage from './pages/ConcessionariasPage'
import OficinasPage from './pages/OficinasPage'
import PosVendaPage from './pages/PosVendaPage'
import ComprarPage from './pages/ComprarPage'
import ObrigadoPage from './pages/ObrigadoPage'
import CategoryProductPage from './pages/CategoryProductPage'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/urban" element={<EG1Page />} />
          <Route path="/i5-joy" element={<ES1Page />} />
          <Route path="/x13" element={<VIBEPage />} />
          <Route path="/seja-um-concessionario" element={<SejaConcessionarioPage />} />
          <Route path="/concessionarias" element={<ConcessionariasPage />} />
          <Route path="/oficinas" element={<OficinasPage />} />
          <Route path="/pos-venda" element={<PosVendaPage />} />
          <Route path="/comprar" element={<ComprarPage />} />
          <Route path="/obrigado" element={<ObrigadoPage />} />
          <Route path="/moto/:slug" element={<CategoryProductPage />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
