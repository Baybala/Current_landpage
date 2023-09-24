import { useState } from 'react'
import Logo from './logo/Logo'
import Navbar from './naviation/Navbar'
import Signing from './signing/signing'
import Subscription from './subscription/Subscription'
import Menu from './menu/menu'
import { useResize } from '../ResizeWindowContext'
import './head.css'

const Header = () => {
  const [showSearchBar, setSearchBar] = useState(false)

  const windowSize = useResize()

  const handleBackdropClick = (toggle) => {
    setSearchBar(toggle)
  }

  return windowSize > 1018 ? (
    <div id="home">
      <div className="header">
        <Logo />
        <Navbar />
        <Signing />
      </div>
      <Subscription
        showSearchBar={showSearchBar}
        onClickOutside={handleBackdropClick}
      />
    </div>
  ) : (
    <div id="home">
      <div className="header">
        <Logo />
        <Menu />
      </div>
      <Subscription
        showSearchBar={showSearchBar}
        onClickOutside={handleBackdropClick}
      />
    </div>
  )
}

export default Header
