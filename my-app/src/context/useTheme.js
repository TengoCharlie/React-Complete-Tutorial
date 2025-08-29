/**
 * Custom hook for consuming ThemeContext.
 * Separate file keeps fast-refresh friendly.
 */
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext.js'

export const useTheme = () => useContext(ThemeContext)
