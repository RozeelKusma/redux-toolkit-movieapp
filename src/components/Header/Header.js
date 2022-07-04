import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.jpg'
import './Header.scss'

const Header = () => {
  return (
    <div className='header'>
      <Link to="/">
      <div className='logo'>
      Movie App
      </div>
      </Link>
        <div className='user-image'>
          <img src={logo} alt='user'/>
        </div>
    </div>
  )
}

export default Header