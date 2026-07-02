import associationLogo from '../../assets/logo-association.png'

function AssociationSection() {
  return (
    <section id="association" className="page-section association-section">
      <div className="page-section__inner">
        <h2 className="page-section__title">À pas de gazelles</h2>

        <div className="association-section__presentation">
          <div className="association-section__logo-frame">
            <img
              className="association-section__logo"
              src={associationLogo}
              alt="Logo de l’association À Pas de Gazelles représentant trois gazelles dans le désert"
            />
          </div>

          <div className="association-section__story">
            <p className="association-section__eyebrow">Notre association</p>
            <p>
              À Pas de Gazelles est née dans le Val-d’Oise pour donner un cadre
              au projet des Déserteuses du 95. Sa mission actuelle est de
              préparer et soutenir leur participation au Trek’in Gazelles 2027.
            </p>
            <p className="association-section__official-publication">
              La création de l’association a été publiée au Journal officiel.
              <a
                className="section-link"
                href="https://www.journal-officiel.gouv.fr/pages/associations-detail-annonce/?q.id=id:202600261880"
                target="_blank"
                rel="noreferrer"
              >
                Consulter l’annonce officielle
                <span aria-hidden="true"> ↗</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AssociationSection
