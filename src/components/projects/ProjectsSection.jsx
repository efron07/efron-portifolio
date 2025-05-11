import { useState } from 'react'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'

// Sample projects - replace with your own
const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured online shopping platform with cart, payment integration, and admin dashboard.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    demoUrl: 'https://example.com',
    codeUrl: 'https://github.com',
    category: 'fullstack',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative task management system with real-time updates and team workspace features.',
    image: 'https://images.pexels.com/photos/2521156/pexels-photo-2521156.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    tags: ['Vue.js', 'Laravel', 'MySQL', 'WebSockets'],
    demoUrl: 'https://example.com',
    codeUrl: 'https://github.com',
    category: 'fullstack',
  },
  {
    id: 3,
    title: 'Finance Dashboard',
    description: 'Interactive finance dashboard with charts, reports and AI-powered insights for business analytics.',
    image: 'https://images.pexels.com/photos/7567467/pexels-photo-7567467.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    tags: ['React', 'D3.js', 'Firebase', 'TensorFlow.js'],
    demoUrl: 'https://example.com',
    codeUrl: 'https://github.com',
    category: 'frontend',
  },
  {
    id: 4,
    title: 'Travel Blog Platform',
    description: 'Content management system for travel bloggers with media management and monetization features.',
    image: 'https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    tags: ['WordPress', 'PHP', 'MySQL', 'GraphQL'],
    demoUrl: 'https://example.com',
    codeUrl: 'https://github.com',
    category: 'backend',
  },
  {
    id: 5,
    title: 'Social Media App',
    description: 'Feature-rich social platform with real-time chat, post sharing, and user interactions.',
    image: 'https://images.pexels.com/photos/5053847/pexels-photo-5053847.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    tags: ['React Native', 'Firebase', 'Node.js', 'WebSockets'],
    demoUrl: 'https://example.com',
    codeUrl: 'https://github.com',
    category: 'mobile',
  },
  {
    id: 6,
    title: 'Smart Home Dashboard',
    description: 'IoT control panel for smart home devices with automation rules and usage analytics.',
    image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    tags: ['React', 'Node.js', 'MQTT', 'Chart.js'],
    demoUrl: 'https://example.com',
    codeUrl: 'https://github.com',
    category: 'fullstack',
  },
]

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'mobile', label: 'Mobile' },
]

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory)

  return (
    <section className="section">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">
            Explore my recent work and see what I've been building
          </p>
        </motion.div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-primary-500 text-white'
                  : 'bg-dark-100 dark:bg-dark-700 hover:bg-dark-200 dark:hover:bg-dark-600'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {category.label}
            </motion.button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection