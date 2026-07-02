import React from 'react';
import './skills.css';

const Skills = () => {
  const skillList = [
    { name: 'React', level: '90%' },
    { name: 'JavaScript', level: '85%' },
    { name: 'HTML5', level: '95%' },
    { name: 'CSS3', level: '90%' },
    { name: 'Responsive Design', level: '90%' },
    { name: 'Git & GitHub', level: '80%' },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-grid">
          {skillList.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-info">
                <span>{skill.name}</span>
                <span>{skill.level}</span>
              </div>
              <div className="progress-bar">
                <div className="progress" style={{ width: skill.level }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;