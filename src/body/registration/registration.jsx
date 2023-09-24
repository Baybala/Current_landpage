import React from 'react'
import { useResize } from '../../ResizeWindowContext'
import Over1200PX from './WideSize/WideWindowSize'
import Less1200PX from './NarrowSize/NarrowWindow'

const Registration = () => {
  const windowSize = useResize()

  return windowSize > 1200 ? <Over1200PX /> : <Less1200PX />
}

export default Registration
