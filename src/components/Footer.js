import React from "react";
import "../style/Footer.css";
import { FaGithub, FaInstagram, FaLinkedin, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer-div">
        <div className="left-part">
          <h3>Ankit rahi</h3>
          <p>
            I am a web developer and learning <br /> MERN stack development
          </p>
          <p>officialankit10189@cmail.com</p>
        </div>
        <div className="middle-div">
          <div>
            <p>PRIVACY POLICY</p>
            <p>TERMS & CONDITIONS</p>
          </div>
          <p>@{new Date().getFullYear()} Ankit . All Rights Reserved</p>
        </div>
        <div className="right-part">
          <h2>Contact Us</h2>
          <div className="icons">
            <a href="https://github.com/Ankit9179">
              <FaGithub />
            </a>
            <a href="https://www.instagram.com/ak_vampire12/?next=%2F">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/ankit-rahi-563752258/">
              <FaLinkedin />
            </a>
          </div>
          <div className="mobile">
            <FaPhone />
            <h3>&nbsp;-&nbsp;7828092738</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
