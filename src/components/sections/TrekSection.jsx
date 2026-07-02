import summitImage from '../../../RessourcesTrekinGazelles/EquipeDansDune.png'
import engagementImage from '../../../RessourcesTrekinGazelles/TREK24_1111_LEG1_CHA_03_0042.jpg'
import orientationImage from '../../../RessourcesTrekinGazelles/TREK24_1111_LEG1_NICO_05_0270.jpg'

const trekHighlights = [
  {
    title: 'Orientation',
    text: 'Carte topographique et boussole en main, l’équipe trace son cap et marche environ 20 km par jour.',
    image: orientationImage,
    imageAlt: 'Carte topographique, règle et boussole utilisées pour l’orientation',
  },
  {
    title: 'Dépassement de soi',
    text: 'Endurance, entraide et sang-froid : chacune avance avec les deux autres.',
    image: summitImage,
    imageAlt: 'Trois trekkeuses gravissant une dune dans le désert',
  },
  {
    title: 'Engagement',
    text: 'Chaque balise soutient une cause solidaire et le parcours contribue au ramassage des plastiques du désert.',
    image: engagementImage,
    imageAlt: 'Une participante ramassant une bouteille en plastique pendant le trek',
  },
]

function TrekSection() {
  return (
    <section id="trek" className="page-section page-section--tinted trek-section">
      <div className="page-section__inner">
        <h2 className="page-section__title">Le Trek’in Gazelles</h2>

        <p className="page-section__intro">
          Un défi d’orientation 100 % féminin au cœur du désert marocain. Par
          équipe de trois, les participantes avancent sans GPS ni téléphone
          pour rallier des balises par le chemin le plus court.
        </p>

        <div className="section-card-grid">
          {trekHighlights.map((highlight) => (
            <article className="content-card trek-highlight" key={highlight.title}>
              <img
                className="content-card__media"
                src={highlight.image}
                alt={highlight.imageAlt}
                loading="lazy"
              />
              <div className="content-card__body trek-highlight__content">
                <h3 className="content-card__title">{highlight.title}</h3>
                <p>{highlight.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="trek-section__footer">
          <a
            className="trek-section__link"
            href="https://www.trekingazelles.com/le-trek/concept/"
            target="_blank"
            rel="noreferrer"
          >
            Découvrir le concept officiel du Trek’in Gazelles
            <span aria-hidden="true"> ↗</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default TrekSection
