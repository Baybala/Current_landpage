import { useEffect, useRef, useState } from 'react'
import './carPark.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { useResize } from '../../ResizeWindowContext'
import Over1200PX from './WideWindowSize/Over1200PX'
import UpTo1200PX from './NarrowWondowSize/UpTo1200PX'

const CarPark = () => {
  let [classChange, setClassChange] = useState('carParkBody')
  const ref = useRef(null)

  const windowSize = useResize()

  const handleReserve = () => {
    // windowSize.sectionRef.current.focus()
  }

  useEffect(() => {
    function reveal() {
      const elementTop = ref.current && ref.current.getBoundingClientRect().top
      const screenHeight = window.screen.height
      if (elementTop < screenHeight) {
        setClassChange(`carParkBodyActive`)
      }
    }
    window.addEventListener('scroll', reveal)
  }, [])

  return (
    <div className={classChange} ref={ref} id="models">
      <h5>
        <b>Vehicle Models</b>
      </h5>
      <h2>
        <b>Our Rental fleet</b>
      </h2>
      <p>
        Choose from a veriety of our amazing vehicles to rent for your next{' '}
        <br />
        adventure or business trip
      </p>
      {windowSize > 1200 ? (
        <Over1200PX handleReserve={handleReserve} />
      ) : (
        <UpTo1200PX />
      )}
    </div>
  )
}

export default CarPark
