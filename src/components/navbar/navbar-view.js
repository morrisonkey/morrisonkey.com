import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logos/key-logo-black.png';
import menu from '../../assets/logos/menu-icon.svg';

import './navbar.scss';

const navbar = () => {
  return (
    <nav className="navbar">
      <Link to='/' className="key-logo">
        <img src={logo} alt="logo" />
      </Link>
      <Link to='/menu' className="menu-icon">
        <img src={menu} alt="logo" />
      </Link>
    </nav>
  );
}

export default navbar;
