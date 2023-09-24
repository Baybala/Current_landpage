import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import './registration.css'

const DataPicker = ({
  className,
  selectsStart,
  selectsEnd,
  selectedDate,
  minDate,
  startDate,
  endDate,
  label,
  setDate,
  showTimeSelect,
  filterDate,
}) => {
  return (
    <div className={className}>
      <DatePicker
        className={className + '-date'}
        placeholderText="MMMM d, yyyy h:mmaa"
        selected={selectedDate}
        startDate={startDate}
        endDate={endDate}
        showTimeSelect={showTimeSelect}
        selectsEnd={selectsEnd}
        selectsStart={selectsStart}
        onChange={(date) => setDate(date)}
        filterDate={filterDate}
        minDate={minDate}
        minTime={new Date(0, 0, 0, 9, 0)}
        maxTime={new Date(0, 0, 0, 19, 0)}
        dateFormat="MMMM d, yyyy h:mmaa"
      />
      <label className="labelOfDate">{label}</label>
      <div className="clear" onClick={() => setDate('')}>
        x
      </div>
    </div>
  )
}

export default DataPicker
