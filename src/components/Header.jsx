import { Link } from 'react-router-dom';
import '../styles/Header.scss';
import logo from '../assets/images/Logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo">
          <img src={logo} alt="ArtisanPro Bâtiment Logo" className="header__logo-image" />
        </Link>
        
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <Link to="/" className="header__nav-link">Accueil</Link>
            </li>
            <li className="header__nav-item">
              <Link to="/services" className="header__nav-link">Services</Link>
            </li>
            <li className="header__nav-item">
              <Link to="/realisations" className="header__nav-link">Réalisations</Link>
            </li>
            <li className="header__nav-item">
              <Link to="/contact" className="header__nav-link">Contact</Link>
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