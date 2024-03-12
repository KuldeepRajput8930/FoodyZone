import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
   <nav className="navbar">
    <div className="nav-container">
    <div className="brandname">
      F<span>oo</span>dy Z<span>o</span>ne
    </div>
    <div className='search-box'>
      <input type="text" name="search" id="search" placeholder='Search Food ...' />
    </div>
    </div>
    <div className="category">
      <li>All</li>
      <li>Breakfast</li>
      <li>Lunch</li>
      <li>Dinner</li>
    </div>
   </nav>
  )
}

export default Navbar
