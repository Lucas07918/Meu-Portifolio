// src/components/Header.jsx

import { useEffect, useState } from 'react';
import './Header.css';
import { FiMenu } from 'react-icons/fi';
import { IoCloseOutline } from 'react-icons/io5';

const Header = () => {
  // -------------------------
  // State
  // -------------------------
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isHeaderActive, setIsHeaderActive] = useState(false);

  // -------------------------
  // Handlers
  // -------------------------
  const handleToggleNav = () => {
    setIsNavOpen((prev) => !prev);
    document.body.classList.toggle('nav-active');
  };

  const handleScroll = () => {
    setIsHeaderActive(window.scrollY > 100);
  };

  // -------------------------
  // Lifecycle
  // -------------------------
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // -------------------------
  // JSX
  // -------------------------
  return (
    <header className={`header ${isHeaderActive ? 'active' : ''}`} data-header>
      <div className="container">
        {/* Logo */}
        <a href="#home" className="logo">
          <img
            src="assets/img/Logo-Avery-white.png"
            alt="Lucas Silva logo"
            width="119"
            height="37"
          />
        </a>

        {/* Navbar */}
        <nav className={`navbar ${isNavOpen ? 'active' : ''}`} data-navbar>
          <div className="navbar-top">
            <a href="#home" className="logo">
              <img
                src="assets/img/Logo-Avery-white.png"
                alt="Lucas Silva logo"
                width="119"
                height="37"
              />
            </a>

            <button
              className="nav-close-btn"
              aria-label="Close menu"
              onClick={handleToggleNav}
            >
              <IoCloseOutline aria-hidden="true" />
            </button>
          </div>

          {/* Menu Links */}
          <ul className="navbar-list">
            {[
              { href: '#home', label: 'Home' },
              { href: '#projects', label: 'Projects' },
              { href: '#skills', label: 'Skills' },
              { href: '#cv', label: 'CV' },
              { href: '#contact', label: 'Contact' },
            ].map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="navbar-link hover-1"
                  onClick={handleToggleNav}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Open Menu Button */}
        <button
          className="nav-open-btn"
          aria-label="Open menu"
          onClick={handleToggleNav}
        >
          <FiMenu aria-hidden="true" />
        </button>
      </div>
    </header>
  );
};

export default Header;
