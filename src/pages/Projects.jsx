import { motion } from 'framer-motion'
import ProjectsSection from '../components/projects/ProjectsSection'

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      <ProjectsSection />
    </motion.div>
  )
}

export default Projects