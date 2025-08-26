/**
 * Page: WeatherPage
 * -----------------
 * Brings together molecules, organisms and global state.
 * Demonstrates local & global state, context, effects and prop drilling.
 */
import { useEffect, useState } from 'react'
import WeatherForm from '../components/molecules/WeatherForm.jsx'
import WeatherDisplay from '../components/organisms/WeatherDisplay.jsx'
import { useWeatherStore } from '../store/weatherStore.js'
import { useTheme } from '../context/useTheme.js'

const WeatherPage = () => {
  // Local state: the city typed by the user
  const [city, setCity] = useState('')

  // Global state & actions from Zustand
  const weather = useWeatherStore((s) => s.weather)
  const fetchWeather = useWeatherStore((s) => s.fetchWeather)

  // Context consumption: theme values shared without props
  const { dark, toggle } = useTheme()

  // Side effect: whenever city changes, fetch new weather
  useEffect(() => {
    if (city) fetchWeather(city)
  }, [city, fetchWeather])

  return (
    <div style={{ background: dark ? '#333' : '#eee', minHeight: '100vh', color: dark ? '#fff' : '#000', padding: '1rem' }}>
      <h2>Weather App</h2>
      {/* Prop drilling: onSearch passed to molecule then to atoms */}
      <WeatherForm onSearch={setCity} />
      {/* Data passed down to organism via props */}
      <WeatherDisplay weather={weather} />
      {/* Context-driven button */}
      <button onClick={toggle}>Toggle {dark ? 'Light' : 'Dark'} Mode</button>
    </div>
  )
}

export default WeatherPage
