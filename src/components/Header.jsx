import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.scss';
import logo from '../assets/images/Logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo">
          <img src={logo} alt="ArtisanPro Bâtiment Logo" className="header__logo-image" />
        </Link>
        
        <button 
          className={`header__burger ${isMenuOpen ? 'open' : ''}`} 
          onClick={toggleMenu}
          aria-label="Menu principal"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`header__nav ${isMenuOpen ? 'open' : ''}`}>
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <Link to="/" className="header__nav-link" onClick={toggleMenu}>Accueil</Link>
            </li>
            <li className="header__nav-item">
              <Link to="/services" className="header__nav-link" onClick={toggleMenu}>Services</Link>
            </li>
            <li className="header__nav-item">
              <Link to="/realisations" className="header__nav-link" onClick={toggleMenu}>Réalisations</Link>
            </li>
            <li className="header__nav-item">
              <Link to="/contact" className="header__nav-link" onClick={toggleMenu}>Contact</Link>
            </li>
          </ul>
        </nav>

        <div className="header__contact">
          <a href="tel:0123456789" className="header__phone">
            01 23 45 67 89
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header; 