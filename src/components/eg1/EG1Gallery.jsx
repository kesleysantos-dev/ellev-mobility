import pic1 from '../../assets/eg1/gallery/u-1.jpg'
import pic2 from '../../assets/eg1/gallery/u-2.jpg'
import pic3 from '../../assets/eg1/gallery/u-3.jpg'
import pic4 from '../../assets/eg1/gallery/u-4.jpg'
import pic5 from '../../assets/eg1/gallery/u-5.jpg'
import pic6 from '../../assets/eg1/gallery/u-6.jpg'

const PICS = [pic1, pic2, pic3, pic4, pic5, pic6]

export default function EG1Gallery() {
  return (
    <div className="eg1-gallery">
      {PICS.map((src, i) => (
        <img key={i} src={src} alt="" />
      ))}
    </div>
  )
}
