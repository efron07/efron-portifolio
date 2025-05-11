import { motion } from 'framer-motion'
import { FiDownload } from 'react-icons/fi'

const AboutSection = () => {
  return (
    <section className="section bg-dark-50 dark:bg-dark-800">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image/Avatar Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
            className="order-2 md:order-1"
          >
            <div className="relative">
              {/* Main image */}
              <div className="rounded-2xl overflow-hidden border-8 border-white dark:border-dark-700 shadow-xl relative z-10">
                <img
                  src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                  alt="Profile"
                  className="w-full h-auto"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-full h-full bg-primary-500 rounded-2xl transform -translate-x-4 -translate-y-4 -z-10"></div>
              
              {/* Experience badge */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
                className="absolute -right-10 -bottom-10 bg-white dark:bg-dark-700 rounded-full shadow-lg p-6 z-20"
              >
                <div className="text-center">
                  <span className="block text-4xl font-bold text-primary-500">3+</span>
                  <span className="text-sm text-dark-500 dark:text-dark-300">Years of<br />Experience</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
            className="order-1 md:order-2"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            
            <p className="text-dark-600 dark:text-dark-300 mb-6">
              I'm a passionate Full-Stack Developer with over 3 years of experience building web applications using modern technologies. I specialize in creating robust and scalable solutions that solve real-world problems.
            </p>
            
            <p className="text-dark-600 dark:text-dark-300 mb-8">
              My journey began with frontend development, creating responsive interfaces and interactive experiences. As I progressed, I expanded into backend development, database design, and system architecture. This broad perspective allows me to understand all aspects of application development and deliver complete solutions.
            </p>
            
            {/* Key info */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <h3 className="text-lg font-medium mb-2">Location</h3>
                <p className="text-dark-500 dark:text-dark-400">Dodoma, Tanzania</p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Availability</h3>
                <p className="text-dark-500 dark:text-dark-400">Full-time / Freelance</p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Experience</h3>
                <p className="text-dark-500 dark:text-dark-400">3+ Years</p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Languages</h3>
                <p className="text-dark-500 dark:text-dark-400">English, Swahili</p>
              </div>
            </div>
            
            {/* Resume download button */}
            <motion.a
              href="/resume.pdf"
              download
              className="btn-primary flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiDownload className="mr-2" />
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection