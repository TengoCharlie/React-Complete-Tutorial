/**
 * Organism: WeatherDisplay
 * ------------------------
 * Larger composition that receives weather data and renders UI.
 */
const WeatherDisplay = ({ weather }) => {
  // Guard against rendering when no data is available
  if (!weather) return null

  return (
    <div>
      <h3>{weather.name}</h3>
      <p>🌡 {weather.main.temp} °C</p>
      <p>☁ {weather.weather[0].description}</p>
    </div>
  )
}

export default WeatherDisplay
