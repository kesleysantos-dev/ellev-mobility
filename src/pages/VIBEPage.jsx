import VIBEHero from '../components/vibe/VIBEHero'
import VIBELifestyle from '../components/vibe/VIBELifestyle'
import VIBEExplorer from '../components/vibe/VIBEExplorer'
import VIBEFeatureCarousel from '../components/vibe/VIBEFeatureCarousel'
import VIBEShared from '../components/vibe/VIBEShared'
import VIBEBanner from '../components/vibe/VIBEBanner'
import VIBEWhereToBuy from '../components/vibe/VIBEWhereToBuy'
import VIBETechSpecs from '../components/vibe/VIBETechSpecs'
import VIBEFAQ from '../components/vibe/VIBEFAQ'
import './vibe.css'

export default function VIBEPage() {
  return (
    <div className="vibe-page">
      <VIBEHero />
      <VIBELifestyle />
      <VIBEExplorer />
      <VIBEFeatureCarousel />
      <VIBEShared />
      <VIBEBanner />
      <VIBEWhereToBuy />
      <VIBETechSpecs />
      <VIBEFAQ />
    </div>
  )
}
