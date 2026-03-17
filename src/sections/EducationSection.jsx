import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

function EducationSection({ education }) {
  return (
    <section className="section-shell" id="education">
      <SectionHeading
        description="Je m’appuie sur un parcours académique cohérent, mêlant informatique, web, science des données et esprit analytique."
        eyebrow="Formation"
        title="Je consolide mon profil frontend avec une base académique structurée."
      />

      <div className="education-grid">
        {education.map((item, index) => (
          <Reveal
            className="education-card"
            delay={index * 70}
            key={`${item.degree}-${item.period}`}
          >
            <span className="education-period">{item.period}</span>
            <h3>{item.degree}</h3>
            <p className="education-school">{item.school}</p>
            <p className="education-location">{item.location}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default EducationSection
