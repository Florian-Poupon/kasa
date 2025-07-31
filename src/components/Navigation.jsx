import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <NavLink to="/">Accueil</NavLink>
        </li>
        <li>
          <Link to="/about">À propos</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
