import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

function ExtrasSection({ languages, strengths, quickFacts }) {
  return (
    <section className="section-shell" id="extras">
      <SectionHeading
        description="Au-delà de la stack, je mets aussi en avant ma capacité d’adaptation, ma communication et mon sens du collectif."
        eyebrow="Langues & soft skills"
        title="Je complète la technique par des qualités utiles en équipe."
      />

      <div className="extras-layout">
        <Reveal className="extra-card">
          <div>
            <h3>Langues</h3>
            <p>Je peux évoluer dans un contexte professionnel francophone comme anglophone.</p>
          </div>
          <div className="language-list">
            {languages.map((language) => (
              <span className="language-chip" key={language}>
                {language}
              </span>
            ))}
          </div>
          <div className="quick-facts-grid">
            {quickFacts.map((fact) => (
              <div className="quick-fact" key={fact.label}>
                <span className="quick-fact-label">{fact.label}</span>
                <span className="quick-fact-value">{fact.value}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="extra-card" delay={90}>
          <div>
            <h3>Forces</h3>
            <p>Je m’appuie sur des qualités particulièrement utiles pour un poste frontend au sein d’une équipe produit.</p>
          </div>
          <div className="strength-list">
            {strengths.map((strength) => (
              <div className="strength-item" key={strength.title}>
                <strong>{strength.title}</strong>
                <span>{strength.description}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default ExtrasSection
