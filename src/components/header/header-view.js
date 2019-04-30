import React from 'react';
import logo from '../../assets/logos/key-logo.svg';

function HeaderView() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>
        Morrison Key
      </h1>
    </header>
  );
}

export default HeaderView;
