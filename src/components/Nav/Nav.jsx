import React from 'react';
import { NavLink } from 'react-router-dom';


function Nav() {
  return (
    <nav className="nav">
      <NavLink exact to="/" className="nav__link">Home</NavLink>
      <NavLink exact to="/repos" className="nav__link">Repos</NavLink>
    </nav>
  );
}

export default Nav;
