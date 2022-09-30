import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <div>
        <Link to={'/done'}>Done</Link>
      </div>
        <div>
        <Link to={'/'}>Home</Link>
        </div>
       <div>
       <Link to={'/cart'}>Cart</Link>
       </div>
    </div>
  )
}

export default Header