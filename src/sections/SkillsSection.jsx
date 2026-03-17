import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

function SkillsSection({ skillGroups }) {
  return (
    <section className="section-shell" id="skills">
      <SectionHeading
        description="Une base technique claire, orientée React moderne, avec une culture utile pour collaborer au-delà du frontend."
        eyebrow="Compétences"
        title="Un socle technique immédiatement mobilisable en entreprise."
      />

      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <Reveal className="skill-card" delay={index * 70} key={group.title}>
            <div>
              <h3>{group.title}</h3>
              <p className="skill-description">{group.description}</p>
            </div>
            <div className="tag-list">
              {group.items.map((item) => (
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

export default SkillsSection
