import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import './menu.css'
import Navbar from '../naviation/Navbar'
import Signing from '../signing/signing'

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false)

  const handleShowMenu = () => {
    setShowMenu(true)
  }

  const handleMenuClose = () => {
    showMenu && setShowMenu(false)
  }

  return (
    <div className="menu" onClick={handleMenuClose}>
      <p onClick={handleShowMenu}>Menu</p>
      {showMenu && (
        <div className="showMenu">
          <div className="menuList" onClick={(e) => e.stopPropagation()}>
            <div className="closeButton" onClick={handleMenuClose}>
              <FontAwesomeIcon icon={faXmark} />
            </div>
            <div className="signingMenu">
              <p className="register">Register</p>
            </div>
            <div className="navbarMenu">
              <Navbar />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Menu
