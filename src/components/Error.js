import React from "react";
import "../style/Error.css";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <dev className="img-container">
      <div className="error-img">
        <img
          src="https://media.licdn.com/dms/image/C5612AQEPYce5KpNLyg/article-cover_image-shrink_720_1280/0/1551659700811?e=2147483647&v=beta&t=O9mBMiF-V12jCRJwaBNDWLKNL8cku2QSoCXtKP3vCHg"
          alt="error"
        />
      </div>
      <button className="btn">
        <NavLink to="/">go back</NavLink>
      </button>
    </dev>
  );
};

export default Error;
