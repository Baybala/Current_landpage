import React from 'react'
import Header from './head/Header'
import Body from './body/body'
import Footer from './foot/footer'
import { ResizeWindowContext } from './ResizeWindowContext'
import { ScrollContext } from './ScrollPositionContext'
import ScrollUPbotton from './ScrollUP_botton'
import AppBackground from './AppBackground'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  return (
    <ResizeWindowContext>
      <ScrollContext>
        <div className="App">
          <AppBackground />
          <Header />
          <Body />
          <Footer />
          <ScrollUPbotton />
        </div>
      </ScrollContext>
    </ResizeWindowContext>
  )
}

export default App
