import ReserveButton from './ReserveButton'

const FleetContent = ({ item }) => {
  const setImage = () => {
    return `./carImages/${item.image}`
  }

  return (
    <>
      <h4 className="carName">
        <b>{`${item.make} ${item.model}`}</b>
      </h4>
      <div className="fleetInfo">
        <div className="fleetinfor_model">
          <div className="picture">
            <img src={setImage()} alt="mercedes C200" />
          </div>
        </div>

        <div className="fleetInfor_details">
          <div className="fleetInfo_price">
            Rent for {item.rentPrice}$ per day
          </div>
          <div className="fleetInfor_carDetails">
            <div className="smallWindow_name">
              <div>Make</div>
              <div>Model</div>
              <div>Fuel</div>
              <div>Drive type</div>
              <div>Engine</div>
              <div>Yeare</div>
              <div>Doors type</div>
              <div>Transmission</div>
              <div>AC</div>
            </div>
            <div className="smallWindow_description">
              <div>{item.make}</div>
              <div>{item.model}</div>
              <div>{item.fuel}</div>
              <div>{item.driveType}</div>
              <div>{item.engine}</div>
              <div>{item.year}</div>
              <div>{item.doors}</div>
              <div>{item.transmission}</div>
              <div>{item.AC}</div>
            </div>
          </div>
          <ReserveButton />
        </div>
      </div>
    </>
  )
}

export default FleetContent
