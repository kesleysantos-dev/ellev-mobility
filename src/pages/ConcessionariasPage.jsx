import ConcessionariasHero from '../components/concessionarias/ConcessionariasHero'
import ConcessionariasList from '../components/concessionarias/ConcessionariasList'
import './concessionarias.css'

export default function ConcessionariasPage() {
  return (
    <div className="conc-page">
      <ConcessionariasHero />
      <ConcessionariasList />
    </div>
  )
}
