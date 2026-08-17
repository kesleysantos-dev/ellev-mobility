import pic1 from '../../assets/es1/gallery/pic-1j.png'
import pic2 from '../../assets/es1/gallery/pic-2j.png'
import pic3 from '../../assets/es1/gallery/pic-3j.png'
import pic4 from '../../assets/es1/gallery/pic-4j.png'
import pic5 from '../../assets/es1/gallery/pic-5j.png'
import pic6 from '../../assets/es1/gallery/pic-6j.png'

const PICS = [pic1, pic2, pic3, pic4, pic5, pic6]

export default function ES1Gallery() {
  return (
    <div className="es1-gallery">
      {PICS.map((src, i) => (
        <img key={i} src={src} alt="" />
      ))}
    </div>
  )
}
