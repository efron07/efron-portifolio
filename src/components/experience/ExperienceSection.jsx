import { motion } from 'framer-motion'
import TimelineItem from './TimelineItem'

// Sample experience data - replace with your own
const experiences = [
  {
    id: 1,
    role: 'Senior Full-Stack Developer',
    company: 'Tech Innovations Inc.',
    duration: 'Jan 2022 - Present',
    description: 'Leading development of enterprise SaaS platforms, managing a team of 5 developers, and implementing CI/CD pipelines.',
    achievements: [
      'Reduced API response time by 40% through optimizing database queries',
      'Implemented microservices architecture improving system scalability',
      'Led migration from legacy system to modern React/Node.js stack'
    ],
    companyUrl: 'https://example.com'
  },
  {
    id: 2,
    role: 'Full-Stack Developer',
    company: 'WebSolutions Agency',
    duration: 'Mar 2019 - Dec 2021',
    description: 'Developed and maintained multiple client projects using Laravel, Vue.js, and MySQL. Collaborated with design team for UI/UX implementation.',
    achievements: [
      'Built e-commerce platform serving 10k+ daily users',
      'Implemented payment gateway integrations for multiple clients',
      'Created reusable component library reducing development time by 30%'
    ],
    companyUrl: 'https://example.com'
  },
  {
    id: 3,
    role: 'Frontend Developer',
    company: 'CreativeMinds Studio',
    duration: 'Jun 2017 - Feb 2019',
    description: 'Focused on creating responsive, pixel-perfect interfaces using React and CSS preprocessors. Worked closely with UX designers.',
    achievements: [
      'Developed responsive designs for 20+ client websites',
      'Integrated analytics tracking improving conversion rates by 15%',
      'Optimized frontend performance reducing load times by 35%'
    ],
    companyUrl: 'https://example.com'
  },
  {
    id: 4,
    role: 'Web Development Intern',
    company: 'StartupHub',
    duration: 'Jan 2017 - May 2017',
    description: 'Assisted senior developers with frontend tasks, bug fixes, and features for startup clients.',
    achievements: [
      'Implemented responsive design for 5 client websites',
      'Created HTML email templates with high deliverability rates',
      'Learned production workflows and version control systems'
    ],
    companyUrl: 'https://example.com'
  }
]

const ExperienceSection = () => {
  return (
    <section className="section bg-dark-50 dark:bg-dark-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            My professional journey and career highlights
          </p>
        </motion.div>
        
        {/* Timeline */}
        <div className="relative mt-12">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200 dark:bg-primary-900"></div>
          
          {/* Timeline items */}
          <div className="space-y-12 md:space-y-0">
            {experiences.map((experience, index) => (
              <TimelineItem 
                key={experience.id}
                experience={experience}
                index={index}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection