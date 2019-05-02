import React from 'react';
import { Link } from 'react-router-dom';
import './menu.scss'

const Menu = (props) => {
  console.log(props)
  return (
    <nav className="menu">
      <ul>
        <li><Link to='/' className="menu-link">Home</Link></li>
        <li><Link to='/selected-works' className="menu-link">Projects</Link></li>
        <li><Link to='/about' className="menu-link">About</Link></li>
        <li><Link to='/about' className="menu-link">Play A Game</Link></li>
        <li><Link to='/photography' className="menu-link">Photography</Link></li>
      </ul>
    </nav>
  )
}

export default Menu;
