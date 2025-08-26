/**
 * Molecule: WeatherForm
 * ---------------------
 * Combines Input and Button atoms.
 * Demonstrates local component state and returning data to parent.
 */
import { useState } from 'react'
import Input from '../atoms/Input.jsx'
import Button from '../atoms/Button.jsx'

const WeatherForm = ({ onSearch }) => {
  // Local state: tracks what's typed in the input field
  const [city, setCity] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Send value back to parent (prop drilling & event bubbling)
    onSearch(city)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />
      {/* Children prop used to pass button text */}
      <Button>Search</Button>
    </form>
  )
}

export default WeatherForm
