/**
 * Global weather store using Zustand.
 * ---------------------------
 * Zustand is a tiny state-management library.
 * Unlike React's useState (local) or Context (prop-less),
 * this store exposes global state and actions accessible from any component.
 */
import { create } from 'zustand'

export const useWeatherStore = create((set) => ({
  // Holds the latest weather data fetched from the API
  weather: null,
  /**
   * Async action that calls the OpenWeather API and updates the store.
   * @param {string} city - City name to fetch data for.
   */
  fetchWeather: async (city) => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_KEY&units=metric`
      )
      if (!res.ok) throw new Error('City not found')
      const data = await res.json()
      // Update global state with the new weather info
      set({ weather: data })
    } catch (err) {
      alert(err.message)
      // Clear previous weather data on error
      set({ weather: null })
    }
  },
}))
