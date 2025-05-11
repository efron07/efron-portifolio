import { useState } from 'react';
import { motion } from 'framer-motion';
import SkillCard from './SkillCard';
import { TfiHtml5 } from "react-icons/tfi";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { FiCode, FiServer, FiDatabase, FiTool } from 'react-icons/fi'; // Example imports for icons
import { FaSass, FaPhp, FaLaravel, FaNodeJs, FaPython, FaDjango, FaMysql, FaPostgres, FaMdb, FaRedis, FaFirebase, FaGitAlt, FaDocker, FaAws, FaGithubActions, FaFigma, FaReact, FaVuejs } from 'react-icons/fa'; // Example imports for other icons
import { SiTestinglibrary } from 'react-icons/si'; // Example import

const skills = {
  frontend: [
    { name: 'HTML/CSS', level: 90, icon: <TfiHtml5 /> }, // Added icon
    { name: 'JavaScript', level: 85, icon: <IoLogoJavascript /> }, // Added icon (Using a generic JS icon)
    { name: 'React', level: 90, icon: <FaReact /> },    // Added icon
    { name: 'Vue.js', level: 75, icon: <FaVuejs /> },      // Added icon
    { name: 'Tailwind CSS', level: 85, icon: <SiTailwindcss /> }, // Added icon
    { name: 'SASS/SCSS', level: 80, icon: <FaSass /> },   // Added icon
    { name: 'Figma', level: 70, icon: <FaFigma /> },      // Added icon
  ],
  backend: [
    { name: 'PHP', level: 85, icon: <FaPhp /> },        // Added icon
    { name: 'Laravel', level: 90, icon: <FaLaravel /> },  // Added icon
    { name: 'Node.js', level: 80, icon: <FaNodeJs /> },  // Added icon
    { name: 'Express', level: 75, icon: <FiServer /> }, // Using a generic server icon
    { name: 'Python', level: 70, icon: <FaPython /> },  // Added icon
  ],
  database: [
    { name: 'MySQL', level: 85, icon: <FaMysql /> },     // Added icon
    { name: 'PostgreSQL', level: 80, icon: <FaPostgres /> }, // Added icon
    { name: 'MongoDB', level: 75, icon: <FaMdb /> },      // Added icon
    { name: 'Redis', level: 70, icon: <FaRedis /> },     // Added icon
    { name: 'Firebase', level: 80, icon: <FaFirebase /> },// Added icon
  ],
  tools: [
    { name: 'Git', level: 90, icon: <FaGitAlt /> },      // Added icon
    { name: 'Docker', level: 80, icon: <FaDocker /> },    // Added icon
    { name: 'AWS', level: 75, icon: <FaAws /> },        // Added icon
    { name: 'CI/CD', level: 70, icon: <FaGithubActions /> }, // Using a generic actions icon
    { name: 'Testing', level: 80, icon: <SiTestinglibrary /> }, // Added icon
  ],
}

const categories = [
  { id: 'frontend', label: 'Frontend', icon: <FiCode /> },
  { id: 'backend', label: 'Backend', icon: <FiServer /> },
  { id: 'database', label: 'Database', icon: <FiDatabase /> },
  { id: 'tools', label: 'Tools', icon: <FiTool /> },
];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

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
              className={`flex items-center px-6 py-3 rounded-full font-medium transition-all ${activeCategory === category.id
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
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"> {/* Grid layout maintained */}
          {/* The map remains the same, passing the skill object which now includes 'icon' */}
          {skills[activeCategory].map((skill, index) => (
            <SkillCard
              key={skill.name}
              skill={skill} // The updated skill object with icon is passed
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;