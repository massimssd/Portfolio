import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import {
  contactCards,
  experienceHighlights,
  portfolioData,
} from './data/portfolioData'
import AboutSection from './sections/AboutSection'
import ContactSection from './sections/ContactSection'
import EducationSection from './sections/EducationSection'
import ExperienceSection from './sections/ExperienceSection'
import ExtrasSection from './sections/ExtrasSection'
import FooterSection from './sections/FooterSection'
import HeroSection from './sections/HeroSection'
import ProjectsSection from './sections/ProjectsSection'
import SkillsSection from './sections/SkillsSection'

function App() {
  const {
    about,
    education,
    experiences,
    heroMetrics,
    navigation,
    person,
    projects,
    skillGroups,
    strengths,
  } = portfolioData

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">
        Aller au contenu principal
      </a>
      <div className="background-grid" aria-hidden="true" />
      <Navbar navigation={navigation} person={person} />
      <main id="main-content">
        <HeroSection person={person} heroMetrics={heroMetrics} />
        <AboutSection about={about} />
        <ExperienceSection
          experiences={experiences}
          experienceHighlights={experienceHighlights}
        />
        <SkillsSection skillGroups={skillGroups} />
        <ProjectsSection projects={projects} />
        <EducationSection education={education} />
        <ExtrasSection
          languages={person.languages}
          strengths={strengths}
          quickFacts={person.quickFacts}
        />
        <ContactSection person={person} contactCards={contactCards} />
      </main>
      <FooterSection navigation={navigation} person={person} />
      <ScrollToTop />
    </div>
  )
}

export default App
