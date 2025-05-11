import { motion } from 'framer-motion';

const SkillCard = ({ skill, index }) => {
  // Destructure skill to get name and icon (assuming you add 'icon' to your skills data)
  // We no longer need 'level'
  const { name, icon } = skill;

  return (
    <motion.div
      className="flex flex-col items-center justify-center p-6 h-40 w-50 rounded-lg bg-dark-100 dark:bg-dark-700 text-white shadow-lg" // Adjusted sizing, background, rounded corners, and centering
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{
        y: -8, // Lift effect on hover
        boxShadow: '0 15px 30px -5px rgba(0, 0, 0, 0.3), 0 8px 16px -8px rgba(0, 0, 0, 0.2)', // More pronounced shadow
        transition: { duration: 0.3 }, // Smooth hover transition
      }}
    // Optional: Add a subtle scale effect on hover
    // whileHover={{ scale: 1.05, y: -8, boxShadow: '...' }}
    >
      {/* Skill Icon */}
      <div className="text-4xl text-primary-400 mb-3"> {/* Adjust icon size and color */}
        {icon}
      </div>

      {/* Skill Name */}
      <h3 className="text-lg font-semibold text-center">{name}</h3> {/* Centered text */}

      {/* Removed: Progress bar and level percentage */}
    </motion.div>
  );
}

export default SkillCard;