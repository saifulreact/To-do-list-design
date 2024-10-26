import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import "./Registration.css";

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    // Simple validation for demonstration purposes
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (name && email && password && confirmPassword) {
      // Navigate to default page after successful registration
      navigate("/");
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <section className="register-container">
      <div className="register-form">
        <h2 className="form-title">Create an Account</h2>
        <form onSubmit={handleRegister}>
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              <FaUser className="icon" />
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="form-input"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              <FaEnvelope className="icon" />
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-input"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              <FaLock className="icon" />
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-input"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword" className="form-label">
              <FaLock className="icon" />
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="form-input"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="register-button">
            Register
          </button>
        </form>
        <p className="login-prompt">
          Already have an account?{" "}
          <Link to="/login" className="login-link">
            Login
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Registration;
