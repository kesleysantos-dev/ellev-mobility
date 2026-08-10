import Header from './components/Header'
import WhatsAppButton from './components/WhatsAppButton'
import Hero from './components/Hero'
import ProductSections from './components/ProductSections'
import WhereToBuy from './components/WhereToBuy'
import BatterySection from './components/BatterySection'
import SavingsCalculator from './components/SavingsCalculator'
import BMSSection from './components/BMSSection'
import EngineeringSection from './components/EngineeringSection'
import BrandStatement from './components/BrandStatement'
import SocialSection from './components/SocialSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProductSections />
        <WhereToBuy />
        <BatterySection />
        <SavingsCalculator />
        <BMSSection />
        <EngineeringSection />
        <BrandStatement />
        <SocialSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
