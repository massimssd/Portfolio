import Reveal from './Reveal'

function SectionHeading({ eyebrow, title, description }) {
  return (
    <Reveal className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="section-title">{title}</h2>
      {description ? <p className="section-description">{description}</p> : null}
    </Reveal>
  )
}

export default SectionHeading
