/**
 * Entry point for the React application.
 * React keeps a lightweight representation of the DOM in memory (the virtual DOM).
 * When components update, React compares this virtual DOM with the real DOM and
 * efficiently updates only what changed.
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Attach the component tree to the real DOM element with id 'root'
createRoot(document.getElementById('root')).render(
  // StrictMode helps highlight potential problems in an application
  <StrictMode>
    {/* App is the root LEGO block of our interface */}
    <App />
  </StrictMode>,
)
