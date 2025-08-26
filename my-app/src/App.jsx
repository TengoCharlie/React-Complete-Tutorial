/**
 * Root App component
 * ------------------
 * Wraps the application with providers (like ThemeProvider)
 * and renders the main page.
 */
import { ThemeProvider } from './context/ThemeProvider.jsx'
import WeatherPage from './pages/WeatherPage.jsx'

function App() {
  return (
    // Context provider supplies theme values to the component tree
    <ThemeProvider>
      {/* Pages represent full screens in atomic design */}
      <WeatherPage />
    </ThemeProvider>
  )
}

export default App
