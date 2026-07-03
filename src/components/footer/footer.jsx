import React from "react";
import "./footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        
        
        <div className="footer-logo">
          <h2>URWA ABBAS</h2>
          <p>Software Engineer & React Developer</p>
        </div>



      
        <div className="footer-socials">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="GitHub"
            className="social-icon"
          >
            🖲️
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="LinkedIn"
            className="social-icon"
          >
            
          </a>
          <a 
            href="mailto:urwaabbas.buzdar@gmail.com" 
            aria-label="Email"
            className="social-icon"
          >
            ✉️
          </a>
        </div>

      </div>

      
      <hr className="footer-divider" />

      
      <div className="footer-bottom">
        <p>&copy; {currentYear} Urwa Abbas. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;