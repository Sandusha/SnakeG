import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants/index';
import Logo from '../assets/logo.png';
import navIcon from '../assets/navIcon.png';
import close from '../assets/close.png';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
import "../Navbar.css";

const Navbar = ({ isLoggedIn, onLogout, openLoginModal, openRegisterModal, loginModalIsOpen, registerModalIsOpen }) => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [accountDropdown, setAccountDropdown] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      setAccountDropdown(false);
    }
  }, [isLoggedIn]);

  const handleLogout = () => {
    onLogout();
    setAccountDropdown(false); // Close dropdown on logout
    navigate('/');
  };

  const handleLinkClick = () => {
    setAccountDropdown(false); // Close dropdown when a link is clicked
  };

  const toggleAccountDropdown = () => {
    setAccountDropdown(!accountDropdown);
  };

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img src={Logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer">
            Snake | <span className="sm:block">Genius</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10 px-6">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`text-white hover:text-secondary text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
          {!isLoggedIn ? (
            <>
              <li>
                <button onClick={openLoginModal} className="text-white hover:text-secondary text-[18px] font-medium">Login</button>
              </li>
              <li>
                <button onClick={openRegisterModal} className="text-white hover:text-secondary text-[18px] font-medium">Register</button>
              </li>
            </>
          ) : (
            <li className="relative">
              <button
                onClick={toggleAccountDropdown}
                className="text-white hover:text-secondary text-[18px] font-medium"
              >
                Account
              </button>
              {accountDropdown && (
                <ul className="absolute right-0 mt-2 w-48 bg-primary text-white shadow-lg rounded-lg">
                  <li>
                    <Link to="/account/predictions" onClick={handleLinkClick} className="block px-4 py-2 hover:bg-secondary">View Predictions</Link>
                  </li>
                  <li>
                    <Link to="/account/change-password" onClick={handleLinkClick} className="block px-4 py-2 hover:bg-secondary">Change Password</Link>
                  </li>
                  <li>
                    <button onClick={handleLogout} className="block px-4 py-2 w-full text-left hover:bg-secondary">Logout</button>
                  </li>
                </ul>
              )}
            </li>
          )}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : navIcon}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${active === link.title ? 'text-white' : 'text-secondary'} font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
              {!isLoggedIn ? (
                <>
                  <li>
                    <button onClick={openLoginModal} className="text-white hover:text-secondary text-[16px] font-medium">Login</button>
                  </li>
                  <li>
                    <button onClick={openRegisterModal} className="text-white hover:text-secondary text-[16px] font-medium">Register</button>
                  </li>
                </>
              ) : (
                <>
                  <li className="relative">
                    <button
                      onClick={toggleAccountDropdown}
                      className="text-white hover:text-secondary text-[16px] font-medium"
                    >
                      Account
                    </button>
                    {accountDropdown && (
                      <ul className="absolute right-0 mt-2 w-48 bg-primary text-white shadow-lg rounded-lg">
                        <li>
                          <Link to="/account/predictions" onClick={handleLinkClick} className="block px-4 py-2 hover:bg-secondary">View Predictions</Link>
                        </li>
                        <li>
                          <Link to="/account/change-password" onClick={handleLinkClick} className="block px-4 py-2 hover:bg-secondary">Change Password</Link>
                        </li>
                        <li>
                          <button onClick={handleLogout} className="block px-4 py-2 w-full text-left hover:bg-secondary">Logout</button>
                        </li>
                      </ul>
                    )}
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>

      <LoginModal isOpen={loginModalIsOpen} onRequestClose={() => openLoginModal(false)} />
      <RegisterModal isOpen={registerModalIsOpen} onRequestClose={() => openRegisterModal(false)} />
    </nav>
  );
};

export default Navbar;
