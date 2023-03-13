import React from 'react'
import { NavLink } from "react-router-dom";


function Header() {
  return (
    <nav>
      <h1>
        <NavLink to="/">Ecommerce Website</NavLink>
        </h1>
      <ul>
        <li>

          <NavLink to="/home">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/cart">Cart</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
