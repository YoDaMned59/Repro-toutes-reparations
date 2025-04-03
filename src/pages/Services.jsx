import { Link } from 'react-router-dom';
import '../styles/Services.scss';

// Import des icônes
import homeIcon from '../assets/icons/home-icon.svg';
import brickIcon from '../assets/icons/brick-icon.svg';
import electricityIcon from '../assets/icons/electricity-icon.svg';
import plumbingIcon from '../assets/icons/plumbing-icon.svg';

// Import des images
import maconImage from '../assets/images/Maçon.jpg';
import electricienImage from '../assets/images/electricien.jpg';
import plombierImage from '../assets/images/plombier.jpg';
import avantApresImage from '../assets/images/avant-apres.jpg';

const servicesData = [
  {
    id: 1,
    icon: homeIcon,
    image: avantApresImage,
    title: "Rénovation Intérieure",
    description: "Transformation complète de vos espaces intérieurs avec une attention particulière aux détails et une finition soignée. Nos experts vous accompagnent dans tous vos projets de rénovation."
  },
  {
    id: 2,
    icon: brickIcon,
    image: maconImage,
    title: "Travaux de Maçonnerie",
    description: "Construction et réparation de murs, fondations et structures en pierre ou en brique. Notre équipe de maçons qualifiés garantit des travaux durables et de qualité."
  },
  {
    id: 3,
    icon: electricityIcon,
    image: electricienImage,
    title: "Électricité",
    description: "Installation et maintenance électrique selon les normes en vigueur. Nos électriciens certifiés assurent la sécurité et la conformité de vos installations."
  },
  {
    id: 4,
    icon: plumbingIcon,
    image: plombierImage,
    title: "Plomberie",
    description: "Installation et réparation de systèmes de plomberie pour un confort optimal. Intervention rapide et solutions durables pour tous vos problèmes de plomberie."
  }
];

const Services = () => {
  return (
    <div className="services-page">
      <section className="services-hero">
        <h1 className="services-title">Nos Services</h1>
        <p className="services-subtitle">Des solutions professionnelles pour tous vos projets</p>
      </section>
      
      <div className="services-container">
        {servicesData.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-card__image">
              <img src={service.image} alt={service.title} />
            </div>
            <div className="service-card__content">
              <div className="service-card__icon">
                <img src={service.icon} alt={`Icône ${service.title}`} />
              </div>
              <h2 className="service-card__title">{service.title}</h2>
              <p className="service-card__description">{service.description}</p>
              <Link to={`/services/${service.id}`} className="service-card__link">
                En savoir plus
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services; 