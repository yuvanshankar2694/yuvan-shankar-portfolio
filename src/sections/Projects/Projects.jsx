import styles from './Projects.module.css'
import viberr from '../../assets/MobileCare.jpg'
import freshBurger from '../../assets/Sun Wave Logo.jpg'
import hipsster from '../../assets/to-do-list.png'
import fitLift from '../../assets/zen-vibes.png'
import ProjectCard from '../../common/ProjectCard'

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Mobile Care"
          p="Mobile Repair App"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Sky Cast"
          p="Weather Application"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="TaskTracker"
          p="To-Do-List App"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Zen Vibes"
          p="Digital Yoga App"
        />
      </div>
    </section>
  )
}

export default Projects
