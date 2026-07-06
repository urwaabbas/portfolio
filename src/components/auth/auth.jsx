import React, { useState, useEffect } from "react";
import "./auth.css";

const Auth = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [user, setUser] = useState(null); // Logged-in user info, if any

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [status, setStatus] = useState({ loading: false, success: null, error: null });

  // On first load, check if a user is already logged in (from a previous session)
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", password: "" });
    setStatus({ loading: false, success: null, error: null });
  };

  const openModal = (loginMode = true) => {
    setIsLogin(loginMode);
    resetForm();
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    resetForm();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    const endpoint = isLogin ? "/api/auth/login" : "/api/auth/signup";

    try {
      const response = await fetch(`http://localhost:5000${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
          isLogin
            ? { email: formData.email, password: formData.password }
            : formData
        ),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          loading: false,
          success: isLogin ? "🎉 Login Successful!" : "🎉 Account Created Successfully!",
          error: null,
        });

        if (data.token) {
          localStorage.setItem("token", data.token);
        }
        if (data.user) {
          localStorage.setItem("user", JSON.stringify(data.user));
          setUser(data.user);
        }

        // Close the modal shortly after success so the user sees the message first
        setTimeout(() => {
          closeModal();
        }, 900);

      } else {
        setStatus({
          loading: false,
          success: null,
          error: data.message || "Authentication failed.",
        });
      }
    } catch (err) {
      setStatus({
        loading: false,
        success: null,
        error: "Unable to connect to the authentication server.",
      });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <>
      {/* Trigger button — fixed position, always visible */}
      <div className="auth-trigger">
        {user ? (
          <div className="auth-user-box">
            <span className="auth-user-name">Hi, {user.name}</span>
            <button className="auth-logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <div className="auth-guest-box">
            <button className="auth-open-btn login" onClick={() => openModal(true)}>
              Login
            </button>
            <button className="auth-open-btn signup" onClick={() => openModal(false)}>
              Sign Up
            </button>
          </div>
        )}
      </div>

      {/* Modal overlay — only rendered when isOpen is true */}
      {isOpen && (
        <div className="auth-overlay" onClick={closeModal}>
          <div className="auth-container" onClick={(e) => e.stopPropagation()}>
            <button className="auth-close-btn" onClick={closeModal}>✕</button>

            <h2 className="auth-title">{isLogin ? "Sign In" : "Create Account"}</h2>

            <form onSubmit={handleSubmit} className="auth-form">
              {!isLogin && (
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    required
                  />
                </div>
              )}

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  required
                />
              </div>

              <button type="submit" className="auth-btn" disabled={status.loading}>
                {status.loading ? "Processing..." : isLogin ? "Sign In" : "Register"}
              </button>

              {status.success && <p className="auth-msg success">{status.success}</p>}
              {status.error && <p className="auth-msg error">{status.error}</p>}
            </form>

            <p className="auth-toggle-text">
              {isLogin ? "New to the platform?" : "Already have an account?"}{" "}
              <span
                className="auth-toggle-link"
                onClick={() => {
                  setIsLogin(!isLogin);
                  resetForm();
                }}
              >
                {isLogin ? "Register here" : "Sign In here"}
              </span>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Auth;