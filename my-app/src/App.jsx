/**
 * App.jsx
 * ----------
 * This file defines our first React component.
 * Components are like LEGO blocks: small, reusable pieces that build the UI.
 * Instead of manipulating the DOM manually, React renders this component
 * using a virtual DOM and updates only what's necessary.
 */

function App() {
  // JavaScript can be embedded directly inside JSX using curly braces
  const name = "Harsh"

  return (
    <div>
      {/* Simple heading rendered by the component */}
      <h1>Hello React! 🚀</h1>
      {/* Demonstrating dynamic content with a JavaScript variable */}
      <h2>Hello {name}</h2>
    </div>
  )
}

export default App
