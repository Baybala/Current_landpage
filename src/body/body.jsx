import React from 'react'
import Registration from './registration/registration'
import CarPark from './carPark/carPark'
import Information from './information/information'
import Advantage from './advantage/Advantage'
import Feedback from './feedback/feedback'
import FAQ from './faq/faq'
import 'react-datepicker/dist/react-datepicker.css'
import './body.css'

const Body = () => {
  return (
    <div className="bodys">
      <Registration />
      <Information />
      <CarPark />
      <Advantage />
      <Feedback />
      <FAQ />
    </div>
  )
}

export default Body
