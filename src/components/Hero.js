import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "../style/Hero.css";
import { AppContext } from "../Context";

const Hero = ({ name, image, information }) => {
  const { fname, age } = useContext(AppContext);

  return (
    <div className="hero-container">
      <div className="left-div">
        <p className="hero-topdata">This is me</p>
        <h1 className="hero-heading" id="animation">
          {name}
        </h1>
        <p className="hero-para">
          {fname} age {age},{information}
        </p>
        <button className="hero-btn">
          <NavLink to="/contact">Check me</NavLink>
        </button>
      </div>
      <div className="right-div">
        <img className="hero-gif" src={image} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
