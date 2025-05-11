import { useState } from 'react'
import { motion } from 'framer-motion'
import SkillCard from './SkillCard'
import { FiCode, FiServer, FiDatabase, FiTool } from 'react-icons/fi'

const skills = {
  frontend: [
    { name: 'HTML/CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 90 },
    { name: 'Vue.js', level: 75 },
    { name: 'Tailwind CSS', level: 85 },
    { name: 'SASS/SCSS', level: 80 },
  ],
  backend: [
    { name: 'PHP', level: 85 },
    { name: 'Laravel', level: 90 },
    { name: 'Node.js', level: 80 },
    { name: 'Express', level: 75 },
    { name: 'Python', level: 70 },
    { name: 'Django', level: 65 },
  ],
  database: [
    { name: 'MySQL', level: 85 },
    { name: 'PostgreSQL', level: 80 },
    { name: 'MongoDB', level: 75 },
    { name: 'Redis', level: 70 },
    { name: 'Firebase', level: 80 },
  ],
  tools: [
    { name: 'Git', level: 90 },
    { name: 'Docker', level: 80 },
    { name: 'AWS', level: 75 },
    { name: 'CI/CD', level: 70 },
    { name: 'Testing', level: 80 },
  ],
}

const categories = [
  { id: 'frontend', label: 'Frontend', icon: <FiCode /> },
  { id: 'backend', label: 'Backend', icon: <FiServer /> },
  { id: 'database', label: 'Database', icon: <FiDatabase /> },
  { id: 'tools', label: 'Tools', icon: <FiTool /> },
]

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('frontend')

  return (
    <section className="section">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="section-title">My Skills</h2>
          <p className="section-subtitle">
            Here are the technologies and tools I've mastered over the years
          </p>
        </motion.div>

        {/* Category selection */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center px-6 py-3 rounded-full font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-primary-500 text-white shadow-md'
                  : 'bg-dark-100 dark:bg-dark-700 hover:bg-dark-200 dark:hover:bg-dark-600'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <span className="mr-2">{category.icon}</span>
              {category.label}
            </motion.button>
          ))}
        </div>

        {/* Skills display */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills[activeCategory].map((skill, index) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection