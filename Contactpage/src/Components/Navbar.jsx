import React from 'react'
import image from '../assets/Frame.png'


const Navbar = () => {
  return (
    <>
      <nav>
        <div className='logo'>
          <img src={image} alt="" />
        </div>
        <ul className='list'>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      
    </>
  )
}

export default Navbar
