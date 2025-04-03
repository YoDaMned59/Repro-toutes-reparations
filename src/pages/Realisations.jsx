import '../styles/Realisations.scss';
import cuisineImg from '../assets/images/renov-cuisine.webp';
import sdbImg from '../assets/images/renov salle de bain.jpg';
import extensionImg from '../assets/images/extension-maison.jpg';

const Realisations = () => {
  return (
    <div className="realisations-page">
      <section className="realisations-hero">
        <h1 className="realisations-hero__title">Nos Réalisations</h1>
        <p className="realisations-hero__description">
          Découvrez nos projets récents et laissez-vous inspirer par notre savoir-faire.
        </p>
      </section>

      <section className="realisations-grid">
        <div className="realisation-card">
          <div className="realisation-card__image">
            <img src={cuisineImg} alt="Rénovation de cuisine" />
          </div>
          <div className="realisation-card__content">
            <h3 className="realisation-card__title">Rénovation de cuisine</h3>
            <p className="realisation-card__description">
              Transformation complète d'une cuisine moderne avec des équipements haut de gamme et un design contemporain.
            </p>
          </div>
        </div>

        <div className="realisation-card">
          <div className="realisation-card__image">
            <img src={sdbImg} alt="Salle de bain moderne" />
          </div>
          <div className="realisation-card__content">
            <h3 className="realisation-card__title">Salle de bain moderne</h3>
            <p className="realisation-card__description">
              Rénovation complète d'une salle de bain avec des matériaux de qualité et un style épuré.
            </p>
          </div>
        </div>

        <div className="realisation-card">
          <div className="realisation-card__image">
            <img src={extensionImg} alt="Extension de maison" />
          </div>
          <div className="realisation-card__content">
            <h3 className="realisation-card__title">Extension de maison</h3>
            <p className="realisation-card__description">
              Réalisation d'une extension spacieuse et lumineuse, parfaitement intégrée à l'architecture existante.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Realisations; 