import { useState, useEffect } from 'react'
import _ from 'lodash'
import './App.css'
import { useResize } from './ResizeWindowContext'

const AppBackground = () => {
  const [backgroundAttachment, setBackgroundAttachment] = useState(
    'url(./genImage.jpg)',
  )

  const windowSize = useResize()

  const swapBackgroundResizing = () => {
    if (windowSize > 1200) return { background: backgroundAttachment }
    else return { background: 'url(./backcolor.png' }
  }

  useEffect(() => {
    const scrollFun = _.throttle(() => {
      var scroll = window.scrollY
      if (scroll < 900) {
        setBackgroundAttachment('url(./genImage.jpg)')
      } else if (scroll >= 900 && scroll < 1600) {
        setBackgroundAttachment('url(./genImage1.jpg)')
      } else if (scroll >= 1600 && scroll < 3000) {
        setBackgroundAttachment('url(./genImage2.jpg)')
      } else if (scroll >= 3000 && scroll < 4000) {
        setBackgroundAttachment('url(./genImage3.jpg)')
      }
    }, 100)
    window.addEventListener('scroll', scrollFun)

    return () => {
      window.removeEventListener('scroll', scrollFun)
    }
  })

  return <div className="background" style={swapBackgroundResizing()} />
}

export default AppBackground
