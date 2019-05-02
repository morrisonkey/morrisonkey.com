import React from 'react';
import { Link } from 'react-router-dom';
import './menu.scss'

class Menu extends React.Component {
  render () {    
    return (
      <nav className="menu">
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/selected-works'>Projects</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/about'>Play A Game</Link></li>
          <li><Link to='/selected-work'>Photography</Link></li>
        </ul>
      </nav>
    )
  }
}

export default Menu;
