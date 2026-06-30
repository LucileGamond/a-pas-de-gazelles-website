import homeImage from '../../../RessourcesTrekinGazelles/ImageHome.png'

function HomeSection() {
  return (
    <section id="accueil" className="home-hero" aria-labelledby="home-title">
      <div className="home-hero__media">
        <img
          className="home-hero__image"
          src={homeImage}
          alt="Trek'in Gazelles Team, 100 % Gazelles et 100 % Aventure"
        />

        <div className="home-hero__content">
          <h1 id="home-title">
            Rejoignez notre aventure et aidez-nous à prendre le départ du Trek’in Gazelles 2027 !
          </h1>
        </div>
      </div>
    </section>
  )
}

export default HomeSection
