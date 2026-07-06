import React, { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // NEW: Track loading states and display direct API response messages to your layout
  const [status, setStatus] = useState({ loading: false, success: null, error: null });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // MODIFIED: Asynchronous submission logic connected directly to your backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          loading: false,
          success: "🎉 Message sent and stored successfully!",
          error: null,
        });
        setFormData({ name: "", email: "", subject: "", message: "" }); // Reset layout fields
      } else {
        setStatus({
          loading: false,
          success: null,
          error: data.message || "Failed to submit request.",
        });
      }
    } catch (err) {
      // Handles cases where your server drops or local database buffering blocks the request loop
      setStatus({
        loading: false,
        success: null,
        error: "Unable to reach the backend server right now.",
      });
    }
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
              <a href="mailto:urwaabbas.buzdar@gmail.com" className="email-link">
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

            {/* MODIFIED: Updates button behavior visually when communication takes place */}
            <button type="submit" className="submit-btn" disabled={status.loading}>
              {status.loading ? "Sending..." : "Send Message"}
            </button>

            {/* NEW: Displays structural success or error strings in line inside the layout wrapper */}
            {status.success && <p className="status-success-text" style={{ color: "green", marginTop: "10px" }}>{status.success}</p>}
            {status.error && <p className="status-error-text" style={{ color: "red", marginTop: "10px" }}>{status.error}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;