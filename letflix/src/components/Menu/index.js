import React from 'react';
import Logo from '../../assets/logo_mint.png';
import './Menu.css';

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img
          className="Logo"
          src={Logo}
          alt="Letflix logo."
        />
      </a>
    </nav>
  );
}

export default Menu;
