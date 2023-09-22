import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul className='container'>
        <li>
            <img src="../src/images/logo.svg" alt="logo" />
        </li>
        <li className='nav-links'>
          <Link to="/">Products</Link>
          <Link to="/basket">Basket</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;