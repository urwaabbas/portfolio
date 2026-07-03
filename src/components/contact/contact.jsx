import React, { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Data Submitted:", formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-header">
        <span className="contact-subtitle">LET'S BUILD SOMETHING AMAZING</span>
        <h2 className="contact-title">Get In Touch</h2>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <div className="info-card">
            <div className="info-icon">✉️</div>
            <div className="info-details">
              <h3>Email</h3>
              <a
                href="mailto:urwaabbas.buzdar@gmail.com"
                className="email-link"
              >
                urwaabbas.buzdar@gmail.com
              </a>
            </div>
          </div>
          <div className="info-card">
            <div className="info-icon">📍</div>
            <div className="info-details">
              <h3>Location</h3>
              
              <a
                href="https://maps.google.com/?cid=1065096444560413936"
                target="_blank"
                rel="noopener noreferrer"
                className="location-link"
              >
                Atta Heights, Dream Gardens, Lahore, Pakistan
              </a>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">⏰</div>
            <div className="info-details">
              <h3>Availability</h3>
              <p>Mon - Fri, 9AM - 6PM</p>
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
