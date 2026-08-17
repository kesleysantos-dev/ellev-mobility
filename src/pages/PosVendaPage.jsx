import PosVendaHero from '../components/posvenda/PosVendaHero'
import PosVendaGarantia from '../components/posvenda/PosVendaGarantia'
import PosVendaManual from '../components/posvenda/PosVendaManual'
import PosVendaRevisao from '../components/posvenda/PosVendaRevisao'
// Oficinas temporariamente desativada — reative importando PosVendaOficinas
// de volta e voltando a renderizá-la abaixo.
// import PosVendaOficinas from '../components/posvenda/PosVendaOficinas'
import './posvenda.css'

export default function PosVendaPage() {
  return (
    <div className="pv-page">
      <PosVendaHero />
      <PosVendaGarantia />
      <PosVendaManual />
      <PosVendaRevisao />
    </div>
  )
}
