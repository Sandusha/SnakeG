import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Identification from "./components/Identification";
import Explore from "./components/Explore";
import Services from "./components/Services";
import Treatments from "./components/Treatments";
import Steps from "./components/Steps";
import RegisterModal from "./components/RegisterModal";
import LoginModal from "./components/LoginModal";
import Account from "./components/Account";
import Predictions from "./components/Predictions";
import ChangePassword from "./components/ChangePassword";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
  const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);
  const [registerModalIsOpen, setRegisterModalIsOpen] = useState(false);
  const [notification, setNotification] = useState(null);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setLoginModalIsOpen(false);
    showNotification("Successfully logged in");
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  const handleRegisterSuccess = () => {
    setRegisterModalIsOpen(false);
    setLoginModalIsOpen(true);
    showNotification("Successfully registered. Please log in.");
  };

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 3000); // Hide notification after 3 seconds
  };

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Navbar 
          isLoggedIn={isLoggedIn}
          onLogout={handleLogout}
          openLoginModal={() => setLoginModalIsOpen(true)}
          openRegisterModal={() => setRegisterModalIsOpen(true)}
        />
        <Routes>
          <Route path="/" element={
            <div className="relative">
              <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center h-screen">
                <Hero />
              </div>
              <div>
                <Services />
                <Treatments />
                <Explore />
                <Steps />
                <Identification />
              </div>
            </div>
          } />
          <Route path="/account" element={isLoggedIn ? <Account /> : <Navigate to="/" />}>
            <Route path="predictions" element={<Predictions />} />
            <Route path="change-password" element={<ChangePassword />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>

      {/* Register Modal */}
      <RegisterModal 
        isOpen={registerModalIsOpen} 
        onRequestClose={() => setRegisterModalIsOpen(false)}
        onRegisterSuccess={handleRegisterSuccess}
        openLoginModal={() => setLoginModalIsOpen(true)}  // This handles switching from Register to Login
      />

      {/* Login Modal */}
      <LoginModal 
        isOpen={loginModalIsOpen} 
        onRequestClose={() => setLoginModalIsOpen(false)} 
        onLogin={handleLogin}
        openRegisterModal={() => setRegisterModalIsOpen(true)}  // This handles switching from Login to Register
      />

      {/* Notification */}
      {notification && (
        <div style={notificationStyle}>
          <p>{notification}</p>
        </div>
      )}
    </BrowserRouter>
  );
};

// Inline styles for the notification
const notificationStyle = {
  position: 'fixed',
  top: '20px',
  left: '40%',
  transform: 'translateX(-50%)',
  backgroundColor: 'rgba(255, 255, 255, 0.2)', // Semi-transparent white
  color: '#e0e0e0', // Light text color
  padding: '15px 25px',
  borderRadius: '8px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)', // Subtle shadow
  backdropFilter: 'blur(10px)', // Glass effect
  zIndex: 1000,
  fontSize: '16px',
  animation: 'fadeInOut 3s ease-out',
};

export default App;
