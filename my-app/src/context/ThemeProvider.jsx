/**
 * ThemeProvider
 * --------------
 * React component that holds theme state and exposes it via context.
 */
import { useState } from 'react'
import { ThemeContext } from './ThemeContext.js'

export const ThemeProvider = ({ children }) => {
  // Local state inside the provider
  const [dark, setDark] = useState(false)
  const toggle = () => setDark((d) => !d)

  return (
    <ThemeContext.Provider value={{ dark, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}
