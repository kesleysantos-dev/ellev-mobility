import batteryLifestyle from '../assets/store/battery-lifestyle.jpg'

export default function BatterySection() {
  return (
    <section className="battery">
      <div className="container">
        <div className="photo-panel">
          <img src={batteryLifestyle} alt="Bateria removível Ellev" className="photo-panel__photo" />
        </div>
      </div>
    </section>
  )
}
