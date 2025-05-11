import { motion } from 'framer-motion'

const SkillCard = ({ skill, index }) => {
  return (
    <motion.div
      className="card p-6 h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ 
        y: -5,
        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      }}
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold">{skill.name}</h3>
        <span className="text-sm font-semibold text-primary-500">
          {skill.level}%
        </span>
      </div>
      
      <div className="w-full bg-dark-200 dark:bg-dark-700 rounded-full h-2.5 mb-2">
        <motion.div 
          className="bg-primary-500 h-2.5 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        />
      </div>
    </motion.div>
  )
}

export default SkillCard