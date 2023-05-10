import React from "react";
import { NavLink } from "react-router-dom";
import "../style/Navbar.css";
import { FaBars } from "react-icons/fa";


const Navbar = () => {
  return (
    <nav>
      <input type="checkbox" id="click" />
      <label for="click" className="menu-btn"><FaBars /></label>
      <ul className="navbar-list">
        <li>
          <NavLink to="/" className="activ">
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">ABOUT</NavLink>
        </li>
        <li>
          <NavLink to="/projects">PROJECTS</NavLink>
        </li>
        <li>
          <NavLink to="/contact">CONTACT</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
