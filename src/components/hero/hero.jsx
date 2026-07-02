import React from "react";
import myImg from "../../assets/my-img.png";
import "./hero.css";

const Hero = () => {
  return (
    <div id="home" className="main-div-hero">
      <div className="text-div">
        <div className="greeting-div">
          <h2 className="greeting-text">Hi, I'm</h2>
          <h1 className="name-text">Urwa Abbas</h1>
          <h2 className="profession-text">
            Software Engineer & React Developer
          </h2>
          <p className="description-text">
            I build responsive, user-friendly, and modern web applications using
            React, JavaScript, HTML, and CSS. Passionate about creating clean
            designs and seamless user experiences.
          </p>
        </div>
        <ul className="hero-links">
          <li>
            <a href="#projects">View Projects</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
        </ul>
      </div>

      <div className="img-div">
        <img id="my-img" src={myImg} alt="myimg" />
      </div>
    </div>
  );
};

export default Hero;
