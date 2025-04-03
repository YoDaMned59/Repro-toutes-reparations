import '../styles/Realisations.scss';

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
            <img src="../assets/realisation-1.jpg" alt="Rénovation de cuisine" />
          </div>
          <div className="realisation-card__content">
            <h3 className="realisation-card__title">Rénovation de cuisine</h3>
            <p className="realisation-card__description">
              Transformation complète d'une cuisine avec des matériaux de qualité et une attention particulière aux détails.
            </p>
          </div>
        </div>

        <div className="realisation-card">
          <div className="realisation-card__image">
            <img src="../assets/realisation-2.jpg" alt="Salle de bain moderne" />
          </div>
          <div className="realisation-card__content">
            <h3 className="realisation-card__title">Salle de bain moderne</h3>
            <p className="realisation-card__description">
              Création d'une salle de bain contemporaine avec des finitions haut de gamme.
            </p>
          </div>
        </div>

        <div className="realisation-card">
          <div className="realisation-card__image">
            <img src="../assets/realisation-3.jpg" alt="Extension de maison" />
          </div>
          <div className="realisation-card__content">
            <h3 className="realisation-card__title">Extension de maison</h3>
            <p className="realisation-card__description">
              Construction d'une extension harmonieuse intégrée parfaitement à l'architecture existante.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Realisations; 