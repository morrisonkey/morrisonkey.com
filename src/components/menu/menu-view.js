import React from 'react';
import { Link } from 'react-router-dom';
import './menu.scss'

const Menu = (props) => {
  console.log(props)
  return (
    <nav className="menu">
      <div className="black-half"></div>
      <ul>
        <li><Link to='/selected-works' className="menu-link">Selected Works</Link></li>
        <li><Link to='/about' className="menu-link">About</Link></li>
        <li><Link to='/photos' className="menu-link white">Photography</Link></li>
        <li><Link to='/404' className="menu-link white">404</Link></li>
      </ul>
      <div className="black-half"></div>
    </nav>
  )
}

export default Menu;
