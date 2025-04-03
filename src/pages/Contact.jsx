import { useState } from 'react';
import companyData from '../data/company.json';
import '../styles/Contact.scss';
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const { company } = companyData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous pouvez ajouter la logique pour envoyer le formulaire
    console.log('Formulaire soumis:', formData);
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <h1 className="contact-hero__title">Contactez-nous</h1>
        <p className="contact-hero__description">
          Nous sommes à votre écoute pour répondre à toutes vos questions et discuter de votre projet.
        </p>
      </section>

      <div className="contact-container">
        <section className="contact-info">
          <h2 className="contact-info__title">Nos coordonnées</h2>
          <div className="contact-info__item">
            <h3>Adresse</h3>
            <p>{company.contact.address}</p>
          </div>
          <div className="contact-info__item">
            <h3>Téléphone</h3>
            <a href={`tel:${company.contact.phone}`}>{company.contact.phone}</a>
          </div>
          <div className="contact-info__item">
            <h3>Email</h3>
            <a href={`mailto:${company.contact.email}`}>{company.contact.email}</a>
          </div>
          <div className="contact-info__item">
            <h3>Horaires</h3>
            <p>{company.contact.hours}</p>
          </div>
          <div className="contact-info__social">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </section>

        <section className="contact-form">
          <h2 className="contact-form__title">Envoyez-nous un message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nom complet</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Téléphone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Sujet</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="submit-button">
              Envoyer le message
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Contact; 