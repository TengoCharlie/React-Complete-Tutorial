/**
 * Counter.jsx
 * ------------
 * Demonstrates component state using the `useState` hook.
 *
 * State is like a component's private memory. Calling the updater
 * function triggers React to re-render with the new state value.
 */

import { useState } from 'react'

function Counter() {
  // `count` stores the current number of clicks
  // `setCount` updates `count` and causes a re-render
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Display how many times the button has been clicked */}
      <p>You clicked {count} times</p>
      {/* Update state on click */}
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </>
  )
}

export default Counter
