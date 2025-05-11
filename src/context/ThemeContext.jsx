import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  // Check local storage for theme or use system preference
  const getInitialTheme = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedTheme = window.localStorage.getItem('theme')
      if (storedTheme) {
        return storedTheme
      }

      // Check user preference
      const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      return userPrefersDark ? 'dark' : 'light'
    }
    return 'light' // Default theme
  }

  const [theme, setTheme] = useState(getInitialTheme)

  // Update localStorage and html class when theme changes
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  // Store theme in localStorage
  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

// Custom hook for using theme
export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}