import { motion } from 'framer-motion'
import ContactSection from '../components/contact/ContactSection'

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      <ContactSection />
    </motion.div>
  )
}

export default Contact