import { CCarousel, CCarouselItem } from '@coreui/react'
import Info from '../Util/Info'
import './UpTo1200PX.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const UpTo1200PX = ({ className, referance }) => {
  return (
    <div className={className} ref={referance} id="info">
      <CCarousel controls indicators>
        <CCarouselItem>
          <Info
            className="CarSelectt"
            path="./Icons/carSelect.png"
            alt="Car Select Icon"
            label="Select Car"
            info="We offer a big range of vehicles for all your driving needs. We
              have the perfect car to meet your needs"
          />
        </CCarouselItem>
        <CCarouselItem>
          <Info
            className="OperatorContactt"
            path="./Icons/contactOperator.png"
            alt="contact Operator icon"
            label="Contact Operator"
            info="Our knowledgeable and friendly operators are always ready to help
              with any questions or concerns"
          />
        </CCarouselItem>
        <CCarouselItem>
          <Info
            className="LetsDrivee"
            path="./Icons/drive.png"
            alt="driving Icon"
            label="Let's Drive"
            info="Whether you are hitting the open road we've got you covered with
              our wide range of cars"
          />
        </CCarouselItem>
      </CCarousel>
    </div>
  )
}

export default UpTo1200PX
