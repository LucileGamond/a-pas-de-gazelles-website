function TeamMemberCard({ name, image, imageAlt, age, qualities, description, goodMood }) {
  const initials = name
    .split(' ')
    .map((part) => part.charAt(0))
    .join('')

  return (
    <article className="team-card">
      <div className="team-card__portrait">
        {image ? (
          <img src={image} alt={imageAlt || `Portrait de ${name}`} />
        ) : (
          <span aria-hidden="true">{initials}</span>
        )}
      </div>

      <div className="team-card__body">
        <h3>{name}</h3>

        {age && <p className="team-card__age">{age} ans</p>}

        <ul className="team-card__qualities" aria-label={`Qualificatifs de ${name}`}>
          {qualities.map((quality) => (
            <li key={quality}>{quality}</li>
          ))}
        </ul>

        <p className="team-card__description">{description}</p>
        <p className="team-card__good-mood">
          <strong>Son atout bonne humeur :</strong> {goodMood}
        </p>
      </div>
    </article>
  )
}

export default TeamMemberCard
