import React, { useState } from "react";
import Modal from "react-modal";
import axios from "axios";
import "../modalStyles.css";

const LoginModal = ({ isOpen, onRequestClose, onLogin, openRegisterModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);  // New state for toggling password visibility
  const [error, setError] = useState("");

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }
    try {
      const response = await axios.post("http://127.0.0.1:5000/login", { email, password });
      localStorage.setItem('token', response.data.token);
      onLogin();
      setError("");
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  const handleRegisterClick = () => {
    onRequestClose();
    openRegisterModal();
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} className="Modal" overlayClassName="ReactModal__Overlay">
      <div className="ModalHeader">
        <h2>Login</h2>
        <button onClick={onRequestClose}>×</button>
      </div>
      <form className="ModalForm" onSubmit={handleLogin}>
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
            {showPassword ? "👁️" : "👁️‍🗨️"}  {/* Emoji for eye icon */}
          </span>
        </div>
        {error && <p className="ErrorText">{error}</p>}
        <button type="submit">Login</button>
      </form>
      <p className="RegisterPrompt">
        Not registered yet? <button onClick={handleRegisterClick} className="text-link">Go here and register</button>
      </p>
    </Modal>
  );
};

export default LoginModal;
