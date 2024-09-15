import React, { useState } from "react";
import Modal from "react-modal";
import axios from "axios";
import "../modalStyles.css";

const RegisterModal = ({ isOpen, onRequestClose, onRegisterSuccess, openLoginModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [touchedEmail, setTouchedEmail] = useState(false);
  const [touchedPassword, setTouchedPassword] = useState(false);
  const [touchedConfirmPassword, setTouchedConfirmPassword] = useState(false);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleRegister = async (e) => {
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
    if (confirmPassword.trim() === "") {
      setError("Confirm Password field cannot be empty");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await axios.post("http://127.0.0.1:5000/register", { email, password });
      onRequestClose(); // Close modal on successful registration
      onRegisterSuccess(); // Trigger success callback
      setError(""); // Clear error after success
    } catch (err) {
      if (err.response && err.response.status === 400 && err.response.data.error === "Email is already registered") {
        setError("This email is already registered. Please use a different email.");
      } else {
        setError("Registration failed. Please try again.");
      }
    }
  };

  const handleLoginClick = () => {
    onRequestClose();
    openLoginModal();
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const resetForm = () => {
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setShowPassword(false);
    setShowConfirmPassword(false);
    setError("");
    setTouchedEmail(false);
    setTouchedPassword(false);
    setTouchedConfirmPassword(false);
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
        <h2>Register</h2>
        <button
          onClick={() => {
            resetForm();
            onRequestClose();
          }}
        >
          ×
        </button>
      </div>
      <form className="ModalForm" onSubmit={handleRegister}>
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
        <div className="PasswordWrapper">
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            onBlur={() => setTouchedConfirmPassword(true)}
            required
          />
          <span
            className="PasswordToggle"
            onClick={toggleConfirmPasswordVisibility}
          >
            {showConfirmPassword ? "👁️" : "👁️‍🗨️"}
          </span>
        </div>
        {touchedPassword && password.trim() === "" && (
          <p className="ErrorText">Password field cannot be empty</p>
        )}
        {touchedConfirmPassword && confirmPassword.trim() === "" && (
          <p className="ErrorText">Confirm Password field cannot be empty</p>
        )}
        {error && <p className="ErrorText">{error}</p>}
        <button type="submit">Register</button>
      </form>
      <p className="RegisterformPrompt">
        Already Registered? <button onClick={handleLoginClick} className="text-link">Go here and login</button>
      </p>
    </Modal>
  );
};

export default RegisterModal;
