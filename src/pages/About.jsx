import { motion } from 'framer-motion'
import AboutSection from '../components/about/AboutSection'
import SkillsSection from '../components/skills/SkillsSection'
import ExperienceSection from '../components/experience/ExperienceSection'

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
    </motion.div>
  )
}

export default About