import React from 'react';
import { Link } from 'react-router-dom';
import logoBlack from '../../assets/logos/key-logo-black.png';
import logoWhite from '../../assets/logos/key-logo-white.png';

import './navbar.scss';

const navbar = (props) => {
  return (
    <nav className="nav">
      <Link to='/' className="nav-logo">
        {!props.black && <img src={logoBlack} alt="logo" />}
        {props.black && <img src={logoWhite} alt="logo" />}
      </Link>
      <Link to='/menu' className="nav-burger">
        {!props.black && <div className="nav-burger-bar bar1"></div>}
        {props.black && <div className="nav-burger-bar bar1 bg-white"></div>}
        {!props.black && <div className="nav-burger-bar bar2"></div>}
        {props.black && <div className="nav-burger-bar bar2 bg-white"></div>}
        {!props.black && <div className="nav-burger-bar bar3"></div>}
        {props.black && <div className="nav-burger-bar bar3 bg-white"></div>}
      </Link>
    </nav>
  );
}

export default navbar;