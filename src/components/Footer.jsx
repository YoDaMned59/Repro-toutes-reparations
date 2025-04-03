import { Link } from 'react-router-dom';
import companyData from '../data/company.json';
import '../styles/Footer.scss';

const Footer = () => {
  const { company } = companyData;

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__section">
          <h3 className="footer__title">ArtisanPro Bâtiment</h3>
          <p className="footer__description">{company.description}</p>
        </div>

        <div className="footer__section">
          <h3 className="footer__title">Services</h3>
          <ul className="footer__list">
            <li className="footer__item">
              <Link to="/services" className="footer__link">Rénovation Intérieure</Link>
            </li>
            <li className="footer__item">
              <Link to="/services" className="footer__link">Travaux de Maçonnerie</Link>
            </li>
            <li className="footer__item">
              <Link to="/services" className="footer__link">Électricité</Link>
            </li>
            <li className="footer__item">
              <Link to="/services" className="footer__link">Plomberie</Link>
            </li>
          </ul>
        </div>

        <div className="footer__section">
          <h3 className="footer__title">Contact</h3>
          <ul className="footer__list">
            <li className="footer__item">{company.contact.address}</li>
            <li className="footer__item">
              <a href={`tel:${company.contact.phone}`} className="footer__link">
                {company.contact.phone}
              </a>
            </li>
            <li className="footer__item">
              <a href={`mailto:${company.contact.email}`} className="footer__link">
                {company.contact.email}
              </a>
            </li>
            <li className="footer__item">{company.contact.hours}</li>
          </ul>
        </div>

        <div className="footer__section">
          <h3 className="footer__title">Suivez-nous</h3>
          <div className="footer__social">
            <a href={company.social.facebook} className="footer__social-link" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
            <a href={company.social.instagram} className="footer__social-link" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href={company.social.linkedin} className="footer__social-link" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__copyright">
          © {new Date().getFullYear()} ArtisanPro Bâtiment - Tous droits réservés
        </p>
      </div>
    </footer>
  );
};

export default Footer; 