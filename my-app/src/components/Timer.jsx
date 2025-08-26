/**
 * Timer.jsx
 * ----------
 * Shows how to perform side effects with `useEffect`.
 *
 * Side effects include tasks like setting up timers, fetching data,
 * or interacting with localStorage. Always clean up effects to avoid
 * memory leaks.
 */

import { useState, useEffect } from 'react'

function Timer() {
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    // Increment the timer every second
    const timer = setInterval(() => setSeconds(s => s + 1), 1000)
    // Cleanup: stop the timer when the component unmounts
    return () => clearInterval(timer)
  }, []) // Empty dependency array -> run once on mount

  return <p>Timer: {seconds}s</p>
}

export default Timer
