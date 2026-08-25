import ES1Hero from '../components/es1/ES1Hero'
import ES1Explorer from '../components/es1/ES1Explorer'
import ES1FeatureCarousel from '../components/es1/ES1FeatureCarousel'
import ES1ElectricBanner from '../components/es1/ES1ElectricBanner'
import ES1BrandStatement from '../components/es1/ES1BrandStatement'
import ES1MotorHub from '../components/es1/ES1MotorHub'
import ES1Gallery from '../components/es1/ES1Gallery'
import ES1TechSpecs from '../components/es1/ES1TechSpecs'
import ES1WhereToBuy from '../components/es1/ES1WhereToBuy'
import ES1FAQ from '../components/es1/ES1FAQ'
import './es1.css'

export default function ES1Page() {
  return (
    <div className="es1-page">
      <ES1Hero />
      <ES1Explorer />
      <ES1FeatureCarousel />
      <ES1ElectricBanner />
      <ES1BrandStatement />
      <ES1MotorHub />
      <ES1Gallery />
      <ES1TechSpecs />
      <ES1WhereToBuy />
      <ES1FAQ />
    </div>
  )
}
