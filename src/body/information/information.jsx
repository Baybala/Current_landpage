import { useEffect, useRef, useState } from 'react'
import './information.css'
import { useResize } from '../../ResizeWindowContext'
import Over1200PX from './WideWindowSize/Over1200PX'
import UpTo1200PX from './NarrowWindowSize/UpTo1200PX'

const Information = () => {
  const elementRef = useRef(null)
  const [classChange, setClassChange] = useState('infoHead')
  const windowSize = useResize()

  useEffect(() => {
    function reveal() {
      const elementTop =
        elementRef.current && elementRef.current.getBoundingClientRect().top
      const screenHeight = window.screen.height
      if (elementTop < screenHeight) {
        setClassChange(`infoHeadActive`)
      } else {
        setClassChange(`infoHead`)
      }
    }

    window.addEventListener('scroll', reveal)
  })

  return windowSize > 1200 ? (
    <Over1200PX className={classChange} referance={elementRef} />
  ) : (
    <UpTo1200PX className={classChange} referance={elementRef} />
  )
}

export default Information
