import pic1 from '../../assets/es1/gallery/pic-1.webp'
import pic2 from '../../assets/es1/gallery/pic-2.webp'
import pic3 from '../../assets/es1/gallery/pic-3.webp'
import pic4 from '../../assets/es1/gallery/pic-4.webp'
import pic5 from '../../assets/es1/gallery/pic-5.webp'
import pic6 from '../../assets/es1/gallery/pic-6.webp'

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
