import React, { useState } from "react";
import logo from "../../assets/logo-urwa-abbas.png";
import linkedinLogo from "../../assets/linked-in-logo.png";
import githubLogo from "../../assets/git-hub-logo.png";
import "./nav.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="logo">
        URWA ABBAS
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✕" : "☰"}
        </div>
      </div>

      {/* The main links container */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><a href="#home" onClick={closeMenu}>Home</a></li>
        <li><a href="#about" onClick={closeMenu}>About</a></li>
        <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
        <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        
        {/* Added: These will only show up inside the mobile tray view */}
        <li className="mobile-socials-row">
          <a href="https://www.linkedin.com/in/urwah-abbas-ahssan-6a90563b2/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinLogo} alt="LinkedIn" />
          </a>
          <a href="https://github.com/urwaabbas/" target="_blank" rel="noopener noreferrer">
            <img src={githubLogo} alt="GitHub" />
          </a>
          <a href="mailto:urwaabbas.buzdar@gmail.com" className="mail-icon">
            ✉️
          </a>
        </li>
      </ul>

      {/* This remains perfect for Desktop laptops */}
      <div className="nav-actions">
        <div className="nav-socials">
          <a href="https://www.linkedin.com/in/urwah-abbas-ahssan-6a90563b2/" target="_blank" rel="noopener noreferrer" className="nav-social-icon" title="LinkedIn">
            <img src={linkedinLogo} alt="LinkedIn" />
          </a>
          <a href="https://github.com/urwaabbas/" target="_blank" rel="noopener noreferrer" className="nav-social-icon" title="GitHub">
            <img src={githubLogo} alt="GitHub" />
          </a>
          <a href="mailto:urwaabbas.buzdar@gmail.com" className="nav-social-icon mail-icon" title="Gmail">
            ✉️
          </a>
        </div>

        <div className="nav-btn">
          <button>Resume</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;