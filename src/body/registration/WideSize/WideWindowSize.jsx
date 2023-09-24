import { useEffect, useState } from 'react'
import Select from '../Select'
import data from '../../../dataBase.json'
import DataPicker from '../dPicker'
import './WideWindowSize.css'

const Over1200PX = () => {
  const [serverData, setServerData] = useState()
  const [startDate, setStartDate] = useState()
  const [endDate, setEndDate] = useState()

  const sortForCarSelect =
    serverData && serverData.cars.map((item) => `${item.make} ${item.model}`)

  const weekend = (date) => new Date() < date

  useEffect(() => {
    setServerData(data)
  })

  return (
    <div className="search" id="reservation">
      <div className="search_window">
        {serverData && (
          <form>
            <Select
              className={'form-select'}
              data={serverData.location}
              label={'The car type*'}
            />
            <Select
              className={'form-select'}
              data={sortForCarSelect}
              label={'The Pick-up location*'}
            />
            <Select
              className={'form-select'}
              data={serverData.location}
              label={'The Drop-of location*'}
            />
            <div className="datePicker">
              <DataPicker
                className="pick-up"
                selectedDate={startDate}
                showTimeSelect={true}
                selectsStart={true}
                startDate={startDate}
                label={'The Pick-up date*'}
                setDate={setStartDate}
                filterDate={weekend}
                minDate={startDate}
              />

              <DataPicker
                className="drop-of"
                showTimeSelect={true}
                endDate={endDate}
                startDate={startDate}
                label={'The Drop-of date*'}
                setDate={setEndDate}
                selectsEnd={true}
                selectedDate={endDate}
                filterDate={weekend}
              />
            </div>
            <button type="button" className="btn btn-primary">
              Search
            </button>
          </form>
        )}
      </div>
      <div className="advert">
        <p>Plan your trip now </p>
        <h1>
          Save <b style={{ color: 'red' }}>big</b> with our car rental
        </h1>
        <h6>
          Rent the car of your dream. Unbeatable price, unlimited miles,
          flexible pick-up options and much more
        </h6>
        <button className="btn btn-secondary">Learn More</button>
      </div>
    </div>
  )
}

export default Over1200PX
