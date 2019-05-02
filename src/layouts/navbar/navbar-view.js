import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logos/key-logo-black.png';
import menu from '../../assets/logos/menu-icon.svg';

import './navbar.scss';

const navbar = () => {
  return (
    <nav className="nav">
      <Link to='/' className="nav-logo">
        <img src={logo} alt="logo" />
      </Link>
      <Link to='/menu' className="nav-burger">
        <div className="nav-burger-bar bar1"></div>
        <div className="nav-burger-bar bar2"></div>
        <div className="nav-burger-bar bar3"></div>
      </Link>
    </nav>
  );
}

export default navbar;
