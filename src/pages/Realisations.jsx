import '../styles/Realisations.scss';
import realisationsData from '../data/realisations.json';

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
        {realisationsData.realisations.map((realisation) => (
          <div key={realisation.id} className="realisation-card">
            <div className="realisation-card__image">
              <img src={realisation.image} alt={realisation.alt} />
            </div>
            <div className="realisation-card__content">
              <h3 className="realisation-card__title">{realisation.title}</h3>
              <p className="realisation-card__description">
                {realisation.description}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Realisations; 