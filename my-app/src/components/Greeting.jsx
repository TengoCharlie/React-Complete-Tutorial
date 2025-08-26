/**
 * Greeting.jsx
 * -------------
 * Demonstrates how to pass data into a component using props.
 *
 * Think of props like a tiffin box 🍱: a parent component packs data
 * and hands it to the child component. The child can only read what it
 * receives; props are read-only.
 */

// `name` is received from the parent component via props
function Greeting({ name }) {
  return (
    // Display the name inside a heading
    <h2>Hello {name}</h2>
  )
}

export default Greeting
