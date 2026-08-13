import desktopBanner from '../../assets/vibe/misc/banner-chegou-desktop.webp'
import mobileBanner from '../../assets/vibe/misc/banner-chegou-mobile.webp'

export default function VIBEBanner() {
  return (
    <section className="vibe-banner">
      <img src={desktopBanner} alt="A Ellev VIBE chegou" className="vibe-banner__img vibe-banner__img--desktop" />
      <img src={mobileBanner} alt="A Ellev VIBE chegou" className="vibe-banner__img vibe-banner__img--mobile" />
    </section>
  )
}
