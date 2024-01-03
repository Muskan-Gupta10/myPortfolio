import React from 'react'
import '../Styles/navbar.css'
const Navbar = () => {
  return (
    <div id='navbarContainer'>
      <span className="initials">MG</span>
      <div className="options">
        <div>Home</div>
        <div>About</div>
        <div>Resume</div>
        <div>Contact</div>
      </div>
    </div>
  )
}

export default Navbar