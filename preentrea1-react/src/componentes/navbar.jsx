import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Venta de Figuras de Acción</a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">Compras</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Información</a>
          </li>
        </ul>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
