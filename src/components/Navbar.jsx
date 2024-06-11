import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'
const Navbar = () => {
  const [expand, setExpand] = useState(false)
  const [isscrolled, setIsScrolled] = useState(false)
  const handleToggle = () => {
    setExpand(!expand)
  }

  //event for scroll behaviour
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset == 0 ? false : true)
    return () => (window.onscroll == null)
  }
  return (
    <nav className={`navbar navbar-expand-sm fixed-top py-2 ${isscrolled ? 'bg-black' : 'bg-transparent'}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Bootstrap" width="120" height="40" />
        </a>
        <button className="navbar-toggler" onClick={handleToggle} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${!!expand && 'show'}`} id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to='/' >Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/Tvshows'>TV shows</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/Movies'>Movies</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/Popular'>New & Popular</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/Mylist'>My List</NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link">Browse by languages</a>
            </li>
          </ul>
          <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
            <li className='nav-item mx-3'><i className="bi bi-search fs-3"></i></li>
            <li className='nav-item mx-3'><i className="bi bi-bell-fill fs-3"></i></li>
            <li className='nav-item mx-3'><i className="bi bi-person-circle fs-3"></i></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar