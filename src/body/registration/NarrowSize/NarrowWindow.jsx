import { useEffect, useState } from 'react'
import Select from '../Select'
import DataPicker from '../dPicker'
import data from '../../../dataBase.json'
import './NarrowWindow.css'

const Less1200PX = () => {
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
    <div className="searchNarroe" id="reservation">
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
  )
}

export default Less1200PX
