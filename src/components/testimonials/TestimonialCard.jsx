import { motion } from 'framer-motion'
import { FiMessageSquare } from 'react-icons/fi'

const TestimonialCard = ({ testimonial }) => {
  return (
    <motion.div
      className="bg-white dark:bg-dark-800 p-6 rounded-lg shadow-md h-full relative"
      whileHover={{ y: -5 }}
    >
      {/* Quote icon */}
      <div className="absolute -top-4 -left-4 bg-primary-500 text-white p-3 rounded-full shadow-md">
        <FiMessageSquare className="text-xl" />
      </div>
      
      {/* Content */}
      <div className="pt-4">
        <p className="text-dark-600 dark:text-dark-300 mb-6 italic">
          "{testimonial.quote}"
        </p>
        
        {/* Person */}
        <div className="flex items-center">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
          <div>
            <h4 className="font-semibold">{testimonial.name}</h4>
            <p className="text-dark-500 dark:text-dark-400 text-sm">
              {testimonial.role}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default TestimonialCard