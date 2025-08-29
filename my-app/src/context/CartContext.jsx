import { createContext, useContext, useState } from 'react'

/**
 * CartContext
 * ------------
 * Using the Context API to expose cart state across the app.
 * Demonstrates global state without a third‑party library.
 *
 * Concepts: Context, useState, custom hooks.
 */
const CartContext = createContext()

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CartContext)

export function CartProvider({ children }) {
  // Local state inside provider becomes global to all descendants
  const [items, setItems] = useState([])

  // Add product to cart
  const addToCart = (product) => setItems((prev) => [...prev, product])

  // Remove product
  const removeFromCart = (id) => setItems((prev) => prev.filter((p) => p.id !== id))

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}
