import Info from '../Util/Info'
import './Over1200PX.css'

const Over1200PX = ({ className, referance }) => {
  return (
    <div className={className} ref={referance} id="info">
      <div>
        <p>Plan your trip now</p>
        <h2>
          <b>Quick and easy car rental</b>
        </h2>
      </div>

      <div className="infoBody">
        <Info
          className="CarSelect"
          path="./Icons/carSelect.png"
          alt="Car Select Icon"
          label="Select Car"
          info="We offer a big range of vehicles for all your driving needs. We
              have the perfect car to meet your needs"
        />

        <Info
          className="OperatorContact"
          path="./Icons/contactOperator.png"
          alt="contact Operator icon"
          label="Contact Operator"
          info="Our knowledgeable and friendly operators are always ready to help
              with any questions or concerns"
        />

        <Info
          className="LetsDrive"
          path="./Icons/drive.png"
          alt="driving Icon"
          label="Let's Drive"
          info="Whether you are hitting the open road we've got you covered with
              our wide range of cars"
        />
      </div>
    </div>
  )
}

export default Over1200PX
