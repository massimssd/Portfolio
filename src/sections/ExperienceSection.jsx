import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

function ExperienceSection({ experiences, experienceHighlights }) {
  return (
    <section className="section-shell" id="experience">
      <SectionHeading
        description="J’ai déjà travaillé sur des produits concrets, avec un focus clair sur l’exécution frontend et la fiabilisation."
        eyebrow="Expérience"
        title="Je développe des interfaces en pensant produit, qualité et maintenabilité."
      />

      <div className="experience-summary-card">
        {experienceHighlights.map((item, index) => (
          <Reveal className="summary-block" delay={index * 70} key={item.title}>
            <span className="summary-title">{item.title}</span>
            <p className="summary-description">{item.description}</p>
          </Reveal>
        ))}
      </div>

      <div className="experience-list">
        {experiences.map((experience, index) => (
          <Reveal
            as="article"
            className={`experience-card ${
              experience.featured ? 'experience-card--featured' : ''
            }`}
            delay={index * 90}
            key={`${experience.company}-${experience.period}`}
          >
            <div className="experience-topline">
              <span className="experience-period">{experience.period}</span>
              {experience.featured ? (
                <span className="pill pill--accent">Expérience principale</span>
              ) : (
                <span className="pill">{experience.contract}</span>
              )}
            </div>

            <h3 className="experience-company">{experience.company}</h3>
            <p className="experience-role">
              {experience.role} · {experience.contract}
            </p>
            <p className="experience-location">{experience.location}</p>
            <p className="experience-description">{experience.description}</p>

            <ul className="feature-list">
              {experience.achievements.map((achievement) => (
                <li className="feature-item" key={achievement}>
                  {achievement}
                </li>
              ))}
            </ul>

            <div className="tag-list">
              {experience.stack.map((item) => (
                <span className="tag" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default ExperienceSection
