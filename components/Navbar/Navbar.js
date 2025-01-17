import React from 'react'
import './Navbar.scss'

function Navbar() {
  return (
    <div className='Navbar'>
        <div className='Navbar__logo'>
            SEW'TUP.
        </div>
        <div className='Navbar__links'>
            <p className='Navbar__links--link'>Home</p>
            <p className='Navbar__links--link'>About</p>
            <p className='Navbar__links--link'>Team</p>
            <p className='Navbar__links--link'>Terms & Conditions</p>
            <p className='Navbar__links--link'>Privacy Policy</p>
        </div>
        <div className='Navbar__buttons'>
            <p className='Navbar__buttons--button'>Login</p>
            <p className='Navbar__buttons--button'>Register</p>
        </div>
    </div>
  )
}

export default Navbar