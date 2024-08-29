import React, { useState } from "react";
import Modal from "react-modal";
import axios from "axios";
import "../modalStyles.css";

const RegisterModal = ({ isOpen, onRequestClose, onRegisterSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State for password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State for confirm password visibility
  const [error, setError] = useState("");

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      await axios.post("http://127.0.0.1:5000/register", { email, password });
      onRequestClose();
      onRegisterSuccess();
      setError("");
    } catch (err) {
      setError("Registration failed");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} className="Modal" overlayClassName="ReactModal__Overlay">
      <div className="ModalHeader">
        <h2>Register</h2>
        <button onClick={onRequestClose}>×</button>
      </div>
      <form className="ModalForm" onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <div className="PasswordWrapper">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span className="PasswordToggle" onClick={togglePasswordVisibility}>
            {showPassword ? "👁️" : "👁️‍🗨️"}
          </span>
        </div>
        <div className="PasswordWrapper">
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <span className="PasswordToggle" onClick={toggleConfirmPasswordVisibility}>
            {showConfirmPassword ? "👁️" : "👁️‍🗨️"}
          </span>
        </div>
        {error && <p className="ErrorText">{error}</p>}
        <button type="submit">Register</button>
      </form>
    </Modal>
  );
};

export default RegisterModal;
