import { Link } from 'react-router-dom';
import servicesData from '../data/services.json';
import testimonialsData from '../data/testimonials.json';
import companyData from '../data/company.json';
import '../styles/Home.scss';

// Import des images
import maconImage from '../assets/images/Maçon.jpg';
import electricienImage from '../assets/images/electricien.jpg';
import plombierImage from '../assets/images/plombier.jpg';
import avantApresImage from '../assets/images/avant-apres.jpg';
import backgroundVideo from '../assets/videos/Home-project.mp4';

const serviceImages = {
  1: avantApresImage,
  2: maconImage,
  3: electricienImage,
  4: plombierImage
};

const Home = () => {
  const { services } = servicesData;
  const { testimonials } = testimonialsData;
  const { company } = companyData;

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero__video-container">
          <video autoPlay muted loop playsInline className="hero__video">
            <source src={backgroundVideo} type="video/mp4" />
          </video>
          <div className="hero__overlay"></div>
        </div>
        <div className="hero__content">
          <h1 className="hero__title">{company.name}</h1>
          <p className="hero__subtitle">{company.slogan}</p>
          <Link to="/contact" className="hero__cta">
            Demander un devis
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2 className="section-title">Nos Services</h2>
        <div className="services__grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-card__image">
                <img src={serviceImages[service.id]} alt={service.title} />
              </div>
              <div className="service-card__content">
                <div className="service-card__title-wrapper">
                  <span className="service-card__icon">{service.icon}</span>
                  <h3 className="service-card__title">{service.title}</h3>
                </div>
                <p className="service-card__description">{service.description}</p>
                <Link to={`/services#${service.id}`} className="service-card__link">
                  En savoir plus
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2 className="section-title">Témoignages</h2>
        <div className="testimonials__grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-card__rating">
                {'★'.repeat(testimonial.rating)}
              </div>
              <p className="testimonial-card__comment">{testimonial.comment}</p>
              <div className="testimonial-card__author">
                <span className="testimonial-card__name">{testimonial.name}</span>
                <span className="testimonial-card__project">{testimonial.project}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="cta__content">
          <h2 className="cta__title">Prêt à commencer votre projet ?</h2>
          <p className="cta__description">
            Contactez-nous dès aujourd'hui pour un devis gratuit et personnalisé.
          </p>
          <Link to="/contact" className="cta__button">
            Nous contacter
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home; 