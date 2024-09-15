import React, { useState } from "react";
import Modal from "react-modal";
import axios from "axios";
import "../modalStyles.css";

const LoginModal = ({ isOpen, onRequestClose, onLogin, openRegisterModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [touchedEmail, setTouchedEmail] = useState(false);
  const [touchedPassword, setTouchedPassword] = useState(false);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    if (email.trim() === "") {
      setError("Email field cannot be empty");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }
    if (password.trim() === "") {
      setError("Password field cannot be empty");
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

  const resetForm = () => {
    setEmail("");
    setPassword("");
    setShowPassword(false);
    setError("");
    setTouchedEmail(false);
    setTouchedPassword(false);
  };

  return (
    <Modal 
      isOpen={isOpen} 
      onRequestClose={() => {
        resetForm();
        onRequestClose();
      }} 
      className="Modal" 
      overlayClassName="ReactModal__Overlay"
    >
      <div className="ModalHeader">
        <h2>Login</h2>
        <button onClick={() => {
          resetForm();
          onRequestClose();
        }}>×</button>
      </div>
      <form className="ModalForm" onSubmit={handleLogin}>
        <div className="InputWrapper">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => setTouchedEmail(true)}
          required
          className={touchedEmail && !validateEmail(email) && email.trim() !== "" ? "error" : ""}
          />
           {touchedEmail && email.trim() === "" && (
           <p className="ErrorText">Email field cannot be empty</p>
           )}
           {touchedEmail && email.trim() !== "" && !validateEmail(email) && (
           <p className="ErrorText">Please enter a valid email address</p>
           )}
         </div>
        <div className="PasswordWrapper">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={() => setTouchedPassword(true)}
            required
          />
          <span className="PasswordToggle" onClick={togglePasswordVisibility}>
            {showPassword ? "👁️" : "👁️‍🗨️"}
          </span>
        </div>
        {touchedPassword && password.trim() === "" && <p className="ErrorText">Password field cannot be empty</p>}
        {error && <p className="ErrorText">{error}</p>}
        <button type="submit">Login</button>
      </form>
      <p className="RegisterformPrompt">
        Not registered yet? <button onClick={handleRegisterClick} className="text-link">Go here and register</button>
      </p>
    </Modal>
  );
};

export default LoginModal;
