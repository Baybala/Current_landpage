import _ from 'lodash'
import './App.css'
import { useState, useEffect } from 'react'
import { HashLink } from 'react-router-hash-link'

const ScrollUPbotton = () => {
  const [componentHide, setComponenthide] = useState(false)

  useEffect(() => {
    const handleHide = _.debounce(() => {
      const scrollPosition = window.scrollY
      if (scrollPosition > 150) setComponenthide(true)
      else setComponenthide(false)
    }, 100)
    window.addEventListener('scroll', handleHide)

    return () => {
      window.removeEventListener('scroll', handleHide)
    }
  })
  return (
    <>
      {componentHide && (
        <HashLink to="/#home">
          <div className="arrowUP" id="home">
            <img src="./Icons/arrow.png" alt="arrow up" />
          </div>
        </HashLink>
      )}
    </>
  )
}

export default ScrollUPbotton
