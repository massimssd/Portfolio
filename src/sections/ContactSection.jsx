import Icon from '../components/Icon'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

function ContactSection({ person, contactCards }) {
  return (
    <section className="section-shell" id="contact">
      <SectionHeading
        description="Je facilite la prise de contact avec un accès direct à mes coordonnées et à mes profils."
        eyebrow="Contact"
        title="Je suis disponible pour échanger autour d’une opportunité frontend en CDI."
      />

      <div className="contact-layout">
        <Reveal className="panel contact-panel">
          <div className="contact-copy">
            <span className="pill pill--accent">{person.availability}</span>
            <h3 className="section-title">Parlons de votre besoin.</h3>
            <p className="contact-text">
              Je recherche un poste en CDI où je pourrai contribuer à des
              produits web ou mobiles avec une forte exigence sur la qualité,
              l’expérience utilisateur, la performance et la collaboration.
            </p>

            <div className="contact-actions">
              <a className="button button--primary" href={person.emailLink}>
                Envoyer un mail
              </a>
              <a
                className="button button--ghost"
                href={person.githubUrl}
                rel="noreferrer"
                target="_blank"
              >
                <Icon name="github" />
                GitHub
              </a>
              <a
                className="button button--secondary"
                href={person.linkedinUrl}
                rel="noreferrer"
                target="_blank"
              >
                <Icon name="linkedin" />
                LinkedIn
              </a>
            </div>
          </div>
        </Reveal>

        <div className="contact-cards">
          {contactCards.map((card, index) => (
            <Reveal className="contact-card" delay={index * 70} key={card.title}>
              <div className="contact-card-header">
                <span className="contact-icon">
                  <Icon name={card.icon} />
                </span>
                <h3>{card.title}</h3>
              </div>
              <p>{card.text}</p>
              {card.href ? (
                <a
                  className="contact-link"
                  href={card.href}
                  rel={card.href.startsWith('http') ? 'noreferrer' : undefined}
                  target={card.href.startsWith('http') ? '_blank' : undefined}
                >
                  {card.value}
                  {card.href.startsWith('http') ? <Icon name="external" /> : null}
                </a>
              ) : (
                <span className="contact-link">{card.value}</span>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ContactSection
