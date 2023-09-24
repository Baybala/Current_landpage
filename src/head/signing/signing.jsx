import React from 'react'
import './signing.css'
import { Link } from 'react-router-dom'

const Signing = () => {
  return (
    <div className="signing">
      <p className="signIn">Sign In</p>
      <Link to="/signInUp">
        <p className="register">Register</p>
      </Link>
    </div>
  )
}

export default Signing
