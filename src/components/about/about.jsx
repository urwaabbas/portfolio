import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hello! I'm <strong>Urwa Abbas</strong>, a passionate Software Engineer and React Developer dedicated to building efficient, scalable, and visually stunning web applications. 
            </p>
            <p>
              My journey in web development stems from a deep curiosity about how things work on the internet. Over time, I've honed my skills in modern JavaScript frameworks, focusing on creating pixel-perfect, responsive user interfaces that offer seamless user experiences.
            </p>
            <p>
              When I'm not coding, I'm usually exploring new design trends, optimizing application performance, or keeping up with the latest advancements in the frontend ecosystem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;