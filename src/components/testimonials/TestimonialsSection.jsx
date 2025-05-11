import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import TestimonialCard from './TestimonialCard'

// Sample testimonial data - replace with your own
const testimonials = [
  {
    id: 1,
    name: 'Emily Johnson',
    role: 'Product Manager at TechCorp',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&h=150',
    quote: 'Working with this developer was an absolute pleasure. Their technical expertise and ability to translate complex requirements into elegant solutions exceeded our expectations. They delivered our project on time and with exceptional quality.',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'CTO at StartupX',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=150',
    quote: 'I was impressed by their deep understanding of both frontend and backend technologies. They quickly integrated with our team and brought valuable insights that improved our product. Their code quality and documentation were outstanding.',
  },
  {
    id: 3,
    name: 'Sarah Martinez',
    role: 'Design Director at CreativeInc',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&h=150',
    quote: 'An exceptional developer who understands both technical requirements and design aesthetics. They translated our designs perfectly into responsive interfaces with smooth animations that our clients love. Highly recommended!',
  },
  {
    id: 4,
    name: 'David Wilson',
    role: 'Founder at EcommerceNow',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&h=150',
    quote: 'They rebuilt our e-commerce platform from the ground up, resulting in a 40% increase in conversion rates and significantly improved performance. Their expertise in both frontend and backend development made the whole process seamless.',
  },
]

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const maxIndex = testimonials.length - 1
  const containerRef = useRef(null)
  
  // Handle navigation
  const goToNext = () => {
    setCurrentIndex(prevIndex => 
      prevIndex >= maxIndex ? 0 : prevIndex + 1
    )
  }
  
  const goToPrev = () => {
    setCurrentIndex(prevIndex => 
      prevIndex <= 0 ? maxIndex : prevIndex - 1
    )
  }
  
  return (
    <section className="section relative overflow-hidden py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="section-title">Testimonials</h2>
          <p className="section-subtitle">
            What my clients and colleagues say about working with me
          </p>
        </motion.div>
        
        {/* Testimonials carousel for mobile */}
        <div className="relative mt-12 md:hidden">
          <div className="overflow-hidden" ref={containerRef}>
            <div 
              className="transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              <div className="flex">
                {testimonials.map(testimonial => (
                  <div 
                    key={testimonial.id} 
                    className="w-full flex-shrink-0 px-4"
                  >
                    <TestimonialCard testimonial={testimonial} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex 
                    ? 'bg-primary-500' 
                    : 'bg-dark-300 dark:bg-dark-600'
                }`}
              />
            ))}
          </div>
        </div>
        
        {/* Testimonials grid for desktop */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection