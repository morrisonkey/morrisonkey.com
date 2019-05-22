import React from 'react';
import { Link } from 'react-router-dom';
import './menu.scss'

const Menu = (props) => {
  console.log(props)
  return (
    <nav className="menu">
      <div className="black-half"></div>
      <ul>
        <li><Link to='/' className="menu-link menu-link-1">Selected Works</Link></li>
        <li><Link to='/about' className="menu-link menu-link-2">About</Link></li>
        <li><Link to='/photos' className="menu-link menu-link-3">Photography</Link></li>
        <li><Link to='/404' className="menu-link menu-link-4">404</Link></li>
      </ul>
      <div className="black-half"></div>
    </nav>
  )
}

export default Menu;
