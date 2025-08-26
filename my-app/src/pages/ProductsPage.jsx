import { useEffect, useState } from 'react'
import ProductList from '../components/organisms/ProductList'
import { useCart } from '../context/CartContext'

/**
 * Page: Products
 * --------------
 * Demonstrates routing, fetching data with useEffect and
 * passing props down the component tree.
 */
export default function ProductsPage() {
  const { addToCart } = useCart() // accessing context

  // Local component state
  const [products, setProducts] = useState([])

  // useEffect for side effects (API call)
  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=5')
      .then((res) => res.json())
      .then(setProducts)
  }, [])

  return (
    <div>
      <h2>Products</h2>
      <ProductList products={products} onAdd={addToCart} />
    </div>
  )
}
