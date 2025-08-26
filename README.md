# React-Complete-Tutorial

## Part 1: Introduction & Core Concepts

### 1. What is React.js?

React is like LEGO blocks 🧩. Instead of building a big messy house at once, you build it from small reusable bricks (components).

Why React over plain JS?

- Plain JS → write everything manually and update the DOM yourself.
- React → manages updates with a fast, efficient Virtual DOM.
- Angular → big & heavy, React → lightweight & flexible.
- Vue → simple, but React has a huge community & job market.

**Demo: Install a React project using Vite**

```bash
npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev
```

### 2. First Component

```jsx
// src/App.jsx
function App() {
  return <h1>Hello React! 🚀</h1>;
}
export default App;
```

This is like a LEGO block (component).

### 3. JSX Syntax & Virtual DOM

JSX = HTML + JavaScript inside a JS file.

```jsx
const name = "Harsh";
return <h2>Hello {name}</h2>; // curly braces = JS inside JSX
```

Virtual DOM = React’s “memory copy” of the webpage. It checks changes & updates only what’s needed.

The files in `my-app/src` contain detailed comments explaining these concepts.
