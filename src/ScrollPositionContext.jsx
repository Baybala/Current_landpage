import React, { createContext, useContext, useEffect, useState } from 'react'
import _ from 'lodash'

const ScrollPositionContext = createContext()

export function useScrollPositionContext() {
  return useContext(ScrollPositionContext)
}

export function ScrollContext({ children }) {
  const [scrollPosition, setScrollPostion] = useState(0)

  useEffect(() => {
    const debouncedScroll = _.debounce(function () {
      setScrollPostion(window.scrollY)
    })
    window.addEventListener('scroll', debouncedScroll)
  })

  return (
    <ScrollPositionContext.Provider value={scrollPosition}>
      {children}
    </ScrollPositionContext.Provider>
  )
}
