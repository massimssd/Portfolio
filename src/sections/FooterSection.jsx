import Icon from '../components/Icon'

function FooterSection({ navigation, person }) {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      label: 'GitHub',
      href: person.githubUrl,
      icon: 'github',
    },
    {
      label: 'LinkedIn',
      href: person.linkedinUrl,
      icon: 'linkedin',
    },
    {
      label: 'Email',
      href: person.emailLink,
      icon: 'mail',
    },
  ]

  return (
    <footer className="footer">
      <div>
        <p className="footer-name">
          {person.name} · {currentYear}
        </p>
        <p>{person.availability}</p>
      </div>

      <div className="footer-links">
        {navigation.map((item) => (
          <a className="footer-link" href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
        {footerLinks.map((link) => (
          <a
            className="footer-link"
            href={link.href}
            key={link.label}
            rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
            target={link.href.startsWith('http') ? '_blank' : undefined}
          >
            <Icon name={link.icon} />
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  )
}

export default FooterSection
