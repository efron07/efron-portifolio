import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi'
import { useTheme } from '../../context/ThemeContext'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const location = useLocation()

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [location])

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // NavLink styling
  const navLinkClasses = ({ isActive }) => 
    `py-2 px-4 font-medium transition-colors duration-300 hover:text-primary-500 ${
      isActive ? 'nav-link-active' : ''
    }`

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 dark:bg-dark-900/90 shadow-md backdrop-blur-md' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom flex items-center justify-between py-4">
        {/* Logo */}
        <NavLink to="/" className="font-bold text-2xl">
          <span className="text-primary-500">Efron </span>Damasco
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <NavLink to="/" className={navLinkClasses}>Home</NavLink>
          <NavLink to="/about" className={navLinkClasses}>About</NavLink>
          <NavLink to="/projects" className={navLinkClasses}>Projects</NavLink>
          <NavLink to="/contact" className={navLinkClasses}>Contact</NavLink>
          
          {/* Theme toggle */}
          <button 
            onClick={toggleTheme}
            className="ml-4 p-2 rounded-full hover:bg-dark-100 dark:hover:bg-dark-700 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <FiSun className="text-xl" />
            ) : (
              <FiMoon className="text-xl" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Icon */}
        <div className="flex items-center md:hidden">
          <button 
            onClick={toggleTheme}
            className="p-2 mr-2 rounded-full hover:bg-dark-100 dark:hover:bg-dark-700 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <FiSun className="text-xl" />
            ) : (
              <FiMoon className="text-xl" />
            )}
          </button>
          
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md hover:bg-dark-100 dark:hover:bg-dark-700 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-dark-800 overflow-hidden"
          >
            <div className="container-custom py-4 flex flex-col space-y-4">
              <NavLink to="/" className={navLinkClasses}>Home</NavLink>
              <NavLink to="/about" className={navLinkClasses}>About</NavLink>
              <NavLink to="/projects" className={navLinkClasses}>Projects</NavLink>
              <NavLink to="/contact" className={navLinkClasses}>Contact</NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar