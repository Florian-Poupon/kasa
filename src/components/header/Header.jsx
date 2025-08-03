import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to={"/"}>
        <img src="/src/assets/images/logo.png" className="header__logo" alt="Logo" />
      </Link>
      <nav className="navigation">
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => "nav-link" + (isActive ? " a--active" : "")}>
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => "nav-link" + (isActive ? " a--active" : "")}>
              À propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
