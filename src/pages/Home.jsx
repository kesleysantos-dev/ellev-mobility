import Hero from '../components/Hero'
import ProductSections from '../components/ProductSections'
import WhereToBuy from '../components/WhereToBuy'
import BatterySection from '../components/BatterySection'
import SavingsCalculator from '../components/SavingsCalculator'
import BMSSection from '../components/BMSSection'
import EngineeringSection from '../components/EngineeringSection'
import BrandStatement from '../components/BrandStatement'
import SocialSection from '../components/SocialSection'

export default function Home() {
  return (
    <>
      <Hero />
      <ProductSections />
      <WhereToBuy />
      <BatterySection />
      <SavingsCalculator />
      <BMSSection />
      <EngineeringSection />
      <BrandStatement />
      <SocialSection />
    </>
  )
}
