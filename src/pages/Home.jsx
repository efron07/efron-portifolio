import { motion } from 'framer-motion'
import HeroSection from '../components/hero/HeroSection'
import AboutSection from '../components/about/AboutSection'
import SkillsSection from '../components/skills/SkillsSection'
import ProjectsSection from '../components/projects/ProjectsSection'
import ExperienceSection from '../components/experience/ExperienceSection'
import TestimonialsSection from '../components/testimonials/TestimonialsSection'
import ContactSection from '../components/contact/ContactSection'
import ServicesSection from '../components/services/ServicesSection'

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ServicesSection />
      <ExperienceSection />
      <TestimonialsSection />
      <ContactSection />
    </motion.div>
  )
}

export default Home