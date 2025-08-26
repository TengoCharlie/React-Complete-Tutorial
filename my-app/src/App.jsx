/**
 * App.jsx
 * ----------
 * Root component showcasing core React concepts:
 *  - Passing data with props
 *  - Managing state with `useState`
 *  - Handling side effects with `useEffect`
 *  - A mini Todo project combining these ideas
 */

import Greeting from './components/Greeting.jsx'
import Counter from './components/Counter.jsx'
import Timer from './components/Timer.jsx'
import TodoApp from './components/TodoApp.jsx'

function App() {
  // JavaScript can be embedded directly inside JSX using curly braces
  const name = 'Harsh'

  return (
    <div>
      {/* Simple heading rendered by the component */}
      <h1>Hello React! 🚀</h1>
      {/* Demonstrating dynamic content with a JavaScript variable */}
      <h2>Hello {name}</h2>

      {/* ----- Props Example ----- */}
      <section>
        <h3>Props</h3>
        {/* Passing data to a child component like a read-only tiffin box */}
        <Greeting name="Students" />
      </section>

      {/* ----- useState Example ----- */}
      <section>
        <h3>useState</h3>
        <Counter />
      </section>

      {/* ----- useEffect Example ----- */}
      <section>
        <h3>useEffect</h3>
        <Timer />
      </section>

      {/* ----- Mini Project: Todo App ----- */}
      <section>
        <h3>Todo App</h3>
        <TodoApp />
      </section>
    </div>
  )
}

export default App
