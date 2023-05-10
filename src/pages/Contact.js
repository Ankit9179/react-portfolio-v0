import React from "react";
import "../style/Contact.css";

const Contact = () => {
  return (
    <div className="form-container">
      <h2 className="form-heading">feel free to contact us</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57828.03979356424!2d79.40368512347692!3d25.0594300703264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3982a643828de9e3%3A0xdde48e9647dbb861!2sNowgong%2C%20Madhya%20Pradesh%20471201!5e0!3m2!1sen!2sin!4v1683368319291!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>

      <div className="form-container">
        <div className="form-content">
          <form
            className="form-form"
            action="https://formspree.io/f/xoqzrypn"
            method="POST"
          >
            <input
              type="text"
              name="username"
              placeholder="Enter your name"
              required
              autoComplete="off"
            />
            <input
              type="email"
              name="Email"
              placeholder="Enter your email"
              required
              autoComplete="off"
            />
            <textarea
              name="message"
              cols="30"
              rows="6"
              required
              autoComplete="off"
              placeholder="Write your message....."
            ></textarea>
            <button type="submid" value="send">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
