import { CCarousel, CCarouselItem } from '@coreui/react'
import data from '../../../dataBase.json'
import './UpTo1200PX.css'
import FleetContent from '../FleetContent'

const UpTo1200PX = () => {
  return (
    <CCarousel controls indicators>
      {data.cars.map((item) => (
        <CCarouselItem>
          <FleetContent item={item} />
        </CCarouselItem>
      ))}
    </CCarousel>
  )
}

export default UpTo1200PX
