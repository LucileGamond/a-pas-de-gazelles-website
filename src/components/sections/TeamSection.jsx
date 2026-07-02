import TeamMemberCard from '../TeamMemberCard.jsx'

const participants = [
  {
    name: 'Florence Richard',
    image: null,
    age: 37,
    qualities: ['1e participation'],
    description:
      'Une bonne humeur à toute épreuve, de la motivation et de l’énergie. Toujours prête à relever et à lancer des défis. Elle se fait souvent agresser par des poteaux quand elle se gare !',
    goodMood: 'chanter comme une casserole !',
  },
  {
    name: 'Johanna Mouchel',
    image: null,
    age: 37,
    qualities: ['1e participation'],
    description:
      'Passionnée de voyages et de photographie, discrète et un brin réservée. Un petit grain de folie et une bonne dose d’enthousiasme. Toujours prête à relever les challenges ! Zéro sens de l’orientation !',
    goodMood: 'faire des blagues pourries !',
  },
  {
    name: 'Lucile Gamond',
    image: null,
    age: 42,
    qualities: ['1e participation'],
    description:
      'Rêve de nature, d’aventures et de défis, mais vaguement trouillarde ! Sa motivation grimpe en flèche dès qu’on parle de pâtisserie.',
    goodMood: 'peut s’extasier devant un grain de sable.',
  },
]

function TeamSection() {
  return (
    <section id="equipe" className="page-section team-section">
      <div className="page-section__inner">
        <h2 className="page-section__title">L’équipe – Les Déserteuses du 95</h2>

        <p className="page-section__intro">
          L’équipe a été fondée par Johanna et Florence. Sensibles aux valeurs du trek,
          notamment la solidarité, l’écologie, la persévérance et le dépassement de soi,
          c’est sans hésiter que nous avons décidé de nous lancer dans cette aventure humaine.
        </p>

        <div className="section-card-grid">
          {participants.map((participant) => (
            <TeamMemberCard key={participant.name} {...participant} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamSection
