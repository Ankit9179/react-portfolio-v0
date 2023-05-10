import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import "../style/Header.css";

const Header = () => {
  return (
    <header className="header">
      <NavLink to="/">
        <img className="logo" src="./image/logo.png" alt="logo" />
      </NavLink>
      <Navbar />
    </header>
  );
};

export default Header;
