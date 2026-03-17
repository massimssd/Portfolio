import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

function AboutSection({ about }) {
  return (
    <section className="section-shell" id="about">
      <SectionHeading
        description="Je mets en avant un profil frontend orienté produit, qualité logicielle et collaboration transverse."
        eyebrow="À propos"
        title="Je conçois des interfaces fiables, performantes et réellement utiles."
      />

      <div className="about-layout">
        <Reveal className="panel about-copy">
          <p className="about-text">{about.text}</p>
        </Reveal>

        <div className="about-points">
          {about.pillars.map((pillar, index) => (
            <Reveal
              className="about-point"
              delay={index * 70}
              key={pillar.title}
            >
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSection
