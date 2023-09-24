import React, { useContext, useEffect, useState } from 'react'
import _ from 'lodash'

const ResizeContext = React.createContext()

export function useResize() {
  return useContext(ResizeContext)
}

export function ResizeWindowContext({ children }) {
  const [windowSize, setSetWindowSize] = useState(window.innerWidth)

  useEffect(() => {
    const debounceResize = _.debounce(function () {
      setSetWindowSize(window.innerWidth)
    }, 100)

    window.addEventListener('resize', debounceResize)

    return () => {
      window.removeEventListener('resize', debounceResize)
    }
  })

  return (
    <ResizeContext.Provider value={windowSize}>
      {children}
    </ResizeContext.Provider>
  )
}
