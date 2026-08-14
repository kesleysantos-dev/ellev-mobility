import OficinasHero from '../components/oficinas/OficinasHero'
import OficinasList from '../components/oficinas/OficinasList'
import './oficinas.css'

export default function OficinasPage() {
  return (
    <div className="of-page">
      <OficinasHero />
      <OficinasList />
    </div>
  )
}
