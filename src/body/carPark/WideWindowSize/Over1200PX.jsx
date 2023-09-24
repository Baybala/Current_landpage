import { useState } from 'react'
import data from '../../../dataBase.json'
import './Over1200PX.css'
import { HashLink } from 'react-router-hash-link'
import ReserveButton from '../ReserveButton'

const Over1200PX = ({ handleReserve }) => {
  const [model, setModels] = useState(data.cars[0].model)

  const handleClassSet = (item) => {
    if (item === model) {
      return 'list-group-item active'
    }
    return 'list-group-item'
  }

  const setImage = () => {
    let imageLink = ''
    let carData = ''
    data.cars.map((item) => {
      if (item.model === model) {
        imageLink = `./carImages/${item.image}`
        carData = item
      }
    })

    return { imageLink, carData }
  }

  return (
    <div className="park">
      <div className="list_of_cars">
        <ul className="list-group">
          {data.cars.map((item) => (
            <li
              key={item.model}
              className={handleClassSet(item.model)}
              aria-current="true"
              onClick={() => setModels(item.model)}
            >
              {`${item.make} ${item.model}`}
            </li>
          ))}
        </ul>
      </div>

      <div className="image">
        <img src={setImage().imageLink} alt="car type" />
      </div>
      <div className="details">
        <div className="head">
          Rent for {setImage().carData.rentPrice}$ per day
        </div>
        <div className="detailsDisplay">
          <div className="name">Make</div>
          <div className="description">{setImage().carData.make}</div>
          <div className="name">Model</div>
          <div className="description">{setImage().carData.model}</div>
          <div className="name">Fuel</div>
          <div className="description">{setImage().carData.fuel}</div>
          <div className="name">Drive type</div>
          <div className="description">{setImage().carData.driveType}</div>
          <div className="name">Engine</div>
          <div className="description">{setImage().carData.engine}</div>
          <div className="name">Yeare</div>
          <div className="description">{setImage().carData.year}</div>
          <div className="name">Doors type</div>
          <div className="description">{setImage().carData.doors}</div>
          <div className="name">Transmission</div>
          <div className="description">{setImage().carData.transmission}</div>
          <div className="name">AC</div>
          <div className="description">{setImage().carData.AC}</div>
        </div>
        <ReserveButton />
      </div>
    </div>
  )
}

export default Over1200PX
