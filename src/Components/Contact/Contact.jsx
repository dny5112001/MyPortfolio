import React from "react";
import Logo from "../../assets/Images/logo.jpg";
import "./Contact.css";

const Contact = () => {
  return (
    <div
      className="contact-container"
      style={{
        borderStyle: "solid",
        borderWidth: "2px",
        borderTopWidth: "0",
        borderColor: "#f0f0f0",
      }}
    >
      <div className="contact-grid">
        <div className="contact-section logo-section">
          <img src={Logo} alt="Logo" className="logo" />
        </div>
        <div className="contact-section crafts-section">
          <h3>CRAFTS</h3>
          <ul>
            <li>Attendity</li>
            <li>Chateo</li>
            <li>Spam Detection</li>
            <li>Pix Forge</li>
          </ul>
        </div>
        <div className="contact-section links-section">
          <h3>CONTACTS</h3>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/deepak-yadav-1280312a4"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn ↗
              </a>
            </li>
            <li>
              <a
                href="https://github.com/dny5112001"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github ↗
              </a>
            </li>
            <li>
              <a
                href="/path/to/your-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume ↗
              </a>
            </li>
            <li>
              <a href="mailto:dny9136833946.com">Email ↗</a>
            </li>
          </ul>
        </div>
        <div className="contact-section copyright-section">
          <p>© 2025 Deepak Yadav. All Rights Reserved.</p>
          <p className="made-with">Made with 🩶 and Americano</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
