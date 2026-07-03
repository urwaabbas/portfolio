import React from "react";
import "./projects.css";
import fuImg from  "../../assets/follow-up.png";
import msImg from "../../assets/ms-foods.png"

const Projects = () => {
  const projectData = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A fully responsive e-commerce storefront with a shopping cart, product filtering, and local storage integration.",
      tech: ["React", "JavaScript", "CSS3", "Context API"],
      liveLink: "https://msfoods.pk/",
      image: msImg,
    },
    {
      id: 2,
      title: "Follow Up Timer",
      description:
        "Created a productivity tool that helps users manage follow-ups, reminders, and communication tasks across Gmail and other apps.",
      tech: ["React", "REST API", "CSS"],
      liveLink: "https://followuptimer.io/",
      image: fuImg,
    },
  ];

  return (
    <section id="projects" className="project-section">
      <h2 className="section-title">MY Projects</h2>
      <p className="section-subtitle">Here're some of my recent projects</p>

      <div className="projects-grid">
        {projectData.map((project) => (
          
          <div key={project.id} className="projects-card">
            
            <div className="project-image-wrapper">
              <img
                src={project.image}
                alt={project.title}
                className="project-img"
              />
            </div>

            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              
              <div className="projects-tag">
                {project.tech.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="projects-link">
              
                <a
                  href={project.liveLink}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-live"
                >
                  Live Demo
                </a>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;