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

  const handleLogin = () => {
    setIsLoggedIn(true);
    setLoginModalIsOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  const handleRegisterSuccess = () => {
    setRegisterModalIsOpen(false);
    setLoginModalIsOpen(true);
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
          <Route path="/register" element={<RegisterModal />} />
          <Route path="/login" element={<LoginModal onLogin={handleLogin} />} />
          <Route path="/account" element={isLoggedIn ? <Account /> : <Navigate to="/login" />}>
            <Route path="predictions" element={<Predictions />} />
            <Route path="change-password" element={<ChangePassword />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>

      <RegisterModal 
        isOpen={registerModalIsOpen} 
        onRequestClose={() => setRegisterModalIsOpen(false)}
        onRegisterSuccess={handleRegisterSuccess}
      />

      <LoginModal 
        isOpen={loginModalIsOpen} 
        onRequestClose={() => setLoginModalIsOpen(false)} 
        onLogin={handleLogin}
        openRegisterModal={() => setRegisterModalIsOpen(true)} 
      />
    </BrowserRouter>
  );
};

export default App;
