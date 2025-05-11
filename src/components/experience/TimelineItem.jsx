import { motion } from 'framer-motion'
import { FiExternalLink } from 'react-icons/fi'

const TimelineItem = ({ experience, index, isLeft }) => {
  return (
    <div className={`relative flex items-center justify-between md:justify-normal mb-8 md:mb-0`}>
      {/* Content */}
      <motion.div
        className={`z-10 w-full md:w-5/12 md:mb-10 ${
          isLeft ? 'md:mr-auto' : 'md:ml-auto md:text-right'
        }`}
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="bg-white dark:bg-dark-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="flex justify-between items-start flex-wrap mb-2">
            <h3 className="text-xl font-semibold">{experience.role}</h3>
            <span className="text-sm font-medium bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 px-2 py-1 rounded mt-1 md:mt-0">
              {experience.duration}
            </span>
          </div>
          
          <a 
            href={experience.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-lg font-medium text-primary-500 hover:text-primary-600 mb-3"
          >
            {experience.company}
            <FiExternalLink className="ml-1 text-sm" />
          </a>
          
          <p className="text-dark-600 dark:text-dark-300 mb-4">
            {experience.description}
          </p>
          
          <ul className="space-y-2 text-sm">
            {experience.achievements.map((achievement, i) => (
              <li key={i} className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary-500 mt-1.5 mr-2 flex-shrink-0"></span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
      
      {/* Circle in the middle - visible only on md and up */}
      <motion.div
        className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-primary-500 border-4 border-white dark:border-dark-800 z-10"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true, amount: 0.2 }}
      />
    </div>
  )
}

export default TimelineItem