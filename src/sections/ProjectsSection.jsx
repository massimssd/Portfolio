import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

function ProjectsSection({ projects }) {
  return (
    <section className="section-shell" id="projects">
      <SectionHeading
        description="Je présente ici des projets qui complètent mon profil avec une dimension full-stack et algorithmique."
        eyebrow="Projets"
        title="Je développe aussi des projets qui montrent ma polyvalence et ma rigueur technique."
      />

      <div className="projects-grid">
        {projects.map((project, index) => (
          <Reveal className="project-card" delay={index * 90} key={project.title}>
            <span className="project-badge">{project.type}</span>
            <div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>

            <ul className="feature-list">
              {project.highlights.map((highlight) => (
                <li className="feature-item" key={highlight}>
                  {highlight}
                </li>
              ))}
            </ul>

            <div className="tag-list project-stack">
              {project.stack.map((item) => (
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

export default ProjectsSection
