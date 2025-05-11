import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi'

const socialLinks = [
  { name: 'GitHub', icon: <FiGithub />, url: 'https://github.com/efron07' },
  { name: 'LinkedIn', icon: <FiLinkedin />, url: 'https://www.linkedin.com/in/efron-damasco/' },
  { name: 'Twitter', icon: <FiTwitter />, url: 'https://twitter.com/' },
  { name: 'Email', icon: <FiMail />, url: 'mailto:efrondamasco@gmail.com' },
]

const Footer = () => {
  return (
    <footer className="bg-dark-100 dark:bg-dark-800 py-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo & Copyright */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <div className="font-bold text-xl mb-2">
              <span className="text-primary-500">Dev</span>Portfolio
            </div>
            <p className="text-dark-500 dark:text-dark-400 text-sm">
              © {new Date().getFullYear()} Brain technologies All Rights Reserved
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-500 hover:text-primary-500 dark:text-dark-300 dark:hover:text-primary-400 transition-colors"
                aria-label={social.name}
                initial={{ y: -5, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="text-2xl">
                  {social.icon}
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer