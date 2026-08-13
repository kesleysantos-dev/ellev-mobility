import EG1Hero from '../components/eg1/EG1Hero'
import EG1Explorer from '../components/eg1/EG1Explorer'
import EG1FeatureCarousel from '../components/eg1/EG1FeatureCarousel'
import EG1ElectricBanner from '../components/eg1/EG1ElectricBanner'
import EG1BrandStatement from '../components/eg1/EG1BrandStatement'
import EG1Charger from '../components/eg1/EG1Charger'
import EG1Gallery from '../components/eg1/EG1Gallery'
import EG1TechSpecs from '../components/eg1/EG1TechSpecs'
import EG1WhereToBuy from '../components/eg1/EG1WhereToBuy'
import EG1FAQ from '../components/eg1/EG1FAQ'
import './eg1.css'

export default function EG1Page() {
  return (
    <div className="eg1-page">
      <EG1Hero />
      <EG1Explorer />
      <EG1FeatureCarousel />
      <EG1ElectricBanner />
      <EG1BrandStatement />
      <EG1Charger />
      <EG1Gallery />
      <EG1TechSpecs />
      <EG1WhereToBuy />
      <EG1FAQ />
    </div>
  )
}
