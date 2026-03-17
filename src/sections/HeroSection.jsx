import { useState } from 'react'
import avatarFallback from '../assets/avatar-placeholder.svg'
import Icon from '../components/Icon'
import Reveal from '../components/Reveal'

function HeroSection({ person, heroMetrics }) {
  const [imageSrc, setImageSrc] = useState(person.profilePhotoUrl)

  return (
    <section className="section-shell hero-section" id="hero">
      <div className="hero-layout">
        <Reveal className="hero-copy">
          <span className="eyebrow">Portfolio développeur frontend</span>
          <div>
            <h1 className="hero-name">{person.name}</h1>
            <p className="hero-title">{person.title}</p>
          </div>
          <p className="hero-description">{person.subtitle}</p>

          <div className="hero-actions">
            <a className="button button--primary" href="#projects">
              Voir mes projets
            </a>
            <a className="button button--secondary" href="#contact">
              Me contacter
            </a>
            <a
              className="button button--ghost"
              download="CV_MASSINISSA_MESSAOUDI.pdf"
              href="/CV_MASSINISSA_MESSAOUDI.pdf"
            >
              <Icon name="download" />
              Télécharger mon CV
            </a>
          </div>

          <div className="hero-secondary-actions">
            <a
              className="button button--ghost button--small"
              href={person.githubUrl}
              rel="noreferrer"
              target="_blank"
            >
              <Icon name="github" />
              GitHub
            </a>
            <a
              className="button button--ghost button--small"
              href={person.linkedinUrl}
              rel="noreferrer"
              target="_blank"
            >
              <Icon name="linkedin" />
              LinkedIn
            </a>
          </div>

          <div className="fact-list" aria-label="Informations clés">
            {person.heroFacts.map((fact) => (
              <span className="fact-chip" key={fact}>
                {fact}
              </span>
            ))}
          </div>

          <div className="hero-metrics">
            {heroMetrics.map((metric) => (
              <div className="metric-card" key={metric.title}>
                <span className="metric-title">{metric.title}</span>
                <p className="metric-description">{metric.description}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="hero-visual-card" delay={120}>
          <span className="status-badge">{person.availability}</span>
          <img
            alt={person.photoAlt}
            className="hero-avatar"
            height="880"
            onError={() => setImageSrc(avatarFallback)}
            src={imageSrc}
            width="720"
          />
          <div className="hero-visual-grid">
            {person.heroVisualItems.map((item) => (
              <div className="hero-visual-item" key={item.label}>
                <span className="hero-visual-label">{item.label}</span>
                <span className="hero-visual-value">{item.value}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default HeroSection
