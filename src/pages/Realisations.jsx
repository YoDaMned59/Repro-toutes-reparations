import React from 'react';
import '../styles/Realisations.scss';
import realisationsData from '../data/realisations.json';
import cuisineImage from '../assets/images/renov-cuisine.webp';
import sdbImage from '../assets/images/renov salle de bain.jpg';
import extensionImage from '../assets/images/extension-maison.jpg';

const Realisations = () => {
  const images = {
    '/src/assets/images/renov-cuisine.webp': cuisineImage,
    '/src/assets/images/renov salle de bain.jpg': sdbImage,
    '/src/assets/images/extension-maison.jpg': extensionImage
  };

  return (
    <div className="realisations-page">
      <div className="realisations-hero">
        <h1 className="realisations-hero__title">Nos Réalisations</h1>
        <p className="realisations-hero__description">
          Découvrez nos projets récents et laissez-vous inspirer par notre savoir-faire.
        </p>
      </div>
      <div className="realisations-grid">
        {realisationsData.realisations.map((realisation) => (
          <div key={realisation.id} className="realisation-card">
            <img src={images[realisation.image]} alt={realisation.alt} />
            <div className="realisation-card__content">
              <h2 className="realisation-card__title">{realisation.title}</h2>
              <p className="realisation-card__description">{realisation.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Realisations; 